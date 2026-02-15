// src/data/weeks/week10/day2.js
// W10 Day2：蒐集資料

// 改寫後的題庫 - 使用標準洗牌機制

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題庫
// ==========================================

// ── 社會科題庫（資料查證技巧）────────────────────
const socialPool = [
  {
    type: 'options',
    question: '下列哪個網址「最可信」？',
    options: [
      'www.moea.gov.tw（經濟部）',
      'www.news-shock.com（震驚新聞網）',
      '匿名論壇的文章',
      '沒有來源的LINE訊息'
    ],
    answer: 0,
    displayAnswer: 'www.moea.gov.tw（經濟部）'
  },
  {
    type: 'options',
    question: '「三源交叉法」的意思是什麼？',
    options: [
      '同一數據查三個不同來源',
      '看三遍同一篇文章',
      '問三個朋友',
      '等三天再查'
    ],
    answer: 0,
    displayAnswer: '同一數據查三個不同來源'
  },
  {
    type: 'options',
    question: '下列哪個「不是」可信的資料來源？',
    options: [
      '標題寫「震驚！不看後悔！」的文章',
      '中央研究院的研究報告',
      '台電公司的年報',
      '聯合國的報告'
    ],
    answer: 0,
    displayAnswer: '標題寫「震驚！不看後悔！」的文章'
  },
  {
    type: 'options',
    question: '記錄資料來源時，「不需要」記錄什麼？',
    options: [
      '你看到這篇文章的心情',
      '網站名稱',
      '發布日期',
      '網址'
    ],
    answer: 0,
    displayAnswer: '你看到這篇文章的心情'
  },
  {
    type: 'options',
    question: '如果查到的三個來源說法不一致，應該怎麼辦？',
    options: [
      '再多查幾個來源，或選擇最權威的',
      '選最簡單的那個',
      '選自己喜歡的那個',
      '放棄不查了'
    ],
    answer: 0,
    displayAnswer: '再多查幾個來源，或選擇最權威的'
  },
  {
    type: 'options',
    question: '政府網站的網址結尾通常是什麼？',
    options: ['.gov.tw', '.com', '.org', '.net'],
    answer: 0,
    displayAnswer: '.gov.tw'
  },
  {
    type: 'options',
    question: '學術機構網站的網址結尾通常是什麼？',
    options: ['.edu.tw', '.com', '.gov.tw', '.net'],
    answer: 0,
    displayAnswer: '.edu.tw'
  },
  {
    type: 'options',
    question: '內容農場的特徵是什麼？',
    options: [
      '標題很誇張、充滿廣告',
      '標題很客觀',
      '有明確作者和來源',
      '資料很完整'
    ],
    answer: 0,
    displayAnswer: '標題很誇張、充滿廣告'
  }
]

const generateSocialQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(socialPool)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ── 數學科題庫（中位數與眾數）──────────────────────
const mathPool = [
  {
    type: 'options',
    question: '五個數字由小到大排列：10, 20, 30, 40, 50，中位數是多少？',
    options: ['30', '20', '25', '35'],
    answer: 0,
    displayAnswer: '30'
  },
  {
    type: 'options',
    question: '數字：10, 15, 10, 20, 10, 25，眾數是多少？',
    options: ['10', '15', '20', '25'],
    answer: 0,
    displayAnswer: '10'
  },
  {
    type: 'options',
    question: '什麼時候用中位數比平均數更適合？',
    options: [
      '有極端值的時候',
      '數字都差不多的時候',
      '數字很少的時候',
      '隨時都可以'
    ],
    answer: 0,
    displayAnswer: '有極端值的時候'
  },
  {
    type: 'options',
    question: '四個數字由小到大：10, 20, 30, 40，中位數是多少？',
    options: ['25', '20', '30', '35'],
    answer: 0,
    displayAnswer: '25'
  },
  {
    type: 'options',
    question: '5個人的零用錢：100, 100, 150, 100, 1000元。哪個更能代表一般情況？',
    options: [
      '中位數100元',
      '平均數270元',
      '都一樣',
      '都不對'
    ],
    answer: 0,
    displayAnswer: '中位數100元'
  },
  {
    type: 'options',
    question: '「眾數」是什麼意思？',
    options: [
      '出現次數最多的數',
      '最大的數',
      '中間的數',
      '平均的數'
    ],
    answer: 0,
    displayAnswer: '出現次數最多的數'
  },
  {
    type: 'options',
    question: '數字：5, 8, 5, 9, 5, 12，眾數是多少？',
    options: ['5', '8', '9', '12'],
    answer: 0,
    displayAnswer: '5'
  },
  {
    type: 'options',
    question: '中位數的計算步驟第一步是什麼？',
    options: [
      '由小到大排列',
      '加起來',
      '找出最大值',
      '除以個數'
    ],
    answer: 0,
    displayAnswer: '由小到大排列'
  }
]

const generateMathQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(mathPool)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ── 科學題庫（電磁感應）────────────────────────────
const sciencePool = [
  {
    type: 'options',
    question: '法拉第發現了什麼？',
    options: [
      '磁場變化產生電流',
      '電流產生磁場',
      '光產生電',
      '熱產生磁'
    ],
    answer: 0,
    displayAnswer: '磁場變化產生電流'
  },
  {
    type: 'options',
    question: '發電機的原理是什麼？',
    options: [
      '磁場變化產生電流',
      '電流產生磁場',
      '燃燒產生電',
      '光線產生電'
    ],
    answer: 0,
    displayAnswer: '磁場變化產生電流'
  },
  {
    type: 'options',
    question: '把磁鐵快速移進線圈，會發生什麼？',
    options: [
      '線圈產生電流',
      '線圈發熱',
      '線圈變成磁鐵',
      '什麼都不會發生'
    ],
    answer: 0,
    displayAnswer: '線圈產生電流'
  },
  {
    type: 'options',
    question: '電磁感應需要什麼條件？',
    options: [
      '磁場變化',
      '磁場不動',
      '溫度很高',
      '很多電池'
    ],
    answer: 0,
    displayAnswer: '磁場變化'
  },
  {
    type: 'options',
    question: '腳踏車的發電機利用什麼原理？',
    options: [
      '電磁感應',
      '太陽能',
      '化學反應',
      '核能'
    ],
    answer: 0,
    displayAnswer: '電磁感應'
  },
  {
    type: 'options',
    question: '發電廠的發電機是利用什麼來轉動？',
    options: [
      '水流、蒸汽或風力',
      '用手轉',
      '太陽光',
      '電池'
    ],
    answer: 0,
    displayAnswer: '水流、蒸汽或風力'
  },
  {
    type: 'options',
    question: '磁鐵靜止不動放在線圈旁邊，會產生電流嗎？',
    options: [
      '不會',
      '會',
      '有時會有時不會',
      '要看磁鐵大小'
    ],
    answer: 0,
    displayAnswer: '不會'
  },
  {
    type: 'options',
    question: '奧斯特和法拉第的發現有什麼關係？',
    options: [
      '互為相反的過程',
      '完全無關',
      '完全一樣',
      '沒有關係'
    ],
    answer: 0,
    displayAnswer: '互為相反的過程'
  }
]

const generateScienceQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(sciencePool)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ── 語文題庫（閱讀理解）──────────────────────────
const chinesePool = [
  {
    type: 'options',
    question: '台灣2020年的發電結構中，哪種占比最高？',
    options: ['火力', '太陽能', '風力', '核能'],
    answer: 0,
    displayAnswer: '火力'
  },
  {
    type: 'options',
    question: '台灣2020年綠能占總發電量的多少？',
    options: ['5.4%', '3.6%', '15%', '20%'],
    answer: 0,
    displayAnswer: '5.4%'
  },
  {
    type: 'options',
    question: '2011到2020年，哪種綠能成長最快？',
    options: ['太陽能', '水力', '風力', '生質能'],
    answer: 0,
    displayAnswer: '太陽能'
  },
  {
    type: 'options',
    question: '核能最大的爭議是什麼？',
    options: [
      '核廢料和安全問題',
      '太貴',
      '發電量太小',
      '需要很多人'
    ],
    answer: 0,
    displayAnswer: '核廢料和安全問題'
  },
  {
    type: 'options',
    question: '2011年哪個國家發生核災？',
    options: ['日本', '台灣', '美國', '法國'],
    answer: 0,
    displayAnswer: '日本'
  },
  {
    type: 'options',
    question: '再生能源的特點是什麼？',
    options: [
      '用了還會再長出來',
      '會用完',
      '只有台灣有',
      '很貴'
    ],
    answer: 0,
    displayAnswer: '用了還會再長出來'
  },
  {
    type: 'options',
    question: '化石燃料包括哪些？',
    options: [
      '煤炭、石油、天然氣',
      '太陽能、風力',
      '水力、地熱',
      '核能'
    ],
    answer: 0,
    displayAnswer: '煤炭、石油、天然氣'
  },
  {
    type: 'options',
    question: '狹義的綠能定義「不包含」什麼？',
    options: ['核能', '太陽能', '風力', '水力'],
    answer: 0,
    displayAnswer: '核能'
  }
]

const generateChineseQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(chinesePool)
      currentIndex = 0
    }
    
    const question = shuffledBank[currentIndex]
    currentIndex++
    
    return shuffleOptions(question)
  }
})()

// ==========================================
// 導出生成器
// ==========================================

export {
  generateSocialQuestion,
  generateMathQuestion,
  generateScienceQuestion,
  generateChineseQuestion
}

