// src/pages/bridge/geography/BridgeGeographyUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BridgeGeographyUnit() {
  const navigate = useNavigate()
  const { unitId } = useParams()
  const [unit, setUnit] = useState(null)
  const [questionCount, setQuestionCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchData() }, [unitId])

  async function fetchData() {
    setLoading(true)
    const [{ data: unitData }, { count }] = await Promise.all([
      supabase.from('units').select('id, title, content, mindmap_url').eq('id', unitId).single(),
      supabase.from('questions').select('id', { count: 'exact', head: true }).eq('unit_id', unitId)
    ])
    setUnit(unitData)
    setQuestionCount(count || 0)
    setLoading(false)
  }

  if (loading) return <div className="page-container"><div className="main-content" style={{ textAlign: 'center', padding: '60px' }}>載入中⋯</div></div>
  if (!unit) return <div className="page-container"><div className="main-content" style={{ textAlign: 'center', padding: '60px' }}>找不到此單元</div></div>

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge/geography')}>← 返回</button>
        <div className="header-content center">
          <h1>🗺️ {unit.title}</h1>
          <p>知識整理</p>
        </div>
      </header>
      <main className="main-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow)', marginBottom: '24px', lineHeight: 1.9, fontSize: '15px', color: 'var(--text-dark)' }}>
            {unit.mindmap_url && <div style={{ textAlign: 'center', marginBottom: '24px' }}><img src={unit.mindmap_url} alt="概念圖" style={{ maxWidth: '100%', borderRadius: '8px' }} /></div>}
            {unit.content
              ? <div className="geo-markdown"><ReactMarkdown remarkPlugins={[remarkGfm]}>{unit.content}</ReactMarkdown></div>
              : <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>本單元重點整理建置中⋯</div>
            }
          </div>
          <div style={{ paddingTop: '8px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button className="btn btn-outline" onClick={() => navigate('/bridge/geography')}>← 返回單元列表</button>
            {questionCount > 0 && <button className="btn btn-primary" onClick={() => navigate(`/bridge/geography/practice/${unitId}`)}>開始練習（{questionCount} 題）✏️</button>}
          </div>
        </div>
      </main>
      <style>{`
        .geo-markdown h2 { font-size: 18px; font-weight: 700; margin: 28px 0 12px; color: var(--text-dark); border-left: 4px solid #16A34A; padding-left: 12px; }
        .geo-markdown h3 { font-size: 16px; font-weight: 700; margin: 20px 0 8px; color: var(--text-dark); }
        .geo-markdown p { margin: 0 0 12px; }
        .geo-markdown img { max-width: 100%; border-radius: 8px; margin: 16px auto; display: block; border: 1px solid var(--border); }
        .geo-markdown table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; }
        .geo-markdown th { background: #F0FDF4; padding: 10px 12px; text-align: left; border: 1px solid #BBF7D0; font-weight: 600; }
        .geo-markdown td { padding: 10px 12px; border: 1px solid #E2E8F0; }
        .geo-markdown tr:nth-child(even) td { background: #F8FAFC; }
        .geo-markdown ul { padding-left: 20px; margin: 8px 0 12px; }
        .geo-markdown li { margin-bottom: 6px; }
        .geo-markdown strong { color: #16A34A; }
      `}</style>
    </div>
  )
}
