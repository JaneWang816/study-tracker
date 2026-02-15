// src/data/weeks/week05/day2.js
// W5 Day2：機械怎麼省力？
// 貫穿文本：吳念真〈琵琶鼠〉第二段

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:日治糖業
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '日治時期台灣的糖業發展到什麼程度?',
    options: [
      '台灣成為全球重要的糖業生產地之一',
      '台灣幾乎不生產糖',
      '台灣的糖全部自己消費,不出口',
      '只有少數家庭手工製糖'
    ],
    answer: 0,
    displayAnswer: '日治時期,台灣成為全球主要的糖業生產地。台灣糖業株式會社在各地建立現代化製糖廠,台灣砂糖大量出口,為日本帶來重要收益。'
  },
  {
    type: 'options',
    question: '「五分仔車」是什麼?',
    options: [
      '運送甘蔗到製糖廠的小型鐵路車輛',
      '一種運送五分錢物品的車',
      '只能坐五個人的公車',
      '日治時期的計程車'
    ],
    answer: 0,
    displayAnswer: '五分仔車是台灣糖業鐵路的小火車,因軌距只有一般鐵路的一半(762mm),所以叫「五分仔」。它把各農場的甘蔗運到製糖廠,是糖業運輸的命脈。'
  },
  {
    type: 'options',
    question: '製糖過程中,為什麼需要大型機械?',
    options: [
      '因為甘蔗的莖很硬,需要機械壓榨才能取出汁液',
      '因為機械比人工便宜',
      '只是為了好看',
      '其實可以用手工製糖,機械不是必要的'
    ],
    answer: 0,
    displayAnswer: '甘蔗含糖量高,但纖維強韌,需要大型滾輪機器才能有效壓榨出汁液。機械化生產的效率比傳統牛拉磨石高出數十倍。'
  },
  {
    type: 'options',
    question: '日治時期台灣的糖業主要集中在哪個地區?',
    options: ['台灣南部(台南、高雄、屏東)', '台灣北部(台北、基隆)', '台灣東部(花蓮、台東)', '台灣的高山地區'],
    answer: 0,
    displayAnswer: '台灣南部氣候炎熱、平原廣大,適合大規模種植甘蔗。台南、高雄、屏東是主要的甘蔗產地,現在的台糖公司也是源自日治時代的糖業。'
  },
  {
    type: 'options',
    question: '台灣砂糖在日治時期主要出口到哪裡?',
    options: ['日本本土及海外各地', '只賣給中國', '只在台灣島內消費', '主要出口到美國'],
    answer: 0,
    displayAnswer: '台灣砂糖主要輸往日本本土,也透過日本的貿易網路出口至其他地區,是台灣最重要的出口商品之一,替日本帶來巨大的經濟利益。'
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
// 數學:圓周長應用(齒輪、輪胎)
// ==========================================
const mathQuestions = [
  // 輪胎滾動距離
  {
    type: 'options',
    question: '五分仔車的車輪半徑是 30 公分,滾動 5 圈後,前進了多少公分?(π ≈ 3.14)',
    options: ['942', '972', '471', '1002'],
    answer: 0,
    displayAnswer: '每轉一圈前進的距離 = 圓周長 = 2 × 3.14 × 30 = 188.4 公分\n5 圈共前進:188.4 × 5 = 942 公分'
  },
  {
    type: 'options',
    question: '五分仔車的車輪半徑是 35 公分,滾動 8 圈後,前進了多少公分?(π ≈ 3.14)',
    options: ['1758.4', '879.2', '1793.4', '1723.4'],
    answer: 0,
    displayAnswer: '每轉一圈前進的距離 = 2 × 3.14 × 35 = 219.8 公分\n8 圈共前進:219.8 × 8 = 1758.4 公分'
  },
  {
    type: 'options',
    question: '五分仔車的車輪半徑是 40 公分,滾動 10 圈後,前進了多少公分?(π ≈ 3.14)',
    options: ['2512', '1256', '2552', '2472'],
    answer: 0,
    displayAnswer: '每轉一圈前進的距離 = 2 × 3.14 × 40 = 251.2 公分\n10 圈共前進:251.2 × 10 = 2512 公分'
  },
  {
    type: 'options',
    question: '五分仔車的車輪半徑是 50 公分,滾動 20 圈後,前進了多少公分?(π ≈ 3.14)',
    options: ['6280', '3140', '6380', '6180'],
    answer: 0,
    displayAnswer: '每轉一圈前進的距離 = 2 × 3.14 × 50 = 314 公分\n20 圈共前進:314 × 20 = 6280 公分'
  },
  // 齒輪周長比較
  {
    type: 'options',
    question: '製糖機械中有兩個齒輪:小齒輪半徑 5 公分,大齒輪半徑 10 公分。大齒輪的周長和小齒輪相比是?',
    options: ['大齒輪的周長是小齒輪的 2 倍', '大齒輪的周長是小齒輪的 4 倍', '兩個齒輪的周長相同', '大齒輪的周長是小齒輪的 3 倍'],
    answer: 0,
    displayAnswer: '小齒輪周長 = 2 × 3.14 × 5 = 31.4 公分\n大齒輪周長 = 2 × 3.14 × 10 = 62.8 公分\n62.8 ÷ 31.4 = 2,所以大齒輪的周長是小齒輪的 2 倍'
  },
  {
    type: 'options',
    question: '製糖機械中有兩個齒輪:小齒輪半徑 6 公分,大齒輪半徑 12 公分。大齒輪的周長和小齒輪相比是?',
    options: ['大齒輪的周長是小齒輪的 2 倍', '大齒輪的周長是小齒輪的 4 倍', '兩個齒輪的周長相同', '大齒輪的周長是小齒輪的 3 倍'],
    answer: 0,
    displayAnswer: '小齒輪周長 = 2 × 3.14 × 6 = 37.68 公分\n大齒輪周長 = 2 × 3.14 × 12 = 75.36 公分\n75.36 ÷ 37.68 = 2,所以大齒輪的周長是小齒輪的 2 倍'
  },
  {
    type: 'options',
    question: '製糖機械中有兩個齒輪:小齒輪半徑 8 公分,大齒輪半徑 16 公分。大齒輪的周長和小齒輪相比是?',
    options: ['大齒輪的周長是小齒輪的 2 倍', '大齒輪的周長是小齒輪的 4 倍', '兩個齒輪的周長相同', '大齒輪的周長是小齒輪的 3 倍'],
    answer: 0,
    displayAnswer: '小齒輪周長 = 2 × 3.14 × 8 = 50.24 公分\n大齒輪周長 = 2 × 3.14 × 16 = 100.48 公分\n100.48 ÷ 50.24 = 2,所以大齒輪的周長是小齒輪的 2 倍'
  },
  // 反推半徑
  {
    type: 'options',
    question: '一個圓形零件的周長是 31.4 公分,它的半徑是多少公分?(π ≈ 3.14)',
    options: ['5', '7', '4', '10'],
    answer: 0,
    displayAnswer: '已知 C = 31.4,利用公式 C = 2πr\n31.4 = 2 × 3.14 × r\n31.4 = 6.28 × r\nr = 31.4 ÷ 6.28 = 5 公分'
  },
  {
    type: 'options',
    question: '一個圓形零件的周長是 62.8 公分,它的半徑是多少公分?(π ≈ 3.14)',
    options: ['10', '12', '9', '20'],
    answer: 0,
    displayAnswer: '已知 C = 62.8,利用公式 C = 2πr\n62.8 = 2 × 3.14 × r\nr = 62.8 ÷ 6.28 = 10 公分'
  },
  {
    type: 'options',
    question: '一個圓形零件的周長是 43.96 公分,它的半徑是多少公分?(π ≈ 3.14)',
    options: ['7', '9', '6', '14'],
    answer: 0,
    displayAnswer: '已知 C = 43.96,利用公式 C = 2πr\n43.96 = 2 × 3.14 × r\nr = 43.96 ÷ 6.28 = 7 公分'
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
// 科學:輪軸
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '「輪軸」這種簡單機械,「輪」和「軸」的關係是?',
    options: [
      '輪和軸連在一起,轉動時一起旋轉',
      '輪和軸是分開的,互不影響',
      '只有輪在轉,軸不動',
      '只有軸在轉,輪不動'
    ],
    answer: 0,
    displayAnswer: '輪軸是輪和軸固定在一起的機械,轉動輪時,軸也跟著轉;反之亦然。因為輪的半徑比軸大,所以轉動輪比轉動軸省力。'
  },
  {
    type: 'options',
    question: '用方向盤轉動汽車的轉向軸,利用的是什麼原理?',
    options: ['輪軸原理——輪(方向盤)大,軸小,省力', '槓桿原理', '滑輪原理', '只是習慣,沒有特別原理'],
    answer: 0,
    displayAnswer: '方向盤是輪軸的應用:方向盤是大輪,轉向軸是小軸。因為輪的半徑遠大於軸,所以用較小的力轉動方向盤,就能產生較大的扭力轉動車輪。'
  },
  {
    type: 'options',
    question: '螺絲起子的把手和螺絲桿,利用的是什麼原理?',
    options: ['輪軸原理——把手是輪,螺絲桿是軸', '槓桿原理', '只是設計好看', '彈力原理'],
    answer: 0,
    displayAnswer: '螺絲起子的粗把手就是「輪」,細的螺絲桿就是「軸」。握住大把手轉動,可以在細桿上產生更大的扭力,讓螺絲更容易旋入。'
  },
  {
    type: 'options',
    question: '輪軸和槓桿的共同特點是什麼?',
    options: [
      '都是「省力」的機械,讓人用較小的力做到較大的效果',
      '都是圓形的',
      '都需要電力才能運作',
      '兩者完全不同,沒有共同點'
    ],
    answer: 0,
    displayAnswer: '槓桿和輪軸都是「省力」的簡單機械。槓桿利用「力臂長度差」省力,輪軸利用「輪軸半徑差」省力。它們的物理原理其實是相通的。'
  },
  {
    type: 'options',
    question: '日治時期製糖廠用來壓榨甘蔗的「滾輪機」,主要利用什麼力學原理?',
    options: [
      '輪軸原理——大滾輪轉動時,中心軸產生強大的壓力',
      '槓桿原理',
      '浮力原理',
      '磁力原理'
    ],
    answer: 0,
    displayAnswer: '製糖廠的大型滾輪是輪軸的應用。大滾輪轉動時,在中心軸產生強大的扭力和壓力,足以壓榨堅硬的甘蔗纖維,擠出甘蔗汁。'
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
// 語文詞彙:力學用語
// ==========================================
const vocabQuestions = [
  {
    type: 'options',
    question: '「省力」的意思是?',
    options: [
      '用較少的力達到相同的效果',
      '完全不需要用力',
      '把力氣省起來以後再用',
      '省下力氣不做事'
    ],
    answer: 0,
    displayAnswer: '省力是指利用機械原理,讓同樣的任務只需較小的力就能完成。省力並不表示不用做功,而是把力量用在刀口上。'
  },
  {
    type: 'options',
    question: '「扭力」的「扭」字,帶有什麼樣的動作概念?',
    options: ['旋轉、擰動的力', '往上推的力', '往下壓的力', '往前推的力'],
    answer: 0,
    displayAnswer: '「扭」就是旋轉、擰的動作,扭力是使物體旋轉的力。方向盤、螺絲起子、輪軸都與扭力有關。'
  },
  {
    type: 'options',
    question: '〈琵琶鼠〉描述老鼠「扛礦坑裡要用的木頭或鐵軌」,「扛」字表示什麼動作?',
    options: [
      '用肩膀承受重量、搬運重物',
      '用手拿著',
      '用繩子綁著拖行',
      '用車子運送'
    ],
    answer: 0,
    displayAnswer: '「扛」是用肩膀扛起重物的動作。這個字說明了老鼠從事的是非常粗重的勞動,需要很大的體力。'
  }
]

const generateVocabQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(vocabQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateSocialQuestion, generateMathQuestion, generateScienceQuestion, generateVocabQuestion }

// ===== Day 2 主體 =====
const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '⚙️',
  color: '#1B5E20',
  title: '機械怎麼省力？',

  units: [
    {
      id: 'w5d2-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈琵琶鼠〉第二段',
        sections: [
          {
            title: '故事繼續……',
            blocks: [
              {
                type: 'quote',
                content: '村子裡的父親們大多數是礦工，而這父親的工作到底是什麼我們卻都不懂，他好像什麼都不做又什麼都做，比如扛礦坑裡要用的木頭或鐵軌、整修村子通往外頭的山路、幫礦業事務所的屋頂漆柏油等……\n\n他的本名好像沒人確定也沒人在意，大家都叫他的綽號「老鼠」，至於那個孩子的名字好像理所當然就叫「老鼠子」。',
                author: '吳念真〈琵琶鼠〉'
              },
              {
                type: 'text',
                content: '📍 思考：\n\n老鼠的工作——扛木頭、扛鐵軌、漆屋頂、處理死亡……這些都是需要大量體力的粗重工作。在沒有現代機械的礦工村，他是怎麼完成這些任務的？\n\n今天我們來看看日治時代的「機械省力」智慧。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w5d2-social',
      name: '社會',
      icon: '🏭',
      lesson: {
        title: '日治糖業：機械化的力量',
        sections: [
          {
            title: '甜蜜的工業革命',
            blocks: [
              {
                type: 'text',
                content: '1895年日本取得台灣時，台灣的製糖業還是傳統的「牛拉石輪」方式——用牛拉動大石輪來壓榨甘蔗。一天最多只能壓幾百斤。\n\n日本引進了現代機械後，一座製糖廠一天可以處理幾十萬斤的甘蔗。這就是機械化的力量。'
              }
            ]
          },
          {
            title: '五分仔車：糖業的血管',
            blocks: [
              {
                type: 'text',
                content: '🚂 五分仔車的故事\n\n「五分仔車」是台灣糖業鐵路的小火車，軌距只有一般鐵路的一半（762毫米），所以叫「五分仔」（半分之意）。\n\n它的任務是把各個農場採收的甘蔗，運送到製糖廠去。密密麻麻的五分仔鐵路網，就像糖業的血管，把甘蔗輸送到製糖廠的「心臟」。\n\n五分仔車路網在全盛時期長達3000公里，比現在台灣的公路還長！'
              },
              {
                type: 'text',
                content: '今天在台南的「台灣糖業博物館」，你還可以看到保存完好的五分仔車和製糖廠設備。這些機械是台灣近代工業史的活化石。'
              }
            ]
          },
          {
            title: '糖業與礦業——台灣兩大支柱',
            blocks: [
              {
                type: 'text',
                content: '日治時期，台灣有兩大重要產業：\n\n🍬 糖業（南部）：甘蔗種植 → 製糖廠 → 砂糖出口\n⛏️ 礦業（北部）：煤礦、金礦開採 → 縱貫鐵路運輸 → 出口\n\n〈琵琶鼠〉的故事背景就是北部的礦工村落，老鼠扛的「木頭和鐵軌」正是礦坑裡支撐坑道的材料。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateSocialQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w5d2-math',
      name: '數學',
      icon: '⭕',
      lesson: {
        title: '圓周長應用：齒輪與輪胎',
        sections: [
          {
            title: '圓周長的生活應用',
            blocks: [
              {
                type: 'text',
                content: '學了 C = 2πr，現在來用它解決真實的問題。\n\n機械設計師每天都需要計算圓周長：\n• 輪胎轉幾圈，車子走多遠？\n• 大齒輪和小齒輪的周長比是多少？\n• 已知周長，能反推半徑嗎？'
              }
            ]
          },
          {
            title: '例題一：輪胎與距離',
            blocks: [
              {
                type: 'text',
                content: '✏️ 例題：\n五分仔車的車輪半徑是 40 公分，當車輪轉了 10 圈，火車前進了多少公分？\n\n解題步驟：\n① 一個圓周長 = 2 × 3.14 × 40 = 251.2 公分（每轉一圈前進的距離）\n② 轉了 10 圈 = 251.2 × 10 = 2512 公分 = 25.12 公尺'
              }
            ]
          },
          {
            title: '例題二：大小齒輪',
            blocks: [
              {
                type: 'text',
                content: '✏️ 例題：\n製糖機有一大一小兩個齒輪，小齒輪半徑 8 公分，大齒輪半徑 16 公分。\n大齒輪的周長是小齒輪的幾倍？\n\n解題：\n小齒輪周長 = 2 × 3.14 × 8 = 50.24 公分\n大齒輪周長 = 2 × 3.14 × 16 = 100.48 公分\n100.48 ÷ 50.24 = 2 倍\n\n💡 發現了嗎？半徑是 2 倍，周長也是 2 倍。半徑和周長是成正比的！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w5d2-science',
      name: '科學',
      icon: '🔩',
      lesson: {
        title: '輪軸：方向盤的秘密',
        sections: [
          {
            title: '什麼是輪軸？',
            blocks: [
              {
                type: 'text',
                content: '輪軸是另一種常見的簡單機械。它由兩個同心圓組成：外面的大圓叫「輪」，裡面的小圓叫「軸」，兩者固定在一起，一起旋轉。\n\n輪的半徑 > 軸的半徑\n轉動輪 → 省力（同樣的力，效果更大）\n轉動軸 → 費力（但速度快）'
              }
            ]
          },
          {
            title: '生活中的輪軸',
            blocks: [
              {
                type: 'text',
                content: '🚗 方向盤：大方向盤（輪）帶動小轉向軸（軸），省力轉彎\n\n🔧 螺絲起子：粗把手（輪）帶動細螺絲桿（軸），省力旋入\n\n🚿 水龍頭：大把手（輪）帶動小閥門軸（軸），省力開關\n\n⚓ 船的絞盤：大輪帶動小軸，拉起沉重的船錨\n\n🏭 製糖廠的滾輪：大蒸汽驅動輪帶動壓榨滾輪軸，壓出甘蔗汁'
              }
            ]
          },
          {
            title: '輪軸 vs 槓桿',
            blocks: [
              {
                type: 'text',
                content: '槓桿和輪軸其實是同一種原理的不同形式：\n\n⚖️ 槓桿：利用「力臂」（支點到施力點的距離差）省力\n🔩 輪軸：利用「半徑」（輪半徑 vs 軸半徑的差）省力\n\n輪可以看成是「繞著圓心旋轉的槓桿」。物理學家說，所有簡單機械的原理，最終都可以歸結到槓桿！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateScienceQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w5d2-vocab',
      name: '語文',
      icon: '✍️',
      lesson: {
        title: '詞彙：力學用語',
        sections: [
          {
            title: '本日關鍵詞彙',
            blocks: [
              {
                type: 'text',
                content: '🔧 力學詞彙\n\n• 輪軸（lún zhóu）：由輪和軸組成的省力機械\n• 扭力：使物體旋轉的力\n• 省力：用較小的力達到相同效果\n• 同心圓：有相同圓心、不同半徑的圓'
              },
              {
                type: 'text',
                content: '📚 從文本延伸\n\n「礦坑裡要用的木頭或鐵軌」——為什麼礦坑裡需要木頭？\n\n礦坑挖掘時，坑道兩側和頂部會用木頭支撐，防止塌陷。鐵軌則讓礦車可以在坑道裡滑行，把挖出的礦石運出去。這些都是讓礦工「省力」的設計。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateVocabQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w5d2-review',
      name: '今日回顧',
      icon: '🌙',
      lesson: {
        title: '第2天學了什麼？',
        sections: [
          {
            title: '今日收穫',
            blocks: [
              {
                type: 'text',
                content: '今天學到了：\n\n🏭 日治糖業：台灣南部的甜蜜工業革命，五分仔車把甘蔗送進製糖廠\n\n⭕ 圓周長應用：輪胎轉幾圈走多遠？齒輪大小和周長的關係\n\n🔩 輪軸原理：輪大軸小，轉動輪就省力——方向盤、螺絲起子都是'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n〈琵琶鼠〉裡的小老鼠子，在芒草深處找到了一葉草——他從來沒上過學，卻把九九乘法表背得比誰都熟。電從哪裡來？日月潭水力發電廠，和「滑輪」又是什麼關係？'
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
