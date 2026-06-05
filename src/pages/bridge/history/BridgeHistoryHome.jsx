// src/pages/bridge/history/BridgeHistoryHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'e1000000-0000-0000-0000-000000000001'

const UNITS = [
  { id: 'e5000000-0000-0000-0000-000000000001', order: 1, title: '遠古臺灣和原住民',   icon: '🏺', desc: '史前文化、原住民族群、傳統生活與文化' },
  { id: 'e5000000-0000-0000-0000-000000000002', order: 2, title: '荷西時期',           icon: '⚓', desc: '荷蘭、西班牙來臺、建設與影響、鄭成功驅荷' },
  { id: 'e5000000-0000-0000-0000-000000000003', order: 3, title: '臺灣的明鄭王朝',     icon: '⚔️', desc: '鄭成功建立政權、治臺政策、與清朝的關係' },
  { id: 'e5000000-0000-0000-0000-000000000004', order: 4, title: '清朝初期',           icon: '🏯', desc: '清朝治臺政策、渡臺禁令、漢人開墾、民變' },
  { id: 'e5000000-0000-0000-0000-000000000005', order: 5, title: '清末的現代化',       icon: '🚂', desc: '開港通商、劉銘傳建設、甲午戰爭、割讓臺灣' },
  { id: 'e5000000-0000-0000-0000-000000000006', order: 6, title: '日治時期',           icon: '🌸', desc: '日本統治政策、抗日運動、社會建設、皇民化' },
  { id: 'e5000000-0000-0000-0000-000000000007', order: 7, title: '中華民國時期',       icon: '🏛️', desc: '光復、二二八、戒嚴、十大建設、民主化' },
  { id: 'e5000000-0000-0000-0000-000000000008', order: 8, title: '科學發展的歷史',     icon: '🔬', desc: '重要科學發現、工業革命、科技對社會的影響' },
  { id: 'e5000000-0000-0000-0000-000000000009', order: 9, title: '宗教與古文化',       icon: '🌍', desc: '世界主要宗教、古文明發源地與文化特色' },
]

