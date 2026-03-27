// src/pages/LearnHome.jsx
// 自學課程首頁 - 路由：/learn，顯示 W1~W15

import { useNavigate } from 'react-router-dom'
import { weeks } from '../data'

export default function LearnHome() {
  const navigate = useNavigate()
  const weekList = Object.values(weeks)

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← 返回
        </button>
        <div className="header-content">
          <h1>📖 自學課程</h1>
          <p>第 1～15 週跨學科課程</p>
        </div>
      </header>

      <main className="main-content">
        <div className="week-grid">
          {weekList.map((week, index) => (
            <div
              key={week.id}
              className="week-card"
              style={{ '--card-color': week.color }}
              onClick={() => navigate(`/${week.id}`)}
            >
              <div className="week-number">{index + 1}</div>
              <div className="week-info">
                <h3>{week.name}</h3>
                <p>{week.desc}</p>
              </div>
              <div className="week-icon">{week.icon}</div>
            </div>
          ))}

          {/* 未開放的週次 */}
          {Array.from({ length: 15 - weekList.length }, (_, i) => (
            <div key={`locked-${i}`} className="week-card locked">
              <div className="week-number">{weekList.length + i + 1}</div>
              <div className="week-info">
                <h3>第 {weekList.length + i + 1} 週</h3>
                <p>即將開放</p>
              </div>
              <div className="week-icon">🔒</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
