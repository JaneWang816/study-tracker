import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

export default function DailyVocabulary() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [decks, setDecks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDecks()
  }, [])

  const fetchDecks = async () => {
    if (!user) return

    // 取得所有 deck
    const { data: decksData } = await supabase
      .from('decks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (decksData) {
      // 計算每個 deck 的卡片數量
      const decksWithCounts = await Promise.all(
        decksData.map(async (deck) => {
          // 總卡片數
          const { count: totalCount } = await supabase
            .from('flashcards')
            .select('*', { count: 'exact', head: true })
            .eq('deck_id', deck.id)

          return {
            ...deck,
            card_count: totalCount || 0
          }
        })
      )

      setDecks(decksWithCounts)
    }

    setLoading(false)
  }

  const handleDeckClick = (deck) => {
    if (deck.card_count < 20) {
      alert(`此字卡組只有 ${deck.card_count} 張，至少需要 20 張才能練習`)
      return
    }
    
    navigate(`/daily/vocabulary/${deck.id}/session`)
  }

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

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/')} className="btn-back">
          ← 返回首頁
        </button>
        <div className="header-content">
          <h1>📝 單字練習</h1>
          <p>每天隨機 20 題：中→外、外→中、克漏字</p>
        </div>
      </div>

      <div className="main-content">
        {decks.length === 0 ? (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '60px 20px',
            textAlign: 'center',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: '#E0F2FE',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px'
            }}>
              📝
            </div>
            <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
              還沒有任何字卡組
            </p>
            <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>
              請在原系統建立字卡組後再回來練習
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {decks.map((deck) => {
              const canPractice = deck.card_count >= 20
              
              return (
                <div
                  key={deck.id}
                  onClick={() => canPractice && handleDeckClick(deck)}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px',
                    cursor: canPractice ? 'pointer' : 'not-allowed',
                    opacity: canPractice ? 1 : 0.6,
                    transition: 'all 0.3s',
                    boxShadow: 'var(--shadow)',
                    borderLeft: `4px solid ${canPractice ? '#06B6D4' : '#E5E7EB'}`
                  }}
                  onMouseEnter={(e) => {
                    if (canPractice) {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#E0F2FE',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0
                    }}>
                      📝
                    </div>
                    
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        marginBottom: '4px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {deck.title}
                      </h3>
                      
                      {deck.description && (
                        <p style={{
                          fontSize: '14px',
                          color: 'var(--text-light)',
                          marginTop: '4px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {deck.description}
                        </p>
                      )}

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginTop: '12px',
                        fontSize: '13px'
                      }}>
                        <span style={{ color: 'var(--text-light)' }}>
                          ✓ {deck.card_count} 張
                        </span>
                        {canPractice ? (
                          <span style={{ color: '#06B6D4', fontWeight: 600 }}>
                            📝 隨機 20 題
                          </span>
                        ) : (
                          <span style={{ color: '#EF4444' }}>
                            ⚠️ 至少需要 20 張
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
