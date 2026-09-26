// src/pages/g7/G7SubjectHome.jsx
// 七年級科目頁（7 科共用）：依冊別列出單元，每單元直接進入基礎／精熟／錯題練習
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { getG7Subject, LEVELS, GRADUATE_STREAK } from '../../config/g7'

function isWrong(q) {
  return (q.wrong_count || 0) > 0 && (q.consecutive_correct || 0) < GRADUATE_STREAK
}

export default function G7SubjectHome() {
  const navigate = useNavigate()
  const { subject } = useParams()
  const meta = getG7Subject(subject)

  const [loading, setLoading] = useState(true)
  const [topics, setTopics] = useState([])      // [{ id, title, units: [...] }]
  const [stats, setStats] = useState({})        // unitId → { basic, advanced, fresh, wrong }
  const [totalWrong, setTotalWrong] = useState(0)
  const [totalAttempted, setTotalAttempted] = useState(0)
  const [showCountPicker, setShowCountPicker] = useState(false)

  useEffect(() => { if (meta) fetchAll() }, [subject])

  async function fetchAll() {
    setLoading(true)
    const { data: topicRows } = await supabase
      .from('topics').select('id, title, order')
      .eq('subject_id', meta.subjectId)
      .order('order')

    const topicIds = (topicRows || []).map(t => t.id)
    const [{ data: unitRows }, { data: qRows }] = await Promise.all([
      topicIds.length
        ? supabase.from('units').select('id, title, order, topic_id').in('topic_id', topicIds).order('order')
        : Promise.resolve({ data: [] }),
      supabase.from('questions')
        .select('unit_id, difficulty, is_group, parent_id, attempt_count, wrong_count, consecutive_correct')
        .eq('subject_id', meta.subjectId),
    ])

    const s = {}
    let wrongSum = 0, attemptedSum = 0
    for (const q of qRows || []) {
      if (q.is_group && !q.parent_id) continue   // 題組母題不算題數
      const u = (s[q.unit_id] ||= { basic: 0, advanced: 0, fresh: 0, wrong: 0 })
      if (q.difficulty === 'advanced') u.advanced++
      else u.basic++
      if (!q.attempt_count) u.fresh++
      else attemptedSum++
      if (isWrong(q)) { u.wrong++; wrongSum++ }
    }

    // 只顯示有單元的冊別（例如七下還沒建單元就先不出現）
    const grouped = (topicRows || [])
      .map(t => ({ ...t, units: (unitRows || []).filter(u => u.topic_id === t.id) }))
      .filter(t => t.units.length > 0)

    setTopics(grouped)
    setStats(s)
    setTotalWrong(wrongSum)
    setTotalAttempted(attemptedSum)
    setLoading(false)
  }

  if (!meta || !meta.available) {
    return (
      <div className="page-container">
        <main className="main-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
          <p style={{ marginBottom: '24px' }}>這個科目還沒有開放</p>
          <button className="btn btn-primary" onClick={() => navigate('/g7')}>回到科目列表</button>
        </main>
      </div>
    )
  }

  const base = `/g7/${subject}/practice`

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/g7')}>← 返回</button>
        <div className="header-content center">
          <h1>{meta.icon} 七年級{meta.label}</h1>
          <p>選擇單元和程度開始練習</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', paddingTop: '40px' }}>載入中⋯</p>
          ) : (
            <>
              {(totalWrong > 0 || totalAttempted > 0) && (
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  {totalWrong > 0 && (
                    <TopAction
                      icon="📋" title="錯題本" sub={`${totalWrong} 題待複習`}
                      color="#DC2626" bg="#FEF2F2" border="#FCA5A5"
                      onClick={() => navigate(`${base}?mode=wrong`)}
                    />
                  )}
                  {totalAttempted > 0 && !showCountPicker && (
                    <TopAction
                      icon="🎲" title="隨機抽題" sub={`從做過的 ${totalAttempted} 題中抽`}
                      color="#2563EB" bg="#EFF6FF" border="#93C5FD"
                      onClick={() => setShowCountPicker(true)}
                    />
                  )}
                  {totalAttempted > 0 && showCountPicker && (
                    <div style={{ flex: 1, minWidth: '220px', background: '#EFF6FF', border: '2px solid #93C5FD', borderRadius: '16px', padding: '14px 16px' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginBottom: '10px' }}>🎲 要抽幾題？</div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {[10, 20].filter(n => n <= totalAttempted || n === 10).map(n => (
                          <button key={n} onClick={() => navigate(`${base}?mode=random&count=${n}`)}
                            style={{ flex: 1, padding: '8px', background: '#2563EB', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                            {n} 題
                          </button>
                        ))}
                        <button onClick={() => setShowCountPicker(false)}
                          style={{ flex: 1, padding: '8px', background: 'white', color: 'var(--text-light)', border: '1px solid var(--border)', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
                          取消
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {topics.length === 0 && (
                <p style={{ textAlign: 'center', color: 'var(--text-light)', paddingTop: '40px' }}>這個科目還沒有單元</p>
              )}

              {topics.map(topic => (
                <section key={topic.id} style={{ marginBottom: '28px' }}>
                  <h2 style={{ fontSize: '15px', fontWeight: 700, color: meta.color, margin: '0 0 12px 4px' }}>
                    {topic.title}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {topic.units.map(unit => (
                      <UnitRow
                        key={unit.id}
                        unit={unit}
                        stat={stats[unit.id] || { basic: 0, advanced: 0, fresh: 0, wrong: 0 }}
                        onStart={(query) => navigate(`${base}?unit=${unit.id}&${query}`)}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  )
}

function TopAction({ icon, title, sub, color, bg, border, onClick }) {
  return (
    <button onClick={onClick} style={{
      flex: 1, minWidth: '220px', background: bg, border: `2px solid ${border}`,
      borderRadius: '16px', padding: '14px 16px', cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', font: 'inherit',
    }}>
      <span style={{ fontSize: '26px' }}>{icon}</span>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', fontSize: '15px', fontWeight: 700, color }}>{title}</span>
        <span style={{ display: 'block', fontSize: '13px', color, opacity: 0.8, marginTop: '2px' }}>{sub}</span>
      </span>
    </button>
  )
}

function UnitRow({ unit, stat, onStart }) {
  const total = stat.basic + stat.advanced
  return (
    <div style={{ background: 'white', borderRadius: '14px', border: '1px solid var(--border)', padding: '14px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-dark)' }}>{unit.title}</span>
        <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>
          {total === 0 ? '題目建置中' : `共 ${total} 題，未做 ${stat.fresh} 題`}
        </span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {Object.entries(LEVELS).map(([level, lv]) => {
          const n = stat[level]
          return (
            <button key={level} disabled={n === 0} onClick={() => onStart(`level=${level}`)}
              style={{
                flex: 1, padding: '10px 4px', borderRadius: '10px', font: 'inherit',
                fontSize: '14px', fontWeight: 700, cursor: n ? 'pointer' : 'default',
                background: n ? lv.bg : '#F8FAFC', color: n ? lv.color : '#CBD5E1',
                border: `1px solid ${n ? lv.color + '55' : 'var(--border)'}`,
              }}>
              {lv.label}（{n}）
            </button>
          )
        })}
        <button disabled={stat.wrong === 0} onClick={() => onStart('mode=wrong')}
          style={{
            flex: 1, padding: '10px 4px', borderRadius: '10px', font: 'inherit',
            fontSize: '14px', fontWeight: 700, cursor: stat.wrong ? 'pointer' : 'default',
            background: stat.wrong ? '#FEF2F2' : '#F8FAFC', color: stat.wrong ? '#DC2626' : '#CBD5E1',
            border: `1px solid ${stat.wrong ? '#FCA5A5' : 'var(--border)'}`,
          }}>
          錯題（{stat.wrong}）
        </button>
      </div>
    </div>
  )
}
