// src/data/weeks/week12/day2.js
// 第12週 - 第二天：飛魚的價值 / 價值怎麼改變？

// ==========================================
// 練習題生成器
// ==========================================

// 【數學】等量公理二兩步驟練習題庫
const mathQuestions = [
  // 2x÷3 = 8 型（先乘後除）
  {
    type: 'options',
    question: '2x ÷ 3 = 6，x 是多少？',
    options: ['4', '9', '12', '18'],
    answer: 1,
    displayAnswer: '9',
    explanation: '先兩邊乘 3：2x = 18；再兩邊除 2：x = 9'
  },
  {
    type: 'options',
    question: '3x ÷ 2 = 12，x 是多少？',
    options: ['6', '8', '18', '24'],
    answer: 1,
    displayAnswer: '8',
    explanation: '先兩邊乘 2：3x = 24；再兩邊除 3：x = 8'
  },
  {
    type: 'fill',
    question: '4x ÷ 5 = 8，x = ？',
    answer: '10',
    displayAnswer: '10',
    explanation: '先兩邊乘 5：4x = 40；再兩邊除 4：x = 10'
  },
  // x/2 + 3 = 8 型（混合加減乘除）
  {
    type: 'options',
    question: 'x ÷ 2 + 3 = 8，x 是多少？',
    options: ['5', '10', '16', '22'],
    answer: 1,
    displayAnswer: '10',
    explanation: '先兩邊減 3：x ÷ 2 = 5；再兩邊乘 2：x = 10'
  },
  {
    type: 'options',
    question: 'x ÷ 3 + 5 = 9，x 是多少？',
    options: ['4', '12', '27', '42'],
    answer: 1,
    displayAnswer: '12',
    explanation: '先兩邊減 5：x ÷ 3 = 4；再兩邊乘 3：x = 12'
  },
  {
    type: 'fill',
    question: 'x ÷ 4 + 6 = 10，x = ？',
    answer: '16',
    displayAnswer: '16',
    explanation: '先兩邊減 6：x ÷ 4 = 4；再兩邊乘 4：x = 16'
  },
  // 2x - 5 = 9 型
  {
    type: 'options',
    question: '3x - 4 = 11，x 是多少？',
    options: ['3', '5', '7', '9'],
    answer: 1,
    displayAnswer: '5',
    explanation: '先兩邊加 4：3x = 15；再兩邊除 3：x = 5'
  },
  {
    type: 'fill',
    question: '2x - 6 = 10，x = ？',
    answer: '8',
    displayAnswer: '8',
    explanation: '先兩邊加 6：2x = 16；再兩邊除 2：x = 8'
  },
  // 綜合題
  {
    type: 'options',
    question: '5x ÷ 2 = 15，x 是多少？',
    options: ['3', '6', '12', '30'],
    answer: 1,
    displayAnswer: '6',
    explanation: '先兩邊乘 2：5x = 30；再兩邊除 5：x = 6'
  },
  {
    type: 'options',
    question: '下列哪個步驟正確解出 4x ÷ 3 = 8？',
    options: [
      '先加 3，再除 4',
      '先乘 3，再除 4',
      '先除 4，再乘 3',
      '先減 3，再除 4'
    ],
    answer: 1,
    displayAnswer: '先乘 3，再除 4',
    explanation: '4x ÷ 3 × 3 = 8 × 3 → 4x = 24 → x = 6'
  }
]

const generateMathQuestion = () => {
  return mathQuestions[Math.floor(Math.random() * mathQuestions.length)]
}

