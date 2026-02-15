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
// 科學:月相觀測入門
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '月亮本身會發光嗎?',
    options: ['不會,我們看到的是月亮反射太陽光', '會,月亮自己發出銀白色的光', '會,但只在晚上才發光', '不會,月光是地球大氣層折射的光'],
    answer: 0,
    displayAnswer: '月亮本身不會發光,我們看到的月光是月球表面反射太陽光的結果。'
  },
  {
    type: 'options',
    question: '從新月到下一次新月,大約需要多少天?',
    options: ['約29.5天', '約15天', '約20天', '約365天'],
    answer: 0,
    displayAnswer: '月相的完整週期約為29.5天,這也是農曆一個月的由來。'
  },
  {
    type: 'options',
    question: '月相按順序排列,「上弦月」出現在哪個階段?',
    options: ['新月之後、滿月之前', '新月之前', '滿月之後、新月之前', '和滿月同時出現'],
    answer: 0,
    displayAnswer: '月相順序:新月→眉月→上弦月→盈凸月→滿月→虧凸月→下弦月→殘月→新月。'
  },
  {
    type: 'options',
    question: '滿月時,地球、月亮和太陽的位置關係是?',
    options: ['地球在月亮和太陽之間', '月亮在地球和太陽之間', '太陽在地球和月亮之間', '三者排成直角'],
    answer: 0,
    displayAnswer: '滿月時,地球在中間,月亮和太陽分別在地球的兩側,月亮被太陽完整照亮。'
  },
  {
    type: 'options',
    question: '月相一個完整週期共有幾個主要相位?',
    options: ['8個', '4個', '6個', '12個'],
    answer: 0,
    displayAnswer: '月相有八個主要相位:新月、眉月、上弦月、盈凸月、滿月、虧凸月、下弦月、殘月。'
  },
  {
    type: 'options',
    question: '農曆的「十五」通常是什麼月相?',
    options: ['滿月', '新月', '上弦月', '下弦月'],
    answer: 0,
    displayAnswer: '農曆每月初一是新月,十五前後是滿月,這是農曆曆法的基礎。'
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
                content: '古人仰望天空，看的是什麼？月亮、星星、雲……這週，我們也要學習仰望：仰望台灣的山與河，仰望夜空中的月亮，看看自然界的流動與週期。'
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
      name: '科學：月相觀測入門',
      icon: '🌙',
      lesson: {
        title: '月亮的臉——認識月相',
        sections: [
          {
            title: '月亮會自己發光嗎？',
            blocks: [
              {
                type: 'text',
                content: '在回答這個問題前，先想想：你能在白天看到月亮嗎？'
              },
              {
                type: 'text',
                content: '答案是：可以！白天有時也能看到月亮（只是比較不明顯）。\n\n月亮本身不會發光，我們看到的月光，是月球表面反射太陽光的結果——就像鏡子反射光一樣。'
              }
            ]
          },
          {
            title: '月相是怎麼變化的？',
            blocks: [
              {
                type: 'text',
                content: '月亮繞地球公轉，每繞一圈約29.5天。在不同位置，被太陽照亮的部分不同，我們從地球看到的形狀就不一樣，這就是「月相」。'
              },
              {
                type: 'text',
                content: '八個主要月相（按順序）：\n\n🌑 新月（看不見月亮）\n🌒 眉月（細細的月牙）\n🌓 上弦月（右半圓）\n🌔 盈凸月（超過半圓，右側）\n🌕 滿月（完整的圓）\n🌖 虧凸月（超過半圓，左側）\n🌗 下弦月（左半圓）\n🌘 殘月（細月牙，左側）'
              }
            ]
          },
          {
            title: '月相與農曆',
            blocks: [
              {
                type: 'text',
                content: '農曆就是根據月相設計的曆法：\n\n• 農曆初一 = 新月（看不見月亮）\n• 農曆十五 = 滿月（月最圓）\n• 農曆一個月 ≈ 29.5天（月相一個週期）'
              },
              {
                type: 'text',
                content: '這就是為什麼吳晟詩裡說「古早以前吾鄉的人們就懂得向上仰望」——農耕時代的人，靠月相判斷日期、決定農事！'
              },
              {
                type: 'text',
                content: '🔭 觀測挑戰：今晚試試看仰望夜空，月亮是什麼形狀？對照月相圖，判斷今天大約是農曆幾號。'
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
                content: '今天我們從三個角度認識了「流動」與「觀察」：\n\n🗺️ 社會：台灣的河流從中央山脈出發，短而急，帶著泥沙滋養平原\n📐 數學：比與比值，用數字精確描述兩個量的關係\n🌙 科學：月亮反射太陽光，29.5天一個週期，農曆就是月相的紀錄'
              },
              {
                type: 'text',
                content: '吳晟寫道「吾鄉的人們就懂得開始向上仰望」——古人仰望月亮，是為了掌握時間；現代人仰望，還能看到什麼？'
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
