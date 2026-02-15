// src/data/weeks/week01/day4.js
// 第1週 - 第四天：動筆寫——我的家鄉定位

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題生成器
// ==========================================

// 【數學】W1 綜合應用題庫(整合數線、時差、比例)
const mathQuestions = [
  // ── 數線與負數(Day 1 複習)──
  {
    type: 'options',
    question: '玉山海拔 3,952 公尺,馬里亞納海溝最深處約海面以下 11,034 公尺。兩者在數線上的距離是幾公尺？',
    options: ['14,986 公尺', '7,082 公尺', '11,034 公尺', '3,952 公尺'],
    answer: 0,
    displayAnswer: '14,986 公尺(3,952 + 11,034 = 14,986)'
  },
  {
    type: 'options',
    question: '冬天某天台北氣溫 8°C,同一天哈爾濱(中國北方)氣溫 -22°C,兩地溫差幾度？',
    options: ['30°C', '14°C', '22°C', '38°C'],
    answer: 0,
    displayAnswer: '30°C(8 - (-22) = 8 + 22 = 30)'
  },
  {
    type: 'options',
    question: '-7 和 -3,哪個在數線上更靠近 0？',
    options: ['-3', '-7', '一樣近', '無法比較'],
    answer: 0,
    displayAnswer: '-3(|-3| = 3 < |-7| = 7)'
  },
  // ── 時差計算(Day 2 複習)──
  {
    type: 'options',
    question: '台灣(東經 120°)的時間是早上 9:00,同一時刻,東經 75° 的印度(UTC+5.5)是幾點？(台灣 UTC+8)',
    options: ['早上 6:30', '早上 11:30', '中午 12:00', '下午 3:00'],
    answer: 0,
    displayAnswer: '早上 6:30(台灣 9:00 - 2.5 小時 = 6:30)'
  },
  {
    type: 'options',
    question: '每 15° 經度 = 1 小時時差。東經 105° 和東經 120° 相差幾小時？',
    options: ['1 小時', '2 小時', '0.5 小時', '1.5 小時'],
    answer: 0,
    displayAnswer: '1 小時(120 - 105 = 15°,15 ÷ 15 = 1)'
  },
  {
    type: 'options',
    question: '台灣現在是下午 2:00,紐西蘭(UTC+13)比台灣早 5 小時,紐西蘭現在是幾點？',
    options: ['下午 7:00', '上午 9:00', '晚上 8:00', '隔天早上 1:00'],
    answer: 0,
    displayAnswer: '下午 7:00(14:00 + 5 = 19:00 = 下午 7:00)'
  },
  // ── 距離與比例(Day 3 複習)──
  {
    type: 'options',
    question: '地圖比例尺 1:2,000,000,圖上量到兩城市距離 4.5 公分,實際距離是幾公里？',
    options: ['90 公里', '45 公里', '900 公里', '9,000 公里'],
    answer: 0,
    displayAnswer: '90 公里(4.5 × 20 = 90 公里)'
  },
  {
    type: 'options',
    question: '台灣到紐西蘭約 9,000 公里,台灣到日本約 2,000 公里。台灣到紐西蘭是到日本的幾倍？',
    options: ['4.5 倍', '3 倍', '4 倍', '5 倍'],
    answer: 0,
    displayAnswer: '4.5 倍(9,000 ÷ 2,000 = 4.5)'
  },
  // ── W1 綜合情境題 ──
  {
    type: 'options',
    question: '台灣在東經 121°,馬達加斯加在東經 47°,相差幾度？需要幾小時時差？',
    options: ['74°,約 5 小時', '74°,約 7 小時', '168°,約 11 小時', '168°,約 8 小時'],
    answer: 0,
    displayAnswer: '74°,約 5 小時(121 - 47 = 74,74 ÷ 15 ≈ 4.9 小時)'
  },
  {
    type: 'options',
    question: '南島民族的船一天走 120 公里。如果從台灣出發,需要幾天才能到達馬達加斯加(距離約 10,000 公里)？',
    options: ['約 83 天', '約 30 天', '約 50 天', '約 120 天'],
    answer: 0,
    displayAnswer: '約 83 天(10,000 ÷ 120 ≈ 83.3)'
  },
  {
    type: 'options',
    question: '台灣面積 36,000 平方公里,全世界陸地面積約 1.5 億平方公里。台灣佔全球陸地面積的萬分之幾？(取整數)',
    options: ['約 24/10000', '約 20/10000', '約 30/10000', '約 36/10000'],
    answer: 0,
    displayAnswer: '約 24/10000(36,000 ÷ 15,000,000 ≈ 0.0024 = 24/10,000)'
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

// 【科學】觀察記錄活動題庫(引導學生觀察自己的生活環境)
const scienceQuestions = [
  {
    type: 'options',
    question: '記錄觀察時,「今天天氣很好」和「今天氣溫 28°C,無雲」,哪個記錄更符合科學規範？',
    options: [
      '今天氣溫 28°C,無雲(有數字和具體描述)',
      '今天天氣很好(簡短清楚)',
      '兩個都一樣好',
      '科學記錄不需要記天氣'
    ],
    answer: 0,
    displayAnswer: '今天氣溫 28°C,無雲(量化且具體,才能比較和重現)'
  },
  {
    type: 'options',
    question: '你觀察家附近的一棵樹,下列哪個記錄最完整？',
    options: [
      '榕樹,高約 5 公尺,葉長約 8 公分,觀察時間:2 月,葉色深綠',
      '那棵樹很高,葉子是綠的',
      '樹,綠色,很漂亮',
      '這棵樹長在路邊'
    ],
    answer: 0,
    displayAnswer: '完整的觀察記錄包含:物種、量化尺寸、時間、顏色等'
  },
  {
    type: 'options',
    question: '同一地點,你在早上 7:00 和下午 3:00 各觀察一次太陽位置,這個實驗設計的目的是？',
    options: [
      '觀察太陽在一天中的移動方向(東升西落)',
      '測試溫度計準不準',
      '看天空有幾朵雲',
      '測量空氣品質'
    ],
    answer: 0,
    displayAnswer: '觀察太陽的方向變化,驗證東升西落的規律'
  },
  {
    type: 'options',
    question: '你記錄家附近一週的天氣,發現每次颱風前都有特定的雲出現。這是哪一種科學推論？',
    options: [
      '根據觀察規律做出的預測',
      '假設',
      '感官直覺',
      '別人告訴你的'
    ],
    answer: 0,
    displayAnswer: '根據長期觀察找到的規律進行預測,這就是科學的核心'
  },
  {
    type: 'options',
    question: '你想知道家鄉的正北方向,但沒有指南針,可以怎麼做？',
    options: [
      '在晴天正午,觀察太陽的方位,正午太陽在正南方(台灣),背對太陽就是北方',
      '用手機的地圖 app',
      '問別人',
      '看哪邊比較亮'
    ],
    answer: 0,
    displayAnswer: '正午太陽在正南(台灣位在北回歸線附近),背對太陽就是北方——這是古老的天然指北方法'
  },
  {
    type: 'options',
    question: '觀察記錄要做「重複測量」,主要是為了什麼？',
    options: [
      '避免單次誤差,讓結果更可靠',
      '讓老師覺得你很認真',
      '比較哪次測量最快',
      '記錄越多越好'
    ],
    answer: 0,
    displayAnswer: '重複測量可以發現誤差,讓結果更可靠(取平均值更準確)'
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

// 【語文】說明文寫作技巧題庫
const writingQuestions = [
  {
    type: 'options',
    question: '說明文的第一段(主題段)最重要的功能是？',
    options: [
      '說清楚文章要說明的主題和範圍',
      '讓讀者感動',
      '提出問題讓讀者思考',
      '介紹作者自己'
    ],
    answer: 0,
    displayAnswer: '說清楚文章要說明的主題和範圍,讓讀者知道接下來要讀什麼'
  },
  {
    type: 'options',
    question: '下列哪個句子適合作為「我的家鄉定位」說明文的第一句？',
    options: [
      '台南市位於台灣西南部,北緯約 23°,東經約 120°,是台灣最早開發的城市之一。',
      '我很愛我的家鄉,那裡有很多好吃的食物。',
      '有一天,我和家人一起去看夕陽,那是我對家鄉最美的記憶。',
      '家鄉是一個讓人想念的地方。'
    ],
    answer: 0,
    displayAnswer: '說明文開頭應直接點出主題(地名、位置),而非抒情或記敘'
  },
  {
    type: 'options',
    question: '「台東縣在台灣東部,東臨太平洋,面積約 3,515 平方公里。」這是哪種說明方式？',
    options: [
      '定義說明(直接說明事物的特性和數據)',
      '舉例說明',
      '比較說明',
      '因果說明'
    ],
    answer: 0,
    displayAnswer: '定義說明:直接陳述地點的屬性和數據'
  },
  {
    type: 'options',
    question: '「高雄市的面積是台北市的 6 倍以上」,這是哪種說明方式？',
    options: [
      '比較說明(透過比較讓讀者理解大小)',
      '定義說明',
      '舉例說明',
      '因果說明'
    ],
    answer: 0,
    displayAnswer: '比較說明:用讀者熟悉的參照物來表達大小關係'
  },
  {
    type: 'options',
    question: '說明文的段落之間,常常用「連接詞」來讓文章流暢。下列哪個連接詞適合用來「補充說明」？',
    options: [
      '除此之外,值得一提的是……',
      '但是',
      '雖然如此',
      '由此可知'
    ],
    answer: 0,
    displayAnswer: '「除此之外」「值得一提的是」用來補充更多相關資訊'
  },
  {
    type: 'options',
    question: '說明文最後一段(結尾段)的最佳功能是？',
    options: [
      '濃縮全文重點,或提出這個地方的獨特意義',
      '再把所有細節重複一遍',
      '提出一個新的問題讓讀者繼續想',
      '寫下作者的個人心情'
    ],
    answer: 0,
    displayAnswer: '結尾段應濃縮重點或提出意義,讓讀者有完整感'
  },
  {
    type: 'options',
    question: '寫完初稿後,修改時最優先應該檢查什麼？',
    options: [
      '內容是否清楚、每段主題是否明確、順序是否合理',
      '有沒有錯字',
      '有沒有夠多的形容詞',
      '文章夠不夠長'
    ],
    answer: 0,
    displayAnswer: '修改先看「大結構」(內容清楚嗎？順序對嗎？),再看細節(錯字)'
  }
]

const generateWritingQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(writingQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateMathQuestion, generateScienceQuestion, generateWritingQuestion }

// ==========================================
// Day 4 資料
// ==========================================

const day4 = {
  id: 'day4',
  name: '第四天',
  icon: '✍️',
  color: '#F39C12',
  title: '動筆——我的家鄉定位',

  units: [

    // ==========================================
    // 開場：回顧三天的積累
    // ==========================================
    {
      id: 'opening-day4',
      name: '開場',
      icon: '📚',
      lesson: {
        title: '三天的準備，今天動筆',
        sections: [
          {
            title: '這三天我們學了什麼？',
            blocks: [
              {
                type: 'text',
                content: '在開始寫作之前，先整理一下這三天的積累：\n\n【Day 1】我在哪裡？\n• 數線與負數——用數字表示位置\n• 方位與經緯線——地球的座標系統\n• 觀察 vs 推測——科學記錄的基礎\n\n【Day 2】台灣在哪裡？\n• 圓 360° 與時差——地球自轉的數學\n• 台灣的精確位置——北緯 22-25°，東經 120-122°\n• 測量工具與比較——量化觀察\n\n【Day 3】我們從哪裡來？\n• 比例與距離——遷徙的規模\n• 南島民族遷徙——出台灣說\n• 星象導航——天然羅盤'
              }
            ]
          },
          {
            title: '今天的任務',
            blocks: [
              {
                type: 'text',
                content: '今天主要有三件事：\n\n① 數學：W1 綜合應用——把這三天的數學連起來算\n② 寫作引導：說明文「我的家鄉定位」——步驟拆解，一段一段來\n③ 科學觀察：你的家鄉有哪些可以觀察的東西？\n\n特別提醒：說明文寫作是這週的語文目標。\n今天我們不要求「完美的文章」，\n而是練習「把想法有條理地寫出來」。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：數學 — W1 綜合應用
    // ==========================================
    {
      id: 'math-w1-review',
      name: '數學：W1 綜合應用',
      icon: '🔢',
      lesson: {
        title: '把這週學的數學連起來',
        sections: [
          {
            title: '三個主題，一條線索',
            blocks: [
              {
                type: 'text',
                content: '這週的數學其實都在說同一件事：\n\n「如何用數字描述位置和距離」\n\n• 數線：一維的位置（海拔高低、溫度高低）\n• 時差：圓的角度和時間的關係\n• 比例：縮小/放大的倍數，讓我們能處理很大或很小的數字\n\n今天來做一些「綜合題」——\n一道題目裡面，可能同時需要用到這三個概念。'
              }
            ]
          },
          {
            title: '綜合情境：一趟跨洲旅行',
            blocks: [
              {
                type: 'text',
                content: '情境題：小明從台灣（東經 121°，UTC+8）\n搭飛機到馬達加斯加（東經 47°，UTC+3）。\n\n① 兩地經度差：121 - 47 = 74°\n   時差：74 ÷ 15 ≈ 4.9 ≈ 5 小時\n   （台灣比馬達加斯加早 5 小時）\n\n② 飛行距離約 10,000 公里\n   地圖上（比例尺 1:50,000,000）：\n   10,000 公里 = 1,000,000,000 公分\n   ÷ 50,000,000 = 20 公分\n\n③ 台灣海拔最高點（玉山）+3,952 公尺\n   馬達加斯加海拔最高點約 +2,876 公尺\n   在數線上，玉山比較高，差 3952 - 2876 = 1,076 公尺'
              }
            ]
          },
          {
            title: '本週數學重點整理',
            blocks: [
              {
                type: 'text',
                content: '數線：\n• 0 右邊是正數，左邊是負數\n• 數線上兩點距離 = 大數 - 小數（或絕對值相加）\n\n時差：\n• 地球 360° ÷ 24 小時 = 每小時 15°\n• 時差（小時）= 經度差 ÷ 15\n• 越往東，時間越早（東經比西經早）\n\n比例與距離：\n• 比例尺：圖上距離 × 比例尺分母 = 實際距離\n• 比較兩個量：用除法算出倍數\n• 把大數字「縮小」成有意義的比例，更容易理解'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
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
    // 單元二：寫作引導 — 說明文「我的家鄉定位」
    // ==========================================
    {
      id: 'writing-hometown',
      name: '語文：說明文寫作',
      icon: '✏️',
      lesson: {
        title: '說明文「我的家鄉定位」——步驟拆解',
        sections: [
          {
            title: '寫作前：蒐集材料',
            blocks: [
              {
                type: 'text',
                content: '寫說明文之前，先回答這幾個問題（查資料、或用這週學的知識）：\n\n❶ 我的家鄉（城市/鄉鎮）叫什麼名字？\n\n❷ 它在台灣的哪個位置？（北部/中部/南部/東部？沿海/山區/盆地？）\n\n❸ 大概的緯度是多少？（台灣北部約 25°N，南部約 22°N）\n\n❹ 東邊、西邊、北邊、南邊分別鄰近什麼？（縣市、海洋、山脈）\n\n❺ 這個地方有什麼特別的地理特色？（名山、河流、海岸、特產…）\n\n❻ 跟倫敦（UTC+0）的時差是幾小時？（台灣一律 UTC+8，時差 8 小時）\n\n把這六個問題的答案寫在紙上或記在腦中，接下來就用它們來寫作。'
              }
            ]
          },
          {
            title: '第一段：主題句（3-4 句）',
            blocks: [
              {
                type: 'text',
                content: '第一段要做到的事：\n讓讀者馬上知道「這篇文章要說哪裡」。\n\n結構建議：\n句 1：點出地名和大位置\n句 2：加上一個具體的地理數據\n句 3：（可選）一個讓人印象深刻的特色\n\n範例（以台南為例）：\n「台南市位於台灣西南部，北緯約 23°，東經約 120°，\n是台灣最早開發的城市之一，\n也是北回歸線附近的亞熱帶城市。」\n\n你的家鄉是哪裡？\n用同樣的結構，試著寫出你的第一段。'
              }
            ]
          },
          {
            title: '第二段：位置說明（4-6 句）',
            blocks: [
              {
                type: 'text',
                content: '第二段要做到的事：\n讓讀者知道這個地方「在哪裡、旁邊是什麼」。\n\n可以包含：\n• 四周的鄰近地區（東鄰…、西側是…）\n• 地形特色（位於山麓、濱海、河流旁…）\n• 距離描述（距台北約…公里、搭火車約…小時）\n\n範例：\n「台南北邊接鄰嘉義縣，南邊是高雄市。\n西側緊鄰台灣海峽，海岸線綿延超過 100 公里。\n台南距離台北約 350 公里，\n搭高鐵大約 1 小時 40 分鐘可以到達。」\n\n用自己的家鄉資料填進去，寫出你的第二段。'
              }
            ]
          },
          {
            title: '第三段：特色與意義（3-5 句）',
            blocks: [
              {
                type: 'text',
                content: '第三段要做到的事：\n說出這個地方「有什麼獨特的地理意義或特色」。\n\n可以提到：\n• 氣候（因為緯度…，所以氣候…）\n• 時差（這裡是 UTC+8，比倫敦早 8 小時）\n• 歷史或文化地理意義（古代是…，因為地理位置所以…）\n• 自然特色（特產、著名山川、生態）\n\n範例：\n「台南位在北回歸線以南，屬於熱帶季風氣候，\n冬天溫暖、夏天炎熱，是台灣日照時間最長的城市之一。\n台南的時間和倫敦相差 8 小時，\n當台南是早上 8 點，倫敦仍是昨天深夜 12 點。\n這個城市在台灣歷史上有重要地位，\n因為地理上面海靠河，古代是台灣最重要的港口和糧倉。」'
              }
            ]
          },
          {
            title: '結尾段：總結（2-3 句）',
            blocks: [
              {
                type: 'text',
                content: '最後一段，把前面說的重點收攏起來：\n\n方式 A：重申這個地方的獨特之處\n「總結來說，台南不只是一個台灣南部的城市，\n更是這座島嶼歷史和文化的起點之一。」\n\n方式 B：提出一個開放的問題或感想\n「一個城市的定位，不只是它在地圖上的經緯度，\n更是它在人們記憶中的位置。」\n\n方式 C：連結到更大的視野\n「在地球 360° 的某個角落，\n台南靜靜地存在著，\n以 UTC+8 的時間，刻寫著屬於自己的故事。」\n\n選擇你喜歡的方式，為你的說明文寫下結尾。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateWritingQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 觀察你的家鄉
    // ==========================================
    {
      id: 'science-local-observation',
      name: '科學：觀察你的家鄉',
      icon: '🔍',
      lesson: {
        title: '用科學眼光看你身邊的環境',
        sections: [
          {
            title: '從課文走出去',
            blocks: [
              {
                type: 'text',
                content: '這三天我們學了：\n• 觀察 vs 推測\n• 量化記錄\n• 比較的意義\n• 長期規律的發現\n\n現在，把這些方法用在你「真實的生活環境」。\n\n思考題：你家附近，有什麼東西是值得「科學觀察」的？\n\n舉例：\n• 每天的天氣（溫度、雲量、風向）\n• 院子裡的植物（葉片大小、顏色的季節變化）\n• 經過的人潮（幾點最多人？星期幾最多？）\n• 附近的山或海（日出日落的方向、潮汐）'
              }
            ]
          },
          {
            title: '設計一個簡單的觀察記錄',
            blocks: [
              {
                type: 'text',
                content: '一個好的觀察記錄計畫需要：\n\n① 觀察對象：觀察「什麼」\n   例：家門口的溫度\n\n② 記錄方式：「怎麼」記錄\n   例：每天早上 7:00 和下午 3:00，用溫度計量測，記在本子上\n\n③ 觀察時長：「多久」觀察一次\n   例：連續一週\n\n④ 預期問題：我想回答「什麼問題」\n   例：早上和下午哪個時段比較熱？溫差多大？\n\n這樣的設計，就是最簡單的「科學實驗計畫」。\n（真正的科學家做的，其實也差不多！）'
              }
            ]
          },
          {
            title: '連結地理位置',
            blocks: [
              {
                type: 'text',
                content: '你的觀察結果，其實和你的「地理位置」有關：\n\n• 住在台灣南部（低緯度）：日照時間長，氣溫高\n• 住在山上：氣溫比平地低，早晚溫差大\n• 住在海邊：早晨常有霧，海風影響氣溫\n• 住在都市中心：「熱島效應」讓氣溫比郊區高\n\n這就是「地理」和「科學」的連結：\n你在地球上的位置，決定了你能觀察到什麼。\n\n試試看：\n在說明文「我的家鄉定位」中，\n加入一個你在這個地方能觀察到的自然現象，\n說明它和地理位置的關係。'
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
    // 收尾：今日回顧
    // ==========================================
    {
      id: 'closing-day4',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '把知識變成文字',
        sections: [
          {
            title: '今天完成的事',
            blocks: [
              {
                type: 'text',
                content: '今天你完成了（或練習了）：\n\n• W1 數學綜合應用——把數線、時差、比例串連起來\n• 說明文的四段架構——主題段、位置說明、特色、結尾\n• 科學觀察計畫——用科學眼光看家鄉的自然環境\n\n如果你已經動筆寫了說明文，恭喜你完成本週最重要的語文任務！\n\n如果還沒完成，沒關係——\n明天（Day 5）會有時間修改和收尾。'
              }
            ]
          },
          {
            title: '關於說明文的一個提醒',
            blocks: [
              {
                type: 'text',
                content: '說明文的核心精神：\n\n「讓不認識這個地方的人，\n讀完你的文章之後，\n能清楚知道這裡在哪裡、有什麼特色。」\n\n測試方法：\n想像你的讀者是一個從來沒來過台灣的外國朋友。\n你的文章，能讓他們「定位」你的家鄉嗎？\n\n這正是本週的核心概念——「定位」，\n不只是地圖上的點，\n也是一個地方在世界上的意義。\n\n明天（Day 5）：\n本週最後一天，我們來做總結和複習，\n也會繼續讀《大海浮夢》的最後一段。'
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
