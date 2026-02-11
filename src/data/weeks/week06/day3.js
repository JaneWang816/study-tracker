// src/data/weeks/week06/day3.js
// W6 Day3：地圖怎麼說故事？
// 貫穿文本：〈米的臺灣史〉第三段（稻種多樣性→蓬萊米）

// ===== 社會：分布圖與等值線圖 =====
const generateSocialQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「分布圖」最主要的用途是？',
      options: [
        '顯示某種事物在地理空間上的分佈情形（哪裡多、哪裡少）',
        '顯示時間的變化',
        '顯示兩個數字的大小關係',
        '只用來顯示人口'
      ],
      answer: 0,
      explanation: '分布圖（distribution map）用不同顏色、深淺或符號，顯示某種事物在地理空間的分布。例如：台灣農業分布圖可以顯示哪裡種稻、哪裡種茶、哪裡種甘蔗。'
    },
    {
      type: 'choice',
      question: '「等值線圖」（如等雨量線、等高線）中，線上的每個點代表什麼？',
      options: [
        '數值相同的點（同一條線上的數值完全相等）',
        '距離相等的點',
        '時間相同的點',
        '溫度最高的點'
      ],
      answer: 0,
      explanation: '等值線連接數值相同的點。等高線上每個點的海拔高度相同；等雨量線上每個點的年雨量相同；等溫線上每個點的溫度相同。等值線密集表示變化快，稀疏表示變化緩。'
    },
    {
      type: 'choice',
      question: '看台灣「等雨量線圖」，等雨量線在台灣哪個方向比較密集？',
      options: [
        '東西方向（西部平原和中央山脈之間，雨量差距大，線條密集）',
        '南北方向',
        '全台灣等雨量線都一樣稀疏',
        '台灣太小，不需要等雨量線'
      ],
      answer: 0,
      explanation: '台灣地形從西部平原急遽上升到中央山脈，雨量也急劇增加（山區多雨），因此東西方向的等雨量線比南北方向密集得多，反映了台灣西部和山區的雨量差異。'
    },
    {
      type: 'choice',
      question: '1926年日本總督府為台灣新品種粳米命名為「蓬萊米」，「蓬萊」的意思是？',
      options: [
        '日本人舊稱台灣為「蓬萊仙島」，意指美好的仙境之島',
        '一種稻米的顏色',
        '農業試驗所所長的名字',
        '日語中稻米的意思'
      ],
      answer: 0,
      explanation: '日本人古時把台灣稱為「蓬萊仙島」（仙境之意）。1926年，日本總督府在台灣育種成功的新品種粳米，就以此命名為「蓬萊米」，意指「從蓬萊仙島來的米」，然後從台灣回銷日本。'
    },
    {
      type: 'choice',
      question: '台灣目前有哪三種主要稻米類型？',
      options: [
        '秈稻（在來米）、粳稻（蓬萊米）、糯稻（糯米）',
        '白米、糙米、黑米',
        '長米、短米、圓米',
        '台灣只有一種米'
      ],
      answer: 0,
      explanation: '台灣擁有世界三大類稻種：秈稻（黏性低，台語叫在來米，適合做米粉、粄條）、粳稻（黏性中等，就是蓬萊米，日治時期引進）、糯稻（黏性最高，做麻糬、粽子用）。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== 數學：扇形面積 =====
const generateMathQuestion = () => {
  const type = Math.floor(Math.random() * 3)

  if (type === 0) {
    // 扇形面積公式應用
    const r = [6, 8, 10, 12][Math.floor(Math.random() * 4)]
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
      question: `一塊扇形農田的半徑是 ${r} 公尺，圓心角是 ${angle}°，這塊農田的面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `扇形面積 = πr² × (圓心角 ÷ 360°)\n= 3.14 × ${r}² × (${angle} ÷ 360)\n= 3.14 × ${r * r} × ${(angle / 360).toFixed(4).replace(/0+$/, '')}\n= ${area} 平方公尺`
    }
  }

  if (type === 1) {
    // 扇形面積 vs 整圓面積
    const r = [10, 14, 20][Math.floor(Math.random() * 3)]
    const angle = 90
    const sectorArea = (3.14 * r * r * angle / 360).toFixed(2)
    const circleArea = (3.14 * r * r).toFixed(2)
    const options = [
      `扇形面積 = ${sectorArea} 平方公尺（整圓的四分之一）`,
      `扇形面積 = ${circleArea} 平方公尺（等於整圓）`,
      `扇形面積 = ${(3.14 * r * r / 2).toFixed(2)} 平方公尺（整圓的一半）`,
      `扇形面積 = ${(2 * 3.14 * r).toFixed(2)} 平方公尺`
    ]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `一個半徑 ${r} 公尺的圓形農場被分成4等份，其中一份（圓心角90°）的面積是多少？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(`扇形面積 = ${sectorArea} 平方公尺（整圓的四分之一）`),
      explanation: `扇形面積 = 3.14 × ${r}² × (90 ÷ 360) = ${circleArea} × 0.25 = ${sectorArea} 平方公尺\n確認：${sectorArea} × 4 = ${(parseFloat(sectorArea) * 4).toFixed(2)} ≈ ${circleArea} ✓`
    }
  }

  // type === 2：扇形面積情境（灌溉扇形範圍）
  const r = [50, 80, 100][Math.floor(Math.random() * 3)]
  const angle = [60, 90, 120][Math.floor(Math.random() * 3)]
  const area = (3.14 * r * r * angle / 360).toFixed(0)
  const wrong1 = (3.14 * r * r).toFixed(0)
  const wrong2 = (3.14 * r * r * angle / 180).toFixed(0)
  const wrong3 = (2 * 3.14 * r * angle / 360).toFixed(0)
  const options = [area, wrong1, wrong2, wrong3]
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  return {
    type: 'choice',
    question: `噴水灌溉設備能噴到半徑 ${r} 公尺的範圍，但受地形限制，只能向 ${angle}° 的扇形方向噴水。這台設備能灌溉的面積是多少平方公尺？（π ≈ 3.14）`,
    options: shuffled,
    answer: shuffled.indexOf(area),
    explanation: `扇形灌溉面積 = 3.14 × ${r}² × (${angle} ÷ 360)\n= 3.14 × ${r * r} × ${(angle / 360).toFixed(4).replace(/0+$/, '')}\n= ${area} 平方公尺`
  }
}

