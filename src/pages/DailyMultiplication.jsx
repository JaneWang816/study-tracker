import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { generateQuestions, checkAnswer } from '../data/daily-practice/multiplication'
import { getTaiwanISOString } from '../utils/timezone'

export default function DailyMultiplication() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [startTime] = useState(Date.now())

  // 錯題複習相關 state
  const [phase, setPhase] = useState('main')       // 'main' | 'review'
  const [wrongQueue, setWrongQueue] = useState([])  // 待複習的題目物件
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewAnswer, setReviewAnswer] = useState('')
  const [reviewFeedback, setReviewFeedback] = useState(null) // { correct, displayAnswer }

  // 當前題目
  const currentQuestion = phase === 'main'
    ? questions[currentIndex]
    : wrongQueue[reviewIndex]

  // 載入題目
  useEffect(() => {
    setQuestions(generateQuestions())
  }, [])

  // ── 第一輪 ────────────────────────────────────────────────

  const handleAnswerChange = (e) => setCurrentAnswer(e.target.value)

  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) return

    const isCorrect = checkAnswer(currentQuestion, currentAnswer)
    const updatedAnswers = {
      ...userAnswers,
      [currentIndex]: {
        question: currentQuestion.question,
        userAnswer: currentAnswer,
        correctAnswer: currentQuestion.displayAnswer,
        isCorrect
      }
    }
    setUserAnswers(updatedAnswers)
    setCurrentAnswer('')

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      submitResults(updatedAnswers)
    }
  }

  const handleJumpTo = (index) => {
    if (currentAnswer.trim() && !userAnswers[currentIndex]) {
      const isCorrect = checkAnswer(currentQuestion, currentAnswer)
      setUserAnswers(prev => ({
        ...prev,
        [currentIndex]: {
          question: currentQuestion.question,
          userAnswer: currentAnswer,
          correctAnswer: currentQuestion.displayAnswer,
          isCorrect
        }
      }))
    }
    setCurrentAnswer('')
    setCurrentIndex(index)
  }

  const handleSubmit = () => {
    if (currentAnswer.trim() && !userAnswers[currentIndex]) {
      const isCorrect = checkAnswer(currentQuestion, currentAnswer)
      const updatedAnswers = {
        ...userAnswers,
        [currentIndex]: {
          question: currentQuestion.question,
          userAnswer: currentAnswer,
          correctAnswer: currentQuestion.displayAnswer,
          isCorrect
        }
      }
      setUserAnswers(updatedAnswers)
      if (Object.keys(updatedAnswers).length < questions.length) {
        if (!window.confirm('還有題目未作答，確定要交卷嗎？')) return
      }
      submitResults(updatedAnswers)
    } else {
      if (Object.keys(userAnswers).length < questions.length) {
        if (!window.confirm('還有題目未作答，確定要交卷嗎？')) return
      }
      submitResults(userAnswers)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmitAnswer()
  }

  // 提交結果：計算、存 DB、決定是否進入補考
  const submitResults = async (finalAnswers) => {
    const correctCount = Object.values(finalAnswers).filter(a => a.isCorrect).length
    const score = Math.round((correctCount / questions.length) * 100)
    const duration = Math.floor((Date.now() - startTime) / 1000)

    const detailedResults = questions.map((q, idx) => ({
      question: q.question,
      questionObj: q,
      userAnswer: finalAnswers[idx]?.userAnswer || '(未作答)',
      correctAnswer: q.displayAnswer,
      isCorrect: finalAnswers[idx]?.isCorrect || false
    }))

    setResults({ detailedResults, correctCount, totalQuestions: questions.length, score, duration })

    // DB 只記錄第一輪
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'multiplication',
        topic: 'speed-calc',
        total_questions: questions.length,
        correct_count: correctCount,
        score,
        duration,
        created_at: getTaiwanISOString()
      })
    } catch (error) {
      console.error('儲存記錄失敗:', error)
    }

    const wrong = questions.filter((_, idx) => !finalAnswers[idx]?.isCorrect)

    if (wrong.length === 0) {
      setIsSubmitted(true)
    } else {
      setWrongQueue(wrong)
      setReviewIndex(0)
      setReviewAnswer('')
      setReviewFeedback(null)
      setPhase('review')
    }
  }

  // ── 補考階段 ──────────────────────────────────────────────

  const handleReviewSubmit = () => {
    if (!reviewAnswer.trim()) return
    const isCorrect = checkAnswer(currentQuestion, reviewAnswer)
    setReviewFeedback({ correct: isCorrect, displayAnswer: currentQuestion.displayAnswer })
  }

  const handleReviewNext = () => {
    if (reviewFeedback?.correct) {
      const remaining = wrongQueue.filter((_, i) => i !== reviewIndex)
      if (remaining.length === 0) {
        setIsSubmitted(true)
      } else {
        setWrongQueue(remaining)
        setReviewIndex(reviewIndex >= remaining.length ? 0 : reviewIndex)
        setReviewAnswer('')
        setReviewFeedback(null)
      }
    } else {
      // 答錯：移到佇列末尾
      const current = wrongQueue[reviewIndex]
      const newQueue = wrongQueue.filter((_, i) => i !== reviewIndex)
      newQueue.push(current)
      setWrongQueue(newQueue)
      setReviewIndex(reviewIndex >= newQueue.length ? 0 : reviewIndex)
      setReviewAnswer('')
      setReviewFeedback(null)
    }
  }

  const handleReviewKeyPress = (e) => {
    if (e.key === 'Enter') {
      reviewFeedback ? handleReviewNext() : handleReviewSubmit()
    }
  }

  // Loading
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

  // ── 結果頁面 ──────────────────────────────────────────────

  if (isSubmitted && results) {
    const wrongQuestions = results.detailedResults.filter(r => !r.isCorrect)
    return (
      <div className="page-container">
        <div className="result-container">
          <div className="result-header">
            <div className="result-icon">
              {results.score >= 90 ? '🏆' : results.score >= 80 ? '🎉' : results.score >= 70 ? '👍' : '💪'}
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
              <div className="stat-value">{results.duration}s</div>
              <div className="stat-label">耗時</div>
            </div>
          </div>

          {wrongQuestions.length > 0 && (
            <div className="wrong-questions">
              <h3>第一輪答錯的題目</h3>
              {wrongQuestions.map((item, idx) => (
                <div key={idx} className="wrong-item">
                  <div className="wrong-question">{item.question}</div>
                  <div className="wrong-answers">
                    <span style={{ color: '#EF4444' }}>你的答案：{item.userAnswer}</span>
                    <span style={{ margin: '0 12px', color: '#9CA3AF' }}>→</span>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>正確答案：{item.correctAnswer}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions">
            <button onClick={() => window.location.reload()} className="btn btn-primary">
              再練一次
            </button>
            <button onClick={() => navigate('/')} className="btn btn-outline">
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
          <button onClick={() => navigate('/')} className="btn-back">← 返回</button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h2>⚡ 乘法速算</h2>
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

        <div className="question-container">
          <div className="question-number">複習題</div>
          {currentQuestion.type === 'fraction' && (
            <div style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '8px' }}>
              分數轉小數
            </div>
          )}
          <div className="question-text">{currentQuestion.question} = ?</div>

          <div className="answer-inputs">
            <input
              type="number"
              step="any"
              value={reviewAnswer}
              onChange={(e) => setReviewAnswer(e.target.value)}
              onKeyPress={handleReviewKeyPress}
              placeholder="請輸入答案"
              disabled={!!reviewFeedback}
              autoFocus
              style={{
                fontSize: '24px',
                padding: '16px',
                textAlign: 'center',
                border: '2px solid #E5E7EB',
                borderRadius: '12px',
                width: '200px'
              }}
            />
          </div>

          {!reviewFeedback ? (
            <button
              onClick={handleReviewSubmit}
              disabled={!reviewAnswer.trim()}
              className="btn btn-primary"
              style={{ marginTop: '24px', fontSize: '18px', padding: '16px 48px' }}
            >
              確認 (Enter)
            </button>
          ) : (
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <div style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: reviewFeedback.correct ? '#D1FAE5' : '#FEE2E2',
                borderRadius: '12px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                  {reviewFeedback.correct ? '✓' : '✗'}
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: reviewFeedback.correct ? '#10B981' : '#EF4444'
                }}>
                  {reviewFeedback.correct ? '答對了！' : '答錯了'}
                </div>
                {!reviewFeedback.correct && (
                  <div style={{ marginTop: '8px', fontSize: '14px', color: 'var(--text-dark)' }}>
                    正確答案：{reviewFeedback.displayAnswer}
                  </div>
                )}
              </div>
              <br />
              <button
                onClick={handleReviewNext}
                className="btn btn-primary"
                style={{ fontSize: '18px', padding: '16px 48px' }}
              >
                {reviewFeedback.correct ? '下一題' : '再試一次'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── 作答頁面 ──────────────────────────────────────────────

  return (
    <div className="page-container">
      <div className="practice-header">
        <button onClick={() => navigate('/')} className="btn-back">← 返回</button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>⚡ 乘法速算</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
            固定 20 題 · 已答 {Object.keys(userAnswers).length} 題
          </p>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          交卷
        </button>
      </div>

      <div className="practice-progress">
        <div
          className="practice-progress-fill"
          style={{ width: `${(Object.keys(userAnswers).length / questions.length) * 100}%` }}
        />
      </div>

      <div className="question-container">
        <div className="question-number">第 {currentIndex + 1} 題</div>
        {currentQuestion.type === 'fraction' && (
          <div style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '8px' }}>
            分數轉小數
          </div>
        )}
        <div className="question-text">{currentQuestion.question} = ?</div>

        <div className="answer-inputs">
          <input
            type="number"
            step="any"
            value={currentAnswer}
            onChange={handleAnswerChange}
            onKeyPress={handleKeyPress}
            placeholder="請輸入答案"
            autoFocus
            style={{
              fontSize: '24px',
              padding: '16px',
              textAlign: 'center',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              width: '200px'
            }}
          />
        </div>

        <button
          onClick={handleSubmitAnswer}
          disabled={!currentAnswer.trim()}
          className="btn btn-primary"
          style={{ marginTop: '24px', fontSize: '18px', padding: '16px 48px' }}
        >
          {currentIndex < questions.length - 1 ? '下一題 (Enter)' : '完成'}
        </button>
      </div>

      <div className="question-grid">
        {questions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleJumpTo(idx)}
            className={`question-number-btn ${idx === currentIndex ? 'current' : ''} ${userAnswers[idx] ? 'answered' : ''}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
