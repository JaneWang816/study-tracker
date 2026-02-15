// src/data/weeks/week07/day5.js
// W7 Day5：鐵道的詩意

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 輕量複習題(綜合)
// ==========================================
const reviewQuestions = [
  {
    type: 'options',
    question: '台灣第一條縱貫鐵路在哪個時代完成?',
    options: ['日治時代', '清朝', '戰後', '荷蘭時代'],
    answer: 0,
    displayAnswer: '台灣縱貫鐵路在日治時代完成,1908年全線通車,從基隆連接到高雄,是台灣交通史上的重要里程碑。'
  },
  {
    type: 'options',
    question: '速率公式 v = d ÷ t,其中 d 代表什麼?',
    options: ['距離', '速率', '時間', '方向'],
    answer: 0,
    displayAnswer: 'v = d ÷ t 中,v代表速率,d代表距離,t代表時間。速率 = 距離 ÷ 時間。'
  },
  {
    type: 'options',
    question: '火車需要很長距離才能停下來,主要是因為?',
    options: ['火車質量大,慣性大', '煞車系統太舊', '鐵軌太光滑', '司機反應慢'],
    answer: 0,
    displayAnswer: '火車質量非常大,根據牛頓第一定律,質量越大慣性越大,要改變運動狀態需要更長的時間和距離,所以煞車距離很長。'
  },
  {
    type: 'options',
    question: '「作用力與反作用力」的特點是?',
    options: [
      '大小相等,方向相反',
      '大小相等,方向相同',
      '大小不同,方向相反',
      '只存在於靜止狀態'
    ],
    answer: 0,
    displayAnswer: '牛頓第三運動定律:作用力與反作用力大小相等、方向相反,且作用在不同物體上。這是自然界的基本規律。'
  },
  {
    type: 'options',
    question: '72 km/h 換算成 m/s 是多少?',
    options: ['20 m/s', '10 m/s', '30 m/s', '40 m/s'],
    answer: 0,
    displayAnswer: '72 km/h ÷ 3.6 = 20 m/s\n提示:km/h ÷ 3.6 = m/s'
  },
  {
    type: 'options',
    question: 'YouBike 在大眾運輸系統中的作用是?',
    options: [
      '補足捷運或公車到目的地的「最後一哩路」',
      '取代高鐵做長途旅行',
      '只在觀光景點使用',
      '速度比捷運更快'
    ],
    answer: 0,
    displayAnswer: 'YouBike是公共自行車共享系統,主要用於短程接駁,解決從捷運站或公車站到最終目的地的「最後一哩路」問題。'
  },
  {
    type: 'options',
    question: '劉克襄說「鐵道不是一把尺,而是圓規」,圓規比喻的是?',
    options: [
      '以車站為中心,向四周步行探索',
      '火車可以畫圓形路線',
      '火車速度像圓周率一樣固定',
      '買一張環島火車票'
    ],
    answer: 0,
    displayAnswer: '劉克襄用圓規比喻:不要把鐵道只當作從A點到B點的直線工具,而應該以每個車站為中心,向周圍延伸探索,畫出屬於自己的生活圓圈。'
  },
  {
    type: 'options',
    question: '台灣高鐵最高時速大約是多少?',
    options: ['300 km/h', '150 km/h', '200 km/h', '250 km/h'],
    answer: 0,
    displayAnswer: '台灣高鐵最高營運時速約300公里,是台灣最快的陸上交通工具,將台北到高雄的交通時間縮短到約90分鐘。'
  }
]

const generateReviewQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(reviewQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateReviewQuestion }

