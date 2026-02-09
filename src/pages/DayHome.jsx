// src/pages/DayHome.jsx
// 天頁面 - 顯示當天所有單元，開始學習

import { useParams, useNavigate } from 'react-router-dom'
import { getWeek, getDay } from '../data'

export default function DayHome() {
  const { weekId, dayId } = useParams()
  const navigate = useNavigate()
  
  const week = getWeek(weekId)
  const day = getDay(weekId, dayId)
  
  if (!week || !day) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>找不到此課程</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            返回首頁
          </button>
        </div>
      </div>
    )
  }

  const units = day.units || []

  const handleStartLearning = () => {
    if (units.length > 0) {
      // 從第一個單元開始學習
      navigate(`/${weekId}/${dayId}/learn`)
    }
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate(`/${weekId}`)}>
          ← 返回{week.name}
        </button>
        <div className="header-content">
          <h1>{day.icon} {day.name}</h1>
          <p>{day.title}</p>
        </div>
      </header>

      <main className="main-content">
        <div className="day-overview">
          <h2 className="section-title">今日學習內容</h2>
          
          <div className="unit-list">
            {units.map((unit, index) => (
              <div key={unit.id} className="unit-item">
                <div className="unit-number">{index + 1}</div>
                <div className="unit-info">
                  <h3>{unit.icon} {unit.name}</h3>
                  <p>{unit.lesson?.title}</p>
                </div>
                <div className="unit-meta">
                  <span className="badge badge-lesson">課程</span>
                  <span className="badge badge-practice">
                    {unit.practice?.questionCount || 5} 題練習
                  </span>
                </div>
              </div>
            ))}
          </div>

          {units.length > 0 ? (
            <button 
              className="btn btn-primary btn-large"
              onClick={handleStartLearning}
            >
              🚀 開始今日學習
            </button>
          ) : (
            <div className="empty-state">
              <p>此天尚未設定課程內容</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
