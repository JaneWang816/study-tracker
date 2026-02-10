import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { getLevel, getCategory, getQuestions } from '../data/daily-practice/phonics'
import { speak } from '../utils/speech'
import { getTaiwanISOString } from '../utils/timezone'

export default function DailyPhonicsSession() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const { levelId, categoryId } = location.state || {}
  
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [feedback, setFeedback] = useState(null) // { correct: true/false }
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [results, setResults] = useState(null)
  const [startTime] = useState(Date.now())

  const level = getLevel(levelId)
  const category = getCategory(levelId, categoryId)
  const currentQuestion = questions[currentIndex]

  // 載入題目
  useEffect(() => {
    if (!levelId || !categoryId) {
      navigate('/daily/phonics')
      return
    }

    const questionsList = getQuestions(categoryId, 10)
    if (questionsList.length === 0) {
      alert('此分類暫無題目')
      navigate('/daily/phonics')
      return
    }

    setQuestions(questionsList)
  }, [levelId, categoryId, navigate])

  // 播放發音
  const playSound = () => {
    if (currentQuestion) {
      speak(currentQuestion.word, 'en-US').catch(console.error)
    }
  }

  // 自動播放第一次
  useEffect(() => {
    if (currentQuestion && !feedback) {
      const timer = setTimeout(() => {
        playSound()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  // 選擇答案
  const handleAnswer = (optionIndex) => {
    if (feedback || isSubmitted) return

    const isCorrect = optionIndex === currentQuestion.answer
    
    // 記錄答案
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        selected: optionIndex,
        correct: isCorrect,
        question: currentQuestion
      }
    }))

    // 顯示反饋
    setFeedback({ correct: isCorrect })
  }

  // 下一題
  const handleNext = () => {
    setFeedback(null)
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // 完成，計算結果
      submitResults()
    }
  }

  // 提交結果
  const submitResults = async () => {
    const correctCount = Object.values(userAnswers).filter(a => a.correct).length
    const totalQuestions = questions.length
    const score = Math.round((correctCount / totalQuestions) * 100)
    const duration = Math.floor((Date.now() - startTime) / 1000)

    const detailedResults = questions.map((q, idx) => ({
      question: q.word,
      options: q.options,
      userAnswer: userAnswers[idx]?.selected,
      correctAnswer: q.answer,
      isCorrect: userAnswers[idx]?.correct || false
    }))

    setResults({
      detailedResults,
      correctCount,
      totalQuestions,
      score,
      duration
    })

    setIsSubmitted(true)

    // 儲存到資料庫
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'phonics',
        topic: categoryId,
        total_questions: totalQuestions,
        correct_count: correctCount,
        score: score,
        duration: duration,
        created_at: getTaiwanISOString()
      })
    } catch (error) {
      console.error('儲存記錄失敗:', error)
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

  // 完成頁面
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
              <div className="stat-value" style={{ color: '#10B981' }}>
                {results.correctCount}
              </div>
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
              <h3>答錯的題目</h3>
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
                      你選：{item.options[item.userAnswer]}
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
            <button
              onClick={() => navigate('/daily/phonics')}
              className="btn btn-primary"
            >
              返回選擇
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn btn-outline"
            >
              返回首頁
            </button>
          </div>
        </div>
      </div>
    )
  }

  // 練習頁面
  return (
    <div className="page-container">
      <div className="practice-header">
        <button onClick={() => navigate('/daily/phonics')} className="btn-back">
          ← 返回
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h2>{category?.name}</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '4px' }}>
            {currentIndex + 1} / {questions.length}
          </p>
        </div>
        <div style={{ width: '80px' }} />
      </div>

      <div className="practice-progress">
        <div
          className="practice-progress-fill"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="phonics-practice-container">
        {/* 播放按鈕 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            onClick={playSound}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              border: 'none',
              color: 'white',
              fontSize: '48px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.3)'
            }}
          >
            🔊
          </button>
          <p style={{ marginTop: '16px', fontSize: '16px', color: 'var(--text-light)' }}>
            點擊播放發音
          </p>
        </div>

        {/* 選項 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {currentQuestion.options.map((option, idx) => {
            let bgColor = 'white'
            let borderColor = '#E5E7EB'
            
            if (feedback) {
              if (idx === currentQuestion.answer) {
                bgColor = '#D1FAE5'
                borderColor = '#10B981'
              } else if (idx === userAnswers[currentIndex]?.selected) {
                bgColor = '#FEE2E2'
                borderColor = '#EF4444'
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={!!feedback}
                style={{
                  background: bgColor,
                  border: `3px solid ${borderColor}`,
                  borderRadius: '16px',
                  padding: '24px',
                  fontSize: '24px',
                  fontWeight: 600,
                  cursor: feedback ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  color: 'var(--text-dark)'
                }}
                onMouseEnter={(e) => {
                  if (!feedback) {
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

        {/* 反饋 */}
        {feedback && (
          <div style={{
            marginTop: '32px',
            textAlign: 'center',
            animation: 'fadeIn 0.3s'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '16px 32px',
              background: feedback.correct ? '#D1FAE5' : '#FEE2E2',
              borderRadius: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '32px',
                marginBottom: '8px'
              }}>
                {feedback.correct ? '✓' : '✗'}
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 600,
                color: feedback.correct ? '#10B981' : '#EF4444'
              }}>
                {feedback.correct ? '答對了！' : '答錯了'}
              </div>
              {!feedback.correct && (
                <div style={{
                  marginTop: '8px',
                  fontSize: '14px',
                  color: 'var(--text-dark)'
                }}>
                  正確答案：{currentQuestion.options[currentQuestion.answer]}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              {!feedback.correct && (
                <button
                  onClick={playSound}
                  className="btn btn-outline"
                >
                  🔊 再聽一次
                </button>
              )}
              <button
                onClick={handleNext}
                className="btn btn-primary"
              >
                {currentIndex < questions.length - 1 ? '下一題' : '查看結果'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
