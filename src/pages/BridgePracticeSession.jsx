// src/pages/BridgePracticeSession.jsx
// 銜接課程題庫練習
// mode: 'unit' | 'wrong' | '综合-random' | '综合-wrong'
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const USER_ID = '0c4ec0e9-872f-4e18-ae17-c95894bd820c'

const SUBJECT_MAP = {
  math:    'a1000000-0000-0000-0000-000000000001',
  chinese: 'a1000000-0000-0000-0000-000000000002',
  bio:     'b1000000-0000-0000-0000-000000000001',
  chemistry: 'b1000000-0000-0000-0000-000000000002',
  english: 'c1000000-0000-0000-0000-000000000003',
}

function getSubjectFromPath() {
  const parts = window.location.pathname.split('/')
  // /bridge/:subject/practice/...  → parts[2]
  const key = parts[2] || 'math'
  return {
    subjectId: SUBJECT_MAP[key] || SUBJECT_MAP.math,
    subjectKey: key,
    backPath: `/bridge/${key}`,
  }
}

// 數學每單元有基礎+精熟兩個 unit，錯題複習需同時撈兩個
const MATH_ADV_MAP = {
  'c1010000-0000-0000-0000-000000000001': 'c1020000-0000-0000-0000-000000000001',
  'c1030000-0000-0000-0000-000000000001': 'c1040000-0000-0000-0000-000000000001',
  'c1050000-0000-0000-0000-000000000001': 'c1060000-0000-0000-0000-000000000001',
  'c1070000-0000-0000-0000-000000000001': 'c1080000-0000-0000-0000-000000000001',
  'c1090000-0000-0000-0000-000000000001': 'c1100000-0000-0000-0000-000000000001',
  'c1110000-0000-0000-0000-000000000001': 'c1120000-0000-0000-0000-000000000001',
  'c1130000-0000-0000-0000-000000000001': 'c1140000-0000-0000-0000-000000000001',
  'c1150000-0000-0000-0000-000000000001': 'c1160000-0000-0000-0000-000000000001',
  'c1170000-0000-0000-0000-000000000001': 'c1180000-0000-0000-0000-000000000001',
  'c1190000-0000-0000-0000-000000000001': 'c1200000-0000-0000-0000-000000000001',
  'c1210000-0000-0000-0000-000000000001': 'c1220000-0000-0000-0000-000000000001',
  'c1230000-0000-0000-0000-000000000001': 'c1240000-0000-0000-0000-000000000001',
  'c1250000-0000-0000-0000-000000000001': 'c1260000-0000-0000-0000-000000000001',
  'c1270000-0000-0000-0000-000000000001': 'c1280000-0000-0000-0000-000000000001',
  'c1290000-0000-0000-0000-000000000001': 'c1300000-0000-0000-0000-000000000001',
  'c1310000-0000-0000-0000-000000000001': 'c1320000-0000-0000-0000-000000000001',
  'c1330000-0000-0000-0000-000000000001': 'c1340000-0000-0000-0000-000000000001',
  'c1350000-0000-0000-0000-000000000001': 'c1360000-0000-0000-0000-000000000001',
  'c1370000-0000-0000-0000-000000000001': 'c1380000-0000-0000-0000-000000000001',
  'c1390000-0000-0000-0000-000000000001': 'c1400000-0000-0000-0000-000000000001',
  'c1410000-0000-0000-0000-000000000001': 'c1420000-0000-0000-0000-000000000001',
}

