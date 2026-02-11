// src/data/weeks/week06/day4.js
// W6 Day4：動筆日
// 貫穿文本：〈米的臺灣史〉第四段（台灣人煮飯的方法→好米新形象）

// ===== 數學綜合：圓面積 + 扇形面積 + 相似形 =====
const generateMathQuestion = () => {
  const type = Math.floor(Math.random() * 6)

  if (type === 0) {
    // 圓面積基礎
    const r = [5, 8, 10, 12, 15][Math.floor(Math.random() * 5)]
    const area = (3.14 * r * r).toFixed(2)
    const wrong1 = (2 * 3.14 * r).toFixed(2)
    const wrong2 = (3.14 * r).toFixed(2)
    const wrong3 = (3.14 * r * r * 2).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `池上農場有一塊圓形有機稻田，半徑 ${r} 公尺，面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `S = πr² = 3.14 × ${r}² = 3.14 × ${r * r} = ${area} 平方公尺`
    }
  }

  if (type === 1) {
    // 面積縮放
    const r1 = [5, 6, 8][Math.floor(Math.random() * 3)]
    const r2 = r1 * 3
    const a1 = (3.14 * r1 * r1).toFixed(2)
    const a2 = (3.14 * r2 * r2).toFixed(2)
    const ratio = 9
    const options = [`面積變成 ${ratio} 倍`, '面積變成 3 倍', '面積變成 6 倍', '面積不變']
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `一塊圓形茶園原來半徑 ${r1} 公尺，擴大後半徑變成 ${r2} 公尺（3倍）。茶園面積變成原來的幾倍？`,
      options: shuffled,
      answer: shuffled.indexOf(`面積變成 ${ratio} 倍`),
      explanation: `原面積 = 3.14 × ${r1}² = ${a1} 平方公尺\n新面積 = 3.14 × ${r2}² = ${a2} 平方公尺\n${a2} ÷ ${a1} = 9 倍\n\n💡 半徑變 3 倍 → 面積變 3² = 9 倍`
    }
  }

  if (type === 2) {
    // 扇形面積
    const r = [10, 12, 15, 20][Math.floor(Math.random() * 4)]
    const angles = [60, 90, 120, 180]
    const angle = angles[Math.floor(Math.random() * angles.length)]
    const area = (3.14 * r * r * angle / 360).toFixed(2)
    const wrong1 = (3.14 * r * r).toFixed(2)
    const wrong2 = (2 * 3.14 * r * angle / 360).toFixed(2)
    const wrong3 = (3.14 * r * r * angle / 180).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `農場的噴灌系統噴水半徑 ${r} 公尺，受地形限制只能噴 ${angle}° 扇形範圍。灌溉面積多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `S = πr² × (θ/360°) = 3.14 × ${r}² × (${angle}/360) = ${area} 平方公尺`
    }
  }

  if (type === 3) {
    // 圓面積與扇形面積組合
    const r = [10, 12, 14][Math.floor(Math.random() * 3)]
    const angle = [60, 90][Math.floor(Math.random() * 2)]
    const total = (3.14 * r * r).toFixed(2)
    const sector = (3.14 * r * r * angle / 360).toFixed(2)
    const remain = (parseFloat(total) - parseFloat(sector)).toFixed(2)
    const options = [remain, total, sector, (parseFloat(sector) * 2).toFixed(2)]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `一塊半徑 ${r} 公尺的圓形農場，其中 ${angle}° 的扇形區域用來挖水池，其餘種稻。種稻的面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(remain),
      explanation: `整圓面積 = 3.14 × ${r}² = ${total} 平方公尺\n水池扇形面積 = ${total} × (${angle}/360) = ${sector} 平方公尺\n種稻面積 = ${total} - ${sector} = ${remain} 平方公尺`
    }
  }

  if (type === 4) {
    // 相似形影子測高
    const myHeight = [140, 150, 160][Math.floor(Math.random() * 3)]
    const myShadow = [100, 120, 80][Math.floor(Math.random() * 3)]
    const treeShadow = [300, 400, 480, 560][Math.floor(Math.random() * 4)]
    const treeHeight = Math.round(myHeight * treeShadow / myShadow)
    const wrong1 = treeHeight + 60
    const wrong2 = Math.round(myShadow * treeShadow / myHeight)
    const wrong3 = treeShadow
    const options = [String(treeHeight), String(wrong1), String(wrong2), String(wrong3)]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `農場主人身高 ${myHeight} 公分，影子長 ${myShadow} 公分。同時測量農場旁一棵老樟樹的影子長 ${treeShadow} 公分。這棵樹高幾公分？`,
      options: shuffled,
      answer: shuffled.indexOf(String(treeHeight)),
      explanation: `相似比：身高/影長 = 樹高/樹影\n${myHeight}/${myShadow} = 樹高/${treeShadow}\n樹高 = ${myHeight} × ${treeShadow} ÷ ${myShadow} = ${treeHeight} 公分`
    }
  }

  // type === 5：相似形比例
  const scale = [2, 3, 4][Math.floor(Math.random() * 3)]
  const smallSide = [5, 6, 8][Math.floor(Math.random() * 3)]
  const bigSide = smallSide * scale
  const smallArea = smallSide * smallSide
  const bigArea = bigSide * bigSide
  const areaRatio = scale * scale
  const options = [
    `面積比是 ${areaRatio}:1（邊長比的平方）`,
    `面積比是 ${scale}:1（和邊長比相同）`,
    `面積比是 1:1（相似形面積相同）`,
    `面積比是 ${areaRatio * 2}:1`
  ]
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  return {
    type: 'choice',
    question: `兩塊相似形狀的農田，邊長比是 ${scale}:1（大田邊長 ${bigSide} 公尺，小田邊長 ${smallSide} 公尺）。面積比是多少？`,
    options: shuffled,
    answer: shuffled.indexOf(`面積比是 ${areaRatio}:1（邊長比的平方）`),
    explanation: `小田面積 = ${smallSide}² = ${smallArea} 平方公尺\n大田面積 = ${bigSide}² = ${bigArea} 平方公尺\n面積比 = ${bigArea}:${smallArea} = ${areaRatio}:1\n\n💡 邊長比 ${scale}:1 → 面積比 ${scale}²:1 = ${areaRatio}:1`
  }
}

// ===== 科學綜合：水車效率 + 相似形 =====
const generateScienceQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '一台傳統木製水車，農民踩踏輸入200單位的功，實際提水用了120單位的功。這台水車的機械效率是多少？',
      options: ['60%', '50%', '80%', '100%'],
      answer: 0,
      explanation: `機械效率 = 有效功 ÷ 總輸入功 × 100%\n= 120 ÷ 200 × 100% = 60%\n另外 40%（80單位）因為摩擦等原因轉成熱能消散了。`
    },
    {
      type: 'choice',
      question: '兩台水車，A車效率70%，B車效率85%。在輸入相同的力（100單位）的情況下，哪台水車提的水更多？',
      options: [
        'B車（效率高，有效功多，提水85單位 > A車的70單位）',
        'A車（效率低，所以力氣更大）',
        '兩台一樣（輸入相同，輸出一定相同）',
        '無法比較'
      ],
      answer: 0,
      explanation: 'B車效率85% → 有效輸出 = 85單位\nA車效率70% → 有效輸出 = 70單位\n相同的輸入，效率越高的機器，有效輸出越多。'
    },
    {
      type: 'choice',
      question: '為什麼任何機械的效率都不可能達到100%？',
      options: [
        '因為一定有摩擦力，把一部分輸入能量轉成熱能散失',
        '因為機器太重了',
        '因為工人不夠努力',
        '理論上100%是可以達到的，只是現在技術還不夠好'
      ],
      answer: 0,
      explanation: '根據熱力學第二定律，任何能量轉換過程都必然有一部分能量以熱的形式散失（主要原因是摩擦）。這是自然界的基本規律，不是技術問題，效率100%（永動機）是不可能的。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== Day 4 主體 =====
const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✍️',
  color: '#E65100',
  title: '動筆日：閱讀精讀與筆記',

  units: [
    {
      id: 'w6d4-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈米的臺灣史〉第四段',
        sections: [
          {
            title: '廚房裡的台灣史',
            blocks: [
              {
                type: 'quote',
                content: '早年在大灶煮大鍋飯，首先是洗米，臺語稱洗米水為「潘」（phun），呈乳白色，可用來清潔或飼養家畜。\n\n大鍋裡放入洗好的米，然後加水，煮一段時間要以勺子攪拌，並把多餘的米湯舀起，等水被米吸收後，就不再攪拌，蓋鍋讓米燜熟。這種煮法會在鍋底產生「飯疵」（png-phí），華語稱之「鍋巴」，指煮米飯時黏在鍋底一層微焦的飯，成為帶有焦香味的零食。\n\n1950年代，日本發明了家庭用的「電氣炊飯器」，即在臺灣所稱的「電鍋」，改變了人類以火炊煮米飯的歷史。',
                author: '翁佳音、曹銘宗〈一樣米飼百代人〉'
              },
              {
                type: 'text',
                content: '📍 你注意到了嗎？\n\n「大同電鍋」是1960年台灣大同公司和日本東芝技術合作推出的，至今還在賣！\n一個廚房用具，串連了台灣戰後工業史、日台技術交流，以及幾十年的台灣家庭記憶。\n\n這就是報導文學的魅力——一個普通的物品，背後有說不完的故事。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d4-reading',
      name: '語文：閱讀精讀',
      icon: '📝',
      lesson: {
        title: '四面向分析：整理你的閱讀筆記',
        sections: [
          {
            title: '今天的任務',
            blocks: [
              {
                type: 'text',
                content: '今天是閱讀精讀日。讀完整篇〈一樣米飼百代人〉後，用「四面向分析法」整理你的筆記。\n\n這個方法適用於任何「介紹一個事物」的報導文學或說明文，幫助你有系統地理解和記憶。'
              }
            ]
          },
          {
            title: '四面向分析法',
            blocks: [
              {
                type: 'text',
                content: '📋 面向一：起源\n這個事物從哪裡來？什麼時候開始有的？\n\n關於台灣稻米的起源，文章告訴了我們什麼？\n• 台灣什麼時候開始有稻米？（考古證據）\n• 台灣原住民的主食是稻米嗎？\n• 水稻是誰帶來台灣的？什麼時候？\n\n✏️ 在筆記本上，用2-3句話寫下「台灣稻米的起源」。'
              },
              {
                type: 'text',
                content: '📋 面向二：地理\n這個事物和哪些地方有關？分布在哪裡？\n\n• 旱稻主要種在台灣哪裡？\n• 水稻主要種在台灣哪裡？\n• 蓬萊米的起源和哪個農業試驗場有關？\n• 台灣的米出口到哪些地方？\n\n✏️ 在筆記本上，畫一個簡單的台灣地圖，標出和稻米有關的地點。'
              },
              {
                type: 'text',
                content: '📋 面向三：工序（或演變過程）\n這個事物是怎麼生產或發展的？\n\n台灣稻米的歷史演變：\n• 荷蘭時期發生了什麼變化？\n• 清領時期如何擴大種植？\n• 日治時期蓬萊米怎麼誕生的？\n• 戰後有什麼變化？\n\n✏️ 在筆記本上，用時間軸的方式，畫出台灣稻米歷史的重要節點（至少4個）。'
              },
              {
                type: 'text',
                content: '📋 面向四：文化意義\n這個事物在人們的生活和文化中代表什麼？\n\n• 台語有哪些和米有關的俚語？各代表什麼意思？\n• 「大灶煮飯」和「電鍋煮飯」有什麼不同的文化感覺？\n• 「鍋巴」（飯疵）在文章中是什麼角色？\n• 台灣從「缺米」到「精品米」，這個轉變說明了什麼？\n\n✏️ 在筆記本上，寫下你覺得最有趣或最令你驚訝的一個文化細節，並說明為什麼。'
              },
              {
                type: 'text',
                content: '📋 最後一步：整合與連結\n\n在四面向都寫完之後，試著回答這個問題：\n\n「這篇文章讓你對台灣稻米（或台灣歷史）有什麼新的理解，是你以前不知道的？」\n\n這不需要長篇大論，一到兩句話就夠，但要是真心話。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d4-math',
      name: '數學',
      icon: '⭕',
      lesson: {
        title: 'W6 數學綜合練習',
        sections: [
          {
            title: '本週數學整合',
            blocks: [
              {
                type: 'text',
                content: '本週學了三個重要的幾何概念，今天一起複習：\n\n① 圓面積：S = πr²\n② 扇形面積：S = πr² × (θ/360°)\n③ 相似形：邊長比 n:1 → 面積比 n²:1\n\n今天的題目會把這三個概念混合出題，用農業情境包裝，考驗你分清楚什麼時候用哪個公式。\n\n重點口訣：\n• 「整圓」用圓面積\n• 「一片」用扇形面積（記得乘 θ/360）\n• 「兩個相似圖形比大小」用面積比（邊長比的平方）'
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
      id: 'w6d4-science',
      name: '科學',
      icon: '⚙️',
      lesson: {
        title: '機械效率綜合：從水車到電鍋',
        sections: [
          {
            title: '效率的計算',
            blocks: [
              {
                type: 'text',
                content: '機械效率公式：\n效率 = 有效輸出功 ÷ 總輸入功 × 100%\n\n• 傳統大灶煮飯：燃燒柴火的熱能，大部分散失到空氣中，送進米飯的熱能可能只有20-30%。效率很低。\n\n• 傳統木製水車：效率約30-50%，一半以上的人力因摩擦等損耗白費。\n\n• 大同電鍋：電能轉成熱能的效率約80-90%，比大灶好很多。\n\n• 現代電動抽水機：效率70-85%，比傳統水車高很多。\n\n機械愈進步，效率愈高，但永遠不會達到100%。'
              },
              {
                type: 'text',
                content: '🤔 一個思考問題：\n\n台灣農民從大灶換成電鍋，從人力水車換成電動抽水機，效率大幅提升。\n但是，電的能源從哪裡來？\n\n台灣目前的電力組成：\n• 燃煤、天然氣約70%\n• 核能約10%\n• 再生能源（太陽能、風力）約20%\n\n即使電鍋本身效率很高，但發電廠燃燒煤炭發電的效率也只有35-40%……\n\n「省力」和「環保」不完全是同一件事，這是能源問題中很重要的思考角度。（這個主題我們在 W8 能源單元還會深入討論！）'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateScienceQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w6d4-review',
      name: '今日回顧',
      icon: '🌙',
      lesson: {
        title: '第4天學了什麼？',
        sections: [
          {
            title: '今日收穫',
            blocks: [
              {
                type: 'text',
                content: '今天學到了：\n\n📝 四面向閱讀分析：起源、地理、工序、文化意義——適用於任何說明性文章的筆記方法\n\n⭕ W6 數學綜合：圓面積、扇形面積、相似形面積比的整合應用\n\n⚙️ 機械效率綜合：從大灶到電鍋，從水車到電動幫浦，效率提升的代價與意義'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n《無米樂》電影日！\n\n這部2005年的紀錄片，拍攝台南後壁的兩位老農：崑濱伯和煌明伯。他們種了一輩子的稻，說出了最真實的農民心聲。觀影前，先聽一首陳明章的台語歌，然後整天讓這個故事帶著你走進台灣農村的時光。'
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
