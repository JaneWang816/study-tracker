// src/data/weeks/week13/day1.js
// 第13週 - 第一天：地球為什麼發燒？

// ==========================================
// 練習題生成器 - 改良版(使用洗牌機制)
// ==========================================

import { shuffleArray, shuffleOptions } from '../../utils'

// 【數學】溫度與負數綜合練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '全球平均溫度上升1.5°C,從數線上看是往哪個方向移動?',
    options: ['往右(正向)移動', '往左(負向)移動', '不移動', '無法判斷'],
    answer: 0,
    displayAnswer: '往右(正向)移動'
  },
  {
    type: 'options',
    question: '如果工業革命前全球均溫是14°C,現在是15.5°C,上升了多少度?',
    options: ['1.5°C', '2°C', '0.5°C', '1°C'],
    answer: 0,
    displayAnswer: '1.5°C'
  },
  {
    type: 'options',
    question: '南極洲冬季溫度-40°C,夏季-10°C,溫差是多少?',
    options: ['30°C', '50°C', '-30°C', '40°C'],
    answer: 0,
    displayAnswer: '30°C'
  },
  {
    type: 'options',
    question: '若CO₂濃度從280ppm增加到420ppm,增加了百分之幾?(四捨五入到整數)',
    options: ['50%', '40%', '60%', '30%'],
    answer: 0,
    displayAnswer: '50%'
  },
  {
    type: 'options',
    question: '台灣2050淨零目標是讓碳排放量變成多少?',
    options: ['0或接近0', '減少一半', '維持現狀', '增加綠能比例'],
    answer: 0,
    displayAnswer: '0或接近0'
  },
  {
    type: 'options',
    question: '某城市綠覆蓋率從20%提升到35%,提升了幾個百分點?',
    options: ['15個百分點', '75%', '1.75倍', '55%'],
    answer: 0,
    displayAnswer: '15個百分點'
  },
  {
    type: 'options',
    question: '北極海冰面積從600萬平方公里減少到400萬平方公里,減少了多少?',
    options: ['200萬平方公里', '1/3', '33%', '以上皆是'],
    answer: 3,
    displayAnswer: '以上皆是'
  },
  {
    type: 'options',
    question: '在數線上,溫度從-2°C上升到5°C,移動了幾格?',
    options: ['7格', '3格', '5格', '-7格'],
    answer: 0,
    displayAnswer: '7格'
  },
  {
    type: 'options',
    question: '某地100年前均溫15°C,現在17°C,平均每年上升多少度?',
    options: ['0.02°C', '0.2°C', '2°C', '0.002°C'],
    answer: 0,
    displayAnswer: '0.02°C'
  },
  {
    type: 'options',
    question: '如果全球升溫1.5°C是警戒線,現在已經升溫1.1°C,還剩多少緩衝空間?',
    options: ['0.4°C', '0.5°C', '2.6°C', '1°C'],
    answer: 0,
    displayAnswer: '0.4°C'
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
    
    if (question.type === 'options') {
      return shuffleOptions(question)
    }
    return { ...question }
  }
})()

