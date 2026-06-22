// src/pages/bridge/math/BridgeMathHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000001'

const UNITS = [
  { order: 1,  title: '整數四則',            icon: '🔢', desc: '交換律、結合律、分配律、四則運算法則',   basicId: 'c1010000-0000-0000-0000-000000000001', advId: 'c1020000-0000-0000-0000-000000000001' },
  { order: 2,  title: '因數與倍數',           icon: '🔗', desc: '奇偶數、質數、合數、質因數分解',        basicId: 'c1030000-0000-0000-0000-000000000001', advId: 'c1040000-0000-0000-0000-000000000001' },
  { order: 3,  title: '長度、重量、容量與時間', icon: '📏', desc: '單位換算、複名數、時間化聚',           basicId: 'c1050000-0000-0000-0000-000000000001', advId: 'c1060000-0000-0000-0000-000000000001' },
  { order: 4,  title: '四邊形',              icon: '▭',  desc: '垂直與平行、四邊形種類、面積單位換算',   basicId: 'c1070000-0000-0000-0000-000000000001', advId: 'c1080000-0000-0000-0000-000000000001' },
  { order: 5,  title: '三角形與多邊形',        icon: '△',  desc: '面積、特性、周長、不規則圖形、對稱',   basicId: 'c1090000-0000-0000-0000-000000000001', advId: 'c1100000-0000-0000-0000-000000000001' },
  { order: 6,  title: '百分率',              icon: '💯', desc: '百分率、ppm、賦稅、利息、濃度',        basicId: 'c1110000-0000-0000-0000-000000000001', advId: 'c1120000-0000-0000-0000-000000000001' },
  { order: 7,  title: '最大公因數與最小公倍數', icon: '🔍', desc: '互質、最大公因數、最小公倍數、應用',    basicId: 'c1130000-0000-0000-0000-000000000001', advId: 'c1140000-0000-0000-0000-000000000001' },
  { order: 8,  title: '分數',               icon: '½',  desc: '等值分數、通分、四則運算',             basicId: 'c1150000-0000-0000-0000-000000000001', advId: 'c1160000-0000-0000-0000-000000000001' },
  { order: 9,  title: '小數與概數',           icon: '🔣', desc: '四則運算、分數互換、概數取法、循環小數', basicId: 'c1170000-0000-0000-0000-000000000001', advId: 'c1180000-0000-0000-0000-000000000001' },
  { order: 10, title: '數列',               icon: '📐', desc: '植樹、數列、連續數總和、空心方陣、高斯',  basicId: 'c1190000-0000-0000-0000-000000000001', advId: 'c1200000-0000-0000-0000-000000000001' },
  { order: 11, title: '圓與扇形',            icon: '⭕', desc: '圓周長、圓面積、扇形面積、複合圖形',     basicId: 'c1210000-0000-0000-0000-000000000001', advId: 'c1220000-0000-0000-0000-000000000001' },
  { order: 12, title: '立體圖形的特性',        icon: '📦', desc: '角柱、角錐、展開圖、圓柱、表面積',      basicId: 'c1230000-0000-0000-0000-000000000001', advId: 'c1240000-0000-0000-0000-000000000001' },
  { order: 13, title: '體積與容積',           icon: '🧊', desc: '單位換算、體積與容積關係、有蓋無蓋容器', basicId: 'c1250000-0000-0000-0000-000000000001', advId: 'c1260000-0000-0000-0000-000000000001' },
  { order: 14, title: '比和比值',            icon: '⚖️', desc: '正比、反比、虎克定律、連比、比例尺',     basicId: 'c1270000-0000-0000-0000-000000000001', advId: 'c1280000-0000-0000-0000-000000000001' },
  { order: 15, title: '速率（一）',           icon: '🚀', desc: '時間換算、速率公式、時速分速秒速',       basicId: 'c1290000-0000-0000-0000-000000000001', advId: 'c1300000-0000-0000-0000-000000000001' },
  { order: 16, title: '速率（二）',           icon: '🚄', desc: '同地反向、異地相向、追趕、火車過橋',     basicId: 'c1310000-0000-0000-0000-000000000001', advId: 'c1320000-0000-0000-0000-000000000001' },
  { order: 17, title: '平均數、眾數與統計圖表', icon: '📊', desc: '算術平均數、加權平均數、中位數、統計圖', basicId: 'c1330000-0000-0000-0000-000000000001', advId: 'c1340000-0000-0000-0000-000000000001' },
  { order: 18, title: '應用問題（一）',        icon: '📝', desc: '和差問題、年齡問題、雞兔問題',          basicId: 'c1350000-0000-0000-0000-000000000001', advId: 'c1360000-0000-0000-0000-000000000001' },
  { order: 19, title: '應用問題（二）',        icon: '🧩', desc: '工程問題、分項對消、集合、餘數',        basicId: 'c1370000-0000-0000-0000-000000000001', advId: 'c1380000-0000-0000-0000-000000000001' },
  { order: 20, title: '排列組合與機率',        icon: '🎲', desc: '列舉法、乘法原理、加法原理、排列、組合', basicId: 'c1390000-0000-0000-0000-000000000001', advId: 'c1400000-0000-0000-0000-000000000001' },
  { order: 21, title: '代數',               icon: '🔡', desc: '未知數、式子化簡、等量公理、移項、應用題', basicId: 'c1410000-0000-0000-0000-000000000001', advId: 'c1420000-0000-0000-0000-000000000001' },
]