// ── Day 資料 ──────────────────────────────────────
const day5 = {
  id: 'day5',
  name: '第五天',
  icon: '🎵',
  color: '#0369a1',
  title: '鐵道的詩意',
  units: [
    {
      id: 'w7d5-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '劉克襄：永遠長不大',
        sections: [
          {
            title: '本週文本最終段落',
            blocks: [
              {
                type: 'quote',
                content: '我像小孩子在野地探險，活蹦亂跳，消耗不完活力。自以為有一個秘密基地，自己是首領。在鐵道的世界裡，我永遠長不大，也不想長大。持續握著11元的車票。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '這是整篇文章最後一段。劉克襄用「永遠長不大」作結，呼應了開頭五歲在水田旁看火車的記憶。\n\n他不是說自己幼稚，而是說：對這片土地的好奇心和熱情，他要一直保持下去。\n\n今天，我們要用音樂感受鐵道的不同情緒，然後去搭一段真實的火車，把這份感受帶回來。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d5-music1',
      name: '音樂｜陳明章〈追火車〉',
      icon: '🎵',
      lesson: {
        title: '追火車——鄉村台灣的速度',
        sections: [
          {
            title: '關於這首歌',
            blocks: [
              {
                type: 'text',
                content: '陳明章是台灣最重要的民謠音樂人之一，擅長用月琴和吉他彈奏具有台灣風土味道的音樂。\n\n〈追火車〉描繪的是鄉村生活中，小孩子追著火車跑的畫面。旋律緩慢、悠揚，帶著泥土的氣息，就像劉克襄筆下的「11元鐵道旅行」。\n\n這首歌用台語演唱，充滿花東縱谷的空曠感——正是11元區間車行駛的地方。'
              },
              {
                type: 'video',
                videoId: 'ZGqxBkQ9O_Q',
                title: '陳明章〈追火車〉'
              },
              {
                type: 'text',
                content: '🎧 聆聽時思考：\n\n• 這首歌讓你想到什麼樣的風景？\n• 旋律是快的還是慢的？這和「速率」有什麼關係？\n• 劉克襄說他最愛「慢」的旅行，這首歌有沒有那種感覺？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d5-music2',
      name: '音樂｜林強〈向前行〉',
      icon: '🎶',
      lesson: {
        title: '向前行——城市台灣的速度',
        sections: [
          {
            title: '關於這首歌',
            blocks: [
              {
                type: 'text',
                content: '1990年，林強發行了〈向前行〉，這首台語歌一出版就轟動全台灣。\n\n歌詞描述一個年輕人帶著夢想搭火車「北上打拚」——離開家鄉、前往台北尋找機會。那個年代，許多台灣人的人生故事就是這樣開始的：一張往台北的火車票，一個行李袋，還有滿滿的期待。\n\n這首歌後來成為台語流行音樂的里程碑，也是那個時代台灣社會快速現代化的縮影。'
              },
              {
                type: 'video',
                videoId: 'drCqSGJDJHc',
                title: '林強〈向前行〉'
              },
              {
                type: 'text',
                content: '🎧 兩首歌的對比：\n\n| | 陳明章〈追火車〉 | 林強〈向前行〉 |\n|---|---|---|\n| 速度感 | 慢、悠閒 | 快、充滿能量 |\n| 場景 | 鄉村、花東 | 城市、台北 |\n| 情緒 | 懷念、土地 | 期待、夢想 |\n| 時代感 | 傳統農村 | 現代都市 |\n\n兩首歌加在一起，就像台灣交通史一樣：從慢慢的區間車，到快速的城際列車。從留在土地，到向前衝。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d5-trip',
      name: '實地活動｜搭火車去',
      icon: '🚂',
      lesson: {
        title: '今天，我們去搭火車',
        sections: [
          {
            title: '出發前的準備',
            blocks: [
              {
                type: 'text',
                content: '劉克襄說「搭火車是快樂而知足的旅行」。今天，你要親身體驗這句話。\n\n出發前，請準備好：\n\n① 帶著你的記敘文草稿（或在腦海中準備好故事）\n② 觀察的任務：在車廂裡找到五個「細節」——可以是聲音、顏色、形狀、氣味、或是一個人\n③ 計算任務：看車廂內的路線圖，選兩站，估算行車時間和速率\n④ 帶一本小筆記本，隨時寫下觀察'
              },
              {
                type: 'text',
                content: '劉克襄的圓規理論：\n\n下車後，以車站為圓心，用步行「畫一個圓」。不用走很遠，走15分鐘就好。看看這個站附近有什麼——小吃、廟宇、公園、老房子？\n\n這就是劉克襄說的「鐵道旅行，大抵是以這種節奏存在的。常以車站為中心，在周遭不斷地漫行、散步。不論大站小站、喧嘩寂寥，我好奇地尋訪市井鄉野。」'
              },
              {
                type: 'text',
                content: '回來後的任務：\n\n把今天觀察到的細節，補充進你的記敘文裡。或者，如果今天的體驗更有感覺，重新寫一篇。\n\n記住劉克襄的方法：從一個「小細節」開始，帶出更大的感受。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d5-review',
      name: '本週回顧',
      icon: '🌟',
      lesson: {
        title: 'W7：能量與移動——本週學了什麼？',
        sections: [
          {
            title: '本週知識地圖',
            blocks: [
              {
                type: 'text',
                content: '🗺️ 社會地理：\n台灣交通從1891年第一條鐵路，到1908年縱貫鐵路、1978年高速公路、2007年高鐵，每一次革命都讓台灣「變小」。現代大眾運輸系統（台鐵、高鐵、捷運、公車、YouBike）形成一個完整網路，每天載運數百萬人次。'
              },
              {
                type: 'text',
                content: '📐 數學：\n速率三量互求（v = d ÷ t）；單位換算（km/h ↔ m/s，記住 36 km/h = 10 m/s）；情境應用（相遇問題用速率相加；平均速率用總距離÷總時間）。'
              },
              {
                type: 'text',
                content: '🔬 科學：\n慣性（物體保持原運動狀態）；摩擦力（阻礙運動，方向相反）；作用力與反作用力（等大、反向、作用在不同物體）。三個概念共同解釋了火車「為什麼動」和「為什麼停得慢」。'
              },
              {
                type: 'text',
                content: '✍️ 語文：\n記敘文「我的火車旅行」——用四段結構說一個真實的旅行故事，從小細節帶出大感受，這是劉克襄教我們的。'
              }
            ]
          },
          {
            title: '本週核心連結',
            blocks: [
              {
                type: 'quote',
                content: '搭火車是安全而緩慢的旅行。我把自己交給一輛駛向遠方的列車，彷彿把自己的一輩子交給另一個人，腦海卻更從容地，面對世界。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '這週從劉克襄的11元車票出發，學到了速率的計算、慣性摩擦力的科學、台灣交通的百年歷史，還有大眾運輸對環境的意義。\n\n最重要的，是他的一個提問：速度越快，旅行就越好嗎？\n\n下週（W8），我們要進入「經濟與連結」：台灣戰後的經濟奇蹟、百分比的計算，以及能源轉換的科學。從移動的速度，到經濟的成長速度。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateReviewQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    }
  ]
}

export default day5