export default function BridgeHistoryHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [questionCounts, setQuestionCounts] = useState({})
  const [newCounts, setNewCounts] = useState({})
  const [totalAttempted, setTotalAttempted] = useState(0)
  const [showCountPicker, setShowCountPicker] = useState(false)

  useEffect(() => { fetchStats() }, [])

  async function fetchStats() {
    const { data } = await supabase
      .from('questions')
      .select('unit_id, wrong_count, consecutive_correct, attempt_count')
      .eq('subject_id', SUBJECT_ID)
    if (!data) return
    const wrong = {}, counts = {}, newC = {}
    let total = 0, attempted = 0
    data.forEach(q => {
      counts[q.unit_id] = (counts[q.unit_id] || 0) + 1
      if (q.attempt_count === 0) newC[q.unit_id] = (newC[q.unit_id] || 0) + 1
      if (q.wrong_count > 0 && q.consecutive_correct < 3) { wrong[q.unit_id] = (wrong[q.unit_id] || 0) + 1; total++ }
      if (q.attempt_count > 0) attempted++
    })
    setWrongCounts(wrong); setTotalWrong(total); setQuestionCounts(counts); setNewCounts(newC); setTotalAttempted(attempted)
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge')}>← 返回</button>
        <div className="header-content center">
          <h1>📜 銜接歷史</h1>
          <p>選擇單元開始練習</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {(totalWrong > 0 || totalAttempted > 0) && (
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              {totalWrong > 0 && (
                <div onClick={() => navigate('/bridge/history/practice/wrong')}
                  style={{ flex: 1, background: 'linear-gradient(135deg, #FEF2F2, #FFF)', border: '2px solid #FCA5A5', borderRadius: '16px', padding: '16px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s', boxShadow: 'var(--shadow)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ fontSize: '28px' }}>📋</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#DC2626' }}>錯題本</div>
                    <div style={{ fontSize: '13px', color: '#EF4444', marginTop: '2px' }}>{totalWrong} 題待複習</div>
                  </div>
                  <div style={{ fontSize: '18px', color: '#FCA5A5' }}>›</div>
                </div>
              )}
              {totalAttempted > 0 && !showCountPicker && (
                <div onClick={() => setShowCountPicker(true)}
                  style={{ flex: 1, background: 'linear-gradient(135deg, #EFF6FF, #FFF)', border: '2px solid #93C5FD', borderRadius: '16px', padding: '16px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s', boxShadow: 'var(--shadow)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ fontSize: '28px' }}>🎲</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#2563EB' }}>隨機抽題</div>
                    <div style={{ fontSize: '13px', color: '#3B82F6', marginTop: '2px' }}>已作答 {totalAttempted} 題中抽選</div>
                  </div>
                  <div style={{ fontSize: '18px', color: '#93C5FD' }}>›</div>
                </div>
              )}
              {totalAttempted > 0 && showCountPicker && (
                <div style={{ flex: 1, background: 'linear-gradient(135deg, #EFF6FF, #FFF)', border: '2px solid #93C5FD', borderRadius: '16px', padding: '16px 20px', boxShadow: 'var(--shadow)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginBottom: '10px' }}>🎲 選擇題數</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[10, 20, 30, 50].filter(n => n <= totalAttempted).map(n => (
                      <button key={n} onClick={() => { setShowCountPicker(false); navigate(`/bridge/history/综合?mode=random&count=${n}`) }}
                        style={{ flex: 1, minWidth: '48px', padding: '8px 4px', background: '#2563EB', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>{n} 題</button>
                    ))}
                    <button onClick={() => setShowCountPicker(false)}
                      style={{ flex: 1, minWidth: '48px', padding: '8px 4px', background: '#F1F5F9', color: 'var(--text-light)', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>取消</button>
                  </div>
                </div>
              )}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {UNITS.map(unit => {
              const hasWrong = wrongCounts[unit.id] > 0
              const qCount = questionCounts[unit.id] || 0
              const newCount = newCounts[unit.id] || 0
              return (
                <div key={unit.id} style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
                  <div onClick={() => navigate(`/bridge/history/unit/${unit.id}`)}
                    style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', cursor: 'pointer', borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                    <div style={{ fontSize: '28px', minWidth: '36px', textAlign: 'center' }}>{unit.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-dark)' }}>第{unit.order}單元　{unit.title}</span>
                        {hasWrong && <span style={{ background: '#FEE2E2', color: '#DC2626', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '10px' }}>{wrongCounts[unit.id]} 錯題</span>}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '3px' }}>{unit.desc}</div>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>知識整理 ›</div>
                  </div>
                  <div style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
                    <div onClick={() => qCount > 0 ? navigate(`/bridge/history/practice/${unit.id}`) : null}
                      style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', cursor: qCount > 0 ? 'pointer' : 'default', background: qCount > 0 ? '#F0FDF4' : '#FAFAFA', transition: 'background 0.15s', borderRight: (newCount > 0 || hasWrong) ? '1px solid var(--border)' : 'none' }}
                      onMouseEnter={e => { if (qCount > 0) e.currentTarget.style.background = '#DCFCE7' }}
                      onMouseLeave={e => { e.currentTarget.style.background = qCount > 0 ? '#F0FDF4' : '#FAFAFA' }}>
                      <span style={{ fontSize: '15px' }}>✏️</span>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: qCount > 0 ? '#16A34A' : 'var(--text-light)' }}>{qCount > 0 ? `練習（${qCount} 題）` : '題目準備中'}</span>
                      {qCount > 0 && <span style={{ marginLeft: 'auto', fontSize: '15px', color: '#86EFAC' }}>›</span>}
                    </div>
                    {newCount > 0 && (
                      <div onClick={() => navigate(`/bridge/history/practice/${unit.id}?mode=new`)}
                        style={{ width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 16px', cursor: 'pointer', background: '#EFF6FF', borderRight: hasWrong ? '1px solid var(--border)' : 'none', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#DBEAFE'}
                        onMouseLeave={e => e.currentTarget.style.background = '#EFF6FF'}>
                        <span style={{ fontSize: '14px' }}>🆕</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#2563EB' }}>新題（{newCount}）</span>
                      </div>
                    )}
                    {hasWrong && (
                      <div onClick={() => navigate(`/bridge/history/unit/${unit.id}/wrong`)}
                        style={{ width: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '12px 16px', cursor: 'pointer', background: '#FEF2F2', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                        onMouseLeave={e => e.currentTarget.style.background = '#FEF2F2'}>
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
