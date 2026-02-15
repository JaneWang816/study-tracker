// src/data/weeks/week01/day3.js
// 第1週 - 第三天：我們從哪裡來？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題生成器
// ==========================================

// 【數學】比例與距離估算題庫
// 六年級已學:比例、分數、乘除,尚未正式學速率(W7 才學)
// 此處以「等比例縮放」和「距離估算」為主,輕觸比的概念
const mathQuestions = [
  // ── 等比例概念 ──
  {
    type: 'options',
    question: '地圖比例尺為 1:1,000,000(一百萬分之一),圖上 3 公分代表實際幾公里？',
    options: ['30 公里', '3 公里', '300 公里', '3,000 公里'],
    answer: 0,
    displayAnswer: '30 公里(3 × 100,000 公分 = 300 萬公分 = 30 公里)'
  },
  {
    type: 'options',
    question: '台灣到菲律賓大約 350 公里,換成公尺是幾公尺？',
    options: ['350,000 公尺', '35,000 公尺', '3,500,000 公尺', '35,000,000 公尺'],
    answer: 0,
    displayAnswer: '350,000 公尺(350 × 1,000 = 350,000)'
  },
  {
    type: 'options',
    question: '南島民族的船隻,一天大約航行 100 公里。從台灣到菲律賓約 350 公里,大約需要幾天？',
    options: ['3 到 4 天', '2 天', '10 天', '35 天'],
    answer: 0,
    displayAnswer: '3 到 4 天(350 ÷ 100 ≈ 3.5 天)'
  },
  {
    type: 'options',
    question: '地圖比例尺 1:500,000,圖上 6 公分 = 實際幾公里？',
    options: ['30 公里', '25 公里', '35 公里', '60 公里'],
    answer: 0,
    displayAnswer: '30 公里(6 × 500,000 = 3,000,000 公分 = 30 公里)'
  },
  // ── 比的概念(預備 W3 正式學習) ──
  {
    type: 'options',
    question: '台灣面積約 36,000 平方公里,菲律賓面積約 300,000 平方公里。菲律賓大約是台灣的幾倍？',
    options: ['約 8 倍', '約 5 倍', '約 10 倍', '約 30 倍'],
    answer: 0,
    displayAnswer: '約 8 倍(300,000 ÷ 36,000 ≈ 8.3)'
  },
  {
    type: 'options',
    question: '南島民族的獨木舟長約 10 公尺,現代渡輪長約 200 公尺。渡輪大約是獨木舟的幾倍長？',
    options: ['20 倍', '10 倍', '100 倍', '200 倍'],
    answer: 0,
    displayAnswer: '20 倍(200 ÷ 10 = 20)'
  },
  {
    type: 'options',
    question: '3,000 年前南島民族開始向南遷徙,現在(2024年)距離那時是幾年？',
    options: ['約 3,000 年', '約 1,000 年', '約 2,000 年', '約 4,000 年'],
    answer: 0,
    displayAnswer: '約 3,000 年(2024 - (-1000) ≈ 3,024 年)'
  },
  {
    type: 'options',
    question: '南島語系目前有約 1,200 種語言,台灣原住民語言有 16 族語言。台灣原住民語言佔南島語系的比例最接近哪個分數？',
    options: ['約 1/75', '約 1/10', '約 1/50', '約 1/100'],
    answer: 0,
    displayAnswer: '約 1/75(16 ÷ 1,200 ≈ 0.013 ≈ 1/75)'
  },
  // ── 距離與方向 ──
  {
    type: 'options',
    question: '從台灣往南飛 350 公里可以到菲律賓,往西飛約 180 公里可以到中國。往哪個方向距離比較近？',
    options: ['往西到中國', '往南到菲律賓', '一樣近', '無法比較'],
    answer: 0,
    displayAnswer: '往西到中國(180 公里 < 350 公里)'
  },
  {
    type: 'options',
    question: '台灣到夏威夷大約 8,000 公里,台灣到日本大約 2,000 公里。台灣到夏威夷是到日本距離的幾倍？',
    options: ['4 倍', '3 倍', '5 倍', '6 倍'],
    answer: 0,
    displayAnswer: '4 倍(8,000 ÷ 2,000 = 4)'
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

// 【社會】南島民族遷徙練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '根據目前學術研究,南島語系的「起源地」最可能在哪裡？',
    options: ['台灣', '菲律賓', '印尼', '馬來西亞'],
    answer: 0,
    displayAnswer: '台灣(「出台灣說」Out of Taiwan hypothesis)'
  },
  {
    type: 'options',
    question: '南島語系民族分布的範圍,東西跨度最接近哪個範圍？',
    options: [
      '馬達加斯加(非洲東岸)到夏威夷和紐西蘭',
      '台灣到日本',
      '印度到澳洲',
      '中國到印尼'
    ],
    answer: 0,
    displayAnswer: '馬達加斯加到夏威夷和紐西蘭(跨越大半個地球)'
  },
  {
    type: 'options',
    question: '「出台灣說」的主要依據是什麼？',
    options: [
      '台灣的南島語言多樣性最高,是語言擴散的起點',
      '台灣人長相最接近波里尼西亞人',
      '台灣考古遺址最多',
      '台灣最靠近其他南島語系國家'
    ],
    answer: 0,
    displayAnswer: '台灣的南島語言多樣性最高(16族語言),符合語言擴散的規律'
  },
  {
    type: 'options',
    question: '達悟族的祖先從哪裡遷徙到蘭嶼？',
    options: ['菲律賓巴丹島', '台灣本島', '馬來西亞', '印尼'],
    answer: 0,
    displayAnswer: '菲律賓巴丹島(與蘭嶼相距約 100 公里)'
  },
  {
    type: 'options',
    question: '南島民族傳統航海時,用什麼方法在大海上辨別方向？',
    options: [
      '觀察星星、海流、風向和鳥類',
      '帶著指南針',
      '用 GPS 導航',
      '跟著其他船隻'
    ],
    answer: 0,
    displayAnswer: '觀察星星、海流、風向和鳥類(自然導航)'
  },
  {
    type: 'options',
    question: '南島語系大約在幾年前開始從台灣向外擴散？',
    options: ['約 3,000 年前', '約 500 年前', '約 1,000 年前', '約 50,000 年前'],
    answer: 0,
    displayAnswer: '約 3,000 年前(青銅器時代末期)'
  },
  {
    type: 'options',
    question: '目前台灣官方認定的原住民族共有幾族？',
    options: ['16 族', '10 族', '14 族', '20 族'],
    answer: 0,
    displayAnswer: '16 族'
  },
  {
    type: 'options',
    question: '達悟族人與菲律賓巴丹島的民族有相似的文化特徵,這說明了什麼？',
    options: [
      '南島民族在大遷徙中保持了文化聯繫',
      '達悟族人去過菲律賓旅遊',
      '所有島嶼上的人都長得一樣',
      '台灣和菲律賓很久以前連在一起'
    ],
    answer: 0,
    displayAnswer: '南島民族在大遷徙中保持了文化聯繫'
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

// 【科學】星象觀測與自然導航題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '北極星為什麼可以用來辨別方向？',
    options: [
      '北極星的位置幾乎正好在北天極,看到北極星就知道北方',
      '北極星是最亮的星星',
      '北極星顏色特別,容易辨認',
      '北極星只在白天出現'
    ],
    answer: 0,
    displayAnswer: '北極星幾乎正好在北天極,無論地球怎麼自轉,它的位置幾乎不動'
  },
  {
    type: 'options',
    question: '在南半球航行,無法看到北極星,南島民族用什麼星座辨別南方？',
    options: ['南十字星座', '大熊座', '獵戶座', '天鵝座'],
    answer: 0,
    displayAnswer: '南十字星座(Southern Cross),指向南天極'
  },
  {
    type: 'options',
    question: '海浪的方向可以幫助航海者判斷位置,主要是因為？',
    options: [
      '大洋中的海浪方向受穩定的洋流和風向影響,有規律可循',
      '海浪是隨機的,所以有規律就代表靠近陸地',
      '海浪越大代表越靠近島嶼',
      '海浪的顏色可以指示方向'
    ],
    answer: 0,
    displayAnswer: '大洋中的海浪方向受穩定的洋流和風向影響,有規律可循'
  },
  {
    type: 'options',
    question: '候鳥每年定期遷徙,南島民族觀察候鳥可以得到什麼導航資訊？',
    options: [
      '大致的季節方向——候鳥飛往的方向通常是溫暖的陸地',
      '附近是否有食物',
      '天氣是否會下雨',
      '海水深度'
    ],
    answer: 0,
    displayAnswer: '候鳥飛往的方向通常指向有陸地的地方'
  },
  {
    type: 'options',
    question: '地球圍繞太陽公轉,造成不同季節在不同位置看到不同的星座。南島航海者用星座判斷季節,這屬於哪種觀察類型？',
    options: [
      '規律性觀察——長期記錄,找出週期性變化',
      '感官觀察',
      '化學觀察',
      '假設推測'
    ],
    answer: 0,
    displayAnswer: '規律性觀察——長期記錄找出週期性變化'
  },
  {
    type: 'options',
    question: '今天台灣能觀測到「南十字星」嗎？',
    options: [
      '不行,台灣在北半球,南十字星不可見',
      '可以,全年都看得到',
      '只有夏天晚上可以看到',
      '需要天文望遠鏡才能看到'
    ],
    answer: 0,
    displayAnswer: '台灣位於北緯 22-25°,南十字星在地平線以下,基本上看不見'
  },
  {
    type: 'options',
    question: '「天然羅盤」的概念是指用自然現象來確定方位,下列何者不是天然羅盤？',
    options: ['指南針', '北極星', '太陽東升西落', '南十字星'],
    answer: 0,
    displayAnswer: '指南針是人造工具,不是天然現象'
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

// 【語文】詞彙與閱讀理解練習
const chineseQuestions = [
  {
    type: 'options',
    question: '「遷徙」這個詞語,下列哪個說明最正確？',
    options: [
      '一個族群從一個地方移動到另一個地方長期定居',
      '短暫的旅遊',
      '在原地來回移動',
      '逃難或躲避災難'
    ],
    answer: 0,
    displayAnswer: '一個族群從一個地方移動到另一個地方長期定居'
  },
  {
    type: 'options',
    question: '「語系」是指什麼？',
    options: [
      '有共同祖先、彼此相關聯的一群語言',
      '同一個國家的語言',
      '只有少數人說的語言',
      '用相同文字書寫的語言'
    ],
    answer: 0,
    displayAnswer: '有共同祖先、彼此相關聯的一群語言'
  },
  {
    type: 'options',
    question: '「多樣性」在生物或語言學中,通常代表什麼意義？',
    options: [
      '種類豐富、差異大',
      '數量多',
      '品質高',
      '歷史悠久'
    ],
    answer: 0,
    displayAnswer: '種類豐富、差異大'
  },
  {
    type: 'options',
    question: '「起源地」的「起源」是什麼意思？',
    options: [
      '事物的開端、最初來源',
      '最終目的地',
      '最重要的地點',
      '人口最多的地方'
    ],
    answer: 0,
    displayAnswer: '事物的開端、最初來源'
  },
  {
    type: 'options',
    question: '「自然導航」最接近下面哪個描述？',
    options: [
      '利用天文、地理、生態等自然現象來判斷方向和位置',
      '跟著別人走',
      '用地圖和指南針導航',
      '憑直覺猜測方向'
    ],
    answer: 0,
    displayAnswer: '利用天文、地理、生態等自然現象來判斷方向和位置'
  },
  {
    type: 'options',
    question: '說明文的目的主要是？',
    options: [
      '清楚說明一件事物的特性、過程或原理',
      '表達作者的情感',
      '說服讀者同意自己的意見',
      '描述一個故事的情節'
    ],
    answer: 0,
    displayAnswer: '清楚說明一件事物的特性、過程或原理'
  },
  {
    type: 'options',
    question: '寫一篇關於「南島民族遷徙路線」的說明文,開頭段落最應該先寫什麼？',
    options: [
      '先點出主題:什麼是南島民族？他們為什麼要遷徙？',
      '直接列出所有的遷徙路線',
      '先描寫大海很美麗',
      '先說明作者的個人感受'
    ],
    answer: 0,
    displayAnswer: '先點出主題,讓讀者明白文章要說什麼'
  }
]

const generateChineseQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(chineseQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateMathQuestion, generateSocialQuestion, generateScienceQuestion, generateChineseQuestion }

// ==========================================
// Day 3 資料
// ==========================================

const day3 = {
  id: 'day3',
  name: '第三天',
  icon: '⛵',
  color: '#2ECC71',
  title: '我們從哪裡來？',

  units: [

    // ==========================================
    // 開場：繼續讀《大海浮夢》
    // ==========================================
    {
      id: 'opening-day3',
      name: '開場閱讀',
      icon: '🌊',
      lesson: {
        title: '《大海浮夢》——第三段',
        sections: [
          {
            title: '祖先的船',
            blocks: [
              {
                type: 'text',
                content: '前兩天，我們看了達悟族人認識海洋的方式。今天，我們往更遠的地方看——\n\n他們的祖先，是怎麼來到蘭嶼的？'
              },
              {
                type: 'text',
                content: '我祖父說，很久以前，我們的老祖先站在一個叫做巴丹的島上，望著北方那片海。\n\n「那片海的那頭，有更多的魚，更多的土地。」\n\n他們造了船，帶著種子、帶著火種、帶著記憶，向北航去。\n\n海上的星星帶他們走，浪的方向帶他們走。\n三天三夜之後，他們看見了一座島。\n那就是現在的蘭嶼。',
                author: '改寫自夏曼・藍波安作品精神'
              }
            ]
          },
          {
            title: '今天的問題',
            blocks: [
              {
                type: 'text',
                content: '三千年前，南島民族如何在沒有 GPS、沒有指南針的情況下，航越大洋、找到新的島嶼？\n\n今天的三個課，分別從三個角度回答這個問題：\n• 數學：距離有多遠？要走多久？\n• 科學：他們用什麼方法導航？\n• 社會：這段遷徙從哪裡開始？到了哪裡？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：數學 — 距離與比例估算
    // ==========================================
    {
      id: 'math-distance-ratio',
      name: '數學：距離與比例',
      icon: '📏',
      lesson: {
        title: '遷徙有多遠？——距離與比例估算',
        sections: [
          {
            title: '地圖上的距離 vs 實際距離',
            blocks: [
              {
                type: 'text',
                content: '地圖把真實世界縮小了。\n\n比例尺 1:1,000,000 表示：\n圖上的 1 公分 = 實際的 1,000,000 公分\n\n換算：\n1,000,000 公分 = 10,000 公尺 = 10 公里\n\n所以：\n圖上 1 公分 = 實際 10 公里\n圖上 3 公分 = 實際 30 公里\n\n記法：比例尺分母有幾個零，就大約是多少公里（當分子是 1）\n1:100,000 → 圖上 1 cm = 1 km\n1:1,000,000 → 圖上 1 cm = 10 km'
              }
            ]
          },
          {
            title: '遷徙路線的距離',
            blocks: [
              {
                type: 'text',
                content: '讓我們用數字感受南島民族的遷徙規模：\n\n台灣 → 菲律賓（巴丹島）：約 350 公里\n台灣 → 夏威夷：約 8,000 公里\n台灣 → 紐西蘭：約 9,000 公里\n台灣 → 馬達加斯加（非洲東岸）：約 10,000 公里\n\n最遠的遷徙（台灣到馬達加斯加）：\n差不多等於台灣到英國的距離！\n\n傳統獨木舟每天航行約 100～150 公里，\n所以到菲律賓大約 3 天，到夏威夷大約 60 天。'
              }
            ]
          },
          {
            title: '比例的應用',
            blocks: [
              {
                type: 'text',
                content: '「比例」讓我們能比較大小不同的數量：\n\n例 1：台灣面積約 36,000 平方公里\n       菲律賓面積約 300,000 平方公里\n       比例：300,000 ÷ 36,000 ≈ 8.3\n       → 菲律賓大約是台灣的 8 倍\n\n例 2：南島語系共約 1,200 種語言\n       其中台灣原住民語言 16 種\n       比例：16 ÷ 1,200 ≈ 1.3%\n       → 台灣雖小，卻保存了南島語系 1% 以上的語言！\n\n比例幫助我們理解「相對的大小」，\n而不只是看絕對的數字。'
              }
            ]
          },
          {
            title: '今天試試看',
            blocks: [
              {
                type: 'text',
                content: '用比例的眼光看看你的生活：\n\n你的身高大約是你所在城市到台北距離（公里）的幾分之幾？\n（例：你 160 公分高，台北距離 200 公里 = 200,000 公尺，\n  你的高度是那個距離的 0.00000008，非常渺小）\n\n但是——\n南島民族就用這樣「渺小」的身體，\n航越了幾萬公里的大洋。\n\n比例說的不只是數字，也是一種視角。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          }
          const clean = (s) => String(s).replace(/\s/g, '').replace(/[,，。.]/g, '')
          return clean(userAnswer) === clean(question.answer)
        }
      }
    },

    // ==========================================
    // 單元二：社會 — 南島民族大遷徙
    // ==========================================
    {
      id: 'social-austronesian',
      name: '社會：南島民族遷徙',
      icon: '🗺️',
      lesson: {
        title: '從台灣出發的大遷徙',
        sections: [
          {
            title: '誰是南島語系民族？',
            blocks: [
              {
                type: 'text',
                content: '「南島語系」是目前世界上分布最廣的語系之一：\n\n範圍：從東非（馬達加斯加）到太平洋（夏威夷、紐西蘭）\n人口：約 3 億 8 千萬人\n語言：超過 1,200 種\n\n包含的民族：\n• 台灣原住民（16 族）\n• 菲律賓原住民\n• 印尼、馬來西亞人\n• 夏威夷人、毛利人（紐西蘭）\n• 馬達加斯加人\n\n他們看起來相貌各異、文化不同，\n卻共享著同一批遠古祖先的記憶。'
              }
            ]
          },
          {
            title: '「出台灣說」——台灣是起源地',
            blocks: [
              {
                type: 'text',
                content: '語言學家的發現：\n\n台灣的南島語言多樣性最高——光是台灣的 16 族語言，\n就展現出南島語系最多的古老特徵。\n\n根據「語言樹」理論：\n一個語言在某個地方存在越久，就會分裂成越多分支。\n台灣有最多分支，代表南島語系在台灣「根最深」。\n\n就像一棵大樹，台灣是樹根，\n其他的南島語系民族是從這裡向外擴散的枝幹。\n\n⚠️ 這是一個學術假說，目前有廣泛支持，但仍有學者討論中。'
              }
            ]
          },
          {
            title: '遷徙的路線',
            blocks: [
              {
                type: 'text',
                content: '根據考古和語言學研究，遷徙大致路線：\n\n第一波（約 3,000 年前）：\n台灣 → 菲律賓 → 印尼 → 馬來西亞\n\n第二波（約 2,000 年前）：\n繼續向東：進入太平洋\n→ 密克羅尼西亞 → 美拉尼西亞 → 波里尼西亞\n→ 最終到達夏威夷（約 1,500 年前）\n  和紐西蘭（約 700 年前）\n\n向西波（約 1,500 年前）：\n馬來西亞 → 跨越印度洋 → 馬達加斯加（非洲東岸）\n\n這是人類歷史上最壯闊的海洋遷徙之一。'
              }
            ]
          },
          {
            title: '台灣原住民與這段歷史',
            blocks: [
              {
                type: 'text',
                content: '台灣原住民 16 族，是留守「起源地」的族群：\n\n阿美族、泰雅族、排灣族、布農族、魯凱族、\n鄒族、賽夏族、雅美族（達悟族）、邵族、噶瑪蘭族、\n太魯閣族、撒奇萊雅族、賽德克族、拉阿魯哇族、\n卡那卡那富族、西拉雅族\n\n其中達悟族（蘭嶼）最特別——\n他們的祖先從菲律賓巴丹島遷入，\n是南島民族「回頭」來到台灣的案例，\n保留了最多海洋文化的特徵。\n\n夏曼・藍波安寫的故事，\n就是這段長達三千年歷史的一小片記憶。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateSocialQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 星象與自然導航
    // ==========================================
    {
      id: 'science-navigation',
      name: '科學：自然導航',
      icon: '⭐',
      lesson: {
        title: '沒有指南針，如何橫越大洋？',
        sections: [
          {
            title: '星星作為導航工具',
            blocks: [
              {
                type: 'text',
                content: '南島民族的祖先在大洋上，靠什麼知道「北方在哪裡」？\n\n答案：北極星。\n\n北極星（Polaris）的特點：\n• 幾乎正好位在北天極的方向\n• 地球自轉，所有星星看起來都在轉，\n  唯獨北極星幾乎不動\n• 看到北極星，就知道北方在哪裡\n• 北極星的仰角，大約等於當地的緯度！\n  （在台灣約 23°，在日本東京約 36°）\n\n在南半球（菲律賓以南），北極星消失，\n改用「南十字星座」指向南方。'
              }
            ]
          },
          {
            title: '其他的天然導航工具',
            blocks: [
              {
                type: 'text',
                content: '星星只是其中一種方法，熟練的航海者還會觀察：\n\n【海浪方向】\n大洋中的長浪（湧浪）由固定方向而來，\n可以「躺在船底」用身體感覺浪的方向。\n\n【風向】\n季節性的信風，方向相對穩定，\n帆船借助信風航行，也靠信風判斷方向。\n\n【鳥類】\n候鳥遷徙方向有規律。\n海鷗通常不遠離陸地，\n看到海鷗就代表附近有島嶼！\n\n【雲的形狀】\n島嶼上方常有固定的積雲，\n遠遠就能看到「天上的島」。\n\n【海水顏色和溫度】\n深洋是深藍色，淺灘是綠色或棕色。\n洋流交界處水溫不同，魚群聚集。'
              }
            ]
          },
          {
            title: '這是「科學」嗎？',
            blocks: [
              {
                type: 'text',
                content: '回想 Day 1 學的觀察方法：\n觀察 → 比較 → 找規律 → 預測\n\n南島民族的導航知識完全符合這個流程：\n• 長期觀察星象、海浪、鳥類\n• 比較不同季節的差異\n• 找出固定的規律（北極星不動、信風方向）\n• 預測並導航\n\n只是他們的「記錄工具」不是筆記本，\n而是代代相傳的歌謠、儀式和故事。\n\n現代科學說：這叫「傳統生態知識」（TEK），\n是數百年觀察累積的成果，\n在很多方面甚至比現代儀器更精確。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateScienceQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元四：語文 — 說明文寫作準備
    // ==========================================
    {
      id: 'chinese-writing-prep',
      name: '語文：說明文準備',
      icon: '✍️',
      lesson: {
        title: '寫作預備：說明文的結構',
        sections: [
          {
            title: '本週寫作任務',
            blocks: [
              {
                type: 'text',
                content: '本週（W1）的語文任務是：\n\n說明文「我的家鄉定位」\n\n你要用這週學到的知識，\n寫一篇說明你（或你的家鄉）在世界上「哪裡」的說明文。\n\n不只是「地址」，而是：\n• 經度、緯度大約是多少？\n• 位於哪個氣候帶？\n• 鄰近的城市或地標有哪些？\n• 時差幾小時？（和倫敦比）\n• 這個地方有什麼特別的地理意義？'
              }
            ]
          },
          {
            title: '說明文的結構',
            blocks: [
              {
                type: 'text',
                content: '一篇好的說明文，通常有這樣的結構：\n\n【第一段：主題句】\n告訴讀者：「這篇文章要說什麼」\n例：「台北市是台灣的首都，位於台灣北部的盆地中。」\n\n【中間段落：分類說明】\n每段說一個面向，段段有主題句\n例：\n段 2 → 地理位置（經緯度、鄰近什麼）\n段 3 → 氣候特色（幾月熱、幾月涼）\n段 4 → 文化或歷史意義\n\n【最後一段：總結】\n把各段重點濃縮，或提出你的感想\n例：「正因為這樣的地理位置，台北……」'
              }
            ]
          },
          {
            title: '今日詞彙',
            blocks: [
              {
                type: 'text',
                content: '寫說明文時，這些詞語很好用：\n\n【位置描述】\n位於……、座落於……、鄰近……\n北方是……、東邊緊接著……\n\n【比較描述】\n面積是……的幾倍、距離約……\n相比之下、對照起來看\n\n【說明因果】\n因為……所以……\n由於……的緣故\n這使得……、因此……\n\n【轉折與補充】\n不只如此……、除此之外……\n然而……、但是……、值得注意的是……'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateChineseQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 收尾：回顧與連結
    // ==========================================
    {
      id: 'closing-day3',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '三千年的旅程——回顧今天',
        sections: [
          {
            title: '回到今天的問題',
            blocks: [
              {
                type: 'text',
                content: '早上的問題：沒有 GPS、沒有指南針，南島民族如何橫越大洋？\n\n答案：用長年累積的自然觀察知識——\n星星、海浪、風向、鳥類、雲的形狀。\n\n這些知識不是「直覺」，\n而是幾百年、幾千年的觀察、比較、找規律。\n這是人類最古老的「科學」。'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天學了：\n\n• 數學：比例估算，用數字感受遷徙的距離規模\n• 社會：出台灣說、南島語系的分布、達悟族的起源\n• 科學：北極星導航、天然羅盤、傳統生態知識（TEK）\n• 語文：遷徙、語系、起源、說明文結構\n\n明天（Day 4）：\n語文主軸日——我們來動筆！\n用這三天學到的知識，\n寫一篇關於「我的家鄉定位」的說明文。\n\n記得今天學的詞彙和結構，明天會用到。'
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
