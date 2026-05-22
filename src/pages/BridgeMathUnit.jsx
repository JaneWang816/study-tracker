// src/pages/BridgeMathUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'

const UNITS = [
  {
    order: 1,
    title: '整數四則',
    icon: '🔢',
    basicId: 'c1010000-0000-0000-0000-000000000001',
    advId:   'c1020000-0000-0000-0000-000000000001',
    sections: [
      {
        heading: '一、交換律與結合律',
        points: [
          '交換律：甲＋乙＝乙＋甲；甲×乙＝乙×甲',
          '結合律：甲＋乙＋丙＝甲＋（乙＋丙）；甲×乙×丙＝甲×（乙×丙）',
          '例：257＋924＋76＝257＋（924＋76）＝257＋1000＝1257',
          '例：734×25×4＝734×（25×4）＝734×100＝73400',
        ]
      },
      {
        heading: '二、乘法對加（減）法的分配律',
        points: [
          '甲×（乙±丙）＝甲×乙±甲×丙',
          '例：25×42＝25×（40＋2）＝25×40＋25×2＝1000＋50＝1050',
          '例：243×372－243×172＝243×（372－172）＝243×200＝48600',
        ]
      },
      {
        heading: '三、除法對加（減）法的分配律',
        points: [
          '甲÷丙±乙÷丙＝（甲±乙）÷丙',
          '例：456÷19＋304÷19＝（456＋304）÷19＝760÷19＝40',
          '注意：甲÷乙±甲÷丙 ≠ 甲÷（乙±丙）',
          '例：30÷3＋30÷2 ≠ 30÷（3＋2）',
        ]
      },
      {
        heading: '四、四則運算法則',
        points: [
          '先乘除，後加減',
          '有括號時：先算（　）中的數，再算〔　〕中的數，最後算｛　｝',
          '括號前為「－」時，括號內的運算符號要變號（＋變－、－變＋）',
          '例：9752－（3752＋4500）＝9752－3752－4500＝1500',
          '「×」後加括號時，括號內符號不變；「÷」後加括號時，括號內符號要變號',
          '例：甲÷乙÷丙＝甲÷（乙×丙）',
          '例：甲×乙÷丙＝甲×（乙÷丙）',
          '例：甲÷乙×丙＝甲÷（乙÷丙）',
        ]
      },
    ]
  },
  { order: 2,  title: '因數與倍數',           icon: '🔗', basicId: 'c1030000-0000-0000-0000-000000000001', advId: 'c1040000-0000-0000-0000-000000000001', sections: [] },
  { order: 3,  title: '長度、重量、容量與時間', icon: '📏', basicId: 'c1050000-0000-0000-0000-000000000001', advId: 'c1060000-0000-0000-0000-000000000001', sections: [] },
  { order: 4,  title: '四邊形',              icon: '▭',  basicId: 'c1070000-0000-0000-0000-000000000001', advId: 'c1080000-0000-0000-0000-000000000001', sections: [] },
  { order: 5,  title: '三角形與多邊形',        icon: '△',  basicId: 'c1090000-0000-0000-0000-000000000001', advId: 'c1100000-0000-0000-0000-000000000001', sections: [] },
  { order: 6,  title: '百分率',              icon: '💯', basicId: 'c1110000-0000-0000-0000-000000000001', advId: 'c1120000-0000-0000-0000-000000000001', sections: [] },
  { order: 7,  title: '最大公因數與最小公倍數',  icon: '🔍', basicId: 'c1130000-0000-0000-0000-000000000001', advId: 'c1140000-0000-0000-0000-000000000001', sections: [] },
  { order: 8,  title: '分數',               icon: '½',  basicId: 'c1150000-0000-0000-0000-000000000001', advId: 'c1160000-0000-0000-0000-000000000001', sections: [] },
  { order: 9,  title: '小數與概數',           icon: '🔣', basicId: 'c1170000-0000-0000-0000-000000000001', advId: 'c1180000-0000-0000-0000-000000000001', sections: [] },
  { order: 10, title: '數列',               icon: '📐', basicId: 'c1190000-0000-0000-0000-000000000001', advId: 'c1200000-0000-0000-0000-000000000001', sections: [] },
  { order: 11, title: '圓與扇形',            icon: '⭕', basicId: 'c1210000-0000-0000-0000-000000000001', advId: 'c1220000-0000-0000-0000-000000000001', sections: [] },
  { order: 12, title: '立體圖形的特性',        icon: '📦', basicId: 'c1230000-0000-0000-0000-000000000001', advId: 'c1240000-0000-0000-0000-000000000001', sections: [] },
  { order: 13, title: '體積與容積',           icon: '🧊', basicId: 'c1250000-0000-0000-0000-000000000001', advId: 'c1260000-0000-0000-0000-000000000001', sections: [] },
  { order: 14, title: '比和比值',            icon: '⚖️', basicId: 'c1270000-0000-0000-0000-000000000001', advId: 'c1280000-0000-0000-0000-000000000001', sections: [] },
  { order: 15, title: '速率（一）',           icon: '🚀', basicId: 'c1290000-0000-0000-0000-000000000001', advId: 'c1300000-0000-0000-0000-000000000001', sections: [] },
  { order: 16, title: '速率（二）',           icon: '🚄', basicId: 'c1310000-0000-0000-0000-000000000001', advId: 'c1320000-0000-0000-0000-000000000001', sections: [] },
  { order: 17, title: '平均數、眾數與統計圖表',  icon: '📊', basicId: 'c1330000-0000-0000-0000-000000000001', advId: 'c1340000-0000-0000-0000-000000000001', sections: [] },
  { order: 18, title: '應用問題（一）',         icon: '📝', basicId: 'c1350000-0000-0000-0000-000000000001', advId: 'c1360000-0000-0000-0000-000000000001', sections: [] },
  { order: 19, title: '應用問題（二）',         icon: '🧩', basicId: 'c1370000-0000-0000-0000-000000000001', advId: 'c1380000-0000-0000-0000-000000000001', sections: [] },
  { order: 20, title: '排列組合與機率',         icon: '🎲', basicId: 'c1390000-0000-0000-0000-000000000001', advId: 'c1400000-0000-0000-0000-000000000001', sections: [] },
  { order: 21, title: '代數',               icon: '🔡', basicId: 'c1410000-0000-0000-0000-000000000001', advId: 'c1420000-0000-0000-0000-000000000001', sections: [] },
]

