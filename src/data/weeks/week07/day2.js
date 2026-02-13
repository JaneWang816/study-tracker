// src/data/weeks/week07/day2.js
// W7 Day2：火車怎麼動起來？

// ── 科學題庫（慣性 + 摩擦力）────────────────────
const sciencePool = [
  {
    question: '什麼是「慣性」？',
    options: [
      '物體越重越容易移動',
      '物體保持原來運動狀態的性質',
      '物體摩擦時產生的力',
      '物體加速時產生的熱'
    ],
    answer: 1
  },
  {
    question: '站在公車上，公車突然向前加速，你的身體會往哪個方向傾？',
    options: ['向前傾', '向後傾', '向左傾', '不動'],
    answer: 1
  },
  {
    question: '站在公車上，公車突然煞車，你的身體會往哪個方向傾？',
    options: ['向後傾', '向前傾', '向左傾', '不動'],
    answer: 1
  },
  {
    question: '為什麼火車要提前很遠就開始煞車，不能等到快到站再踩？',
    options: [
      '火車太重，慣性大，需要很長距離才能停下來',
      '火車司機反應慢',
      '鐵軌太滑，摩擦力太大',
      '火車的煞車系統壞了'
    ],
    answer: 0
  },
  {
    question: '摩擦力的方向通常是？',
    options: [
      '和運動方向相同',
      '和運動方向相反',
      '垂直於運動方向',
      '沒有固定方向'
    ],
    answer: 1
  },
  {
    question: '下列哪種情況摩擦力最大？',
    options: [
      '輪子在冰面上滾動',
      '輪子在沙地上滾動',
      '輪子在光滑地板上滾動',
      '輪子在水面上滾動'
    ],
    answer: 1
  },
  {
    question: '火車的鋼輪在鐵軌上行駛，和汽車輪胎在柏油路上相比，摩擦力如何？',
    options: [
      '火車摩擦力較大，所以跑得快',
      '火車摩擦力較小，所以需要很長距離煞車',
      '兩者摩擦力一樣大',
      '火車沒有摩擦力'
    ],
    answer: 1
  },
  {
    question: '下列哪個例子最能說明慣性的作用？',
    options: [
      '蘋果從樹上掉下來',
      '搭電梯上樓時感覺變重',
      '搖晃桌子上的杯子，裡面的水灑出來',
      '風吹動樹葉'
    ],
    answer: 2
  }
]

