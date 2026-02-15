// src/data/weeks/week03/day4.js
// W3 Day4：動筆日

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// W3D4: 數學綜合(比值+化簡+分數除法)
// ==========================================
const mathQuestions = [
  // 比值情境
  {
    type: 'options',
    question: '嘉南大圳南幹線每日輸水 240 公噸,北幹線每日輸水 160 公噸。兩條幹線水量的最簡比是多少?',
    options: ['3:2', '2:3', '4:3', '6:4'],
    answer: 0,
    displayAnswer: '240:160,最大公因數是80,240÷80=3,160÷80=2,最簡比是 3:2。'
  },
  {
    type: 'options',
    question: '一塊農田長 450 公尺,寬 300 公尺,長與寬的最簡比是多少?',
    options: ['3:2', '2:3', '9:6', '45:30'],
    answer: 0,
    displayAnswer: '450:300,最大公因數是150,450÷150=3,300÷150=2,最簡比是 3:2。'
  },
  {
    type: 'options',
    question: '台灣早稻產量 1500 公噸,晚稻產量 900 公噸,早稻對晚稻的最簡比是多少?',
    options: ['5:3', '3:5', '15:9', '5:2'],
    answer: 0,
    displayAnswer: '1500:900,最大公因數是300,1500÷300=5,900÷300=3,最簡比是 5:3。'
  },
  // 分數除法情境
  {
    type: 'options',
    question: '圳路A每天送水 3/4 公噸,圳路B每天送水 3/8 公噸,A的水量是B的幾倍?',
    options: ['2倍', '1.5倍', '0.5倍', '3倍'],
    answer: 0,
    displayAnswer: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2,A的水量是B的2倍。'
  },
  {
    type: 'options',
    question: '農夫有 2/3 公頃的農地,想分成每塊 1/6 公頃的小田,可以分成幾塊?',
    options: ['4塊', '3塊', '2塊', '6塊'],
    answer: 0,
    displayAnswer: '2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4,可以分成4塊小田。'
  },
  // 比例分配
  {
    type: 'options',
    question: '嘉南大圳今天供水 5/6 萬公噸,按照 1:2 分給南區和北區,北區得到多少萬公噸?',
    options: ['5/9', '5/18', '10/18', '5/6'],
    answer: 0,
    displayAnswer: '總份數1+2=3份,北區2份:5/6 × 2/3 = 10/18 = 5/9 萬公噸。'
  },
  {
    type: 'options',
    question: '一塊農田面積是 7/8 公頃,按照 3:4 分給兩兄弟,哥哥分到多少公頃?',
    options: ['3/8', '4/8', '7/24', '3/7'],
    answer: 0,
    displayAnswer: '總份數3+4=7份,哥哥3份:7/8 × 3/7 = 21/56 = 3/8 公頃。'
  },
  // 綜合多步驟
  {
    type: 'options',
    question: '濁水溪流量是大肚溪的 3/2 倍,大肚溪每秒流量是 40 公升,若要蓄滿一個 360 公升的水桶,濁水溪需要幾秒?',
    options: ['6秒', '9秒', '4秒', '12秒'],
    answer: 0,
    displayAnswer: '濁水溪流量 = 40 × 3/2 = 60 公升/秒,360 ÷ 60 = 6秒。'
  },
  {
    type: 'options',
    question: '農田A和B的面積比是 2:3,兩塊農田合計 5/2 公頃,農田A的面積是多少公頃?',
    options: ['1公頃', '3/2公頃', '2/3公頃', '5/4公頃'],
    answer: 0,
    displayAnswer: '總份數2+3=5份,每份 = 5/2 ÷ 5 = 1/2 公頃,A是2份 = 1/2 × 2 = 1公頃。'
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
// W3D4: 科學延伸(水資源與生態)
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '河流生態系中,上游、中游和下游的生物分布有什麼特點?',
    options: [
      '上游溶氧多、水清,中游多樣,下游廣闊,各有不同生物',
      '所有河段的生物都一樣',
      '只有下游才有生物,上游太急了',
      '上游最多魚,下游沒有魚'
    ],
    answer: 0,
    displayAnswer: '上游水急清涼、溶氧高,適合耐急流的生物;中游水流平穩多樣;下游寬廣,河口有豐富的養分,孕育河口生態系。'
  },
  {
    type: 'options',
    question: '濁水溪的泥沙雖然讓水看起來混濁,但對農業有什麼好處?',
    options: [
      '泥沙中含有豐富礦物質,沉積後使農地更肥沃',
      '讓河水不容易結冰',
      '讓魚類更容易捕捉',
      '讓圳路不容易阻塞'
    ],
    answer: 0,
    displayAnswer: '濁水溪帶下來的泥沙富含礦物質,歷代沉積在嘉南平原,形成了肥沃的農業土壤,是「天然施肥」。'
  },
  {
    type: 'options',
    question: '台灣的河川生態面臨的主要挑戰是什麼?',
    options: [
      '人類取水、水泥化河床、污染,讓河流生態受損',
      '河流太多,水資源過剩',
      '台灣沒有河流生態問題',
      '因為台灣太小,所以沒有河流'
    ],
    answer: 0,
    displayAnswer: '台灣河川面臨人類取水(水資源競爭)、河床水泥化(破壞生物棲地)、農業和工業污染等問題,生態保育越來越重要。'
  },
  {
    type: 'options',
    question: '「河口濕地」對生態的重要性是什麼?',
    options: [
      '是高生產力的生態系,提供鳥類、魚類、蝦蟹等生物棲地',
      '河口濕地沒有生態功能,只是淤泥',
      '河口濕地會阻礙船隻航行,應該填平',
      '只有候鳥需要河口濕地'
    ],
    answer: 0,
    displayAnswer: '河口濕地是世界上生物多樣性最高的生態系之一,豐富的有機質養育了大量生物,也是候鳥遷徙的重要補給站。'
  },
  {
    type: 'options',
    question: '人類灌溉農業「取水」和河流生態「留水」之間,最好的解決方式是什麼?',
    options: [
      '制定「最低生態流量」,保留河流最基本的水量,剩餘才能取用',
      '全部留給農業,不需要考慮生態',
      '全部留給生態,農業不需要灌溉水',
      '把河流全部改成水泥渠道,效率最高'
    ],
    answer: 0,
    displayAnswer: '現代水資源管理重視「生態流量」,確保河流保有最低水量以維持生態,剩餘水源才供人類使用,兼顧農業與生態。'
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

export { 
  generateMathQuestion,  
  generateScienceQuestion
}

// ===== 組合成 Day 4 =====
const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✏️',
  color: '#10B981',
  title: '動筆日',
  units: [
    // 數學綜合
    {
      id: 'w3d4-math',
      name: '數學：W3 綜合應用',
      icon: '📐',
      lesson: {
        title: 'W3 數學總複習——水利情境串連',
        sections: [
          {
            title: '本週數學概念回顧',
            blocks: [
              {
                type: 'text',
                content: '這週學了三個數學概念，都圍繞著「比例與分配」：\n\n① 比與比值：描述兩個量的關係（A：B，比值 = A÷B）\n② 化簡比：用最大公因數找最簡比\n③ 分數除法：÷ 分數 = × 倒數'
              },
              {
                type: 'text',
                content: '今天的練習題，把這三個概念放在一起，用台灣水利的真實情境來計算——這就是「情境數學」，用生活問題練習數學工具。'
              }
            ]
          },
          {
            title: '解題策略',
            blocks: [
              {
                type: 'text',
                content: '遇到情境題的步驟：\n\n步驟1：讀題，找出「已知」和「要求」\n步驟2：判斷要用哪個數學工具（比？比值？分數除法？）\n步驟3：列式計算\n步驟4：檢查答案是否合理'
              },
              {
                type: 'text',
                content: '提醒：有些題目需要兩步驟才能解，不要急，一步一步來。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateMathQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // 科學延伸
    {
      id: 'w3d4-science',
      name: '科學延伸：水資源與生態',
      icon: '🌿',
      lesson: {
        title: '河流不只是農業的水管——生態的故事',
        sections: [
          {
            title: '河流生態系',
            blocks: [
              {
                type: 'text',
                content: '河流從上游到下游，環境不斷改變，不同的生物在不同的河段生活：\n\n🏔️ 上游（源頭）：水急清涼、溶氧高，適合苦花、粗首鱲等耐急流的魚類，以及石蠶蛾、蜉蝣等水生昆蟲\n🌾 中游：水流平緩、生物多樣，是大多數台灣淡水魚的家\n🌊 下游（河口）：廣闊、富含有機質，是彈塗魚、招潮蟹、候鳥的棲地'
              }
            ]
          },
          {
            title: '濁水溪為什麼「濁」？',
            blocks: [
              {
                type: 'text',
                content: '濁水溪流域的土壤以泥頁岩為主，土質疏鬆，雨水一沖，大量泥沙就跟著河水流下來，讓水色呈現黃濁色。'
              },
              {
                type: 'text',
                content: '這些泥沙是「天然的禮物」：沉積在嘉南平原的泥沙，富含礦物質，讓土壤越來越肥沃，難怪台灣農業重鎮都集中在濁水溪流域。'
              }
            ]
          },
          {
            title: '人類取水 vs 生態需水',
            blocks: [
              {
                type: 'text',
                content: '台灣每年的水資源使用中，農業用水占了約70%，工業和民生用水約30%。這麼多水被取走，河流本身留多少？'
              },
              {
                type: 'text',
                content: '現代水資源管理中，有一個概念叫「生態流量」：確保河流在枯水期時仍保有最低限度的水量，讓魚類和水生生物能夠生存繁殖。\n\n農業與生態的平衡，是現在台灣正在思考的問題。'
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

    // 語文寫作引導
    {
      id: 'w3d4-writing',
      name: '語文：散文寫作引導',
      icon: '✍️',
      lesson: {
        title: '散文寫作——「如果我是一條河」',
        sections: [
          {
            title: '寫作前的準備',
            blocks: [
              {
                type: 'text',
                content: '這週你認識了台灣的河流：濁水溪、高屏溪、淡水河……它們從高山出發，穿越農田、城市，最後進入大海。'
              },
              {
                type: 'text',
                content: '現在，閉上眼睛想像：如果你是其中一條河，你的旅程是什麼樣的？你從哪裡出發？你看到了什麼？你帶走了什麼，又留下了什麼？'
              }
            ]
          },
          {
            title: '四段式散文架構',
            blocks: [
              {
                type: 'text',
                content: '📌 第一段：我從哪裡出發？（源頭）\n描寫源頭的樣子：清涼、安靜、礫石、雲霧……\n→ 開頭可以用「我誕生在……」或「我醒來的地方……」'
              },
              {
                type: 'text',
                content: '📌 第二段：我看到了什麼？（旅程）\n描寫沿途的景象：農田、橋、人們、城市……\n→ 至少描寫2個場景，用感官描寫（看、聽、感覺）'
              },
              {
                type: 'text',
                content: '📌 第三段：我帶走了什麼，留下了什麼？（付出）\n河流帶走泥沙，也帶走污染；留下肥沃的土地，也留下記憶……\n→ 可以運用對比：「我帶走了……，卻留下了……」'
              },
              {
                type: 'text',
                content: '📌 第四段：我去向何方？（歸宿）\n進入大海，完成循環……\n→ 結尾可以呼應開頭，形成循環感'
              }
            ]
          },
          {
            title: '寫作技巧提示',
            blocks: [
              {
                type: 'text',
                content: '散文寫作的三個小技巧：\n\n① 第一人稱「我」：以河流的視角說話，讓讀者感受河流的生命\n② 感官描寫：不只說「看到農田」，而是說「看到一片片金黃的稻穗在風中搖曳」\n③ 比喻：「我像一條......」「我的聲音像......」——讓文字更有畫面感'
              },
              {
                type: 'quote',
                content: '吳晟說「揮洒鹹鹹的汗水，播下粒粒的種籽」——農人把汗水比作水、把希望比作種籽。你也可以在散文裡，用比喻說出河流的心情。',
                author: '寫作引導'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 今日回顧
    {
      id: 'w3d4-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '動筆日的收穫',
        sections: [
          {
            title: '今天完成了什麼？',
            blocks: [
              {
                type: 'text',
                content: '今天是整合日，你做了三件事：\n\n📐 數學：用水利情境練習比、化簡比、分數除法的綜合應用\n🌿 科學：了解河流生態系，思考人類取水和生態保育的平衡\n✍️ 語文：學習散文結構，準備用第一人稱「如果我是一條河」說故事'
              },
              {
                type: 'text',
                content: '如果你今天已經動筆了，很棒！如果還沒有，在看完今天所有單元後，試著花10-15分鐘，把四段架構的草稿寫出來。'
              },
              {
                type: 'text',
                content: '🎵 明天是本週最後一天，我們要聽羅大佑唱吳晟的詩，看看詩和歌有什麼不同——藝術也是一種認識世界的方式。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day4
