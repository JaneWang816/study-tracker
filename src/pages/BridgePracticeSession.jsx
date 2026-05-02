// src/pages/BridgePracticeSession.jsx
// 銜接課程題庫練習（含錯題複習）
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000001'
const USER_ID = '0c4ec0e9-872f-4e18-ae17-c95894bd820c'

// 單元名稱對照
const UNIT_TITLES = {
  'a3000000-0000-0000-0000-000000000001': '正負數',
  'a3000000-0000-0000-0000-000000000002': '整數、小數與分數的四則運算',
  'a3000000-0000-0000-0000-000000000003': '因數與倍數',
  'a3000000-0000-0000-0000-000000000004': '長度、重量、容量與時間',
  'a3000000-0000-0000-0000-000000000005': '平面幾何',
  'a3000000-0000-0000-0000-000000000006': '立體幾何',
  'a3000000-0000-0000-0000-000000000007': '速率',
  'a3000000-0000-0000-0000-000000000008': '比、比值與百分率',
  'a3000000-0000-0000-0000-000000000009': '統計',
  'a3000000-0000-0000-0000-000000000010': '代數',
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 將題目加上 shuffledOptions + correctIndex
function prepareQuestion(q) {
  // Supabase jsonb 自動反序列化，options 已是陣列
  const options = Array.isArray(q.options) ? q.options : JSON.parse(q.options)
  // answer 可能是 "\"2\"" 或 "2" 或 2，統一取數字
  const answerIndex = parseInt(String(q.answer).replace(/["\\]/g, ""))
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
  const isWrongMode = !unitId || unitId === "wrong" || window.location.pathname.endsWith("/wrong")
  const navigate = useNavigate()

  const [phase, setPhase] = useState('loading')  // loading | practice | review | complete
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [wrongQueue, setWrongQueue] = useState([])
  const [correctCount, setCorrectCount] = useState(0)
  const [startTime] = useState(Date.now())
  const isSubmitting = useRef(false)
  const totalQuestionsRef = useRef(0)  // 原始題數（不含錯題複習）
  const correctCountRef = useRef(0)    // 答對題數（只計第一輪）

  useEffect(() => { loadQuestions() }, [unitId])

  async function loadQuestions() {
    let query = supabase
      .from('questions')
      .select('*')
      .eq('subject_id', SUBJECT_ID)
      .order('order')

    if (isWrongMode) {
      query = query.gt('wrong_count', 0).lt('consecutive_correct', 3)
    } else {
      query = query.eq('unit_id', unitId)
    }

    const { data, error } = await query
    if (error || !data || data.length === 0) {
      setPhase('empty')
      return
    }

    const prepared = data.map(prepareQuestion)
    totalQuestionsRef.current = prepared.length
    correctCountRef.current = 0
    setQuestions(prepared)
    setPhase('practice')
  }

  function handleSelect(idx) {
    if (confirmed) return
    setSelected(idx)
  }

  async function handleConfirm() {
    if (selected === null || confirmed || isSubmitting.current) return
    isSubmitting.current = true
    setConfirmed(true)

    const q = questions[current]
    const isCorrect = selected === q.correctIndex

    // 更新 Supabase
    const newAttempt = (q.attempt_count || 0) + 1
    const newWrong = isCorrect ? (q.wrong_count || 0) : (q.wrong_count || 0) + 1
    const newConsec = isCorrect ? (q.consecutive_correct || 0) + 1 : 0

    await supabase.from('questions').update({
      attempt_count: newAttempt,
      wrong_count: newWrong,
      consecutive_correct: newConsec,
      last_attempted_at: new Date().toISOString(),
    }).eq('id', q.id)

    if (!isCorrect) {
      setWrongQueue(prev => [...prev, { ...q, attempt_count: newAttempt, wrong_count: newWrong, consecutive_correct: 0 }])
    } else {
      correctCountRef.current += 1
      setCorrectCount(correctCountRef.current)
    }

    isSubmitting.current = false
  }

  async function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1)
      setSelected(null)
      setConfirmed(false)
    } else {
      // 練習結束
      await saveSession()
      if (wrongQueue.length > 0) {
        // 進入錯題複習
        setQuestions(wrongQueue.map(prepareQuestion))
        setCurrent(0)
        setSelected(null)
        setConfirmed(false)
        setWrongQueue([])
        setPhase('review')
      } else {
        setPhase('complete')
      }
    }
  }

  async function handleReviewNext() {
    const q = questions[current]
    const isCorrect = selected === q.correctIndex

    isSubmitting.current = true
    const newConsec = isCorrect ? (q.consecutive_correct || 0) + 1 : 0
    await supabase.from('questions').update({
      attempt_count: (q.attempt_count || 0) + 1,
      wrong_count: isCorrect ? q.wrong_count : (q.wrong_count || 0) + 1,
      consecutive_correct: newConsec,
      last_attempted_at: new Date().toISOString(),
    }).eq('id', q.id)
    isSubmitting.current = false

    if (!isCorrect) {
      // 答錯：重置選擇，留在同一題重試（重新洗牌選項）
      const retried = prepareQuestion({ ...q, consecutive_correct: 0 })
      setQuestions(prev => prev.map((item, i) => i === current ? retried : item))
      setSelected(null)
      return
    }

    // 答對：進下一題或完成
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1)
      setSelected(null)
    } else {
      setPhase('complete')
    }
  }

  async function saveSession() {
    const duration = Math.round((Date.now() - startTime) / 1000)
    const total = questions.length
    const topic = isWrongMode ? '錯題複習' : (UNIT_TITLES[unitId] || unitId)
    await supabase.from('practice_sessions').insert({
      user_id: USER_ID,
      subject: 'bridge_math',
      module: isWrongMode ? 'wrong_review' : `unit_${Object.keys(UNIT_TITLES).indexOf(unitId) + 1}`,
      topic,
      total_questions: totalQuestionsRef.current,
      correct_count: correctCountRef.current,
      score: Math.round((correctCountRef.current / totalQuestionsRef.current) * 100),
      duration,
    })
  }

  // ── Render helpers ──────────────────────────────────────────
  if (phase === 'loading') return <LoadingScreen />
  if (phase === 'empty') return (
    <EmptyScreen
      message={isWrongMode ? '錯題本目前沒有題目！' : '此單元暫無題目'}
      onBack={() => navigate('/bridge/math')}
    />
  )
  if (phase === 'complete') return (
    <CompleteScreen
      total={totalQuestionsRef.current}
      correct={correctCountRef.current}
      onBack={() => navigate('/bridge/math')}
    />
  )

  const q = questions[current]
  const isReview = phase === 'review'

  return (
    <div className="page-container">
      <header className="page-header compact">
        <div className="session-info">
          <span className="week-badge" style={{ background: '#EFF6FF', color: '#2563EB' }}>
            {isReview ? '錯題複習' : (UNIT_TITLES[unitId] || '練習')}
          </span>
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>
          {current + 1} / {questions.length}
        </div>
      </header>

      {/* 進度條 */}
      <div style={{ height: '4px', background: '#E2E8F0' }}>
        <div style={{
          height: '100%', background: isReview ? '#DC2626' : '#2563EB',
          width: `${((current + 1) / questions.length) * 100}%`,
          transition: 'width 0.3s'
        }} />
      </div>

      <main className="main-content">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          {isReview && (
            <div style={{
              background: '#FEF2F2', border: '1px solid #FCA5A5',
              borderRadius: '10px', padding: '10px 16px',
              fontSize: '13px', color: '#DC2626', marginBottom: '16px', textAlign: 'center'
            }}>
              📋 錯題複習模式 — 連續答對 3 次可從錯題本退出
            </div>
          )}

          {/* 題目卡片 */}
          <div className="question-card" style={{ marginBottom: '20px' }}>
            <div className="question-text">{q.content}</div>

            <div className="options-grid">
              {q.shuffledOptions.map((opt, idx) => {
                let cls = 'option-btn'
                if (confirmed || (isReview && selected !== null)) {
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
                    disabled={confirmed || (isReview && selected !== null)}
                  >
                    <span className="option-label">{idx + 1}</span>
                    <span className="option-text">{opt}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 確認 / 下一題 */}
          {!isReview ? (
            !confirmed ? (
              <button
                className="btn btn-primary btn-large"
                style={{ width: '100%' }}
                onClick={handleConfirm}
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
                  {selected === q.correctIndex ? '✅ 答對了！' : '❌ 答錯了'}
                </div>
                <button
                  className="btn btn-primary btn-large"
                  style={{ width: '100%' }}
                  onClick={handleNext}
                >
                  {current + 1 < questions.length ? '下一題 →' : '完成練習'}
                </button>
              </div>
            )
          ) : (
            selected === null ? (
              <button className="btn btn-primary btn-large" style={{ width: '100%', background: '#DC2626' }} disabled>
                請選擇答案
              </button>
            ) : selected !== q.correctIndex ? (
              // 答錯：顯示錯誤提示 + 再試一次
              <div>
                <div style={{
                  textAlign: 'center', marginBottom: '16px',
                  fontSize: '18px', fontWeight: 700, color: '#DC2626'
                }}>
                  ❌ 答錯了，請再試一次！
                </div>
                <button
                  className="btn btn-large"
                  style={{ width: '100%', background: '#DC2626', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', padding: '16px', fontWeight: 700, fontSize: '16px' }}
                  onClick={handleReviewNext}
                >
                  🔄 再試一次
                </button>
              </div>
            ) : (
              // 答對：顯示正確 + 下一題
              <div>
                <div style={{
                  textAlign: 'center', marginBottom: '16px',
                  fontSize: '18px', fontWeight: 700, color: '#16A34A'
                }}>
                  ✅ 答對了！
                </div>
                <button
                  className="btn btn-large"
                  style={{ width: '100%', background: '#16A34A', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', padding: '16px', fontWeight: 700, fontSize: '16px' }}
                  onClick={handleReviewNext}
                >
                  {current + 1 < questions.length ? '下一題 →' : '完成複習'}
                </button>
              </div>
            )
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

function CompleteScreen({ total, correct, onBack }) {
  const score = Math.round((correct / total) * 100)
  return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '72px', marginBottom: '16px' }}>
          {score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪'}
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>練習完成！</h2>
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
        <div>
          <button className="btn btn-primary btn-large" onClick={onBack}>
            返回單元列表
          </button>
        </div>
      </main>
    </div>
  )
}
