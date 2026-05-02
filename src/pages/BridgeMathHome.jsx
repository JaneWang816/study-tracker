// src/pages/BridgeMathHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000001'

const UNITS = [
  { id: 'a3000000-0000-0000-0000-000000000001', order: 1,  title: '正負數',              icon: '➕➖', desc: '數線、絕對值、正負數大小比較' },
  { id: 'a3000000-0000-0000-0000-000000000002', order: 2,  title: '整數、小數與分數的四則運算', icon: '🔢', desc: '通分、化簡、混合運算' },
  { id: 'a3000000-0000-0000-0000-000000000003', order: 3,  title: '因數與倍數',           icon: '🔗', desc: '公因數、公倍數、質因數分解' },
  { id: 'a3000000-0000-0000-0000-000000000004', order: 4,  title: '長度、重量、容量與時間', icon: '📏', desc: '單位換算、進率關係' },
  { id: 'a3000000-0000-0000-0000-000000000005', order: 5,  title: '平面幾何',             icon: '📐', desc: '周長、面積、角度' },
  { id: 'a3000000-0000-0000-0000-000000000006', order: 6,  title: '立體幾何',             icon: '📦', desc: '表面積、體積、容積' },
  { id: 'a3000000-0000-0000-0000-000000000007', order: 7,  title: '速率',                icon: '🚀', desc: '速度、時間、距離三角公式' },
  { id: 'a3000000-0000-0000-0000-000000000008', order: 8,  title: '比、比值與百分率',      icon: '📊', desc: '最簡比、比值、折扣、百分率' },
  { id: 'a3000000-0000-0000-0000-000000000009', order: 9,  title: '統計',                icon: '📈', desc: '平均數、中位數、眾數、圖表' },
  { id: 'a3000000-0000-0000-0000-000000000010', order: 10, title: '代數',                icon: '🔡', desc: '方程式、雞兔同籠、種樹問題' },
]

export default function BridgeMathHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)

  useEffect(() => {
    fetchWrongCounts()
  }, [])

  async function fetchWrongCounts() {
    const { data } = await supabase
      .from('questions')
      .select('unit_id, wrong_count, consecutive_correct')
      .eq('subject_id', SUBJECT_ID)

    if (!data) return

    // 在錯題本中的題目：做錯過 且 連續答對次數 < 3
    const counts = {}
    let total = 0
    data.forEach(q => {
      if (q.wrong_count > 0 && q.consecutive_correct < 3) {
        counts[q.unit_id] = (counts[q.unit_id] || 0) + 1
        total++
      }
    })
    setWrongCounts(counts)
    setTotalWrong(total)
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge')}>← 返回</button>
        <div className="header-content center">
          <h1>🔢 銜接數學</h1>
          <p>選擇單元開始練習</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* 錯題本入口 */}
          {totalWrong > 0 && (
            <div
              onClick={() => navigate('/bridge/math/practice/wrong')}
              style={{
                background: 'linear-gradient(135deg, #FEF2F2, #FFF)',
                border: '2px solid #FCA5A5', borderRadius: '16px',
                padding: '20px 24px', marginBottom: '24px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '16px',
                transition: 'all 0.2s', boxShadow: 'var(--shadow)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '36px' }}>📋</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#DC2626' }}>錯題本</div>
                <div style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '2px' }}>
                  共 {totalWrong} 題待複習（連續答對3次可退出）
                </div>
              </div>
              <div style={{ fontSize: '20px', color: '#DC2626' }}>→</div>
            </div>
          )}

          {/* 單元列表 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {UNITS.map(unit => (
              <div
                key={unit.id}
                onClick={() => navigate(`/bridge/math/unit/${unit.id}`)}
                style={{
                  background: 'white', borderRadius: '16px', padding: '20px 24px',
                  cursor: 'pointer', boxShadow: 'var(--shadow)', border: '2px solid transparent',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '16px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.borderColor = '#2563EB'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                }}
              >
                <div style={{
                  width: '44px', height: '44px', background: '#EFF6FF',
                  borderRadius: '12px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '22px', flexShrink: 0
                }}>
                  {unit.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#2563EB', fontWeight: 600 }}>
                      單元 {unit.order}
                    </span>
                    {wrongCounts[unit.id] > 0 && (
                      <span style={{
                        fontSize: '11px', background: '#FEF2F2', color: '#DC2626',
                        padding: '2px 8px', borderRadius: '8px', fontWeight: 600
                      }}>
                        錯題 {wrongCounts[unit.id]}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, margin: '2px 0' }}>{unit.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>{unit.desc}</div>
                </div>
                <div style={{ fontSize: '18px', color: 'var(--text-light)' }}>›</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
