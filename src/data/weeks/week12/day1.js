// src/data/weeks/week12/day1.js
// 第12週 - 第一天：飛魚的季節 / 台灣產業怎麼轉型？

// ==========================================
// 練習題生成器
// ==========================================

// 【數學】等量公理二基礎練習題庫（兩邊乘除同一數）
const mathQuestions = [
  // x÷2 = 6 型（一步驟除法）
  {
    type: 'options',
    question: 'x ÷ 3 = 5，x 是多少？',
    options: ['2', '8', '15', '18'],
    answer: 2,
    displayAnswer: '15',
    explanation: '等號兩邊同乘 3：x ÷ 3 × 3 = 5 × 3，所以 x = 15'
  },
  {
    type: 'options',
    question: 'x ÷ 4 = 7，x 是多少？',
    options: ['3', '11', '28', '32'],
    answer: 2,
    displayAnswer: '28',
    explanation: '等號兩邊同乘 4：x ÷ 4 × 4 = 7 × 4，所以 x = 28'
  },
  {
    type: 'fill',
    question: 'x ÷ 5 = 8，x = ？',
    answer: '40',
    displayAnswer: '40',
    explanation: '等號兩邊同乘 5：x = 8 × 5 = 40'
  },
  // 3x = 15 型（一步驟乘法）
  {
    type: 'options',
    question: '2x = 12，x 是多少？',
    options: ['4', '6', '10', '14'],
    answer: 1,
    displayAnswer: '6',
    explanation: '等號兩邊同除 2：2x ÷ 2 = 12 ÷ 2，所以 x = 6'
  },
  {
    type: 'options',
    question: '5x = 35，x 是多少？',
    options: ['5', '7', '30', '40'],
    answer: 1,
    displayAnswer: '7',
    explanation: '等號兩邊同除 5：5x ÷ 5 = 35 ÷ 5，所以 x = 7'
  },
  {
    type: 'fill',
    question: '4x = 20，x = ？',
    answer: '5',
    displayAnswer: '5',
    explanation: '等號兩邊同除 4：x = 20 ÷ 4 = 5'
  },
  {
    type: 'options',
    question: '6x = 48，x 是多少？',
    options: ['6', '8', '42', '54'],
    answer: 1,
    displayAnswer: '8',
    explanation: '等號兩邊同除 6：x = 48 ÷ 6 = 8'
  },
  // 混合型
  {
    type: 'options',
    question: 'x ÷ 6 = 4，x 是多少？',
    options: ['10', '18', '24', '30'],
    answer: 2,
    displayAnswer: '24',
    explanation: '等號兩邊同乘 6：x = 4 × 6 = 24'
  },
  {
    type: 'fill',
    question: '8x = 56，x = ？',
    answer: '7',
    displayAnswer: '7',
    explanation: '等號兩邊同除 8：x = 56 ÷ 8 = 7'
  },
  {
    type: 'options',
    question: '下列哪個等式運算正確？',
    options: [
      'x ÷ 3 = 9 → x = 9 - 3 = 6',
      '4x = 16 → x = 16 + 4 = 20',
      'x ÷ 2 = 10 → x = 10 × 2 = 20',
      '5x = 25 → x = 25 - 5 = 20'
    ],
    answer: 2,
    displayAnswer: 'x ÷ 2 = 10 → x = 10 × 2 = 20',
    explanation: '除法要用乘法還原，乘法要用除法還原'
  }
]

const generateMathQuestion = () => {
  return mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
}

