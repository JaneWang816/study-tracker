// src/pages/bridge/chinese/BridgeChineseUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const SUBJECT_ID = 'a1000000-0000-0000-0000-000000000002'

const UNIT_META = {
  'a5000000-0000-0000-0000-000000000001': { order: 1,  title: '字形辨識',       icon: '🔤' },
  'a5000000-0000-0000-0000-000000000002': { order: 2,  title: '字音辨識',       icon: '🔊' },
  'a5000000-0000-0000-0000-000000000003': { order: 3,  title: '字義辨識',       icon: '📖' },
  'a5000000-0000-0000-0000-000000000004': { order: 4,  title: '形音義綜合',     icon: '🗂️' },
  'a5000000-0000-0000-0000-000000000005': { order: 5,  title: '語詞運用',       icon: '💬' },
  'a5000000-0000-0000-0000-000000000006': { order: 6,  title: '成語',           icon: '📜' },
  'a5000000-0000-0000-0000-000000000007': { order: 7,  title: '語詞成語綜合',   icon: '🧩' },
  'a5000000-0000-0000-0000-000000000008': { order: 8,  title: '語文常識（一）', icon: '📚' },
  'a5000000-0000-0000-0000-000000000009': { order: 9,  title: '語文常識（二）', icon: '🗓️' },
  'a5000000-0000-0000-0000-000000000010': { order: 10, title: '國學常識',       icon: '🏛️' },
  'a5000000-0000-0000-0000-000000000011': { order: 11, title: '閱讀理解',       icon: '📝' },
}

export default function BridgeChineseUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [questionCount, setQuestionCount] = useState(0)

  const meta = UNIT_META[unitId] || { order: '?', title: '未知單元', icon: '📖' }

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
        <button className="btn-back" onClick={() => navigate('/bridge/chinese')}>← 返回</button>
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
              <div className="chinese-markdown">
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
            <button className="btn btn-outline" onClick={() => navigate('/bridge/chinese')}>
              ← 返回單元列表
            </button>
            {questionCount > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/bridge/chinese/practice/${unitId}`)}
              >
                開始練習（{questionCount} 題）✏️
              </button>
            )}
          </div>

        </div>
      </main>

      <style>{`
        .chinese-markdown h2 {
          font-size: 18px; font-weight: 700; margin: 28px 0 12px;
          color: var(--text-dark);
          border-left: 4px solid #D97706; padding-left: 12px;
        }
        .chinese-markdown h3 {
          font-size: 16px; font-weight: 700; margin: 20px 0 8px;
          color: var(--text-dark);
        }
        .chinese-markdown p { margin: 0 0 12px; }
        .chinese-markdown blockquote {
          background: #FFF7ED; border: 1px solid #FED7AA;
          border-left: 4px solid #F59E0B;
          border-radius: 8px; padding: 12px 16px;
          margin: 0 0 16px; color: #92400E;
          font-size: 14px; line-height: 1.7;
        }
        .chinese-markdown blockquote p { margin: 0; }
        .chinese-markdown img {
          max-width: 100%; border-radius: 8px;
          margin: 16px auto; display: block;
          border: 1px solid var(--border);
        }
        .chinese-markdown table {
          width: 100%; border-collapse: collapse;
          margin: 16px 0; font-size: 14px;
        }
        .chinese-markdown th {
          background: #FFF7ED; padding: 10px 12px;
          text-align: left; border: 1px solid #FED7AA;
          font-weight: 600; color: #92400E;
          white-space: nowrap;
        }
        .chinese-markdown td {
          padding: 10px 12px; border: 1px solid #E2E8F0;
          vertical-align: top; line-height: 1.6;
        }
        /* 注音欄（第二欄）固定寬度不換行 */
        .chinese-markdown td:nth-child(2),
        .chinese-markdown th:nth-child(2) {
          white-space: nowrap; width: 80px; min-width: 80px;
        }
        .chinese-markdown tr:nth-child(even) td { background: #FFFBF5; }
        .chinese-markdown ul { padding-left: 20px; margin: 8px 0 12px; }
        .chinese-markdown li { margin-bottom: 6px; }
        .chinese-markdown strong { color: #B45309; }
        /* 字形比較用：國字大字顯示 */
        .chinese-markdown td:first-child {
          font-size: 20px; font-weight: 700;
          text-align: center; color: #1E293B;
          min-width: 48px;
        }
      `}</style>
    </div>
  )
}
