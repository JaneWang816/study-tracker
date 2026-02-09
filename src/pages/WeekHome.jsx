// src/pages/WeekHome.jsx
// 週頁面 - 顯示該週 5 天課程

import { useParams, useNavigate } from 'react-router-dom'
import { getWeek } from '../data'

export default function WeekHome() {
  const { weekId } = useParams()
  const navigate = useNavigate()
  
  const week = getWeek(weekId)
  
  if (!week) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>找不到此週課程</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            返回首頁
          </button>
        </div>
      </div>
    )
  }

  const days = Object.values(week.days)

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← 返回
        </button>
        <div className="header-content">
          <h1>{week.icon} {week.name}</h1>
          <p>{week.desc}</p>
        </div>
      </header>

      <main className="main-content">
        <h2 className="section-title">選擇天數</h2>
        
        <div className="day-grid">
          {days.map((day, index) => (
            <div
              key={day.id}
              className="day-card"
              style={{ '--card-color': day.color }}
              onClick={() => navigate(`/${weekId}/${day.id}`)}
            >
              <div className="day-header">
                <span className="day-badge">Day {index + 1}</span>
                <span className="day-icon">{day.icon}</span>
              </div>
              <h3>{day.name}</h3>
              <p className="day-title">{day.title}</p>
              <div className="day-meta">
                <span>{day.units?.length || 0} 個單元</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
