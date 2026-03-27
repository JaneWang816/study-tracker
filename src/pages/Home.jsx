// src/pages/Home.jsx
// 主選單 - 選擇「每日練習」或「自學課程」

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-content">
          <h1>📚 學習平台</h1>
          <p>歡迎回來，{user?.email}</p>
        </div>
        <button className="btn btn-outline" onClick={signOut}>
          登出
        </button>
      </header>

      <main className="main-content" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '32px'
      }}>
        <h2 style={{ 
          fontSize: '22px', 
          color: 'var(--text-light)', 
          fontWeight: 500,
          marginBottom: '8px'
        }}>
          今天想做什麼？
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '680px'
        }}>
          {/* 每日練習 */}
          <div
            onClick={() => navigate('/daily')}
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px 32px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: 'var(--shadow)',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              e.currentTarget.style.borderColor = '#FF6B6B'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              ⚡
            </div>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                每日練習
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                四則運算、背字卡、自然發音<br />乘法速算、單字、題庫複習
              </p>
            </div>
            <div style={{
              marginTop: '8px',
              padding: '8px 24px',
              background: '#FFF0F0',
              color: '#FF6B6B',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600
            }}>
              開始練習 →
            </div>
          </div>

          {/* 自學課程 */}
          <div
            onClick={() => navigate('/learn')}
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px 32px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: 'var(--shadow)',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              e.currentTarget.style.borderColor = '#4F46E5'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              📖
            </div>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                自學課程
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                第 1～15 週跨學科<br />課程內容與測驗
              </p>
            </div>
            <div style={{
              marginTop: '8px',
              padding: '8px 24px',
              background: '#EEF2FF',
              color: '#4F46E5',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600
            }}>
              進入課程 →
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
