import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { getLevel, getCategory, getQuestions } from '../data/daily-practice/phonics'
import { speak } from '../utils/speech'
import { getTaiwanISOString } from '../utils/timezone'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function reshuffleOptions(question) {
  const correctText = question.options[question.answer]
  const newOptions = shuffle(question.options)
  return {
    ...question,
    options: newOptions,
    answer: newOptions.indexOf(correctText)
  }
}

export default function DailyPhonicsSession() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const { levelId, categoryId } = location.state || {}

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})   // { [idx]: selectedOptionIndex }
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [results, setResults] = useState(null)
  const [startTime] = useState(Date.now())

  // 補考相關
  const [phase, setPhase] = useState('main')       // 'main' | 'review'
  const [wrongQueue, setWrongQueue] = useState([])
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewAnswer, setReviewAnswer] = useState(null)
  const [reviewFeedback, setReviewFeedback] = useState(null) // 補考才有即時回饋

  const level = getLevel(levelId)
  const category = getCategory(levelId, categoryId)
  const currentQuestion = phase === 'main' ? questions[currentIndex] : wrongQueue[reviewIndex]

  useEffect(() => {
    if (!levelId || !categoryId) { navigate('/daily/phonics'); return }
    const questionsList = getQuestions(categoryId, 10)
    if (questionsList.length === 0) { alert('此分類暫無題目'); navigate('/daily/phonics'); return }
    setQuestions(questionsList)
  }, [levelId, categoryId, navigate])

  const playSound = () => {
    if (currentQuestion) speak(currentQuestion.word, 'en-US').catch(console.error)
  }

  // 自動播放（切題時）
  useEffect(() => {
    if (currentQuestion) {
      const timer = setTimeout(() => playSound(), 500)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, reviewIndex, phase])

  // ── 第一輪：選擇答案（只記錄，不顯示對錯）────────────────
  const handleAnswer = (optionIndex) => {
    if (isSubmitting) return
    setUserAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }))
  }

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(i => i - 1)
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(i => i + 1)
  }

  // 交卷：計算對錯，決定是否進入補考
  const handleSubmit = () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    const answeredCount = Object.keys(userAnswers).length
    if (answeredCount < questions.length) {
      if (!window.confirm(`還有 ${questions.length - answeredCount} 題未作答，確定交卷嗎？`)) {
        setIsSubmitting(false)
        return
      }
    }

    const detailedResults = questions.map((q, idx) => {
      const selected = userAnswers[idx] ?? -1
      const isCorrect = selected === q.answer
      return { question: q.word, options: q.options, userAnswer: selected, correctAnswer: q.answer, isCorrect }
    })

    const correctCount = detailedResults.filter(r => r.isCorrect).length
    const score = Math.round((correctCount / questions.length) * 100)
    const duration = Math.floor((Date.now() - startTime) / 1000)

    setResults({ detailedResults, correctCount, totalQuestions: questions.length, score, duration })

    // 存 DB
    saveResults(correctCount, score, duration)

    const wrong = questions.filter((_, idx) => {
      const selected = userAnswers[idx] ?? -1
      return selected !== questions[idx].answer
    })

    if (wrong.length === 0) {
      setIsSubmitted(true)
    } else {
      setWrongQueue(wrong.map(reshuffleOptions))
      setReviewIndex(0)
      setReviewAnswer(null)
      setReviewFeedback(null)
      setPhase('review')
    }
  }

  // ── DB 儲存 ───────────────────────────────────────────────
  const saveResults = async (correctCount, score, duration) => {
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'phonics',
        topic: categoryId,
        total_questions: questions.length,
        correct_count: correctCount,
        score,
        duration,
        created_at: getTaiwanISOString()
      })
    } catch (error) {
      console.error('儲存記錄失敗:', error)
    }
  }

  // ── 補考階段：選了立即回饋 ────────────────────────────────
  const handleReviewAnswer = (optionIndex) => {
    if (reviewFeedback) return
    const isCorrect = optionIndex === currentQuestion.answer
    setReviewAnswer(optionIndex)
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
        setReviewAnswer(null)
        setReviewFeedback(null)
      }
    } else {
      const reshuffled = reshuffleOptions(currentQuestion)
      const newQueue = wrongQueue.filter((_, i) => i !== reviewIndex)
      newQueue.push(reshuffled)
      setWrongQueue(newQueue)
      setReviewIndex(reviewIndex >= newQueue.length ? 0 : reviewIndex)
      setReviewAnswer(null)
      setReviewFeedback(null)
    }
  }

  // ── Loading ───────────────────────────────────────────────
  if (questions.length === 0) {
    return (
      <div className="page-container">
        <div className="loading-container">
          <div className="loading-spinner" />
          <p>載入中...</p>
        </div>
      </div>
    )
  }

  // ── 結果頁 ────────────────────────────────────────────────
  if (isSubmitted && results) {
    const wrongQuestions = results.detailedResults.filter(r => !r.isCorrect)
    return (
      <div className="page-container">
        <div className="result-container">
          <div className="result-header">
            <div className="result-icon">
              {results.score >= 80 ? '🎉' : results.score >= 60 ? '👍' : '💪'}
            </div>
            <h1>練習完成！</h1>
            <div className="result-score">{results.score} 分</div>
          </div>

          <div className="result-stats">
            <div className="stat-item">
              <div className="stat-value">{results.totalQuestions}</div>
              <div className="stat-label">題數</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#10B981' }}>{results.correctCount}</div>
              <div className="stat-label">答對</div>
            </div>
            <div className="stat-item">
              <div className="stat-value" style={{ color: '#EF4444' }}>
                {results.totalQuestions - results.correctCount}
              </div>
              <div className="stat-label">答錯</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                {Math.floor(results.duration / 60)}:{String(results.duration % 60).padStart(2, '0')}
              </div>
              <div className="stat-label">時間</div>
            </div>
          </div>

          {wrongQuestions.length > 0 && (
            <div className="wrong-questions">
              <h3>第一輪答錯的題目</h3>
              {wrongQuestions.map((item, idx) => (
                <div key={idx} className="wrong-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      onClick={() => speak(item.question, 'en-US')}
                      style={{
                        padding: '8px 16px',
                        background: '#10B981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      🔊 {item.question}
                    </button>
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '14px' }}>
                    <span style={{ color: '#EF4444' }}>
                      你選：{item.userAnswer >= 0 ? item.options[item.userAnswer] : '未作答'}
                    </span>
                    <span style={{ margin: '0 12px', color: '#9CA3AF' }}>→</span>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>
                      正確：{item.options[item.correctAnswer]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions">
            <button onClick={() => navigate('/daily/phonics')} className="btn btn-primary">
              返回選擇
            </button>
            <button onClick={() => navigate('/daily')} className="btn btn-outline">
              返回首頁
            </button>
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
          <button onClick={() => navigate('/daily/phonics')} className="btn-back">← 返回</button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h2>{category?.name}</h2>
            <p style={{ fontSize: '14px', color: '#D97706', marginTop: '4px', fontWeight: 600 }}>
              錯題複習｜還剩 {wrongQueue.length} 題
            </p>
          </div>
          <div style={{ width: '80px' }} />
        </div>

        <div className="practice-progress">
          <div className="practice-progress-fill" style={{ width: '100%', background: '#F59E0B' }} />
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

        <div className="phonics-practice-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <button
              onClick={playSound}
              style={{
                width: '120px', height: '120px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                border: 'none', color: 'white', fontSize: '48px', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)', transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              🔊
            </button>
            <p style={{ marginTop: '16px', fontSize: '16px', color: 'var(--text-light)' }}>
              點擊播放發音
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
            {currentQuestion.options.map((option, idx) => {
              let bgColor = 'white', borderColor = '#E5E7EB'
              if (reviewFeedback) {
                if (idx === currentQuestion.answer) { bgColor = '#D1FAE5'; borderColor = '#10B981' }
                else if (idx === reviewAnswer) { bgColor = '#FEE2E2'; borderColor = '#EF4444' }
              } else if (idx === reviewAnswer) {
                bgColor = '#EFF6FF'; borderColor = '#3B82F6'
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleReviewAnswer(idx)}
                  disabled={!!reviewFeedback}
                  style={{
                    background: bgColor, border: `3px solid ${borderColor}`,
                    borderRadius: '16px', padding: '24px', fontSize: '24px',
                    fontWeight: 600, cursor: reviewFeedback ? 'default' : 'pointer',
                    transition: 'all 0.2s', color: 'var(--text-dark)'
                  }}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {reviewFeedback && (
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <div style={{
                display: 'inline-block', padding: '16px 32px',
                background: reviewFeedback.correct ? '#D1FAE5' : '#FEE2E2',
                borderRadius: '12px', marginBottom: '16px'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                  {reviewFeedback.correct ? '✓' : '✗'}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: reviewFeedback.correct ? '#10B981' : '#EF4444' }}>
                  {reviewFeedback.correct ? '答對了！' : '答錯了'}
                </div>
                {!reviewFeedback.correct && (
                  <div style={{ marginTop: '8px', fontSize: '14px', color: 'var(--text-dark)' }}>
                    正確答案：{currentQuestion.options[currentQuestion.answer]}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                {!reviewFeedback.correct && (
                  <button onClick={playSound} className="btn btn-outline">🔊 再聽一次</button>
                )}
                <button onClick={handleReviewNext} className="btn btn-primary">
                  {reviewFeedback.correct ? '下一題' : '再試一次'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── 第一輪作答頁面 ────────────────────────────────────────
  const selectedAnswer = userAnswers[currentIndex] ?? -1

  return (
    <div className="page-container">
      <div className="practice-header">
        <button onClick={() => navigate('/daily/phonics')} className="btn-back">← 返回</button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>{category?.name}</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
            {currentIndex + 1} / {questions.length}
            　已選 {Object.keys(userAnswers).length} 題
          </p>
        </div>
        <div style={{ width: '80px' }} />
      </div>

      <div className="practice-progress">
        <div
          className="practice-progress-fill"
          style={{ width: `${(Object.keys(userAnswers).length / questions.length) * 100}%` }}
        />
      </div>

      <div className="phonics-practice-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            onClick={playSound}
            style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              border: 'none', color: 'white', fontSize: '48px', cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)', transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            🔊
          </button>
          <p style={{ marginTop: '16px', fontSize: '16px', color: 'var(--text-light)' }}>
            點擊播放發音
          </p>
        </div>

        {/* 選項：只顯示選中狀態，不顯示對錯 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = idx === selectedAnswer
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                style={{
                  background: isSelected ? '#EFF6FF' : 'white',
                  border: `3px solid ${isSelected ? '#3B82F6' : '#E5E7EB'}`,
                  borderRadius: '16px', padding: '24px', fontSize: '24px',
                  fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                  color: isSelected ? '#1D4ED8' : 'var(--text-dark)'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {option}
              </button>
            )
          })}
        </div>

        {/* 上一題 / 下一題 / 交卷 */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="btn-nav"
          >
            ← 上一題
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="btn-nav"
          >
            下一題 →
          </button>
          <div style={{ width: '1px', height: '32px', background: '#E5E7EB', margin: '0 4px' }} />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{ fontSize: '14px', padding: '10px 20px' }}
          >
            {isSubmitting ? '處理中…' : '交卷 ✓'}
          </button>
        </div>

        {/* 題號快速跳轉 */}
        <div className="question-grid" style={{ marginTop: '24px' }}>
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`question-number-btn ${idx === currentIndex ? 'current' : ''} ${userAnswers[idx] != null ? 'answered' : ''}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
