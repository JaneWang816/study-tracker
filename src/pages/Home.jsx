// src/pages/Home.jsx
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
        <button className="btn btn-outline" onClick={signOut}>登出</button>
      </header>

      <main className="main-content" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '60vh', gap: '32px'
      }}>
        <h2 style={{ fontSize: '22px', color: 'var(--text-light)', fontWeight: 500, marginBottom: '8px' }}>
          今天想做什麼？
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px', width: '100%', maxWidth: '900px'
        }}>
          <HomeCard
            onClick={() => navigate('/daily')}
            gradient="linear-gradient(135deg, #FF6B6B, #FF8E53)"
            hoverColor="#FF6B6B" tagBg="#FFF0F0" tagColor="#FF6B6B"
            icon="⚡" title="每日練習"
            desc={<>四則運算、背字卡、自然發音<br />乘法速算、單字、題庫複習</>}
            label="開始練習 →"
          />
          <HomeCard
            onClick={() => navigate('/learn')}
            gradient="linear-gradient(135deg, #4F46E5, #7C3AED)"
            hoverColor="#4F46E5" tagBg="#EEF2FF" tagColor="#4F46E5"
            icon="📖" title="自學課程"
            desc={<>第 1～15 週跨學科<br />課程內容與測驗</>}
            label="進入課程 →"
          />
          <HomeCard
            onClick={() => navigate('/bridge')}
            gradient="linear-gradient(135deg, #059669, #10B981)"
            hoverColor="#059669" tagBg="#ECFDF5" tagColor="#059669"
            icon="🌉" title="中小學銜接"
            desc={<>國文、數學、英文<br />地理、歷史、公民、生物、理化、地科</>}
            label="開始銜接 →"
          />
        </div>
      </main>
    </div>
  )
}

function HomeCard({ onClick, gradient, hoverColor, tagBg, tagColor, icon, title, desc, label }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'white', borderRadius: '24px', padding: '40px 32px',
        cursor: 'pointer', transition: 'all 0.3s', boxShadow: 'var(--shadow)',
        border: '2px solid transparent', display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '16px', textAlign: 'center'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        e.currentTarget.style.borderColor = hoverColor
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--shadow)'
        e.currentTarget.style.borderColor = 'transparent'
      }}
    >
      <div style={{
        width: '80px', height: '80px', background: gradient,
        borderRadius: '20px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '40px'
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6 }}>{desc}</p>
      </div>
      <div style={{
        marginTop: '8px', padding: '8px 24px', background: tagBg,
        color: tagColor, borderRadius: '20px', fontSize: '14px', fontWeight: 600
      }}>
        {label}
      </div>
    </div>
  )
}
