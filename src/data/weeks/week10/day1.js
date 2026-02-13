// src/data/weeks/week10/day1.js
// W10 Day1：發現問題

// ── 社會科題庫（探究五步驟）────────────────────
const socialPool = [
  {
    question: '探究的第一步是什麼？',
    options: ['蒐集資料', '發現問題', '得出結論', '提出建議'],
    answer: 1
  },
  {
    question: '下列哪個是可信的資料來源？',
    options: ['匿名論壇的文章', '內容農場的標題', '經濟部能源局網站', '沒有註明來源的圖片'],
    answer: 2
  },
  {
    question: '「三源交叉法」是什麼意思？',
    options: ['找三個朋友問', '同一數據查三個來源', '看三遍文章', '寫三份報告'],
    answer: 1
  },
  {
    question: '探究的第三步是什麼？',
    options: ['發現問題', '蒐集資料', '分析資料', '得出結論'],
    answer: 2
  },
  {
    question: '好的建議應該具備什麼特質？',
    options: ['很誇張', '具體可行', '只考慮一方', '沒有證據'],
    answer: 1
  },
  {
    question: '探究的第二步是什麼？',
    options: ['發現問題', '蒐集資料', '分析資料', '得出結論'],
    answer: 1
  },
  {
    question: '為什麼要記錄資料來源？',
    options: ['讓報告看起來比較長', '方便查證和確認可信度', '老師規定的', '沒有特別原因'],
    answer: 1
  },
  {
    question: '下列哪個「不是」探究的步驟？',
    options: ['發現問題', '猜測答案就好', '蒐集資料', '分析資料'],
    answer: 1
  }
]

