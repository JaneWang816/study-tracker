// src/data/weeks/week06/day1.js
// W6 Day1：台灣哪裡種什麼？
// 貫穿文本：〈一樣米飼百代人——米的臺灣史〉第一段

// ===== 社會：台灣區域農業分布 =====
const generateSocialQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '台灣的稻米主要種植在哪個地區？',
      options: ['西部平原（嘉南、濁水溪沖積平原）', '台灣東部山區', '台北盆地', '澎湖群島'],
      answer: 0,
      explanation: '台灣西部平原土地平坦、灌溉便利，尤其是嘉南平原和濁水溪沖積平原，自古就是台灣最重要的稻米產地。'
    },
    {
      type: 'choice',
      question: '台灣的茶葉主要產於哪個區域？',
      options: ['北部與中部山區（台北、桃園、新竹、南投）', '南部平原', '東部海岸', '離島地區'],
      answer: 0,
      explanation: '台灣茶葉主要集中在北部和中部丘陵山區，包括文山包種茶（台北）、東方美人茶（新竹、苗栗）、阿里山高山茶（嘉義）、日月潭紅茶（南投）等。'
    },
    {
      type: 'choice',
      question: '台灣甘蔗種植最多的地區是？',
      options: ['台灣南部（台南、高雄、屏東）', '台灣北部', '台灣東部', '中部山區'],
      answer: 0,
      explanation: '台灣南部氣候炎熱、日照充足，非常適合甘蔗生長。日治時期台南、高雄、屏東一帶建立了大量製糖廠，是台灣糖業的核心地帶。'
    },
    {
      type: 'choice',
      question: '「一樣米飼百樣人」這句台灣俚諺，原本是用來表達什麼意思？',
      options: [
        '同樣吃米長大，每個人的性格和行為卻大不相同',
        '台灣有很多種類的米',
        '米可以養活很多人',
        '每個人吃米的方式都不一樣'
      ],
      answer: 0,
      explanation: '「一樣米飼百樣人」是台灣常見的俚諺，意思是：同樣吃米長大的人，卻有各種不同的性格與行為，常用來感嘆人心複雜多變。'
    },
    {
      type: 'choice',
      question: '台灣的農業分布和地形有密切關係。下列哪個說法最正確？',
      options: [
        '平原地區適合稻米、甘蔗等需要大面積的作物；山坡地則適合茶葉、水果等',
        '台灣各地的農業作物都一樣，沒有地區差異',
        '只有南部才能種農作物，北部太冷',
        '台灣的農業完全由政府決定種什麼，和地形無關'
      ],
      answer: 0,
      explanation: '台灣農業和地形高度相關：西部廣大平原適合需要大面積平地的稻米和甘蔗；山坡丘陵地則適合需要排水良好的茶葉和各種水果。這正是「靠山吃山，靠海吃海」的台灣版本。'
    },
    {
      type: 'choice',
      question: '台灣的「旱稻」和「水稻」最大的不同是？',
      options: [
        '旱稻種在不需要大量水灌溉的陸地，水稻種在水田需要大量水',
        '旱稻是甜的，水稻是鹹的',
        '旱稻是白色的，水稻是紅色的',
        '兩者完全相同，只是名稱不同'
      ],
      answer: 0,
      explanation: '旱稻（陸稻）抗旱性強，可種在缺水灌溉的山地，台灣原住民早年就種旱稻；水稻需要大量水灌溉，種在水田，是後來引進的主要稻種。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== 數學：圓面積複習與鞏固 =====
const generateMathQuestion = () => {
  const type = Math.floor(Math.random() * 4)

  if (type === 0) {
    // 公式確認
    const questions = [
      {
        question: '圓面積的公式是？',
        options: ['S = πr²', 'S = 2πr', 'S = πr', 'S = r²'],
        answer: 0,
        explanation: '圓面積公式是 S = πr²，其中 r 是半徑，π ≈ 3.14。注意：這和圓周長 C = 2πr 不同，面積用的是半徑的平方。'
      },
      {
        question: '半徑變成 2 倍，圓面積會變成幾倍？',
        options: ['4 倍', '2 倍', '8 倍', '3.14 倍'],
        answer: 0,
        explanation: '原面積 = πr²；新面積 = π(2r)² = 4πr²。面積變成 4 倍。這就是「面積縮放 = 長度縮放的平方」——W4 比例尺學過的概念！'
      }
    ]
    const q = questions[Math.floor(Math.random() * questions.length)]
    const shuffled = [...q.options].sort(() => Math.random() - 0.5)
    return { type: 'choice', ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
  }

  if (type === 1) {
    // 已知半徑求面積
    const r = [5, 7, 10, 14][Math.floor(Math.random() * 4)]
    const area = (3.14 * r * r).toFixed(2)
    const wrong1 = (2 * 3.14 * r).toFixed(2)
    const wrong2 = (3.14 * r).toFixed(2)
    const wrong3 = (3.14 * r * r * 2).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `一塊圓形農田的半徑是 ${r} 公尺，面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `圓面積 S = πr² = 3.14 × ${r}² = 3.14 × ${r * r} = ${area} 平方公尺`
    }
  }

  if (type === 2) {
    // 已知直徑求面積
    const d = [10, 14, 20, 8][Math.floor(Math.random() * 4)]
    const r = d / 2
    const area = (3.14 * r * r).toFixed(2)
    const wrong1 = (3.14 * d * d).toFixed(2)
    const wrong2 = (2 * 3.14 * r).toFixed(2)
    const wrong3 = (3.14 * r * r + r).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `一個圓形水池的直徑是 ${d} 公尺，水池的面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `直徑 ${d} 公尺，半徑 = ${d} ÷ 2 = ${r} 公尺\n圓面積 S = πr² = 3.14 × ${r}² = 3.14 × ${r * r} = ${area} 平方公尺`
    }
  }

  // type === 3：比較兩個圓的面積
  const r1 = [3, 4, 5][Math.floor(Math.random() * 3)]
  const r2 = r1 * 2
  const a1 = (3.14 * r1 * r1).toFixed(2)
  const a2 = (3.14 * r2 * r2).toFixed(2)
  const ratio = 4
  const options = [`大圓面積是小圓的 ${ratio} 倍`, `大圓面積是小圓的 2 倍`, `大圓面積是小圓的 8 倍`, `兩圓面積相同`]
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  return {
    type: 'choice',
    question: `農場有兩塊圓形菜園，小菜園半徑 ${r1} 公尺，大菜園半徑 ${r2} 公尺（是小菜園的 2 倍）。大菜園面積是小菜園的幾倍？`,
    options: shuffled,
    answer: shuffled.indexOf(`大圓面積是小圓的 ${ratio} 倍`),
    explanation: `小菜園面積 = 3.14 × ${r1}² = ${a1} 平方公尺\n大菜園面積 = 3.14 × ${r2}² = ${a2} 平方公尺\n${a2} ÷ ${a1} = 4 倍\n💡 半徑變 2 倍，面積變 4 倍（2² = 4）`
  }
}

// ===== 科學：摩擦力 =====
const generateScienceQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '摩擦力是什麼？',
      options: [
        '兩個物體接觸面之間阻礙相對運動的力',
        '讓物體往上飛的力',
        '讓物體加速的力',
        '只有在水中才有的力'
      ],
      answer: 0,
      explanation: '摩擦力是兩個物體接觸面之間產生的，方向和運動方向相反，會阻礙物體的運動。它是日常生活中無所不在的力。'
    },
    {
      type: 'choice',
      question: '傳統水車運轉時，轉軸和軸承之間會產生什麼，消耗一部分能量？',
      options: ['摩擦力（使軸承發熱，損耗能量）', '浮力', '磁力', '重力'],
      answer: 0,
      explanation: '水車轉軸和軸承之間有摩擦力，會讓一部分水流的能量轉成熱能散失，而不是完全用來汲水。這就是「機械效率」不能達到100%的主要原因之一。'
    },
    {
      type: 'choice',
      question: '下列哪種情況摩擦力比較大？',
      options: [
        '粗糙的木板上推木箱（摩擦力大）',
        '光滑的冰面上推木箱（摩擦力小）',
        '兩者摩擦力一樣大',
        '光滑面的摩擦力反而更大'
      ],
      answer: 0,
      explanation: '接觸面越粗糙，摩擦力越大；接觸面越光滑，摩擦力越小。這就是為什麼機器的轉軸要加潤滑油——減少摩擦，提高效率。'
    },
    {
      type: 'choice',
      question: '摩擦力在生活中有時候是好的，有時候是不好的。下列哪個例子中，摩擦力是「好的、我們需要的」？',
      options: [
        '鞋底和地面的摩擦力（讓我們不會滑倒）',
        '機器齒輪之間的摩擦力（讓機器磨損）',
        '水車轉軸的摩擦力（消耗能量）',
        '車輪滾動時地面的阻力（讓車減速）'
      ],
      answer: 0,
      explanation: '鞋底和地面之間的摩擦力讓我們能站穩、走路、跑步，是我們需要的「有益摩擦力」。沒有摩擦力，我們就像踩在冰上一樣無法行走。'
    },
    {
      type: 'choice',
      question: '古代農民在水車轉軸上塗豬油或動物油脂，這樣做的目的是？',
      options: [
        '減少摩擦力，讓水車轉動更順暢，減少能量損耗',
        '讓水車看起來更漂亮',
        '防止木頭腐爛',
        '增加摩擦力，讓水車轉得更慢、更穩'
      ],
      answer: 0,
      explanation: '在轉軸上塗抹油脂是最古老的「潤滑」技術，目的是減少轉軸和軸承之間的摩擦力，讓水車運轉更順暢，減少能量損耗。現代機器用機油達到同樣效果。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== 語文詞彙：農業地理用語 =====
const generateVocabQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「沖積平原」是怎麼形成的？',
      options: [
        '河流帶來的泥沙長期堆積，形成肥沃的平坦土地',
        '海水退潮後留下的沙地',
        '火山爆發後形成的平地',
        '人工填海造陸形成的土地'
      ],
      answer: 0,
      explanation: '沖積平原是河流從上游帶來的泥沙，在河流下游或入海口附近堆積而成。台灣的嘉南平原、濁水溪沖積扇都是例子，土壤肥沃，非常適合農業。'
    },
    {
      type: 'choice',
      question: '「旱稻」的「旱」字，帶有什麼意思？',
      options: [
        '缺水、乾燥（旱災、乾旱）',
        '很熱',
        '早上',
        '陸地上'
      ],
      answer: 0,
      explanation: '「旱」字的本義是缺水、乾燥，如「旱災」、「乾旱」。旱稻能在缺水的旱地生長，所以叫「旱稻」。'
    },
    {
      type: 'choice',
      question: '「食飯皇帝大」這句台語俚語，用來形容什麼情況？',
      options: [
        '吃飯是最重要的事，不能被打擾或中斷',
        '皇帝最喜歡吃飯',
        '米飯比任何食物都貴',
        '只有皇帝才能吃白米飯'
      ],
      answer: 0,
      explanation: '「食飯皇帝大」意思是：吃飯這件事比什麼都重要，就像皇帝一樣不可侵犯、不能被打斷。反映了農業社會對糧食和吃飯的高度重視。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== Day 1 主體 =====
const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🌾',
  color: '#2E7D32',
  title: '台灣哪裡種什麼？',

  units: [
    {
      id: 'w6d1-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈一樣米飼百代人〉第一段',
        sections: [
          {
            title: '農傳媒——米的臺灣史',
            blocks: [
              {
                type: 'text',
                content: '本週我們閱讀一篇非虛構的報導文學——〈一樣米飼百代人 傳承千年的主食：米的臺灣史〉，作者翁佳音、曹銘宗，由農傳媒出版。\n\n這篇文章從考古、歷史、農業科學、飲食文化等角度，說一粒米如何走過幾千年的台灣史。'
              },
              {
                type: 'quote',
                content: '臺灣氣候溫暖、潮濕，非常適合稻作。米在臺灣是傳統的主食，所以臺語俚諺說：「一樣米飼百樣人」，罵人：「食米毋知米價」，安慰自己：「時到時擔當，無米才煮番薯湯」。\n\n「飯」的本義指煮熟的穀類，華語說小米飯、白米飯、糯米飯、高粱飯等。但臺語講「飯」就是指煮熟的米，最傳神的一句話是：「食飯皇帝大」，形容吃飯最重要，不能被打擾、中斷。',
                author: '翁佳音、曹銘宗〈一樣米飼百代人〉'
              },
              {
                type: 'text',
                content: '📍 閱讀前先想想：\n\n你知道台灣種了幾千年的米嗎？你每天吃的那碗飯，背後有多少故事？今天先從地理開始——台灣哪裡種什麼？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d1-social',
      name: '社會',
      icon: '🗺️',
      lesson: {
        title: '台灣的區域農業分布',
        sections: [
          {
            title: '不同的土地，種不同的作物',
            blocks: [
              {
                type: 'text',
                content: '台灣面積雖然不大，但地形多樣——高山、丘陵、平原、盆地、海岸——造就了豐富的農業多樣性。不同地形、氣候和土壤，適合種不同的作物。'
              }
            ]
          },
          {
            title: '四大農業區',
            blocks: [
              {
                type: 'text',
                content: '🍵 茶葉：北部與中部山區\n台北文山（包種茶）、新竹苗栗山區（東方美人茶）、南投（日月潭紅茶、凍頂烏龍）、嘉義（阿里山高山茶）\n\n☕ 茶樹喜歡涼爽多霧的山坡地，排水良好、日夜溫差大，讓茶葉的香氣更濃郁。'
              },
              {
                type: 'text',
                content: '🌾 稻米：西部平原\n嘉南平原（台南、嘉義）、濁水溪沖積扇（彰化、雲林）、花東縱谷（花蓮池上、台東關山）\n\n🌾 水稻需要大量水灌溉和平坦土地，西部平原加上嘉南大圳的灌溉系統，讓這裡成為台灣的米倉。花東縱谷因為土地純淨、水源乾淨，現在是台灣精品米的重要產地。'
              },
              {
                type: 'text',
                content: '🍬 甘蔗（糖）：南部平原\n台南、高雄、屏東一帶，日照強烈、土地廣大，是日治時代製糖業的核心地帶（W5 學過！）。現在甘蔗種植大幅減少，但屏東仍有少量生產。'
              },
              {
                type: 'text',
                content: '🍊 水果：中南部與山區\n芒果（台南玉井）、蓮霧（屏東）、鳳梨（台南、嘉義）、香蕉（高雄旗山）、茂谷柑（台南）……\n\n台灣水果種類繁多，被稱為「水果王國」，因為台灣跨越熱帶和亞熱帶，熱帶水果和溫帶水果都能生長。'
              }
            ]
          },
          {
            title: '地理決定農業',
            blocks: [
              {
                type: 'text',
                content: '農業分布不是隨機的，而是地形、氣候、水源共同決定的：\n\n• 平原→ 稻米、甘蔗（需要大面積平地）\n• 山坡丘陵→ 茶葉、水果（需要排水良好）\n• 南部→ 熱帶水果（日照強、溫度高）\n• 花東縱谷→ 精品米（純淨水源、大溫差）\n\n這也呼應了我們在 W4 學的氣候分布——北回歸線以南的熱帶氣候，讓南台灣農業和北台灣很不一樣。'
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
      id: 'w6d1-math',
      name: '數學',
      icon: '⭕',
      lesson: {
        title: '圓面積：S = πr²',
        sections: [
          {
            title: '從周長到面積',
            blocks: [
              {
                type: 'text',
                content: 'W5 我們學了圓周長（圍住一塊圓形地的圍欄要多長）。\n今天進入圓面積（這塊圓形地有多大）。\n\nW3 Day5 已經預覽過公式：\n📐 圓面積 S = πr²\n\n今天快速複習，然後把它用在農田和農業的情境裡。'
              }
            ]
          },
          {
            title: '公式複習',
            blocks: [
              {
                type: 'text',
                content: '圓面積公式：S = πr²\n\n其中：\n• S = 面積（Area）\n• r = 半徑\n• π ≈ 3.14\n\n✏️ 例題：\n一塊圓形稻田，半徑 10 公尺，面積是多少？\n\nS = 3.14 × 10² = 3.14 × 100 = 314 平方公尺'
              },
              {
                type: 'text',
                content: '⚠️ 常見錯誤：\n\n• 把半徑和直徑搞混——題目給直徑，要先除以2才是半徑\n• 忘記「平方」——πr 不是 πr²\n• 和周長公式混淆——C = 2πr（周長）vs S = πr²（面積）\n\n💡 記憶口訣：\n「面積有平方，周長乘以2」\nS = πr²（面積，r要平方）\nC = 2πr（周長，r乘以2）'
              }
            ]
          },
          {
            title: '半徑翻倍，面積變多少？',
            blocks: [
              {
                type: 'text',
                content: '這是一個很重要的觀念，W4 比例尺學過，現在用圓來驗證：\n\n半徑 = r → 面積 = πr²\n半徑 = 2r → 面積 = π(2r)² = 4πr²\n\n半徑變 2 倍，面積變 4 倍！\n半徑變 3 倍，面積變 9 倍！\n\n面積的縮放倍數 = 長度縮放倍數的平方\n\n✏️ 想一想：如果農場要把圓形水池的半徑從 5 公尺擴大到 10 公尺，水量（體積）會增加大約幾倍？'
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
      id: 'w6d1-science',
      name: '科學',
      icon: '⚙️',
      lesson: {
        title: '摩擦力：省力的代價',
        sections: [
          {
            title: '為什麼機械不能100%省力？',
            blocks: [
              {
                type: 'text',
                content: 'W5 學了槓桿、輪軸、滑輪——它們都能「省力」。但你有沒有想過：如果機械真的能省力，為什麼還要費力氣使用它？\n\n答案是：省力不是免費的。摩擦力讓一部分能量變成熱消散，讓任何機械都無法達到100%的效率。'
              }
            ]
          },
          {
            title: '摩擦力的本質',
            blocks: [
              {
                type: 'text',
                content: '摩擦力發生在兩個物體接觸的表面之間，方向和運動方向相反，會阻礙運動。\n\n影響摩擦力大小的因素：\n• 接觸面的粗糙程度（越粗糙，摩擦力越大）\n• 物體的重量（越重，摩擦力越大）\n\n摩擦力有兩面性：\n✅ 有益：讓我們走路不滑倒、讓螺絲不鬆脫、讓剎車有效\n❌ 有害：讓機器磨損、消耗能量、產生廢熱'
              }
            ]
          },
          {
            title: '傳統水車的摩擦問題',
            blocks: [
              {
                type: 'text',
                content: '台灣農業史上，傳統水車（筒仔水車）是農民灌溉的重要工具。水車靠人力踩踏或水流驅動，把水從低處送到高處的農田。\n\n水車的轉軸和軸承之間，就有摩擦力在消耗能量。農民很早就知道要在轉軸上塗抹豬油或動物油脂——這就是最古老的「潤滑」技術，目的是減少摩擦、節省力氣。\n\n明天我們會更深入了解傳統水車和風車的設計。'
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
      id: 'w6d1-vocab',
      name: '語文',
      icon: '✍️',
      lesson: {
        title: '詞彙：農業地理用語',
        sections: [
          {
            title: '本日關鍵詞彙',
            blocks: [
              {
                type: 'text',
                content: '🌾 農業詞彙\n\n• 旱稻／陸稻：種在不需大量灌溉的土地，原住民傳統作物\n• 水稻：種在水田，需要大量灌溉水，現代台灣主要稻種\n• 稻種：稻米的品種，如蓬萊米、在來米\n• 收成：農作物成熟後採收的結果'
              },
              {
                type: 'text',
                content: '🗺️ 地理詞彙\n\n• 沖積平原：河流帶來的泥沙堆積形成的平坦肥沃土地\n• 縱谷：兩列山脈之間的狹長谷地（如花東縱谷）\n• 農業分布：農業作物在地理空間上的分佈情形\n• 產地：農作物生產的地區'
              },
              {
                type: 'text',
                content: '📖 報導文學的特色\n\n和〈琵琶鼠〉這種散文不同，報導文學有這些特點：\n\n• 有真實的事件、人物、地點（非虛構）\n• 有清楚的結構（小標題分段）\n• 文字平易，但有深度\n• 結合歷史、科學、文化多個角度\n\n這篇〈米的臺灣史〉就是報導文學的好例子，它不只是說「米是主食」，而是追問：這粒米從哪裡來？怎麼來到台灣？怎麼改變了台灣人的生活？'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateVocabQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    {
      id: 'w6d1-review',
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
                content: '今天學到了：\n\n🗺️ 台灣農業地理：茶葉（北部山區）、稻米（西部平原）、甘蔗（南部平原）、水果（中南部）——地形決定農業\n\n⭕ 圓面積複習：S = πr²；半徑變2倍，面積變4倍\n\n⚙️ 摩擦力：省力機械的能量損耗來源；潤滑是減少摩擦的最古老方法'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n文章繼續——荷蘭人來台灣要買米，還帶來了耕牛。從荷蘭時期到清領，台灣的稻米怎麼從自給自足變成出口商品？傳統水車和風車又是怎麼設計的？'
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
