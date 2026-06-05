// src/pages/bridge/bio/BridgeBiologyHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'b1000000-0000-0000-0000-000000000001'
const TOPIC_ID   = 'b2000000-0000-0000-0000-000000000001'

const UNITS = [
  { id: 'b5000000-0000-0000-0000-000000000001', order: 1,  title: '複式顯微鏡',         icon: '🔬', desc: '構造、操作步驟、視野影像特性' },
  { id: 'b5000000-0000-0000-0000-000000000002', order: 2,  title: '解剖顯微鏡',         icon: '🔭', desc: '構造、與複式顯微鏡比較、操作' },
  { id: 'b5000000-0000-0000-0000-000000000003', order: 3,  title: '細胞的構造與機能',   icon: '🧫', desc: '細胞各構造功能、動植物細胞比較' },
  { id: 'b5000000-0000-0000-0000-000000000004', order: 4,  title: '生物體的組成層次',   icon: '🧬', desc: '細胞→組織→器官→器官系統→個體' },
  { id: 'b5000000-0000-0000-0000-000000000005', order: 5,  title: '生物的分類階層',     icon: '🌳', desc: '界門綱目科屬種、雙名法' },
  { id: 'b5000000-0000-0000-0000-000000000006', order: 6,  title: '原核與原生生物界',   icon: '🦠', desc: '細菌、原生生物特徵與代表生物' },
  { id: 'b5000000-0000-0000-0000-000000000007', order: 7,  title: '真菌界',             icon: '🍄', desc: '真菌特徵、營養方式、代表種類' },
  { id: 'b5000000-0000-0000-0000-000000000008', order: 8,  title: '植物界',             icon: '🌿', desc: '維管束植物、無維管束植物、裸子被子' },
  { id: 'b5000000-0000-0000-0000-000000000009', order: 9,  title: '動物界',             icon: '🐾', desc: '無脊椎動物、脊椎動物分類' },
  { id: 'b5000000-0000-0000-0000-000000000010', order: 10, title: '動物的生殖與分類',   icon: '🥚', desc: '有性生殖、無性生殖、胎生卵生' },
  { id: 'b5000000-0000-0000-0000-000000000011', order: 11, title: '植物的營養器官',     icon: '🌱', desc: '根、莖、葉的構造與功能' },
  { id: 'b5000000-0000-0000-0000-000000000012', order: 12, title: '植物的生殖',         icon: '🌸', desc: '花的構造、授粉、果實與種子' },
  { id: 'b5000000-0000-0000-0000-000000000013', order: 13, title: '植物體內進行的作用', icon: '🍃', desc: '光合作用、呼吸作用、蒸散作用' },
  { id: 'b5000000-0000-0000-0000-000000000014', order: 14, title: '人體的消化',         icon: '🫀', desc: '消化器官、消化過程、營養吸收' },
  { id: 'b5000000-0000-0000-0000-000000000015', order: 15, title: '人體的血液循環',     icon: '🩸', desc: '心臟、血管、血液成分、體肺循環' },
  { id: 'b5000000-0000-0000-0000-000000000016', order: 16, title: '人體的呼吸與排泄',   icon: '🫁', desc: '呼吸器官、氣體交換、排泄器官' },
  { id: 'b5000000-0000-0000-0000-000000000017', order: 17, title: '生物與環境的關係',   icon: '🌍', desc: '非生物因子、生物因子、交互作用' },
  { id: 'b5000000-0000-0000-0000-000000000018', order: 18, title: '族群、群集與生態系', icon: '🦋', desc: '族群特性、群集關係、能量流動' },
  { id: 'b5000000-0000-0000-0000-000000000019', order: 19, title: '環境污染及自然保育', icon: '♻️', desc: '空氣水土壤污染、生物多樣性保育' },
]

export default function BridgeBiologyHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [questionCounts, setQuestionCounts] = useState({})
  const [totalAttempted, setTotalAttempted] = useState(0)
  const [newCounts, setNewCounts] = useState({})
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
          <h1>🔬 銜接生物</h1>
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
                  onClick={() => navigate('/bridge/bio/practice/wrong')}
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
                          navigate(`/bridge/bio/综合?mode=random&count=${n}`)
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
              const newCount = newCounts[unit.id] || 0
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
                    onClick={() => navigate(`/bridge/bio/unit/${unit.id}`)}
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
                        ? navigate(`/bridge/bio/practice/${unit.id}`)
                        : null
                      }
                      style={{
                        flex: 1, display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '12px 20px',
                        cursor: qCount > 0 ? 'pointer' : 'default',
                        background: qCount > 0 ? '#F0FDF4' : '#FAFAFA',
                        transition: 'background 0.15s',
                        borderRight: (newCount > 0 || hasWrong) ? '1px solid var(--border)' : 'none'
                      }}
                      onMouseEnter={e => {
                        if (qCount > 0) e.currentTarget.style.background = '#DCFCE7'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = qCount > 0 ? '#F0FDF4' : '#FAFAFA'
                      }}
                    >
                      <span style={{ fontSize: '15px' }}>✏️</span>
                      <span style={{
                        fontSize: '14px', fontWeight: 600,
                        color: qCount > 0 ? '#16A34A' : 'var(--text-light)'
                      }}>
                        {qCount > 0 ? `練習（${qCount} 題）` : '題目準備中'}
                      </span>
                      {qCount > 0 && (
                        <span style={{ marginLeft: 'auto', fontSize: '15px', color: '#86EFAC' }}>›</span>
                      )}
                    </div>

                    {/* 錯題複習（有錯題才顯示） */}
                    {newCount > 0 && (
                      <div onClick={() => navigate(`/bridge/bio/practice/${unit.id}?mode=new`)}
                        style={{ width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 16px', cursor: 'pointer', background: '#EFF6FF', borderRight: hasWrong ? '1px solid var(--border)' : 'none', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#DBEAFE'}
                        onMouseLeave={e => e.currentTarget.style.background = '#EFF6FF'}>
                        <span style={{ fontSize: '14px' }}>🆕</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#2563EB' }}>新題({newCount})</span>
                      </div>
                    )}
                                        {hasWrong && (
                      <div
                        onClick={() => navigate(`/bridge/bio/unit/${unit.id}/wrong`)}
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
