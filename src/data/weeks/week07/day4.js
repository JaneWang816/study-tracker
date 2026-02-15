// src/data/weeks/week07/day4.js
// W7 Day4：動筆日

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 數學綜合:W7所有知識點串連
// ==========================================
const mathQuestions = [
  // 速率三量互求(求速率)
  {
    type: 'options',
    question: '高鐵台北→高雄距離 335 公里,車程 1.5 小時,平均速率約是多少 km/h?',
    options: ['223', '243', '203', '502.5'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間 = 335 ÷ 1.5 ≈ 223 km/h'
  },
  {
    type: 'options',
    question: '自強號台北→台中距離 160 公里,車程 2 小時,平均速率約是多少 km/h?',
    options: ['80', '100', '60', '320'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間 = 160 ÷ 2 = 80 km/h'
  },
  {
    type: 'options',
    question: '捷運跑一段距離 30 公里,車程 0.5 小時,平均速率約是多少 km/h?',
    options: ['60', '80', '40', '15'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間 = 30 ÷ 0.5 = 60 km/h'
  },
  // 單位換算(km/h → m/s)
  {
    type: 'options',
    question: '時速 36 km/h 換算成 m/s 是多少?',
    options: ['10', '18', '5', '12'],
    answer: 0,
    displayAnswer: '36 km/h ÷ 3.6 = 10 m/s'
  },
  {
    type: 'options',
    question: '時速 72 km/h 換算成 m/s 是多少?',
    options: ['20', '28', '15', '24'],
    answer: 0,
    displayAnswer: '72 km/h ÷ 3.6 = 20 m/s'
  },
  {
    type: 'options',
    question: '時速 108 km/h 換算成 m/s 是多少?',
    options: ['30', '38', '25', '36'],
    answer: 0,
    displayAnswer: '108 km/h ÷ 3.6 = 30 m/s'
  },
  {
    type: 'options',
    question: '時速 144 km/h 換算成 m/s 是多少?',
    options: ['40', '48', '35', '48'],
    answer: 0,
    displayAnswer: '144 km/h ÷ 3.6 = 40 m/s'
  },
  // 單位換算(m/s → km/h)
  {
    type: 'options',
    question: '速率 10 m/s 換算成 km/h 是多少?',
    options: ['36', '54', '18', '30'],
    answer: 0,
    displayAnswer: '10 m/s × 3.6 = 36 km/h'
  },
  {
    type: 'options',
    question: '速率 20 m/s 換算成 km/h 是多少?',
    options: ['72', '90', '54', '60'],
    answer: 0,
    displayAnswer: '20 m/s × 3.6 = 72 km/h'
  },
  {
    type: 'options',
    question: '速率 30 m/s 換算成 km/h 是多少?',
    options: ['108', '126', '90', '90'],
    answer: 0,
    displayAnswer: '30 m/s × 3.6 = 108 km/h'
  },
  {
    type: 'options',
    question: '速率 40 m/s 換算成 km/h 是多少?',
    options: ['144', '162', '126', '120'],
    answer: 0,
    displayAnswer: '40 m/s × 3.6 = 144 km/h'
  },
  // 相遇情境
  {
    type: 'options',
    question: '兩列火車從兩端同時相向出發,A車時速 60 km/h,B車時速 80 km/h,2 小時後相遇,兩站相距多少公里?',
    options: ['280', '120', '160', '320'],
    answer: 0,
    displayAnswer: '總距離 = (60 + 80) × 2 = 140 × 2 = 280公里'
  },
  {
    type: 'options',
    question: '兩列火車從兩端同時相向出發,A車時速 80 km/h,B車時速 100 km/h,2 小時後相遇,兩站相距多少公里?',
    options: ['360', '160', '200', '400'],
    answer: 0,
    displayAnswer: '總距離 = (80 + 100) × 2 = 180 × 2 = 360公里'
  },
  {
    type: 'options',
    question: '兩列火車從兩端同時相向出發,A車時速 100 km/h,B車時速 120 km/h,2 小時後相遇,兩站相距多少公里?',
    options: ['440', '200', '240', '480'],
    answer: 0,
    displayAnswer: '總距離 = (100 + 120) × 2 = 220 × 2 = 440公里'
  },
  // 求距離(YouBike情境)
  {
    type: 'options',
    question: '騎 YouBike 時速約 10 km/h,騎了 15 分鐘(0.25 小時),約騎了幾公里?',
    options: ['2.5', '5.5', '0.5', '150'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 10 × 0.25 = 2.5公里'
  },
  {
    type: 'options',
    question: '騎 YouBike 時速約 12 km/h,騎了 30 分鐘(0.5 小時),約騎了幾公里?',
    options: ['6', '9', '4', '360'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 12 × 0.5 = 6公里'
  },
  {
    type: 'options',
    question: '騎 YouBike 時速約 14 km/h,騎了 45 分鐘(0.75 小時),約騎了幾公里?',
    options: ['10.5', '13.5', '8.5', '630'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 14 × 0.75 = 10.5公里'
  },
  // 求時間
  {
    type: 'options',
    question: '台北到某站距離 120 公里,高鐵時速 120 km/h,幾小時後到站?',
    options: ['1', '2', '0', '0.5'],
    answer: 0,
    displayAnswer: '時間 = 距離 ÷ 速率 = 120 ÷ 120 = 1小時'
  },
  {
    type: 'options',
    question: '台北到某站距離 300 公里,高鐵時速 150 km/h,幾小時後到站?',
    options: ['2', '3', '1', '1.7'],
    answer: 0,
    displayAnswer: '時間 = 距離 ÷ 速率 = 300 ÷ 150 = 2小時'
  },
  {
    type: 'options',
    question: '台北到某站距離 540 公里,高鐵時速 180 km/h,幾小時後到站?',
    options: ['3', '4', '2', '2.8'],
    answer: 0,
    displayAnswer: '時間 = 距離 ÷ 速率 = 540 ÷ 180 = 3小時'
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

export { generateMathQuestion }

// ── Day 資料 ──────────────────────────────────────
const day4 = {
  id: 'day4',
  name: '第四天',
  icon: '✏️',
  color: '#0369a1',
  title: '動筆日',
  units: [
    {
      id: 'w7d4-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '劉克襄：搭火車是……的旅行',
        sections: [
          {
            title: '今日文本段落',
            blocks: [
              {
                type: 'text',
                content: '劉克襄用三個排比句描述搭火車：'
              },
              {
                type: 'quote',
                content: '搭火車是快樂而知足的旅行。\n搭火車是環保而簡樸的旅行。花費很少，卻耗費很多時間。但那是用最輕微的自己，在接觸這片土地。\n搭火車是安全而緩慢的旅行。我把自己交給一輛駛向遠方的列車，彷彿把自己的一輩子交給另一個人，腦海卻更從容地，面對世界。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '今天你也要用自己的語言，寫一趟屬於你的火車（或捷運）旅行。\n\n不需要是很特別的旅程——可以是每天上學、一次家庭旅行、或是一個人第一次單獨搭火車的記憶。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d4-math',
      name: '數學｜W7綜合練習',
      icon: '📐',
      lesson: {
        title: '速率：本週知識大整合',
        sections: [
          {
            title: '本週數學重點回顧',
            blocks: [
              {
                type: 'text',
                content: '這週學了速率的三個核心：\n\n① 基本公式：v = d ÷ t（三量互求）\n\n② 單位換算：\n• km/h → m/s：÷ 3.6\n• m/s → km/h：× 3.6\n• 記住：36 km/h = 10 m/s\n\n③ 情境應用：\n• 相遇問題：總距離 ÷（兩速率之和）= 相遇時間\n• 平均速率：總距離 ÷ 總時間（不能直接平均速率！）\n\n現在來做綜合練習，情境全部來自台灣的交通場景。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMathQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w7d4-science',
      name: '科學｜交通工具的能源',
      icon: '🔬',
      lesson: {
        title: '動力從哪裡來？（預覽W8）',
        sections: [
          {
            title: '交通工具的能源轉換',
            blocks: [
              {
                type: 'text',
                content: '我們學了火車怎麼「動起來」（慣性、摩擦力、作用力與反作用力），但還有一個問題：動力從哪裡來？\n\n不同的交通工具用不同的能源：\n\n🛻 汽車、機車：汽油（化學能 → 動能）\n🚂 早期蒸汽火車：煤炭（化學能 → 熱能 → 動能）\n🚇 台鐵、高鐵、捷運：電力（電能 → 動能）\n🚲 腳踏車、YouBike：人力（化學能→肌肉收縮→動能）'
              },
              {
                type: 'text',
                content: '為什麼電動交通工具被認為更環保？\n\n• 電可以來自再生能源（太陽能、風力）\n• 行駛時沒有直接排放廢氣\n• 能源轉換效率比燃油引擎更高\n\n台灣的高鐵和捷運全部用電力驅動。隨著台灣電力逐漸轉向再生能源，這些交通工具的碳足跡會越來越小。\n\n下週（W8），我們會更深入學習能源轉換的概念。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d4-writing',
      name: '語文｜記敘文寫作',
      icon: '✍️',
      lesson: {
        title: '我的火車旅行',
        sections: [
          {
            title: '記敘文的四段結構',
            blocks: [
              {
                type: 'text',
                content: '記敘文（敘事文）的核心是「說一個真實的故事」。劉克襄教我們用小細節帶出大感受。\n\n今天你的題目是：「我的火車旅行」\n\n建議四段結構：\n\n第一段｜出發前：那一次旅行，你從哪裡出發？要去哪裡？出發前心情怎麼樣？\n\n第二段｜旅途中：車廂裡有什麼？你看到了什麼窗外風景？發生了什麼讓你印象深刻的事？\n\n第三段｜一個細節：放大一個最有感覺的小細節（一個人、一個聲音、一個畫面）\n\n第四段｜回頭看：現在回想起那次旅行，你有什麼感受？那趟旅程對你有什麼意義？'
              },
              {
                type: 'text',
                content: '📝 寫作提示：\n\n• 可以寫台鐵、高鐵、捷運、甚至是客運巴士\n• 不需要是很特別的旅程，平凡的日常也能寫出好文章\n• 試著像劉克襄一樣，從一個「小細節」開始——一張車票、一個聲音、一個氣味\n• 建議字數：300–400字\n\n範例開頭（模仿劉克襄的風格）：\n「那張車票，我還記得是藍色的。台北到瑞芳，票價三十幾元……」'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d4-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '動筆日總結',
            blocks: [
              {
                type: 'text',
                content: '📐 數學：完成了本週速率的綜合練習，把基本公式、單位換算、情境應用全部複習了一遍。\n\n🔬 科學：認識了不同交通工具的能源來源，電動交通工具在再生能源普及後會更環保。\n\n✍️ 語文：完成了記敘文「我的火車旅行」，用四段結構說出一個屬於自己的旅行故事。'
              },
              {
                type: 'text',
                content: '⏭️ 明天（Day 5）是本週最特別的一天：我們要聽兩首台語歌，然後——去搭真實的火車！帶著你的記敘文，帶著劉克襄的「11元精神」，去感受一下真實的鐵道旅行。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day4