// 【社會】氣候變遷與國際行動練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '《巴黎氣候協定》希望將全球升溫控制在多少以內?',
    options: ['1.5°C', '2°C', '3°C', '0.5°C'],
    answer: 0,
    displayAnswer: '1.5°C'
  },
  {
    type: 'options',
    question: '為什麼小島國家特別關心全球暖化?',
    options: ['海平面上升會淹沒國土', '颱風會變強', '氣溫太高', '漁獲量減少'],
    answer: 0,
    displayAnswer: '海平面上升會淹沒國土'
  },
  {
    type: 'options',
    question: '台灣承諾在哪一年達到淨零排放?',
    options: ['2050年', '2030年', '2040年', '2060年'],
    answer: 0,
    displayAnswer: '2050年'
  },
  {
    type: 'options',
    question: '「淨零排放」是指什麼?',
    options: ['排放的溫室氣體=吸收的溫室氣體', '完全不排放', '只排放一半', '用綠能發電'],
    answer: 0,
    displayAnswer: '排放的溫室氣體=吸收的溫室氣體'
  },
  {
    type: 'options',
    question: '下列哪個國家「不是」小島國家?',
    options: ['日本', '吐瓦魯', '馬爾地夫', '基里巴斯'],
    answer: 0,
    displayAnswer: '日本'
  },
  {
    type: 'options',
    question: '吐瓦魯面臨的最大威脅是?',
    options: ['海平面上升', '缺水', '地震', '火山爆發'],
    answer: 0,
    displayAnswer: '海平面上升'
  },
  {
    type: 'options',
    question: '巴黎氣候協定是哪一年簽署的?',
    options: ['2015年', '2010年', '2020年', '2000年'],
    answer: 0,
    displayAnswer: '2015年'
  },
  {
    type: 'options',
    question: '如果海平面上升1公尺,台灣哪個地區受影響最大?',
    options: ['西南沿海平原', '中央山脈', '東部海岸', '台北盆地'],
    answer: 0,
    displayAnswer: '西南沿海平原'
  },
  {
    type: 'options',
    question: '台灣在氣候變遷中的角色是?',
    options: ['既是排放者也是受害者', '只是受害者', '只是排放者', '完全無關'],
    answer: 0,
    displayAnswer: '既是排放者也是受害者'
  },
  {
    type: 'options',
    question: '聯合國永續發展目標(SDGs)中,氣候行動是第幾項?',
    options: ['第13項', '第1項', '第17項', '第7項'],
    answer: 0,
    displayAnswer: '第13項'
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

// 【科學】溫室效應原理練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '溫室效應的主要原理是?',
    options: ['大氣層攔截地球輻射的熱', '太陽變強了', '地球內部變熱', '海洋蒸發'],
    answer: 0,
    displayAnswer: '大氣層攔截地球輻射的熱'
  },
  {
    type: 'options',
    question: '如果沒有溫室效應,地球平均溫度會是多少?',
    options: ['-18°C', '0°C', '15°C', '30°C'],
    answer: 0,
    displayAnswer: '-18°C'
  },
  {
    type: 'options',
    question: '現在地球平均溫度約是多少?',
    options: ['15°C', '0°C', '20°C', '25°C'],
    answer: 0,
    displayAnswer: '15°C'
  },
  {
    type: 'options',
    question: '主要的溫室氣體中,哪個佔比最高?',
    options: ['二氧化碳(CO₂)', '甲烷(CH₄)', '氧化亞氮(N₂O)', '水蒸氣(H₂O)'],
    answer: 0,
    displayAnswer: '二氧化碳(CO₂)'
  },
  {
    type: 'options',
    question: 'CO₂在大氣中可以停留多久?',
    options: ['數百年', '幾天', '幾個月', '永遠'],
    answer: 0,
    displayAnswer: '數百年'
  },
  {
    type: 'options',
    question: '工業革命前CO₂濃度約是多少ppm?',
    options: ['280ppm', '400ppm', '200ppm', '500ppm'],
    answer: 0,
    displayAnswer: '280ppm'
  },
  {
    type: 'options',
    question: '現在CO₂濃度約是多少ppm?',
    options: ['420ppm', '280ppm', '300ppm', '500ppm'],
    answer: 0,
    displayAnswer: '420ppm'
  },
  {
    type: 'options',
    question: '為什麼CO₂增加會讓地球變熱?',
    options: ['CO₂會攔截更多地球輻射的熱', 'CO₂會吸收太陽能', 'CO₂會產生熱', 'CO₂會反射陽光'],
    answer: 0,
    displayAnswer: 'CO₂會攔截更多地球輻射的熱'
  },
  {
    type: 'options',
    question: '碳循環中,誰會吸收CO₂?',
    options: ['植物、海洋', '只有植物', '只有海洋', '土壤'],
    answer: 0,
    displayAnswer: '植物、海洋'
  },
  {
    type: 'options',
    question: '人類活動產生的CO₂主要來自?',
    options: ['燃燒化石燃料', '呼吸', '火山爆發', '森林自然腐爛'],
    answer: 0,
    displayAnswer: '燃燒化石燃料'
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

// ==========================================
// Day 1 資料
// ==========================================

const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🌡️',
  color: '#EF4444',
  title: '地球為什麼發燒？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌍',
      lesson: {
        title: '《當地球發燒的時候》節選（第一章）',
        sections: [
          {
            title: '閱讀文章',
            blocks: [
              {
                type: 'quote',
                content: '2015年12月,全世界196個國家在法國巴黎簽署了一份協定。這份協定只有一個目標:讓地球不要再繼續「發燒」。\n\n什麼叫做地球發燒？科學家發現,從工業革命以來,地球的平均溫度一直在上升。從19世紀到現在,已經上升了大約1.1°C。\n\n你可能會想:「才1.1度,有什麼好擔心的?」\n\n但對地球來說,這1.1度已經造成很大的影響:北極海冰融化、海平面上升、極端天氣增加。如果再繼續上升到2°C、3°C,後果會更嚴重。\n\n所以《巴黎氣候協定》設定了一個目標:全球升溫要控制在1.5°C以內。\n\n但現在,我們已經升溫1.1°C了。只剩下0.4°C的緩衝空間。\n\n——改寫自鄭明典訪談',
                author: '鄭明典(前中央氣象署長、氣象專家)'
              }
            ]
          },
          {
            title: '開場思考',
            blocks: [
              {
                type: 'text',
                content: '今天帶著這兩個問題開始學習:\n\n① 為什麼地球會「發燒」?是什麼讓溫度上升?\n② 「1.5°C」這個數字為什麼這麼重要?'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一:數學 — 溫度變化與數線
    // ==========================================
    {
      id: 'math-temperature',
      name: '數學:溫度變化與數線',
      icon: '📊',
      lesson: {
        title: '用數線理解氣溫變化',
        sections: [
          {
            title: '複習:數線與負數',
            blocks: [
              {
                type: 'text',
                content: '在W1,我們學過用數線表示正負數:\n\n• 0是基準點\n• 往右是正數(+)\n• 往左是負數(-)\n\n溫度也可以用數線表示:\n• 0°C是水的冰點\n• 高於0°C是正溫\n• 低於0°C是負溫(冰點以下)'
              }
            ]
          },
          {
            title: '全球升溫1.5°C的意義',
            blocks: [
              {
                type: 'text',
                content: '工業革命前,地球平均溫度約14°C\n現在,平均溫度約15.1°C\n升溫 = 15.1 - 14 = 1.1°C\n\n《巴黎氣候協定》目標:升溫不超過1.5°C\n也就是:14 + 1.5 = 15.5°C\n\n目前離目標還有:\n15.5 - 15.1 = 0.4°C\n\n這0.4°C就是我們僅剩的緩衝空間。'
              }
            ]
          },
          {
            title: '百分比的應用',
            blocks: [
              {
                type: 'text',
                content: 'CO₂濃度的變化:\n• 工業革命前:280ppm\n• 現在:420ppm\n• 增加量:420 - 280 = 140ppm\n\n增加百分比 = (增加量 ÷ 原始量) × 100%\n= (140 ÷ 280) × 100%\n= 0.5 × 100%\n= 50%\n\nCO₂濃度增加了50%!'
              }
            ]
          },
          {
            title: '百分點 vs 百分比',
            blocks: [
              {
                type: 'text',
                content: '情境:某城市綠覆蓋率從20%提升到35%\n\n方法一:「增加15個百分點」\n35% - 20% = 15個百分點\n\n方法二:「增加75%」\n(35 - 20) ÷ 20 × 100% = 75%\n\n記住:\n• 百分點:直接相減(35% - 20% = 15個百分點)\n• 百分比:比較變化幅度((15÷20)×100% = 75%)'
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
          } else {
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },

    // ==========================================
    // 單元二:社會 — 巴黎氣候協定與小島國家
    // ==========================================
    {
      id: 'social-paris-agreement',
      name: '社會:巴黎氣候協定',
      icon: '🌏',
      lesson: {
        title: '為什麼全世界要一起行動？',
        sections: [
          {
            title: '《巴黎氣候協定》的誕生',
            blocks: [
              {
                type: 'text',
                content: '2015年12月,196個國家代表在法國巴黎開會,簽署了《巴黎氣候協定》(Paris Agreement)。\n\n主要目標:\n• 將全球升溫控制在「遠低於2°C」\n• 努力限制在1.5°C以內\n• 各國提出「國家自定貢獻」(NDC)減少排放\n\n這是人類歷史上第一次,幾乎所有國家都同意一起對抗氣候變遷。'
              }
            ]
          },
          {
            title: '為什麼是1.5°C？',
            blocks: [
              {
                type: 'text',
                content: '科學家研究發現,如果全球升溫超過1.5°C:\n\n• 極端熱浪次數增加1倍以上\n• 珊瑚礁幾乎全部死亡(99%)\n• 海平面上升威脅加劇\n• 小島國家面臨滅頂危機\n\n對小島國家來說,1.5°C vs 2°C 的差別是:\n「我們的國家還在」vs「我們的國家被海水淹沒」\n\n這就是為什麼1.5°C這個數字這麼重要。'
              }
            ]
          },
          {
            title: '誰最危險?小島國家的處境',
            blocks: [
              {
                type: 'text',
                content: '太平洋上有一些島國,平均海拔只有2-3公尺:\n\n• 吐瓦魯(Tuvalu):最高點海拔4.5公尺\n• 馬爾地夫(Maldives):平均海拔1.5公尺\n• 基里巴斯(Kiribati):最高點海拔3公尺\n\n如果海平面上升1公尺,這些國家的大部分國土會被淹沒。\n\n他們的人民會變成「氣候難民」——因為氣候變遷而失去家園的人。'
              }
            ]
          },
          {
            title: '台灣的承諾與角色',
            blocks: [
              {
                type: 'text',
                content: '雖然台灣不是聯合國會員,無法正式簽署《巴黎氣候協定》,但台灣也做出承諾:\n\n2050淨零排放目標:\n• 「淨零」= 排放的溫室氣體 = 吸收的溫室氣體\n• 目標:2050年達到碳中和\n\n台灣的角色:\n• 是排放者:人均碳排放量偏高\n• 也是受害者:面臨颱風增強、海平面上升、乾旱等威脅\n\n所以台灣既有責任減少排放,也需要做好調適準備。'
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
    // 單元三:科學 — 溫室效應原理
    // ==========================================
    {
      id: 'science-greenhouse',
      name: '科學:溫室效應原理',
      icon: '🔬',
      lesson: {
        title: '地球為什麼會發燒?',
        sections: [
          {
            title: '什麼是溫室效應?',
            blocks: [
              {
                type: 'text',
                content: '想像地球是一個溫室:\n\n1. 太陽光穿透大氣層,照射地球表面\n2. 地球表面吸收太陽能後,會發出「紅外線」(熱輻射)\n3. 大氣中的溫室氣體(CO₂、CH₄等)會攔截這些熱輻射\n4. 被攔截的熱無法散發到太空,所以地球變溫暖\n\n這個過程就叫「溫室效應」(Greenhouse Effect)。'
              }
            ]
          },
          {
            title: '自然溫室效應 vs 增強溫室效應',
            blocks: [
              {
                type: 'text',
                content: '自然溫室效應(好的):\n• 如果沒有溫室效應,地球平均溫度會是-18°C\n• 有了自然溫室效應,地球平均溫度是15°C\n• 這讓地球適合生命生存\n\n增強溫室效應(問題):\n• 人類燃燒化石燃料(煤、石油、天然氣)\n• 排放大量CO₂到大氣中\n• CO₂濃度從280ppm增加到420ppm\n• 攔截更多熱輻射,地球溫度上升'
              }
            ]
          },
          {
            title: 'CO₂為什麼這麼重要?',
            blocks: [
              {
                type: 'text',
                content: 'CO₂(二氧化碳)是最重要的溫室氣體,因為:\n\n① 佔人為溫室氣體排放的76%\n② 在大氣中可以停留數百年\n③ 來源廣泛:\n   • 燃燒煤炭(發電)\n   • 燃燒石油(交通)\n   • 燃燒天然氣(暖氣、工業)\n   • 砍伐森林(減少吸收)\n\n所以控制CO₂排放,是對抗全球暖化的關鍵。'
              }
            ]
          },
          {
            title: '碳循環:自然界的平衡',
            blocks: [
              {
                type: 'text',
                content: '自然界中,CO₂會循環:\n\n吸收CO₂:\n• 植物光合作用\n• 海洋溶解\n\n釋放CO₂:\n• 動植物呼吸\n• 生物腐爛\n• 火山爆發\n\n問題是:人類每年排放的CO₂(約340億噸),遠超過自然界能吸收的量。\n\n多餘的CO₂累積在大氣中,就導致全球暖化。'
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

    // ==========================================
    // 單元四:語文 — 詞彙練習
    // ==========================================
    {
      id: 'chinese-vocabulary',
      name: '語文:詞彙練習',
      icon: '✍️',
      lesson: {
        title: '今日詞彙:氣候變遷用語',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中,出現了這些重要詞彙:\n\n【氣候類】\n• 溫室效應:大氣層攔截地球輻射熱的現象\n• 全球暖化:地球平均溫度持續上升\n• 淨零排放:排放量=吸收量,達到碳中和\n• 氣候變遷:氣候模式長期改變\n\n【國際類】\n• 巴黎氣候協定:2015年196國簽署的減碳協議\n• 國家自定貢獻(NDC):各國承諾的減碳目標\n• 氣候難民:因氣候變遷失去家園的人\n\n【科學類】\n• 溫室氣體:會攔截熱輻射的氣體(CO₂、CH₄等)\n• 碳循環:CO₂在自然界中的循環過程\n• ppm:百萬分之一,表示濃度單位'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習,測試你對這些詞彙的理解。\n\n請注意區分:\n• 溫室效應(現象) vs 全球暖化(結果)\n• 淨零排放(目標) vs 零排放(不可能)\n• 百分點(絕對差) vs 百分比(相對差)'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: () => {
          const vocabQuestions = [
            {
              type: 'options',
              question: '「溫室效應」是指?',
              options: ['大氣層攔截地球輻射熱', '溫室裡很熱', '太陽變強', '地球內部變熱'],
              answer: 0,
              displayAnswer: '大氣層攔截地球輻射熱'
            },
            {
              type: 'options',
              question: '「淨零排放」的「淨」是什麼意思?',
              options: ['排放量-吸收量=0', '完全不排放', '排放量很少', '只排放乾淨的氣體'],
              answer: 0,
              displayAnswer: '排放量-吸收量=0'
            },
            {
              type: 'options',
              question: '「ppm」是什麼單位?',
              options: ['百萬分之一', '百分之一', '千分之一', '十億分之一'],
              answer: 0,
              displayAnswer: '百萬分之一'
            },
            {
              type: 'options',
              question: '「氣候難民」是指?',
              options: ['因氣候變遷失去家園的人', '研究氣候的難民', '逃難到其他國家的人', '難以適應氣候的人'],
              answer: 0,
              displayAnswer: '因氣候變遷失去家園的人'
            },
            {
              type: 'options',
              question: '下列哪個詞語的用法「正確」?',
              options: [
                '台灣2050年的目標是淨零排放',
                '溫室效應讓地球變冷',
                '巴黎氣候協定只有台灣簽署',
                'CO₂在空氣中只能停留幾天'
              ],
              answer: 0,
              displayAnswer: '台灣2050年的目標是淨零排放'
            },
            {
              type: 'options',
              question: '「從20%提升到35%,增加15個百分點」這句話中,「百分點」的意思是?',
              options: ['直接相減的結果', '相對增加的比例', '乘以100', '除以100'],
              answer: 0,
              displayAnswer: '直接相減的結果'
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
    // 收尾:回應開場問題
    // ==========================================
    {
      id: 'closing-reflection',
      name: '今日回顧',
      icon: '💭',
      lesson: {
        title: '回顧與反思',
        sections: [
          {
            title: '回到開場的問題',
            blocks: [
              {
                type: 'text',
                content: '今天開始時,我們帶著兩個問題進入課程:\n\n① 為什麼地球會「發燒」?是什麼讓溫度上升?\n② 「1.5°C」這個數字為什麼這麼重要?\n\n現在,用今天學到的概念,試著各寫2～3句話回答。\n\n可以用到的概念:溫室效應、CO₂、巴黎氣候協定、小島國家、淨零排放……'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天的核心概念是「全球暖化的科學與責任」:\n\n• 數學:用數線和百分比理解溫度變化\n• 社會:《巴黎氣候協定》與小島國家的處境\n• 科學:溫室效應的原理與CO₂的角色\n• 語文:氣候變遷的專業詞彙\n\n明天,我們會從全球視角回到台灣——台灣哪裡特別熱?都市熱島效應是什麼?'
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
