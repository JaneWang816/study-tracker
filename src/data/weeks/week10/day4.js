// src/data/weeks/week10/day4.js
// W10 Day4：得出結論

// ── 綜合題庫（混合所有主題）────────────────────
const comprehensivePool = [
  // 探究方法
  {
    question: '探究報告的第一步應該是什麼？',
    options: ['馬上寫結論', '先發現問題', '直接提建議', '畫圖表'],
    answer: 1
  },
  {
    question: '為什麼要記錄資料來源？',
    options: [
      '讓報告看起來比較厚',
      '方便查證和確認可信度',
      '老師規定的',
      '隨便寫就好'
    ],
    answer: 1
  },
  // 數學計算
  {
    question: '某項占30%，在圓形圖上應該是幾度？',
    options: ['30度', '60度', '90度', '108度'],
    answer: 3
  },
  {
    question: '數字從50成長到75，成長率是多少？',
    options: ['25%', '33%', '50%', '75%'],
    answer: 2
  },
  {
    question: '五個數字：10, 20, 20, 30, 40，眾數是多少？',
    options: ['10', '20', '30', '40'],
    answer: 1
  },
  {
    question: '400的15%是多少？',
    options: ['40', '50', '60', '70'],
    answer: 2
  },
  // 能源知識
  {
    question: '台灣2020年發電占比最高的是？',
    options: ['太陽能', '風力', '火力', '核能'],
    answer: 2
  },
  {
    question: '再生能源的特點是什麼？',
    options: [
      '會用完',
      '用了還會再長出來',
      '只有台灣有',
      '很貴'
    ],
    answer: 1
  },
  {
    question: '綠能的致命傷是什麼？',
    options: ['太貴', '不穩定', '太重', '太危險'],
    answer: 1
  },
  {
    question: '儲能系統的目的是什麼？',
    options: [
      '儲存水',
      '解決綠能不穩定的問題',
      '儲存垃圾',
      '發電'
    ],
    answer: 1
  },
  // 科學原理
  {
    question: '奧斯特發現了什麼？',
    options: [
      '磁場產生電流',
      '電流產生磁場',
      '光產生熱',
      '熱產生光'
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
    question: '太陽能發電的特別之處是什麼？',
    options: [
      '需要很大的渦輪機',
      '不需要轉動，直接轉換',
      '需要燃燒',
      '需要核能'
    ],
    answer: 1
  },
  // 圖表與分析
  {
    question: '用來表示「占比」的圖表是？',
    options: ['折線圖', '圓形圖', '散布圖', '心智圖'],
    answer: 1
  },
  {
    question: '用來表示「趨勢變化」的圖表是？',
    options: ['圓形圖', '折線圖', '表格', '照片'],
    answer: 1
  },
  // 論證與寫作
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

function generateComprehensiveQuestion() {
  const q = comprehensivePool[Math.floor(Math.random() * comprehensivePool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── Day 資料 ──────────────────────────────────────
const day4 = {
  id: 'day4',
  name: '第四天',
  icon: '✏️',
  color: '#f59e0b',
  title: '得出結論',
  units: [
    {
      id: 'w10d4-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '台灣綠能發展的困難與希望',
        sections: [
          {
            title: '台灣綠能發展的四大困難',
            blocks: [
              {
                type: 'text',
                content: '**太陽能的限制**：\n• 日照時間有限（每天約4-5小時）\n• 土地不夠（要達到50%需要400平方公里）\n• 跟農業搶地\n• 颱風容易損壞'
              },
              {
                type: 'text',
                content: '**風力的挑戰**：\n• 風況不穩定（冬季強、夏季弱）\n• 離岸風電成本高（每度5-6元 vs 火力2-3元）\n• 漁民抗爭（影響漁場）\n• 生態影響（鳥類撞擊）'
              },
              {
                type: 'text',
                content: '**水力到頂**：\n• 適合建水庫的地點都用完了\n• 水庫老舊、淤積嚴重\n• 社會反對新建水庫（環境破壞）'
              },
              {
                type: 'text',
                content: '**生質能有限**：\n• 原料有限（垃圾、農業廢棄物）\n• 垃圾減量政策限制成長'
              }
            ]
          },
          {
            title: '政府的能源轉型計劃',
            blocks: [
              {
                type: 'text',
                content: '**2025「非核家園」532計畫**：\n• 天然氣：50%\n• 燃煤：30%\n• 綠能：20%（從5.4%→20%，挑戰很大！）'
              },
              {
                type: 'text',
                content: '**2050「淨零排放」目標**：\n• 綠能：60-70%\n• 氫能：9-12%\n• 碳捕捉火力：20-27%'
              }
            ]
          },
          {
            title: '文賢國中的四大建議',
            blocks: [
              {
                type: 'text',
                content: '**建議1：短期策略要務實**\n• 2025目標20%太激進，建議調整為15%\n• 增加天然氣發電（比煤炭乾淨）\n• 加強節能教育'
              },
              {
                type: 'text',
                content: '**建議2：加速儲能建設**\n• 政府補助家庭裝電池\n• 建設大型儲能電廠\n• 研發新型電池技術\n• 推廣電動車（車子也是大電池）'
              },
              {
                type: 'text',
                content: '**建議3：建置智慧電網**\n• 整合各種綠能\n• 即時調配電力\n• 減少浪費\n• 提升效率20-30%'
              },
              {
                type: 'text',
                content: '**建議4：發展新的穩定綠能**\n• 地熱能：台灣位於火環帶，地熱豐富、24小時穩定（宜蘭清水、大屯火山、台東知本）\n• 潮汐能：四面環海，潮汐可預測\n• 海洋溫差發電：還在研發階段'
              }
            ]
          },
          {
            title: '結論',
            blocks: [
              {
                type: 'text',
                content: '綠能發展確實面臨很多挑戰，但不是不可能。需要：\n• 務實的目標\n• 多管齊下的策略\n• 技術創新\n• 全民參與'
              },
              {
                type: 'text',
                content: '🤔 思考問題：你覺得2050達到60-70%綠能的目標實際嗎？如果電費要漲價才能發展綠能，你願意接受嗎？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w10d4-math',
      name: '數學｜Week10 綜合練習',
      icon: '🔢',
      lesson: {
        title: '本週數學重點複習',
        sections: [
          {
            title: '平均數、中位數、眾數',
            blocks: [
              {
                type: 'text',
                content: '**平均數** = 總和 ÷ 個數\n用來代表一組數據的「中間值」'
              },
              {
                type: 'text',
                content: '**中位數** = 排列後中間的數\n有極端值時比平均數更合理'
              },
              {
                type: 'text',
                content: '**眾數** = 出現次數最多的數\n用來找出「最常見」的情況'
              }
            ]
          },
          {
            title: '百分比與成長率',
            blocks: [
              {
                type: 'text',
                content: '**百分比** = 部分 ÷ 總數 × 100%'
              },
              {
                type: 'text',
                content: '**成長率** = (新-舊) ÷ 舊 × 100%'
              }
            ]
          },
          {
            title: '圓形圖角度',
            blocks: [
              {
                type: 'text',
                content: '**扇形角度** = 百分比 × 3.6°'
              },
              {
                type: 'text',
                content: '**檢查**：所有扇形加起來 = 360°'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 8,
        generator: generateComprehensiveQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w10d4-science',
      name: '科學｜能源轉型的科學',
      icon: '🔬',
      lesson: {
        title: '從電磁學到能源未來',
        sections: [
          {
            title: '本週科學回顧',
            blocks: [
              {
                type: 'text',
                content: '**Day 1**：奧斯特實驗（電流產生磁場）\n→ 電磁鐵、電磁爐、喇叭的原理'
              },
              {
                type: 'text',
                content: '**Day 2**：法拉第定律（磁場變化產生電流）\n→ 發電機的原理'
              },
              {
                type: 'text',
                content: '**Day 3**：各種發電方式的能量轉換\n→ 水力、風力、火力、太陽能'
              }
            ]
          },
          {
            title: '能源轉型的關鍵技術',
            blocks: [
              {
                type: 'text',
                content: '**儲能技術**：解決綠能不穩定\n• 鋰電池\n• 抽蓄水力\n• 氫能儲存'
              },
              {
                type: 'text',
                content: '**智慧電網**：讓電力系統更聰明\n• AI 預測用電\n• 自動調配\n• 減少浪費'
              },
              {
                type: 'text',
                content: '**新能源技術**：\n• 地熱發電（台灣火環帶優勢）\n• 潮汐能（海島優勢）\n• 氫能（未來燃料）'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateComprehensiveQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w10d4-chinese',
      name: '語文｜探究報告寫作',
      icon: '✍️',
      lesson: {
        title: '如何寫一份好的探究報告？',
        sections: [
          {
            title: '探究報告的結構',
            blocks: [
              {
                type: 'text',
                content: '**第一段：動機與問題**\n• 為什麼要研究這個問題？\n• 問題是什麼？'
              },
              {
                type: 'text',
                content: '**第二段：蒐集資料**\n• 查了哪些資料？\n• 資料來源是什麼？'
              },
              {
                type: 'text',
                content: '**第三段：分析資料**\n• 製作了什麼圖表？\n• 發現了什麼趨勢？'
              },
              {
                type: 'text',
                content: '**第四段：結論**\n• 根據數據得出什麼結論？\n• 有什麼限制？'
              },
              {
                type: 'text',
                content: '**第五段：建議**\n• 提出具體可行的建議\n• 用數據支持'
              },
              {
                type: 'text',
                content: '**第六段：反思**\n• 這次研究學到什麼？\n• 如果重來會怎麼改進？'
              }
            ]
          },
          {
            title: '寫作技巧',
            blocks: [
              {
                type: 'text',
                content: '**用數據說話**：「根據能源局數據，火力占82.2%」比「火力很多」有說服力。'
              },
              {
                type: 'text',
                content: '**保持客觀**：承認不同觀點，不要太偏頗。'
              },
              {
                type: 'text',
                content: '**圖表輔助**：一張圖表勝過千言萬語。'
              },
              {
                type: 'text',
                content: '**註明來源**：每個數據都要寫明從哪裡來的。'
              }
            ]
          },
          {
            title: '今天的任務',
            blocks: [
              {
                type: 'text',
                content: '今天請你開始構思自己的探究主題。可以從這些方向選擇：\n• 手機使用時間與睡眠品質\n• 家裡的用電量分析\n• 垃圾分類成效\n• 上學路線的碳排放\n• 零用錢使用分析'
              },
              {
                type: 'text',
                content: '明天我們會完成報告並做總結！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateComprehensiveQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w10d4-review',
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
                content: '📖 閱讀：台灣綠能發展的四大困難（太陽能、風力、水力、生質能），以及政府的2025、2050目標'
              },
              {
                type: 'text',
                content: '🔢 數學：綜合複習（平均數、中位數、眾數、百分比、成長率、圓形圖）'
              },
              {
                type: 'text',
                content: '🔬 科學：能源轉型的三大關鍵技術（儲能、智慧電網、新能源）'
              },
              {
                type: 'text',
                content: '✍️ 語文：探究報告六段式結構（動機→資料→分析→結論→建議→反思）'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：明天是Week10的最後一天！我們要完成反思、欣賞藝術作品，並總結這一週的學習。準備好了嗎？'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day4