// 【社會】半導體產業與科技轉型練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '新竹科學園區成立的主要目的是？',
    options: [
      '發展農業技術',
      '發展高科技產業',
      '保護自然環境',
      '建設住宅區'
    ],
    answer: 1,
    displayAnswer: '發展高科技產業'
  },
  {
    type: 'options',
    question: '台積電（TSMC）的主要業務是？',
    options: [
      '製造電腦',
      '晶圓代工',
      '生產手機',
      '設計軟體'
    ],
    answer: 1,
    displayAnswer: '晶圓代工'
  },
  {
    type: 'options',
    question: '「晶圓代工」是什麼意思？',
    options: [
      '替別人設計晶片',
      '替別人製造晶片',
      '替別人賣晶片',
      '替別人修理晶片'
    ],
    answer: 1,
    displayAnswer: '替別人製造晶片'
  },
  {
    type: 'options',
    question: '台灣被稱為「矽島」，「矽」指的是？',
    options: [
      '一種金屬礦產',
      '製造晶片的材料',
      '一種能源',
      '一種塑膠'
    ],
    answer: 1,
    displayAnswer: '製造晶片的材料'
  },
  {
    type: 'options',
    question: '台灣半導體產業成功的關鍵因素，下列何者「不是」？',
    options: [
      '政府投資設立科學園區',
      '人才培育與技術研發',
      '豐富的石油資源',
      '國際分工與代工模式'
    ],
    answer: 2,
    displayAnswer: '豐富的石油資源'
  },
  {
    type: 'options',
    question: '「產業群聚效應」是指？',
    options: [
      '工廠蓋在一起比較便宜',
      '相關產業集中，互相支援合作',
      '產業數量很多',
      '產業規模很大'
    ],
    answer: 1,
    displayAnswer: '相關產業集中，互相支援合作'
  },
  {
    type: 'options',
    question: '半導體產業的特色是？',
    options: [
      '勞力密集、附加價值低',
      '技術密集、附加價值高',
      '資源密集、污染嚴重',
      '土地密集、佔地廣大'
    ],
    answer: 1,
    displayAnswer: '技術密集、附加價值高'
  },
  {
    type: 'options',
    question: '為什麼台灣要發展高科技產業？',
    options: [
      '因為台灣土地多',
      '因為台灣人口多',
      '因為台灣缺乏天然資源，需要高附加價值產業',
      '因為台灣氣候適合'
    ],
    answer: 2,
    displayAnswer: '因為台灣缺乏天然資源，需要高附加價值產業'
  },
  {
    type: 'options',
    question: '台灣科技產業面臨的挑戰是？',
    options: [
      '人才外流、國際競爭',
      '工廠太多',
      '產品賣不出去',
      '員工太多'
    ],
    answer: 0,
    displayAnswer: '人才外流、國際競爭'
  },
  {
    type: 'options',
    question: '從飛魚漁業到半導體產業，台灣產業轉型的核心是？',
    options: [
      '從海洋到陸地',
      '從南部到北部',
      '從低附加價值到高附加價值',
      '從傳統到現代'
    ],
    answer: 2,
    displayAnswer: '從低附加價值到高附加價值'
  }
]

const generateSocialQuestion = () => {
  return socialQuestions[Math.floor(Math.random() * socialQuestions.length)]
}

// 【科學】生鏽現象練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '鐵生鏽是什麼變化？',
    options: ['物理變化', '化學變化', '兩者都是', '兩者都不是'],
    answer: 1,
    displayAnswer: '化學變化'
  },
  {
    type: 'options',
    question: '鐵生鏽需要哪些條件？',
    options: [
      '只要有空氣',
      '只要有水',
      '需要空氣和水',
      '需要高溫'
    ],
    answer: 2,
    displayAnswer: '需要空氣和水'
  },
  {
    type: 'options',
    question: '鐵鏽的主要成分是？',
    options: ['鐵', '氧化鐵', '鐵和水的混合物', '鐵和空氣的混合物'],
    answer: 1,
    displayAnswer: '氧化鐵'
  },
  {
    type: 'options',
    question: '生鏽是一種什麼反應？',
    options: ['溶解反應', '氧化反應', '中和反應', '分解反應'],
    answer: 1,
    displayAnswer: '氧化反應'
  },
  {
    type: 'options',
    question: '為什麼生鏽是化學變化？',
    options: [
      '因為鐵變色了',
      '因為鐵變硬了',
      '因為產生了氧化鐵這種新物質',
      '因為鐵變脆了'
    ],
    answer: 2,
    displayAnswer: '因為產生了氧化鐵這種新物質'
  },
  {
    type: 'options',
    question: '下列哪個環境最容易讓鐵生鏽？',
    options: [
      '乾燥的沙漠',
      '真空環境',
      '潮濕的海邊',
      '寒冷的冰庫'
    ],
    answer: 2,
    displayAnswer: '潮濕的海邊'
  },
  {
    type: 'options',
    question: '鐵鏽能還原成鐵嗎？',
    options: [
      '可以，用水洗就好',
      '可以，但需要化學方法',
      '不可以，化學變化不可逆',
      '看情況而定'
    ],
    answer: 1,
    displayAnswer: '可以，但需要化學方法',
    explanation: '化學變化雖然不能輕易復原，但可以用另一個化學反應還原'
  },
  {
    type: 'options',
    question: '「氧化」是指？',
    options: [
      '物質失去氧氣',
      '物質與氧氣結合',
      '物質變成氣體',
      '物質溶解在水中'
    ],
    answer: 1,
    displayAnswer: '物質與氧氣結合'
  },
  {
    type: 'options',
    question: '文章中「飛魚腥鮮轉化為腐味」和「鐵生鏽」的共同點是？',
    options: [
      '都是物理變化',
      '都是化學變化，產生新物質',
      '都可以輕易復原',
      '都需要高溫'
    ],
    answer: 1,
    displayAnswer: '都是化學變化，產生新物質'
  }
]

