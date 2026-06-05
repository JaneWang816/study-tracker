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
  earth: 'b1000000-0000-0000-0000-000000000003',
  geography: 'd1000000-0000-0000-0000-000000000001',
  history:   'e1000000-0000-0000-0000-000000000001',
  civics:    'f1000000-0000-0000-0000-000000000001',

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

function prepareQuestion(q) {
  const options = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
  const answerIndex = parseInt(String(q.answer).replace(/["\\]/g, ''))
  const correctText = options[answerIndex]
  const shuffled = shuffle(options)
  return {
    ...q,
    shuffledOptions: shuffled,
    correctIndex: shuffled.indexOf(correctText),
    originalOptions: options,
  }
}

export default function BridgePracticeSession() {
  const { unitId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { subjectId, subjectKey, backPath } = getSubjectFromPath()

  // 判斷模式
  // /bridge/:subject/practice/wrong           → 單元錯題複習
  // /bridge/:subject/practice/:unitId         → 單元練習
  // /bridge/:subject/practice/:unitId?mode=new → 只練新題
  // /bridge/:subject/综合?mode=random&count=X → 全題庫隨機
  // /bridge/:subject/综合?mode=wrong          → 全錯題複習
  const isUnitWrong = unitId === 'wrong' || window.location.pathname.endsWith('/wrong')
  const isComprehensive = window.location.pathname.includes('/综合')
  const compMode = searchParams.get('mode')   // 'random' | 'wrong'
  const compCount = parseInt(searchParams.get('count') || '20')
  const isNewMode = !isUnitWrong && !isComprehensive && searchParams.get('mode') === 'new'

  const [phase, setPhase] = useState('loading')
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [startTime] = useState(Date.now())
  const isSubmitting = useRef(false)
  const totalRef = useRef(0)
  const correctRef = useRef(0)
  const wrongQuestionsRef = useRef([])   // 本次練習答錯的題目
  const [completeWrongs, setCompleteWrongs] = useState([])  // 完成後傳給 CompleteScreen

  // isWrongMode 依賴 phase，必須在 state 宣告之後
  const isWrongMode = isUnitWrong || (isComprehensive && compMode === 'wrong') || phase === 'wrong-review' || phase === 'session-wrong'

  // badge 顏色：錯題=紅，精熟=紫，基礎=藍
  const isAdv = unitId && UNIT_TITLES[unitId]?.includes('精熟')
  const modeColor = isWrongMode ? '#DC2626' : isAdv ? '#7C3AED' : '#2563EB'
  const modeBg = isWrongMode ? '#FEF2F2' : isAdv ? '#FAF5FF' : '#EFF6FF'

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
      // 已作答題目中加權排序後抽 compCount 題
      // 優先：練習次數少 → 答錯次數多 → 隨機擾動
      const { data: all } = await query.gt('attempt_count', 0)
      if (!all || all.length === 0) { setPhase('empty'); return }
      const weighted = all
        .map(q => ({ ...q, _score: q.attempt_count * 10 - q.wrong_count * 3 + Math.random() * 5 }))
        .sort((a, b) => a._score - b._score)
      const picked = weighted.slice(0, compCount)
      totalRef.current = picked.length
      correctRef.current = 0
      setQuestions(picked.map(prepareQuestion))
      setPhase('practice')
      return
    } else {
      // 單元練習：全部題目 or 只練新題
      query = query.eq('unit_id', unitId)
      if (isNewMode) query = query.eq('attempt_count', 0)
    }

    const { data, error } = await query
    if (error || !data || data.length === 0) { setPhase('empty'); return }

    const prepared = shuffle(data).map(prepareQuestion)
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
      // 記錄錯題（避免重複）
      if (!wrongQuestionsRef.current.find(w => w.id === q.id)) {
        wrongQuestionsRef.current.push(updatedQ)
      }
    }
    // 無論對錯，顯示結果，不重試
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
      setCompleteWrongs(wrongQuestionsRef.current.map(prepareQuestion))
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
      const retried = prepareQuestion({ ...q, consecutive_correct: 0, wrong_count: newWrong })
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
    const q = questions[current]
    const graduated = q.consecutive_correct >= 3

    if (graduated) {
      // 已畢業，移出佇列
      const remaining = questions.filter((_, i) => i !== current)
      if (remaining.length === 0) {
        await saveSession()
        setPhase('complete')
        return
      }
      setQuestions(remaining)
      setCurrent(c => Math.min(c, remaining.length - 1))
    } else {
      // 未畢業，繼續下一題
      if (current + 1 < questions.length) {
        setCurrent(c => c + 1)
      } else {
        setCurrent(0)  // 循環回第一題
      }
    }
  }

  // 當次錯題複習：答對一次就移出，答錯重試（不寫DB）
  async function handleSessionWrongConfirm() {
    if (selected === null || showResult || isSubmitting.current) return
    isSubmitting.current = true

    const q = questions[current]
    const isCorrect = selected === q.correctIndex

    if (!isCorrect) {
      // 答錯：重新洗牌，留在原題
      const retried = prepareQuestion({ ...q })
      setQuestions(prev => prev.map((item, i) => i === current ? retried : item))
      setSelected(null)
      isSubmitting.current = false
      return
    }

    // 答對：標記過關，顯示結果
    correctRef.current += 1
    setShowResult(true)
    isSubmitting.current = false
  }

  async function handleSessionWrongNext() {
    setShowResult(false)
    setSelected(null)
    // 移出已過關的題目
    const remaining = questions.filter((_, i) => i !== current)
    if (remaining.length === 0) {
      setPhase('complete')
      return
    }
    setQuestions(remaining)
    setCurrent(c => Math.min(c, remaining.length - 1))
  }

  async function saveSession() {
    const duration = Math.round((Date.now() - startTime) / 1000)
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
      total_questions: totalRef.current,
      correct_count: correctRef.current,
      score: totalRef.current > 0 ? Math.round((correctRef.current / totalRef.current) * 100) : 0,
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
      wrongQuestions={completeWrongs}
      onStartWrongReview={() => {
        wrongQuestionsRef.current = []
        setQuestions(completeWrongs)
        setCurrent(0)
        setSelected(null)
        setShowResult(false)
        setPhase('session-wrong')
      }}
      onBack={() => navigate(backPath)}
    />
  )

  const q = questions[current]

  // badge 文字
  let badgeText = UNIT_TITLES[unitId] || '練習'
  if (isNewMode) badgeText = (UNIT_TITLES[unitId] || '練習') + '・只練新題'
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
        <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>
          {current + 1} / {questions.length}
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

          {phase === 'wrong-review' && (
            <div style={{
              background: '#FEF2F2', border: '1px solid #FCA5A5',
              borderRadius: '10px', padding: '10px 16px',
              fontSize: '13px', color: '#DC2626', marginBottom: '16px', textAlign: 'center'
            }}>
              📋 錯題複習模式 — 連續答對 3 次可從錯題本退出
            </div>
          )}

          <div className="question-card" style={{ marginBottom: '20px' }}>
            <div className="question-text" style={{ whiteSpace: 'pre-line' }}>{q.content}</div>
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
              onClick={
                phase === 'wrong-review' ? handleWrongConfirm
                : phase === 'session-wrong' ? handleSessionWrongConfirm
                : handleConfirm
              }
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
                {phase === 'wrong-review' && q.consecutive_correct >= 3 && (
                  <span style={{ fontSize: '14px', marginLeft: '8px', color: '#16A34A' }}>
                    🎓 畢業！
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
                onClick={
                  phase === 'wrong-review' ? handleWrongNext
                  : phase === 'session-wrong' ? handleSessionWrongNext
                  : handleNext
                }
              >
                {phase === 'wrong-review'
                  ? (questions.filter((_, i) => i !== current).length === 0 && q.consecutive_correct >= 3
                    ? '完成複習' : '下一題 →')
                  : phase === 'session-wrong'
                  ? (questions.length === 1 ? '完成複習' : '下一題 →')
                  : (current + 1 < questions.length ? '下一題 →' : '完成練習')
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

function CompleteScreen({ total, correct, isWrongMode, wrongQuestions, onStartWrongReview, onBack }) {
  const rate = total > 0 ? Math.round((correct / total) * 100) : 100
  const rateColor = rate >= 80 ? '#16A34A' : rate >= 60 ? '#D97706' : '#DC2626'
  const rateBg   = rate >= 80 ? '#ECFDF5' : rate >= 60 ? '#FEF3C7' : '#FEF2F2'
  const hasWrong = wrongQuestions && wrongQuestions.length > 0
  return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '72px', marginBottom: '16px' }}>
          {isWrongMode ? '🎓' : rate >= 80 ? '🎉' : rate >= 60 ? '👍' : '💪'}
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
          {isWrongMode ? '錯題複習完成！' : '練習完成！'}
        </h2>
        {!isWrongMode && (
          <div style={{
            display: 'inline-flex', flexDirection: 'column', gap: '12px',
            background: rateBg, borderRadius: '20px',
            padding: '24px 48px', marginBottom: '32px'
          }}>
            <div style={{ fontSize: '15px', color: '#64748B' }}>
              共 <strong style={{ color: '#1E293B' }}>{total}</strong> 題
            </div>
            <div style={{ fontSize: '15px', color: '#64748B' }}>
              答對 <strong style={{ color: '#16A34A' }}>{correct}</strong> 題
              ／ 答錯 <strong style={{ color: '#DC2626' }}>{total - correct}</strong> 題
            </div>
            <div style={{ fontSize: '40px', fontWeight: 800, color: rateColor, lineHeight: 1 }}>
              答對率 {rate}%
            </div>
          </div>
        )}
        {isWrongMode && (
          <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>
            共畢業 {correct} 題，繼續加油！
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          {!isWrongMode && hasWrong && (
            <button
              className="btn btn-large"
              style={{
                width: '240px', background: '#DC2626', color: 'white',
                border: 'none', borderRadius: '10px', cursor: 'pointer',
                padding: '14px', fontWeight: 700, fontSize: '16px'
              }}
              onClick={onStartWrongReview}
            >
              📋 複習錯題（{wrongQuestions.length} 題）
            </button>
          )}
          <button className="btn btn-primary btn-large" style={{ width: '240px' }} onClick={onBack}>
            返回單元列表
          </button>
        </div>
      </main>
    </div>
  )
}
