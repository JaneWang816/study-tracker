// src/pages/g7/G7PracticeSession.jsx
// 七年級通用作答頁（7 科共用）
//
// 路由：/g7/:subject/practice
//   ?unit=<id>&level=basic|advanced   單元練習（一回合最多 SESSION_SIZE 題，優先抽未做過的題目）
//   ?unit=<id>&mode=wrong             單元錯題
//   ?mode=wrong                       整科錯題
//   ?mode=random&count=N              從整科做過的題目隨機抽 N 題
//
// 以 BridgePracticeSession 為基礎，差異：
//   1. 依 difficulty 篩選，不再用拆 unit 的方式分基礎／精熟
//   2. 每回合有題數上限
//   3. 一次撈整科題目再於前端篩選，錯題模式也拿得到題組母題的文章／圖片
//   4. 單元標題從 units 表讀取，學習紀錄寫入正確名稱
//   5. 解析支援換行
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { getG7Subject, LEVELS, SESSION_SIZE, GRADUATE_STREAK } from '../../config/g7'
import { fetchProgress, withProgress, saveProgress, logAnswer, isWrong } from './progress'

// ── 工具函式 ────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function parseJson(v) {
  if (v === null || v === undefined) return null
  return Array.isArray(v) ? v : JSON.parse(v)
}

