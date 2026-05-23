// src/pages/bridge/bio/BridgeBiologyUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const SUBJECT_ID = 'b1000000-0000-0000-0000-000000000001'

const UNIT_META = {
  'b5000000-0000-0000-0000-000000000001': { order: 1,  title: '複式顯微鏡',         icon: '🔬' },
  'b5000000-0000-0000-0000-000000000002': { order: 2,  title: '解剖顯微鏡',         icon: '🔭' },
  'b5000000-0000-0000-0000-000000000003': { order: 3,  title: '細胞的構造與機能',   icon: '🧫' },
  'b5000000-0000-0000-0000-000000000004': { order: 4,  title: '生物體的組成層次',   icon: '🧬' },
  'b5000000-0000-0000-0000-000000000005': { order: 5,  title: '生物的分類階層',     icon: '🌳' },
  'b5000000-0000-0000-0000-000000000006': { order: 6,  title: '原核與原生生物界',   icon: '🦠' },
  'b5000000-0000-0000-0000-000000000007': { order: 7,  title: '真菌界',             icon: '🍄' },
  'b5000000-0000-0000-0000-000000000008': { order: 8,  title: '植物界',             icon: '🌿' },
  'b5000000-0000-0000-0000-000000000009': { order: 9,  title: '動物界',             icon: '🐾' },
  'b5000000-0000-0000-0000-000000000010': { order: 10, title: '動物的生殖與分類',   icon: '🥚' },
  'b5000000-0000-0000-0000-000000000011': { order: 11, title: '植物的營養器官',     icon: '🌱' },
  'b5000000-0000-0000-0000-000000000012': { order: 12, title: '植物的生殖',         icon: '🌸' },
  'b5000000-0000-0000-0000-000000000013': { order: 13, title: '植物體內進行的作用', icon: '🍃' },
  'b5000000-0000-0000-0000-000000000014': { order: 14, title: '人體的消化',         icon: '🫀' },
  'b5000000-0000-0000-0000-000000000015': { order: 15, title: '人體的血液循環',     icon: '🩸' },
  'b5000000-0000-0000-0000-000000000016': { order: 16, title: '人體的呼吸與排泄',   icon: '🫁' },
  'b5000000-0000-0000-0000-000000000017': { order: 17, title: '生物與環境的關係',   icon: '🌍' },
  'b5000000-0000-0000-0000-000000000018': { order: 18, title: '族群、群集與生態系', icon: '🦋' },
  'b5000000-0000-0000-0000-000000000019': { order: 19, title: '環境污染及自然保育', icon: '♻️' },
}

export default function BridgeBiologyUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [questionCount, setQuestionCount] = useState(0)

  const meta = UNIT_META[unitId] || { order: '?', title: '未知單元', icon: '🔬' }

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
        <button className="btn-back" onClick={() => navigate('/bridge/bio')}>← 返回</button>
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
              <div className="bio-markdown">
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
            <button className="btn btn-outline" onClick={() => navigate('/bridge/bio')}>
              ← 返回單元列表
            </button>
            {questionCount > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/bridge/bio/practice/${unitId}`)}
              >
                開始練習（{questionCount} 題）✏️
              </button>
            )}
          </div>

        </div>
      </main>

      <style>{`
        .bio-markdown h2 {
          font-size: 18px; font-weight: 700; margin: 28px 0 12px;
          color: var(--text-dark);
          border-left: 4px solid #16A34A; padding-left: 12px;
        }
        .bio-markdown h3 {
          font-size: 16px; font-weight: 700; margin: 20px 0 8px;
          color: var(--text-dark);
        }
        .bio-markdown p { margin: 0 0 12px; }
        .bio-markdown img {
          max-width: 100%; border-radius: 8px;
          margin: 16px auto; display: block;
          border: 1px solid var(--border);
        }
        .bio-markdown table {
          width: 100%; border-collapse: collapse;
          margin: 16px 0; font-size: 14px;
        }
        .bio-markdown th {
          background: #F0FDF4; padding: 10px 12px;
          text-align: left; border: 1px solid #BBF7D0;
          font-weight: 600;
        }
        .bio-markdown td {
          padding: 10px 12px; border: 1px solid #E2E8F0;
        }
        .bio-markdown tr:nth-child(even) td { background: #F8FAFC; }
        .bio-markdown ul { padding-left: 20px; margin: 8px 0 12px; }
        .bio-markdown li { margin-bottom: 6px; }
        .bio-markdown strong { color: #15803D; }
      `}</style>
    </div>
  )
}
