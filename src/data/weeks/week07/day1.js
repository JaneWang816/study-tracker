// src/data/weeks/week07/day1.js
// W7 Day1：火車怎麼改變台灣？

// ── 社會科題庫 ────────────────────────────────────
const socialPool = [
  {
    question: '台灣第一條鐵路是哪一年通車的？',
    options: ['1871年', '1891年', '1908年', '1945年'],
    answer: 1
  },
  {
    question: '台灣第一條鐵路連接哪兩個城市？',
    options: ['台北到高雄', '台北到基隆', '基隆到台南', '台北到台中'],
    answer: 1
  },
  {
    question: '縱貫鐵路全線通車是在哪一年？',
    options: ['1895年', '1900年', '1908年', '1920年'],
    answer: 2
  },
  {
    question: '縱貫鐵路是在哪個時代完成建設？',
    options: ['清朝時代', '日治時代', '荷蘭時代', '戰後時代'],
    answer: 1
  },
  {
    question: '縱貫鐵路通車後，台北到高雄的交通時間縮短到大約多久？',
    options: ['三天', '一星期', '一天', '半天'],
    answer: 2
  },
  {
    question: '中山高速公路是哪一年通車？',
    options: ['1965年', '1972年', '1978年', '1985年'],
    answer: 2
  },
  {
    question: '台灣高鐵是哪一年正式通車？',
    options: ['1998年', '2002年', '2005年', '2007年'],
    answer: 3
  },
  {
    question: '最早推動台灣建設鐵路的清朝官員是誰？',
    options: ['鄭成功', '劉銘傳', '沈葆楨', '丁汝昌'],
    answer: 1
  }
]

