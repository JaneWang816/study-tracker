// src/data/weeks/week13/day3.js
// 第13週 - 第三天：極端天氣是什麼？

// ==========================================
// 練習題生成器 - 改良版(使用洗牌機制)
// ==========================================

import { shuffleArray, shuffleOptions } from '../../utils'

// 【社會】極端氣候事件練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '世界氣象組織對「熱浪」的定義是什麼?',
    options: ['連續5天溫度超過35度', '連續5天比平均溫度高5度以上', '單日溫度超過40度', '一週內溫度都超過30度'],
    answer: 1,
    displayAnswer: '連續5天比平均溫度高5度以上'
  },
  {
    type: 'options',
    question: '2003年歐洲熱浪造成大量死亡的主要原因是什麼?',
    options: ['溫度太高,超過人體極限', '當地人不習慣,也沒有準備', '醫院全部關閉', '食物和飲水短缺'],
    answer: 1,
    displayAnswer: '當地人不習慣,也沒有準備'
  },
  {
    type: 'options',
    question: '為什麼台灣很難出現符合定義的「熱浪」?',
    options: ['因為台灣緯度低', '因為台灣是海島,海水調節溫度變化', '因為台灣多山', '因為台灣常下雨'],
    answer: 1,
    displayAnswer: '因為台灣是海島,海水調節溫度變化'
  },
  {
    type: 'options',
    question: '2016年霸王級寒流對台灣造成什麼影響?',
    options: ['造成人員大量傷亡', '農業損失超過42億元', '全台停電一週', '引發大規模海嘯'],
    answer: 1,
    displayAnswer: '農業損失超過42億元'
  },
  {
    type: 'options',
    question: '全球暖化對極端氣候的影響是什麼?',
    options: ['只會讓天氣變熱', '只會讓冬天消失', '會讓極端的冷和熱都更頻繁', '不會有任何影響'],
    answer: 2,
    displayAnswer: '會讓極端的冷和熱都更頻繁'
  },
  {
    type: 'options',
    question: '2003年歐洲熱浪持續了多久?',
    options: ['一週', '兩週', '一個月', '兩個月'],
    answer: 3,
    displayAnswer: '兩個月'
  },
  {
    type: 'options',
    question: '歐洲冷氣普及率低的原因是?',
    options: ['太貴', '平常氣候溫和,不需要', '政府禁止', '技術不成熟'],
    answer: 1,
    displayAnswer: '平常氣候溫和,不需要'
  },
  {
    type: 'options',
    question: '2009年莫拉克颱風造成什麼災害?',
    options: ['熱浪', '超大豪雨和土石流', '乾旱', '海嘯'],
    answer: 1,
    displayAnswer: '超大豪雨和土石流'
  },
  {
    type: 'options',
    question: '2020年台灣遭遇什麼氣候災害?',
    options: ['熱浪', '寒流', '百年大旱', '超級颱風'],
    answer: 2,
    displayAnswer: '百年大旱'
  },
  {
    type: 'options',
    question: '極端氣候最危險的地方是?',
    options: ['溫度太高或太低', '我們沒有準備和經驗', '持續時間太長', '影響範圍太大'],
    answer: 1,
    displayAnswer: '我們沒有準備和經驗'
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

// 【數學】極端氣候數據分析練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '台北1月平均溫度15°C,某天溫度5°C,異常值是多少度?',
    options: ['+10°C', '-10°C', '+5°C', '-5°C'],
    answer: 1,
    displayAnswer: '-10°C'
  },
  {
    type: 'options',
    question: '倫敦8月平均溫度20°C,如果要達到熱浪標準,連續5天溫度至少要達到幾度?',
    options: ['23°C', '25°C', '28°C', '30°C'],
    answer: 1,
    displayAnswer: '25°C (20+5=25)'
  },
  {
    type: 'options',
    question: '2003年歐洲熱浪死亡人數,保守估計35000人,最高估計70000人。兩者相差多少?',
    options: ['25000人', '30000人', '35000人', '40000人'],
    answer: 2,
    displayAnswer: '35000人 (70000-35000=35000)'
  },
  {
    type: 'options',
    question: '某次寒害損失42億元,其中水果損失18億元,占總損失的百分之幾?(四捨五入到整數)',
    options: ['36%', '43%', '50%', '57%'],
    answer: 1,
    displayAnswer: '43% (18÷42×100≈43%)'
  },
  {
    type: 'options',
    question: '如果某地連續5天溫度分別是:28,29,30,28,29度,平均溫度23度。是否達到熱浪標準?',
    options: ['是,因為都超過28度', '是,因為都超過平均溫度5度以上', '否,因為最高溫不到35度', '否,因為有一天只高出5度'],
    answer: 1,
    displayAnswer: '是,因為都超過平均溫度5度以上'
  },
  {
    type: 'options',
    question: '2016年寒害農業損失42億元,如果政府補助30%,補助金額是多少億元?',
    options: ['10.5億元', '12.6億元', '14.7億元', '21億元'],
    answer: 1,
    displayAnswer: '12.6億元 (42×0.3=12.6)'
  },
  {
    type: 'options',
    question: '某地平均溫度28°C,連續3天是33°C,34°C,35°C,平均異常值是多少?',
    options: ['+5°C', '+6°C', '+7°C', '+8°C'],
    answer: 1,
    displayAnswer: '+6°C ((5+6+7)÷3=6)'
  },
  {
    type: 'options',
    question: '2016寒害損失:蔬菜15億、水果18億、漁產9億。蔬菜占總損失百分之幾?(四捨五入)',
    options: ['30%', '33%', '36%', '40%'],
    answer: 2,
    displayAnswer: '36% (15÷42×100≈36%)'
  },
  {
    type: 'options',
    question: '某地正常溫度30°C,熱浪期間平均38°C,異常幅度是多少?',
    options: ['+6°C', '+7°C', '+8°C', '+9°C'],
    answer: 2,
    displayAnswer: '+8°C (38-30=8)'
  },
  {
    type: 'options',
    question: '如果災害損失42億,保險賠付25%,自行負擔多少億?',
    options: ['10.5億', '21億', '31.5億', '35億'],
    answer: 2,
    displayAnswer: '31.5億 (42×0.75=31.5)'
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

// 【科學】聖嬰現象練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '「聖嬰現象」這個名詞的由來是什麼?',
    options: ['因為會帶來新生命', '因為發生在聖誕節前後', '因為海水變得清澈如嬰兒', '因為科學家的小孩發現的'],
    answer: 1,
    displayAnswer: '因為發生在聖誕節前後'
  },
  {
    type: 'options',
    question: '聖嬰現象發生時,南美洲秘魯沿海會出現什麼變化?',
    options: ['海水變冷,魚群增加', '海水變暖,魚群消失', '海水不變,魚群增加', '海平面上升'],
    answer: 1,
    displayAnswer: '海水變暖,魚群消失'
  },
  {
    type: 'options',
    question: '什麼情況下會被判定為聖嬰現象?',
    options: ['任何時候海水溫度升高', '中太平洋赤道區海水溫度升高1度以上,持續數月', '全球平均溫度升高', '只要聖誕節很熱'],
    answer: 1,
    displayAnswer: '中太平洋赤道區海水溫度升高1度以上,持續數月'
  },
  {
    type: 'options',
    question: '聖嬰現象對台灣的主要影響是什麼?',
    options: ['冬天會下雪', '夏天可能比較熱,隔年春雨可能增加', '颱風會消失', '海平面會下降'],
    answer: 1,
    displayAnswer: '夏天可能比較熱,隔年春雨可能增加'
  },
  {
    type: 'options',
    question: '聖嬰現象大約多久發生一次?',
    options: ['每年', '2-7年一次', '10年一次', '50年一次'],
    answer: 1,
    displayAnswer: '2-7年一次'
  },
  {
    type: 'options',
    question: '「El Niño」是哪個語言?',
    options: ['英語', '法語', '西班牙語', '葡萄牙語'],
    answer: 2,
    displayAnswer: '西班牙語'
  },
  {
    type: 'options',
    question: '正常情況下,東南太平洋(南美沿岸)有什麼特徵?',
    options: ['有冷洋流湧上,魚群豐富', '海水溫暖,魚群稀少', '海水很深,沒有魚', '海水結冰'],
    answer: 0,
    displayAnswer: '有冷洋流湧上,魚群豐富'
  },
  {
    type: 'options',
    question: '聖嬰現象和全球暖化的關係是?',
    options: ['聖嬰現象導致全球暖化', '全球暖化導致聖嬰現象', '兩者疊加會產生更極端的天氣', '兩者完全無關'],
    answer: 2,
    displayAnswer: '兩者疊加會產生更極端的天氣'
  },
  {
    type: 'options',
    question: '2023年台灣測到126年來最高溫,主要原因是?',
    options: ['只是全球暖化', '只是聖嬰現象', '聖嬰年加上全球暖化', '太陽變強了'],
    answer: 2,
    displayAnswer: '聖嬰年加上全球暖化'
  },
  {
    type: 'options',
    question: '鄭明典把氣候變遷和聖嬰現象比喻成什麼?',
    options: ['音量慢慢轉大和突然轉到最大聲', '火慢慢燒和突然爆炸', '水慢慢升溫和突然沸騰', '風慢慢變強和突然颱風'],
    answer: 0,
    displayAnswer: '音量慢慢轉大和突然轉到最大聲'
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
// Day 3 資料
// ==========================================

const day3 = {
  id: 'day3',
  name: '第三天',
  icon: '⚡',
  color: '#DC2626',
  title: '極端天氣是什麼？',

  units: [

    // ==========================================
    // 開場：文學閱讀
    // ==========================================
    {
      id: 'opening',
      name: '開場閱讀',
      icon: '🌍',
      lesson: {
        title: '《當地球發燒的時候》節選（第三章）',
        sections: [
          {
            title: '歐洲的夏日惡夢',
            blocks: [
              {
                type: 'text',
                content: '2003年夏天,一場史無前例的熱浪席捲歐洲。法國巴黎的氣溫飆升到攝氏40度,這對於平常只有攝氏25度左右的法國人來說,簡直是難以想像的酷熱。'
              },
              {
                type: 'text',
                content: '更可怕的是,高溫持續了整整兩個月。老人們坐在家中,沒有冷氣,只能用濕毛巾擦拭身體;醫院擠滿了中暑的病患,但醫院本身也沒有足夠的冷氣。河流的水位降低,核電廠因為缺乏冷卻水而無法發電,停電又讓情況更加惡化。'
              },
              {
                type: 'text',
                content: '那一年,保守估計有3萬5千人因為熱浪死亡,有些研究甚至認為超過7萬人。這個數字震驚了全世界,也讓科學家開始認真研究「熱浪」這個現象。'
              },
              {
                type: 'quote',
                content: '什麼是熱浪?世界氣象組織給了一個明確定義:連續5天以上,每天的最高溫都比當地的平均氣溫高出攝氏5度以上。這個定義很有意思,因為它不是用絕對溫度,而是用「比平常高多少」來定義。',
                author: '世界氣象組織定義'
              },
              {
                type: 'text',
                content: '對法國來說,平常夏天的平均溫度大約是攝氏23度,所以當溫度持續達到攝氏33度時,對他們來說就是熱浪。但攝氏33度對台灣人來說,不過是普通的夏天而已!這就是為什麼熱浪會造成這麼大的傷亡——因為當地人完全不習慣,也沒有準備。'
              }
            ]
          },
          {
            title: '台灣的極端氣候',
            blocks: [
              {
                type: 'text',
                content: '台灣是海島型氣候,四面環海,海水的調節作用讓我們的氣溫變化比較緩和,所以很難出現符合定義的「熱浪」。過去100多年,台灣從未出現過連續5天都比平均溫度高出5度以上的紀錄。'
              },
              {
                type: 'text',
                content: '但這不代表台灣沒有極端氣候。2016年1月的霸王級寒流,就讓全台灣措手不及。那幾天,台北市區溫度降到攝氏4度,陽明山甚至下雪;中南部的高山也出現冰霜。'
              },
              {
                type: 'text',
                content: '農民辛苦種植的高麗菜、茂谷柑、蓮霧,一夜之間全被凍壞。養殖的虱目魚、吳郭魚大量暴斃,漂浮在魚塭水面上。光是農業損失就超過42億元,是近年來最嚴重的一次寒害。'
              },
              {
                type: 'quote',
                content: '很多人以為全球暖化就是一直變熱,其實不是這樣。暖化會讓氣候系統更不穩定,極端的冷和極端的熱都會更頻繁。北極的冷空氣可能南下到平常到不了的地方,造成嚴寒;而熱帶的暖空氣也可能北上,帶來高溫。',
                author: '鄭明典'
              },
              {
                type: 'text',
                content: '這就是氣候變遷最可怕的地方:不是單純的「變暖」,而是「變得不可預測」。過去的經驗不再可靠,我們必須隨時準備面對意想不到的極端天氣。'
              }
            ]
          },
          {
            title: '開場思考',
            blocks: [
              {
                type: 'text',
                content: '今天帶著這兩個問題開始學習:\n\n① 為什麼同樣的溫度,對不同地方的人影響差這麼多?\n② 台灣有哪些極端氣候?我們準備好了嗎?'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ==========================================
    // 單元一：社會 — 極端氣候事件
    // ==========================================
    {
      id: 'social-extreme-events',
      name: '社會:極端氣候事件',
      icon: '🌍',
      lesson: {
        title: '歷史上的極端氣候',
        sections: [
          {
            title: '2003年歐洲熱浪',
            blocks: [
              {
                type: 'text',
                content: '2003年夏天的歐洲熱浪,是現代史上最嚴重的氣候災害之一。\n\n時間:2003年6月至8月\n範圍:法國、德國、義大利、西班牙等國\n死亡人數:保守估計35000人,最高估計70000人'
              }
            ]
          },
          {
            title: '為什麼造成這麼多人死亡?',
            blocks: [
              {
                type: 'text',
                content: '**第一**:歐洲的冷氣普及率很低\n因為平常氣候溫和,很多家庭根本沒有冷氣\n\n**第二**:很多老人獨居\n當他們在家中中暑時,沒有人發現\n\n**第三**:醫療系統沒有準備\n醫院也缺乏冷氣設備,無法應付大量患者'
              }
            ]
          },
          {
            title: '災難帶來的改變',
            blocks: [
              {
                type: 'text',
                content: '這場災難之後,歐洲各國建立了:\n\n• 熱浪預警系統\n• 提前通知民眾\n• 開放有冷氣的公共場所\n• 特別關注獨居老人\n\n2019年歐洲又出現一次更嚴重的熱浪,但死亡人數大幅減少,因為大家有了準備。'
              }
            ]
          },
          {
            title: '台灣的極端氣候案例',
            blocks: [
              {
                type: 'text',
                content: '**2016霸王級寒流**\n時間:1月下旬\n影響:全台出現10度以下低溫\n損失:農業損失超過42億元\n特點:台灣近30年來最嚴重的寒害'
              },
              {
                type: 'text',
                content: '**2009莫拉克颱風**\n時間:8月\n影響:超大豪雨,高雄小林村被土石流掩埋\n死亡:400多人\n教訓:極端降雨的威脅'
              },
              {
                type: 'text',
                content: '**2020百年大旱**\n時間:全年\n影響:全台水庫蓄水量創新低\n措施:中南部實施分區供水\n教訓:不只洪水,缺水也是嚴重災害'
              }
            ]
          },
          {
            title: '共同的教訓',
            blocks: [
              {
                type: 'text',
                content: '這些事件告訴我們:\n\n① 台灣沒有歐洲式的熱浪,但我們有自己的極端氣候挑戰\n② 氣候變遷讓極端事件變得更頻繁、更劇烈\n③ 「有準備」比「不極端」更重要\n④ 過去的經驗可能不再可靠'
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
    // 單元二：數學 — 極端氣候數據分析
    // ==========================================
    {
      id: 'math-data-analysis',
      name: '數學:數據分析',
      icon: '📊',
      lesson: {
        title: '解讀極端氣候數據',
        sections: [
          {
            title: '溫度異常值的計算',
            blocks: [
              {
                type: 'text',
                content: '熱浪的定義中,「比平均溫度高5度」是關鍵。我們來練習如何計算異常值。\n\n**異常值 = 實際溫度 - 平均溫度**'
              }
            ]
          },
          {
            title: '實際案例',
            blocks: [
              {
                type: 'text',
                content: '例如:巴黎7月的平均溫度是23°C\n\n如果連續5天的溫度分別是:\n33°C, 34°C, 35°C, 33°C, 34°C\n\n每天的異常值:\n第1天: 33 - 23 = +10°C\n第2天: 34 - 23 = +11°C\n第3天: 35 - 23 = +12°C\n第4天: 33 - 23 = +10°C\n第5天: 34 - 23 = +11°C\n\n因為每天都超過平均溫度5度以上,所以這符合熱浪定義。'
              }
            ]
          },
          {
            title: '災害損失的統計',
            blocks: [
              {
                type: 'text',
                content: '2016年寒流造成的農業損失統計:\n\n• 蔬菜: 15億元\n• 水果: 18億元\n• 漁產: 9億元\n• 總計: 42億元'
              }
            ]
          },
          {
            title: '計算各項目占比',
            blocks: [
              {
                type: 'text',
                content: '各項目占總損失的比例:\n\n蔬菜: 15 ÷ 42 × 100% ≈ 36%\n水果: 18 ÷ 42 × 100% ≈ 43%\n漁產: 9 ÷ 42 × 100% ≈ 21%\n\n這樣的統計幫助我們了解:\n• 哪些產業最容易受到寒害影響?\n• 應該優先保護哪些作物?'
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
          } else {
            const cleanAnswer = String(userAnswer).trim().replace(/[^\d.-]/g, '')
            const cleanExpected = String(question.answer).trim().replace(/[^\d.-]/g, '')
            return cleanAnswer === cleanExpected
          }
        }
      }
    },

    // ==========================================
    // 單元三：科學 — 聖嬰現象
    // ==========================================
    {
      id: 'science-el-nino',
      name: '科學:聖嬰現象',
      icon: '🔬',
      lesson: {
        title: '為什麼今年特別熱?',
        sections: [
          {
            title: '聖嬰現象的由來',
            blocks: [
              {
                type: 'text',
                content: '「聖嬰現象」這個名詞,最早出現在500多年前。\n\n南美洲秘魯的漁民發現,每隔幾年,在聖誕節前後,沿海的海水會變得比較溫暖,魚群就會消失,捕不到魚。\n\n因為發生在耶穌誕生的季節,他們就把這個現象稱為「El Niño」——西班牙語的「聖嬰」或「小男孩」。'
              }
            ]
          },
          {
            title: '現代科學的理解',
            blocks: [
              {
                type: 'text',
                content: '現在科學家知道,聖嬰現象不只影響秘魯沿海,而是整個太平洋、甚至全球氣候都會受到影響。'
              }
            ]
          },
          {
            title: '聖嬰現象如何發生?',
            blocks: [
              {
                type: 'text',
                content: '**正常情況**:\n東南太平洋(南美洲沿岸)有一股冷洋流,從深海湧上來,帶著豐富的養分,所以魚很多。\n\n**聖嬰年**:\n這股冷洋流減弱了,海面溫度升高,魚群消失了。'
              }
            ]
          },
          {
            title: '聖嬰現象的判定標準',
            blocks: [
              {
                type: 'text',
                content: '當中太平洋赤道區的海水溫度:\n\n• 升高攝氏1度以上\n• 持續幾個月\n\n就會影響大氣環流,讓全球各地的天氣都變得異常:\n• 有些地方特別熱\n• 有些地方暴雨\n• 有些地方乾旱'
              }
            ]
          },
          {
            title: '聖嬰現象對台灣的影響',
            blocks: [
              {
                type: 'text',
                content: '對台灣來說,聖嬰年通常會帶來兩個影響:\n\n**第一**:夏天可能比較熱\n2023年就是一個聖嬰年,台灣測到126年來最高溫,不是巧合。\n\n**第二**:隔年春天雨水可能比較多\n聖嬰會影響太平洋的水氣輸送,讓台灣的春雨增加。'
              }
            ]
          },
          {
            title: '聖嬰現象與全球暖化',
            blocks: [
              {
                type: 'text',
                content: '要注意,聖嬰現象不是唯一因素:\n\n• 全球暖化:長期趨勢\n• 聖嬰現象:2-7年一次的自然波動\n\n當兩者碰在一起,就會出現特別極端的天氣。'
              }
            ]
          },
          {
            title: '鄭明典的比喻',
            blocks: [
              {
                type: 'quote',
                content: '如果把氣候變遷比喻成音量慢慢轉大,聖嬰現象就像突然轉到最大聲。兩個加在一起,就會出現破紀錄的高溫。',
                author: '鄭明典'
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
    // 單元四：語文 — 詞彙練習
    // ==========================================
    {
      id: 'chinese-vocabulary',
      name: '語文:詞彙練習',
      icon: '✍️',
      lesson: {
        title: '今日詞彙:極端氣候用語',
        sections: [
          {
            title: '今日學習詞彙',
            blocks: [
              {
                type: 'text',
                content: '今天在各科學習中,出現了這些重要詞彙:\n\n【氣象類】\n• 熱浪:連續5天以上,每天最高溫都比平均溫度高5度以上\n• 異常值:實際值與平均值的差距\n• 聖嬰現象:中太平洋海水溫度異常升高的現象\n\n【災害類】\n• 極端氣候:超出正常範圍的氣候事件\n• 霸王級寒流:極為強烈的寒流\n• 豪雨:短時間內降下大量雨水\n• 土石流:山坡土石因豪雨而崩落\n\n【統計類】\n• 損失統計:計算災害造成的經濟損失\n• 占比:某項目占總數的百分比\n\n【其他】\n• El Niño:西班牙語,意思是「聖嬰」或「小男孩」'
              }
            ]
          },
          {
            title: '練習說明',
            blocks: [
              {
                type: 'text',
                content: '接下來的練習,測試你對這些詞彙的理解。\n\n請注意區分:\n• 熱浪(定義明確) vs 很熱(口語)\n• 異常值(有正負) vs 平均值(基準)\n• 聖嬰現象(自然波動) vs 全球暖化(長期趨勢)'
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
              question: '「熱浪」的定義是?',
              options: ['連續5天溫度都超過35度', '連續5天比平均溫度高5度以上', '單日溫度超過40度', '夏天很熱'],
              answer: 1,
              displayAnswer: '連續5天比平均溫度高5度以上'
            },
            {
              type: 'options',
              question: '「異常值」是指?',
              options: ['很不正常的數字', '實際值與平均值的差距', '錯誤的數據', '最大值和最小值'],
              answer: 1,
              displayAnswer: '實際值與平均值的差距'
            },
            {
              type: 'options',
              question: '「El Niño」是什麼意思?',
              options: ['小女孩', '聖嬰或小男孩', '海洋', '熱浪'],
              answer: 1,
              displayAnswer: '聖嬰或小男孩'
            },
            {
              type: 'options',
              question: '「霸王級寒流」中的「霸王級」是指?',
              options: ['來自霸王國', '極為強烈的', '持續很久的', '範圍很大的'],
              answer: 1,
              displayAnswer: '極為強烈的'
            },
            {
              type: 'options',
              question: '下列哪個詞語的用法「正確」?',
              options: [
                '聖嬰現象導致全球暖化',
                '熱浪就是夏天很熱',
                '異常值可以是正數或負數',
                '土石流是一種魚類'
              ],
              answer: 2,
              displayAnswer: '異常值可以是正數或負數'
            },
            {
              type: 'options',
              question: '「占比」的意思最接近?',
              options: ['佔領的意思', '某項目占總數的百分比', '比較的意思', '預測的意思'],
              answer: 1,
              displayAnswer: '某項目占總數的百分比'
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
    // 收尾：回應開場問題
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
                content: '今天開始時,我們帶著兩個問題進入課程:\n\n① 為什麼同樣的溫度,對不同地方的人影響差這麼多?\n② 台灣有哪些極端氣候?我們準備好了嗎?\n\n現在,用今天學到的概念,試著各寫2～3句話回答。\n\n可以用到的概念:熱浪定義、異常值、適應能力、準備、聖嬰現象、霸王寒流、極端降雨……'
              }
            ]
          },
          {
            title: '今日學習小結',
            blocks: [
              {
                type: 'text',
                content: '今天我們深入了解了「極端天氣」:\n\n• 社會:2003年歐洲熱浪的教訓,台灣的極端氣候案例\n• 數學:溫度異常值計算、災害損失統計\n• 科學:聖嬰現象的原理與影響\n• 語文:極端氣候的專業詞彙\n\n最關鍵的領悟:「有準備」比「不極端」更重要。'
              }
            ]
          },
          {
            title: '思考問題',
            blocks: [
              {
                type: 'text',
                content: '1. 如果你是2003年的法國市長,在收到熱浪警報時,你會採取什麼措施保護市民?\n\n2. 台灣雖然沒有歐洲式的熱浪,但我們有自己的極端氣候挑戰。你覺得哪一種對我們威脅最大?\n\n3. 為什麼「有準備」比「不極端」更重要?\n\n明天是動筆日,我們將整理這三天學到的知識,思考:面對氣候變遷,我們能做什麼?'
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
