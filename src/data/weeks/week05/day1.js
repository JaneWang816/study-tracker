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
// 語文詞彙:取自〈琵琶鼠〉文本
// ==========================================
const vocabQuestions = [
  {
    type: 'options',
    question: '〈琵琶鼠〉中「那對父子總讓人覺得是寧願遠離人群」，「寧願」是什麼意思？',
    options: ['比較希望、更願意', '不得不、被迫', '完全不想', '沒有意見'],
    answer: 0,
    displayAnswer: '「寧願」表示在比較之下更傾向於某種選擇，帶有主動的意味。這裡說父子「寧願」遠離人群，暗示這是他們自己的選擇，不是被排擠。'
  },
  {
    type: 'options',
    question: '文中說他們住在「山坳」裡，「山坳」是指什麼地方？',
    options: ['山間凹下、兩山之間的低處', '山頂平坦的地方', '山腰凸出的岩石', '河流沖積的平地'],
    answer: 0,
    displayAnswer: '「山坳（ào）」是山與山之間凹下去的地方，因為凹下去，日照時間較短，所以文章說「要到中午過後才曬得到太陽」。'
  },
  {
    type: 'options',
    question: '文中說孩子「老是看到他帶著一群五顏六色的狗在對面的山上遊蕩」，「遊蕩」是什麼意思？',
    options: ['漫無目的地到處走', '快速奔跑', '認真工作', '靜靜坐著'],
    answer: 0,
    displayAnswer: '「遊蕩」指沒有特定目標、隨意閒逛。這個詞帶有一點自由散漫的感覺，和老鼠子沒有上學、沒有固定作息的生活狀態相呼應。'
  },
  {
    type: 'options',
    question: '文中描述老鼠子「長得跟他父親很不像，父親黑，他白，父親的臉孔看起來嚴厲冷酷，他卻細緻柔和」，「細緻」這個詞在這裡形容的是？',
    options: ['五官精緻、外表溫和', '個性小心謹慎', '動作輕巧細膩', '說話輕聲細語'],
    answer: 0,
    displayAnswer: '「細緻」在這裡是形容外貌——五官精緻、長相溫和，和父親「嚴厲冷酷」的樣子形成對比。'
  },
  {
    type: 'options',
    question: '「比較被『肯定』的說法」，這裡的「肯定」加了引號，表示什麼？',
    options: ['是帶有懷疑的「肯定」，並不是真的確定', '完全可以相信的說法', '官方正式的說法', '老鼠本人說的話'],
    answer: 0,
    displayAnswer: '加引號的「肯定」是反諷用法，表示這只是村子裡流傳最廣的版本，作者並不認為它就是事實，暗示那不過是未經證實的閒話。'
  },
  {
    type: 'options',
    question: '文中說老鼠的本名「好像沒人確定也沒人在意」，這句話透露出什麼？',
    options: ['村人不在乎他是誰，只記得他有用的地方', '他的名字很難唸', '他不讓別人知道名字', '他剛搬來沒多久'],
    answer: 0,
    displayAnswer: '沒人在意真名，只知道綽號「老鼠」，說明村人對這父子的態度：不真正了解他們、不把他們當完整的個體，只關心他們能提供什麼。'
  },
  {
    type: 'options',
    question: '「羅漢腳」在台語裡指的是什麼樣的人？',
    options: ['孤身一人、四處流浪打工的男子', '體型高大的男子', '會武功的人', '非常懶惰的人'],
    answer: 0,
    displayAnswer: '「羅漢腳」是台灣早期的社會用語，指沒有家庭、孤身一人到處流浪打工謀生的男性。文中老鼠最初就是這樣的身分，後來收養了老鼠子。'
  },
  {
    type: 'options',
    question: '文中說老鼠「通草藥」，「通」在這裡是什麼意思？',
    options: ['精通、很懂得', '通往、走向', '通知、告訴別人', '普通、一般'],
    answer: 0,
    displayAnswer: '「通」在這裡作動詞，意思是「精通、懂得」。「通草藥」就是很懂草藥、熟悉藥草知識。這個用法在台灣閩南語影響下的中文裡很常見。'
  },
  {
    type: 'options',
    question: '老鼠說「給山神啦！這都是祂的！」這句話反映了老鼠什麼樣的態度？',
    options: ['不貪財，認為自然的東西本來就屬於大自然', '他信奉某個特定宗教', '他覺得錢很骯髒', '他想嚇走來找他的人'],
    answer: 0,
    displayAnswer: '這句話展現了老鼠質樸的生命觀——草藥是山上的東西，不是他的，他只是借用，所以不應該收錢。這和他不融入主流社會的生活方式一脈相承。'
  },
  {
    type: 'options',
    question: '「粗聲粗氣」這個詞，形容老鼠說話的方式是？',
    options: ['聲音粗礦、態度直接，不客套', '生氣、憤怒地大聲喊叫', '聲音低沉、神秘', '說話很慢、一個字一個字說'],
    answer: 0,
    displayAnswer: '「粗聲粗氣」形容說話聲音粗礦、不修飾、不客套，但不一定是生氣。老鼠拒收紅包時這樣說，帶出他不拘小節、直來直往的個性。'
  },
  {
    type: 'options',
    question: '文中說老鼠把草藥「剁爛、磨碎讓人無法分辨」，這個細節說明了什麼？',
    options: ['老鼠保護自己的知識，不讓別人輕易學走', '草藥要剁碎才有效果', '老鼠不信任別人', '這是處理草藥的標準步驟'],
    answer: 0,
    displayAnswer: '讓別人「無法分辨」是哪種草，代表老鼠在保守自己的草藥知識。這是邊緣人自保的一種方式——保有別人需要、無法替代的技能。'
  },
  {
    type: 'options',
    question: '「不知道有意還是湊巧」，「湊巧」的意思最接近哪個詞？',
    options: ['恰好、碰巧', '刻意安排', '很奇怪', '剛好相反'],
    answer: 0,
    displayAnswer: '「湊巧」是指事情恰好如此，並非刻意。作者用「不知道有意還是湊巧」，暗示父子的選擇看起來像是命運，也可能是自己決定的，留下了一點模糊的空間。'
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
        title: '詞彙：走進〈琵琶鼠〉的語言',
        sections: [
          {
            title: '吳念真怎麼寫人？',
            blocks: [
              {
                type: 'text',
                content: '吳念真的語言有一個特點：他很少直接說「這個人很可憐」或「我很同情他」，而是透過一個一個細節，讓你自己感受到。\n\n今天我們來注意文章裡一些值得細讀的詞，看看這些詞是怎麼悄悄在你心裡留下印象的。'
              },
              {
                type: 'text',
                content: '📍 位置與空間\n\n• 山坳（ào）：山與山之間凹下去的地方，日照短、潮濕，帶著一點被遮蔽的感覺\n• 向陽：面對太陽的一側，暗示大多數人選擇光明、溫暖的地方\n\n父子偏偏住進「山坳」，這個選擇本身就已經說了很多。'
              },
              {
                type: 'text',
                content: '📍 人物描寫\n\n• 細緻柔和 vs 嚴厲冷酷：父子兩人的外貌對比，用四個字就完成了\n• 遊蕩：漫無目的地走，帶著自由，也帶著沒有歸屬的意味\n• 羅漢腳：台灣早期指孤身漂泊、無家可歸的流浪男子\n\n• 粗聲粗氣：說話直接、不修飾，是老鼠的說話方式，也是他個性的縮影'
              },
              {
                type: 'text',
                content: '📍 值得停下來想的詞\n\n「不知道有意還是湊巧」——作者故意留了這個問題沒有回答。你覺得父子住進山坳，是「有意」還是「湊巧」？\n\n這種不說清楚的寫法，讓讀者有更多想像的空間，這是散文寫作常用的技巧。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
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
