// src/pages/bridge/chemistry/BridgeChemistryUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const SUBJECT_ID = 'b1000000-0000-0000-0000-000000000002'

const UNIT_META = {
  'b5000000-0000-0000-0000-000000000020': { order: 1,  title: '水溶液',             icon: '💧' },
  'b5000000-0000-0000-0000-000000000021': { order: 2,  title: '空氣',               icon: '🌬️' },
  'b5000000-0000-0000-0000-000000000022': { order: 3,  title: '聲音',               icon: '🔊' },
  'b5000000-0000-0000-0000-000000000023': { order: 4,  title: '光',                 icon: '💡' },
  'b5000000-0000-0000-0000-000000000024': { order: 5,  title: '物理變化與化學變化', icon: '⚗️' },
  'b5000000-0000-0000-0000-000000000025': { order: 6,  title: '熱對物質的影響與熱傳播', icon: '🌡️' },
  'b5000000-0000-0000-0000-000000000026': { order: 7,  title: '力與運動',           icon: '🏃' },
  'b5000000-0000-0000-0000-000000000027': { order: 8,  title: '簡單機械',           icon: '⚙️' },
  'b5000000-0000-0000-0000-000000000028': { order: 9,  title: '電',                 icon: '⚡' },
  'b5000000-0000-0000-0000-000000000029': { order: 10, title: '磁',                 icon: '🧲' },
}

export default function BridgeChemistryUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [questionCount, setQuestionCount] = useState(0)

  const meta = UNIT_META[unitId] || { order: '?', title: '未知單元', icon: '⚗️' }

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
        <button className="btn-back" onClick={() => navigate('/bridge/chemistry')}>← 返回</button>
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
              <div className="chem-markdown">
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
            <button className="btn btn-outline" onClick={() => navigate('/bridge/chemistry')}>
              ← 返回單元列表
            </button>
            {questionCount > 0 && (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/bridge/chemistry/practice/${unitId}`)}
              >
                開始練習（{questionCount} 題）✏️
              </button>
            )}
          </div>

        </div>
      </main>

      <style>{`
        .chem-markdown h2 {
          font-size: 18px; font-weight: 700; margin: 28px 0 12px;
          color: var(--text-dark);
          border-left: 4px solid #EA580C; padding-left: 12px;
        }
        .chem-markdown h3 {
          font-size: 16px; font-weight: 700; margin: 20px 0 8px;
          color: var(--text-dark);
        }
        .chem-markdown p { margin: 0 0 12px; }
        .chem-markdown img {
          max-width: 100%; border-radius: 8px;
          margin: 16px auto; display: block;
          border: 1px solid var(--border);
        }
        .chem-markdown table {
          width: 100%; border-collapse: collapse;
          margin: 16px 0; font-size: 14px;
        }
        .chem-markdown th {
          background: #FFF7ED; padding: 10px 12px;
          text-align: left; border: 1px solid #FED7AA;
          font-weight: 600;
        }
        .chem-markdown td {
          padding: 10px 12px; border: 1px solid #E2E8F0;
        }
        .chem-markdown tr:nth-child(even) td { background: #F8FAFC; }
        .chem-markdown ul { padding-left: 20px; margin: 8px 0 12px; }
        .chem-markdown li { margin-bottom: 6px; }
        .chem-markdown strong { color: #C2410C; }
      `}</style>
    </div>
  )
}
