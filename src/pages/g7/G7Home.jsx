// src/pages/g7/G7Home.jsx
// 七年級複習首頁：7 個科目
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { G7_SUBJECTS } from '../../config/g7'

export default function G7Home() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isGuardian, setIsGuardian] = useState(false)

  // 有對應孩子的家長才顯示報表按鈕
  useEffect(() => {
    if (!user) return
    supabase.from('g7_guardians').select('student_id', { count: 'exact', head: true }).eq('guardian_id', user.id)
      .then(({ count }) => setIsGuardian((count || 0) > 0))
  }, [user])

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/')}>← 返回</button>
        <div className="header-content center">
          <h1>📘 七年級複習</h1>
          <p>選擇科目</p>
        </div>
        {isGuardian && (
          <button className="btn-back" onClick={() => navigate('/g7/report')}>📊 報表</button>
        )}
      </header>

      <main className="main-content">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '16px', maxWidth: '720px', margin: '0 auto',
        }}>
          {G7_SUBJECTS.map(s => (
            <button
              key={s.key}
              onClick={() => s.available && navigate(`/g7/${s.key}`)}
              disabled={!s.available}
              style={{
                background: s.available ? 'white' : '#F8FAFC',
                border: `2px solid ${s.available ? s.bg : 'var(--border)'}`,
                borderRadius: '16px', padding: '24px 12px',
                cursor: s.available ? 'pointer' : 'default',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                boxShadow: s.available ? 'var(--shadow)' : 'none',
                opacity: s.available ? 1 : 0.55,
                font: 'inherit',
              }}
            >
              <div style={{
                width: '56px', height: '56px', borderRadius: '14px',
                background: s.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '30px',
              }}>
                {s.icon}
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: s.available ? s.color : 'var(--text-light)' }}>
                {s.label}
              </div>
              {!s.available && (
                <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>準備中</div>
              )}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
