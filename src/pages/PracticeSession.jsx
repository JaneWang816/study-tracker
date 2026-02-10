import { useState, useEffect } from 'react'
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom'
import { getSubject, getModule, getTopic, getGenerator, getCheckAnswer } from '../data'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import notoSansTCBase64 from '../utils/notoSansTC'
import { getTaiwanISOString } from '../utils/timezone'

export default function PracticeSession() {
  const { subject, module, topic } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const count = parseInt(searchParams.get('count')) || 10
  const difficulty = searchParams.get('difficulty') || 'medium'
  const operation = searchParams.get('type') || ''

  const subjectData = getSubject(subject)
  const moduleData = getModule(subject, module)
  const topicData = getTopic(subject, module, topic)
  const config = moduleData?.config

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [results, setResults] = useState([])
  const [startTime] = useState(Date.now())
  const [selectedOption, setSelectedOption] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [error, setError] = useState(null)

  // 生成題目
  useEffect(() => {
    console.log('正在載入生成器...', { subject, module, topic, operation })
    
    const generator = getGenerator(subject, module, topic, operation)
    
    if (!generator) {
      console.error('找不到生成器', {
        subject,
        module,
        topic,
        operation,
        topicData,
        availableGenerators: topicData?.generators
      })
      setError(`找不到生成器：${subject}/${module}/${topic}/${operation}`)
      return
    }

    try {
      const newQuestions = []
      const usedIds = [] // 用於避免重複（國語題庫）
      
      for (let i = 0; i < count; i++) {
        const question = generator(difficulty, usedIds)
        newQuestions.push(question)
        
        // 如果題目有 id，記錄以避免重複
        if (question.id) {
          usedIds.push(question.id)
        }
      }
      
      setQuestions(newQuestions)
      setError(null)
    } catch (err) {
      console.error('生成題目失敗：', err)
      setError(`生成題目失敗：${err.message}`)
    }
  }, [subject, module, topic, operation, count, difficulty])

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  // 處理答案提交
  const handleAnswer = (answer) => {
    setSelectedOption(answer)
    setShowFeedback(true)

    const checkAnswerFn = getCheckAnswer(subject, module)
    const isCorrect = checkAnswerFn ? checkAnswerFn(currentQuestion, answer) : false

    const newUserAnswers = {
      ...userAnswers,
      [currentIndex]: {
        question: currentQuestion,
        userAnswer: answer,
        isCorrect
      }
    }
    setUserAnswers(newUserAnswers)

    // 1秒後自動下一題
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setSelectedOption(null)
        setShowFeedback(false)
      } else {
        finishPractice(newUserAnswers)
      }
    }, 1000)
  }

  // 完成練習
  const finishPractice = async (answers) => {
    console.log('完成練習，準備顯示結果', { answers })
    
    const answerArray = Object.values(answers)
    const correctCount = answerArray.filter(a => a.isCorrect).length
    const score = Math.round((correctCount / questions.length) * 100)
    const duration = Math.floor((Date.now() - startTime) / 1000)

    const resultData = {
      correctCount,
      totalQuestions: questions.length,
      score,
      duration,
      answers: answerArray
    }

    console.log('結果資料：', resultData)
    
    setResults(resultData)
    setShowResult(true)
    
    console.log('已設定 showResult = true')

    // 儲存記錄
    if (user) {
      try {
        await supabase.from('practice_sessions').insert({
          user_id: user.id,
          subject,
          module,
          topic,
          total_questions: questions.length,
          correct_count: correctCount,
          score,
          duration,
          created_at: getTaiwanISOString()
        })
      } catch (error) {
        console.error('儲存記錄失敗：', error)
      }
    }
  }

  // 重新開始
  const restart = () => {
    navigate(`/${subject}/${module}/${topic}/practice`)
  }

  // 匯出 PDF（完整中文版本）
  const exportPDF = () => {
    try {
      const doc = new jsPDF()
      
      // 嵌入中文字體
      doc.addFileToVFS('NotoSansTC.ttf', notoSansTCBase64)
      doc.addFont('NotoSansTC.ttf', 'NotoSansTC', 'normal')
      doc.setFont('NotoSansTC')
      
      const now = new Date()
      const dateStr = now.toLocaleDateString('zh-TW').replace(/\//g, '-')
      const timeStr = now.toLocaleTimeString('zh-TW', { hour12: false }).replace(/:/g, '')
      
      // 標題
      doc.setFontSize(24)
      doc.setTextColor(78, 205, 196)
      doc.text('學習追蹤系統', 105, 20, { align: 'center' })
      doc.setFontSize(14)
      doc.setTextColor(100, 100, 100)
      doc.text('練習報告', 105, 30, { align: 'center' })
      
      // 分隔線
      doc.setDrawColor(78, 205, 196)
      doc.setLineWidth(0.5)
      doc.line(20, 38, 190, 38)
      
      // 難度標籤
      const difficultyLabels = {
        easy: '簡單',
        medium: '中等',
        hard: '困難'
      }
      const diffLabel = difficultyLabels[difficulty] || difficulty
      
      // 基本資訊表格
      autoTable(doc, {
        startY: 48,
        head: [['項目', '內容']],
        body: [
          ['日期', now.toLocaleString('zh-TW')],
          ['科目', `${subjectData?.name} / ${moduleData?.name} / ${topicData?.name}`],
          ['難度', diffLabel],
          ['總題數', `${results.totalQuestions} 題`],
          ['答對', `${results.correctCount} 題`],
          ['答錯', `${results.totalQuestions - results.correctCount} 題`],
          ['分數', `${results.score} 分`],
          ['用時', `${Math.floor(results.duration / 60)} 分 ${results.duration % 60} 秒`],
        ],
        theme: 'grid',
        styles: {
          font: 'NotoSansTC',
          fontStyle: 'normal',
        },
        headStyles: {
          fillColor: [78, 205, 196],
          textColor: 255,
          fontStyle: 'normal',
          font: 'NotoSansTC',
        },
        bodyStyles: {
          textColor: [45, 52, 54],
          font: 'NotoSansTC',
        },
        alternateRowStyles: {
          fillColor: [245, 250, 249],
        },
        columnStyles: {
          0: { cellWidth: 40, fontStyle: 'normal' },
          1: { cellWidth: 'auto' },
        },
        margin: { left: 20, right: 20 },
      })
      
      // 錯題表格
      const wrongAnswers = results.answers.filter(a => !a.isCorrect)
      if (wrongAnswers.length > 0) {
        const finalY = doc.lastAutoTable.finalY + 15
        doc.setFontSize(14)
        doc.setTextColor(231, 76, 60)
        doc.text('錯題回顧', 20, finalY)
        
        autoTable(doc, {
          startY: finalY + 5,
          head: [['#', '題目', '正確答案']],
          body: wrongAnswers.map((item, index) => [
            (index + 1).toString(),
            item.question.question + ' = ?',
            item.question.displayAnswer,
          ]),
          theme: 'grid',
          styles: {
            font: 'NotoSansTC',
            fontStyle: 'normal',
          },
          headStyles: {
            fillColor: [231, 76, 60],
            textColor: 255,
            fontStyle: 'normal',
            font: 'NotoSansTC',
          },
          bodyStyles: {
            textColor: [45, 52, 54],
            font: 'NotoSansTC',
          },
          alternateRowStyles: {
            fillColor: [255, 245, 245],
          },
          columnStyles: {
            0: { cellWidth: 15, halign: 'center' },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 50, halign: 'center', textColor: [39, 174, 96] },
          },
          margin: { left: 20, right: 20 },
        })
      }
      
      // 成績評語
      let message = ''
      if (results.score === 100) message = '🎉 太棒了！全部答對！'
      else if (results.score >= 80) message = '👍 很好！繼續加油！'
      else if (results.score >= 60) message = '💪 不錯！多練習會更好！'
      else message = '📚 繼續努力！熟能生巧！'
      
      const msgY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 20 : 150
      doc.setFontSize(16)
      doc.setTextColor(78, 205, 196)
      doc.text(message, 105, msgY, { align: 'center' })
      
      // 頁尾
      const pageHeight = doc.internal.pageSize.height
      doc.setFontSize(10)
      doc.setTextColor(150, 150, 150)
      doc.text('由學習追蹤系統生成', 105, pageHeight - 10, { align: 'center' })
      
      // 檔名
      const fileName = `練習記錄-${subjectData?.name || subject}-${dateStr}-${timeStr}.pdf`
      doc.save(fileName)
    } catch (error) {
      console.error('PDF 匯出失敗：', error)
      alert('PDF 匯出失敗，請檢查 console')
    }
  }

  // 錯誤頁面
  if (error) {
    return (
      <div className="container">
        <div className="error-page">
          <div className="error-icon">⚠️</div>
          <h2>發生錯誤</h2>
          <p>{error}</p>
          <div className="error-details">
            <p>請檢查：</p>
            <ul>
              <li>科目：{subject}</li>
              <li>模組：{module}</li>
              <li>主題：{topic}</li>
              <li>類型：{operation}</li>
            </ul>
          </div>
          <Link to={`/${subject}/${module}/${topic}`} className="btn btn-primary">
            ← 返回
          </Link>
        </div>
        
        <style>{`
          .error-page {
            max-width: 600px;
            margin: 100px auto;
            padding: 40px;
            background: white;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          }
          
          .error-icon {
            font-size: 64px;
            margin-bottom: 20px;
          }
          
          .error-page h2 {
            font-size: 28px;
            color: #FF6B6B;
            margin-bottom: 16px;
          }
          
          .error-page p {
            font-size: 16px;
            color: #636E72;
            margin-bottom: 20px;
          }
          
          .error-details {
            background: #F8F9FA;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          
          .error-details ul {
            list-style: none;
            padding: 0;
            margin: 10px 0 0 0;
          }
          
          .error-details li {
            padding: 8px 0;
            color: #2D3436;
          }
          
          .btn {
            display: inline-block;
            padding: 16px 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            margin-top: 20px;
          }
        `}</style>
      </div>
    )
  }

  if (!currentQuestion && !showResult) {
    return <div className="container"><div className="loading">載入中...</div></div>
  }

  // 結果頁面
  if (showResult) {
    const wrongAnswers = results.answers.filter(a => !a.isCorrect)
    
    return (
      <div className="container">
        <div className="result-page">
          {/* 分數圓圈 */}
          <div className="score-circle-container">
            <div className={`score-circle ${
              results.score >= 80 ? 'excellent' : 
              results.score >= 60 ? 'good' : 'needs-improvement'
            }`}>
              <div className="score-value">{results.score}</div>
              <div className="score-label">分</div>
            </div>
            <div className="score-message">
              {results.score >= 80 && '太棒了！ 🎉'}
              {results.score >= 60 && results.score < 80 && '不錯喔！ 👍'}
              {results.score < 60 && '繼續加油！ 💪'}
            </div>
          </div>

          {/* 統計卡片 */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-value">{results.totalQuestions}</div>
              <div className="stat-label">總題數</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✓</div>
              <div className="stat-value">{results.correctCount}</div>
              <div className="stat-label">答對</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✗</div>
              <div className="stat-value">{results.totalQuestions - results.correctCount}</div>
              <div className="stat-label">答錯</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-value">{Math.floor(results.duration / 60)}</div>
              <div className="stat-label">分鐘</div>
            </div>
          </div>

          {/* 錯題列表 */}
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h3 className="section-title">
                <span className="title-icon">📌</span>
                錯題回顧
              </h3>
              <div className="wrong-list">
                {wrongAnswers.map((answer, index) => (
                  <div key={index} className="wrong-item">
                    <div className="wrong-question">{answer.question.question}</div>
                    <div className="answer-compare">
                      <div className="answer-box wrong">
                        <span className="answer-label">你的答案</span>
                        <span className="answer-value">
                          {typeof answer.userAnswer === 'object' 
                            ? `${answer.userAnswer.quotient} ... ${answer.userAnswer.remainder}`
                            : answer.userAnswer}
                        </span>
                      </div>
                      <div className="arrow">→</div>
                      <div className="answer-box correct">
                        <span className="answer-label">正確答案</span>
                        <span className="answer-value">{answer.question.displayAnswer}</span>
                      </div>
                    </div>
                    {answer.question.explanation && (
                      <div className="explanation">
                        💡 {answer.question.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 操作按鈕 */}
          <div className="result-actions">
            <button className="btn btn-secondary" onClick={restart}>
              🔄 再練一次
            </button>
            <button className="btn btn-primary" onClick={exportPDF}>
              💾 匯出 PDF
            </button>
            <Link to={`/${subject}/${module}/${topic}`} className="btn btn-outline">
              ← 返回
            </Link>
          </div>
        </div>

        <style>{`
          .result-page {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
          }

          .score-circle-container {
            text-align: center;
            margin-bottom: 40px;
          }

          .score-circle {
            width: 200px;
            height: 200px;
            margin: 0 auto 20px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            position: relative;
            animation: scaleIn 0.5s ease;
          }

          @keyframes scaleIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }

          .score-circle.excellent {
            background: linear-gradient(135deg, #00D2A0 0%, #00B890 100%);
          }

          .score-circle.good {
            background: linear-gradient(135deg, #FFA502 0%, #FF8C00 100%);
          }

          .score-circle.needs-improvement {
            background: linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%);
          }

          .score-value {
            font-size: 72px;
            font-weight: 800;
            color: white;
            line-height: 1;
          }

          .score-label {
            font-size: 24px;
            color: white;
            opacity: 0.9;
          }

          .score-message {
            font-size: 28px;
            font-weight: 700;
            color: #2D3436;
          }

          .stats-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
          }

          .stat-card {
            background: white;
            border-radius: 16px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }

          .stat-icon {
            font-size: 32px;
            margin-bottom: 8px;
          }

          .stat-value {
            font-size: 36px;
            font-weight: 800;
            color: #2D3436;
            margin-bottom: 4px;
          }

          .stat-label {
            font-size: 14px;
            color: #636E72;
          }

          .wrong-answers {
            background: white;
            border-radius: 20px;
            padding: 32px;
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }

          .section-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 24px;
            font-weight: 700;
            color: #2D3436;
            margin-bottom: 24px;
          }

          .title-icon {
            font-size: 28px;
          }

          .wrong-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .wrong-item {
            padding: 20px;
            background: #F8F9FA;
            border-radius: 12px;
            border-left: 4px solid #FF6B6B;
          }

          .wrong-question {
            font-size: 18px;
            font-weight: 600;
            color: #2D3436;
            margin-bottom: 16px;
          }

          .answer-compare {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 12px;
          }

          .answer-box {
            flex: 1;
            padding: 12px 16px;
            border-radius: 8px;
            text-align: center;
          }

          .answer-box.wrong {
            background: #FFE5E5;
            border: 2px solid #FF6B6B;
          }

          .answer-box.correct {
            background: #D4EDDA;
            border: 2px solid #00D2A0;
          }

          .answer-label {
            display: block;
            font-size: 12px;
            color: #636E72;
            margin-bottom: 4px;
          }

          .answer-value {
            display: block;
            font-size: 20px;
            font-weight: 700;
            color: #2D3436;
          }

          .arrow {
            font-size: 24px;
            color: #636E72;
          }

          .explanation {
            font-size: 14px;
            color: #636E72;
            font-style: italic;
            padding: 12px;
            background: white;
            border-radius: 8px;
          }

          .result-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .btn {
            padding: 16px 32px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            text-decoration: none;
            display: inline-block;
          }

          .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
          }

          .btn-secondary {
            background: #636E72;
            color: white;
          }

          .btn-outline {
            background: white;
            color: #2D3436;
            border: 2px solid #DFE6E9;
          }

          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
          }

          @media (max-width: 768px) {
            .answer-compare {
              flex-direction: column;
            }

            .arrow {
              transform: rotate(90deg);
            }

            .result-actions {
              flex-direction: column;
            }

            .btn {
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }

  // 答題頁面
  return (
    <div className="container">
      <div className="practice-session">
        {/* 頂部進度 */}
        <div className="session-header">
          <div className="header-info">
            <h2 className="session-title">
              {topicData?.icon} {topicData?.name}
            </h2>
            <div className="question-counter">
              第 <span className="current-num">{currentIndex + 1}</span> / {questions.length} 題
            </div>
          </div>
          <Link to={`/${subject}/${module}/${topic}`} className="btn-close">
            ✕
          </Link>
        </div>

        {/* 進度條 */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        {/* 題目卡片 */}
        <div className="question-card">
          <div className="question-text">{currentQuestion.question}</div>
          
          {/* 選項 */}
          {currentQuestion.options ? (
            <div className="options-grid">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedOption === option ? 'selected' : ''
                  } ${
                    showFeedback && option === currentQuestion.answer ? 'correct' : ''
                  } ${
                    showFeedback && selectedOption === option && option !== currentQuestion.answer ? 'wrong' : ''
                  }`}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  disabled={showFeedback}
                >
                  <span className="option-content">{option}</span>
                  {showFeedback && option === currentQuestion.answer && (
                    <span className="feedback-icon">✓</span>
                  )}
                  {showFeedback && selectedOption === option && option !== currentQuestion.answer && (
                    <span className="feedback-icon">✗</span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="input-area">
              <input
                type="text"
                className="answer-input"
                placeholder="輸入你的答案..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    handleAnswer(e.target.value)
                  }
                }}
              />
            </div>
          )}
        </div>

        {/* 回饋訊息 */}
        {showFeedback && (
          <div className={`feedback-message ${
            userAnswers[currentIndex]?.isCorrect ? 'correct' : 'wrong'
          }`}>
            {userAnswers[currentIndex]?.isCorrect ? (
              <>
                <span className="feedback-emoji">🎉</span>
                <span>答對了！</span>
              </>
            ) : (
              <>
                <span className="feedback-emoji">💪</span>
                <span>正確答案是：{currentQuestion.displayAnswer}</span>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`
        .practice-session {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-info {
          flex: 1;
        }

        .session-title {
          font-size: 24px;
          font-weight: 700;
          color: #2D3436;
          margin: 0 0 8px 0;
        }

        .question-counter {
          font-size: 16px;
          color: #636E72;
        }

        .current-num {
          font-size: 20px;
          font-weight: 700;
          color: #667eea;
        }

        .btn-close {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #F8F9FA;
          color: #636E72;
          font-size: 24px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-close:hover {
          background: #E9ECEF;
          color: #2D3436;
        }

        .progress-bar {
          height: 8px;
          background: #E9ECEF;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 40px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .question-card {
          background: white;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          margin-bottom: 24px;
        }

        .question-text {
          font-size: 28px;
          font-weight: 600;
          color: #2D3436;
          text-align: center;
          margin-bottom: 48px;
          line-height: 1.5;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .option-button {
          background: #F8F9FA;
          border: 3px solid transparent;
          border-radius: 16px;
          padding: 32px 24px;
          font-size: 24px;
          font-weight: 600;
          color: #2D3436;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .option-button:hover:not(:disabled) {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border-color: #667eea;
        }

        .option-button.selected:not(.correct):not(.wrong) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
        }

        .option-button.correct {
          background: linear-gradient(135deg, #00D2A0 0%, #00B890 100%);
          color: white;
          border-color: #00D2A0;
          animation: pulse 0.5s ease;
        }

        .option-button.wrong {
          background: linear-gradient(135deg, #FF6B6B 0%, #EE5A5A 100%);
          color: white;
          border-color: #FF6B6B;
          animation: shake 0.5s ease;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .option-content {
          position: relative;
          z-index: 1;
        }

        .feedback-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 32px;
          font-weight: bold;
        }

        .input-area {
          text-align: center;
        }

        .answer-input {
          width: 100%;
          max-width: 400px;
          padding: 20px 24px;
          font-size: 24px;
          border: 3px solid #DFE6E9;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .answer-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .feedback-message {
          background: white;
          border-radius: 16px;
          padding: 20px 32px;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feedback-message.correct {
          color: #00D2A0;
          border: 3px solid #00D2A0;
        }

        .feedback-message.wrong {
          color: #FF6B6B;
          border: 3px solid #FF6B6B;
        }

        .feedback-emoji {
          font-size: 32px;
          margin-right: 12px;
        }

        @media (max-width: 768px) {
          .question-card {
            padding: 32px 24px;
          }

          .question-text {
            font-size: 22px;
            margin-bottom: 32px;
          }

          .options-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .option-button {
            padding: 24px 20px;
            font-size: 20px;
          }

          .answer-input {
            font-size: 20px;
          }

          .feedback-message {
            font-size: 16px;
            padding: 16px 24px;
          }
        }
      `}</style>
    </div>
  )
}
