// src/data/weeks/week08/day2.js
// W8 Day2：為什麼小店會消失？

// ── 社會科題庫（十大建設、大型資本）─────────────
const socialPool = [
  {
    question: '「十大建設」是哪位總統任內推動的？',
    options: ['蔣介石', '蔣經國', '李登輝', '陳水扁'],
    answer: 1
  },
  {
    question: '十大建設中，哪一項是為了解決台灣交通問題？',
    options: ['中山高速公路', '台中港', '核能發電廠', '中油煉油廠'],
    answer: 0
  },
  {
    question: '十大建設大約是在哪個年代完成的？',
    options: ['1950年代', '1970年代', '1990年代', '2010年代'],
    answer: 1
  },
  {
    question: '為什麼大型連鎖店容易打敗傳統小店？',
    options: [
      '小店的東西比較貴',
      '大型連鎖店有規模經濟、資金多、行銷強',
      '小店的老闆比較懶',
      '政府只幫助大企業'
    ],
    answer: 1
  },
  {
    question: '1998年信義威秀（當時的華納威秀）進駐台北，帶來了什麼改變？',
    options: [
      '電影票變便宜了',
      '美式影城的聲光效果和複合式商場',
      '台灣人不再看電影',
      '所有戲院都變成連鎖店'
    ],
    answer: 1
  },
  {
    question: '「規模經濟」是什麼意思？',
    options: [
      '公司越大，員工越多',
      '生產數量越多，每一件的成本越低',
      '店面越大，生意越好',
      '連鎖店一定比小店賺錢'
    ],
    answer: 1
  },
  {
    question: '傳統社區戲院在1990年代末期面臨什麼困境？',
    options: [
      '電影變得不好看',
      '大型連鎖影城搶走客源，無法競爭',
      '政府禁止開戲院',
      '所有人都改看電視'
    ],
    answer: 1
  },
  {
    question: '十大建設對台灣經濟最大的貢獻是什麼？',
    options: [
      '讓農業變得更發達',
      '建立了現代化的基礎建設，幫助工業發展',
      '讓台灣的米可以出口',
      '讓所有人都有工作'
    ],
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

// ── 數學題庫（成長率）─────────────────────────
function generateMathQuestion() {
  const type = Math.floor(Math.random() * 3)

  if (type === 0) {
    // 計算成長率
    const old = (Math.floor(Math.random() * 4) + 2) * 50  // 100, 150, 200, 250
    const increase = [10, 20, 25, 50][Math.floor(Math.random() * 4)]
    const newVal = old + increase
    const rate = Math.round((increase / old) * 100)
    const wrong1 = increase
    const wrong2 = rate + 10
    const wrong3 = Math.round((newVal / old) * 100)
    const options = [String(rate), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(rate)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `去年營業額 ${old} 萬元，今年 ${newVal} 萬元，成長率約是多少%？（成長率 = 增加量 ÷ 原本數量 × 100%）`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 1) {
    // 已知成長率，求新數值
    const old = (Math.floor(Math.random() * 4) + 2) * 100  // 200, 300, 400, 500
    const rate = [10, 20, 25, 50][Math.floor(Math.random() * 4)]
    const newVal = old * (1 + rate / 100)
    const wrong1 = old + rate
    const wrong2 = old * (rate / 100)
    const wrong3 = old - (old * rate / 100)
    const options = [String(newVal), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(newVal)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `一家店去年營業額 ${old} 萬元，今年成長 ${rate}%，今年營業額是多少萬元？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else {
    // 求原本數量
    const rate = [20, 25, 50][Math.floor(Math.random() * 3)]
    const increase = (Math.floor(Math.random() * 4) + 2) * 10  // 20, 30, 40, 50
    const old = Math.round(increase / (rate / 100))
    const wrong1 = increase * (rate / 100)
    const wrong2 = increase + rate
    const wrong3 = increase * rate
    const options = [String(old), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(old)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `一家店今年比去年多賺 ${increase} 萬元，成長率是 ${rate}%，去年營業額是多少萬元？`,
      options,
      answer: options.indexOf(correctText)
    }
  }
}

// ── 科學題庫（交通工具能源轉換）────────────────
const sciencePool = [
  {
    question: '汽油車的能源轉換過程是？',
    options: [
      '電能 → 動能',
      '化學能 → 熱能 → 動能',
      '太陽能 → 電能 → 動能',
      '動能 → 化學能'
    ],
    answer: 1
  },
  {
    question: '電動車的能源轉換過程是？',
    options: [
      '化學能 → 動能',
      '電能 → 動能',
      '熱能 → 動能',
      '太陽能 → 動能'
    ],
    answer: 1
  },
  {
    question: '為什麼電動車被認為比汽油車環保？',
    options: [
      '電動車完全不需要能源',
      '電動車行駛時不直接排放廢氣，且能源轉換效率較高',
      '電動車速度比較慢',
      '電動車比較便宜'
    ],
    answer: 1
  },
  {
    question: '汽油燃燒時，主要產生什麼氣體造成空氣污染？',
    options: ['氧氣', '氮氣', '二氧化碳、一氧化碳、氮氧化物', '氫氣'],
    answer: 2
  },
  {
    question: '捷運和高鐵使用的能源是？',
    options: ['汽油', '柴油', '電力', '煤炭'],
    answer: 2
  },
  {
    question: '能源轉換的效率是什麼意思？',
    options: [
      '速度有多快',
      '有用的能量 ÷ 投入的總能量',
      '消耗了多少燃料',
      '車子有多重'
    ],
    answer: 1
  },
  {
    question: '為什麼大眾運輸（捷運、公車）比私人汽車更節能？',
    options: [
      '大眾運輸速度更快',
      '一次載很多人，平均每人消耗的能源較少',
      '大眾運輸不需要能源',
      '政府補助大眾運輸'
    ],
    answer: 1
  },
  {
    question: '腳踏車的能源來源是？',
    options: [
      '汽油',
      '電力',
      '人的肌肉（食物的化學能 → 動能）',
      '太陽能'
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

// ── Day 資料 ──────────────────────────────────────
const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '🏢',
  color: '#0891b2',
  title: '為什麼小店會消失？',
  units: [
    {
      id: 'w8d2-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '威秀的衝擊',
        sections: [
          {
            title: '今日文本段落',
            blocks: [
              {
                type: 'text',
                content: '昨天我們讀了1990年代民生戲院的黃金時代。今天，故事進入轉折點。'
              },
              {
                type: 'quote',
                content: '時代的巨輪無情地向前滾動。1998年，信義威秀（當時的華納威秀）強勢進駐台北東區。美式影城的聲光效果、複合式的商場經營，徹底改變了台灣人的觀影習慣。傳統的社區戲院的人潮，像退潮的海水一樣迅速散去。',
                author: '〈全台唯一社區戲院「新民生戲院」宣告落幕〉'
              },
              {
                type: 'text',
                content: '曾經人聲鼎沸的民生戲院，也因為跟不上時代變遷，最終拉下了鐵門。這場長達十多年的「中場休息」，直到2012年才被打破。\n\n1998年發生了什麼？為什麼大型連鎖影城能迅速打敗傳統戲院？這不只是電影院的故事，而是整個台灣產業轉型的縮影。'
              },
              {
                type: 'text',
                content: '🤔 今日問題：你家附近有沒有小店關門了，然後被連鎖店取代？為什麼會這樣？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w8d2-social',
      name: '社會｜十大建設與大型資本',
      icon: '🗺️',
      lesson: {
        title: '從基礎建設到規模經濟',
        sections: [
          {
            title: '十大建設：打造現代化台灣',
            blocks: [
              {
                type: 'text',
                content: '1973年，全球發生石油危機，台灣經濟受到嚴重衝擊。當時的行政院長蔣經國決定推動「十大建設」，用大規模的公共工程帶動經濟發展。\n\n十大建設包括什麼？\n\n🛣️ 交通：中山高速公路、台中港、高雄港、桃園國際機場\n🏭 工業：中國造船廠、中國鋼鐵廠\n⚡ 能源：核能發電廠、石化工業\n🚂 鐵路：鐵路電氣化'
              },
              {
                type: 'text',
                content: '這些建設在1970年代陸續完成，對台灣經濟有什麼影響？\n\n① 交通更便利：中山高速公路讓南北運輸時間大幅縮短，貨物流通更快\n② 工業升級：有了鋼鐵廠、造船廠，台灣可以生產更高價值的產品\n③ 電力充足：核能和火力發電廠提供穩定電力，支撐工廠運作\n④ 就業機會：建設期間創造大量工作，完成後吸引更多企業投資'
              },
              {
                type: 'text',
                content: '十大建設就像是為台灣經濟打地基。有了這些基礎設施，台灣才能從「小型加工廠」升級成「現代化工業國家」。'
              }
            ]
          },
          {
            title: '大型資本的時代',
            blocks: [
              {
                type: 'text',
                content: '1980–90年代，台灣經濟起飛的同時，「大型企業」和「連鎖店」也快速崛起。\n\n為什麼大企業容易打敗小店？關鍵是「規模經濟」。'
              },
              {
                type: 'text',
                content: '規模經濟是什麼？\n\n舉例：一家小麵包店一天烤100個麵包，每個成本20元；一家大型麵包工廠一天烤10,000個麵包，每個成本只要10元。\n\n為什麼？\n• 大量採購原料可以壓低價格\n• 機器設備的成本分攤到更多產品上\n• 可以聘請專業管理團隊提高效率\n\n結果：大企業可以用更低的價格賣產品，小店很難競爭。'
              },
              {
                type: 'text',
                content: '🎬 回到戲院的故事：\n\n1998年華納威秀為什麼能打敗民生戲院？\n\n① 資金雄厚：華納威秀背後是美國時代華納集團，可以投入大量資金裝潢、行銷\n② 規模經濟：全台灣開很多家分店，可以和片商談更好的條件\n③ 複合式經營：戲院樓下是百貨商場，吸引更多人潮\n④ 品牌效應：「去威秀看電影」變成一種時尚\n\n相比之下，民生戲院是獨立戲院，資金有限、無法大規模改裝，客源逐漸流失。'
              }
            ]
          },
          {
            title: '小店真的會全部消失嗎？',
            blocks: [
              {
                type: 'text',
                content: '大型連鎖店有優勢，但小店也有自己的價值：\n\n✨ 人情味：老闆認識每個客人，有溫度的服務\n✨ 特色商品：手工製作、獨一無二的產品\n✨ 社區連結：小店是社區的一部分，不只是消費場所\n\n2012年，陳清松重開新民生戲院，就是想保留這種「社區戲院」的溫度。明天我們會讀這段故事。'
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
      id: 'w8d2-math',
      name: '數學｜成長率',
      icon: '📐',
      lesson: {
        title: '用百分比看「變化」',
        sections: [
          {
            title: '什麼是成長率？',
            blocks: [
              {
                type: 'text',
                content: '昨天我們學了百分比的基本概念。今天要學更實用的應用：成長率。\n\n成長率（Growth Rate）= 增加的量 ÷ 原本的量 × 100%\n\n它告訴我們：相對於原本的數值，增加了百分之多少。'
              },
              {
                type: 'text',
                content: '例題：\n\n小明的麵包店去年營業額200萬元，今年250萬元，成長率是多少？\n\n步驟：\n① 算出增加量：250 - 200 = 50（萬元）\n② 除以原本的量：50 ÷ 200 = 0.25\n③ 轉成百分比：0.25 × 100% = 25%\n\n答案：今年比去年成長了25%。'
              }
            ]
          },
          {
            title: '為什麼要用成長率？',
            blocks: [
              {
                type: 'text',
                content: '看兩個例子：\n\nA店：去年100萬，今年120萬，增加20萬\nB店：去年500萬，今年520萬，增加20萬\n\n哪一家成長得比較好？\n\n如果只看「增加量」，兩家都是20萬。但看「成長率」：\n• A店：20 ÷ 100 = 20%\n• B店：20 ÷ 500 = 4%\n\nA店的成長率更高！因為它從更小的基礎成長了相同的量。'
              },
              {
                type: 'text',
                content: '成長率讓我們可以比較「規模不同」的事物，這在經濟分析中非常重要。'
              }
            ]
          },
          {
            title: '已知成長率，求新數值',
            blocks: [
              {
                type: 'text',
                content: '例題：\n\n一家店去年營業額300萬元，今年成長20%，今年營業額是多少？\n\n方法一：分步計算\n① 增加量 = 300 × 20% = 300 × 0.2 = 60（萬元）\n② 今年 = 300 + 60 = 360（萬元）\n\n方法二：直接算\n今年 = 300 × (1 + 20%) = 300 × 1.2 = 360（萬元）\n\n兩種方法都可以，方法二比較快。'
              },
              {
                type: 'text',
                content: '🎬 戲院情境：\n\n1998年威秀進駐前，台北有100家戲院。威秀進駐後，傳統戲院數量每年減少15%。\n\n第1年後：100 × (1 - 0.15) = 85家\n第2年後：85 × (1 - 0.15) = 72.25 ≈ 72家\n\n短短兩年，傳統戲院少了28家。這就是產業衝擊的速度。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (q, a) => parseInt(a) === parseInt(q.options[q.answer])
      }
    },
    {
      id: 'w8d2-science',
      name: '科學｜交通工具的能源轉換',
      icon: '🔬',
      lesson: {
        title: '從汽油到電動：能源怎麼變成動力？',
        sections: [
          {
            title: '能源轉換的基本概念',
            blocks: [
              {
                type: 'text',
                content: '上週我們學了力與運動的關係。但還有一個問題沒回答：讓汽車、火車、飛機動起來的「能量」從哪裡來？\n\n這就是能源轉換。\n\n能源轉換 = 把一種形式的能量轉變成另一種形式。\n\n常見的能量形式：\n• 化學能（食物、汽油、電池）\n• 熱能（燃燒、摩擦）\n• 動能（運動中的物體）\n• 電能（電流）\n• 太陽能（光）'
              }
            ]
          },
          {
            title: '汽油車：化學能 → 熱能 → 動能',
            blocks: [
              {
                type: 'text',
                content: '汽油車的引擎是怎麼運作的？\n\n① 化學能：汽油含有化學能\n② 燃燒產生熱能：汽油在引擎內燃燒，產生高溫高壓氣體\n③ 推動活塞產生動能：高壓氣體推動活塞上下運動，帶動曲軸旋轉\n④ 曲軸帶動輪子：車子向前跑\n\n這個過程會產生什麼？\n• 有用的：動能（讓車子跑）\n• 浪費的：熱能（引擎發燙）、聲音、廢氣（二氧化碳、一氧化碳）'
              },
              {
                type: 'text',
                content: '汽油車的能源效率大約只有20–30%，意思是100單位的汽油能量，只有20–30單位變成讓車子前進的動能，其他都浪費掉了。'
              }
            ]
          },
          {
            title: '電動車：電能 → 動能',
            blocks: [
              {
                type: 'text',
                content: '電動車的運作方式簡單得多：\n\n① 電池儲存電能\n② 電能驅動馬達旋轉（產生動能）\n③ 馬達帶動輪子\n\n沒有燃燒、沒有高溫高壓、沒有廢氣排放。\n\n電動車的能源效率可達80–90%，比汽油車高很多。'
              },
              {
                type: 'text',
                content: '為什麼電動車更環保？\n\n① 行駛時不排放廢氣（但發電廠可能排放）\n② 能源效率更高，浪費少\n③ 如果電力來自再生能源（太陽能、風能），碳排放更低\n\n不過電池製造和回收也有環境成本，所以「完全零污染」並不存在，只是污染比汽油車少很多。'
              }
            ]
          },
          {
            title: '大眾運輸：為什麼更節能？',
            blocks: [
              {
                type: 'text',
                content: '捷運、火車、公車也都需要能源（電力或柴油），為什麼說它們比私人汽車節能？\n\n答案：平均每人消耗的能源更少。\n\n舉例：\n• 一輛汽車載1人，消耗1單位能源 → 每人1單位\n• 一輛捷運載500人，消耗100單位能源 → 每人0.2單位\n\n所以政府鼓勵大家搭大眾運輸，不只減少塞車，也減少整體能源消耗和碳排放。'
              },
              {
                type: 'text',
                content: '🚲 最環保的交通工具是什麼？\n\n腳踏車和走路！\n\n人體把食物的化學能轉換成肌肉的動能，不需要額外的燃料。只要有路，就可以移動。明天我們會繼續討論電力的來源。'
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
      id: 'w8d2-review',
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
                content: '🗺️ 社會：十大建設（1970s）建立了台灣現代化的基礎建設。大型資本和連鎖店靠「規模經濟」打敗小店，1998年威秀衝擊就是典型例子。\n\n📐 數學：成長率 = 增加量 ÷ 原本量 × 100%。它讓我們看到「相對變化」，比絕對數字更能反映真實狀況。\n\n🔬 科學：汽油車（化學能→熱能→動能，效率20–30%），電動車（電能→動能，效率80–90%）。大眾運輸平均每人能耗更低。'
              },
              {
                type: 'text',
                content: '📖 文本：1998年威秀進駐，傳統戲院人潮「像退潮的海水一樣迅速散去」。民生戲院拉下鐵門，開始長達十多年的中場休息。'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：2012年，一個人決定逆風重開民生戲院。他為什麼這麼做？什麼是「堅持」？數學要學市占率，科學討論電力來源。'
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
