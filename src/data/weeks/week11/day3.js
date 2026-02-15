// W11 Day3: 酸鹼平衡在哪裡?
// 核心概念: 環境破壞案例、兩步驟解方程式、生活中的酸鹼

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題庫
// ==========================================

// ── 社會科題庫:環境破壞 ──
const socialQuestions = [
  {
    type: 'options',
    question: '酸雨的pH值通常小於多少?',
    options: ['5.6', '7', '8', '6'],
    answer: 0,
    displayAnswer: '5.6'
  },
  {
    type: 'options',
    question: '造成酸雨的主要氣體是?',
    options: ['二氧化硫', '氧氣', '氮氣', '氦氣'],
    answer: 0,
    displayAnswer: '二氧化硫'
  },
  {
    type: 'options',
    question: '海洋酸化會導致什麼問題?',
    options: ['珊瑚白化', '海水變鹹', '魚類增加', '溫度下降'],
    answer: 0,
    displayAnswer: '珊瑚白化'
  },
  {
    type: 'options',
    question: '土壤鹽鹼化的原因是?',
    options: ['過度灌溉', '下雨太多', '溫度太低', '風吹太大'],
    answer: 0,
    displayAnswer: '過度灌溉'
  },
  {
    type: 'options',
    question: '1980年代歐洲哪個森林因酸雨大量死亡?',
    options: ['黑森林', '亞馬遜森林', '熱帶雨林', '竹林'],
    answer: 0,
    displayAnswer: '黑森林'
  },
  {
    type: 'options',
    question: '海洋pH從8.2降至8.1，酸度增加了多少?',
    options: ['30%', '10%', '1%', '50%'],
    answer: 0,
    displayAnswer: '30%'
  },
  {
    type: 'options',
    question: '墾丁珊瑚覆蓋率從多少降至30%?',
    options: ['60%', '50%', '40%', '70%'],
    answer: 0,
    displayAnswer: '60%'
  },
  {
    type: 'options',
    question: '酸雨會造成什麼影響?',
    options: ['森林枯萎、湖泊酸化', '氣溫上升', '海水變鹹', '風速增強'],
    answer: 0,
    displayAnswer: '森林枯萎、湖泊酸化'
  },
  {
    type: 'options',
    question: '台灣哪個地區有土壤鹽鹼化問題?',
    options: ['雲嘉沿海', '台北市區', '玉山山頂', '日月潭'],
    answer: 0,
    displayAnswer: '雲嘉沿海'
  },
  {
    type: 'options',
    question: '工廠排放哪種氣體會造成酸雨?',
    options: ['二氧化硫、氮氧化物', '氧氣、氮氣', '二氧化碳、水蒸氣', '氦氣、氖氣'],
    answer: 0,
    displayAnswer: '二氧化硫、氮氧化物'
  }
]

const generateSocialQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(socialQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ── 數學科題庫:兩步驟方程式 ──
const mathQuestions = [
  {
    type: 'options',
    question: '解方程式: 2x + 3 = 11',
    options: ['4', '5', '3', '2'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '解方程式: 3x + 5 = 14',
    options: ['3', '4', '2', '5'],
    answer: 0,
    displayAnswer: '3'
  },
  {
    type: 'options',
    question: '解方程式: 4x - 2 = 10',
    options: ['3', '4', '2', '5'],
    answer: 0,
    displayAnswer: '3'
  },
  {
    type: 'options',
    question: '解方程式: 2x + 5 = 13',
    options: ['4', '5', '3', '6'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '解方程式: 3x - 4 = 8',
    options: ['4', '5', '3', '2'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '解方程式: 5x + 2 = 17',
    options: ['3', '4', '2', '5'],
    answer: 0,
    displayAnswer: '3'
  },
  {
    type: 'options',
    question: '解方程式: 2x - 1 = 7',
    options: ['4', '5', '3', '6'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '解方程式: 4x + 3 = 19',
    options: ['4', '5', '3', '6'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '兩步驟解方程式的口訣是?',
    options: ['先加減、再乘除', '先乘除、再加減', '先平方、再開根號', '隨便算'],
    answer: 0,
    displayAnswer: '先加減、再乘除'
  },
  {
    type: 'options',
    question: '解 3x + 6 = 15 的第一步是?',
    options: ['兩邊減6', '兩邊加6', '兩邊除以3', '兩邊乘以3'],
    answer: 0,
    displayAnswer: '兩邊減6'
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

// ── 科學科題庫:生活中的酸鹼 ──
const scienceQuestions = [
  {
    type: 'options',
    question: '檸檬汁(pH=2)是什麼性質?',
    options: ['酸性', '鹼性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '酸性'
  },
  {
    type: 'options',
    question: '肥皂水(pH=10)是什麼性質?',
    options: ['鹼性', '酸性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '鹼性'
  },
  {
    type: 'options',
    question: '醋(pH=3)是什麼性質?',
    options: ['酸性', '鹼性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '酸性'
  },
  {
    type: 'options',
    question: '小蘇打水(pH=8)是什麼性質?',
    options: ['鹼性', '酸性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '鹼性'
  },
  {
    type: 'options',
    question: '胃酸(pH=2)是什麼性質?',
    options: ['酸性', '鹼性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '酸性'
  },
  {
    type: 'options',
    question: '漂白水(pH=12)是什麼性質?',
    options: ['鹼性', '酸性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '鹼性'
  },
  {
    type: 'options',
    question: '人體血液的正常pH值範圍是?',
    options: ['7.35-7.45', '6-7', '8-9', '5-6'],
    answer: 0,
    displayAnswer: '7.35-7.45'
  },
  {
    type: 'options',
    question: '胃的pH值大約是?',
    options: ['1-2', '7', '10', '14'],
    answer: 0,
    displayAnswer: '1-2'
  },
  {
    type: 'options',
    question: '皮膚的pH值大約是?',
    options: ['5.5', '7', '10', '2'],
    answer: 0,
    displayAnswer: '5.5'
  },
  {
    type: 'options',
    question: '海水的pH值大約是?',
    options: ['8', '2', '7', '12'],
    answer: 0,
    displayAnswer: '8'
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

// ── 語文科題庫:環境詞彙 ──
const chineseQuestions = [
  {
    type: 'options',
    question: '「酸雨」的意思是?',
    options: ['因工業廢氣造成的酸性降雨', '正常的雨水', '很甜的雨', '海水蒸發的雨'],
    answer: 0,
    displayAnswer: '因工業廢氣造成的酸性降雨'
  },
  {
    type: 'options',
    question: '「海洋酸化」的意思是?',
    options: ['海水吸收過多二氧化碳導致pH下降', '海水變鹹', '海水溫度上升', '海水結冰'],
    answer: 0,
    displayAnswer: '海水吸收過多二氧化碳導致pH下降'
  },
  {
    type: 'options',
    question: '「珊瑚白化」的意思是?',
    options: ['珊瑚失去共生藻變白並死亡', '珊瑚本來就是白色', '珊瑚被漂白', '珊瑚長大了'],
    answer: 0,
    displayAnswer: '珊瑚失去共生藻變白並死亡'
  },
  {
    type: 'options',
    question: '「緩衝能力」的意思是?',
    options: ['生態系抵抗環境變化的能力', '跑步的速度', '儲存食物的能力', '抵抗疾病的能力'],
    answer: 0,
    displayAnswer: '生態系抵抗環境變化的能力'
  },
  {
    type: 'options',
    question: '「食物鏈」的意思是?',
    options: ['生物之間「吃與被吃」的關係', '餐廳的菜單', '食物的種類', '烹飪的方法'],
    answer: 0,
    displayAnswer: '生物之間「吃與被吃」的關係'
  },
  {
    type: 'options',
    question: '酸雨的pH值需要小於多少?',
    options: ['5.6', '7', '8', '10'],
    answer: 0,
    displayAnswer: '5.6'
  },
  {
    type: 'options',
    question: '二氧化硫的化學式是?',
    options: ['SO₂', 'CO₂', 'H₂O', 'O₂'],
    answer: 0,
    displayAnswer: 'SO₂'
  },
  {
    type: 'options',
    question: '珊瑚白化會導致什麼後果?',
    options: ['珊瑚死亡', '珊瑚變大', '珊瑚變色', '珊瑚生長更快'],
    answer: 0,
    displayAnswer: '珊瑚死亡'
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

const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '🌊',
  color: '#10B981',
  title: '酸鹼平衡在哪裡?',
  
  units: [
    // ========== 單元1: 開場閱讀 ==========
    {
      id: 'w11d3-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(三)',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'quote',
                content: '台灣，其實，不就是一個高山島嶼嗎？兩億五千萬年以前...四百多萬年前，一次對台灣影響最大的造山運動發生了...台灣因此高山遍佈。',
                author: '陳列《玉山去來》'
              },
              {
                type: 'text',
                content: '台灣的高山是板塊擠壓形成的。今天我們要學習:當環境的平衡被破壞(酸雨、海洋酸化)，會發生什麼事?'
              }
            ]
          }
        ]
      }
    },

    // ========== 單元2: 社會科 ==========
    {
      id: 'w11d3-society',
      name: '社會',
      icon: '🏛️',
      lesson: {
        title: '環境破壞案例',
        sections: [
          {
            title: '酸雨',
            blocks: [
              {
                type: 'text',
                content: '**成因**: 工廠排放二氧化硫(SO₂)、氮氧化物(NOₓ) → 溶於雨水 → pH<5.6\n**影響**: 森林枯萎、湖泊酸化、建築腐蝕\n**實例**: 1980年代歐洲「黑森林」大量死亡'
              }
            ]
          },
          {
            title: '海洋酸化',
            blocks: [
              {
                type: 'text',
                content: '**成因**: 海水吸收過多CO₂ → pH從8.2降至8.1(看似微小，實際酸度增加30%)\n**影響**: 珊瑚白化、貝類殼變薄、食物鏈崩潰\n**墾丁危機**: 墾丁珊瑚覆蓋率從60%降至30%'
              }
            ]
          },
          {
            title: '土壤鹽鹼化',
            blocks: [
              {
                type: 'text',
                content: '**成因**: 過度灌溉 → 鹽分累積 → 土壤pH過高或過低\n**影響**: 作物無法生長、土地荒廢\n**台灣案例**: 雲嘉沿海地區地層下陷+海水入侵'
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

    // ========== 單元3: 數學科 ==========
    {
      id: 'w11d3-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '兩步驟解方程式',
        sections: [
          {
            title: '兩步驟方法',
            blocks: [
              {
                type: 'text',
                content: '**例題**: 2x + 3 = 11\n\n步驟:\n1. 先減: 兩邊減3 → 2x = 8\n2. 再除: 兩邊除以2 → x = 4\n3. 驗算: 2×4+3 = 11 ✓\n\n**口訣**: 先加減、再乘除'
              }
            ]
          },
          {
            title: '練習',
            blocks: [
              {
                type: 'text',
                content: '**練習1**: 3x + 5 = 14\n解: 3x = 9, x = 3\n\n**練習2**: 4x - 2 = 10\n解: 4x = 12, x = 3'
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

    // ========== 單元4: 科學科 ==========
    {
      id: 'w11d3-science',
      name: '科學',
      icon: '🧪',
      lesson: {
        title: '生活中的酸鹼',
        sections: [
          {
            title: '酸性物質',
            blocks: [
              {
                type: 'text',
                content: '• 胃酸 pH 2: 幫助消化\n• 檸檬汁 pH 2: 檸檬酸\n• 醋 pH 3: 醋酸\n• 汽水 pH 3: 碳酸\n• 番茄汁 pH 4\n• 黑咖啡 pH 5'
              }
            ]
          },
          {
            title: '鹼性物質',
            blocks: [
              {
                type: 'text',
                content: '• 海水 pH 8\n• 小蘇打水 pH 8.5\n• 肥皂水 pH 10\n• 漂白水 pH 12\n• 通樂 pH 14'
              }
            ]
          },
          {
            title: '人體pH恆定',
            blocks: [
              {
                type: 'text',
                content: '• 血液 pH 7.35-7.45 (偏離會危及生命)\n• 胃 pH 1-2 (殺菌、消化)\n• 皮膚 pH 5.5 (抑菌)\n• 口腔 pH 6.5-7.5\n\n人體有強大的緩衝系統維持pH平衡!'
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

    // ========== 單元5: 語文科 ==========
    {
      id: 'w11d3-vocabulary',
      name: '語文',
      icon: '📝',
      lesson: {
        title: '環境詞彙',
        sections: [
          {
            title: '重點詞彙',
            blocks: [
              {
                type: 'text',
                content: '**1. 酸雨**: 因工業廢氣造成的酸性降雨(pH<5.6)\n**2. 海洋酸化**: 海水吸收過多CO₂導致pH下降\n**3. 珊瑚白化**: 珊瑚失去共生藻變白並死亡\n**4. 緩衝能力**: 生態系抵抗環境變化的能力\n**5. 食物鏈**: 生物之間「吃與被吃」的關係'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateChineseQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元6: 今日回顧 ==========
    {
      id: 'w11d3-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第3天總結',
        sections: [
          {
            title: '學習重點',
            blocks: [
              {
                type: 'text',
                content: '**社會**: 酸雨、海洋酸化、土壤鹽鹼化——環境破壞實例\n**數學**: 兩步驟解方程式(先加減、再乘除)\n**科學**: 生活中的酸鹼物質分類\n**語文**: 環境保護相關詞彙\n\n**明天預告**: 數學綜合應用、抒情文寫作「給未來地球的一封信」'
              }
            ]
          }
        ]
      }
    }
  ]
}

export default day3
