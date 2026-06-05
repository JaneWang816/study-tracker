// src/pages/bridge/math/BridgeMathUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// 只保留 meta 資訊，sections 改由 Supabase content 提供
const UNIT_DATA_MAP = {
  'c1010000-0000-0000-0000-000000000001': { order: 1,  title: '整數四則',             icon: '🔢', basicId: 'c1010000-0000-0000-0000-000000000001', advId: 'c1020000-0000-0000-0000-000000000001' },
  'c1030000-0000-0000-0000-000000000001': { order: 2,  title: '因數與倍數',           icon: '🔣', basicId: 'c1030000-0000-0000-0000-000000000001', advId: 'c1040000-0000-0000-0000-000000000001' },
  'c1050000-0000-0000-0000-000000000001': { order: 3,  title: '長度、重量、容量與時間', icon: '📏', basicId: 'c1050000-0000-0000-0000-000000000001', advId: 'c1060000-0000-0000-0000-000000000001' },
  'c1070000-0000-0000-0000-000000000001': { order: 4,  title: '四邊形',               icon: '⬜', basicId: 'c1070000-0000-0000-0000-000000000001', advId: 'c1080000-0000-0000-0000-000000000001' },
  'c1090000-0000-0000-0000-000000000001': { order: 5,  title: '三角形與多邊形',       icon: '🔺', basicId: 'c1090000-0000-0000-0000-000000000001', advId: 'c1100000-0000-0000-0000-000000000001' },
  'c1110000-0000-0000-0000-000000000001': { order: 6,  title: '百分率',               icon: '💯', basicId: 'c1110000-0000-0000-0000-000000000001', advId: 'c1120000-0000-0000-0000-000000000001' },
  'c1130000-0000-0000-0000-000000000001': { order: 7,  title: '最大公因數與最小公倍數', icon: '🔗', basicId: 'c1130000-0000-0000-0000-000000000001', advId: 'c1140000-0000-0000-0000-000000000001' },
  'c1150000-0000-0000-0000-000000000001': { order: 8,  title: '分數',                 icon: '½',  basicId: 'c1150000-0000-0000-0000-000000000001', advId: 'c1160000-0000-0000-0000-000000000001' },
  'c1170000-0000-0000-0000-000000000001': { order: 9,  title: '小數與概數',           icon: '🔟', basicId: 'c1170000-0000-0000-0000-000000000001', advId: 'c1180000-0000-0000-0000-000000000001' },
  'c1190000-0000-0000-0000-000000000001': { order: 10, title: '數列',                 icon: '🔁', basicId: 'c1190000-0000-0000-0000-000000000001', advId: 'c1200000-0000-0000-0000-000000000001' },
  'c1210000-0000-0000-0000-000000000001': { order: 11, title: '圓與扇形',             icon: '⭕', basicId: 'c1210000-0000-0000-0000-000000000001', advId: 'c1220000-0000-0000-0000-000000000001' },
  'c1230000-0000-0000-0000-000000000001': { order: 12, title: '立體圖形的特性',       icon: '📦', basicId: 'c1230000-0000-0000-0000-000000000001', advId: 'c1240000-0000-0000-0000-000000000001' },
  'c1250000-0000-0000-0000-000000000001': { order: 13, title: '體積與容積',           icon: '🧊', basicId: 'c1250000-0000-0000-0000-000000000001', advId: 'c1260000-0000-0000-0000-000000000001' },
  'c1270000-0000-0000-0000-000000000001': { order: 14, title: '比和比值',             icon: '⚖️', basicId: 'c1270000-0000-0000-0000-000000000001', advId: 'c1280000-0000-0000-0000-000000000001' },
  'c1290000-0000-0000-0000-000000000001': { order: 15, title: '速率（一）',           icon: '🚀', basicId: 'c1290000-0000-0000-0000-000000000001', advId: 'c1300000-0000-0000-0000-000000000001' },
  'c1310000-0000-0000-0000-000000000001': { order: 16, title: '速率（二）',           icon: '🚗', basicId: 'c1310000-0000-0000-0000-000000000001', advId: 'c1320000-0000-0000-0000-000000000001' },
  'c1330000-0000-0000-0000-000000000001': { order: 17, title: '平均數、眾數與統計圖表', icon: '📊', basicId: 'c1330000-0000-0000-0000-000000000001', advId: 'c1340000-0000-0000-0000-000000000001' },
  'c1350000-0000-0000-0000-000000000001': { order: 18, title: '應用問題（一）',       icon: '📝', basicId: 'c1350000-0000-0000-0000-000000000001', advId: 'c1360000-0000-0000-0000-000000000001' },
  'c1370000-0000-0000-0000-000000000001': { order: 19, title: '應用問題（二）',       icon: '📋', basicId: 'c1370000-0000-0000-0000-000000000001', advId: 'c1380000-0000-0000-0000-000000000001' },
  'c1390000-0000-0000-0000-000000000001': { order: 20, title: '排列組合與機率',       icon: '🎲', basicId: 'c1390000-0000-0000-0000-000000000001', advId: 'c1400000-0000-0000-0000-000000000001' },
  'c1410000-0000-0000-0000-000000000001': { order: 21, title: '代數',                 icon: '🔡', basicId: 'c1410000-0000-0000-0000-000000000001', advId: 'c1420000-0000-0000-0000-000000000001' },
}

