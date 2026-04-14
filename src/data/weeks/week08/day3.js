// src/data/weeks/week08/day3.js
// W8 Day3：什麼是「堅持」？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:中小企業、社區經濟
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '2012年陳清松重開民生戲院,身邊的人大多是什麼態度?',
    options: ['大多反對,認為不可能成功', '全力支持', '無所謂', '要求他開連鎖店'],
    answer: 0,
    displayAnswer: '2012年陳清松想重開民生戲院時,身邊大多數人都反對,認為面對大型連鎖影城的競爭不可能成功,但他仍堅持對社區和電影的情感而重新開業。'
  },
  {
    type: 'options',
    question: '新民生戲院2012年重開時,首映的電影是?',
    options: ['復仇者聯盟1', '鐵達尼號', '侏羅紀公園', '唐伯虎點秋香'],
    answer: 0,
    displayAnswer: '新民生戲院2012年重新開幕時,首映電影是《復仇者聯盟1》,吸引許多民生社區居民回來看電影,重現當年戲院的榮景。'
  },
  {
    type: 'options',
    question: '「社區型戲院」和大型連鎖影城最大的差別是什麼?',
    options: [
      '緊密連結在地居民,有人情味和社區感',
      '票價比較便宜',
      '設備比較好',
      '電影比較新'
    ],
    answer: 0,
    displayAnswer: '社區型戲院最大的特色是與在地居民的情感連結,提供鄰里聚會的場所和人情味,這是大型連鎖影城難以取代的社區功能。'
  },
  {
    type: 'options',
    question: '文章中提到,民生社區居民去新民生戲院看電影時,很多人穿什麼?',
    options: ['夾腳拖', '正式西裝', '高跟鞋', '運動鞋'],
    answer: 0,
    displayAnswer: '民生社區居民去新民生戲院看電影時,很多人穿夾腳拖就來了,就像去鄰居家串門子一樣輕鬆自在,展現了社區戲院的親切氛圍。'
  },
  {
    type: 'options',
    question: '為什麼小企業雖然競爭力不如大企業,卻仍然有存在價值?',
    options: [
      '小企業提供特色商品、人情味、社區連結',
      '小企業比較便宜',
      '政府規定要有小企業',
      '小企業速度比較快'
    ],
    answer: 0,
    displayAnswer: '小企業提供大企業無法提供的特色商品、個人化服務、人情味和社區連結,滿足消費者對多元性和在地文化的需求,這是小企業的獨特價值。'
  },
  {
    type: 'options',
    question: '台灣的中小企業占企業總數的比例大約是多少?',
    options: ['98%以上', '30%', '50%', '70%'],
    answer: 0,
    displayAnswer: '台灣的中小企業占企業總數的98%以上,是台灣經濟的重要支柱,提供大量就業機會,展現台灣經濟的多元性和韌性。'
  },
  {
    type: 'options',
    question: '陳清松說「不那麼賺錢也沒關係,我就只是想重新開起來」,這句話反映了什麼?',
    options: [
      '他對電影和社區的情感超越了利潤考量',
      '他很有錢不在乎',
      '他不懂做生意',
      '他想出名'
    ],
    answer: 0,
    displayAnswer: '這句話反映了陳清松重開戲院的動機不只是賺錢,更是對電影文化的熱愛和對社區的情感,體現了小企業主對理念的堅持。'
  },
  {
    type: 'options',
    question: '新民生戲院最終在2026年熄燈,主要原因是?',
    options: [
      '無法抵擋串流平台崛起、大型影城壟斷、成本壓力',
      '老闆不想做了',
      '電影不好看',
      '政府禁止營業'
    ],
    answer: 0,
    displayAnswer: '新民生戲院在2026年熄燈,主要因為Netflix等串流平台改變觀影習慣、大型連鎖影城壟斷市場、加上疫情後成本壓力,最終無法維持經營。'
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
// 數學:市占率
// ==========================================
const mathQuestions = [
  // 計算市占率
  {
    type: 'options',
    question: '全台灣戲院總營收 200 億元,某連鎖影城營收 40 億元,它的市占率是多少%?',
    options: ['20', '500', '160', '30'],
    answer: 0,
    displayAnswer: '市占率 = (該公司營收 ÷ 總營收) × 100% = (40 ÷ 200) × 100% = 20%'
  },
  {
    type: 'options',
    question: '全台灣戲院總營收 300 億元,某連鎖影城營收 75 億元,它的市占率是多少%?',
    options: ['25', '400', '225', '35'],
    answer: 0,
    displayAnswer: '市占率 = (75 ÷ 300) × 100% = 25%'
  },
  {
    type: 'options',
    question: '全台灣戲院總營收 400 億元,某連鎖影城營收 100 億元,它的市占率是多少%?',
    options: ['25', '400', '300', '35'],
    answer: 0,
    displayAnswer: '市占率 = (100 ÷ 400) × 100% = 25%'
  },
  {
    type: 'options',
    question: '全台灣戲院總營收 500 億元,某連鎖影城營收 150 億元,它的市占率是多少%?',
    options: ['30', '333', '350', '40'],
    answer: 0,
    displayAnswer: '市占率 = (150 ÷ 500) × 100% = 30%'
  },
  // 已知市占率,求營收
  {
    type: 'options',
    question: '全台灣戲院總營收 200 億元,某連鎖影城市占率 20%,它的營收是多少億元?',
    options: ['40', '180', '220', '20'],
    answer: 0,
    displayAnswer: '營收 = 總營收 × 市占率 = 200 × 20% = 200 × 0.2 = 40億元'
  },
  {
    type: 'options',
    question: '全台灣戲院總營收 300 億元,某連鎖影城市占率 25%,它的營收是多少億元?',
    options: ['75', '275', '325', '25'],
    answer: 0,
    displayAnswer: '營收 = 總營收 × 市占率 = 300 × 25% = 300 × 0.25 = 75億元'
  },
  {
    type: 'options',
    question: '全台灣戲院總營收 400 億元,某連鎖影城市占率 30%,它的營收是多少億元?',
    options: ['120', '370', '430', '30'],
    answer: 0,
    displayAnswer: '營收 = 總營收 × 市占率 = 400 × 30% = 400 × 0.3 = 120億元'
  },
  {
    type: 'options',
    question: '全台灣戲院總營收 500 億元,某連鎖影城市占率 50%,它的營收是多少億元?',
    options: ['250', '450', '550', '50'],
    answer: 0,
    displayAnswer: '營收 = 總營收 × 市占率 = 500 × 50% = 500 × 0.5 = 250億元'
  },
  // 市占率比較
  {
    type: 'options',
    question: '市場上有三家公司,A公司市占率 30%,B公司 20%,C公司 50%。A公司比B公司多佔多少%的市場?',
    options: ['10', '50', '30', '20'],
    answer: 0,
    displayAnswer: 'A公司比B公司多佔的市場 = 30% - 20% = 10%'
  },
  {
    type: 'options',
    question: '市場上有三家公司,A公司市占率 35%,B公司 25%,C公司 40%。A公司比B公司多佔多少%的市場?',
    options: ['10', '60', '35', '25'],
    answer: 0,
    displayAnswer: 'A公司比B公司多佔的市場 = 35% - 25% = 10%'
  },
  {
    type: 'options',
    question: '市場上有三家公司,A公司市占率 40%,B公司 20%,C公司 40%。A公司比B公司多佔多少%的市場?',
    options: ['20', '60', '40', '10'],
    answer: 0,
    displayAnswer: 'A公司比B公司多佔的市場 = 40% - 20% = 20%'
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
// 科學:電力來源
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '台灣目前主要的發電方式是什麼?',
    options: ['火力發電(燃煤、天然氣)', '太陽能', '風力', '地熱'],
    answer: 0,
    displayAnswer: '台灣目前主要的發電方式是火力發電,包括燃煤和天然氣發電,約占總發電量的80%以上,是台灣最主要的電力來源。'
  },
  {
    type: 'options',
    question: '火力發電的能源轉換過程是?',
    options: [
      '化學能(燃料)→ 熱能 → 動能 → 電能',
      '太陽能 → 電能',
      '動能 → 電能',
      '電能 → 熱能'
    ],
    answer: 0,
    displayAnswer: '火力發電:燃燒煤炭或天然氣(化學能)產生熱能,加熱水產生蒸氣,推動渦輪機(動能),帶動發電機產生電能。'
  },
  {
    type: 'options',
    question: '水力發電的原理是?',
    options: [
      '利用水的位能(高度差)推動渦輪發電',
      '燃燒水產生電力',
      '把水加熱變成蒸氣',
      '水直接變成電'
    ],
    answer: 0,
    displayAnswer: '水力發電利用水從高處落下的位能,推動水輪機旋轉,帶動發電機產生電能。能源轉換:位能 → 動能 → 電能。'
  },
  {
    type: 'options',
    question: '為什麼火力發電會造成空氣污染?',
    options: [
      '燃燒煤炭或天然氣會產生二氧化碳和其他污染物',
      '發電廠太吵',
      '火力發電不會污染',
      '發電廠排放水蒸氣'
    ],
    answer: 0,
    displayAnswer: '火力發電燃燒化石燃料會產生二氧化碳(溫室氣體)、硫氧化物、氮氧化物等污染物,造成空氣污染和氣候變遷。'
  },
  {
    type: 'options',
    question: '再生能源包括哪些?',
    options: [
      '太陽能、風能、水力',
      '煤炭、石油',
      '核能',
      '天然氣'
    ],
    answer: 0,
    displayAnswer: '再生能源包括太陽能、風能、水力、地熱、生質能等,這些能源可以自然再生,不會耗盡,且發電時碳排放極低。'
  },
  {
    type: 'options',
    question: '為什麼再生能源被認為比化石燃料更環保?',
    options: [
      '再生能源不會用完,且發電時碳排放極低',
      '再生能源比較便宜',
      '再生能源速度更快',
      '再生能源可以自己生長'
    ],
    answer: 0,
    displayAnswer: '再生能源不會耗盡,且發電過程幾乎不產生溫室氣體和空氣污染物,比燃燒化石燃料更環保,是能源轉型的重要方向。'
  },
  {
    type: 'options',
    question: '太陽能發電的原理是?',
    options: [
      '太陽能板將光能直接轉換成電能',
      '燃燒太陽光',
      '用太陽加熱水',
      '反射陽光產生電'
    ],
    answer: 0,
    displayAnswer: '太陽能板利用光電效應,將太陽光能直接轉換成電能,不需要燃燒任何燃料,是最乾淨的發電方式之一。'
  },
  {
    type: 'options',
    question: '為什麼台灣不能完全依靠再生能源?',
    options: [
      '受天氣影響、供電不穩定、儲能技術還在發展中',
      '再生能源不存在',
      '政府不想用',
      '再生能源太貴'
    ],
    answer: 0,
    displayAnswer: '再生能源受天氣影響大(太陽能需陽光、風力需風),供電不穩定,加上儲能技術還在發展,目前無法完全取代傳統發電方式。'
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

// ── Day 資料 ──────────────────────────────────────
const day3 = {
  id: 'day3',
  name: '第三天',
  icon: '💪',
  color: '#0891b2',
  title: '什麼是「堅持」？',
  units: [
    {
      id: 'w8d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '一個男人的逆襲',
        sections: [
          {
            title: '今日文本段落',
            blocks: [
              {
                type: 'text',
                content: '民生戲院拉下鐵門後，這場「中場休息」持續了十多年。直到2012年，一個人打破了沉默。'
              },
              {
                type: 'quote',
                content: '這場長達十多年的「中場休息」，直到2012年才被陳清松打破。他決定成立「新」民生戲院。只是，要重開一間倒閉多年的老戲院？身邊所有的人，包括朋友、同行、甚至是熟識的片商，幾乎全數投下反對票。',
                author: '〈全台唯一社區戲院「新民生戲院」宣告落幕〉'
              },
              {
                type: 'text',
                content: '客觀條件確實極差：商圈轉移、人潮不再、加上地產產權複雜。而且，戲院樓上就是一般的民宅，難以擴大或進行大規模改建。\n\n但陳清松心裡那把火沒熄。他說：「不那麼賺錢也沒關係，我就只是想重新開起來。」'
              },
              {
                type: 'text',
                content: '於是他自掏腰包，重新裝潢，換上全新的杜比7.1環繞音效、寬敞舒適的豪華座椅、全面升級的銀幕。2012年4月25日，「新民生戲院」正式開幕。\n\n命運很奇妙，重新開幕的第一檔大片，剛好是漫威的《復仇者聯盟1》。電影裡，一群個性相衝的英雄們，在不被看好的狀況下集結起來拯救世界；戲院裡，一位不被看好的老闆用他的熱情，試圖拯救這個社區的文化地標。'
              },
              {
                type: 'text',
                content: '🤔 今日問題：如果是你，所有人都說不可能，你還會堅持做一件事嗎？為什麼？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w8d3-social',
      name: '社會｜中小企業的韌性',
      icon: '🗺️',
      lesson: {
        title: '小蝦米的生存之道',
        sections: [
          {
            title: '台灣經濟的隱形英雄',
            blocks: [
              {
                type: 'text',
                content: '台灣有超過160萬家企業，其中98%以上是中小企業（員工人數未滿200人）。\n\n這些中小企業提供了全台灣約80%的就業機會。換句話說，大部分台灣人都在中小企業工作。'
              },
              {
                type: 'text',
                content: '中小企業有什麼特點？\n\n✅ 靈活應變：規模小、決策快，可以快速調整產品\n✅ 深耕專業：通常專注在某個領域，累積獨特技術\n✅ 在地連結：和社區、客戶有深厚情感連結\n\n❌ 資金有限：無法像大企業一樣大量投資設備、行銷\n❌ 競爭壓力：容易被大企業的規模經濟擠壓'
              }
            ]
          },
          {
            title: '新民生戲院的定位',
            blocks: [
              {
                type: 'text',
                content: '陳清松很清楚：新民生戲院打不過威秀。但他不打算打敗威秀，他要做的是「不一樣的事」。\n\n他的口號是：「深耕社區，放映感動」。\n\n新民生戲院提供什麼？\n• 步行就能到的距離（不用開車去信義區排隊停車）\n• 熟悉的氛圍（老闆認識你，像鄰居一樣）\n• 合理的票價（不追求最新設備，但品質夠好）\n• 社區的歸屬感（這裡是「我們的」戲院）'
              },
              {
                type: 'text',
                content: '文章中提到：「來的客人10個有8個穿夾腳拖。」\n\n這句話說明了一切。對民生社區的居民來說，這裡不是「消費場所」，而是「生活場域」。吃飽飯後，牽著家人的手，散步經過圓環，看場電影再回家洗澡睡覺。\n\n這種便利與親密感，是開車去信義區永遠無法取代的。'
              }
            ]
          },
          {
            title: '小店為什麼重要？',
            blocks: [
              {
                type: 'text',
                content: '如果全台灣都只剩下連鎖店、大賣場、大型影城，會發生什麼事？\n\n🏬 多樣性消失：每個地方都長得一樣，沒有特色\n🏬 就業減少：連鎖店總部在台北，地方工作機會減少\n🏬 社區瓦解：沒有在地店家，社區失去凝聚的中心\n\n小店不只是「生意」，它們是社區的一部分，是讓地方有溫度的關鍵。'
              },
              {
                type: 'text',
                content: '新民生戲院活了14年（2012–2026），最終還是敵不過串流平台、成本壓力和大型影城的壟斷。\n\n但它證明了一件事：只要有人堅持，小店可以活下來，甚至活得很好。它種下的不只是電影，是幾代人的共同記憶。'
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
      id: 'w8d3-math',
      name: '數學｜市占率',
      icon: '📐',
      lesson: {
        title: '誰吃掉了市場？',
        sections: [
          {
            title: '什麼是市占率？',
            blocks: [
              {
                type: 'text',
                content: '市占率（Market Share）= 某公司的銷售額 ÷ 整個市場的總銷售額 × 100%\n\n它告訴我們：這家公司在整個市場中佔了多少份額。'
              },
              {
                type: 'text',
                content: '例題：\n\n全台灣戲院2024年總營收100億元，威秀影城營收40億元，秀泰影城30億元，其他戲院30億元。各自的市占率是多少？\n\n威秀：40 ÷ 100 = 40%\n秀泰：30 ÷ 100 = 30%\n其他：30 ÷ 100 = 30%\n\n威秀是市場龍頭，吃掉了40%的市場。'
              }
            ]
          },
          {
            title: '市占率的變化',
            blocks: [
              {
                type: 'text',
                content: '市占率會隨著時間改變。當某家公司成長得比市場快，它的市占率就會上升。\n\n例子：\n\n2020年：\n• 市場總額：100億\n• A公司：30億（市占率30%）\n• B公司：20億（市占率20%）\n\n2025年：\n• 市場總額：150億（成長50%）\n• A公司：60億（成長100%）→ 市占率 60÷150 = 40%\n• B公司：25億（成長25%）→ 市占率 25÷150 ≈ 17%\n\nA公司成長得比市場快，市占率從30%升到40%。B公司雖然也成長，但慢於市場，市占率下降。'
              }
            ]
          },
          {
            title: '獨立戲院的困境',
            blocks: [
              {
                type: 'text',
                content: '🎬 真實情境：\n\n1990年：\n• 全台灣戲院總數：約300家\n• 連鎖影城：0家（市占率0%）\n• 獨立戲院：300家（市占率100%）\n\n2000年：\n• 全台灣戲院總數：約200家\n• 連鎖影城：20家（市占率約60%）\n• 獨立戲院：180家（市占率約40%）\n\n2020年：\n• 全台灣戲院總數：約150家\n• 連鎖影城：30家（市占率約85%）\n• 獨立戲院：120家（市占率約15%）'
              },
              {
                type: 'text',
                content: '看出趨勢了嗎？\n\n雖然獨立戲院的「數量」還有120家，但它們的「市占率」只剩15%。因為連鎖影城的單店規模大得多（一家威秀可能有10個廳，一家獨立戲院只有1–2廳）。\n\n新民生戲院雖然努力經營，但在這個趨勢下，生存空間越來越小。明天我們要寫一篇抒情文，談談「和某個美好的事物告別」。'
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
      id: 'w8d3-science',
      name: '科學｜電力從哪裡來？',
      icon: '🔬',
      lesson: {
        title: '發電的三種方式',
        sections: [
          {
            title: '火力發電：燃燒產生電力',
            blocks: [
              {
                type: 'text',
                content: '台灣目前約80%的電力來自火力發電。它是怎麼運作的？\n\n① 燃燒燃料（煤炭、天然氣、石油）產生高溫\n② 高溫加熱水，產生高壓蒸氣\n③ 蒸氣推動渦輪機旋轉\n④ 渦輪機帶動發電機，產生電力\n\n能源轉換：化學能 → 熱能 → 動能 → 電能'
              },
              {
                type: 'text',
                content: '火力發電的優缺點：\n\n✅ 技術成熟、供電穩定\n✅ 可以隨時調整發電量\n\n❌ 燃燒會產生二氧化碳（溫室氣體）\n❌ 空氣污染（PM2.5、氮氧化物）\n❌ 燃料會用完（不是再生能源）'
              }
            ]
          },
          {
            title: '水力發電：利用水的位能',
            blocks: [
              {
                type: 'text',
                content: '台灣約有5%的電力來自水力發電（主要是水庫大壩）。\n\n原理：\n① 水庫蓄水在高處，水有位能（重力位能）\n② 水從高處流下，位能轉成動能\n③ 水流推動水輪機旋轉\n④ 水輪機帶動發電機，產生電力\n\n能源轉換：位能 → 動能 → 電能'
              },
              {
                type: 'text',
                content: '水力發電的優缺點：\n\n✅ 完全沒有碳排放\n✅ 水可以重複使用（水流下後還在地球上）\n\n❌ 建水庫成本高、需要很大的土地\n❌ 受降雨影響（乾旱時沒水發電）\n❌ 可能影響河川生態'
              }
            ]
          },
          {
            title: '再生能源：太陽能與風能',
            blocks: [
              {
                type: 'text',
                content: '太陽能發電：\n• 太陽能板將陽光直接轉換成電能（光電效應）\n• 沒有燃燒、沒有污染、取之不盡\n• 但受天氣影響（陰天、晚上無法發電）\n\n風力發電：\n• 風吹動風扇葉片旋轉，帶動發電機\n• 動能 → 電能\n• 但受風力影響（沒風就沒電）'
              },
              {
                type: 'text',
                content: '為什麼台灣還不能完全用再生能源？\n\n① 不穩定：太陽能只有白天、風力要有風\n② 儲能技術：電池儲電成本還很高\n③ 土地限制：太陽能板和風機需要很大面積\n\n但台灣正在努力增加再生能源比例，目標是2050年達到淨零碳排。這需要新的技術、大量投資，以及每個人的節約用電。'
              },
              {
                type: 'text',
                content: '🏢 回到戲院的故事：\n\n新民生戲院和所有的戲院、商場、工廠一樣，都需要大量電力。電力從哪裡來、怎麼生產，影響著整個台灣的環境和未來。\n\n下週（W9）我們會更深入學習電路的原理——電是怎麼從發電廠送到你家的。'
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
      id: 'w8d3-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '今日知識整理',
            blocks: [
              {
                type: 'text',
                content: '🗺️ 社會：台灣98%的企業是中小企業，提供80%的就業機會。新民生戲院用「深耕社區」對抗大型連鎖，證明小店有自己的生存之道。\n\n📐 數學：市占率 = 公司營收 ÷ 市場總額 × 100%。連鎖影城的市占率從0%（1990）升到85%（2020），擠壓了獨立戲院的生存空間。\n\n🔬 科學：火力發電（化學能→熱能→動能→電能），水力發電（位能→動能→電能），再生能源（光/風→電能）。台灣正在努力提高再生能源比例。'
              },
              {
                type: 'text',
                content: '📖 文本：2012年，陳清松決定逆風重開民生戲院。「不那麼賺錢也沒關係，我就只是想重新開起來。」這是堅持，也是對土地和回憶的深情。'
              },
              {
                type: 'text',
                content: '⏭️ 明天是動筆日。你要寫一篇抒情文：「和___告別」。想一想，有沒有什麼美好的事物，曾經是你生活的一部分，但現在消失了或改變了？'
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
