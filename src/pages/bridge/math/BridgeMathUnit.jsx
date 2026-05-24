// src/pages/bridge/math/BridgeMathUnit.jsx
// 外殼元件：動態載入各單元資料
import { useNavigate, useParams } from 'react-router-dom'

// basicId → 單元編號對照

// 靜態 import 對照表（Vite build 需要靜態路徑，不可用字串拼接）
import MathUnit01 from './units/MathUnit01'
import MathUnit02 from './units/MathUnit02'
import MathUnit03 from './units/MathUnit03'
import MathUnit04 from './units/MathUnit04'
import MathUnit05 from './units/MathUnit05'
import MathUnit06 from './units/MathUnit06'
import MathUnit07 from './units/MathUnit07'
import MathUnit08 from './units/MathUnit08'
import MathUnit09 from './units/MathUnit09'
import MathUnit10 from './units/MathUnit10'
import MathUnit11 from './units/MathUnit11'
import MathUnit12 from './units/MathUnit12'
import MathUnit13 from './units/MathUnit13'
import MathUnit14 from './units/MathUnit14'
import MathUnit15 from './units/MathUnit15'
import MathUnit16 from './units/MathUnit16'
import MathUnit17 from './units/MathUnit17'
import MathUnit18 from './units/MathUnit18'
import MathUnit19 from './units/MathUnit19'
import MathUnit20 from './units/MathUnit20'
import MathUnit21 from './units/MathUnit21'

const UNIT_DATA_MAP = {
  'c1010000-0000-0000-0000-000000000001': MathUnit01,
  'c1030000-0000-0000-0000-000000000001': MathUnit02,
  'c1050000-0000-0000-0000-000000000001': MathUnit03,
  'c1070000-0000-0000-0000-000000000001': MathUnit04,
  'c1090000-0000-0000-0000-000000000001': MathUnit05,
  'c1110000-0000-0000-0000-000000000001': MathUnit06,
  'c1130000-0000-0000-0000-000000000001': MathUnit07,
  'c1150000-0000-0000-0000-000000000001': MathUnit08,
  'c1170000-0000-0000-0000-000000000001': MathUnit09,
  'c1190000-0000-0000-0000-000000000001': MathUnit10,
  'c1210000-0000-0000-0000-000000000001': MathUnit11,
  'c1230000-0000-0000-0000-000000000001': MathUnit12,
  'c1250000-0000-0000-0000-000000000001': MathUnit13,
  'c1270000-0000-0000-0000-000000000001': MathUnit14,
  'c1290000-0000-0000-0000-000000000001': MathUnit15,
  'c1310000-0000-0000-0000-000000000001': MathUnit16,
  'c1330000-0000-0000-0000-000000000001': MathUnit17,
  'c1350000-0000-0000-0000-000000000001': MathUnit18,
  'c1370000-0000-0000-0000-000000000001': MathUnit19,
  'c1390000-0000-0000-0000-000000000001': MathUnit20,
  'c1410000-0000-0000-0000-000000000001': MathUnit21,
}

export default function BridgeMathUnit() {
  const { unitId } = useParams()
  const navigate = useNavigate()

  const unitData = UNIT_DATA_MAP[unitId]

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

  const hasContent = unitData.sections && unitData.sections.length > 0

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
          {hasContent ? (
            unitData.sections.map((section, si) => (
              <div key={si} style={{
                background: 'white', borderRadius: '16px', padding: '24px',
                marginBottom: '16px', boxShadow: 'var(--shadow)',
                borderLeft: '4px solid #2563EB'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#2563EB', marginBottom: '14px' }}>
                  {section.heading}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {section.points.map((point, pi) => (
                    <li key={pi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{
                        width: '20px', height: '20px', background: '#EFF6FF',
                        borderRadius: '50%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '11px', fontWeight: 700,
                        color: '#2563EB', flexShrink: 0, marginTop: '2px'
                      }}>
                        {pi + 1}
                      </span>
                      <span style={{ fontSize: '15px', lineHeight: 1.7 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div style={{
              background: '#F8FAFC', borderRadius: '16px', padding: '40px 24px',
              marginBottom: '24px', textAlign: 'center', border: '2px dashed #CBD5E1'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>📖</div>
              <p style={{ color: 'var(--text-light)', fontSize: '15px' }}>知識整理製作中，敬請期待</p>
            </div>
          )}

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
    </div>
  )
}
