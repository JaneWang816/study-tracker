// src/data/weeks/week07/day3.js
// W7 Day3：快與慢的學問

// ── 社會題庫（大眾運輸系統）──────────────────────
const socialPool = [
  {
    question: '下列哪一項不屬於「大眾運輸系統」？',
    options: ['台鐵', '私家車', '捷運', '公車'],
    answer: 1
  },
  {
    question: '台北捷運大約是哪一年通車的？',
    options: ['1986年', '1990年', '1996年', '2001年'],
    answer: 2
  },
  {
    question: '台灣高鐵主要行駛在台灣的哪一側？',
    options: ['東部（花東縱谷）', '西部（西部走廊）', '南部（屏東）', '北部（基隆）'],
    answer: 1
  },
  {
    question: 'YouBike（微笑單車）是哪種大眾運輸工具？',
    options: ['電動機車', '公共自行車共享系統', '迷你公車', '電動滑板車'],
    answer: 1
  },
  {
    question: '大眾運輸系統對環境最大的好處是什麼？',
    options: [
      '速度比私家車快',
      '一次載運多人，減少每人平均的碳排放',
      '比較便宜',
      '不需要司機'
    ],
    answer: 1
  },
  {
    question: '台灣哪個城市目前有捷運系統（2020年代）？',
    options: ['台北、高雄、桃園', '台北、台中、台南', '台北、基隆、花蓮', '高雄、台南、嘉義'],
    answer: 0
  },
  {
    question: '搭火車旅行，劉克襄說「下了車，我幾乎都用走路」，這說明了什麼？',
    options: [
      '他買不起計程車',
      '他把火車當起點，用步行深度探索當地',
      '那個地方沒有公車',
      '走路比較快'
    ],
    answer: 1
  },
  {
    question: '相比私人汽機車，大眾運輸的特點是？',
    options: [
      '路線固定，班次有限，但載客量大',
      '路線靈活，隨時出發，但費用高',
      '速度最快，但票價貴',
      '不受天氣影響，可以24小時行駛'
    ],
    answer: 0
  }
]

function generateSocialQuestion() {
  const q = socialPool[Math.floor(Math.random() * socialPool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

// ── 數學題庫（速率情境應用）──────────────────────
function generateMathQuestion() {
  const type = Math.floor(Math.random() * 4)

  if (type === 0) {
    // 平均速率（往返）——直接算單程
    const v1 = (Math.floor(Math.random() * 4) + 3) * 20   // 60, 80, 100, 120
    const v2 = v1 + (Math.floor(Math.random() * 3) + 1) * 20  // v1+20, v1+40, v1+60
    const d = (Math.floor(Math.random() * 4) + 2) * 60    // 120, 180, 240, 300
    const t1 = d / v1
    const t2 = d / v2
    const avgV = Math.round((2 * d) / (t1 + t2))
    const wrongV = Math.round((v1 + v2) / 2)  // 常見錯誤：直接平均
    const wrong2 = avgV + 10
    const wrong3 = avgV - 10 > 0 ? avgV - 10 : avgV + 20
    const options = [String(avgV), String(wrongV), String(wrong2), String(wrong3)]
    const correctText = String(avgV)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `去程 ${d} 公里時速 ${v1} km/h，回程同樣 ${d} 公里時速 ${v2} km/h，全程平均速率約是多少 km/h？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 1) {
    // 相遇問題（兩車對開）
    const vA = (Math.floor(Math.random() * 4) + 3) * 20   // 60–120
    const vB = (Math.floor(Math.random() * 4) + 3) * 20
    const t = Math.floor(Math.random() * 3) + 1            // 1–3小時
    const totalD = (vA + vB) * t
    const wrong1 = vA * t
    const wrong2 = vB * t
    const wrong3 = totalD + 50
    const options = [String(totalD), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(totalD)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `兩列火車從兩端相向出發，A車時速 ${vA} km/h，B車時速 ${vB} km/h，出發 ${t} 小時後相遇，兩站距離是多少公里？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else if (type === 2) {
    // 時間差問題
    const v = (Math.floor(Math.random() * 5) + 4) * 20    // 80–160
    const d = v * (Math.floor(Math.random() * 3) + 2)     // v*2, v*3, v*4
    const t = d / v
    const wrong1 = t + 1
    const wrong2 = t > 1 ? t - 1 : t + 2
    const wrong3 = d / (v + 20)
    const options = [String(t), String(wrong1), String(wrong2), String(Math.round(wrong3))]
    const correctText = String(t)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `捷運站到目的地 ${d} 公里，捷運時速 ${v} km/h，需要幾小時到達？`,
      options,
      answer: options.indexOf(correctText)
    }
  } else {
    // UBike距離計算
    const v = Math.floor(Math.random() * 5) + 10           // 10–14 km/h
    const t = (Math.floor(Math.random() * 4) + 1) * 15    // 15, 30, 45, 60分鐘
    const tHour = t / 60
    const d = Math.round(v * tHour * 10) / 10
    const wrong1 = Math.round((d + 2) * 10) / 10
    const wrong2 = Math.round((d - 2) * 10) / 10 > 0 ? Math.round((d - 2) * 10) / 10 : d + 3
    const wrong3 = v * t
    const options = [String(d), String(wrong1), String(wrong2), String(wrong3)]
    const correctText = String(d)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return {
      question: `騎 YouBike 時速約 ${v} km/h，騎了 ${t} 分鐘（${tHour} 小時），大約騎了幾公里？`,
      options,
      answer: options.indexOf(correctText)
    }
  }
}

// ── 科學題庫（作用力與反作用力）──────────────────
const sciencePool = [
  {
    question: '「作用力與反作用力」的定律，下列哪個說法正確？',
    options: [
      '作用力大，反作用力小',
      '作用力與反作用力大小相等、方向相反',
      '只有靜止的物體才有反作用力',
      '反作用力的方向和作用力相同'
    ],
    answer: 1
  },
  {
    question: '火箭發射時，噴出火焰向下，火箭向上飛，這是什麼原理？',
    options: ['重力原理', '作用力與反作用力', '慣性', '摩擦力'],
    answer: 1
  },
  {
    question: '游泳時，手向後划水，身體向前進，這是什麼原理？',
    options: ['浮力', '重力', '作用力與反作用力', '摩擦力'],
    answer: 2
  },
  {
    question: '你用力推牆壁，卻動不了，這是因為？',
    options: [
      '牆壁沒有反作用力',
      '牆壁的反作用力等於你的推力，兩力平衡',
      '你的力氣不夠大',
      '牆壁比你重'
    ],
    answer: 1
  },
  {
    question: '火車啟動時，向前推動，乘客身體向後傾，這是什麼現象？',
    options: [
      '作用力與反作用力',
      '慣性（身體傾向於保持靜止）',
      '摩擦力',
      '重力'
    ],
    answer: 1
  },
  {
    question: '下列哪個例子最能說明作用力與反作用力？',
    options: [
      '蘋果從樹上掉下來',
      '划船時，槳向後撥水，船向前進',
      '騎腳踏車爬坡越來越慢',
      '雨傘阻擋雨水'
    ],
    answer: 1
  }
]

function generateScienceQuestion() {
  const q = sciencePool[Math.floor(Math.random() * sciencePool.length)]
  const correctText = q.options[q.answer]
  const shuffled = [...q.options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return { question: q.question, options: shuffled, answer: shuffled.indexOf(correctText) }
}

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
