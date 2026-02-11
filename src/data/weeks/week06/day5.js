// src/data/weeks/week06/day5.js
// W6 Day5：《無米樂》電影日
// 貫穿文本：〈米的臺灣史〉最終段（戰後缺糧→有機米復興）

// ===== 輕量複習題庫 =====
const generateWarmupQuestion = () => {
  const type = Math.floor(Math.random() * 4)

  if (type === 0) {
    // 圓面積
    const r = [6, 8, 10][Math.floor(Math.random() * 3)]
    const area = (3.14 * r * r).toFixed(2)
    const wrong1 = (2 * 3.14 * r).toFixed(2)
    const wrong2 = (3.14 * r * r / 2).toFixed(2)
    const wrong3 = (r * r).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `圓面積公式是 S = πr²。半徑 ${r} 公尺的圓形稻田面積是？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `S = 3.14 × ${r}² = 3.14 × ${r * r} = ${area} 平方公尺`
    }
  }

  if (type === 1) {
    // 扇形面積
    const r = [10, 12][Math.floor(Math.random() * 2)]
    const angle = [90, 120][Math.floor(Math.random() * 2)]
    const area = (3.14 * r * r * angle / 360).toFixed(2)
    const wrong1 = (3.14 * r * r).toFixed(2)
    const wrong2 = (3.14 * r * angle / 360).toFixed(2)
    const wrong3 = (3.14 * r * r * angle / 180).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `半徑 ${r} 公尺、圓心角 ${angle}° 的扇形農田面積是？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `S = πr² × (θ/360°) = 3.14 × ${r}² × (${angle}/360) = ${area} 平方公尺`
    }
  }

  if (type === 2) {
    // 影子測高
    const myH = [150, 160][Math.floor(Math.random() * 2)]
    const myS = [100, 120][Math.floor(Math.random() * 2)]
    const treeS = [400, 480, 600][Math.floor(Math.random() * 3)]
    const treeH = Math.round(myH * treeS / myS)
    const w1 = treeH + 50
    const w2 = Math.round(myS * treeS / myH)
    const w3 = treeS
    const options = [String(treeH), String(w1), String(w2), String(w3)]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `農民身高 ${myH} 公分，影長 ${myS} 公分。同時測到穀倉旁大榕樹影長 ${treeS} 公分。這棵樹多高（公分）？`,
      options: shuffled,
      answer: shuffled.indexOf(String(treeH)),
      explanation: `相似比：${myH}/${myS} = 樹高/${treeS}\n樹高 = ${myH} × ${treeS} ÷ ${myS} = ${treeH} 公分`
    }
  }

  // type === 3：產業鏈
  const questions = [
    {
      question: '一個農民種稻、碾米廠加工白米、超市賣給消費者，這三個環節分別屬於哪個產業？',
      options: [
        '一級產業、二級產業、三級產業',
        '都屬於一級產業',
        '都屬於三級產業',
        '二級、一級、三級'
      ],
      answer: 0,
      explanation: '種稻 = 一級（從自然取得資源）；碾米加工 = 二級（製造加工）；超市銷售 = 三級（服務業）。這是完整的產業鏈三個層次。'
    },
    {
      question: '台灣哪個地區以「茶葉」聞名，和當地的山地氣候（涼爽多霧）直接相關？',
      options: [
        '北部丘陵山區（文山、坪林、三峽）和中部山區（南投凍頂、嘉義阿里山）',
        '台南平原',
        '高雄港口',
        '花蓮海岸'
      ],
      answer: 0,
      explanation: '台灣茶葉主要集中在北部丘陵（包種茶、碧螺春）和中部山區（烏龍茶、高山茶），因為這些地區海拔適中、雲霧多、日夜溫差大，是茶樹生長的理想環境。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { type: 'choice', ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== Day 5 主體 =====
const day5 = {
  id: 'day5',
  name: '第5天',
  icon: '🎬',
  color: '#37474F',
  title: '《無米樂》電影日',

  units: [
    {
      id: 'w6d5-opening',
      name: '最終閱讀',
      icon: '📖',
      lesson: {
        title: '〈米的臺灣史〉最終段：從缺糧到好米',
        sections: [
          {
            title: '一碗米飯的政治學',
            blocks: [
              {
                type: 'quote',
                content: '臺灣雖然盛產稻米，米飯是主要糧食，但並不是每人每餐都能吃白米飯，白米飯是窮苦人家的奢侈品。二次世界大戰末期，臺灣因被日本捲入戰爭而開始缺糧。戰後，國民黨政府接收臺灣，隨後因國共內戰把臺灣稻米大量運往中國大陸，造成臺灣嚴重缺糧。\n\n自1980年代以來，臺灣稻作另闢蹊徑，改走培育優良稻種、提升稻米品質、發展有機栽培的路線，同時加強食農教育，復興優良傳統米食，創新美味健康米食，推廣米食文創產品，賦予臺灣好米的嶄新形象。',
                author: '翁佳音、曹銘宗〈一樣米飼百代人〉'
              },
              {
                type: 'text',
                content: '📖 整篇文章的完整弧線：\n\n史前 → 原住民旱稻\n↓\n17世紀 → 荷蘭帶來水稻和移民\n↓\n清代 → 大量種稻，出口福建\n↓\n日治 → 蓬萊米誕生，出口日本\n↓\n二戰 → 缺糧、番薯籤飯\n↓\n戰後 → 稻米外銷、「麵粉代米」政策\n↓\n1980年代至今 → 精品米、有機米、食農教育\n\n這是一部「一粒米的台灣史」——今天的電影，就是這個故事的真實版本。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d5-music',
      name: '音樂欣賞',
      icon: '🎵',
      lesson: {
        title: '陳明章〈伊是咱的寶貝〉',
        sections: [
          {
            title: '觀影前的準備',
            blocks: [
              {
                type: 'text',
                content: '陳明章（1956年生，台北人）是台灣最重要的台語創作歌手之一，被稱為「台灣民謠之父」。他的音樂根植於台灣土地，風格融合台語民謠、藍調、搖滾。\n\n〈伊是咱的寶貝〉是他為電影《無米樂》創作的片尾曲，用台語唱出老農民對土地的深情，聽完這首歌，你會帶著不同的心情進入電影。'
              },
              {
                type: 'video',
                videoId: 'WMhqBkLpFzg',
                title: '陳明章〈伊是咱的寶貝〉（《無米樂》片尾曲）'
              },
              {
                type: 'text',
                content: '🎵 聽完後想一想：\n這首歌的情緒是什麼？\n「伊是咱的寶貝」——「伊」指的是誰或什麼？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d5-warmup',
      name: '暖身複習',
      icon: '🧠',
      lesson: {
        title: '本週知識暖身',
        sections: [
          {
            title: '觀影前4題',
            blocks: [
              {
                type: 'text',
                content: '先做4題輕量複習，確認本週的核心知識，然後進入電影。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateWarmupQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w6d5-film',
      name: '電影欣賞',
      icon: '🎬',
      lesson: {
        title: '《無米樂》（2005）',
        sections: [
          {
            title: '關於這部電影',
            blocks: [
              {
                type: 'text',
                content: '《無米樂》（2005）\n\n導演：莊益增、顏蘭權\n片長：約104分鐘\n\n拍攝地點：台南後壁（菁寮村）——台灣最後的稻米農村之一\n\n主要人物：\n• 崑濱伯（煌明伯的鄰居）——70多歲，一輩子種稻，笑口常開\n• 煌明伯——70多歲，稻農，話不多但話語深刻\n• 文林伯——有機農法的先驅嘗試者\n\n「無米樂」是一句台語，意思是：「沒有米也快樂」——窮困也要樂天知命。'
              },
              {
                type: 'text',
                content: '🎬 觀影指引\n\n不用特別記筆記，讓自己沉浸進去就好。\n觀影時可以留意幾件事：\n\n① 老農如何描述他們和土地的關係？\n② 種稻賺不了多少錢，他們為什麼還堅持種？\n③ 機器（耕耘機、收割機）在片中扮演什麼角色？\n④ 你有沒有看到這週學的任何知識——農業地理、產業鏈、機械……'
              },
              {
                type: 'video',
                videoId: 'OTYt-MwFZI0',
                title: '《無米樂》紀錄片（2005，莊益增、顏蘭權導演）'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d5-reflection',
      name: '觀後討論',
      icon: '💬',
      lesson: {
        title: '看完《無米樂》之後',
        sections: [
          {
            title: '三個問題，三段對話',
            blocks: [
              {
                type: 'text',
                content: '電影看完了。不需要寫很多，但試著認真回答這三個問題：\n\n❶ 崑濱伯說：「種田就是在跟天地拜託。」\n他這句話是什麼意思？你怎麼理解？\n\n❷ 老農說種稻「賺不到錢」，但他們還是種了一輩子。\n這和你平時對「工作」的理解有什麼不一樣？\n\n❸ 你這週讀了〈米的臺灣史〉，也看了《無米樂》。\n一篇是用文字、數字、歷史說稻米；一部是用鏡頭、人臉、聲音說稻米。\n你覺得哪一種讓你更「感受到」稻米對台灣的意義？為什麼？'
              }
            ]
          },
          {
            title: '本週知識地圖',
            blocks: [
              {
                type: 'text',
                content: '🗺️ W6「產業與空間」完整知識地圖\n\n【社會】台灣農業地理\n• 茶（北部山區）、米（西部平原）、糖（南部）、水果（中南部）\n• 分布圖 vs 等值線圖的閱讀方法\n• 產業鏈：一級（農業）→ 二級（加工）→ 三級（服務）\n\n【數學】圓與扇形\n• 圓面積：S = πr²\n• 扇形面積：S = πr² × (θ/360°)\n• 相似形：邊長比 n:1 → 面積比 n²:1\n• 影子測高法：身高/影長 = 樹高/樹影\n\n【科學】機械效率\n• 摩擦力：省力的代價\n• 傳統水車與風車：輪軸原理的農業應用\n• 機械效率 = 有效功/總功\n• 效率越高浪費越少，但永遠達不到100%\n\n【語文】報導文學\n• 〈米的臺灣史〉分段精讀\n• 四面向分析：起源、地理、工序、文化意義\n• 報導文學特色：非虛構、有結構、多角度'
              },
              {
                type: 'text',
                content: '🔗 跨週連結回顧\n\nW1 南島語族 ← → W6 山地陸稻和南島語族遷徙\nW3 嘉南大圳 ← → W6 水稻需要灌溉系統\nW4 清領開墾 ← → W6 閩粵移民帶來稻種\nW5 日治建設 ← → W6 蓬萊米育種成功\nW4 比例尺 ← → W6 相似形影子測高法\nW5 圓周長 ← → W6 圓面積（同一個圓，兩種量法）\n\n六週學下來，台灣的歷史、地理、農業已經不再是分散的知識碎片，而是一個相互連結的大故事。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day5
