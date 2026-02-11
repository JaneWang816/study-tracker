// src/data/weeks/week03/day3.js
// W3 Day3：時間怎麼流動？

// ===== 社會：農曆與節氣 =====
const generateCalendarQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '農曆是一種什麼樣的曆法？',
      options: [
        '純粹依照太陽運行設計的曆法',
        '純粹依照月亮圓缺設計的曆法',
        '同時考慮月亮圓缺和太陽運行的「陰陽合曆」',
        '依照星座位置設計的曆法'
      ],
      answer: 2,
      explanation: '農曆以月相決定每個月的日期（陰曆），同時以閏月校正和太陽年的差距（陽曆），所以是「陰陽合曆」。'
    },
    {
      type: 'choice',
      question: '二十四節氣中，「穀雨」這個節氣和農業有什麼關係？',
      options: [
        '表示開始收割穀物',
        '表示雨水滋潤穀物播種的時節，是春天播種的重要節氣',
        '表示穀物需要開始澆水',
        '表示穀倉要開始清理'
      ],
      answer: 1,
      explanation: '穀雨在農曆春季，「雨生百穀」，是春播的關鍵節氣，此時降雨增多，非常適合播種。'
    },
    {
      type: 'choice',
      question: '農曆為什麼需要設置「閏月」？',
      options: [
        '因為有些年份雨量太多，需要加一個月',
        '因為農曆以月相為基礎，每年比太陽年短約11天，累積後需加閏月校正',
        '因為皇帝的命令，每隔幾年加一個月慶祝',
        '閏月只是傳統習俗，沒有科學根據'
      ],
      answer: 1,
      explanation: '農曆一年12個月約354天，太陽年約365天，每年差約11天，三年累積約33天，因此每2-3年加一個閏月來補足差距。'
    },
    {
      type: 'choice',
      question: '嘉南大圳的「輪灌制度」是按照什麼來決定灌溉時程？',
      options: [
        '按照地主的財富多寡',
        '完全隨機決定',
        '按照農曆節氣與作物生長需求，有固定的輪灌時程表',
        '只有在下雨時才灌溉'
      ],
      answer: 2,
      explanation: '嘉南大圳的水量有限，農業單位按照節氣和作物需求制定輪灌時程，讓每塊農田都能在適當時機得到水源。'
    },
    {
      type: 'choice',
      question: '以下哪個節氣是在夏天？',
      options: ['清明', '立春', '芒種', '冬至'],
      answer: 2,
      explanation: '芒種在農曆五月前後，是夏季節氣，意指「有芒的麥子快收，有芒的稻子快種」，是台灣早稻收割、晚稻插秧的重要時節。'
    },
    {
      type: 'choice',
      question: '農曆和節氣對傳統農民最重要的功能是什麼？',
      options: [
        '讓農民知道今天是星期幾',
        '幫助農民掌握農耕時機，知道何時播種、灌溉、收割',
        '用來預測下個月的天氣',
        '計算農民應該繳多少稅'
      ],
      answer: 1,
      explanation: '農曆結合了月相（決定日期）和節氣（反映太陽位置、氣候變化），讓農民能夠掌握最佳的耕作時機。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkCalendarAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ===== 數學：分數除法 =====
const generateFractionDivisionQuestion = () => {
  const types = ['concept', 'calculate', 'story']
  const t = types[Math.floor(Math.random() * types.length)]

  if (t === 'concept') {
    const questions = [
      {
        question: '分數除法 3/4 ÷ 1/2，計算結果是多少？',
        options: ['3/8', '3/2', '6/4', '1/2'],
        answer: 1,
        explanation: '分數除法：除以一個分數等於乘以它的倒數。3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2'
      },
      {
        question: '分數除法 2/3 ÷ 1/3，計算結果是多少？',
        options: ['2/9', '2', '2/6', '3/2'],
        answer: 1,
        explanation: '2/3 ÷ 1/3 = 2/3 × 3/1 = 6/3 = 2'
      },
      {
        question: '1/2 ÷ 1/4 的計算方式是？',
        options: ['1/2 × 1/4', '1/2 × 4/1', '2/1 × 1/4', '1/2 + 1/4'],
        answer: 1,
        explanation: '除以 1/4 等於乘以 1/4 的倒數 4/1，所以 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2'
      },
      {
        question: '5/6 ÷ 5/3 等於多少？',
        options: ['25/18', '1/2', '1', '3/6'],
        answer: 1,
        explanation: '5/6 ÷ 5/3 = 5/6 × 3/5 = 15/30 = 1/2'
      }
    ]
    const q = questions[Math.floor(Math.random() * questions.length)]
    return { type: 'choice', ...q }
  }

  if (t === 'calculate') {
    const problems = [
      { num: 3, den: 4, dnum: 3, dden: 8, ans_num: 2, ans_den: 1 },
      { num: 5, den: 6, dnum: 5, dden: 12, ans_num: 2, ans_den: 1 },
      { num: 2, den: 3, dnum: 4, dden: 9, ans_num: 3, ans_den: 2 },
      { num: 7, den: 8, dnum: 7, dden: 16, ans_num: 2, ans_den: 1 }
    ]
    const p = problems[Math.floor(Math.random() * problems.length)]
    const correctAns = p.ans_den === 1 ? `${p.ans_num}` : `${p.ans_num}/${p.ans_den}`
    const options = [
      correctAns,
      `${p.num * p.dnum}/${p.den * p.dden}`,
      `${p.dnum}/${p.dden}`,
      `${p.den}/${p.num}`
    ]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    const correct = shuffled.indexOf(correctAns)
    return {
      type: 'choice',
      question: `計算：${p.num}/${p.den} ÷ ${p.dnum}/${p.dden} = ？`,
      options: shuffled,
      answer: correct,
      explanation: `${p.num}/${p.den} ÷ ${p.dnum}/${p.dden} = ${p.num}/${p.den} × ${p.dden}/${p.dnum} = ${p.num * p.dden}/${p.den * p.dnum} = ${correctAns}`
    }
  }

  // story：圳路情境
  const stories = [
    {
      question: '一條圳路每小時輸水 3/4 公噸，灌滿一塊水田需要 3/8 公噸，可以灌幾塊田？',
      num: 3, den: 4, dnum: 3, dden: 8, ans: 2,
      explanation: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2，可以灌2塊田。'
    },
    {
      question: '農夫有 5/6 公頃的農地，每塊農地需要 5/12 公頃，可以分成幾塊？',
      num: 5, den: 6, dnum: 5, dden: 12, ans: 2,
      explanation: '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2，可以分成2塊。'
    },
    {
      question: '嘉南大圳一天輸水 3/2 萬公噸，每個灌區需要 3/4 萬公噸，可以供應幾個灌區？',
      num: 3, den: 2, dnum: 3, dden: 4, ans: 2,
      explanation: '3/2 ÷ 3/4 = 3/2 × 4/3 = 12/6 = 2，可以供應2個灌區。'
    }
  ]
  const s = stories[Math.floor(Math.random() * stories.length)]
  const options = [String(s.ans), String(s.ans + 1), String(s.ans - 1), `${s.num * s.dnum}/${s.den * s.dden}`]
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  const correct = shuffled.indexOf(String(s.ans))
  return {
    type: 'choice',
    question: s.question,
    options: shuffled,
    answer: correct,
    explanation: s.explanation
  }
}

const checkFractionDivisionAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ===== 科學：月亮高度角觀測 =====
const generateMoonAngleQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「高度角」（仰角）是什麼？',
      options: [
        '物體的高度（公尺）',
        '從地面水平線到觀測目標的仰視角度',
        '物體到觀測者的距離',
        '物體在地圖上的位置角度'
      ],
      answer: 1,
      explanation: '高度角（仰角）是從地平線（水平方向）算起，到觀測目標（如月亮）的角度。地平線是0°，正頭頂是90°。'
    },
    {
      type: 'choice',
      question: '月亮剛從東方地平線升起時，高度角大約是多少？',
      options: ['0°（地平線）', '45°（斜上方）', '90°（正頭頂）', '180°（地平線以下）'],
      answer: 0,
      explanation: '月亮（或太陽）剛從地平線升起時，高度角接近0°，然後隨著時間升高，到最高點後再漸漸降低。'
    },
    {
      type: 'choice',
      question: '滿月在傍晚從東方升起，大約到幾點鐘會到達天空最高點？',
      options: ['晚上9點左右', '晚上12點（午夜）左右', '清晨3點左右', '清晨6點（日出）左右'],
      answer: 1,
      explanation: '滿月在傍晚（約日落）從東方升起，到午夜時升到最高點（正南方天空），清晨在西方落下，這是地球自轉造成的視覺效果。'
    },
    {
      type: 'choice',
      question: '為什麼不同月份的同一個月相，月亮的高度角不完全一樣？',
      options: [
        '因為月亮越來越小',
        '因為月亮的軌道面和地球赤道有夾角，加上季節變化',
        '因為每個月的天氣不同',
        '因為地球在不同月份的大小不一樣'
      ],
      answer: 1,
      explanation: '月亮的軌道面和地球赤道有約5度的夾角，加上地球自轉軸的傾斜，使得不同季節同一月相的月亮高度略有不同。'
    },
    {
      type: 'choice',
      question: '用「手指估量法」觀測高度角時，一根手指寬（手臂伸直時）大約代表多少角度？',
      options: ['約1度', '約2度', '約5度', '約10度'],
      answer: 1,
      explanation: '手臂伸直時，一根手指寬約代表2度，三根手指約6度，整個拳頭約10度，這是天文觀測的實用估量方法。'
    },
    {
      type: 'choice',
      question: '一位同學在同一個地點，分別在三天後觀測月亮在同一時間的高度，發現月亮的位置每天往東移一點點。這是因為什麼？',
      options: [
        '月亮越來越大',
        '月亮在繞地球公轉，每天相對於星空的位置向東移動約13度',
        '觀測者的位置改變了',
        '因為這三天氣溫不一樣'
      ],
      answer: 1,
      explanation: '月亮每天繞地球公轉約13度（360度÷27.3天），所以每天在同一時間看，月亮相對於背景星空往東偏移一些，這也讓月出時間每天推遲約50分鐘。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkMoonAngleAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ===== 組合成 Day 3 =====
const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '🌾',
  color: '#F59E0B',
  title: '時間怎麼流動？',
  units: [
    // 開場
    {
      id: 'w3d3-opening',
      name: '開場：鹹鹹的汗水',
      icon: '📖',
      lesson: {
        title: '吳晟《吾鄉印象》——第三段',
        sections: [
          {
            title: '今日貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '古早的古早的古早以前\n世世代代的祖公\n就在這片長不出榮華富貴長不出奇蹟的土地上\n揮洒鹹鹹的汗水\n播下粒粒的種籽\n繁衍他們那無所謂而認命的子孫',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '「播下種籽」——農民知道什麼時候播種嗎？不是隨便選一天，而是要等對的時機：等節氣、等月相，等水圳把水送到田裡。'
              },
              {
                type: 'text',
                content: '農業是一門關於「時間」的學問。今天我們來看，古人如何用農曆和節氣掌握時間的流動，用分數除法計算分配的問題，用高度角觀測月亮的位置。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 A：社會
    {
      id: 'w3d3-social',
      name: '社會：農曆、節氣與水利',
      icon: '📅',
      lesson: {
        title: '時間的農業智慧——農曆與節氣',
        sections: [
          {
            title: '農曆是什麼？',
            blocks: [
              {
                type: 'text',
                content: '農曆（又叫「陰陽曆」）是中華文化圈傳統使用的曆法，有兩個核心：\n\n🌙 月亮（陰）：農曆的月份以月相為基礎，初一是新月，十五是滿月\n☀️ 太陽（陽）：節氣反映地球繞太陽公轉的位置，代表氣候變化'
              },
              {
                type: 'text',
                content: '問題：農曆一年12個月（每月29.5天）= 354天，太陽年是365天。每年差11天，要怎麼解決？\n\n答：每2-3年加一個「閏月」，補足差距，讓農曆和季節保持對應。'
              }
            ]
          },
          {
            title: '二十四節氣',
            blocks: [
              {
                type: 'text',
                content: '把地球繞太陽一圈（360°）分成24等分，每個「等分點」就是一個節氣，約每15天一個。'
              },
              {
                type: 'text',
                content: '幾個台灣農業重要的節氣：\n\n🌱 清明（4月初）：掃墓、開始春耕\n🌧️ 穀雨（4月下旬）：「雨生百穀」，春播關鍵\n🌾 芒種（6月初）：早稻收割、晚稻插秧\n🍂 寒露（10月初）：秋收時節'
              }
            ]
          },
          {
            title: '圳路的輪灌時程',
            blocks: [
              {
                type: 'text',
                content: '嘉南大圳的水量有限，不可能同時供應所有農田。管理單位結合節氣和作物需求，制定「輪灌時程表」：\n\n① 哪條支圳、哪天、幾點開始放水\n② 放水幾個小時\n③ 下一個輪到誰'
              },
              {
                type: 'text',
                content: '這套制度讓農民知道：「下個節氣，輪到我的田在XX天後。」於是農民會提前備好田地、準備秧苗，等水一來，立刻插秧。\n\n節氣、比例、分配——三者合一，才能讓台灣南部這片土地，年復一年養活百萬人。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateCalendarQuestion,
        checkAnswer: checkCalendarAnswer
      }
    },

    // 單元 B：數學
    {
      id: 'w3d3-math',
      name: '數學：分數除法',
      icon: '📐',
      lesson: {
        title: '分數除法——等量分配的計算',
        sections: [
          {
            title: '問題從分配開始',
            blocks: [
              {
                type: 'text',
                content: '一條圳路每天輸水 3/4 公噸，灌滿一塊水田需要 3/8 公噸。\n\n這一天的水可以灌幾塊田？\n\n→ 這是「一個分數裡面有幾個另一個分數」的問題，就需要用到分數除法。'
              }
            ]
          },
          {
            title: '分數除法的規則',
            blocks: [
              {
                type: 'text',
                content: '核心規則：\n÷ 一個分數 = × 它的倒數\n\n「倒數」就是把分子和分母互換：\n• 3/4 的倒數是 4/3\n• 2/5 的倒數是 5/2\n• 3 = 3/1，倒數是 1/3'
              },
              {
                type: 'text',
                content: '解題步驟（以 3/4 ÷ 3/8 為例）：\n\n步驟1：把除號換成乘號，並把除數改為倒數\n  3/4 ÷ 3/8 → 3/4 × 8/3\n\n步驟2：分子相乘、分母相乘\n  3/4 × 8/3 = (3×8)/(4×3) = 24/12\n\n步驟3：化簡\n  24/12 = 2\n\n→ 可以灌 2 塊田！'
              }
            ]
          },
          {
            title: '再練習一題',
            blocks: [
              {
                type: 'text',
                content: '農夫有 5/6 公頃的農地，每塊農地需要 5/12 公頃，可以分成幾塊？\n\n5/6 ÷ 5/12\n= 5/6 × 12/5\n= (5×12)/(6×5)\n= 60/30\n= 2\n\n→ 可以分成 2 塊農地。'
              },
              {
                type: 'text',
                content: '小提醒：如果最後答案是分數，記得要化成最簡分數或帶分數。\n\n分數除法 = W2的公因數 + W3的比值概念，都串在一起了！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateFractionDivisionQuestion,
        checkAnswer: checkFractionDivisionAnswer
      }
    },

    // 單元 C：科學
    {
      id: 'w3d3-science',
      name: '科學：月亮高度角觀測',
      icon: '🔭',
      lesson: {
        title: '仰望月亮——高度角的觀測',
        sections: [
          {
            title: '什麼是高度角？',
            blocks: [
              {
                type: 'text',
                content: '高度角（仰角）：從你站的地方，水平地面到觀測目標之間的角度。\n\n• 地平線 = 0°\n• 正頭頂 = 90°\n• 月亮在半空中，大約 30°-60°（依時間不同）'
              },
              {
                type: 'text',
                content: '用手估量高度角：\n\n伸直手臂，比出以下形狀：\n• 1根手指寬 ≈ 2°\n• 3根手指寬 ≈ 6°\n• 拳頭寬 ≈ 10°\n• 手掌大張 ≈ 20°\n\n古代水手也用這個方法估量星星的高度！'
              }
            ]
          },
          {
            title: '月亮的高度角怎麼變化？',
            blocks: [
              {
                type: 'text',
                content: '以滿月為例（農曆十五）：\n\n🌅 傍晚（日落）：從東方升起，高度角接近 0°\n🌙 半夜（午夜）：升到最高點，高度角最大（約60-70°）\n🌄 清晨（日出）：在西方落下，高度角接近 0°\n\n月亮像太陽一樣，「東升西落」——因為地球由西向東自轉。'
              },
              {
                type: 'text',
                content: '月亮每天公轉約13度，所以月出時間每天推遲約50分鐘。今天傍晚6點升起，明天大約6點50升起。'
              }
            ]
          },
          {
            title: '觀測紀錄表',
            blocks: [
              {
                type: 'text',
                content: '科學觀測的精神：「記錄、比較、找規律」\n\n觀測計畫：連續一週記錄月亮，每天填寫：\n\n📅 日期：___\n🌙 月相（眼睛觀察）：___\n🕐 觀測時間：___\n📐 估計高度角：___ 度\n📍 月亮方向（東/南/西）：___'
              },
              {
                type: 'text',
                content: '一週後，比較你的記錄：月亮的位置有什麼規律？高度角和月相有關嗎？\n\n這就是科學家每天做的事——觀察、記錄、尋找規律。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMoonAngleQuestion,
        checkAnswer: checkMoonAngleAnswer
      }
    },

    // 今日回顧
    {
      id: 'w3d3-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '流動與週期的總結',
            blocks: [
              {
                type: 'text',
                content: '今天三個學科都在說「時間的流動」：\n\n📅 社會：農曆按月相計時，節氣按太陽計時，農民靠這套系統決定耕作\n📐 數學：分數除法解決等量分配問題（除以 = 乘以倒數）\n🔭 科學：月亮高度角每天、每小時都在變，記錄下來就是規律'
              },
              {
                type: 'text',
                content: '吳晟說「播下粒粒的種籽」——農民不是隨便播，而是等對的時間。節氣是太陽給的時鐘，月相是月亮給的日曆，水圳是人類自己蓋的水管。三者合作，才能養活一代又一代的人。'
              },
              {
                type: 'text',
                content: '✏️ 明天是動筆日！我們要寫一篇散文「如果我是一條河」——從今天的學習出發，用你自己的聲音，說台灣土地的故事。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day3
