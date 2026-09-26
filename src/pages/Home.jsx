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
        minHeight: '60vh', gap: '40px', paddingTop: '32px'
      }}>
        <h2 style={{ fontSize: '22px', color: 'var(--text-light)', fontWeight: 500, marginBottom: '0' }}>
          今天想做什麼？
        </h2>

        {/* 主要功能：七年級複習 + 每日練習 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px', width: '100%', maxWidth: '620px'
        }}>
          <HomeCard
            onClick={() => navigate('/g7')}
            gradient="linear-gradient(135deg, #2563EB, #60A5FA)"
            hoverColor="#2563EB" tagBg="#EFF6FF" tagColor="#2563EB"
            icon="📘" title="七年級複習"
            desc={<>國文、英文、數學<br />地理、歷史、公民、生物</>}
            label="開始複習 →"
          />
          <HomeCard
            onClick={() => navigate('/daily')}
            gradient="linear-gradient(135deg, #FF6B6B, #FF8E53)"
            hoverColor="#FF6B6B" tagBg="#FFF0F0" tagColor="#FF6B6B"
            icon="⚡" title="每日練習"
            desc={<>四則運算、背字卡、自然發音<br />乘法速算、單字、題庫複習</>}
            label="開始練習 →"
          />
        </div>

        {/* 過往課程 */}
        <div style={{ width: '100%', maxWidth: '620px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            marginBottom: '16px'
          }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <span style={{
              fontSize: '13px', color: 'var(--text-light)',
              display: 'flex', alignItems: 'center', gap: '6px',
              whiteSpace: 'nowrap'
            }}>
              📁 過往課程
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <PastCard
              onClick={() => navigate('/bridge')}
              icon="🌉" title="中小學銜接"
              desc="國文、數學、英文、地理、歷史、公民、生物、理化、地科"
              label="進入 →"
            />
            <PastCard
              onClick={() => navigate('/learn')}
              icon="📖" title="小六自學課程"
              desc="第 1～15 週跨學科課程內容與測驗"
              label="查看記錄 →"
            />
          </div>
        </div>

      </main>
    </div>
  )
}

function PastCard({ onClick, icon, title, desc, label }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'white', borderRadius: '16px', padding: '20px 28px',
        cursor: 'pointer', transition: 'all 0.2s',
        boxShadow: 'var(--shadow)', border: '2px solid transparent',
        display: 'flex', alignItems: 'center', gap: '20px',
        opacity: 0.7
      }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.borderColor = '#94A3B8'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = '0.7'
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        width: '52px', height: '52px', flexShrink: 0,
        background: 'linear-gradient(135deg, #94A3B8, #CBD5E1)',
        borderRadius: '14px', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: '28px'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px', color: 'var(--text-dark)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
          {desc}
        </p>
      </div>
      <div style={{ fontSize: '13px', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>
        {label}
      </div>
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
