// src/data/weeks/week07/day2.js
// W7 Day2：火車怎麼動起來？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 科學:慣性+摩擦力
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '什麼是「慣性」?',
    options: [
      '物體保持原來運動狀態的性質',
      '物體越重越容易移動',
      '物體摩擦時產生的力',
      '物體加速時產生的熱'
    ],
    answer: 0,
    displayAnswer: '慣性是物體保持原來運動狀態的性質。靜止的物體傾向保持靜止,運動的物體傾向保持等速直線運動。物體質量越大,慣性越大。'
  },
  {
    type: 'options',
    question: '站在公車上,公車突然向前加速,你的身體會往哪個方向傾?',
    options: ['向後傾', '向前傾', '向左傾', '不動'],
    answer: 0,
    displayAnswer: '公車向前加速時,你的身體因為慣性想保持原來的靜止狀態,所以會相對向後傾。這就是為什麼公車啟動時要抓緊扶手。'
  },
  {
    type: 'options',
    question: '站在公車上,公車突然煞車,你的身體會往哪個方向傾?',
    options: ['向前傾', '向後傾', '向左傾', '不動'],
    answer: 0,
    displayAnswer: '公車煞車時,你的身體因為慣性想繼續保持向前運動,所以會向前傾。這就是為什麼車上要有安全帶和扶手。'
  },
  {
    type: 'options',
    question: '為什麼火車要提前很遠就開始煞車,不能等到快到站再踩?',
    options: [
      '火車太重,慣性大,需要很長距離才能停下來',
      '火車司機反應慢',
      '鐵軌太滑,摩擦力太大',
      '火車的煞車系統壞了'
    ],
    answer: 0,
    displayAnswer: '火車質量非常大,慣性也非常大。根據牛頓第一定律,要改變這麼大的慣性需要很長的時間和距離,所以必須提前很遠就開始煞車。'
  },
  {
    type: 'options',
    question: '摩擦力的方向通常是?',
    options: [
      '和運動方向相反',
      '和運動方向相同',
      '垂直於運動方向',
      '沒有固定方向'
    ],
    answer: 0,
    displayAnswer: '摩擦力總是阻礙物體的運動,所以方向和運動方向相反。這就是為什麼摩擦力會讓運動的物體減速。'
  },
  {
    type: 'options',
    question: '下列哪種情況摩擦力最大?',
    options: [
      '輪子在沙地上滾動',
      '輪子在冰面上滾動',
      '輪子在光滑地板上滾動',
      '輪子在水面上滾動'
    ],
    answer: 0,
    displayAnswer: '沙地表面粗糙且鬆軟,摩擦力最大。冰面、光滑地板、水面都比較光滑,摩擦力較小。這就是為什麼在沙灘上推車特別費力。'
  },
  {
    type: 'options',
    question: '火車的鋼輪在鐵軌上行駛,和汽車輪胎在柏油路上相比,摩擦力如何?',
    options: [
      '火車摩擦力較小,所以需要很長距離煞車',
      '火車摩擦力較大,所以跑得快',
      '兩者摩擦力一樣大',
      '火車沒有摩擦力'
    ],
    answer: 0,
    displayAnswer: '鋼輪和鐵軌之間的摩擦力比橡膠輪胎和柏油路小很多,這讓火車更省能源,但也意味著煞車距離更長,需要提前很遠就開始減速。'
  },
  {
    type: 'options',
    question: '下列哪個例子最能說明慣性的作用?',
    options: [
      '搖晃桌子上的杯子,裡面的水灑出來',
      '蘋果從樹上掉下來',
      '搭電梯上樓時感覺變重',
      '風吹動樹葉'
    ],
    answer: 0,
    displayAnswer: '搖晃杯子時,杯子運動但水因為慣性想保持原來的靜止狀態,所以會灑出來。這是慣性最典型的例子。蘋果掉下來是重力,搭電梯變重是慣性加重力,風吹樹葉是外力。'
  }
]

const generateScienceQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(scienceQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

// ==========================================
// 數學:速率純計算+單位換算
// ==========================================
const mathQuestions = [
  // km/h → m/s
  {
    type: 'options',
    question: '時速 36 公里換算成公尺/秒,是多少 m/s?(提示:÷3.6)',
    options: ['10', '15', '5', '12'],
    answer: 0,
    displayAnswer: '36 ÷ 3.6 = 10 m/s\n提示:1 km/h = 1000m ÷ 3600s ≈ 0.278 m/s,所以 km/h ÷ 3.6 = m/s'
  },
  {
    type: 'options',
    question: '時速 72 公里換算成公尺/秒,是多少 m/s?(提示:÷3.6)',
    options: ['20', '25', '15', '24'],
    answer: 0,
    displayAnswer: '72 ÷ 3.6 = 20 m/s'
  },
  {
    type: 'options',
    question: '時速 108 公里換算成公尺/秒,是多少 m/s?(提示:÷3.6)',
    options: ['30', '35', '25', '36'],
    answer: 0,
    displayAnswer: '108 ÷ 3.6 = 30 m/s'
  },
  {
    type: 'options',
    question: '時速 144 公里換算成公尺/秒,是多少 m/s?(提示:÷3.6)',
    options: ['40', '45', '35', '48'],
    answer: 0,
    displayAnswer: '144 ÷ 3.6 = 40 m/s'
  },
  // m/s → km/h
  {
    type: 'options',
    question: '速率 10 公尺/秒換算成公里/小時,是多少 km/h?(提示:×3.6)',
    options: ['36', '54', '18', '30'],
    answer: 0,
    displayAnswer: '10 × 3.6 = 36 km/h\n提示:m/s × 3.6 = km/h'
  },
  {
    type: 'options',
    question: '速率 20 公尺/秒換算成公里/小時,是多少 km/h?(提示:×3.6)',
    options: ['72', '90', '54', '60'],
    answer: 0,
    displayAnswer: '20 × 3.6 = 72 km/h'
  },
  {
    type: 'options',
    question: '速率 30 公尺/秒換算成公里/小時,是多少 km/h?(提示:×3.6)',
    options: ['108', '126', '90', '90'],
    answer: 0,
    displayAnswer: '30 × 3.6 = 108 km/h'
  },
  {
    type: 'options',
    question: '速率 40 公尺/秒換算成公里/小時,是多少 km/h?(提示:×3.6)',
    options: ['144', '162', '126', '120'],
    answer: 0,
    displayAnswer: '40 × 3.6 = 144 km/h'
  },
  // 速率計算
  {
    type: 'options',
    question: '一列火車行駛 120 公里,花了 1 小時,平均速率是多少公里/小時?',
    options: ['120', '150', '90', '121'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間 = 120 ÷ 1 = 120 km/h'
  },
  {
    type: 'options',
    question: '一列火車行駛 180 公里,花了 2 小時,平均速率是多少公里/小時?',
    options: ['90', '120', '60', '182'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間 = 180 ÷ 2 = 90 km/h'
  },
  {
    type: 'options',
    question: '一列火車行駛 240 公里,花了 3 小時,平均速率是多少公里/小時?',
    options: ['80', '110', '50', '243'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間 = 240 ÷ 3 = 80 km/h'
  },
  // 距離計算
  {
    type: 'options',
    question: '火車時速 80 公里,行駛 1 小時,共走幾公里?',
    options: ['80', '120', '40', '81'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 80 × 1 = 80 km'
  },
  {
    type: 'options',
    question: '火車時速 120 公里,行駛 2 小時,共走幾公里?',
    options: ['240', '280', '200', '122'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 120 × 2 = 240 km'
  },
  {
    type: 'options',
    question: '火車時速 160 公里,行駛 3 小時,共走幾公里?',
    options: ['480', '520', '440', '163'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 160 × 3 = 480 km'
  }
]

const generateMathQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(mathQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateScienceQuestion, generateMathQuestion }

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
