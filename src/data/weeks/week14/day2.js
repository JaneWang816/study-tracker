// src/data/weeks/week14/day2.js
// 第14週 - 第二天：AI能幫忙什麼？

// W14D2 練習題生成器 - 改良版(使用洗牌機制)

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】SDGs正面案例練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: 'AI精準農業如何幫助實現SDG 2(消除飢餓)?',
    options: [
      '讓農夫不用工作',
      '透過感測器和AI分析,減少水肥浪費、提高產量',
      '把所有農田變成工廠',
      '讓機器人種田'
    ],
    answer: 1,
    displayAnswer: '透過感測器和AI分析,減少水肥浪費、提高產量'
  },
  {
    type: 'options',
    question: '台大醫院使用AI判讀X光片,這對應哪個SDG?',
    options: ['SDG 1(消除貧窮)', 'SDG 3(健康福祉)', 'SDG 4(優質教育)', 'SDG 7(清潔能源)'],
    answer: 1,
    displayAnswer: 'SDG 3(健康福祉)'
  },
  {
    type: 'options',
    question: 'AI遠距醫療診斷最大的好處是什麼?',
    options: [
      '取代所有醫生',
      '讓偏鄉地區也能獲得專業診斷',
      '讓醫生不用上班',
      '讓看病變便宜'
    ],
    answer: 1,
    displayAnswer: '讓偏鄉地區也能獲得專業診斷'
  },
  {
    type: 'options',
    question: '下列哪個「不是」AI在醫療領域的實際應用?',
    options: [
      'AI判讀醫療影像(X光、CT)',
      'AI預測疾病風險',
      'AI完全取代醫生看診',
      'AI協助藥物研發'
    ],
    answer: 2,
    displayAnswer: 'AI完全取代醫生看診(AI只能輔助,無法完全取代)'
  },
  {
    type: 'options',
    question: '台灣農業科技園區使用AI技術,主要目的是?',
    options: [
      '讓農夫失業',
      '提高農業效率和品質,實現永續農業',
      '把農田變成科技公司',
      '只是做做樣子'
    ],
    answer: 1,
    displayAnswer: '提高農業效率和品質,實現永續農業'
  },
  {
    type: 'options',
    question: 'AI可以加速藥物研發,這對SDGs有什麼幫助?',
    options: [
      '沒有幫助',
      '只對藥廠有利',
      '更快找到治療方法,拯救更多生命(SDG 3)',
      '讓藥變便宜'
    ],
    answer: 2,
    displayAnswer: '更快找到治療方法,拯救更多生命(SDG 3)'
  },
  {
    type: 'options',
    question: 'AI精準農業的「精準」是指?',
    options: [
      '用機器人種田',
      '根據每塊土地的狀況,給予剛好需要的水和肥料',
      '農作物長得一樣大',
      '用電腦控制天氣'
    ],
    answer: 1,
    displayAnswer: '根據每塊土地的狀況,給予剛好需要的水和肥料'
  },
  {
    type: 'options',
    question: '使用AI幫助實現SDGs時,最重要的是什麼?',
    options: [
      'AI技術越先進越好',
      '確保技術能真正幫助需要的人,不加劇不平等',
      '只要有AI就好',
      '讓所有人都學會寫程式'
    ],
    answer: 1,
    displayAnswer: '確保技術能真正幫助需要的人,不加劇不平等'
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

// 【科學】AI的學習機制練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '監督式學習(Supervised Learning)的特點是?',
    options: [
      '機器自己學習,不需要人類給答案',
      '人類給機器「問題+正確答案」,讓機器學習',
      '機器透過試錯學習',
      '機器會自己監督自己'
    ],
    answer: 1,
    displayAnswer: '人類給機器「問題+正確答案」,讓機器學習'
  },
  {
    type: 'options',
    question: '訓練AI辨識貓和狗的照片,屬於哪種學習方式?',
    options: ['監督式學習', '非監督式學習', '強化學習', '深度學習'],
    answer: 0,
    displayAnswer: '監督式學習(因為人類標註了每張照片是貓還是狗)'
  },
  {
    type: 'options',
    question: '非監督式學習(Unsupervised Learning)是指?',
    options: [
      '沒有老師教',
      '機器自己從資料中找出規律和分類',
      '機器隨便學',
      '不需要資料'
    ],
    answer: 1,
    displayAnswer: '機器自己從資料中找出規律和分類'
  },
  {
    type: 'options',
    question: '強化學習(Reinforcement Learning)的核心概念是?',
    options: [
      '強迫機器學習',
      '透過「獎勵」和「懲罰」,讓機器在試錯中學習',
      '加強記憶力',
      '重複練習同一件事'
    ],
    answer: 1,
    displayAnswer: '透過「獎勵」和「懲罰」,讓機器在試錯中學習'
  },
  {
    type: 'options',
    question: 'AlphaGo(打敗圍棋世界冠軍的AI)使用的是哪種學習方式?',
    options: ['監督式學習', '非監督式學習', '強化學習', '不需要學習'],
    answer: 2,
    displayAnswer: '強化學習(透過自我對弈,在試錯中學習)'
  },
  {
    type: 'options',
    question: '人類學習和AI學習最大的差異是?',
    options: [
      'AI學得比較快',
      '人類能理解「為什麼」,AI只知道「什麼對應什麼」',
      'AI比較聰明',
      '人類需要睡覺,AI不用'
    ],
    answer: 1,
    displayAnswer: '人類能理解「為什麼」,AI只知道「什麼對應什麼」'
  },
  {
    type: 'options',
    question: 'AI需要多少資料才能學習?',
    options: [
      '一個例子就夠',
      '通常需要成千上萬甚至百萬筆資料',
      '不需要資料',
      '十個例子'
    ],
    answer: 1,
    displayAnswer: '通常需要成千上萬甚至百萬筆資料'
  },
  {
    type: 'options',
    question: '為什麼人類可以「舉一反三」,AI很難?',
    options: [
      '因為AI比較笨',
      '因為人類有常識和生活經驗,能理解事物的本質',
      '因為AI沒有讀書',
      '因為人類記憶力好'
    ],
    answer: 1,
    displayAnswer: '因為人類有常識和生活經驗,能理解事物的本質'
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

// 【數學】W4-W6綜合複習練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '地圖比例尺1:25000,圖上4公分代表實際多少公尺?',
    options: ['100公尺', '1000公尺', '10000公尺', '100000公尺'],
    answer: 1,
    displayAnswer: '1000公尺(4cm × 25000 = 100000cm = 1000m)'
  },
  {
    type: 'options',
    question: '實際距離2公里,地圖比例尺1:40000,圖上距離是幾公分?',
    options: ['2公分', '5公分', '8公分', '10公分'],
    answer: 1,
    displayAnswer: '5公分'
  },
  {
    type: 'options',
    question: '圓的半徑是7公分,周長是多少?(π≈3.14)',
    options: ['21.98公分', '43.96公分', '153.86公分', '14公分'],
    answer: 1,
    displayAnswer: '43.96公分(C = 2πr = 2 × 3.14 × 7 = 43.96)'
  },
  {
    type: 'options',
    question: '圓的直徑是10公分,面積是多少?(π≈3.14)',
    options: ['31.4平方公分', '78.5平方公分', '314平方公分', '100平方公分'],
    answer: 1,
    displayAnswer: '78.5平方公分(S = πr² = 3.14 × 5² = 78.5)'
  },
  {
    type: 'options',
    question: '半徑是6公分的圓,面積是多少平方公分?(π≈3.14)',
    options: ['37.68', '75.36', '113.04', '150.72'],
    answer: 2,
    displayAnswer: '113.04平方公分'
  },
  {
    type: 'options',
    question: '扇形的圓心角是90度,半徑是8公分,弧長是多少?(π≈3.14)',
    options: ['6.28公分', '12.56公分', '25.12公分', '50.24公分'],
    answer: 1,
    displayAnswer: '12.56公分(弧長 = 2πr × 90/360 = 2 × 3.14 × 8 × 1/4)'
  },
  {
    type: 'options',
    question: '扇形的圓心角是120度,半徑是9公分,面積是多少?(π≈3.14)',
    options: ['28.26平方公分', '56.52平方公分', '84.78平方公分', '254.34平方公分'],
    answer: 2,
    displayAnswer: '84.78平方公分(S = πr² × 120/360 = 3.14 × 81 × 1/3)'
  },
  {
    type: 'options',
    question: '兩個相似圖形,邊長比是1:3,面積比是?',
    options: ['1:3', '1:6', '1:9', '1:27'],
    answer: 2,
    displayAnswer: '1:9(面積比 = 邊長比的平方)'
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

// 【語文】閱讀理解練習題庫
const readingQuestions = [
  {
    type: 'options',
    question: '根據文本,AI精準農業最主要解決什麼問題?',
    options: [
      '農夫太辛苦',
      '資源浪費和效率低落',
      '農作物不好吃',
      '農田太小'
    ],
    answer: 1,
    displayAnswer: '資源浪費和效率低落'
  },
  {
    type: 'options',
    question: '為什麼AI遠距醫療對偏鄉特別重要?',
    options: [
      '因為偏鄉網路比較快',
      '因為偏鄉缺乏專業醫療資源',
      '因為偏鄉人比較喜歡用科技',
      '因為偏鄉醫院比較多'
    ],
    answer: 1,
    displayAnswer: '因為偏鄉缺乏專業醫療資源'
  },
  {
    type: 'options',
    question: '文本中提到「AI讓世界更好了嗎?還是讓某些人更好?」這句話想表達什麼?',
    options: [
      'AI沒有用',
      '要注意AI可能加劇貧富差距和不平等',
      'AI只對有錢人有用',
      'AI應該被禁止'
    ],
    answer: 1,
    displayAnswer: '要注意AI可能加劇貧富差距和不平等'
  },
  {
    type: 'options',
    question: '監督式學習需要什麼?',
    options: [
      '老師在旁邊監督',
      '人類標註好的「問題+答案」資料',
      '機器自己學習',
      '不需要資料'
    ],
    answer: 1,
    displayAnswer: '人類標註好的「問題+答案」資料'
  },
  {
    type: 'options',
    question: '為什麼人類可以用幾個例子就學會,AI需要上萬筆資料?',
    options: [
      '因為AI比較笨',
      '因為人類有常識、能理解意義,AI只能找統計規律',
      '因為AI記憶力不好',
      '因為人類比較聰明'
    ],
    answer: 1,
    displayAnswer: '因為人類有常識、能理解意義,AI只能找統計規律'
  }
]

const generateReadingQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(readingQuestions)
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
  generateReadingQuestion
}

