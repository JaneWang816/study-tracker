// src/pages/BridgeChineseHome.jsx
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000002'

const UNITS = [
  { id: 'a5000000-0000-0000-0000-000000000001', order: 1,  title: '字形辨識',     icon: '🔤', desc: '形似字辨識、改錯題' },
  { id: 'a5000000-0000-0000-0000-000000000002', order: 2,  title: '字音辨識',     icon: '🔊', desc: '多音字、形似字字音辨識' },
  { id: 'a5000000-0000-0000-0000-000000000003', order: 3,  title: '字義辨識',     icon: '📖', desc: '單字字義、相同國字比較' },
  { id: 'a5000000-0000-0000-0000-000000000004', order: 4,  title: '形音義綜合',   icon: '🗂️', desc: '字形、字音、字義綜合練習' },
  { id: 'a5000000-0000-0000-0000-000000000005', order: 5,  title: '語詞運用',     icon: '💬', desc: '疊字詞、狀聲詞、近反義詞、量詞' },
  { id: 'a5000000-0000-0000-0000-000000000006', order: 6,  title: '成語',         icon: '📜', desc: '成語意義、典故、填空、運用' },
  { id: 'a5000000-0000-0000-0000-000000000007', order: 7,  title: '語詞成語綜合', icon: '🧩', desc: '借代修辭、外來語、臺灣地名' },
  { id: 'a5000000-0000-0000-0000-000000000008', order: 8,  title: '語文常識（一）', icon: '📚', desc: '工具書、標點符號、中文字構造、書法' },
  { id: 'a5000000-0000-0000-0000-000000000009', order: 9,  title: '語文常識（二）', icon: '🗓️', desc: '天干地支、詞性、句型、書信、修辭' },
  { id: 'a5000000-0000-0000-0000-000000000010', order: 10, title: '國學常識',     icon: '🏛️', desc: '新詩、古典韻文、國學常識' },
  { id: 'a5000000-0000-0000-0000-000000000011', order: 11, title: '閱讀理解',     icon: '📝', desc: '文句判斷、白話文、文言文、閱讀題組' },
]

export default function BridgeChineseHome() {
  const navigate = useNavigate()
  const [wrongCounts, setWrongCounts] = useState({})
  const [totalWrong, setTotalWrong] = useState(0)
  const [questionCounts, setQuestionCounts] = useState({})

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    const { data } = await supabase
      .from('questions')
      .select('unit_id, wrong_count, consecutive_correct, attempt_count')
      .eq('subject_id', SUBJECT_ID)
    if (!data) return
    const wrong = {}
    const counts = {}
    let total = 0
    data.forEach(q => {
      counts[q.unit_id] = (counts[q.unit_id] || 0) + 1
      if (q.wrong_count > 0 && q.consecutive_correct < 3) {
        wrong[q.unit_id] = (wrong[q.unit_id] || 0) + 1
        total++
      }
    })
    setWrongCounts(wrong)
    setTotalWrong(total)
    setQuestionCounts(counts)
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge')}>← 返回</button>
        <div className="header-content center">
          <h1>📖 銜接國文</h1>
          <p>選擇單元開始練習</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* 錯題本入口 */}
          {totalWrong > 0 && (
            <div
              onClick={() => navigate('/bridge/chinese/practice/wrong')}
              style={{
                background: 'linear-gradient(135deg, #FEF2F2, #FFF)',
                border: '2px solid #FCA5A5', borderRadius: '16px',
                padding: '20px 24px', marginBottom: '24px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '16px',
                transition: 'all 0.2s', boxShadow: 'var(--shadow)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '36px' }}>📋</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#DC2626' }}>錯題本</div>
                <div style={{ fontSize: '14px', color: '#EF4444', marginTop: '2px' }}>
                  共 {totalWrong} 題待複習
                </div>
              </div>
              <div style={{ fontSize: '20px', color: '#FCA5A5' }}>›</div>
            </div>
          )}

          {/* 單元列表 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {UNITS.map(unit => {
              const hasWrong = wrongCounts[unit.id] > 0
              const qCount = questionCounts[unit.id] || 0
              return (
                <div
                  key={unit.id}
                  style={{
                    background: 'white', borderRadius: '16px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)', overflow: 'hidden'
                  }}
                >
                  {/* 知識整理列 */}
                  <div
                    onClick={() => navigate(`/bridge/chinese/unit/${unit.id}`)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '16px 20px', cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}
                  >
                    <div style={{ fontSize: '28px', minWidth: '36px', textAlign: 'center' }}>
                      {unit.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-dark)' }}>
                          第{unit.order}單元　{unit.title}
                        </span>
                        {hasWrong && (
                          <span style={{
                            background: '#FEE2E2', color: '#DC2626',
                            fontSize: '11px', fontWeight: 700,
                            padding: '2px 8px', borderRadius: '10px'
                          }}>
                            {wrongCounts[unit.id]} 錯題
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-light)', marginTop: '3px' }}>
                        {unit.desc}
                      </div>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                      知識整理 ›
                    </div>
                  </div>

                  {/* 練習按鈕列 */}
                  <div
                    onClick={() => qCount > 0
                      ? navigate(`/bridge/chinese/practice/${unit.id}`)
                      : null
                    }
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '12px 20px',
                      cursor: qCount > 0 ? 'pointer' : 'default',
                      background: qCount > 0 ? '#F0FDF4' : '#FAFAFA',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={e => {
                      if (qCount > 0) e.currentTarget.style.background = '#DCFCE7'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = qCount > 0 ? '#F0FDF4' : '#FAFAFA'
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>✏️</span>
                    <span style={{
                      fontSize: '14px', fontWeight: 600,
                      color: qCount > 0 ? '#16A34A' : 'var(--text-light)'
                    }}>
                      {qCount > 0 ? `開始練習（${qCount} 題）` : '題目準備中'}
                    </span>
                    {qCount > 0 && (
                      <span style={{ marginLeft: 'auto', fontSize: '16px', color: '#86EFAC' }}>›</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
