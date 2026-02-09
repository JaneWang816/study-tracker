import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { calculateSM2, qualityButtons, getNextReviewText } from '../utils/sm2'
import { speak, stopSpeaking } from '../utils/speech'

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

  const currentCard = cards[currentIndex]

  // 取得本地日期字串 YYYY-MM-DD
  const getLocalDateString = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  // 取得資料（只在初次載入時執行）
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return

      // 取得 deck 資訊
      const { data: deckData } = await supabase
        .from('decks')
        .select('*')
        .eq('id', deckId)
        .single()

      if (deckData) {
        setDeck(deckData)
      }

      // 取得待複習字卡
      const { data: cardsData } = await supabase
        .from('flashcards')
        .select('*')
        .eq('deck_id', deckId)
        .lte('next_review_at', new Date().toISOString())

      if (cardsData && cardsData.length > 0) {
        // 隨機排序（只在初次載入時排序一次）
        const shuffled = [...cardsData].sort(() => Math.random() - 0.5)
        setCards(shuffled)
      } else {
        setIsComplete(true)
      }

      setLoading(false)
    }

    fetchData()
    
    // 清理：離開頁面時停止語音
    return () => {
      stopSpeaking()
    }
  }, [deckId, user]) // 只在 deckId 或 user 改變時重新載入

  // 更新 study_logs
  const updateStudyLog = async (count) => {
    try {
      if (!user) return

      const today = getLocalDateString()

      // 嘗試查詢今日記錄（欄位名稱改為 study_date）
      const { data: existing, error: selectError } = await supabase
        .from('study_logs')
        .select('*')
        .eq('user_id', user.id)
        .eq('study_date', today)
        .maybeSingle()

      // 如果查詢出錯且不是「找不到」的錯誤，記錄並跳過
      if (selectError && selectError.code !== 'PGRST116') {
        console.warn('查詢學習記錄失敗，跳過更新:', selectError)
        return
      }

      if (existing) {
        // 更新現有記錄（累加 flashcards_reviewed）
        const { error: updateError } = await supabase
          .from('study_logs')
          .update({ 
            flashcards_reviewed: (existing.flashcards_reviewed || 0) + count,
            updated_at: new Date().toISOString()
          })
          .eq('id', existing.id)
        
        if (updateError) {
          console.warn('更新學習記錄失敗:', updateError)
        }
      } else {
        // 新增記錄
        const { error: insertError } = await supabase
          .from('study_logs')
          .insert({
            user_id: user.id,
            study_date: today,
            flashcards_reviewed: count,
            study_minutes: 0,
            pomodoro_sessions: 0,
            questions_practiced: 0
          })
        
        if (insertError) {
          console.warn('新增學習記錄失敗:', insertError)
        }
      }
    } catch (error) {
      console.warn('學習記錄處理失敗，但不影響複習功能:', error)
    }
  }

  // 翻卡
  const handleFlip = () => {
    if (!isFlipped && currentCard) {
      setIsFlipped(true)
      // 翻到背面時播放語音
      if (deck?.back_lang && deck.back_lang !== 'none') {
        speak(currentCard.back, deck.back_lang).catch(console.error)
      }
    }
  }

  // 翻回正面
  const handleFlipBack = () => {
    if (isFlipped && currentCard) {
      setIsFlipped(false)
      // 翻回正面時播放語音
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

  // 評分
  const handleRate = async (quality) => {
    if (!currentCard) return

    // 防止重複點擊
    if (currentCard.isRating) return
    currentCard.isRating = true

    try {
      // 計算新的 SM-2 參數
      const result = calculateSM2({
        quality,
        currentInterval: currentCard.interval || 0,
        currentEaseFactor: currentCard.ease_factor || 2.5,
        currentRepetitionCount: currentCard.repetition_count || 0,
      })

      // 更新字卡
      await supabase
        .from('flashcards')
        .update({
          ease_factor: result.easeFactor,
          interval: result.interval,
          repetition_count: result.repetitions,
          next_review_at: result.nextReview.toISOString(),
        })
        .eq('id', currentCard.id)

      // 更新學習記錄（只在第一次評分這張卡片時計數）
      if (!reviewedCardIds.has(currentCard.id)) {
        await updateStudyLog(1)
        setReviewedCardIds(prev => new Set([...prev, currentCard.id]))
      }

      // 更新統計
      setStats((prev) => ({
        reviewed: prev.reviewed + 1,
        correct: quality >= 2 ? prev.correct + 1 : prev.correct,
        incorrect: quality < 2 ? prev.incorrect + 1 : prev.incorrect,
      }))

      // 下一張卡
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1)
        setIsFlipped(false)
        stopSpeaking()
      } else {
        // 完成
        setIsComplete(true)
        stopSpeaking()
      }
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
            <button onClick={() => navigate('/')} className="btn btn-outline">
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
        <button onClick={() => navigate('/daily/flashcards')} className="btn-back">
          ← 返回
        </button>
        <div className="header-info">
          <h2>{deck?.title}</h2>
          <p>{currentIndex + 1} / {cards.length}</p>
        </div>
        <div className="stats-mini">
          <span style={{ color: '#10B981' }}>✓ {stats.correct}</span>
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
                // 預覽下次複習時間
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
