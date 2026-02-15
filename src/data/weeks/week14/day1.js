// src/data/weeks/week14/day1.js
// 第14週 - 第一天：AI是什麼？

// W14D1 練習題生成器 - 改良版(使用洗牌機制)

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】SDGs基礎概念練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: 'SDGs的全名是什麼?',
    options: [
      'Sustainable Development Goals(永續發展目標)',
      'Scientific Development Goals(科學發展目標)',
      'Social Development Goals(社會發展目標)',
      'Special Digital Goals(特殊數位目標)'
    ],
    answer: 0,
    displayAnswer: 'Sustainable Development Goals(永續發展目標)'
  },
  {
    type: 'options',
    question: 'SDGs一共有幾個目標?',
    options: ['10個', '15個', '17個', '20個'],
    answer: 2,
    displayAnswer: '17個'
  },
  {
    type: 'options',
    question: 'SDGs是由哪個國際組織提出的?',
    options: ['世界銀行', '聯合國', 'WHO世界衛生組織', 'UNESCO聯合國教科文組織'],
    answer: 1,
    displayAnswer: '聯合國'
  },
  {
    type: 'options',
    question: '下列哪一項「不是」SDGs的目標?',
    options: ['消除貧窮', '消除飢餓', '優質教育', '增加軍事力量'],
    answer: 3,
    displayAnswer: '增加軍事力量'
  },
  {
    type: 'options',
    question: 'SDG 13是關於什麼議題?',
    options: ['健康福祉', '氣候行動', '性別平等', '清潔能源'],
    answer: 1,
    displayAnswer: '氣候行動'
  },
  {
    type: 'options',
    question: '台灣雖然不是聯合國會員國,但政府仍然推動SDGs。這說明了什麼?',
    options: [
      '台灣只是做做樣子',
      '永續發展是全球共同責任,不分國家身分',
      '台灣被強迫執行',
      '只有聯合國會員才需要做SDGs'
    ],
    answer: 1,
    displayAnswer: '永續發展是全球共同責任,不分國家身分'
  },
  {
    type: 'options',
    question: 'SDGs的17個目標中,哪些面向是主要關注的?',
    options: [
      '只關注環境保護',
      '只關注經濟發展',
      '環境、社會、經濟三個面向',
      '只關注科技發展'
    ],
    answer: 2,
    displayAnswer: '環境、社會、經濟三個面向'
  },
  {
    type: 'options',
    question: '六年級學生可以為SDGs做什麼?',
    options: [
      '什麼都不能做,這是大人的事',
      '只能等長大後才能做',
      '可以從日常生活做起,例如節約用水、減少浪費',
      '只有政府官員才能推動SDGs'
    ],
    answer: 2,
    displayAnswer: '可以從日常生活做起,例如節約用水、減少浪費'
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

// 【科學】AI基礎概念練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: 'AI(人工智慧)最基本的定義是什麼?',
    options: [
      '讓機器像人一樣思考和學習',
      '讓機器變得更快',
      '讓機器可以連上網路',
      '讓機器可以說話'
    ],
    answer: 0,
    displayAnswer: '讓機器像人一樣思考和學習'
  },
  {
    type: 'options',
    question: '機器學習的基本原理是什麼?',
    options: [
      '機器自己會思考',
      '給大量資料,讓機器找出規律',
      '程式設計師告訴機器每個答案',
      '機器會讀書'
    ],
    answer: 1,
    displayAnswer: '給大量資料,讓機器找出規律'
  },
  {
    type: 'options',
    question: '下列哪個「不是」生活中常見的AI應用?',
    options: ['語音助理(Siri、Google助理)', '人臉辨識解鎖', '電風扇', '推薦系統(YouTube推薦影片)'],
    answer: 2,
    displayAnswer: '電風扇(這是傳統電器,沒有AI功能)'
  },
  {
    type: 'options',
    question: 'AI可以做什麼?',
    options: [
      '辨識圖片中的物體',
      '理解人類的所有情感',
      '永遠不會犯錯',
      '完全取代人類思考'
    ],
    answer: 0,
    displayAnswer: '辨識圖片中的物體'
  },
  {
    type: 'options',
    question: 'AI「不能」做什麼?',
    options: [
      '快速計算數學',
      '下棋',
      '真正理解文字的「意義」',
      '翻譯語言'
    ],
    answer: 2,
    displayAnswer: '真正理解文字的「意義」(AI只是找統計規律,不是真正理解)'
  },
  {
    type: 'options',
    question: 'ChatGPT為什麼有時候會說錯或產生「幻覺」?',
    options: [
      '因為它故意騙人',
      '因為它是根據機率預測下一個字,不是真的理解',
      '因為它太笨了',
      '因為它沒有網路'
    ],
    answer: 1,
    displayAnswer: '因為它是根據機率預測下一個字,不是真的理解'
  },
  {
    type: 'options',
    question: '如果你問AI:「台灣最高的山是什麼?」AI回答「富士山」,這代表什麼?',
    options: [
      '富士山真的在台灣',
      'AI產生了幻覺(錯誤資訊)',
      'AI一定是對的',
      '台灣有兩座最高的山'
    ],
    answer: 1,
    displayAnswer: 'AI產生了幻覺(錯誤資訊),正確答案是玉山'
  },
  {
    type: 'options',
    question: 'AI時代,人類最需要具備什麼能力?',
    options: [
      '完全不用學習,因為AI都會',
      '批判思考,能判斷AI給的答案對不對',
      '背誦更多知識',
      '學會寫程式就好'
    ],
    answer: 1,
    displayAnswer: '批判思考,能判斷AI給的答案對不對'
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

// 【數學】W1-W3綜合複習練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '在數線上,下列哪個數最小?',
    options: ['-8', '-3', '0', '+2'],
    answer: 0,
    displayAnswer: '-8'
  },
  {
    type: 'options',
    question: '溫度從-5°C上升12°C後,現在是幾度?',
    options: ['3°C', '7°C', '17°C', '-17°C'],
    answer: 1,
    displayAnswer: '7°C'
  },
  {
    type: 'options',
    question: '12和18的最大公因數是多少?',
    options: ['2', '3', '6', '12'],
    answer: 2,
    displayAnswer: '6'
  },
  {
    type: 'options',
    question: '24和36的最大公因數是多少?',
    options: ['4', '6', '12', '24'],
    answer: 2,
    displayAnswer: '12'
  },
  {
    type: 'options',
    question: '比3:5等值的比是?',
    options: ['6:10', '6:15', '9:10', '5:3'],
    answer: 0,
    displayAnswer: '6:10'
  },
  {
    type: 'options',
    question: '比12:18化成最簡比是?',
    options: ['6:9', '4:6', '3:2', '2:3'],
    answer: 3,
    displayAnswer: '2:3'
  },
  {
    type: 'options',
    question: '2/3 ÷ 1/4 = ?',
    options: ['2/12', '8/3', '1/6', '3/8'],
    answer: 1,
    displayAnswer: '8/3'
  },
  {
    type: 'options',
    question: '地圖比例尺1:50000,圖上3公分代表實際多少公尺?',
    options: ['1500公尺', '15000公尺', '150公尺', '150000公尺'],
    answer: 0,
    displayAnswer: '1500公尺'
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
    
    if (question.type === 'options') {
      return shuffleOptions(question)
    }
    return { ...question }
  }
})()

