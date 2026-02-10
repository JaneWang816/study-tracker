import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { generateQuestion, checkAnswer } from '../data/daily-practice/arithmetic'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import notoSansTCBase64 from '../utils/notoSansTC'
import { getTaiwanISOString } from '../utils/timezone'

export default function DailyArithmeticSession() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useAuth()

  const { level, difficulty, questionCount } = location.state || {
    level: 'easy',
    difficulty: 'medium',
    questionCount: 20
  }

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [startTime] = useState(Date.now())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [results, setResults] = useState(null)

  // 生成題目
  useEffect(() => {
    const generatedQuestions = Array.from({ length: questionCount }, (_, i) => ({
      id: i,
      ...generateQuestion(level, difficulty)
    }))
    setQuestions(generatedQuestions)
  }, [level, difficulty, questionCount])

  const currentQuestion = questions[currentIndex]

  // 處理答案輸入
  const handleAnswerChange = (value, field = null) => {
    const questionId = currentQuestion.id
    if (currentQuestion.type === 'division') {
      setUserAnswers(prev => ({
        ...prev,
        [questionId]: {
          ...prev[questionId],
          [field]: value
        }
      }))
    } else {
      setUserAnswers(prev => ({
        ...prev,
        [questionId]: value
      }))
    }
  }

  // 下一題
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // 上一題
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // 跳到指定題目
  const handleJumpTo = (index) => {
    setCurrentIndex(index)
  }

  // 交卷
  const handleSubmit = async () => {
    // 計算結果
    let correctCount = 0
    const detailedResults = questions.map(q => {
      const userAns = userAnswers[q.id]
      const isCorrect = checkAnswer(q, userAns || {})
      if (isCorrect) correctCount++
      
      return {
        question: q,
        userAnswer: userAns,
        isCorrect
      }
    })

    const duration = Math.floor((Date.now() - startTime) / 1000)
    const score = Math.round((correctCount / questions.length) * 100)

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
        module: 'arithmetic',
        topic: `${level}_${difficulty}`,
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

  // 匯出 PDF
  const handleExportPDF = () => {
    const doc = new jsPDF()
    doc.addFileToVFS('NotoSansTC-Regular.ttf', notoSansTCBase64)
    doc.addFont('NotoSansTC-Regular.ttf', 'NotoSansTC', 'normal')
    doc.setFont('NotoSansTC')

    const levelNames = { easy: '簡單', medium: '中等', hard: '困難' }
    const diffNames = { easy: '1位數', medium: '2位數', hard: '3位數', veryHard: '4位數' }

    // 標題
    doc.setFontSize(18)
    doc.text('四則運算練習 - 成績單', 105, 20, { align: 'center' })
    
    doc.setFontSize(12)
    doc.text(`日期：${new Date().toLocaleDateString('zh-TW')}`, 20, 35)
    doc.text(`難度：${levelNames[level]} / ${diffNames[difficulty]}`, 20, 45)
    doc.text(`題數：${results.totalQuestions} 題`, 20, 55)
    doc.text(`答對：${results.correctCount} 題`, 20, 65)
    doc.text(`正確率：${results.score}%`, 20, 75)
    doc.text(`耗時：${Math.floor(results.duration / 60)} 分 ${results.duration % 60} 秒`, 20, 85)

    // 錯題列表
    const wrongQuestions = results.detailedResults.filter(r => !r.isCorrect)
    
    if (wrongQuestions.length > 0) {
      doc.text('錯題明細：', 20, 100)
      
      const tableData = wrongQuestions.map((r, i) => {
        let userAns = ''
        if (r.question.type === 'division') {
          const ans = r.userAnswer || {}
          userAns = `${ans.quotient || ''} ... ${ans.remainder || ''}`
        } else {
          userAns = r.userAnswer || '未作答'
        }
        
        return [
          i + 1,
          r.question.question,
          userAns,
          r.question.displayAnswer
        ]
      })

      doc.autoTable({
        startY: 105,
        head: [['#', '題目', '你的答案', '正確答案']],
        body: tableData,
        styles: { font: 'NotoSansTC', fontSize: 10 },
        headStyles: { fillColor: [255, 107, 107] },
        margin: { left: 20, right: 20 }
      })
    } else {
      doc.setFontSize(14)
      doc.text('🎉 全部答對！太棒了！', 105, 110, { align: 'center' })
    }

    doc.save(`四則運算_${new Date().toLocaleDateString('zh-TW')}.pdf`)
  }

  if (questions.length === 0) {
    return <div className="loading">載入題目中...</div>
  }

  // 結果頁面
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

          {/* 錯題列表 */}
          {results.detailedResults.filter(r => !r.isCorrect).length > 0 && (
            <div className="wrong-questions">
              <h3>錯題複習</h3>
              {results.detailedResults
                .filter(r => !r.isCorrect)
                .map((r, i) => (
                  <div key={i} className="wrong-question-item">
                    <div className="question-text">{r.question.question} = ?</div>
                    <div className="answer-comparison">
                      <span className="user-answer wrong">
                        你的答案：
                        {r.question.type === 'division' 
                          ? `${r.userAnswer?.quotient || ''} ... ${r.userAnswer?.remainder || ''}`
                          : (r.userAnswer || '未作答')}
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
            <button onClick={() => navigate('/')} className="btn">
              返回首頁
            </button>
          </div>
        </div>
      </div>
    )
  }

  // 作答頁面
  return (
    <div className="page-container">
      <div className="practice-header">
        <div className="progress-info">
          <span className="current-question">第 {currentIndex + 1} 題</span>
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

        {currentQuestion.type === 'division' ? (
          <div className="answer-inputs division">
            <div className="division-input">
              <label>商</label>
              <input
                type="number"
                value={userAnswers[currentQuestion.id]?.quotient || ''}
                onChange={(e) => handleAnswerChange(e.target.value, 'quotient')}
                placeholder="商"
              />
            </div>
            <span className="division-separator">...</span>
            <div className="division-input">
              <label>餘數</label>
              <input
                type="number"
                value={userAnswers[currentQuestion.id]?.remainder || ''}
                onChange={(e) => handleAnswerChange(e.target.value, 'remainder')}
                placeholder="餘數"
              />
            </div>
          </div>
        ) : (
          <div className="answer-inputs">
            <input
              type="number"
              value={userAnswers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="請輸入答案"
              className="answer-input"
            />
          </div>
        )}
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
          <button onClick={handleSubmit} className="btn-submit">
            交卷
          </button>
        ) : (
          <button onClick={handleNext} className="btn-nav">
            下一題 →
          </button>
        )}
      </div>

      {/* 題號快速跳轉 */}
      <div className="question-grid">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => handleJumpTo(i)}
            className={`question-number ${i === currentIndex ? 'current' : ''} ${userAnswers[q.id] ? 'answered' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
