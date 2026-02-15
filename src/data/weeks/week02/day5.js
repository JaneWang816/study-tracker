// src/data/weeks/week02/day5.js
// W2 Day 5：大地的聲音（藝術收尾）

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// W2 詞彙總複習題庫
// ==========================================
const vocabQuestions = [
  // 地理詞彙
  {
    type: 'options',
    question: '「沖積平原」是指?',
    options: ['河流搬運泥沙長期堆積形成的平坦地形', '海浪侵蝕海岸形成的平地', '火山爆發後熔岩冷卻形成的平面', '人工開墾山地形成的梯田'],
    answer: 0,
    displayAnswer: '河流搬運泥沙長期堆積形成的平坦地形'
  },
  {
    type: 'options',
    question: '「縱谷」是指什麼樣的地形?',
    options: ['夾在兩條山脈之間、南北延伸的狹長平坦谷地', '山頂上的寬闊平台', '河流沖刷形成的深V型峽谷', '火山口積水形成的湖泊'],
    answer: 0,
    displayAnswer: '夾在兩條山脈之間、南北延伸的狹長平坦谷地'
  },
  // 數學詞彙
  {
    type: 'options',
    question: '「互質」是指兩個數的關係為何?',
    options: ['最大公因數為 1,除了 1 以外沒有其他公因數', '兩個數都是質數', '兩個數相乘等於 1', '兩個數的差等於 1'],
    answer: 0,
    displayAnswer: '最大公因數為 1,除了 1 以外沒有其他公因數'
  },
  {
    type: 'options',
    question: '質因數分解中,「質因數」是指?',
    options: ['分解後得到的每一個質數因數', '最大的那個因數', '分解後得到的所有偶數', '只有兩位數的因數'],
    answer: 0,
    displayAnswer: '分解後得到的每一個質數因數'
  },
  // 科學詞彙
  {
    type: 'options',
    question: '「光合作用」的產物是什麼?',
    options: ['葡萄糖(有機養分)和氧氣', '二氧化碳和水', '氮氣和礦物質', '葉綠素和陽光'],
    answer: 0,
    displayAnswer: '葡萄糖(有機養分)和氧氣'
  },
  {
    type: 'options',
    question: '植物「導管」的功能是?',
    options: ['從根部向上運輸水分和礦物質', '從葉部向下運輸有機養分', '交換氣體(呼吸作用)', '儲存多餘的糖分'],
    answer: 0,
    displayAnswer: '從根部向上運輸水分和礦物質'
  },
  // 文化詞彙
  {
    type: 'options',
    question: '「TEK」代表什麼?',
    options: ['傳統生態知識(Traditional Ecological Knowledge)', '台灣環境法規', '特有種動植物調查', '現代科技農業技術'],
    answer: 0,
    displayAnswer: '傳統生態知識(Traditional Ecological Knowledge)'
  },
  {
    type: 'options',
    question: '「活化石」銀杏被稱為「活化石」的原因是?',
    options: ['它的外形與億萬年前的化石幾乎相同,幾乎沒有演化', '它的葉子會變成化石', '它是從化石中復原的物種', '它的壽命可達一億年'],
    answer: 0,
    displayAnswer: '它的外形與億萬年前的化石幾乎相同,幾乎沒有演化'
  },
  // 跨科整合
  {
    type: 'options',
    question: '台灣的山脈地形影響了哪些方面?(選出最完整的答案)',
    options: [
      '氣候、生物分布、原住民族分布、河流流向,幾乎影響了所有自然和人文現象',
      '只影響了農業和交通',
      '只影響了原住民族的分布',
      '只影響了氣候和降雨'
    ],
    answer: 0,
    displayAnswer: '氣候、生物分布、原住民族分布、河流流向,幾乎影響了所有自然和人文現象'
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

// ==========================================
// 閱讀理解:鄒族(最終章)
// ==========================================
const readingQuestions = [
  {
    type: 'options',
    question: '鄒族神話中,洪水退去後,蛇幫助族人做了什麼事?',
    options: ['引導大家走下山坡,將土岩挖掘成為溪流', '帶領族人找到新的獵場', '教族人如何種植農作物', '守護部落不讓敵人入侵'],
    answer: 0,
    displayAnswer: '引導大家走下山坡,將土岩挖掘成為溪流'
  },
  {
    type: 'options',
    question: '根據整篇文章,台灣各原住民族的蛇故事有什麼共通之處?',
    options: ['蛇都與族群的起源、土地和自然規律密切相關', '所有族群都害怕蛇', '蛇只出現在祭典和儀式中', '蛇的故事只有排灣族和魯凱族才有'],
    answer: 0,
    displayAnswer: '蛇都與族群的起源、土地和自然規律密切相關'
  },
  {
    type: 'options',
    question: '文章說「人類透過這些神話、傳說故事,不斷尋求與蛇和平共存的原則」,這句話的意思是?',
    options: ['神話故事反映了祖先如何與自然環境建立和諧的相處之道', '原住民族的祖先不怕蛇,把蛇當寵物', '所有的神話都是假的,只是娛樂用途', '蛇真的會說話,可以跟人類溝通'],
    answer: 0,
    displayAnswer: '神話故事反映了祖先如何與自然環境建立和諧的相處之道'
  },
  {
    type: 'options',
    question: '這篇文章最主要想傳達的核心訊息是什麼?',
    options: [
      '台灣原住民族透過豐富多彩的蛇神話,展現了與大自然共存的智慧和文化深度',
      '百步蛇是台灣最危險的蛇,要小心避開',
      '原住民族的故事都是迷信,沒有科學根據',
      '只有排灣族和魯凱族才有值得研究的文化'
    ],
    answer: 0,
    displayAnswer: '台灣原住民族透過豐富多彩的蛇神話,展現了與大自然共存的智慧和文化深度'
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

export { generateVocabQuestion, generateReadingQuestion }

// ==========================================
// Day 5 主體
// ==========================================
const day5 = {
  id: 'day5',
  name: '第5天',
  icon: '🎨',
  color: '#6A1B9A',
  title: '大地的聲音',

  units: [
    {
      id: 'w2d5-reading',
      name: '最終章閱讀',
      icon: '📖',
      lesson: {
        title: '臺灣原住民族與蛇：鄒族的故事與總結',
        sections: [
          {
            title: '今日閱讀：鄒族——蛇引眾開河',
            blocks: [
              {
                type: 'text',
                content: '古時候曾有一次洪水災難，而後，洪水消退，山頭露出，避難的人們遂走下玉山，請動物協助挖新的河流；大蛇也現身，引導大家走下蜿蜒的山坡，將土岩挖掘成為溪流。'
              },
              {
                type: 'text',
                content: '就這樣，鄒族的神話用一條大蛇，記錄了洪水退去後，河流重新形成的故事。'
              }
            ]
          },
          {
            title: '本週文章總結',
            blocks: [
              {
                type: 'text',
                content: '在臺灣原住民族文化當中，尚流傳著許多關於蛇的傳說故事，如今，這些保留了生存寓意及濃厚族人色彩的故事、圖騰，透過藝術家與文學家的巧手，衍生為手工藝品、服飾、文學、設計等文化創意產業的驚艷色彩，傳承這文化的瑰寶，不僅是臺灣的重要文化資產，也給予代代人們無數靈感及啟發。'
              },
              {
                type: 'text',
                content: '人類透過這些神話、傳說故事，不斷尋求與蛇和平共存的原則。',
                author: '《臺灣原住民族與蛇》，《原住民族》雜誌 580 期，2013'
              },
              {
                type: 'text',
                content: '這句話不只說的是蛇——說的是人與大自然之間，永恆的對話。'
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
      id: 'w2d5-art',
      name: '藝術欣賞',
      icon: '🎵',
      lesson: {
        title: '大地的聲音：音樂、藝術與電影',
        sections: [
          {
            title: '🎵 音樂：桑布伊〈南方〉',
            blocks: [
              {
                type: 'text',
                content: '桑布伊（Sangpuy）是台東卑南族歌手，他的音樂以深沉的嗓音和卑南族語演唱，帶著濃厚的土地氣息。〈南方〉這首歌描述他對故鄉台東的思念與連結，歌詞在卑南族語和中文之間交織，就像這週神話故事一樣——古老的聲音，說著永遠的事。'
              },
              {
                type: 'text',
                content: '🎧 欣賞建議：閉上眼睛聽，感受那個深沉的「南方」——台東、大武山、太平洋。聽的時候想想：這聲音讓你想到這週讀到的哪個故事？'
              }
            ]
          },
          {
            title: '🎨 視覺藝術：排灣族琉璃珠與魯凱族蛇紋陶壺',
            blocks: [
              {
                type: 'text',
                content: '排灣族的琉璃珠是族群中最珍貴的傳家寶，每一顆都有名字和故事。珠子上的圖案包含百步蛇眼紋（保護)、太陽紋（光明）、人形紋（族人）等，是一套完整的視覺語言。'
              },
              {
                type: 'text',
                content: '魯凱族的蛇紋陶壺則以百步蛇圖騰為主要裝飾，陶壺是族群婚禮中最重要的禮物，蛇紋象徵祖靈的祝福與庇護。'
              },
              {
                type: 'text',
                content: '🔍 觀察問題：排灣族琉璃珠和魯凱族陶壺上的蛇紋，使用了哪些幾何形狀？你看到了菱形、三角形、曲線，還是其他形狀？這些形狀是隨機的，還是有規律地重複排列？'
              }
            ]
          },
          {
            title: '🎬 電影：《賽德克‧巴萊》（2011）',
            blocks: [
              {
                type: 'text',
                content: '《賽德克‧巴萊》是台灣導演魏德聖拍攝的史詩電影，描述 1930 年霧社事件——賽德克族頭目莫那‧魯道率領族人抵抗日本殖民統治的真實歷史。'
              },
              {
                type: 'text',
                content: '電影的片名「賽德克‧巴萊」在賽德克族語中意思是「真正的人」——一個遵守祖靈規範、守護土地與尊嚴的人。電影以賽德克族的彩虹橋信仰為核心：勇士死後靈魂能走過彩虹橋，回到祖靈的懷抱。'
              },
              {
                type: 'text',
                content: '📌 連結：這週讀了泰雅族的彩虹橋傳說，賽德克族（原屬泰雅族系統）同樣有這個信仰，彩虹橋是他們文化中最神聖的精神象徵。'
              },
              {
                type: 'text',
                content: '🎬 欣賞建議：可以找電影的預告片或片段觀看。注意台灣原始森林的地形，想想這週學的台灣山脈地形知識——電影裡發生的故事，就在中央山脈的懷抱裡。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w2d5-vocab',
      name: 'W2 詞彙複習',
      icon: '📝',
      lesson: {
        title: '第二週詞彙與概念總整理',
        sections: [
          {
            title: '本週重要詞彙',
            blocks: [
              {
                type: 'text',
                content: '【地理】\n・東高西低：台灣地形的基本特徵\n・縱谷：夾在兩山脈間的狹長谷地（花東縱谷）\n・沖積平原：河流帶來泥沙堆積形成的平原\n・斷崖：山脈直接面海形成的陡峭海岸'
              },
              {
                type: 'text',
                content: '【數學】\n・公因數：兩個數共同的因數\n・最大公因數（GCF）：公因數中最大的\n・公倍數：兩個數共同的倍數\n・最小公倍數（LCM）：公倍數中最小的\n・質數：只有 1 和本身兩個因數的自然數\n・質因數分解：把合數寫成質數乘積的形式'
              },
              {
                type: 'text',
                content: '【科學】\n・光合作用：植物利用陽光將 CO₂ 和水合成葡萄糖，釋放 O₂\n・導管 / 韌皮部：植物莖內的兩種運輸管道\n・環境適應：生物演化出適應當地環境的形態\n・化石：古代生物被保存在岩層中的遺跡'
              },
              {
                type: 'text',
                content: '【文化】\n・TEK（傳統生態知識）：原住民族祖先對自然環境的智慧\n・百步蛇：排灣族、魯凱族的祖靈象徵\n・蟒甲：原住民族語的「獨木舟」\n・賽德克・巴萊：「真正的人」'
              }
            ]
          },
          {
            title: 'W2 收尾反思',
            blocks: [
              {
                type: 'text',
                content: '這週的核心概念是「規律」。我們在地形中看到規律（山脈由西到東），在數字中找到規律（公因數、公倍數），在植物中發現規律（生長構造、環境適應），也在神話中感受規律（每個族群都透過蛇的故事尋求與自然共存的規則）。'
              },
              {
                type: 'text',
                content: '人類透過這些神話、傳說故事，不斷尋求與蛇和平共存的原則。',
                author: '《臺灣原住民族與蛇》'
              },
              {
                type: 'text',
                content: '規律，是人類理解這個世界的方式——無論是數學的公式，還是神話的故事。🔮 下週預告：W3「水文與光陰」——台灣的河流、月相變化，以及比與比值。'
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
    }
  ]
}

export default day5
