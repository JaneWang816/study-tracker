import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { calculateSM2, qualityButtons, getNextReviewText } from '../utils/sm2'
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

// 取得台灣時間的 ISO 字串
const getTaiwanISOString = () => {
  const now = new Date()
  const taiwanOffset = 8 * 60
  const localOffset = now.getTimezoneOffset()
  const taiwanTime = new Date(now.getTime() + (taiwanOffset + localOffset) * 60 * 1000)
  return taiwanTime.toISOString()
}

export default function DailyFlashcardsReview() {
  const navigate = useNavigate()
  const { deckId } = useParams()
  const { user } = useAuth()

  const [deck, setDeck] = useState(null)
  const [cards, setCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  
  // 統計
  const [stats, setStats] = useState({
    reviewed: 0,
    correct: 0,
    incorrect: 0
  })

  // 記錄本次 session 已評分的卡片 ID（避免重複計數）
  const [reviewedCardIds, setReviewedCardIds] = useState(new Set())
  
  // 記錄開始時間
  const startTimeRef = useRef(Date.now())
  
  // 防止重複提交
  const sessionSavedRef = useRef(false)
  
  // 用 ref 追蹤最新的 stats（因為 useEffect cleanup 中拿不到最新的 state）
  const statsRef = useRef(stats)
  useEffect(() => {
    statsRef.current = stats
  }, [stats])

  const currentCard = cards[currentIndex]

  // 儲存到 practice_sessions
  const saveToPracticeSessions = useCallback(async (finalStats) => {
    // 防止重複儲存
    if (sessionSavedRef.current) {
      return
    }

    if (!user) {
      return
    }
    
    if (!finalStats || finalStats.reviewed === 0) {
      return
    }

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
        duration: duration
      })

      if (error) {
        console.error('寫入 practice_sessions 失敗:', error)
      } else {
        console.log('practice_sessions 記錄成功')
        sessionSavedRef.current = true
      }
    } catch (err) {
      console.error('寫入 practice_sessions 發生例外:', err)
    }
  }, [user, deckId])

  // 取得資料
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return

      const { data: deckData } = await supabase
        .from('decks')
        .select('*')
        .eq('id', deckId)
        .single()

      if (deckData) {
        setDeck(deckData)
      }

      const { data: cardsData } = await supabase
        .from('flashcards')
        .select('*')
        .eq('deck_id', deckId)
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

  // 離開頁面時儲存記錄
  useEffect(() => {
    return () => {
      stopSpeaking()
      // 離開時，如果有複習過任何卡片，就儲存記錄
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
        .from('study_logs')
        .select('*')
        .eq('user_id', user.id)
        .eq('study_date', today)
        .maybeSingle()

      if (existing) {
        await supabase
          .from('study_logs')
          .update({ 
            flashcards_reviewed: (existing.flashcards_reviewed || 0) + count,
            updated_at: getTaiwanISOString()
          })
          .eq('id', existing.id)
      } else {
        await supabase
          .from('study_logs')
          .insert({
            user_id: user.id,
            study_date: today,
            flashcards_reviewed: count,
            study_minutes: 0,
            pomodoro_sessions: 0,
            questions_practiced: 0
          })
      }
    } catch (error) {
      console.warn('學習記錄處理失敗:', error)
    }
  }

  // 翻卡
  const handleFlip = () => {
    if (!isFlipped && currentCard) {
      setIsFlipped(true)
      if (deck?.back_lang && deck.back_lang !== 'none') {
        speak(currentCard.back, deck.back_lang).catch(console.error)
      }
    }
  }

  // 翻回正面
  const handleFlipBack = () => {
    if (isFlipped && currentCard) {
      setIsFlipped(false)
      if (deck?.front_lang && deck.front_lang !== 'none') {
        speak(currentCard.front, deck.front_lang).catch(console.error)
      }
    }
  }

  // 語音播放
  const handleSpeak = (text, lang) => {
    if (lang && lang !== 'none') {
      speak(text, lang).catch(console.error)
    }
  }

  // 返回（手動離開）
  const handleBack = async () => {
    stopSpeaking()
    // 如果有複習過，先儲存記錄
    if (stats.reviewed > 0 && !sessionSavedRef.current) {
      await saveToPracticeSessions(stats)
    }
    navigate('/daily/flashcards')
  }

  // 評分
  const handleRate = async (quality) => {
    if (!currentCard) return
    if (currentCard.isRating) return
    currentCard.isRating = true

    try {
      const result = calculateSM2({
        quality,
        currentInterval: currentCard.interval || 0,
        currentEaseFactor: currentCard.ease_factor || 2.5,
        currentRepetitionCount: currentCard.repetition_count || 0,
      })

      await supabase
        .from('flashcards')
        .update({
          ease_factor: result.easeFactor,
          interval: result.interval,
          repetition_count: result.repetitions,
          next_review_at: result.nextReview.toISOString(),
          updated_at: getTaiwanISOString()
        })
        .eq('id', currentCard.id)

      if (!reviewedCardIds.has(currentCard.id)) {
        await updateStudyLog(1)
        setReviewedCardIds(prev => new Set([...prev, currentCard.id]))
      }

      const newStats = {
        reviewed: stats.reviewed + 1,
        correct: quality >= 2 ? stats.correct + 1 : stats.correct,
        incorrect: quality < 2 ? stats.incorrect + 1 : stats.incorrect,
      }
      
      setStats(newStats)

      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setIsFlipped(false)
        stopSpeaking()
      } else {
        // 最後一張卡
        await saveToPracticeSessions(newStats)
        setIsComplete(true)
        stopSpeaking()
      }
    } catch (error) {
      console.error('handleRate 錯誤:', error)
    } finally {
      currentCard.isRating = false
    }
  }

  // Loading
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

  // 完成頁面
  if (isComplete) {
    const accuracy = stats.reviewed > 0 
      ? Math.round((stats.correct / stats.reviewed) * 100) 
      : 0

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

  // 複習頁面
  return (
    <div className="page-container flashcard-review">
      {/* 頁首 */}
      <div className="flashcard-header">
        <button onClick={handleBack} className="btn-back">
          ← 返回
        </button>
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

      {/* 卡片 */}
      <div className="flashcard-container">
        <div 
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          {!isFlipped ? (
            // 正面
            <div className="flashcard-content">
              <div className="card-side-label">正面</div>
              <div className="card-text">{currentCard?.front}</div>
              {deck?.front_lang && deck.front_lang !== 'none' && (
                <button
                  className="btn-speak"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSpeak(currentCard.front, deck.front_lang)
                  }}
                >
                  🔊 播放
                </button>
              )}
              <div className="flip-hint">點擊翻卡</div>
            </div>
          ) : (
            // 背面
            <div className="flashcard-content">
              <div className="card-side-label">背面</div>
              <div className="card-text">{currentCard?.back}</div>
              {currentCard?.note && (
                <div className="card-note">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="note-label">📝 筆記：</span>
                    {deck?.back_lang && deck.back_lang !== 'none' && (
                      <button
                        className="btn-speak-small"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSpeak(currentCard.note, deck.back_lang)
                        }}
                      >
                        🔊
                      </button>
                    )}
                  </div>
                  <div style={{ marginTop: '4px' }}>{currentCard.note}</div>
                </div>
              )}
              {currentCard?.note2 && (
                <div className="card-note" style={{ marginTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="note-label">📝 筆記2：</span>
                    {deck?.back_lang && deck.back_lang !== 'none' && (
                      <button
                        className="btn-speak-small"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSpeak(currentCard.note2, deck.back_lang)
                        }}
                      >
                        🔊
                      </button>
                    )}
                  </div>
                  <div style={{ marginTop: '4px' }}>{currentCard.note2}</div>
                </div>
              )}
              {deck?.back_lang && deck.back_lang !== 'none' && (
                <button
                  className="btn-speak"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSpeak(currentCard.back, deck.back_lang)
                  }}
                >
                  🔊 播放答案
                </button>
              )}
              <button
                className="btn-flip-back"
                onClick={(e) => {
                  e.stopPropagation()
                  handleFlipBack()
                }}
              >
                翻回正面
              </button>
            </div>
          )}
        </div>

        {/* 評分按鈕 */}
        {isFlipped && (
          <div className="rating-section">
            <p className="rating-hint">你記得多少？</p>
            <div className="rating-buttons">
              {qualityButtons.map((btn) => {
                const preview = calculateSM2({
                  quality: btn.value,
                  currentInterval: currentCard.interval || 0,
                  currentEaseFactor: currentCard.ease_factor || 2.5,
                  currentRepetitionCount: currentCard.repetition_count || 0,
                })
                
                return (
                  <button
                    key={btn.value}
                    onClick={() => handleRate(btn.value)}
                    className="rating-button"
                    style={{ backgroundColor: btn.bg }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = btn.hover}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = btn.bg}
                  >
                    <span className="rating-label">{btn.label}</span>
                    <span className="rating-preview">
                      {getNextReviewText(preview.interval)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
