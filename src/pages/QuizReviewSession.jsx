// src/pages/QuizReviewSession.jsx
// 題庫複習 session - 依 mode 出 20 題，含錯題補考

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { getTaiwanISOString } from '../utils/timezone'

const TOTAL = 20

// 各模式的 fetch 計劃
const FETCH_PLANS = {
  social: [
    { subject: 'social', types: ['review'], count: 20, label: '社會', icon: '🌏' },
  ],
  science: [
    { subject: 'science', types: ['review'], count: 20, label: '自然', icon: '🔬' },
  ],
  phonics: [
    { subject: 'chinese', types: ['pronunciation', 'orthography'], count: 20, label: '字音字形', icon: '📝' },
  ],
  culture: [
    { subject: 'chinese', types: ['idiom'],   count: 8,  label: '成語',    icon: '📖' },
    { subject: 'chinese', types: ['culture'], count: 8,  label: '國學常識', icon: '📜' },
    { subject: 'chinese', types: ['meaning'], count: 4,  label: '詞義',    icon: '💬' },
  ],
}

const MODE_META = {
  social:  { label: '社會題庫', icon: '🌏', topic: 'social_20',  color: '#3B82F6' },
  science: { label: '自然題庫', icon: '🔬', topic: 'science_20', color: '#10B981' },
  phonics: { label: '字音字形', icon: '📝', topic: 'phonics_20', color: '#F59E0B' },
  culture: { label: '國學常識', icon: '📜', topic: 'culture_20', color: '#8B5CF6' },
}

// ── 工具函式 ──────────────────────────────────────────────────

const shuffleArray = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
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

const reshuffleQuestion = (q) => {
  const correctText = q.shuffledOptions[q.correctIndex]
  const newOptions = shuffleArray([...q.shuffledOptions])
  return {
    ...q,
    shuffledOptions: newOptions,
    correctIndex: newOptions.indexOf(correctText)
  }
}

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

// ── 主元件 ────────────────────────────────────────────────────