// 打亂選項（圖片選項同步搬移），算出打亂後的正解位置
function prepareQuestion(q, parentQ = null) {
  const options = parseJson(q.options)
  if (!options) return null
  const answerIndex = parseInt(String(q.answer).replace(/["\\]/g, ''), 10)
  const optImgs = parseJson(q.option_image_urls)
  const isImageOptions = !!(optImgs && optImgs.length > 0)

  const order = shuffle(options.map((_, i) => i))
  return {
    ...q,
    shuffledOptions: order.map(i => options[i]),
    shuffledOptionImgs: isImageOptions ? order.map(i => optImgs[i]) : null,
    correctIndex: order.indexOf(answerIndex),
    isImageOptions,
    groupContent: parentQ ? parentQ.content : null,
    groupImageUrl: parentQ ? parentQ.image_url : null,
  }
}

// 把題目整理成「作答單位」：單題為 [q]，題組為同一母題下的子題陣列
function toItems(questions) {
  const standalones = []
  const groups = {}
  for (const q of questions) {
    if (q.parent_id) (groups[q.parent_id] ||= []).push(q)
    else if (!q.is_group && q.options != null) standalones.push(q)
  }
  return [
    ...standalones.map(q => [q]),
    ...Object.values(groups).map(g => g.sort((a, b) => (a.order || 0) - (b.order || 0))),
  ]
}

// 依題數上限挑選作答單位（題組不拆開，可能略超過上限）
function takeUpTo(items, limit) {
  const picked = []
  let n = 0
  for (const item of items) {
    if (n >= limit) break
    picked.push(item)
    n += item.length
  }
  return picked
}

// 單元練習排序：
//   1. 未做過的優先（隨機）
//   2. 做過的：連續答對次數少的優先（只答對一次可能是猜對），同分時最久沒做的優先
function prioritize(items) {
  const fresh = shuffle(items.filter(it => it.some(q => !q.attempt_count)))
  const streak = it => Math.min(...it.map(q => q.consecutive_correct || 0))
  const oldest = it => Math.min(...it.map(q => new Date(q.last_attempted_at || 0).getTime()))
  const done = items
    .filter(it => it.every(q => q.attempt_count))
    .sort((a, b) => streak(a) - streak(b) || oldest(a) - oldest(b))
  return [...fresh, ...done]
}

// ── 主元件 ─────────────────────────────────────────────────

export default function G7PracticeSession() {
  const navigate = useNavigate()
  const { subject } = useParams()
  const [searchParams] = useSearchParams()
  const meta = getG7Subject(subject)
  const { user } = useAuth()

  const unitId = searchParams.get('unit')
  const level = searchParams.get('level') === 'advanced' ? 'advanced' : 'basic'
  const mode = searchParams.get('mode') || 'unit'          // 'unit' | 'wrong' | 'random'
  const randomCount = parseInt(searchParams.get('count') || String(SESSION_SIZE), 10)
  const isWrongMode = mode === 'wrong'
  const backPath = `/g7/${subject}`

  const modeColor = isWrongMode ? '#DC2626' : mode === 'random' ? '#2563EB' : LEVELS[level].color
  const modeBg = isWrongMode ? '#FEF2F2' : mode === 'random' ? '#EFF6FF' : LEVELS[level].bg

  const [phase, setPhase] = useState('loading')
  const [unitTitle, setUnitTitle] = useState('')
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [unsure, setUnsure] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [startTime] = useState(Date.now())
  const isSubmitting = useRef(false)
  const sessionId = useRef(crypto.randomUUID())   // 作答日誌用：同一回合共用
  const totalRef = useRef(0)
  const correctRef = useRef(0)
  const [sessionWrong, setSessionWrong] = useState([])
  const [wrongCurrent, setWrongCurrent] = useState(0)
  const sessionWrongRef = useRef([])

  useEffect(() => { if (meta && user) loadQuestions() }, [subject, unitId, level, mode, user])

  async function loadQuestions() {
    const [{ data: raw, error }, unitRes, progress] = await Promise.all([
      supabase.from('questions').select('*').eq('subject_id', meta.subjectId),
      unitId
        ? supabase.from('units').select('title').eq('id', unitId).single()
        : Promise.resolve({ data: null }),
      fetchProgress(user.id),
    ])
    if (unitRes.data) setUnitTitle(unitRes.data.title)
    if (error || !raw) { setPhase('empty'); return }
    const data = withProgress(raw, progress)

    const scoped = unitId ? data.filter(q => q.unit_id === unitId) : data
    const parents = Object.fromEntries(scoped.filter(q => q.is_group && !q.parent_id).map(q => [q.id, q]))
    const answerable = scoped.filter(q => !(q.is_group && !q.parent_id))

    let items
    if (mode === 'wrong') {
      items = takeUpTo(shuffle(toItems(answerable.filter(isWrong))), SESSION_SIZE)
    } else if (mode === 'random') {
      items = takeUpTo(shuffle(toItems(answerable.filter(q => q.attempt_count > 0))), randomCount)
    } else {
      const pool = answerable.filter(q => (q.difficulty || 'basic') === level)
      items = takeUpTo(prioritize(toItems(pool)), SESSION_SIZE)
    }

    const prepared = shuffle(items)
      .flat()
      .map(q => prepareQuestion(q, q.parent_id ? parents[q.parent_id] : null))
      .filter(Boolean)

    if (prepared.length === 0) { setPhase('empty'); return }
    totalRef.current = prepared.length
    correctRef.current = 0
    setQuestions(prepared)
    setPhase('practice')
  }

  async function recordAttempt(q, isCorrect, isUnsure = false, chosen = null) {
    const confident = isCorrect && !isUnsure
    const streak = confident ? (q.consecutive_correct || 0) + 1 : 0
    const next = {
      attempt_count: (q.attempt_count || 0) + 1,
      wrong_count: isCorrect ? (q.wrong_count || 0) : (q.wrong_count || 0) + 1,
      consecutive_correct: streak,
      // 答對但不確定 → 標記進錯題本；連續答對達標 → 清除標記
      marked_for_review: (isCorrect && isUnsure) ? true
        : streak >= GRADUATE_STREAK ? false
        : !!q.marked_for_review,
      last_attempted_at: new Date().toISOString(),
    }
    await Promise.all([
      saveProgress(user.id, q.id, next),
      logAnswer(user.id, q, { sessionId: sessionId.current, mode, isCorrect, isUnsure, chosen }),
    ])
    return { ...q, ...next }
  }

  function reshuffle(q) {
    return prepareQuestion(q, q.groupContent ? { content: q.groupContent, image_url: q.groupImageUrl } : null)
  }

  // ── 一般模式（單元／隨機）──
  async function handleConfirm() {
    if (selected === null || showResult || isSubmitting.current) return
    isSubmitting.current = true
    const q = questions[current]
    const isCorrect = selected === q.correctIndex
    const updatedQ = await recordAttempt(q, isCorrect, unsure, q.shuffledOptions[selected])
    if (isCorrect) correctRef.current += 1
    else sessionWrongRef.current = [...sessionWrongRef.current, reshuffle(updatedQ)]
    setQuestions(prev => prev.map((item, i) => i === current ? { ...updatedQ, wasUnsure: unsure } : item))
    setShowResult(true)
    isSubmitting.current = false
  }

  async function handleNext() {
    setShowResult(false)
    setSelected(null)
    setUnsure(false)
    if (current + 1 < questions.length) { setCurrent(c => c + 1); return }
    await finish()
  }

  async function finish(overrideTotal) {
    await saveSession(overrideTotal)
    if (sessionWrongRef.current.length > 0) {
      setSessionWrong(sessionWrongRef.current)
      setWrongCurrent(0)
      setPhase('session-wrong')
    } else {
      setPhase('complete')
    }
  }

  async function handleEarlyExit() {
    const answered = correctRef.current + sessionWrongRef.current.length
    if (!window.confirm(`已答 ${answered} 題，答對 ${correctRef.current} 題。\n確定離開並結算成績？`)) return
    totalRef.current = answered
    await finish(answered)
  }

  // ── 當次錯題訂正：答對即移除，不寫資料庫 ──
  function handleSessionWrongConfirm() {
    if (selected === null || showResult) return
    const q = sessionWrong[wrongCurrent]
    if (selected === q.correctIndex) { setShowResult(true); return }
    setSessionWrong(prev => prev.map((item, i) => i === wrongCurrent ? reshuffle(item) : item))
    setSelected(null)
  }

  function handleSessionWrongNext() {
    setShowResult(false)
    setSelected(null)
    const remaining = sessionWrong.filter((_, i) => i !== wrongCurrent)
    if (remaining.length === 0) { setPhase('complete'); return }
    setSessionWrong(remaining)
    setWrongCurrent(c => Math.min(c, remaining.length - 1))
  }

  // ── 錯題模式：答錯重洗留在原題，答對移出本回合；連對達標即畢業 ──
  async function handleWrongConfirm() {
    if (selected === null || showResult || isSubmitting.current) return
    isSubmitting.current = true
    const q = questions[current]
    const isCorrect = selected === q.correctIndex
    const updatedQ = await recordAttempt(q, isCorrect, unsure, q.shuffledOptions[selected])
    if (!isCorrect) {
      setUnsure(false)
      setQuestions(prev => prev.map((item, i) => i === current ? reshuffle(updatedQ) : item))
      setSelected(null)
      isSubmitting.current = false
      return
    }
    if (updatedQ.consecutive_correct >= GRADUATE_STREAK) correctRef.current += 1
    setQuestions(prev => prev.map((item, i) => i === current ? { ...updatedQ, wasUnsure: unsure } : item))
    setShowResult(true)
    isSubmitting.current = false
  }

  async function handleWrongNext() {
    setShowResult(false)
    setSelected(null)
    setUnsure(false)
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
    const total = overrideTotal !== undefined ? overrideTotal : totalRef.current
    let module = 'unit'
    let topic = `${unitTitle}（${LEVELS[level].label}）`
    if (isWrongMode) { module = 'wrong_review'; topic = unitTitle ? `${unitTitle}（錯題）` : '整科錯題' }
    if (mode === 'random') { module = 'random'; topic = '隨機抽題' }
    await supabase.from('practice_sessions').insert({
      user_id: user.id,
      subject: `g7_${subject}`,
      module,
      topic,
      total_questions: total,
      correct_count: correctRef.current,
      score: total > 0 ? Math.round((correctRef.current / total) * 100) : 0,
      duration: Math.round((Date.now() - startTime) / 1000),
    })
  }

  // ── Render ──────────────────────────────────────────────
  if (!meta) return <EmptyScreen message="找不到這個科目" onBack={() => navigate('/g7')} />
  if (phase === 'loading') return <LoadingScreen />
  if (phase === 'empty') return (
    <EmptyScreen message={isWrongMode ? '目前沒有錯題，繼續保持！' : '這裡還沒有題目'} onBack={() => navigate(backPath)} />
  )
  if (phase === 'complete') return (
    <CompleteScreen total={totalRef.current} correct={correctRef.current} isWrongMode={isWrongMode} onBack={() => navigate(backPath)} />
  )

  if (phase === 'session-wrong') {
    const q = sessionWrong[wrongCurrent]
    return (
      <SessionLayout
        badge="當次錯題訂正" badgeColor="#DC2626" badgeBg="#FEF2F2"
        counter={`剩 ${sessionWrong.length} 題`}
        progress={sessionWrong.length / sessionWrongRef.current.length}
      >
        <Notice>📝 答對就能移除，繼續加油！</Notice>
        <QuestionCard q={q} selected={selected} showResult={showResult} onSelect={setSelected} />
        {!showResult ? (
          <ConfirmButton color="#DC2626" disabled={selected === null} onClick={handleSessionWrongConfirm} />
        ) : (
          <ResultPanel correct explanation={q.explanation} color="#DC2626"
            nextLabel={sessionWrong.length === 1 ? '完成訂正 🎉' : '下一題 →'}
            onNext={handleSessionWrongNext} />
        )}
      </SessionLayout>
    )
  }

  const q = questions[current]
  let badge = `${unitTitle}．${LEVELS[level].label}`
  if (isWrongMode) badge = unitTitle ? `${unitTitle}．錯題` : '整科錯題'
  if (mode === 'random') badge = `隨機抽題（${questions.length} 題）`
  const isCorrect = selected === q.correctIndex

  return (
    <SessionLayout
      badge={badge} badgeColor={modeColor} badgeBg={modeBg}
      counter={isWrongMode ? `剩 ${questions.length} 題` : `${current + 1} / ${questions.length}`}
      progress={isWrongMode ? 1 - (questions.length - 1) / totalRef.current : (current + 1) / questions.length}
      onExit={isWrongMode ? null : handleEarlyExit}
    >
      {isWrongMode && <Notice>📋 錯題複習：有把握地連續答對 {GRADUATE_STREAK} 次，就會移出錯題本</Notice>}
      <QuestionCard q={q} selected={selected} showResult={showResult} onSelect={setSelected} />
      {!showResult ? (
        <>
          <UnsureToggle checked={unsure} onChange={setUnsure} />
          <ConfirmButton color={modeColor} disabled={selected === null}
            onClick={isWrongMode ? handleWrongConfirm : handleConfirm} />
        </>
      ) : (
        <ResultPanel
          correct={isCorrect}
          extra={isCorrect && q.wasUnsure
            ? '🤔 已放進錯題本，之後再練習'
            : isWrongMode
              ? (q.consecutive_correct >= GRADUATE_STREAK ? '🎓 已從錯題本畢業！' : `📈 累積連對 ${q.consecutive_correct}/${GRADUATE_STREAK}`)
              : null}
          explanation={q.explanation}
          color={modeColor}
          nextLabel={isWrongMode
            ? (questions.length === 1 ? '完成複習 🎉' : '下一題 →')
            : (current + 1 < questions.length ? '下一題 →' : '查看成績')}
          onNext={isWrongMode ? handleWrongNext : handleNext}
        />
      )}
    </SessionLayout>
  )
}

// ── 畫面元件 ───────────────────────────────────────────────

function SessionLayout({ badge, badgeColor, badgeBg, counter, progress, onExit, children }) {
  return (
    <div className="page-container">
      <header className="page-header compact">
        <div className="session-info">
          <span className="week-badge" style={{ background: badgeBg, color: badgeColor }}>{badge}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>{counter}</div>
          {onExit && (
            <button onClick={onExit} style={{
              fontSize: '13px', color: '#64748B', background: '#F1F5F9',
              border: '1px solid #CBD5E1', borderRadius: '8px', padding: '4px 10px', cursor: 'pointer',
            }}>離開</button>
          )}
        </div>
      </header>
      <div style={{ height: '4px', background: '#E2E8F0' }}>
        <div style={{ height: '100%', background: badgeColor, width: `${Math.max(0, Math.min(1, progress)) * 100}%`, transition: 'width 0.3s' }} />
      </div>
      <main className="main-content">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>{children}</div>
      </main>
    </div>
  )
}

function Notice({ children }) {
  return (
    <div style={{
      background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '10px',
      padding: '10px 16px', fontSize: '13px', color: '#DC2626', marginBottom: '16px', textAlign: 'center',
    }}>{children}</div>
  )
}

function QuestionCard({ q, selected, showResult, onSelect }) {
  return (
    <div className="question-card" style={{ marginBottom: '20px' }}>
      {q.groupContent && (
        <div style={{
          background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '8px',
          padding: '14px 16px', marginBottom: '16px', fontSize: '14px', lineHeight: 1.8,
          color: '#334155', whiteSpace: 'pre-line',
        }}>
          {q.groupImageUrl && (
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
              <img src={q.groupImageUrl} alt="題組圖片" style={{ maxWidth: '100%', maxHeight: '320px', borderRadius: '6px', objectFit: 'contain' }} />
            </div>
          )}
          {q.groupContent}
        </div>
      )}
      {q.exam_source && (
        <div style={{ display: 'inline-block', marginBottom: '10px', padding: '2px 10px', borderRadius: '999px',
          background: '#FEF3C7', color: '#B45309', fontSize: '12px', fontWeight: 700 }}>
          📝 {q.exam_source}
        </div>
      )}
      <div className="question-text" style={{ whiteSpace: 'pre-line' }}>{q.content}</div>
      {q.image_url && (
        <div style={{ margin: '16px 0', textAlign: 'center' }}>
          <img src={q.image_url} alt="題目圖片" style={{ maxWidth: '100%', maxHeight: '280px', borderRadius: '8px', border: '1px solid #E2E8F0', objectFit: 'contain' }} />
        </div>
      )}
      <div className={q.isImageOptions ? 'options-grid options-grid-image' : 'options-grid'}>
        {q.shuffledOptions.map((opt, idx) => {
          let cls = 'option-btn'
          if (q.isImageOptions) cls += ' option-btn-image'
          if (showResult) {
            if (idx === q.correctIndex) cls += ' correct'
            else if (idx === selected) cls += ' wrong'
          } else if (idx === selected) cls += ' selected'
          const imgUrl = q.shuffledOptionImgs ? q.shuffledOptionImgs[idx] : null
          return (
            <button key={idx} className={cls} onClick={() => !showResult && onSelect(idx)} disabled={showResult}>
              <span className="option-label">{idx + 1}</span>
              {imgUrl
                ? <img src={imgUrl} alt={`選項${idx + 1}`} style={{ maxWidth: '100%', maxHeight: '160px', objectFit: 'contain', borderRadius: '4px', display: 'block', margin: '4px auto 0' }} />
                : <span className="option-text">{opt}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function UnsureToggle({ checked, onChange }) {
  return (
    <label style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
      marginBottom: '12px', padding: '10px', borderRadius: '10px', cursor: 'pointer',
      background: checked ? '#FFFBEB' : 'transparent',
      border: `1px solid ${checked ? '#FCD34D' : 'var(--border)'}`,
      fontSize: '15px', color: checked ? '#B45309' : 'var(--text-light)', userSelect: 'none',
    }}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)}
        style={{ width: '18px', height: '18px', accentColor: '#D97706' }} />
      🤔 我不確定
    </label>
  )
}

function ConfirmButton({ color, disabled, onClick }) {
  return (
    <button className="btn btn-primary btn-large"
      style={{ width: '100%', background: color, borderColor: color }}
      onClick={onClick} disabled={disabled}>
      確認答案
    </button>
  )
}

function ResultPanel({ correct, extra, explanation, color, nextLabel, onNext }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '18px', fontWeight: 700, color: correct ? '#16A34A' : '#DC2626' }}>
        {correct ? '✅ 答對了！' : '❌ 答錯了！'}
        {extra && <span style={{ fontSize: '14px', marginLeft: '8px', color: '#D97706' }}>{extra}</span>}
      </div>
      {explanation && (
        <div style={{
          background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px',
          padding: '14px 16px', fontSize: '14px', color: '#166534', lineHeight: 1.7,
          marginBottom: '16px', whiteSpace: 'pre-line',
        }}>
          <span style={{ fontWeight: 700 }}>解析：</span>{explanation}
        </div>
      )}
      <button className="btn btn-large" onClick={onNext} style={{
        width: '100%', background: color, color: 'white', border: 'none', borderRadius: '10px',
        cursor: 'pointer', padding: '16px', fontWeight: 700, fontSize: '16px',
      }}>{nextLabel}</button>
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
        <button className="btn btn-primary" onClick={onBack}>回到單元列表</button>
      </main>
    </div>
  )
}

function CompleteScreen({ total, correct, isWrongMode, onBack }) {
  const score = total > 0 ? Math.round((correct / total) * 100) : 100
  const tone = score >= 80 ? ['#ECFDF5', '#16A34A'] : score >= 60 ? ['#FEF3C7', '#D97706'] : ['#FEF2F2', '#DC2626']
  return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '72px', marginBottom: '16px' }}>
          {isWrongMode ? '🎓' : score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪'}
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>
          {isWrongMode ? '錯題複習完成！' : '練習完成！'}
        </h2>
        {isWrongMode ? (
          <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>這回合畢業 {correct} 題</p>
        ) : (
          <>
            <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>答對 {correct} / {total} 題</p>
            <div style={{ display: 'inline-block', padding: '20px 48px', background: tone[0], borderRadius: '20px', marginBottom: '32px' }}>
              <span style={{ fontSize: '48px', fontWeight: 800, color: tone[1] }}>{score}分</span>
            </div>
          </>
        )}
        <div><button className="btn btn-primary btn-large" onClick={onBack}>回到單元列表</button></div>
      </main>
    </div>
  )
}
