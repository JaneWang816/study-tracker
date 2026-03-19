import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { getTaiwanISOString } from '../utils/timezone'

const TOTAL = 25

const FETCH_PLAN = [
  { subject: 'social',  types: ['review'],                       count: 4, label: '社會',    icon: '🌏' },
  { subject: 'science', types: ['review'],                       count: 4, label: '自然',    icon: '🔬' },
  { subject: 'chinese', types: ['pronunciation', 'orthography'], count: 4, label: '字音字形', icon: '📝' },
  { subject: 'chinese', types: ['meaning'],                      count: 4, label: '詞義',    icon: '💬' },
  { subject: 'chinese', types: ['idiom'],                        count: 4, label: '成語',    icon: '📖' },
  { subject: 'chinese', types: ['culture'],                      count: 5, label: '國學常識', icon: '📜' },
]

const shuffleArray = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 洗牌選項，回傳新的 shuffledOptions 和 correctIndex
const shuffleOptions = (options) => {
  const indexed = options.map((opt, i) => ({ opt, isCorrect: i === 0 }))
  const shuffled = shuffleArray(indexed)
  return {
    options: shuffled.map(x => x.opt),
    correctIndex: shuffled.findIndex(x => x.isCorrect)
  }
}

// 對已有 shuffledOptions 的題目物件重新洗牌，回傳新物件
const reshuffleQuestion = (q) => {
  // shuffledOptions 裡 correctIndex 位置的那個就是正確答案
  const correctText = q.shuffledOptions[q.correctIndex]
  const newOptions = shuffleArray([...q.shuffledOptions])
  return {
    ...q,
    shuffledOptions: newOptions,
    correctIndex: newOptions.indexOf(correctText)
  }
}

