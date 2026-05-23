// src/pages/bridge/chemistry/BridgeChemistryHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'b1000000-0000-0000-0000-000000000002'

const UNITS = [
  { id: 'b5000000-0000-0000-0000-000000000020', order: 1,  title: '水溶液',             icon: '💧', desc: '溶質溶劑、溶解度、酸鹼性、指示劑、中和、導電性' },
  { id: 'b5000000-0000-0000-0000-000000000021', order: 2,  title: '空氣',               icon: '🌬️', desc: '空氣組成、氮氣氧氣性質、氧氣製造、二氧化碳製造與性質' },
  { id: 'b5000000-0000-0000-0000-000000000022', order: 3,  title: '聲音',               icon: '🔊', desc: '聲音的產生、傳播、速度、音量音調音色' },
  { id: 'b5000000-0000-0000-0000-000000000023', order: 4,  title: '光',                 icon: '💡', desc: '光的直進、反射、折射、透鏡成像' },
  { id: 'b5000000-0000-0000-0000-000000000024', order: 5,  title: '物理變化與化學變化', icon: '⚗️', desc: '物理變化與化學變化的定義與辨別' },
  { id: 'b5000000-0000-0000-0000-000000000025', order: 6,  title: '熱對物質的影響與熱傳播', icon: '🌡️', desc: '熱脹冷縮、比熱、熱傳導對流輻射' },
  { id: 'b5000000-0000-0000-0000-000000000026', order: 7,  title: '力與運動',           icon: '🏃', desc: '力的三要素、重力摩擦力彈力、速度加速度' },
  { id: 'b5000000-0000-0000-0000-000000000027', order: 8,  title: '簡單機械',           icon: '⚙️', desc: '槓桿、滑輪、斜面、輪軸' },
  { id: 'b5000000-0000-0000-0000-000000000028', order: 9,  title: '電',                 icon: '⚡', desc: '電流、電壓、電阻、串並聯電路' },
  { id: 'b5000000-0000-0000-0000-000000000029', order: 10, title: '磁',                 icon: '🧲', desc: '磁鐵性質、地磁、電磁感應' },
]

export default function BridgeChemistryHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [questionCounts, setQuestionCounts] = useState({})
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
    let total = 0
    let attempted = 0
    data.forEach(q => {
      counts[q.unit_id] = (counts[q.unit_id] || 0) + 1
      if (q.wrong_count > 0 && q.consecutive_correct < 3) {
        wrong[q.unit_id] = (wrong[q.unit_id] || 0) + 1
        total++
      }
      if (q.attempt_count > 0) attempted++
    })
    setWrongCounts(wrong)
    setTotalWrong(total)
    setQuestionCounts(counts)
    setTotalAttempted(attempted)
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge')}>← 返回</button>
        <div className="header-content center">
          <h1>⚗️ 銜接理化</h1>
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
                  onClick={() => navigate('/bridge/chemistry/practice/wrong')}
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
                    flex: 1, background: 'linear-gradient(135deg, #EFF6FF, #FFF)',
                    border: '2px solid #93C5FD', borderRadius: '16px',
                    padding: '16px 20px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    transition: 'all 0.2s', boxShadow: 'var(--shadow)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '28px' }}>🎲</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#2563EB' }}>隨機抽題</div>
                    <div style={{ fontSize: '13px', color: '#3B82F6', marginTop: '2px' }}>
                      已作答 {totalAttempted} 題中抽選
                    </div>
                  </div>
                  <div style={{ fontSize: '18px', color: '#93C5FD' }}>›</div>
                </div>
              )}

              {/* 題數選擇器 */}
              {totalAttempted > 0 && showCountPicker && (
                <div style={{
                  flex: 1, background: 'linear-gradient(135deg, #EFF6FF, #FFF)',
                  border: '2px solid #93C5FD', borderRadius: '16px',
                  padding: '16px 20px', boxShadow: 'var(--shadow)'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginBottom: '10px' }}>
                    🎲 選擇題數
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[10, 20, 30, 50].filter(n => n <= totalAttempted).map(n => (
                      <button
                        key={n}
                        onClick={() => {
                          setShowCountPicker(false)
                          navigate(`/bridge/chemistry/综合?mode=random&count=${n}`)
                        }}
                        style={{
                          flex: 1, minWidth: '48px', padding: '8px 4px',
                          background: '#2563EB', color: 'white',
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
              return (
                <div
                  key={unit.id}
                  style={{
                    background: 'white', borderRadius: '16px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)', overflow: 'hidden'
                  }}
                >
                  {/* 知識整理列 */}
                  <div
                    onClick={() => navigate(`/bridge/chemistry/unit/${unit.id}`)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '16px 20px', cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}
                  >
                    <div style={{ fontSize: '28px', minWidth: '36px', textAlign: 'center' }}>
                      {unit.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-dark)' }}>
                          第{unit.order}單元　{unit.title}
                        </span>
                        {hasWrong && (
                          <span style={{
                            background: '#FEE2E2', color: '#DC2626',
                            fontSize: '11px', fontWeight: 700,
                            padding: '2px 8px', borderRadius: '10px'
                          }}>
                            {wrongCounts[unit.id]} 錯題
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '3px' }}>
                        {unit.desc}
                      </div>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                      知識整理 ›
                    </div>
                  </div>

                  {/* 練習按鈕列 */}
                  <div style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
                    {/* 開始練習 */}
                    <div
                      onClick={() => qCount > 0
                        ? navigate(`/bridge/chemistry/practice/${unit.id}`)
                        : null
                      }
                      style={{
                        flex: 1, display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '12px 20px',
                        cursor: qCount > 0 ? 'pointer' : 'default',
                        background: qCount > 0 ? '#FFF7ED' : '#FAFAFA',
                        transition: 'background 0.15s',
                        borderRight: hasWrong ? '1px solid var(--border)' : 'none'
                      }}
                      onMouseEnter={e => {
                        if (qCount > 0) e.currentTarget.style.background = '#FFEDD5'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = qCount > 0 ? '#FFF7ED' : '#FAFAFA'
                      }}
                    >
                      <span style={{ fontSize: '15px' }}>✏️</span>
                      <span style={{
                        fontSize: '14px', fontWeight: 600,
                        color: qCount > 0 ? '#EA580C' : 'var(--text-light)'
                      }}>
                        {qCount > 0 ? `練習（${qCount} 題）` : '題目準備中'}
                      </span>
                      {qCount > 0 && (
                        <span style={{ marginLeft: 'auto', fontSize: '15px', color: '#FDBA74' }}>›</span>
                      )}
                    </div>

                    {/* 錯題複習（有錯題才顯示） */}
                    {hasWrong && (
                      <div
                        onClick={() => navigate(`/bridge/chemistry/unit/${unit.id}/wrong`)}
                        style={{
                          width: '130px', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', gap: '6px',
                          padding: '12px 16px', cursor: 'pointer',
                          background: '#FEF2F2', transition: 'background 0.15s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                        onMouseLeave={e => e.currentTarget.style.background = '#FEF2F2'}
                      >
                        <span style={{ fontSize: '14px' }}>📋</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#DC2626' }}>
                          錯題（{wrongCounts[unit.id]}）
                        </span>
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
