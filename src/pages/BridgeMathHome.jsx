// src/pages/BridgeMathHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

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
  { order: 18, title: '應用問題（一）',         icon: '📝', desc: '和差問題、年齡問題、雞兔問題',          basicId: 'c1350000-0000-0000-0000-000000000001', advId: 'c1360000-0000-0000-0000-000000000001' },
  { order: 19, title: '應用問題（二）',         icon: '🧩', desc: '工程問題、分項對消、集合、餘數',        basicId: 'c1370000-0000-0000-0000-000000000001', advId: 'c1380000-0000-0000-0000-000000000001' },
  { order: 20, title: '排列組合與機率',         icon: '🎲', desc: '列舉法、乘法原理、加法原理、排列、組合', basicId: 'c1390000-0000-0000-0000-000000000001', advId: 'c1400000-0000-0000-0000-000000000001' },
  { order: 21, title: '代數',               icon: '🔡', desc: '未知數、式子化簡、等量公理、移項、應用題', basicId: 'c1410000-0000-0000-0000-000000000001', advId: 'c1420000-0000-0000-0000-000000000001' },
]

// 綜合複習彈窗
function ComprehensiveModal({ totalCount, onClose, onStart }) {
  const [mode, setMode] = useState('random')
  const [count, setCount] = useState(20)
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
    }}>
      <div style={{
        background: 'white', borderRadius: '20px', padding: '28px 24px',
        width: '320px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>
          🔄 綜合複習
        </h3>

        {/* 模式選擇 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {[
            { val: 'random', label: '全題庫隨機出題', icon: '🎲' },
            { val: 'wrong',  label: '錯題複習',       icon: '📋' },
          ].map(opt => (
            <div
              key={opt.val}
              onClick={() => setMode(opt.val)}
              style={{
                padding: '14px 16px', borderRadius: '12px', cursor: 'pointer',
                border: `2px solid ${mode === opt.val ? '#2563EB' : '#E2E8F0'}`,
                background: mode === opt.val ? '#EFF6FF' : 'white',
                display: 'flex', alignItems: 'center', gap: '10px',
                transition: 'all 0.15s'
              }}
            >
              <span style={{ fontSize: '20px' }}>{opt.icon}</span>
              <span style={{ fontSize: '15px', fontWeight: mode === opt.val ? 700 : 400, color: mode === opt.val ? '#2563EB' : 'inherit' }}>
                {opt.label}
              </span>
            </div>
          ))}
        </div>

        {/* 題數選擇（僅隨機模式） */}
        {mode === 'random' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '10px' }}>
              題數（共 {totalCount} 題）
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[10, 20, 30, 50].map(n => (
                <button
                  key={n}
                  onClick={() => setCount(Math.min(n, totalCount))}
                  style={{
                    padding: '8px 16px', borderRadius: '10px', border: '2px solid',
                    borderColor: count === Math.min(n, totalCount) ? '#2563EB' : '#E2E8F0',
                    background: count === Math.min(n, totalCount) ? '#EFF6FF' : 'white',
                    color: count === Math.min(n, totalCount) ? '#2563EB' : 'inherit',
                    fontWeight: count === Math.min(n, totalCount) ? 700 : 400,
                    cursor: 'pointer', fontSize: '14px'
                  }}
                >
                  {Math.min(n, totalCount)}題
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={onClose}
            style={{
              flex: 1, padding: '12px', borderRadius: '12px',
              border: '2px solid #E2E8F0', background: 'white',
              cursor: 'pointer', fontSize: '15px', fontWeight: 600
            }}
          >
            取消
          </button>
          <button
            onClick={() => onStart(mode, count)}
            style={{
              flex: 2, padding: '12px', borderRadius: '12px',
              border: 'none', background: '#2563EB', color: 'white',
              cursor: 'pointer', fontSize: '15px', fontWeight: 700
            }}
          >
            開始
          </button>
        </div>
      </div>
    </div>
  )
}

export default function BridgeMathHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => { fetchStats() }, [])

  async function fetchStats() {
    const { data } = await supabase
      .from('questions')
      .select('unit_id, wrong_count, consecutive_correct')
      .eq('subject_id', SUBJECT_ID)
    if (!data) return
    setTotalCount(data.length)
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

  function handleStartComprehensive(mode, count) {
    setShowModal(false)
    navigate(`/bridge/math/综合?mode=${mode}&count=${count}`)
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

          {/* 綜合複習按鈕 */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              width: '100%', padding: '18px 24px', marginBottom: '16px',
              background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
              border: 'none', borderRadius: '16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '16px',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)', transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '32px' }}>🔄</div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'white' }}>綜合複習</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginTop: '2px' }}>
                全題庫隨機出題 或 跨單元錯題複習
              </div>
            </div>
            <div style={{ fontSize: '20px', color: 'white' }}>→</div>
          </button>

          {/* 錯題本入口 */}
          {totalWrong > 0 && (
            <div
              onClick={() => navigate('/bridge/math/practice/wrong')}
              style={{
                background: 'linear-gradient(135deg, #FEF2F2, #FFF)',
                border: '2px solid #FCA5A5', borderRadius: '16px',
                padding: '18px 24px', marginBottom: '24px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '16px',
                transition: 'all 0.2s', boxShadow: 'var(--shadow)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '32px' }}>📋</div>
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
            {UNITS.map(unit => {
              const basicWrong = wrongCounts[unit.basicId] || 0
              const advWrong = wrongCounts[unit.advId] || 0
              const unitTotalWrong = basicWrong + advWrong
              return (
                <div key={unit.order} style={{
                  background: 'white', borderRadius: '16px', padding: '18px 20px',
                  boxShadow: 'var(--shadow)', border: '2px solid transparent',
                }}>
                  {/* 單元標題列 - 點擊進知識整理 */}
                  <div
                    onClick={() => navigate(`/bridge/math/unit/${unit.basicId}`)}
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', cursor: 'pointer' }}
                  >
                    <div style={{
                      width: '42px', height: '42px', background: '#EFF6FF',
                      borderRadius: '12px', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '20px', flexShrink: 0
                    }}>
                      {unit.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#2563EB', fontWeight: 600, marginBottom: '2px' }}>
                        單元 {unit.order}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 700 }}>{unit.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '2px' }}>{unit.desc}</div>
                      <div style={{ fontSize: '11px', color: '#2563EB', marginTop: '4px' }}>📖 點此查看重點整理 ›</div>
                    </div>
                  </div>

                  {/* 按鈕列：基礎篇、精熟篇，有錯題才顯示錯題複習 */}
                  <div style={{ display: 'grid', gridTemplateColumns: unitTotalWrong > 0 ? '1fr 1fr 1fr' : '1fr 1fr', gap: '10px' }}>

                    <button
                      onClick={() => navigate(`/bridge/math/practice/${unit.basicId}`)}
                      style={{
                        padding: '12px 10px', borderRadius: '12px', border: '2px solid #BFDBFE',
                        background: '#EFF6FF', cursor: 'pointer', textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#DBEAFE'; e.currentTarget.style.borderColor = '#2563EB' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#EFF6FF'; e.currentTarget.style.borderColor = '#BFDBFE' }}
                    >
                      <div style={{ fontSize: '16px', marginBottom: '4px' }}>📘</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#2563EB' }}>基礎篇</div>
                      {basicWrong > 0 && (
                        <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '3px' }}>錯{basicWrong}題</div>
                      )}
                    </button>

                    <button
                      onClick={() => navigate(`/bridge/math/practice/${unit.advId}`)}
                      style={{
                        padding: '12px 10px', borderRadius: '12px', border: '2px solid #D8B4FE',
                        background: '#FAF5FF', cursor: 'pointer', textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#EDE9FE'; e.currentTarget.style.borderColor = '#7C3AED' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#FAF5FF'; e.currentTarget.style.borderColor = '#D8B4FE' }}
                    >
                      <div style={{ fontSize: '16px', marginBottom: '4px' }}>📗</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#7C3AED' }}>精熟篇</div>
                      {advWrong > 0 && (
                        <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '3px' }}>錯{advWrong}題</div>
                      )}
                    </button>

                    {unitTotalWrong > 0 && (
                      <button
                        onClick={() => navigate(`/bridge/math/unit-wrong/${unit.basicId}`)}
                        style={{
                          padding: '12px 10px', borderRadius: '12px', border: '2px solid #FCA5A5',
                          background: '#FEF2F2', cursor: 'pointer', textAlign: 'center',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#FEE2E2'; e.currentTarget.style.borderColor = '#DC2626' }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#FEF2F2'; e.currentTarget.style.borderColor = '#FCA5A5' }}
                      >
                        <div style={{ fontSize: '16px', marginBottom: '4px' }}>📋</div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#DC2626' }}>錯題複習</div>
                        <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '3px' }}>{unitTotalWrong}題</div>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {showModal && (
        <ComprehensiveModal
          totalCount={totalCount}
          onClose={() => setShowModal(false)}
          onStart={handleStartComprehensive}
        />
      )}
    </div>
  )
}
