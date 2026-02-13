// src/data/weeks/week10/day5.js
// W10 Day5：完成反思

// ── 複習題庫（本週重點）────────────────────
const reviewPool = [
  {
    question: '探究五步驟的順序是什麼？',
    options: [
      '蒐集→發現→分析→結論→建議',
      '發現→蒐集→分析→結論→建議',
      '分析→蒐集→發現→建議→結論',
      '建議→結論→分析→蒐集→發現'
    ],
    answer: 1
  },
  {
    question: '台灣2020年發電結構中占比最高的是？',
    options: ['太陽能', '風力', '火力', '核能'],
    answer: 2
  },
  {
    question: '再生能源包括哪些？',
    options: [
      '煤炭、石油',
      '太陽能、風力、水力',
      '核能',
      '天然氣'
    ],
    answer: 1
  },
  {
    question: '綠能最大的問題是什麼？',
    options: ['太貴', '不穩定', '太危險', '沒有用'],
    answer: 1
  },
  {
    question: '儲能系統的功能是什麼？',
    options: [
      '儲存水',
      '解決綠能不穩定的問題',
      '發電',
      '儲存垃圾'
    ],
    answer: 1
  },
  {
    question: '奧斯特發現了什麼？',
    options: [
      '磁場產生電流',
      '電流產生磁場',
      '光產生電',
      '熱產生磁'
    ],
    answer: 1
  },
  {
    question: '法拉第發現了什麼？',
    options: [
      '電流產生磁場',
      '磁場變化產生電流',
      '水力發電',
      '太陽能'
    ],
    answer: 1
  },
  {
    question: '平均數的計算公式是？',
    options: [
      '總和 × 個數',
      '總和 ÷ 個數',
      '最大值 - 最小值',
      '中間的數'
    ],
    answer: 1
  },
  {
    question: '中位數適合用在什麼情況？',
    options: [
      '數字都差不多',
      '有極端值的時候',
      '只有一個數字',
      '隨時都可以'
    ],
    answer: 1
  },
  {
    question: '圓形圖適合表示什麼？',
    options: ['趨勢變化', '占比', '溫度', '時間'],
    answer: 1
  },
  {
    question: '折線圖適合表示什麼？',
    options: ['占比', '趨勢變化', '分類', '沒規則的數字'],
    answer: 1
  },
  {
    question: '論證的三要素是？',
    options: [
      '開頭、中間、結尾',
      '主張、理由、證據',
      '標題、內容、圖片',
      '問題、答案、例子'
    ],
    answer: 1
  }
]