// ===== 科學：相似形深入——影子測高法 =====
const generateScienceQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「相似形」的定義是？',
      options: [
        '形狀相同、大小不同的兩個圖形（對應角相等，對應邊成比例）',
        '大小和形狀都完全相同的兩個圖形',
        '只是顏色不同的兩個圖形',
        '有一個角相同的兩個三角形'
      ],
      answer: 0,
      explanation: '相似形是形狀相同但大小可以不同的圖形。兩個相似三角形的對應角相等，對應邊的比值相同（成比例）。這是 W4 預覽過的概念，今天深入應用。'
    },
    {
      type: 'choice',
      question: '「影子測高法」的原理是？',
      options: [
        '在同一時刻，物體的高度和影子長度成正比（利用相似三角形）',
        '影子越長，物體越矮',
        '影子的長度等於物體的高度',
        '需要用量角器量太陽的角度才能計算'
      ],
      answer: 0,
      explanation: '同一時刻，陽光角度相同，所有物體的「高度：影長」比值都相同。你的高度÷你的影長 = 大樹的高度÷大樹的影長，這就是相似三角形的比例關係。'
    },
    {
      type: 'choice',
      question: '小明身高150公分，影子長100公分。同時測量一棵大樹的影子長400公分，這棵樹有多高？',
      options: ['600公分', '400公分', '300公分', '500公分'],
      answer: 0,
      explanation: `用相似比：\n小明身高 / 小明影長 = 樹高 / 樹影長\n150 / 100 = 樹高 / 400\n樹高 = 150 × 400 ÷ 100 = 600 公分`
    },
    {
      type: 'choice',
      question: '用影子測高法，為什麼要「同時」測量自己的影子和大樹的影子？',
      options: [
        '因為太陽位置隨時間改變，影子的長度也會改變，必須同時測才能確保陽光角度相同',
        '因為影子會移動，等一下就找不到了',
        '因為規定必須同時測',
        '時間不重要，早上測晚上用也可以'
      ],
      answer: 0,
      explanation: '太陽從早到晚位置不斷改變，影子的方向和長度也跟著改變。「高度：影長」的比值只在相同時刻、相同陽光角度下才相等。所以必須同時測量，才能使用相似比。'
    },
    {
      type: 'choice',
      question: '台灣古代農民怎麼估算一塊不規則形農田的面積？',
      options: [
        '把不規則形田地分割成幾個長方形和三角形，分別計算再相加',
        '直接用腳步量周長，然後乘以一個固定數字',
        '只有現代才能計算不規則形面積',
        '估算不規則形面積是不可能的'
      ],
      answer: 0,
      explanation: '把複雜的不規則形分解成簡單圖形（長方形、三角形、扇形）再相加，是幾何的基本方法。台灣古代地方官員在丈量土地時，就使用這種「分割法」來估算不規則形田地的面積。'
    }
  ]

  // 動態計算題
  if (Math.random() < 0.4) {
    const myHeight = [140, 150, 160][Math.floor(Math.random() * 3)]
    const myShadow = [100, 120, 80][Math.floor(Math.random() * 3)]
    const treeShadow = [300, 400, 480, 600][Math.floor(Math.random() * 4)]
    const treeHeight = Math.round(myHeight * treeShadow / myShadow)
    const wrong1 = Math.round(myHeight * treeShadow / myShadow) + 50
    const wrong2 = Math.round(myShadow * treeShadow / myHeight)
    const wrong3 = treeShadow
    const options = [String(treeHeight), String(wrong1), String(wrong2), String(wrong3)]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `小華身高 ${myHeight} 公分，影子長 ${myShadow} 公分。同時測量農場旁一棵大樹的影子長 ${treeShadow} 公分，這棵樹大約多高（公分）？`,
      options: shuffled,
      answer: shuffled.indexOf(String(treeHeight)),
      explanation: `利用相似比：\n身高 / 影長 = 樹高 / 樹影長\n${myHeight} / ${myShadow} = 樹高 / ${treeShadow}\n樹高 = ${myHeight} × ${treeShadow} ÷ ${myShadow} = ${treeHeight} 公分`
    }
  }

  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== 語文詞彙：地圖閱讀用語 =====
const generateVocabQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「圖例」在地圖上的功能是？',
      options: [
        '說明地圖上各種符號、顏色、線條代表什麼意思',
        '地圖的故事',
        '地圖的標題',
        '地圖的製作日期'
      ],
      answer: 0,
      explanation: '圖例（legend）是地圖的「說明書」，告訴讀者地圖上各種符號和顏色的含義。沒有圖例，地圖就像一本沒有目錄的書，難以閱讀。'
    },
    {
      type: 'choice',
      question: '「在來米」這個名字是怎麼來的？',
      options: [
        '蓬萊米引進後，為了區分，原本就有的秈米被稱為「在來」（本來就有的）',
        '因為這種米「在」台灣「來」的',
        '這是一個人名',
        '因為這種米的顏色'
      ],
      answer: 0,
      explanation: '日文「在來」（zairai）有「向來、一直以來就有的」意思。蓬萊米（日本引進的粳稻）出現後，原本台灣就有的秈米被稱為「在來米」——意思是「本來就在這裡的米」，以示區別。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== Day 3 主體 =====
const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '🗺️',
  color: '#6A1B9A',
  title: '地圖怎麼說故事？',

  units: [
    {
      id: 'w6d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈米的臺灣史〉第三段',
        sections: [
          {
            title: '三種米，三個時代',
            blocks: [
              {
                type: 'quote',
                content: '臺灣在清代還只有秈稻和糯稻，與中國南部、東南亞、南亞一樣，但在日本時代因緣際會又引進了粳稻。\n\n日本向來種植溫帶粳稻，一年一穫。當時日本人看上臺灣氣候適合種植水稻，有助解決日本糧食不足，但日本人長期食用日本較軟的粳米，吃不慣臺灣較硬的秈米。因此，臺灣總督府農業試驗所就找來日本稻作育種專家磯永吉，引進日本粳稻在臺灣試種、改良，經過幾年努力，終於培育了新品種，一年可收成二至三次。\n\n1926年，臺灣總督府為臺灣新品種粳米命名，以日本人舊稱臺灣「蓬萊仙島」，就稱這種米為「蓬萊米」，從臺灣回銷日本。',
                author: '翁佳音、曹銘宗〈一樣米飼百代人〉'
              },
              {
                type: 'text',
                content: '📍 跨週連結：\n\n「蓬萊米」誕生的故事，我們在 W5 也學過——磯永吉育種的謎題（為什麼臺中65號能一年兩穫），後來由中研院邢禹依發現，原來是山地陸稻的花粉飛過去雜交了！\n\n一顆米，串連了 W1 的南島語族、W3 的嘉南大圳、W5 的日治建設，再到今天 W6 的農業地理。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d3-social',
      name: '社會',
      icon: '🗺️',
      lesson: {
        title: '地圖的語言：分布圖與等值線',
        sections: [
          {
            title: '地圖是有偏見的',
            blocks: [
              {
                type: 'text',
                content: '地圖看起來客觀，其實每張地圖都是「選擇」的結果：選擇顯示什麼、用什麼顏色、放大哪個區域……\n\n不同用途的地圖，說的是不同的故事：\n• 農業分布圖：哪裡種什麼\n• 人口分布圖：哪裡人多人少\n• 氣候等值線圖：哪裡雨量多、氣溫高\n• 地形圖（等高線）：山在哪裡、高度多少'
              }
            ]
          },
          {
            title: '分布圖：用顏色說故事',
            blocks: [
              {
                type: 'text',
                content: '分布圖用顏色深淺或符號，顯示某種現象的地理分布。\n\n閱讀分布圖的步驟：\n① 看標題：這張圖顯示什麼？\n② 看圖例：顏色/符號各代表什麼？\n③ 找規律：哪些地方集中？哪些地方稀少？\n④ 問原因：為什麼這樣分布？和地形、氣候有什麼關係？\n\n例：台灣農業分布圖可以看出：茶葉集中在北部山區（涼爽多霧）、稻米集中在西部平原（灌溉便利）、水果集中在中南部（日照充足）。'
              }
            ]
          },
          {
            title: '等值線圖：用線說數字',
            blocks: [
              {
                type: 'text',
                content: '等值線連接數值相同的點，是地理資訊的高效表達方式。\n\n常見等值線：\n📏 等高線：同一高度的點連起來→ 山形地貌\n🌧️ 等雨量線：同一年雨量的點連起來→ 台灣東多西少\n🌡️ 等溫線：同一溫度的點連起來→ 台灣南熱北涼\n\n讀等值線的關鍵：\n• 線密集 = 數值變化快（坡度陡、雨量差異大）\n• 線稀疏 = 數值變化慢（平原、雨量均勻）\n• 閉合的圓圈 = 山頂或盆地'
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
      id: 'w6d3-math',
      name: '數學',
      icon: '🥧',
      lesson: {
        title: '扇形面積：S = πr² × θ/360°',
        sections: [
          {
            title: '從圓面積到扇形面積',
            blocks: [
              {
                type: 'text',
                content: '扇形是圓的一部分，就像切開的披薩。\n\nW5 學了扇形的弧長（那條弧有多長）。\n今天學扇形的面積（那一片有多大）。\n\n公式邏輯和弧長一樣直觀：\n\n圓心角360° → 完整圓面積 = πr²\n圓心角θ → 扇形面積 = πr² × (θ ÷ 360°)\n\n📐 扇形面積公式：S = πr² × (θ / 360°)'
              },
              {
                type: 'text',
                content: '✏️ 例題：\n半徑 10 公尺，圓心角 90° 的扇形農田，面積是多少？\n\nS = 3.14 × 10² × (90 ÷ 360)\n= 314 × 0.25\n= 78.5 平方公尺\n\n確認：90° 是整圓的四分之一，78.5 × 4 = 314 ≈ 整圓面積 ✓'
              },
              {
                type: 'text',
                content: '⚠️ 容易搞混的地方：\n\n扇形弧長（W5）：L = 2πr × (θ/360°)   → 只有 r，不是 r²\n扇形面積（W6）：S = πr² × (θ/360°)  → 有 r²\n\n記憶方法：\n• 長度（弧長）→ r 的一次方\n• 面積（扇形面積）→ r 的二次方（平方）'
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
      id: 'w6d3-science',
      name: '科學',
      icon: '🌳',
      lesson: {
        title: '相似形深入：影子測高法',
        sections: [
          {
            title: '相似形的核心概念',
            blocks: [
              {
                type: 'text',
                content: 'W4 我們學了比例尺，本質上就是「相似形」：地圖上的台灣和真實的台灣，形狀相同，大小不同——這是相似形。\n\n相似三角形的特性：\n• 對應角相等\n• 對應邊成比例（比值相同）\n\n若 △ABC ∽ △DEF（相似），則：\nAB/DE = BC/EF = AC/DF\n\n這個比值關係，讓我們可以「用已知的小三角形，推算未知的大三角形」。'
              }
            ]
          },
          {
            title: '影子測高法：實用的相似形',
            blocks: [
              {
                type: 'text',
                content: '問題：如何量出一棵你爬不上去的大樹的高度？\n\n方法：在同一時刻，測量你的身高和影子長，以及大樹的影子長。\n\n原理：同一時刻，陽光方向相同，你和大樹各自形成一個直角三角形（太陽光線、你的身體/樹幹、地面影子），兩個三角形的角度完全相同——它們是相似三角形！\n\n因此：\n你的身高 / 你的影長 = 大樹的高度 / 大樹的影長\n\n✏️ 例題：\n小明身高150公分，影子100公分。\n大樹影子600公分。大樹多高？\n\n150 / 100 = 大樹高度 / 600\n大樹高度 = 150 × 600 ÷ 100 = 900公分 = 9公尺'
              },
              {
                type: 'text',
                content: '📐 這個方法古希臘數學家泰勒斯（Thales，西元前624年）就用過了！傳說他用影子測量了埃及金字塔的高度，讓法老大為驚嘆。\n\n台灣農民也懂類似的道理：要估算遠處山的高度，可以用手持竹竿比對影子。不需要爬上去，只需要數學。'
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
      id: 'w6d3-vocab',
      name: '語文',
      icon: '✍️',
      lesson: {
        title: '詞彙：地圖閱讀用語',
        sections: [
          {
            title: '本日關鍵詞彙',
            blocks: [
              {
                type: 'text',
                content: '🗺️ 地圖詞彙\n\n• 分布圖：顯示事物在地理空間分布的地圖\n• 等值線：連接數值相同點的線（等高線、等雨量線、等溫線）\n• 圖例：說明地圖符號和顏色含義的說明表\n• 比例尺：地圖縮放的比例（W4 學過）'
              },
              {
                type: 'text',
                content: '📐 數學詞彙\n\n• 相似形：形狀相同、大小不同的圖形\n• 對應邊：相似形中位置對應的邊\n• 比例：兩個數量之間的倍數關係\n• 影子測高法：利用相似三角形原理，用影子長度計算未知高度'
              },
              {
                type: 'text',
                content: '📖 報導文學中的數字\n\n報導文學常用具體數字增加說服力。文章中說：\n• 「8000至10000年前就有稻的栽培」\n• 「蓬萊米育種……一年可收成二至三次」\n• 「1926年命名為蓬萊米」\n\n這些數字不是隨意的，每個都有文獻依據。閱讀報導文學時，留意這些「錨定數字」，它們讓故事更真實可信。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateVocabQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w6d3-review',
      name: '今日回顧',
      icon: '🌙',
      lesson: {
        title: '第3天學了什麼？',
        sections: [
          {
            title: '今日收穫',
            blocks: [
              {
                type: 'text',
                content: '今天學到了：\n\n🗺️ 地圖閱讀：分布圖用顏色說故事；等值線用線說數字；線密集=變化快\n\n🥧 扇形面積：S = πr² × (θ÷360°)——從圓面積的延伸，和弧長公式平行對應\n\n🌳 影子測高法：相似三角形的應用——身高/影長 = 樹高/樹影長，泰勒斯兩千年前就會的技巧'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n動筆日！文章進入最溫暖的段落——台灣人的廚房，從大灶、火石火刀到大同電鍋的演變。你要做一件事：認真讀這整篇文章，然後用「起源、地理、工序、文化意義」四個面向，整理你的閱讀筆記。'
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
