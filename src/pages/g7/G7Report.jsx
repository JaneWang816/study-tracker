// src/pages/g7/G7Report.jsx
// 七年級學習報表（家長查看）
//
// 路由：/g7/report
// 資料：g7_answer_log（每答一題一筆）＋ question_progress（計算錯題本剩餘）
// 權限：g7_guardians 中有對應的家長可以看孩子；沒有對應的人只看得到自己
//
// 定義：
//   新題     ＝ 單元練習或隨機抽題中，第一次作答的題目（is_new）
//   錯題複習 ＝ 在錯題本回合（mode = 'wrong'）作答的題目，同一題答錯重來也各算一次
//   再練習   ＝ 單元練習或隨機抽題中，以前做過的題目（隨機抽題只抽做過的題，所以全部算在這裡）
//   目標     ＝ 每科每天 DAILY_NEW_TARGET 題新題，並複習一次錯題本
import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { G7_SUBJECTS, DAILY_NEW_TARGET } from '../../config/g7'
import { fetchAll, fetchProgress, withProgress, isWrong } from './progress'
import { isFill, parseBlanks, fillAnswerText } from './fill'

// ── 日期工具（以瀏覽器所在時區計算，一週從星期一開始）──
const PERIODS = [['day', '日'], ['week', '週'], ['month', '月']]
const WEEKDAY = '日一二三四五六'
const MODE_LABEL = { unit: '單元練習', wrong: '錯題複習', random: '隨機抽題' }

function startOf(period, d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  if (period === 'week') x.setDate(x.getDate() - ((x.getDay() + 6) % 7))
  if (period === 'month') x.setDate(1)
  return x
}
function shift(period, d, n) {
  const x = new Date(d)
  if (period === 'day') x.setDate(x.getDate() + n)
  else if (period === 'week') x.setDate(x.getDate() + 7 * n)
  else x.setMonth(x.getMonth() + n)
  return x
}
const dayKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
const md = d => `${d.getMonth() + 1}/${d.getDate()}`
function rangeLabel(period, from, to) {
  if (period === 'day') return `${from.getFullYear()}/${md(from)}（${WEEKDAY[from.getDay()]}）`
  if (period === 'week') { const end = shift('day', to, -1); return `${md(from)}（一）～ ${md(end)}（日）` }
  return `${from.getFullYear()} 年 ${from.getMonth() + 1} 月`
}
// 期間內已經過的日子（未來的日子不列入目標）
function daysIn(from, to) {
  const days = []
  const today = startOf('day', new Date())
  for (let d = new Date(from); d < to && d <= today; d = shift('day', d, 1)) days.push(new Date(d))
  return days
}

