// src/data/weeks/week07/day3.js
// W7 Day3：快與慢的學問

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:大眾運輸系統
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '下列哪一項不屬於「大眾運輸系統」?',
    options: ['私家車', '台鐵', '捷運', '公車'],
    answer: 0,
    displayAnswer: '私家車是個人交通工具,不屬於大眾運輸系統。大眾運輸系統包括台鐵、捷運、公車等公共交通工具,特點是一次載運多人。'
  },
  {
    type: 'options',
    question: '台北捷運大約是哪一年通車的?',
    options: ['1996年', '1986年', '1990年', '2001年'],
    answer: 0,
    displayAnswer: '台北捷運在1996年3月28日正式通車(木柵線),是台灣第一個捷運系統,大幅改善了台北都會區的交通。'
  },
  {
    type: 'options',
    question: '台灣高鐵主要行駛在台灣的哪一側?',
    options: ['西部(西部走廊)', '東部(花東縱谷)', '南部(屏東)', '北部(基隆)'],
    answer: 0,
    displayAnswer: '台灣高鐵主要行駛在台灣西部走廊,從台北到高雄,連接台灣人口最密集的西部平原地區。'
  },
  {
    type: 'options',
    question: 'YouBike(微笑單車)是哪種大眾運輸工具?',
    options: ['公共自行車共享系統', '電動機車', '迷你公車', '電動滑板車'],
    answer: 0,
    displayAnswer: 'YouBike是台灣的公共自行車共享系統,提供短程接駁服務,補充捷運和公車的不足,是「最後一哩路」的解決方案。'
  },
  {
    type: 'options',
    question: '大眾運輸系統對環境最大的好處是什麼?',
    options: [
      '一次載運多人,減少每人平均的碳排放',
      '速度比私家車快',
      '比較便宜',
      '不需要司機'
    ],
    answer: 0,
    displayAnswer: '大眾運輸系統一次可以載運多人,平均每個人的碳排放和能源消耗都比開私家車低很多,是減少空氣污染和溫室氣體的重要方式。'
  },
  {
    type: 'options',
    question: '台灣哪個城市目前有捷運系統(2020年代)?',
    options: ['台北、高雄、桃園', '台北、台中、台南', '台北、基隆、花蓮', '高雄、台南、嘉義'],
    answer: 0,
    displayAnswer: '截至2020年代,台灣有捷運系統的城市包括台北(1996年)、高雄(2008年)、桃園(2017年)。台中捷運也在2021年通車。'
  },
  {
    type: 'options',
    question: '搭火車旅行,劉克襄說「下了車,我幾乎都用走路」,這說明了什麼?',
    options: [
      '他把火車當起點,用步行深度探索當地',
      '他買不起計程車',
      '那個地方沒有公車',
      '走路比較快'
    ],
    answer: 0,
    displayAnswer: '劉克襄提倡以車站為起點,用雙腳探索周圍環境,這是一種慢遊、深度旅行的方式,可以發現更多在地風景和文化。'
  },
  {
    type: 'options',
    question: '相比私人汽機車,大眾運輸的特點是?',
    options: [
      '路線固定,班次有限,但載客量大',
      '路線靈活,隨時出發,但費用高',
      '速度最快,但票價貴',
      '不受天氣影響,可以24小時行駛'
    ],
    answer: 0,
    displayAnswer: '大眾運輸的特點是路線固定、班次有限,但可以一次載運大量乘客,這讓它在效率和環保方面優於私人交通工具。'
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
// 數學:速率情境應用
// ==========================================
const mathQuestions = [
  // 平均速率(往返)
  {
    type: 'options',
    question: '去程 120 公里時速 60 km/h,回程同樣 120 公里時速 80 km/h,全程平均速率約是多少 km/h?',
    options: ['69', '70', '79', '59'],
    answer: 0,
    displayAnswer: '去程時間 = 120 ÷ 60 = 2小時\n回程時間 = 120 ÷ 80 = 1.5小時\n總距離 = 240公里,總時間 = 3.5小時\n平均速率 = 240 ÷ 3.5 ≈ 69 km/h\n(注意:不能直接平均兩個速率!)'
  },
  {
    type: 'options',
    question: '去程 180 公里時速 60 km/h,回程同樣 180 公里時速 90 km/h,全程平均速率約是多少 km/h?',
    options: ['72', '75', '82', '62'],
    answer: 0,
    displayAnswer: '去程時間 = 180 ÷ 60 = 3小時\n回程時間 = 180 ÷ 90 = 2小時\n總距離 = 360公里,總時間 = 5小時\n平均速率 = 360 ÷ 5 = 72 km/h'
  },
  // 相遇問題
  {
    type: 'options',
    question: '兩列火車從兩端相向出發,A車時速 60 km/h,B車時速 80 km/h,出發 2 小時後相遇,兩站距離是多少公里?',
    options: ['280', '120', '160', '330'],
    answer: 0,
    displayAnswer: '相遇時間 = 2小時\nA車走的距離 = 60 × 2 = 120公里\nB車走的距離 = 80 × 2 = 160公里\n總距離 = 120 + 160 = 280公里\n或:總距離 = (60 + 80) × 2 = 280公里'
  },
  {
    type: 'options',
    question: '兩列火車從兩端相向出發,A車時速 80 km/h,B車時速 100 km/h,出發 3 小時後相遇,兩站距離是多少公里?',
    options: ['540', '240', '300', '590'],
    answer: 0,
    displayAnswer: 'A車走的距離 = 80 × 3 = 240公里\nB車走的距離 = 100 × 3 = 300公里\n總距離 = 240 + 300 = 540公里'
  },
  {
    type: 'options',
    question: '兩列火車從兩端相向出發,A車時速 100 km/h,B車時速 120 km/h,出發 1 小時後相遇,兩站距離是多少公里?',
    options: ['220', '100', '120', '270'],
    answer: 0,
    displayAnswer: 'A車走的距離 = 100 × 1 = 100公里\nB車走的距離 = 120 × 1 = 120公里\n總距離 = 100 + 120 = 220公里'
  },
  // 時間差問題
  {
    type: 'options',
    question: '捷運站到目的地 160 公里,捷運時速 80 km/h,需要幾小時到達?',
    options: ['2', '3', '1', '1.5'],
    answer: 0,
    displayAnswer: '時間 = 距離 ÷ 速率 = 160 ÷ 80 = 2小時'
  },
  {
    type: 'options',
    question: '捷運站到目的地 240 公里,捷運時速 120 km/h,需要幾小時到達?',
    options: ['2', '3', '1', '4'],
    answer: 0,
    displayAnswer: '時間 = 距離 ÷ 速率 = 240 ÷ 120 = 2小時'
  },
  {
    type: 'options',
    question: '捷運站到目的地 300 公里,捷運時速 100 km/h,需要幾小時到達?',
    options: ['3', '4', '2', '2.5'],
    answer: 0,
    displayAnswer: '時間 = 距離 ÷ 速率 = 300 ÷ 100 = 3小時'
  },
  // YouBike距離計算
  {
    type: 'options',
    question: '騎 YouBike 時速約 10 km/h,騎了 15 分鐘(0.25 小時),大約騎了幾公里?',
    options: ['2.5', '4.5', '0.5', '150'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 10 × 0.25 = 2.5公里'
  },
  {
    type: 'options',
    question: '騎 YouBike 時速約 12 km/h,騎了 30 分鐘(0.5 小時),大約騎了幾公里?',
    options: ['6', '8', '4', '360'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 12 × 0.5 = 6公里'
  },
  {
    type: 'options',
    question: '騎 YouBike 時速約 14 km/h,騎了 45 分鐘(0.75 小時),大約騎了幾公里?',
    options: ['10.5', '12.5', '8.5', '630'],
    answer: 0,
    displayAnswer: '距離 = 速率 × 時間 = 14 × 0.75 = 10.5公里'
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
// 科學:作用力與反作用力
// ==========================================
const scienceQuestions = [
  {
    type: 'options',
    question: '「作用力與反作用力」的定律,下列哪個說法正確?',
    options: [
      '作用力與反作用力大小相等、方向相反',
      '作用力大,反作用力小',
      '只有靜止的物體才有反作用力',
      '反作用力的方向和作用力相同'
    ],
    answer: 0,
    displayAnswer: '牛頓第三運動定律:作用力與反作用力大小相等、方向相反,且作用在不同物體上。例如:你推牆壁,牆壁也以相同大小的力推你。'
  },
  {
    type: 'options',
    question: '火箭發射時,噴出火焰向下,火箭向上飛,這是什麼原理?',
    options: ['作用力與反作用力', '重力原理', '慣性', '摩擦力'],
    answer: 0,
    displayAnswer: '火箭向下噴氣(作用力),氣體對火箭產生向上的推力(反作用力),讓火箭升空。這是作用力與反作用力的典型應用。'
  },
  {
    type: 'options',
    question: '游泳時,手向後划水,身體向前進,這是什麼原理?',
    options: ['作用力與反作用力', '浮力', '重力', '摩擦力'],
    answer: 0,
    displayAnswer: '手向後推水(作用力),水同時向前推手和身體(反作用力),讓身體前進。這也是作用力與反作用力的應用。'
  },
  {
    type: 'options',
    question: '你用力推牆壁,卻動不了,這是因為?',
    options: [
      '牆壁的反作用力等於你的推力,兩力平衡',
      '牆壁沒有反作用力',
      '你的力氣不夠大',
      '牆壁比你重'
    ],
    answer: 0,
    displayAnswer: '你推牆壁的力和牆壁推你的力大小相等、方向相反,兩力平衡,所以你動不了。這說明作用力與反作用力總是成對出現。'
  },
  {
    type: 'options',
    question: '火車啟動時,向前推動,乘客身體向後傾,這是什麼現象?',
    options: [
      '慣性(身體傾向於保持靜止)',
      '作用力與反作用力',
      '摩擦力',
      '重力'
    ],
    answer: 0,
    displayAnswer: '這是慣性現象,不是作用力與反作用力。火車啟動時,乘客的身體因慣性想保持原來的靜止狀態,所以向後傾。'
  },
  {
    type: 'options',
    question: '下列哪個例子最能說明作用力與反作用力?',
    options: [
      '划船時,槳向後撥水,船向前進',
      '蘋果從樹上掉下來',
      '騎腳踏車爬坡越來越慢',
      '雨傘阻擋雨水'
    ],
    answer: 0,
    displayAnswer: '划船時,槳向後推水(作用力),水向前推船(反作用力),是作用力與反作用力的典型例子。蘋果掉下來是重力,爬坡變慢是摩擦力和重力。'
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
  icon: '🚌',
  color: '#0369a1',
  title: '快與慢的學問',
  units: [
    {
      id: 'w7d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '劉克襄的圓規理論',
        sections: [
          {
            title: '今日文本段落',
            blocks: [
              {
                type: 'quote',
                content: '鐵道不是一把尺，而是圓規。車站為針尖腳，我是那活動的鉛筆腳。慢吞地畫出半徑或圓圈，丈量著經過的大城大鎮小村小落。',
                author: '劉克襄〈十一元的鐵道旅行〉'
              },
              {
                type: 'text',
                content: '這個比喻太精彩了——火車把你送到一個車站（圓規的針尖），然後你用步行的方式向四周探索（活動的鉛筆腳），畫出一個屬於你的生活圓。\n\n🤔 今日問題：你家附近有沒有捷運站或火車站？如果以它為中心，步行15分鐘能走到哪些地方？'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w7d3-social',
      name: '社會｜大眾運輸系統',
      icon: '🗺️',
      lesson: {
        title: '從火車到YouBike：台灣的交通網',
        sections: [
          {
            title: '什麼是大眾運輸？',
            blocks: [
              {
                type: 'text',
                content: '大眾運輸（Mass Transit）是指可以同時載運大量旅客的交通工具，通常有固定的路線和班次，供所有人購票使用。\n\n台灣的大眾運輸系統包括：\n\n🚂 台鐵：連結全島各城市\n🚄 高鐵：西部走廊快速幹線\n🚇 捷運：台北、桃園、高雄的城市快速軌道\n🚌 公車：市區和縣市間的路線\n🚲 YouBike：城市中的公共自行車共享'
              }
            ]
          },
          {
            title: '捷運：城市的動脈',
            blocks: [
              {
                type: 'text',
                content: '台北捷運（MRT）在1996年通車，是台灣第一條捷運系統。目前台北捷運共有6條線路，超過130個站，每天載運約200萬人次。\n\n捷運的特點：\n• 路線固定，完全在地面下或高架上行駛\n• 不受交通堵塞影響，準點率高\n• 班次密集（尖峰時段約3–4分鐘一班）\n• 使用悠遊卡，可以轉乘公車享優惠\n\n高雄捷運（KRTC）在2008年通車；桃園捷運（機場捷運）在2017年通車，直接連接機場與台北市。'
              }
            ]
          },
          {
            title: 'YouBike：最後一哩路',
            blocks: [
              {
                type: 'text',
                content: 'YouBike（微笑單車）是台北市和多個縣市提供的公共自行車共享系統。2012年在台北開始營運，現在已擴展到全台超過20個縣市。\n\n為什麼叫「最後一哩路」？\n\n大眾運輸通常只到「站」，但你的目的地可能在站附近幾百公尺到一兩公里處。YouBike填補了這個空白——下了捷運或公車，再騎15分鐘YouBike，就能到家。\n\n這種「轉乘」的概念，讓整個大眾運輸網路更完整，也讓更多人願意放棄開車改搭大眾運輸。'
              },
              {
                type: 'text',
                content: '🌱 大眾運輸的環保意義\n\n劉克襄說：「相對於汽機車的隨意來去，一二人成行，消耗大量的石油，（火車）反而變成較為環保的交通工具。」\n\n統計數字：\n• 一輛汽車平均載1.2人，每人公里碳排約165克\n• 捷運每人公里碳排約30克\n• 腳踏車的碳排幾乎是零\n\n台灣有越來越多人選擇「捷運+YouBike」的通勤方式，這不只省錢，也讓城市空氣更乾淨。'
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
      id: 'w7d3-math',
      name: '數學｜速率情境應用',
      icon: '📐',
      lesson: {
        title: '速率的進階應用',
        sections: [
          {
            title: '相遇問題',
            blocks: [
              {
                type: 'text',
                content: '兩列火車從A站和B站相向出發，同時開車：\n• A車時速100 km/h\n• B車時速80 km/h\n• A、B兩站距離360公里\n\n問：幾小時後兩車相遇？\n\n解題思路：兩車每小時合計接近 100 + 80 = 180 公里\n\n時間 = 總距離 ÷ 兩車速率之和\n= 360 ÷ 180 = 2（小時）'
              },
              {
                type: 'text',
                content: '平均速率陷阱：\n\n有一個常見的「看起來對，但其實錯」的計算方法：\n\n小明騎YouBike去公園時速10 km/h，回來時時速20 km/h，有人說「平均速率是(10+20)÷2 = 15 km/h」。\n\n這是錯的！正確計算：\n• 假設單程距離20公里\n• 去程時間：20÷10 = 2小時\n• 回程時間：20÷20 = 1小時\n• 全程：40公里用了3小時\n• 平均速率：40÷3 ≈ 13.3 km/h\n\n為什麼不一樣？因為慢的那程花的時間比較長，「拖累」了平均值。'
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
      id: 'w7d3-science',
      name: '科學｜作用力與反作用力',
      icon: '🔬',
      lesson: {
        title: '推與被推：作用力和反作用力',
        sections: [
          {
            title: '牛頓第三定律',
            blocks: [
              {
                type: 'text',
                content: '你用手推牆，牆也在推你。你有感覺嗎？\n\n牛頓發現：任何兩個物體之間的作用力，都是成對出現的。\n\n作用力與反作用力：\n• 大小相等\n• 方向相反\n• 同時發生，作用在不同物體上\n\n這就是牛頓第三定律。'
              },
              {
                type: 'text',
                content: '🚂 在交通工具上的例子：\n\n• 火箭：噴出氣體向下（作用力），火箭向上飛（反作用力）\n• 划船：槳向後划水（作用力），船向前進（反作用力）\n• 噴水推進船：噴水向後（作用力），船向前（反作用力）\n\n有趣的是，高鐵、捷運啟動時並不是「用力推地面往前走」，而是靠電磁力讓馬達旋轉，帶動輪子。輪子推軌道向後，軌道的反作用力讓列車前進——還是作用力與反作用力！'
              }
            ]
          },
          {
            title: '三個力的統整',
            blocks: [
              {
                type: 'text',
                content: '這三天我們學了三種和運動有關的概念：\n\n① 慣性：物體不想改變運動狀態\n② 摩擦力：阻礙相對運動（方向和運動相反）\n③ 作用力與反作用力：施力一定有等大反向的回力\n\n這三個概念在火車、汽車、YouBike、甚至走路時，都同時在發揮作用。下次搭車時，試著想想哪個力在哪裡作用。'
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
      id: 'w7d3-review',
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
                content: '🗺️ 社會：大眾運輸系統從台鐵、高鐵、捷運、公車，到YouBike，形成一個完整的網路。每個人放棄私家車、改搭大眾運輸，都在為環境做一點貢獻。\n\n📐 數學：相遇問題用「兩車速率相加」；平均速率要用「總距離÷總時間」，不能直接平均速率數字。\n\n🔬 科學：作用力與反作用力大小相等、方向相反，作用在兩個不同物體上。'
              },
              {
                type: 'text',
                content: '⏭️ 明天是動筆日！你要寫一篇記敘文，題目是「我的火車旅行」。想一想你有印象的一次搭火車（或捷運）的經驗，準備好要寫的故事。'
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
