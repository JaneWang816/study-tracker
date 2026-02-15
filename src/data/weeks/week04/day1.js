// src/data/weeks/week04/day1.js
// W4 Day1：台灣的氣候是什麼樣子？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:台灣氣候分布
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '台灣的氣候以什麼類型為主?',
    options: ['熱帶及副熱帶氣候', '溫帶季風氣候', '沙漠氣候', '寒帶氣候'],
    answer: 0,
    displayAnswer: '台灣大部分地區屬於熱帶及副熱帶氣候,北回歸線通過台灣中部(嘉義附近),線以南屬熱帶,以北屬副熱帶。'
  },
  {
    type: 'options',
    question: '北回歸線通過台灣哪個縣市附近?',
    options: ['嘉義縣', '台北市', '台中市', '屏東縣'],
    answer: 0,
    displayAnswer: '北回歸線(北緯23.5°)通過嘉義縣水上鄉附近,是熱帶與副熱帶的分界線。'
  },
  {
    type: 'options',
    question: '台灣的雨量分布有什麼特徵?',
    options: [
      '山地多雨、平地少雨;東部迎風面多雨、西部背風面相對少雨',
      '全台灣雨量均勻,每個月都差不多',
      '東部比西部雨量少',
      '只有台北會下雨,其他地方幾乎不下雨'
    ],
    answer: 0,
    displayAnswer: '台灣山地因地形抬升,雨量豐沛;東部面對太平洋,是颱風和東北季風的迎風面,雨量多;西部相對背風,雨量較少。'
  },
  {
    type: 'options',
    question: '台灣的季節性降雨主要分成兩期,分別是?',
    options: [
      '梅雨季(5-6月)和颱風季(7-9月)',
      '春雨和冬雨',
      '只有夏天下雨,其他季節都不下雨',
      '秋雨和冬雨'
    ],
    answer: 0,
    displayAnswer: '台灣每年5-6月的梅雨季和7-9月的颱風季,帶來大量降雨,是台灣水資源的主要來源。'
  },
  {
    type: 'options',
    question: '台灣為什麼冬天南北溫差很大?',
    options: [
      '北部受東北季風影響明顯,較寒冷多雨;南部緯度低,冬天仍溫暖乾燥',
      '因為台灣南北距離很遠',
      '因為南部靠近赤道,北部靠近北極',
      '台灣冬天南北溫差其實不大'
    ],
    answer: 0,
    displayAnswer: '冬天東北季風從北方吹來,台灣北部首當其衝,氣溫低且多雨;南部有中央山脈阻擋,加上緯度較低,冬天溫暖乾燥。'
  },
  {
    type: 'options',
    question: '台灣的山地氣候和平地有什麼不同?',
    options: [
      '山地海拔越高,氣溫越低,每上升100公尺約降溫0.6°C',
      '山地比平地更熱',
      '山地和平地溫度完全一樣',
      '山地比平地乾燥'
    ],
    answer: 0,
    displayAnswer: '大氣溫度隨海拔升高而降低,每上升100公尺約降低0.6°C,這就是為什麼台灣高山(如玉山)終年積雪或嚴寒,而平地卻炎熱。'
  },
  {
    type: 'options',
    question: '台灣「焚風」現象主要發生在哪裡?',
    options: ['花蓮、台東(東部地區)', '台北盆地', '澎湖群島', '南投山區'],
    answer: 0,
    displayAnswer: '焚風是氣流越過山脈後,在背風坡下降增溫的現象。台灣的焚風多發生在東部花蓮、台東,當西南氣流越過中央山脈後在東部形成熱而乾燥的焚風。'
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
// 數學:比例尺概念
// ==========================================
const mathQuestions = [
  // 讀比例尺
  {
    type: 'options',
    question: '地圖比例尺為 1:50000,圖上 1 公分代表實際距離多少公分?',
    options: ['50000 公分', '5000 公分', '500 公分', '500000 公分'],
    answer: 0,
    displayAnswer: '比例尺 1:50000 表示圖上1公分代表實際50000公分(即500公尺)。'
  },
  {
    type: 'options',
    question: '比例尺 1:100000,圖上 1 公分代表實際多少公里?',
    options: ['1 公里', '0.1 公里', '10 公里', '100 公里'],
    answer: 0,
    displayAnswer: '100000公分 = 1000公尺 = 1公里。圖上1公分代表實際1公里。'
  },
  {
    type: 'options',
    question: '比例尺 1:25000,圖上 4 公分代表實際多少公尺?',
    options: ['1000 公尺', '10000 公尺', '6250 公尺', '100000 公尺'],
    answer: 0,
    displayAnswer: '1公分代表25000公分=250公尺,4公分代表4×250=1000公尺。'
  },
  // 圖上轉實際
  {
    type: 'options',
    question: '比例尺 1:50000,圖上 3 公分代表實際多少公尺?',
    options: ['1500 公尺', '3000 公尺', '750 公尺', '15000 公尺'],
    answer: 0,
    displayAnswer: '3 × 50000 = 150000公分 = 1500公尺'
  },
  {
    type: 'options',
    question: '比例尺 1:20000,圖上 5 公分代表實際多少公尺?',
    options: ['1000 公尺', '2000 公尺', '500 公尺', '10000 公尺'],
    answer: 0,
    displayAnswer: '5 × 20000 = 100000公分 = 1000公尺'
  },
  {
    type: 'options',
    question: '比例尺 1:100000,圖上 2 公分代表實際多少公里?',
    options: ['2 公里', '1 公里', '20 公里', '0.2 公里'],
    answer: 0,
    displayAnswer: '2 × 100000 = 200000公分 = 2000公尺 = 2公里'
  },
  // 實際轉圖上
  {
    type: 'options',
    question: '比例尺 1:50000,實際距離 3000 公尺,在地圖上應畫多少公分?',
    options: ['6 公分', '8 公分', '3 公分', '12 公分'],
    answer: 0,
    displayAnswer: '3000公尺=300000公分,300000÷50000=6公分'
  },
  {
    type: 'options',
    question: '比例尺 1:100000,實際距離 2000 公尺,在地圖上應畫多少公分?',
    options: ['2 公分', '4 公分', '1 公分', '20 公分'],
    answer: 0,
    displayAnswer: '2000公尺=200000公分,200000÷100000=2公分'
  },
  {
    type: 'options',
    question: '比例尺 1:25000,實際距離 1000 公尺,在地圖上應畫多少公分?',
    options: ['4 公分', '2 公分', '8 公分', '10 公分'],
    answer: 0,
    displayAnswer: '1000公尺=100000公分,100000÷25000=4公分'
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
// 科學:熱的傳導
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '熱的「傳導」是指什麼?',
    options: [
      '熱透過直接接觸,從溫度高的地方傳到溫度低的地方',
      '熱隨著流體(液體或氣體)的流動而移動',
      '熱以電磁波的形式在空間中傳播',
      '熱只能在真空中傳播'
    ],
    answer: 0,
    displayAnswer: '傳導是熱量透過物質的直接接觸傳遞,不需要物質整體移動,熱從高溫端流向低溫端。'
  },
  {
    type: 'options',
    question: '以下哪種材料的導熱性最好?',
    options: ['金屬(銅、鐵)', '木頭', '塑膠', '空氣'],
    answer: 0,
    displayAnswer: '金屬的導熱性最強,所以鍋具用金屬製作;木頭和塑膠是不良導體,用作隔熱材料;空氣導熱性極差(靜止空氣是很好的隔熱體)。'
  },
  {
    type: 'options',
    question: '冬天摸金屬感覺比木頭冷,這是為什麼?',
    options: [
      '金屬導熱快,從手上帶走熱量的速度比木頭快,所以感覺更冷',
      '金屬的溫度比木頭更低',
      '木頭有保暖功能,金屬沒有',
      '因為金屬的顏色比木頭深,吸收更多冷空氣'
    ],
    answer: 0,
    displayAnswer: '金屬和木頭在同一室溫下,溫度相同,但金屬導熱快,接觸手部時迅速帶走手的熱量,所以感覺更冷。這是一種錯覺——感覺的是「導熱速度」,不是「溫度」。'
  },
  {
    type: 'options',
    question: '羽絨衣為什麼能保暖?',
    options: [
      '羽絨間的靜止空氣是不良導體,阻止體熱散失',
      '羽絨會自己發熱',
      '羽絨的顏色能反射冷空氣',
      '羽絨比其他材料更厚'
    ],
    answer: 0,
    displayAnswer: '羽絨蓬鬆,羽絨間充滿靜止空氣。空氣是不良導體,能有效阻止體熱透過傳導散失到外界。'
  },
  {
    type: 'options',
    question: '熱傳導的方向是?',
    options: [
      '從高溫流向低溫',
      '從低溫流向高溫',
      '隨機方向流動',
      '只在真空中流動'
    ],
    answer: 0,
    displayAnswer: '熱量總是從溫度較高的地方,自然流向溫度較低的地方,直到兩者溫度相同(熱平衡)為止。'
  },
  {
    type: 'options',
    question: '台灣夏天的石板路摸起來很燙,和冬天相比哪個更接近原因?',
    options: [
      '太陽輻射讓石板溫度升高,接觸時熱量透過傳導傳給手',
      '石板本身在夏天會發熱',
      '因為夏天石板更硬,所以感覺更燙',
      '夏天的石板比冬天更大,所以更燙'
    ],
    answer: 0,
    displayAnswer: '太陽輻射使石板溫度升高,當你的手觸碰石板時,高溫石板的熱透過傳導傳到手上,感覺燙。這是太陽輻射→傳導的能量傳遞鏈。'
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
  icon: '🌤️',
  color: '#F59E0B',
  title: '台灣的氣候是什麼樣子？',
  units: [
    {
      id: 'w4d1-opening',
      name: '開場：節氣詩引',
      icon: '📖',
      lesson: {
        title: '古詩詞中的節氣——第一段',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '春眠不覺曉，處處聞啼鳥。\n夜來風雨聲，花落知多少。',
                author: '孟浩然〈春曉〉'
              },
              {
                type: 'text',
                content: '這首詩寫的是春天清晨，詩人從睡夢中醒來聽到鳥鳴，又想起昨夜的風雨，不知道庭院裡的花落了多少。短短二十字，卻藏著氣候的訊息：春天的雨、春天的風、花開的時節。'
              },
              {
                type: 'text',
                content: '這週，我們要用地理、數學和科學的眼光，重新讀古詩詞裡的「天氣」——那些詩人感受到的冷熱、雨晴，其實都有科學可以解釋。\n\n🌤️ 本週主題：比例與尺度\n核心概念：縮放、尺度、熱能傳遞\n今天問題：台灣的氣候為什麼南北不一樣？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w4d1-social',
      name: '社會：台灣氣候分布',
      icon: '🌏',
      lesson: {
        title: '台灣的氣候：從熱帶到高山寒帶',
        sections: [
          {
            title: '北回歸線把台灣分成兩半',
            blocks: [
              {
                type: 'text',
                content: '北緯23.5°的北回歸線，從嘉義縣穿越台灣。這條線以南是「熱帶」，全年高溫；以北是「副熱帶」，有明顯的季節變化。'
              },
              {
                type: 'text',
                content: '但台灣不只有平地氣候——從海平面到玉山3952公尺，台灣在短短100公里的水平距離內，就涵蓋了熱帶、亞熱帶、溫帶、寒帶四種氣候帶。'
              }
            ]
          },
          {
            title: '台灣的四種氣候帶',
            blocks: [
              {
                type: 'text',
                content: '🌴 熱帶（北回歸線以南的平地）：高雄、屏東、恆春。全年高溫，幾乎沒有冬天。\n\n🌿 副熱帶（北部和中部平地）：台北、台中、台南。有溫和的冬天，春夏秋季分明。\n\n🍂 溫帶（中高海拔山區）：阿里山、合歡山山腳。秋天涼爽，冬天偶有霜雪。\n\n❄️ 寒帶（高山）：玉山山頂、合歡山頂。冬天大雪封山，可達零下十多度。'
              }
            ]
          },
          {
            title: '東北季風和西南季風',
            blocks: [
              {
                type: 'text',
                content: '台灣的氣候受到兩大季風影響：\n\n🌬️ 東北季風（冬天，10月-3月）：從中國大陸和西太平洋吹來，帶來北部和東北部的寒冷多雨。台北冬天陰雨，就是因為它。\n\n🌊 西南季風（夏天，5月-9月）：從印度洋和南海吹來，帶來台灣南部的夏季雨量。'
              },
              {
                type: 'text',
                content: '這就解釋了為什麼台北冬天常常陰天下雨，而高雄冬天卻晴朗溫暖——兩個城市只相差350公里，氣候卻差這麼多！'
              }
            ]
          },
          {
            title: '颱風與梅雨',
            blocks: [
              {
                type: 'text',
                content: '台灣有兩個重要的降雨季節：\n\n☔ 梅雨季（5-6月）：準靜止鋒面在台灣附近停滯，帶來連綿陰雨，主要影響台灣北部和中部。\n\n🌀 颱風季（7-9月）：西北太平洋的颱風，帶來大量豪雨，是台灣重要的水資源來源，也是主要的天然災害。'
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
      id: 'w4d1-math',
      name: '數學：比例尺概念',
      icon: '📏',
      lesson: {
        title: '比例尺——把世界縮進地圖',
        sections: [
          {
            title: '什麼是比例尺？',
            blocks: [
              {
                type: 'text',
                content: '地圖不可能和真實世界一樣大，所以需要「縮小」。比例尺告訴我們縮小了幾倍：\n\n比例尺 1：50000\n→ 圖上1公分 = 實際50000公分（= 500公尺）\n→ 地圖是真實世界的 1/50000'
              },
              {
                type: 'text',
                content: '比例尺其實就是 W3 學過的「比」！\n\n1：50000 就是一個比，比值 = 1/50000\n\n這個比值越小，地圖「縮得越厲害」，顯示的範圍越大；比值越大（如1：1000），縮得少，顯示的範圍小但細節多。'
              }
            ]
          },
          {
            title: '比例尺的三種表示方式',
            blocks: [
              {
                type: 'text',
                content: '① 數字式：1：50000（最常見）\n② 文字式：圖上1公分代表實地500公尺\n③ 線段式：畫一條線段，標出代表的實際距離'
              },
              {
                type: 'text',
                content: '三種方式說的是同一件事，只是表達不同。'
              }
            ]
          },
          {
            title: '用比例尺計算',
            blocks: [
              {
                type: 'text',
                content: '公式：實際距離 = 圖上距離 × 比例尺分母\n（記得統一單位！）\n\n例：比例尺 1：50000，圖上量到 3 公分\n→ 實際距離 = 3 × 50000 = 150000 公分 = 1500 公尺'
              },
              {
                type: 'text',
                content: '反過來：圖上距離 = 實際距離 ÷ 比例尺分母\n\n例：實際距離 2000 公尺，比例尺 1：50000\n→ 圖上距離 = 2000公尺 = 200000公分\n→ 200000 ÷ 50000 = 4 公分'
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
      id: 'w4d1-science',
      name: '科學：熱的傳導',
      icon: '🌡️',
      lesson: {
        title: '熱怎麼傳遞？——傳導篇',
        sections: [
          {
            title: '熱的三種傳遞方式',
            blocks: [
              {
                type: 'text',
                content: '熱能的傳遞有三種方式，這週我們每天學一種：\n\n🔶 傳導（今天）：透過物質直接接觸傳熱\n🔷 對流（明天）：熱流體的流動傳熱\n🔸 輻射（後天）：電磁波在空間中傳熱'
              }
            ]
          },
          {
            title: '什麼是傳導？',
            blocks: [
              {
                type: 'text',
                content: '傳導：熱量從高溫端，透過物質分子的碰撞，一個傳一個地流向低溫端。\n\n你摸燒燙的鍋子——手的熱量從鍋子傳到手上，這是傳導。\n你用金屬湯匙攪拌熱湯——熱從湯傳到湯匙，再傳到手，也是傳導。'
              },
              {
                type: 'text',
                content: '傳導的速度取決於「導熱性」：\n\n✅ 良導體（導熱快）：銅、鐵、鋁等金屬\n❌ 不良導體（導熱慢）：木頭、塑膠、空氣、羽絨、棉花'
              }
            ]
          },
          {
            title: '傳導與台灣氣候的連結',
            blocks: [
              {
                type: 'text',
                content: '台灣夏天的柏油路面，在太陽照射下溫度可高達60°C以上。腳踩上去感覺燙，就是傳導：高溫柏油→腳底。\n\n台灣東部的石板屋（排灣族、魯凱族），用石板建屋，原因之一是石板導熱慢，冬天保溫、夏天隔熱。這是先民對傳導原理的生活應用。'
              },
              {
                type: 'quote',
                content: '不需要懂物理公式，古人就已經知道：石頭涼、金屬燙、棉花暖。這就是生活中的熱傳導智慧。',
                author: '課程導引'
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
      id: 'w4d1-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '三科連結：尺度的問題',
            blocks: [
              {
                type: 'text',
                content: '今天的三個主題都在問「尺度」——尺度是理解世界的刻度：\n\n🌏 社會：台灣的氣候從熱帶到寒帶，全在同一座島上——尺度是地理空間\n📏 數學：比例尺把真實距離縮進地圖——尺度是比例\n🌡️ 科學：熱傳導的速度因材料不同——尺度是導熱性'
              },
              {
                type: 'text',
                content: '孟浩然說「夜來風雨聲」——風雨是天氣，天氣是氣候的日常表現。台灣的春天多梅雨，就像詩人說的「風雨聲」，不是偶然，而是季風系統的必然結果。'
              },
              {
                type: 'text',
                content: '🗺️ 明天我們要進入歷史：清朝人怎麼開發台灣的土地？他們面對的是什麼樣的地形與氣候挑戰？'
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
