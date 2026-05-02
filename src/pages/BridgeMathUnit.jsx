// src/pages/BridgeMathUnit.jsx
import { useNavigate, useParams } from 'react-router-dom'

// 每個單元的知識整理內容
const UNIT_KNOWLEDGE = {
  'a3000000-0000-0000-0000-000000000001': {
    title: '正負數', icon: '➕➖',
    sections: [
      {
        heading: '什麼是正負數？',
        points: [
          '正數：大於 0 的數，如 1、2.5、1/3',
          '負數：小於 0 的數，如 −1、−2.5、−1/3',
          '0 既不是正數，也不是負數',
        ]
      },
      {
        heading: '數線',
        points: [
          '數線上，往右越來越大，往左越來越小',
          '0 右邊是正數，0 左邊是負數',
          '比較大小：數線右邊的數 > 左邊的數',
        ]
      },
      {
        heading: '絕對值',
        points: [
          '絕對值表示一個數距離 0 的距離，寫作 |x|',
          '|5| = 5，|−5| = 5，|0| = 0',
          '絕對值永遠 ≥ 0',
        ]
      },
      {
        heading: '相反數',
        points: [
          '一個數的相反數，就是與它絕對值相同、符號相反的數',
          '3 的相反數是 −3；−7 的相反數是 7',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000002': {
    title: '整數、小數與分數的四則運算', icon: '🔢',
    sections: [
      {
        heading: '分數加減：先通分',
        points: [
          '分母不同時，先找公分母再計算',
          '例：1/3 + 1/4 → 4/12 + 3/12 = 7/12',
          '計算結果記得化成最簡分數',
        ]
      },
      {
        heading: '分數乘除',
        points: [
          '乘法：分子乘分子，分母乘分母',
          '除法：除以一個分數 = 乘以它的倒數',
          '例：2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6',
        ]
      },
      {
        heading: '小數四則',
        points: [
          '小數乘法：先當整數算，再補小數點',
          '小數除法：除數化為整數（乘以10的倍數），被除數同步移位',
          '例：12 ÷ 0.4 = 120 ÷ 4 = 30',
        ]
      },
      {
        heading: '運算順序',
        points: [
          '先乘除，後加減',
          '有括號先算括號內',
          '同級運算由左至右',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000003': {
    title: '因數與倍數', icon: '🔗',
    sections: [
      {
        heading: '因數與倍數',
        points: [
          '若 A × B = C，則 A、B 是 C 的因數，C 是 A、B 的倍數',
          '1 是所有正整數的因數',
          '每個數本身也是自己的因數',
        ]
      },
      {
        heading: '質數與合數',
        points: [
          '質數：只有 1 和本身兩個因數，如 2、3、5、7、11',
          '合數：因數超過兩個，如 4、6、8、9',
          '1 既不是質數，也不是合數',
          '2 是唯一的偶數質數',
        ]
      },
      {
        heading: '最大公因數（GCD）',
        points: [
          '兩數共同因數中最大的那個',
          '方法：短除法，或列出因數找最大公因數',
          '例：12 和 18 的 GCD = 6',
        ]
      },
      {
        heading: '最小公倍數（LCM）',
        points: [
          '兩數共同倍數中最小的那個',
          '公式：LCM = (A × B) ÷ GCD(A, B)',
          '例：4 和 6 的 LCM = 24 ÷ 2 = 12',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000004': {
    title: '長度、重量、容量與時間', icon: '📏',
    sections: [
      {
        heading: '長度單位',
        points: [
          '1 公里(km) = 1000 公尺(m)',
          '1 公尺(m) = 100 公分(cm)',
          '1 公分(cm) = 10 公釐(mm)',
        ]
      },
      {
        heading: '重量單位',
        points: [
          '1 公噸(t) = 1000 公斤(kg)',
          '1 公斤(kg) = 1000 公克(g)',
          '1 公克(g) = 1000 毫克(mg)',
        ]
      },
      {
        heading: '容量單位',
        points: [
          '1 公升(L) = 1000 毫升(mL)',
          '1 毫升(mL) = 1 立方公分(cm³)',
        ]
      },
      {
        heading: '時間單位',
        points: [
          '1 小時 = 60 分鐘；1 分鐘 = 60 秒',
          '計算時間差：先算分鐘，不夠則向小時借位',
          '上午/下午轉換：下午時刻 + 12 = 24小時制',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000005': {
    title: '平面幾何', icon: '📐',
    sections: [
      {
        heading: '角度',
        points: [
          '三角形內角和 = 180°',
          '四邊形內角和 = 360°',
          '直角 = 90°；平角 = 180°；周角 = 360°',
        ]
      },
      {
        heading: '周長與面積',
        points: [
          '長方形：周長 = (長+寬)×2；面積 = 長×寬',
          '正方形：周長 = 邊長×4；面積 = 邊長²',
          '三角形：面積 = 底×高÷2',
          '平行四邊形：面積 = 底×高',
          '梯形：面積 = (上底+下底)×高÷2',
        ]
      },
      {
        heading: '圓',
        points: [
          '圓周長 = 2πr = πd',
          '圓面積 = πr²',
          '常用 π ≈ 3.14',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000006': {
    title: '立體幾何', icon: '📦',
    sections: [
      {
        heading: '體積公式',
        points: [
          '長方體：體積 = 長×寬×高',
          '正方體：體積 = 邊長³',
          '1 立方公寸 = 1000 立方公分',
        ]
      },
      {
        heading: '容積',
        points: [
          '容積 = 容器內部的體積',
          '1 毫升(mL) = 1 立方公分(cm³)',
          '1 公升(L) = 1000 cm³',
        ]
      },
      {
        heading: '表面積',
        points: [
          '長方體：表面積 = 2×(長×寬 + 長×高 + 寬×高)',
          '正方體：表面積 = 6 × 邊長²',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000007': {
    title: '速率', icon: '🚀',
    sections: [
      {
        heading: '速率三角公式',
        points: [
          '速率 = 距離 ÷ 時間',
          '距離 = 速率 × 時間',
          '時間 = 距離 ÷ 速率',
        ]
      },
      {
        heading: '常見題型',
        points: [
          '追及問題：兩人同向，相差距離 = 速率差 × 時間',
          '相遇問題：兩人相向，合計距離 = 速率和 × 時間',
          '注意單位一致：公里/小時、公尺/分鐘',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000008': {
    title: '比、比值與百分率', icon: '📊',
    sections: [
      {
        heading: '比與比值',
        points: [
          '比的寫法：A：B（讀作 A 比 B）',
          '比值 = 前項 ÷ 後項（是一個數，不是比）',
          '最簡比：前後項除以最大公因數',
        ]
      },
      {
        heading: '百分率',
        points: [
          '百分率 = 某數 ÷ 全體 × 100%',
          '分數轉百分率：3/4 = 0.75 = 75%',
          '打折：八折 = 80% = 乘以 0.8',
        ]
      },
      {
        heading: '比例',
        points: [
          '正比：A 增大，B 也增大，A/B = 固定值',
          '反比：A 增大，B 縮小，A×B = 固定值',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000009': {
    title: '統計', icon: '📈',
    sections: [
      {
        heading: '平均數、中位數、眾數',
        points: [
          '平均數：所有資料總和 ÷ 資料個數',
          '中位數：排序後最中間的數（偶數個取中間兩數的平均）',
          '眾數：出現最多次的數（可能有多個或沒有）',
        ]
      },
      {
        heading: '統計圖表',
        points: [
          '長條圖：比較各類別的數量',
          '折線圖：呈現資料隨時間的變化趨勢',
          '圓餅圖：呈現各部分佔整體的比例',
          '直方圖：呈現連續資料的分布情形',
        ]
      },
    ]
  },
  'a3000000-0000-0000-0000-000000000010': {
    title: '代數', icon: '🔡',
    sections: [
      {
        heading: '用字母表示數',
        points: [
          '用 x、n 等字母代表未知數或變數',
          '代入計算：把字母換成數字求值',
          '找規律：找出第 n 項的公式',
        ]
      },
      {
        heading: '解方程式',
        points: [
          '等式兩邊加減同一個數，等式不變',
          '等式兩邊乘除同一個非零數，等式不變',
          '例：x + 5 = 12 → x = 12 − 5 = 7',
        ]
      },
      {
        heading: '雞兔同籠',
        points: [
          '設兔子有 x 隻，雞有 (總數 − x) 隻',
          '列出腳數方程式：4x + 2(總數−x) = 總腳數',
          '解出 x 即為兔子數量',
        ]
      },
      {
        heading: '種樹問題',
        points: [
          '兩端都種：棵數 = 間隔數 + 1',
          '只種一端：棵數 = 間隔數',
          '兩端不種：棵數 = 間隔數 − 1',
          '環狀（圍成一圈）：棵數 = 間隔數',
        ]
      },
    ]
  },
}

export default function BridgeMathUnit() {
  const { unitId } = useParams()
  const navigate = useNavigate()
  const unit = UNIT_KNOWLEDGE[unitId]

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

  return (
    <div className="page-container">
      <header className="page-header">
        <button className="btn-back" onClick={() => navigate('/bridge/math')}>← 返回</button>
        <div className="header-content center">
          <h1>{unit.icon} {unit.title}</h1>
          <p>知識整理</p>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* 知識整理卡片 */}
          {unit.sections.map((section, si) => (
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
                      color: '#2563EB', flexShrink: 0, marginTop: '1px'
                    }}>
                      {pi + 1}
                    </span>
                    <span style={{ fontSize: '15px', lineHeight: 1.7 }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 進入題庫按鈕 */}
          <div style={{ textAlign: 'center', paddingTop: '8px', paddingBottom: '32px' }}>
            <button
              onClick={() => navigate(`/bridge/math/practice/${unitId}`)}
              style={{
                padding: '16px 48px', fontSize: '17px', fontWeight: 700,
                background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                color: 'white', border: 'none', borderRadius: '16px',
                cursor: 'pointer', boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              開始練習題庫 →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