export default function QuizReviewSession() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const mode = location.state?.mode ?? 'social'
  const meta = MODE_META[mode] ?? MODE_META.social
  const fetchPlan = FETCH_PLANS[mode] ?? FETCH_PLANS.social

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [startTime] = useState(Date.now())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 錯題複習
  const [phase, setPhase] = useState('main')
  const [wrongQueue, setWrongQueue] = useState([])
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewSelected, setReviewSelected] = useState(-1)
  const [reviewFeedback, setReviewFeedback] = useState(null)

  const currentQuestion = phase === 'main'
    ? questions[currentIndex]
    : wrongQueue[reviewIndex]

  // ── 載入題目 ─────────────────────────────────────────────────

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const batches = await Promise.all(
          fetchPlan.map(plan =>
            supabase
              .from('quiz_questions')
              .select('*')
              .eq('subject', plan.subject)
              .in('type', plan.types)
              .limit(plan.count * 10)
          )
        )

        const emptyGroups = batches
          .map((res, i) => ({ ...fetchPlan[i], count: res.data?.length ?? 0 }))
          .filter(g => g.count === 0)

        if (emptyGroups.length > 0) {
          const missing = emptyGroups.map(g => g.label).join('、')
          setError(`「${missing}」尚無題目，請先透過後台新增。`)
          return
        }

        const allIds = batches.flatMap(res => (res.data || []).map(q => q.id))
        const { data: statsData } = await supabase
          .from('user_quiz_stats')
          .select('question_id, correct_count')
          .eq('user_id', user.id)
          .in('question_id', allIds)

        const statsMap = {}
        ;(statsData || []).forEach(s => { statsMap[s.question_id] = s })

        const picked = batches.flatMap((res, i) => {
          const plan = fetchPlan[i]
          const pool = res.data || []
          return weightedSample(pool, statsMap, plan.count).map(q => {
            const opts = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
            const { options, correctIndex } = shuffleOptions(opts)
            return { ...q, shuffledOptions: options, correctIndex, groupLabel: plan.label, groupIcon: plan.icon }
          })
        })

        setQuestions(shuffleArray(picked))
      } catch (err) {
        console.error('題目載入失敗:', err)
        setError('題目載入失敗，請重試')
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [])

  // ── 第一輪 ────────────────────────────────────────────────────

  const handleSelect = (i) => {
    if (phase !== 'main') return
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: i }))
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

    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'quiz',
        topic: meta.topic,
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

  // ── 補考階段 ──────────────────────────────────────────────────

  const handleReviewSelect = (i) => {
    if (reviewFeedback) return
    setReviewSelected(i)
  }

  const handleReviewConfirm = () => {
    if (reviewSelected < 0) return
    const isCorrect = reviewSelected === currentQuestion.correctIndex
    setReviewFeedback({ correct: isCorrect })
  }

  const handleReviewNext = () => {
    if (reviewFeedback?.correct) {
      const next = wrongQueue.filter((_, i) => i !== reviewIndex)
      if (next.length === 0) {
        setPhase('done')
        setIsSubmitted(true)
      } else {
        setWrongQueue(next)
        setReviewIndex(0)
        setReviewSelected(-1)
        setReviewFeedback(null)
      }
    } else {
      setWrongQueue(prev => {
        const updated = [...prev]
        updated[reviewIndex] = reshuffleQuestion(updated[reviewIndex])
        return updated
      })
      setReviewSelected(-1)
      setReviewFeedback(null)
    }
  }

  // ── 結果頁 ────────────────────────────────────────────────────

  if (isSubmitted && results) {
    const groupStats = fetchPlan.map(plan => {
      const group = results.detailedResults.filter(r => r.question.groupLabel === plan.label)
      return {
        icon: plan.icon,
        label: plan.label,
        correct: group.filter(r => r.isCorrect).length,
        total: group.length
      }
    })

    return (
      <div className="page-container">
        <div className="result-container">
          <div className="result-header">
            <h2>
              {meta.icon} {meta.label}
            </h2>
            <div className="score-circle">
              <span className="score-number">{results.score}</span>
              <span className="score-label">分</span>
            </div>
            <div className="result-stats">
              <div className="stat-item">
                <span className="stat-value">{results.correctCount}</span>
                <span className="stat-label">答對</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{results.totalQuestions - results.correctCount}</span>
                <span className="stat-label">答錯</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {Math.floor(results.duration / 60)}:{String(results.duration % 60).padStart(2, '0')}
                </span>
                <span className="stat-label">時間</span>
              </div>
            </div>
          </div>

          {fetchPlan.length > 1 && (
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
          )}

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
            <button onClick={() => navigate('/daily')} className="btn">返回每日練習</button>
          </div>
        </div>
      </div>
    )
  }

  // ── 載入 / 錯誤 ───────────────────────────────────────────────

  if (loading) {
    return (
      <div className="page-container">
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
          載入題目中…
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page-container">
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <p style={{ color: '#EF4444', marginBottom: '24px' }}>{error}</p>
          <button onClick={() => navigate('/daily/quiz')} className="btn-primary">返回</button>
        </div>
      </div>
    )
  }

  if (!currentQuestion) return null

  // ── 補考頁面 ──────────────────────────────────────────────────

  if (phase === 'review') {
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

  // ── 作答頁面（第一輪）────────────────────────────────────────

  const userSelected = userAnswers[currentQuestion.id] ?? -1

  return (
    <div className="page-container">
      <div className="practice-header">
        <div className="progress-info">
          <span className="current-question">第 {currentIndex + 1} 題</span>
          <span className="question-type-tag" style={{ color: meta.color }}>
            {meta.icon} {meta.label}
          </span>
          <span className="total-questions">共 {TOTAL} 題</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / TOTAL) * 100}%`, background: meta.color }}
          />
        </div>
      </div>

      <div className="question-container">
        {questions[currentIndex]?.groupLabel && fetchPlan.length > 1 && (
          <div style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '8px' }}>
            {questions[currentIndex].groupIcon} {questions[currentIndex].groupLabel}
          </div>
        )}
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
            className={`question-number ${i === currentIndex ? 'current' : ''} ${userAnswers[q.id] != null ? 'answered' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