function generateReviewQuestion() {
  const q = reviewPool[Math.floor(Math.random() * reviewPool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── Day 資料 ──────────────────────────────────────
const day5 = {
  id: 'day5',
  name: '第五天',
  icon: '🎨',
  color: '#ec4899',
  title: '完成反思',
  units: [
    {
      id: 'w10d5-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '結論與發現',
        sections: [
          {
            title: '五天的探究之旅',
            blocks: [
              {
                type: 'text',
                content: '這週我們跟著台南文賢國中的同學，一起走過了探究的五個步驟：'
              },
              {
                type: 'text',
                content: '**Day 1**：發現問題 - 停電讓我們發現能源議題的重要性\n**Day 2**：蒐集資料 - 認識綠能的定義、台灣的發電結構\n**Day 3**：分析資料 - 比較各種發電方式的優缺點\n**Day 4**：得出結論 - 台灣綠能發展的困難與希望\n**Day 5**：提出建議與反思（今天）'
              }
            ]
          },
          {
            title: '文賢國中的五大結論',
            blocks: [
              {
                type: 'text',
                content: '**結論1**：綠能的定義有爭議（狹義 vs 廣義）。核能該不該算綠能？各國看法不同。'
              },
              {
                type: 'text',
                content: '**結論2**：台灣電力結構10年有變化，但火力還是主力。核能減少了，但火力補上來，綠能成長緩慢（3.6%→5.4%）。'
              },
              {
                type: 'text',
                content: '**結論3**：沒有完美的能源。火力穩定但污染、核能乾淨但有風險、綠能環保但不穩定。'
              },
              {
                type: 'text',
                content: '**結論4**：台灣綠能發展困難重重（土地、成本、技術），但不是不可能。需要儲能、智慧電網、新技術。'
              },
              {
                type: 'text',
                content: '**結論5**：未來方向清楚：短期增加天然氣、中期發展儲能、長期開發地熱等穩定綠能。'
              }
            ]
          },
          {
            title: '探究方法的反思',
            blocks: [
              {
                type: 'text',
                content: '文賢國中的同學做對了什麼？'
              },
              {
                type: 'text',
                content: '**1. 選了有意義的主題**：能源問題關係每個人的生活，也關係台灣的未來。'
              },
              {
                type: 'text',
                content: '**2. 找到可信的資料來源**：經濟部能源局、台電公司、學術研究，都是權威資料。'
              },
              {
                type: 'text',
                content: '**3. 用數據說話**：不是憑感覺，而是用實際的百分比、成長率、發電量來分析。'
              },
              {
                type: 'text',
                content: '**4. 承認限制、保持客觀**：他們承認自己的研究有限制（時間短、資料有限），也呈現不同觀點（支持核能 vs 反對核能）。'
              },
              {
                type: 'text',
                content: '**5. 提出具體可行的建議**：不只說「要發展綠能」，而是提出「怎麼做」（儲能、智慧電網、地熱）。'
              }
            ]
          },
          {
            title: '給自己的探究檢核表',
            blocks: [
              {
                type: 'text',
                content: '**內容檢核**：\n☐ 動機清楚（為什麼要研究？）\n☐ 問題明確（研究什麼問題？）\n☐ 資料來源可信（政府、學術、專業媒體）\n☐ 有註明出處（網站、日期、作者）\n☐ 有圖表呈現（圓形圖、折線圖、比較表）'
              },
              {
                type: 'text',
                content: '☐ 有數學分析（平均數、百分比、成長率）\n☐ 結論有證據支持（用數據說話）\n☐ 建議具體可行（不只說「要改進」）\n☐ 承認研究限制（時間、資料的限制）\n☐ 有反思（學到什麼？可以改進什麼？）'
              },
              {
                type: 'text',
                content: '**格式檢核**：\n☐ 有標題頁（主題、姓名、日期）\n☐ 字數800-1000字\n☐ 分段清楚（六個段落）\n☐ 錯字少於5個\n☐ 標點符號正確'
              }
            ]
          },
          {
            title: '給未來自己的信',
            blocks: [
              {
                type: 'text',
                content: '文賢國中的同學在報告最後寫了一段話：'
              },
              {
                type: 'quote',
                content: '我們雖然只是國中生，但我們相信，透過探究，我們也能為台灣的未來提出一些想法。也許我們的建議不夠專業，但這是我們真心的關心。',
                author: '台南市文賢國中 文薈探究隊'
              },
              {
                type: 'text',
                content: '現在，請你也寫一段話給未來的自己：\n\n親愛的未來的我，\n\n這週我學會了_____________，我發現_____________，我希望未來的我能_____________。\n\n現在的我'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w10d5-art',
      name: '藝術欣賞｜手繪統計圖',
      icon: '🎨',
      lesson: {
        title: '用手繪圖表說故事',
        sections: [
          {
            title: '數據視覺化的藝術',
            blocks: [
              {
                type: 'text',
                content: '這週我們學了很多圖表：圓形圖、折線圖、長條圖、比較表。今天，我們要用「手繪」的方式，把數據變成藝術。'
              },
              {
                type: 'text',
                content: '**任務**：用手繪一張台灣2020年發電結構的圓形圖。\n\n資料：\n• 火力：82.2%（296度）\n• 核能：11.2%（40度）\n• 綠能：5.4%（19度）\n• 其他：1.2%（5度）'
              },
              {
                type: 'text',
                content: '**步驟**：\n1. 畫一個大圓\n2. 用量角器量出角度\n3. 畫出扇形\n4. 塗上不同顏色\n5. 標註百分比和名稱\n6. 寫上標題和資料來源'
              }
            ]
          },
          {
            title: '好的資訊圖表要素',
            blocks: [
              {
                type: 'text',
                content: '**清楚**：一眼就看懂重點\n**美觀**：配色和諧、字體整齊\n**誠實**：不誇大、不扭曲數據\n**完整**：有標題、單位、來源'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateReviewQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w10d5-video',
      name: '影片欣賞｜台灣的發電廠',
      icon: '🎬',
      lesson: {
        title: '看見台灣的能源',
        sections: [
          {
            title: '紀錄片：台灣的電從哪裡來？',
            blocks: [
              {
                type: 'video',
                videoId: 'gKX3sJB8kXE',
                title: '台灣發電廠紀錄片'
              },
              {
                type: 'text',
                content: '這部影片帶我們看台灣各地的發電廠：火力發電廠的大煙囪、離岸風機的巨大葉片、太陽能板的閃閃發光、水力發電的水壩。'
              },
              {
                type: 'text',
                content: '看完影片，想想：如果你是能源部長，你會怎麼規劃台灣的能源未來？'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateReviewQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w10d5-review',
      name: 'Week10 總複習',
      icon: '📚',
      lesson: {
        title: '本週學習總結',
        sections: [
          {
            title: '本週關鍵詞總複習',
            blocks: [
              {
                type: 'text',
                content: '**探究方法**：探究五步驟、三源交叉法、資料來源、客觀性'
              },
              {
                type: 'text',
                content: '**能源知識**：綠能、再生能源、非再生能源、火力、核能、太陽能、風力、水力、生質能'
              },
              {
                type: 'text',
                content: '**環境議題**：碳排放、空氣污染、福島核災、能源轉型、淨零排放'
              },
              {
                type: 'text',
                content: '**數學概念**：平均數、中位數、眾數、百分比、成長率、圓形圖角度'
              },
              {
                type: 'text',
                content: '**圖表類型**：圓形圖（占比）、折線圖（趨勢）、長條圖（比較）、比較表（多面向）'
              },
              {
                type: 'text',
                content: '**科學原理**：電磁感應、發電機、能量轉換、奧斯特、法拉第'
              },
              {
                type: 'text',
                content: '**未來技術**：儲能系統、智慧電網、地熱能、潮汐能、氫能'
              },
              {
                type: 'text',
                content: '**寫作技巧**：論證三要素（主張、理由、證據）、探究報告六段式、數據支持、資料來源、批判思考'
              }
            ]
          },
          {
            title: '持續探究的精神',
            blocks: [
              {
                type: 'text',
                content: '探究不只是這週的作業，而是一種思考方式：'
              },
              {
                type: 'text',
                content: '• **保持好奇心**：對身邊的事物提出問題\n• **勇於提問**：沒有愚蠢的問題\n• **尋找證據**：不只憑感覺，要查資料\n• **獨立思考**：不盲目相信，要自己判斷\n• **持續學習**：今天的答案，明天可能改變'
              },
              {
                type: 'quote',
                content: '能源問題沒有標準答案，但透過探究，我們可以找到更好的解決方案。',
                author: 'Week10 的啟示'
              }
            ]
          },
          {
            title: 'Week10 之後',
            blocks: [
              {
                type: 'text',
                content: '如果你對能源議題還有興趣，可以繼續探索：\n• 參觀台電的電廠或展覽館\n• 閱讀更多能源相關的書籍\n• 追蹤台灣能源政策的新聞\n• 在家裡做節能實驗\n• 記錄家裡的用電量'
              },
              {
                type: 'text',
                content: '記住：改變世界，從理解世界開始。你已經踏出第一步了！👏'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateReviewQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    }
  ]
}

export default day5
