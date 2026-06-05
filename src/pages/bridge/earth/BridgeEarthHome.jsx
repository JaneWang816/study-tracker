// src/pages/bridge/earth/BridgeEarthHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'b1000000-0000-0000-0000-000000000003'

const UNITS = [
  { id: 'b5000000-0000-0000-0000-000000000030', order: 1, title: '月球',           icon: '🌙', desc: '月球基本資料、月相變化、觀測方法、農曆日期' },
  { id: 'b5000000-0000-0000-0000-000000000031', order: 2, title: '太陽',           icon: '☀️', desc: '太陽位置、四季變化、晝夜長短、竿影長度、太陽基本資料' },
  { id: 'b5000000-0000-0000-0000-000000000032', order: 3, title: '日食與月食',     icon: '🌑', desc: '日食、月食的成因與種類' },
  { id: 'b5000000-0000-0000-0000-000000000033', order: 4, title: '星星與星座',     icon: '⭐', desc: '恆星、星座、北極星、星座盤使用方法' },
  { id: 'b5000000-0000-0000-0000-000000000034', order: 5, title: '銀河系與太陽系', icon: '🪐', desc: '銀河系、太陽系、八大行星、恆星與行星的區別' },
  { id: 'b5000000-0000-0000-0000-000000000035', order: 6, title: '天氣的變化',     icon: '🌤️', desc: '氣溫、氣壓、風、雲、雨、天氣預報' },
  { id: 'b5000000-0000-0000-0000-000000000036', order: 7, title: '地表的變化',     icon: '🏔️', desc: '風化、侵蝕、搬運、堆積、岩石種類' },
  { id: 'b5000000-0000-0000-0000-000000000037', order: 8, title: '地震',           icon: '🌋', desc: '地震的成因、震度、規模、地震波' },
  { id: 'b5000000-0000-0000-0000-000000000038', order: 9, title: '全球變遷',       icon: '🌍', desc: '溫室效應、臭氧層破壞、酸雨、聖嬰現象' },
]

