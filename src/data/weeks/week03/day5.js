// src/data/weeks/week03/day5.js
// W3 Day5：流水的歌（藝術收尾）

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// W3D5: 詞彙總複習
// ==========================================
const readingQuestions = [
  {
    type: 'options',
    question: '「水系」這個詞的意思是什麼?',
    options: [
      '一條主要河流及其所有支流組成的整體系統',
      '只指一條主要河流',
      '台灣的自來水管線系統',
      '雨水收集的設備'
    ],
    answer: 0,
    displayAnswer: '水系是指一條幹流(主要河流)加上所有匯入的支流,形成一個完整的排水網絡。'
  },
  {
    type: 'options',
    question: '「比值」和「比」有什麼不同?',
    options: [
      '「比」是兩個數的關係(A:B),「比值」是前項除以後項的結果(A÷B)',
      '完全相同,沒有差別',
      '「比值」是整數,「比」是分數',
      '「比」只能用在數學,「比值」只能用在生活'
    ],
    answer: 0,
    displayAnswer: '比(如3:4)表示兩數的關係;比值是具體數值(3÷4=0.75),可以用來比較大小。'
  },
  {
    type: 'options',
    question: '「月相」的「相」在這裡是什麼意思?',
    options: [
      '外觀、形貌、樣子',
      '互相、彼此',
      '相片',
      '宰相(古代官職)'
    ],
    answer: 0,
    displayAnswer: '「月相」的「相」是外觀、形貌的意思,指月亮從地球看過去的外觀形狀(圓缺)。'
  },
  {
    type: 'options',
    question: '「仰角」的「仰」在這裡是什麼意思?',
    options: [
      '仰頭向上看',
      '向下看',
      '平視',
      '側著頭看'
    ],
    answer: 0,
    displayAnswer: '「仰」是抬頭向上看的動作,「仰角」就是從水平方向向上看某個目標所形成的角度。'
  },
  {
    type: 'options',
    question: '「農曆」又叫「陰陽合曆」,其中「陰」指的是什麼?',
    options: [
      '月亮(月相)',
      '陰暗的天氣',
      '地面下方',
      '女性'
    ],
    answer: 0,
    displayAnswer: '中國傳統文化中,月亮屬「陰」,太陽屬「陽」。農曆以月相定月份(陰),以節氣定季節(陽)。'
  },
  {
    type: 'options',
    question: '「節氣」的「節」在這裡是什麼意思?',
    options: [
      '節點,一年中氣候轉變的時間點',
      '骨節、關節',
      '節省、節約',
      '節拍(音樂)'
    ],
    answer: 0,
    displayAnswer: '「節氣」的「節」是節點、特定時間點的意思,二十四節氣就是一年中24個氣候變化的關鍵時間點。'
  },
  {
    type: 'options',
    question: '「灌溉」的意思是什麼?',
    options: [
      '把水引到農田或植物根部,以助生長',
      '把多餘的水排掉',
      '種植水生植物',
      '測量河流的水量'
    ],
    answer: 0,
    displayAnswer: '灌溉是人工引水澆灌農田,讓土地獲得充足水分以助農作物生長,是農業文明的重要技術。'
  },
  {
    type: 'options',
    question: '「圳路」中的「圳」字,原本指什麼?',
    options: [
      '人工挖掘的引水溝渠',
      '高山',
      '天然的河流',
      '水庫'
    ],
    answer: 0,
    displayAnswer: '「圳」是人工挖掘的水道、溝渠,用來引水灌溉。嘉南大圳、桃園大圳都是這樣的人工引水系統。'
  }
]

const generateReadingQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(readingQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

// ==========================================
// W3D5: 數學延伸(月相圓面積比例)
// ==========================================
const mathQuestions = [
  {
    type: 'options',
    question: '如果滿月的面積是1個完整圓(面積 = πr²),上弦月(半圓)的面積是滿月的幾倍?',
    options: ['1/2 倍', '1/3 倍', '1/4 倍', '2/3 倍'],
    answer: 0,
    displayAnswer: '上弦月是半圓,面積 = 1/2 × πr²,是滿月面積的 1/2 倍。'
  },
  {
    type: 'options',
    question: '一個圓形的農田,直徑是14公尺,面積大約是多少平方公尺?(π≈3.14)',
    options: ['153.86 平方公尺', '43.96 平方公尺', '615.44 平方公尺', '21.98 平方公尺'],
    answer: 0,
    displayAnswer: '半徑 = 14÷2 = 7公尺,面積 = π × r² = 3.14 × 7² = 3.14 × 49 = 153.86 平方公尺。'
  },
  {
    type: 'options',
    question: '下弦月(半圓)和眉月(大約1/8圓)的面積比是多少?',
    options: ['4:1', '2:1', '8:1', '1:4'],
    answer: 0,
    displayAnswer: '半圓面積是 πr²/2,1/8 圓面積是 πr²/8,比值 = (πr²/2) ÷ (πr²/8) = 4,所以比是 4:1。'
  },
  {
    type: 'options',
    question: '圓的面積公式是 πr²,如果半徑變成原來的2倍,面積變成原來的幾倍?',
    options: ['4倍', '2倍', '8倍', '1/2倍'],
    answer: 0,
    displayAnswer: '半徑變2倍,新面積 = π(2r)² = 4πr²,是原來面積的4倍。面積和半徑的平方成正比。'
  },
  {
    type: 'options',
    question: '一個農民種了一塊圓形的水田,半徑 10 公尺,另一塊正方形旱田邊長 20 公尺。哪塊田面積比較大?(π≈3.14)',
    options: ['正方形旱田較大', '圓形水田較大', '兩塊一樣大', '無法比較'],
    answer: 0,
    displayAnswer: '圓形面積 = 3.14 × 10² = 314 平方公尺;正方形面積 = 20² = 400 平方公尺。正方形旱田面積較大。'
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

export { 
  generateMathQuestion,  
  generateReadingQuestion
}


// ===== 組合成 Day 5 =====
const day5 = {
  id: 'day5',
  name: '第5天',
  icon: '🎵',
  color: '#8B5CF6',
  title: '流水的歌',
  units: [
    // 藝術欣賞：詩與歌
    {
      id: 'w3d5-art',
      name: '藝術欣賞：詩與歌',
      icon: '🎵',
      lesson: {
        title: '羅大佑唱吳晟——詩變成歌，多了什麼？',
        sections: [
          {
            title: '完整重讀《吾鄉印象》',
            blocks: [
              {
                type: 'quote',
                content: '古早的古早的古早以前\n吾鄉的人們就懂得開始向上仰望\n吾鄉的天空傳說就是一片\n無所謂的陰天和無所謂的藍天\n\n古早的古早的古早以前\n自吾鄉左側延綿而近的山影\n就是一大片潑墨畫\n緊緊的貼在吾鄉的人們的臉上\n\n古早的古早的古早以前\n世世代代的祖公\n就在這片長不出榮華富貴長不出奇蹟的土地上\n揮洒鹹鹹的汗水\n播下粒粒的種籽\n繁衍他們那無所謂而認命的子孫',
                author: '吳晟《吾鄉印象》'
              }
            ]
          },
          {
            title: '羅大佑的改編',
            blocks: [
              {
                type: 'text',
                content: '吳晟的詩，被羅大佑譜成了歌。羅大佑是台灣最重要的音樂人之一，他的歌曲常常反映台灣社會的故事。'
              },
              {
                type: 'text',
                content: '🎵 觀賞羅大佑演唱〈吾鄉印象〉\n（影片連結由老師提供，或在 YouTube 搜尋「羅大佑 吾鄉印象」）'
              },
              {
                type: 'text',
                content: '聽完之後，想想：\n① 詩和歌有什麼不同？\n② 音樂加進來之後，你的感受有什麼變化？\n③ 哪一句歌詞（或詩句）最讓你有感覺？為什麼？'
              },
              {
                type: 'video',
                src: 'https://www.youtube.com/embed/emnVukkCc0E',
                title: '羅大佑〈吾鄉印象〉',
                embed: true,
                caption: '羅大佑演唱，吳晟詞。在台灣的土地上流唱的農村記憶。'
              }
            ]
          },
          {
            title: '詩與歌的比較',
            blocks: [
              {
                type: 'text',
                content: '詩（朗讀）：節奏由讀者決定，意象由文字引發，需要自己在腦中建立畫面。'
              },
              {
                type: 'text',
                content: '歌（演唱）：節奏被音樂固定，情感被旋律強化，連「古早的古早的古早以前」這個重複，在歌聲中都有了不同的重量。'
              },
              {
                type: 'text',
                content: '這週的散文「如果我是一條河」，你是在用文字唱歌。文字就是你的旋律，語句的長短就是你的節拍。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 視覺藝術：台灣水鄉畫作
    {
      id: 'w3d5-visual',
      name: '視覺藝術：水面的幾何',
      icon: '🎨',
      lesson: {
        title: '林玉山與台灣農村——水面上的光與幾何',
        sections: [
          {
            title: '林玉山〈蓮池〉',
            blocks: [
              {
                type: 'text',
                content: '林玉山（1907-2004）是台灣最重要的膠彩畫家之一，出身嘉義，他的作品常描繪台灣的農村景色、動植物和水鄉。'
              },
              {
                type: 'text',
                content: '他的代表作〈蓮池〉，描繪嘉義的農村水塘：水面的倒影、荷葉的圓形、蜻蜓的翅膀……這些都是自然界的幾何。'
              },
              {
                type: 'text',
                content: '🎨 觀察藝術中的數學：\n① 水面的倒影是什麼幾何變換？（對稱！）\n② 荷葉是什麼形狀？（圓形，和月相一樣！）\n③ 圓形的荷葉，面積要怎麼算？（πr²，和Day5數學練習一樣！）'
              }
            ]
          },
          {
            title: '水面即鏡——自然界的幾何美學',
            blocks: [
              {
                type: 'text',
                content: '水面靜止時，是最完美的鏡子：樹木的倒影，是軸對稱；圓形的波紋，是同心圓。這些都是數學在自然中最美的展現。'
              },
              {
                type: 'text',
                content: '吳晟詩中的農田，也是幾何的世界：方形的稻田、圓形的埤塘、直線的圳路……農業文明把土地整理成幾何形狀，既是為了效率，也不自覺地創造了美。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 詞彙總複習
    {
      id: 'w3d5-vocabulary',
      name: '詞彙總複習',
      icon: '📚',
      lesson: {
        title: 'W3 核心詞彙整理',
        sections: [
          {
            title: '本週學過的重要詞彙',
            blocks: [
              {
                type: 'text',
                content: '社會地理：\n水系、河川、分水嶺、圳路、灌溉、水利工程、埤塘、三年輪作'
              },
              {
                type: 'text',
                content: '數學：\n比、比值、前項、後項、最簡比、等值比、分數除法、倒數'
              },
              {
                type: 'text',
                content: '科學：\n月相、新月、上弦月、下弦月、滿月、農曆、節氣、仰角（高度角）、週期'
              },
              {
                type: 'text',
                content: '語文：\n散文、第一人稱、感官描寫、比喻、對比、循環結構'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateReadingQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // 數學延伸
    {
      id: 'w3d5-math-ext',
      name: '數學延伸：月相與面積',
      icon: '🌕',
      lesson: {
        title: '月相的圓面積比例——預告 W5',
        sections: [
          {
            title: '圓與月相',
            blocks: [
              {
                type: 'text',
                content: '滿月是一個完整的圓（從地球看），面積 = πr²\n\n如果把月亮看成一個圓，不同月相代表多少面積？\n\n🌕 滿月：100%（πr²）\n🌓 上弦月：50%（半圓，πr²/2）\n🌒 眉月：更小的一片（扇形的概念）'
              },
              {
                type: 'text',
                content: '「扇形」是圓的一部分，W5 會學到圓周長和扇形面積。今天先感受一下：不同月相，就像圓被切成不同大小的扇形。'
              }
            ]
          },
          {
            title: '生活中的圓面積',
            blocks: [
              {
                type: 'text',
                content: '今天練習幾題圓面積計算，為 W5 的扇形面積做準備：\n\n圓面積公式：面積 = π × r²（r = 半徑）\n\n常用近似值：π ≈ 3.14\n\n例：半徑5公尺的圓形農田 → 面積 = 3.14 × 5² = 3.14 × 25 = 78.5 平方公尺'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // 週回顧
    {
      id: 'w3d5-closing',
      name: 'W3 本週回顧',
      icon: '🌊',
      lesson: {
        title: '水文與光陰——本週學了什麼？',
        sections: [
          {
            title: '本週知識地圖',
            blocks: [
              {
                type: 'text',
                content: '🗺️ 社會地理：\n台灣河流短急、中央山脈是分水嶺；嘉南大圳八田與一、三年輪作；農曆陰陽合曆、節氣二十四'
              },
              {
                type: 'text',
                content: '📐 數學：\n比與比值（A：B，比值=A÷B）→ 化簡比（÷最大公因數）→ 分數除法（÷分數=×倒數）'
              },
              {
                type: 'text',
                content: '🔭 科學：\n月相八相（新月到滿月）→ 月相成因（月繞地公轉）→ 高度角觀測（仰角）'
              },
              {
                type: 'text',
                content: '✍️ 語文：\n貫穿文本《吾鄉印象》→ 散文結構（四段）→ 「如果我是一條河」'
              }
            ]
          },
          {
            title: '本週核心連結',
            blocks: [
              {
                type: 'text',
                content: '這週的核心概念是「流動、週期、比例」：\n\n• 河流的流動，讓台灣農業有了可能\n• 月相的週期，讓農民有了時間的依據\n• 比例的計算，讓水資源公平分配\n\n三者合一，就是農業文明的基礎。'
              },
              {
                type: 'quote',
                content: '古早的古早的古早以前，揮洒鹹鹹的汗水，播下粒粒的種籽。',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '下週（W4），我們會進入「比例與尺度」——學習比例尺，把台灣的地圖縮放到手掌中。那也是一種流動：從真實世界到紙上，比例是橋梁。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day5
