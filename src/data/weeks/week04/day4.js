// src/data/weeks/week04/day4.js
// W4 Day4：動筆日

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 數學綜合:比例尺+縮擴圖
// ==========================================
const mathQuestions = [
  // 地圖計算
  {
    type: 'options',
    question: '台灣地圖比例尺 1:500000。台北到花蓮圖上距離約3公分,台北到高雄圖上約8公分。花蓮到高雄繞過台北的距離是多少公里?',
    options: ['55公里', '5500公里', '550公尺', '55000公尺'],
    answer: 0,
    displayAnswer: '(3+8)×500000=5500000公分=55000公尺=55公里。'
  },
  {
    type: 'options',
    question: '一張嘉南平原地圖,比例尺 1:100000,圖上嘉南大圳的主幹線長約16公分,實際長度約多少公里?',
    options: ['16公里', '160公里', '1.6公里', '1600公里'],
    answer: 0,
    displayAnswer: '16×100000=1600000公分=16000公尺=16公里。'
  },
  // 縮圖面積
  {
    type: 'options',
    question: '一塊長方形農田長120公尺、寬80公尺,按照1:400縮圖。縮圖後的長是多少公分?',
    options: ['30公分', '60公分', '20公分', '15公分'],
    answer: 0,
    displayAnswer: '長:120公尺=12000公分÷400=30公分。寬:80公尺=8000公分÷400=20公分。'
  },
  {
    type: 'options',
    question: '一張藍圖比例尺 1:200,圖上房間長5公分、寬3公分,實際房間面積是多少平方公尺?',
    options: ['60平方公尺', '6平方公尺', '600平方公尺', '30平方公尺'],
    answer: 0,
    displayAnswer: '實際長=5×200=1000公分=10公尺,寬=3×200=600公分=6公尺,面積=10×6=60平方公尺。'
  },
  // 比例尺轉換
  {
    type: 'options',
    question: '比例尺1:50000的地圖上,兩村莊相距6公分。若要縮小成比例尺1:200000的地圖,兩村莊應相距多少公分?',
    options: ['1.5公分', '24公分', '6公分', '3公分'],
    answer: 0,
    displayAnswer: '實際距離:6×50000=300000公分=3公里。新地圖:300000÷200000=1.5公分。'
  },
  {
    type: 'options',
    question: '台灣氣象局的雨量分布圖,比例尺為1:300000。圖上台北到台中的降雨帶寬度量到4公分,實際降雨帶約多寬(公里)?',
    options: ['12公里', '120公里', '1.2公里', '1200公里'],
    answer: 0,
    displayAnswer: '4×300000=1200000公分=12000公尺=12公里。'
  },
  // 氣候情境
  {
    type: 'options',
    question: '濁水溪流量是大肚溪的 3/2 倍,大肚溪每秒流量是 40 公升,若要蓄滿一個 360 公升的水桶,濁水溪需要幾秒?',
    options: ['6秒', '9秒', '4秒', '12秒'],
    answer: 0,
    displayAnswer: '濁水溪流量 = 40 × 3/2 = 60 公升/秒,360 ÷ 60 = 6秒。'
  },
  {
    type: 'options',
    question: '農田A和B的面積比是 2:3,兩塊農田合計 5/2 公頃,農田A的面積是多少公頃?',
    options: ['1公頃', '3/2公頃', '2/3公頃', '5/4公頃'],
    answer: 0,
    displayAnswer: '總份數2+3=5份,每份 = 5/2 ÷ 5 = 1/2 公頃,A是2份 = 1/2 × 2 = 1公頃。'
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
// 科學延伸:三種熱傳遞的綜合應用
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '台灣夏天的城市「熱島效應」,是哪幾種熱傳遞方式共同造成的?',
    options: [
      '輻射(太陽曬熱深色屋頂和柏油路)+傳導(熱傳給空氣)+對流(熱空氣留在城市中)',
      '只有輻射',
      '只有對流',
      '只有傳導'
    ],
    answer: 0,
    displayAnswer: '城市熱島:①深色建築物和柏油吸收太陽輻射 ②傳導到周圍空氣 ③城市高密度建築阻礙對流,熱空氣滯留 → 城市比郊區熱。'
  },
  {
    type: 'options',
    question: '台灣傳統三合院用白色石灰牆、深屋簷、通風設計,這三個設計分別對應哪種熱傳遞原理?',
    options: [
      '白牆(反射輻射)、深屋簷(遮蔽輻射)、通風(加速對流散熱)',
      '白牆(傳導)、屋簷(對流)、通風(輻射)',
      '白牆(輻射)、屋簷(傳導)、通風(對流)',
      '三個設計都和傳導有關'
    ],
    answer: 0,
    displayAnswer: '白牆反射太陽輻射→減少吸熱;深屋簷遮蔭→減少直接輻射照射;通風設計→加速室內熱空氣對流,帶走熱量。這是傳統建築的熱學智慧。'
  },
  {
    type: 'options',
    question: '一個裝有熱水的保溫瓶,採用了哪些隔熱設計?',
    options: [
      '防傳導(真空層)+防對流(真空無流體)+防輻射(鏡面反射)',
      '只防傳導,用塑膠外殼',
      '只防對流,用密封設計',
      '只防輻射,用銀色鏡面'
    ],
    answer: 0,
    displayAnswer: '保溫瓶:①真空層阻止傳導和對流(無介質)②鏡面反射輻射,阻止熱輻射進出。三種隔熱方式同時運用,才能長時間保溫。'
  },
  {
    type: 'options',
    question: '台灣的高山氣溫比平地低,主要是因為什麼?',
    options: [
      '高山海拔高,大氣稀薄,保存地面輻射的能力弱,且對流使氣溫隨高度降低',
      '高山離太陽更近,反而更冷',
      '高山的太陽輻射被大氣阻擋更多',
      '高山有更多降雪,雪融化時吸熱'
    ],
    answer: 0,
    displayAnswer: '高山氣溫低的原因:大氣密度低、保熱能力弱;氣流絕熱上升時膨脹冷卻(每上升100公尺降約0.6°C)。這是對流和輻射共同作用的結果。'
  },
  {
    type: 'options',
    question: '台灣東部的黑潮(暖流)讓東部冬天比西部溫暖,這是什麼熱傳遞方式?',
    options: ['對流', '傳導', '輻射', '蒸發'],
    answer: 0,
    displayAnswer: '黑潮是溫暖的海流,熱的海水從熱帶流向溫帶(台灣東部),將熱能帶來——這是海水(流體)的對流,加溫了台灣東岸的氣候。'
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

// ===== 語文：古詩詞閱讀引導 =====

const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✏️',
  color: '#10B981',
  title: '動筆日',
  units: [
    {
      id: 'w4d4-math',
      name: '數學：W4 綜合應用',
      icon: '📐',
      lesson: {
        title: 'W4 數學總複習——比例尺情境串連',
        sections: [
          {
            title: '本週數學概念回顧',
            blocks: [
              {
                type: 'text',
                content: '這週的數學圍繞「縮放與尺度」：\n\n① 比例尺：1：N，圖上距離 × N = 實際距離\n② 縮圖：所有長度 ÷ N（縮小N倍）\n③ 擴圖：所有長度 × N（放大N倍）\n④ 面積縮放：長度縮N倍 → 面積縮N²倍'
              },
              {
                type: 'text',
                content: '比例尺是 W3「比與比值」的直接應用——1：50000 就是一個比，比值是 1/50000。學數學的樂趣就在這裡：同一個概念，在不同情境下出現，越用越熟。'
              }
            ]
          },
          {
            title: '解題時的單位換算',
            blocks: [
              {
                type: 'text',
                content: '比例尺計算最常見的錯誤是「單位沒有換算」！\n\n記住：比例尺的比是用「公分」對「公分」。\n\n實際距離若給的是「公尺」或「公里」，要先換成公分才能代入公式。\n\n1公尺 = 100公分\n1公里 = 1000公尺 = 100000公分'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    {
      id: 'w4d4-science',
      name: '科學延伸：熱傳遞綜合',
      icon: '🌡️',
      lesson: {
        title: '三種熱傳遞的生活應用',
        sections: [
          {
            title: '台灣的建築智慧',
            blocks: [
              {
                type: 'text',
                content: '台灣各族群面對不同的氣候環境，發展出不同的建築智慧，每一種設計都有熱學原理支撐：\n\n🏠 閩南三合院：白牆反射輻射，深屋簷遮陽，穿堂風加速對流\n🪨 排灣石板屋：石板導熱慢，冬暖夏涼，是利用傳導原理的天然冷暖系統\n🌿 阿美族竹屋：竹子導熱差，透氣性好，熱帶氣候下的涼爽居所\n🏔️ 泰雅族獵寮：木材隔熱，山地夜晚寒冷時保存體溫'
              }
            ]
          },
          {
            title: '現代的熱學應用',
            blocks: [
              {
                type: 'text',
                content: '現代台灣也有很多熱學應用：\n\n☀️ 太陽能熱水器：利用輻射吸熱，深色集熱板吸收太陽能\n🏗️ 雙層玻璃帷幕牆：阻隔輻射，減少空調能耗\n🌳 都市綠化：樹木遮蔭（輻射）+ 蒸散冷卻（對流），減少熱島效應\n🧊 冰箱壓縮機：強制對流帶走熱量'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateScienceQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    {
      id: 'w4d4-writing',
      name: '語文：抒情文寫作',
      icon: '✍️',
      lesson: {
        title: '節氣的溫度——以詩入文，寫一篇抒情短文',
        sections: [
          {
            title: '什麼是抒情文？',
            blocks: [
              {
                type: 'text',
                content: '抒情文是用文字表達「感受」的文體。\n\n它和說明文不同——說明文要把事情解釋清楚；抒情文則是把「心裡的感覺」寫清楚。\n\n抒情文的三個特點：\n① 用具體的感官細節帶出情感（不直接說「我很難過」，而是寫「雨打在鐵皮屋頂上的聲音讓我說不出話」）\n② 有真實或想像的場景作為依托\n③ 情感有起伏，結尾往往呼應開頭，帶給讀者回味'
              },
              {
                type: 'text',
                content: '抒情文裡最重要的工具是「感官描寫」——視覺、聽覺、嗅覺、觸覺、味覺。好的抒情文讓讀者彷彿身歷其境，感受到你感受到的溫度、氣味和聲音。'
              }
            ]
          },
          {
            title: '示範：〈春曉〉改寫',
            blocks: [
              {
                type: 'quote',
                content: '春眠不覺曉，處處聞啼鳥。夜來風雨聲，花落知多少。',
                author: '孟浩然〈春曉〉'
              },
              {
                type: 'text',
                content: '【示範短文：那個春天的早晨】\n\n阿志沒有設鬧鐘的習慣。\n\n但那天早上，他還是在天亮前醒了。不是因為什麼聲音，而是因為太安靜——那種安靜本身有重量，壓在被窩上，讓人說不清楚是睡著還是醒著。\n\n然後鳥叫開始了。不是一隻，是很多隻，從窗外那棵老榕樹的方向傳來，一聲接一聲，像是在傳遞某個消息。阿志翻了個身，把臉埋進枕頭裡，想繼續睡，但耳朵已經醒了。\n\n他記得昨晚的雨。雨是從半夜開始下的，打在鐵皮屋頂上，劈啪劈啪，他迷迷糊糊聽著，不知道什麼時候又睡著了。現在雨停了，空氣裡有泥土的氣味，從窗縫鑽進來，涼的。\n\n阿志終於坐起來，走到窗邊。院子裡的那株野薑花，昨晚還開著兩朵白花，現在只剩一朵，另一朵躺在地上，被雨打落了。他站在那裡看了一會兒，沒有覺得特別可惜，只是想：原來春天也這樣，給你溫柔，也帶走一些東西。'
              },
              {
                type: 'text',
                content: '【示範分析】\n第一段：用「安靜的重量」帶出朦朧剛醒的感受（觸覺）\n第二段：鳥聲喚醒——聽覺細節，呼應「處處聞啼鳥」\n第三段：回憶昨夜雨聲、空氣氣味——聽覺＋嗅覺，呼應「夜來風雨聲」\n第四段：看見落花收尾，情感點到為止，呼應「花落知多少」'
              }
            ]
          },
          {
            title: '你的寫作任務',
            blocks: [
              {
                type: 'text',
                content: '從這週的四首詩中，選一首你最有感覺的，寫一篇約 300 字的抒情短文。\n\n四首詩的寫作情境：\n🌸 孟浩然〈春曉〉→ 春雨後的早晨\n🌧️ 杜牧〈清明〉→ 四月的綿綿細雨\n☀️〈大暑歌〉→ 盛夏正午的酷熱\n🌾 白居易〈觀刈麥〉→ 夏日農田的勞動場景'
              },
              {
                type: 'text',
                content: '四段引導：\n\n第一段：描寫當時的天氣或環境，至少用兩種感官（視覺、聽覺、嗅覺、觸覺任選）\n\n第二段：你（或故事裡的人）在哪裡？在做什麼？身邊有什麼人或景物？\n\n第三段：這個天氣或場景讓你想到什麼、感受到什麼？可以是一段記憶、一個疑問，或一種說不清楚的情緒。\n\n第四段：用一句話或一個畫面收尾，呼應第一段的天氣。'
              },
              {
                type: 'text',
                content: '寫作小提醒：\n✏️ 不要直接說「我覺得很熱」——改成「汗從額頭滑進眼睛，鹹的」\n✏️ 不要直接說「我很難過」——改成「那朵花躺在泥地上，我沒有把它撿起來」\n✏️ 細節越具體，情感越真實'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w4d4-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '動筆日的收穫',
        sections: [
          {
            title: '本週的整合',
            blocks: [
              {
                type: 'text',
                content: '今天完成了三件事：\n\n📐 數學：用比例尺、縮擴圖解決台灣地圖和建築圖的計算題\n🌡️ 科學：用傳導、對流、輻射的眼光，重新認識台灣的建築和氣候\n✍️ 語文：從節氣古詩出發，練習用感官細節寫一篇抒情短文'
              },
              {
                type: 'text',
                content: '抒情文和詩一樣，都在說「感受」。詩人用短短二十字捕捉了清明的雨、大暑的熱、春曉的鳥鳴；你用三百字，把同樣的季節寫進了自己的故事裡。\n\n詩是別人的感受，文章是你的感受。兩者都值得被好好記下來。'
              },
              {
                type: 'text',
                content: '🎵 明天是藝術收尾日！我們要看台灣的節氣攝影，聽描寫四季的音樂，並完成 W4 詞彙總複習。'
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
