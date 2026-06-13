import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { calculateSM2, getNextReviewText } from '../utils/sm2'
import { speak, stopSpeaking } from '../utils/speech'

// 取得台灣時間的日期字串 YYYY-MM-DD
const getTaiwanDateString = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60
  const localOffset = now.getTimezoneOffset()
  const taiwanTime = new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
  const year = taiwanTime.getFullYear()
  const month = String(taiwanTime.getMonth() + 1).padStart(2, '0')
  const day = String(taiwanTime.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const getTaiwanISOString = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60
  const localOffset = now.getTimezoneOffset()
  const taiwanTime = new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
  return taiwanTime.toISOString()
}

// 產生填充題提示：頭尾各一字母，<=3 個字母只顯示第一個
const getHint = (word) => {
  const w = word.trim()
  if (w.length <= 1) return w
  if (w.length <= 3) return w[0] + '_'.repeat(w.length - 1)
  return w[0] + '_'.repeat(w.length - 2) + w[w.length - 1]
}

// 答案比對：忽略大小寫與前後空白
const checkAnswer = (userInput, correct) => {
  return userInput.trim().toLowerCase() === correct.trim().toLowerCase()
}

export default function DailyFlashcardsReview() {
  const navigate = useNavigate()
  const { deckId } = useParams()
  const { user } = useAuth()

  const [deck, setDeck] = useState(null)
  const [cards, setCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  // 填充題 state
  const [userInput, setUserInput] = useState('')
  const [phase, setPhase] = useState('input')   // 'input' | 'result'
  const [isCorrect, setIsCorrect] = useState(null)

  // 統計
  const [stats, setStats] = useState({ reviewed: 0, correct: 0, incorrect: 0 })
  const [reviewedCardIds, setReviewedCardIds] = useState(new Set())

  const startTimeRef = useRef(Date.now())
  const sessionSavedRef = useRef(false)
  const statsRef = useRef(stats)
  const inputRef = useRef(null)

  useEffect(() => { statsRef.current = stats }, [stats])

  const currentCard = cards[currentIndex]

  // 儲存到 practice_sessions
  const saveToPracticeSessions = useCallback(async (finalStats) => {
    if (sessionSavedRef.current || !user || !finalStats || finalStats.reviewed === 0) return
    const accuracy = Math.round((finalStats.correct / finalStats.reviewed) * 100)
    const duration = Math.floor((Date.now() - startTimeRef.current) / 1000)
    try {
      const { error } = await supabase.from('practice_sessions').insert({
        user_id: user.id,
        subject: 'daily',
        module: 'flashcards',
        topic: deckId,
        total_questions: finalStats.reviewed,
        correct_count: finalStats.correct,
        score: accuracy,
        duration
      })
      if (!error) sessionSavedRef.current = true
    } catch (err) {
      console.error('寫入 practice_sessions 發生例外:', err)
    }
  }, [user, deckId])

  // 取得資料
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return

      const { data: deckData } = await supabase
        .from('decks').select('*').eq('id', deckId).single()
      if (deckData) setDeck(deckData)

      const { data: cardsData } = await supabase
        .from('flashcards').select('*').eq('deck_id', deckId)
        .lte('next_review_at', new Date().toISOString())

      if (cardsData && cardsData.length > 0) {
        const shuffled = [...cardsData].sort(() => Math.random() - 0.5)
        setCards(shuffled)
      } else {
        setIsComplete(true)
      }

      setLoading(false)
    }
    fetchData()
  }, [deckId, user])

  // 切題時自動 focus 輸入框
  useEffect(() => {
    if (phase === 'input' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentIndex, phase])

  // 離開時儲存
  useEffect(() => {
    return () => {
      stopSpeaking()
      if (statsRef.current.reviewed > 0 && !sessionSavedRef.current) {
        saveToPracticeSessions(statsRef.current)
      }
    }
  }, [saveToPracticeSessions])

  // 更新 study_logs
  const updateStudyLog = async (count) => {
    try {
      if (!user) return
      const today = getTaiwanDateString()
      const { data: existing } = await supabase
        .from('study_logs').select('*')
        .eq('user_id', user.id).eq('study_date', today).maybeSingle()

      if (existing) {
        await supabase.from('study_logs')
          .update({ flashcards_reviewed: (existing.flashcards_reviewed || 0) + count, updated_at: getTaiwanISOString() })
          .eq('id', existing.id)
      } else {
        await supabase.from('study_logs').insert({
          user_id: user.id, study_date: today,
          flashcards_reviewed: count, study_minutes: 0,
          pomodoro_sessions: 0, questions_practiced: 0
        })
      }
    } catch (error) {
      console.warn('學習記錄處理失敗:', error)
    }
  }

  // 返回
  const handleBack = async () => {
    stopSpeaking()
    if (stats.reviewed > 0 && !sessionSavedRef.current) {
      await saveToPracticeSessions(stats)
    }
    navigate('/daily/flashcards')
  }

  // 確認答案
  const handleConfirm = () => {
    if (!userInput.trim() || !currentCard) return
    const correct = checkAnswer(userInput, currentCard.back)
    setIsCorrect(correct)
    setPhase('result')
    // 翻面後播放發音
    if (deck?.back_lang && deck.back_lang !== 'none') {
      speak(currentCard.back, deck.back_lang).catch(console.error)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && phase === 'input') handleConfirm()
  }

  // 下一張（套用 SM-2）
  const handleNext = async () => {
    if (!currentCard) return
    if (currentCard.isRating) return
    currentCard.isRating = true

    const quality = isCorrect ? 4 : 1

    try {
      const result = calculateSM2({
        quality,
        currentInterval: currentCard.interval || 0,
        currentEaseFactor: currentCard.ease_factor || 2.5,
        currentRepetitionCount: currentCard.repetition_count || 0,
      })

      await supabase.from('flashcards').update({
        ease_factor: result.easeFactor,
        interval: result.interval,
        repetition_count: result.repetitions,
        next_review_at: result.nextReview.toISOString(),
        updated_at: getTaiwanISOString()
      }).eq('id', currentCard.id)

      if (!reviewedCardIds.has(currentCard.id)) {
        await updateStudyLog(1)
        setReviewedCardIds(prev => new Set([...prev, currentCard.id]))
      }

      const newStats = {
        reviewed: stats.reviewed + 1,
        correct: isCorrect ? stats.correct + 1 : stats.correct,
        incorrect: !isCorrect ? stats.incorrect + 1 : stats.incorrect,
      }
      setStats(newStats)

      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setUserInput('')
        setIsCorrect(null)
        setPhase('input')
        stopSpeaking()
      } else {
        await saveToPracticeSessions(newStats)
        setIsComplete(true)
        stopSpeaking()
      }
    } catch (error) {
      console.error('handleNext 錯誤:', error)
    } finally {
      currentCard.isRating = false
    }
  }

  // ── Loading ───────────────────────────────────────────────

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-container">
          <div className="loading-spinner" />
          <p>載入中...</p>
        </div>
      </div>
    )
  }

  // ── 完成頁面 ──────────────────────────────────────────────

  if (isComplete) {
    const accuracy = stats.reviewed > 0
      ? Math.round((stats.correct / stats.reviewed) * 100) : 0
    return (
      <div className="page-container">
        <div className="flashcard-complete">
          <div className="complete-icon">🎉</div>
          <h1>複習完成！</h1>
          <div className="complete-stats">
            <div className="stat-card">
              <div className="stat-value">{stats.reviewed}</div>
              <div className="stat-label">已複習</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#10B981' }}>{stats.correct}</div>
              <div className="stat-label">答對</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#EF4444' }}>{stats.incorrect}</div>
              <div className="stat-label">答錯</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{accuracy}%</div>
              <div className="stat-label">正確率</div>
            </div>
          </div>
          <div className="complete-actions">
            <button onClick={() => navigate('/daily/flashcards')} className="btn btn-primary">
              返回字卡列表
            </button>
            <button onClick={() => navigate('/daily')} className="btn btn-outline">
              返回首頁
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── 練習頁面 ──────────────────────────────────────────────

  const hint = currentCard ? getHint(currentCard.back) : ''

  return (
    <div className="page-container flashcard-review">
      {/* 頁首 */}
      <div className="flashcard-header">
        <button onClick={handleBack} className="btn-back">← 返回</button>
        <div className="header-info">
          <h2>{deck?.title}</h2>
          <p>{currentIndex + 1} / {cards.length}</p>
        </div>
        <div className="stats-mini">
          <span style={{ color: '#10B981' }}>✔ {stats.correct}</span>
          <span style={{ color: '#EF4444' }}>✗ {stats.incorrect}</span>
        </div>
      </div>

      {/* 進度條 */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
        />
      </div>

      {/* 卡片區 */}
      <div className="flashcard-container">
        <div className="flashcard" style={{ cursor: 'default', minHeight: '200px' }}>
          <div className="flashcard-content">

            {/* 正面：中文題目 */}
            <div style={{ marginBottom: '24px' }}>
              <div className="card-side-label">題目</div>
              <div className="card-text" style={{ fontSize: '32px', marginBottom: '8px' }}>
                {currentCard?.front}
              </div>
              <div style={{
                fontSize: '22px',
                letterSpacing: '4px',
                color: '#9CA3AF',
                fontFamily: 'monospace',
                fontWeight: 600
              }}>
                {hint}
              </div>
            </div>

            {/* 輸入區（答題前） */}
            {phase === 'input' && (
              <div style={{ textAlign: 'center' }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="請輸入英文單字"
                  style={{
                    fontSize: '22px',
                    padding: '12px 20px',
                    border: '2px solid #E5E7EB',
                    borderRadius: '12px',
                    width: '260px',
                    textAlign: 'center',
                    outline: 'none',
                    letterSpacing: '2px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#F59E0B'}
                  onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  autoComplete="off"
                  autoCapitalize="none"
                />
                <br />
                <button
                  onClick={handleConfirm}
                  disabled={!userInput.trim()}
                  className="btn btn-primary"
                  style={{ marginTop: '16px', fontSize: '16px', padding: '12px 36px' }}
                >
                  確認 (Enter)
                </button>
              </div>
            )}

            {/* 結果區（答題後，相當於翻面） */}
            {phase === 'result' && (
              <div style={{ textAlign: 'center' }}>
                {/* 對錯反饋 */}
                <div style={{
                  display: 'inline-block',
                  padding: '12px 28px',
                  background: isCorrect ? '#D1FAE5' : '#FEE2E2',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '28px', marginBottom: '4px' }}>
                    {isCorrect ? '✓' : '✗'}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: isCorrect ? '#065F46' : '#991B1B'
                  }}>
                    {isCorrect ? '答對了！' : '答錯了'}
                  </div>
                  {!isCorrect && (
                    <div style={{ marginTop: '8px', fontSize: '14px', color: '#6B7280' }}>
                      你的答案：<span style={{ color: '#EF4444', fontWeight: 600 }}>{userInput}</span>
                    </div>
                  )}
                </div>

                {/* 正確答案 */}
                <div style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#1F2937',
                  marginBottom: '8px',
                  letterSpacing: '1px'
                }}>
                  {currentCard?.back}
                </div>

                {/* 發音按鈕 */}
                {deck?.back_lang && deck.back_lang !== 'none' && (
                  <button
                    onClick={() => speak(currentCard.back, deck.back_lang).catch(console.error)}
                    style={{
                      padding: '8px 20px',
                      background: '#F0FDF4',
                      border: '1px solid #10B981',
                      borderRadius: '8px',
                      color: '#065F46',
                      cursor: 'pointer',
                      fontSize: '14px',
                      marginBottom: '16px'
                    }}
                  >
                    🔊 播放發音
                  </button>
                )}

                {/* 例句 */}
                {currentCard?.note && (
                  <div className="card-note" style={{ textAlign: 'left', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="note-label">📝 例句：</span>
                      {deck?.back_lang && deck.back_lang !== 'none' && (
                        <button
                          className="btn-speak-small"
                          onClick={() => speak(currentCard.note, deck.back_lang).catch(console.error)}
                        >
                          🔊
                        </button>
                      )}
                    </div>
                    <div style={{ marginTop: '4px' }}>{currentCard.note}</div>
                  </div>
                )}

                {/* 例句中文翻譯 */}
                {currentCard?.note2 && (
                  <div className="card-note" style={{ textAlign: 'left', marginBottom: '20px' }}>
                    <span className="note-label">📝 句意：</span>
                    <div style={{ marginTop: '4px' }}>{currentCard.note2}</div>
                  </div>
                )}

                {/* 下一張按鈕 */}
                <button
                  onClick={handleNext}
                  className="btn btn-primary"
                  style={{ fontSize: '16px', padding: '12px 36px' }}
                >
                  {currentIndex < cards.length - 1 ? '下一張' : '完成'}
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