// ==========================================
// Day 2 資料
// ==========================================

const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '🌟',
  color: '#4ECDC4',
  title: 'AI能幫忙什麼？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '《2050年的一天》第一章：小安的AI診療室',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'text',
                content: '2050年，台北。\n\n小安是一名醫學生，今天她在「AI輔助診療中心」實習。\n\n一位來自花蓮山區的阿嬤透過視訊連線進來。'
              },
              {
                type: 'text',
                content: '「阿嬤，請把您的X光片放在掃描器上。」小安溫柔地說。\n\nAI系統在3秒內分析完畢：「初步判斷：右肺下葉有疑似結節，建議進一步檢查。信心度：87%。」\n\n小安仔細看了AI標示的位置，又查看了阿嬤的病歷。她問：「阿嬤，您最近有咳嗽嗎？」\n\n阿嬤點點頭：「有啊，咳了兩個月了。」\n\n小安記下來，然後轉頭對AI說：「請調出最近五年該區域肺結節的追蹤資料。」',
                author: '《2050年的一天》節選'
              },
              {
                type: 'text',
                content: '系統顯示：該區域因空氣品質改善，肺結節發生率已下降40%。但阿嬤這個年齡層仍需注意。\n\n小安綜合AI的判讀、阿嬤的症狀、和統計資料，向主治醫師提出建議：「建議安排CT檢查和痰液檢驗。」\n\n主治醫師看過後說：「判斷正確。小安，妳知道為什麼AI不能直接下診斷嗎？」\n\n小安想了想：「因為AI看的是影像規律，但它不知道阿嬤咳了兩個月、不知道她住山區、不知道她的生活習慣。這些『脈絡』，需要人類醫生去理解。」\n\n「沒錯。」醫師微笑，「AI是助手，不是醫生。」'
              }
            ]
          },
          {
            title: '帶著問題開始今天的學習',
            blocks: [
              {
                type: 'text',
                content: '讀完這段故事，想想：\n\n① AI在這個故事中做了什麼？\n② 為什麼AI不能「直接」當醫生？\n③ 小安（人類）做了哪些AI做不到的事？\n\n（先不用回答，在今天課程結束時再思考。）'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — SDGs正面案例
    // ==========================================
    {
      id: 'social-sdgs-cases',
      name: '社會：AI幫助實現SDGs',
      icon: '🌍',
      lesson: {
        title: 'AI如何幫助實現永續發展目標？',
        sections: [
          {
            title: '案例一：SDG 2（消除飢餓）—— AI精準農業',
            blocks: [
              {
                type: 'text',
                content: '【問題】\n全球有8億人長期營養不良，但每年卻有1/3的食物被浪費。\n\n為什麼？因為傳統農業「大量施肥、大量灌溉」，造成：\n• 資源浪費：不需要那麼多水肥的地方也給了\n• 產量不穩：氣候變化難以預測，常常歉收或過剩\n• 環境破壞：過度施肥導致土壤酸化、水源污染'
              },
              {
                type: 'text',
                content: '【AI的解決方案：精準農業】\n\n1. **感測器收集資料**\n   • 土壤濕度、養分含量\n   • 氣溫、降雨量\n   • 作物生長狀況\n\n2. **AI分析資料**\n   • 哪塊地需要澆水？需要多少？\n   • 哪塊地需要施肥？需要多少？\n   • 什麼時候該收成？\n\n3. **精準投入資源**\n   • 不浪費水\n   • 不浪費肥料\n   • 提高產量30-40%\n\n結果：用更少的資源，生產更多的糧食。'
              },
              {
                type: 'text',
                content: '【台灣案例】\n\n台灣農業科技園區（屏東）使用AI技術：\n• 智慧溫室：AI控制溫度、濕度、光照\n• 病蟲害預測：AI分析影像，提早發現病蟲害\n• 產量預測：AI預測收成量，減少浪費\n\n成效：\n• 用水量減少30%\n• 肥料使用減少25%\n• 產量提高35%'
              }
            ]
          },
          {
            title: '案例二：SDG 3（健康福祉）—— AI醫療診斷',
            blocks: [
              {
                type: 'text',
                content: '【問題】\n台灣偏鄉地區（如花東、離島）缺乏專業醫療資源：\n• 專科醫生不足\n• 醫療設備有限\n• 病人需要長途跋涉到大城市就醫'
              },
              {
                type: 'text',
                content: '【AI的解決方案：遠距醫療診斷】\n\n1. **AI判讀醫療影像**\n   • X光片：找出肺部異常\n   • CT掃描：檢查腫瘤\n   • 眼底攝影：檢測糖尿病視網膜病變\n\n2. **AI輔助診斷**\n   • 分析症狀，提供可能的診斷\n   • 標示異常區域，幫助醫生判斷\n   • 建議進一步檢查項目\n\n3. **遠距會診**\n   • 偏鄉病人在當地拍X光\n   • AI初步判讀\n   • 大醫院醫生透過視訊確認\n   • 不用長途跋涉'
              },
              {
                type: 'text',
                content: '【台灣案例】\n\n台大醫院AI判讀X光片：\n• 準確率：與資深醫生相當（約90%）\n• 速度：3秒完成初步判讀\n• 應用：協助急診分流、偏鄉遠距診療\n\n重點：**AI是輔助工具，最終診斷仍需醫生確認**。\n\n為什麼？\n• AI只看影像，醫生看「整個人」（症狀、病史、生活習慣）\n• AI可能誤判（假陽性、假陰性）\n• 醫療需要同理心和溝通，AI做不到'
              }
            ]
          },
          {
            title: '案例三：AI協助藥物研發',
            blocks: [
              {
                type: 'text',
                content: '【問題】\n傳統藥物研發：\n• 時間：10-15年\n• 成本：數十億美元\n• 成功率：極低（萬分之一）\n\n這導致：\n• 罕見疾病無藥可醫（藥廠不願投資）\n• 新藥太貴，窮人買不起'
              },
              {
                type: 'text',
                content: '【AI的解決方案】\n\nAI可以：\n1. **快速篩選化合物**\n   • 傳統方法：實驗室一個一個測試，需要數年\n   • AI方法：電腦模擬百萬種化合物，幾天就找出可能有效的\n\n2. **預測藥物效果**\n   • 哪些化合物可能有效？\n   • 可能有什麼副作用？\n\n3. **加速臨床試驗**\n   • AI分析病人資料，找出最適合的受試者\n\n結果：研發時間從10年縮短到3-5年，成本降低數倍。'
              }
            ]
          },
          {
            title: '反思：AI讓世界更好了嗎？',
            blocks: [
              {
                type: 'text',
                content: '看完這些案例，AI確實可以幫助實現SDGs。\n\n但我們要問：**AI讓世界更好了嗎？還是讓某些人更好？**\n\n【隱藏的問題】\n\n1. **數位落差**\n   • 花東偏鄉有AI遠距醫療，但非洲鄉村連網路都沒有\n   • AI精準農業需要昂貴設備，小農買不起\n\n2. **資料偏見**\n   • AI用「已開發國家」的醫療資料訓練，對其他地區可能不準\n   • AI農業系統針對「大型農場」設計，不適合小農\n\n3. **失業問題**\n   • AI取代部分醫療和農業工作，這些人怎麼辦？\n\n**結論：科技本身不是答案，如何「公平地」使用科技，才是關鍵。**'
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
    // 單元二：科學 — AI的學習機制
    // ==========================================
    {
      id: 'science-learning-mechanisms',
      name: '科學：AI如何學習？',
      icon: '🧠',
      lesson: {
        title: 'AI的「學習」vs 人類的學習',
        sections: [
          {
            title: '複習：AI的學習原理',
            blocks: [
              {
                type: 'text',
                content: '昨天我們學到：AI的學習是「從大量資料中找出規律」。\n\n但AI怎麼「找規律」？有哪些方法？\n\n今天我們要深入了解三種主要的機器學習方式。'
              }
            ]
          },
          {
            title: '方式一：監督式學習（Supervised Learning）',
            blocks: [
              {
                type: 'text',
                content: '【定義】\n人類給機器「問題+正確答案」，讓機器學習。\n\n【比喻】\n就像老師給學生題目和詳解，學生看著學。'
              },
              {
                type: 'text',
                content: '【例子：教AI辨識貓和狗】\n\n1. **準備訓練資料**\n   • 1萬張貓的照片，每張都標註「貓」\n   • 1萬張狗的照片，每張都標註「狗」\n\n2. **AI學習**\n   • AI分析：貓的照片有什麼共同特徵？（尖耳朵、鬍鬚、瞳孔形狀...）\n   • AI分析：狗的照片有什麼共同特徵？（下垂耳朵、鼻子較長...）\n\n3. **測試**\n   • 給AI一張新照片（沒看過的）\n   • AI根據特徵判斷：這是貓還是狗？\n\n4. **結果**\n   • 準確率：約95%\n   • 但AI不知道什麼是「貓」，只知道「這種特徵組合 = 標籤是貓」'
              },
              {
                type: 'text',
                content: '【應用】\n• 醫療影像判讀（給AI標註好的X光片）\n• 垃圾郵件過濾（給AI垃圾郵件和正常郵件）\n• 語音辨識（給AI聲音和對應文字）\n\n【限制】\n• 需要大量人工標註資料（很費時）\n• 只能學習「標註過的」東西'
              }
            ]
          },
          {
            title: '方式二：非監督式學習（Unsupervised Learning）',
            blocks: [
              {
                type: 'text',
                content: '【定義】\n不給AI正確答案，讓AI自己從資料中找規律、分類。\n\n【比喻】\n就像給學生一堆東西，學生自己決定怎麼分類。'
              },
              {
                type: 'text',
                content: '【例子：顧客分群】\n\n一家超市有10萬個顧客的購物資料，想知道可以分成幾類顧客。\n\n1. **資料**\n   • 每個顧客買了什麼、花多少錢、多久來一次\n   • **沒有標籤**（不知道該分成幾類）\n\n2. **AI分析**\n   • AI自己發現：有些人常買嬰兒用品\n   • 有些人常買生鮮蔬菜\n   • 有些人只買零食飲料\n   • AI把相似的人歸為一類\n\n3. **結果**\n   • AI發現5種顧客類型\n   • 超市可以針對不同類型設計行銷策略\n\n【應用】\n• 推薦系統（YouTube找出「你可能喜歡的影片」）\n• 異常偵測（銀行發現異常交易）\n• 市場分析（找出消費者類型）'
              }
            ]
          },
          {
            title: '方式三：強化學習（Reinforcement Learning）',
            blocks: [
              {
                type: 'text',
                content: '【定義】\nAI透過「試錯」學習，做對了給獎勵，做錯了給懲罰。\n\n【比喻】\n就像訓練狗：做對了給零食，做錯了不給。'
              },
              {
                type: 'text',
                content: '【例子：AI學下棋】\n\n1. **初始狀態**\n   • AI完全不會下棋，隨便亂走\n\n2. **學習過程**\n   • AI走一步\n   • 如果這步導致贏棋 → 獎勵+1\n   • 如果這步導致輸棋 → 獎勵-1\n   • AI記住：「在這個局面，走這步是好的/壞的」\n\n3. **大量練習**\n   • AI自己和自己下棋，下幾百萬局\n   • 每局都學習：哪些走法好、哪些走法壞\n\n4. **結果**\n   • AlphaGo就是這樣學會下圍棋的\n   • 最後打敗世界冠軍'
              },
              {
                type: 'text',
                content: '【應用】\n• 遊戲AI（圍棋、象棋、電玩）\n• 自動駕駛（學習如何安全開車）\n• 機器人控制（學習如何走路、拿東西）\n\n【特點】\n• 不需要人類告訴AI「正確答案」\n• AI在試錯中自己學習\n• 但需要定義「什麼是好結果」（獎勵函數）'
              }
            ]
          },
          {
            title: '人類學習 vs AI學習',
            blocks: [
              {
                type: 'text',
                content: '【對比表】\n\n| 面向 | 人類 | AI |\n|------|------|----|\n| 資料需求 | 幾個例子就能學會 | 需要成千上萬筆資料 |\n| 理解方式 | 理解「為什麼」 | 只知道「什麼對應什麼」 |\n| 遷移能力 | 可以舉一反三 | 很難遷移到其他領域 |\n| 常識 | 有生活經驗和常識 | 沒有常識 |\n| 創造力 | 能產生真正新的想法 | 只能重組已知資料 |\n| 情感 | 有情感和同理心 | 沒有情感 |'
              },
              {
                type: 'text',
                content: '【例子：學習「貓」這個概念】\n\n**人類小孩**（2歲）：\n• 看到3-5隻貓，就知道什麼是貓\n• 理解：貓是一種動物、會喵喵叫、喜歡抓老鼠\n• 遷移：看到老虎，知道「這也是貓科動物」\n• 創造：可以畫出「從未見過的貓」\n\n**AI**：\n• 需要看1萬張貓的照片才能學會辨識\n• 不理解：什麼是「動物」、為什麼貓會叫\n• 不會遷移：看到老虎，可能判斷為「不是貓」\n• 不會創造：只能生成「像訓練資料」的貓'
              },
              {
                type: 'text',
                content: '【為什麼有這些差異？】\n\n人類：\n• 有五感經驗（看、聽、摸、聞、嚐）\n• 有身體和行動（知道「痛」是什麼感覺）\n• 有社會互動（從他人學習）\n• 有語言（能理解抽象概念）\n• 有情感（知道什麼是「害怕」「快樂」）\n\nAI：\n• 只有資料（數字和符號）\n• 沒有身體（不知道「痛」是什麼）\n• 沒有互動（孤立的系統）\n• 不理解語言（只是統計規律）\n• 沒有情感（無法感受）\n\n**所以，AI的「學習」和人類的學習，本質上完全不同。**'
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
    // 單元三：數學 — W4-W6綜合複習
    // ==========================================
    {
      id: 'math-review-w4-w6',
      name: '數學：W4-W6綜合複習',
      icon: '📐',
      lesson: {
        title: 'W4-W6綜合複習：比例尺、圓、相似形',
        sections: [
          {
            title: '為什麼要複習這些？',
            blocks: [
              {
                type: 'text',
                content: '今天的社會科講到「AI精準農業」，其中涉及：\n• 土地面積計算（圓形、扇形灌溉區）\n• 地圖比例尺（衛星影像轉換成實際距離）\n• 相似形應用（不同尺度的農田規劃）\n\n**如果你忘記這些數學概念，連AI的應用都看不懂。**'
              }
            ]
          },
          {
            title: '複習重點一：比例尺（W4）',
            blocks: [
              {
                type: 'text',
                content: '核心公式：\n• 比例尺 = 圖上距離 ÷ 實際距離\n• 實際距離 = 圖上距離 ÷ 比例尺\n• 圖上距離 = 實際距離 × 比例尺\n\n常見比例尺：\n• 1:25000（圖上1公分 = 實際250公尺）\n• 1:50000（圖上1公分 = 實際500公尺）\n\n實際應用：\n• 衛星影像分析農田\n• Google地圖計算距離\n• 建築設計圖'
              },
              {
                type: 'text',
                content: '【例題】\nAI衛星系統拍攝農田，影像比例尺1:40000。\n影像上一塊農田長5公分、寬3公分，實際面積是多少平方公尺？\n\n【解法】\n1. 實際長 = 5cm × 40000 = 200000cm = 2000m\n2. 實際寬 = 3cm × 40000 = 120000cm = 1200m\n3. 實際面積 = 2000 × 1200 = 2400000 平方公尺 = 240 公頃\n\n**如果你不會算，AI給你答案，你也不知道對不對。**'
              }
            ]
          },
          {
            title: '複習重點二：圓周長與圓面積（W5-W6）',
            blocks: [
              {
                type: 'text',
                content: '核心公式：\n• 圓周長：C = 2πr = πd（r=半徑, d=直徑）\n• 圓面積：S = πr²\n• 扇形弧長：L = 2πr × (圓心角/360°)\n• 扇形面積：S = πr² × (圓心角/360°)\n\nπ ≈ 3.14（通常題目會給）\n\n實際應用：\n• 圓形灌溉系統的覆蓋面積\n• 扇形噴灌的範圍計算\n• 圓形農田的周長（圍籬長度）'
              },
              {
                type: 'text',
                content: '【例題】\nAI控制的圓形噴灌系統，半徑50公尺，可以灌溉多少平方公尺的農田？\n\n【解法】\nS = πr² = 3.14 × 50² = 3.14 × 2500 = 7850 平方公尺\n\n如果噴灌只覆蓋120度（扇形），面積是多少？\n\nS = πr² × (120/360) = 7850 × (1/3) ≈ 2617 平方公尺\n\n**這些計算，AI可以瞬間完成。但你要有能力驗證AI的計算。**'
              }
            ]
          },
          {
            title: '複習重點三：相似形（W6）',
            blocks: [
              {
                type: 'text',
                content: '核心概念：\n• 相似形：形狀相同、大小不同\n• 對應邊的比相同\n• 邊長比 = a:b\n• 面積比 = a²:b²（邊長比的平方）\n\n實際應用：\n• 不同規模農田的設計（小規模實驗→大規模應用）\n• 地圖縮放\n• 建築模型與實體'
              },
              {
                type: 'text',
                content: '【例題】\nAI在實驗農場（100平方公尺）測試成功，要推廣到大農場。\n\n如果大農場是實驗農場的9倍大（面積），那邊長比是多少？\n\n【解法】\n面積比 = 9:1\n邊長比 = √9:√1 = 3:1\n\n所以，實驗農場如果邊長10公尺，大農場邊長就是30公尺。\n\n**相似形的概念，幫助我們理解「規模化」的問題。**'
              }
            ]
          },
          {
            title: '連結到AI：計算能力 vs 概念理解',
            blocks: [
              {
                type: 'text',
                content: 'AI的優勢：\n• 瞬間計算圓面積、比例尺\n• 不會算錯\n• 可以處理複雜圖形\n\n但AI無法：\n• 判斷「該用哪個公式」（你要告訴它）\n• 理解「為什麼面積比是邊長比的平方」\n• 發現計算錯誤（如果你輸入錯誤公式）\n\n**你的價值：知道該問什麼、能判斷答案合不合理。**'
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
            // fill 題：允許誤差
            const answer = parseFloat(question.answer)
            const input = parseFloat(userAnswer)
            return Math.abs(input - answer) < 0.5
          }
        }
      }
    },

    // ==========================================
    // 單元四：語文 — 閱讀理解
    // ==========================================
    {
      id: 'reading-comprehension',
      name: '語文：閱讀理解',
      icon: '📖',
      lesson: {
        title: '文本分析：AI應用的雙面性',
        sections: [
          {
            title: '回顧今天的主題',
            blocks: [
              {
                type: 'text',
                content: '今天我們讀了三個AI應用案例：\n1. 精準農業（SDG 2 消除飢餓）\n2. 遠距醫療（SDG 3 健康福祉）\n3. 藥物研發加速\n\n也學習了AI的三種學習方式：\n1. 監督式學習\n2. 非監督式學習\n3. 強化學習\n\n現在，我們要練習「批判性閱讀」。'
              }
            ]
          },
          {
            title: '什麼是批判性閱讀？',
            blocks: [
              {
                type: 'text',
                content: '批判性閱讀 ≠ 批評\n批判性閱讀 = 深入思考，提出問題\n\n讀任何文章（包括今天的課文），都要問：\n\n【內容層面】\n1. 這篇文章的主要論點是什麼？\n2. 作者用什麼證據支持論點？\n3. 有沒有提到反面觀點？\n\n【邏輯層面】\n4. 論點和證據之間的邏輯是否合理？\n5. 有沒有「因果關係」被過度簡化？\n6. 有沒有忽略重要的資訊？\n\n【價值層面】\n7. 這篇文章想傳達什麼價值觀？\n8. 我同意這個價值觀嗎？為什麼？\n9. 還有其他角度可以思考嗎？'
              }
            ]
          },
          {
            title: '批判性閱讀練習：分析今天的課文',
            blocks: [
              {
                type: 'text',
                content: '【問題1】今天課文的主要論點是什麼？\n\n論點：AI可以幫助實現SDGs，但必須注意公平性和副作用。\n\n【問題2】課文用哪些證據？\n\n證據：\n• 精準農業：提高產量30-40%、減少水肥浪費\n• 遠距醫療：台大醫院AI準確率90%\n• 藥物研發：時間從10年縮短到3-5年\n\n【問題3】課文有沒有提反面觀點？\n\n有！課文特別強調：\n• 數位落差（沒網路的地區無法受益）\n• 資料偏見（訓練資料不平衡）\n• 失業問題（AI取代工作）'
              },
              {
                type: 'text',
                content: '【問題4】邏輯是否合理？\n\n合理的地方：\n• 用具體數據支持論點（30-40%、90%等）\n• 承認AI的限制\n• 強調「AI是工具，不是答案」\n\n需要更多思考的地方：\n• 「準確率90%」聽起來很高，但如果是醫療診斷，10%的錯誤率可能導致嚴重後果\n• 「提高產量30-40%」——對誰提高？大農場還是小農？\n• 「縮短研發時間」——新藥會因此變便宜嗎？還是藥廠賺更多？'
              },
              {
                type: 'text',
                content: '【問題5】還有哪些角度可以思考？\n\n經濟角度：\n• AI技術由大公司掌握（Google、Meta、台積電），小企業和開發中國家怎麼辦？\n\n環境角度：\n• AI訓練需要大量電力（W10學過能源議題），這對環境有什麼影響？\n\n文化角度：\n• AI醫療系統用西方醫學訓練，是否忽略傳統醫學？\n• AI農業系統是否尊重原住民的傳統生態知識（TEK）？\n\n倫理角度：\n• AI判斷誰該優先獲得醫療資源，這公平嗎？\n• AI決定施肥，是否讓農夫失去自主權？'
              }
            ]
          },
          {
            title: 'AI時代的閱讀策略',
            blocks: [
              {
                type: 'text',
                content: '【錯誤方式】\n• 看到文章，直接問AI：「這篇文章在說什麼？」\n• 複製AI的摘要，當作自己的理解\n• 不思考，不提問\n\n【正確方式】\n• 先自己讀一遍，試著理解\n• 標記不懂的地方\n• 自己先想：作者的論點是什麼？\n• 如果需要，問AI具體問題：「作者提到的『數位落差』是什麼意思？」\n• 比較AI的解釋和自己的理解\n• 形成自己的觀點'
              },
              {
                type: 'text',
                content: '【為什麼不能只依賴AI？】\n\n1. **AI的摘要可能有偏見**\n   • AI會強調某些觀點，忽略其他觀點\n   • AI的訓練資料可能有特定立場\n\n2. **AI無法批判思考**\n   • AI不會問「這合理嗎？」\n   • AI不會問「還有其他角度嗎？」\n\n3. **AI無法形成個人觀點**\n   • AI可以說「有人認為...」「有人認為...」\n   • 但AI不會說「我認為...因為...」\n   • **這是你的工作**\n\n**批判性閱讀是AI無法取代的能力。**'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateReadingQuestion,
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
        title: '回到開場的故事',
        sections: [
          {
            title: '重新閱讀《小安的AI診療室》',
            blocks: [
              {
                type: 'text',
                content: '現在，回答開場時的三個問題：\n\n① **AI在這個故事中做了什麼？**\n\n答：\n• 判讀X光片，找出疑似結節（影像辨識AI，監督式學習）\n• 標示異常位置，給出信心度87%\n• 調出統計資料（肺結節發生率）\n\n這些都是AI擅長的：大量資料處理、模式識別、統計分析。'
              },
              {
                type: 'text',
                content: '② **為什麼AI不能「直接」當醫生？**\n\n答：\n• AI只看影像，不看「人」\n• AI不知道阿嬤「咳了兩個月」（症狀）\n• AI不知道阿嬤「住山區」（環境因素）\n• AI不知道阿嬤的「生活習慣」（完整脈絡）\n• AI沒有同理心，無法安慰病人\n• AI無法承擔醫療責任\n\n**醫療需要理解「整個人」，不只是「一張X光片」。**'
              },
              {
                type: 'text',
                content: '③ **小安（人類）做了哪些AI做不到的事？**\n\n答：\n• 詢問症狀：「阿嬤，您最近有咳嗽嗎？」（互動、同理心）\n• 連結資訊：把AI判讀 + 症狀 + 環境因素整合起來\n• 判斷脈絡：知道「這個年齡層仍需注意」\n• 向醫師建議：「建議安排CT檢查和痰液檢驗」（專業判斷）\n• 反思理解：能說出「AI看的是影像規律，但不知道脈絡」\n\n**人類能做的：理解、連結、判斷、反思。**'
              }
            ]
          },
          {
            title: '今天學到的核心概念',
            blocks: [
              {
                type: 'text',
                content: '【關於AI的應用】\n• AI可以幫助實現SDGs（精準農業、遠距醫療、藥物研發）\n• 但要注意公平性（數位落差、資料偏見、失業問題）\n• **AI是工具，不是答案。重點是如何「公平地」使用。**\n\n【關於AI的學習】\n• 監督式學習：給問題+答案\n• 非監督式學習：自己找規律\n• 強化學習：試錯中學習\n• **AI的學習和人類完全不同：AI找規律，人類理解意義**\n\n【關於數學與思考】\n• 數學不只是計算，是理解世界的工具\n• AI會算，但你要知道「該用哪個公式」「答案合不合理」\n• **沒有數學基礎，連AI的應用都看不懂**\n\n【關於閱讀與批判】\n• 批判性閱讀：深入思考，提出問題\n• 不能只依賴AI摘要，要形成自己的觀點\n• **批判思考是AI無法取代的能力**'
              }
            ]
          },
          {
            title: '明天預告',
            blocks: [
              {
                type: 'text',
                content: '今天我們看到AI的好處，明天我們要問：\n\n**「AI不能做什麼？」**\n\n我們會探討：\n• AI的偏見與限制\n• 演算法歧視的真實案例\n• 為什麼AI時代，人的價值更重要\n\n同時，我們會繼續測試你的基礎知識：\n• 數學W7-W10（速率、百分比、統計）\n• 思辨能力：如果AI比人類更聰明，人類還有價值嗎？\n\n今天好好休息，明天見！'
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