// ── Day 資料 ──────────────────────────────────────
const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '📊',
  color: '#8b5cf6',
  title: '蒐集資料',
  units: [
    {
      id: 'w10d2-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '綠能的身分證',
        sections: [
          {
            title: '能源的大家族',
            blocks: [
              {
                type: 'text',
                content: '昨天我們決定要研究綠能，但第一個問題就來了：**到底什麼才算是「綠能」？**'
              },
              {
                type: 'text',
                content: '就像幫一個人辦身分證，要先確認他是誰，綠能也需要一個明確的定義。'
              },
              {
                type: 'text',
                content: '**初級能源**：大自然直接給我們的能源，像是太陽光、風、水流、煤炭、石油、天然氣、鈾。'
              },
              {
                type: 'text',
                content: '**次級能源**：把初級能源加工後得到的能源，像是電、汽油、柴油、瓦斯。我們平常用的「電」其實是次級能源。'
              }
            ]
          },
          {
            title: '再生 vs 不可再生',
            blocks: [
              {
                type: 'text',
                content: '**再生能源（用不完的）**：太陽能、風力能、水力能、潮汐能、地熱能、生質能。這些能源的特點是：用了還會再長出來，取之不盡、用之不竭！'
              },
              {
                type: 'text',
                content: '**非再生能源（會用完的）**：煤炭、石油、天然氣、鈾。這些能源的特點是：總量固定，用一點少一點，而且分布不均。'
              }
            ]
          },
          {
            title: '核能：最有爭議的能源',
            blocks: [
              {
                type: 'text',
                content: '支持核能的人說：幾乎零碳排、發電量大、很穩定。反對核能的人說：核廢料問題、安全風險、建造成本高。'
              },
              {
                type: 'text',
                content: '2011年，日本發生大地震和海嘯，福島核電廠爆炸了。幾十萬人被迫撤離家園，大片土地受到核污染，到現在還在處理善後。這個事件讓全世界重新思考：核能真的安全嗎？'
              }
            ]
          },
          {
            title: '台灣的電從哪裡來？',
            blocks: [
              {
                type: 'text',
                content: '**2020年台灣發電結構**：火力發電82.2%、核能發電11.2%、再生能源5.4%、其他1.2%。'
              },
              {
                type: 'text',
                content: '**10年變化**：2011年綠能只有3.6%，2020年成長到5.4%，成長了50%！但實際占比還是很低。太陽能進步最快，10年間成長了15倍！'
              },
              {
                type: 'text',
                content: '🤔 思考問題：你認為核能該不該算綠能？台灣的發電結構中，火力占82%，你覺得太高還是合理？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w10d2-social',
      name: '社會｜資料查證技巧',
      icon: '🌏',
      lesson: {
        title: '如何判斷資料的可信度？',
        sections: [
          {
            title: '可信的資料來源',
            blocks: [
              {
                type: 'text',
                content: '**政府網站**：結尾是 .gov.tw 的網站，例如經濟部能源局、內政部、環保署。這些網站的數據通常最權威。'
              },
              {
                type: 'text',
                content: '**學術機構**：結尾是 .edu.tw 的網站，例如大學的研究中心、中央研究院。學者專家的研究報告比較客觀。'
              },
              {
                type: 'text',
                content: '**專業媒體**：有記者署名、有採訪過程、有多方查證的新聞報導。例如《報導者》、公視新聞。'
              }
            ]
          },
          {
            title: '不可信的資料來源',
            blocks: [
              {
                type: 'text',
                content: '**內容農場**：標題很誇張（「震驚！」「不看後悔！」），文章沒有署名，充滿廣告。'
              },
              {
                type: 'text',
                content: '**匿名論壇**：不知道是誰寫的，沒有來源，可能是謠言或個人意見。'
              },
              {
                type: 'text',
                content: '**極端偏頗的內容**：只講一面的故事，刻意忽略其他觀點，用很激動的語氣。'
              }
            ]
          },
          {
            title: '三源交叉法',
            blocks: [
              {
                type: 'text',
                content: '同一個數據，至少查3個不同來源。如果3個來源說法一致，那就比較可信。如果有矛盾，就要再多查幾個來源，或是選擇最權威的那個。'
              },
              {
                type: 'text',
                content: '**例子**：想知道「台灣2020年的綠能占比」，可以查：(1) 經濟部能源局官網 (2) 台電公司年報 (3) 能源統計年報。如果三個都說5.4%，那就確定了。'
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
    {
      id: 'w10d2-math',
      name: '數學｜中位數與眾數',
      icon: '🔢',
      lesson: {
        title: '除了平均數，還有中位數和眾數',
        sections: [
          {
            title: '什麼是中位數？',
            blocks: [
              {
                type: 'text',
                content: '**中位數**是把所有數字由小到大排列後，位於「正中間」的那個數。'
              },
              {
                type: 'text',
                content: '**步驟**：(1) 把數字由小到大排列 (2) 找出中間的數'
              },
              {
                type: 'text',
                content: '**例子1**（奇數個）：5個數字 20, 50, 30, 10, 40 → 排列：10, 20, 30, 40, 50 → 中位數是 30（中間那個）'
              },
              {
                type: 'text',
                content: '**例子2**（偶數個）：4個數字 10, 30, 20, 40 → 排列：10, 20, 30, 40 → 中位數是 (20+30)÷2 = 25（中間兩個的平均）'
              }
            ]
          },
          {
            title: '什麼是眾數？',
            blocks: [
              {
                type: 'text',
                content: '**眾數**是出現次數最多的那個數。'
              },
              {
                type: 'text',
                content: '**例子**：10, 20, 20, 30, 20, 40 → 眾數是 20（出現3次，最多）'
              }
            ]
          },
          {
            title: '什麼時候用中位數？',
            blocks: [
              {
                type: 'text',
                content: '當有**極端值**（特別大或特別小的數）時，用中位數比平均數更能代表「一般情況」。'
              },
              {
                type: 'text',
                content: '**例子**：10個人的月收入，9個人是3萬元，1個人是300萬元（億萬富翁）。平均數 = (3萬×9 + 300萬) ÷ 10 = 32.7萬元。但這不能代表一般人的收入！中位數是3萬元，更合理。'
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
    {
      id: 'w10d2-science',
      name: '科學｜電磁感應',
      icon: '🔬',
      lesson: {
        title: '磁場變化產生電流：法拉第定律',
        sections: [
          {
            title: '法拉第的發現',
            blocks: [
              {
                type: 'text',
                content: '1831年，英國科學家法拉第（Faraday）發現了電磁感應。他把磁鐵快速移進線圈，線圈裡就產生了電流！'
              },
              {
                type: 'text',
                content: '這和奧斯特的發現剛好相反：奧斯特發現「電流產生磁場」，法拉第發現「磁場變化產生電流」。'
              }
            ]
          },
          {
            title: '電磁感應的原理',
            blocks: [
              {
                type: 'text',
                content: '**法拉第定律**：當磁場變化時，會在導線中產生電流。'
              },
              {
                type: 'text',
                content: '**關鍵是「變化」**：磁鐵要移動，或線圈要移動。如果磁鐵靜止不動，就不會產生電流。'
              },
              {
                type: 'text',
                content: '**變化越快，電流越大**：磁鐵移動越快，產生的電流越強。'
              }
            ]
          },
          {
            title: '發電機的原理',
            blocks: [
              {
                type: 'text',
                content: '**發電廠就是用電磁感應發電**！用水流、蒸汽或風力轉動線圈（或磁鐵），產生電流。'
              },
              {
                type: 'text',
                content: '**水力發電**：水從高處落下，推動渦輪機轉動，帶動發電機。'
              },
              {
                type: 'text',
                content: '**火力發電**：燃燒煤炭或天然氣，把水加熱成蒸汽，蒸汽推動渦輪機轉動。'
              },
              {
                type: 'text',
                content: '**風力發電**：風吹動風機葉片轉動，帶動發電機。'
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
    {
      id: 'w10d2-chinese',
      name: '語文｜文本理解',
      icon: '✍️',
      lesson: {
        title: '理解台灣的能源現況',
        sections: [
          {
            title: '數字會說話',
            blocks: [
              {
                type: 'text',
                content: '文賢國中的同學用數據說話，讓我們看到台灣能源的真實情況：'
              },
              {
                type: 'text',
                content: '**2020年台灣發電結構**：\n• 火力發電：82.2%\n• 核能發電：11.2%\n• 再生能源：5.4%'
              },
              {
                type: 'text',
                content: '**再生能源細項**：\n• 太陽能：40%（60億度）\n• 生質能：24.8%\n• 水力：19.9%\n• 風力：15.2%'
              }
            ]
          },
          {
            title: '進步與挑戰',
            blocks: [
              {
                type: 'text',
                content: '**好消息**：10年間，綠能從3.6%成長到5.4%，太陽能成長了15倍！'
              },
              {
                type: 'text',
                content: '**壞消息**：即使成長了50%，綠能占比還是很低，只有5.4%。火力發電還是主力，占了82.2%。'
              },
              {
                type: 'text',
                content: '**國際比較**：冰島100%綠能、挪威98%、德國46%、日本20%、台灣5.4%。台灣的綠能占比真的很低！'
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
    {
      id: 'w10d2-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '今天你學到了什麼？',
        sections: [
          {
            title: '今日知識整理',
            blocks: [
              {
                type: 'text',
                content: '🌏 社會：資料查證技巧（政府網站最可信、三源交叉法、避開內容農場）'
              },
              {
                type: 'text',
                content: '🔢 數學：中位數（排列後中間的數）、眾數（出現最多次的數）。有極端值時用中位數更合理。'
              },
              {
                type: 'text',
                content: '🔬 科學：法拉第發現電磁感應，磁場變化產生電流。發電廠就是用這個原理發電。'
              },
              {
                type: 'text',
                content: '✍️ 語文：台灣2020年火力82.2%、核能11.2%、綠能5.4%。太陽能進步最快！'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：明天我們要來比較各種發電方式的優缺點。火力發電為什麼能當主力？太陽能和風力為什麼還無法取代火力？每種發電方式到底有什麼優點和限制？'
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
