import { useNavigate } from 'react-router-dom'
import { arithmeticConfig } from '../data/daily-practice/arithmetic'

export default function DailyArithmetic() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/daily/arithmetic/session')
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/daily')} className="btn-back">
          ← 返回首頁
        </button>
        <h1>
          <span className="icon">{arithmeticConfig.icon}</span>
          {arithmeticConfig.name}
        </h1>
        <p className="page-desc">{arithmeticConfig.desc}</p>
      </div>

      <div className="practice-setup">
        <div className="setup-section">
          <h3>今日題型</h3>
          <div className="breakdown-list">
            {arithmeticConfig.breakdown.map((item, i) => (
              <div key={i} className="breakdown-item">
                <span className="breakdown-label">{item.label}</span>
                <span className="breakdown-count">{item.count} 題</span>
              </div>
            ))}
            <div className="breakdown-item breakdown-total">
              <span className="breakdown-label">合計</span>
              <span className="breakdown-count">
                {arithmeticConfig.breakdown.reduce((sum, b) => sum + b.count, 0)} 題
              </span>
            </div>
          </div>
        </div>

        <button className="btn-start" onClick={handleStart}>
          開始練習
        </button>
      </div>
    </div>
  )
}
