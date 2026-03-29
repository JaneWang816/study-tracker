import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateQuestion, checkAnswer } from '../data/daily-practice/arithmetic'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import notoSansTCBase64 from '../utils/notoSansTC'
import { getTaiwanISOString } from '../utils/timezone'

const TOTAL_QUESTIONS = 20

export default function DailyArithmeticSession() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [startTime] = useState(Date.now())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [results, setResults] = useState(null)

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

  // 生成固定結構的 20 題
  useEffect(() => {
    const generatedQuestions = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => ({
      id: i,
      ...generateQuestion(i)
    }))
    setQuestions(generatedQuestions)
  }, [])

  // ── 第一輪 ────────────────────────────────────────────────

  const handleAnswerChange = (value) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: value }))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1)
  }
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }
  const handleJumpTo = (index) => setCurrentIndex(index)

  // 交卷：計算結果，儲存 DB，決定是否進入補考
  const handleSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    let correctCount = 0
    const detailedResults = questions.map(q => {
      const userAns = userAnswers[q.id]
      const isCorrect = checkAnswer(q, userAns ?? '')
      if (isCorrect) correctCount++
      return { question: q, userAnswer: userAns, isCorrect }
    })

    const duration = Math.floor((Date.now() - startTime) / 1000)
    const score = Math.round((correctCount / questions.length) * 100)

    // DB 只記錄第一輪
    try {
      await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'arithmetic',
        topic: 'mixed_20',
        total_questions: questions.length,
        correct_count: correctCount,
        score,
        duration,
        created_at: getTaiwanISOString()
      })
    } catch (error) {
      console.error('儲存記錄失敗:', error)
    }

    const wrong = detailedResults.filter(r => !r.isCorrect)

    setResults({ detailedResults, correctCount, totalQuestions: questions.length, score, duration })

    if (wrong.length === 0) {
      setIsSubmitted(true)
    } else {
      // 進入補考（填數字不需洗牌，直接用原題目物件）
      setWrongQueue(wrong.map(r => r.question))
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
      // 答對：從佇列移除
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
      // 答錯：移到佇列末尾再試
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

  // ── 匯出 PDF ──────────────────────────────────────────────

  const handleExportPDF = () => {
    const doc = new jsPDF()
    doc.addFileToVFS('NotoSansTC-Regular.ttf', notoSansTCBase64)
    doc.addFont('NotoSansTC-Regular.ttf', 'NotoSansTC', 'normal')
    doc.setFont('NotoSansTC')

    doc.setFontSize(18)
    doc.text('四則運算練習 - 成績單', 105, 20, { align: 'center' })
    doc.setFontSize(12)
    doc.text(`日期：${new Date().toLocaleDateString('zh-TW')}`, 20, 35)
    doc.text(`題數：${results.totalQuestions} 題（固定題型）`, 20, 45)
    doc.text(`答對：${results.correctCount} 題`, 20, 55)
    doc.text(`正確率：${results.score}%`, 20, 65)
    doc.text(`耗時：${Math.floor(results.duration / 60)} 分 ${results.duration % 60} 秒`, 20, 75)

    const wrongQuestions = results.detailedResults.filter(r => !r.isCorrect)
    if (wrongQuestions.length > 0) {
      doc.text('錯題明細：', 20, 90)
      const tableData = wrongQuestions.map((r, i) => [
        i + 1,
        r.question.question,
        r.userAnswer ?? '未作答',
        r.question.displayAnswer
      ])
      doc.autoTable({
        startY: 95,
        head: [['#', '題目', '你的答案', '正確答案']],
        body: tableData,
        styles: { font: 'NotoSansTC', fontSize: 10 },
        headStyles: { fillColor: [255, 107, 107] },
        margin: { left: 20, right: 20 }
      })
    } else {
      doc.setFontSize(14)
      doc.text('🎉 全部答對！太棒了！', 105, 95, { align: 'center' })
    }

    doc.save(`四則運算_${new Date().toLocaleDateString('zh-TW')}.pdf`)
  }

  if (questions.length === 0) {
    return <div className="loading">載入題目中...</div>
  }

  // ── 結果頁面 ──────────────────────────────────────────────

  if (isSubmitted && results) {
    return (
      <div className="page-container">
        <div className="result-container">
          <h1>練習完成！</h1>

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

          {results.detailedResults.filter(r => !r.isCorrect).length > 0 && (
            <div className="wrong-questions">
              <h3>第一輪答錯的題目</h3>
              {results.detailedResults
                .filter(r => !r.isCorrect)
                .map((r, i) => (
                  <div key={i} className="wrong-question-item">
                    <div className="question-text">{r.question.question} = ?</div>
                    <div className="answer-comparison">
                      <span className="user-answer wrong">
                        你的答案：{r.userAnswer ?? '未作答'}
                      </span>
                      <span className="correct-answer">
                        正確答案：{r.question.displayAnswer}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="result-actions">
            <button onClick={handleExportPDF} className="btn-secondary">
              📄 匯出 PDF
            </button>
            <button onClick={() => navigate('/daily/arithmetic')} className="btn-primary">
              再練一次
            </button>
            <button onClick={() => navigate('/daily')} className="btn">
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
          <div className="progress-info">
            <span className="current-question" style={{ color: '#D97706', fontWeight: 600 }}>
              錯題複習｜還剩 {wrongQueue.length} 題
            </span>
          </div>
          <div className="progress-bar">
            <div className="practice-progress-fill" style={{ width: '100%', background: '#F59E0B' }} />
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
          <div className="question-text">
            {currentQuestion.question} = ?
          </div>

          <div className="answer-inputs">
            <input
              type="number"
              step="0.01"
              value={reviewAnswer}
              onChange={(e) => setReviewAnswer(e.target.value)}
              onKeyPress={handleReviewKeyPress}
              placeholder="請輸入答案"
              className="answer-input"
              disabled={!!reviewFeedback}
              autoFocus
            />
          </div>

          {!reviewFeedback ? (
            <button
              onClick={handleReviewSubmit}
              disabled={!reviewAnswer.trim()}
              className="btn btn-primary"
              style={{ marginTop: '24px', fontSize: '18px', padding: '16px 48px' }}
            >
              確認
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

  const getTypeLabel = (index) => {
    if (index < 3)  return '1位整數加減'
    if (index < 6)  return '2位整數加減'
    if (index < 9)  return '1位小數加減'
    if (index < 12) return '2位小數加減'
    return '四則運算'
  }

  return (
    <div className="page-container">
      <div className="practice-header">
        <div className="progress-info">
          <span className="current-question">第 {currentIndex + 1} 題</span>
          <span className="question-type-tag">{getTypeLabel(currentIndex)}</span>
          <span className="total-questions">共 {questions.length} 題</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="question-container">
        <div className="question-text">
          {currentQuestion.question} = ?
        </div>

        <div className="answer-inputs">
          <input
            type="number"
            step="0.01"
            value={userAnswers[currentQuestion.id] ?? ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="請輸入答案"
            className="answer-input"
          />
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="btn-nav"
        >
          ← 上一題
        </button>

        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmit} className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? '處理中…' : '交卷'}
          </button>
        ) : (
          <button onClick={handleNext} className="btn-nav">
            下一題 →
          </button>
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
