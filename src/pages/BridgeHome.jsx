// src/pages/BridgeHome.jsx
import { useNavigate } from 'react-router-dom'

const SUBJECTS = [
  { id: 'chinese',   label: '國文', icon: '📝', color: '#DC2626', bg: '#FEF2F2', available: true  },
  { id: 'math',      label: '數學', icon: '🔢', color: '#2563EB', bg: '#EFF6FF', available: true  },
  { id: 'english',   label: '英文', icon: '🔤', color: '#7C3AED', bg: '#F5F3FF', available: false },
  { id: 'geography', label: '地理', icon: '🌏', color: '#059669', bg: '#ECFDF5', available: false },
  { id: 'history',   label: '歷史', icon: '🏛️', color: '#D97706', bg: '#FFFBEB', available: false },
  { id: 'civics',    label: '公民', icon: '⚖️', color: '#0891B2', bg: '#ECFEFF', available: false },
  { id: 'biology',   label: '生物', icon: '🌿', color: '#16A34A', bg: '#F0FDF4', available: false },
  { id: 'chemistry', label: '理化', icon: '⚗️', color: '#9333EA', bg: '#FAF5FF', available: false },
  { id: 'earth',     label: '地科', icon: '🌍', color: '#EA580C', bg: '#FFF7ED', available: false },
]

export default function BridgeHome() {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/')}>← 返回</button>
        <div className="header-content center">
          <h1>🌉 中小學銜接</h1>
          <p>選擇科目開始複習</p>
        </div>
        <button
          className="btn-back"
          onClick={() => navigate('/bridge/admin')}
          style={{ fontSize: '13px', color: 'var(--text-light)' }}
        >
          管理
        </button>
      </header>

      <main className="main-content">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px', maxWidth: '540px', margin: '24px auto'
        }}>
          {SUBJECTS.map(subject => (
            <div
              key={subject.id}
              onClick={() => subject.available && navigate(`/bridge/${subject.id}`)}
              style={{
                background: 'white', borderRadius: '20px', padding: '28px 16px',
                textAlign: 'center', cursor: subject.available ? 'pointer' : 'not-allowed',
                opacity: subject.available ? 1 : 0.45, boxShadow: 'var(--shadow)',
                border: '2px solid transparent', transition: 'all 0.25s',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'
              }}
              onMouseEnter={e => {
                if (!subject.available) return
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                e.currentTarget.style.borderColor = subject.color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow)'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              <div style={{
                width: '60px', height: '60px', background: subject.bg,
                borderRadius: '14px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '30px'
              }}>
                {subject.icon}
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: subject.available ? subject.color : 'var(--text-light)' }}>
                {subject.label}
              </span>
              {!subject.available && (
                <span style={{
                  fontSize: '11px', color: 'var(--text-light)',
                  background: '#F1F5F9', padding: '3px 10px', borderRadius: '10px'
                }}>
                  即將推出
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