function generateScienceQuestion() {
  const q = sciencePool[Math.floor(Math.random() * sciencePool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── 數學題庫（速率純計算 + 單位換算）────────────
function generateMathQuestion() {
  const type = Math.floor(Math.random() * 4)

  if (type === 0) {
    // km/h → m/s
    const kmh = (Math.floor(Math.random() * 8) + 2) * 18  // 36, 54, 72, ..., 180
    const ms = kmh / 3.6
    // 設計成整數結果（36km/h=10m/s, 72=20, 108=30, 144=40）
    const cleanKmh = [36, 72, 108, 144][Math.floor(Math.random() * 4)]
    const cleanMs = cleanKmh / 3.6
    const wrong1 = cleanMs + 5
    const wrong2 = cleanMs - 5 > 0 ? cleanMs - 5 : cleanMs + 10
    const wrong3 = cleanKmh / 3
    const options = [String(cleanMs), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(cleanMs)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `時速 ${cleanKmh} 公里換算成公尺/秒，是多少 m/s？（提示：÷3.6）`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 1) {
    // m/s → km/h
    const ms = (Math.floor(Math.random() * 5) + 1) * 10   // 10, 20, 30, 40, 50
    const kmh = ms * 3.6
    const wrong1 = kmh + 18
    const wrong2 = kmh - 18 > 0 ? kmh - 18 : kmh + 36
    const wrong3 = ms * 3
    const options = [String(kmh), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(kmh)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `速率 ${ms} 公尺/秒換算成公里/小時，是多少 km/h？（提示：×3.6）`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 2) {
    // 速率計算（整數）
    const d = (Math.floor(Math.random() * 6) + 2) * 60    // 120–420，60的倍數
    const t = Math.floor(Math.random() * 3) + 1            // 1–3小時
    const v = d / t
    const wrong1 = v + 30
    const wrong2 = v - 30 > 0 ? v - 30 : v + 60
    const wrong3 = d + t
    const options = [String(v), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(v)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `一列火車行駛 ${d} 公里，花了 ${t} 小時，平均速率是多少公里/小時？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else {
    // 距離計算
    const v = (Math.floor(Math.random() * 5) + 2) * 40    // 80–240
    const t = Math.floor(Math.random() * 3) + 1            // 1–3小時
    const d = v * t
    const wrong1 = d + 40
    const wrong2 = d - 40 > 0 ? d - 40 : d + 80
    const wrong3 = v + t
    const options = [String(d), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(d)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `火車時速 ${v} 公里，行駛 ${t} 小時，共走幾公里？`,
      options,
      answer: options.indexOf(correctText)
    }
  }
}

// ── Day 資料 ──────────────────────────────────────
const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '⚙️',
  color: '#0369a1',
  title: '火車怎麼動起來？',
  units: [
    {
      id: 'w7d2-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '劉克襄說的鐵道記憶',
        sections: [
          {
            title: '今日文本段落',
            blocks: [
              {
                type: 'quote',
                content: '五歲尚未離開烏日九張犁時，大清早，祖母帶我到水田插秧，旁邊就是鐵道。小學時就讀台中大同國小，旁邊也是鐵道。再大一點，居家離鐵道遠了。自己在房間玩火車，依舊興奮地搭建各種複雜的路線，搜集各種材料。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '劉克襄對火車的熱情，從五歲看著火車從水田旁駛過開始，一直到長大後玩火車模型，從未消退。\n\n🤔 今日問題：你有沒有對某樣東西很著迷？這個東西是從哪裡、什麼時候開始吸引你的？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d2-science',
      name: '科學｜慣性與摩擦力',
      icon: '🔬',
      lesson: {
        title: '火車為什麼要提前煞車？',
        sections: [
          {
            title: '慣性：物體不想改變狀態',
            blocks: [
              {
                type: 'text',
                content: '你有沒有搭過公車，突然煞車時差點向前撲倒？或者公車加速時，身體被往後推？這就是「慣性」在作用。\n\n慣性的定義：物體保持原來運動狀態的性質。\n\n• 靜止的物體，傾向於繼續靜止\n• 運動中的物體，傾向於繼續以相同速度運動\n\n物體的質量越大，慣性越大——越難改變它的運動狀態。'
              },
              {
                type: 'text',
                content: '🚂 火車的慣性非常大\n\n一列滿載的火車重達數百噸，慣性極大。當司機踩下煞車，火車不會馬上停下來，而是需要很長的距離才能停止。\n\n台鐵自強號時速110公里時，煞車距離可達1公里以上。這就是為什麼火車一定要「提前」煞車。\n\n如果你住在鐵路附近，可能常常聽到火車煞車時「嘎——」的聲音，那就是慣性在和摩擦力拉鋸。'
              }
            ]
          },
          {
            title: '摩擦力：讓運動「停下來」的力',
            blocks: [
              {
                type: 'text',
                content: '摩擦力是兩個物體接觸時，阻礙相對運動的力。它的方向總是和運動方向相反。\n\n摩擦力的大小取決於：\n① 接觸面的粗糙程度（越粗糙，摩擦力越大）\n② 兩個物體之間的壓力（越重，摩擦力越大）'
              },
              {
                type: 'text',
                content: '🔍 火車輪子 vs 汽車輪胎\n\n• 汽車輪胎是橡膠，柏油路面粗糙 → 摩擦力大 → 急煞車距離短\n• 火車鋼輪在鐵軌上 → 都是金屬，摩擦力小 → 煞車距離很長\n\n這就是為什麼火車比汽車更難「急停」。鐵路的設計要考慮這一點——站與站之間要有足夠距離，彎道前要有足夠的直線讓火車減速。'
              },
              {
                type: 'text',
                content: '🤔 生活中的摩擦力應用：\n\n✅ 摩擦力大有好處：走路不會滑倒、煞車能停下來、螺絲不會鬆脫\n✅ 摩擦力小有好處：溜冰、保齡球、機器運轉更順暢\n\n工程師會根據需求，設計增加或減少摩擦力的方法。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateScienceQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w7d2-math',
      name: '數學｜速率計算＋單位換算',
      icon: '📐',
      lesson: {
        title: '公里/小時 ↔ 公尺/秒',
        sections: [
          {
            title: '為什麼需要兩種單位？',
            blocks: [
              {
                type: 'text',
                content: '速率可以用不同的單位表示：\n\n• 公里/小時（km/h）：描述火車、汽車的速度，比較直觀\n• 公尺/秒（m/s）：科學計算時常用，也用在描述短距離的快速運動\n\n例如：高鐵時速300公里，換成公尺/秒是多少？'
              },
              {
                type: 'text',
                content: '換算方法：\n\nkm/h → m/s：÷ 3.6\n（因為 1 km = 1000 m，1 小時 = 3600 秒，1000÷3600 = 1÷3.6）\n\nm/s → km/h：× 3.6\n\n例題：\n• 高鐵時速 300 km/h → 300 ÷ 3.6 ≈ 83.3 m/s\n• 跑步速度 3 m/s → 3 × 3.6 = 10.8 km/h'
              }
            ]
          },
          {
            title: '整數換算練習',
            blocks: [
              {
                type: 'text',
                content: '有幾個常用的「整數換算」值，記住它們很方便：\n\n• 36 km/h = 10 m/s\n• 72 km/h = 20 m/s\n• 108 km/h = 30 m/s\n• 144 km/h = 40 m/s\n\n這些都是 36 的倍數，每增加 36 km/h，就增加 10 m/s。\n\n為什麼？因為 36 km/h = 36,000 m/3,600 s = 10 m/s。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w7d2-vocab',
      name: '語文｜詞彙練習',
      icon: '📝',
      lesson: {
        title: '本週重要詞彙',
        sections: [
          {
            title: '交通與物理詞彙',
            blocks: [
              {
                type: 'text',
                content: '這週會用到的重要詞彙：\n\n🚂 交通類：\n• 縱貫鐵路：縱向（南北向）貫穿全島的鐵路\n• 區間車：只在某個區間行駛的短途火車\n• 捷運：城市快速大眾運輸系統（台北、高雄、桃園都有）\n\n⚙️ 物理類：\n• 慣性：物體保持原來運動狀態的性質\n• 摩擦力：阻礙兩個接觸物體相對運動的力\n• 速率：單位時間內移動的距離（v = d ÷ t）'
              },
              {
                type: 'text',
                content: '劉克襄文章裡的特別用詞：\n\n• 「脫軌」：本意是火車出了軌道，文章裡用來比喻思考跳脫框架\n• 「漫行」：漫無目的地走路，享受過程\n• 「餖飣」（ㄉㄡˋ ㄉㄧㄥˋ）：零碎細小的東西，文章裡指車站周邊的小事物\n• 「鄉土教學」：以在地環境為教材的學習方式'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d2-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '今日知識整理',
            blocks: [
              {
                type: 'text',
                content: '⚙️ 科學：慣性讓運動中的物體傾向繼續運動，質量越大慣性越大。摩擦力阻礙運動，方向和運動相反。火車因為質量大、鋼輪摩擦力小，需要很長距離才能停下來。\n\n📐 數學：km/h ↔ m/s 的換算，記住 36 km/h = 10 m/s 這個基準。\n\n📝 語文：本週的核心詞彙，縱貫鐵路、慣性、摩擦力、速率。'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：台灣除了火車，還有捷運、公車、UBike……這些加在一起叫做「大眾運輸系統」。我們要來看看台灣的交通網路，也要學速率的情境應用題，以及科學裡最後一個重要概念：作用力與反作用力。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day2
