// src/data/weeks/week10/day3.js
// W10 Day3：分析資料

// ── 社會科題庫（圖表製作）────────────────────
const socialPool = [
  {
    question: '用來表示「占比」的圖表是哪一種？',
    options: ['折線圖', '圓形圖', '長條圖', '散佈圖'],
    answer: 1
  },
  {
    question: '用來表示「趨勢變化」的圖表是哪一種？',
    options: ['圓形圖', '折線圖', '表格', '文字'],
    answer: 1
  },
  {
    question: '圓形圖的所有扇形角度加起來應該是多少度？',
    options: ['180度', '270度', '360度', '400度'],
    answer: 2
  },
  {
    question: '如果某項目占25%，圓形圖上應該是幾度？',
    options: ['25度', '50度', '75度', '90度'],
    answer: 3
  },
  {
    question: '折線圖適合呈現什麼資料？',
    options: [
      '一次性的占比',
      '隨時間變化的趨勢',
      '分類數據',
      '沒有規則的數字'
    ],
    answer: 1
  },
  {
    question: '長條圖適合用來做什麼？',
    options: [
      '比較不同項目的數量',
      '表示時間變化',
      '計算角度',
      '寫文章'
    ],
    answer: 0
  },
  {
    question: '製作圖表時，一定要標註什麼？',
    options: [
      '顏色',
      '標題、單位、資料來源',
      '自己的名字',
      '日期就好'
    ],
    answer: 1
  },
  {
    question: '比較表適合用來做什麼？',
    options: [
      '只寫一個項目',
      '多面向評估比較',
      '畫圖',
      '寫故事'
    ],
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

// ── 數學科題庫（數據分析綜合）──────────────────────
const mathPool = [
  {
    question: '某項占40%，圓形圖上應該是幾度？',
    options: ['40度', '90度', '144度', '180度'],
    answer: 2
  },
  {
    question: '100的25%是多少？',
    options: ['20', '25', '30', '35'],
    answer: 1
  },
  {
    question: '某數從100成長到120，成長率是多少？',
    options: ['10%', '20%', '25%', '30%'],
    answer: 1
  },
  {
    question: '如果總數是200，其中一項是50，占多少％？',
    options: ['20%', '25%', '30%', '40%'],
    answer: 1
  },
  {
    question: '圓形圖中，50%應該占幾度？',
    options: ['90度', '120度', '180度', '360度'],
    answer: 2
  },
  {
    question: '某數從80增加到100，成長了多少％？',
    options: ['20%', '25%', '30%', '40%'],
    answer: 1
  },
  {
    question: '400的10%是多少？',
    options: ['30', '40', '50', '60'],
    answer: 1
  },
  {
    question: '如果占比是20%，圓形圖上是幾度？',
    options: ['20度', '36度', '72度', '90度'],
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

// ── 科學題庫（發電機原理）────────────────────────────
const sciencePool = [
  {
    question: '水力發電是利用什麼能量？',
    options: [
      '水的溫度',
      '水從高處落下的位能',
      '水的顏色',
      '水的味道'
    ],
    answer: 1
  },
  {
    question: '風力發電是利用什麼轉動發電機？',
    options: ['太陽', '風吹動葉片', '水流', '人力'],
    answer: 1
  },
  {
    question: '太陽能板是利用什麼原理發電？',
    options: [
      '熱能轉換',
      '光電效應',
      '化學反應',
      '摩擦生電'
    ],
    answer: 1
  },
  {
    question: '火力發電廠用什麼推動渦輪機？',
    options: ['風', '水蒸汽', '太陽光', '人力'],
    answer: 1
  },
  {
    question: '所有發電方式的共同點是什麼？',
    options: [
      '都用水',
      '都要轉動（太陽能除外）',
      '都很貴',
      '都會爆炸'
    ],
    answer: 1
  },
  {
    question: '能量轉換的順序，水力發電是？',
    options: [
      '位能→動能→電能',
      '電能→位能→動能',
      '熱能→光能→電能',
      '化學能→電能'
    ],
    answer: 0
  },
  {
    question: '風力發電的能量轉換是？',
    options: [
      '熱能→電能',
      '風的動能→電能',
      '位能→電能',
      '化學能→電能'
    ],
    answer: 1
  },
  {
    question: '太陽能發電「不需要」什麼？',
    options: [
      '陽光',
      '太陽能板',
      '轉動渦輪機',
      '電線'
    ],
    answer: 2
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

// ── 語文題庫（論證結構）──────────────────────────
const chinesePool = [
  {
    question: '論證的三要素是什麼？',
    options: [
      '標題、內容、結論',
      '主張、理由、證據',
      '開頭、中間、結尾',
      '問題、答案、例子'
    ],
    answer: 1
  },
  {
    question: '「台灣應該發展綠能，因為可以減少空氣污染」，這是什麼？',
    options: ['主張', '理由', '證據', '結論'],
    answer: 1
  },
  {
    question: '好的證據應該具備什麼特質？',
    options: [
      '很誇張',
      '有數據或實例支持',
      '聽起來有道理就好',
      '是自己的想法'
    ],
    answer: 1
  },
  {
    question: '論證文最重要的是什麼？',
    options: [
      '字數很多',
      '邏輯清楚、有證據支持',
      '用很多成語',
      '寫得很快'
    ],
    answer: 1
  },
  {
    question: '下列哪個是好的「證據」？',
    options: [
      '我覺得應該是這樣',
      '大家都說是這樣',
      '根據能源局數據，綠能占5.4%',
      '聽說好像是'
    ],
    answer: 2
  },
  {
    question: '主張和理由的關係是什麼？',
    options: [
      '沒有關係',
      '理由支持主張',
      '主張支持理由',
      '互相矛盾'
    ],
    answer: 1
  },
  {
    question: '「根據研究，多運動能增強免疫力」，這是什麼？',
    options: ['主張', '理由', '證據', '標題'],
    answer: 2
  },
  {
    question: '寫論證文時，為什麼要提供證據？',
    options: [
      '讓文章變長',
      '增加說服力',
      '老師規定的',
      '比較好看'
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
const day3 = {
  id: 'day3',
  name: '第三天',
  icon: '📈',
  color: '#10b981',
  title: '分析資料',
  units: [
    {
      id: 'w10d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '各種發電方式大比拼',
        sections: [
          {
            title: '比較發電方式的五個面向',
            blocks: [
              {
                type: 'text',
                content: '假設你是台灣的能源部長，現在要決定台灣未來要用哪種發電方式。你會選哪一種？'
              },
              {
                type: 'text',
                content: '這個問題沒有標準答案，因為每種發電方式都有優點和缺點。我們需要做的是：客觀地比較，然後做出最適合的選擇。'
              },
              {
                type: 'text',
                content: '我們從五個面向來比較：\n• 穩定性：能不能24小時發電？\n• 環保性：會不會污染？\n• 經濟性：成本高不高？\n• 土地需求：需要多大空間？\n• 技術成熟度：安全嗎？'
              }
            ]
          },
          {
            title: '為什麼火力還是主力？',
            blocks: [
              {
                type: 'text',
                content: '**火力發電目前無法被取代的原因**：\n1. 穩定性無敵：24小時發電、不受天氣影響\n2. 技術成熟：不會出意外、維修容易\n3. 建造快速：3-5年就能蓋好\n4. 可以調節：用電高峰多發、低谷少發'
              },
              {
                type: 'text',
                content: '**綠能的致命傷：不穩定**\n• 太陽能：白天有、晚上沒有；晴天多、陰天少\n• 風力：有風時才能發電，無風時完全沒電\n• 水力：豐水期多、枯水期少'
              }
            ]
          },
          {
            title: '儲能系統：綠能的救星？',
            blocks: [
              {
                type: 'text',
                content: '為了解決綠能不穩定的問題，科學家想到一個方法：**儲能系統**。把電先存起來，需要時再拿出來用。就像你把零用錢存在撲滿裡，需要時再拿出來花。'
              },
              {
                type: 'text',
                content: '**儲能的方式**：\n• 電池（最常見）：白天存、晚上用\n• 抽蓄水力：電多時抽水到高處，缺電時讓水往下流發電\n• 壓縮空氣：用電壓縮空氣儲存，缺電時釋放'
              }
            ]
          },
          {
            title: '智慧電網：讓電更聰明',
            blocks: [
              {
                type: 'text',
                content: '**智慧電網**可以雙向溝通、即時調整、整合綠能、減少浪費。就像Google地圖知道哪裡塞車、自動改道一樣。'
              },
              {
                type: 'text',
                content: '🤔 思考問題：如果你是能源部長，你會選擇哪種發電策略？繼續用火力？大力發展綠能？重啟核電？還是混合使用？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w10d3-social',
      name: '社會｜圖表製作',
      icon: '🌏',
      lesson: {
        title: '如何選擇適合的圖表？',
        sections: [
          {
            title: '圓形圖：表示占比',
            blocks: [
              {
                type: 'text',
                content: '**用途**：表示各部分占整體的比例。'
              },
              {
                type: 'text',
                content: '**計算方法**：百分比 × 3.6° = 扇形角度\n例如：火力82.2% × 3.6° ≈ 296°'
              },
              {
                type: 'text',
                content: '**適合的情境**：選舉得票率、發電結構、預算分配'
              }
            ]
          },
          {
            title: '折線圖：表示趨勢',
            blocks: [
              {
                type: 'text',
                content: '**用途**：表示數據隨時間的變化趨勢。'
              },
              {
                type: 'text',
                content: '**判讀重點**：線往上=增加、線往下=減少、線平=持平'
              },
              {
                type: 'text',
                content: '**適合的情境**：投票率變化、氣溫變化、股價走勢'
              }
            ]
          },
          {
            title: '長條圖：比較數量',
            blocks: [
              {
                type: 'text',
                content: '**用途**：比較不同項目的數量大小。'
              },
              {
                type: 'text',
                content: '**適合的情境**：各國綠能占比、各科成績、各縣市人口'
              }
            ]
          },
          {
            title: '比較表：多面向評估',
            blocks: [
              {
                type: 'text',
                content: '**用途**：同時比較多個項目的多個面向。'
              },
              {
                type: 'text',
                content: '**適合的情境**：發電方式優缺點、產品規格比較、學校評比'
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
      id: 'w10d3-math',
      name: '數學｜數據分析綜合',
      icon: '🔢',
      lesson: {
        title: '百分比、成長率、圓形圖角度',
        sections: [
          {
            title: '百分比計算',
            blocks: [
              {
                type: 'text',
                content: '**公式**：部分 ÷ 總數 × 100% = 百分比'
              },
              {
                type: 'text',
                content: '**例子**：台灣2020年總發電量2,790億度，綠能151億度。151 ÷ 2,790 × 100% ≈ 5.4%'
              }
            ]
          },
          {
            title: '成長率計算',
            blocks: [
              {
                type: 'text',
                content: '**公式**：(新-舊) ÷ 舊 × 100% = 成長率'
              },
              {
                type: 'text',
                content: '**例子**：綠能從91億度成長到151億度。(151-91) ÷ 91 × 100% ≈ 66%'
              }
            ]
          },
          {
            title: '圓形圖角度計算',
            blocks: [
              {
                type: 'text',
                content: '**公式**：百分比 × 3.6° = 扇形角度'
              },
              {
                type: 'text',
                content: '**例子**：火力82.2%，角度 = 82.2 × 3.6° ≈ 296°'
              },
              {
                type: 'text',
                content: '**檢查**：所有扇形角度加起來應該是360°'
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
      id: 'w10d3-science',
      name: '科學｜發電機原理',
      icon: '🔬',
      lesson: {
        title: '不同發電方式的能量轉換',
        sections: [
          {
            title: '水力發電',
            blocks: [
              {
                type: 'text',
                content: '**能量轉換**：水的位能 → 動能 → 電能'
              },
              {
                type: 'text',
                content: '**過程**：水從高處落下 → 推動渦輪機轉動 → 帶動發電機 → 產生電流'
              }
            ]
          },
          {
            title: '風力發電',
            blocks: [
              {
                type: 'text',
                content: '**能量轉換**：風的動能 → 電能'
              },
              {
                type: 'text',
                content: '**過程**：風吹動葉片 → 葉片轉動 → 帶動發電機 → 產生電流'
              }
            ]
          },
          {
            title: '火力發電',
            blocks: [
              {
                type: 'text',
                content: '**能量轉換**：化學能 → 熱能 → 動能 → 電能'
              },
              {
                type: 'text',
                content: '**過程**：燃燒煤炭 → 產生熱 → 水變蒸汽 → 蒸汽推動渦輪機 → 帶動發電機'
              }
            ]
          },
          {
            title: '太陽能發電',
            blocks: [
              {
                type: 'text',
                content: '**能量轉換**：光能 → 電能'
              },
              {
                type: 'text',
                content: '**特別之處**：不需要轉動！利用光電效應，陽光直接轉換成電能。'
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
      id: 'w10d3-chinese',
      name: '語文｜論證結構',
      icon: '✍️',
      lesson: {
        title: '主張、理由、證據',
        sections: [
          {
            title: '論證的三要素',
            blocks: [
              {
                type: 'text',
                content: '**主張**：你的看法或立場。例如：「台灣應該大力發展綠能。」'
              },
              {
                type: 'text',
                content: '**理由**：為什麼這樣主張？例如：「因為可以減少空氣污染、對抗全球暖化。」'
              },
              {
                type: 'text',
                content: '**證據**：用事實或數據支持理由。例如：「根據能源局數據，火力發電占82.2%，是台灣最大的空氣污染來源。」'
              }
            ]
          },
          {
            title: '好的論證範例',
            blocks: [
              {
                type: 'text',
                content: '**主張**：台灣應該加速發展太陽能。'
              },
              {
                type: 'text',
                content: '**理由1**：台灣日照充足，適合發展太陽能。\n**證據1**：台灣年平均日照時數約2,000小時，與日本、德國相當。'
              },
              {
                type: 'text',
                content: '**理由2**：太陽能技術成熟、成本持續下降。\n**證據2**：過去10年，太陽能板成本下降了80%以上。'
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
      id: 'w10d3-review',
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
                content: '🌏 社會：圖表選擇（圓形圖=占比、折線圖=趨勢、長條圖=比較、比較表=多面向）'
              },
              {
                type: 'text',
                content: '🔢 數學：百分比、成長率、圓形圖角度計算（百分比×3.6°）'
              },
              {
                type: 'text',
                content: '🔬 科學：各種發電方式的能量轉換過程，太陽能不需要轉動！'
              },
              {
                type: 'text',
                content: '✍️ 語文：論證三要素（主張、理由、證據），用數據支持論點'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：明天是整合日！我們要做Week10的綜合練習，並且開始寫探究報告。你準備好了嗎？'
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
