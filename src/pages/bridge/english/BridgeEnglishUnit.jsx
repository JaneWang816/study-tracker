import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { supabase } from '../../../lib/supabase'

const THEME = '#0891B2'

export default function BridgeEnglishUnit() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const [unit, setUnit] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUnit()
  }, [unitId])

  async function loadUnit() {
    setLoading(true)
    const { data } = await supabase
      .from('units')
      .select('id, title, content, mindmap_url')
      .eq('id', unitId)
      .single()
    setUnit(data)
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f9ff', padding: '1.5rem 1rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => navigate('/bridge/english')}
            style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer' }}
          >←</button>
          <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700, color: THEME }}>
            {unit?.title || '知識整理'}
          </h1>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#94a3b8' }}>載入中...</p>
        ) : !unit?.content ? (
          <div style={{
            background: '#fff', borderRadius: 12, padding: '2rem',
            textAlign: 'center', color: '#94a3b8', border: '1px solid #e0f2fe'
          }}>
            <p style={{ fontSize: '2rem', margin: '0 0 0.5rem' }}>🚧</p>
            <p>知識整理內容準備中...</p>
          </div>
        ) : (
          <>
            {unit.mindmap_url && (
              <img
                src={unit.mindmap_url}
                alt="概念圖"
                style={{ width: '100%', borderRadius: 12, marginBottom: '1.25rem', border: '1px solid #e0f2fe' }}
              />
            )}
            <div className="english-markdown" style={{
              background: '#fff', borderRadius: 12, padding: '1.5rem',
              border: '1px solid #e0f2fe', lineHeight: 1.8
            }}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {unit.content}
              </ReactMarkdown>
            </div>
          </>
        )}

        {/* 練習按鈕 */}
        <button
          onClick={() => navigate(`/bridge/english/practice/${unitId}`)}
          style={{
            display: 'block', width: '100%', marginTop: '1.5rem',
            padding: '0.9rem', borderRadius: 12, border: 'none',
            background: THEME, color: '#fff',
            fontSize: '1rem', fontWeight: 700, cursor: 'pointer'
          }}
        >✏️ 開始練習</button>
      </div>
    </div>
  )
}