function generateSocialQuestion() {
  const q = socialPool[Math.floor(Math.random() * socialPool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── 數學科題庫（平均數）──────────────────────────
const mathPool = [
  {
    question: '計算平均數：80, 90, 85, 75',
    options: ['82', '82.5', '83', '83.5'],
    answer: 1
  },
  {
    question: '小華三次考試分數是85分、90分、88分，平均分數大約是多少？',
    options: ['86分', '87分', '88分', '89分'],
    answer: 2
  },
  {
    question: '有5個數字，平均數是80，這5個數字的總和是多少？',
    options: ['75', '380', '400', '405'],
    answer: 2
  },
  {
    question: '下列哪個情況「不適合」用平均數來分析？',
    options: [
      '班上30個同學的身高',
      '一週7天的氣溫',
      '5個人的收入，其中1人是億萬富翁',
      '10次考試的成績'
    ],
    answer: 2
  },
  {
    question: '計算平均數的公式是什麼？',
    options: ['總和 × 個數', '總和 ÷ 個數', '最大值 ÷ 2', '最大值 + 最小值'],
    answer: 1
  },
  {
    question: '4個數字是60, 70, 80, 90，平均數是多少？',
    options: ['70', '75', '80', '85'],
    answer: 1
  },
  {
    question: '平均數80分，共考了4次，總分是多少？',
    options: ['280', '300', '320', '340'],
    answer: 2
  },
  {
    question: '三個數字的總和是240，平均數是多少？',
    options: ['60', '70', '80', '90'],
    answer: 2
  }
]

function generateMathQuestion() {
  const q = mathPool[Math.floor(Math.random() * mathPool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── 科學題庫（電與磁）────────────────────────────
const sciencePool = [
  {
    question: '奧斯特發現了什麼？',
    options: ['磁鐵產生電流', '電流產生磁場', '光產生電流', '熱產生磁場'],
    answer: 1
  },
  {
    question: '下列哪個現象是「電流產生磁場」？',
    options: ['冰箱磁鐵吸住鐵門', '電磁鐵通電後吸起鐵釘', '指南針指向北方', '太陽照射產生熱'],
    answer: 1
  },
  {
    question: '電磁鐵和永久磁鐵的差別是什麼？',
    options: [
      '電磁鐵比較貴',
      '電磁鐵可以控制磁力的有無',
      '永久磁鐵比較大',
      '沒有差別'
    ],
    answer: 1
  },
  {
    question: '喇叭如何發出聲音？',
    options: [
      '用電流加熱空氣',
      '用磁鐵吸引空氣',
      '用變化的磁場推動振膜',
      '用光線震動空氣'
    ],
    answer: 2
  },
  {
    question: '下列哪個「不是」利用電磁原理的裝置？',
    options: ['電磁爐', '喇叭', '電磁鐵', '太陽能板'],
    answer: 3
  },
  {
    question: '電流通過導線時，周圍會產生什麼？',
    options: ['熱能', '磁場', '光線', '聲音'],
    answer: 1
  },
  {
    question: '電磁鐵斷電後會怎樣？',
    options: ['磁力消失', '磁力變強', '磁力不變', '會爆炸'],
    answer: 0
  },
  {
    question: '奧斯特實驗中，指南針為什麼會偏轉？',
    options: [
      '因為地球磁場改變',
      '因為電線產生了磁場',
      '因為溫度升高',
      '因為風吹動了'
    ],
    answer: 1
  }
]

function generateScienceQuestion() {
  const q = sciencePool[Math.floor(Math.random() * sciencePool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── 語文題庫（探究詞彙）──────────────────────────
const chinesePool = [
  {
    question: '「______」是指用實驗或數據來證明假設。',
    options: ['探究', '驗證', '假設', '觀察'],
    answer: 1
  },
  {
    question: '「客觀性」的意思是什麼？',
    options: ['很主觀', '只看事實不受情緒影響', '很快速', '很複雜'],
    answer: 1
  },
  {
    question: '下列哪個「不是」好的資料來源？',
    options: ['政府網站', '學術論文', '匿名論壇', '專業媒體'],
    answer: 2
  },
  {
    question: '「我想探究手機使用時間，因為想改善睡眠品質。」這個句子缺少什麼？',
    options: ['主題', '原因', '都有了', '動詞'],
    answer: 2
  },
  {
    question: '「假設」是什麼意思？',
    options: ['確定的答案', '推測可能的答案', '錯誤的想法', '別人的意見'],
    answer: 1
  },
  {
    question: '探究時為什麼要保持「客觀性」？',
    options: [
      '讓報告看起來比較專業',
      '避免個人偏見影響結論',
      '老師規定的',
      '沒有特別原因'
    ],
    answer: 1
  },
  {
    question: '「資料來源」包含哪些資訊？',
    options: [
      '只要網站名稱就好',
      '網站名稱、發布日期、作者',
      '只要日期就好',
      '不用記錄'
    ],
    answer: 1
  },
  {
    question: '下列哪個句子正確使用了探究詞彙？',
    options: [
      '我猜測答案是這樣',
      '根據能源局數據，我發現綠能占比很低',
      '我覺得應該是這樣',
      '大家都說是這樣'
    ],
    answer: 1
  }
]

function generateChineseQuestion() {
  const q = chinesePool[Math.floor(Math.random() * chinesePool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── Day 資料 ──────────────────────────────────────
const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🔍',
  color: '#3b82f6',
  title: '發現問題',
  units: [
    {
      id: 'w10d1-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '停電的那一天',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '我們這才發現：原來「電」這麼重要！沒有電，現代人幾乎什麼事都做不了。',
                author: '台南市文賢國中 文薈探究隊'
              },
              {
                type: 'text',
                content: '這週我們要讀的是台南市文賢國中同學的探究報告《綠能，穩嗎？——台灣綠能的現在與未來》。這份報告獲得2022年柯華葳線上數位閱讀專題探究競賽特優獎。'
              },
              {
                type: 'text',
                content: '他們和你一樣是國中生，卻能用科學方法深入研究台灣的能源問題。這週，我們要跟著他們的腳步，學習如何做探究、如何用數據說話。'
              }
            ]
          },
          {
            title: '停電的那一天',
            blocks: [
              {
                type: 'text',
                content: '還記得去年夏天，當我們正準備吹冷氣、看電視的時候，突然——啪！整個社區都停電了。'
              },
              {
                type: 'text',
                content: '那天真的很熱，沒有冷氣，大家只能拿扇子搖啊搖。爸媽的手機也快沒電了，無法充電。樓下便利商店的冰淇淋開始融化，老闆急得團團轉。鄰居阿姨經營的小吃店也無法營業，損失了一整天的生意。'
              }
            ]
          },
          {
            title: '問題來了',
            blocks: [
              {
                type: 'text',
                content: '停電問題解決後，我們開始注意新聞。電視上說，為了供應足夠的電力，台灣的火力發電廠全力運轉。可是幾天後，我們發現天空變得灰濛濛的，空氣聞起來也怪怪的。'
              },
              {
                type: 'text',
                content: '新聞報導說，這是因為火力發電會產生空氣污染。等等，這不是很矛盾嗎？如果發電不夠會停電，如果火力發電太多空氣會變差，到底有沒有辦法「既有電用，空氣又乾淨」？'
              }
            ]
          },
          {
            title: '我們決定研究這個問題',
            blocks: [
              {
                type: 'text',
                content: '身為學生，我們也想為地球做點事。我們想知道：什麼是「綠能」？台灣現在怎麼發電？各種發電方式有什麼優缺點？台灣適合發展綠能嗎？我們可以怎麼做？'
              },
              {
                type: 'text',
                content: '🤔 開場問題：你有沒有經歷過停電？當時有什麼不方便的地方？你覺得「有電用」和「空氣乾淨」，哪個比較重要？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w10d1-social',
      name: '社會｜探究五步驟',
      icon: '🌏',
      lesson: {
        title: '什麼是探究？如何做研究？',
        sections: [
          {
            title: '探究五步驟',
            blocks: [
              {
                type: 'text',
                content: '要研究一個問題，不能只憑感覺，要用「科學方法」。文賢國中的同學使用了探究五步驟：'
              },
              {
                type: 'text',
                content: '**步驟1：發現問題** - 從生活經驗出發，找到值得研究的問題。例如：停電讓我們發現電力問題。'
              },
              {
                type: 'text',
                content: '**步驟2：蒐集資料** - 尋找可信的資料來源。至少找3個來源，互相比對。記得註明資料來源（網站名稱、日期）。'
              },
              {
                type: 'text',
                content: '**步驟3：分析資料** - 整理成圖表，找出趨勢和規律。用數字說話，不只憑感覺。'
              },
              {
                type: 'text',
                content: '**步驟4：得出結論** - 根據數據說話。承認研究的限制，提出證據支持結論。'
              },
              {
                type: 'text',
                content: '**步驟5：提出建議** - 建議要具體可行、有數據支持、考慮不同立場。'
              }
            ]
          },
          {
            title: '如何判斷資料可信度？',
            blocks: [
              {
                type: 'text',
                content: '**可信的資料來源**：政府網站（.gov.tw）、學術機構（.edu.tw）、專業媒體（有記者署名的新聞）、國際組織報告。'
              },
              {
                type: 'text',
                content: '**不可信的資料**：內容農場（標題很誇張）、沒有來源的文章、匿名論壇、極端偏頗的言論。'
              },
              {
                type: 'text',
                content: '**三源交叉法**：同一個數據，至少查3個來源確認。如果3個來源說法一致，比較可信。'
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
      id: 'w10d1-math',
      name: '數學｜平均數',
      icon: '🔢',
      lesson: {
        title: '平均數的概念與計算',
        sections: [
          {
            title: '什麼是平均數？',
            blocks: [
              {
                type: 'text',
                content: '**平均數**是一組數據的「代表值」，計算方式是把所有數字加起來，再除以個數。'
              },
              {
                type: 'text',
                content: '**公式**：平均數 = 總和 ÷ 個數'
              },
              {
                type: 'text',
                content: '**例子**：小明這週考了5次數學小考，分數是80, 90, 85, 75, 95。平均分數 = (80+90+85+75+95) ÷ 5 = 425 ÷ 5 = 85分。'
              }
            ]
          },
          {
            title: '平均數的生活應用',
            blocks: [
              {
                type: 'text',
                content: '**用電量分析**：台灣2011-2020這10年，每年的平均發電量是多少？把10年的總發電量加起來，除以10。'
              },
              {
                type: 'text',
                content: '**零用錢管理**：你這個月每週的零用錢是100, 150, 120, 130元，平均每週多少錢？(100+150+120+130) ÷ 4 = 125元。'
              },
              {
                type: 'text',
                content: '**手機使用時間**：記錄一週每天用手機的時間，計算平均值，就知道自己平均每天用多久。'
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
    {
      id: 'w10d1-science',
      name: '科學｜電與磁的關係',
      icon: '🔬',
      lesson: {
        title: '電流產生磁場：奧斯特實驗',
        sections: [
          {
            title: '奧斯特的發現',
            blocks: [
              {
                type: 'text',
                content: '1820年，丹麥科學家奧斯特（Oersted）在課堂上做實驗時，意外發現了一個驚人的現象：當他把電線接上電池，電線旁的指南針竟然偏轉了！'
              },
              {
                type: 'text',
                content: '原本指南針應該指向北方，但當有電流通過電線時，指南針的指針轉向了電線。這個發現震驚了科學界！'
              }
            ]
          },
          {
            title: '電流會產生磁場',
            blocks: [
              {
                type: 'text',
                content: '奧斯特的實驗證明了：**電流通過導線時，會在導線周圍產生磁場**。'
              },
              {
                type: 'text',
                content: '**磁力線**：磁場看不見，但我們可以想像成一圈一圈包圍著電線的「磁力圈」。指南針的指針會順著這些磁力線轉動。'
              }
            ]
          },
          {
            title: '生活中的應用',
            blocks: [
              {
                type: 'text',
                content: '**電磁鐵**：把電線纏繞在鐵釘上，通電後就變成磁鐵！電流越大，磁力越強。斷電後，磁力就消失了。'
              },
              {
                type: 'text',
                content: '**電磁爐**：用電流產生變化的磁場，讓鍋子發熱。不用明火，很安全。'
              },
              {
                type: 'text',
                content: '**喇叭**：電流通過喇叭中的線圈，產生變化的磁場，推動振膜震動，發出聲音。'
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
      id: 'w10d1-chinese',
      name: '語文｜探究詞彙',
      icon: '✍️',
      lesson: {
        title: '探究與研究的專業用語',
        sections: [
          {
            title: '探究相關詞彙',
            blocks: [
              {
                type: 'text',
                content: '**探究**：仔細調查研究，找出問題的答案。'
              },
              {
                type: 'text',
                content: '**假設**：根據已知資訊，推測可能的答案。例如：「我假設綠能無法取代火力發電，因為不夠穩定。」'
              },
              {
                type: 'text',
                content: '**驗證**：用實驗或數據來證明假設是對還是錯。'
              },
              {
                type: 'text',
                content: '**資料來源**：資料從哪裡來的？是誰提供的？什麼時候發布的？'
              },
              {
                type: 'text',
                content: '**客觀性**：不受個人情緒或偏見影響，只看事實和數據。'
              }
            ]
          },
          {
            title: '句型練習',
            blocks: [
              {
                type: 'text',
                content: '**我想探究______，因為______。**\n\n例如：我想探究「台灣的綠能發展」，因為「我關心環境問題」。'
              },
              {
                type: 'text',
                content: '**根據______（資料來源），我發現______。**\n\n例如：根據「經濟部能源局的數據」，我發現「台灣的綠能只占5.4%」。'
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
      id: 'w10d1-review',
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
                content: '🌏 社會：探究五步驟（發現問題 → 蒐集資料 → 分析資料 → 得出結論 → 提出建議）'
              },
              {
                type: 'text',
                content: '🔢 數學：平均數 = 總和 ÷ 個數，用來代表一組數據的「中間值」'
              },
              {
                type: 'text',
                content: '🔬 科學：奧斯特發現電流通過導線時，會在周圍產生磁場'
              },
              {
                type: 'text',
                content: '✍️ 語文：探究詞彙（假設、驗證、資料來源、客觀性）'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：明天我們要來看看，「綠能」到底是什麼？世界各國對綠能的定義一樣嗎？台灣的電又是從哪裡來的？數字會告訴我們很多事情！'
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
