// src/data/weeks/week05/day3.js
// W5 Day3：電從哪裡來？
// 貫穿文本：吳念真〈琵琶鼠〉第三段（摘一葉草、九九乘法表對話）

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:日月潭水力發電
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '日月潭水力發電廠大約在哪一年完工?',
    options: ['1934年', '1895年', '1908年', '1950年'],
    answer: 0,
    displayAnswer: '日月潭水力發電廠(日月潭第一發電所)於1934年完工,是當時東亞最大的水力發電廠之一,大幅提升了台灣的電力供應。'
  },
  {
    type: 'options',
    question: '水力發電是利用什麼來產生電能?',
    options: [
      '水從高處落下的動能帶動發電機',
      '水的重量直接壓出電',
      '把水加熱後產生的蒸汽',
      '水中的礦物質'
    ],
    answer: 0,
    displayAnswer: '水力發電是把高處的水引流而下,水流的動能推動水輪機旋轉,水輪機再帶動發電機發電。能量轉換:位能 → 動能 → 電能。'
  },
  {
    type: 'options',
    question: '日月潭水力發電廠的建設,對台灣最大的影響是什麼?',
    options: [
      '大幅提升電力供應,讓工廠、礦場、城市都能用電',
      '讓台灣可以出口電力給日本',
      '只為日月潭附近的居民供電',
      '讓台灣不再需要進口煤炭'
    ],
    answer: 0,
    displayAnswer: '日月潭水電廠建成後,電力輸往台灣各地,支撐了製糖廠、礦場、紡織廠等工業用電,大幅推動了台灣工業化發展。'
  },
  {
    type: 'options',
    question: '水力發電廠通常建在哪種地方?',
    options: [
      '有高低落差、水量充沛的山區河川或水庫旁',
      '海邊平原',
      '沙漠地區',
      '任何地方都可以'
    ],
    answer: 0,
    displayAnswer: '水力發電需要「位能差」,也就是水從高處流下的落差。台灣中央山脈多溪谷,河流短促、落差大,非常適合建設水力發電廠。'
  },
  {
    type: 'options',
    question: '日治時期台灣電力最初的主要用途是什麼?',
    options: [
      '工業(礦場、製糖廠等)和城市照明',
      '只用於日本軍隊',
      '全部用來出口',
      '只用於農業灌溉'
    ],
    answer: 0,
    displayAnswer: '日治時期的電力最初主要供應工業用途(礦場抽水、製糖廠機械)以及城市公共照明,逐漸才普及到一般家庭。'
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

// ==========================================
// 數學:弧長與扇形周長
// ==========================================
const mathQuestions = [
  // 弧長公式理解
  {
    type: 'options',
    question: '扇形的弧長公式是?(C為圓周長,θ為圓心角)',
    options: ['弧長 = C × θ ÷ 360', '弧長 = C × 360 ÷ θ', '弧長 = C + θ', '弧長 = C × θ'],
    answer: 0,
    displayAnswer: '弧長 = 圓周長 × (圓心角 ÷ 360°)。扇形是圓的一部分,圓心角佔360°的幾分之幾,弧長就是圓周長的幾分之幾。'
  },
  {
    type: 'options',
    question: '一個半圓的弧長是圓周長的幾分之幾?',
    options: ['1/2(一半)', '1/4(四分之一)', '2/3(三分之二)', '等於圓周長'],
    answer: 0,
    displayAnswer: '半圓的圓心角是180°,佔360°的一半,所以弧長 = 圓周長 × (180÷360) = 圓周長 × 1/2。'
  },
  // 已知半徑和圓心角,求弧長
  {
    type: 'options',
    question: '一個半徑為 6 公分的圓,取圓心角 60° 的扇形,弧長是多少公分?(π ≈ 3.14)',
    options: ['6.28', '37.68', '3.14', '12.56'],
    answer: 0,
    displayAnswer: '弧長 = 圓周長 × (圓心角 ÷ 360°)\n= 2 × 3.14 × 6 × (60 ÷ 360)\n= 37.68 × 0.1667\n= 6.28 公分'
  },
  {
    type: 'options',
    question: '一個半徑為 10 公分的圓,取圓心角 90° 的扇形,弧長是多少公分?(π ≈ 3.14)',
    options: ['15.7', '62.8', '31.4', '7.85'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 10 × (90 ÷ 360)\n= 62.8 × 0.25\n= 15.7 公分'
  },
  {
    type: 'options',
    question: '一個半徑為 15 公分的圓,取圓心角 120° 的扇形,弧長是多少公分?(π ≈ 3.14)',
    options: ['31.4', '94.2', '47.1', '15.7'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 15 × (120 ÷ 360)\n= 94.2 × 0.3333\n= 31.4 公分'
  },
  {
    type: 'options',
    question: '一個半徑為 6 公分的圓,取圓心角 180° 的扇形,弧長是多少公分?(π ≈ 3.14)',
    options: ['18.84', '37.68', '9.42', '6.28'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 6 × (180 ÷ 360)\n= 37.68 × 0.5\n= 18.84 公分'
  },
  // 扇形周長(弧長 + 兩條半徑)
  {
    type: 'options',
    question: '一個半徑為 5 公分、圓心角為 90° 的扇形,它的周長(弧長 + 兩條半徑)是多少公分?(π ≈ 3.14)',
    options: ['17.85', '7.85', '12.85', '22.85'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 5 × 90 ÷ 360 = 7.85 公分\n扇形周長 = 弧長 + 半徑 × 2 = 7.85 + 5 × 2 = 7.85 + 10 = 17.85 公分'
  },
  {
    type: 'options',
    question: '一個半徑為 8 公分、圓心角為 90° 的扇形,它的周長(弧長 + 兩條半徑)是多少公分?(π ≈ 3.14)',
    options: ['28.56', '12.56', '20.56', '36.56'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 8 × 90 ÷ 360 = 12.56 公分\n扇形周長 = 12.56 + 8 × 2 = 12.56 + 16 = 28.56 公分'
  },
  {
    type: 'options',
    question: '一個半徑為 10 公分、圓心角為 120° 的扇形,它的周長(弧長 + 兩條半徑)是多少公分?(π ≈ 3.14)',
    options: ['40.93', '20.93', '30.93', '50.93'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 10 × 120 ÷ 360 = 20.93 公分\n扇形周長 = 20.93 + 10 × 2 = 20.93 + 20 = 40.93 公分'
  },
  {
    type: 'options',
    question: '一個半徑為 10 公分、圓心角為 180° 的扇形,它的周長(弧長 + 兩條半徑)是多少公分?(π ≈ 3.14)',
    options: ['51.4', '31.4', '41.4', '61.4'],
    answer: 0,
    displayAnswer: '弧長 = 2 × 3.14 × 10 × 180 ÷ 360 = 31.4 公分\n扇形周長 = 31.4 + 10 × 2 = 31.4 + 20 = 51.4 公分'
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
// 科學:滑輪
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '定滑輪(固定不動的滑輪)的主要作用是?',
    options: [
      '改變施力的方向(不省力,但讓施力方向更方便)',
      '省力一半',
      '省力四分之三',
      '讓力量增加兩倍'
    ],
    answer: 0,
    displayAnswer: '定滑輪不省力,拉繩子的力和重物的重量一樣大,但可以改變施力方向。例如:升旗桿的滑輪讓你往下拉,旗子就往上升。'
  },
  {
    type: 'options',
    question: '動滑輪(會移動的滑輪)的主要作用是?',
    options: [
      '省力一半(用一半的力拉起同樣重的重物)',
      '讓力增加兩倍',
      '改變施力方向',
      '讓物體移動更快'
    ],
    answer: 0,
    displayAnswer: '動滑輪可以省力一半,因為重物由兩段繩子承受,每段繩子只需承受一半的重量。但代價是繩子要拉兩倍長的距離。'
  },
  {
    type: 'options',
    question: '升旗桿上的滑輪是哪種滑輪?',
    options: ['定滑輪', '動滑輪', '滑輪組', '不是滑輪'],
    answer: 0,
    displayAnswer: '升旗桿頂端的滑輪是固定不動的定滑輪。它不省力,但讓你可以站在地面往下拉繩子,讓旗子往上升——改變了施力方向。'
  },
  {
    type: 'options',
    question: '建築工地用吊車搬運重物,通常使用的是哪種裝置?',
    options: [
      '滑輪組(定滑輪和動滑輪的組合)',
      '只用一個定滑輪',
      '只用一個動滑輪',
      '只用槓桿'
    ],
    answer: 0,
    displayAnswer: '滑輪組結合了定滑輪(改向)和動滑輪(省力),可以達到更大的省力效果。滑輪越多,省力越多,但繩子要拉越長的距離。'
  },
  {
    type: 'options',
    question: '礦坑裡用來把礦石從坑底「提升」到地面的設備,主要利用什麼原理?',
    options: [
      '滑輪組——用較小的力把沉重的礦石籃提升到地面',
      '槓桿——用長棍子把礦石撬起來',
      '輪軸——用大輪轉動把礦石拉上來',
      '以上三種都不對'
    ],
    answer: 0,
    displayAnswer: '礦坑提升系統通常使用大型捲揚機(滑輪組原理),用蒸汽機或電動機驅動,能把沉重的礦石籃從深達數百公尺的坑底提升到地面。'
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

// ==========================================
// 語文詞彙:能源/電力用語
// ==========================================
const vocabQuestions = [
  {
    type: 'options',
    question: '「水力發電」的「水力」是指?',
    options: [
      '水流動的能量(動能),可以推動機械',
      '水的重量',
      '水裡面含有電',
      '水蒸發產生的能量'
    ],
    answer: 0,
    displayAnswer: '水力是指水流動或從高處落下時所具有的能量。水力發電就是把這種能量轉換成電能。'
  },
  {
    type: 'options',
    question: '文章中老鼠子說「九八七十二,九九八十一!」,為什麼在「九九八十一」的時候「刻意把聲音揚高」?',
    options: [
      '九九乘法表的最後一句,有一種「終於唸完了」的成就感,聲音自然揚高',
      '因為81是很大的數字',
      '因為他背錯了,所以緊張',
      '這只是吳念真的寫作習慣,沒有特別意義'
    ],
    answer: 0,
    displayAnswer: '九九乘法表的最後一句「九九八十一」是終點,背完有完成的喜悅。老鼠子沒上過學卻把乘法表背得比誰都熟,用揚高的語氣表達那種自豪和頑皮。'
  },
  {
    type: 'options',
    question: '「能源」和「能量」有什麼不同?',
    options: [
      '能源是可以提供能量的資源(如水、煤、石油),能量是做功的能力',
      '兩個詞意思完全相同',
      '能源比能量大',
      '能量比能源重要'
    ],
    answer: 0,
    displayAnswer: '能源(energy source)是指能提供能量的物質或自然現象,如水力、煤炭、太陽能。能量(energy)是做功的能力本身。水是能源,水流的動能是能量。'
  }
]

const generateVocabQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(vocabQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateSocialQuestion, generateMathQuestion, generateScienceQuestion, generateVocabQuestion }

// ===== Day 3 主體 =====
const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '💡',
  color: '#E65100',
  title: '電從哪裡來？',

  units: [
    {
      id: 'w5d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈琵琶鼠〉第三段',
        sections: [
          {
            title: '故事最動人的一幕',
            blocks: [
              {
                type: 'quote',
                content: '老鼠子一邊走一邊唸，念得比我還俐落，當念到「九九八十一」的時候，還學我們的語氣把聲音刻意揚高。\n\n「你們念這個要做什麼用？為什麼沒唸對的老師都會打？」他問。\n\n我真的不知道該怎麼回答，因為我也不知道背這個要做什麼，只好說：「考試要用。」\n\n「哦。」他忽然又回頭問我說：「那我也可以去考試了？」',
                author: '吳念真〈琵琶鼠〉'
              },
              {
                type: 'text',
                content: '📍 想一想：\n\n老鼠子沒有上過一天學，卻把九九乘法表背得比誰都熟——他是怎麼學的？\n\n「聽久了就會了！」他說。\n\n學習一定要在學校才能發生嗎？今天你正在自學，和老鼠子有一點像。你覺得你們最大的不同是什麼？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w5d3-social',
      name: '社會',
      icon: '⚡',
      lesson: {
        title: '日月潭水力發電廠：電力的誕生',
        sections: [
          {
            title: '台灣電力的起源',
            blocks: [
              {
                type: 'text',
                content: '1903年，台灣第一座發電廠在台北啟用，那是火力發電廠（燒煤產生蒸汽發電）。\n\n但台灣最重要的電力建設，是1934年完工的日月潭水力發電廠。它利用中央山脈的高低落差，讓水從高山流向低地，推動巨大的水輪機發電。'
              }
            ]
          },
          {
            title: '為什麼在日月潭建電廠？',
            blocks: [
              {
                type: 'text',
                content: '📍 地形優勢\n\n日月潭位於台灣中部山區，海拔約748公尺。工程師引武界水（濁水溪上游）注入日月潭，再讓水從日月潭奔瀉而下，落差高達300公尺，產生巨大的動能。\n\n這個設計非常聰明：把天然地形當成「天然水塔」，不需要額外建造大壩就能利用巨大的水位差。'
              },
              {
                type: 'text',
                content: '⚡ 影響\n\n日月潭電廠完工後，電力輸送到全台各地：\n• 礦場的抽水機、通風機和提升機都能用電驅動\n• 製糖廠從蒸汽機改用電動機\n• 城市的街燈和家庭照明更普及\n\n台灣的工業化腳步因此大幅加快。'
              }
            ]
          },
          {
            title: '電力與礦坑',
            blocks: [
              {
                type: 'text',
                content: '有了電力，礦坑的工作變得更安全：\n\n• 電動抽水機把礦坑裡的地下水抽出來（礦坑最大的危險之一就是淹水）\n• 電燈讓工人在坑道裡有更好的照明（取代危險的蠟燭和油燈）\n• 電動提升機把礦石和人員送上送下\n\n〈琵琶鼠〉的礦工村，正是在這個電力化的過渡時期存在的。'
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
      id: 'w5d3-math',
      name: '數學',
      icon: '🥧',
      lesson: {
        title: '弧長與扇形周長',
        sections: [
          {
            title: '圓的「一片」：扇形',
            blocks: [
              {
                type: 'text',
                content: '把圓切成一片，就像切披薩，每一片就叫「扇形」。\n\n扇形有三個邊：\n• 一條弧（彎的那一邊）\n• 兩條半徑（直的兩邊）\n\n今天學兩件事：怎麼算弧長，以及怎麼算扇形的周長。'
              }
            ]
          },
          {
            title: '弧長公式',
            blocks: [
              {
                type: 'text',
                content: '弧長就是「那條弧有多長」。\n\n想法很直觀：\n圓心角如果是 360°，弧長就是整個圓周長\n圓心角如果是 180°，弧長就是一半圓周長\n圓心角如果是 90°，弧長就是四分之一圓周長\n\n所以：\n📐 弧長 = 圓周長 × (圓心角 ÷ 360°)\n= 2πr × (θ ÷ 360°)'
              },
              {
                type: 'text',
                content: '✏️ 例題：\n半徑 10 公分，圓心角 90° 的扇形，弧長是多少？\n\n弧長 = 2 × 3.14 × 10 × (90 ÷ 360)\n= 62.8 × 0.25\n= 15.7 公分'
              }
            ]
          },
          {
            title: '扇形周長',
            blocks: [
              {
                type: 'text',
                content: '扇形的周長要把三條邊都加起來：\n\n📐 扇形周長 = 弧長 + 半徑 + 半徑\n= 弧長 + 2r\n\n✏️ 例題（接上題）：\n弧長 = 15.7 公分\n扇形周長 = 15.7 + 10 + 10 = 35.7 公分\n\n💡 容易犯的錯誤：只算弧長就以為是周長！記得要加上兩條半徑。'
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
      id: 'w5d3-science',
      name: '科學',
      icon: '🪝',
      lesson: {
        title: '滑輪：改向與省力',
        sections: [
          {
            title: '什麼是滑輪？',
            blocks: [
              {
                type: 'text',
                content: '滑輪是一個邊緣有凹槽的圓盤，讓繩子可以在上面滑動。它是最簡單的機械之一，人類使用滑輪已有幾千年歷史。\n\n滑輪有兩種基本類型，功能不同：\n• 定滑輪：固定在高處，不移動\n• 動滑輪：掛在物體上，跟著物體一起移動'
              }
            ]
          },
          {
            title: '定滑輪：改變方向',
            blocks: [
              {
                type: 'text',
                content: '🚩 升旗桿的滑輪就是定滑輪\n\n你站在地面，往下拉繩子，旗子就往上升。\n\n定滑輪的特點：\n✅ 改變施力方向（往下拉 → 重物往上）\n❌ 不省力（你用多少力，重物就需要多少力）\n\n但「改變方向」很重要！如果要把重物送到高處，定滑輪讓你可以站在地面施力，不用爬上去。'
              }
            ]
          },
          {
            title: '動滑輪：省力一半',
            blocks: [
              {
                type: 'text',
                content: '🏗️ 工地吊車用的滑輪組包含動滑輪\n\n動滑輪的特點：\n✅ 省力一半（只需一半的力就能拉起重物）\n❌ 需要拉兩倍長的繩子\n\n為什麼能省力一半？因為重物由兩段繩子承受，每段只需承受一半的重量。\n\n礦坑裡的提升機也利用了動滑輪原理，把沉重的礦石籃從深處提升到地面。'
              }
            ]
          },
          {
            title: '三種簡單機械總整理',
            blocks: [
              {
                type: 'text',
                content: '這三天我們學了三種簡單機械：\n\n⚖️ 槓桿：支點、施力點、抗力點——以蹺蹺板為例\n🔩 輪軸：大輪帶小軸——以方向盤為例\n🪝 滑輪：定滑輪（改向）、動滑輪（省力）——以升旗桿為例\n\n它們有一個共同原理：省力必須付出相應的代價（更長的距離或更複雜的操作）。這是物理學的「能量守恆」概念的體現。'
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
      id: 'w5d3-vocab',
      name: '語文',
      icon: '✍️',
      lesson: {
        title: '詞彙：能源與電力用語',
        sections: [
          {
            title: '本日關鍵詞彙',
            blocks: [
              {
                type: 'text',
                content: '⚡ 能源詞彙\n\n• 水力（shuǐ lì）：水流動的能量\n• 發電機：把動能轉換成電能的機器\n• 電力普及：讓電能廣泛地被一般民眾使用\n• 落差：兩個地方的高度差（高低落差越大，水力越強）'
              },
              {
                type: 'text',
                content: '🪝 機械詞彙\n\n• 定滑輪：固定不動的滑輪，改變施力方向\n• 動滑輪：會跟著重物移動的滑輪，省力一半\n• 滑輪組：定滑輪和動滑輪的組合\n• 省力裝置：讓人用較小的力完成工作的機械'
              },
              {
                type: 'text',
                content: '📖 文本延伸思考\n\n老鼠子問：「那我也可以去考試了？」\n\n這句話裡有一種什麼樣的情感？是驕傲？是渴望？是諷刺？還是純粹的好奇？\n\n吳念真說他「認真地等著我回答」，然後又笑笑說「我講好玩的啦」——你覺得他真的是在講好玩的嗎？'
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
      id: 'w5d3-review',
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
                content: '今天學到了：\n\n⚡ 日月潭水力發電廠（1934）：利用山區地形落差發電，改變了台灣的工業面貌\n\n🥧 弧長與扇形周長：弧長 = 2πr × (圓心角÷360°)；扇形周長 = 弧長 + 2r\n\n🪝 滑輪：定滑輪改向、動滑輪省力——礦坑裡少不了它'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n動筆日！〈琵琶鼠〉最沉重的一段——老鼠的離開。然後你要寫一封信，不是給老鼠子，而是給你過去五年認識的老師，說說你現在自學的生活。'
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