// 【社會】台灣產業變遷練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '戰後台灣最早發展的產業是？',
    options: ['半導體產業', '農業與輕工業', '重工業', '電子代工'],
    answer: 1,
    displayAnswer: '農業與輕工業'
  },
  {
    type: 'options',
    question: '1950-1960年代，台灣主要出口什麼產品？',
    options: ['晶片', '糖、米、香蕉', '汽車', '電腦'],
    answer: 1,
    displayAnswer: '糖、米、香蕉'
  },
  {
    type: 'options',
    question: '1970-1980年代，台灣發展出什麼產業？',
    options: ['傳統農業', '紡織、塑膠、電子組裝', '綠能產業', '觀光業'],
    answer: 1,
    displayAnswer: '紡織、塑膠、電子組裝'
  },
  {
    type: 'options',
    question: '新竹科學園區成立於哪一年？',
    options: ['1970年', '1980年', '1990年', '2000年'],
    answer: 1,
    displayAnswer: '1980年'
  },
  {
    type: 'options',
    question: '台積電（TSMC）成立於哪一年？',
    options: ['1977年', '1987年', '1997年', '2007年'],
    answer: 1,
    displayAnswer: '1987年'
  },
  {
    type: 'options',
    question: '台灣被稱為「矽島」是因為什麼產業？',
    options: ['煤礦業', '農業', '半導體產業', '紡織業'],
    answer: 2,
    displayAnswer: '半導體產業'
  },
  {
    type: 'options',
    question: '為什麼傳統漁業在台灣逐漸式微？',
    options: [
      '魚類絕種了',
      '漁獲價格下降、年輕人不願從事',
      '政府禁止捕魚',
      '海洋污染太嚴重'
    ],
    answer: 1,
    displayAnswer: '漁獲價格下降、年輕人不願從事'
  },
  {
    type: 'options',
    question: '台灣產業轉型的主要方向是？',
    options: [
      '從科技回到農業',
      '從高科技轉向傳統工業',
      '從低附加價值轉向高附加價值',
      '從出口轉向內銷'
    ],
    answer: 2,
    displayAnswer: '從低附加價值轉向高附加價值'
  },
  {
    type: 'options',
    question: '「附加價值」是什麼意思？',
    options: [
      '產品的重量',
      '生產過程中增加的價值',
      '產品的數量',
      '產品的顏色'
    ],
    answer: 1,
    displayAnswer: '生產過程中增加的價值'
  },
  {
    type: 'options',
    question: '下列哪個是高附加價值產品？',
    options: ['生米', '晶片', '原木', '原油'],
    answer: 1,
    displayAnswer: '晶片'
  }
]

const generateSocialQuestion = () => {
  return socialQuestions[Math.floor(Math.random() * socialQuestions.length)]
}

// 【科學】物理變化vs化學變化練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '下列哪個是「物理變化」？',
    options: ['木材燃燒', '冰塊融化', '鐵釘生鏽', '食物腐敗'],
    answer: 1,
    displayAnswer: '冰塊融化'
  },
  {
    type: 'options',
    question: '下列哪個是「化學變化」？',
    options: ['水蒸發', '糖溶解', '紙張燃燒', '玻璃破裂'],
    answer: 2,
    displayAnswer: '紙張燃燒'
  },
  {
    type: 'options',
    question: '物理變化和化學變化最大的差別是？',
    options: [
      '物理變化比較慢',
      '化學變化會產生新物質',
      '物理變化需要加熱',
      '化學變化一定有顏色變化'
    ],
    answer: 1,
    displayAnswer: '化學變化會產生新物質'
  },
  {
    type: 'options',
    question: '「飛魚曬成魚乾」是什麼變化？',
    options: ['物理變化', '化學變化', '兩者都是', '兩者都不是'],
    answer: 2,
    displayAnswer: '化學變化',
    explanation: '水分蒸發+蛋白質變性+微生物分解，產生新物質'
  },
  {
    type: 'options',
    question: '「飛魚剖開展平」是什麼變化？',
    options: ['物理變化', '化學變化', '兩者都是', '兩者都不是'],
    answer: 0,
    displayAnswer: '物理變化',
    explanation: '只改變形狀，沒有產生新物質'
  },
  {
    type: 'options',
    question: '「飛魚腥鮮轉化為腐味」是什麼變化？',
    options: ['物理變化', '化學變化', '兩者都是', '兩者都不是'],
    answer: 1,
    displayAnswer: '化學變化',
    explanation: '微生物分解蛋白質，產生新的氣味物質'
  },
  {
    type: 'options',
    question: '下列哪個變化「可以輕易復原」？',
    options: ['木材燃燒', '水結冰', '食物煮熟', '鐵生鏽'],
    answer: 1,
    displayAnswer: '水結冰',
    explanation: '冰加熱就變回水，這是物理變化的特徵'
  },
  {
    type: 'options',
    question: '化學變化常伴隨的現象，下列何者「不一定」發生？',
    options: ['產生新物質', '顏色改變', '放熱或吸熱', '產生氣體'],
    answer: 1,
    displayAnswer: '顏色改變',
    explanation: '化學變化一定產生新物質，但不一定有明顯的顏色、氣體或溫度變化'
  },
  {
    type: 'options',
    question: '「飛魚用米酒洗去腐味」能復原嗎？',
    options: [
      '能，因為只是物理變化',
      '不能，因為蛋白質已經分解',
      '能，只要用水沖洗',
      '看情況而定'
    ],
    answer: 1,
    displayAnswer: '不能，因為蛋白質已經分解'
  }
]

