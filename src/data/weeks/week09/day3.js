// week09/day3.js - W9 Day 3: 我能做什麼?

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 練習題庫
// ==========================================

// 【數學】圖表陷阱練習題庫
const mathQuestions = [
  {
    type: 'options',
    question: '某圖表 Y 軸從 90 開始而不是 0,這會造成什麼錯覺?',
    options: ['讓小差距看起來很大', '讓大差距看起來很小', '沒有影響', '更清楚'],
    answer: 0,
    displayAnswer: '讓小差距看起來很大'
  },
  {
    type: 'options',
    question: '某產品廣告說「95%滿意度!」但只調查了 20 人。這是什麼問題?',
    options: ['樣本數太少,不具代表性', '百分比太高', '問卷太長', '價格太貴'],
    answer: 0,
    displayAnswer: '樣本數太少,不具代表性'
  },
  {
    type: 'options',
    question: '某政治人物只展示對自己有利的數據,隱藏不利的部分。這叫做?',
    options: ['選擇性呈現', '完整報告', '誠實數據', '科學分析'],
    answer: 0,
    displayAnswer: '選擇性呈現'
  },
  {
    type: 'options',
    question: '標題寫「銷量暴增300%!」但實際是從 1 件增加到 4 件。這是什麼問題?',
    options: ['誇大標題,忽略基數很小', '計算錯誤', '標題太短', '沒有問題'],
    answer: 0,
    displayAnswer: '誇大標題,忽略基數很小'
  },
  {
    type: 'options',
    question: '看到統計圖表時,我們應該先檢查什麼?',
    options: ['Y軸是否從0開始、樣本數、數據來源', '圖表顏色', '字體大小', '紙張品質'],
    answer: 0,
    displayAnswer: 'Y軸是否從0開始、樣本數、數據來源'
  },
  {
    type: 'options',
    question: '某折線圖顯示「房價暴漲」,但仔細看 Y 軸只從 950 萬到 1000 萬。實際漲幅是?',
    options: ['約5%,並不算暴漲', '100%', '500%', '1000%'],
    answer: 0,
    displayAnswer: '約5%,並不算暴漲'
  },
  {
    type: 'options',
    question: '某圓形圖只顯示「支持」和「反對」,但隱藏了「不表態」。這會造成什麼問題?',
    options: ['無法看到完整民意分布', '圓形太小', '顏色不夠', '字太多'],
    answer: 0,
    displayAnswer: '無法看到完整民意分布'
  },
  {
    type: 'options',
    question: '一個好的統計圖表應該包含什麼資訊?',
    options: ['標題、數據來源、樣本數、清楚的軸標示', '漂亮的顏色', '複雜的設計', '很多照片'],
    answer: 0,
    displayAnswer: '標題、數據來源、樣本數、清楚的軸標示'
  },
  {
    type: 'options',
    question: '某產品比較圖用不同尺度的 Y 軸讓自家產品看起來更好。這是?',
    options: ['不誠實的比較', '科學分析', '客觀呈現', '標準做法'],
    answer: 0,
    displayAnswer: '不誠實的比較'
  },
  {
    type: 'options',
    question: '看到圖表時,為什麼要問「這個圖表想說服我什麼」?',
    options: ['了解製作者的意圖,保持批判思考', '因為很無聊', '因為考試要考', '因為老師說的'],
    answer: 0,
    displayAnswer: '了解製作者的意圖,保持批判思考'
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

// 【社會】公民參與練習題庫
const socialQuestions = [
  {
    type: 'options',
    question: '在民主社會中,哪一種不是公民參與的方式?',
    options: ['暴力抗議', '投票選舉', '連署陳情', '和平社會運動'],
    answer: 0,
    displayAnswer: '暴力抗議'
  },
  {
    type: 'options',
    question: '台灣的公投年齡在 2023 年降為幾歲?',
    options: ['18歲', '16歲', '20歲', '21歲'],
    answer: 0,
    displayAnswer: '18歲'
  },
  {
    type: 'options',
    question: '什麼是「公民投票」?',
    options: [
      '人民對重大議題直接投票表決',
      '選舉總統的投票',
      '選舉立法委員的投票',
      '只有公務員才能投票'
    ],
    answer: 0,
    displayAnswer: '人民對重大議題直接投票表決'
  },
  {
    type: 'options',
    question: '中世紀歐洲的「政教合一」是指什麼?',
    options: [
      '宗教領袖同時掌握政治權力',
      '教會和政府合作',
      '國王信仰宗教',
      '政府補助教會'
    ],
    answer: 0,
    displayAnswer: '宗教領袖同時掌握政治權力'
  },
  {
    type: 'options',
    question: '為什麼歐洲最終走向「政教分離」?',
    options: [
      '因為人們發現權力集中會限制自由、壓制思想',
      '因為教會太窮',
      '因為國王不信教',
      '因為戰爭失敗'
    ],
    answer: 0,
    displayAnswer: '因為人們發現權力集中會限制自由、壓制思想'
  },
  {
    type: 'options',
    question: '柳營村民拯救老榕樹,展現了公民參與的哪個特徵?',
    options: [
      '主動陳情、集體決策、實際行動、多方協作',
      '完全聽專家的',
      '只靠政府',
      '什麼都不做'
    ],
    answer: 0,
    displayAnswer: '主動陳情、集體決策、實際行動、多方協作'
  },
  {
    type: 'options',
    question: '1990年的野百合學運要求什麼?',
    options: ['國會全面改選、廢除萬年國代', '降低學費', '延長假期', '改善伙食'],
    answer: 0,
    displayAnswer: '國會全面改選、廢除萬年國代'
  },
  {
    type: 'options',
    question: '社會運動的基本原則是什麼?',
    options: ['和平、理性、非暴力', '越激烈越好', '一定要破壞', '不需要訴求'],
    answer: 0,
    displayAnswer: '和平、理性、非暴力'
  },
  {
    type: 'options',
    question: '君主專制的最大缺點是什麼?',
    options: ['人民沒有發聲權,君主昏庸國家就衰敗', '決策太慢', '太民主', '太複雜'],
    answer: 0,
    displayAnswer: '人民沒有發聲權,君主昏庸國家就衰敗'
  },
  {
    type: 'options',
    question: '民主制度雖然有時緩慢吵雜,但提供了什麼優勢?',
    options: ['容錯機制、權力制衡、人權保障、社會彈性', '最快決策', '最便宜', '最安靜'],
    answer: 0,
    displayAnswer: '容錯機制、權力制衡、人權保障、社會彈性'
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

// 【科學】混合電路練習題庫
const scienceQuestions = [
  {
    type: 'options',
    question: '什麼是混合電路?',
    options: [
      '同時包含串聯和並聯的電路',
      '只有串聯的電路',
      '只有並聯的電路',
      '沒有電源的電路'
    ],
    answer: 0,
    displayAnswer: '同時包含串聯和並聯的電路'
  },
  {
    type: 'options',
    question: '家庭照明系統的總開關屬於?',
    options: ['串聯設計', '並聯設計', '混合設計', '沒有設計'],
    answer: 0,
    displayAnswer: '串聯設計'
  },
  {
    type: 'options',
    question: '台灣的中央政府與地方政府的權力配置,像哪種電路?',
    options: ['混合電路', '串聯電路', '並聯電路', '斷路'],
    answer: 0,
    displayAnswer: '混合電路'
  },
  {
    type: 'options',
    question: '為什麼混合電路是最實用的設計?',
    options: [
      '因為既有統一控制,又有獨立運作,兼顧效率與彈性',
      '因為最便宜',
      '因為最複雜',
      '因為最漂亮'
    ],
    answer: 0,
    displayAnswer: '因為既有統一控制,又有獨立運作,兼顧效率與彈性'
  },
  {
    type: 'options',
    question: '柳營村民救樹的過程,哪一點展現「混合電路」的精神?',
    options: [
      '有專業領導統籌,也有各方獨立分工,靈活應變',
      '完全聽樹醫師的,村民什麼都不做',
      '每個人各做各的,完全不協調',
      '只靠政府,不靠村民'
    ],
    answer: 0,
    displayAnswer: '有專業領導統籌,也有各方獨立分工,靈活應變'
  },
  {
    type: 'options',
    question: '混合電路中,需要統一控制的部分用什麼連接方式?',
    options: ['串聯', '並聯', '不連接', '隨便'],
    answer: 0,
    displayAnswer: '串聯'
  },
  {
    type: 'options',
    question: '混合電路中,需要獨立運作的部分用什麼連接方式?',
    options: ['並聯', '串聯', '不連接', '隨便'],
    answer: 0,
    displayAnswer: '並聯'
  },
  {
    type: 'options',
    question: '台灣COVID-19疫情期間,中央統籌防疫、地方因地制宜執行。這像什麼電路?',
    options: ['混合電路', '只有串聯', '只有並聯', '沒有電路'],
    answer: 0,
    displayAnswer: '混合電路'
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
// 課程內容
// ==========================================

const day3 = {
  id: 'day3',
  name: '第三天',
  icon: '✊',
  color: '#F59E0B',
  title: '我能做什麼?',
  
  units: [
    // ========== 開場閱讀 ==========
    {
      id: 'w9d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '《神的樹》第三章:污染的土壤與枯枝修剪',
        sections: [
          {
            title: '文本閱讀(節選)',
            blocks: [
              {
                type: 'text',
                content: '救治作業預計需時兩至三天,這天一早,村民早已聚集在榕樹下,準備共同見證這場生命的修復。最令人動容的,是村裡的阿公阿嬤們不僅提早到場,還貼心地準備了桌椅、水果與茶點,細細叮囑我們:「別太操勞了喔,點心先吃飽,再繼續做事。」'
              },
              {
                type: 'text',
                content: '這樣溫暖的話語,瞬間喚起我兒時的記憶。當年在自家農田收成的日子裡,母親總會備妥滿桌的點心與飯菜,讓親友補充體力。那是農村裡特有的溫情,是土地與人彼此扶持的情感交融。原以為這些記憶早已模糊,沒想到竟在這棵榕樹下,再度被喚醒。'
              },
              {
                type: 'text',
                content: '有位高齡阿公,自清晨起便坐在榕樹旁,一動也不動地注視著我們的每一個舉動。他話不多,但眼神中充滿堅定與關懷,就像在默默守護著這位老夥伴,生怕它無法承受這場手術的痛楚。'
              },
              {
                type: 'text',
                content: '傍晚時分,工作接近尾聲,阿公悄然離去,不久後又捧著一盤親手種下的水果回來。他淡淡地說:「這沒什麼,就想做點事,幫點忙。」我看著他眼裡微微的濕意,那不是悲傷,而是一種深沉的情感——對老樹的疼惜、對村莊記憶的珍視、對每一份努力的感激。'
              },
              {
                type: 'text',
                content: '那一刻我明白,這棵榕樹,早已不只是村中的一棵老樹,而是一段代代相傳的生命故事,是信仰、回憶與連結的實體象徵。'
              }
            ]
          },
          {
            title: '思考問題',
            blocks: [
              {
                type: 'question',
                content: '村民做了哪些具體行動來拯救老樹?這和「公民參與」有什麼關係?'
              },
              {
                type: 'question',
                content: '阿公說「就想做點事,幫點忙」。你覺得在民主社會中,普通人能做哪些事來改變社會?'
              },
              {
                type: 'question',
                content: '為什麼文章說老樹是「信仰、回憶與連結的實體象徵」?公共利益和個人記憶如何連結?'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // ========== 社會單元:公民參與 ==========
    {
      id: 'w9d3-society',
      name: '社會:公民參與',
      icon: '🏛️',
      lesson: {
        title: '我能做什麼?——公民參與的多種方式',
        sections: [
          {
            title: '一、公民參與不只是投票',
            blocks: [
              {
                type: 'text',
                content: '很多人以為民主就是「每幾年投一次票」,但其實公民參與有很多種方式。就像柳營村民拯救老榕樹——他們打電話求助、籌措經費、準備茶點、全程陪伴、捐獻水果——這些都是「參與」!'
              },
              {
                type: 'text',
                content: '民主社會的公民,可以透過以下方式影響公共事務:'
              }
            ]
          },
          {
            title: '二、公民參與的方式',
            blocks: [
              {
                type: 'text',
                content: '**1. 投票選舉**'
              },
              {
                type: 'text',
                content: '這是最基本的公民權利。透過投票,我們可以:\n• 選出代表我們意見的民意代表(立法委員、縣市議員)\n• 選出國家或地方的領導人(總統、縣市長)\n• 在台灣,年滿 20 歲即有投票權(2023 年起公投降為 18 歲，選舉權仍維持 20 歲)'
              },
              {
                type: 'text',
                content: '**為什麼投票重要?**\n想像全班要決定校外教學地點,如果你不投票,就是讓別人替你決定。同樣地,如果你不投票,就是放棄影響國家未來的機會。'
              },
              {
                type: 'text',
                content: '**2. 連署**'
              },
              {
                type: 'text',
                content: '當很多人對某個議題有相同看法,可以發起連署,向政府表達訴求。例如:\n• 保護老樹連署(如柳營老榕)\n• 動物保護法修法連署\n• 學校午餐改善連署'
              },
              {
                type: 'text',
                content: '在台灣,如果連署人數達到一定門檻,政府必須正式回應。'
              },
              {
                type: 'text',
                content: '**3. 陳情**'
              },
              {
                type: 'text',
                content: '向政府機關或民意代表反映問題,請求協助。例如:\n• 村民打電話給樹醫師,請求救樹\n• 向市長信箱反映路燈不亮\n• 向民意代表陳情學校設施老舊'
              },
              {
                type: 'text',
                content: '**4. 公民投票(公投)**'
              },
              {
                type: 'text',
                content: '對重大議題,全民直接投票決定。這是最直接的民主形式。台灣的公投議題包括:\n• 核能發電是否延役?\n• 是否降低投票年齡?\n• 是否禁止某些食品進口?'
              },
              {
                type: 'text',
                content: '公投讓人民不只選代表,還能直接對政策表態。'
              },
              {
                type: 'text',
                content: '**5. 社會運動**'
              },
              {
                type: 'text',
                content: '當體制內管道無效,人民可以透過和平的方式表達訴求。台灣的重要社會運動:\n• **野百合學運(1990)**:學生在中正紀念堂靜坐,要求國會全面改選、廢除萬年國代\n• **太陽花學運(2014)**:學生占領立法院,反對《兩岸服貿協議》黑箱作業\n• **環保運動**:反核、護樹、保護濕地'
              },
              {
                type: 'text',
                content: '**社會運動的原則**:\n• 和平、理性、非暴力\n• 有明確訴求\n• 尊重他人權利(如不阻礙交通、不破壞財物)'
              }
            ]
          },
          {
            title: '三、比較不同的政治制度',
            blocks: [
              {
                type: 'text',
                content: '為了更了解民主的珍貴,我們來看看歷史上其他的政治制度:'
              },
              {
                type: 'text',
                content: '**君主專制**\n• 特徵:國王或皇帝擁有絕對權力,人民無法參政\n• 例子:古代中國(秦朝、清朝)、法國路易十四時期\n• 優點:決策快速,政令統一\n• 缺點:人民沒有發聲權,君主如果昏庸,國家就會衰敗'
              },
              {
                type: 'text',
                content: '**政教合一**\n• 特徵:宗教領袖同時掌握政治權力,宗教法律即國家法律\n• 例子:中世紀歐洲(教皇權力極大)、現代梵蒂岡、伊朗\n• 歷史:中世紀的歐洲,教會控制教育、審判異端、發動十字軍東征。如果你質疑教會,可能被判為異端,遭受火刑。'
              },
              {
                type: 'text',
                content: '**為什麼歐洲走向政教分離?**\n• **宗教改革(16 世紀)**:馬丁路德挑戰教會腐敗,開啟宗教多元化\n• **啟蒙運動(18 世紀)**:哲學家提倡理性思考、人權、自由\n• **法國大革命(1789)**:推翻君主專制,建立民主共和\n• **結論**:人們發現,把權力集中在宗教或單一權威手中,會限制思想自由、壓制異議、阻礙科學發展'
              },
              {
                type: 'text',
                content: '**極權專制**\n• 特徵:一黨專政或獨裁者統治,嚴格控制言論、思想、媒體\n• 例子:戒嚴時期的台灣、北韓、納粹德國\n• 優點:在特殊時期(如戰爭、經濟危機)可能帶來穩定和效率\n• 缺點:壓制人權、沒有制衡、政策錯誤無法糾正、人民生活在恐懼中'
              },
              {
                type: 'text',
                content: '**民主制度**\n• 特徵:人民選舉代表,權力分立,保障人權,言論自由\n• 例子:現代台灣、美國、日本、歐洲國家\n• 優點:人民有發聲權、政策錯誤可以修正、保障人權、社會有彈性\n• 缺點:決策較慢、有時候會吵鬧、需要人民積極參與'
              }
            ]
          },
          {
            title: '四、為什麼人類選擇民主?',
            blocks: [
              {
                type: 'text',
                content: '比較這些制度後,我們會發現:雖然極權、君主專制、政教合一在某些時候帶來穩定和效率,但長期來看,它們都有致命缺陷——**缺乏制衡、壓制自由、無法糾錯**。'
              },
              {
                type: 'text',
                content: '民主制度雖然有時候看起來混亂、緩慢,但它提供了:'
              },
              {
                type: 'text',
                content: '• **容錯機制**:政策錯誤可以透過選舉修正\n• **權力制衡**:沒有人可以為所欲為\n• **人權保障**:每個人都有基本權利\n• **社會彈性**:多元聲音讓社會更有創意和韌性'
              },
              {
                type: 'text',
                content: '就像並聯電路比串聯電路更穩定——即使某個環節出問題,整個系統仍能運作。'
              }
            ]
          },
          {
            title: '五、回到老榕樹的故事',
            blocks: [
              {
                type: 'text',
                content: '柳營村民拯救老榕樹的過程,其實展現了公民參與的精神:'
              },
              {
                type: 'text',
                content: '• **主動求助**(陳情):村民打電話給樹醫師\n• **集體決策**:全村討論是否要籌錢救樹\n• **實際行動**:準備茶點、陪伴守護、捐獻水果\n• **多方協作**:樹醫師+村民+廟公+政府,各司其職\n• **長期關注**:不是救完就算,而是持續關心'
              },
              {
                type: 'text',
                content: '這告訴我們:公民參與不一定是上街遊行、發起運動,有時候就是「想做點事,幫點忙」——就像那位阿公捧著水果回來一樣,這就是最真實的公民參與。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateSocialQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // ========== 數學單元:圖表如何說謊 ==========
    {
      id: 'w9d3-math',
      name: '數學:圖表陷阱',
      icon: '📊',
      lesson: {
        title: '統計圖表:圖表如何「說謊」?',
        sections: [
          {
            title: '一、為什麼要學會辨識圖表陷阱?',
            blocks: [
              {
                type: 'text',
                content: '統計圖表是一種強大的溝通工具,可以讓複雜的數據變得容易理解。但是,圖表也可能被刻意設計來誤導讀者,讓人得出錯誤的結論。'
              },
              {
                type: 'text',
                content: '在民主社會中,政治人物、廣告商、媒體都會使用圖表來說服我們。如果我們不懂得辨識圖表的陷阱,就很容易被操縱。'
              },
              {
                type: 'text',
                content: '就像柳營村民不盲目相信第一個專家說的「樹癌」,而是尋求更專業的診斷——我們看圖表時,也要保持批判性思考。'
              }
            ]
          },
          {
            title: '二、常見的圖表陷阱',
            blocks: [
              {
                type: 'text',
                content: '**陷阱 1:Y 軸不從 0 開始**'
              },
              {
                type: 'text',
                content: '**例子**:\n某候選人的民調支持度從 45% 升到 47%。如果 Y 軸從 40% 開始,折線圖看起來會有巨大的上升;但如果從 0% 開始,就會發現其實只上升了 2%。'
              },
              {
                type: 'text',
                content: '**如何辨識**:\n檢查 Y 軸的起點。如果不是從 0 開始,要特別小心,因為視覺效果可能被放大了。'
              },
              {
                type: 'text',
                content: '**陷阱 2:樣本數太少**'
              },
              {
                type: 'text',
                content: '**例子**:\n「95% 的人都推薦這個產品!」但仔細一看,原來只調查了 20 個人,而且都是廠商的員工。'
              },
              {
                type: 'text',
                content: '**如何辨識**:\n檢查樣本數(調查了多少人)和樣本來源(是隨機抽樣還是特定群體)。一般來說,至少需要幾百人的樣本才有代表性。'
              },
              {
                type: 'text',
                content: '**陷阱 3:選擇性呈現**'
              },
              {
                type: 'text',
                content: '**例子**:\n某政治人物只展示經濟成長的數據,但隱藏失業率上升的數據。或者,某公司只展示「滿意」和「非常滿意」的比例,隱藏「不滿意」的部分。'
              },
              {
                type: 'text',
                content: '**如何辨識**:\n問自己:「有沒有其他重要的數據被隱藏了?」如果圓形圖只有兩個選項,可能省略了「不表態」或「其他」。'
              },
              {
                type: 'text',
                content: '**陷阱 4:誇大標題**'
              },
              {
                type: 'text',
                content: '**例子**:\n「銷量暴增 300%!」聽起來很驚人,但仔細一看,原來是從 1 件增加到 4 件。雖然百分比很高,但基數太小,實際意義不大。'
              },
              {
                type: 'text',
                content: '**如何辨識**:\n看標題時,也要看實際數字。百分比的增長要配合基數來判斷是否真的「暴增」。'
              },
              {
                type: 'text',
                content: '**陷阱 5:不一致的比較基準**'
              },
              {
                type: 'text',
                content: '**例子**:\n某產品比較圖中,A 產品用「每 100 克的營養成分」,B 產品用「每份的營養成分」,讓 A 產品看起來更好,但其實比較基準不同。'
              },
              {
                type: 'text',
                content: '**如何辨識**:\n確認比較的單位、時間範圍、條件是否一致。如果不一致,就無法公平比較。'
              }
            ]
          },
          {
            title: '三、如何保護自己不被圖表誤導?',
            blocks: [
              {
                type: 'text',
                content: '**檢查清單**:\n□ Y 軸是否從 0 開始?\n□ 樣本數是否足夠?(至少幾百人)\n□ 有沒有隱藏其他數據?\n□ 標題是否過度誇張?\n□ 比較基準是否一致?\n□ 數據來源是否可信?'
              },
              {
                type: 'text',
                content: '**問三個問題**:\n1. **這個圖表想說服我什麼?**(了解意圖)\n2. **數據本身說了什麼?**(看實際數字)\n3. **有沒有其他可能的解讀?**(保持懷疑)'
              },
              {
                type: 'text',
                content: '就像柳營村民不盲目相信第一個專家說的「樹癌」,而是尋求更專業的樹醫師——我們看圖表時,也要保持批判思考,不要被第一眼的印象誤導。'
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

    // ========== 科學單元:混合電路 ==========
    {
      id: 'w9d3-science',
      name: '科學:混合電路',
      icon: '🔧',
      lesson: {
        title: '電路連接:混合電路',
        sections: [
          {
            title: '一、回顧:串聯與並聯',
            blocks: [
              {
                type: 'text',
                content: '我們已經學過:\n• **串聯電路**:單一路徑,一個斷開全部停止(像極權)\n• **並聯電路**:多條路徑,各自獨立,有容錯機制(像民主)'
              },
              {
                type: 'text',
                content: '但在現實生活中,電路系統通常不是純粹的串聯或並聯,而是兩者的結合——**混合電路**。'
              }
            ]
          },
          {
            title: '二、什麼是混合電路?',
            blocks: [
              {
                type: 'text',
                content: '**混合電路**:電路中同時包含串聯和並聯的部分。'
              },
              {
                type: 'text',
                content: '**例子:家庭照明系統**\n• 總開關(串聯):控制整個家的電\n• 各房間插座(並聯):各自獨立\n• 房間內的燈和開關(串聯):開關控制燈'
              },
              {
                type: 'text',
                content: '這樣的設計結合了串聯和並聯的優點:\n• 總開關讓你可以一次關閉所有電器(安全、省電)\n• 各房間獨立,一個房間停電不影響其他房間\n• 房間內的開關能控制該房間的燈'
              }
            ]
          },
          {
            title: '三、混合電路的設計原則',
            blocks: [
              {
                type: 'text',
                content: '**1. 需要統一控制的部分用串聯**\n例如:總開關、安全裝置、緊急斷電'
              },
              {
                type: 'text',
                content: '**2. 需要獨立運作的部分用並聯**\n例如:各房間插座、不同電器'
              },
              {
                type: 'text',
                content: '**3. 根據功能需求靈活組合**\n例如:客廳可能有三盞燈,用一個開關控制(串聯),但客廳和臥室是獨立的(並聯)'
              }
            ]
          },
          {
            title: '四、混合電路與民主體制的比喻',
            blocks: [
              {
                type: 'text',
                content: '混合電路其實完美比喻了現代民主國家的**中央與地方權力配置**:'
              },
              {
                type: 'text',
                content: '**中央政府(總開關的角色)**:\n• 負責全國性事務:國防、外交、貨幣、跨縣市建設\n• 制定全國統一的法律:刑法、民法、憲法\n• 就像總開關,確保整個國家的基本運作'
              },
              {
                type: 'text',
                content: '**地方政府(並聯的各支路)**:\n• 台北市、高雄市、台中市等各自獨立運作\n• 負責地方事務:道路維修、垃圾處理、地方教育\n• 制定地方自治條例:停車收費、夜市管理\n• 一個城市財政困難,不會直接拖垮其他城市'
              },
              {
                type: 'text',
                content: '**權力分立(混合設計)**:\n• 立法、行政、司法三權並聯(互相制衡)\n• 但都受憲法約束(串聯在最高法律之下)\n• 中央與地方有各自權限,也有協調機制'
              },
              {
                type: 'text',
                content: '這樣的設計兼顧:\n• **效率**:中央統籌全國性事務\n• **彈性**:地方處理在地問題\n• **穩定**:一個地方出問題不會癱瘓全國'
              }
            ]
          },
          {
            title: '五、實際案例:COVID-19 疫情',
            blocks: [
              {
                type: 'text',
                content: '台灣在 COVID-19 疫情期間,就展現了「混合電路」的治理模式:'
              },
              {
                type: 'text',
                content: '**中央(總開關)**:\n• 中央流行疫情指揮中心統籌全國防疫\n• 決定邊境管制、疫苗採購、警戒等級\n• 制定全國統一的防疫規範'
              },
              {
                type: 'text',
                content: '**地方(並聯支路)**:\n• 各縣市因地制宜執行防疫措施\n• 台北市管理台北市的防疫旅館\n• 高雄市處理高雄市的疫調\n• 一個縣市出現確診,不會直接讓其他縣市癱瘓'
              },
              {
                type: 'text',
                content: '**協調機制(混合)**:\n• 中央提供資源和指引\n• 地方回報執行狀況\n• 遇到跨縣市問題時,中央協調處理'
              },
              {
                type: 'text',
                content: '這就像混合電路:有統一的控制(中央指揮),也有獨立的運作(地方執行),兼顧效率與彈性。'
              }
            ]
          },
          {
            title: '六、回到老榕樹的故事',
            blocks: [
              {
                type: 'text',
                content: '柳營村民拯救老榕樹的過程,其實也是一個「混合電路」的協作模式:'
              },
              {
                type: 'text',
                content: '**統一協調(串聯)**:\n• 樹醫師作為專業領導,統籌救治計畫\n• 決定修剪時機、消毒方法、搶救步驟\n• 確保整個行動有方向'
              },
              {
                type: 'text',
                content: '**獨立分工(並聯)**:\n• 村民準備茶點(後勤支援)\n• 阿公守護陪伴(精神支持)\n• 廟公祈福(信仰力量)\n• 政府提供資源(行政支援)\n• 各自發揮所長,互不干涉'
              },
              {
                type: 'text',
                content: '**靈活應變(混合)**:\n• 當某個方法失效(如土壤消毒不了了之),可以換其他方法\n• 當資源不足(政府支援有限),村民自籌經費\n• 有總體計畫,也有個別彈性'
              },
              {
                type: 'text',
                content: '這告訴我們:無論是電路、政治體制,還是社區協作,**混合模式**往往是最實用的——既有統一的方向,又有獨立的空間;既講求效率,又保持彈性。'
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

    // ========== 今日回顧 ==========
    {
      id: 'w9d3-review',
      name: '今日回顧',
      icon: '🌟',
      lesson: {
        title: '第三天學習回顧',
        sections: [
          {
            title: '今天我們學到了什麼?',
            blocks: [
              {
                type: 'text',
                content: '**社會**:公民參與的多種方式——投票、連署、陳情、公投、社會運動;不同政治制度的比較'
              },
              {
                type: 'text',
                content: '**數學**:圖表如何「說謊」——Y 軸陷阱、樣本數陷阱、選擇性呈現、誇大標題'
              },
              {
                type: 'text',
                content: '**科學**:混合電路——結合串聯與並聯,兼顧統一控制與獨立運作'
              }
            ]
          },
          {
            title: '今天的核心概念',
            blocks: [
              {
                type: 'text',
                content: '**公民參與不只是投票**,更是日常生活中的每一次選擇——就像村民選擇不再使用除草劑,用行動守護老樹。'
              },
              {
                type: 'text',
                content: '學會批判性思考很重要:不要被圖表的第一印象誤導,就像村民不盲目相信「樹癌」的診斷,而是尋求更專業的意見。'
              },
              {
                type: 'text',
                content: '無論是電路、政治體制,還是社區協作,**混合模式**往往是最實用的——有總體規劃,也有個別彈性;有統一方向,也有獨立空間。'
              }
            ]
          },
          {
            title: '明天預告',
            blocks: [
              {
                type: 'text',
                content: '明天是**動筆日**,我們要整合這三天學到的知識!'
              },
              {
                type: 'text',
                content: '我們將:\n• 練習製作與解讀圓形圖和折線圖\n• 設計家庭照明電路\n• 開始寫論說文:「國中小學生使用智慧型手機——利大於弊,還是弊大於利?」'
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