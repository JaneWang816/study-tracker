// src/data/weeks/week05/day1.js
// W5 Day1：日治時代蓋了什麼？
// 貫穿文本：吳念真〈琵琶鼠〉第一段

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:日治基礎建設
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '日本統治台灣的時期大約是哪段時間?',
    options: ['1895年～1945年', '1644年～1895年', '1945年～1987年', '1624年～1662年'],
    answer: 0,
    displayAnswer: '日本在1895年甲午戰爭後依《馬關條約》取得台灣,統治至1945年二戰結束,共約50年。'
  },
  {
    type: 'options',
    question: '日治時期完成的「縱貫鐵路」連接台灣哪兩個城市?',
    options: ['基隆到高雄', '台北到台中', '台南到花蓮', '基隆到台東'],
    answer: 0,
    displayAnswer: '縱貫鐵路在1908年全線通車,從基隆一路連接到高雄(打狗),貫穿台灣西部平原,是當時最重要的交通建設。'
  },
  {
    type: 'options',
    question: '日治時期為台灣人設立的學校叫做什麼?',
    options: ['公學校', '書院', '國民學校', '義塾'],
    answer: 0,
    displayAnswer: '公學校是日治時期專為台灣本島人設立的初等學校,日本人的學校則稱為「小學校」,兩者分開。'
  },
  {
    type: 'options',
    question: '日治時期台灣建設自來水系統,主要是為了解決什麼問題?',
    options: ['防止傳染病蔓延,改善公共衛生', '讓工廠有水用', '提供灌溉農田的用水', '讓日本軍隊有飲用水'],
    answer: 0,
    displayAnswer: '日治初期台灣霍亂等傳染病嚴重,總督府積極建設自來水系統(如台北水道),大幅改善了公共衛生環境。'
  },
  {
    type: 'options',
    question: '下列哪一項不是日治時期在台灣建設的重要設施?',
    options: ['101大樓', '縱貫鐵路', '自來水道', '嘉南大圳'],
    answer: 0,
    displayAnswer: '101大樓建於2004年,是戰後台灣自行建設的現代建築。縱貫鐵路、自來水道、嘉南大圳都是日治時期的重要建設。'
  },
  {
    type: 'options',
    question: '日治時期修築的道路和鐵路,主要目的是什麼?',
    options: [
      '便於資源運輸與軍事控制,同時帶動地方發展',
      '只是為了讓台灣人出行方便',
      '純粹是日本人送給台灣的禮物',
      '只是為了觀光用途'
    ],
    answer: 0,
    displayAnswer: '日治時期的基礎建設有複雜的動機:一方面便於將台灣的農產品和資源運往日本,另一方面也有軍事管控的目的,但客觀上也帶動了台灣各地的發展。'
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
// 數學:圓周長 C=2πr
// ==========================================
const mathQuestions = [
  // 基本公式
  {
    type: 'options',
    question: '圓周長的公式是?',
    options: ['C = 2πr', 'C = πr²', 'C = 2r', 'C = πr'],
    answer: 0,
    displayAnswer: '圓周長公式是 C = 2πr,其中 r 是半徑,π ≈ 3.14。也可以寫成 C = πd,d 是直徑(d = 2r)。'
  },
  {
    type: 'options',
    question: 'π(圓周率)的近似值是多少?',
    options: ['3.14', '2.14', '4.14', '1.14'],
    answer: 0,
    displayAnswer: 'π(圓周率)是圓周長除以直徑的比值,是一個無限不循環小數,通常取近似值 3.14 來計算。'
  },
  {
    type: 'options',
    question: '如果一個圓的直徑是 d,那圓周長是多少?',
    options: ['πd', '2πd', 'πd²', '2d'],
    answer: 0,
    displayAnswer: '直徑 d = 2r,所以圓周長 C = 2πr = πd。用直徑計算比較簡便。'
  },
  // 已知半徑求周長
  {
    type: 'options',
    question: '一個圓形的半徑是 3 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['18.84', '9.42', '21.84', '28.26'],
    answer: 0,
    displayAnswer: '圓周長 C = 2πr = 2 × 3.14 × 3 = 18.84 公分'
  },
  {
    type: 'options',
    question: '一個圓形的半徑是 5 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['31.4', '15.7', '36.4', '78.5'],
    answer: 0,
    displayAnswer: '圓周長 C = 2πr = 2 × 3.14 × 5 = 31.4 公分'
  },
  {
    type: 'options',
    question: '一個圓形的半徑是 7 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['43.96', '21.98', '51.96', '153.86'],
    answer: 0,
    displayAnswer: '圓周長 C = 2πr = 2 × 3.14 × 7 = 43.96 公分'
  },
  {
    type: 'options',
    question: '一個圓形的半徑是 10 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['62.8', '31.4', '72.8', '314'],
    answer: 0,
    displayAnswer: '圓周長 C = 2πr = 2 × 3.14 × 10 = 62.8 公分'
  },
  // 已知直徑求周長
  {
    type: 'options',
    question: '一個圓形的直徑是 6 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['18.84', '37.68', '9.42', '24.84'],
    answer: 0,
    displayAnswer: '圓周長 C = πd = 3.14 × 6 = 18.84 公分'
  },
  {
    type: 'options',
    question: '一個圓形的直徑是 10 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['31.4', '62.8', '15.7', '41.4'],
    answer: 0,
    displayAnswer: '圓周長 C = πd = 3.14 × 10 = 31.4 公分'
  },
  {
    type: 'options',
    question: '一個圓形的直徑是 14 公分,它的圓周長是多少公分?(π ≈ 3.14)',
    options: ['43.96', '87.92', '21.98', '57.96'],
    answer: 0,
    displayAnswer: '圓周長 C = πd = 3.14 × 14 = 43.96 公分'
  },
  // 生活情境
  {
    type: 'options',
    question: '一個圓形水池的半徑是 50 公分。如果要在水池邊緣圍一圈欄杆,需要多長的欄杆?(π ≈ 3.14)',
    options: ['314 公分', '157 公分', '414 公分', '7850 公分'],
    answer: 0,
    displayAnswer: '圓周長 C = 2πr = 2 × 3.14 × 50 = 314 公分'
  },
  {
    type: 'options',
    question: '一個圓形時鐘的半徑是 21 公分。這個時鐘外框的一圈長度是多少公分?(π ≈ 3.14)',
    options: ['131.88 公分', '65.94 公分', '152.88 公分', '1384.74 公分'],
    answer: 0,
    displayAnswer: '圓周長 C = 2πr = 2 × 3.14 × 21 = 131.88 公分'
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
// 科學:槓桿原理
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '槓桿的三個重要部分是什麼?',
    options: [
      '支點、施力點、抗力點',
      '起點、終點、中間點',
      '重心、浮心、壓心',
      '頭、身體、尾巴'
    ],
    answer: 0,
    displayAnswer: '槓桿由三個部分組成:支點(pivot,槓桿的支撐點)、施力點(effort,施加力量的地方)、抗力點(load,承受重量的地方)。'
  },
  {
    type: 'options',
    question: '蹺蹺板是哪一種槓桿的好例子?',
    options: ['支點在中間的槓桿', '支點在一端的槓桿', '沒有支點的槓桿', '有兩個支點的槓桿'],
    answer: 0,
    displayAnswer: '蹺蹺板的支點在正中間,兩側的人分別是施力點和抗力點,是「支點在中間」的等臂或不等臂槓桿。'
  },
  {
    type: 'options',
    question: '用一根長棍子撬起一塊大石頭時,支點要靠近石頭,這樣做的目的是?',
    options: ['為了省力(用較小的力搬動較重的物體)', '為了省距離', '為了好看', '支點位置不影響施力大小'],
    answer: 0,
    displayAnswer: '槓桿原理:支點越靠近抗力點(石頭),施力臂越長,就越省力。這也是阿基米德說「給我一個支點,我可以舉起地球」的原理。'
  },
  {
    type: 'options',
    question: '下列哪個工具不是利用槓桿原理?',
    options: ['水杯', '釣魚竿', '剪刀', '老虎鉗'],
    answer: 0,
    displayAnswer: '釣魚竿、剪刀、老虎鉗都是槓桿的應用。水杯只是容器,不涉及槓桿原理。'
  },
  {
    type: 'options',
    question: '鑷子夾東西時,手指施力的地方在哪裡?',
    options: ['鑷子尾端(施力點)', '鑷子中間(支點)', '鑷子前端(抗力點)', '鑷子三個地方同時'],
    answer: 0,
    displayAnswer: '鑷子是施力點在支點和抗力點之間的槓桿:支點在尾端(彈簧處),施力點是手指捏的地方,抗力點是前端夾東西的地方。這種槓桿費力但精確。'
  },
  {
    type: 'options',
    question: '兩個小朋友坐蹺蹺板,體重較重的小朋友應該坐哪裡才能平衡?',
    options: ['靠近支點的一側', '遠離支點的一側', '不管坐哪都一樣', '站在蹺蹺板上'],
    answer: 0,
    displayAnswer: '較重的小朋友靠近支點,較輕的小朋友遠離支點,讓兩側的「力 × 距離」相等,就能平衡。這是槓桿平衡的基本概念。'
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
// 語文詞彙:建設與機械用語
// ==========================================
const vocabQuestions = [
  {
    type: 'options',
    question: '「縱貫」鐵路的「縱」字,表示方向是?',
    options: ['南北向(直的)', '東西向(橫的)', '斜向', '環形'],
    answer: 0,
    displayAnswer: '「縱」表示南北方向(直的),「橫」表示東西方向。縱貫鐵路從北到南貫穿台灣西部,所以叫「縱貫」。'
  },
  {
    type: 'options',
    question: '「基礎建設」的「基礎」是什麼意思?',
    options: ['最基本的、打底的建設(如道路、水電、通訊)', '很基礎簡單的建設', '只有地基的建設', '廉價的建設'],
    answer: 0,
    displayAnswer: '基礎建設(infrastructure)是指一個社會最基本的、支撐其他活動的建設,如道路、鐵路、水道、電力等,就像房子的地基一樣重要。'
  },
  {
    type: 'options',
    question: '「槓桿」這個詞在日常生活中除了物理意義,還常被用來比喻什麼?',
    options: [
      '用小小的力量或資源撬動更大的效果',
      '一種很重的東西',
      '一種食物',
      '沒有其他意思,只用在物理'
    ],
    answer: 0,
    displayAnswer: '「槓桿效應」在日常語言中常用來比喻:用少量資源撬動大效果。例如「利用人際關係作為槓桿,打開商業機會」。'
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

// ===== Day 1 主體 =====
const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🚂',
  color: '#1565C0',
  title: '日治時代蓋了什麼？',

  units: [
    // ── 開場：貫穿文本第一段 ──
    {
      id: 'w5d1-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈琵琶鼠〉第一段',
        sections: [
          {
            title: '吳念真〈琵琶鼠〉',
            blocks: [
              {
                type: 'text',
                content: '本週我們閱讀吳念真的散文〈琵琶鼠〉。吳念真是台灣著名的作家、導演，出生於礦工家庭，他的文字像說話一樣，親切、真實，充滿生命的溫度。'
              },
              {
                type: 'quote',
                content: '不知道有意還是湊巧，那對父子總讓人覺得是寧願遠離人群，而活在他們自己的世界裡。\n\n我們的村子坐落在山谷裡，絕大多數的房子都蓋在向陽的山坡這邊，而他們卻挑了對面那個要到中午過後才曬得到太陽的山坳裡。\n\n孩子的年紀好像跟我差不多，但我已經三年級了，他卻還沒上學，老是看到他帶著一群五顏六色的狗在對面的山上遊蕩著。',
                author: '吳念真〈琵琶鼠〉'
              },
              {
                type: 'text',
                content: '📍 閱讀前先想想：\n\n故事發生在一個礦工的村子。日治時代，台灣到處都有礦坑——開採煤礦、金礦。礦工的生活是什麼樣子的？今天我們先認識那個時代的台灣。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ── 社會：日治基礎建設 ──
    {
      id: 'w5d1-social',
      name: '社會',
      icon: '🏗️',
      lesson: {
        title: '日治時代的台灣建設',
        sections: [
          {
            title: '日本人來了之後，台灣發生了什麼變化？',
            blocks: [
              {
                type: 'text',
                content: '1895年，日本根據《馬關條約》取得台灣，開始了長達50年的統治。日本殖民政府在台灣進行了大規模的「現代化」建設，這些建設深深地改變了台灣的面貌。'
              }
            ]
          },
          {
            title: '三大重要建設',
            blocks: [
              {
                type: 'text',
                content: '🚂 縱貫鐵路（1908年全線通車）\n從基隆到高雄，貫穿台灣西部平原。過去從台北坐牛車到台南要幾天，有了鐵路只要幾個小時。鐵路不只是交通工具，更是運輸農產品和礦產的大動脈。'
              },
              {
                type: 'text',
                content: '💧 自來水道（清潔飲水系統）\n日治初期，霍亂、鼠疫等傳染病奪走了大量台灣人的生命。台灣總督府從1896年起陸續在各地建設自來水系統，大幅改善了公共衛生。台北的水源地至今還保存完好。'
              },
              {
                type: 'text',
                content: '🏫 公學校（台灣人的學校）\n日治時期，日本人的孩子讀「小學校」，台灣人的孩子讀「公學校」，兩者是分開的。公學校教國語（日文）、算術、修身（道德）等課程，也是後來許多台灣文人作家受教育的地方。'
              }
            ]
          },
          {
            title: '為什麼要建設台灣？',
            blocks: [
              {
                type: 'text',
                content: '日本建設台灣的動機很複雜。一方面，這些建設讓台灣的農產品（米、糖）和天然資源（煤礦、金礦、樟腦）更容易輸往日本；另一方面，也有控制台灣、防止反抗的考量。但不管動機如何，這些建設客觀上改變了台灣的樣貌。\n\n〈琵琶鼠〉故事裡的礦工村，就是在這樣的時代背景下存在的。'
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

    // ── 數學：圓周長 ──
    {
      id: 'w5d1-math',
      name: '數學',
      icon: '⭕',
      lesson: {
        title: '圓周長：C = 2πr',
        sections: [
          {
            title: '為什麼要學圓周長？',
            blocks: [
              {
                type: 'text',
                content: '日治時代的機器到處都有圓形零件：火車的輪子、製糖廠的齒輪、發電機的轉子……要設計和維修這些機器，就需要計算圓的周長。今天我們學這個非常有用的公式。'
              }
            ]
          },
          {
            title: 'π（圓周率）是什麼？',
            blocks: [
              {
                type: 'text',
                content: '古人很早就發現了一個神奇的規律：\n\n不管一個圓有多大或多小，「圓周長 ÷ 直徑」永遠是同一個數。\n\n這個神奇的數就叫做 π（讀作「派」，pi），它是一個無限不循環的小數：\nπ = 3.14159265358979……\n\n計算時我們通常取 π ≈ 3.14。'
              },
              {
                type: 'text',
                content: '希臘數學家阿基米德（西元前287年）用「割圓法」算出 π 介於 3.1408 和 3.1428 之間，這在沒有計算機的時代是了不起的成就。中國南北朝的祖沖之（西元429年）更算到了小數點後七位：3.1415926。'
              }
            ]
          },
          {
            title: '圓周長公式',
            blocks: [
              {
                type: 'text',
                content: '知道了 π，公式就很簡單：\n\n📐 圓周長 C = 2 × π × r\n\n其中：\n• C = 圓周長（Circumference）\n• r = 半徑（radius）\n• π ≈ 3.14\n\n也可以用直徑計算：因為 d = 2r，所以 C = π × d'
              },
              {
                type: 'text',
                content: '✏️ 例題：\n一個圓形的半徑是 5 公分，圓周長是多少？\n\nC = 2 × 3.14 × 5 = 31.4 公分\n\n再來一題：直徑是 10 公分的圓，周長是？\nC = 3.14 × 10 = 31.4 公分（和上面一樣！因為直徑 = 2 × 半徑）'
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

    // ── 科學：槓桿原理 ──
    {
      id: 'w5d1-science',
      name: '科學',
      icon: '⚖️',
      lesson: {
        title: '槓桿原理：從蹺蹺板開始',
        sections: [
          {
            title: '你已經懂槓桿了！',
            blocks: [
              {
                type: 'text',
                content: '你有沒有玩過蹺蹺板？你其實已經用過槓桿了。\n\n槓桿是最古老的簡單機械之一，幾千年前人類就開始使用它。日治時代建設台灣的工人，就靠著各種槓桿工具來搬移重物、建造橋梁和鐵路。'
              }
            ]
          },
          {
            title: '槓桿的三個部分',
            blocks: [
              {
                type: 'text',
                content: '任何一個槓桿都有三個重要部分：\n\n⚫ 支點（pivot）：槓桿旋轉或支撐的固定點\n✋ 施力點（effort）：你施加力量的地方\n📦 抗力點（load）：承受重量或阻力的地方\n\n蹺蹺板的支點在中間，兩個小朋友分別是施力點和抗力點。'
              },
              {
                type: 'text',
                content: '🏗️ 建築工地的例子：\n\n工人用一根長鐵棒撬起大石頭：\n• 支點：鐵棒下面的小石頭（支撐點）\n• 抗力點：鐵棒頂著大石頭的地方\n• 施力點：工人用力往下壓的地方\n\n支點越靠近大石頭，工人施力的那一端就越長，就越省力。'
              }
            ]
          },
          {
            title: '省力、費力、等力——三種槓桿',
            blocks: [
              {
                type: 'text',
                content: '根據支點的位置，槓桿有三種類型：\n\n1️⃣ 省力槓桿：支點靠近抗力點\n   例：撬石頭的鐵棒、剪刀、老虎鉗\n   效果：省力，但手要移動較長距離\n\n2️⃣ 費力槓桿：支點靠近施力點\n   例：鑷子、釣魚竿\n   效果：費力，但動作精確\n\n3️⃣ 等力槓桿：支點在中間\n   例：蹺蹺板、天平\n   效果：力量相等，用來比較重量'
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

    // ── 語文詞彙 ──
    {
      id: 'w5d1-vocab',
      name: '語文',
      icon: '✍️',
      lesson: {
        title: '詞彙：建設與機械用語',
        sections: [
          {
            title: '本週關鍵詞彙',
            blocks: [
              {
                type: 'text',
                content: '📚 建設類詞彙\n\n• 縱貫：南北方向貫穿\n• 水道：自來水系統、水的通路\n• 基礎建設：支撐社會運作的基本設施（道路、水電等）\n• 公學校：日治時期台灣人就讀的學校'
              },
              {
                type: 'text',
                content: '🔧 機械類詞彙\n\n• 槓桿（gǎng gǎn）：一種簡單機械，利用支點放大力量\n• 支點：槓桿的固定支撐點\n• 施力：施加力量\n• 省力：用較少的力達到同樣的效果'
              },
              {
                type: 'text',
                content: '📖 從文本學詞彙\n\n〈琵琶鼠〉的第一段有很多值得注意的詞：\n• 山坳（ào）：山間凹下的地方\n• 遊蕩：漫無目的地走來走去\n• 湊巧：恰好，偶然\n\n吳念真用「山坳」而不說「山谷」，你覺得這兩個詞有什麼差別？'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateVocabQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ── 今日回顧 ──
    {
      id: 'w5d1-review',
      name: '今日回顧',
      icon: '🌙',
      lesson: {
        title: '第1天學了什麼？',
        sections: [
          {
            title: '今日收穫',
            blocks: [
              {
                type: 'text',
                content: '今天我們認識了：\n\n🚂 日治時代的三大建設：縱貫鐵路、自來水道、公學校——這些建設改變了台灣的面貌\n\n⭕ 圓周長公式：C = 2πr，π ≈ 3.14\n\n⚖️ 槓桿原理：支點、施力點、抗力點，從蹺蹺板到撬石頭的鐵棒'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n〈琵琶鼠〉故事中的「老鼠」父子，老鼠做著各種勞動工作。他是怎麼省力的？我們繼續認識日治時代的糖業機械，以及「輪軸」這種簡單機械。'
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
