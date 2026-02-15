// src/data/weeks/week05/day4.js
// W5 Day4：動筆日
// 貫穿文本：吳念真〈琵琶鼠〉第四段（父親去世、老鼠子離開）

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 數學綜合:圓周長+弧長+機械情境
// ==========================================
const mathQuestions = [
  // 圓周長情境
  {
    type: 'options',
    question: '礦坑裡的水輪半徑是 8 公分,轉一圈能帶動多長的鏈條?(π ≈ 3.14)',
    options: ['50.24', '25.12', '60.24', '200.96'],
    answer: 0,
    displayAnswer: '水輪的周長 = 2 × 3.14 × 8 = 50.24 公分,轉一圈就帶動 50.24 公分長的鏈條。'
  },
  {
    type: 'options',
    question: '礦坑裡的水輪半徑是 12 公分,轉一圈能帶動多長的鏈條?(π ≈ 3.14)',
    options: ['75.36', '37.68', '85.36', '452.16'],
    answer: 0,
    displayAnswer: '水輪的周長 = 2 × 3.14 × 12 = 75.36 公分,轉一圈就帶動 75.36 公分長的鏈條。'
  },
  {
    type: 'options',
    question: '礦坑裡的水輪半徑是 15 公分,轉一圈能帶動多長的鏈條?(π ≈ 3.14)',
    options: ['94.2', '47.1', '104.2', '706.5'],
    answer: 0,
    displayAnswer: '水輪的周長 = 2 × 3.14 × 15 = 94.2 公分,轉一圈就帶動 94.2 公分長的鏈條。'
  },
  {
    type: 'options',
    question: '礦坑裡的水輪半徑是 25 公分,轉一圈能帶動多長的鏈條?(π ≈ 3.14)',
    options: ['157', '78.5', '167', '1962.5'],
    answer: 0,
    displayAnswer: '水輪的周長 = 2 × 3.14 × 25 = 157 公分,轉一圈就帶動 157 公分長的鏈條。'
  },
  // 弧長情境
  {
    type: 'options',
    question: '五分仔車的圓形路線,整圈半徑 10 公尺。若只走 60° 的弧形段,走了多少公尺?(π ≈ 3.14)',
    options: ['10.47', '62.8', '5.23', '20.94'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 10 × (60 ÷ 360) = 10.47 公尺'
  },
  {
    type: 'options',
    question: '五分仔車的圓形路線,整圈半徑 14 公尺。若只走 90° 的弧形段,走了多少公尺?(π ≈ 3.14)',
    options: ['21.98', '87.92', '10.99', '43.96'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 14 × (90 ÷ 360) = 21.98 公尺'
  },
  {
    type: 'options',
    question: '五分仔車的圓形路線,整圈半徑 20 公尺。若只走 120° 的弧形段,走了多少公尺?(π ≈ 3.14)',
    options: ['41.87', '125.6', '20.93', '83.73'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 20 × (120 ÷ 360) = 41.87 公尺'
  },
  // 扇形周長情境
  {
    type: 'options',
    question: '製糖廠的圓形冷卻池被分成四等份,每份是圓心角 90° 的扇形,半徑 6 公尺。圍住其中一份扇形的柵欄總長是多少公尺?(π ≈ 3.14)',
    options: ['21.42', '9.42', '15.42', '31.42'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 6 × (90÷360) = 9.42 公尺\n柵欄總長 = 弧長 + 兩條半徑 = 9.42 + 6 + 6 = 21.42 公尺'
  },
  {
    type: 'options',
    question: '製糖廠的圓形冷卻池被分成四等份,每份是圓心角 90° 的扇形,半徑 8 公尺。圍住其中一份扇形的柵欄總長是多少公尺?(π ≈ 3.14)',
    options: ['28.56', '12.56', '20.56', '40.56'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 8 × (90÷360) = 12.56 公尺\n柵欄總長 = 弧長 + 兩條半徑 = 12.56 + 8 + 8 = 28.56 公尺'
  },
  {
    type: 'options',
    question: '製糖廠的圓形冷卻池被分成四等份,每份是圓心角 90° 的扇形,半徑 10 公尺。圍住其中一份扇形的柵欄總長是多少公尺?(π ≈ 3.14)',
    options: ['35.7', '15.7', '25.7', '51.4'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 10 × (90÷360) = 15.7 公尺\n柵欄總長 = 弧長 + 兩條半徑 = 15.7 + 10 + 10 = 35.7 公尺'
  },
  // 多步驟綜合
  {
    type: 'options',
    question: '礦場的提升機用直徑 10 公分的鼓輪捲起鋼絲繩,鼓輪轉了 3 圈,鋼絲繩被拉了多少公分?(π ≈ 3.14)',
    options: ['94.2', '47.1', '104.2', '31.4'],
    answer: 0,
    displayAnswer: '鼓輪半徑 = 5 公分,每轉一圈拉 = 2 × 3.14 × 5 = 31.4 公分\n轉 3 圈共拉 = 31.4 × 3 = 94.2 公分'
  },
  {
    type: 'options',
    question: '礦場的提升機用直徑 14 公分的鼓輪捲起鋼絲繩,鼓輪轉了 5 圈,鋼絲繩被拉了多少公分?(π ≈ 3.14)',
    options: ['219.8', '109.9', '239.8', '43.96'],
    answer: 0,
    displayAnswer: '鼓輪半徑 = 7 公分,每轉一圈拉 = 2 × 3.14 × 7 = 43.96 公分\n轉 5 圈共拉 = 43.96 × 5 = 219.8 公分'
  },
  {
    type: 'options',
    question: '礦場的提升機用直徑 20 公分的鼓輪捲起鋼絲繩,鼓輪轉了 8 圈,鋼絲繩被拉了多少公分?(π ≈ 3.14)',
    options: ['502.4', '251.2', '522.4', '62.8'],
    answer: 0,
    displayAnswer: '鼓輪半徑 = 10 公分,每轉一圈拉 = 2 × 3.14 × 10 = 62.8 公分\n轉 8 圈共拉 = 62.8 × 8 = 502.4 公分'
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
    return shuffleOptions(question)
  }
})()

// ==========================================
// 科學綜合:三種簡單機械
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '下列哪一個是「省力槓桿」的例子?',
    options: [
      '開罐器(支點在前端,施力點在後端)',
      '鑷子(施力點在中間)',
      '蹺蹺板(支點在中間,兩端等距)',
      '釣魚竿(施力點靠近支點)'
    ],
    answer: 0,
    displayAnswer: '開罐器支點在瓶蓋邊緣,抗力點也在瓶蓋邊緣(靠支點),施力點在長端——施力臂長,省力。鑷子是費力槓桿;蹺蹺板是等力槓桿;釣魚竿也是費力槓桿。'
  },
  {
    type: 'options',
    question: '下列哪個情境用到了「輪軸」原理?',
    options: [
      '用大把手的螺絲起子旋緊螺絲',
      '用繩子拉起重物',
      '用撬棒撬起大石頭',
      '用梯子爬到高處'
    ],
    answer: 0,
    displayAnswer: '螺絲起子的粗把手是「輪」,細螺絲桿是「軸」,用粗把手旋轉可以在細桿上產生更大的扭力——這正是輪軸省力的原理。'
  },
  {
    type: 'options',
    question: '礦坑挖掘時,工人用繩子和滑輪把礦石籃從坑底拉到地面,為了讓工人施力更省力,應該加裝哪種滑輪?',
    options: ['動滑輪(省力一半)', '定滑輪(只改向,不省力)', '不需要滑輪', '加更多定滑輪'],
    answer: 0,
    displayAnswer: '動滑輪可以省力一半,讓工人用較少的力拉起沉重的礦石。雖然需要拉兩倍長的繩子,但在礦坑這種環境,省力比省距離更重要。'
  },
  {
    type: 'options',
    question: '「能量守恆」在簡單機械中的意思是?',
    options: [
      '省力必然費距離——用較少的力,需要移動較長的距離',
      '機械可以無中生有,創造出更多能量',
      '使用機械可以讓工作完全不需要力',
      '省力的同時也可以省距離'
    ],
    answer: 0,
    displayAnswer: '能量守恆:槓桿省力則費距離,動滑輪省力一半則繩子要拉兩倍長。機械不創造能量,只是讓我們以更方便的方式使用能量。'
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

export { generateMathQuestion, generateScienceQuestion }

// ===== Day 4 主體 =====
const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✍️',
  color: '#4A148C',
  title: '動筆日',

  units: [
    // ── 開場：貫穿文本第四段（最沉重的一段）──
    {
      id: 'w5d4-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈琵琶鼠〉第四段',
        sections: [
          {
            title: '然後有一天……',
            blocks: [
              {
                type: 'quote',
                content: '半年之後某一天的黃昏，有人走過老鼠的家，發現老鼠子正在剁一條連皮都沒剝的雨傘節……人家問他：「爸爸怎會讓你自己殺蛇？不怕你被咬？」孩子的回答是：「爸爸在睡覺！」\n\n而當那些人走過幾步之後才知道事情大條了，因為那孩子接著說：「爸爸睡到蟲都爬到身上了還叫不起來！」',
                author: '吳念真〈琵琶鼠〉'
              },
              {
                type: 'text',
                content: '沒多久之後，老鼠子被一個遠親接去照顧，他走的那天大霧迷濛……他轉頭笑笑地看我，嘴裡小聲地唸道：「九八七十二，九九八十一！」然後就慢慢地走入霧裡，慢慢地消失蹤影。'
              },
              {
                type: 'text',
                content: '📍 在開始今天的練習和寫作之前，請靜靜地坐一下。\n\n老鼠子走入霧裡，帶走了他的九九乘法表、他的狗群、他的草藥知識。\n\n今天你要寫一封信，不是給老鼠子，而是給你認識了五年的老師——說說你現在的自學生活。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ── 數學綜合複習 ──
    {
      id: 'w5d4-math',
      name: '數學',
      icon: '⭕',
      lesson: {
        title: 'W5 數學綜合：圓的幾何',
        sections: [
          {
            title: '本週數學知識整理',
            blocks: [
              {
                type: 'text',
                content: '📐 這週我們學了圓的三件事：\n\n1️⃣ 圓周長 C = 2πr\n   → 輪子轉一圈走多遠？齒輪的大小關係？\n\n2️⃣ 弧長 = 2πr × (圓心角 ÷ 360°)\n   → 扇形彎邊的長度\n\n3️⃣ 扇形周長 = 弧長 + 2r\n   → 要圍住一片扇形，需要多少材料？'
              },
              {
                type: 'text',
                content: '⚠️ 最容易犯的錯誤：\n\n• 混淆「半徑」和「直徑」——半徑是直徑的一半\n• 計算扇形周長時忘記加兩條半徑\n• 把弧長和圓周長搞混——弧長是圓周長的一部分'
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

    // ── 科學複習 ──
    {
      id: 'w5d4-science',
      name: '科學',
      icon: '🔬',
      lesson: {
        title: '簡單機械綜合複習',
        sections: [
          {
            title: '三種簡單機械連結日治建設',
            blocks: [
              {
                type: 'text',
                content: '回顧這三天，日治建設中的機械在哪裡？\n\n🚂 縱貫鐵路：車輪（輪軸）、轉轍器（槓桿）\n🏭 製糖廠：壓榨滾輪（輪軸）、甘蔗輸送帶（滑輪）\n⛏️ 礦坑：提升機（滑輪組）、礦車（輪軸）、撬石棍（槓桿）\n⚡ 水力發電廠：水輪機（輪軸）\n\n這些機械讓台灣的工人和建設者，能用有限的體力完成龐大的工程。'
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

    // ── 語文：應用文書信寫作 ──
    {
      id: 'w5d4-writing',
      name: '語文',
      icon: '📮',
      lesson: {
        title: '應用文：給老師的一封信',
        sections: [
          {
            title: '什麼是應用文？',
            blocks: [
              {
                type: 'text',
                content: '應用文是「有實際用途的文章」，包括：書信、通知、報告、請假條……\n\n書信是最常見的應用文，也是最有溫度的一種文體。\n\n今天的任務：寫一封信給你國小五年級（或更早）的某位老師，告訴他/她你現在自學的生活。'
              }
            ]
          },
          {
            title: '書信的格式',
            blocks: [
              {
                type: 'text',
                content: '📮 標準書信格式：\n\n【稱謂】___老師您好：\n（或：敬愛的___老師：）\n\n【正文】……（信件內容，分段）\n\n【祝語】\n祝 教安\n（或：祝您 順心如意）\n\n【署名】\n學生 ___敬上\n\n【日期】\n中華民國___年___月___日\n（或西元日期）'
              }
            ]
          },
          {
            title: '四段引導',
            blocks: [
              {
                type: 'text',
                content: '✏️ 信的內容建議分四段：\n\n第一段：問候老師，喚起共同記憶\n「您還記得我嗎？我是___。您教我的那一年，我最記得___……」\n\n第二段：介紹現在的自學生活\n「現在我在自學，我的每天大概是這樣的……這週我正在學___，讓我覺得有趣的是___……」\n\n第三段：自學和在學校學習，有什麼不一樣？\n「和在學校上課比起來，自學讓我發現___。有時候我也會想念___……」\n\n第四段：結語與祝福\n「希望有機會再和您分享我的學習。祝您___。」'
              },
              {
                type: 'text',
                content: '💡 寫信的小提醒：\n\n• 用「您」稱呼老師（比「你」更有禮貌）\n• 具體描述，不要只說「我覺得很好」，要說「我這週學了圓周長，我發現原來輪子轉一圈的距離就是圓周長……」\n• 真實的感受比完美的句子更重要\n• 字數不限，但正文至少三段'
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
