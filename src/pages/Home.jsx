// src/pages/Home.jsx
// 首頁 - 顯示每日練習和 15 週課程

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
        {/* 每日練習區塊 */}
        <section style={{ marginBottom: '40px' }}>
          <h2 className="section-title">⚡ 每日基礎練習</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '16px' }}>
            保持每日練習，鞏固基礎能力
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '16px',
            marginBottom: '20px'
          }}>
            {/* 四則運算 */}
            <div
              onClick={() => navigate('/daily/arithmetic')}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: '4px solid #FF6B6B',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow)'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: '#FF6B6B',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                🔢
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  四則運算
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  每日基礎運算練習
                </p>
              </div>
              <div style={{ fontSize: '24px', color: 'var(--text-light)' }}>→</div>
            </div>

            {/* 預留：乘法速算 */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              cursor: 'not-allowed',
              boxShadow: 'var(--shadow)',
              borderLeft: '4px solid #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              opacity: 0.6
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#CBD5E1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                ⚡
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  乘法速算
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  即將推出...
                </p>
              </div>
            </div>

            {/* 預留：自然發音 */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              cursor: 'not-allowed',
              boxShadow: 'var(--shadow)',
              borderLeft: '4px solid #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              opacity: 0.6
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#CBD5E1',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0
              }}>
                📚
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 600 }}>
                  自然發音
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                  即將推出...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 本週課程區塊 */}
        <h2 className="section-title">📖 本週課程</h2>
        
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
