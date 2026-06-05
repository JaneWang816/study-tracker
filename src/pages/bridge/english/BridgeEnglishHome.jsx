import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'

const SUBJECT_ID = 'c1000000-0000-0000-0000-000000000003'
const TOPIC_ID   = 'c2000000-0000-0000-0000-000000000001'
const THEME      = '#0891B2'

export default function BridgeEnglishHome() {
  const navigate = useNavigate()
  const [units, setUnits] = useState([])
  const [stats, setStats] = useState({}) // unitId -> { total, attempted, wrong, new }
  const [subjectStats, setSubjectStats] = useState({ hasAttempted: false, hasWrong: false })
  const [showRandomPicker, setShowRandomPicker] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // 載入單元
    const { data: unitData } = await supabase
      .from('units')
      .select('id, title, "order"')
      .eq('topic_id', TOPIC_ID)
      .order('"order"')

    if (!unitData) { setLoading(false); return }
    setUnits(unitData)

    // 載入題目統計
    const { data: questions } = await supabase
      .from('questions')
      .select('id, unit_id, attempt_count, wrong_count, consecutive_correct')
      .eq('subject_id', SUBJECT_ID)
      .eq('user_id', user.id)

    if (!questions) { setLoading(false); return }

    const statsMap = {}
    for (const u of unitData) {
      const qs = questions.filter(q => q.unit_id === u.id)
      statsMap[u.id] = {
        total:     qs.length,
        attempted: qs.filter(q => q.attempt_count > 0).length,
        wrong:     qs.filter(q => q.wrong_count > 0 && q.consecutive_correct < 3).length,
        new:       qs.filter(q => q.attempt_count === 0).length,
      }
    }
    setStats(statsMap)

    const allAttempted = questions.filter(q => q.attempt_count > 0).length
    const allWrong     = questions.filter(q => q.wrong_count > 0 && q.consecutive_correct < 3).length
    setSubjectStats({ hasAttempted: allAttempted > 0, hasWrong: allWrong > 0 })
    setLoading(false)
  }

  const totalAttempted = Object.values(stats).reduce((s, v) => s + v.attempted, 0)
  const randomOptions  = [10, 20, 30, 50].filter(n => n <= totalAttempted)

  return (
    <div style={{ minHeight: '100vh', background: '#f0f9ff', padding: '1.5rem 1rem' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => navigate('/bridge')}
            style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}
          >←</button>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: THEME }}>銜接英文</h1>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>11 個單元・單字片語・文法句型</p>
          </div>
        </div>

        {/* 錯題本 + 隨機抽題 */}
        {(subjectStats.hasWrong || subjectStats.hasAttempted) && (
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {subjectStats.hasWrong && (
              <button
                onClick={() => navigate('/bridge/english/practice/wrong')}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: 10,
                  background: '#fee2e2', border: '1px solid #fca5a5',
                  color: '#dc2626', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer'
                }}
              >📋 錯題本</button>
            )}
            {subjectStats.hasAttempted && (
              <div style={{ flex: subjectStats.hasWrong ? 1 : 2, position: 'relative' }}>
                <button
                  onClick={() => setShowRandomPicker(p => !p)}
                  style={{
                    width: '100%', padding: '0.75rem', borderRadius: 10,
                    background: '#dbeafe', border: '1px solid #93c5fd',
                    color: '#1d4ed8', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer'
                  }}
                >🎲 隨機抽題</button>
                {showRandomPicker && (
                  <div style={{
                    position: 'absolute', top: '110%', left: 0, right: 0, zIndex: 10,
                    background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '0.5rem'
                  }}>
                    {randomOptions.length === 0
                      ? <p style={{ textAlign: 'center', color: '#94a3b8', margin: '0.5rem 0' }}>題目不足</p>
                      : randomOptions.map(n => (
                          <button key={n}
                            onClick={() => navigate(`/bridge/english/综合?mode=random&count=${n}`)}
                            style={{
                              display: 'block', width: '100%', padding: '0.5rem',
                              background: 'none', border: 'none', cursor: 'pointer',
                              fontSize: '0.95rem', color: '#1e40af', borderRadius: 6
                            }}
                          >{n} 題</button>
                        ))
                    }
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 單元列表 */}
        {loading ? (
          <p style={{ textAlign: 'center', color: '#94a3b8' }}>載入中...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {units.map((u, i) => {
              const s = stats[u.id] || { total: 0, attempted: 0, wrong: 0, new: 0 }
              return (
                <div key={u.id} style={{
                  background: '#fff', borderRadius: 12,
                  border: '1px solid #e0f2fe', overflow: 'hidden',
                  boxShadow: '0 1px 4px rgba(8,145,178,0.06)'
                }}>
                  {/* 上列：標題 + 知識整理 */}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem 1rem'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginRight: '0.4rem' }}>
                        U{String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontWeight: 600, color: '#0e7490' }}>{u.title}</span>
                      {s.total > 0 && (
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                          {s.attempted}/{s.total} 題已做
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => navigate(`/bridge/english/unit/${u.id}`)}
                      style={{
                        background: 'none', border: `1px solid ${THEME}`,
                        color: THEME, padding: '0.3rem 0.75rem',
                        borderRadius: 6, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap'
                      }}
                    >知識整理 ›</button>
                  </div>

                  {/* 下列：練習按鈕 */}
                  {s.total > 0 && (
                    <div style={{
                      display: 'flex', gap: '0.5rem', padding: '0 1rem 0.75rem'
                    }}>
                      <button
                        onClick={() => navigate(`/bridge/english/practice/${u.id}`)}
                        style={{
                          flex: 1, padding: '0.45rem 0',
                          background: '#dcfce7', border: '1px solid #86efac',
                          color: '#166534', borderRadius: 8, fontSize: '0.85rem',
                          fontWeight: 600, cursor: 'pointer'
                        }}
                      >✏️ 練習（{s.total} 題）</button>

                      {s.new > 0 && (
                        <button
                          onClick={() => navigate(`/bridge/english/practice/${u.id}?mode=new`)}
                          style={{
                            padding: '0.45rem 0.75rem',
                            background: '#dbeafe', border: '1px solid #93c5fd',
                            color: '#1e40af', borderRadius: 8, fontSize: '0.85rem',
                            fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap'
                          }}
                        >🆕 新題（{s.new}）</button>
                      )}

                      {s.wrong > 0 && (
                        <button
                          onClick={() => navigate(`/bridge/english/unit/${u.id}/wrong`)}
                          style={{
                            padding: '0.45rem 0.75rem',
                            background: '#fee2e2', border: '1px solid #fca5a5',
                            color: '#dc2626', borderRadius: 8, fontSize: '0.85rem',
                            fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap'
                          }}
                        >📋 錯題（{s.wrong}）</button>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
