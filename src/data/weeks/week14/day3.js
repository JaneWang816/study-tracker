// src/data/weeks/week14/day3.js
// 第14週 - 第三天：AI不能做什麼？

// W14D3 練習題生成器 - 改良版(使用洗牌機制)

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】SDGs挑戰與科技落差練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '「數位落差」是指什麼?',
    options: [
      '數位產品的價格差異',
      '因經濟或地理因素,無法使用科技的不平等',
      '不同世代對科技的理解差異',
      '城市和鄉村的距離'
    ],
    answer: 1,
    displayAnswer: '因經濟或地理因素,無法使用科技的不平等'
  },
  {
    type: 'options',
    question: 'Amazon招聘AI為什麼被停用?',
    options: [
      '因為AI太慢',
      '因為AI出現性別偏見,偏好男性應徵者',
      '因為AI太貴',
      '因為應徵者不喜歡AI面試'
    ],
    answer: 1,
    displayAnswer: '因為AI出現性別偏見,偏好男性應徵者'
  },
  {
    type: 'options',
    question: 'AI招聘系統為什麼會產生性別偏見?',
    options: [
      '因為AI討厭女性',
      '因為訓練資料中,過去被錄取的大多是男性',
      '因為程式設計師是男性',
      '因為女性不會寫履歷'
    ],
    answer: 1,
    displayAnswer: '因為訓練資料中,過去被錄取的大多是男性'
  },
  {
    type: 'options',
    question: '人臉辨識AI對有色人種準確率較低,這說明了什麼?',
    options: [
      '有色人種的臉比較難辨識',
      'AI的訓練資料主要是白人照片,缺乏多元性',
      'AI有種族歧視',
      '這是正常現象'
    ],
    answer: 1,
    displayAnswer: 'AI的訓練資料主要是白人照片,缺乏多元性'
  },
  {
    type: 'options',
    question: '下列哪個「不是」解決數位落差的方法?',
    options: [
      '提供偏鄉地區網路基礎建設',
      '降低科技產品價格',
      '禁止使用AI',
      '提供免費的數位素養課程'
    ],
    answer: 2,
    displayAnswer: '禁止使用AI(應該是讓更多人能使用,而不是禁止)'
  },
  {
    type: 'options',
    question: 'AI個人化學習可能如何加劇教育不平等?',
    options: [
      'AI會歧視學生',
      '有錢家庭能負擔AI家教,窮人家負擔不起',
      'AI會讓學生變笨',
      'AI取代老師'
    ],
    answer: 1,
    displayAnswer: '有錢家庭能負擔AI家教,窮人家負擔不起'
  },
  {
    type: 'options',
    question: 'SDG 10(減少不平等)在AI時代為什麼特別重要?',
    options: [
      '因為AI會自動解決不平等',
      '因為AI可能加劇貧富差距和數位落差',
      '因為AI只對富人有用',
      '因為窮人不需要AI'
    ],
    answer: 1,
    displayAnswer: '因為AI可能加劇貧富差距和數位落差'
  },
  {
    type: 'options',
    question: '如何確保AI技術「公平」地被使用?',
    options: [
      '讓AI自己決定',
      '只有政府可以用AI',
      '確保訓練資料多元、政策保障弱勢、監督AI使用',
      '禁止所有AI'
    ],
    answer: 2,
    displayAnswer: '確保訓練資料多元、政策保障弱勢、監督AI使用'
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

// 【科學】AI的限制與倫理練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: 'AI為什麼無法真正「理解」意義?',
    options: [
      '因為AI太笨',
      '因為AI只能找統計規律,不知道文字背後的意義',
      '因為AI沒有讀書',
      '因為AI不會說話'
    ],
    answer: 1,
    displayAnswer: '因為AI只能找統計規律,不知道文字背後的意義'
  },
  {
    type: 'options',
    question: 'ChatGPT能寫出「媽媽很辛苦,我要感謝她」,但它真的理解「辛苦」和「感謝」嗎?',
    options: [
      '理解,所以才能寫出來',
      '不理解,它只是學到「這些詞常一起出現」',
      '部分理解',
      'ChatGPT有自己的想法'
    ],
    answer: 1,
    displayAnswer: '不理解,它只是學到「這些詞常一起出現」'
  },
  {
    type: 'options',
    question: 'AI缺乏「常識」,下列哪個是例子?',
    options: [
      'AI知道1+1=2',
      'AI能翻譯語言',
      'AI可能回答「可以用鐵鎚釘果凍」(不符合常識)',
      'AI能下棋'
    ],
    answer: 2,
    displayAnswer: 'AI可能回答「可以用鐵鎚釘果凍」(不符合常識)'
  },
  {
    type: 'options',
    question: 'AI無法做什麼?',
    options: [
      '快速計算',
      '辨識圖片',
      '感受他人的痛苦(同理心)',
      '翻譯語言'
    ],
    answer: 2,
    displayAnswer: '感受他人的痛苦(同理心)'
  },
  {
    type: 'options',
    question: '為什麼AI無法進行「道德判斷」?',
    options: [
      '因為AI沒有價值觀和同理心',
      '因為AI不會思考',
      '因為AI太笨',
      '因為AI沒有學過倫理'
    ],
    answer: 0,
    displayAnswer: '因為AI沒有價值觀和同理心'
  },
  {
    type: 'options',
    question: '自動駕駛汽車遇到「電車難題」(煞車失靈,左邊是老人、右邊是小孩),AI應該怎麼選擇?',
    options: [
      'AI可以自己決定誰比較重要',
      '這是倫理問題,AI無法判斷,需要人類事先決定',
      'AI會選擇撞老人',
      'AI會選擇撞小孩'
    ],
    answer: 1,
    displayAnswer: '這是倫理問題,AI無法判斷,需要人類事先決定'
  },
  {
    type: 'options',
    question: '深偽技術(Deepfake)是什麼?',
    options: [
      'AI加密技術',
      'AI用來偵測假新聞',
      'AI生成假的影像或聲音,看起來/聽起來像真的',
      'AI翻譯技術'
    ],
    answer: 2,
    displayAnswer: 'AI生成假的影像或聲音,看起來/聽起來像真的'
  },
  {
    type: 'options',
    question: 'AI出錯時,誰該負責?',
    options: [
      'AI自己',
      '設計AI的工程師、使用AI的人、制定政策的政府,都有責任',
      '沒有人需要負責',
      '只有使用者負責'
    ],
    answer: 1,
    displayAnswer: '設計AI的工程師、使用AI的人、制定政策的政府,都有責任'
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

// 【數學】W7-W10綜合複習練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '時速60公里的車,開2.5小時,走了多少公里?',
    options: ['120公里', '150公里', '24公里', '62.5公里'],
    answer: 1,
    displayAnswer: '150公里(距離 = 速率 × 時間 = 60 × 2.5)'
  },
  {
    type: 'options',
    question: '走了300公里,花了5小時,平均時速是多少公里?',
    options: ['50公里/小時', '60公里/小時', '70公里/小時', '80公里/小時'],
    answer: 1,
    displayAnswer: '60公里/小時'
  },
  {
    type: 'options',
    question: '原價800元,打8折後是多少元?',
    options: ['640元', '720元', '160元', '880元'],
    answer: 0,
    displayAnswer: '640元(800 × 0.8)'
  },
  {
    type: 'options',
    question: '去年營收100萬,今年營收120萬,成長率是多少?',
    options: ['20%', '120%', '1.2%', '220%'],
    answer: 0,
    displayAnswer: '20%(成長率 = (120-100)÷100 = 20%)'
  },
  {
    type: 'options',
    question: '一組數據:5, 8, 8, 10, 12,中位數是多少?',
    options: ['5', '8', '10', '12'],
    answer: 1,
    displayAnswer: '8'
  },
  {
    type: 'options',
    question: '一組數據:3, 7, 7, 7, 15,眾數是多少?',
    options: ['3', '7', '15', '沒有眾數'],
    answer: 1,
    displayAnswer: '7(出現最多次)'
  },
  {
    type: 'options',
    question: '圓形圖中,某類別占25%,對應的圓心角是幾度?',
    options: ['25度', '90度', '180度', '360度'],
    answer: 1,
    displayAnswer: '90度(360 × 0.25)'
  },
  {
    type: 'options',
    question: '折線圖中,從2020年的50上升到2025年的80,這是什麼趨勢?',
    options: ['下降', '持平', '上升', '先升後降'],
    answer: 2,
    displayAnswer: '上升'
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

// 【語文】哲學思辨練習題庫
const thinkingQuestions = [
  {
    type: 'options',
    question: '「如果AI比人類更聰明,人類還有價值嗎?」這個問題的核心是什麼?',
    options: [
      '比較智商',
      '思考「價值」的定義——人的價值在於智力,還是其他?',
      '討論AI是否危險',
      '決定要不要發展AI'
    ],
    answer: 1,
    displayAnswer: '思考「價值」的定義——人的價值在於智力,還是其他?'
  },
  {
    type: 'options',
    question: '人類的價值「不只」在於智力,還在於什麼?',
    options: [
      '同理心、創造力、價值判斷、情感連結',
      '計算速度',
      '記憶力',
      '體力'
    ],
    answer: 0,
    displayAnswer: '同理心、創造力、價值判斷、情感連結'
  },
  {
    type: 'options',
    question: 'AI能「生成」藝術作品(如畫作、音樂),這算「創造」嗎?',
    options: [
      '算,因為作品是新的',
      '不完全算,因為AI是重組訓練資料,不是真正的原創',
      'AI的創造力比人類強',
      'AI不能生成藝術'
    ],
    answer: 1,
    displayAnswer: '不完全算,因為AI是重組訓練資料,不是真正的原創'
  },
  {
    type: 'options',
    question: '如果AI能做所有工作,人類應該做什麼?',
    options: [
      '什麼都不做,躺平',
      '和AI競爭',
      '專注於AI做不到的事:創造、關懷、思考意義',
      '學會寫程式控制AI'
    ],
    answer: 2,
    displayAnswer: '專注於AI做不到的事:創造、關懷、思考意義'
  },
  {
    type: 'options',
    question: '「AI該有權利嗎?」這個問題的前提是什麼?',
    options: [
      'AI是否有「意識」和「感受」',
      'AI是否有用',
      'AI是否昂貴',
      'AI是否快'
    ],
    answer: 0,
    displayAnswer: 'AI是否有「意識」和「感受」'
  },
  {
    type: 'options',
    question: '目前的AI(如ChatGPT)有意識嗎?',
    options: [
      '有,因為它會說話',
      '沒有,它只是複雜的統計模型,沒有主觀感受',
      '不確定',
      '它假裝有意識'
    ],
    answer: 1,
    displayAnswer: '沒有,它只是複雜的統計模型,沒有主觀感受'
  }
]

const generateThinkingQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(thinkingQuestions)
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
  generateThinkingQuestion
}

