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
// 語文詞彙:取自〈琵琶鼠〉文本 Day 2 段落
// ==========================================
const vocabQuestions = [
  {
    type: 'options',
    question: '「他好像什麼都不做又什麼都做」，這句話在文章中的意思是？',
    options: [
      '他的工作沒有固定職業，什麼雜事都接，難以歸類',
      '他一天到晚很忙，做了很多事',
      '他其實什麼事都不做，很懶惰',
      '他很神秘，沒有人知道他在做什麼'
    ],
    answer: 0,
    displayAnswer: '這句話帶著一點矛盾——「什麼都不做」是指沒有正式職業，「什麼都做」是指各種粗活都接。作者用這個對比，寫出老鼠在村子裡難以被定義的邊緣位置。'
  },
  {
    type: 'options',
    question: '「扛礦坑裡要用的木頭或鐵軌」，「扛」這個字說明了什麼？',
    options: [
      '用肩膀承重、親身搬運的粗重勞動',
      '用車子運送',
      '用手提著走',
      '用繩子拖著走'
    ],
    answer: 0,
    displayAnswer: '「扛」是用肩膀頂著重物搬運，強調的是身體直接承受重量。木頭和鐵軌都是沉重的材料，這個字讓讀者感受到老鼠勞動的辛苦。'
  },
  {
    type: 'options',
    question: '文中說老鼠的工作「最令人印象深刻的卻似乎都跟死亡有關」，這個細節有什麼作用？',
    options: [
      '讓讀者感受到老鼠承擔的是別人不願碰的工作，更加凸顯他的邊緣處境',
      '說明老鼠是個危險的人',
      '只是描述他的職業種類',
      '暗示故事後來會有人死亡'
    ],
    answer: 0,
    displayAnswer: '處理死亡（搬屍、埋小孩）是大多數人都迴避的工作，老鼠卻做。這個細節讓讀者看到他在村子裡的位置——被需要，但也被保持距離。'
  },
  {
    type: 'options',
    question: '「只要村子裡有死雞、死鴨時，都會大聲地朝山的那邊大喊」，這個行為反映了村人什麼態度？',
    options: [
      '不嫌棄，甚至帶有一種實際的關照——把沒用的東西給對方',
      '嘲笑和歧視老鼠子',
      '害怕老鼠，想用食物賄賂他',
      '完全漠視父子的存在'
    ],
    answer: 0,
    displayAnswer: '文章說村人這樣做「不但沒有任何貶抑的心思，甚至還有一點回饋的意思」。這是台灣農村社會的一種質樸互助——用實際行動照顧邊緣人，而不是用憐憫的眼光看他。'
  },
  {
    type: 'options',
    question: '「老鼠通草藥」的「通」在這裡的意思是？',
    options: [
      '精通、很懂得',
      '打通、疏通',
      '通知、告訴別人',
      '普通、一般般'
    ],
    answer: 0,
    displayAnswer: '「通」在這裡作動詞，意思是「精通、懂得」。老鼠精通草藥知識，是村子裡唯一的這種知識來源，也是他在村子裡「不能少」的原因之一。'
  },
  {
    type: 'options',
    question: '「這都是祂的！」老鼠說的「祂」是指誰？',
    options: [
      '山神——他認為自然的一切都屬於大自然，不是他的',
      '政府——草藥是國家管理的資源',
      '礦坑的老闆',
      '村長'
    ],
    answer: 0,
    displayAnswer: '老鼠說「給山神啦！這都是祂的！」，「祂」指的是山神。他認為自己只是借用山上的草藥，草藥本來就是大自然（山神）的，所以不應收錢。這顯示他對自然的一種敬畏與謙遜。'
  },
  {
    type: 'options',
    question: '「不過，那些草藥對老鼠來說就像『祕方』一般」，加引號的「祕方」暗示了什麼？',
    options: [
      '老鼠刻意讓別人認不出草藥，保護自己唯一的專業知識',
      '他的草藥真的有神奇魔力',
      '他從祖先那裡傳下來一本秘密配方書',
      '他不告訴別人，是因為草藥很貴重'
    ],
    answer: 0,
    displayAnswer: '老鼠把草藥「剁爛、磨碎讓人無法分辨」，是有意識地保護自己的知識。對一個沒有土地、沒有戶籍的邊緣人來說，這些知識是他生存的依靠，也是他對村子的貢獻所在。'
  },
  {
    type: 'options',
    question: '「粗聲粗氣地說：『給我錢幹嘛？』」這句話中，「粗聲粗氣」能看出老鼠什麼個性？',
    options: [
      '直率、不客套，說話沒有修飾，不是真的在生氣',
      '脾氣暴躁，容易發火',
      '不尊重別人，沒有禮貌',
      '身體很強壯，聲音自然粗大'
    ],
    answer: 0,
    displayAnswer: '「粗聲粗氣」是吳念真刻畫老鼠說話方式的細節，表示他不修邊幅、直來直往，拒收紅包不是因為憤怒，而是他就是這樣不拐彎抹角的人。'
  },
  {
    type: 'options',
    question: '「一葉草」在文章裡有什麼特性？（根據文章內容）',
    options: [
      '長在陰溼的草叢裡，長得很小也很少，要找到足夠的量得靠本事和運氣',
      '是一種常見的路邊野草，隨處可見',
      '只有老鼠才知道它存在，其他人完全不知道',
      '是一種需要在白天陽光下才能找到的草藥'
    ],
    answer: 0,
    displayAnswer: '文章說一葉草「長在陰溼的草叢裡，長得很小也很少」，而且「不僅得憑本事，更得靠運氣」，暗示它珍貴且難找。這也是為什麼老鼠子一眼就找到，讓敘事者印象深刻。'
  },
  {
    type: 'options',
    question: '「弟弟發高燒，媽媽要我到對面山谷找一葉草」，媽媽為什麼派孩子去找，而不是去找老鼠？',
    options: [
      '老鼠說「不會在對面喊我一聲就好」，暗示其實父母有點見外，不好意思打擾',
      '老鼠從來不幫別人',
      '孩子比大人更容易找到草藥',
      '老鼠那時不在家'
    ],
    answer: 0,
    displayAnswer: '文章裡老鼠後來說：「你爸媽也太見外，不會在對面喊我一聲就好，這麼晚了還叫一個小孩來找。」這說明父母是因為不好意思直接開口請老鼠幫忙，反映了村人和他保持的微妙距離。'
  },
  {
    type: 'options',
    question: '「綽號」的「綽」字在這裡是什麼意思？',
    options: [
      '外號、別名，通常帶有某種特徵或故事',
      '正式的名字',
      '小名，是家人給的暱稱',
      '職稱，表示職業'
    ],
    answer: 0,
    displayAnswer: '綽號是正式名字以外，旁人根據某人的特徵、事蹟或習慣給的外號。「老鼠」這個綽號的由來文章沒有直接說明，讓讀者自己去聯想——是因為他什麼都吃？還是因為他住在陰暗的山坳？'
  },
  {
    type: 'options',
    question: '「理所當然就叫『老鼠子』」，「理所當然」在這裡帶有什麼語氣？',
    options: [
      '帶有一點無奈和諷刺——孩子連自己的名字都繼承了父親被邊緣化的命運',
      '表示這個名字非常適合這個孩子',
      '說明村人非常喜歡這對父子',
      '只是說明取名字的邏輯很自然'
    ],
    answer: 0,
    displayAnswer: '「理所當然」在這裡是敘事者的輕微反諷。父親叫老鼠，兒子就叫老鼠子——沒有人問過這個孩子真正的名字。這個「理所當然」，其實是對這對父子被漠視的一種傷感記錄。'
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
        title: '詞彙：老鼠是怎麼樣的人？',
        sections: [
          {
            title: '吳念真的「側寫」手法',
            blocks: [
              {
                type: 'text',
                content: '今天的段落主要在寫老鼠這個人，但吳念真從來不說「他是個好人」或「他很可憐」，而是透過他做的事、他說的話、別人對他的反應，讓讀者自己去感受。\n\n這種寫法叫做「側寫」——不正面描述，而是從旁邊的角度刻畫人物。'
              },
              {
                type: 'text',
                content: '📍 幾個值得細讀的詞\n\n• 扛：用肩膀承重，是最直接、最粗重的勞動方式\n• 理所當然：帶著一絲諷刺，孩子連名字都繼承了父親的邊緣身分\n• 綽號：正式名字以外的外號，通常帶著故事；老鼠的真名沒人知道，更沒人在乎\n• 見外：客氣到生疏的程度，像對外人而不是鄰居'
              },
              {
                type: 'text',
                content: '📍 老鼠的兩句話\n\n①「給山神啦！這都是祂的！」\n②「你爸媽也太見外，不會在對面喊我一聲就好。」\n\n同樣是粗聲粗氣，第一句拒絕金錢，第二句卻透出一點溫情。吳念真用這兩句話，把老鼠的個性寫得比任何描述都清楚。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
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