const UNIT_TITLES = {
  'c1010000-0000-0000-0000-000000000001': '整數四則（基礎篇）',
  'c1020000-0000-0000-0000-000000000001': '整數四則（精熟篇）',
  'c1030000-0000-0000-0000-000000000001': '因數與倍數（基礎篇）',
  'c1040000-0000-0000-0000-000000000001': '因數與倍數（精熟篇）',
  'c1050000-0000-0000-0000-000000000001': '長度、重量、容量與時間（基礎篇）',
  'c1060000-0000-0000-0000-000000000001': '長度、重量、容量與時間（精熟篇）',
  'c1070000-0000-0000-0000-000000000001': '四邊形（基礎篇）',
  'c1080000-0000-0000-0000-000000000001': '四邊形（精熟篇）',
  'c1090000-0000-0000-0000-000000000001': '三角形與多邊形（基礎篇）',
  'c1100000-0000-0000-0000-000000000001': '三角形與多邊形（精熟篇）',
  'c1110000-0000-0000-0000-000000000001': '百分率（基礎篇）',
  'c1120000-0000-0000-0000-000000000001': '百分率（精熟篇）',
  'c1130000-0000-0000-0000-000000000001': '最大公因數與最小公倍數（基礎篇）',
  'c1140000-0000-0000-0000-000000000001': '最大公因數與最小公倍數（精熟篇）',
  'c1150000-0000-0000-0000-000000000001': '分數（基礎篇）',
  'c1160000-0000-0000-0000-000000000001': '分數（精熟篇）',
  'c1170000-0000-0000-0000-000000000001': '小數與概數（基礎篇）',
  'c1180000-0000-0000-0000-000000000001': '小數與概數（精熟篇）',
  'c1190000-0000-0000-0000-000000000001': '數列（基礎篇）',
  'c1200000-0000-0000-0000-000000000001': '數列（精熟篇）',
  'c1210000-0000-0000-0000-000000000001': '圓與扇形（基礎篇）',
  'c1220000-0000-0000-0000-000000000001': '圓與扇形（精熟篇）',
  'c1230000-0000-0000-0000-000000000001': '立體圖形的特性（基礎篇）',
  'c1240000-0000-0000-0000-000000000001': '立體圖形的特性（精熟篇）',
  'c1250000-0000-0000-0000-000000000001': '體積與容積（基礎篇）',
  'c1260000-0000-0000-0000-000000000001': '體積與容積（精熟篇）',
  'c1270000-0000-0000-0000-000000000001': '比和比值（基礎篇）',
  'c1280000-0000-0000-0000-000000000001': '比和比值（精熟篇）',
  'c1290000-0000-0000-0000-000000000001': '速率（一）（基礎篇）',
  'c1300000-0000-0000-0000-000000000001': '速率（一）（精熟篇）',
  'c1310000-0000-0000-0000-000000000001': '速率（二）（基礎篇）',
  'c1320000-0000-0000-0000-000000000001': '速率（二）（精熟篇）',
  'c1330000-0000-0000-0000-000000000001': '平均數、眾數與統計圖表（基礎篇）',
  'c1340000-0000-0000-0000-000000000001': '平均數、眾數與統計圖表（精熟篇）',
  'c1350000-0000-0000-0000-000000000001': '應用問題（一）（基礎篇）',
  'c1360000-0000-0000-0000-000000000001': '應用問題（一）（精熟篇）',
  'c1370000-0000-0000-0000-000000000001': '應用問題（二）（基礎篇）',
  'c1380000-0000-0000-0000-000000000001': '應用問題（二）（精熟篇）',
  'c1390000-0000-0000-0000-000000000001': '排列組合與機率（基礎篇）',
  'c1400000-0000-0000-0000-000000000001': '排列組合與機率（精熟篇）',
  'c1410000-0000-0000-0000-000000000001': '代數（基礎篇）',
  'c1420000-0000-0000-0000-000000000001': '代數（精熟篇）',
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function prepareQuestion(q, parentQ = null) {
  if (!q.options) return null
  const options = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
  const answerIndex = parseInt(String(q.answer).replace(/["\\]/g, ''))
  const correctText = options[answerIndex]
  const shuffled = shuffle(options)
  return {
    ...q,
    shuffledOptions: shuffled,
    correctIndex: shuffled.indexOf(correctText),
    originalOptions: options,
    groupContent: parentQ ? parentQ.content : null,
    groupImageUrl: parentQ ? parentQ.image_url : null,
  }
}

function buildQueue(data) {
  const parents = {}
  const children = {}
  const standalones = []

  for (const q of data) {
    if (q.is_group && !q.parent_id) {
      parents[q.id] = q
    } else if (q.parent_id) {
      if (!children[q.parent_id]) children[q.parent_id] = []
      children[q.parent_id].push(q)
    } else {
      // options が null の場合は parent 題が is_group=null で混入している可能性があるためスキップ
      if (q.options !== null && q.options !== undefined) {
        standalones.push(q)
      }
    }
  }

  const groups = []
  for (const parentId of Object.keys(children)) {
    const parentQ = parents[parentId] || null
    const sorted = (children[parentId] || [])
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map(c => prepareQuestion(c, parentQ))
    groups.push(sorted)
  }

  const preparedStandalones = standalones.map(q => prepareQuestion(q)).filter(Boolean)
  const units = [...preparedStandalones.map(q => [q]), ...groups]
  const shuffledUnits = shuffle(units)
  return shuffledUnits.flat()
}


export default function BridgePracticeSession() {
  const { unitId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { subjectId, subjectKey, backPath } = getSubjectFromPath()

  // 判斷模式
  // /bridge/:subject/practice/wrong           → 單元錯題複習
  // /bridge/:subject/practice/:unitId         → 單元練習
  // /bridge/:subject/综合?mode=random&count=X → 全題庫隨機
  // /bridge/:subject/综合?mode=wrong          → 全錯題複習
  const isUnitWrong = unitId === 'wrong' || window.location.pathname.endsWith('/wrong')
  const isComprehensive = window.location.pathname.includes('/综合')
  const compMode = searchParams.get('mode')   // 'random' | 'wrong'
  const compCount = parseInt(searchParams.get('count') || '20')
  const isWrongMode = isUnitWrong || (isComprehensive && compMode === 'wrong')

  // badge 顏色：錯題=紅，精熟=紫，基礎=藍
  const isAdv = unitId && UNIT_TITLES[unitId]?.includes('精熟')
  const modeColor = isWrongMode ? '#DC2626' : isAdv ? '#7C3AED' : '#2563EB'
  const modeBg = isWrongMode ? '#FEF2F2' : isAdv ? '#FAF5FF' : '#EFF6FF'

  const [phase, setPhase] = useState('loading')
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [startTime] = useState(Date.now())
  const isSubmitting = useRef(false)
  const totalRef = useRef(0)
  const correctRef = useRef(0)
  // 當次錯題訂正 phase
  const [sessionWrong, setSessionWrong] = useState([])
  const [wrongCurrent, setWrongCurrent] = useState(0)
  const sessionWrongRef = useRef([])

  useEffect(() => { loadQuestions() }, [unitId])

  async function loadQuestions() {
    let query = supabase
      .from('questions')
      .select('*')
      .eq('subject_id', subjectId)

    if (isUnitWrong) {
      const pathParts = window.location.pathname.split('/')
      const wrongIndex = pathParts.indexOf('wrong')
      const isSubjectWrong = pathParts[wrongIndex - 1] === 'practice'

      if (isSubjectWrong) {
        // 科目首頁錯題本：/bridge/:subject/practice/wrong → 撈整科所有錯題
        query = query
          .gt('wrong_count', 0)
          .lt('consecutive_correct', 3)
      } else {
        // 單元錯題本：/bridge/:subject/unit/:unitId/wrong
        const actualUnitId = pathParts[wrongIndex - 1]
        const advId = MATH_ADV_MAP[actualUnitId]
        if (advId) {
          // 數學：同時撈 basicId 和 advId
          query = query
            .in('unit_id', [actualUnitId, advId])
            .gt('wrong_count', 0)
            .lt('consecutive_correct', 3)
        } else {
          // 其他科目：單一 unit_id
          query = query
            .eq('unit_id', actualUnitId)
            .gt('wrong_count', 0)
            .lt('consecutive_correct', 3)
        }
      }
    } else if (isComprehensive && compMode === 'wrong') {
      // 全錯題
      query = query
        .gt('wrong_count', 0)
        .lt('consecutive_correct', 3)
    } else if (isComprehensive && compMode === 'random') {
      // 全題庫隨機抽 compCount 題
      const { data: all } = await query
      if (!all || all.length === 0) { setPhase('empty'); return }
      const queue = buildQueue(all)
      const picked = queue.slice(0, compCount)
      totalRef.current = picked.length
      correctRef.current = 0
      setQuestions(picked)
      setPhase('practice')
      return
    } else {
      // 單元練習：全部題目隨機順序
      query = query.eq('unit_id', unitId)
    }

    const { data, error } = await query
    if (error || !data || data.length === 0) { setPhase('empty'); return }

    const prepared = buildQueue(data)
    totalRef.current = prepared.length
    correctRef.current = 0
    setQuestions(prepared)
    setPhase('practice')
  }

  function handleSelect(idx) {
    if (showResult) return
    setSelected(idx)
  }

  async function handleConfirm() {
    if (selected === null || showResult || isSubmitting.current) return
    isSubmitting.current = true

    const q = questions[current]
    const isCorrect = selected === q.correctIndex
    const newAttempt = (q.attempt_count || 0) + 1
    const newWrong = isCorrect ? (q.wrong_count || 0) : (q.wrong_count || 0) + 1
    const newConsec = isCorrect ? (q.consecutive_correct || 0) + 1 : 0

    await supabase.from('questions').update({
      attempt_count: newAttempt,
      wrong_count: newWrong,
      consecutive_correct: newConsec,
      last_attempted_at: new Date().toISOString(),
    }).eq('id', q.id)

    const updatedQ = { ...q, attempt_count: newAttempt, wrong_count: newWrong, consecutive_correct: newConsec }

    if (isCorrect) {
      correctRef.current += 1
    } else {
      // 答錯：加入當次錯題清單（重洗牌），不影響主流程
      const retried = prepareQuestion(
        { ...updatedQ },
        updatedQ.groupContent ? { content: updatedQ.groupContent, image_url: updatedQ.groupImageUrl } : null
      )
      sessionWrongRef.current = [...sessionWrongRef.current, retried]
    }

    setQuestions(prev => prev.map((item, i) => i === current ? updatedQ : item))
    setShowResult(true)
    isSubmitting.current = false
  }

  async function handleNext() {
    setShowResult(false)
    setSelected(null)
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1)
    } else {
      await saveSession()
      if (sessionWrongRef.current.length > 0) {
        // 有錯題 → 進入當次訂正 phase
        setSessionWrong(sessionWrongRef.current)
        setWrongCurrent(0)
        setPhase('session-wrong')
      } else {
        setPhase('complete')
      }
    }
  }

  // 當次錯題訂正：答對一次即移除（不寫 DB）
  function handleSessionWrongConfirm() {
    if (selected === null || showResult) return
    const q = sessionWrong[wrongCurrent]
    const isCorrect = selected === q.correctIndex
    if (isCorrect) {
      setShowResult(true)
    } else {
      // 答錯：重洗牌，留在同一題
      const retried = prepareQuestion(
        { ...q },
        q.groupContent ? { content: q.groupContent, image_url: q.groupImageUrl } : null
      )
      const updated = [...sessionWrong]
      updated[wrongCurrent] = retried
      setSessionWrong(updated)
      setSelected(null)
    }
  }

  function handleSessionWrongNext() {
    setShowResult(false)
    setSelected(null)
    const remaining = sessionWrong.filter((_, i) => i !== wrongCurrent)
    if (remaining.length === 0) {
      setPhase('complete')
    } else {
      setSessionWrong(remaining)
      setWrongCurrent(c => Math.min(c, remaining.length - 1))
    }
  }

  // 中途離開：記錄已答題數，若有錯題進訂正，否則直接完成
  async function handleEarlyExit() {
    const answered = correctRef.current + sessionWrongRef.current.length
    const ok = window.confirm(
      `已答 ${answered} 題，答對 ${correctRef.current} 題。\n確定離開並結算成績？`
    )
    if (!ok) return
    const answeredTotal = answered
    totalRef.current = answeredTotal   // 更新讓 CompleteScreen 顯示正確題數
    await saveSession(answeredTotal)
    if (sessionWrongRef.current.length > 0) {
      setSessionWrong(sessionWrongRef.current)
      setWrongCurrent(0)
      setPhase('session-wrong')
    } else {
      setPhase('complete')
    }
  }

  // 錯題模式：答對後檢查是否達到畢業條件（consecutive_correct >= 3）
  async function handleWrongConfirm() {
    if (selected === null || showResult || isSubmitting.current) return
    isSubmitting.current = true

    const q = questions[current]
    const isCorrect = selected === q.correctIndex
    const newConsec = isCorrect ? (q.consecutive_correct || 0) + 1 : 0
    const newWrong = isCorrect ? q.wrong_count : (q.wrong_count || 0) + 1

    await supabase.from('questions').update({
      attempt_count: (q.attempt_count || 0) + 1,
      wrong_count: newWrong,
      consecutive_correct: newConsec,
      last_attempted_at: new Date().toISOString(),
    }).eq('id', q.id)

    if (!isCorrect) {
      const retried = prepareQuestion({ ...q, consecutive_correct: 0, wrong_count: newWrong }, q.groupContent ? { content: q.groupContent, image_url: q.groupImageUrl } : null)
      setQuestions(prev => prev.map((item, i) => i === current ? retried : item))
      setSelected(null)
      isSubmitting.current = false
      return
    }

    // 答對：檢查是否畢業（連續答對3次）
    const graduated = newConsec >= 3
    const updatedQ = { ...q, consecutive_correct: newConsec, wrong_count: newWrong }
    setQuestions(prev => prev.map((item, i) => i === current ? updatedQ : item))

    if (graduated) {
      correctRef.current += 1
    }
    setShowResult(true)
    isSubmitting.current = false
  }

  async function handleWrongNext() {
    setShowResult(false)
    setSelected(null)
    // 答對即移出當次佇列（畢業與否由累積 consecutive_correct 決定，不在此判斷）
    const remaining = questions.filter((_, i) => i !== current)
    if (remaining.length === 0) {
      await saveSession()
      setPhase('complete')
      return
    }
    setQuestions(remaining)
    setCurrent(c => Math.min(c, remaining.length - 1))
  }

  async function saveSession(overrideTotal) {
    const duration = Math.round((Date.now() - startTime) / 1000)
    const total = overrideTotal !== undefined ? overrideTotal : totalRef.current
    let topic = '錯題複習'
    let module = 'wrong_review'
    if (!isWrongMode) {
      topic = isComprehensive ? '綜合練習' : (UNIT_TITLES[unitId] || unitId)
      module = isComprehensive ? 'comprehensive' : `unit_${Object.keys(UNIT_TITLES).indexOf(unitId) + 1}`
    }
    await supabase.from('practice_sessions').insert({
      user_id: USER_ID,
      subject: `bridge_${subjectKey}`,
      module,
      topic,
      total_questions: total,
      correct_count: correctRef.current,
      score: total > 0 ? Math.round((correctRef.current / total) * 100) : 0,
      duration,
    })
  }

  // ── Render ──────────────────────────────────────────────────
  if (phase === 'loading') return <LoadingScreen />
  if (phase === 'empty') return (
    <EmptyScreen
      message={isWrongMode ? '目前沒有錯題，繼續保持！' : '此單元暫無題目'}
      onBack={() => navigate(backPath)}
    />
  )
  if (phase === 'complete') return (
    <CompleteScreen
      total={totalRef.current}
      correct={correctRef.current}
      isWrongMode={isWrongMode}
      onBack={() => navigate(backPath)}
    />
  )

  // 當次錯題訂正 phase
  if (phase === 'session-wrong') {
    const q = sessionWrong[wrongCurrent]
    return (
      <div className="page-container">
        <header className="page-header compact">
          <div className="session-info">
            <span className="week-badge" style={{ background: '#FEF2F2', color: '#DC2626' }}>
              當次錯題訂正
            </span>
          </div>
          <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>
            剩 {sessionWrong.length} 題
          </div>
        </header>
        <div style={{ height: '4px', background: '#E2E8F0' }}>
          <div style={{ height: '100%', background: '#DC2626', width: `${((sessionWrong.length) / sessionWrongRef.current.length) * 100}%`, transition: 'width 0.3s' }} />
        </div>
        <main className="main-content">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              background: '#FEF2F2', border: '1px solid #FCA5A5',
              borderRadius: '10px', padding: '10px 16px',
              fontSize: '13px', color: '#DC2626', marginBottom: '16px', textAlign: 'center'
            }}>
              📝 答對即可移除，繼續加油！
            </div>
            <div className="question-card" style={{ marginBottom: '20px' }}>
              {q.groupContent && (
                <div style={{
                  background: '#F8FAFC', border: '1px solid #CBD5E1',
                  borderRadius: '8px', padding: '14px 16px', marginBottom: '16px',
                  fontSize: '14px', lineHeight: 1.8, color: '#334155', whiteSpace: 'pre-line',
                }}>
                  {q.groupImageUrl && (
                    <div style={{ marginBottom: '12px', textAlign: 'center' }}>
                      <img src={q.groupImageUrl} alt="題組圖片" style={{ maxWidth: '100%', maxHeight: '320px', borderRadius: '6px', objectFit: 'contain' }} />
                    </div>
                  )}
                  {q.groupContent}
                </div>
              )}
              <div className="question-text" style={{ whiteSpace: 'pre-line' }}>{q.content}</div>
              {q.image_url && (
                <div style={{ margin: '16px 0', textAlign: 'center' }}>
                  <img src={q.image_url} alt="題目圖片" style={{ maxWidth: '100%', maxHeight: '280px', borderRadius: '8px', border: '1px solid #E2E8F0', objectFit: 'contain' }} />
                </div>
              )}
              <div className="options-grid">
                {q.shuffledOptions.map((opt, idx) => {
                  let cls = 'option-btn'
                  if (showResult) {
                    if (idx === q.correctIndex) cls += ' correct'
                    else if (idx === selected && idx !== q.correctIndex) cls += ' wrong'
                  } else if (idx === selected) {
                    cls += ' selected'
                  }
                  return (
                    <button key={idx} className={cls} onClick={() => !showResult && setSelected(idx)} disabled={showResult}>
                      <span className="option-label">{idx + 1}</span>
                      <span className="option-text">{opt}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            {!showResult ? (
              <button
                className="btn btn-primary btn-large"
                style={{ width: '100%', background: '#DC2626', borderColor: '#DC2626' }}
                onClick={handleSessionWrongConfirm}
                disabled={selected === null}
              >
                確認答案
              </button>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '18px', fontWeight: 700, color: '#16A34A' }}>
                  ✅ 答對了！
                </div>
                {q.explanation && (
                  <div style={{
                    background: '#F0FDF4', border: '1px solid #BBF7D0',
                    borderRadius: '10px', padding: '14px 16px',
                    fontSize: '14px', color: '#166534', lineHeight: 1.7, marginBottom: '16px'
                  }}>
                    <span style={{ fontWeight: 700 }}>解析：</span>{q.explanation}
                  </div>
                )}
                <button
                  className="btn btn-large"
                  style={{ width: '100%', background: '#DC2626', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', padding: '16px', fontWeight: 700, fontSize: '16px' }}
                  onClick={handleSessionWrongNext}
                >
                  {sessionWrong.length === 1 ? '完成訂正 🎉' : '下一題 →'}
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    )
  }

  const q = questions[current]

  // badge 文字
  let badgeText = UNIT_TITLES[unitId] || '練習'
  if (isUnitWrong) badgeText = '錯題複習'
  if (isComprehensive && compMode === 'random') badgeText = `綜合練習（${questions.length}題）`
  if (isComprehensive && compMode === 'wrong') badgeText = '全科錯題複習'

  return (
    <div className="page-container">
      <header className="page-header compact">
        <div className="session-info">
          <span className="week-badge" style={{ background: modeBg, color: modeColor }}>
            {badgeText}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>
            {current + 1} / {questions.length}
          </div>
          {!isWrongMode && (
            <button
              onClick={handleEarlyExit}
              style={{
                fontSize: '13px', color: '#64748B',
                background: '#F1F5F9', border: '1px solid #CBD5E1',
                borderRadius: '8px', padding: '4px 10px', cursor: 'pointer',
              }}
            >
              離開
            </button>
          )}
        </div>
      </header>

      <div style={{ height: '4px', background: '#E2E8F0' }}>
        <div style={{
          height: '100%', background: modeColor,
          width: `${((current + 1) / questions.length) * 100}%`,
          transition: 'width 0.3s'
        }} />
      </div>

      <main className="main-content">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          {isWrongMode && (
            <div style={{
              background: '#FEF2F2', border: '1px solid #FCA5A5',
              borderRadius: '10px', padding: '10px 16px',
              fontSize: '13px', color: '#DC2626', marginBottom: '16px', textAlign: 'center'
            }}>
              📋 錯題複習模式 — 連續答對 3 次可從錯題本退出
            </div>
          )}

          <div className="question-card" style={{ marginBottom: '20px' }}>
            {/* 題組：上方顯示 parent 的文章/對話/圖表 */}
            {q.groupContent && (
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                padding: '14px 16px',
                marginBottom: '16px',
                fontSize: '14px',
                lineHeight: 1.8,
                color: '#334155',
                whiteSpace: 'pre-line',
              }}>
                {q.groupImageUrl && (
                  <div style={{ marginBottom: '12px', textAlign: 'center' }}>
                    <img
                      src={q.groupImageUrl}
                      alt="題組圖片"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '320px',
                        borderRadius: '6px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                )}
                {q.groupContent}
              </div>
            )}
            {/* 題幹 */}
            <div className="question-text" style={{ whiteSpace: 'pre-line' }}>{q.content}</div>
            {/* 題目本身附圖（非題組圖） */}
            {q.image_url && (
              <div style={{ margin: '16px 0', textAlign: 'center' }}>
                <img
                  src={q.image_url}
                  alt="題目圖片"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '280px',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    objectFit: 'contain'
                  }}
                />
              </div>
            )}
            <div className="options-grid">
              {q.shuffledOptions.map((opt, idx) => {
                let cls = 'option-btn'
                if (showResult) {
                  if (idx === q.correctIndex) cls += ' correct'
                  else if (idx === selected && idx !== q.correctIndex) cls += ' wrong'
                } else if (idx === selected) {
                  cls += ' selected'
                }
                return (
                  <button
                    key={idx}
                    className={cls}
                    onClick={() => handleSelect(idx)}
                    disabled={showResult}
                  >
                    <span className="option-label">{idx + 1}</span>
                    <span className="option-text">{opt}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {!showResult ? (
            <button
              className="btn btn-primary btn-large"
              style={{ width: '100%', background: modeColor, borderColor: modeColor }}
              onClick={isWrongMode ? handleWrongConfirm : handleConfirm}
              disabled={selected === null}
            >
              確認答案
            </button>
          ) : (
            <div>
              <div style={{
                textAlign: 'center', marginBottom: '16px',
                fontSize: '18px', fontWeight: 700,
                color: selected === q.correctIndex ? '#16A34A' : '#DC2626'
              }}>
                {selected === q.correctIndex ? '✅ 答對了！' : '❌ 答錯了！'}
                {isWrongMode && (
                  <span style={{ fontSize: '14px', marginLeft: '8px', color: q.consecutive_correct >= 3 ? '#16A34A' : '#D97706' }}>
                    {q.consecutive_correct >= 3 ? '🎓 累積達標！' : `📈 累積連對 ${q.consecutive_correct}/3 次`}
                  </span>
                )}
              </div>

              {q.explanation && (
                <div style={{
                  background: '#F0FDF4', border: '1px solid #BBF7D0',
                  borderRadius: '10px', padding: '14px 16px',
                  fontSize: '14px', color: '#166534', lineHeight: 1.7,
                  marginBottom: '16px'
                }}>
                  <span style={{ fontWeight: 700 }}>解析：</span>{q.explanation}
                </div>
              )}

              <button
                className="btn btn-large"
                style={{
                  width: '100%', background: modeColor, color: 'white',
                  border: 'none', borderRadius: '10px', cursor: 'pointer',
                  padding: '16px', fontWeight: 700, fontSize: '16px'
                }}
                onClick={isWrongMode ? handleWrongNext : handleNext}
              >
                {isWrongMode
                  ? (questions.length === 1 ? '完成複習 🎉' : '下一題 →')
                  : (current + 1 < questions.length ? '下一題 →' : '查看成績')
                }
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function LoadingScreen() {
  return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <p style={{ color: 'var(--text-light)' }}>載入題目中⋯</p>
      </main>
    </div>
  )
}

function EmptyScreen({ message, onBack }) {
  return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
        <p style={{ fontSize: '18px', marginBottom: '24px' }}>{message}</p>
        <button className="btn btn-primary" onClick={onBack}>返回單元列表</button>
      </main>
    </div>
  )
}

function CompleteScreen({ total, correct, isWrongMode, onBack }) {
  const score = total > 0 ? Math.round((correct / total) * 100) : 100
  return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '72px', marginBottom: '16px' }}>
          {isWrongMode ? '🎓' : score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪'}
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
          {isWrongMode ? '錯題複習完成！' : '練習完成！'}
        </h2>
        {!isWrongMode && (
          <>
            <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>
              答對 {correct} / {total} 題
            </p>
            <div style={{
              display: 'inline-block', padding: '20px 48px',
              background: score >= 80 ? '#ECFDF5' : score >= 60 ? '#FEF3C7' : '#FEF2F2',
              borderRadius: '20px', marginBottom: '32px'
            }}>
              <span style={{
                fontSize: '48px', fontWeight: 800,
                color: score >= 80 ? '#16A34A' : score >= 60 ? '#D97706' : '#DC2626'
              }}>
                {score}分
              </span>
            </div>
          </>
        )}
        {isWrongMode && (
          <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>
            共畢業 {correct} 題，繼續加油！
          </p>
        )}
        <div>
          <button className="btn btn-primary btn-large" onClick={onBack}>
            返回單元列表
          </button>
        </div>
      </main>
    </div>
  )
}
