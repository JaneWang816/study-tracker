// src/data/weeks/week15/day1.js
// 第15週 - 第一天：我以為我不用記

// W15D1 練習題生成器 - 改良版(使用洗牌機制)

import { shuffleArray, shuffleOptions } from '../../utils'

// 【體驗式實驗】任務A：簡單問題（模擬可以用AI）
const taskAQuestions = [
  {
    type: 'options',
    question: '【任務A-1】台灣最長的河流是?',
    options: ['濁水溪', '高屏溪', '淡水河', '大甲溪'],
    answer: 0,
    displayAnswer: '濁水溪',
    note: '(如果可以用AI,這題很簡單)'
  },
  {
    type: 'options',
    question: '【任務A-2】圓面積公式是?',
    options: ['πr', 'πr²', '2πr', 'πd'],
    answer: 1,
    displayAnswer: 'πr²',
    note: '(如果可以用AI,這題很簡單)'
  },
  {
    type: 'options',
    question: '【任務A-3】溫室效應是什麼?',
    options: [
      '溫室裡很熱',
      '大氣層中的氣體吸收地表輻射,使地表溫度上升',
      '地球離太陽越來越近',
      '工廠排放廢氣'
    ],
    answer: 1,
    displayAnswer: '大氣層中的氣體吸收地表輻射,使地表溫度上升',
    note: '(如果可以用AI,這題很簡單)'
  },
  {
    type: 'options',
    question: '【任務A-4】台灣有幾個國家公園?',
    options: ['3個', '5個', '9個', '10個'],
    answer: 2,
    displayAnswer: '9個',
    note: '(如果可以用AI,這題很簡單)'
  },
  {
    type: 'options',
    question: '【任務A-5】民主的核心概念是什麼?',
    options: [
      '投票',
      '多數決＋少數保障＋人民主權',
      '選總統',
      '開會'
    ],
    answer: 1,
    displayAnswer: '多數決＋少數保障＋人民主權',
    note: '(如果可以用AI,這題很簡單)'
  }
]

const generateTaskAQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(taskAQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// 【體驗式實驗】任務B：進階挑戰（需要知識基礎）
const taskBQuestions = [
  {
    type: 'options',
    question: '【任務B-1】AI告訴你「台灣最熱的地方是台北」,這合理嗎?',
    options: [
      '合理,台北是首都所以最熱',
      '需要更多資訊才能判斷:台北有熱島效應,但「最熱」要看測量標準',
      '不合理,台北在北部應該比較冷',
      'AI說的一定對'
    ],
    answer: 1,
    displayAnswer: '需要更多資訊才能判斷:台北有熱島效應,但「最熱」要看測量標準',
    explanation: '如果你記得W4的氣候、W13的都市議題,你會知道要質疑「最熱」的定義'
  },
  {
    type: 'options',
    question: '【任務B-2】AI算出「你家到學校最短路線3.2公里」,地圖比例尺1:50000,圖上應該是幾公分?',
    options: ['3.2公分', '6.4公分', '16公分', '無法計算'],
    answer: 1,
    displayAnswer: '6.4公分',
    explanation: '如果你記得W4的比例尺:3200m ÷ 50000 = 0.064m = 6.4cm'
  },
  {
    type: 'options',
    question: '【任務B-3】新聞說「今年CO₂濃度創新高!」但沒給數據。你要問AI什麼,才能判斷是否危言聳聽?',
    options: [
      '「CO₂是什麼?」',
      '「現在濃度多少ppm?歷史平均值?增加速度?」',
      '「這新聞是真的嗎?」',
      '「CO₂有害嗎?」'
    ],
    answer: 1,
    displayAnswer: '「現在濃度多少ppm?歷史平均值?增加速度?」',
    explanation: '如果你記得W13的氣候變遷知識,你知道該問具體數據'
  },
  {
    type: 'options',
    question: '【任務B-4】AI建議你的作文寫「民主就是投票」,這說法完整嗎?',
    options: [
      '完整,民主就是投票',
      'AI說的都對',
      '不完整,民主還包括:多數決+少數保障、代表與參與、公共利益與個人權利',
      '不知道'
    ],
    answer: 2,
    displayAnswer: '不完整,民主還包括:多數決+少數保障、代表與參與、公共利益與個人權利',
    explanation: '如果你記得W9的民主概念,你會知道這說法太簡化'
  },
  {
    type: 'options',
    question: '【任務B-5】有人說「AI告訴我玉山國家公園有北極熊」,你如何判斷這是AI幻覺?',
    options: [
      'AI不會錯',
      '根據W11學的知識:玉山國家公園在台灣,保育對象是高山生態和台灣黑熊,不可能有北極熊',
      '不知道',
      '可能真的有'
    ],
    answer: 1,
    displayAnswer: '根據W11學的知識:玉山國家公園在台灣,保育對象是高山生態和台灣黑熊,不可能有北極熊',
    explanation: '如果你記得W11的內容,馬上知道這是錯的'
  }
]

const generateTaskBQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(taskBQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// 【核心概念】記憶的作用練習題庫
const memoryQuestions = [
  {
    type: 'options',
    question: '為什麼「腦中有知識」很重要?',
    options: [
      '為了考試',
      '因為沒有知識基礎,連AI給的答案對不對都不知道',
      '為了炫耀',
      '因為老師說的'
    ],
    answer: 1,
    displayAnswer: '因為沒有知識基礎,連AI給的答案對不對都不知道'
  },
  {
    type: 'options',
    question: '記憶的第一個作用是?',
    options: [
      '背很多東西',
      '即時判斷(不用每次都查)',
      '考試考高分',
      '讓別人佩服'
    ],
    answer: 1,
    displayAnswer: '即時判斷(不用每次都查)'
  },
  {
    type: 'options',
    question: '記憶的第二個作用:「有效提問」是指?',
    options: [
      '問很多問題',
      '知道該用什麼詞彙、該問什麼,才能得到有用的答案',
      '問老師問題',
      '不懂就問'
    ],
    answer: 1,
    displayAnswer: '知道該用什麼詞彙、該問什麼,才能得到有用的答案'
  },
  {
    type: 'options',
    question: '為什麼「腦中同時有A和B的知識」,才能看出兩者的關係?',
    options: [
      '因為要考試',
      '因為思考需要即時調用知識,如果要查詢會中斷思路',
      '因為記憶力好',
      '因為比較聰明'
    ],
    answer: 1,
    displayAnswer: '因為思考需要即時調用知識,如果要查詢會中斷思路'
  },
  {
    type: 'options',
    question: '「大腦像廚房,知識像食材」這個比喻,「空廚房」代表什麼?',
    options: [
      '很乾淨',
      '腦中沒有知識,每次都要出門買菜(查資料),很慢且不知道該買什麼',
      '很整齊',
      '準備做菜'
    ],
    answer: 1,
    displayAnswer: '腦中沒有知識,每次都要出門買菜(查資料),很慢且不知道該買什麼'
  },
  {
    type: 'options',
    question: '記憶的第五個作用是「創意創造」,為什麼?',
    options: [
      '因為記得多就有創意',
      '因為創造需要重組素材,腦中沒有素材就無法創造',
      '因為藝術家記憶力好',
      '因為考試要考'
    ],
    answer: 1,
    displayAnswer: '因為創造需要重組素材,腦中沒有素材就無法創造'
  },
  {
    type: 'options',
    question: 'AI像外送,優點是方便,缺點是?',
    options: [
      '太貴',
      '會斷線(沒網路)、送錯(幻覺)、太慢(中斷思考流程)',
      '不好吃',
      '沒有缺點'
    ],
    answer: 1,
    displayAnswer: '會斷線(沒網路)、送錯(幻覺)、太慢(中斷思考流程)'
  },
  {
    type: 'options',
    question: '什麼樣的知識應該「記在腦中」?',
    options: [
      '所有知識都要背',
      '考試會考的',
      '需要3秒內回答、經常用到、是其他知識基礎的核心知識',
      '老師說要背的'
    ],
    answer: 2,
    displayAnswer: '需要3秒內回答、經常用到、是其他知識基礎的核心知識'
  }
]

const generateMemoryQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(memoryQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// 【自我檢測】14週核心知識練習題庫
const coreKnowledgeQuestions = [
  // 地理類
  {
    type: 'options',
    question: '【地理】台灣最長的河流是?',
    options: ['濁水溪', '高屏溪', '淡水河', '大甲溪'],
    answer: 0,
    displayAnswer: '濁水溪',
    category: '地理'
  },
  {
    type: 'options',
    question: '【地理】台灣最高的山是?',
    options: ['玉山', '雪山', '合歡山', '阿里山'],
    answer: 0,
    displayAnswer: '玉山',
    category: '地理'
  },
  {
    type: 'options',
    question: '【地理】台灣有幾個國家公園?',
    options: ['5個', '7個', '9個', '11個'],
    answer: 2,
    displayAnswer: '9個',
    category: '地理'
  },
  
  // 數學類
  {
    type: 'options',
    question: '【數學】圓面積公式是?',
    options: ['πr', 'πr²', '2πr', 'πd'],
    answer: 1,
    displayAnswer: 'πr²',
    category: '數學'
  },
  {
    type: 'options',
    question: '【數學】圓周長公式是?',
    options: ['πr', 'πr²', '2πr', 'πd²'],
    answer: 2,
    displayAnswer: '2πr 或 πd',
    category: '數學'
  },
  {
    type: 'options',
    question: '【數學】速率公式是?',
    options: ['距離÷時間', '時間÷距離', '距離×時間', '距離+時間'],
    answer: 0,
    displayAnswer: '速率 = 距離 ÷ 時間',
    category: '數學'
  },
  {
    type: 'options',
    question: '【數學】解方程式 x + 8 = 15,x = ?',
    options: ['7', '23', '8', '15'],
    answer: 0,
    displayAnswer: '7',
    category: '數學'
  },
  
  // 科學類
  {
    type: 'options',
    question: '【科學】溫室效應的主要溫室氣體是?',
    options: ['氧氣', '氮氣', '二氧化碳', '氫氣'],
    answer: 2,
    displayAnswer: '二氧化碳(CO₂)',
    category: '科學'
  },
  {
    type: 'options',
    question: '【科學】酸性物質的pH值範圍是?',
    options: ['pH < 7', 'pH = 7', 'pH > 7', 'pH = 0'],
    answer: 0,
    displayAnswer: 'pH < 7',
    category: '科學'
  },
  {
    type: 'options',
    question: '【科學】台灣的地震主要原因是?',
    options: [
      '火山爆發',
      '板塊碰撞(菲律賓海板塊與歐亞板塊)',
      '地底空洞',
      '地球自轉'
    ],
    answer: 1,
    displayAnswer: '板塊碰撞(菲律賓海板塊與歐亞板塊)',
    category: '科學'
  },
  
  // 公民類
  {
    type: 'options',
    question: '【公民】民主的三大核心概念是?',
    options: [
      '投票、選舉、開會',
      '多數決+少數保障、代表與參與、公共利益與個人權利',
      '總統、立委、法官',
      '自由、平等、博愛'
    ],
    answer: 1,
    displayAnswer: '多數決+少數保障、代表與參與、公共利益與個人權利',
    category: '公民'
  },
  {
    type: 'options',
    question: '【公民】SDGs有幾個目標?',
    options: ['10個', '15個', '17個', '20個'],
    answer: 2,
    displayAnswer: '17個',
    category: '公民'
  },
  {
    type: 'options',
    question: '【公民】SDGs的目標年是?',
    options: ['2025年', '2030年', '2040年', '2050年'],
    answer: 1,
    displayAnswer: '2030年',
    category: '公民'
  }
]

const generateCoreKnowledgeQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(coreKnowledgeQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

export {
  generateTaskAQuestion,
  generateTaskBQuestion,
  generateMemoryQuestion,
  generateCoreKnowledgeQuestion
}

// ==========================================
// Day 1 資料
// ==========================================

const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🧠',
  color: '#3498DB',
  title: '我以為我不用記',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '《學習的旅程》第一章：那天我發現的事',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'text',
                content: '我是小傑，一個六年級學生。\n\n14週前，當老師說我們要開始「自主學習」時，我心想：「太好了！不用考試、不用背書、有AI可以問，學習變簡單了！」\n\n那時候，我真的以為：**既然AI什麼都知道，我就不用記那麼多了。**'
              },
              {
                type: 'text',
                content: '有一次，我在寫數學。\n\n題目：「一台車時速60公里，開了2.5小時，走了多遠？」\n\n我不記得公式，就問AI：「速率怎麼算？」\n\nAI答：「速率 = 距離 ÷ 時間。」\n\n我又問：「那這題答案是？」\n\nAI算出：「150公里。」\n\n我抄下來，很開心。**3秒解決！**',
                author: '《學習的旅程》節選'
              },
              {
                type: 'text',
                content: '但後來，有一天發生了一件事。\n\n那天網路壞了，我手邊的題目是：\n\n「小明走了300公里，花了5小時，平均時速是多少？」\n\n我看著題目，完全不知道怎麼算。\n\n我知道跟「速率」有關，但公式是什麼？是距離÷時間，還是時間÷距離？\n\n我試了兩種，一個答案60，一個答案0.017。哪個對？\n\n**我不知道。**'
              },
              {
                type: 'text',
                content: '那一刻我才發現：\n\n**我以為我「會」，但其實我只是「會問AI」。**\n\n如果AI不在，我什麼都不會。\n\n更糟的是，就算AI在，我也不知道它給的答案對不對。\n\n因為**我腦中沒有知識，連判斷的基礎都沒有。**'
              },
              {
                type: 'text',
                content: '那天之後，我開始思考：\n\n• 為什麼有些東西必須記在腦中？\n• 記憶真的只是為了考試嗎？\n• AI時代，記憶還有什麼用？\n\n這14週的學習旅程，我慢慢找到了答案。\n\n今天，我想跟你分享我的發現。'
              }
            ]
          },
          {
            title: '帶著問題開始今天的學習',
            blocks: [
              {
                type: 'text',
                content: '讀完小傑的故事，想想：\n\n① 你有過類似的經驗嗎？（依賴AI，結果發現自己不會）\n② 為什麼「會問AI」不等於「真的會」？\n③ AI時代，記憶的作用是什麼？\n\n今天，我們要透過實際體驗來回答這些問題。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：體驗式實驗
    // ==========================================
    {
      id: 'experiment-tasks',
      name: '體驗：沒有知識的困境',
      icon: '🧪',
      lesson: {
        title: '挑戰任務：你真的不需要記憶嗎？',
        sections: [
          {
            title: '實驗說明',
            blocks: [
              {
                type: 'text',
                content: '接下來，你要做兩組任務：\n\n**任務A**：假設你可以用AI（5題簡單問題）\n**任務B**：假設網路斷線，AI無法使用（5題需要知識判斷的問題）\n\n這個實驗的目的不是測試你，而是讓你**親身體驗**：\n• 沒有知識基礎時的困境\n• 為什麼光靠AI是不夠的\n• 記憶在學習中的真正作用\n\n準備好了嗎？讓我們開始。'
              }
            ]
          },
          {
            title: '任務A：簡單問題（想像可以用AI）',
            blocks: [
              {
                type: 'text',
                content: '【情境】你有網路，可以問AI任何問題。\n\n接下來的5題，如果你不知道答案，想像一下「我問AI就好了」：\n\n1. 台灣最長的河流是哪一條？\n2. 圓面積公式是什麼？\n3. 什麼是溫室效應？\n4. 台灣有幾個國家公園？\n5. 民主的核心概念是什麼？\n\n→ 很簡單對吧？問AI，幾秒就有答案。\n\n**現在做任務A的練習題（5題）。**'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateTaskAQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元二：任務B與反思
    // ==========================================
    {
      id: 'task-b-reflection',
      name: '體驗：進階挑戰',
      icon: '⚡',
      lesson: {
        title: '任務B：網路斷線了！',
        sections: [
          {
            title: '情境轉換',
            blocks: [
              {
                type: 'text',
                content: '【突然！網路斷線了】\n\n你手邊沒有網路，AI無法使用。\n\n但你面對的問題需要**判斷**、**整合知識**、**批判思考**：\n\n1. AI告訴你「台灣最熱的地方是台北」，合理嗎？\n   → 需要W4氣候知識＋W13都市議題，才能判斷\n\n2. AI算出距離3.2公里，地圖比例尺1:50000，圖上幾公分？\n   → 需要W4比例尺知識，才會算\n\n3. 新聞說「CO₂濃度創新高」沒給數據，要問AI什麼？\n   → 需要W13氣候知識，才知道該問什麼\n\n4. AI說「民主就是投票」，完整嗎？\n   → 需要W9民主概念，才能補充\n\n5. 有人說「玉山國家公園有北極熊」，如何判斷是AI幻覺？\n   → 需要W11國家公園知識，才能識破\n\n**你發現了嗎？沒有知識基礎，連AI都幫不了你。**'
              }
            ]
          },
          {
            title: '現在做任務B',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習題，測試你是否有**知識基礎**來判斷、整合、批判。\n\n如果你答對了：恭喜！你的知識基礎扎實。\n如果你答錯了：不要灰心，這正是要讓你發現「知識的重要性」。\n\n**重點不是分數，而是體驗「沒有知識」的困境。**'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateTaskBQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元三：記憶的真正作用
    // ==========================================
    {
      id: 'memory-purpose',
      name: '核心：記憶的真正作用',
      icon: '💡',
      lesson: {
        title: '為什麼腦中要有知識？',
        sections: [
          {
            title: '錯誤觀念 vs 實際情況',
            blocks: [
              {
                type: 'text',
                content: '很多人（包括以前的小傑）有這些錯誤觀念：\n\n❌ **錯誤觀念1**：「AI都記得，我不用記」\n✓ **實際情況**：沒有知識，你無法判斷AI對不對\n\n❌ **錯誤觀念2**：「不會就問AI」\n✓ **實際情況**：不知道該問什麼，問出來的也沒用\n\n❌ **錯誤觀念3**：「AI會解釋」\n✓ **實際情況**：沒有基礎，聽不懂解釋\n\n❌ **錯誤觀念4**：「理解概念就好，不用記細節」\n✓ **實際情況**：沒有具體知識，概念是空的\n\n❌ **錯誤觀念5**：「需要時再查」\n✓ **實際情況**：思考需要即時調用，查詢會中斷思路'
              }
            ]
          },
          {
            title: '真實情境演練',
            blocks: [
              {
                type: 'text',
                content: '【情境1：AI幻覺】\n\nAI說：「台灣最高山是富士山，海拔3952公尺。」\n\n• **如果你腦中沒有知識**：「哦，原來是富士山！」（被騙了）\n• **如果你記得**：「不對！玉山才是台灣最高山，海拔3952公尺。富士山在日本。」\n\n**結論：沒有知識，連AI錯了都不知道。**'
              },
              {
                type: 'text',
                content: '【情境2：無法提問】\n\n看到新聞：「地球怎麼了？科學家警告！」\n\n• **如果你腦中沒有知識**：\n  問AI：「地球怎麼了？」\n  AI給你地質史，不是你要的。\n\n• **如果你記得W13氣候知識**：\n  問AI：「工業革命後碳排放增加多少？」「1.5°C目標進度如何？」\n  AI給出精準答案。\n\n**結論：知識決定你能問出什麼品質的問題。**'
              },
              {
                type: 'text',
                content: '【情境3：無法連結】\n\n看到新聞：「台灣綠能突破20%！」\n\n• **如果你不記得W10學的「2020年5.4%」**：\n  「哦，20%，不知道算多還是少。」\n\n• **如果你記得**：\n  「從5.4%到20%，成長3.7倍，這進步很大！但要達到2025年目標還不夠。」\n\n**結論：記憶讓你能連結、比較、判斷。**'
              }
            ]
          },
          {
            title: '實驗：記憶與思考的關係',
            blocks: [
              {
                type: 'text',
                content: '【實驗】給你30秒，**不用AI**，盡可能回答：\n\n1. 列出3種再生能源\n2. 說出2個台灣的國家公園\n3. 寫出圓周率π的近似值\n4. 解釋什麼是「比例尺」\n5. 舉例一個台灣民主化的重要事件\n\n**能答出來的**：\n→ 因為這些知識在你腦中，你可以即時調用\n\n**答不出來的**：\n→ 即使給你AI，你也不知道該問什麼\n→ 或者，查詢的時間已經中斷你的思考流程\n\n**結論：思考速度取決於知識調用速度。沒有知識，就無法流暢思考。**'
              }
            ]
          },
          {
            title: '記憶的五大作用',
            blocks: [
              {
                type: 'text',
                content: '記憶不是為了背誦，而是為了：\n\n**1. 即時判斷**\n• 不用每次都查，立刻知道對不對\n• 例：聽到「台灣最高山是富士山」，馬上知道是錯的\n\n**2. 有效提問**\n• 知道該用什麼詞彙、該問什麼\n• 例：看到氣候新聞，知道要問「ppm」「增加速度」「歷史數據」\n\n**3. 快速連結**\n• 腦中同時有A和B，才能看出關係\n• 例：看到「綠能20%」，想起「2020年5.4%」，能判斷進步程度\n\n**4. 深度思考**\n• 同時調用多個知識點，查詢會中斷思路\n• 例：寫作文需要同時用到文學、歷史、科學知識，不可能邊寫邊查\n\n**5. 創意創造**\n• 創造需要重組素材，沒有素材就無法創造\n• 例：設計科展，需要整合各科知識，腦中沒有就想不出來'
              }
            ]
          },
          {
            title: '比喻：大腦像廚房',
            blocks: [
              {
                type: 'text',
                content: '想像**大腦是廚房，知識是食材**：\n\n【空廚房】（腦中沒有知識）\n• 想做菜，每次都要出門買食材 → **超慢**\n• 不知道這道菜需要什麼食材 → **不知道該買什麼**\n• 不知道食材可以組合出什麼菜 → **無法創新**\n• 冰箱空空，臨時想做就做不出來 → **無法應變**\n\n【備好食材】（腦中有知識）\n• 想做菜，馬上從冰箱拿食材 → **很快**\n• 一看就知道這菜合不合理 → **能判斷**\n• 可以自由搭配，創造新菜色 → **能創新**\n• 隨時能變化 → **靈活應用**'
              },
              {
                type: 'text',
                content: '【AI像外送】\n\n外送的好處：\n• 方便，不用自己做\n• 選擇多\n\n外送的問題：\n• 要知道有哪些菜才會點 → **沒知識，連要點什麼都不知道**\n• 要知道什麼好吃才會選 → **沒嚐過，不知道好壞**\n• 外送只能吃標準菜色，無法創新 → **無法客製化**\n• 外送會斷線（沒網路） → **不可靠**\n• 外送可能送錯（AI幻覺） → **需要判斷**\n• 外送太慢，會餓死（中斷思考） → **影響效率**\n\n**結論：會做菜的人，偶爾叫外送沒問題。不會做菜的人，只能餓肚子或被騙。**'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMemoryQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元四：建立個人知識庫
    // ==========================================
    {
      id: 'personal-knowledge-base',
      name: '實作：我的知識庫',
      icon: '📚',
      lesson: {
        title: '建立你的核心知識清單',
        sections: [
          {
            title: '什麼知識應該「記在腦中」？',
            blocks: [
              {
                type: 'text',
                content: '不是所有知識都要背。\n\n【應該記在腦中的知識】有三個特徵：\n\n1. **需要3秒內回答**\n   • 即時判斷、快速連結需要的知識\n   • 例：圓面積公式、台灣最高山、民主核心概念\n\n2. **經常用到**\n   • 頻繁使用的工具性知識\n   • 例：速率公式、比例尺計算、基本詞彙\n\n3. **是其他知識的基礎**\n   • 沒有這個，其他知識無法理解\n   • 例：不記得「什麼是民主」，就無法理解民主化歷程\n\n【不一定要記住的知識】：\n• 細節性資料（某年某月某日發生的事）\n• 一次性使用的資訊（某個特定報告的數據）\n• 可以推導出來的（知道公式，就能算出答案）'
              }
            ]
          },
          {
            title: '練習：盤點14週核心知識',
            blocks: [
              {
                type: 'text',
                content: '現在，請你在筆記本上列出「必須記在腦中」的核心知識：\n\n【地理類】（至少5項）\n例如：\n• 台灣最高山：玉山\n• 台灣最長河流：濁水溪\n• 台灣位置：北緯23-25度、東經120-122度\n• 國家公園數量：9個\n• （繼續列出...）\n\n【數學類】（至少8項）\n例如：\n• 圓面積：πr²\n• 圓周長：2πr 或 πd\n• 速率：距離÷時間\n• 比例尺：圖上距離÷實際距離\n• （繼續列出...）\n\n【科學類】（至少8項）\n例如：\n• 溫室氣體：CO₂、甲烷\n• 酸性：pH < 7\n• 地震成因：板塊碰撞\n• （繼續列出...）\n\n【公民類】（至少5項）\n例如：\n• 民主三核心：多數決+少數保障、代表與參與、公共利益與個人權利\n• SDGs數量：17個目標\n• SDGs目標年：2030年\n• （繼續列出...）'
              }
            ]
          },
          {
            title: '自我檢測',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習題，測試你對14週核心知識的記憶。\n\n標準：**3秒內能回答**，不需要查資料。\n\n• 答對：太棒了！這些知識已經在你的「個人知識庫」中。\n• 答錯：沒關係，標記起來，這些是需要加強記憶的。\n\n**重點不是全部答對，而是知道自己哪些知識還不夠扎實。**\n\n這就是「後設認知」：知道自己知道什麼、不知道什麼。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 8,
        generator: generateCoreKnowledgeQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            // fill 題：接受多種答案形式
            const correctAnswers = ['濁水溪', '玉山', 'πr²', 'πr2', '3.14r²', '2πr', 'πd', '3.14×2×r']
            const userInput = String(userAnswer).trim()
            
            // 特殊處理：數學公式可能有多種寫法
            if (question.answer === 'πr²') {
              return userInput === 'πr²' || userInput === 'πr2' || userInput === '3.14r²' || userInput === 'πr平方'
            }
            if (question.answer === '2πr') {
              return userInput === '2πr' || userInput === 'πd' || userInput === '2×πr' || userInput === '2*π*r'
            }
            
            return userInput === question.answer
          }
        }
      }
    },

    // ==========================================
    // 收尾：今日反思
    // ==========================================
    {
      id: 'closing-reflection',
      name: '今日反思',
      icon: '💭',
      lesson: {
        title: '回到開場的問題',
        sections: [
          {
            title: '重新理解小傑的故事',
            blocks: [
              {
                type: 'text',
                content: '還記得開場的小傑嗎？\n\n他以為：「AI都知道，我不用記。」\n結果發現：**沒有知識基礎，連AI都幫不了他。**\n\n現在你體驗過任務A和任務B，你明白了：\n\n**任務A**（簡單問題）：\n• AI可以回答\n• 看起來很方便\n• **但這是假象**\n\n**任務B**（需要判斷的問題）：\n• AI可能給錯誤答案\n• 你需要知識來判斷\n• 你需要知識來提問\n• 你需要知識來連結\n• **沒有知識，就完全無助**\n\n**小傑的發現，也是你的發現。**'
              }
            ]
          },
          {
            title: '今天學到的核心概念',
            blocks: [
              {
                type: 'text',
                content: '【關於記憶】\n• 記憶不是為了背誦，是為了判斷、提問、連結、思考、創造\n• 沒有知識基礎，連AI給的答案對不對都不知道\n• **知識是思考的燃料，沒有燃料就無法思考**\n\n【關於AI】\n• AI是工具，但工具需要會用的人\n• AI像外送，偶爾用很方便，但不能完全依賴\n• **會做菜的人（有知識），偶爾叫外送（用AI）沒問題；不會做菜的人（沒知識），只能餓肚子**\n\n【關於學習】\n• 「會問AI」≠「真的會」\n• 依賴AI = 表面上會，實際上不懂\n• 善用AI = 自己有知識基礎，用AI輔助\n• **學習的目標不是「問得到答案」，而是「真正理解」**\n\n【關於後設認知】\n• 知道自己知道什麼、不知道什麼\n• 這樣才能判斷該學什麼、該問什麼\n• **自我檢測是學習的關鍵**'
              }
            ]
          },
          {
            title: '給自己的提醒',
            blocks: [
              {
                type: 'text',
                content: '今天的體驗，希望你記住：\n\n**1. 不要欺騙自己**\n• 「會問AI」不等於「真的會」\n• 「抄答案」不等於「理解」\n• 誠實面對自己的不足\n\n**2. 建立你的知識庫**\n• 核心知識要記在腦中\n• 不是全部都背，而是記住最重要的\n• 定期檢視：這些知識我3秒內能回答嗎？\n\n**3. 善用AI，不依賴AI**\n• AI是助手，不是替身\n• 先自己思考，再問AI\n• 用AI驗證，而不是用AI取代思考\n\n**4. 記住這個比喻**\n• 大腦是廚房，知識是食材\n• AI是外送\n• 會做菜的人，偶爾叫外送沒問題\n• 不會做菜的人，只能餓肚子或被騙\n\n**你要成為「會做菜的人」。**'
              }
            ]
          },
          {
            title: '明天預告',
            blocks: [
              {
                type: 'text',
                content: '今天我們發現：**沒有知識，連AI都幫不了你。**\n\n明天（Day 2），我們要探討：\n\n**「學會問問題」**\n\n• 為什麼知識決定問題的品質？\n• 什麼是好問題？\n• 如何從「空泛問題」進化到「結構化問題」？\n• AI時代，提問能力為什麼是核心能力？\n\n我們會用對比實驗：\n• 學生A：問空泛問題 → AI回答沒用\n• 學生B：問結構化問題 → AI給出精準答案\n\n**差別在哪裡？在於腦中有沒有知識基礎。**\n\n今天好好休息，明天見！'
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