export default function BridgeMathHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [totalAttempted, setTotalAttempted] = useState(0)
  const [questionCounts, setQuestionCounts] = useState({})
  const [showCountPicker, setShowCountPicker] = useState(false)

  useEffect(() => { fetchStats() }, [])

  async function fetchStats() {
    const { data } = await supabase
      .from('questions')
      .select('unit_id, wrong_count, consecutive_correct, attempt_count, is_group, options')
      .eq('subject_id', SUBJECT_ID)
    if (!data) return
    const wrong = {}
    const qCounts = {}
    let total = 0
    let attempted = 0
    data.forEach(q => {
      // 只統計非 parent 題（options 不為 null）的總題數
      if (q.options !== null) {
        qCounts[q.unit_id] = (qCounts[q.unit_id] || 0) + 1
      }
      if (q.wrong_count > 0 && q.consecutive_correct < 3) {
        wrong[q.unit_id] = (wrong[q.unit_id] || 0) + 1
        total++
      }
      if (q.attempt_count > 0) attempted++
    })
    setWrongCounts(wrong)
    setQuestionCounts(qCounts)
    setTotalWrong(total)
    setTotalAttempted(attempted)
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
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* 錯題本 + 隨機抽題 並排列 */}
          {(totalWrong > 0 || totalAttempted > 0) && (
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>

              {/* 錯題本 */}
              {totalWrong > 0 && (
                <div
                  onClick={() => navigate('/bridge/math/practice/wrong')}
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
                          navigate(`/bridge/math/综合?mode=random&count=${n}`)
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
              const basicWrong = wrongCounts[unit.basicId] || 0
              const advWrong = wrongCounts[unit.advId] || 0
              const unitTotalWrong = basicWrong + advWrong
              const basicCount = questionCounts[unit.basicId] || 0
              const advCount = questionCounts[unit.advId] || 0
              return (
                <div
                  key={unit.order}
                  style={{
                    background: 'white', borderRadius: '16px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)', overflow: 'hidden'
                  }}
                >
                  {/* 知識整理列 */}
                  <div
                    onClick={() => navigate(`/bridge/math/unit/${unit.basicId}`)}
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
                        {unitTotalWrong > 0 && (
                          <span style={{
                            background: '#FEE2E2', color: '#DC2626',
                            fontSize: '11px', fontWeight: 700,
                            padding: '2px 8px', borderRadius: '10px'
                          }}>
                            {unitTotalWrong} 錯題
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

                  {/* 練習按鈕列：基礎 | 精熟 | 錯題（有錯題才出現） */}
                  <div style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>

                    {/* 基礎篇 */}
                    <div
                      onClick={() => navigate(`/bridge/math/practice/${unit.basicId}`)}
                      style={{
                        flex: 1, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: '6px',
                        padding: '12px 10px', cursor: 'pointer',
                        background: '#EFF6FF',
                        borderRight: '1px solid var(--border)',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#DBEAFE'}
                      onMouseLeave={e => e.currentTarget.style.background = '#EFF6FF'}
                    >
                      <span style={{ fontSize: '14px' }}>📘</span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#2563EB' }}>
                        基礎篇
                      </span>
                      <span style={{ fontSize: '12px', color: '#3B82F6' }}>
                        {basicCount > 0 ? `${basicCount}題` : ''}
                      </span>
                      {basicWrong > 0 && (
                        <span style={{ fontSize: '11px', color: '#DC2626' }}>({basicWrong}錯)</span>
                      )}
                    </div>

                    {/* 精熟篇 */}
                    <div
                      onClick={() => navigate(`/bridge/math/practice/${unit.advId}`)}
                      style={{
                        flex: 1, display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: '6px',
                        padding: '12px 10px', cursor: 'pointer',
                        background: '#FAF5FF',
                        borderRight: unitTotalWrong > 0 ? '1px solid var(--border)' : 'none',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#EDE9FE'}
                      onMouseLeave={e => e.currentTarget.style.background = '#FAF5FF'}
                    >
                      <span style={{ fontSize: '14px' }}>📗</span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#7C3AED' }}>
                        精熟篇
                      </span>
                      <span style={{ fontSize: '12px', color: '#7C3AED' }}>
                        {advCount > 0 ? `${advCount}題` : ''}
                      </span>
                      {advWrong > 0 && (
                        <span style={{ fontSize: '11px', color: '#DC2626' }}>({advWrong}錯)</span>
                      )}
                    </div>

                    {/* 錯題複習（有錯題才顯示） */}
                    {unitTotalWrong > 0 && (
                      <div
                        onClick={() => navigate(`/bridge/math/unit/${unit.basicId}/wrong`)}
                        style={{
                          width: '90px', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', gap: '4px',
                          padding: '12px 8px', cursor: 'pointer',
                          background: '#FEF2F2', transition: 'background 0.15s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                        onMouseLeave={e => e.currentTarget.style.background = '#FEF2F2'}
                      >
                        <span style={{ fontSize: '13px' }}>📋</span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#DC2626' }}>
                          錯題({unitTotalWrong})
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