export default function BridgeEarthHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [questionCounts, setQuestionCounts] = useState({})
  const [newCounts, setNewCounts] = useState({})
  const [totalAttempted, setTotalAttempted] = useState(0)
  const [showCountPicker, setShowCountPicker] = useState(false)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    const { data } = await supabase
      .from('questions')
      .select('unit_id, wrong_count, consecutive_correct, attempt_count')
      .eq('subject_id', SUBJECT_ID)
    if (!data) return
    const wrong = {}
    const counts = {}
    const newC = {}
    let total = 0
    let attempted = 0
    data.forEach(q => {
      counts[q.unit_id] = (counts[q.unit_id] || 0) + 1
      if (q.attempt_count === 0) newC[q.unit_id] = (newC[q.unit_id] || 0) + 1
      if (q.wrong_count > 0 && q.consecutive_correct < 3) {
        wrong[q.unit_id] = (wrong[q.unit_id] || 0) + 1
        total++
      }
      if (q.attempt_count > 0) attempted++
    })
    setWrongCounts(wrong)
    setTotalWrong(total)
    setQuestionCounts(counts)
    setNewCounts(newC)
    setTotalAttempted(attempted)
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge')}>← 返回</button>
        <div className="header-content center">
          <h1>🌍 銜接地科</h1>
          <p>選擇單元開始練習</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* 錯題本 + 隨機抽題 並排列 */}
          {(totalWrong > 0 || totalAttempted > 0) && (
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>

              {/* 錯題本（有錯題才顯示） */}
              {totalWrong > 0 && (
                <div
                  onClick={() => navigate('/bridge/earth/practice/wrong')}
                  style={{
                    flex: 1, background: 'linear-gradient(135deg, #FEF2F2, #FFF)',
                    border: '2px solid #FCA5A5', borderRadius: '16px',
                    padding: '16px 20px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    transition: 'all 0.2s', boxShadow: 'var(--shadow)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '28px' }}>📋</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#DC2626' }}>錯題本</div>
                    <div style={{ fontSize: '13px', color: '#EF4444', marginTop: '2px' }}>
                      {totalWrong} 題待複習
                    </div>
                  </div>
                  <div style={{ fontSize: '18px', color: '#FCA5A5' }}>›</div>
                </div>
              )}

              {/* 隨機抽題 */}
              {totalAttempted > 0 && !showCountPicker && (
                <div
                  onClick={() => setShowCountPicker(true)}
                  style={{
                    flex: 1, background: 'linear-gradient(135deg, #ECFDF5, #FFF)',
                    border: '2px solid #6EE7B7', borderRadius: '16px',
                    padding: '16px 20px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    transition: 'all 0.2s', boxShadow: 'var(--shadow)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '28px' }}>🎲</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#059669' }}>隨機抽題</div>
                    <div style={{ fontSize: '13px', color: '#10B981', marginTop: '2px' }}>
                      已作答 {totalAttempted} 題中抽選
                    </div>
                  </div>
                  <div style={{ fontSize: '18px', color: '#6EE7B7' }}>›</div>
                </div>
              )}

              {/* 題數選擇器 */}
              {totalAttempted > 0 && showCountPicker && (
                <div style={{
                  flex: 1, background: 'linear-gradient(135deg, #ECFDF5, #FFF)',
                  border: '2px solid #6EE7B7', borderRadius: '16px',
                  padding: '16px 20px', boxShadow: 'var(--shadow)'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#059669', marginBottom: '10px' }}>
                    🎲 選擇題數
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[10, 20, 30, 50].filter(n => n <= totalAttempted).map(n => (
                      <button
                        key={n}
                        onClick={() => {
                          setShowCountPicker(false)
                          navigate(`/bridge/earth/综合?mode=random&count=${n}`)
                        }}
                        style={{
                          flex: 1, minWidth: '48px', padding: '8px 4px',
                          background: '#059669', color: 'white',
                          border: 'none', borderRadius: '8px',
                          fontSize: '14px', fontWeight: 700, cursor: 'pointer'
                        }}
                      >
                        {n} 題
                      </button>
                    ))}
                    <button
                      onClick={() => setShowCountPicker(false)}
                      style={{
                        flex: 1, minWidth: '48px', padding: '8px 4px',
                        background: '#F1F5F9', color: 'var(--text-light)',
                        border: 'none', borderRadius: '8px',
                        fontSize: '14px', fontWeight: 700, cursor: 'pointer'
                      }}
                    >
                      取消
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* 單元列表 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {UNITS.map(unit => {
              const hasWrong = wrongCounts[unit.id] > 0
              const qCount = questionCounts[unit.id] || 0
              const newCount = newCounts[unit.id] || 0
              return (
                <div
                  key={unit.id}
                  style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}
                >
                  {/* 知識整理列 */}
                  <div
                    onClick={() => navigate(`/bridge/earth/unit/${unit.id}`)}
                    style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', cursor: 'pointer', borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}
                  >
                    <div style={{ fontSize: '28px', minWidth: '36px', textAlign: 'center' }}>{unit.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-dark)' }}>第{unit.order}單元　{unit.title}</span>
                        {hasWrong && (
                          <span style={{ background: '#FEE2E2', color: '#DC2626', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>
                            {wrongCounts[unit.id]} 錯題
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '3px' }}>{unit.desc}</div>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>知識整理 ›</div>
                  </div>

                  {/* 練習按鈕列 */}
                  <div style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
                    <div
                      onClick={() => qCount > 0 ? navigate(`/bridge/earth/practice/${unit.id}`) : null}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', cursor: qCount > 0 ? 'pointer' : 'default', background: qCount > 0 ? '#ECFDF5' : '#FAFAFA', transition: 'background 0.15s', borderRight: (newCount > 0 || hasWrong) ? '1px solid var(--border)' : 'none' }}
                      onMouseEnter={e => { if (qCount > 0) e.currentTarget.style.background = '#D1FAE5' }}
                      onMouseLeave={e => { e.currentTarget.style.background = qCount > 0 ? '#ECFDF5' : '#FAFAFA' }}
                    >
                      <span style={{ fontSize: '15px' }}>✏️</span>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: qCount > 0 ? '#059669' : 'var(--text-light)' }}>
                        {qCount > 0 ? `練習（${qCount} 題）` : '題目準備中'}
                      </span>
                      {qCount > 0 && <span style={{ marginLeft: 'auto', fontSize: '15px', color: '#6EE7B7' }}>›</span>}
                    </div>

                    {newCount > 0 && (
                      <div
                        onClick={() => navigate(`/bridge/earth/practice/${unit.id}?mode=new`)}
                        style={{ width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 16px', cursor: 'pointer', background: '#EFF6FF', borderRight: hasWrong ? '1px solid var(--border)' : 'none', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#DBEAFE'}
                        onMouseLeave={e => e.currentTarget.style.background = '#EFF6FF'}
                      >
                        <span style={{ fontSize: '14px' }}>🆕</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#2563EB' }}>新題（{newCount}）</span>
                      </div>
                    )}

                    {hasWrong && (
                      <div
                        onClick={() => navigate(`/bridge/earth/unit/${unit.id}/wrong`)}
                        style={{ width: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 16px', cursor: 'pointer', background: '#FEF2F2', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                        onMouseLeave={e => e.currentTarget.style.background = '#FEF2F2'}
                      >
                        <span style={{ fontSize: '14px' }}>📋</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#DC2626' }}>錯題（{wrongCounts[unit.id]}）</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
