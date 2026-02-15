// W11 Day4: 動筆日
// 核心概念: 數學綜合應用、生態系緩衝能力、抒情文寫作

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題庫
// ==========================================

// ── 數學科題庫:綜合應用 ──
const mathQuestions = [
  {
    type: 'options',
    question: '玉山國家公園總預算8000萬，人事成本x萬、保育成本比人事多500萬、解說成本1500萬。x是多少?',
    options: ['3000', '3500', '2500', '4000'],
    answer: 0,
    displayAnswer: '3000'
  },
  {
    type: 'options',
    question: '太魯閣國家公園每日遊客容量2500人，已預約800人，剩餘名額x人。x是多少?',
    options: ['1700', '1800', '1600', '2000'],
    answer: 0,
    displayAnswer: '1700'
  },
  {
    type: 'options',
    question: '櫻花鉤吻鮭去年3200尾，今年新生450尾、死亡180尾，今年總數x尾。x是多少?',
    options: ['3470', '3480', '3460', '3500'],
    answer: 0,
    displayAnswer: '3470'
  },
  {
    type: 'options',
    question: '某國家公園總預算6000萬，人事x萬、保育(x+300)萬、解說1200萬。x是多少?',
    options: ['2250', '2300', '2200', '2400'],
    answer: 0,
    displayAnswer: '2250'
  },
  {
    type: 'options',
    question: '遊客容量3000人，已預約1200人，剩餘x人。x是多少?',
    options: ['1800', '1900', '1700', '2000'],
    answer: 0,
    displayAnswer: '1800'
  },
  {
    type: 'options',
    question: '台灣黑熊去年150隻，新生25隻、死亡10隻，今年x隻。x是多少?',
    options: ['165', '170', '160', '175'],
    answer: 0,
    displayAnswer: '165'
  },
  {
    type: 'options',
    question: '某物種去年500個體，增加80個、減少30個，今年x個。x是多少?',
    options: ['550', '560', '540', '570'],
    answer: 0,
    displayAnswer: '550'
  },
  {
    type: 'options',
    question: '總預算10000萬，三項支出分別為x、(x+800)、2000萬。x是多少?',
    options: ['3600', '3700', '3500', '3800'],
    answer: 0,
    displayAnswer: '3600'
  },
  {
    type: 'options',
    question: '解方程式: 2x + 2000 = 8000',
    options: ['3000', '3500', '2500', '4000'],
    answer: 0,
    displayAnswer: '3000'
  },
  {
    type: 'options',
    question: '解方程式: x + 800 = 2500',
    options: ['1700', '1800', '1600', '2000'],
    answer: 0,
    displayAnswer: '1700'
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

// ── 科學科題庫:緩衝能力 ──
const scienceQuestions = [
  {
    type: 'options',
    question: '緩衝溶液的功能是?',
    options: ['抵抗pH變化', '增加酸性', '增加鹼性', '稀釋溶液'],
    answer: 0,
    displayAnswer: '抵抗pH變化'
  },
  {
    type: 'options',
    question: '生態系的緩衝能力是指?',
    options: ['承受干擾後恢復平衡的能力', '動物數量', '植物種類', '土壤深度'],
    answer: 0,
    displayAnswer: '承受干擾後恢復平衡的能力'
  },
  {
    type: 'options',
    question: '當生態系超過臨界點會?',
    options: ['崩潰', '變更好', '不變', '緩慢恢復'],
    answer: 0,
    displayAnswer: '崩潰'
  },
  {
    type: 'options',
    question: '血液的pH值大約是?',
    options: ['7.4', '7.0', '8.0', '6.5'],
    answer: 0,
    displayAnswer: '7.4'
  },
  {
    type: 'options',
    question: '海水的pH值大約是?',
    options: ['8.2', '7.0', '9.0', '7.5'],
    answer: 0,
    displayAnswer: '8.2'
  },
  {
    type: 'options',
    question: '生物多樣性越高，生態系的緩衝能力會?',
    options: ['越強', '越弱', '不變', '消失'],
    answer: 0,
    displayAnswer: '越強'
  },
  {
    type: 'options',
    question: '珊瑚礁水溫上升多少度會導致大規模白化?',
    options: ['2°C', '5°C', '10°C', '1°C'],
    answer: 0,
    displayAnswer: '2°C'
  },
  {
    type: 'options',
    question: '雨林砍伐超過多少會導致生態系崩潰?',
    options: ['40%', '20%', '60%', '80%'],
    answer: 0,
    displayAnswer: '40%'
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

// ── 語文科題庫:抒情文寫作 ──
const chineseQuestions = [
  {
    type: 'options',
    question: '抒情文的特色是?',
    options: ['表達情感', '說明道理', '敘述故事', '描寫景物'],
    answer: 0,
    displayAnswer: '表達情感'
  },
  {
    type: 'options',
    question: '「給未來地球的一封信」屬於什麼文體?',
    options: ['抒情文', '說明文', '議論文', '記敘文'],
    answer: 0,
    displayAnswer: '抒情文'
  },
  {
    type: 'options',
    question: '「地球像生病的病人」使用了什麼修辭?',
    options: ['比喻', '排比', '設問', '誇飾'],
    answer: 0,
    displayAnswer: '比喻'
  },
  {
    type: 'options',
    question: '「我希望...我希望...我希望...」使用了什麼修辭?',
    options: ['排比', '比喻', '設問', '誇飾'],
    answer: 0,
    displayAnswer: '排比'
  },
  {
    type: 'options',
    question: '「未來的天空還會是藍色的嗎?」使用了什麼修辭?',
    options: ['設問', '比喻', '排比', '誇飾'],
    answer: 0,
    displayAnswer: '設問'
  },
  {
    type: 'options',
    question: '抒情文第一段應該寫什麼?',
    options: ['問候與緣由', '情感抒發', '期許承諾', '現況描述'],
    answer: 0,
    displayAnswer: '問候與緣由'
  },
  {
    type: 'options',
    question: '抒情文第三段應該寫什麼?',
    options: ['情感抒發', '問候與緣由', '現況描述', '結論'],
    answer: 0,
    displayAnswer: '情感抒發'
  },
  {
    type: 'options',
    question: '「森林是地球的肺」使用了什麼修辭?',
    options: ['比喻', '排比', '設問', '擬人'],
    answer: 0,
    displayAnswer: '比喻'
  }
]

const generateChineseQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(chineseQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ==========================================
// Day 結構
// ==========================================

const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✍️',
  color: '#F59E0B',
  title: '動筆日',
  
  units: [
    // ========== 單元1: 開場閱讀 ==========
    {
      id: 'w11d4-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(四)',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'quote',
                content: '然而六月底再次經過時，我卻為他們展露的鮮豔色彩而大感驚訝。荒冷沉寂的高山上突然出現了一片蓬勃的生機。',
                author: '陳列《玉山去來》'
              },
              {
                type: 'text',
                content: '作者描述玉山高山植物在短暫夏季努力綻放的景象。這讓我們思考:我們能為未來的地球做些什麼?'
              }
            ]
          }
        ]
      }
    },

    // ========== 單元2: 數學綜合 ==========
    {
      id: 'w11d4-math',
      name: '數學綜合',
      icon: '🔢',
      lesson: {
        title: 'W11數學綜合應用',
        sections: [
          {
            title: '情境1:國家公園預算',
            blocks: [
              {
                type: 'text',
                content: '玉山國家公園總預算8000萬元，分為三部分:\n• 人事成本: x萬元\n• 保育成本: 比人事多500萬\n• 解說成本: 1500萬元\n\n列式: x + (x+500) + 1500 = 8000\n解: 2x + 2000 = 8000\n    2x = 6000\n    x = 3000萬元'
              }
            ]
          },
          {
            title: '情境2:遊客承載量',
            blocks: [
              {
                type: 'text',
                content: '太魯閣國家公園每日遊客容量2500人，已預約800人，剩餘名額x人。\n\n列式: x + 800 = 2500\n解: x = 1700人'
              }
            ]
          },
          {
            title: '情境3:物種監測',
            blocks: [
              {
                type: 'text',
                content: '櫻花鉤吻鮭去年3200尾，今年新生450尾、死亡180尾，今年總數x尾。\n\n列式: 3200 + 450 - 180 = x\n解: x = 3470尾'
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

    // ========== 單元3: 科學延伸 ==========
    {
      id: 'w11d4-science',
      name: '科學延伸',
      icon: '🧪',
      lesson: {
        title: '生態系的緩衝能力',
        sections: [
          {
            title: '緩衝溶液',
            blocks: [
              {
                type: 'text',
                content: '**定義**: 能抵抗少量酸鹼變化、維持pH穩定的溶液\n**例子**: 血液(pH 7.4)、海水(pH 8.2)\n**原理**: 含有「弱酸+其鹽」或「弱鹼+其鹽」的組合'
              }
            ]
          },
          {
            title: '生態系緩衝',
            blocks: [
              {
                type: 'text',
                content: '**類比**: 健康的生態系就像緩衝溶液\n• 能承受小幅度干擾(如短期乾旱、少量污染)\n• 自我恢復平衡\n\n**生物多樣性 = 緩衝能力**:\n• 物種越多，生態系越穩定\n• 某種生物減少，其他物種可暫時補位'
              }
            ]
          },
          {
            title: '臨界點',
            blocks: [
              {
                type: 'text',
                content: '**破壞超過負荷 → 生態系崩潰**\n\n例子:\n• 珊瑚礁: 水溫上升2°C → 大規模白化 → 生態系崩潰\n• 雨林: 砍伐超過40% → 降雨減少 → 變成草原\n• 漁場: 過度捕撈 → 魚群無法恢復 → 漁場枯竭\n\n**結論**: 保育要在臨界點之前就開始!'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateScienceQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元4: 語文寫作 ==========
    {
      id: 'w11d4-writing',
      name: '語文寫作',
      icon: '📝',
      lesson: {
        title: '抒情文:給未來地球的一封信',
        sections: [
          {
            title: '寫作引導',
            blocks: [
              {
                type: 'text',
                content: '**文體**: 抒情文(表達情感、抒發感受)\n**對象**: 未來的地球\n**目的**: 表達對環境的關心、期許、承諾'
              }
            ]
          },
          {
            title: '四段結構',
            blocks: [
              {
                type: 'text',
                content: '**第一段:問候與緣由**\n• 親愛的未來地球...\n• 我是2026年的學生\n• 為什麼寫這封信?\n\n**第二段:現況描述**\n• 現在的地球面臨什麼問題?\n• 舉1-2個具體例子\n  - 氣候變遷、物種滅絕、海洋酸化...\n\n**第三段:情感抒發**\n• 我的擔憂、難過、希望\n• 使用比喻、排比等修辭\n• 例:「我擔心未來的孩子只能在書本上看到北極熊」\n\n**第四段:期許與承諾**\n• 給未來的期許\n• 我的承諾與行動\n• 結尾升華'
              }
            ]
          },
          {
            title: '抒情技巧',
            blocks: [
              {
                type: 'text',
                content: '**1. 比喻**:\n• 地球像生病的病人\n• 森林是地球的肺\n\n**2. 排比**:\n• 我希望...我希望...我希望...\n• 我願意...我願意...我願意...\n\n**3. 設問**:\n• 未來的天空還會是藍色的嗎?\n• 我們的子孫還能看到玉山的雪嗎?\n\n**4. 感嘆**:\n• 多麼希望時光能倒流!\n• 如果可以重來...'
              }
            ]
          },
          {
            title: '範例段落',
            blocks: [
              {
                type: 'text',
                content: '**範例第三段**(情感抒發):\n\n「每當我看到新聞報導冰山融化、森林大火、珊瑚白化，我的心就像被重重擊打一般，感到無比沉重。我擔心，未來的孩子只能在博物館裡看到北極熊的標本，只能在課本上讀到台灣黑熊的故事，只能在照片中想像墾丁曾經五彩繽紛的珊瑚礁。這些畫面，像噩夢一樣在我腦海中揮之不去。」'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateChineseQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元5: 今日回顧 ==========
    {
      id: 'w11d4-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第4天總結',
        sections: [
          {
            title: '學習重點',
            blocks: [
              {
                type: 'text',
                content: '**數學**: 綜合應用等量公理解決實際問題\n**科學**: 緩衝溶液與生態系緩衝能力的類比\n**語文**: 抒情文寫作技巧(比喻、排比、設問)\n\n**作業**: 完成「給未來地球的一封信」草稿(至少300字)'
              }
            ]
          }
        ]
      }
    }
  ]
}

export default day4
