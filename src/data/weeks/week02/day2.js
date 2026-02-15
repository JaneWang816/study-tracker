// src/data/weeks/week02/day2.js
// W2 Day 2：生命的形狀

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 數學:公倍數與最小公倍數
// ==========================================
const mathQuestions = [
  // 最小公倍數題型
  {
    type: 'options',
    question: '4 和 6 的最小公倍數是多少?',
    options: ['12', '24', '18', '8'],
    answer: 0,
    displayAnswer: '12'
  },
  {
    type: 'options',
    question: '3 和 5 的最小公倍數是多少?',
    options: ['15', '8', '10', '30'],
    answer: 0,
    displayAnswer: '15'
  },
  {
    type: 'options',
    question: '6 和 9 的最小公倍數是多少?',
    options: ['18', '12', '27', '36'],
    answer: 0,
    displayAnswer: '18'
  },
  {
    type: 'options',
    question: '4 和 10 的最小公倍數是多少?',
    options: ['20', '14', '40', '10'],
    answer: 0,
    displayAnswer: '20'
  },
  {
    type: 'options',
    question: '6 和 8 的最小公倍數是多少?',
    options: ['24', '14', '48', '16'],
    answer: 0,
    displayAnswer: '24'
  },
  {
    type: 'options',
    question: '5 和 6 的最小公倍數是多少?',
    options: ['30', '11', '15', '60'],
    answer: 0,
    displayAnswer: '30'
  },
  {
    type: 'options',
    question: '4 和 7 的最小公倍數是多少?',
    options: ['28', '11', '14', '21'],
    answer: 0,
    displayAnswer: '28'
  },
  {
    type: 'options',
    question: '8 和 12 的最小公倍數是多少?',
    options: ['24', '20', '48', '96'],
    answer: 0,
    displayAnswer: '24'
  },
  {
    type: 'options',
    question: '6 和 10 的最小公倍數是多少?',
    options: ['30', '16', '60', '20'],
    answer: 0,
    displayAnswer: '30'
  },
  {
    type: 'options',
    question: '9 和 12 的最小公倍數是多少?',
    options: ['36', '21', '18', '108'],
    answer: 0,
    displayAnswer: '36'
  },
  {
    type: 'options',
    question: '5 和 8 的最小公倍數是多少?',
    options: ['40', '13', '24', '80'],
    answer: 0,
    displayAnswer: '40'
  },
  {
    type: 'options',
    question: '7 和 14 的最小公倍數是多少?',
    options: ['14', '7', '21', '28'],
    answer: 0,
    displayAnswer: '14'
  },
  // 應用題型
  {
    type: 'options',
    question: '每隔 4 天澆一次花,每隔 6 天施一次肥,今天同時澆花又施肥,下次同時進行要等幾天?',
    options: ['12 天', '24 天', '10 天', '18 天'],
    answer: 0,
    displayAnswer: '12 天'
  },
  {
    type: 'options',
    question: '公車 A 每 6 分鐘一班,公車 B 每 9 分鐘一班,兩班車同時出發後,最少幾分鐘後再次同時出發?',
    options: ['18 分鐘', '54 分鐘', '15 分鐘', '36 分鐘'],
    answer: 0,
    displayAnswer: '18 分鐘'
  },
  {
    type: 'options',
    question: '有兩個齒輪,大齒輪轉 4 格、小齒輪轉 6 格對齊一次,最少要各轉幾格才能再次對齊?',
    options: ['12 格', '24 格', '10 格', '18 格'],
    answer: 0,
    displayAnswer: '12 格'
  },
  {
    type: 'options',
    question: '小明每 3 天跑步一次,小華每 5 天跑步一次,今天一起跑步,下次一起跑步要等幾天?',
    options: ['15 天', '8 天', '30 天', '10 天'],
    answer: 0,
    displayAnswer: '15 天'
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
// 社會:原住民與土地
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '魯凱族視為聖山的是哪一座山?',
    options: ['大武山', '玉山', '雪山', '合歡山'],
    answer: 0,
    displayAnswer: '大武山'
  },
  {
    type: 'options',
    question: '台灣原住民族的傳統生態知識(TEK)主要是指什麼?',
    options: ['祖先代代相傳對自然環境的觀察與智慧', '現代科學研究方法', '政府制定的環境法規', '外來移民帶來的農業技術'],
    answer: 0,
    displayAnswer: '祖先代代相傳對自然環境的觀察與智慧'
  },
  {
    type: 'options',
    question: '台灣目前政府正式認定的原住民族共有幾族?',
    options: ['16 族', '10 族', '14 族', '20 族'],
    answer: 0,
    displayAnswer: '16 族'
  },
  {
    type: 'options',
    question: '魯凱族和排灣族的傳統服飾中,常見的動物圖騰是?',
    options: ['百步蛇', '老鷹', '梅花鹿', '黑熊'],
    answer: 0,
    displayAnswer: '百步蛇'
  },
  {
    type: 'options',
    question: '台灣原住民族的傳統領域主要分布在哪裡?',
    options: ['山地與東部海岸', '西部平原', '城市近郊', '離島地區'],
    answer: 0,
    displayAnswer: '山地與東部海岸'
  },
  {
    type: 'options',
    question: '以下哪一種行為最能體現原住民族「天人合一」的土地觀?',
    options: ['按照動物繁殖季節調整獵捕時間', '盡量多獵捕以儲備糧食', '用化學藥劑驅除害蟲', '圍住土地防止動物進入'],
    answer: 0,
    displayAnswer: '按照動物繁殖季節調整獵捕時間'
  },
  {
    type: 'options',
    question: '魯凱族「巴冷公主」的故事中,公主嫁給了誰?',
    options: ['化身為王子的百步蛇神', '來自海洋的漁夫', '鄰族的頭目', '天上的太陽神'],
    answer: 0,
    displayAnswer: '化身為王子的百步蛇神'
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
// 科學:植物構造
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '植物種子萌發需要哪三個基本條件?',
    options: ['適當的水分、空氣和溫度', '陽光、土壤和肥料', '雨水、風和昆蟲', '高溫、乾燥和黑暗'],
    answer: 0,
    displayAnswer: '適當的水分、空氣和溫度'
  },
  {
    type: 'options',
    question: '種子中的「子葉」主要功能是什麼?',
    options: ['儲存養分供幼苗生長', '吸收土壤中的水分', '進行光合作用', '保護種子不受傷害'],
    answer: 0,
    displayAnswer: '儲存養分供幼苗生長'
  },
  {
    type: 'options',
    question: '植物的根有哪些主要功能?',
    options: ['吸收水分與礦物質、固定植物', '進行光合作用製造養分', '傳輸花粉幫助繁殖', '釋放氧氣到空氣中'],
    answer: 0,
    displayAnswer: '吸收水分與礦物質、固定植物'
  },
  {
    type: 'options',
    question: '植物葉片上的「氣孔」主要功能是什麼?',
    options: ['與外界交換氣體(吸收 CO₂、釋放 O₂)', '吸收陽光進行光合作用', '儲存水分防止乾燥', '感應光線方向'],
    answer: 0,
    displayAnswer: '與外界交換氣體(吸收 CO₂、釋放 O₂)'
  },
  {
    type: 'options',
    question: '植物莖部的導管和韌皮部分別運輸什麼?',
    options: ['導管運輸水分和礦物質,韌皮部運輸有機養分', '導管運輸養分,韌皮部運輸水分', '兩者都運輸水分', '兩者都運輸養分'],
    answer: 0,
    displayAnswer: '導管運輸水分和礦物質,韌皮部運輸有機養分'
  },
  {
    type: 'options',
    question: '光合作用的主要原料是什麼?',
    options: ['二氧化碳和水', '氧氣和葡萄糖', '氮氣和礦物質', '氫氣和陽光'],
    answer: 0,
    displayAnswer: '二氧化碳和水'
  },
  {
    type: 'options',
    question: '仙人掌的葉子退化成刺,這是植物哪種適應環境的表現?',
    options: ['減少水分蒸發,適應乾旱環境', '增加光合作用面積', '保護果實不被動物吃掉', '幫助傳播種子'],
    answer: 0,
    displayAnswer: '減少水分蒸發,適應乾旱環境'
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
// 閱讀理解:魯凱族
// ==========================================
const readingQuestions = [
  {
    type: 'options',
    question: '魯凱族「蛇卵生人」故事中,蛇蛋是在哪裡被發現的?',
    options: ['山谷中的古甕裡', '大武山頂的石縫中', '大海邊的沙灘上', '老樹的樹洞裡'],
    answer: 0,
    displayAnswer: '山谷中的古甕裡'
  },
  {
    type: 'options',
    question: '根據魯凱族「蛇孵太陽卵」,太陽產下的兩個卵孵化出了什麼?',
    options: ['一對男女神,成為頭目的祖先', '兩條巨龍守護部落', '太陽和月亮', '火與水的精靈'],
    answer: 0,
    displayAnswer: '一對男女神,成為頭目的祖先'
  },
  {
    type: 'options',
    question: '「巴冷公主」故事中,百步蛇神向頭目求親時,頭目的態度是?',
    options: ['給予種種考驗,百步蛇神一一克服', '立刻答應,歡喜嫁女', '拒絕並驅逐百步蛇', '要求百步蛇帶來大量財寶'],
    answer: 0,
    displayAnswer: '給予種種考驗,百步蛇神一一克服'
  },
  {
    type: 'options',
    question: '魯凱族的起源神話中,為什麼頭目家族的祖先特別尊貴?',
    options: ['他們是由百步蛇蛋孵化而生的後代', '他們是第一個登上大武山的人', '他們掌握了火的使用方法', '他們帶領族人渡過大洪水'],
    answer: 0,
    displayAnswer: '他們是由百步蛇蛋孵化而生的後代'
  }
]

const generateReadingQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(readingQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateMathQuestion, generateSocialQuestion, generateScienceQuestion, generateReadingQuestion }

// ==========================================
// Day 2 主體
// ==========================================
const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '🌱',
  color: '#2E7D32',
  title: '生命的形狀',

  units: [
    {
      id: 'w2d2-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '臺灣原住民族與蛇：魯凱族的故事',
        sections: [
          {
            title: '昨日回顧 × 今日問題',
            blocks: [
              {
                type: 'text',
                content: '昨天我們讀了排灣族的故事——蛇鱗啟發了石板屋的建築規律。今天來到魯凱族，同樣是百步蛇，卻有著完全不同的故事。今天的問題是：「蛋和種子，有什麼共同點？」帶著這個問題閱讀魯凱族的故事。'
              }
            ]
          },
          {
            title: '今日閱讀：魯凱族的故事',
            blocks: [
              {
                type: 'subtitle',
                content: '蛇卵生人'
              },
              {
                type: 'text',
                content: '古時有一位青年自山谷中抱回一個古甕，內藏一枚百步蛇蛋，蛇蛋受到陽光照拂的溫暖，七天後孵化一個男嬰，此即百步蛇之子，成人之後，與一位下凡的女神結婚，從此魯凱族代代繁衍。'
              },
              {
                type: 'subtitle',
                content: '蛇孵太陽卵'
              },
              {
                type: 'text',
                content: '太陽在山上產下一白、一紅的兩個卵，由一條蛇 Vunun 前來覆蓋，不久，一對男女神即孵化而生，他們是這個部落頭目的祖先；其他村民則從另一種青色蛇所產的卵孵化生出。'
              },
              {
                type: 'subtitle',
                content: '巴冷公主的故事'
              },
              {
                type: 'text',
                content: '現今屏東縣霧台鄉有個古老的「達樂樂村」，該村頭目有一位待嫁女兒「巴冷」，善良美麗，勤快熱心。遠方大鬼湖中，住著一條修練成精的百步蛇，化身為一英俊王子，進入村落幫助公主做事，兩人日久生情，百步蛇神遂向巴冷公主的父親提親；頭目給予百步蛇神種種考驗，百步蛇神一一克服困難、完成任務，如願迎娶巴冷公主回大鬼湖。'
              },
              {
                type: 'text',
                content: '🔍 今日思考：蛋和種子都需要適當的條件才能萌發生命。魯凱族的蛇蛋需要「陽光的溫暖」，植物的種子需要什麼呢？'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateReadingQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    {
      id: 'w2d2-social',
      name: '社會',
      icon: '🏘️',
      lesson: {
        title: '原住民族與土地的關係',
        sections: [
          {
            title: '土地不只是土地',
            blocks: [
              {
                type: 'text',
                content: '對台灣原住民族而言，土地不只是生產糧食的地方，更是祖先的居所、靈魂的歸處。魯凱族視大武山為聖山，那是神話中頭目祖先誕生的地方；排灣族的百步蛇傳說，也與大武山緊密相連。山，不只是地形，更是族人身分認同的根。'
              }
            ]
          },
          {
            title: '傳統生態知識（TEK）',
            blocks: [
              {
                type: 'text',
                content: '原住民族的祖先在台灣生活了數千年，累積了豐富的「傳統生態知識」（Traditional Ecological Knowledge，簡稱 TEK）。這些知識包括：哪個季節可以獵捕哪種動物、哪些植物可以治病、河流的洪水規律、山上的氣候變化等。'
              },
              {
                type: 'text',
                content: '例如，布農族有複雜的農業曆法，根據月相決定播種和收割的時間；泰雅族知道透過觀察植物的開花時間來判斷魚類洄游的季節。這些知識不是文字記載的，而是透過神話、儀式和日常生活一代一代傳承下來的。'
              }
            ]
          },
          {
            title: '台灣的 16 族',
            blocks: [
              {
                type: 'text',
                content: '台灣目前政府正式認定的原住民族共有 16 族，分別是：阿美族、泰雅族、排灣族、布農族、魯凱族、鄒族、賽夏族、雅美（達悟）族、邵族、噶瑪蘭族、太魯閣族、撒奇萊雅族、賽德克族、拉阿魯哇族、卡那卡那富族、西拉雅族。每個族群都有自己獨特的語言、文化和土地智慧。'
              },
              {
                type: 'text',
                content: '這 16 族主要分布在台灣的山地和東部海岸，這不是偶然——正是因為這些地區地形崎嶇，後來的漢人移民較難進入開發，原住民族才得以保留自己的傳統領域和文化。地形，保護了文化。'
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
      id: 'w2d2-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '公倍數與最小公倍數',
        sections: [
          {
            title: '什麼是倍數和公倍數？',
            blocks: [
              {
                type: 'text',
                content: '倍數就是「某個數乘以整數所得到的數」。例如 4 的倍數：4、8、12、16、20、24……；6 的倍數：6、12、18、24、30……'
              },
              {
                type: 'text',
                content: '公倍數就是「兩個數共同的倍數」。4 和 6 的公倍數：12、24、36……（無限多個）。其中最小的那個，就叫做「最小公倍數」（LCM）。4 和 6 的最小公倍數是 12。'
              }
            ]
          },
          {
            title: '短除法：快速找最小公倍數',
            blocks: [
              {
                type: 'text',
                content: '短除法求最小公倍數，和求最大公因數類似，但最後要把所有用過的數字和剩餘的數字全部相乘。\n\n例：求 4 和 6 的最小公倍數\n÷ 2：得 2 和 3（互質，停止）\n最小公倍數 = 2 × 2 × 3 = 12 ✓'
              },
              {
                type: 'text',
                content: '例：求 6 和 9 的最小公倍數\n÷ 3：得 2 和 3（互質，停止）\n最小公倍數 = 3 × 2 × 3 = 18 ✓'
              }
            ]
          },
          {
            title: '最大公因數和最小公倍數的關係',
            blocks: [
              {
                type: 'text',
                content: '有個很有趣的規律：兩個數的最大公因數 × 最小公倍數 = 兩數相乘。\n\n例如 12 和 18：最大公因數 = 6，最小公倍數 = 36\n6 × 36 = 216 = 12 × 18 ✓\n\n這個規律可以用來驗算答案是否正確！'
              },
              {
                type: 'text',
                content: '生活應用：公車 A 每 6 分鐘一班，公車 B 每 9 分鐘一班，兩班同時出發，下次同時出發要等幾分鐘？答：求 6 和 9 的最小公倍數 = 18 分鐘。'
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
      id: 'w2d2-science',
      name: '科學',
      icon: '🌿',
      lesson: {
        title: '植物的構造與生命起點',
        sections: [
          {
            title: '種子——生命的密碼',
            blocks: [
              {
                type: 'text',
                content: '就像魯凱族神話中的蛇蛋需要陽光才能孵化，植物的種子也需要特定條件才能萌發。種子萌發的三個基本條件是：適當的水分、充足的空氣（氧氣）、適宜的溫度。'
              },
              {
                type: 'text',
                content: '種子的構造：種皮（保護層）、子葉（儲存養分，提供幼苗初期生長所需）、胚（未來的新植物，包含胚根、胚莖、胚芽）。種子就像一個裝有「藍圖」和「食物」的保險箱。'
              }
            ]
          },
          {
            title: '根、莖、葉的分工',
            blocks: [
              {
                type: 'text',
                content: '根：深入土壤，負責吸收水分和礦物質，並固定整株植物。根毛極細，能鑽入土壤縫隙中，大幅增加吸收面積。'
              },
              {
                type: 'text',
                content: '莖：連接根與葉的運輸幹道。莖內有兩種管道：導管（由根往葉運輸水分和礦物質）和韌皮部（由葉往根運輸光合作用製造的有機養分）。'
              },
              {
                type: 'text',
                content: '葉：植物的「工廠」，利用葉綠素吸收陽光，將二氧化碳和水合成葡萄糖，同時釋放氧氣——這就是光合作用。葉片上有許多氣孔，負責與外界交換氣體。'
              }
            ]
          },
          {
            title: '植物如何適應環境？',
            blocks: [
              {
                type: 'text',
                content: '不同環境的植物，演化出不同的形態來適應。沙漠中的仙人掌把葉子退化成刺，減少水分蒸發，莖則變得肥厚來儲水；水中的蓮花莖部中空，方便輸送氣體到水中的根部；高山上的植物矮小密集，減少被強風吹折的風險。'
              },
              {
                type: 'text',
                content: '台灣原住民族對這些植物特性瞭若指掌。魯凱族知道大武山上哪些植物可以治療蛇咬，排灣族用月桃葉包裹食物保鮮。這些傳統知識，和現代植物學的研究結果往往高度吻合。'
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
      id: 'w2d2-review',
      name: '今日回顧',
      icon: '🌙',
      lesson: {
        title: '蛋、種子與生命的起點',
        sections: [
          {
            title: '今天學了什麼？',
            blocks: [
              {
                type: 'text',
                content: '今天的核心問題是「蛋和種子有什麼共同點？」現在你有答案了嗎？\n\n兩者都是生命的起點，都需要適當的外在條件（溫度、水分）才能啟動生命；都擁有儲存的養分讓新生命初期成長；都有保護層（蛋殼 / 種皮）防止外界傷害。'
              },
              {
                type: 'text',
                content: '📌 閱讀：魯凱族的蛇卵生人傳說，百步蛇是頭目家族的神聖起源。\n📌 社會：原住民族的傳統生態知識（TEK）是祖先數千年觀察自然的智慧結晶。\n📌 數學：公倍數是兩數共同的倍數，最小公倍數用短除法求得，可應用於週期性問題。\n📌 科學：種子萌發需要水分、空氣和溫度，植物的根莖葉各司其職，並能適應不同環境。'
              },
              {
                type: 'text',
                content: '🔮 明天預告：布農族百步蛇復仇的故事，以及人與自然之間的約定——植物如何在嚴苛環境中「談判」與生存？'
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