const generateScienceQuestion = () => {
  return scienceQuestions[Math.floor(Math.random() * scienceQuestions.length)]
}

// ==========================================
// Day 2 資料
// ==========================================

const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '💎',
  color: '#A23B72',
  title: '飛魚的價值',

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
            title: '閱讀文章（第二部分）',
            blocks: [
              {
                type: 'text',
                content: '今天我們繼續閱讀《飛魚》，看看飛魚捕撈背後的勞動與價值。'
              },
              {
                type: 'quote',
                content: '月輪自海面昇舉，銀光粼粼煥燦，星光隱退淡入，漸漸稀微，點點漁火熱鬧浮散在銀潔海面。天地宛如倒置，閃燦星辰全落在海面湧動。\n\n飛魚網淺淺浮在海面，網頭兩端各繫了一盞漁燈，彷若村子裏的男人全都下海來了，燈火密密湧湧，簡直如海上鬧市夜街。\n\n同個海流，同一面海，一樣的月光和飛魚，為何黑潮上游蘭嶼達悟人捕得的是飛魚祭的尊嚴，這裏捕撈的卻是打漁男人欲想填補的起碼自尊。',
                author: '廖鴻基，《飛魚》'
              },
              {
                type: 'quote',
                content: '大家都明白，再怎麼拼勢豐收，飛魚漁獲也值不了幾分錢，倒是全家大小都得賠上去忙著刨魚鱗、剖魚及曬魚乾。\n\n「魚少了還好，要不然整天剖魚剖到半夜，累到夫妻時常吵架。」一位年輕妻子細聲偷偷說。\n\n這類話在飛魚季只能細聲說，難得打漁男人在飛魚季內心裏得到的充實感覺，像膨脹的氣球，禁不起任何針尖話語。別看港堤邊一簍簍抬上岸的光鮮飛魚，那可是沿海打漁男人一年一度的驕傲和尊嚴。',
                author: '廖鴻基，《飛魚》'
              }
            ]
          },
          {
            title: '帶著問題開始今天的學習',
            blocks: [
              {
                type: 'text',
                content: '讀完之後，帶著這三個問題進入今天的課程：\n\n① 飛魚的「經濟價值」很低，但為什麼對漁民來說價值很高？\n\n② 什麼是「價值」？價錢和價值一樣嗎？\n\n③ 台灣從低價值產業轉向高價值產業，失去了什麼？得到了什麼？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — 台灣半導體產業
    // ==========================================
    {
      id: 'social-semiconductor',
      name: '社會：台灣半導體產業',
      icon: '💻',
      lesson: {
        title: '科技帶來什麼改變？',
        sections: [
          {
            title: '從飛魚到晶片：價值的巨大差異',
            blocks: [
              {
                type: 'text',
                content: '讓我們比較兩種產品的價值：\n\n**一簍飛魚（約20公斤）**\n• 捕撈：出海一晚，辛苦危險\n• 加工：全家剖魚曬乾，勞力密集\n• 售價：約500-1000元\n• 附加價值：低（主要是勞力）\n\n**一片晶圓（直徑30公分）**\n• 製造：自動化產線，技術密集\n• 加工：精密儀器，奈米級加工\n• 售價：數千到數萬美元\n• 附加價值：極高（技術、專利、設計）\n\n台灣選擇發展半導體產業，就是選擇「高附加價值」的道路。'
              }
            ]
          },
          {
            title: '新竹科學園區的誕生（1980）',
            blocks: [
              {
                type: 'text',
                content: '**背景**：\n1970年代，台灣面臨產業轉型壓力：\n• 勞力密集產業（紡織、電子組裝）開始外移\n• 國際競爭加劇，代工利潤降低\n• 需要發展「技術密集」產業\n\n**關鍵決策**：\n1980年，政府在新竹設立台灣第一個科學園區：\n• 提供土地、稅務優惠\n• 鄰近清華、交大兩所大學（人才來源）\n• 吸引海外學人回台創業\n\n**產業群聚效應**：\n科學園區不只是工廠集中地，更重要的是：\n• 上下游產業互相支援（設計→製造→封裝→測試）\n• 人才交流與技術擴散\n• 形成完整的產業鏈'
              }
            ]
          },
          {
            title: '台積電與晶圓代工模式（1987）',
            blocks: [
              {
                type: 'text',
                content: '**台積電的創新**：\n1987年，張忠謀創立台積電（TSMC），開創全球首創的「晶圓代工」模式。\n\n**什麼是晶圓代工？**\n傳統模式：\n• 設計公司自己設計、自己製造晶片（成本高、風險大）\n\n台積電模式：\n• 設計公司專心設計\n• 台積電專心製造\n• 分工合作，各自專精\n\n**為什麼成功？**\n• 降低設計公司的資本門檻（不用自己蓋工廠）\n• 台積電專注製造技術，達到世界頂尖水準\n• 不與客戶競爭（只代工，不設計自有品牌）\n• 形成「信任」的商業模式'
              }
            ]
          },
          {
            title: '從「矽島」到「護國神山」',
            blocks: [
              {
                type: 'text',
                content: '**台灣半導體產業的地位**：\n\n• 全球晶圓代工市占率：台灣超過60%\n• 先進製程（7奈米以下）：台積電接近90%市占\n• 台積電被稱為「護國神山」：\n  - 2023年營收超過2兆台幣\n  - 佔台灣GDP約5%\n  - 直接+間接雇用數十萬人\n\n**產業鏈完整**：\n台灣不只有台積電，還有完整的產業鏈：\n• IC設計：聯發科、瑞昱等\n• 製造：台積電、聯電等\n• 封裝測試：日月光、矽品等\n• 設備材料：應用材料、台灣應材等\n\n形成「矽島生態系」。'
              }
            ]
          },
          {
            title: '高科技產業的代價',
            blocks: [
              {
                type: 'text',
                content: '半導體產業雖然帶來巨大經濟價值，但也有代價：\n\n**1. 環境成本**\n• 大量用水（一座晶圓廠日用水量 = 一個小鎮）\n• 用電量極高（台積電用電量佔全台約6%）\n• 化學廢棄物處理\n\n**2. 社會成本**\n• 高工時、高壓力的工作文化\n• 城鄉差距擴大（資源集中科學園區）\n• 房價上漲（新竹、台中）\n\n**3. 風險集中**\n• 過度依賴單一產業\n• 地緣政治風險（台海局勢）\n• 國際競爭加劇（美國、中國也在發展半導體）\n\n**回到飛魚的問題**：\n當我們發展高科技產業時，傳統產業（漁業、農業、手工業）式微了。\n我們得到了「經濟價值」，但失去了什麼「文化價值」？\n\n這是台灣當代需要思考的問題。'
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
    // 單元二：數學 — 等量公理二（兩步驟）
    // ==========================================
    {
      id: 'math-two-steps',
      name: '數學：等量公理二進階',
      icon: '⚖️',
      lesson: {
        title: '兩步驟解題',
        sections: [
          {
            title: '複習：一步驟解題',
            blocks: [
              {
                type: 'text',
                content: '昨天我們學了一步驟的等式：\n\n• x ÷ 3 = 5 → 兩邊乘 3 → x = 15\n• 4x = 20 → 兩邊除 4 → x = 5\n\n今天我們要處理更複雜的情況：需要兩步驟才能解開的等式。'
              }
            ]
          },
          {
            title: '類型一：2x ÷ 3 = 6',
            blocks: [
              {
                type: 'text',
                content: '**例題**：2x ÷ 3 = 6，求 x。\n\n**步驟一**：先消除「÷3」\n兩邊同乘 3：\n2x ÷ 3 × 3 = 6 × 3\n2x = 18\n\n**步驟二**：再消除「2×」\n兩邊同除 2：\n2x ÷ 2 = 18 ÷ 2\nx = 9\n\n**驗算**：2 × 9 ÷ 3 = 18 ÷ 3 = 6 ✓\n\n**原則**：從外到內，一層一層剝開。'
              }
            ]
          },
          {
            title: '類型二：x ÷ 2 + 3 = 8',
            blocks: [
              {
                type: 'text',
                content: '**例題**：x ÷ 2 + 3 = 8，求 x。\n\n**步驟一**：先消除「+3」\n兩邊同減 3：\nx ÷ 2 + 3 - 3 = 8 - 3\nx ÷ 2 = 5\n\n**步驟二**：再消除「÷2」\n兩邊同乘 2：\nx ÷ 2 × 2 = 5 × 2\nx = 10\n\n**驗算**：10 ÷ 2 + 3 = 5 + 3 = 8 ✓\n\n**原則**：先處理加減，再處理乘除。\n（這是數學運算的「逆順序」）'
              }
            ]
          },
          {
            title: '類型三：2x - 5 = 9',
            blocks: [
              {
                type: 'text',
                content: '**例題**：2x - 5 = 9，求 x。\n\n**步驟一**：先消除「-5」\n兩邊同加 5：\n2x - 5 + 5 = 9 + 5\n2x = 14\n\n**步驟二**：再消除「2×」\n兩邊同除 2：\n2x ÷ 2 = 14 ÷ 2\nx = 7\n\n**驗算**：2 × 7 - 5 = 14 - 5 = 9 ✓'
              }
            ]
          },
          {
            title: '解題順序記憶法',
            blocks: [
              {
                type: 'text',
                content: '**記憶口訣**：「加減先，乘除後」\n\n如果等式中有多個運算：\n1. 先處理加法和減法（移項）\n2. 再處理乘法和除法（乘除消去）\n\n**為什麼？**\n因為這是運算順序的「相反」：\n• 計算時：先乘除，後加減\n• 解題時：先處理加減，後處理乘除\n\n就像穿衣服和脫衣服的順序相反：\n• 穿：先穿內衣，再穿外套\n• 脫：先脫外套，再脫內衣'
              }
            ]
          },
          {
            title: '跟課文連結：價值的計算',
            blocks: [
              {
                type: 'text',
                content: '假設一個漁民的飛魚收入模型：\n\n總收入 = (每天捕魚量 × 單價) - 成本\n\n如果我們知道：\n• 總收入 = 3000 元\n• 成本 = 1500 元\n• 每天捕魚量 = 30 公斤\n\n可以列式：30x - 1500 = 3000\n\n求解：\n步驟一：兩邊加 1500\n30x = 4500\n\n步驟二：兩邊除 30\nx = 150（元/公斤）\n\n這就是每公斤的平均單價。\n\n實際上，飛魚價格會隨著漁季變化，這個例子簡化了複雜的經濟問題。\n但數學模型可以幫助我們理解「價值如何計算」。'
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
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 生鏽現象
    // ==========================================
    {
      id: 'science-rust',
      name: '科學：生鏽與氧化',
      icon: '🔬',
      lesson: {
        title: '鐵為什麼會生鏽？',
        sections: [
          {
            title: '從飛魚變質到鐵生鏽',
            blocks: [
              {
                type: 'text',
                content: '昨天我們學了：\n• 飛魚「腥鮮轉化為腐味」是化學變化（微生物分解蛋白質）\n\n今天我們要學另一個重要的化學變化：**生鏽**。\n\n生鏽和腐敗有共同點：\n• 都是化學變化\n• 都產生新物質\n• 都不可輕易復原\n• 都會「降低價值」（腐敗的魚不能吃，生鏽的鐵變脆弱）'
              }
            ]
          },
          {
            title: '什麼是生鏽？',
            blocks: [
              {
                type: 'text',
                content: '**生鏽（Rusting）**：鐵與空氣中的氧氣和水反應，產生氧化鐵的過程。\n\n**化學式（簡化版）**：\n鐵（Fe）+ 氧氣（O₂）+ 水（H₂O）→ 氧化鐵（Fe₂O₃·nH₂O）\n\n**氧化鐵就是我們看到的「鐵鏽」**：\n• 顏色：紅褐色（俗稱「鐵銹紅」）\n• 質地：疏鬆、易碎\n• 特性：不導電、不堅固\n\n**重點**：鐵鏽≠鐵，它們是不同的物質！'
              }
            ]
          },
          {
            title: '生鏽的條件',
            blocks: [
              {
                type: 'text',
                content: '鐵生鏽需要**兩個條件同時存在**：\n\n1. **空氣（氧氣）**\n2. **水（潮濕）**\n\n**實驗驗證**：\n\n| 環境 | 有空氣 | 有水 | 會生鏽嗎？ |\n|------|-------|------|----------|\n| 乾燥空氣中 | ✓ | ✗ | ✗（很慢）|\n| 水中（無氧）| ✗ | ✓ | ✗（很慢）|\n| 潮濕空氣中 | ✓ | ✓ | ✓（快速）|\n| 真空中 | ✗ | ✗ | ✗ |\n\n**結論**：潮濕的海邊最容易生鏽！\n\n這也是為什麼文章中提到「海上鬧市夜街」——海邊的金屬工具特別容易生鏽。'
              }
            ]
          },
          {
            title: '什麼是「氧化」？',
            blocks: [
              {
                type: 'text',
                content: '**氧化（Oxidation）**：物質與氧氣結合的化學反應。\n\n生鏽是氧化反應的一種，但不是全部：\n\n**其他氧化反應的例子**：\n• 蘋果切開後變黃（果肉氧化）\n• 銅器表面變綠（銅氧化成銅綠）\n• 木材燃燒（碳氧化成二氧化碳）\n• 呼吸作用（葡萄糖氧化釋放能量）\n\n**氧化的特徵**：\n• 產生新物質\n• 通常伴隨能量變化（放熱或吸熱）\n• 改變物質的性質\n\n**生活中的氧化無所不在**——甚至我們吃飯呼吸，都是氧化反應！'
              }
            ]
          },
          {
            title: '為什麼鐵鏽是個問題？',
            blocks: [
              {
                type: 'text',
                content: '鐵鏽雖然只是化學變化的產物，但會帶來嚴重問題：\n\n**1. 強度降低**\n• 鐵鏽疏鬆易碎，承重能力大幅下降\n• 橋梁、建築的鋼筋生鏽→結構危險\n\n**2. 持續擴散**\n• 鐵鏽不會保護內部的鐵（不像銅綠）\n• 生鏽會越來越深，最後整根鐵都變成鐵鏽\n\n**3. 經濟損失**\n• 全球每年因鏽蝕損失數千億美元\n• 船舶、汽車、橋梁都需要防鏽\n\n**4. 無法復原**\n• 鐵鏽不能簡單地「變回」鐵\n• 需要高溫冶煉才能還原\n\n就像飛魚腐敗後無法變回新鮮，鐵生鏽後也無法輕易恢復。\n\n所以「預防生鏽」比「處理鏽蝕」更重要！'
              }
            ]
          },
          {
            title: '生鏽與產業的連結',
            blocks: [
              {
                type: 'text',
                content: '從生鏽這個現象，我們可以思考產業轉型的道理：\n\n**傳統漁業像鐵一樣**：\n• 容易「鏽蝕」（式微）\n• 因為環境改變（經濟、社會條件）\n• 如果不維護（創新、轉型），就會慢慢消失\n\n**高科技產業也會「氧化」**：\n• 今天的先進技術，明天可能過時\n• 半導體製程不斷進步（從微米→奈米→埃米）\n• 不創新，就會被淘汰\n\n**關鍵**：持續「防鏽」（創新、適應、轉型）\n\n明天我們會學：如何防止生鏽？如何讓產業「永續發展」？'
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
        title: '今日詞彙：價值與變化',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中，出現了這些重要詞彙：\n\n【產業科技類】\n• 晶圓：製造晶片的圓形矽晶片\n• 代工：替別人製造產品\n• 群聚效應：相關產業集中帶來的綜效\n• 護國神山：形容對國家經濟極重要的產業（指台積電）\n\n【化學類】\n• 氧化：物質與氧氣結合的反應\n• 氧化鐵：鐵生鏽的產物，即鐵鏽\n• 鏽蝕：金屬氧化變質的過程\n\n【價值類】\n• 尊嚴：自我價值的肯定\n• 充實感：內心感到滿足的狀態\n• 膨脹：體積或數量增大（可比喻情緒高漲）\n\n【文學類】\n• 粼粼：水面波光閃動的樣子\n• 煥燦：光彩明亮耀眼\n• 針尖話語：尖銳刺人的言語'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習，測試你對這些詞彙的理解。\n\n請特別注意：\n• 「氧化」是化學詞彙，不要和「老化」混淆\n• 「護國神山」是比喻用法，原本指守護國家的高山\n• 「尊嚴」vs「自尊」：尊嚴是自我價值，自尊是自我評價'
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
              question: '「晶圓」是什麼？',
              options: ['一種圓形餅乾', '製造晶片的矽晶片', '一種寶石', '電腦螢幕'],
              answer: 1,
              displayAnswer: '製造晶片的矽晶片'
            },
            {
              type: 'options',
              question: '「群聚效應」在文章中是指？',
              options: [
                '人群聚集在一起',
                '相關產業集中帶來互相支援',
                '產業數量很多',
                '產業規模很大'
              ],
              answer: 1,
              displayAnswer: '相關產業集中帶來互相支援'
            },
            {
              type: 'options',
              question: '「氧化」是什麼意思？',
              options: [
                '物質變成氣體',
                '物質與氧氣結合',
                '物質溶解在水中',
                '物質變老'
              ],
              answer: 1,
              displayAnswer: '物質與氧氣結合'
            },
            {
              type: 'options',
              question: '文章中「充實感覺，像膨脹的氣球」是什麼修辭？',
              options: ['排比', '比喻', '誇飾', '設問'],
              answer: 1,
              displayAnswer: '比喻'
            },
            {
              type: 'options',
              question: '「護國神山」形容的是？',
              options: [
                '真的很高的山',
                '對國家極重要的產業',
                '風景很美的山',
                '軍事基地'
              ],
              answer: 1,
              displayAnswer: '對國家極重要的產業'
            },
            {
              type: 'options',
              question: '「月輪自海面昇舉，銀光粼粼煥燦」描寫的是？',
              options: ['太陽升起', '月亮升起', '燈塔的光', '漁火'],
              answer: 1,
              displayAnswer: '月亮升起'
            },
            {
              type: 'options',
              question: '「針尖話語」是指？',
              options: [
                '很小聲的話',
                '尖銳刺人的言語',
                '精準的話',
                '細緻的描述'
              ],
              answer: 1,
              displayAnswer: '尖銳刺人的言語'
            },
            {
              type: 'options',
              question: '下列哪個詞語的用法「正確」？',
              options: [
                '這個蘋果已經氧化不能吃了',
                '他的想法已經氧化跟不上時代',
                '蘋果切開後會氧化變黃',
                '我需要氧化一下頭腦'
              ],
              answer: 2,
              displayAnswer: '蘋果切開後會氧化變黃'
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
                content: '今天開始時，我們帶著三個問題進入課程：\n\n① 飛魚的「經濟價值」很低，但為什麼對漁民來說價值很高？\n→ 因為價值不只是價錢，還包括尊嚴、認同感、文化意義\n\n② 什麼是「價值」？價錢和價值一樣嗎？\n→ 價錢是市場交易的數字，價值包含更多面向（文化、情感、社會意義）\n\n③ 台灣從低價值產業轉向高價值產業，失去了什麼？得到了什麼？\n→ 得到：經濟成長、國際地位\n→ 失去：傳統產業、文化記憶、某些生活方式\n\n請用今天學到的概念，用 3～5 句話寫下你對「價值」的理解。'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天的核心概念是「價值的轉變」：\n\n• **社會**：台灣從漁業到半導體，追求「高附加價值」產業\n• **數學**：兩步驟解方程式——從外到內，一層層解開\n• **科學**：生鏽是氧化反應，產生新物質（氧化鐵）\n• **文學**：廖鴻基寫出了「價錢」之外的「價值」\n\n跨學科連結：\n• 飛魚失去「經濟價值」（氧化、鏽蝕、式微）\n• 但保有「文化價值」（尊嚴、認同）\n• 如何在轉型中保存價值？這是永續發展的核心問題\n\n明天，我們會學：如何「防鏽」？如何讓價值「永續」？'
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
