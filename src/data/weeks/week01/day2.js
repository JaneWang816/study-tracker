// src/data/weeks/week01/day2.js
// 第1週 - 第二天：台灣在哪裡？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題生成器
// ==========================================

// 【數學】圓的角度與時差計算練習題庫
const mathQuestions = [
  // ── 圓的角度基本觀念 ──
  {
    type: 'options',
    question: '一個完整的圓是幾度？',
    options: ['360°', '90°', '180°', '270°'],
    answer: 0,
    displayAnswer: '360°'
  },
  {
    type: 'options',
    question: '圓的 360° 平均分成 4 等份,每份是幾度？',
    options: ['90°', '60°', '120°', '180°'],
    answer: 0,
    displayAnswer: '90°(360 ÷ 4 = 90)'
  },
  {
    type: 'options',
    question: '地球是一個球,360° 平均分成 24 小時(一天),每小時對應幾度的經度？',
    options: ['15°', '10°', '20°', '24°'],
    answer: 0,
    displayAnswer: '15°(360 ÷ 24 = 15)'
  },
  {
    type: 'options',
    question: '圓的 360° 分成 24 等份,每份幾度？',
    options: ['15°', '12°', '18°', '20°'],
    answer: 0,
    displayAnswer: '15°'
  },
  // ── 時差計算 ──
  {
    type: 'options',
    question: '地球自轉一圈 360°,需要 24 小時。台灣(東經 120°)和本初子午線(0°)相差 120°,時差是幾小時？',
    options: ['8 小時', '6 小時', '10 小時', '12 小時'],
    answer: 0,
    displayAnswer: '8 小時(120 ÷ 15 = 8)'
  },
  {
    type: 'options',
    question: '台灣是東經 120°,日本東京是東經 135°,兩地相差幾度經度？',
    options: ['15°', '10°', '20°', '25°'],
    answer: 0,
    displayAnswer: '15°(135 - 120 = 15)'
  },
  {
    type: 'options',
    question: '台灣和東京相差 15° 經度,時差是幾小時？',
    options: ['1 小時', '0.5 小時', '1.5 小時', '2 小時'],
    answer: 0,
    displayAnswer: '1 小時(15 ÷ 15 = 1)'
  },
  {
    type: 'options',
    question: '台灣現在是中午 12:00,東京比台灣早 1 小時,東京現在是幾點？',
    options: ['下午 1:00', '上午 11:00', '下午 2:00', '上午 10:00'],
    answer: 0,
    displayAnswer: '下午 1:00(12:00 + 1 小時)'
  },
  {
    type: 'options',
    question: '台灣(東經 120°)和英國倫敦(東經 0°)相差幾度？',
    options: ['120°', '60°', '90°', '180°'],
    answer: 0,
    displayAnswer: '120°(120 - 0 = 120)'
  },
  {
    type: 'options',
    question: '台灣和倫敦相差 120° 經度,時差是幾小時？(每 15° = 1 小時)',
    options: ['8 小時', '6 小時', '10 小時', '12 小時'],
    answer: 0,
    displayAnswer: '8 小時(120 ÷ 15 = 8)'
  },
  {
    type: 'options',
    question: '台灣現在是下午 3:00,倫敦比台灣慢 8 小時,倫敦現在是幾點？',
    options: ['上午 7:00', '下午 11:00', '上午 11:00', '凌晨 1:00'],
    answer: 0,
    displayAnswer: '上午 7:00(15:00 - 8 = 7:00)'
  },
  {
    type: 'options',
    question: '每 15° 經度 = 1 小時時差。美國紐約大約在西經 75°,跟台灣(東經 120°)共相差幾度？',
    options: ['195°', '45°', '120°', '75°'],
    answer: 0,
    displayAnswer: '195°(東西兩側要相加:120 + 75 = 195)'
  },
  {
    type: 'options',
    question: '台灣和紐約相差 195°,時差是幾小時？',
    options: ['13 小時', '9 小時', '11 小時', '15 小時'],
    answer: 0,
    displayAnswer: '13 小時(195 ÷ 15 = 13)'
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

// 【社會】台灣地理位置練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '台灣本島大約呈什麼形狀？',
    options: ['南北走向的橢圓形(番薯形)', '圓形', '正方形', '東西寬廣的長方形'],
    answer: 0,
    displayAnswer: '南北走向的橢圓形(番薯形)'
  },
  {
    type: 'options',
    question: '台灣海峽將台灣與哪個地區隔開？',
    options: ['中國大陸', '日本', '菲律賓', '琉球群島'],
    answer: 0,
    displayAnswer: '中國大陸'
  },
  {
    type: 'options',
    question: '台灣東邊是哪個海洋？',
    options: ['太平洋', '南海', '印度洋', '東海'],
    answer: 0,
    displayAnswer: '太平洋'
  },
  {
    type: 'options',
    question: '北回歸線(23.5°N)穿過台灣哪個地區？',
    options: ['嘉義附近', '基隆附近', '台北附近', '屏東附近'],
    answer: 0,
    displayAnswer: '嘉義附近'
  },
  {
    type: 'options',
    question: '台灣的鄰近離島中,哪個島嶼屬於達悟族的傳統領域？',
    options: ['蘭嶼', '澎湖', '金門', '綠島'],
    answer: 0,
    displayAnswer: '蘭嶼'
  },
  {
    type: 'options',
    question: '台灣北邊最近的島鏈是？',
    options: ['琉球群島(沖繩)', '菲律賓群島', '夏威夷群島', '馬里亞納群島'],
    answer: 0,
    displayAnswer: '琉球群島(沖繩)'
  },
  {
    type: 'options',
    question: '台灣南邊緊鄰的國家是？',
    options: ['菲律賓', '日本', '越南', '印尼'],
    answer: 0,
    displayAnswer: '菲律賓'
  },
  {
    type: 'options',
    question: '比例尺 1:100,000 代表地圖上 1 公分等於實際多遠？',
    options: ['1 公里', '1 公尺', '100 公尺', '10 公里'],
    answer: 0,
    displayAnswer: '1 公里(100,000 公分 = 1,000 公尺 = 1 公里)'
  },
  {
    type: 'options',
    question: '地圖上的「圖例」是用來說明什麼的？',
    options: ['地圖符號與顏色的意義', '地圖的來源', '地圖的比例尺', '地圖的製作日期'],
    answer: 0,
    displayAnswer: '地圖符號與顏色的意義'
  },
  {
    type: 'options',
    question: '台灣位在「亞熱帶」的依據是？',
    options: [
      '北回歸線穿過台灣中南部,大部分土地在熱帶與溫帶之間',
      '台灣面積很小',
      '台灣四面環海',
      '台灣海拔很高'
    ],
    answer: 0,
    displayAnswer: '北回歸線穿過台灣中南部,大部分土地在熱帶與溫帶之間'
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

// 【科學】觀察工具與測量練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '使用放大鏡觀察時,下列哪項操作正確？',
    options: [
      '移動放大鏡直到影像最清晰',
      '把放大鏡貼在眼睛上',
      '把物體放到放大鏡後面',
      '在陽光直射下觀察'
    ],
    answer: 0,
    displayAnswer: '移動放大鏡直到影像最清晰'
  },
  {
    type: 'options',
    question: '用尺測量長度時,讀數應該從哪裡開始？',
    options: ['0 刻度線的位置', '尺的物理末端', '最近的整數刻度', '隨便哪裡都行'],
    answer: 0,
    displayAnswer: '0 刻度線的位置'
  },
  {
    type: 'options',
    question: '「量角器」的主要用途是？',
    options: ['測量角度', '測量長度', '測量重量', '測量溫度'],
    answer: 0,
    displayAnswer: '測量角度'
  },
  {
    type: 'options',
    question: '記錄觀察數據時,為什麼要寫「單位」？',
    options: [
      '沒有單位就不知道數值代表什麼',
      '讓記錄看起來更完整',
      '老師要求的格式',
      '只有大數字才需要寫單位'
    ],
    answer: 0,
    displayAnswer: '沒有單位就不知道數值代表什麼'
  },
  {
    type: 'options',
    question: '觀察樹葉時,下列哪個描述是「可量化」的觀察？',
    options: [
      '葉子是綠色的,長約 8 公分,寬約 4 公分',
      '葉子很漂亮',
      '葉子看起來很健康',
      '葉子聞起來有味道'
    ],
    answer: 0,
    displayAnswer: '葉子是綠色的,長約 8 公分,寬約 4 公分'
  },
  {
    type: 'options',
    question: '「比較」在科學觀察中的意義是？',
    options: [
      '找出兩個事物之間的相同和不同',
      '告訴別人自己的想法',
      '判斷哪個比較好',
      '預測結果'
    ],
    answer: 0,
    displayAnswer: '找出兩個事物之間的相同和不同'
  },
  {
    type: 'options',
    question: '科學實驗中的「變因」是指什麼？',
    options: [
      '實驗過程中可能影響結果的條件',
      '實驗結果',
      '實驗需要的材料',
      '實驗的時間'
    ],
    answer: 0,
    displayAnswer: '實驗過程中可能影響結果的條件'
  },
  {
    type: 'options',
    question: '如果你要比較兩種肥料哪個讓植物長得更好,下列哪個設計最科學？',
    options: [
      '相同條件的兩棵植物,只改變施的肥料種類',
      '兩棵植物放在不同地方,分別施不同肥料',
      '一棵植物先施A肥,一段時間後再施B肥',
      '問農夫哪種比較好'
    ],
    answer: 0,
    displayAnswer: '相同條件的兩棵植物,只改變施的肥料種類'
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

export { generateMathQuestion, generateSocialQuestion, generateScienceQuestion }

// ==========================================
// Day 2 資料
// ==========================================

const day2 = {
  id: 'day2',
  name: '第二天',
  icon: '🗺️',
  color: '#5B8DEF',
  title: '台灣在哪裡？',

  units: [

    // ==========================================
    // 開場：文學閱讀（第二段）
    // ==========================================
    {
      id: 'opening-day2',
      name: '開場閱讀',
      icon: '🌊',
      lesson: {
        title: '《大海浮夢》——繼續讀',
        sections: [
          {
            title: '接著昨天讀的地方',
            blocks: [
              {
                type: 'text',
                content: '昨天，我們讀到了小叔公和飛魚的故事。今天，我們繼續看夏曼・藍波安如何描述達悟族人認識海洋的方式。'
              },
              {
                type: 'text',
                content: '我的族人對海洋的認識，不是來自書本，不是來自學校。是來自腳踩在珊瑚礁上、眼睛看著海浪的顏色、鼻子聞著海風的味道，手指觸摸海水的溫度……\n\n他們知道哪個季節的魚最肥美，哪個方向的風預告著暴風雨，哪顆星星是回家的方向。這些知識，是好幾代人用身體換來的。',
                author: '改寫自夏曼・藍波安《大海浮夢》精神'
              }
            ]
          },
          {
            title: '今天的探索問題',
            blocks: [
              {
                type: 'text',
                content: '帶著這個問題進入今天的學習：\n\n達悟族人在大海上靠星星判斷方位，現代人靠「時區」知道世界各地現在幾點。\n\n為什麼台灣跟英國倫敦，同樣是「中午」，太陽的位置卻不一樣？\n今天的數學課會告訴你答案。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：數學 — 坐標系統
    // ==========================================
    {
      id: 'math-time-zones',
      name: '數學：時差計算',
      icon: '🕐',
      lesson: {
        title: '圓與時差——地球為什麼有時差？',
        sections: [
          {
            title: '複習：圓的角度',
            blocks: [
              {
                type: 'text',
                content: '先複習一個你學過的知識：\n\n一個完整的圓 = 360°\n\n把圓平均分成幾等份，每份的角度：\n• 分成 2 份：360 ÷ 2 = 180°（半圓）\n• 分成 4 份：360 ÷ 4 = 90°（直角）\n• 分成 6 份：360 ÷ 6 = 60°\n• 分成 24 份：360 ÷ 24 = 15°\n\n為什麼要分成 24 份？\n因為一天有 24 小時！'
              }
            ]
          },
          {
            title: '地球自轉與時差',
            blocks: [
              {
                type: 'text',
                content: '地球是一個球，每天自轉一圈（360°），花 24 小時。\n\n所以：\n360° ÷ 24 小時 = 每小時轉 15°\n\n換句話說：\n兩個地方相差 15° 經度 → 時差 1 小時\n相差 30° → 時差 2 小時\n相差 60° → 時差 4 小時\n\n公式：\n時差（小時）= 經度差 ÷ 15'
              }
            ]
          },
          {
            title: '台灣的時差計算',
            blocks: [
              {
                type: 'text',
                content: '台灣的標準時間使用「東經 120°」（UTC+8）\n\n為什麼是 UTC+8？\n→ 台灣在東經 120°，本初子午線是 0°\n→ 相差 120°\n→ 120 ÷ 15 = 8\n→ 台灣比格林威治（英國）早 8 小時\n\n幾個例子：\n台灣 vs 日本東京（東經 135°）\n→ 差 15°，時差 1 小時，東京比台灣早 1 小時\n\n台灣 vs 北京（東經 120°）\n→ 差 0°，時差 0 小時，同時區！'
              }
            ]
          },
          {
            title: '計算步驟',
            blocks: [
              {
                type: 'text',
                content: '計算兩地時差的步驟：\n\n① 找出兩地的經度\n② 計算經度差（同為東經或西經就相減；一東一西就相加）\n③ 經度差 ÷ 15 = 時差（小時）\n④ 判斷誰比較早：越往東的地方，時間越早\n\n例題：台灣（東經 120°）和倫敦（東經 0°）的時差？\n① 120° 和 0°\n② 同為東經，差 120 - 0 = 120°\n③ 120 ÷ 15 = 8 小時\n④ 台灣在東邊，比倫敦早 8 小時\n→ 台灣是下午 3 點，倫敦就是早上 7 點'
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
          // fill 題：去掉空白和括號比較
          const clean = (s) => String(s).replace(/\s/g, '').replace(/[（(）)]/g, '')
          return clean(userAnswer) === clean(question.answer)
        }
      }
    },

    // ==========================================
    // 單元二：社會 — 台灣的位置與地圖
    // ==========================================
    {
      id: 'social-taiwan-location',
      name: '社會：台灣的位置',
      icon: '🗺️',
      lesson: {
        title: '台灣的地理位置與地圖判讀',
        sections: [
          {
            title: '台灣在哪裡？——精確定位',
            blocks: [
              {
                type: 'text',
                content: '用昨天學的經緯線，台灣的位置是：\n\n緯度：北緯 22°N～25.5°N（南北約 400 公里）\n經度：東經 120°E～122°E（東西約 150 公里）\n\n台灣屬於「亞熱帶」氣候的原因：\n北回歸線（23.5°N）從嘉義縣穿過台灣，\n• 北回歸線以北 → 亞熱帶\n• 北回歸線以南（恆春半島） → 熱帶'
              }
            ]
          },
          {
            title: '台灣的鄰居',
            blocks: [
              {
                type: 'text',
                content: '以台灣為中心，四個方向的鄰居：\n\n🧭 北方：琉球群島（沖繩）→ 日本領土\n🧭 南方：巴士海峽 → 菲律賓\n🧭 西方：台灣海峽 → 中國大陸（福建省）\n🧭 東方：太平洋（浩瀚無邊）\n\n台灣的附屬島嶼：\n• 澎湖群島（西南方）\n• 蘭嶼（東南方）——達悟族傳統領域\n• 綠島（東方）\n• 金門、馬祖（接近中國大陸）'
              }
            ]
          },
          {
            title: '認識地圖的基本元素',
            blocks: [
              {
                type: 'text',
                content: '一張完整的地圖應該有：\n\n① 比例尺：告訴你圖上距離和實際距離的關係\n   例：1:500,000 表示圖上 1 公分 = 實際 5 公里\n\n② 圖例（凡例）：解釋地圖上各種符號、顏色代表什麼\n   例：藍色 = 水體，綠色 = 山林，紅線 = 道路\n\n③ 方位標（指北針）：告訴你地圖的上方對應哪個方向\n   大多數地圖「上北下南，左西右東」\n\n④ 地名標示：重要城市、地標、山川名稱\n\n🔑 比例尺我們下個月（W4）會詳細學習計算，現在先知道「它是用來表示縮放比例」就好。'
              }
            ]
          },
          {
            title: '台灣在亞洲的戰略位置',
            blocks: [
              {
                type: 'text',
                content: '台灣不只是一個美麗的小島，它的位置在地緣政治上非常重要：\n\n• 位於「第一島鏈」的中心（日本→台灣→菲律賓）\n• 東亞與東南亞之間的海上交通要道\n• 連接太平洋與南海的關鍵節點\n\n古代的南島語族就是從台灣出發，沿著這個位置往南擴散到整個太平洋——達悟族的祖先，就是這趟偉大遷徙的一部分。'
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
    // 單元三：科學 — 觀察工具與測量
    // ==========================================
    {
      id: 'science-measurement',
      name: '科學：觀察工具與測量',
      icon: '🔬',
      lesson: {
        title: '工具使觀察更精確',
        sections: [
          {
            title: '為什麼需要工具？',
            blocks: [
              {
                type: 'text',
                content: '昨天我們學到「觀察」。\n\n達悟族人用感官觀察大海——非常強大，但有限制：\n• 只能感受到眼睛能看到的距離\n• 不同人的感受可能不同（「浪很大」對每個人意義不同）\n• 記憶會隨時間模糊\n\n科學工具解決了這些問題：讓觀察變得「精確」、「可量化」、「可重複比較」。'
              }
            ]
          },
          {
            title: '常見的觀察工具',
            blocks: [
              {
                type: 'text',
                content: '【放大觀察】\n• 放大鏡：放大 5-10 倍，觀察細節\n• 顯微鏡：放大 100-400 倍，觀察細胞等微小結構\n\n【測量工具】\n• 尺/捲尺：測量長度（單位：公分、公尺）\n• 溫度計：測量溫度（單位：°C）\n• 量筒：測量液體體積（單位：mL、cc）\n• 天平/電子秤：測量質量（單位：公克、公斤）\n• 量角器：測量角度（單位：度）\n\n【記錄工具】\n• 筆記本、表格\n• 相機、錄影\n• 電腦/平板'
              }
            ]
          },
          {
            title: '測量的基本原則',
            blocks: [
              {
                type: 'text',
                content: '使用工具測量時，要注意：\n\n① 選對工具：測量溫度不用尺，測量長度不用量角器\n\n② 正確使用：\n   • 尺：從 0 刻度開始量，視線與刻度垂直\n   • 量筒：視線與液面水平，讀凹面最低點\n\n③ 記錄要完整：數值 + 單位（寫「5 公分」不能只寫「5」）\n\n④ 多測幾次：避免單次錯誤（取平均值）\n\n⑤ 承認誤差：所有測量都有誤差，記錄時可寫「約」'
              }
            ]
          },
          {
            title: '比較——讓觀察更有意義',
            blocks: [
              {
                type: 'text',
                content: '光觀察一個東西，意義有限。\n「比較」兩個或多個觀察，才能找出規律。\n\n例：觀察一片葉子，知道它長 8 公分。\n→ 不夠，這代表什麼？\n\n改成：比較陽光充足和遮陰處的葉子大小\n→ 陽光充足的葉子較小（3-5 公分），遮陰的較大（7-10 公分）\n→ 發現：葉子大小和光照有關\n\n這就是科學探究的開始！\n\n今天的延伸思考：達悟族人「比較」不同季節的海浪，得到什麼知識？'
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
    // 單元四：語文 — 詞彙與閱讀理解
    // ==========================================
    {
      id: 'chinese-reading',
      name: '語文：詞彙與閱讀理解',
      icon: '✍️',
      lesson: {
        title: '今日詞彙：地圖與測量用語',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中，出現了這些重要詞彙：\n\n【地理/社會類】\n• 比例尺：地圖上距離與實際距離的縮放比例\n• 圖例：地圖上各種符號的說明\n• 時區：地球按經度劃分的 24 個時間區域\n• 亞熱帶：北回歸線與北緯 40° 之間的氣候帶\n\n【科學/數學類】\n• 時差：兩個地方因經度不同而產生的時間差異\n• 量化：用數字表示觀察結果\n• 變因：實驗中可能影響結果的條件\n• 誤差：測量結果與真實值之間的差距\n\n【文學類】\n• 地緣：地理位置所形成的關係\n• 島鏈：連成一條線的島嶼群'
              }
            ]
          },
          {
            title: '閱讀理解練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習，測試你對今天詞彙的理解。\n\n同時想一想：\n這些「精確的科學詞彙」和文學中的「詩意描述」，哪種方式更能讓你感受到台灣的位置？為什麼？\n\n（這個問題留到 Day 5 寫作時再回答。）'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const vocabQuestions = [
            {
              type: 'options',
              question: '「比例尺 1:50,000」中的 50,000 代表什麼？',
              options: [
                '地圖面積是實際的 50,000 倍',
                '圖上 1 單位長度對應實際 50,000 單位長度',
                '地圖上有 50,000 個地名',
                '地圖可以放大 50,000 倍'
              ],
              answer: 1,
              displayAnswer: '圖上 1 單位長度對應實際 50,000 單位長度'
            },
            {
              type: 'options',
              question: '「量化觀察」的意思是？',
              options: [
                '觀察很多東西',
                '用數字和單位來描述觀察結果',
                '用放大鏡觀察',
                '觀察很精細的東西'
              ],
              answer: 1,
              displayAnswer: '用數字和單位來描述觀察結果'
            },
            {
              type: 'options',
              question: '「誤差」在科學上是指？',
              options: [
                '完全錯誤的測量',
                '忘記記錄數據',
                '測量值與真實值之間難以避免的差距',
                '計算錯誤'
              ],
              answer: 2,
              displayAnswer: '測量值與真實值之間難以避免的差距'
            },
            {
              type: 'options',
              question: '「地緣」這個詞用在「台灣的地緣政治」時，強調的是？',
              options: [
                '台灣的土地面積',
                '台灣地理位置對政治關係的影響',
                '台灣的氣候條件',
                '台灣的人口數量'
              ],
              answer: 1,
              displayAnswer: '台灣地理位置對政治關係的影響'
            },
            {
              type: 'options',
              question: '「時區」是根據什麼來劃分的？',
              options: [
                '各國政府自己決定',
                '地球的緯度',
                '地球的經度（每 15° 一個時區）',
                '各地的日出時間'
              ],
              answer: 2,
              displayAnswer: '地球的經度（每 15° 一個時區）'
            },
            {
              type: 'options',
              question: '台灣說「UTC+8」，這個「+8」是指什麼？',
              options: [
                '台灣在北緯 8 度',
                '台灣比格林威治標準時間（英國）早 8 小時',
                '台灣一天有 8 個小時',
                '台灣距離英國 8000 公里'
              ],
              answer: 1,
              displayAnswer: '台灣比格林威治標準時間（英國）早 8 小時'
            },
            {
              type: 'options',
              question: '「亞熱帶」和「熱帶」的主要區別是？',
              options: [
                '亞熱帶靠近海邊，熱帶在內陸',
                '亞熱帶有四季，熱帶全年高溫',
                '亞熱帶在熱帶以南，熱帶在更北邊',
                '亞熱帶是人工種植的地區'
              ],
              answer: 1,
              displayAnswer: '亞熱帶有四季，熱帶全年高溫'
            }
          ]
          return vocabQuestions[Math.floor(Math.random() * vocabQuestions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ==========================================
    // 收尾：回顧與連結
    // ==========================================
    {
      id: 'closing-day2',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '回顧：兩種「知道自己在哪裡」的方式',
        sections: [
          {
            title: '今天的核心問題',
            blocks: [
              {
                type: 'text',
                content: '早上的問題：為什麼台灣和倫敦「同樣是中午」，太陽位置不同？\n\n答案：因為地球是圓的，自轉造成不同地方的「正午」出現在不同時刻。\n台灣在東邊，太陽更早到達，所以時間比倫敦早 8 小時。\n\n這就是「時區」和「時差」的由來——一個用圓的 360° 解釋地球的概念。'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天學了：\n\n• 數學：圓 = 360°；地球 360° ÷ 24 小時 = 每小時 15°；時差計算公式\n• 社會：台灣的精確位置（東經 120-122°，北緯 22-25°）、鄰近國家、地圖要素\n• 科學：觀察工具種類、測量的正確步驟、比較的科學意義\n• 語文：比例尺、量化、誤差、時區等關鍵詞\n\n明天（Day 3），我們往歷史走：\n南島民族從台灣出發，如何擴散到整個太平洋？這段遷徙，跟「移動」的數學有什麼關係？'
              }
            ]
          }
        ]
      },
      practice: null
    }

  ]
}

export default day2
