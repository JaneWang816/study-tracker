import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { phonicsLevels } from '../data/daily-practice/phonics'

export default function DailyPhonics() {
  const navigate = useNavigate()
  const [selectedLevel, setSelectedLevel] = useState(null)

  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId)
  }

  const handleCategorySelect = (levelId, categoryId) => {
    navigate('/daily/phonics/session', {
      state: {
        levelId,
        categoryId
      }
    })
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <button onClick={() => navigate('/daily')} className="btn-back">
          ← 返回首頁
        </button>
        <div className="header-content">
          <h1>🔤 自然發音練習</h1>
          <p>聽音選字，提升語音辨識能力</p>
        </div>
      </div>

      <div className="main-content">
        {!selectedLevel ? (
          // 選擇級別
          <div>
            <h2 className="section-title">選擇級別</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {Object.values(phonicsLevels).map((level) => (
                <div
                  key={level.id}
                  onClick={() => handleLevelSelect(level.id)}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '32px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: 'var(--shadow)',
                    borderLeft: `4px solid ${level.color}`,
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow)'
                  }}
                >
                  <div style={{ fontSize: '64px', marginBottom: '16px' }}>
                    {level.icon}
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px', fontWeight: 600 }}>
                    {level.name}
                  </h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                    {level.desc}
                  </p>
                  <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: level.color,
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    {level.categories.length} 個分類
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // 選擇分類
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <button
                onClick={() => setSelectedLevel(null)}
                className="btn-back"
              >
                ← 返回
              </button>
              <h2 className="section-title" style={{ margin: 0 }}>
                {phonicsLevels[selectedLevel].name} - 選擇分類
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {phonicsLevels[selectedLevel].categories.map((category) => {
                const isMixed = category.isMixed
                
                return (
                  <div
                    key={category.id}
                    onClick={() => handleCategorySelect(selectedLevel, category.id)}
                    style={{
                      background: isMixed 
                        ? `linear-gradient(135deg, ${phonicsLevels[selectedLevel].color} 0%, ${phonicsLevels[selectedLevel].color}dd 100%)`
                        : 'white',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: isMixed ? '0 8px 24px rgba(0,0,0,0.15)' : 'var(--shadow)',
                      borderLeft: isMixed ? 'none' : `4px solid ${phonicsLevels[selectedLevel].color}`,
                      color: isMixed ? 'white' : 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = isMixed 
                        ? '0 12px 32px rgba(0,0,0,0.2)'
                        : 'var(--shadow-lg)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = isMixed 
                        ? '0 8px 24px rgba(0,0,0,0.15)'
                        : 'var(--shadow)'
                    }}
                  >
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '8px'
                    }}>
                      {category.name}
                    </h3>
                    {!isMixed && (
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: isMixed ? 'rgba(255,255,255,0.9)' : 'var(--text-light)',
                        marginTop: '12px'
                      }}>
                        <span>發音：{category.sound}</span>
                        <span style={{
                          background: isMixed ? 'rgba(255,255,255,0.2)' : '#F3F4F6',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontWeight: 600
                        }}>
                          例：{category.example}
                        </span>
                      </div>
                    )}
                    {isMixed && (
                      <div style={{
                        marginTop: '12px',
                        fontSize: '14px',
                        opacity: 0.95
                      }}>
                        隨機抽取該級別所有題目
                      </div>
                    )}
                    <div style={{
                      marginTop: '12px',
                      fontSize: '13px',
                      color: isMixed ? 'white' : phonicsLevels[selectedLevel].color,
                      fontWeight: 600
                    }}>
                      10 題練習 →
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
