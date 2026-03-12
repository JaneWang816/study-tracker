import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { getTaiwanISOString } from '../utils/timezone'

const TOTAL = 20

const FETCH_PLAN = [
  { subject: 'social',  types: ['review'],                       count: 4, label: '社會',    icon: '🌏' },
  { subject: 'science', types: ['review'],                       count: 4, label: '自然',    icon: '🔬' },
  { subject: 'chinese', types: ['pronunciation', 'orthography'], count: 4, label: '字音字形', icon: '📝' },
  { subject: 'chinese', types: ['meaning'],                      count: 4, label: '詞義',    icon: '💬' },
  { subject: 'chinese', types: ['idiom'],                        count: 4, label: '成語',    icon: '📖' },
]

const shuffleArray = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffleOptions = (options) => {
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === 0 }))
  const shuffled = shuffleArray(indexed)
  return {
    options: shuffled.map(x => x.opt),
    correctIndex: shuffled.findIndex(x => x.isCorrect)
  }
}

export default function QuizReviewSession() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [startTime] = useState(Date.now())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const batches = await Promise.all(
          FETCH_PLAN.map(plan =>
            supabase
              .from('quiz_questions')
              .select('*')
              .eq('subject', plan.subject)
              .in('type', plan.types)
              .limit(plan.count * 5)
          )
        )

        // 檢查是否有分組題目不足
        const shortGroups = batches
          .map((res, i) => ({ ...FETCH_PLAN[i], count: res.data?.length ?? 0 }))
          .filter(g => g.count === 0)

        if (shortGroups.length > 0) {
          const missing = shortGroups.map(g => g.label).join('、')
          setError(`「${missing}」尚無題目，請先透過後台新增。`)
          return
        }

        const allGroups = batches.map((res, i) => {
          const plan = FETCH_PLAN[i]
          const shuffled = shuffleArray(res.data || []).slice(0, plan.count)
          return shuffled.map(q => {
            const opts = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
            const { options, correctIndex } = shuffleOptions(opts)
            return { ...q, shuffledOptions: options, correctIndex, groupLabel: plan.label, groupIcon: plan.icon }
          })
        })

        setQuestions(allGroups.flat())
      } catch (err) {
        console.error('題目載入失敗:', err)
        setError('題目載入失敗，請重試')
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [])

  const currentQuestion = questions[currentIndex]

  const handleSelect = (optionIndex) => {
    if (isSubmitted) return
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }))
  }

  const handleNext = () => { if (currentIndex < questions.length - 1) setCurrentIndex(i => i + 1) }
  const handlePrev = () => { if (currentIndex > 0) setCurrentIndex(i => i - 1) }
  const handleJumpTo = (i) => setCurrentIndex(i)

  const handleSubmit = async () => {
    let correctCount = 0
    const detailedResults = questions.map(q => {
      const selected = userAnswers[q.id] ?? -1
      const isCorrect = selected === q.correctIndex
      if (isCorrect) correctCount++
      return { question: q, selectedIndex: selected, isCorrect }
    })

    const duration = Math.floor((Date.now() - startTime) / 1000)
    const score = Math.round((correctCount / questions.length) * 100)

    setResults({ detailedResults, correctCount, totalQuestions: questions.length, score, duration })
    setIsSubmitted(true)

    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'quiz_review',
        topic: 'mixed_20',
        total_questions: questions.length,
        correct_count: correctCount,
        score,
        duration,
        created_at: getTaiwanISOString()
      })
    } catch (err) {
      console.error('儲存記錄失敗:', err)
    }
  }

  // ── Loading / Error ──────────────────────────────────
  if (loading) return <div className="loading">載入題目中...</div>

  if (error) return (
    <div className="page-container">
      <p className="error-msg">{error}</p>
      <button onClick={() => navigate('/daily/quiz')} className="btn">返回</button>
    </div>
  )

  // ── 結果頁面 ──────────────────────────────────────────
  if (isSubmitted && results) {
    const groupStats = FETCH_PLAN.map(plan => {
      const groupResults = results.detailedResults.filter(r => r.question.groupLabel === plan.label)
      const correct = groupResults.filter(r => r.isCorrect).length
      return { label: plan.label, icon: plan.icon, correct, total: plan.count }
    })

    return (
      <div className="page-container">
        <div className="result-container">
          <h1>複習完成！</h1>

          <div className="result-summary">
            <div className="result-score">
              <div className="score-circle" style={{
                background: results.score >= 80 ? '#00D2A0' : results.score >= 60 ? '#F59E0B' : '#EF4444'
              }}>
                {results.score}
              </div>
              <div className="score-label">分</div>
            </div>
            <div className="result-stats">
              <div className="stat-item">
                <div className="stat-label">答對題數</div>
                <div className="stat-value">{results.correctCount} / {results.totalQuestions}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">耗時</div>
                <div className="stat-value">
                  {Math.floor(results.duration / 60)} 分 {results.duration % 60} 秒
                </div>
              </div>
            </div>
          </div>

          <div className="group-stats">
            {groupStats.map((g, i) => (
              <div key={i} className="group-stat-item">
                <span>{g.icon} {g.label}</span>
                <span className={g.correct === g.total ? 'all-correct' : ''}>
                  {g.correct} / {g.total}
                </span>
              </div>
            ))}
          </div>

          {results.detailedResults.filter(r => !r.isCorrect).length > 0 && (
            <div className="wrong-questions">
              <h3>錯題複習</h3>
              {results.detailedResults.filter(r => !r.isCorrect).map((r, i) => (
                <div key={i} className="wrong-question-item">
                  <div className="question-meta">
                    <span className="tag">{r.question.groupIcon} {r.question.groupLabel}</span>
                  </div>
                  <div className="question-text">{r.question.question}</div>
                  <div className="answer-comparison">
                    <span className="user-answer wrong">
                      你的答案：{r.selectedIndex >= 0
                        ? r.question.shuffledOptions[r.selectedIndex]
                        : '未作答'}
                    </span>
                    <span className="correct-answer">
                      正確答案：{r.question.answer}
                    </span>
                  </div>
                  {r.question.explanation && (
                    <div className="explanation">💡 {r.question.explanation}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="result-actions">
            <button onClick={() => navigate('/daily/quiz')} className="btn-primary">再練一次</button>
            <button onClick={() => navigate('/')} className="btn">返回首頁</button>
          </div>
        </div>
      </div>
    )
  }

  // ── 作答頁面 ──────────────────────────────────────────
  const userSelected = userAnswers[currentQuestion.id] ?? -1

  return (
    <div className="page-container">
      <div className="practice-header">
        <div className="progress-info">
          <span className="current-question">第 {currentIndex + 1} 題</span>
          <span className="question-type-tag">
            {currentQuestion.groupIcon} {currentQuestion.groupLabel}
          </span>
          <span className="total-questions">共 {TOTAL} 題</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      <div className="question-container">
        <div className="question-text">{currentQuestion.question}</div>
        <div className="options-grid">
          {currentQuestion.shuffledOptions.map((opt, i) => (
            <button
              key={i}
              className={`option-btn ${userSelected === i ? 'selected' : ''}`}
              onClick={() => handleSelect(i)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="btn-nav">
          ← 上一題
        </button>
        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmit} className="btn-submit">交卷</button>
        ) : (
          <button onClick={handleNext} className="btn-nav">下一題 →</button>
        )}
      </div>

      <div className="question-grid">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => handleJumpTo(i)}
            title={FETCH_PLAN[Math.floor(i / 4)]?.label}
            className={`question-number ${i === currentIndex ? 'current' : ''} ${userAnswers[q.id] != null ? 'answered' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
