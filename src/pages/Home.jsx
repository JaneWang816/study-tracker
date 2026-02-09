// src/pages/Home.jsx
// 首頁 - 顯示 15 週課程

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { weeks } from '../data'

export default function Home() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const weekList = Object.values(weeks)

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1>📚 學期課程</h1>
          <p>歡迎回來，{user?.email}</p>
        </div>
        <button className="btn btn-outline" onClick={signOut}>
          登出
        </button>
      </header>

      <main className="main-content">
        <h2 className="section-title">選擇週次</h2>
        
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
                <h3>第{weekList.length + i + 1}週</h3>
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
