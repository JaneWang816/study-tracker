// src/data/weeks/week07/day4.js
// W7 Day4：動筆日

// ── 數學綜合題庫（W7 所有知識點串連）────────────
function generateMathQuestion() {
  const type = Math.floor(Math.random() * 5)

  if (type === 0) {
    // 速率三量互求（求速率）
    const scenarios = [
      { name: '高鐵台北→高雄', d: 335, t: 1.5, label: '高鐵' },
      { name: '自強號台北→台中', d: 160, t: 2, label: '自強號' },
      { name: '捷運跑一段', d: 30, t: 0.5, label: '捷運' }
    ]
    const s = scenarios[Math.floor(Math.random() * scenarios.length)]
    const v = Math.round(s.d / s.t)
    const wrong1 = v + 20
    const wrong2 = v - 20 > 0 ? v - 20 : v + 40
    const wrong3 = s.d * s.t
    const options = [String(v), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(v)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `${s.name}距離 ${s.d} 公里，車程 ${s.t} 小時，平均速率約是多少 km/h？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 1) {
    // 單位換算
    const pairs = [
      { kmh: 36, ms: 10 },
      { kmh: 72, ms: 20 },
      { kmh: 108, ms: 30 },
      { kmh: 144, ms: 40 }
    ]
    const p = pairs[Math.floor(Math.random() * pairs.length)]
    const isToMs = Math.random() > 0.5
    if (isToMs) {
      const wrong1 = p.ms + 8
      const wrong2 = p.ms - 5 > 0 ? p.ms - 5 : p.ms + 15
      const wrong3 = p.kmh / 3
      const options = [String(p.ms), String(wrong1), String(wrong2), String(Math.round(wrong3))]
      const correctText = String(p.ms)
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[options[i], options[j]] = [options[j], options[i]]
      }
      return {
        question: `時速 ${p.kmh} km/h 換算成 m/s 是多少？`,
        options,
        answer: options.indexOf(correctText)
      }
    } else {
      const wrong1 = p.kmh + 18
      const wrong2 = p.kmh - 18 > 0 ? p.kmh - 18 : p.kmh + 36
      const wrong3 = p.ms * 3
      const options = [String(p.kmh), String(wrong1), String(wrong2), String(wrong3)]
      const correctText = String(p.kmh)
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[options[i], options[j]] = [options[j], options[i]]
      }
      return {
        question: `速率 ${p.ms} m/s 換算成 km/h 是多少？`,
        options,
        answer: options.indexOf(correctText)
      }
    }
  } else if (type === 2) {
    // 相遇情境
    const vA = (Math.floor(Math.random() * 4) + 3) * 20   // 60–120
    const vB = (Math.floor(Math.random() * 4) + 3) * 20
    const total = (vA + vB) * 2
    const t = 2
    const wrong1 = vA * t
    const wrong2 = vB * t
    const wrong3 = total + 40
    const options = [String(total), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(total)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `兩列火車從兩端同時相向出發，A車時速 ${vA} km/h，B車時速 ${vB} km/h，${t} 小時後相遇，兩站相距多少公里？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 3) {
    // 求距離（YouBike情境）
    const v = Math.floor(Math.random() * 5) + 10           // 10–14
    const min = (Math.floor(Math.random() * 4) + 1) * 15  // 15, 30, 45, 60
    const tHour = min / 60
    const d = Math.round(v * tHour * 10) / 10
    const wrong1 = Math.round((d + 3) * 10) / 10
    const wrong2 = Math.round((d - 2) * 10) / 10 > 0 ? Math.round((d - 2) * 10) / 10 : d + 2
    const wrong3 = v * min
    const options = [String(d), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(d)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `騎 YouBike 時速約 ${v} km/h，騎了 ${min} 分鐘（${tHour} 小時），約騎了幾公里？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else {
    // 求時間
    const v = (Math.floor(Math.random() * 5) + 4) * 30    // 120–270
    const t = Math.floor(Math.random() * 3) + 1            // 1–3
    const d = v * t
    const wrong1 = t + 1
    const wrong2 = t > 1 ? t - 1 : t + 2
    const wrong3 = d / (v + 30)
    const options = [String(t), String(wrong1), String(wrong2), String(Math.round(wrong3 * 10) / 10)]
    const correctText = String(t)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `台北到某站距離 ${d} 公里，高鐵時速 ${v} km/h，幾小時後到站？`,
      options,
      answer: options.indexOf(correctText)
    }
  }
}

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