// 【語文】科技與永續詞彙練習題庫
const vocabQuestions = [
  {
    type: 'options',
    question: '「人工智慧」的英文縮寫是?',
    options: ['AI', 'IT', 'IE', 'IC'],
    answer: 0,
    displayAnswer: 'AI(Artificial Intelligence)'
  },
  {
    type: 'options',
    question: '「永續發展」的意思是?',
    options: [
      '持續不斷地發展經濟',
      '滿足當代需求,同時不損害後代滿足需求的能力',
      '只關注環境保護',
      '讓企業永遠賺錢'
    ],
    answer: 1,
    displayAnswer: '滿足當代需求,同時不損害後代滿足需求的能力'
  },
  {
    type: 'options',
    question: '「機器學習」是指?',
    options: [
      '機器人去學校上課',
      '教機器使用工具',
      '讓機器從資料中學習規律',
      '機器自己會思考'
    ],
    answer: 2,
    displayAnswer: '讓機器從資料中學習規律'
  },
  {
    type: 'options',
    question: '「演算法」最簡單的解釋是?',
    options: [
      '很難的數學計算',
      '解決問題的步驟和規則',
      '只有電腦工程師懂的東西',
      '一種程式語言'
    ],
    answer: 1,
    displayAnswer: '解決問題的步驟和規則'
  },
  {
    type: 'options',
    question: '「訓練資料」在AI中的作用是?',
    options: [
      '讓AI變得更強壯',
      '提供給AI學習的範例和經驗',
      'AI的考試題目',
      'AI的教科書'
    ],
    answer: 1,
    displayAnswer: '提供給AI學習的範例和經驗'
  },
  {
    type: 'options',
    question: '「偏見」在AI的脈絡下是指?',
    options: [
      'AI討厭某些人',
      'AI因訓練資料不平衡而產生不公平的判斷',
      'AI有自己的意見',
      'AI故意歧視'
    ],
    answer: 1,
    displayAnswer: 'AI因訓練資料不平衡而產生不公平的判斷'
  }
]

const generateVocabQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(vocabQuestions)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

export {
  generateSocialQuestion,
  generateScienceQuestion,
  generateMathQuestion,
  generateVocabQuestion
}

// ==========================================
// Day 1 資料
// ==========================================

const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🤖',
  color: '#FF6B9D',
  title: 'AI是什麼？',

  units: [

    // ==========================================
    // 開場：體驗式實驗
    // ==========================================
    {
      id: 'opening-experiment',
      name: '開場實驗',
      icon: '🧪',
      lesson: {
        title: '挑戰任務：你真的不需要記憶嗎？',
        sections: [
          {
            title: '實驗說明',
            blocks: [
              {
                type: 'text',
                content: '今天我們要做一個實驗。\n\n很多人說：「AI記憶力這麼好，我就不用記東西了。」\n\n真的是這樣嗎？我們來試試看。'
              }
            ]
          },
          {
            title: '任務A：簡單問題（想像你可以用AI）',
            blocks: [
              {
                type: 'text',
                content: '如果你可以問AI，這些問題很簡單：\n\n1. 台灣最長的河流是哪一條？\n2. 圓面積公式是什麼？\n3. 什麼是溫室效應？\n4. 台灣有幾個國家公園？\n5. 民主的核心概念是什麼？\n\n→ 只要問AI，幾秒鐘就能得到答案。'
              }
            ]
          },
          {
            title: '任務B：進階挑戰（突然沒有AI了！）',
            blocks: [
              {
                type: 'text',
                content: '【模擬情境：網路斷線，AI無法使用】\n\n現在請回答這些問題：\n\n1. 小明用AI查到：「台灣最熱的地方是台北。」這合理嗎？為什麼？\n\n2. AI算出你家到學校的最短路線是3.2公里，地圖比例尺是1:50000，那在地圖上應該是幾公分？\n\n3. 新聞說：「今年CO₂濃度創新高！」但沒給具體數據。你要問AI什麼問題，才能判斷這新聞是否危言聳聽？\n\n4. AI建議你的作文這樣寫：「民主就是投票。」你覺得這個說法完整嗎？為什麼？\n\n5. 有人說：「AI告訴我玉山國家公園有北極熊。」你怎麼判斷這是AI的幻覺（錯誤）？'
              },
              {
                type: 'text',
                content: '【停下來想一想】\n\n任務A很簡單，任務B很難。\n\n為什麼？\n\n因為任務B需要你**腦中已經有知識**，才能：\n• 判斷AI說的對不對\n• 知道該問什麼問題\n• 連結不同的知識\n\n**如果你腦中是空的，連AI給的答案對不對都不知道。**'
              }
            ]
          },
          {
            title: '今天要探討的核心問題',
            blocks: [
              {
                type: 'text',
                content: '帶著這些問題，進入今天的學習：\n\n① AI真的可以取代記憶嗎？\n② AI能做什麼、不能做什麼？\n③ 在AI時代，我們為什麼還要學習？\n\n（不需要現在回答，在今天的課程結束時，你會有自己的答案。）'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — SDGs是什麼？
    // ==========================================
    {
      id: 'social-sdgs',
      name: '社會：認識SDGs',
      icon: '🌍',
      lesson: {
        title: 'SDGs：聯合國永續發展目標',
        sections: [
          {
            title: '什麼是SDGs？',
            blocks: [
              {
                type: 'text',
                content: 'SDGs = Sustainable Development Goals（永續發展目標）\n\n這是聯合國在2015年提出的**17個全球目標**，希望在2030年前讓世界變得更好。\n\n為什麼需要這些目標？\n\n因為地球面臨很多問題：\n• 貧窮：還有數億人每天生活費不到2美元\n• 飢餓：全球有8億人長期營養不良\n• 氣候變遷：極端天氣越來越頻繁\n• 不平等：教育、醫療資源分配不均\n• 環境破壞：森林消失、海洋污染\n\n這些問題互相影響，需要全世界一起解決。'
              }
            ]
          },
          {
            title: 'SDGs的17個目標',
            blocks: [
              {
                type: 'text',
                content: 'SDGs分成五大類：\n\n【人類（People）】\n1. 消除貧窮\n2. 消除飢餓\n3. 健康與福祉\n4. 優質教育\n5. 性別平等\n6. 清潔飲水與衛生\n\n【地球（Planet）】\n13. 氣候行動\n14. 水下生命\n15. 陸域生態\n\n【繁榮（Prosperity）】\n7. 可負擔的清潔能源\n8. 就業與經濟成長\n9. 工業、創新與基礎建設\n10. 減少不平等\n11. 永續城市\n\n【和平（Peace）】\n16. 和平、正義與健全制度\n\n【夥伴關係（Partnership）】\n17. 促進目標實現的夥伴關係'
              }
            ]
          },
          {
            title: '台灣與SDGs',
            blocks: [
              {
                type: 'text',
                content: '台灣不是聯合國會員國，但政府仍然推動SDGs。\n\n為什麼？\n\n因為**永續發展是全球共同的責任**，不管你是哪個國家、什麼身分。\n\n台灣政府每年發布《永續發展自願檢視報告》，說明台灣在17個目標上的進展。\n\n例如：\n• SDG 7（清潔能源）：2020年再生能源5.4%，目標2025年20%（W10學過）\n• SDG 13（氣候行動）：2050淨零排放承諾（W13學過）\n• SDG 4（優質教育）：台灣識字率99.9%，教育普及率高'
              }
            ]
          },
          {
            title: '六年級學生能做什麼？',
            blocks: [
              {
                type: 'text',
                content: 'SDGs不只是政府和大企業的事，每個人都可以貢獻。\n\n六年級的你可以：\n\n【個人層級】\n• SDG 12（負責任的消費）：減少食物浪費、自備環保袋\n• SDG 6（清潔飲水）：節約用水\n• SDG 13（氣候行動）：減少塑膠使用、隨手關燈\n\n【學校層級】\n• 發起校園回收計畫\n• 舉辦SDGs主題展覽\n• 參與淨灘、種樹活動\n\n【社會層級】\n• 關心社會議題，培養公民意識\n• 長大後選擇對環境友善的工作\n• 用消費選擇支持永續企業\n\n**小行動也能產生大影響**，因為當所有人都這麼做，世界就會改變。'
              }
            ]
          },
          {
            title: '連結到今天的主題：AI與SDGs',
            blocks: [
              {
                type: 'text',
                content: 'AI（人工智慧）可以幫助實現SDGs嗎？\n\n可以！例如：\n• SDG 2（消除飢餓）：AI精準農業減少浪費\n• SDG 3（健康福祉）：AI醫療診斷幫助偏鄉\n• SDG 13（氣候行動）：AI預測氣候變化\n\n但AI也可能**加劇不平等**：\n• 沒有網路的地區無法使用AI（數位落差）\n• AI的偏見可能歧視某些族群\n• AI取代工作，造成失業\n\n所以，**科技不是萬能的**。\n\n我們需要**理解科技、批判科技、善用科技**。\n\n這就是接下來要學的內容。'
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
    // 單元二：科學 — AI基礎概念
    // ==========================================
    {
      id: 'science-ai-basics',
      name: '科學：AI的能與不能',
      icon: '🤖',
      lesson: {
        title: 'AI（人工智慧）基礎概念',
        sections: [
          {
            title: '什麼是AI？',
            blocks: [
              {
                type: 'text',
                content: 'AI = Artificial Intelligence（人工智慧）\n\n最簡單的定義：**讓機器像人一樣思考和學習**。\n\n但要注意：AI的「思考」和人類的「思考」很不一樣。\n\n人類思考：理解意義、有情感、能創造、會反省\nAI「思考」：找統計規律、計算機率、預測答案'
              }
            ]
          },
          {
            title: '機器學習的基本原理',
            blocks: [
              {
                type: 'text',
                content: 'AI怎麼「學習」？\n\n【人類學習】\n你學數學：老師講解概念 → 你理解原理 → 練習題目 → 舉一反三\n\n【機器學習】\nAI學數學：給1萬題範例 → AI找出「輸入」和「輸出」的規律 → 遇到新題目，套用規律\n\n關鍵差異：\n• 人類理解「為什麼」，AI只知道「什麼對應什麼」\n• 人類可以用很少的例子學會，AI需要大量資料\n• 人類可以遷移知識（數學學會的邏輯，可以用在其他地方），AI很難'
              }
            ]
          },
          {
            title: 'AI的三個層級',
            blocks: [
              {
                type: 'text',
                content: '【弱AI】（Narrow AI）\n專門做一件事的AI。\n例如：下棋AI、人臉辨識AI、語音助理\n現在所有的AI都是弱AI。\n\n【強AI】（General AI）\n像人類一樣，什麼都能學、什麼都能做的AI。\n目前還不存在，科學家也不確定何時能做出來。\n\n【超級AI】（Super AI）\n比人類更聰明的AI。\n目前只存在於科幻小說和電影中。'
              }
            ]
          },
          {
            title: '生活中的AI應用',
            blocks: [
              {
                type: 'text',
                content: '你每天都在用AI，只是可能沒注意到：\n\n• **語音助理**（Siri、Google助理）：語音辨識AI\n• **人臉辨識解鎖**：影像辨識AI\n• **YouTube推薦影片**：推薦系統AI\n• **Google搜尋**：搜尋排序AI\n• **ChatGPT**：大型語言模型AI\n• **Google翻譯**：翻譯AI\n• **照片自動分類**：圖像分類AI\n\nAI已經深入生活，但**你可能沒意識到它的限制**。'
              }
            ]
          },
          {
            title: 'AI能做什麼？',
            blocks: [
              {
                type: 'text',
                content: 'AI很擅長：\n\n✓ **大量資料處理**：瞬間分析百萬筆資料\n✓ **模式識別**：找出圖片中的貓、辨識人臉\n✓ **重複性任務**：24小時不休息地做同一件事\n✓ **精確計算**：不會算錯數學\n✓ **記憶儲存**：永遠記得訓練資料\n\n所以AI在這些領域很強：\n• 醫療影像判讀（找出X光片的異常）\n• 棋類遊戲（AlphaGo打敗世界冠軍）\n• 語言翻譯（即時翻譯多種語言）\n• 自動駕駛（辨識道路和障礙物）'
              }
            ]
          },
          {
            title: 'AI不能做什麼？',
            blocks: [
              {
                type: 'text',
                content: 'AI的限制：\n\n✗ **真正理解意義**：AI只是統計規律，不懂文字的「意思」\n✗ **常識判斷**：AI沒有生活經驗，缺乏常識\n✗ **情感與同理心**：AI無法感受情緒\n✗ **創造性思考**：AI只能模仿，難以真正創新\n✗ **道德判斷**：AI無法判斷對錯、好壞\n✗ **跨領域遷移**：在A領域學的，無法自動用到B領域\n\n例子：\n• ChatGPT可以寫出「媽媽很辛苦，我要感謝她」，但它不懂什麼是「辛苦」、什麼是「感謝」\n• AI可以下圍棋，但不能把下棋的策略用來解數學題\n• AI可以辨識照片裡是貓還是狗，但問它「為什麼貓喜歡曬太陽？」它答不出來'
              }
            ]
          },
          {
            title: 'AI的「幻覺」（Hallucination）',
            blocks: [
              {
                type: 'text',
                content: '為什麼AI有時候會說錯？\n\nAI的運作原理是「預測下一個字」：\n• 看到「台灣最高的山是」，AI根據訓練資料的統計規律，預測下一個詞是「玉山」\n• 但如果訓練資料有錯、或是AI從未見過這個問題，它會「猜」一個聽起來合理的答案\n• 這就產生了「幻覺」——AI自己編造不存在的事實\n\n例子：\n• 問：「台灣有幾個國家公園？」\n• AI答：「台灣有6個國家公園。」（錯！正確答案是5個）\n\n所以，**AI給的答案不一定對，你要有能力判斷**。\n\n怎麼判斷？**你的腦中要有基本知識。**'
              }
            ]
          },
          {
            title: 'AI時代，人類的價值在哪裡？',
            blocks: [
              {
                type: 'text',
                content: '既然AI這麼強，人類還有什麼價值？\n\n**人類獨有的能力：**\n\n1. **理解意義**：我們知道「家」不只是一棟房子，而是情感的歸屬\n2. **批判思考**：我們能質疑、驗證、判斷資訊的真假\n3. **創造力**：我們能產生真正新穎的想法（不只是重組舊資料）\n4. **同理心**：我們能感受他人的痛苦和喜悅\n5. **價值判斷**：我們能判斷什麼是對的、什麼是錯的\n6. **目的與意義**：我們能問「為什麼要這樣做？」「這有什麼意義？」\n\n**AI是工具，人類是主人。**\n\n但前提是：**你要有足夠的知識和判斷力，才能駕馭這個工具。**'
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
    // 單元三：數學 — W1-W3綜合複習
    // ==========================================
    {
      id: 'math-review-w1-w3',
      name: '數學：W1-W3綜合複習',
      icon: '📊',
      lesson: {
        title: 'W1-W3綜合複習：數線、因數、比與比例',
        sections: [
          {
            title: '為什麼要複習？',
            blocks: [
              {
                type: 'text',
                content: '有人說：「反正不會就問AI，為什麼要記這些？」\n\n但我們在開場實驗中發現：**如果你腦中沒有基本知識，連AI給的答案對不對都不知道。**\n\n今天的數學複習，就是要測試：這些基本概念，你記得多少？\n\n這些知識不只是為了考試，而是**思考的工具**。'
              }
            ]
          },
          {
            title: '複習重點一：數線與負數（W1）',
            blocks: [
              {
                type: 'text',
                content: '核心概念：\n• 原點（0）是基準\n• 負數在原點左邊\n• 數線上越靠右的數越大\n• 兩點距離 = 終點 - 起點\n\n實際應用：\n• 溫度：零下5度 = -5°C\n• 海拔：海平面以下 = 負數\n• 時差計算（還記得W1的時差嗎？）\n\n**為什麼要記？**\n如果AI告訴你「-8比-3大」，你能判斷它錯了嗎？'
              }
            ]
          },
          {
            title: '複習重點二：公因數與最大公因數（W2）',
            blocks: [
              {
                type: 'text',
                content: '核心概念：\n• 公因數：兩個數共同的因數\n• 最大公因數（GCD）：公因數中最大的\n• 找GCD的方法：短除法、質因數分解\n\n實際應用：\n• 化簡比例（W3會用到）\n• 分組問題（如何公平分配）\n• 排列設計（地磚鋪設）\n\n**為什麼要記？**\n如果你忘記什麼是公因數，連「最簡比」都算不出來。'
              }
            ]
          },
          {
            title: '複習重點三：比與比值（W3）',
            blocks: [
              {
                type: 'text',
                content: '核心概念：\n• 比：兩個數的關係（例：3:5）\n• 比值：前項÷後項（例：3:5的比值是0.6）\n• 等值比：3:5 = 6:10 = 9:15\n• 最簡比：用GCD化簡（12:18 = 2:3）\n\n實際應用：\n• 比例尺（W4學過）\n• 調配飲料（珍奶茶水比）\n• 分配資源（按比例分錢）\n\n**為什麼要記？**\nAI可以算，但你要知道「為什麼」這樣算。'
              }
            ]
          },
          {
            title: '連結到AI：計算vs理解',
            blocks: [
              {
                type: 'text',
                content: 'AI很會**計算**：\n• 你問「24和36的最大公因數是多少？」AI秒答「12」\n• 你問「比12:18的最簡比？」AI秒答「2:3」\n\n但AI不會**理解**：\n• 為什麼要找最大公因數？\n• 最簡比在生活中有什麼用？\n• 這個概念和其他知識有什麼連結？\n\n如果你只是「問AI→複製答案」，你永遠不會真正理解。\n\n而且，**如果你腦中沒有這些概念，你連問題都問不出來**。\n\n例如：看到「12:18」，如果你不知道有「最簡比」這個東西，你怎麼知道要問AI「如何化簡」？'
              }
            ]
          },
          {
            title: '自我檢測',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習，測試你「不用AI」能答對多少。\n\n如果大部分都答對：恭喜，你的基礎很扎實！\n如果答錯很多：這就是為什麼你需要記憶——不然連AI給的答案對不對都不知道。\n\n**記住：這不是在責怪你，而是要讓你親身體驗「沒有知識」的困境。**'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            // fill 題：接受多種答案形式
            const answer = String(question.answer).trim()
            const input = String(userAnswer).trim()
            // 接受 8/3 或 2.667 或 2.67 等
            if (answer === '8/3') {
              return input === '8/3' || input === '2.667' || input === '2.67' || input === '2.7'
            }
            return input === answer
          }
        }
      }
    },

    // ==========================================
    // 單元四：語文 — 科技與永續詞彙
    // ==========================================
    {
      id: 'vocab-tech-sustainability',
      name: '語文：科技與永續詞彙',
      icon: '📚',
      lesson: {
        title: '今日詞彙：科技與永續發展',
        sections: [
          {
            title: '為什麼詞彙很重要？',
            blocks: [
              {
                type: 'text',
                content: '有人說：「不懂的詞彙就問AI。」\n\n但問題是：**如果你不知道這個詞彙存在，你怎麼問？**\n\n例如：\n• 你看新聞說「演算法偏見」，如果你不知道什麼是「演算法」、什麼是「偏見」，你連要問AI什麼都不知道\n• 你想了解AI，但不知道「機器學習」這個詞，你只能問「AI怎麼變聰明的？」這種模糊的問題\n\n**詞彙是思考的工具。詞彙越豐富，思考越精確。**'
              }
            ]
          },
          {
            title: '今日核心詞彙',
            blocks: [
              {
                type: 'text',
                content: '【科技類】\n• **人工智慧（AI）**：讓機器像人一樣思考和學習\n• **機器學習**：讓機器從資料中學習規律\n• **演算法**：解決問題的步驟和規則\n• **訓練資料**：提供給AI學習的範例\n• **幻覺（Hallucination）**：AI產生錯誤或不存在的資訊\n• **偏見（Bias）**：AI因訓練資料不平衡而產生不公平的判斷\n\n【永續發展類】\n• **SDGs**：聯合國永續發展目標（17個目標）\n• **永續發展**：滿足當代需求，同時不損害後代需求的能力\n• **氣候行動**：減少溫室氣體排放、適應氣候變化\n• **數位落差**：因經濟或地理因素無法使用科技的不平等\n• **循環經濟**：減少浪費、重複使用資源的經濟模式'
              }
            ]
          },
          {
            title: '詞彙的層次',
            blocks: [
              {
                type: 'text',
                content: '理解一個詞彙，有三個層次：\n\n【層次1：知道這個詞】\n• 看到「機器學習」，知道是跟AI有關的\n\n【層次2：能解釋意思】\n• 「機器學習」是讓機器從大量資料中找出規律\n\n【層次3：能運用到情境】\n• 看到新聞「Netflix推薦系統」，能連結到「這是機器學習的應用」\n• 能判斷「機器學習需要訓練資料，如果資料有偏見，結果也會有偏見」\n\n**目標是達到層次3。**'
              }
            ]
          },
          {
            title: 'AI時代的詞彙學習策略',
            blocks: [
              {
                type: 'text',
                content: '【錯誤方法】\n• 遇到不懂的詞就跳過，反正可以問AI\n• 只記中文，不知道英文原文（例如不知道AI=Artificial Intelligence）\n• 只背定義，不理解實際應用\n\n【正確方法】\n• 主動累積詞彙：看到新詞就記下來\n• 建立詞彙網絡：這個詞和哪些詞有關係？\n• 實際運用：試著在說話或寫作中使用新詞彙\n• 連結舊知識：這個新詞和我已知的概念有什麼關係？\n\n例如：\n「演算法」→ 想到「食譜」（都是步驟）\n「機器學習」→ 想到「小孩學說話」（都是從範例學習）\n「偏見」→ 想到「刻板印象」（都是不公平的預設）'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習，測試你對今天詞彙的理解。\n\n重點不是「背定義」，而是「真正理解意思」。\n\n如果答錯了，不要只是看正確答案，而是要想：\n• 我為什麼會選錯？\n• 這個詞的核心概念是什麼？\n• 我如何記住它？'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateVocabQuestion,
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
        title: '回到開場的問題',
        sections: [
          {
            title: '重新檢視開場實驗',
            blocks: [
              {
                type: 'text',
                content: '還記得開場的任務B嗎？\n\n1. 小明用AI查到：「台灣最熱的地方是台北。」這合理嗎？\n→ 如果你記得W4學的「都市熱島效應」、W13學的「台灣氣候」，你會知道台北盆地確實較熱，但「最熱」不一定，還要看測量方式。\n\n2. AI算出實際距離3.2公里，地圖比例尺1:50000，圖上幾公分？\n→ 如果你記得W4的「比例尺計算」：3200公尺 ÷ 50000 = 0.064公尺 = 6.4公分\n\n3. 新聞說「CO₂濃度創新高」，要問AI什麼？\n→ 如果你記得W13的「溫室效應」，你會問：「現在CO₂濃度是多少ppm？」「歷史平均值是多少？」「增加速度多快？」\n\n4. AI說「民主就是投票」，完整嗎？\n→ 如果你記得W9學的「民主核心概念」：多數決＋少數保障、代表與參與、公共利益與個人權利，你會知道這說法太簡化了。\n\n5. AI說「玉山國家公園有北極熊」？\n→ 如果你記得W11學的「玉山國家公園保育對象是高山生態、台灣黑熊」，你馬上知道這是AI幻覺。\n\n**結論：知識不是負擔，是判斷的基礎。**'
              }
            ]
          },
          {
            title: '今天學到的核心概念',
            blocks: [
              {
                type: 'text',
                content: '【關於AI】\n• AI是工具，不是魔法\n• AI很會計算和記憶，但不會真正理解\n• AI會產生幻覺（錯誤），需要人類判斷\n• AI能做很多事，但無法取代人類的思考和創造\n\n【關於記憶與學習】\n• 記憶不是為了背誦，而是為了判斷、提問、連結、創造\n• 沒有知識基礎，連AI給的答案對不對都不知道\n• 沒有知識基礎，連問題都問不出來\n• **知識是思考的燃料，沒有燃料就無法思考**\n\n【關於SDGs】\n• 永續發展是全球共同責任\n• AI可以幫助實現SDGs，但也可能加劇不平等\n• 每個人都可以為SDGs貢獻，從小行動開始'
              }
            ]
          },
          {
            title: '給自己的提醒',
            blocks: [
              {
                type: 'text',
                content: '今天的課程，希望你理解：\n\n1. **AI時代，學習更重要，不是更不重要**\n   • AI讓「查資料」變容易，但「判斷真假」更關鍵\n   • 會用AI的人很多，但能超越AI的人很少\n\n2. **記憶不是負擔，是能力**\n   • 腦中有知識，才能判斷AI對不對\n   • 腦中有知識,才知道該問什麼問題\n   • 腦中有知識，才能建立連結和洞察\n\n3. **你的價值在於思考，不在於背誦**\n   • 不要只是「問AI→複製答案」\n   • 要能「理解→判斷→創造」\n\n明天，我們會繼續探討：\n• AI能幫忙什麼？（SDGs的正面案例）\n• 沒有知識基礎，怎麼提出好問題？\n\n今天先好好休息，想一想今天的實驗和學習。'
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