// 加權抽樣
const weightedSample = (pool, statsMap, count) => {
  const weighted = pool.map(q => ({
    q,
    weight: 1 / ((statsMap[q.id]?.correct_count ?? 0) + 1)
  }))
  const selected = []
  const remaining = [...weighted]
  while (selected.length < count && remaining.length > 0) {
    const totalWeight = remaining.reduce((sum, item) => sum + item.weight, 0)
    let rand = Math.random() * totalWeight
    let idx = 0
    for (let i = 0; i < remaining.length; i++) {
      rand -= remaining[i].weight
      if (rand <= 0) { idx = i; break }
    }
    selected.push(remaining[idx].q)
    remaining.splice(idx, 1)
  }
  return selected
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

  // 錯題複習相關 state
  const [phase, setPhase] = useState('main')       // 'main' | 'review'
  const [wrongQueue, setWrongQueue] = useState([])  // 待複習題目（已重新洗牌）
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewSelected, setReviewSelected] = useState(-1)
  const [reviewFeedback, setReviewFeedback] = useState(null) // { correct }

  // 當前題目
  const currentQuestion = phase === 'main'
    ? questions[currentIndex]
    : wrongQueue[reviewIndex]

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
              .limit(plan.count * 10)
          )
        )

        const shortGroups = batches
          .map((res, i) => ({ ...FETCH_PLAN[i], count: res.data?.length ?? 0 }))
          .filter(g => g.count === 0)

        if (shortGroups.length > 0) {
          const missing = shortGroups.map(g => g.label).join('、')
          setError(`「${missing}」尚無題目，請先透過後台新增。`)
          return
        }

        const allQuestionIds = batches.flatMap(res => (res.data || []).map(q => q.id))
        const { data: statsData } = await supabase
          .from('user_quiz_stats')
          .select('question_id, correct_count')
          .eq('user_id', user.id)
          .in('question_id', allQuestionIds)

        const statsMap = {}
        ;(statsData || []).forEach(s => { statsMap[s.question_id] = s })

        const allGroups = batches.map((res, i) => {
          const plan = FETCH_PLAN[i]
          const pool = res.data || []
          const picked = weightedSample(pool, statsMap, plan.count)
          return picked.map(q => {
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

  // ── 第一輪 ────────────────────────────────────────────────

  const handleSelect = (optionIndex) => {
    if (phase !== 'main') return
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }))
  }

  const handleNext = () => { if (currentIndex < questions.length - 1) setCurrentIndex(i => i + 1) }
  const handlePrev = () => { if (currentIndex > 0) setCurrentIndex(i => i - 1) }
  const handleJumpTo = (i) => setCurrentIndex(i)

  // 交卷：計算結果，存 DB，決定是否進入補考
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

    // DB 只記錄第一輪
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'quiz',
        topic: 'mixed_20',
        total_questions: questions.length,
        correct_count: correctCount,
        score,
        duration,
        created_at: getTaiwanISOString()
      })

      const correctIds = detailedResults.filter(r => r.isCorrect).map(r => parseInt(r.question.id))
      const wrongIds   = detailedResults.filter(r => !r.isCorrect).map(r => parseInt(r.question.id))

      if (correctIds.length > 0) {
        const { error: e1 } = await supabase.rpc('increment_quiz_stats', {
          p_user_id: user.id, p_question_ids: correctIds, p_add_correct: true
        })
        if (e1) console.error('increment correct 失敗:', e1)
      }
      if (wrongIds.length > 0) {
        const { error: e2 } = await supabase.rpc('increment_quiz_stats', {
          p_user_id: user.id, p_question_ids: wrongIds, p_add_correct: false
        })
        if (e2) console.error('increment wrong 失敗:', e2)
      }
    } catch (err) {
      console.error('儲存記錄失敗:', err)
    }

    const wrong = detailedResults
      .filter(r => !r.isCorrect)
      .map(r => reshuffleQuestion(r.question))

    if (wrong.length === 0) {
      setIsSubmitted(true)
    } else {
      setWrongQueue(wrong)
      setReviewIndex(0)
      setReviewSelected(-1)
      setReviewFeedback(null)
      setPhase('review')
    }
  }

  // ── 補考階段 ──────────────────────────────────────────────

  const handleReviewSelect = (optionIndex) => {
    if (reviewFeedback) return
    setReviewSelected(optionIndex)
  }

  const handleReviewConfirm = () => {
    if (reviewSelected < 0) return
    const isCorrect = reviewSelected === currentQuestion.correctIndex
    setReviewFeedback({ correct: isCorrect })
  }

  const handleReviewNext = () => {
    if (reviewFeedback?.correct) {
      const remaining = wrongQueue.filter((_, i) => i !== reviewIndex)
      if (remaining.length === 0) {
        setIsSubmitted(true)
      } else {
        setWrongQueue(remaining)
        setReviewIndex(reviewIndex >= remaining.length ? 0 : reviewIndex)
        setReviewSelected(-1)
        setReviewFeedback(null)
      }
    } else {
      // 答錯：重新洗牌後移到佇列末尾
      const reshuffled = reshuffleQuestion(currentQuestion)
      const newQueue = wrongQueue.filter((_, i) => i !== reviewIndex)
      newQueue.push(reshuffled)
      setWrongQueue(newQueue)
      setReviewIndex(reviewIndex >= newQueue.length ? 0 : reviewIndex)
      setReviewSelected(-1)
      setReviewFeedback(null)
    }
  }

  // ── Loading / Error ───────────────────────────────────────

  if (loading) return <div className="loading">載入題目中...</div>

  if (error) return (
    <div className="page-container">
      <p className="error-msg">{error}</p>
      <button onClick={() => navigate('/daily/quiz')} className="btn">返回</button>
    </div>
  )

  // ── 結果頁面 ──────────────────────────────────────────────

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
              <h3>第一輪答錯的題目</h3>
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

  // ── 補考頁面 ──────────────────────────────────────────────

  if (phase === 'review' && currentQuestion) {
    return (
      <div className="page-container">
        <div className="practice-header">
          <div className="progress-info">
            <span className="current-question" style={{ color: '#D97706', fontWeight: 600 }}>
              錯題複習｜還剩 {wrongQueue.length} 題
            </span>
            <span className="question-type-tag">
              {currentQuestion.groupIcon} {currentQuestion.groupLabel}
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%', background: '#F59E0B' }} />
          </div>
        </div>

        <div style={{
          margin: '0 0 16px',
          padding: '10px 20px',
          background: '#FEF3C7',
          borderRadius: '10px',
          fontSize: '14px',
          color: '#92400E',
          textAlign: 'center',
          fontWeight: 500
        }}>
          ⚠️ 剛才答錯的題目來複習一下！答對才能繼續下一題
        </div>

        <div className="question-container">
          <div className="question-text">{currentQuestion.question}</div>
          <div className="options-grid">
            {currentQuestion.shuffledOptions.map((opt, i) => {
              const isSelected = reviewSelected === i
              const isCorrect = i === currentQuestion.correctIndex
              let className = 'option-btn'
              if (reviewFeedback) {
                if (isCorrect) className += ' correct-highlight'
                else if (isSelected) className += ' wrong-highlight'
              } else if (isSelected) {
                className += ' selected'
              }
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleReviewSelect(i)}
                  disabled={!!reviewFeedback}
                  style={{
                    background: reviewFeedback
                      ? isCorrect ? '#D1FAE5' : isSelected ? '#FEE2E2' : undefined
                      : isSelected ? '#FEF3C7' : undefined,
                    borderColor: reviewFeedback
                      ? isCorrect ? '#10B981' : isSelected ? '#EF4444' : undefined
                      : isSelected ? '#F59E0B' : undefined
                  }}
                >
                  {opt}
                </button>
              )
            })}
          </div>

          {!reviewFeedback ? (
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                onClick={handleReviewConfirm}
                disabled={reviewSelected < 0}
                className="btn-submit"
                style={{ background: '#F59E0B', borderColor: '#F59E0B' }}
              >
                確認答案
              </button>
            </div>
          ) : (
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <div style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: reviewFeedback.correct ? '#D1FAE5' : '#FEE2E2',
                borderRadius: '12px',
                marginBottom: '16px',
                fontWeight: 600,
                color: reviewFeedback.correct ? '#065F46' : '#991B1B'
              }}>
                {reviewFeedback.correct ? '✓ 答對了！' : `✗ 答錯了，正確答案：${currentQuestion.answer}`}
              </div>
              {currentQuestion.explanation && (
                <div style={{
                  margin: '0 auto 16px',
                  padding: '10px 16px',
                  background: '#FFFDE7',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#636E72',
                  maxWidth: '500px'
                }}>
                  💡 {currentQuestion.explanation}
                </div>
              )}
              <br />
              <button onClick={handleReviewNext} className="btn-submit">
                {reviewFeedback.correct ? '下一題' : '再試一次'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── 作答頁面（第一輪）────────────────────────────────────

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