export default function BridgeMathUnit() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  const unitData = UNIT_DATA_MAP[unitId]

  useEffect(() => {
    if (unitId) fetchContent()
  }, [unitId])

  async function fetchContent() {
    setLoading(true)
    const { data } = await supabase
      .from('units')
      .select('content')
      .eq('id', unitId)
      .single()
    setContent(data?.content || null)
    setLoading(false)
  }

  if (!unitData) return (
    <div className="page-container">
      <main className="main-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
        <p>找不到此單元</p>
        <button className="btn btn-primary" onClick={() => navigate('/bridge/math')} style={{ marginTop: '16px' }}>
          返回單元列表
        </button>
      </main>
    </div>
  )

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge/math')}>← 返回</button>
        <div className="header-content center">
          <h1>{unitData.icon} {unitData.title}</h1>
          <p>單元 {unitData.order} ／ 知識整理</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* 知識整理內容 */}
          <div style={{
            background: 'white', borderRadius: '16px', padding: '28px 32px',
            marginBottom: '20px', boxShadow: 'var(--shadow)',
            lineHeight: 1.9, fontSize: '15px', color: 'var(--text-dark)'
          }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-light)' }}>
                載入中⋯
              </div>
            ) : content ? (
              <div className="math-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            ) : (
              <div style={{
                padding: '40px 24px', textAlign: 'center',
                border: '2px dashed #CBD5E1', borderRadius: '12px'
              }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>📖</div>
                <p style={{ color: 'var(--text-light)', fontSize: '15px' }}>知識整理製作中，敬請期待</p>
              </div>
            )}
          </div>

          {/* 基礎題庫 / 精熟題庫 按鈕 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingBottom: '32px' }}>
            <button
              onClick={() => navigate(`/bridge/math/practice/${unitData.basicId}`)}
              style={{
                padding: '18px 16px', borderRadius: '16px',
                border: '2px solid #BFDBFE', background: '#EFF6FF',
                cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#DBEAFE'; e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#EFF6FF'; e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>📘</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#2563EB' }}>基礎題庫</div>
              <div style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>實戰演練</div>
            </button>

            <button
              onClick={() => navigate(`/bridge/math/practice/${unitData.advId}`)}
              style={{
                padding: '18px 16px', borderRadius: '16px',
                border: '2px solid #D8B4FE', background: '#FAF5FF',
                cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#EDE9FE'; e.currentTarget.style.borderColor = '#7C3AED'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FAF5FF'; e.currentTarget.style.borderColor = '#D8B4FE'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>📗</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#7C3AED' }}>精熟題庫</div>
              <div style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>步步高升</div>
            </button>
          </div>

        </div>
      </main>

      <style>{`
        .math-markdown h2 {
          font-size: 17px; font-weight: 700; margin: 24px 0 10px;
          color: var(--text-dark);
          border-left: 4px solid #2563EB; padding-left: 12px;
        }
        .math-markdown h3 {
          font-size: 15px; font-weight: 700; margin: 16px 0 8px;
          color: #2563EB;
        }
        .math-markdown p { margin: 0 0 10px; }
        .math-markdown ul { padding-left: 20px; margin: 6px 0 12px; }
        .math-markdown li { margin-bottom: 8px; line-height: 1.8; }
        .math-markdown strong { color: #1D4ED8; }
        .math-markdown blockquote {
          background: #EFF6FF; border: 1px solid #BFDBFE;
          border-left: 4px solid #2563EB;
          border-radius: 8px; padding: 12px 16px;
          margin: 0 0 16px; color: #1E40AF;
          font-size: 14px; line-height: 1.8;
        }
        .math-markdown blockquote p { margin: 0; }
        .math-markdown table {
          width: 100%; border-collapse: collapse;
          margin: 12px 0; font-size: 14px;
        }
        .math-markdown th {
          background: #EFF6FF; padding: 10px 12px;
          text-align: left; border: 1px solid #BFDBFE;
          font-weight: 600; color: #1D4ED8;
        }
        .math-markdown td {
          padding: 10px 12px; border: 1px solid #E2E8F0;
          vertical-align: top;
        }
        .math-markdown tr:nth-child(even) td { background: #F8FAFC; }
        .math-markdown code {
          background: #EFF6FF; color: #1D4ED8;
          padding: 2px 6px; border-radius: 4px;
          font-size: 14px; font-family: monospace;
        }
      `}</style>
    </div>
  )
}
