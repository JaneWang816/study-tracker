// src/data/weeks/week03/day1.js
// W3 Day1：台灣的河流在哪裡？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:台灣水系分布
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '台灣河流普遍具有哪些特性?',
    options: ['短而湍急,含沙量高', '長而緩慢,適合航行', '長而湍急,水量穩定', '短而平緩,水量豐沛'],
    answer: 0,
    displayAnswer: '短而湍急,含沙量高。台灣因地形陡峻,河流大多短促急湍,含沙量較高。'
  },
  {
    type: 'options',
    question: '台灣哪一條河川的長度最長?',
    options: ['濁水溪', '淡水河', '高屏溪', '大甲溪'],
    answer: 0,
    displayAnswer: '濁水溪全長約186公里,是台灣最長的河流。'
  },
  {
    type: 'options',
    question: '台灣哪一條河川的流量最大?',
    options: ['高屏溪', '濁水溪', '淡水河', '曾文溪'],
    answer: 0,
    displayAnswer: '高屏溪(又稱下淡水溪)是台灣流量最大的河流,流域面積廣大。'
  },
  {
    type: 'options',
    question: '台灣的河流大多發源自哪裡,然後向哪個方向流?',
    options: ['從中央山脈發源,分別向東西兩側流', '從西部平原發源,向東流入太平洋', '從北部山地發源,向南流', '從東部山脈發源,向西流入台灣海峽'],
    answer: 0,
    displayAnswer: '中央山脈是台灣的分水嶺,河流從此向東西兩側流下。'
  },
  {
    type: 'options',
    question: '淡水河流經哪一個城市?',
    options: ['台北', '台中', '台南', '高雄'],
    answer: 0,
    displayAnswer: '淡水河流貫台北盆地,是台北最重要的河流。'
  },
  {
    type: 'options',
    question: '台灣西部河川和東部河川相比,通常哪邊較長?',
    options: ['西部河川較長', '東部河川較長', '兩邊一樣長', '依季節不同'],
    answer: 0,
    displayAnswer: '中央山脈偏東,使得西部坡面較緩、較長,因此西部河川通常比東部長。'
  },
  {
    type: 'options',
    question: '濁水溪因水色混濁而得名,主要原因是什麼?',
    options: ['含有大量泥沙', '河水受到污染', '河床岩石是黑色的', '水源來自火山'],
    answer: 0,
    displayAnswer: '濁水溪流域土壤疏鬆,河水攜帶大量泥沙,使水色呈現濁黃色。'
  },
  {
    type: 'options',
    question: '台灣的河流容易氾濫,主要是因為什麼?',
    options: ['坡度陡、雨量集中,水流急速', '台灣的雨量太少', '河流太長,水流不及排出', '台灣地形平坦,排水不易'],
    answer: 0,
    displayAnswer: '台灣山坡陡峭,加上雨量集中(颱風、梅雨),水流迅速匯集,容易造成洪患。'
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
// 數學:比與比值
// ==========================================
const mathQuestions = [
  // 基本比的寫法
  {
    type: 'options',
    question: '濁水溪有 186 公里,大肚溪有 124 公里,濁水溪對大肚溪的比是?',
    options: ['186:124', '124:186', '310:186', '186:310'],
    answer: 0,
    displayAnswer: '186:124(比的寫法:前項:後項,前項寫的是「濁水溪」的數量)'
  },
  {
    type: 'options',
    question: '蘋果有 3 個,橘子有 2 個,蘋果對橘子的比是?',
    options: ['3:2', '2:3', '5:3', '3:5'],
    answer: 0,
    displayAnswer: '3:2'
  },
  {
    type: 'options',
    question: '男生有 4 人,女生有 6 人,男生對女生的比是?',
    options: ['4:6', '6:4', '10:4', '4:10'],
    answer: 0,
    displayAnswer: '4:6'
  },
  {
    type: 'options',
    question: '紅球有 5 顆,藍球有 3 顆,紅球對藍球的比是?',
    options: ['5:3', '3:5', '8:5', '5:8'],
    answer: 0,
    displayAnswer: '5:3'
  },
  // 比值計算
  {
    type: 'options',
    question: '比 3:4 的比值是多少?',
    options: ['0.75', '1.33', '1.75', '4'],
    answer: 0,
    displayAnswer: '比值 = 前項 ÷ 後項 = 3 ÷ 4 = 0.75'
  },
  {
    type: 'options',
    question: '比 5:2 的比值是多少?',
    options: ['2.5', '2', '0.4', '3.5'],
    answer: 0,
    displayAnswer: '比值 = 5 ÷ 2 = 2.5'
  },
  {
    type: 'options',
    question: '比 6:4 的比值是多少?',
    options: ['1.5', '1.33', '0.67', '2.4'],
    answer: 0,
    displayAnswer: '比值 = 6 ÷ 4 = 1.5'
  },
  {
    type: 'options',
    question: '比 9:3 的比值是多少?',
    options: ['3', '0.33', '6', '12'],
    answer: 0,
    displayAnswer: '比值 = 9 ÷ 3 = 3'
  },
  // 比值比較
  {
    type: 'options',
    question: '比 3:4 和比 5:4,哪個比值較大?',
    options: ['5:4 較大', '3:4 較大', '兩者相等', '無法比較'],
    answer: 0,
    displayAnswer: '比值分別為 0.75 和 1.25,5:4 的比值較大。'
  },
  {
    type: 'options',
    question: '比 2:5 和比 4:5,哪個比值較大?',
    options: ['4:5 較大', '2:5 較大', '兩者相等', '無法比較'],
    answer: 0,
    displayAnswer: '比值分別為 0.4 和 0.8,4:5 的比值較大。'
  },
  {
    type: 'options',
    question: '比 6:3 和比 4:2,哪個比值較大?',
    options: ['兩者相等', '6:3 較大', '4:2 較大', '無法比較'],
    answer: 0,
    displayAnswer: '比值分別為 2 和 2,兩者相等。'
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
// 科學:水循環與水的三態
// ==========================================
const scienceQuestions = [
  // 水的三態
  {
    type: 'options',
    question: '水的三種狀態是什麼?',
    options: ['固態（冰）、液態（水）、氣態（水蒸氣）', '固態（冰）、液態（水）、氣態（氧氣）', '冷水、熱水、冰水', '雨水、河水、海水'],
    answer: 0,
    displayAnswer: '水有三種狀態：固態（冰）、液態（水）、氣態（水蒸氣），視溫度不同而互相轉換。'
  },
  {
    type: 'options',
    question: '水從液態變成氣態，這個過程叫做什麼?',
    options: ['蒸發', '凝結', '凝固', '融化'],
    answer: 0,
    displayAnswer: '液態水吸收熱能後變成水蒸氣，這個過程叫做蒸發。'
  },
  {
    type: 'options',
    question: '水蒸氣遇冷變回液態水，這個過程叫做什麼?',
    options: ['凝結', '蒸發', '融化', '昇華'],
    answer: 0,
    displayAnswer: '水蒸氣遇冷失去熱能，變回液態水，這個過程叫做凝結。雲和霧都是凝結的結果。'
  },
  {
    type: 'options',
    question: '液態水變成固態冰，需要什麼條件?',
    options: ['溫度降到0°C以下', '溫度升到100°C以上', '加入大量鹽巴', '放在黑暗中'],
    answer: 0,
    displayAnswer: '水在0°C以下會凝固成冰。反過來，冰在0°C以上會融化成水。'
  },
  {
    type: 'options',
    question: '冬天窗戶上出現的水珠，是水的哪種變化?',
    options: ['水蒸氣凝結成液態水', '冰融化成液態水', '液態水蒸發成水蒸氣', '水蒸氣凝固成冰'],
    answer: 0,
    displayAnswer: '室內溫暖潮濕的空氣中的水蒸氣，碰到冰冷的窗戶後凝結成液態水珠。'
  },
  {
    type: 'options',
    question: '下列哪個現象屬於「蒸發」?',
    options: ['曬在外面的濕衣服慢慢變乾', '冰箱裡的水結成冰', '水壺裡的水沸騰冒泡', '冰棒拿出來後滴水'],
    answer: 0,
    displayAnswer: '濕衣服變乾，是衣服上的液態水蒸發成水蒸氣散到空氣中。'
  },
  // 水循環
  {
    type: 'options',
    question: '水循環的動力來源主要是什麼?',
    options: ['太陽的熱能', '月亮的引力', '地球的自轉', '風的吹動'],
    answer: 0,
    displayAnswer: '太陽提供熱能，使地表的水蒸發，啟動整個水循環。'
  },
  {
    type: 'options',
    question: '水循環的正確順序是哪個?',
    options: ['蒸發→上升→凝結成雲→降水→逕流', '降水→蒸發→凝結→逕流→上升', '凝結→蒸發→降水→逕流→上升', '逕流→降水→蒸發→凝結→上升'],
    answer: 0,
    displayAnswer: '水循環：地表水蒸發→水蒸氣上升→遇冷凝結成雲→降水（雨/雪）→逕流回到河川海洋→再蒸發。'
  },
  {
    type: 'options',
    question: '雲是怎麼形成的?',
    options: ['水蒸氣上升遇冷凝結成小水滴', '海水蒸發後直接飄到天空', '空氣中的氧氣和水混合', '風把水吹到高空'],
    answer: 0,
    displayAnswer: '水蒸氣上升到高空，氣溫下降，水蒸氣凝結成非常細小的水滴，聚集在一起就形成雲。'
  },
  {
    type: 'options',
    question: '台灣河川的水最終流向哪裡?',
    options: ['流入海洋，再蒸發進入水循環', '流入地底，永久消失', '全部被農業用完', '流到中央山脈存起來'],
    answer: 0,
    displayAnswer: '河川的水最終流入海洋，太陽加熱後再蒸發，繼續水循環——水是不會消失的！'
  },
  {
    type: 'options',
    question: '植物的「蒸散作用」在水循環中扮演什麼角色?',
    options: ['植物葉片也會散發水蒸氣，幫助水回到大氣', '植物會把水鎖在土裡不讓它蒸發', '植物製造水蒸氣供給動物飲用', '植物吸收水蒸氣讓空氣變乾'],
    answer: 0,
    displayAnswer: '植物從根部吸水，透過葉片上的氣孔散發水蒸氣，這叫蒸散作用，也是水循環的一部分。台灣森林茂密，蒸散量很大。'
  },
  {
    type: 'options',
    question: '下雨後，有些水滲入土壤變成地下水，這在水循環中叫做什麼?',
    options: ['入滲', '蒸發', '凝結', '逕流'],
    answer: 0,
    displayAnswer: '降水後，部分水滲入土壤和岩石縫隙，變成地下水，這個過程叫入滲。地下水也是重要的水資源。'
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

export { generateSocialQuestion, generateMathQuestion, generateScienceQuestion }

// ===== 組合成 Day 1 =====
const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🌊',
  color: '#3B82F6',
  title: '台灣的河流在哪裡？',
  units: [
    // 開場：貫穿文本
    {
      id: 'w3d1-opening',
      name: '開場：吾鄉仰望',
      icon: '📖',
      lesson: {
        title: '吳晟《吾鄉印象》——第一段',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '古早的古早的古早以前\n吾鄉的人們就懂得開始向上仰望\n吾鄉的天空傳說就是一片\n無所謂的陰天和無所謂的藍天',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '吳晟是台灣彰化的農民詩人，他的家鄉緊鄰濁水溪。「吾鄉」就是「我的故鄉」——你的吾鄉在哪裡？'
              },
              {
                type: 'text',
                content: '古人仰望天空，看的是什麼？雲的厚薄、雨的來去……這週，我們也要學習仰望：仰望台灣的山與河，感受自然界的流動與週期。'
              },
              {
                type: 'text',
                content: '🌊 本週主題：水文與光陰\n核心概念：流動、週期、比例關係\n今天問題：台灣的河流從哪裡來，又流向哪裡？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 A：社會
    {
      id: 'w3d1-social',
      name: '社會：台灣水系分布',
      icon: '🗺️',
      lesson: {
        title: '台灣的河流在哪裡？',
        sections: [
          {
            title: '台灣河流的特性',
            blocks: [
              {
                type: 'text',
                content: '台灣雖然面積不大，卻有超過100條主要河流。這些河流有一個共同特性：短而急！'
              },
              {
                type: 'text',
                content: '為什麼台灣的河流這麼短這麼急？因為台灣山脈高聳（玉山高達3952公尺），山和海之間的距離又短，水從高山衝下來，當然又快又急，還帶著大量的泥沙。'
              }
            ]
          },
          {
            title: '中央山脈是分水嶺',
            blocks: [
              {
                type: 'text',
                content: '中央山脈像一道脊樑，把台灣分成東西兩邊，雨水落下後，往西流入台灣海峽，往東流入太平洋。'
              },
              {
                type: 'text',
                content: '因為中央山脈偏東側，西部的坡面比較長、比較緩，所以西部的河川通常比東部長。\n\n東部的河川雖然短，但因為山很近、坡度很陡，水流反而更急。'
              }
            ]
          },
          {
            title: '台灣三大代表河川',
            blocks: [
              {
                type: 'text',
                content: '🔵 濁水溪：全長約186公里，是台灣最長的河流。因為帶著大量泥沙，水色混濁而得名。濁水溪孕育了肥沃的嘉南平原，是台灣的「米倉之河」。'
              },
              {
                type: 'text',
                content: '🟤 高屏溪：台灣流量最大的河流，流域面積廣大，供應了高雄、屏東地區的重要水源。'
              },
              {
                type: 'text',
                content: '🟦 淡水河：流貫台北盆地，是首都最重要的河流。雖然不是最長，但在歷史上是台北發展的命脈。'
              }
            ]
          },
          {
            title: '河流帶給台灣什麼？',
            blocks: [
              {
                type: 'text',
                content: '河流攜帶的泥沙，堆積在出海口和平原，形成了肥沃的農地。濁水溪就是這樣造就了中部的嘉南大平原。'
              },
              {
                type: 'text',
                content: '古人選擇在河邊聚落，因為有水可以飲用、灌溉農田、運輸貨物。台灣的許多城市，都是沿著河流生長起來的。'
              },
              {
                type: 'quote',
                content: '河流是文明的搖籃，台灣的農業文化，就從這些短急的河流說起。',
                author: '課程導引'
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

    // 單元 B：數學
    {
      id: 'w3d1-math',
      name: '數學：比與比值',
      icon: '📐',
      lesson: {
        title: '比與比值——用數學描述關係',
        sections: [
          {
            title: '什麼是「比」？',
            blocks: [
              {
                type: 'text',
                content: '我們常說「濁水溪是台灣最長的河流」，但如果想精確描述兩條河的長度關係，就需要用「比」。'
              },
              {
                type: 'text',
                content: '比的寫法：前項：後項\n\n例：濁水溪長186公里，大肚溪長124公里\n→ 濁水溪對大肚溪的長度比 = 186：124'
              },
              {
                type: 'text',
                content: '注意：比有方向性！\n「濁水溪：大肚溪 = 186：124」和「大肚溪：濁水溪 = 124：186」是不同的比，代表不同的意思。'
              }
            ]
          },
          {
            title: '什麼是「比值」？',
            blocks: [
              {
                type: 'text',
                content: '比值 = 前項 ÷ 後項\n\n186：124 的比值 = 186 ÷ 124 ≈ 1.5\n\n這個比值告訴我們：濁水溪大約是大肚溪長度的1.5倍。'
              },
              {
                type: 'text',
                content: '比值是一個數，可以用小數或分數表示：\n\n3：4 的比值 = 3 ÷ 4 = 0.75 = 3/4\n6：2 的比值 = 6 ÷ 2 = 3'
              }
            ]
          },
          {
            title: '生活中的比',
            blocks: [
              {
                type: 'text',
                content: '比在生活中無處不在：\n\n• 食譜：麵粉和水的比是 2：1\n• 地圖：比例尺 1：50000（圖上1公分代表實際50000公分）\n• 運動：勝負比 3：1\n• 音樂：節拍比 4：4 拍'
              },
              {
                type: 'text',
                content: '今天學的比與比值，是下週學「比例尺」的基礎，也是六年級數學的重要概念！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // 單元 C：科學
    {
      id: 'w3d1-science',
      name: '科學：水循環與三態變化',
      icon: '💧',
      lesson: {
        title: '水的旅行——循環不息的生命之源',
        sections: [
          {
            title: '水的三種面貌',
            blocks: [
              {
                type: 'text',
                content: '你喝的水、窗戶上的水珠、冰箱裡的冰塊，其實都是同一種物質——水（H₂O）。水會根據溫度，在三種狀態之間變換：'
              },
              {
                type: 'text',
                content: '💧 液態（水）：常溫下的水，可以流動\n🧊 固態（冰）：0°C 以下，水凝固成冰\n🌫️ 氣態（水蒸氣）：加熱蒸發，看不見但存在於空氣中'
              },
              {
                type: 'text',
                content: '三態互換的名稱：\n• 液態 → 氣態：蒸發（吸熱）\n• 氣態 → 液態：凝結（放熱）\n• 液態 → 固態：凝固（放熱）\n• 固態 → 液態：融化（吸熱）'
              }
            ]
          },
          {
            title: '水循環——水的旅行路線',
            blocks: [
              {
                type: 'text',
                content: '地球上的水從來不會消失，只是不斷地旅行。這個旅行的路線，就叫做「水循環」，動力來自太陽的熱能。'
              },
              {
                type: 'text',
                content: '水循環的步驟：\n\n① 蒸發：太陽加熱海洋、河川、湖泊，液態水蒸發成水蒸氣\n② 上升：水蒸氣隨空氣上升到高空\n③ 凝結：高空氣溫低，水蒸氣凝結成小水滴，形成雲\n④ 降水：水滴越聚越多，以雨或雪的形式落下\n⑤ 逕流：雨水沿地面流入河川，最終回到海洋\n⑥ 入滲：部分雨水滲入土壤，變成地下水'
              },
              {
                type: 'quote',
                content: '水循環讓地球的水永遠不會用完——你今天喝的水，可能曾經是恐龍喝過的水。',
                author: '課程導引'
              }
            ]
          },
          {
            title: '台灣的水循環有什麼特色？',
            blocks: [
              {
                type: 'text',
                content: '台灣四面環海、山脈高聳，水循環非常活躍。夏天颱風和梅雨帶來大量降水，水從中央山脈快速流下，沖刷泥沙進入平原和海洋。'
              },
              {
                type: 'text',
                content: '台灣的森林也扮演重要角色：樹木的根留住水分，葉片透過蒸散作用把水送回大氣——森林就像一個巨大的抽水機，讓水循環更順暢。'
              },
              {
                type: 'text',
                content: '💡 想一想：如果台灣的山坡森林都被砍光了，水循環會有什麼變化？河川的泥沙會變多還是變少？'
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

    // 今日回顧
    {
      id: 'w3d1-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '三科學習連結',
            blocks: [
              {
                type: 'text',
                content: '今天我們從三個角度認識了「流動」：\n\n🗺️ 社會：台灣的河流從中央山脈出發，短而急，帶著泥沙滋養平原\n📐 數學：比與比值，用數字精確描述兩個量的關係\n💧 科學：水在三種狀態間不斷轉換，透過水循環在地球上永恆流動'
              },
              {
                type: 'text',
                content: '吳晟寫道「吾鄉的人們就懂得開始向上仰望」——古人仰望天空，看雲的厚薄判斷何時會下雨，決定農事時機。水循環，就是他們最重要的生活課題。'
              },
              {
                type: 'text',
                content: '🌊 明天我們要進入更深的問題：水怎麼養活了台灣？一條人工挖出的水圳，如何改變了百萬人的命運？'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day1
