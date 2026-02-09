import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { arithmeticConfig } from '../data/daily-practice/arithmetic'

export default function DailyArithmetic() {
  const navigate = useNavigate()
  const [selectedLevel, setSelectedLevel] = useState('easy')
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium')
  const [questionCount, setQuestionCount] = useState(20)

  const handleStart = () => {
    navigate('/daily/arithmetic/session', {
      state: {
        level: selectedLevel,
        difficulty: selectedDifficulty,
        questionCount
      }
    })
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/')} className="btn-back">
          ← 返回首頁
        </button>
        <h1>
          <span className="icon">{arithmeticConfig.icon}</span>
          {arithmeticConfig.name}
        </h1>
        <p className="page-desc">{arithmeticConfig.desc}</p>
      </div>

      <div className="practice-setup">
        {/* 難度選擇 */}
        <div className="setup-section">
          <h3>選擇難度</h3>
          <div className="option-grid">
            {arithmeticConfig.levels.map(level => (
              <div
                key={level.id}
                className={`option-card ${selectedLevel === level.id ? 'selected' : ''} ${level.disabled ? 'disabled' : ''}`}
                onClick={() => !level.disabled && setSelectedLevel(level.id)}
              >
                <div className="option-icon">{level.icon}</div>
                <div className="option-name">{level.name}</div>
                <div className="option-desc">{level.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 位數選擇 */}
        <div className="setup-section">
          <h3>選擇位數</h3>
          <div className="option-grid">
            {arithmeticConfig.difficulties.map(diff => (
              <div
                key={diff.id}
                className={`option-card ${selectedDifficulty === diff.id ? 'selected' : ''}`}
                onClick={() => setSelectedDifficulty(diff.id)}
              >
                <div className="option-name">{diff.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 題數選擇 */}
        <div className="setup-section">
          <h3>選擇題數</h3>
          <div className="option-grid">
            {arithmeticConfig.questionCounts.map(count => (
              <div
                key={count}
                className={`option-card ${questionCount === count ? 'selected' : ''}`}
                onClick={() => setQuestionCount(count)}
              >
                <div className="option-name">{count} 題</div>
              </div>
            ))}
          </div>
        </div>

        {/* 開始按鈕 */}
        <button className="btn-start" onClick={handleStart}>
          開始練習
        </button>
      </div>
    </div>
  )
}
