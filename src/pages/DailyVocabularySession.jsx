import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { generateQuestions, checkAnswer } from '../data/daily-practice/vocabulary'

// Fisher-Yates shuffle（回傳新陣列）
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 打亂選項並同步更新 answer index，回傳新題目物件
function reshuffleOptions(question) {
  const correctText = question.options[question.answer]
  const newOptions = shuffle(question.options)
  return {
    ...question,
    options: newOptions,
    answer: newOptions.indexOf(correctText)
  }
}

export default function DailyVocabularySession() {
  const navigate = useNavigate()
  const { deckId } = useParams()
  const { user } = useAuth()

  const [deck, setDeck] = useState(null)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [results, setResults] = useState(null)
  const [startTime] = useState(Date.now())

  // 錯題複習相關 state
  const [phase, setPhase] = useState('main')       // 'main' | 'review'
  const [wrongQueue, setWrongQueue] = useState([])  // 待複習題目（已洗牌選項）
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewSelected, setReviewSelected] = useState(null)
  const [reviewFeedback, setReviewFeedback] = useState(null) // { correct }

  // 當前題目
  const currentQuestion = phase === 'main'
    ? questions[currentIndex]
    : wrongQueue[reviewIndex]

  // 載入字卡組和生成題目
  useEffect(() => {
    const loadData = async () => {
      if (!user) return

      const { data: deckData } = await supabase
        .from('decks')
        .select('*')
        .eq('id', deckId)
        .single()

      if (deckData) setDeck(deckData)

      const { data: cardsData } = await supabase
        .from('flashcards')
        .select('*')
        .eq('deck_id', deckId)

      if (cardsData && cardsData.length >= 20) {
        const generatedQuestions = generateQuestions(cardsData)
        if (generatedQuestions) {
          setQuestions(generatedQuestions)
        } else {
          alert('題目生成失敗，請返回')
          navigate('/daily/vocabulary')
        }
      } else {
        alert('字卡數量不足 20 張')
        navigate('/daily/vocabulary')
      }
    }

    loadData()
  }, [deckId, user, navigate])

  // ── 第一輪 ────────────────────────────────────────────────

  const handleSelectAnswer = (optionIndex) => {
    if (isSubmitting) return
    setSelectedAnswer(optionIndex)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
      setSelectedAnswer(prev => userAnswers[currentIndex - 1]?.userAnswer ?? null)
    }
  }

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setUserAnswers(prev => ({
        ...prev,
        [currentIndex]: {
          question: currentQuestion.question,
          type: currentQuestion.type,
          userAnswer: selectedAnswer,
          correctAnswer: currentQuestion.answer,
          isCorrect: checkAnswer(currentQuestion, selectedAnswer)
        }
      }))
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setSelectedAnswer(null)
    }
  }

  // 交卷：統計第一輪結果，進入補考或完成
  const handleSubmit = () => {
    if (isSubmitting) return

    // 把當前頁未儲存的選擇一併納入
    const finalAnswers = { ...userAnswers }
    if (selectedAnswer !== null && finalAnswers[currentIndex] == null) {
      finalAnswers[currentIndex] = {
        question: currentQuestion.question,
        type: currentQuestion.type,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect: checkAnswer(currentQuestion, selectedAnswer)
      }
    }

    const answeredCount = Object.keys(finalAnswers).length
    if (answeredCount < questions.length) {
      if (!window.confirm(`還有 ${questions.length - answeredCount} 題未作答，確定交卷嗎？`)) return
    }

    setIsSubmitting(true)

    const correctCount = Object.values(finalAnswers).filter(a => a.isCorrect).length
    const score = Math.round((correctCount / questions.length) * 100)
    const duration = Math.floor((Date.now() - startTime) / 1000)

    const detailedResults = questions.map((q, idx) => ({
      question: q.question,
      type: q.type,
      options: q.options,
      userAnswer: finalAnswers[idx]?.userAnswer ?? null,
      correctAnswer: q.answer,
      isCorrect: finalAnswers[idx]?.isCorrect || false
    }))

    setResults({ detailedResults, correctCount, totalQuestions: questions.length, score, duration })
    saveToPracticeSessions(correctCount, score, duration)

    const wrong = questions.filter((_, idx) => !finalAnswers[idx]?.isCorrect)

    if (wrong.length === 0) {
      setIsSubmitted(true)
    } else {
      setWrongQueue(wrong.map(reshuffleOptions))
      setReviewIndex(0)
      setReviewSelected(null)
      setReviewFeedback(null)
      setPhase('review')
    }
  }

  const saveToPracticeSessions = async (correctCount, score, duration) => {
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'vocabulary',
        topic: deckId,
        total_questions: 20,
        correct_count: correctCount,
        score,
        duration
      })
    } catch (error) {
      console.error('儲存記錄失敗:', error)
    }
  }

  const handleJumpTo = (index) => {
    if (isSubmitting) return
    // 儲存當前選擇再跳題
    if (selectedAnswer !== null) {
      setUserAnswers(prev => ({
        ...prev,
        [currentIndex]: {
          question: currentQuestion.question,
          type: currentQuestion.type,
          userAnswer: selectedAnswer,
          correctAnswer: currentQuestion.answer,
          isCorrect: checkAnswer(currentQuestion, selectedAnswer)
        }
      }))
    }
    setCurrentIndex(index)
    setSelectedAnswer(userAnswers[index]?.userAnswer ?? null)
  }

  // ── 補考階段 ──────────────────────────────────────────────

  const handleReviewSelect = (optionIndex) => {
    if (reviewFeedback) return
    setReviewSelected(optionIndex)
  }

  const handleReviewConfirm = () => {
    if (reviewSelected === null) return
    const isCorrect = checkAnswer(currentQuestion, reviewSelected)
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
        setReviewSelected(null)
        setReviewFeedback(null)
      }
    } else {
      // 答錯：重新洗牌後移到佇列末尾
      const reshuffled = reshuffleOptions(currentQuestion)
      const newQueue = wrongQueue.filter((_, i) => i !== reviewIndex)
      newQueue.push(reshuffled)
      setWrongQueue(newQueue)
      setReviewIndex(reviewIndex >= newQueue.length ? 0 : reviewIndex)
      setReviewSelected(null)
      setReviewFeedback(null)
    }
  }

  // ── 共用工具 ──────────────────────────────────────────────

  const getTypeLabel = (type) => {
    switch (type) {
      case 'front-to-back': return '看中文選外文'
      case 'back-to-front': return '看外文選中文'
      case 'cloze': return '克漏字'
      default: return ''
    }
  }

  const getTypeLabelShort = (type) => {
    switch (type) {
      case 'front-to-back': return '中→外'
      case 'back-to-front': return '外→中'
      case 'cloze': return '克漏字'
      default: return ''
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
                  <div className="wrong-question">
                    <span className="question-type-badge">{getTypeLabelShort(item.type)}</span>
                    {item.question}
                  </div>
                  <div className="wrong-answers">
                    <span style={{ color: '#EF4444' }}>
                      你的答案：{item.userAnswer != null ? item.options[item.userAnswer] : '未作答'}
                    </span>
                    <span style={{ margin: '0 12px', color: '#9CA3AF' }}>→</span>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>
                      正確答案：{item.options[item.correctAnswer]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions">
            <button onClick={() => window.location.reload()} className="btn btn-primary">
              再練一次
            </button>
            <button onClick={() => navigate('/daily/vocabulary')} className="btn btn-outline">
              返回字卡組
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
          <button onClick={() => navigate('/daily/vocabulary')} className="btn-back">← 返回</button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h2>📝 單字練習 - {deck?.title}</h2>
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
          <div className="question-number" style={{ minWidth: '200px' }}>
            複習 · {getTypeLabel(currentQuestion.type)}
          </div>

          <div className="question-text" style={{ fontSize: '20px', marginBottom: '24px' }}>
            {currentQuestion.question}
          </div>

          {currentQuestion.type === 'cloze' && currentQuestion.hint && (
            <div style={{
              background: '#F3F4F6',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '14px',
              color: 'var(--text-light)'
            }}>
              💡 句意：{currentQuestion.hint}
            </div>
          )}

          <div className="answer-options" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginTop: '32px'
          }}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = reviewSelected === index
              const isCorrect = index === currentQuestion.answer

              let bgColor = 'white'
              let borderColor = '#E5E7EB'

              if (reviewFeedback) {
                if (isCorrect) {
                  bgColor = '#D1FAE5'
                  borderColor = '#10B981'
                } else if (isSelected && !isCorrect) {
                  bgColor = '#FEE2E2'
                  borderColor = '#EF4444'
                }
              } else if (isSelected) {
                bgColor = '#FEF3C7'
                borderColor = '#F59E0B'
              }

              return (
                <button
                  key={index}
                  onClick={() => handleReviewSelect(index)}
                  disabled={!!reviewFeedback}
                  style={{
                    background: bgColor,
                    border: `2px solid ${borderColor}`,
                    borderRadius: '12px',
                    padding: '20px',
                    fontSize: '16px',
                    cursor: reviewFeedback ? 'default' : 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    fontWeight: isSelected ? 600 : 400
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isSelected ? borderColor : '#F3F4F6',
                      color: isSelected ? 'white' : '#6B7280',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      flexShrink: 0
                    }}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {!reviewFeedback ? (
            <button
              onClick={handleReviewConfirm}
              disabled={reviewSelected === null}
              className="btn btn-primary"
              style={{ marginTop: '32px', fontSize: '18px', padding: '16px 48px', background: '#F59E0B', borderColor: '#F59E0B' }}
            >
              確認答案
            </button>
          ) : (
            <div style={{ marginTop: '32px' }}>
              <div style={{
                background: reviewFeedback.correct ? '#D1FAE5' : '#FEE2E2',
                border: `2px solid ${reviewFeedback.correct ? '#10B981' : '#EF4444'}`,
                borderRadius: '12px',
                padding: '16px 24px',
                marginBottom: '16px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 600,
                color: reviewFeedback.correct ? '#065F46' : '#991B1B'
              }}>
                {reviewFeedback.correct ? '✓ 答對了！' : '✗ 答錯了'}
              </div>
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

  // ── 作答頁面（第一輪）────────────────────────────────────

  return (
    <div className="page-container">
      <div className="practice-header">
        <button onClick={() => navigate('/daily/vocabulary')} className="btn-back">← 返回</button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>📝 單字練習 - {deck?.title}</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
            {currentIndex + 1} / {questions.length}　已選 {Object.keys(userAnswers).length} 題
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

      <div className="question-container">
        <div className="question-number" style={{ minWidth: '200px' }}>
          第 {currentIndex + 1} 題 · {getTypeLabel(currentQuestion.type)}
        </div>

        <div className="question-text" style={{ fontSize: '20px', marginBottom: '24px' }}>
          {currentQuestion.question}
        </div>

        {currentQuestion.type === 'cloze' && currentQuestion.hint && (
          <div style={{
            background: '#F3F4F6',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '14px',
            color: 'var(--text-light)'
          }}>
            💡 句意：{currentQuestion.hint}
          </div>
        )}

        <div className="answer-options" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginTop: '32px'
        }}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === currentQuestion.answer

            let bgColor = 'white'
            let borderColor = '#E5E7EB'

            if (isSelected) {
              bgColor = '#EFF6FF'
              borderColor = '#3B82F6'
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={!!reviewFeedback}
                style={{
                  background: bgColor,
                  border: `2px solid ${borderColor}`,
                  borderRadius: '12px',
                  padding: '20px',
                  fontSize: '16px',
                  cursor: reviewFeedback ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                  fontWeight: isSelected ? 600 : 400
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isSelected ? borderColor : '#F3F4F6',
                    color: isSelected ? 'white' : '#6B7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    flexShrink: 0
                  }}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>

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
      </div>

      {/* 題號導航 */}
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