const generateScienceQuestion = () => {
  return scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)]
}

// ==========================================
// Day 1 資料
// ==========================================

const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🐟',
  color: '#2E86AB',
  title: '飛魚的季節',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌊',
      lesson: {
        title: '《飛魚》廖鴻基',
        sections: [
          {
            title: '閱讀文章（第一部分）',
            blocks: [
              {
                type: 'text',
                content: '請閱讀以下選段，想想看：飛魚季節對阿美族人來說代表什麼？'
              },
              {
                type: 'quote',
                content: '飛魚群抖波顫起海面，薄翅開展，貼海四散滑翔，海面紛紛匆匆，如黃昏時刻原野上漫飛的小昆蟲。\n\n又是飛魚季節。\n\n不管南方小島達悟人的飛魚祭是否熾燎火荼地進行著，畢竟同個海流，同一面海，飛魚並未遺漏東海岸阿美族村落。\n\n夕陽薄暮，東海岸阿美族男人興致勃勃地紛紛將小膠筏推下浪頭，晚霞映照出男人黧黑、粗獷、極負自信的奕奕神采。在台灣沿岸漁撈日漸式微的今天，飛魚帶給了阿美族男人豐年祭才有的光彩。',
                author: '廖鴻基，《飛魚》'
              },
              {
                type: 'quote',
                content: '職業漁船很少下海抓飛魚，他們說：「無采工。」除了漁汛初期頭班靠岸的飛魚能夠賣得好價錢，再過來，魚價如陡降的坡梯一路滑落到漁季結束。出海打漁的男人，漁獲是他們無價的勳章，一年到頭能夠如願讓他們滿載豐收的機會，大概只剩下飛魚季節而已。',
                author: '廖鴻基，《飛魚》'
              }
            ]
          },
          {
            title: '帶著問題開始今天的學習',
            blocks: [
              {
                type: 'text',
                content: '讀完之後，帶著這三個問題進入今天的課程（不需要現在回答）：\n\n① 為什麼職業漁船說飛魚「無采工」？\n\n② 為什麼阿美族男人還是要出海捕飛魚？\n\n③ 「沿岸漁撈日漸式微」代表什麼？'
              }
            ]
          }
        ]
      },
      practice: null  // 開場不做練習，直接進入下一單元
    },

    // ==========================================
    // 單元一：社會 — 台灣產業變遷
    // ==========================================
    {
      id: 'social-industry',
      name: '社會：台灣產業變遷',
      icon: '🏭',
      lesson: {
        title: '台灣產業怎麼轉型？',
        sections: [
          {
            title: '從飛魚看產業變化',
            blocks: [
              {
                type: 'text',
                content: '文章中提到：「職業漁船很少下海抓飛魚，他們說：無采工（不划算）。」\n\n為什麼不划算？\n• 頭班飛魚價格好，之後「魚價如陡降的坡梯」\n• 捕魚、剖魚、曬魚需要大量勞力\n• 最後賣出的價格很低，「值不了幾分錢」\n\n這反映了傳統產業面臨的困境：勞力密集、附加價值低、收入不穩定。\n\n台灣許多產業都經歷了類似的轉型壓力。'
              }
            ]
          },
          {
            title: '戰後台灣產業變遷時間軸',
            blocks: [
              {
                type: 'text',
                content: '**第一階段（1950-1960年代）：農業時代**\n• 主要產業：稻米、蔗糖、香蕉\n• 特色：勞力密集、附加價值低\n• 出口：「米糖經濟」支撐台灣\n\n**第二階段（1970-1980年代）：輕工業時代**\n• 主要產業：紡織、塑膠、玩具、電子組裝\n• 特色：「加工出口」、代工製造\n• 成就：「台灣錢淹腳目」的經濟奇蹟\n\n**第三階段（1980-2000年代）：高科技時代**\n• 1980：新竹科學園區成立\n• 1987：台積電成立\n• 特色：從「製造」轉向「設計」和「研發」\n• 成就：台灣成為「矽島」'
              }
            ]
          },
          {
            title: '什麼是「附加價值」？',
            blocks: [
              {
                type: 'text',
                content: '附加價值（Added Value）= 生產過程中增加的價值\n\n舉例：\n• 捕到生魚 → 價值 10 元（低附加價值）\n• 加工成魚乾 → 價值 30 元（附加價值 +20）\n• 做成精緻料理包 → 價值 100 元（附加價值 +90）\n\n台灣產業轉型的核心：從低附加價值轉向高附加價值\n\n例如：\n• 種稻米（低）→ 設計晶片（高）\n• 組裝電腦（低）→ 自主品牌（高）\n• 代工（低）→ 研發專利（高）'
              }
            ]
          },
          {
            title: '為什麼傳統產業式微？',
            blocks: [
              {
                type: 'text',
                content: '1. **人力成本上升**\n   台灣勞工薪資提高，勞力密集產業轉往東南亞\n\n2. **年輕人不願從事**\n   「剖魚剖到半夜，累到夫妻時常吵架」\n   辛苦、收入低、沒尊嚴\n\n3. **市場競爭激烈**\n   全球化時代，低價競爭無法生存\n\n4. **技術進步**\n   機器取代人力，傳統技能不再有優勢\n\n但是！文章也告訴我們：\n「漁獲是他們無價的勳章」——工作的意義不只是賺錢，還有尊嚴、認同感、和土地的連結。'
              }
            ]
          },
          {
            title: '台灣現在的產業挑戰',
            blocks: [
              {
                type: 'text',
                content: '今天的台灣面臨新的轉型壓力：\n\n• 半導體產業雖然先進，但高度依賴單一產業\n• 綠能、AI、生技等新興產業正在發展\n• 傳統產業需要「升級」而非「消失」\n\n例如：\n• 傳統漁業 → 觀光漁業、生態導覽\n• 傳統農業 → 有機農業、精緻農業\n• 傳統工藝 → 文創產業\n\n產業轉型不是「拋棄過去」，而是「賦予新的價值」。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateSocialQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元二：數學 — 等量公理二（基礎）
    // ==========================================
    {
      id: 'math-equality-principle',
      name: '數學：等量公理二',
      icon: '⚖️',
      lesson: {
        title: '等量公理二：兩邊乘除同一數',
        sections: [
          {
            title: '複習：等量公理一',
            blocks: [
              {
                type: 'text',
                content: '上週（W11）我們學過等量公理一：\n\n**等號兩邊加（或減）同一個數，等式不變。**\n\n例如：x + 3 = 7\n等號兩邊都減 3：x + 3 - 3 = 7 - 3\n得到：x = 4\n\n這週我們要學等量公理二。'
              }
            ]
          },
          {
            title: '等量公理二：乘除同一數',
            blocks: [
              {
                type: 'text',
                content: '**等量公理二：等號兩邊乘（或除）同一個數（不為 0），等式不變。**\n\n為什麼？\n因為等號的意義是「兩邊相等」，如果兩邊做相同的運算，相等關係不會改變。\n\n就像天秤：\n如果兩邊重量相等，同時把兩邊都變成 2 倍（或減半），天秤依然平衡。'
              }
            ]
          },
          {
            title: '應用一：x ÷ a = b 型',
            blocks: [
              {
                type: 'text',
                content: '例題：x ÷ 3 = 5，求 x。\n\n**思考**：x 除以 3 等於 5，那 x 是多少？\n\n**做法**：等號兩邊同乘 3\nx ÷ 3 × 3 = 5 × 3\nx = 15\n\n**驗算**：15 ÷ 3 = 5 ✓\n\n記憶技巧：除法用乘法「還原」'
              }
            ]
          },
          {
            title: '應用二：ax = b 型',
            blocks: [
              {
                type: 'text',
                content: '例題：4x = 20，求 x。\n\n**思考**：4 乘以 x 等於 20，那 x 是多少？\n\n**做法**：等號兩邊同除 4\n4x ÷ 4 = 20 ÷ 4\nx = 5\n\n**驗算**：4 × 5 = 20 ✓\n\n記憶技巧：乘法用除法「還原」'
              }
            ]
          },
          {
            title: '注意事項',
            blocks: [
              {
                type: 'text',
                content: '1. **不能除以 0**\n   0 不能當除數，所以等量公理二的條件是「除以一個不為 0 的數」\n\n2. **等號兩邊都要做**\n   不能只改一邊！\n   錯誤：x ÷ 2 = 10 → x = 10（只把左邊乘 2）\n   正確：x ÷ 2 = 10 → x = 10 × 2 = 20（兩邊都乘 2）\n\n3. **記得驗算**\n   把答案代回原式檢查，確保沒算錯'
              }
            ]
          },
          {
            title: '跟課文連結',
            blocks: [
              {
                type: 'text',
                content: '文章中提到：「魚價如陡降的坡梯一路滑落」\n\n假設頭班飛魚一斤 100 元，之後每天價格變成前一天的一半：\n• 第 1 天：100 元\n• 第 2 天：100 ÷ 2 = 50 元\n• 第 3 天：50 ÷ 2 = 25 元\n• 第 4 天：25 ÷ 2 = 12.5 元\n\n如果我們知道第 x 天的價格，想推算回第 1 天，就要用「乘法還原」。\n\n這就是等量公理的應用——用反向運算還原未知數。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            // fill 題：去掉空白後比較
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 物理變化 vs 化學變化
    // ==========================================
    {
      id: 'science-changes',
      name: '科學：物質的變化',
      icon: '🔬',
      lesson: {
        title: '物理變化 vs 化學變化',
        sections: [
          {
            title: '從飛魚曬乾看變化',
            blocks: [
              {
                type: 'text',
                content: '文章中描寫了飛魚變成魚乾的過程：\n\n「剖魚得刀法俐落......翻身剁掉魚翅，飛魚便平展身體不再飛翔。」\n\n「魚乾披了滿厝間，蒼蠅嚶嚶飛，稍稍疏忽，腥鮮轉化為腐味。」\n\n這些「變化」在科學上可以分成兩類：物理變化和化學變化。'
              }
            ]
          },
          {
            title: '什麼是物理變化？',
            blocks: [
              {
                type: 'text',
                content: '**物理變化（Physical Change）**：\n物質的形狀、大小、狀態改變，但**本質沒有改變**，**沒有產生新物質**。\n\n特徵：\n• 通常可以復原\n• 沒有產生新的物質\n• 例如：切割、溶解、融化、蒸發、凝固\n\n飛魚的例子：\n• 「剖開」「展平」「剁掉魚翅」→ 形狀改變，但還是魚肉\n• 這是物理變化'
              }
            ]
          },
          {
            title: '什麼是化學變化？',
            blocks: [
              {
                type: 'text',
                content: '**化學變化（Chemical Change）**：\n物質的**本質改變**，**產生新的物質**。\n\n特徵：\n• 通常不可復原\n• 產生新的物質\n• 可能伴隨顏色、氣味、溫度變化\n• 例如：燃燒、生鏽、腐敗、煮熟\n\n飛魚的例子：\n• 「腥鮮轉化為腐味」→ 微生物分解蛋白質，產生新的氣味物質\n• 曬乾過程中蛋白質變性\n• 這是化學變化'
              }
            ]
          },
          {
            title: '如何區分？',
            blocks: [
              {
                type: 'text',
                content: '判斷技巧：\n\n**問自己：有沒有產生新物質？**\n\n• 有 → 化學變化\n• 沒有 → 物理變化\n\n常見例子對照：\n\n| 物理變化 | 化學變化 |\n|---------|--------|\n| 冰融化成水 | 木材燃燒成灰 |\n| 糖溶解在水中 | 食物煮熟 |\n| 玻璃打破 | 鐵釘生鏽 |\n| 紙撕破 | 紙張燃燒 |\n| 水蒸發 | 食物腐敗 |'
              }
            ]
          },
          {
            title: '飛魚曬乾的複雜性',
            blocks: [
              {
                type: 'text',
                content: '飛魚曬成魚乾，其實包含了**兩種變化**：\n\n**物理變化**：\n• 水分蒸發（水從液體變氣體）\n• 魚肉收縮變硬\n\n**化學變化**：\n• 蛋白質在陽光下變性（結構改變）\n• 微生物分解（如果保存不當）\n• 脂肪氧化（產生特殊風味）\n\n所以「曬魚乾」主要是化學變化——因為魚乾的味道、質地、營養都和新鮮魚不同，已經產生新物質了。\n\n而且，你無法把魚乾「還原」成新鮮的魚。'
              }
            ]
          },
          {
            title: '生活中的應用',
            blocks: [
              {
                type: 'text',
                content: '理解物質變化，可以幫助我們：\n\n1. **保存食物**\n   • 冷凍（物理）可以復原\n   • 腐敗（化學）無法復原\n   → 要避免化學變化發生\n\n2. **料理**\n   • 切菜（物理）不改變營養\n   • 煮熟（化學）改變營養和消化性\n   → 選擇適合的烹調方式\n\n3. **環保**\n   • 回收紙張（物理加工）\n   • 燒垃圾（化學變化）產生污染\n   → 優先選擇可逆的處理方式\n\n下一個單元，我們會學「生鏽」這個重要的化學變化。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateScienceQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元四：語文 — 詞彙練習
    // ==========================================
    {
      id: 'chinese-vocabulary',
      name: '語文：詞彙練習',
      icon: '✍️',
      lesson: {
        title: '今日詞彙：產業與變化',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中，出現了這些重要詞彙：\n\n【產業經濟類】\n• 式微：逐漸衰落、不再興盛\n• 附加價值：生產過程中增加的價值\n• 代工：替別人加工製造產品\n• 轉型：改變原有的型態或方向\n\n【變化類】\n• 物理變化：形狀改變但本質不變\n• 化學變化：產生新物質的變化\n• 變性：蛋白質結構改變\n• 氧化：物質與氧氣結合的化學反應\n\n【文學類】\n• 黧黑：皮膚因日曬而變得黑\n• 奕奕：精神飽滿的樣子\n• 無采工：台語，不划算、沒有利潤\n• 勳章：象徵榮譽的標記（比喻義）'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習，測試你對這些詞彙的理解。\n\n請特別注意：\n• 「式微」不是「失敗」，而是「逐漸衰落」\n• 「附加價值」重點在「增加的價值」\n• 「變性」是化學詞彙，不要和生活中的其他意思混淆'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const vocabQuestions = [
            {
              type: 'options',
              question: '「沿岸漁撈日漸式微」中的「式微」是什麼意思？',
              options: ['完全消失', '逐漸衰落', '突然失敗', '暫時停止'],
              answer: 1,
              displayAnswer: '逐漸衰落'
            },
            {
              type: 'options',
              question: '「無采工」在文章中是什麼意思？',
              options: ['沒有工人', '工作很辛苦', '不划算', '很危險'],
              answer: 2,
              displayAnswer: '不划算'
            },
            {
              type: 'options',
              question: '「附加價值」是指？',
              options: ['產品的原料價格', '生產過程中增加的價值', '產品的最終售價', '產品的數量'],
              answer: 1,
              displayAnswer: '生產過程中增加的價值'
            },
            {
              type: 'options',
              question: '「漁獲是他們無價的勳章」，這句話的意思是？',
              options: [
                '漁獲可以換勳章',
                '漁獲很貴重',
                '漁獲象徵著榮譽和尊嚴',
                '漁獲可以賣很多錢'
              ],
              answer: 2,
              displayAnswer: '漁獲象徵著榮譽和尊嚴'
            },
            {
              type: 'options',
              question: '下列哪個詞語的用法「正確」？',
              options: [
                '這個產業已經式微很久了',
                '他很式微所以沒人喜歡',
                '這道菜式微得很好吃',
                '式微的天氣讓人不舒服'
              ],
              answer: 0,
              displayAnswer: '這個產業已經式微很久了'
            },
            {
              type: 'options',
              question: '「蛋白質變性」是什麼意思？',
              options: [
                '蛋白質變得很硬',
                '蛋白質的結構改變',
                '蛋白質消失了',
                '蛋白質變成液體'
              ],
              answer: 1,
              displayAnswer: '蛋白質的結構改變'
            },
            {
              type: 'options',
              question: '文章中「黧黑、粗獷、極負自信的奕奕神采」描寫的是？',
              options: ['飛魚的樣子', '漁船的外觀', '阿美族男人的樣子', '大海的顏色'],
              answer: 2,
              displayAnswer: '阿美族男人的樣子'
            },
            {
              type: 'options',
              question: '「產業轉型」是指？',
              options: [
                '產業完全消失',
                '產業改變原有的型態或方向',
                '產業變大',
                '產業搬到別的地方'
              ],
              answer: 1,
              displayAnswer: '產業改變原有的型態或方向'
            }
          ]
          return vocabQuestions[Math.floor(Math.random() * vocabQuestions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 收尾：回應開場問題
    // ==========================================
    {
      id: 'closing-reflection',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '回顧與反思',
        sections: [
          {
            title: '回到開場的問題',
            blocks: [
              {
                type: 'text',
                content: '今天開始時，我們帶著三個問題進入課程：\n\n① 為什麼職業漁船說飛魚「無采工」？\n→ 因為附加價值低，勞力密集，收入不穩定\n\n② 為什麼阿美族男人還是要出海捕飛魚？\n→ 因為「漁獲是他們無價的勳章」——尊嚴、認同感、和土地的連結\n\n③ 「沿岸漁撈日漸式微」代表什麼？\n→ 台灣傳統產業面臨轉型壓力，年輕人不願從事，產業逐漸衰落\n\n現在，請用今天學到的概念，用 3～5 句話寫下你的想法。'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天的核心概念是「變化與轉型」：\n\n• **社會**：台灣產業從農業→工業→科技業的轉型歷程\n• **數學**：等量公理二——用乘除法「還原」未知數\n• **科學**：物理變化（形狀改變）vs 化學變化（產生新物質）\n• **文學**：廖鴻基用細膩的文字，記錄了傳統漁業式微的哀愁\n\n跨學科連結：\n產業「轉型」、等式「轉換」、物質「轉化」——都是「變」，但核心原則「不變」。\n\n明天，我們會繼續深入——科技產業帶來什麼改變？生鏽又是什麼變化？'
              }
            ]
          }
        ]
      },
      practice: null  // 回顧單元不做練習，直接完成今日學習
    }

  ]
}

export default day1
