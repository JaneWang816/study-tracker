// src/data/weeks/week03/day2.js
// W3 Day2：水怎麼養活了台灣？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:水利工程與圳路
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '嘉南大圳是誰設計的?',
    options: ['八田與一', '劉銘傳', '鄭成功', '連雅堂'],
    answer: 0,
    displayAnswer: '八田與一是日治時代的日本水利工程師,設計並主持興建了嘉南大圳。'
  },
  {
    type: 'options',
    question: '嘉南大圳完工於哪個時期,灌溉了多少公頃的農田?',
    options: ['日治時期,灌溉15萬公頃', '清朝,灌溉5萬公頃', '戰後,灌溉30萬公頃', '明鄭時期,灌溉3萬公頃'],
    answer: 0,
    displayAnswer: '嘉南大圳於1930年完工(日治時期),灌溉面積約15萬公頃,大幅提升了台灣南部的農業生產力。'
  },
  {
    type: 'options',
    question: '桃園台地為什麼需要人工埤塘?',
    options: ['桃園台地地形較高,沒有自然河流流過', '桃園地區雨量太少', '桃園的土質不適合種稻', '桃園是海埔新生地,土地太鹹'],
    answer: 0,
    displayAnswer: '桃園台地因地勢較高,無自然河流,先人挖掘大量埤塘(人工水庫)儲水,所以桃園有「千塘之鄉」的稱號。'
  },
  {
    type: 'options',
    question: '嘉南大圳採用「三年輪作制度」,以下說明何者正確?',
    options: ['把農地分三批,輪流種水稻、甘蔗和雜糧,讓土地休息', '每三年才灌溉一次,節省水資源', '只種三種作物,水稻、甘蔗和玉米', '每三年更換一次圳路的路線'],
    answer: 0,
    displayAnswer: '三年輪作制讓每塊農地輪流種植水稻、甘蔗、雜糧,避免土地過度使用,是保護土地肥力的智慧。'
  },
  {
    type: 'options',
    question: '圳路的主要功能是什麼?',
    options: ['引導河水灌溉農田', '排放工廠廢水', '防止颱風造成水災', '作為水上交通要道'],
    answer: 0,
    displayAnswer: '圳路是人工挖掘的水道,用來從河流引水,分送到農田灌溉,是農業社會的重要基礎設施。'
  },
  {
    type: 'options',
    question: '台灣古代的水利建設(如圳路)主要解決了什麼問題?',
    options: ['把水從有水的地方引到缺水的農田', '讓河水不再氾濫', '讓台灣的雨量增加', '讓農民不需要勞動'],
    answer: 0,
    displayAnswer: '台灣雨量分布不均,圳路讓農民能把水從有水的溪流引到缺水的旱地,解決灌溉問題。'
  },
  {
    type: 'options',
    question: '「烏山頭水庫」和嘉南大圳有什麼關係?',
    options: ['烏山頭水庫是嘉南大圳的水源儲水庫', '兩者完全沒有關係', '烏山頭水庫比嘉南大圳早一百年建造', '烏山頭水庫是用來防洪,不是灌溉'],
    answer: 0,
    displayAnswer: '烏山頭水庫是八田與一設計嘉南大圳系統的一部分,作為水源調節水庫,枯水期時放水灌溉農田。'
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
// 數學:比的化簡
// ==========================================
const mathQuestions = [
  // 化簡比
  {
    type: 'options',
    question: '把比 6:4 化成最簡比是?',
    options: ['3:2', '2:3', '3:4', '1:2'],
    answer: 0,
    displayAnswer: '6 和 4 的最大公因數是 2,兩者都除以 2,得到最簡比 3:2。'
  },
  {
    type: 'options',
    question: '把比 8:12 化成最簡比是?',
    options: ['2:3', '4:6', '1:2', '3:2'],
    answer: 0,
    displayAnswer: '8 和 12 的最大公因數是 4,兩者都除以 4,得到最簡比 2:3。'
  },
  {
    type: 'options',
    question: '把比 10:15 化成最簡比是?',
    options: ['2:3', '5:7', '1:2', '3:2'],
    answer: 0,
    displayAnswer: '10 和 15 的最大公因數是 5,兩者都除以 5,得到最簡比 2:3。'
  },
  {
    type: 'options',
    question: '把比 9:12 化成最簡比是?',
    options: ['3:4', '2:3', '4:3', '1:2'],
    answer: 0,
    displayAnswer: '9 和 12 的最大公因數是 3,兩者都除以 3,得到最簡比 3:4。'
  },
  {
    type: 'options',
    question: '把比 14:21 化成最簡比是?',
    options: ['2:3', '7:10', '1:2', '3:2'],
    answer: 0,
    displayAnswer: '14 和 21 的最大公因數是 7,兩者都除以 7,得到最簡比 2:3。'
  },
  {
    type: 'options',
    question: '把比 15:10 化成最簡比是?',
    options: ['3:2', '2:3', '5:3', '1:2'],
    answer: 0,
    displayAnswer: '15 和 10 的最大公因數是 5,兩者都除以 5,得到最簡比 3:2。'
  },
  // 等值比判斷
  {
    type: 'options',
    question: '6:9 化簡後等於哪個比?',
    options: ['2:3', '3:4', '1:2', '3:2'],
    answer: 0,
    displayAnswer: '6 和 9 都是 3 的倍數,都除以 3 得到最簡比 2:3。'
  },
  {
    type: 'options',
    question: '12:8 化簡後等於哪個比?',
    options: ['3:2', '2:3', '4:3', '1:2'],
    answer: 0,
    displayAnswer: '12 和 8 都是 4 的倍數,都除以 4 得到最簡比 3:2。'
  },
  // 應用題
  {
    type: 'options',
    question: '圳路今日共有 600 公升的水,按照 2:3 的比例分配給A農田和B農田,各得多少?',
    options: ['A農田:240公升,B農田:360公升', 'A農田:360公升,B農田:240公升', 'A農田:300公升,B農田:300公升', 'A農田:200公升,B農田:400公升'],
    answer: 0,
    displayAnswer: '總份數 = 2 + 3 = 5,每份 = 600 ÷ 5 = 120公升。A農田得 2 份 = 240公升,B農田得 3 份 = 360公升。'
  },
  {
    type: 'options',
    question: '圳路今日共有 500 公升的水,按照 3:2 的比例分配給上游和下游,各得多少?',
    options: ['上游:300公升,下游:200公升', '上游:200公升,下游:300公升', '上游:250公升,下游:250公升', '上游:150公升,下游:350公升'],
    answer: 0,
    displayAnswer: '總份數 = 3 + 2 = 5,每份 = 500 ÷ 5 = 100公升。上游得 3 份 = 300公升,下游得 2 份 = 200公升。'
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
// 科學:月相名稱與形狀
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '月相共有幾個主要名稱?',
    options: ['8個', '4個', '6個', '12個'],
    answer: 0,
    displayAnswer: '月相有八個主要名稱：新月、眉月、上弦月、盈凸月、滿月、虧凸月、下弦月、殘月。'
  },
  {
    type: 'options',
    question: '農曆初一是什麼月相?',
    options: ['新月（看不見月亮）', '滿月', '上弦月', '下弦月'],
    answer: 0,
    displayAnswer: '農曆初一是新月，月亮幾乎完全看不見。'
  },
  {
    type: 'options',
    question: '農曆十五前後是什麼月相?',
    options: ['滿月', '新月', '上弦月', '下弦月'],
    answer: 0,
    displayAnswer: '農曆十五前後是滿月，月亮最圓。這也是中秋節賞月的由來。'
  },
  {
    type: 'options',
    question: '上弦月的形狀是?',
    options: ['右半圓（右側亮）', '左半圓（左側亮）', '完整的圓', '細細的月牙'],
    answer: 0,
    displayAnswer: '上弦月是右半圓，右側（西邊）是亮的。記憶方法：「上弦月，右邊亮」。'
  },
  {
    type: 'options',
    question: '下弦月的形狀是?',
    options: ['左半圓（左側亮）', '右半圓（右側亮）', '完整的圓', '超過半圓的形狀'],
    answer: 0,
    displayAnswer: '下弦月是左半圓，左側（東邊）是亮的。記憶方法：「下弦月，左邊亮」。'
  },
  {
    type: 'options',
    question: '「盈凸月」是指什麼形狀?',
    options: ['超過半圓、右側亮，介於上弦月和滿月之間', '不到半圓的月牙', '完整的圓', '左側超過半圓的形狀'],
    answer: 0,
    displayAnswer: '盈凸月出現在上弦月之後、滿月之前，形狀超過半圓，右側亮，月亮正在「變胖」中。'
  },
  {
    type: 'options',
    question: '月相的完整週期大約是幾天?',
    options: ['約29.5天', '約15天', '約7天', '約365天'],
    answer: 0,
    displayAnswer: '從新月到下一個新月，月相完整循環一次約需29.5天，這也是農曆一個月的長度。'
  },
  {
    type: 'options',
    question: '「眉月」出現在月相週期的哪個階段?',
    options: ['新月之後、上弦月之前（細月牙，右側亮）', '滿月之後', '下弦月之後', '虧凸月之後'],
    answer: 0,
    displayAnswer: '眉月出現在新月之後，是細細的月牙，右側有一點點亮光，月亮剛開始「長大」。'
  },
  {
    type: 'options',
    question: '滿月之後，接下來依序是哪些月相?',
    options: ['虧凸月→下弦月→殘月→新月', '下弦月→虧凸月→殘月→新月', '殘月→下弦月→虧凸月→新月', '新月→眉月→上弦月→盈凸月'],
    answer: 0,
    displayAnswer: '滿月之後月亮開始「變瘦」，依序是虧凸月→下弦月→殘月→新月，完成一個循環。'
  },
  {
    type: 'options',
    question: '月亮本身會發光嗎?',
    options: ['不會，月光是反射太陽光', '會，月亮自己發出銀白色光', '只有滿月時才自己發光', '只有夜晚才會發光'],
    answer: 0,
    displayAnswer: '月亮本身不發光，我們看到的月光是月球表面反射太陽光的結果，就像鏡子反射光一樣。'
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

// ===== 組合成 Day 2 =====
const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '💧',
  color: '#0EA5E9',
  title: '水怎麼養活了台灣？',
  units: [
    // 開場
    {
      id: 'w3d2-opening',
      name: '開場：山影貼在臉上',
      icon: '📖',
      lesson: {
        title: '吳晟《吾鄉印象》——第二段',
        sections: [
          {
            title: '今日貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '古早的古早的古早以前\n自吾鄉左側延綿而近的山影\n就是一大片潑墨畫\n緊緊的貼在吾鄉的人們的臉上',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '吳晟的故鄉在彰化，左側是八卦山，再往左就是中央山脈——山影緊貼著農村人的生活，就像河流緊扣著農田一樣。'
              },
              {
                type: 'text',
                content: '山是河的源頭，河是農業的命脈。今天我們要認識一個改變百萬人命運的工程：嘉南大圳，以及設計它的日本工程師八田與一的故事。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 A：社會
    {
      id: 'w3d2-social',
      name: '社會：水利工程與圳路',
      icon: '🏗️',
      lesson: {
        title: '嘉南大圳：一條水道養活百萬人',
        sections: [
          {
            title: '台灣南部的困境',
            blocks: [
              {
                type: 'text',
                content: '日治時期，台灣南部的嘉南平原雖然土地肥沃，卻有一個大問題：雨量分布極不均衡。雨季（5-9月）水太多，旱季（10-4月）又滴水不滴。'
              },
              {
                type: 'text',
                content: '農民只能「看天吃飯」，遇到旱年，莊稼乾死；遇到雨季，洪水又淹沒農田。這片土地的潛力，幾乎被浪費掉了。'
              }
            ]
          },
          {
            title: '八田與一的工程',
            blocks: [
              {
                type: 'text',
                content: '1920年代，日本工程師八田與一受命設計一套大型水利系統，解決嘉南平原的灌溉問題。他的方案是：在台南烏山頭建一座大水庫，再從水庫挖掘長達16000公里的圳路網絡，把水分送到每一塊農田。'
              },
              {
                type: 'text',
                content: '1930年，嘉南大圳完工。灌溉面積從原本的2萬公頃，擴展到15萬公頃，增加了7.5倍！農民的收成大幅提升，嘉南平原成為台灣最重要的糧倉。'
              },
              {
                type: 'quote',
                content: '八田與一不只是一位工程師，也是一位真正關心農民的人。工程施工期間，他一直住在工地，親自監督每一個細節。',
                author: '歷史紀載'
              }
            ]
          },
          {
            title: '三年輪作制的智慧',
            blocks: [
              {
                type: 'text',
                content: '嘉南大圳的水量有限，無法同時灌溉所有農田。八田與一設計了「三年輪作制」：把農地分成三組，每組輪流種水稻（需要大量水）、甘蔗（需要中等水）、雜糧（需要少量水）。'
              },
              {
                type: 'text',
                content: '這樣的設計有兩個好處：\n① 水資源平均分配，不浪費\n② 土地輪流種不同作物，保持土壤肥力'
              }
            ]
          },
          {
            title: '桃園台地的埤塘',
            blocks: [
              {
                type: 'text',
                content: '北部的桃園台地有不一樣的水利故事。台地地勢高，沒有天然河流流過，先人就挖掘了數千個「埤塘」（人工水塘）儲存雨水。'
              },
              {
                type: 'text',
                content: '桃園因此被稱為「千塘之鄉」，藍色的埤塘點綴在農田之間，既是水庫，也是鳥類的棲地，成為獨特的農業地景。'
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
      id: 'w3d2-math',
      name: '數學：比的化簡與等值比',
      icon: '📐',
      lesson: {
        title: '化簡比——找到最簡單的關係',
        sections: [
          {
            title: '為什麼要化簡比？',
            blocks: [
              {
                type: 'text',
                content: '嘉南大圳每日引水1500公噸，按照600：900分給A區和B區農田。這個比能不能說得更簡單？'
              },
              {
                type: 'text',
                content: '600：900 → 都可以被300整除 → 2：3\n\n「2：3」比「600：900」更清楚：A區拿2份，B區拿3份。這就是「最簡比」。'
              }
            ]
          },
          {
            title: '如何化簡比？',
            blocks: [
              {
                type: 'text',
                content: '化簡比的方法：找前項和後項的「最大公因數」，兩者都除以它。\n\n例：12：18\n→ 12和18的最大公因數是6\n→ 12÷6 = 2，18÷6 = 3\n→ 最簡比是 2：3'
              },
              {
                type: 'text',
                content: '這裡用到了 W2 學的「最大公因數」！\n\n如果你忘記怎麼求最大公因數，可以回去複習 W2 的數學。'
              }
            ]
          },
          {
            title: '等值比',
            blocks: [
              {
                type: 'text',
                content: '2：3 和 4：6 和 6：9，它們的比值都相同（= 2/3），叫做「等值比」。\n\n就像 1/2 和 2/4 和 3/6 都是相同的分數一樣。'
              },
              {
                type: 'text',
                content: '在生活中，比的大小關係才是重點，所以通常化成最簡比最清楚。\n\n「A圳水量：B圳水量 = 2：3」比「600：900」更直覺——就是A拿2份，B拿3份。'
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
      id: 'w3d2-science',
      name: '科學：月相名稱與形狀',
      icon: '🌕',
      lesson: {
        title: '月亮的八張臉——認識月相名稱',
        sections: [
          {
            title: '月亮不會自己發光',
            blocks: [
              {
                type: 'text',
                content: '我們看到的月光，其實是月球表面反射太陽光的結果——就像鏡子反射光一樣。月亮本身是個球，形狀從來不變，變的是「我們從地球能看到多少被照亮的部分」。'
              },
              {
                type: 'text',
                content: '月亮繞地球公轉，每繞一圈約29.5天。在不同位置，被太陽照亮的那一面朝向地球的比例不同，我們看到的形狀就不一樣——這就是「月相」。'
              }
            ]
          },
          {
            title: '八個月相，按順序記',
            blocks: [
              {
                type: 'text',
                content: '🌑 新月：月亮幾乎不可見（農曆初一）\n🌒 眉月：細細的右側月牙，剛開始長大\n🌓 上弦月：右半圓，右側亮（農曆初七、八）\n🌔 盈凸月：超過半圓，右側亮，繼續變胖\n🌕 滿月：完整的圓（農曆十五）\n🌖 虧凸月：超過半圓，左側亮，開始變瘦\n🌗 下弦月：左半圓，左側亮（農曆二十二、三）\n🌘 殘月：細細的左側月牙，快消失了'
              },
              {
                type: 'text',
                content: '記憶口訣：\n「上弦月，右邊亮；下弦月，左邊亮」\n「初一新月不見面，十五滿月最團圓」'
              }
            ]
          },
          {
            title: '月相與農曆的關係',
            blocks: [
              {
                type: 'text',
                content: '農曆就是根據月相設計的曆法。農曆「一個月」= 月相循環一次 ≈ 29.5天。因此農曆有大月（30天）和小月（29天）交替，平均下來剛好符合月相週期。'
              },
              {
                type: 'text',
                content: '農民看月相決定農事時機：滿月代表月中，新月代表月初，這種「看天計時」的方法使用了數千年。'
              },
              {
                type: 'text',
                content: '🔭 觀測挑戰：今晚看看月亮是什麼形狀？對照八個月相，判斷今天大約是農曆幾號。'
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
      id: 'w3d2-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '水與比的連結',
            blocks: [
              {
                type: 'text',
                content: '今天三個學科都圍繞著「比例」這個概念：\n\n🏗️ 社會：嘉南大圳按比例分水，三年輪作平衡土地\n📐 數學：化簡比，找到最清楚的比例關係\n🌕 科學：月相是太陽照到月亮的比例，決定我們看到的形狀'
              },
              {
                type: 'text',
                content: '八田與一讓水按比例流向每塊農田，農曆讓時間按月相週期流動——用比例理解世界，是數學最重要的力量之一。'
              },
              {
                type: 'text',
                content: '🌙 明天，我們要進入「時間的流動」：農曆和節氣如何讓農民掌握耕作節奏？分數除法又如何幫我們計算分配問題？'
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
