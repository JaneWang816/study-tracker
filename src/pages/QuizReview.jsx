// src/pages/QuizReview.jsx
// 題庫複習入口 - 選擇四個練習模式

import { useNavigate } from 'react-router-dom'

const MODES = [
  {
    id: 'social',
    label: '社會題庫',
    desc: '地理、歷史、社會科複習',
    icon: '🌏',
    color: '#3B82F6',
  },
  {
    id: 'science',
    label: '自然題庫',
    desc: '自然科學複習',
    icon: '🔬',
    color: '#10B981',
  },
  {
    id: 'phonics',
    label: '字音字形',
    desc: '注音、字形辨析練習',
    icon: '📝',
    color: '#F59E0B',
  },
  {
    id: 'culture',
    label: '國學常識',
    desc: '成語、詞義、文化常識',
    icon: '📜',
    color: '#8B5CF6',
  },
]

export default function QuizReview() {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/daily')} className="btn-back">← 返回</button>
        <h1><span className="icon">🧠</span> 題庫複習</h1>
        <p className="page-desc">選擇題型，每次隨機出 20 題</p>
      </div>

      <div className="practice-setup">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {MODES.map(mode => (
            <div
              key={mode.id}
              onClick={() => navigate('/daily/quiz/session', { state: { mode: mode.id } })}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px 20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: 'var(--shadow)',
                borderLeft: `4px solid ${mode.color}`,
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
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
                width: '56px',
                height: '56px',
                background: mode.color,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                flexShrink: 0,
              }}>
                {mode.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>
                  {mode.label}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                  {mode.desc}
                </p>
              </div>
              <div style={{ fontSize: '20px', color: 'var(--text-light)' }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
