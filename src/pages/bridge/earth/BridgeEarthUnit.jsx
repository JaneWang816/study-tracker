// src/pages/bridge/earth/BridgeEarthUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const SUBJECT_ID = 'b1000000-0000-0000-0000-000000000003'

const UNIT_META = {
  'b5000000-0000-0000-0000-000000000030': { order: 1, title: '月球',           icon: '🌙' },
  'b5000000-0000-0000-0000-000000000031': { order: 2, title: '太陽',           icon: '☀️' },
  'b5000000-0000-0000-0000-000000000032': { order: 3, title: '日食與月食',     icon: '🌑' },
  'b5000000-0000-0000-0000-000000000033': { order: 4, title: '星星與星座',     icon: '⭐' },
  'b5000000-0000-0000-0000-000000000034': { order: 5, title: '銀河系與太陽系', icon: '🪐' },
  'b5000000-0000-0000-0000-000000000035': { order: 6, title: '天氣的變化',     icon: '🌤️' },
  'b5000000-0000-0000-0000-000000000036': { order: 7, title: '地表的變化',     icon: '🏔️' },
  'b5000000-0000-0000-0000-000000000037': { order: 8, title: '地震',           icon: '🌋' },
  'b5000000-0000-0000-0000-000000000038': { order: 9, title: '全球變遷',       icon: '🌍' },
}

export default function BridgeEarthUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [questionCount, setQuestionCount] = useState(0)

  const meta = UNIT_META[unitId] || { order: '?', title: '未知單元', icon: '🌍' }

  useEffect(() => {
    fetchData()
  }, [unitId])

  async function fetchData() {
    setLoading(true)
    const [{ data: unitData }, { count }] = await Promise.all([
      supabase
        .from('units')
        .select('content')
        .eq('id', unitId)
        .single(),
      supabase
        .from('questions')
        .select('id', { count: 'exact', head: true })
        .eq('subject_id', SUBJECT_ID)
        .eq('unit_id', unitId)
    ])
    setContent(unitData?.content || null)
    setQuestionCount(count || 0)
    setLoading(false)
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge/earth')}>← 返回</button>
        <div className="header-content center">
          <h1>{meta.icon} 第{meta.order}單元　{meta.title}</h1>
          <p>知識整理</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* 內容區 */}
          <div style={{
            background: 'white', borderRadius: '16px', padding: '32px',
            boxShadow: 'var(--shadow)', marginBottom: '24px',
            lineHeight: 1.9, fontSize: '15px', color: 'var(--text-dark)'
          }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
                載入中⋯
              </div>
            ) : content ? (
              <div className="earth-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
                本單元重點整理建置中⋯
              </div>
            )}
          </div>

          {/* 底部按鈕 */}
          <div style={{
            paddingTop: '8px',
            display: 'flex', justifyContent: 'center', gap: '16px'
          }}>
            <button className="btn btn-outline" onClick={() => navigate('/bridge/earth')}>
              ← 返回單元列表
            </button>
            {questionCount > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/bridge/earth/practice/${unitId}`)}
              >
                開始練習（{questionCount} 題）✏️
              </button>
            )}
          </div>

        </div>
      </main>

      <style>{`
        .earth-markdown h2 {
          font-size: 18px; font-weight: 700; margin: 28px 0 12px;
          color: var(--text-dark);
          border-left: 4px solid #059669; padding-left: 12px;
        }
        .earth-markdown h3 {
          font-size: 16px; font-weight: 700; margin: 20px 0 8px;
          color: var(--text-dark);
        }
        .earth-markdown p { margin: 0 0 12px; }
        .earth-markdown img {
          max-width: 100%; border-radius: 8px;
          margin: 16px auto; display: block;
          border: 1px solid var(--border);
        }
        .earth-markdown table {
          width: 100%; border-collapse: collapse;
          margin: 16px 0; font-size: 14px;
        }
        .earth-markdown th {
          background: #ECFDF5; padding: 10px 12px;
          text-align: left; border: 1px solid #A7F3D0;
          font-weight: 600;
        }
        .earth-markdown td {
          padding: 10px 12px; border: 1px solid #E2E8F0;
        }
        .earth-markdown tr:nth-child(even) td { background: #F8FAFC; }
        .earth-markdown ul { padding-left: 20px; margin: 8px 0 12px; }
        .earth-markdown li { margin-bottom: 6px; }
        .earth-markdown strong { color: #047857; }
        .earth-markdown blockquote {
          border-left: 4px solid #6EE7B7; padding-left: 16px;
          margin: 16px 0; color: var(--text-light); font-style: italic;
        }
        .earth-markdown pre {
          background: #F8FAFC; padding: 16px; border-radius: 8px;
          overflow-x: auto; border: 1px solid var(--border); margin: 16px 0;
          font-size: 13px; font-family: monospace;
        }
        .earth-markdown code {
          background: #F1F5F9; padding: 2px 6px; border-radius: 4px;
          font-size: 13px; font-family: monospace;
        }
      `}</style>
    </div>
  )
}