function parseJson(v) {
  if (v === null || v === undefined) return null
  return Array.isArray(v) ? v : JSON.parse(v)
}
function answerText(q) {
  if (isFill(q)) return fillAnswerText(parseBlanks(q.answer) || [])
  const opts = parseJson(q.options)
  const i = parseInt(String(q.answer).replace(/["\\]/g, ''), 10)
  return opts?.[i] ?? ''
}
const pct = (c, t) => (t ? `${Math.round((c / t) * 100)}%` : '—')

async function fetchByIds(table, columns, ids) {
  const rows = []
  for (let i = 0; i < ids.length; i += 100) {
    const { data, error } = await supabase.from(table).select(columns).in('id', ids.slice(i, i + 100))
    if (error) console.error(`讀取 ${table} 失敗：`, error)
    rows.push(...(data || []))
  }
  return rows
}

// ── 主元件 ─────────────────────────────────────────────────
export default function G7Report() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState(null)
  const [period, setPeriod] = useState('week')
  const [anchor, setAnchor] = useState(() => new Date())
  const [loading, setLoading] = useState(true)
  const [logs, setLogs] = useState([])
  const [wrongBook, setWrongBook] = useState({})        // subject_id → 錯題本剩餘題數
  const [questionMap, setQuestionMap] = useState({})    // 答錯題目的內容（含母題）
  const [unitTitles, setUnitTitles] = useState({})
  const [subjectFilter, setSubjectFilter] = useState('all')

  const from = useMemo(() => startOf(period, anchor), [period, anchor])
  const to = useMemo(() => shift(period, from, 1), [period, from])
  const isCurrent = to > new Date()

  // 可以查看的學生
  useEffect(() => {
    if (!user) return
    supabase.from('g7_guardians').select('student_id, student_name').eq('guardian_id', user.id)
      .then(({ data }) => {
        const list = (data || []).map(r => ({ id: r.student_id, name: r.student_name }))
        if (list.length === 0) list.push({ id: user.id, name: '我' })
        setStudents(list)
        setStudentId(list[0].id)
      })
  }, [user])

  // 錯題本剩餘：與期間無關，換學生時重算
  useEffect(() => {
    if (!studentId) return
    ;(async () => {
      const ids = G7_SUBJECTS.map(s => s.subjectId)
      const [qs, progress] = await Promise.all([
        fetchAll(() => supabase.from('questions')
          .select('id, subject_id, is_group, parent_id, exam_source')
          .in('subject_id', ids).order('id')),
        fetchProgress(studentId),
      ])
      const counts = {}
      for (const q of withProgress(qs, progress)) {
        if (q.is_group && !q.parent_id) continue
        if (isWrong(q)) counts[q.subject_id] = (counts[q.subject_id] || 0) + 1
      }
      setWrongBook(counts)
    })()
  }, [studentId])

  // 期間內的作答日誌與答錯題目
  useEffect(() => {
    if (!studentId) return
    ;(async () => {
      setLoading(true)
      const rows = await fetchAll(() => supabase.from('g7_answer_log').select('*')
        .eq('user_id', studentId)
        .gte('answered_at', from.toISOString())
        .lt('answered_at', to.toISOString())
        .order('id'))
      setLogs(rows)

      const wrongIds = [...new Set(rows.filter(r => !r.is_correct && r.question_id).map(r => r.question_id))]
      const qs = await fetchByIds('questions', 'id, subject_id, unit_id, parent_id, question_type_id, content, options, answer, explanation, image_url', wrongIds)
      const parentIds = [...new Set(qs.map(q => q.parent_id).filter(Boolean))]
      const parents = await fetchByIds('questions', 'id, content, image_url', parentIds)
      const unitIds = [...new Set(qs.map(q => q.unit_id))]
      const units = await fetchByIds('units', 'id, title', unitIds)

      const pMap = Object.fromEntries(parents.map(p => [p.id, p]))
      setQuestionMap(Object.fromEntries(qs.map(q => [q.id, { ...q, parent: pMap[q.parent_id] || null }])))
      setUnitTitles(Object.fromEntries(units.map(u => [u.id, u.title])))
      setLoading(false)
    })()
  }, [studentId, from, to])

  // ── 統計 ──
  const days = useMemo(() => daysIn(from, to), [from, to])

  const stats = useMemo(() => {
    const s = {}
    for (const r of logs) {
      const x = (s[r.subject_id] ||= { newN: 0, newC: 0, revN: 0, revC: 0, otherN: 0, otherC: 0, newByDay: {}, reviewDays: new Set() })
      const day = dayKey(new Date(r.answered_at))
      if (r.mode === 'wrong') { x.revN++; if (r.is_correct) x.revC++; x.reviewDays.add(day) }
      else if (r.is_new) { x.newN++; if (r.is_correct) x.newC++; x.newByDay[day] = (x.newByDay[day] || 0) + 1 }
      else { x.otherN++; if (r.is_correct) x.otherC++ }
    }
    return s
  }, [logs])

  const subjects = G7_SUBJECTS.filter(s => s.available || stats[s.subjectId])

  const wrongList = useMemo(() => {
    const byQ = {}
    for (const r of logs) {
      if (r.is_correct || !r.question_id || !questionMap[r.question_id]) continue
      const w = (byQ[r.question_id] ||= { q: questionMap[r.question_id], times: [], chosen: new Set(), modes: new Set() })
      w.times.push(new Date(r.answered_at))
      if (r.chosen) w.chosen.add(r.chosen)
      w.modes.add(r.mode)
    }
    return Object.values(byQ)
      .filter(w => subjectFilter === 'all' || w.q.subject_id === subjectFilter)
      .sort((a, b) => G7_SUBJECTS.findIndex(s => s.subjectId === a.q.subject_id) - G7_SUBJECTS.findIndex(s => s.subjectId === b.q.subject_id)
        || Math.max(...b.times) - Math.max(...a.times))
  }, [logs, questionMap, subjectFilter])

  // ── Render ──
  const target = DAILY_NEW_TARGET * days.length

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/g7')}>← 返回</button>
        <div className="header-content center">
          <h1>📊 學習報表</h1>
          <p>每科每天 {DAILY_NEW_TARGET} 題新題＋複習一次錯題本</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          {/* 學生、期間 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
            {students.length > 1 && (
              <select value={studentId || ''} onChange={e => setStudentId(e.target.value)} style={selectStyle}>
                {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            )}
            <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
              {PERIODS.map(([k, label]) => (
                <button key={k} onClick={() => setPeriod(k)} style={{
                  padding: '8px 18px', border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 700,
                  background: period === k ? '#2563EB' : 'white', color: period === k ? 'white' : 'var(--text-light)',
                }}>{label}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <button style={navBtn} onClick={() => setAnchor(shift(period, from, -1))}>‹</button>
            <div style={{ fontSize: '17px', fontWeight: 700, minWidth: '190px', textAlign: 'center' }}>{rangeLabel(period, from, to)}</div>
            <button style={{ ...navBtn, visibility: isCurrent ? 'hidden' : 'visible' }} onClick={() => setAnchor(shift(period, from, 1))}>›</button>
          </div>

          {loading ? <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>讀取中⋯</p> : (
            <>
              {/* 各科摘要 */}
              <Section title="各科摘要">
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={th}>科目</th>
                        <th style={th}>新題<br /><small>（目標 {target}）</small></th>
                        <th style={th}>新題<br />正確率</th>
                        <th style={th}>錯題複習<br /><small>{period === 'day' ? '' : '（天數）'}</small></th>
                        <th style={th}>複習<br />正確率</th>
                        <th style={th}>再練習<br /><small>（正確率）</small></th>
                        <th style={th}>錯題本<br />剩餘</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map(s => {
                        const x = stats[s.subjectId] || { newN: 0, newC: 0, revN: 0, revC: 0, otherN: 0, otherC: 0, reviewDays: new Set() }
                        const remain = wrongBook[s.subjectId] || 0
                        const ratio = target ? x.newN / target : 0
                        return (
                          <tr key={s.key}>
                            <td style={{ ...td, fontWeight: 700, color: s.color, whiteSpace: 'nowrap' }}>{s.icon} {s.label}</td>
                            <td style={{ ...td, fontWeight: 700, color: ratio >= 1 ? '#16A34A' : ratio >= 0.5 ? '#D97706' : '#DC2626' }}>{x.newN}</td>
                            <td style={td}>{pct(x.newC, x.newN)}</td>
                            <td style={td}>
                              {x.revN}
                              {period === 'day'
                                ? (x.revN ? ' ✓' : remain ? ' ✗' : '')
                                : <small style={{ color: 'var(--text-light)' }}>（{x.reviewDays.size} 天）</small>}
                            </td>
                            <td style={td}>{pct(x.revC, x.revN)}</td>
                            <td style={td}>
                              {x.otherN}
                              {x.otherN > 0 && <small style={{ color: 'var(--text-light)' }}>（{pct(x.otherC, x.otherN)}）</small>}
                            </td>
                            <td style={{ ...td, color: remain >= 10 ? '#DC2626' : 'inherit', fontWeight: remain >= 10 ? 700 : 400 }}>{remain}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <p style={noteStyle}>新題顏色：綠＝達標、橘＝達一半、紅＝不到一半。再練習＝單元練習或隨機抽題中以前做過的題目。錯題本剩餘為目前數量，不隨期間變動。</p>
              </Section>

              {/* 每日明細（週、月） */}
              {period !== 'day' && days.length > 0 && (
                <Section title="每日新題數">
                  <div style={{ overflowX: 'auto' }}>
                    <table style={tableStyle}>
                      <thead>
                        <tr>
                          <th style={th}>日期</th>
                          {subjects.map(s => <th key={s.key} style={th}>{s.label}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {days.map(d => {
                          const k = dayKey(d)
                          return (
                            <tr key={k}>
                              <td style={{ ...td, whiteSpace: 'nowrap' }}>{md(d)}（{WEEKDAY[d.getDay()]}）</td>
                              {subjects.map(s => {
                                const x = stats[s.subjectId]
                                const n = x?.newByDay[k] || 0
                                const rev = x?.reviewDays.has(k)
                                return (
                                  <td key={s.key} style={{
                                    ...td,
                                    background: n >= DAILY_NEW_TARGET ? '#DCFCE7' : n > 0 ? '#FEF3C7' : 'transparent',
                                    color: n ? 'inherit' : '#CBD5E1',
                                  }}>
                                    {n}{rev && ' 📋'}
                                  </td>
                                )
                              })}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                  <p style={noteStyle}>數字為新題數；📋 表示當天有複習錯題本。</p>
                </Section>
              )}

              {/* 答錯的題目 */}
              <Section title={`答錯的題目（${wrongList.length} 題）`}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  <Chip active={subjectFilter === 'all'} onClick={() => setSubjectFilter('all')}>全部</Chip>
                  {subjects.map(s => (
                    <Chip key={s.key} active={subjectFilter === s.subjectId} color={s.color}
                      onClick={() => setSubjectFilter(s.subjectId)}>{s.label}</Chip>
                  ))}
                </div>
                {wrongList.length === 0
                  ? <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>這段期間沒有答錯的題目</p>
                  : wrongList.map(w => <WrongCard key={w.q.id} w={w} unitTitle={unitTitles[w.q.unit_id]} />)}
              </Section>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

// ── 畫面元件 ───────────────────────────────────────────────

function WrongCard({ w, unitTitle }) {
  const { q } = w
  const s = G7_SUBJECTS.find(x => x.subjectId === q.subject_id)
  const times = [...w.times].sort((a, b) => a - b)
  return (
    <div className="question-card" style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '10px', fontSize: '13px' }}>
        {s && <span style={{ background: s.bg, color: s.color, padding: '2px 10px', borderRadius: '999px', fontWeight: 700 }}>{s.label}</span>}
        <span style={{ color: 'var(--text-light)' }}>{unitTitle}</span>
        <span style={{ marginLeft: 'auto', color: '#DC2626', fontWeight: 700 }}>
          答錯 {times.length} 次（{times.map(md).filter((v, i, a) => a.indexOf(v) === i).join('、')}）
        </span>
      </div>
      {q.parent && (
        <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px', padding: '12px 14px',
          marginBottom: '12px', fontSize: '14px', lineHeight: 1.8, whiteSpace: 'pre-line', color: '#334155' }}>
          {q.parent.image_url && (
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
              <img src={q.parent.image_url} alt="題組圖片" style={{ maxWidth: '100%', maxHeight: '260px', objectFit: 'contain' }} />
            </div>
          )}
          {q.parent.content}
        </div>
      )}
      <div className="question-text" style={{ whiteSpace: 'pre-line', marginBottom: '10px' }}>{q.content}</div>
      {q.image_url && (
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <img src={q.image_url} alt="題目圖片" style={{ maxWidth: '100%', maxHeight: '240px', objectFit: 'contain' }} />
        </div>
      )}
      <div style={{ fontSize: '14px', lineHeight: 1.8 }}>
        <div><span style={{ color: '#DC2626', fontWeight: 700 }}>❌ 他的答案：</span>{[...w.chosen].join('／') || '—'}</div>
        <div><span style={{ color: '#16A34A', fontWeight: 700 }}>✅ 正確答案：</span>{answerText(q)}</div>
        <div style={{ color: 'var(--text-light)', fontSize: '13px' }}>
          答錯時：{['unit', 'random', 'wrong'].filter(m => w.modes.has(m)).map(m => MODE_LABEL[m]).join('、')}
        </div>
      </div>
      {q.explanation && (
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '12px 14px',
          fontSize: '14px', color: '#166534', lineHeight: 1.7, marginTop: '10px', whiteSpace: 'pre-line' }}>
          <span style={{ fontWeight: 700 }}>解析：</span>{q.explanation}
        </div>
      )}
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '28px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{title}</h2>
      {children}
    </section>
  )
}

function Chip({ active, color = '#2563EB', onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: '4px 14px', borderRadius: '999px', cursor: 'pointer', font: 'inherit', fontSize: '14px',
      border: `1px solid ${active ? color : 'var(--border)'}`,
      background: active ? color : 'white', color: active ? 'white' : 'var(--text-light)',
    }}>{children}</button>
  )
}

const selectStyle = { padding: '8px 12px', borderRadius: '10px', border: '1px solid var(--border)', font: 'inherit' }
const navBtn = { width: '40px', height: '40px', borderRadius: '10px', border: '1px solid var(--border)',
  background: 'white', cursor: 'pointer', fontSize: '22px', lineHeight: 1 }
const tableStyle = { width: '100%', borderCollapse: 'collapse', background: 'white', fontSize: '14px',
  borderRadius: '10px', overflow: 'hidden', boxShadow: 'var(--shadow)' }
const th = { padding: '8px 6px', background: '#F1F5F9', fontWeight: 700, textAlign: 'center', whiteSpace: 'nowrap',
  borderBottom: '1px solid #E2E8F0', fontSize: '13px' }
const td = { padding: '8px 6px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }
const noteStyle = { fontSize: '12px', color: 'var(--text-light)', marginTop: '6px' }