// 用 basicId 或 advId 找單元
function findUnit(unitId) {
  return UNITS.find(u => u.basicId === unitId || u.advId === unitId)
}

export default function BridgeMathUnit() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const unit = findUnit(unitId)

  if (!unit) {
    return (
      <div className="page-container">
        <main className="main-content" style={{ textAlign: 'center', paddingTop: '80px' }}>
          <p>找不到此單元</p>
          <button className="btn btn-primary" onClick={() => navigate('/bridge/math')} style={{ marginTop: '16px' }}>
            返回單元列表
          </button>
        </main>
      </div>
    )
  }

  const hasContent = unit.sections && unit.sections.length > 0

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge/math')}>← 返回</button>
        <div className="header-content center">
          <h1>{unit.icon} {unit.title}</h1>
          <p>單元 {unit.order} ／ 知識整理</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* 知識整理內容 */}
          {hasContent ? (
            unit.sections.map((section, si) => (
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

          {/* 三個按鈕 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingBottom: '32px' }}>

            {/* 基礎篇 */}
            <button
              onClick={() => navigate(`/bridge/math/practice/${unit.basicId}`)}
              style={{
                padding: '18px 16px', borderRadius: '16px',
                border: '2px solid #BFDBFE', background: '#EFF6FF',
                cursor: 'pointer', textAlign: 'center',
                transition: 'all 0.2s', gridColumn: '1 / 2'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#DBEAFE'; e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#EFF6FF'; e.currentTarget.style.borderColor = '#BFDBFE'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>📘</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#2563EB' }}>基礎題庫</div>
              <div style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '4px' }}>實戰演練</div>
            </button>

            {/* 精熟篇 */}
            <button
              onClick={() => navigate(`/bridge/math/practice/${unit.advId}`)}
              style={{
                padding: '18px 16px', borderRadius: '16px',
                border: '2px solid #D8B4FE', background: '#FAF5FF',
                cursor: 'pointer', textAlign: 'center',
                transition: 'all 0.2s', gridColumn: '2 / 3'
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
