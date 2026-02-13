// src/data/weeks/week08/day4.js
// W8 Day4：動筆日

// ── 數學綜合題庫（W8 所有知識點）────────────────
function generateMathQuestion() {
  const type = Math.floor(Math.random() * 5)

  if (type === 0) {
    // 小數與百分比轉換
    const pairs = [
      { dec: 0.25, pct: 25 },
      { dec: 0.5, pct: 50 },
      { dec: 0.75, pct: 75 },
      { dec: 0.2, pct: 20 },
      { dec: 0.4, pct: 40 },
      { dec: 0.6, pct: 60 }
    ]
    const p = pairs[Math.floor(Math.random() * pairs.length)]
    const isToPercent = Math.random() > 0.5
    
    if (isToPercent) {
      const wrong1 = p.pct + 10
      const wrong2 = p.dec * 10
      const wrong3 = p.pct - 10 > 0 ? p.pct - 10 : p.pct + 20
      const options = [String(p.pct), String(wrong1), String(wrong2), String(wrong3)]
      const correctText = String(p.pct)
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[options[i], options[j]] = [options[j], options[i]]
      }
      return {
        question: `小數 ${p.dec} 換算成百分比是多少？`,
        options,
        answer: options.indexOf(correctText)
      }
    } else {
      const wrong1 = p.pct / 10
      const wrong2 = p.pct
      const wrong3 = p.dec * 10
      const options = [String(p.dec), String(wrong1), String(wrong2), String(wrong3)]
      const correctText = String(p.dec)
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[options[i], options[j]] = [options[j], options[i]]
      }
      return {
        question: `${p.pct}% 換算成小數是多少？`,
        options,
        answer: options.indexOf(correctText)
      }
    }
  } else if (type === 1) {
    // 成長率計算
    const old = (Math.floor(Math.random() * 4) + 2) * 50
    const increase = [10, 20, 25, 50][Math.floor(Math.random() * 4)]
    const newVal = old + increase
    const rate = Math.round((increase / old) * 100)
    const wrong1 = increase
    const wrong2 = rate + 10
    const wrong3 = Math.round((newVal / old) * 100)
    const options = [String(rate), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(rate)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `一家店去年營業額 ${old} 萬元，今年 ${newVal} 萬元，成長率約是多少%？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 2) {
    // 已知成長率求新值
    const old = (Math.floor(Math.random() * 4) + 2) * 100
    const rate = [10, 20, 25, 50][Math.floor(Math.random() * 4)]
    const newVal = old * (1 + rate / 100)
    const wrong1 = old + rate
    const wrong2 = old * (rate / 100)
    const wrong3 = old - (old * rate / 100)
    const options = [String(newVal), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(newVal)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `一間公司去年營收 ${old} 億元，今年成長 ${rate}%，今年營收是多少億元？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 3) {
    // 市占率計算
    const total = (Math.floor(Math.random() * 4) + 2) * 100
    const part = [40, 50, 60, 75, 80, 100][Math.floor(Math.random() * 6)]
    const share = Math.round((part / total) * 100)
    const wrong1 = Math.round((total / part) * 100)
    const wrong2 = total - part
    const wrong3 = share + 10
    const options = [String(share), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(share)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `全台灣某產業總營收 ${total} 億元，A公司營收 ${part} 億元，A公司市占率是多少%？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else {
    // 已知市占率求營收
    const total = (Math.floor(Math.random() * 4) + 2) * 100
    const share = [20, 25, 30, 40, 50][Math.floor(Math.random() * 5)]
    const part = total * (share / 100)
    const wrong1 = total - share
    const wrong2 = total + share
    const wrong3 = share
    const options = [String(part), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(part)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `全台灣某產業總營收 ${total} 億元，B公司市占率 ${share}%，B公司營收是多少億元？`,
      options,
      answer: options.indexOf(correctText)
    }
  }
}

// ── Day 資料 ──────────────────────────────────────
const day4 = {
  id: 'day4',
  name: '第四天',
  icon: '✏️',
  color: '#0891b2',
  title: '動筆日',
  units: [
    {
      id: 'w8d4-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '熄燈前的告白',
        sections: [
          {
            title: '今日文本段落',
            blocks: [
              {
                type: 'text',
                content: '新民生戲院活了14年。2026年1月5日，熄燈公告貼出來了。'
              },
              {
                type: 'quote',
                content: '有些話，真的想了很久。也知道，總有一天一定要說。只是沒想到，這一天來的時候，心裡還是這麼滿。',
                author: '新民生戲院結束營業公告'
              },
              {
                type: 'text',
                content: '老闆在公告中說：這不是一個輕鬆的決定。從1990年代的熱鬧喧騰，到2012年的熱血回歸，再到2026年的圓滿落幕。新民生戲院陪著台北人走過了整整兩個世代。\n\n它見證了我們從底片走到數位，從2D走到3D，從史蒂芬史匹柏走到漫威宇宙。它看著我們從穿制服的學生，變成了穿西裝的大人，最後變成了穿著夾腳拖的父母。'
              },
              {
                type: 'quote',
                content: '謝謝你，曾在某個夜晚選擇新民生戲院。謝謝你，把這裡當成生活的一部分。新民生戲院，下台一鞠躬。後會有期，江湖再見。',
                author: '新民生戲院結束營業公告'
              },
              {
                type: 'text',
                content: '今天，你也要寫一篇告別。不一定是戲院，可以是任何曾經美好、但現在消失或改變的事物。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w8d4-math',
      name: '數學｜W8綜合練習',
      icon: '📐',
      lesson: {
        title: '百分比與經濟變化',
        sections: [
          {
            title: '本週數學重點回顧',
            blocks: [
              {
                type: 'text',
                content: '這週學了百分比的三個核心應用：\n\n① 基本轉換：\n• 小數 ↔ 百分比（×100 或 ÷100）\n• 求某數的百分之幾\n\n② 成長率：\n• 成長率 = 增加量 ÷ 原本量 × 100%\n• 已知成長率求新值：新值 = 原值 × (1 + 成長率)\n\n③ 市占率：\n• 市占率 = 公司營收 ÷ 市場總額 × 100%\n• 比較不同公司的市場地位'
              },
              {
                type: 'text',
                content: '為什麼要學百分比？\n\n因為它讓我們能「比較」——比較不同時期的變化、比較不同規模的公司、比較不同產業的成長速度。\n\n在經濟新聞、商業分析、甚至日常生活中，百分比無處不在。理解它，就能看懂數字背後的真實故事。'
              }
            ]
          },
          {
            title: '綜合情境題',
            blocks: [
              {
                type: 'text',
                content: '🎬 戲院產業變化：\n\n1998年，全台灣戲院總票房收入50億元，連鎖影城占10億元（市占率20%）。\n\n2010年，全台灣戲院總票房收入80億元（成長率60%），連鎖影城占56億元（市占率70%）。\n\n觀察：\n• 整體產業成長了60%（從50億到80億）\n• 但連鎖影城成長了460%（從10億到56億）\n• 獨立戲院從40億降到24億，減少了40%\n\n這就是產業轉型的數字面貌。現在做綜合練習，確認你真的理解了百分比。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMathQuestion,
        checkAnswer: (q, a) => parseFloat(a) === parseFloat(q.options[q.answer])
      }
    },
    {
      id: 'w8d4-science',
      name: '科學｜能源的未來',
      icon: '🔬',
      lesson: {
        title: '從化石燃料到再生能源（預覽W9）',
        sections: [
          {
            title: '本週科學重點回顧',
            blocks: [
              {
                type: 'text',
                content: '這週學了兩種能源轉換：\n\n🚗 交通工具：\n• 汽油車：化學能 → 熱能 → 動能（效率20–30%）\n• 電動車：電能 → 動能（效率80–90%）\n• 大眾運輸：平均每人能耗更低\n\n⚡ 電力來源：\n• 火力發電：化學能 → 熱能 → 動能 → 電能\n• 水力發電：位能 → 動能 → 電能\n• 再生能源：太陽能（光→電）、風能（動→電）'
              }
            ]
          },
          {
            title: '電是怎麼送到你家的？',
            blocks: [
              {
                type: 'text',
                content: '發電廠產生的電力，要經過很長的路徑才能到你家：\n\n① 發電廠：產生電力\n② 升壓站：把電壓升高（高壓電傳輸損耗少）\n③ 高壓輸電線：長距離傳輸\n④ 降壓站：把電壓降低到安全範圍\n⑤ 配電線路：送到社區、住家\n⑥ 你家的插座：110V 或 220V\n\n這就是「電網」。下週（W9）我們會學電路的原理——電流怎麼在電線裡流動、串聯和並聯有什麼差別。'
              },
              {
                type: 'text',
                content: '🎬 新民生戲院每天要用多少電？\n\n一個影廳的放映機、空調、音響、照明，一天大約用100–150度電。如果全天營業，一個月就要用3,000–4,500度。\n\n這些電從哪裡來？大部分來自火力發電廠，燃燒天然氣或煤炭。如果改用太陽能，需要多大的太陽能板面積？這就是能源轉型的挑戰。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w8d4-writing',
      name: '語文｜抒情文寫作',
      icon: '✍️',
      lesson: {
        title: '和___告別',
        sections: [
          {
            title: '抒情文是什麼？',
            blocks: [
              {
                type: 'text',
                content: '抒情文（Lyric Essay）的核心是「表達情感」。它不像記敘文那樣說故事，而是用文字傳遞一種感受、一種心情。\n\n好的抒情文有三個要素：\n① 真實的情感（不是假裝感動）\n② 具體的細節（不是空泛的形容詞）\n③ 適度的留白（讓讀者自己感受）'
              },
              {
                type: 'text',
                content: '新民生戲院的告別文就是一篇抒情散文。它沒有長篇大論，只有幾句話，但每一句都很有重量：\n\n「有些話，真的想了很久。也知道，總有一天一定要說。只是沒想到，這一天來的時候，心裡還是這麼滿。」\n\n這句話抓住了「告別」的核心情感：明知道會來，但真的來了，還是無法準備好。'
              }
            ]
          },
          {
            title: '今天的寫作任務',
            blocks: [
              {
                type: 'text',
                content: '題目：「和___告別」（留白讓你填入）\n\n可以寫什麼？\n• 一個地方（搬家後的老家、拆掉的公園、關門的店）\n• 一個人（搬走的朋友、過世的親人、離開的老師）\n• 一件事（小學畢業、某個興趣、某種習慣）\n• 一個階段（童年、某段時光）\n\n不一定要寫很悲傷的事，「告別」也可以是平靜的、釋懷的、甚至是帶著微笑的。'
              },
              {
                type: 'text',
                content: '📝 四段結構建議：\n\n第一段｜那個美好的事物是什麼？你和它的第一次相遇\n• 從一個具體的畫面開始\n• 例：「那間書店在巷子的轉角，木頭招牌上寫著……」\n\n第二段｜它如何成為你生活的一部分？\n• 寫具體的細節：聲音、氣味、畫面\n• 例：「每次經過，老闆都會問我……」\n\n第三段｜它改變了/消失了，你的感受\n• 不要只寫「很難過」，要寫「什麼樣的難過」\n• 例：「再經過那條巷子時，轉角變成了便利商店。招牌很亮，但我卻覺得少了什麼。」\n\n第四段｜告別之後，你想留下什麼？\n• 不只是懷念，而是傳承、是成長\n• 例：「我把那本書一直留著。不是因為書裡的故事，而是因為……」'
              },
              {
                type: 'text',
                content: '✍️ 寫作提示：\n\n• 字數建議：300–500字\n• 可以參考新民生戲院的告別文風格：簡潔、真誠、有畫面感\n• 不要用太多「很……的」形容詞，而要用「看得見的細節」\n• 告別不是結束，而是「帶著它繼續前進」\n\n範例開頭：\n「那座溜滑梯是藍色的。我記得很清楚，因為小時候我總是堅持要從藍色那一邊溜下來……」'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w8d4-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '動筆日總結',
            blocks: [
              {
                type: 'text',
                content: '📐 數學：完成了本週百分比的綜合練習——轉換、成長率、市占率，三個核心應用全部複習了一遍。\n\n🔬 科學：認識了電網系統，電力從發電廠到你家的旅程。下週會學電路的串聯和並聯。\n\n✍️ 語文：完成了抒情文「和___告別」。用四段結構，寫下一個曾經美好的事物，以及你與它的告別。'
              },
              {
                type: 'text',
                content: '📖 文本：讀完了新民生戲院的告別公告。「下台一鞠躬，後會有期，江湖再見。」這是告別，也是祝福。'
              },
              {
                type: 'text',
                content: '⏭️ 明天（Day 5）：我們要去看一場電影！不是在家裡看Netflix，而是走進真實的電影院。感受那些在家裡無法感受到的東西——等待開場的期待、陌生人一起笑的聲音、大銀幕的震撼。\n\n如果你願意，也可以去新民生戲院曾經在的地方走走，看看那個圓環、那條巷子。有些地方會消失，但記憶會一直在。'
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
