// W11 Day2: 保護區在保護什麼?
// 核心概念: 五大國家公園特色、等量公理加減、pH值

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題庫
// ==========================================

// ── 社會科題庫:國家公園特色 ──
const socialQuestions = [
  {
    type: 'options',
    question: '玉山國家公園的主要特色是?',
    options: ['東北亞第一高峰', '大理石峽谷', '熱帶珊瑚礁生態', '火山地形'],
    answer: 0,
    displayAnswer: '東北亞第一高峰'
  },
  {
    type: 'options',
    question: '太魯閣國家公園的主要特色是?',
    options: ['大理石峽谷', '東北亞第一高峰', '冰河遺跡', '熱帶珊瑚礁生態'],
    answer: 0,
    displayAnswer: '大理石峽谷'
  },
  {
    type: 'options',
    question: '墾丁國家公園的主要特色是?',
    options: ['熱帶珊瑚礁生態', '火山地形', '大理石峽谷', '冰河遺跡'],
    answer: 0,
    displayAnswer: '熱帶珊瑚礁生態'
  },
  {
    type: 'options',
    question: '陽明山國家公園的主要特色是?',
    options: ['火山地形', '東北亞第一高峰', '大理石峽谷', '熱帶珊瑚礁生態'],
    answer: 0,
    displayAnswer: '火山地形'
  },
  {
    type: 'options',
    question: '雪霸國家公園的主要特色是?',
    options: ['冰河遺跡', '火山地形', '大理石峽谷', '東北亞第一高峰'],
    answer: 0,
    displayAnswer: '冰河遺跡'
  },
  {
    type: 'options',
    question: '哪個國家公園有櫻花鉤吻鮭?',
    options: ['雪霸國家公園', '玉山國家公園', '墾丁國家公園', '陽明山國家公園'],
    answer: 0,
    displayAnswer: '雪霸國家公園'
  },
  {
    type: 'options',
    question: '台灣黑熊主要棲息在哪個國家公園?',
    options: ['玉山國家公園', '墾丁國家公園', '陽明山國家公園', '太魯閣國家公園'],
    answer: 0,
    displayAnswer: '玉山國家公園'
  },
  {
    type: 'options',
    question: '野生動物保育法是哪一年制定?',
    options: ['1989', '1984', '1992', '1995'],
    answer: 0,
    displayAnswer: '1989'
  },
  {
    type: 'options',
    question: '櫻花鉤吻鮭被稱為什麼?',
    options: ['國寶魚', '珍稀魚', '保育魚', '台灣魚'],
    answer: 0,
    displayAnswer: '國寶魚'
  },
  {
    type: 'options',
    question: '墾丁國家公園保護的主要生態是?',
    options: ['珊瑚礁、候鳥遷徙站', '高山植物', '溫泉生態', '冰河遺跡'],
    answer: 0,
    displayAnswer: '珊瑚礁、候鳥遷徙站'
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

// ── 數學科題庫:等量公理加減 ──
const mathQuestions = [
  {
    type: 'options',
    question: '解方程式: x + 3 = 7',
    options: ['4', '5', '3', '10'],
    answer: 0,
    displayAnswer: '4'
  },
  {
    type: 'options',
    question: '解方程式: x + 5 = 12',
    options: ['7', '8', '6', '17'],
    answer: 0,
    displayAnswer: '7'
  },
  {
    type: 'options',
    question: '解方程式: x - 4 = 6',
    options: ['10', '11', '9', '2'],
    answer: 0,
    displayAnswer: '10'
  },
  {
    type: 'options',
    question: '解方程式: x - 2 = 8',
    options: ['10', '11', '9', '6'],
    answer: 0,
    displayAnswer: '10'
  },
  {
    type: 'options',
    question: '解方程式: x + 6 = 15',
    options: ['9', '10', '8', '21'],
    answer: 0,
    displayAnswer: '9'
  },
  {
    type: 'options',
    question: '解方程式: x - 3 = 12',
    options: ['15', '16', '14', '9'],
    answer: 0,
    displayAnswer: '15'
  },
  {
    type: 'options',
    question: '在 x + 8 = 20 中，x 等於多少?',
    options: ['12', '13', '11', '28'],
    answer: 0,
    displayAnswer: '12'
  },
  {
    type: 'options',
    question: '在 x - 5 = 10 中，x 等於多少?',
    options: ['15', '16', '14', '5'],
    answer: 0,
    displayAnswer: '15'
  },
  {
    type: 'options',
    question: '等量公理一:等式兩邊同時做什麼，等式仍成立?',
    options: ['加減同一數', '乘除同一數', '平方', '開根號'],
    answer: 0,
    displayAnswer: '加減同一數'
  },
  {
    type: 'options',
    question: 'x + a = b 可以變形成?',
    options: ['x = b - a', 'x = b + a', 'x = a - b', 'x = ab'],
    answer: 0,
    displayAnswer: 'x = b - a'
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

// ── 科學科題庫:pH值 ──
const scienceQuestions = [
  {
    type: 'options',
    question: 'pH值範圍是?',
    options: ['0到14', '1到10', '0到100', '-7到7'],
    answer: 0,
    displayAnswer: '0到14'
  },
  {
    type: 'options',
    question: '純水的pH值是?',
    options: ['7', '0', '14', '10'],
    answer: 0,
    displayAnswer: '7'
  },
  {
    type: 'options',
    question: 'pH<7代表?',
    options: ['酸性', '鹼性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '酸性'
  },
  {
    type: 'options',
    question: 'pH>7代表?',
    options: ['鹼性', '酸性', '中性', '無法判斷'],
    answer: 0,
    displayAnswer: '鹼性'
  },
  {
    type: 'options',
    question: 'pH=7代表?',
    options: ['中性', '酸性', '鹼性', '無法判斷'],
    answer: 0,
    displayAnswer: '中性'
  },
  {
    type: 'options',
    question: '檸檬汁的pH值大約是?',
    options: ['2', '7', '10', '14'],
    answer: 0,
    displayAnswer: '2'
  },
  {
    type: 'options',
    question: '肥皂水的pH值大約是?',
    options: ['10', '2', '7', '1'],
    answer: 0,
    displayAnswer: '10'
  },
  {
    type: 'options',
    question: '櫻花鉤吻鮭需要的水質pH值是?',
    options: ['7-8', '2-3', '12-13', '1-2'],
    answer: 0,
    displayAnswer: '7-8'
  },
  {
    type: 'options',
    question: '酸雨的pH值通常是?',
    options: ['<5.6', '>8', '=7', '>10'],
    answer: 0,
    displayAnswer: '<5.6'
  },
  {
    type: 'options',
    question: 'pH值越小代表?',
    options: ['越酸', '越鹼', '越中性', '無關酸鹼'],
    answer: 0,
    displayAnswer: '越酸'
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

// ── 語文科題庫:保育詞彙 ──
const chineseQuestions = [
  {
    type: 'options',
    question: '「保育法」的意思是?',
    options: ['保護野生動植物的法律規範', '保護環境的建議', '保護古蹟的方法', '保護水源的規定'],
    answer: 0,
    displayAnswer: '保護野生動植物的法律規範'
  },
  {
    type: 'options',
    question: '「瀕危物種」的意思是?',
    options: ['面臨滅絕危機的生物', '數量很多的生物', '新發現的生物', '外來入侵的生物'],
    answer: 0,
    displayAnswer: '面臨滅絕危機的生物'
  },
  {
    type: 'options',
    question: '「國寶魚」是指?',
    options: ['櫻花鉤吻鮭', '吳郭魚', '鯉魚', '鯊魚'],
    answer: 0,
    displayAnswer: '櫻花鉤吻鮭'
  },
  {
    type: 'options',
    question: '「候鳥」的意思是?',
    options: ['隨季節遷徙的鳥類', '留鳥', '籠中鳥', '受傷的鳥'],
    answer: 0,
    displayAnswer: '隨季節遷徙的鳥類'
  },
  {
    type: 'options',
    question: '「地質遺跡」的意思是?',
    options: ['具科學價值的地質構造', '古代建築', '歷史文物', '化石'],
    answer: 0,
    displayAnswer: '具科學價值的地質構造'
  },
  {
    type: 'options',
    question: '台灣黑熊屬於哪一級保育類動物?',
    options: ['第一級(瀕臨絕種)', '第二級(珍貴稀有)', '第三級(其他應予保育)', '不是保育類'],
    answer: 0,
    displayAnswer: '第一級(瀕臨絕種)'
  },
  {
    type: 'options',
    question: '石虎屬於哪一級保育類動物?',
    options: ['第一級(瀕臨絕種)', '第二級(珍貴稀有)', '第三級(其他應予保育)', '不是保育類'],
    answer: 0,
    displayAnswer: '第一級(瀕臨絕種)'
  },
  {
    type: 'options',
    question: '台灣獼猴屬於哪一級保育類動物?',
    options: ['第二級(珍貴稀有)', '第一級(瀕臨絕種)', '第三級(其他應予保育)', '不是保育類'],
    answer: 0,
    displayAnswer: '第二級(珍貴稀有)'
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

const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '🏔️',
  color: '#10B981',
  title: '保護區在保護什麼?',
  
  units: [
    // ========== 單元1: 開場閱讀 ==========
    {
      id: 'w11d2-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(二)',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'quote',
                content: '這是四月初的時候，清晨近五點，我第一次登上玉山主峰頂。當我正是氣喘吁吁，驚疑的心神仍來不及落定時，山頂上那種宇宙洪荒般詭譎的氣象，剎那間就將我完全震懾住了。',
                author: '陳列《玉山去來》'
              },
              {
                type: 'text',
                content: '作者陳列在玉山頂看到了震撼的風雲景象。今天我們要了解:台灣五大國家公園各自保護著什麼珍貴資源?'
              }
            ]
          }
        ]
      }
    },

    // ========== 單元2: 社會科 ==========
    {
      id: 'w11d2-society',
      name: '社會',
      icon: '🏛️',
      lesson: {
        title: '五大國家公園特色',
        sections: [
          {
            title: '玉山國家公園',
            blocks: [
              {
                type: 'text',
                content: '**特色**:東北亞第一高峰(3,952公尺)\n**保育重點**:高山生態、台灣黑熊、濁水溪源頭\n**重要性**:完整的垂直植物帶、台灣水資源來源'
              }
            ]
          },
          {
            title: '太魯閣國家公園',
            blocks: [
              {
                type: 'text',
                content: '**特色**:大理石峽谷\n**保育重點**:2億年大理石地形、立霧溪生態\n**重要性**:世界級地質景觀'
              }
            ]
          },
          {
            title: '墾丁國家公園',
            blocks: [
              {
                type: 'text',
                content: '**特色**:熱帶珊瑚礁\n**保育重點**:300種珊瑚、候鳥遷徙站\n**重要性**:台灣唯一熱帶海洋生態'
              }
            ]
          },
          {
            title: '陽明山國家公園',
            blocks: [
              {
                type: 'text',
                content: '**特色**:火山地形\n**保育重點**:七星山、溫泉、北降植物\n**重要性**:台北都會區綠肺'
              }
            ]
          },
          {
            title: '雪霸國家公園',
            blocks: [
              {
                type: 'text',
                content: '**特色**:冰河遺跡\n**保育重點**:櫻花鉤吻鮭(國寶魚)、雪山圈谷\n**重要性**:冰河時期陸封型鮭魚，全球獨一無二'
              }
            ]
          },
          {
            title: '野生動物保育法(1989)',
            blocks: [
              {
                type: 'text',
                content: '三級保育:\n• 第一級:瀕臨絕種(石虎、台灣黑熊)\n• 第二級:珍貴稀有(台灣獼猴)\n• 第三級:其他應予保育(八色鳥)\n\n違法最高罰則:5年徒刑+100萬罰金'
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
      id: 'w11d2-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '等量公理一:加減',
        sections: [
          {
            title: '等量公理',
            blocks: [
              {
                type: 'text',
                content: '**等量公理一**:等式兩邊同時加減同一數，等式仍成立。'
              }
            ]
          },
          {
            title: '解題步驟',
            blocks: [
              {
                type: 'text',
                content: '**例題**: x + 3 = 7\n\n步驟:\n1. 兩邊同時減3\n2. x + 3 - 3 = 7 - 3\n3. x = 4\n4. 驗算: 4 + 3 = 7 ✓'
              }
            ]
          },
          {
            title: '口訣',
            blocks: [
              {
                type: 'text',
                content: '「+變-，-變+」\n\n• x + a = b → x = b - a\n• x - a = b → x = b + a'
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
      id: 'w11d2-science',
      name: '科學',
      icon: '🧪',
      lesson: {
        title: 'pH值數線',
        sections: [
          {
            title: 'pH值定義',
            blocks: [
              {
                type: 'text',
                content: 'pH值:用0-14的數字表示酸鹼程度\n\n• pH < 7: 酸性(越小越酸)\n• pH = 7: 中性\n• pH > 7: 鹼性(越大越鹼)'
              }
            ]
          },
          {
            title: '常見物質pH值',
            blocks: [
              {
                type: 'text',
                content: '**酸性**:\n• 胃酸 pH 1-2\n• 檸檬汁 pH 2\n• 醋 pH 3\n\n**中性**:\n• 純水 pH 7\n• 血液 pH 7.4\n\n**鹼性**:\n• 小蘇打水 pH 8\n• 肥皂水 pH 10\n• 漂白水 pH 12'
              }
            ]
          },
          {
            title: 'pH與環境保育',
            blocks: [
              {
                type: 'text',
                content: '**案例1**: 櫻花鉤吻鮭需要pH 7-8的清水\n**案例2**: 珊瑚需要pH 8.1-8.4，海洋酸化威脅珊瑚生存\n**案例3**: 酸雨pH<5.6會傷害植物和建築'
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
      id: 'w11d2-vocabulary',
      name: '語文',
      icon: '📝',
      lesson: {
        title: '保育詞彙',
        sections: [
          {
            title: '重點詞彙',
            blocks: [
              {
                type: 'text',
                content: '**1. 保育法**: 保護野生動植物的法律規範\n**2. 瀕危物種**: 面臨滅絕危機的生物\n**3. 國寶魚**: 櫻花鉤吻鮭\n**4. 候鳥**: 隨季節遷徙的鳥類\n**5. 地質遺跡**: 具科學價值的地質構造'
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
      id: 'w11d2-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第2天總結',
        sections: [
          {
            title: '學習重點',
            blocks: [
              {
                type: 'text',
                content: '**社會**: 五大國家公園各有特色，保護不同生態系統\n**數學**: 等量公理一(加減)，解一元一次方程式\n**科學**: pH值0-14，酸鹼中性的數字表示\n**語文**: 保育法、瀕危物種、國寶魚等詞彙\n\n**跨學科連結**: 保護平衡——生態平衡、等式平衡、pH平衡'
              }
            ]
          }
        ]
      }
    }
  ]
}

export default day2