function generateSocialQuestion() {
  const q = socialPool[Math.floor(Math.random() * socialPool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── 數學科題庫（速率概念 v = d ÷ t）──────────────
function generateMathQuestion() {
  const type = Math.floor(Math.random() * 3)
  let question, correctVal, wrong1, wrong2, wrong3

  if (type === 0) {
    // 求速率
    const d = (Math.floor(Math.random() * 8) + 2) * 50   // 100–450
    const t = Math.floor(Math.random() * 4) + 1           // 1–4
    correctVal = d / t
    wrong1 = correctVal + 20
    wrong2 = correctVal - 20 > 0 ? correctVal - 20 : correctVal + 40
    wrong3 = d * t
    question = `一列火車行駛了 ${d} 公里，花了 ${t} 小時，平均速率是多少公里/小時？`
  } else if (type === 1) {
    // 求距離
    const v = (Math.floor(Math.random() * 6) + 4) * 20   // 80–180
    const t = Math.floor(Math.random() * 4) + 1           // 1–4
    correctVal = v * t
    wrong1 = v + t
    wrong2 = correctVal + 50
    wrong3 = correctVal - 50 > 0 ? correctVal - 50 : correctVal + 100
    question = `一列火車時速 ${v} 公里，行駛了 ${t} 小時，共走了幾公里？`
  } else {
    // 求時間
    const v = (Math.floor(Math.random() * 4) + 2) * 50   // 100–300
    const t = Math.floor(Math.random() * 4) + 1           // 1–4
    const d = v * t
    correctVal = t
    wrong1 = t + 1
    wrong2 = t > 1 ? t - 1 : t + 2
    wrong3 = t + 3
    question = `台北到某站距離 ${d} 公里，火車時速 ${v} 公里，需要幾小時到達？`
  }

  const options = [String(correctVal), String(wrong1), String(wrong2), String(wrong3)]
  const correctText = String(correctVal)
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[options[i], options[j]] = [options[j], options[i]]
  }
  return { question, options, answer: options.indexOf(correctText) }
}

// ── 語文題庫（文本理解）──────────────────────────
const literaturePool = [
  {
    question: '劉克襄說「11元」的火車旅行象徵什麼？',
    options: ['最快速的旅行方式', '緩慢的節奏與淳樸的生活', '最便宜的交通工具', '只在台北地區行駛的火車'],
    answer: 1
  },
  {
    question: '劉克襄對鐵路的熱情，最早從哪裡開始？',
    options: ['大學時代讀鐵路書籍', '五歲在烏日水田旁看火車', '第一次坐高鐵', '祖父送他玩具火車'],
    answer: 1
  },
  {
    question: '「鐵道不是一把尺，而是圓規」這句話的意思是？',
    options: [
      '火車速度可以量測距離',
      '以車站為中心向四周探索，畫出生活的圓',
      '鐵道像圓規一樣彎曲',
      '搭火車需要帶量尺'
    ],
    answer: 1
  },
  {
    question: '劉克襄認為搭火車比開車更環保的原因是什麼？',
    options: [
      '火車速度比較慢',
      '火車票比較便宜',
      '火車一次載很多人，石油消耗相對少',
      '火車不需要燃料'
    ],
    answer: 2
  },
  {
    question: '文章裡的「11路車」是什麼意思？',
    options: ['11號公車', '11元的火車', '用兩條腿走路', '11節車廂的列車'],
    answer: 2
  }
]

function generateLiteratureQuestion() {
  const q = literaturePool[Math.floor(Math.random() * literaturePool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── Day 資料 ──────────────────────────────────────
const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🚂',
  color: '#0369a1',
  title: '火車怎麼改變台灣？',
  units: [
    {
      id: 'w7d1-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '劉克襄說的11元是什麼？',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '台灣最慢的火車，最短區間的里程，最便宜的旅行，票價是11元。比如，池上至富里、壽豐至志學、萬榮至鳳林之類。有趣的是，如今它們幾乎都集中在花東縱谷。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '劉克襄是台灣的自然書寫作家，也是一個終身著迷於火車的人。他說「11元潛藏著，緩慢的節奏、淳樸的生活、迷人的風物」。\n\n他五歲住在台中烏日，祖母帶他去水田插秧，旁邊就是鐵道。從那時起，火車就成了他一輩子的記憶。'
              },
              {
                type: 'text',
                content: '🤔 開場問題：你第一次搭火車是幾歲？去哪裡？你還記得車廂裡的聲音或氣味嗎？\n\n這週，我們要跟著劉克襄，從台灣的交通歷史出發，學習速率的計算，也思考「快」和「慢」的意義。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d1-social',
      name: '社會｜台灣交通的一百年',
      icon: '🗺️',
      lesson: {
        title: '從牛車到高鐵：台灣交通百年史',
        sections: [
          {
            title: '清朝的台灣，靠腳走路',
            blocks: [
              {
                type: 'text',
                content: '一百五十年前，台灣沒有公路，也沒有鐵路。人們出門靠兩條腿走路，或搭轎子、坐牛車。從台北到台南，大概要走兩個星期。\n\n1885年，清朝任命劉銘傳為台灣第一任巡撫。他決定讓台灣現代化，最重要的計劃就是建設鐵路。1891年，台灣第一條鐵路通車——從台北到基隆，全長28.6公里。雖然很短，卻是台灣現代交通的起點。'
              }
            ]
          },
          {
            title: '日治時代：縱貫鐵路串起全島',
            blocks: [
              {
                type: 'text',
                content: '1895年日本統治台灣後，鐵路建設大幅加速。1908年，縱貫鐵路全線通車，從基隆一路到高雄，全長407公里。\n\n這條鐵路改變了台灣：農產品快速運送到市場、工廠原料快速流通、人們第一次有了「南北一日生活圈」的概念。從台北到高雄，從走路兩個月，縮短為搭火車約一天。'
              }
            ]
          },
          {
            title: '戰後台灣：公路與高鐵的時代',
            blocks: [
              {
                type: 'text',
                content: '1978年，中山高速公路全線通車，南北行車縮短到約4小時。2007年，台灣高鐵通車，台北到高雄只要90分鐘，時速300公里的列車讓台灣「變小了」。\n\n劉克襄寫道：「高鐵出現，我不得不把自己的旅行地圖畫大一些。但我學習，從快中找慢，從科技中發現自然。」'
              },
              {
                type: 'text',
                content: '📅 台灣交通大事記：\n\n• 1891年：台北—基隆鐵路通車（台灣第一條鐵路）\n• 1908年：縱貫鐵路全線通車（基隆—高雄）\n• 1978年：中山高速公路通車\n• 1996年：台北捷運通車\n• 2007年：台灣高鐵通車'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateSocialQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w7d1-math',
      name: '數學｜速率是什麼？',
      icon: '📐',
      lesson: {
        title: '速率：v = d ÷ t',
        sections: [
          {
            title: '速率的定義',
            blocks: [
              {
                type: 'text',
                content: '你搭火車從台北到台中，距離是160公里，花了2小時。這列火車跑得「多快」？\n\n「多快」就是速率要回答的問題：\n\n速率 = 距離 ÷ 時間\n\n160 ÷ 2 = 80（公里/小時）\n\n這列火車的平均速率是每小時80公里。'
              },
              {
                type: 'text',
                content: '速率公式寫成：v = d ÷ t\n\n• v = 速率（velocity）\n• d = 距離（distance）\n• t = 時間（time）\n\n記憶訣竅：把 d、v、t 想成一個三角形，d 在上，v 和 t 在下。用手指蓋住想求的那個，剩下兩個就是算法。'
              }
            ]
          },
          {
            title: '三個量互求',
            blocks: [
              {
                type: 'text',
                content: '公式可以變形，求三種不同的量：\n\n① 求速率：v = d ÷ t\n   300公里，3小時 → 時速100公里\n\n② 求距離：d = v × t\n   時速120公里，走2小時 → 240公里\n\n③ 求時間：t = d ÷ v\n   400公里，時速100公里 → 4小時'
              },
              {
                type: 'text',
                content: '🚆 台灣鐵路真實數據：\n\n• 台北→台中：約160公里\n• 台北→高雄：約345公里\n• 台鐵自強號平均時速：約110公里\n• 高鐵最高時速：300公里\n\n例題：高鐵台北到高雄335公里，車程約1.5小時，平均時速是多少？\n→ 335 ÷ 1.5 ≈ 223（公里/小時）'
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
      id: 'w7d1-chinese',
      name: '語文｜文本深讀',
      icon: '✍️',
      lesson: {
        title: '劉克襄的三種速度',
        sections: [
          {
            title: '文章裡的快、中、慢',
            blocks: [
              {
                type: 'text',
                content: '劉克襄的文章裡藏著三種速度：\n\n🐢 慢速：11元區間車，用走路探索車站周遭\n🚂 中速：台鐵自強號，穿越台灣\n🚄 快速：高鐵，90分鐘台北到高雄\n\n有趣的是，他說自己是「11元那種鐵道迷」——他最喜歡的，是最慢的那種旅行。'
              },
              {
                type: 'quote',
                content: '搭火車是快樂而知足的旅行。花費很少，卻耗費很多時間。但那是用最輕微的自己，在接觸這片土地。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '他說「從快中找慢，從科技中發現自然」——就算是高鐵，他也在找「慢」的部分：找新地方、找台灣的另一個面貌。\n\n💭 思考：旅行的速度和旅行的品質有關係嗎？越慢越好，還是越快越好？'
              }
            ]
          },
          {
            title: '記敘文的寫法',
            blocks: [
              {
                type: 'text',
                content: '劉克襄的文章是我們這週的「記敘文範本」。他的寫法很特別：\n\n① 從一個具體細節開始（11元的車票）\n② 展開個人記憶（五歲在烏日看火車）\n③ 加入觀察和思考（火車與環境、人與土地）\n④ 用一句話作結（永遠長不大，也不想長大）\n\nDay 4 你也要寫一篇記敘文，寫你自己的火車旅行經驗。今天先讀劉克襄，感受他怎麼「用小細節帶出大感受」。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateLiteratureQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w7d1-review',
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
                content: '🗺️ 社會：台灣交通從牛車走到高鐵，每一次交通革命都讓台灣「變小了」。\n\n📐 數學：速率 = 距離 ÷ 時間（v = d ÷ t）。知道兩個量就能算出第三個。\n\n✍️ 語文：劉克襄用11元車票寫出對台灣土地的深情。好的記敘文，從一個具體的小細節開始。'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：火車為什麼要提前煞車？這和「慣性」有關！我們也會練習速率的單位換算：公里/小時 ↔ 公尺/秒。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day1
