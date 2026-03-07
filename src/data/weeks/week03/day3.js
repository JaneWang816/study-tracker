// src/data/weeks/week03/day3.js
// W3 Day3：時間怎麼流動？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:農曆與節氣
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '農曆是一種什麼樣的曆法?',
    options: [
      '同時考慮月亮圓缺和太陽運行的「陰陽合曆」',
      '純粹依照太陽運行設計的曆法',
      '純粹依照月亮圓缺設計的曆法',
      '依照星座位置設計的曆法'
    ],
    answer: 0,
    displayAnswer: '農曆以月相決定每個月的日期(陰曆),同時以閏月校正和太陽年的差距(陽曆),所以是「陰陽合曆」。'
  },
  {
    type: 'options',
    question: '二十四節氣中,「穀雨」這個節氣和農業有什麼關係?',
    options: [
      '表示雨水滋潤穀物播種的時節,是春天播種的重要節氣',
      '表示開始收割穀物',
      '表示穀物需要開始澆水',
      '表示穀倉要開始清理'
    ],
    answer: 0,
    displayAnswer: '穀雨在農曆春季,「雨生百穀」,是春播的關鍵節氣,此時降雨增多,非常適合播種。'
  },
  {
    type: 'options',
    question: '農曆為什麼需要設置「閏月」?',
    options: [
      '因為農曆以月相為基礎,每年比太陽年短約11天,累積後需加閏月校正',
      '因為有些年份雨量太多,需要加一個月',
      '因為皇帝的命令,每隔幾年加一個月慶祝',
      '閏月只是傳統習俗,沒有科學根據'
    ],
    answer: 0,
    displayAnswer: '農曆一年12個月約354天,太陽年約365天,每年差約11天,三年累積約33天,因此每2-3年加一個閏月來補足差距。'
  },
  {
    type: 'options',
    question: '嘉南大圳的「輪灌制度」是按照什麼來決定灌溉時程?',
    options: [
      '按照農曆節氣與作物生長需求,有固定的輪灌時程表',
      '按照地主的財富多寡',
      '完全隨機決定',
      '只有在下雨時才灌溉'
    ],
    answer: 0,
    displayAnswer: '嘉南大圳的水量有限,農業單位按照節氣和作物需求制定輪灌時程,讓每塊農田都能在適當時機得到水源。'
  },
  {
    type: 'options',
    question: '以下哪個節氣是在夏天?',
    options: ['芒種', '清明', '立春', '冬至'],
    answer: 0,
    displayAnswer: '芒種在農曆五月前後,是夏季節氣,意指「有芒的麥子快收,有芒的稻子快種」,是台灣早稻收割、晚稻插秧的重要時節。'
  },
  {
    type: 'options',
    question: '農曆和節氣對傳統農民最重要的功能是什麼?',
    options: [
      '幫助農民掌握農耕時機,知道何時播種、灌溉、收割',
      '讓農民知道今天是星期幾',
      '用來預測下個月的天氣',
      '計算農民應該繳多少稅'
    ],
    answer: 0,
    displayAnswer: '農曆結合了月相(決定日期)和節氣(反映太陽位置、氣候變化),讓農民能夠掌握最佳的耕作時機。'
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
// 數學:分數除法
// ==========================================
const mathQuestions = [
  // 基本概念
  {
    type: 'options',
    question: '分數除法 3/4 ÷ 1/2,計算結果是多少?',
    options: ['3/2', '3/8', '6/4', '1/2'],
    answer: 0,
    displayAnswer: '分數除法:除以一個分數等於乘以它的倒數。3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2'
  },
  {
    type: 'options',
    question: '分數除法 2/3 ÷ 1/3,計算結果是多少?',
    options: ['2', '2/9', '2/6', '3/2'],
    answer: 0,
    displayAnswer: '2/3 ÷ 1/3 = 2/3 × 3/1 = 6/3 = 2'
  },
  {
    type: 'options',
    question: '1/2 ÷ 1/4 的計算方式是?',
    options: ['1/2 × 4/1', '1/2 × 1/4', '2/1 × 1/4', '1/2 + 1/4'],
    answer: 0,
    displayAnswer: '除以 1/4 等於乘以 1/4 的倒數 4/1,所以 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2'
  },
  {
    type: 'options',
    question: '5/6 ÷ 5/3 等於多少?',
    options: ['1/2', '25/18', '1', '3/6'],
    answer: 0,
    displayAnswer: '5/6 ÷ 5/3 = 5/6 × 3/5 = 15/30 = 1/2'
  },
  // 計算題
  {
    type: 'options',
    question: '計算:3/4 ÷ 3/8 = ?',
    options: ['2', '9/32', '3/8', '4/3'],
    answer: 0,
    displayAnswer: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2'
  },
  {
    type: 'options',
    question: '計算:5/6 ÷ 5/12 = ?',
    options: ['2', '25/72', '5/12', '6/5'],
    answer: 0,
    displayAnswer: '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2'
  },
  {
    type: 'options',
    question: '計算:2/3 ÷ 4/9 = ?',
    options: ['3/2', '8/27', '4/9', '9/6'],
    answer: 0,
    displayAnswer: '2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12 = 3/2'
  },
  // 應用題
  {
    type: 'options',
    question: '一條圳路每小時輸水 3/4 公噸,灌滿一塊水田需要 3/8 公噸,可以灌幾塊田?',
    options: ['2塊', '1塊', '3塊', '4塊'],
    answer: 0,
    displayAnswer: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2,可以灌2塊田。'
  },
  {
    type: 'options',
    question: '農夫有 5/6 公頃的農地,每塊農地需要 5/12 公頃,可以分成幾塊?',
    options: ['2塊', '1塊', '3塊', '4塊'],
    answer: 0,
    displayAnswer: '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2,可以分成2塊。'
  },
  {
    type: 'options',
    question: '嘉南大圳一天輸水 3/2 萬公噸,每個灌區需要 3/4 萬公噸,可以供應幾個灌區?',
    options: ['2個', '1個', '3個', '4個'],
    answer: 0,
    displayAnswer: '3/2 ÷ 3/4 = 3/2 × 4/3 = 12/6 = 2,可以供應2個灌區。'
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
// 科學:月相成因與高度角觀測
// ==========================================
const scienceQuestions = [
  // 月相成因
  {
    type: 'options',
    question: '月相變化的根本原因是什麼?',
    options: [
      '月亮繞地球公轉,從地球看到月亮被太陽照亮的比例不同',
      '月亮本身的形狀每天都在改變',
      '地球的影子每天遮住月亮不同的部分',
      '太陽照射月亮的強度每天不同'
    ],
    answer: 0,
    displayAnswer: '月亮是球形,本身不發光。它繞地球公轉時,從地球看到被太陽照亮的那一面比例不同,因此產生月相變化。'
  },
  {
    type: 'options',
    question: '新月時,太陽、月亮、地球三者的相對位置是?',
    options: [
      '月亮在太陽和地球之間（月亮、太陽同側）',
      '地球在月亮和太陽之間',
      '太陽在地球和月亮之間',
      '三者排成正三角形'
    ],
    answer: 0,
    displayAnswer: '新月時,月亮在太陽和地球之間,月亮背對地球的那面被照亮,朝向地球的那面是暗的,所以我們看不見月亮。'
  },
  {
    type: 'options',
    question: '滿月時,太陽、地球、月亮三者的相對位置是?',
    options: [
      '地球在太陽和月亮之間（月亮、太陽相對）',
      '月亮在太陽和地球之間',
      '太陽在地球和月亮之間',
      '三者排成直角'
    ],
    answer: 0,
    displayAnswer: '滿月時,地球在中間,太陽和月亮分別在地球兩側。月亮朝向地球的那面完整被照亮,所以我們看到完整的圓月。'
  },
  {
    type: 'options',
    question: '上弦月時,太陽、地球、月亮三者的相對位置是?',
    options: [
      '三者成直角,月亮在地球旁邊（右側被照亮）',
      '月亮在太陽和地球之間',
      '地球在太陽和月亮之間',
      '三者排成一直線'
    ],
    answer: 0,
    displayAnswer: '上弦月時三者成直角,太陽照亮月亮的右半面,所以從地球看是右半圓。'
  },
  {
    type: 'options',
    question: '月食（月全食）發生時,三者的位置是?',
    options: [
      '太陽、地球、月亮成一直線,地球的影子遮住月亮',
      '月亮遮住太陽',
      '月亮在太陽和地球之間',
      '三者成直角'
    ],
    answer: 0,
    displayAnswer: '月食發生在滿月時,太陽、地球、月亮三者精準對齊,地球的影子落在月亮上,使月亮變暗紅色（血月）。月食不是月相,是特殊天象。'
  },
  {
    type: 'options',
    question: '月相週期約29.5天,這和什麼有關?',
    options: [
      '月亮繞地球公轉一圈所需的時間',
      '地球繞太陽公轉一圈所需的時間',
      '月亮自轉一圈所需的時間',
      '太陽繞地球一圈所需的時間'
    ],
    answer: 0,
    displayAnswer: '月亮繞地球公轉一圈（朔望月）約需29.5天,這正是月相從新月回到新月的週期,也是農曆一個月的長度。'
  },
  {
    type: 'options',
    question: '為什麼月食不是每個滿月都會發生?',
    options: [
      '月亮軌道面和地球繞太陽的軌道面有約5度的夾角,三者不一定精準對齊',
      '因為每個月天氣不同',
      '因為地球影子太小,遮不到月亮',
      '因為月食只在冬天才發生'
    ],
    answer: 0,
    displayAnswer: '月亮軌道面和黃道面有約5度夾角,所以大多數滿月時,月亮會偏上或偏下,影子落不到月亮上,月食才是偶爾發生的特殊天象。'
  },
  // 高度角觀測
  {
    type: 'options',
    question: '高度角（仰角）是從哪裡量起?',
    options: [
      '從地平線（水平方向）量到觀測目標',
      '從正頭頂量到觀測目標',
      '從地面到月亮的直線距離',
      '從北極星到月亮的角度'
    ],
    answer: 0,
    displayAnswer: '高度角是從地平線（0°）算起到觀測目標的角度。地平線是0°,正頭頂是90°,月亮通常在30°到70°之間。'
  },
  {
    type: 'options',
    question: '用手臂伸直的「拳頭寬」估量高度角,大約代表幾度?',
    options: ['約10度', '約2度', '約20度', '約45度'],
    answer: 0,
    displayAnswer: '手臂伸直時:1根手指寬≈2度、3根手指≈6度、拳頭寬≈10度。這是古代水手和農民觀測天象的實用方法。'
  },
  {
    type: 'options',
    question: '滿月從傍晚升起,大約到何時達到天空最高點?',
    options: [
      '午夜（晚上12點）前後',
      '晚上9點左右',
      '清晨6點（日出）前後',
      '正午12點'
    ],
    answer: 0,
    displayAnswer: '滿月在日落時從東方升起,到午夜達到最高點（正南方天空）,清晨在西方落下。這是地球由西向東自轉造成的東升西落現象。'
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
  icon: '🌾',
  color: '#F59E0B',
  title: '時間怎麼流動？',
  units: [
    // 開場
    {
      id: 'w3d3-opening',
      name: '開場：鹹鹹的汗水',
      icon: '📖',
      lesson: {
        title: '吳晟《吾鄉印象》——第三段',
        sections: [
          {
            title: '今日貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '古早的古早的古早以前\n世世代代的祖公\n就在這片長不出榮華富貴長不出奇蹟的土地上\n揮洒鹹鹹的汗水\n播下粒粒的種籽\n繁衍他們那無所謂而認命的子孫',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '「播下種籽」——農民知道什麼時候播種嗎？不是隨便選一天，而是要等對的時機：等節氣、等月相，等水圳把水送到田裡。'
              },
              {
                type: 'text',
                content: '農業是一門關於「時間」的學問。今天我們來看，古人如何用農曆和節氣掌握時間的流動，用分數除法計算分配的問題，用月相成因理解月亮的圓缺。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 A：社會
    {
      id: 'w3d3-social',
      name: '社會：農曆、節氣與水利',
      icon: '📅',
      lesson: {
        title: '時間的農業智慧——農曆與節氣',
        sections: [
          {
            title: '農曆是什麼？',
            blocks: [
              {
                type: 'text',
                content: '農曆（又叫「陰陽曆」）是中華文化圈傳統使用的曆法，有兩個核心：\n\n🌙 月亮（陰）：農曆的月份以月相為基礎，初一是新月，十五是滿月\n☀️ 太陽（陽）：節氣反映地球繞太陽公轉的位置，代表氣候變化'
              },
              {
                type: 'text',
                content: '問題：農曆一年12個月（每月29.5天）= 354天，太陽年是365天。每年差11天，要怎麼解決？\n\n答：每2-3年加一個「閏月」，補足差距，讓農曆和季節保持對應。'
              }
            ]
          },
          {
            title: '二十四節氣',
            blocks: [
              {
                type: 'text',
                content: '把地球繞太陽一圈（360°）分成24等分，每個「等分點」就是一個節氣，約每15天一個。'
              },
              {
                type: 'text',
                content: '幾個台灣農業重要的節氣：\n\n🌱 清明（4月初）：掃墓、開始春耕\n🌧️ 穀雨（4月下旬）：「雨生百穀」，春播關鍵\n🌾 芒種（6月初）：早稻收割、晚稻插秧\n🍂 寒露（10月初）：秋收時節'
              }
            ]
          },
          {
            title: '圳路的輪灌時程',
            blocks: [
              {
                type: 'text',
                content: '嘉南大圳的水量有限，不可能同時供應所有農田。管理單位結合節氣和作物需求，制定「輪灌時程表」：\n\n① 哪條支圳、哪天、幾點開始放水\n② 放水幾個小時\n③ 下一個輪到誰'
              },
              {
                type: 'text',
                content: '這套制度讓農民知道：「下個節氣，輪到我的田在XX天後。」於是農民會提前備好田地、準備秧苗，等水一來，立刻插秧。\n\n節氣、比例、分配——三者合一，才能讓台灣南部這片土地，年復一年養活百萬人。'
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
      id: 'w3d3-math',
      name: '數學：分數除法',
      icon: '📐',
      lesson: {
        title: '分數除法——等量分配的計算',
        sections: [
          {
            title: '問題從分配開始',
            blocks: [
              {
                type: 'text',
                content: '一條圳路每天輸水 3/4 公噸，灌滿一塊水田需要 3/8 公噸。\n\n這一天的水可以灌幾塊田？\n\n→ 這是「一個分數裡面有幾個另一個分數」的問題，就需要用到分數除法。'
              }
            ]
          },
          {
            title: '分數除法的規則',
            blocks: [
              {
                type: 'text',
                content: '核心規則：\n÷ 一個分數 = × 它的倒數\n\n「倒數」就是把分子和分母互換：\n• 3/4 的倒數是 4/3\n• 2/5 的倒數是 5/2\n• 3 = 3/1，倒數是 1/3'
              },
              {
                type: 'text',
                content: '解題步驟（以 3/4 ÷ 3/8 為例）：\n\n步驟1：把除號換成乘號，並把除數改為倒數\n  3/4 ÷ 3/8 → 3/4 × 8/3\n\n步驟2：分子相乘、分母相乘\n  3/4 × 8/3 = (3×8)/(4×3) = 24/12\n\n步驟3：化簡\n  24/12 = 2\n\n→ 可以灌 2 塊田！'
              }
            ]
          },
          {
            title: '再練習一題',
            blocks: [
              {
                type: 'text',
                content: '農夫有 5/6 公頃的農地，每塊農地需要 5/12 公頃，可以分成幾塊？\n\n5/6 ÷ 5/12\n= 5/6 × 12/5\n= (5×12)/(6×5)\n= 60/30\n= 2\n\n→ 可以分成 2 塊農地。'
              },
              {
                type: 'text',
                content: '小提醒：如果最後答案是分數，記得要化成最簡分數或帶分數。\n\n分數除法 = W2的公因數 + W3的比值概念，都串在一起了！'
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
      id: 'w3d3-science',
      name: '科學：月相成因與高度角',
      icon: '🌕',
      lesson: {
        title: '月亮為什麼有圓缺？——月相成因',
        sections: [
          {
            title: '三個天體的位置決定月相',
            blocks: [
              {
                type: 'text',
                content: '月相變化不是月亮在「長大縮小」，而是太陽、地球、月亮三者的相對位置不斷改變，導致我們從地球看到月亮被照亮的比例不同。'
              },
              {
                type: 'text',
                content: '🌑 新月：月亮在太陽和地球之間，朝向地球的那面是暗的 → 看不見月亮\n🌕 滿月：地球在中間，月亮朝向地球的那面完整被照亮 → 看到圓月\n🌓 上弦月：三者成直角，月亮右半面被照亮 → 右半圓\n🌗 下弦月：三者成直角（另一邊），月亮左半面被照亮 → 左半圓'
              },
              {
                type: 'text',
                content: '月亮繞地球公轉一圈約29.5天，這就是月相從新月回到新月的週期，也是農曆一個月的由來。'
              }
            ]
          },
          {
            title: '月食：地球的影子',
            blocks: [
              {
                type: 'text',
                content: '月食發生在滿月時，當太陽、地球、月亮三者「精準對齊」，地球的影子落在月亮上，月亮變成暗紅色，這就是「血月」。'
              },
              {
                type: 'text',
                content: '但為什麼不是每個滿月都有月食？因為月亮的軌道面和地球繞太陽的軌道面有約5度的夾角，大多數滿月時，月亮會偏上或偏下，影子落不準，月食才是偶爾發生的特殊天象。'
              }
            ]
          },
          {
            title: '仰望月亮：高度角觀測',
            blocks: [
              {
                type: 'text',
                content: '高度角（仰角）：從地平線（0°）到觀測目標的角度，正頭頂是90°。\n\n用手就能估量：\n• 1根手指寬（手臂伸直）≈ 2°\n• 拳頭寬 ≈ 10°\n• 手掌大張 ≈ 20°'
              },
              {
                type: 'text',
                content: '滿月的高度角一天內的變化：\n🌅 傍晚：從東方升起，高度角接近 0°\n🌙 午夜：升到最高點，高度角約 60-70°\n🌄 清晨：在西方落下，高度角接近 0°\n\n月亮東升西落，和太陽一樣，是地球由西向東自轉造成的。'
              },
              {
                type: 'text',
                content: '🔭 觀測挑戰：今晚看月亮，用拳頭估量它的高度角大約幾度？記下來，明天再測一次，看看有什麼變化。'
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
      id: 'w3d3-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '流動與週期的總結',
            blocks: [
              {
                type: 'text',
                content: '今天三個學科都在說「時間的流動」：\n\n📅 社會：農曆按月相計時，節氣按太陽計時，農民靠這套系統決定耕作\n📐 數學：分數除法解決等量分配問題（除以 = 乘以倒數）\n🌕 科學：月相由日月地三者位置決定，月食是地球影子造成的特殊天象'
              },
              {
                type: 'text',
                content: '吳晟說「播下粒粒的種籽」——農民不是隨便播，而是等對的時間。節氣是太陽給的時鐘，月相是月亮給的日曆，水圳是人類自己蓋的水管。三者合作，才能養活一代又一代的人。'
              },
              {
                type: 'text',
                content: '✏️ 明天是動筆日！我們要寫一篇散文「如果我是一條河」——從今天的學習出發，用你自己的聲音，說台灣土地的故事。'
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
