// src/pages/LearningSession.jsx
// 學習流程頁面 - 課程內容 â†’ 練習題 → 下一單元

import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getWeek, getDay } from '../data'

// 學習階段
const PHASE = {
  LESSON: 'lesson',      // 看課程
  PRACTICE: 'practice',  // 做練習
  RESULT: 'result'       // 單元結果
}

export default function LearningSession() {
  const { weekId, dayId } = useParams()
  const navigate = useNavigate()
  
  const week = getWeek(weekId)
  const day = getDay(weekId, dayId)
  const units = day?.units || []
  
  // 學習狀態
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0)
  const [phase, setPhase] = useState(PHASE.LESSON)
  const [lessonStartTime, setLessonStartTime] = useState(Date.now())
  const [practiceStartTime, setPracticeStartTime] = useState(null)
  
  // 練習狀態
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  
  // 整天的學習記錄
  const [dayRecord, setDayRecord] = useState([])
  
  // 輸入框 ref
  const inputRef = useRef(null)
  
  const currentUnit = units[currentUnitIndex]
  
  // 錯誤處理
  if (!week || !day || units.length === 0) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>找不到課程內容</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            返回首頁
          </button>
        </div>
      </div>
    )
  }

  // 開始練習時生成題目
  const startPractice = () => {
    const lessonDuration = Math.round((Date.now() - lessonStartTime) / 1000)
    const practice = currentUnit.practice
    
    if (practice && practice.generator) {
      const newQuestions = Array(practice.questionCount || 5)
        .fill(null)
        .map(() => practice.generator(practice.difficulty || 'easy'))
      
      setQuestions(newQuestions)
      setCurrentQuestionIndex(0)
      setUserAnswers({})
      setShowFeedback(false)
      setPracticeStartTime(Date.now())
      setPhase(PHASE.PRACTICE)
      
      // 記錄課程時間
      setDayRecord(prev => {
        const updated = [...prev]
        const existingIndex = updated.findIndex(r => r.unitId === currentUnit.id)
        if (existingIndex >= 0) {
          updated[existingIndex].lessonDuration = lessonDuration
        } else {
          updated.push({
            unitId: currentUnit.id,
            unitName: currentUnit.name,
            lessonDuration,
            practiceDuration: 0,
            correctCount: 0,
            totalQuestions: practice.questionCount || 5,
            wrongQuestions: []
          })
        }
        return updated
      })
    }
    
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  // 提交答案
  const submitAnswer = () => {
    // 防止重複提交
    if (showFeedback) return
    
    const question = questions[currentQuestionIndex]
    const checkAnswer = currentUnit.practice?.checkAnswer
    
    let userAnswer = userAnswers[currentQuestionIndex]
    
    // 處理除法的特殊輸入
    if (question.type === 'division') {
      userAnswer = {
        quotient: userAnswers[`${currentQuestionIndex}-quotient`] || 0,
        remainder: userAnswers[`${currentQuestionIndex}-remainder`] || 0
      }
    }
    
    // 驗證答案
    let correct = false
    if (checkAnswer) {
      correct = checkAnswer(question, userAnswer)
    } else {
      // 預設驗證邏輯
      if (question.options) {
        // 選擇題：比較選項索引
        correct = userAnswer === question.answer
      } else if (question.type === 'division') {
        correct = parseInt(userAnswer.quotient) === question.answer.quotient &&
                  parseInt(userAnswer.remainder) === question.answer.remainder
      } else if (question.type === 'fill') {
        // 填充題：字串比較（忽略前後空白）
        correct = String(userAnswer).trim() === String(question.answer).trim()
      } else {
        // 數字比較
        correct = parseFloat(userAnswer) === question.answer
      }
    }
    
    setIsCorrect(correct)
    setShowFeedback(true)
    
    // 記錄錯題（使用題目索引作為唯一識別，避免重複）
    if (!correct) {
      setDayRecord(prev => {
        const updated = [...prev]
        const recordIndex = updated.findIndex(r => r.unitId === currentUnit.id)
        if (recordIndex >= 0) {
          // 檢查是否已經記錄過這題（用題目索引檢查）
          const questionKey = `${currentUnit.id}-${currentQuestionIndex}`
          const alreadyRecorded = updated[recordIndex].wrongQuestions.some(
            wq => wq._questionKey === questionKey
          )
          
          if (!alreadyRecorded) {
            // 格式化使用者答案顯示
            let userAnswerDisplay = ''
            if (question.options && userAnswer !== undefined) {
              userAnswerDisplay = question.options[userAnswer] || '未作答'
            } else if (question.type === 'division') {
              userAnswerDisplay = `${userAnswer.quotient} ... ${userAnswer.remainder}`
            } else {
              userAnswerDisplay = String(userAnswer || '未作答')
            }
            
            updated[recordIndex].wrongQuestions.push({
              _questionKey: questionKey,
              question: question.question,
              image: question.image,
              correctAnswer: question.displayAnswer,
              userAnswer: userAnswerDisplay
            })
          }
        }
        return updated
      })
    }
  }

  // 下一題
  const nextQuestion = () => {
    setShowFeedback(false)
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      // 練習結束，計算結果
      finishPractice()
    }
  }

  // 完成練習
  const finishPractice = () => {
    const practiceDuration = Math.round((Date.now() - practiceStartTime) / 1000)
    
    // 計算正確數
    let correctCount = 0
    questions.forEach((q, idx) => {
      let userAnswer = userAnswers[idx]
      if (q.type === 'division') {
        userAnswer = {
          quotient: userAnswers[`${idx}-quotient`] || 0,
          remainder: userAnswers[`${idx}-remainder`] || 0
        }
      }
      if (currentUnit.practice?.checkAnswer(q, userAnswer)) {
        correctCount++
      }
    })
    
    // 更新記錄
    setDayRecord(prev => {
      const updated = [...prev]
      const recordIndex = updated.findIndex(r => r.unitId === currentUnit.id)
      if (recordIndex >= 0) {
        updated[recordIndex].practiceDuration = practiceDuration
        updated[recordIndex].correctCount = correctCount
      }
      return updated
    })
    
    setPhase(PHASE.RESULT)
  }

  // 下一個單元
  const nextUnit = () => {
    if (currentUnitIndex < units.length - 1) {
      setCurrentUnitIndex(prev => prev + 1)
      setPhase(PHASE.LESSON)
      setLessonStartTime(Date.now())
      setQuestions([])
      setCurrentQuestionIndex(0)
      setUserAnswers({})
    } else {
      // 所有單元完成，前往總結頁
      navigate(`/${weekId}/${dayId}/complete`, { 
        state: { dayRecord } 
      })
    }
  }

  // 處理輸入
  const handleInputChange = (key, value) => {
    setUserAnswers(prev => ({ ...prev, [key]: value }))
  }

  // 按 Enter 提交
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (showFeedback) {
        nextQuestion()
      } else {
        submitAnswer()
      }
    }
  }

  // 渲染內容區塊
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={index} className="block-text">
            {block.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )
      
      case 'image':
        return (
          <div key={index} className="block-image">
            <img src={block.src} alt={block.alt || ''} />
            {block.caption && <p className="image-caption">{block.caption}</p>}
          </div>
        )
      
      case 'video':
        if (block.embed) {
          // 內嵌播放
          return (
            <div key={index} className="block-video">
              <div className="video-container">
                <iframe
                  src={block.src}
                  title={block.title || '教學影片'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {block.caption && <p className="video-caption">{block.caption}</p>}
            </div>
          )
        } else {
          // 開新視窗
          return (
            <div key={index} className="block-video-link">
              <a href={block.src} target="_blank" rel="noopener noreferrer" className="video-link-btn">
                <span className="video-icon">▶️</span>
                <span>{block.title || '觀看教學影片'}</span>
              </a>
            </div>
          )
        }
      
      default:
        return null
    }
  }

  // 渲染章節內容（支援舊格式和新格式）
  const renderSectionContent = (section) => {
    // 新格式：有 blocks 陣列
    if (section.blocks && Array.isArray(section.blocks)) {
      return section.blocks.map((block, idx) => renderBlock(block, idx))
    }
    
    // 舊格式：只有 content 字串
    if (section.content) {
      return section.content.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))
    }
    
    return null
  }

  // 渲染課程內容
  const renderLesson = () => {
    const lesson = currentUnit.lesson
    if (!lesson) return null

    return (
      <div className="lesson-content">
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <div className="progress-indicator">
            單元 {currentUnitIndex + 1} / {units.length}
          </div>
        </div>
        
        <div className="lesson-sections">
          {lesson.sections?.map((section, idx) => (
            <div key={idx} className="lesson-section">
              <h3>{section.title}</h3>
              <div className="section-content">
                {renderSectionContent(section)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="lesson-actions">
          {currentUnit.practice?.questionCount > 0 ? (
            <button 
              className="btn btn-primary btn-large"
              onClick={startPractice}
            >
              ✏️ 開始練習（{currentUnit.practice.questionCount} 題）
            </button>
          ) : (
            <button 
              className="btn btn-primary btn-large"
              onClick={nextUnit}
            >
              {currentUnitIndex < units.length - 1 ? '繼續下一單元 →' : '完成今日學習 🎉'}
            </button>
          )}
        </div>
      </div>
    )
  }

  // 渲染練習題
  const renderPractice = () => {
    const question = questions[currentQuestionIndex]
    if (!question) return null

    return (
      <div className="practice-content">
        <div className="practice-header">
          <h2>練習題</h2>
          <div className="progress-indicator">
            第 {currentQuestionIndex + 1} / {questions.length} 題
          </div>
        </div>
        
        <div className="question-card">
          {/* 題目圖片 */}
          {question.image && (
            <div className="question-image">
              <img 
                src={question.image.src} 
                alt={question.image.alt || '題目圖片'} 
              />
            </div>
          )}
          
          <div className="question-text">{question.question}</div>
          
          <div className="answer-input">
            {/* 選擇題 */}
            {question.options ? (
              <div className="options-grid">
                {question.options.map((option, optIdx) => (
                  <button
                    key={optIdx}
                    className={`option-btn ${
                      userAnswers[currentQuestionIndex] === optIdx ? 'selected' : ''
                    } ${
                      showFeedback && optIdx === question.answer ? 'correct' : ''
                    } ${
                      showFeedback && userAnswers[currentQuestionIndex] === optIdx && optIdx !== question.answer ? 'wrong' : ''
                    }`}
                    onClick={() => !showFeedback && handleInputChange(currentQuestionIndex, optIdx)}
                    disabled={showFeedback}
                  >
                    <span className="option-label">{String.fromCharCode(65 + optIdx)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>
            ) : question.type === 'division' ? (
              <div className="division-input">
                <div className="input-group">
                  <label>商</label>
                  <input
                    ref={inputRef}
                    type="number"
                    value={userAnswers[`${currentQuestionIndex}-quotient`] || ''}
                    onChange={(e) => handleInputChange(`${currentQuestionIndex}-quotient`, e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={showFeedback}
                  />
                </div>
                <div className="input-group">
                  <label>餘數</label>
                  <input
                    type="number"
                    value={userAnswers[`${currentQuestionIndex}-remainder`] || ''}
                    onChange={(e) => handleInputChange(`${currentQuestionIndex}-remainder`, e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={showFeedback}
                  />
                </div>
              </div>
            ) : (
              <input
                ref={inputRef}
                type={question.type === 'decimal' ? 'text' : 'text'}
                placeholder="輸入答案"
                value={userAnswers[currentQuestionIndex] || ''}
                onChange={(e) => handleInputChange(currentQuestionIndex, e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={showFeedback}
                className="answer-field"
              />
            )}
          </div>
          
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? (
                <span>✅ 答對了！</span>
              ) : (
                <span>❌ 答錯了，正確答案是：{question.displayAnswer}</span>
              )}
            </div>
          )}
          
          <div className="question-actions">
            {!showFeedback ? (
              <button 
                className="btn btn-primary"
                onClick={submitAnswer}
              >
                確認答案
              </button>
            ) : (
              <button 
                className="btn btn-primary"
                onClick={nextQuestion}
              >
                {currentQuestionIndex < questions.length - 1 ? '下一題' : '查看結果'}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // 渲染單元結果
  const renderResult = () => {
    const record = dayRecord.find(r => r.unitId === currentUnit.id)
    if (!record) return null

    const score = Math.round((record.correctCount / record.totalQuestions) * 100)

    return (
      <div className="result-content">
        <div className="result-header">
          <h2>🎉 {currentUnit.name} 完成！</h2>
        </div>
        
        <div className="result-stats">
          <div className="stat-card">
            <div className="stat-label">正確率</div>
            <div className="stat-value">{score}%</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">答對</div>
            <div className="stat-value">{record.correctCount} / {record.totalQuestions}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">課程時間</div>
            <div className="stat-value">{Math.floor(record.lessonDuration / 60)}:{String(record.lessonDuration % 60).padStart(2, '0')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">練習時間</div>
            <div className="stat-value">{Math.floor(record.practiceDuration / 60)}:{String(record.practiceDuration % 60).padStart(2, '0')}</div>
          </div>
        </div>
        
        {record.wrongQuestions.length > 0 && (
          <div className="wrong-questions">
            <h3>❌ 錯題回顧</h3>
            {record.wrongQuestions.map((wq, idx) => (
              <div key={idx} className="wrong-item">
                <div className="wrong-question">{wq.question}</div>
                <div className="wrong-answers">
                  <span className="your-answer">你的答案：{wq.userAnswer}</span>
                  <span className="correct-answer">正確答案：{wq.correctAnswer}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="result-actions">
          <button 
            className="btn btn-primary btn-large"
            onClick={nextUnit}
          >
            {currentUnitIndex < units.length - 1 
              ? `📖 繼續下一單元：${units[currentUnitIndex + 1].name}`
              : '🏆 完成今日學習'
            }
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container learning-session">
      <header className="page-header compact">
        <div className="session-info">
          <span className="week-badge">{week.name}</span>
          <span className="day-badge">{day.name}</span>
          <span className="unit-badge">{currentUnit.icon} {currentUnit.name}</span>
        </div>
        <button 
          className="btn btn-outline btn-small"
          onClick={() => {
            if (confirm('確定要離開嗎？目前進度將不會保存。')) {
              navigate(`/${weekId}/${dayId}`)
            }
          }}
        >
          離開
        </button>
      </header>

      <main className="main-content">
        {phase === PHASE.LESSON && renderLesson()}
        {phase === PHASE.PRACTICE && renderPractice()}
        {phase === PHASE.RESULT && renderResult()}
      </main>
      
      {/* 進度條 */}
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${((currentUnitIndex + (phase === PHASE.RESULT ? 1 : 0.5)) / units.length) * 100}%` 
            }}
          />
        </div>
        <div className="progress-text">
          進度：{currentUnitIndex + (phase === PHASE.RESULT ? 1 : 0)} / {units.length} 單元
        </div>
      </div>
    </div>
  )
}
