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

  const currentQuestion = questions[currentIndex]

  // 載入題目
  useEffect(() => {
    const newQuestions = generateQuestions()
    setQuestions(newQuestions)
  }, [])

  // 處理答案輸入
  const handleAnswerChange = (e) => {
    setCurrentAnswer(e.target.value)
  }

  // 提交當前題目答案
  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) return

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

    // 清空輸入
    setCurrentAnswer('')

    // 下一題或完成
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      submitResults()
    }
  }

  // 跳轉到指定題號
  const handleJumpTo = (index) => {
    setCurrentIndex(index)
  }

  // 提交結果
  const submitResults = async () => {
    const answeredQuestions = Object.keys(userAnswers).length
    const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length
    const score = Math.round((correctCount / questions.length) * 100)
    const duration = Math.floor((Date.now() - startTime) / 1000)

    const detailedResults = questions.map((q, idx) => ({
      question: q.question,
      userAnswer: userAnswers[idx]?.userAnswer || '(未作答)',
      correctAnswer: q.displayAnswer,
      isCorrect: userAnswers[idx]?.isCorrect || false
    }))

    setResults({
      detailedResults,
      correctCount,
      totalQuestions: questions.length,
      score,
      duration
    })

    setIsSubmitted(true)

    // 儲存到資料庫
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'multiplication',
        topic: 'speed-calc',
        total_questions: questions.length,
        correct_count: correctCount,
        score: score,
        duration: duration,
        created_at: getTaiwanISOString()
      })
    } catch (error) {
      console.error('儲存記錄失敗:', error)
    }
  }

  // 交卷
  const handleSubmit = () => {
    if (Object.keys(userAnswers).length < questions.length) {
      if (!window.confirm('還有題目未作答，確定要交卷嗎？')) {
        return
      }
    }
    submitResults()
  }

  // Enter 鍵提交
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitAnswer()
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
                  <div className="wrong-question">{item.question}</div>
                  <div className="wrong-answers">
                    <span style={{ color: '#EF4444' }}>
                      你的答案：{item.userAnswer}
                    </span>
                    <span style={{ margin: '0 12px', color: '#9CA3AF' }}>→</span>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>
                      正確答案：{item.correctAnswer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions">
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              再練一次
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
        <button onClick={() => navigate('/')} className="btn-back">
          ← 返回
        </button>
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

      {/* 題號導航 */}
      <div className="question-grid">
        {questions.map((_, idx) => {
          const answered = userAnswers[idx]
          const isCurrent = idx === currentIndex
          
          return (
            <button
              key={idx}
              onClick={() => handleJumpTo(idx)}
              className={`question-number-btn ${isCurrent ? 'current' : ''} ${answered ? 'answered' : ''}`}
            >
              {idx + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
