// src/data/weeks/week04/day3.js
// W4 Day3：太陽的熱怎麼來？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:比例尺在生活中的應用
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '以下哪種地圖的比例尺最大(最詳細)?',
    options: ['1:5000(社區詳細地圖)', '1:5000000(全台地圖)', '1:500000(縣市地圖)', '1:50000(鄉鎮地圖)'],
    answer: 0,
    displayAnswer: '比例尺越大(分母越小),表示縮小倍數越少,地圖越詳細。1:5000的地圖上1公分=50公尺,細節最多;1:5000000上1公分=50公里,細節最少。'
  },
  {
    type: 'options',
    question: '台灣的五萬分之一地圖(比例尺1:50000),圖上1公分代表實際多少公里?',
    options: ['0.5公里', '0.05公里', '5公里', '50公里'],
    answer: 0,
    displayAnswer: '50000公分 = 500公尺 = 0.5公里。圖上1公分代表實際0.5公里。'
  },
  {
    type: 'options',
    question: '建築師設計一棟樓,把10公尺的牆畫成圖紙上5公分,這張圖的比例尺是多少?',
    options: ['1:200', '1:20', '1:2000', '1:50'],
    answer: 0,
    displayAnswer: '10公尺 = 1000公分,5公分對應1000公分,比例尺 = 5/1000 = 1/200,即 1:200。'
  },
  {
    type: 'options',
    question: '一張台北市地圖,比例尺為1:25000。量到台北101到總統府的圖上距離是6公分,實際距離是多少公尺?',
    options: ['1500公尺', '150公尺', '15000公尺', '150000公尺'],
    answer: 0,
    displayAnswer: '6公分 × 25000 = 150000公分 = 1500公尺(約1.5公里)。'
  },
  {
    type: 'options',
    question: '清朝丈量台灣土地,把1甲地(邊長約100公尺的正方形)畫進地籍圖,若比例尺為1:2000,圖上這塊地的邊長約幾公分?',
    options: ['約5公分', '約50公分', '約500公分', '約0.5公分'],
    answer: 0,
    displayAnswer: '100公尺=10000公分,10000÷2000=5公分。比例尺1:2000,每2000公分(20公尺)畫1公分。'
  },
  {
    type: 'options',
    question: '一個人設計玩具模型,想把真實的火車(長20公尺)做成1:100的模型,模型應做多長?',
    options: ['0.2公尺(20公分)', '2公尺', '0.02公尺(2公分)', '200公分'],
    answer: 0,
    displayAnswer: '20公尺 ÷ 100 = 0.2公尺 = 20公分。'
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
// 數學:比例尺綜合計算
// ==========================================
const mathQuestions = [
  // 兩步驟計算
  {
    type: 'options',
    question: '比例尺 1:50000,圖上測得A、B兩點距離4公分,B、C兩點距離6公分,A到C(經過B)的實際距離是多少公里?',
    options: ['5公里', '10公里', '500公尺', '50公里'],
    answer: 0,
    displayAnswer: '(4+6)×50000=500000公分=5000公尺=5公里'
  },
  {
    type: 'options',
    question: '比例尺 1:100000,圖上兩條路線分別長3公分和5公分,5公分那條的實際距離是多少公里?',
    options: ['5公里', '3公里', '8公里', '50公里'],
    answer: 0,
    displayAnswer: '5×100000=500000公分=5公里'
  },
  // 面積計算
  {
    type: 'options',
    question: '比例尺 1:1000,圖上一塊正方形農田邊長3公分,實際面積是多少平方公尺?',
    options: ['900平方公尺', '90000平方公尺', '9平方公尺', '9000平方公尺'],
    answer: 0,
    displayAnswer: '實際邊長=3×1000=3000公分=30公尺,面積=30×30=900平方公尺。'
  },
  {
    type: 'options',
    question: '比例尺 1:500,圖上一塊長方形土地長4公分、寬2公分,實際面積是多少平方公尺?',
    options: ['200平方公尺', '8平方公尺', '800平方公尺', '20000平方公尺'],
    answer: 0,
    displayAnswer: '實際長=4×500=2000公分=20公尺,實際寬=2×500=1000公分=10公尺,面積=20×10=200平方公尺。'
  },
  // 比較不同比例尺
  {
    type: 'options',
    question: '有兩張地圖,A圖比例尺 1:25000,B圖比例尺 1:100000,若同一條路在A圖量到8公分,在B圖上量到多少公分?',
    options: ['2公分', '32公分', '4公分', '16公分'],
    answer: 0,
    displayAnswer: 'A圖8公分×25000=200000公分=2000公尺。B圖:2000公尺=200000公分÷100000=2公分。'
  },
  // 台灣地圖應用
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
    question: '一塊長方形農田長120公尺、寬80公尺,按照1:400縮圖。縮圖後長是多少公分?',
    options: ['30公分', '60公分', '15公分', '20公分'],
    answer: 0,
    displayAnswer: '長:120公尺=12000公分÷400=30公分。'
  },
  {
    type: 'options',
    question: '一張藍圖比例尺 1:200,圖上房間長5公分、寬3公分,實際房間面積是多少平方公尺?',
    options: ['60平方公尺', '6平方公尺', '600平方公尺', '30平方公尺'],
    answer: 0,
    displayAnswer: '實際長=5×200=1000公分=10公尺,寬=3×200=600公分=6公尺,面積=10×6=60平方公尺。'
  },
  // 轉換比例尺
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
// 科學:熱的輻射
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '熱的「輻射」是指什麼?',
    options: [
      '熱以電磁波(紅外線等)形式向四面八方傳播,不需要介質',
      '熱透過固體直接接觸傳遞',
      '熱隨著流體流動傳遞',
      '熱只能在有空氣的地方傳遞'
    ],
    answer: 0,
    displayAnswer: '輻射是熱以電磁波(主要是紅外線)形式傳播,不需要任何介質(甚至可以在真空中傳遞)。太陽的熱就是透過輻射穿越真空宇宙到達地球。'
  },
  {
    type: 'options',
    question: '太陽的熱能如何傳遞到地球?',
    options: [
      '透過電磁輻射(主要是可見光和紅外線)穿越真空宇宙',
      '透過空氣傳導',
      '透過太陽風對流',
      '透過地球磁場引導'
    ],
    answer: 0,
    displayAnswer: '地球和太陽之間是真空,傳導和對流都無法在真空中傳遞熱量。太陽輻射以電磁波形式穿越宇宙,到達地球後被大氣和地面吸收轉化為熱能。'
  },
  {
    type: 'options',
    question: '深色物體和淺色物體,哪個在太陽下吸熱更快?',
    options: [
      '深色物體吸熱更快',
      '淺色物體吸熱更快',
      '兩者吸熱速度相同',
      '這和顏色無關,只和材質有關'
    ],
    answer: 0,
    displayAnswer: '深色(黑色)物體吸收輻射的能力強,反射少,因此吸熱快;淺色(白色)物體反射輻射多,吸熱慢。這就是為什麼夏天穿白衣比較涼。'
  },
  {
    type: 'options',
    question: '台灣夏天的柏油路面溫度可達60°C以上,這主要是什麼熱傳遞方式?',
    options: [
      '輻射:太陽輻射被深色柏油大量吸收',
      '對流:熱空氣加熱柏油路',
      '傳導:地底的熱傳上來',
      '蒸發:水分蒸發加熱柏油路'
    ],
    answer: 0,
    displayAnswer: '黑色柏油是輻射吸收的良好材料,在強烈太陽輻射下大量吸熱,路面溫度遠高於氣溫。這也是城市「熱島效應」的原因之一。'
  },
  {
    type: 'options',
    question: '太空衣為什麼要做成金屬銀色或白色?',
    options: [
      '金屬色能反射太陽輻射,防止太空人過熱;也能減少熱輻射散失,防止過冷',
      '只是為了美觀',
      '為了讓太空人在真空中更容易被看見',
      '白色能吸收更多太陽能'
    ],
    answer: 0,
    displayAnswer: '太空中沒有大氣保護,在陽光照射側會極熱,在陰影側會極冷。太空衣的金屬反射塗層,能反射太陽輻射(防熱)、減少熱輻射散失(防冷),達到溫度調節效果。'
  },
  {
    type: 'options',
    question: '台灣的「溫室種植」是利用什麼原理?',
    options: [
      '輻射:太陽短波輻射可穿透玻璃進入,但地面發出的長波輻射被玻璃阻擋,熱量留在溫室內',
      '傳導:玻璃把太陽的熱傳導進溫室',
      '對流:阻止溫室內的熱空氣對流散失',
      '反射:玻璃把太陽光反射到植物上'
    ],
    answer: 0,
    displayAnswer: '溫室效應:太陽發出短波輻射可穿透玻璃,被地面和植物吸收後,以長波紅外線再輻射,但長波輻射無法穿透玻璃,熱量留在溫室內。大氣層對地球的保暖原理相同。'
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

// ===== 組合成 Day 3 =====
const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '☀️',
  color: '#EF4444',
  title: '太陽的熱怎麼來？',
  units: [
    {
      id: 'w4d3-opening',
      name: '開場：大暑的詩',
      icon: '📖',
      lesson: {
        title: '古詩詞中的節氣——第三段',
        sections: [
          {
            title: '今日詩引',
            blocks: [
              {
                type: 'quote',
                content: '赤日炎炎似火燒，野田禾稻半枯焦。\n農夫心內如湯煮，公子王孫把扇搖。',
                author: '《水滸傳》插曲〈大暑歌〉（傳為宋代民謠）'
              },
              {
                type: 'text',
                content: '「赤日炎炎似火燒」——這正是太陽輻射的威力。夏天的大暑節氣（7月下旬），太陽高度角最大，輻射最強，農田裡的稻子都快曬乾了。'
              },
              {
                type: 'text',
                content: '今天我們要學習太陽的熱是怎麼「燒」到地球的——輻射，熱傳遞的第三種方式，也是影響台灣氣候最根本的力量。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w4d3-social',
      name: '地理延伸：比例尺與地圖應用',
      icon: '🗺️',
      lesson: {
        title: '比例尺讓我們讀懂地圖',
        sections: [
          {
            title: '不同用途，不同比例尺',
            blocks: [
              {
                type: 'text',
                content: '地圖的比例尺取決於用途：\n\n🌏 國家地圖（如台灣全圖）：1：500000 ~ 1：2000000。縮得很小，看整體形狀和主要城市。\n\n🏙️ 都市計畫圖：1：5000 ~ 1：25000。較大，看道路、建築物分布。\n\n🏠 建築圖：1：100 ~ 1：500。非常大，看房間大小和門窗位置。'
              }
            ]
          },
          {
            title: '等高線：地圖上的第三個維度',
            blocks: [
              {
                type: 'text',
                content: '地圖只有長和寬（二維），怎麼表示山的高低（第三維）？答案是「等高線」——把相同高度的點連起來，就是等高線。\n\n等高線越密集，表示坡度越陡；越稀疏，表示地形越平緩。\n\n台灣的等高線地圖，可以清楚看到西部平原（稀疏）和東部山脈（密集）的差異。'
              }
            ]
          },
          {
            title: '清朝地圖和現代地圖的比較',
            blocks: [
              {
                type: 'text',
                content: '清朝台灣地圖（如《台灣府志》中的地圖）和現代地圖比起來，精確度差很多——沒有準確的比例尺，形狀也不準確，東部幾乎是空白。\n\n這不是清朝人不聰明，而是測量技術的限制：沒有GPS、沒有衛星，測量東部山地極其困難。\n\n現代台灣地圖精確到公分，靠的是衛星、航空攝影和電腦計算——科技讓比例尺越來越準確。'
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

    {
      id: 'w4d3-math',
      name: '數學：比例尺綜合計算',
      icon: '📐',
      lesson: {
        title: '比例尺綜合應用——多步驟計算',
        sections: [
          {
            title: '複習：比例尺計算的兩個方向',
            blocks: [
              {
                type: 'text',
                content: '比例尺 1：N（N是分母）\n\n方向① 圖→實：實際距離 = 圖上距離（公分）× N（結果是公分，再換算）\n方向② 實→圖：圖上距離 = 實際距離（公分）÷ N'
              }
            ]
          },
          {
            title: '多步驟情境題',
            blocks: [
              {
                type: 'text',
                content: '例：一張台灣地形圖比例尺為 1：500000，量到以下距離：\n• 台北到台中：圖上約7公分\n• 台中到台南：圖上約5公分\n\n台北到台南的實際距離約多少公里？\n\n解題：\n① 台北→台中：7×500000=3500000公分=35公里\n② 台中→台南：5×500000=2500000公分=25公里\n③ 台北→台南：35+25=60公里'
              },
              {
                type: 'text',
                content: '面積的縮放比：\n注意！如果長度縮小N倍，面積縮小N²倍！\n\n例：比例尺 1：100（長度縮小100倍）\n→ 面積縮小 100² = 10000倍\n→ 圖上1平方公分 = 實際10000平方公分 = 1平方公尺'
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

    {
      id: 'w4d3-science',
      name: '科學：熱的輻射',
      icon: '☀️',
      lesson: {
        title: '熱怎麼傳遞？——輻射篇',
        sections: [
          {
            title: '什麼是輻射？',
            blocks: [
              {
                type: 'text',
                content: '輻射是熱以「電磁波」形式傳播，不需要任何介質——甚至可以在真空中傳遞。\n\n太陽的熱能穿越1億5000萬公里的真空宇宙到達地球，靠的就是輻射。'
              },
              {
                type: 'text',
                content: '生活中的輻射：\n• 太陽曬到皮膚的溫熱感\n• 電暖爐（電熱器）的熱\n• 烤箱的熱\n• 微波爐（微波是電磁波的一種）'
              }
            ]
          },
          {
            title: '深色吸熱，淺色反熱',
            blocks: [
              {
                type: 'text',
                content: '不同顏色對輻射的吸收和反射能力不同：\n\n⬛ 深色（黑色）：吸收輻射強，反射少 → 吸熱快，也散熱快\n⬜ 淺色（白色）：反射輻射多，吸收少 → 吸熱慢，也保溫好\n\n台灣傳統三合院常塗白灰，是一種被動式隔熱設計；黑色太陽能板則利用深色吸熱的原理。'
              }
            ]
          },
          {
            title: '三種熱傳遞的比較',
            blocks: [
              {
                type: 'text',
                content: '學到這裡，三種熱傳遞都學完了：\n\n🔶 傳導：固體中接觸傳遞（鍋子燙手）\n🔷 對流：流體流動傳遞（熱空氣上升）\n🔸 輻射：電磁波傳遞（太陽曬熱地面）\n\n台灣的氣候，是三者共同作用的結果：\n太陽輻射加熱地面（輻射）→ 地面加熱底層空氣（傳導）→ 熱空氣上升，帶來對流雨（對流）'
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
      id: 'w4d3-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '從太陽到台灣的尺度',
            blocks: [
              {
                type: 'text',
                content: '今天的三個主題，都在說「太陽的尺度」：\n\n🗺️ 地理：不同比例尺的地圖，對應不同尺度的觀察（國家→都市→建築）\n📐 數學：比例尺的多步驟計算，面積縮放是長度的平方倍\n☀️ 科學：太陽輻射穿越宇宙，以輻射→傳導→對流的鏈式反應，讓台灣有了豐富的氣候'
              },
              {
                type: 'text',
                content: '「赤日炎炎似火燒」——現在你知道了，詩人感受到的，是太陽輻射被深色稻田土地吸收的熱，以及熱地面透過傳導和對流烘烤著周圍的空氣。一首詩，藏著三種物理原理。'
              },
              {
                type: 'text',
                content: '✏️ 明天是動筆日！我們要把這週的比例尺、氣候、熱學全部用在一起，解決真實的台灣地圖題——還要開始閱讀古詩詞，分析詩中的氣候資訊。'
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
