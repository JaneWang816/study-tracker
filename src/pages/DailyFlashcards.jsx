import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

export default function DailyFlashcards() {
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
      // 計算每個 deck 的待複習數量
      const decksWithCounts = await Promise.all(
        decksData.map(async (deck) => {
          // 總卡片數
          const { count: totalCount } = await supabase
            .from('flashcards')
            .select('*', { count: 'exact', head: true })
            .eq('deck_id', deck.id)

          // 待複習數（next_review_at <= now）
          const { count: dueCount } = await supabase
            .from('flashcards')
            .select('*', { count: 'exact', head: true })
            .eq('deck_id', deck.id)
            .lte('next_review_at', new Date().toISOString())

          return {
            ...deck,
            card_count: totalCount || 0,
            due_count: dueCount || 0
          }
        })
      )

      setDecks(decksWithCounts)
    }

    setLoading(false)
  }

  const handleDeckClick = (deckId, dueCount) => {
    if (dueCount > 0) {
      navigate(`/daily/flashcards/${deckId}/review`)
    }
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

  const totalDueCount = decks.reduce((sum, deck) => sum + deck.due_count, 0)

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/')} className="btn-back">
          ← 返回首頁
        </button>
        <div className="header-content">
          <h1>🎴 字卡複習</h1>
          <p>
            使用間隔重複法高效記憶
            {totalDueCount > 0 && (
              <span style={{ color: '#F59E0B', marginLeft: '8px' }}>
                · {totalDueCount} 張待複習
              </span>
            )}
          </p>
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
              background: '#FEF3C7',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px'
            }}>
              💡
            </div>
            <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
              還沒有任何字卡組
            </p>
            <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>
              請在原系統建立字卡組後再回來複習
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {decks.map((deck) => (
              <div
                key={deck.id}
                onClick={() => handleDeckClick(deck.id, deck.due_count)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  cursor: deck.due_count > 0 ? 'pointer' : 'not-allowed',
                  opacity: deck.due_count > 0 ? 1 : 0.6,
                  transition: 'all 0.3s',
                  boxShadow: 'var(--shadow)',
                  borderLeft: `4px solid ${deck.due_count > 0 ? '#F59E0B' : '#E5E7EB'}`
                }}
                onMouseEnter={(e) => {
                  if (deck.due_count > 0) {
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
                    background: '#FEF3C7',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0
                  }}>
                    💡
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
                      {deck.due_count > 0 ? (
                        <span style={{ color: '#F59E0B', fontWeight: 600 }}>
                          ⏰ {deck.due_count} 待複習
                        </span>
                      ) : (
                        <span style={{ color: '#10B981' }}>
                          ✓ 已完成
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