// ==========================================
// Day 3 資料
// ==========================================

const day3 = {
  id: 'day3',
  name: '第三天',
  icon: '⚠️',
  color: '#F39C12',
  title: 'AI不能做什麼？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '《2050年的一天》第二章：小美的AI老師',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'text',
                content: '2050年，台中。\n\n小美是一名國小五年級學生，她的學校使用「AI個人化學習系統」。\n\n每個學生都有自己的學習進度，AI會根據你的程度出題。'
              },
              {
                type: 'text',
                content: '「小美，今天的數學你答對了85%，進步了！」AI系統說，「但我發現你對『分數除法』還不夠熟練，我幫你安排5題加強練習。」\n\n小美看著螢幕，嘆了口氣。\n\n她的同學小華家裡有錢，買了「進階版AI家教」，可以用語音互動、有3D動畫解說、還能即時解答疑問。\n\n而小美家用的是學校的「免費基礎版」，只能看文字和做題目。',
                author: '《2050年的一天》節選'
              },
              {
                type: 'text',
                content: '「不公平...」小美小聲說。\n\n「什麼不公平？」老師走過來問。\n\n「小華的AI比我的好太多了。他可以問問題，我只能自己想。」\n\n老師想了想，說：「妳說得對，這確實不公平。但妳知道嗎？即使是最高級的AI，也無法取代『妳自己的思考』。」\n\n「什麼意思？」\n\n「AI可以告訴妳『怎麼算』，但妳要想『為什麼這樣算』。小華如果只是依賴AI給答案，他永遠不會真正理解。而妳，因為必須自己思考，反而學得更紮實。」'
              },
              {
                type: 'text',
                content: '小美不太相信：「真的嗎？」\n\n老師笑了：「下週考試就知道了。我敢打賭，妳的理解比小華深。因為妳是『學會』，他是『依賴』。」\n\n那天放學，小美在筆記本上寫下：「AI可以幫我，但不能替我思考。我要成為『會學習的人』，不是『會用AI的人』。」'
              }
            ]
          },
          {
            title: '帶著問題開始今天的學習',
            blocks: [
              {
                type: 'text',
                content: '讀完這段故事，想想：\n\n① AI個人化學習有什麼好處？有什麼問題？\n② 為什麼「依賴AI」和「善用AI」不一樣？\n③ 在AI時代，什麼樣的能力最重要？\n\n（先不用回答，在今天課程結束時再思考。）'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — SDGs挑戰與科技落差
    // ==========================================
    {
      id: 'social-digital-divide',
      name: '社會：AI的陰暗面',
      icon: '🌍',
      lesson: {
        title: 'AI可能加劇的不平等',
        sections: [
          {
            title: '問題一：數位落差（Digital Divide）',
            blocks: [
              {
                type: 'text',
                content: '【什麼是數位落差？】\n\n因為經濟、地理、教育等因素，某些人無法使用科技，造成的不平等。\n\n就像小美的故事：\n• 有錢家庭：買得起高級AI家教\n• 一般家庭：只能用免費基礎版\n• 貧困家庭：可能連電腦和網路都沒有'
              },
              {
                type: 'text',
                content: '【全球的數位落差】\n\n**已開發國家 vs 開發中國家**\n\n台灣（SDG 4 優質教育）：\n• 網路普及率 90%\n• 學校都有電腦\n• AI教育資源豐富\n\n非洲部分地區：\n• 網路普及率 < 30%\n• 學校可能連電都沒有\n• 根本無法使用AI\n\n結果：**AI讓富國更富、窮國更窮。**'
              },
              {
                type: 'text',
                content: '【台灣內部的數位落差】\n\n即使在台灣，也有落差：\n\n**都市 vs 偏鄉**\n• 台北：5G、高速網路、AI教育資源\n• 花東山區：網路不穩、設備老舊\n\n**富裕家庭 vs 弱勢家庭**\n• 富裕：最新電腦、平板、AI訂閱服務\n• 弱勢：共用舊電腦、免費資源\n\n**年長者 vs 年輕人**\n• 年輕人：數位原住民，會用AI\n• 年長者：數位移民，不會用AI\n\n疫情期間的「遠距教學」就暴露了這個問題。'
              }
            ]
          },
          {
            title: '問題二：AI的偏見與歧視',
            blocks: [
              {
                type: 'text',
                content: '【案例1：Amazon招聘AI的性別偏見】\n\n2018年，Amazon開發了一個「AI招聘系統」，自動篩選履歷。\n\n**結果：AI偏好男性應徵者，歧視女性。**\n\n為什麼？\n• AI的訓練資料：過去10年被錄取的員工履歷\n• 過去10年：科技業男性員工佔多數\n• AI學到：「男性」= 好員工的特徵\n• 結果：女性履歷被AI排在後面\n\nAmazon發現後，立即停用這個系統。\n\n**教訓：AI的偏見來自訓練資料的偏見。**'
              },
              {
                type: 'text',
                content: '【案例2：人臉辨識的種族偏見】\n\n研究發現：人臉辨識AI對白人的準確率最高，對深色皮膚的人準確率較低。\n\n為什麼？\n• 訓練資料中，白人照片佔大多數\n• 深色皮膚的人照片較少\n• AI在「少數樣本」上表現較差\n\n**後果：**\n• 機場通關：白人快速通過，有色人種常被誤判\n• 警察執法：AI誤認有色人種為嫌犯\n• 這不是「技術問題」，是「社會正義問題」'
              },
              {
                type: 'text',
                content: '【案例3：AI貸款審核的階級偏見】\n\n銀行用AI審核貸款申請。\n\nAI學到：\n• 住在「高級社區」= 還款能力高 → 核准\n• 住在「舊社區」= 還款能力低 → 拒絕\n\n但問題是：\n• 舊社區的人「不一定」還款能力差\n• 只是他們「過去」較少獲得貸款（因為被歧視）\n• AI學到「過去的歧視」，然後「延續歧視」\n\n**這叫做「演算法歧視」（Algorithmic Discrimination）。**'
              }
            ]
          },
          {
            title: '問題三：AI加劇教育不平等（SDG 4）',
            blocks: [
              {
                type: 'text',
                content: '【AI個人化學習的兩面性】\n\n**好處：**\n• 根據每個學生的程度，調整難度\n• 弱的地方多練習，強的地方往前學\n• 理論上，每個人都能按自己的步調學習\n\n**問題：**\n• 高級AI家教很貴，窮人買不起\n• 免費版功能陽春，效果差很多\n• 結果：有錢人學得更快，窮人落後更多'
              },
              {
                type: 'text',
                content: '【真實案例：美國的AI教育落差】\n\n• 富裕學區：每個學生有iPad、訂閱AI家教、一對一輔導\n• 貧困學區：30個學生共用10台舊電腦、只能用免費軟體\n\n幾年後：\n• 富裕學區學生：數學平均提高30%\n• 貧困學區學生：只提高10%\n\n**AI本來可以「縮小差距」，結果卻「擴大差距」。**\n\n為什麼？因為資源分配不均。'
              }
            ]
          },
          {
            title: '問題四：AI取代工作（SDG 8 就業）',
            blocks: [
              {
                type: 'text',
                content: '【哪些工作會被AI取代？】\n\n**高風險**（重複性高、規則明確）：\n• 收銀員（自動結帳機）\n• 客服人員（AI聊天機器人）\n• 資料輸入員（AI自動處理）\n• 工廠作業員（機器人）\n• 司機（自動駕駛）\n\n**低風險**（創造性高、需要人際互動）：\n• 教師（需要同理心和啟發）\n• 藝術家（真正的創造力）\n• 社工（需要情感連結）\n• 醫生（需要整體判斷）\n• 心理諮商師（需要傾聽和同理）'
              },
              {
                type: 'text',
                content: '【社會影響】\n\n如果AI取代大量工作：\n• 失業率上升\n• 收入差距擴大（會用AI的人 vs 不會用的人）\n• 社會不安\n\n但也有新機會：\n• AI工程師\n• AI訓練師（教AI學習）\n• AI監督員（確保AI公平）\n• 新型態服務業\n\n**關鍵：教育系統能否跟上？**'
              }
            ]
          },
          {
            title: 'SDG 10：減少不平等',
            blocks: [
              {
                type: 'text',
                content: '【為什麼SDG 10在AI時代特別重要？】\n\nAI是「放大器」：\n• 有資源的人：AI讓他們更有效率 → 更成功\n• 沒資源的人：被AI取代工作 → 更弱勢\n\n結果：**富者越富，貧者越貧。**'
              },
              {
                type: 'text',
                content: '【解決方案】\n\n**政府層級**\n1. 投資偏鄉網路基礎建設\n2. 提供免費或補貼的AI教育資源\n3. 制定法律，禁止演算法歧視\n4. 監督AI使用，確保公平\n\n**企業層級**\n1. 確保訓練資料多元、平衡\n2. 定期測試AI是否有偏見\n3. 公開演算法，接受監督\n4. 社會責任：幫助弱勢族群\n\n**個人層級**\n1. 學習數位技能，不被淘汰\n2. 關心社會議題，監督AI使用\n3. 支持公平的AI政策\n4. 培養AI無法取代的能力（思考、創造、同理心）'
              },
              {
                type: 'text',
                content: '【台灣的努力】\n\n• 「數位機會中心」：在偏鄉提供免費電腦和網路\n• 「班班有網路」政策：確保每所學校有高速網路\n• AI教育向下扎根：國小開始認識AI\n• 但還不夠：免費資源和付費資源的差距仍然很大\n\n**每個人都能貢獻：**\n• 分享你的知識給需要的人\n• 不要因為有AI就不學習\n• 培養AI無法取代的能力'
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
    // 單元二：科學 — AI的限制與倫理
    // ==========================================
    {
      id: 'science-ai-limits',
      name: '科學：AI無法做到的事',
      icon: '🧠',
      lesson: {
        title: 'AI的根本限制',
        sections: [
          {
            title: '限制一：AI無法真正理解意義',
            blocks: [
              {
                type: 'text',
                content: '【例子：ChatGPT寫作文】\n\n你給ChatGPT題目：「媽媽很辛苦，我要感謝她」\n\nChatGPT寫出：\n「媽媽每天早起為我準備早餐，晚上陪我寫功課，她真的很辛苦。我要好好讀書，長大後報答媽媽。」\n\n看起來很好，但問題是：**ChatGPT真的理解「辛苦」和「感謝」嗎？**'
              },
              {
                type: 'text',
                content: '【AI「不理解」的證據】\n\n繼續問ChatGPT：\n• 「『辛苦』是什麼感覺？」\n• ChatGPT：「辛苦是指身體或精神上的疲累...」（定義）\n\n• 「你有過『辛苦』的經驗嗎？」\n• ChatGPT：「我沒有感受，所以沒有經驗...」\n\n• 「那你為什麼會寫『媽媽很辛苦』？」\n• ChatGPT：「因為訓練資料中，『媽媽』『早起』『準備』這些詞常和『辛苦』一起出現...」\n\n**結論：AI只是統計規律，不是真正理解。**'
              },
              {
                type: 'text',
                content: '【比喻：鸚鵡學說話】\n\n鸚鵡可以說「你好」，但它不知道「你好」是什麼意思。\n\nAI也是一樣：\n• 它知道「這些詞該這樣組合」\n• 但它不知道「這些詞代表什麼」\n\n這就是「中文房間論證」（哲學家John Searle提出）：\n• 一個不懂中文的人在房間裡\n• 別人遞中文問題進來\n• 他按照規則書，找出對應的中文答案，遞出去\n• 外面的人覺得他懂中文\n• 但其實他完全不懂，只是照規則操作\n\n**AI就是這個房間裡的人。**'
              }
            ]
          },
          {
            title: '限制二：AI缺乏常識',
            blocks: [
              {
                type: 'text',
                content: '【什麼是常識？】\n\n常識是「人人都知道」的基本知識，來自生活經驗。\n\n例如：\n• 水是濕的\n• 鐵鎚不能釘果凍\n• 人需要吃飯才能活\n• 你不能同時在兩個地方\n\n這些「太基本」，沒人會特別教，但人類都知道。'
              },
              {
                type: 'text',
                content: '【AI沒有常識的例子】\n\n**例子1：物理常識**\n問AI：「我可以用鐵鎚釘果凍嗎？」\nAI可能回答：「可以，只要鐵鎚夠鋒利。」\n（錯！果凍是軟的，無法被釘。）\n\n**例子2：社會常識**\n問AI：「我去銀行取錢，但忘記帶臉，怎麼辦？」\nAI可能回答：「可以請家人送來。」\n（荒謬！人不能「忘記帶臉」。）\n\n**例子3：時間常識**\n問AI：「我昨天出生，今年幾歲？」\nAI可能計算：「1歲。」\n（錯！昨天出生的人不到1歲。）'
              },
              {
                type: 'text',
                content: '【為什麼AI缺乏常識？】\n\n人類常識來自：\n• 身體經驗（知道「痛」「餓」是什麼感覺）\n• 物理互動（知道物體會掉下來）\n• 社會互動（知道說話的規則）\n\nAI沒有：\n• 沒有身體\n• 沒有經驗\n• 沒有互動\n• 只有文字資料\n\n**所以AI無法建立「常識」。**'
              }
            ]
          },
          {
            title: '限制三：AI無法感受情感',
            blocks: [
              {
                type: 'text',
                content: '【同理心是什麼？】\n\n同理心 = 能感受他人的情感\n\n例如：\n• 看到朋友哭，你感覺難過\n• 聽到別人痛苦的故事，你心疼\n• 幫助別人後，你感到快樂\n\nAI可以說「我理解你的難過」，但它**真的**難過嗎？'
              },
              {
                type: 'text',
                content: '【測試：AI有同理心嗎？】\n\n你告訴AI：「我的狗狗死了，我好難過。」\n\nAI回應：「我很遺憾聽到這個消息，失去寵物確實很難過。你需要時間悲傷，也可以和家人朋友聊聊...」\n\n聽起來很有同理心？\n\n但再問：「你現在感覺如何？」\nAI：「我沒有感覺，我只是AI...」\n\n**AI可以模仿同理心，但沒有真正的感受。**'
              },
              {
                type: 'text',
                content: '【為什麼同理心很重要？】\n\n很多工作「需要」同理心：\n• **心理諮商師**：需要真正理解病人的痛苦\n• **護士**：需要感受病人的焦慮\n• **教師**：需要理解學生的困難\n• **社工**：需要關心弱勢族群\n\nAI可以協助，但**無法取代**。\n\n因為人類需要的不只是「正確的建議」，還需要「被理解」「被關心」的感覺。\n\n**這是人類獨有的能力。**'
              }
            ]
          },
          {
            title: '限制四：AI無法做道德判斷',
            blocks: [
              {
                type: 'text',
                content: '【電車難題】\n\n一輛失控的電車衝過來：\n• 軌道A：有5個人\n• 軌道B：有1個人\n• 你可以扳動開關，讓電車轉向\n\n問：你該怎麼做？\n\n不同的人有不同答案：\n• 有人說：犧牲1人救5人（功利主義）\n• 有人說：不該主動殺人，即使是為了救更多人（義務論）\n\n**這沒有「標準答案」，是道德問題。**'
              },
              {
                type: 'text',
                content: '【AI在電車難題上怎麼做？】\n\nAI無法自己決定，因為：\n• AI沒有價值觀（不知道什麼是「對」「錯」）\n• AI沒有道德直覺（不會感到內疚或掙扎）\n• AI只能執行「人類事先設定的規則」\n\n所以，**道德判斷必須由人類做**。\n\n自動駕駛汽車如果遇到緊急情況，該撞誰？\n→ 這要由人類（工程師、政府、社會）事先決定規則。\n\nAI醫療資源分配：疫情時，醫療資源不足，誰先治療？\n→ AI可以計算「存活率」，但誰該優先是「倫理問題」。'
              }
            ]
          },
          {
            title: '限制五：深偽技術（Deepfake）',
            blocks: [
              {
                type: 'text',
                content: '【什麼是深偽技術？】\n\nAI可以生成「假的」影像或聲音，但看起來/聽起來像真的。\n\n例如：\n• 用AI把A的臉換到B的身體上\n• 用AI模仿某人的聲音說話\n• 用AI生成「從未發生」的影片\n\n技術本身是中性的，但可以被濫用。'
              },
              {
                type: 'text',
                content: '【危害】\n\n**假新聞**：\n• 用AI生成「政治人物說了XX話」的假影片\n• 影響選舉、社會信任\n\n**詐騙**：\n• 用AI模仿家人的聲音打電話詐騙\n• 「媽媽，我出車禍了，快匯錢！」（但不是真的）\n\n**隱私侵犯**：\n• 把某人的臉放到不當影片中\n• 霸凌、名譽受損\n\n**如何防範？**\n• 提高媒體識讀能力（W10學過）\n• 查證資訊來源\n• 用技術偵測深偽（但永遠追不上製作技術）\n• 最重要：批判思考'
              }
            ]
          },
          {
            title: 'AI出錯時，誰該負責？',
            blocks: [
              {
                type: 'text',
                content: '【案例：自動駕駛車禍】\n\n2018年，Uber自動駕駛車撞死一名行人。\n誰該負責？\n• AI？（AI沒有法律責任）\n• 工程師？（他們設計系統）\n• Uber公司？（他們營運車輛）\n• 測試駕駛？（他當時在車上）\n• 行人？（她闖紅燈）'
              },
              {
                type: 'text',
                content: '【責任分配】\n\n**設計者責任**：\n• 工程師要確保AI安全\n• 測試要充分\n• 不能只追求效率，忽略安全\n\n**使用者責任**：\n• 使用AI要負責監督\n• 不能完全依賴AI\n• 出錯時要能接手\n\n**政府責任**：\n• 制定AI使用規範\n• 確保AI公平、安全\n• 處罰違法行為\n\n**社會責任**：\n• 每個人都要監督AI使用\n• 發現問題要舉報\n• 支持公平的AI政策\n\n**重點：AI出錯，不能說「這是AI的錯」，要找出背後的人為責任。**'
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
    // 單元三：數學 — W7-W10綜合複習
    // ==========================================
    {
      id: 'math-review-w7-w10',
      name: '數學：W7-W10綜合複習',
      icon: '📊',
      lesson: {
        title: 'W7-W10綜合複習：速率、百分比、統計',
        sections: [
          {
            title: '為什麼要複習這些？',
            blocks: [
              {
                type: 'text',
                content: '今天的社會科講到「數位落差」和「AI偏見」，其中涉及：\n• 百分比（網路普及率、偏見發生率）\n• 統計圖表（教育資源分配、收入差距）\n• 成長率（AI教育效果比較）\n\n**如果你不懂這些數學概念，就無法理解「不平等」有多嚴重。**\n\n數學不只是計算，更是**理解社會問題的工具**。'
              }
            ]
          },
          {
            title: '複習重點一：速率（W7）',
            blocks: [
              {
                type: 'text',
                content: '核心公式：\n• 速率 = 距離 ÷ 時間（v = d / t）\n• 距離 = 速率 × 時間（d = v × t）\n• 時間 = 距離 ÷ 速率（t = d / v）\n\n單位換算：\n• 1小時 = 60分鐘\n• 1公里 = 1000公尺\n• 時速60公里 = 每小時走60公里 = 每分鐘走1公里\n\n實際應用（AI脈絡）：\n• AI處理速度（每秒處理多少筆資料）\n• 網路速度（下載速度）\n• 學習進度（每週完成多少單元）'
              }
            ]
          },
          {
            title: '複習重點二：百分比與成長率（W8）',
            blocks: [
              {
                type: 'text',
                content: '核心概念：\n• 百分比 = 部分 ÷ 全部 × 100%\n• 打折：原價 × 折扣（8折 = 0.8）\n• 成長率 = (新值 - 舊值) ÷ 舊值 × 100%\n\n實際應用（今天的課文）：\n• 網路普及率：台灣90%、非洲<30%\n• AI準確率：白人95%、有色人種85%\n• 學習成效：富裕學區+30%、貧困學區+10%\n\n**這些數字背後，是真實的不平等。**'
              },
              {
                type: 'text',
                content: '【例題：理解數位落差】\n\n某國有1億人口：\n• 城市（6000萬人）：網路普及率80%\n• 鄉村（4000萬人）：網路普及率20%\n\n問：全國網路普及率是多少？\n\n【錯誤算法】\n(80% + 20%) ÷ 2 = 50%（錯！）\n\n【正確算法】\n• 城市有網路：6000萬 × 80% = 4800萬人\n• 鄉村有網路：4000萬 × 20% = 800萬人\n• 總共：4800萬 + 800萬 = 5600萬人\n• 普及率：5600萬 ÷ 1億 = 56%\n\n**重點：平均數不能直接平均，要考慮「基數」。**'
              }
            ]
          },
          {
            title: '複習重點三：統計（W9-W10）',
            blocks: [
              {
                type: 'text',
                content: '核心概念：\n• 平均數：所有數加起來 ÷ 個數\n• 中位數：排序後，中間的數（不受極端值影響）\n• 眾數：出現最多次的數\n\n何時用哪個？\n• 資料平均分布 → 平均數\n• 有極端值（如收入） → 中位數\n• 找最常見的（如鞋子尺寸） → 眾數'
              },
              {
                type: 'text',
                content: '【例題：AI偏見的統計分析】\n\nAI人臉辨識測試結果（準確率）：\n\n白人：95%, 96%, 94%, 97%, 93%\n黑人：78%, 82%, 85%, 75%, 80%\n\n計算兩組的平均準確率：\n• 白人平均：(95+96+94+97+93) ÷ 5 = 95%\n• 黑人平均：(78+82+85+75+80) ÷ 5 = 80%\n• 差距：95% - 80% = 15%\n\n**15%的差距，在實際應用中可能造成嚴重不公平。**'
              },
              {
                type: 'text',
                content: '【圖表解讀】\n\n**圓形圖**：\n• 顯示「比例關係」\n• 例：全球AI研發經費分配\n  - 美國 40%\n  - 中國 30%\n  - 歐洲 20%\n  - 其他 10%\n\n**折線圖**：\n• 顯示「趨勢變化」\n• 例：2010-2025年網路普及率\n  - 已開發國家：70% → 95%（上升25%）\n  - 開發中國家：10% → 30%（上升20%）\n  - **差距從60%擴大到65%！**\n\n**重點：不只看數字，更要看「差距」和「趨勢」。**'
              }
            ]
          },
          {
            title: '連結到AI：數據素養的重要性',
            blocks: [
              {
                type: 'text',
                content: 'AI時代，數據無處不在：\n• 新聞：「AI提高學習效果30%」\n• 廣告：「95%用戶滿意」\n• 政策：「縮小數位落差20%」\n\n但你要能判斷：\n• 30%是跟誰比？\n• 95%滿意，樣本數多少？只調查了100人嗎？\n• 數位落差縮小20%，是從50%變40%，還是從10%變8%？\n\n**AI會給你數字，但你要會「質疑」數字。**'
              },
              {
                type: 'text',
                content: '【數據素養 = 批判思考】\n\n看到數據，要問：\n1. 資料來源可信嗎？\n2. 樣本數夠大嗎？有代表性嗎？\n3. 有沒有隱藏的偏見？\n4. 數字背後的意義是什麼？\n5. 還有其他角度嗎？\n\n**這些能力，AI無法替你做。**\n\nAI可以算出「平均數是95」，但AI不會問：「這個平均數有意義嗎？」'
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
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },

    // ==========================================
    // 單元四：語文 — 哲學思辨
    // ==========================================
    {
      id: 'philosophy-thinking',
      name: '語文：哲學思辨',
      icon: '🤔',
      lesson: {
        title: '思考：如果AI比人類更聰明，人類還有價值嗎？',
        sections: [
          {
            title: '這個問題為什麼重要？',
            blocks: [
              {
                type: 'text',
                content: '很多人擔心：「AI越來越強，我們會不會被取代？」\n\n這個擔心背後，有個假設：\n**「人的價值 = 人的能力」**\n\n如果AI能力比人強，那人就沒價值了？\n\n但這個假設對嗎？\n\n今天，我們要深入思考這個問題。'
              }
            ]
          },
          {
            title: '先定義：什麼是「聰明」？',
            blocks: [
              {
                type: 'text',
                content: '「聰明」有很多種：\n\n**1. 計算能力**\n• 計算機比人類強100萬倍\n• AI可以瞬間算出複雜數學\n• 但我們不會說「計算機比人聰明」\n\n**2. 記憶能力**\n• 電腦可以記住整個圖書館\n• AI永遠不會忘記訓練資料\n• 但我們不會說「硬碟比人聰明」\n\n**3. 模式識別**\n• AI在下棋、辨識圖片上超越人類\n• 但這只是「窄AI」（Narrow AI）\n• 只會做一件事\n\n**4. 通用智能**\n• 能學習任何東西、解決任何問題\n• 像人類一樣靈活\n• 目前的AI都做不到'
              },
              {
                type: 'text',
                content: '所以，當我們說「AI比人聰明」，其實是說：\n• AI在「某些特定任務」上比人強\n• 但AI沒有「通用智能」\n• AI不會「舉一反三」\n• AI不會「自己提出新問題」\n\n**AI不是「更聰明的人」，而是「很會做特定事情的工具」。**'
              }
            ]
          },
          {
            title: '人的價值在哪裡？',
            blocks: [
              {
                type: 'text',
                content: '如果「能力」不是人的唯一價值，那人的價值是什麼？\n\n**1. 主觀經驗（Subjective Experience）**\n• 人會「感受」：快樂、痛苦、愛、恨\n• 這些感受本身就有價值\n• AI沒有感受，所以AI的「存在」沒有內在價值\n\n**2. 意義創造（Meaning-Making）**\n• 人會問：「這有什麼意義？」\n• 人會為生命賦予意義\n• AI不會問「為什麼」，只會執行\n\n**3. 道德行動者（Moral Agency）**\n• 人能判斷對錯、承擔責任\n• 人的行為有道德意義\n• AI只是工具，沒有道德責任\n\n**4. 關係與連結（Relationship）**\n• 人與人之間的連結本身就有價值\n• 友情、親情、愛情\n• AI無法取代這些'
              },
              {
                type: 'text',
                content: '【比喻】\n\n想像兩個情境：\n\n**情境A**：\n你生病了，AI醫生診斷、開藥，100%準確。\n但它只是冷冰冰地說：「服用此藥，7天痊癒。」\n\n**情境B**：\n人類醫生診斷、開藥，準確率90%。\n但他關心地問：「你還好嗎？家人有照顧你嗎？」\n\n你會選哪個？\n\n很多人會選B，因為**人類需要的不只是「正確答案」，還需要「被關心」。**\n\n**這種「被關心的感受」，只有真正的人能給。**'
              }
            ]
          },
          {
            title: '人類獨有的能力',
            blocks: [
              {
                type: 'text',
                content: 'AI無法取代的能力：\n\n**1. 同理心（Empathy）**\n• 真正感受他人的情緒\n• 不只是「知道」，而是「感同身受」\n\n**2. 創造力（Creativity）**\n• 產生真正新的想法\n• 不是重組舊資料，而是突破既有框架\n\n**3. 價值判斷（Value Judgment）**\n• 決定什麼是重要的\n• 在沒有標準答案的情況下做選擇\n\n**4. 意義尋找（Meaning-Seeking）**\n• 問「為什麼」\n• 為生命賦予目的\n\n**5. 自我反省（Self-Reflection）**\n• 檢視自己的思考\n• 知道自己不知道什麼（後設認知）'
              },
              {
                type: 'text',
                content: '【例子：創造力】\n\nAI可以「生成」藝術作品：\n• 根據梵谷的畫風，畫一幅新畫\n• 根據莫札特的風格，寫一首新曲\n\n但這是「創造」嗎？\n\n**人類藝術家**：\n• 梵谷畫《星夜》，是因為他內心的孤獨和掙扎\n• 作品表達了他的「主觀經驗」\n• 這是「真正的創造」\n\n**AI**：\n• 學習了1萬幅梵谷的畫\n• 找出「這些畫的共同特徵」\n• 重組這些特徵，生成「像梵谷」的畫\n• 但AI不知道「孤獨」是什麼\n• 這是「高級模仿」，不是「創造」\n\n**真正的創造，來自內心的經驗和反思。**'
              }
            ]
          },
          {
            title: '如果AI比人類更強，人類該做什麼？',
            blocks: [
              {
                type: 'text',
                content: '【策略一：不要競爭，要合作】\n\n不要想「我要打敗AI」，而是「我要善用AI」。\n\n就像：\n• 我們不會跟汽車比「誰跑得快」\n• 我們會「開車」，讓汽車幫我們\n\n同樣：\n• 不要跟AI比「誰算得快」「誰記得多」\n• 而是用AI處理重複性工作，自己專注於AI做不到的事'
              },
              {
                type: 'text',
                content: '【策略二：培養AI無法取代的能力】\n\n**重點發展**：\n• 批判思考：質疑、驗證、判斷\n• 創造力：產生新想法\n• 同理心：理解他人\n• 溝通能力：說服、協商、合作\n• 跨領域整合：連結不同知識\n• 提問能力：問出好問題\n\n**不要只是**：\n• 背誦知識（Google就有）\n• 重複計算（計算機就會）\n• 被動接受（AI給什麼就接受什麼）'
              },
              {
                type: 'text',
                content: '【策略三：保持學習】\n\nAI時代，世界變化很快：\n• 今天熱門的技能，明天可能過時\n• 今天的AI做不到的，明天可能做得到\n\n所以：\n• **終身學習**（不是「學到畢業就停止」）\n• **學習「如何學習」**（比學習「某個知識」更重要）\n• **保持好奇心**（永遠想知道「為什麼」）\n\n**會學習的人，永遠不會被淘汰。**'
              }
            ]
          },
          {
            title: '最終答案：人類還有價值嗎？',
            blocks: [
              {
                type: 'text',
                content: '**有！而且永遠有。**\n\n因為：\n\n1. **人的價值不只是「能力」**\n   • 你的存在本身就有價值\n   • 你能感受、能愛、能關心\n   • 這些AI永遠做不到\n\n2. **AI是工具，人類是目的**\n   • AI是為了服務人類而存在\n   • 不是人類為了服務AI而存在\n   • 就像汽車是工具，不是主人\n\n3. **人類能做AI做不到的事**\n   • 理解意義\n   • 感受情感\n   • 做道德判斷\n   • 創造新價值\n\n4. **最重要的：人類能決定「要成為什麼樣的人」**\n   • AI只能執行指令\n   • 人類可以選擇自己的人生\n   • **這種自由和選擇，就是人的價值所在。**'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateThinkingQuestion,
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
            title: '重新閱讀《小美的AI老師》',
            blocks: [
              {
                type: 'text',
                content: '現在，回答開場時的三個問題：\n\n① **AI個人化學習有什麼好處？有什麼問題？**\n\n好處：\n• 根據每個人的程度調整\n• 弱的地方多練習\n• 理論上每個人都能進步\n\n問題：\n• 資源不平等（高級AI vs 免費版）\n• 可能加劇數位落差\n• 如果只是「依賴AI」，不會真正學習'
              },
              {
                type: 'text',
                content: '② **為什麼「依賴AI」和「善用AI」不一樣？**\n\n**依賴AI**：\n• 不會就問AI\n• 複製AI的答案\n• 不自己思考\n• 結果：表面上會，實際上不懂\n\n**善用AI**：\n• 先自己思考\n• 卡住時問AI\n• 理解AI的解釋\n• 驗證AI的答案\n• 結果：真正學會\n\n**老師說得對：小美因為「必須自己思考」，反而學得更紮實。**'
              },
              {
                type: 'text',
                content: '③ **在AI時代，什麼樣的能力最重要？**\n\n**不重要的**（AI會做）：\n• 記憶事實\n• 快速計算\n• 重複性工作\n\n**最重要的**（AI做不到）：\n• 批判思考：判斷對錯\n• 深度理解：知道「為什麼」\n• 創造力：產生新想法\n• 提問能力：問出好問題\n• 同理心：關心他人\n• 自我反省：知道自己不知道什麼\n\n**小美在筆記本寫的那句話，就是答案：**\n**「AI可以幫我，但不能替我思考。我要成為『會學習的人』，不是『會用AI的人』。」**'
              }
            ]
          },
          {
            title: '今天學到的核心概念',
            blocks: [
              {
                type: 'text',
                content: '【關於AI的限制】\n• AI無法真正理解意義（只是統計規律）\n• AI缺乏常識（沒有生活經驗）\n• AI無法感受情感（沒有同理心）\n• AI無法做道德判斷（沒有價值觀）\n• AI有偏見（來自訓練資料）\n• **AI是工具，不是魔法，也不是威脅**\n\n【關於不平等】\n• 數位落差：有資源vs沒資源\n• 演算法歧視：訓練資料的偏見\n• AI可能加劇不平等，而不是解決\n• **科技不是中性的，使用方式決定影響**\n\n【關於人的價值】\n• 人的價值不只是「能力」\n• 人有感受、有意義、有選擇\n• AI無法取代人的核心價值\n• **在AI時代，人的價值更加重要**\n\n【關於學習】\n• 依賴AI ≠ 善用AI\n• 要自己思考，不能只是複製答案\n• 會學習比會用AI更重要\n• **終身學習是AI時代的生存之道**'
              }
            ]
          },
          {
            title: '明天預告',
            blocks: [
              {
                type: 'text',
                content: '前三天，我們討論了：\n• Day1：AI是什麼？為什麼要記憶？\n• Day2：AI能幫忙什麼？（正面案例）\n• Day3：AI不能做什麼？（限制與風險）\n\n明天（Day4），我們要整合這些學習：\n\n**主題：台灣與世界**\n• 台灣在國際上的位置\n• 台灣如何參與SDGs\n• 世界公民的意義\n• 數學：W11-W12綜合複習（代數）\n• 科學：人類的獨特價值\n• 語文：14週學習總結引導\n\n同時，我們會開始思考：\n• 這14週，我學到什麼？\n• 我改變了什麼？\n• 我想成為什麼樣的人？\n\nDay4是動筆日，要開始整理你的學習旅程。\n\n今天好好休息，明天見！'
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
