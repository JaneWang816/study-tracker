// src/data/weeks/week03/day2.js
// W3 Day2：水怎麼養活了台灣？

// ===== 社會：水利工程與圳路 =====
const generateWaterworkQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '嘉南大圳是誰設計的？',
      options: ['劉銘傳', '八田與一', '鄭成功', '連雅堂'],
      answer: 1,
      explanation: '八田與一是日治時代的日本水利工程師，設計並主持興建了嘉南大圳。'
    },
    {
      type: 'choice',
      question: '嘉南大圳完工於哪個時期，灌溉了多少公頃的農田？',
      options: ['清朝，灌溉5萬公頃', '日治時期，灌溉15萬公頃', '戰後，灌溉30萬公頃', '明鄭時期，灌溉3萬公頃'],
      answer: 1,
      explanation: '嘉南大圳於1930年完工（日治時期），灌溉面積約15萬公頃，大幅提升了台灣南部的農業生產力。'
    },
    {
      type: 'choice',
      question: '桃園台地為什麼需要人工埤塘？',
      options: ['桃園地區雨量太少', '桃園台地地形較高，沒有自然河流流過', '桃園的土質不適合種稻', '桃園是海埔新生地，土地太鹹'],
      answer: 1,
      explanation: '桃園台地因地勢較高，無自然河流，先人挖掘大量埤塘（人工水庫）儲水，所以桃園有「千塘之鄉」的稱號。'
    },
    {
      type: 'choice',
      question: '嘉南大圳採用「三年輪作制度」，以下說明何者正確？',
      options: ['每三年才灌溉一次，節省水資源', '把農地分三批，輪流種水稻、甘蔗和雜糧，讓土地休息', '只種三種作物，水稻、甘蔗和玉米', '每三年更換一次圳路的路線'],
      answer: 1,
      explanation: '三年輪作制讓每塊農地輪流種植水稻、甘蔗、雜糧，避免土地過度使用，是保護土地肥力的智慧。'
    },
    {
      type: 'choice',
      question: '圳路的主要功能是什麼？',
      options: ['排放工廠廢水', '引導河水灌溉農田', '防止颱風造成水災', '作為水上交通要道'],
      answer: 1,
      explanation: '圳路是人工挖掘的水道，用來從河流引水，分送到農田灌溉，是農業社會的重要基礎設施。'
    },
    {
      type: 'choice',
      question: '台灣古代的水利建設（如圳路）主要解決了什麼問題？',
      options: ['讓河水不再氾濫', '把水從有水的地方引到缺水的農田', '讓台灣的雨量增加', '讓農民不需要勞動'],
      answer: 1,
      explanation: '台灣雨量分布不均，圳路讓農民能把水從有水的溪流引到缺水的旱地，解決灌溉問題。'
    },
    {
      type: 'choice',
      question: '「烏山頭水庫」和嘉南大圳有什麼關係？',
      options: ['烏山頭水庫是嘉南大圳的水源儲水庫', '兩者完全沒有關係', '烏山頭水庫比嘉南大圳早一百年建造', '烏山頭水庫是用來防洪，不是灌溉'],
      answer: 0,
      explanation: '烏山頭水庫是八田與一設計嘉南大圳系統的一部分，作為水源調節水庫，枯水期時放水灌溉農田。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkWaterworkAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ===== 數學：比的化簡 =====
const generateRatioSimplifyQuestion = () => {
  const types = ['simplify', 'equivalent', 'apply']
  const t = types[Math.floor(Math.random() * types.length)]

  if (t === 'simplify') {
    const pairs = [
      { a: 6, b: 4, sa: 3, sb: 2 },
      { a: 8, b: 12, sa: 2, sb: 3 },
      { a: 10, b: 15, sa: 2, sb: 3 },
      { a: 9, b: 12, sa: 3, sb: 4 },
      { a: 14, b: 21, sa: 2, sb: 3 },
      { a: 15, b: 10, sa: 3, sb: 2 },
      { a: 24, b: 16, sa: 3, sb: 2 }
    ]
    const p = pairs[Math.floor(Math.random() * pairs.length)]
    const options = [
      `${p.sa}：${p.sb}`,
      `${p.sb}：${p.sa}`,
      `${p.a / 2}：${p.b / 2}`,
      `1：${p.b / p.a}`
    ]
    const shuffled = [...options]
    shuffled.sort(() => Math.random() - 0.5)
    const correct = shuffled.indexOf(`${p.sa}：${p.sb}`)
    return {
      type: 'choice',
      question: `把比 ${p.a}：${p.b} 化成最簡比是？`,
      options: shuffled,
      answer: correct,
      explanation: `${p.a} 和 ${p.b} 的最大公因數是 ${p.a / p.sa}，兩者都除以 ${p.a / p.sa}，得到最簡比 ${p.sa}：${p.sb}。`
    }
  }

  if (t === 'equivalent') {
    const base = [
      { a: 2, b: 3 }, { a: 3, b: 4 }, { a: 1, b: 2 }, { a: 3, b: 5 }
    ]
    const b = base[Math.floor(Math.random() * base.length)]
    const k = Math.floor(Math.random() * 3) + 2
    const bigger = { a: b.a * k, b: b.b * k }
    const options = [
      `${b.a}：${b.b}`,
      `${b.a + 1}：${b.b + 1}`,
      `${b.a * 2 + 1}：${b.b * 2}`,
      `${b.b}：${b.a}`
    ]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    const correct = shuffled.indexOf(`${b.a}：${b.b}`)
    return {
      type: 'choice',
      question: `${bigger.a}：${bigger.b} 化簡後等於哪個比？`,
      options: shuffled,
      answer: correct,
      explanation: `${bigger.a} 和 ${bigger.b} 都是 ${k} 的倍數，都除以 ${k} 得到最簡比 ${b.a}：${b.b}。`
    }
  }

  // apply：水量分配情境
  const scenarios = [
    { total: 600, ratio: [2, 3], unit: '公升', names: ['A農田', 'B農田'] },
    { total: 500, ratio: [3, 2], unit: '公升', names: ['上游', '下游'] },
    { total: 900, ratio: [1, 2], unit: '公頃', names: ['旱地', '水田'] }
  ]
  const s = scenarios[Math.floor(Math.random() * scenarios.length)]
  const totalParts = s.ratio[0] + s.ratio[1]
  const share1 = (s.total / totalParts) * s.ratio[0]
  const share2 = s.total - share1
  const options = [
    `${s.names[0]}：${share1}${s.unit}，${s.names[1]}：${share2}${s.unit}`,
    `${s.names[0]}：${share2}${s.unit}，${s.names[1]}：${share1}${s.unit}`,
    `${s.names[0]}：${s.total / 2}${s.unit}，${s.names[1]}：${s.total / 2}${s.unit}`,
    `${s.names[0]}：${s.ratio[0] * 100}${s.unit}，${s.names[1]}：${s.ratio[1] * 100}${s.unit}`
  ]
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  const correct = shuffled.indexOf(options[0])
  return {
    type: 'choice',
    question: `圳路今日共有 ${s.total}${s.unit} 的水，按照 ${s.ratio[0]}：${s.ratio[1]} 的比例分配給${s.names[0]}和${s.names[1]}，各得多少？`,
    options: shuffled,
    answer: correct,
    explanation: `總份數 = ${s.ratio[0]} + ${s.ratio[1]} = ${totalParts}，每份 = ${s.total} ÷ ${totalParts} = ${s.total / totalParts}${s.unit}。${s.names[0]}得 ${s.ratio[0]} 份 = ${share1}${s.unit}，${s.names[1]}得 ${s.ratio[1]} 份 = ${share2}${s.unit}。`
  }
}

const checkRatioSimplifyAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ===== 科學：月相成因 =====
const generateMoonCauseQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '為什麼我們看到的月亮形狀會一直改變？',
      options: [
        '月亮本身的形狀在改變',
        '地球的影子遮住了月亮不同的部分',
        '月亮繞地球公轉，被太陽照亮的部分從地球看起來不同',
        '太陽的亮度每天不同，照亮月亮的程度也不同'
      ],
      answer: 2,
      explanation: '月亮本身是球形，不會改變。月相變化是因為月亮繞地球公轉，從地球看到月亮被太陽照亮的面積比例不同。'
    },
    {
      type: 'choice',
      question: '上弦月通常在一天中的什麼時候可以觀察到？',
      options: ['清晨（日出前後）', '正中午', '傍晚到半夜', '只有雨天才看得到'],
      answer: 2,
      explanation: '上弦月出現在月相前半段，太陽下山後從西方天空升起，傍晚到半夜是觀察的好時機。'
    },
    {
      type: 'choice',
      question: '下弦月通常在一天中的什麼時候可以觀察到？',
      options: ['傍晚', '半夜到清晨', '正午', '日落時'],
      answer: 1,
      explanation: '下弦月出現在月相後半段，半夜從東方升起，清晨時仍可見，因此是「清晨的月亮」。'
    },
    {
      type: 'choice',
      question: '月食（月全食）是什麼情況下發生的？',
      options: [
        '月亮遮住了太陽',
        '地球的影子遮住了月亮',
        '太陽的影子遮住了月亮',
        '月亮飛到了地球的另一側'
      ],
      answer: 1,
      explanation: '月食發生在滿月時，地球恰好在太陽和月亮之間，地球的影子遮住了月亮，使月亮變暗。'
    },
    {
      type: 'choice',
      question: '農曆初一是新月，初七、初八前後是什麼月相？',
      options: ['滿月', '上弦月', '下弦月', '殘月'],
      answer: 1,
      explanation: '農曆初一是新月，經過約7天到上弦月，月相週期中上弦月約在初七、初八前後出現。'
    },
    {
      type: 'choice',
      question: '滿月時，月亮、地球、太陽三者的相對位置是？',
      options: [
        '月亮在地球和太陽之間',
        '地球在月亮和太陽之間',
        '太陽在地球和月亮之間',
        '三者形成正三角形'
      ],
      answer: 1,
      explanation: '滿月時，太陽、地球、月亮三者幾乎成一直線，地球在中間，月亮被太陽完整照亮，所以我們看到圓形的滿月。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkMoonCauseAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ===== 組合成 Day 2 =====
const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '💧',
  color: '#0EA5E9',
  title: '水怎麼養活了台灣？',
  units: [
    // 開場
    {
      id: 'w3d2-opening',
      name: '開場：山影貼在臉上',
      icon: '📖',
      lesson: {
        title: '吳晟《吾鄉印象》——第二段',
        sections: [
          {
            title: '今日貫穿文本',
            blocks: [
              {
                type: 'quote',
                content: '古早的古早的古早以前\n自吾鄉左側延綿而近的山影\n就是一大片潑墨畫\n緊緊的貼在吾鄉的人們的臉上',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '吳晟的故鄉在彰化，左側是八卦山，再往左就是中央山脈——山影緊貼著農村人的生活，就像河流緊扣著農田一樣。'
              },
              {
                type: 'text',
                content: '山是河的源頭，河是農業的命脈。今天我們要認識一個改變百萬人命運的工程：嘉南大圳，以及設計它的日本工程師八田與一的故事。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 A：社會
    {
      id: 'w3d2-social',
      name: '社會：水利工程與圳路',
      icon: '🏗️',
      lesson: {
        title: '嘉南大圳：一條水道養活百萬人',
        sections: [
          {
            title: '台灣南部的困境',
            blocks: [
              {
                type: 'text',
                content: '日治時期，台灣南部的嘉南平原雖然土地肥沃，卻有一個大問題：雨量分布極不均衡。雨季（5-9月）水太多，旱季（10-4月）又滴水不滴。'
              },
              {
                type: 'text',
                content: '農民只能「看天吃飯」，遇到旱年，莊稼乾死；遇到雨季，洪水又淹沒農田。這片土地的潛力，幾乎被浪費掉了。'
              }
            ]
          },
          {
            title: '八田與一的工程',
            blocks: [
              {
                type: 'text',
                content: '1920年代，日本工程師八田與一受命設計一套大型水利系統，解決嘉南平原的灌溉問題。他的方案是：在台南烏山頭建一座大水庫，再從水庫挖掘長達16000公里的圳路網絡，把水分送到每一塊農田。'
              },
              {
                type: 'text',
                content: '1930年，嘉南大圳完工。灌溉面積從原本的2萬公頃，擴展到15萬公頃，增加了7.5倍！農民的收成大幅提升，嘉南平原成為台灣最重要的糧倉。'
              },
              {
                type: 'quote',
                content: '八田與一不只是一位工程師，也是一位真正關心農民的人。工程施工期間，他一直住在工地，親自監督每一個細節。',
                author: '歷史紀載'
              }
            ]
          },
          {
            title: '三年輪作制的智慧',
            blocks: [
              {
                type: 'text',
                content: '嘉南大圳的水量有限，無法同時灌溉所有農田。八田與一設計了「三年輪作制」：把農地分成三組，每組輪流種水稻（需要大量水）、甘蔗（需要中等水）、雜糧（需要少量水）。'
              },
              {
                type: 'text',
                content: '這樣的設計有兩個好處：\n① 水資源平均分配，不浪費\n② 土地輪流種不同作物，保持土壤肥力'
              }
            ]
          },
          {
            title: '桃園台地的埤塘',
            blocks: [
              {
                type: 'text',
                content: '北部的桃園台地有不一樣的水利故事。台地地勢高，沒有天然河流流過，先人就挖掘了數千個「埤塘」（人工水塘）儲存雨水。'
              },
              {
                type: 'text',
                content: '桃園因此被稱為「千塘之鄉」，藍色的埤塘點綴在農田之間，既是水庫，也是鳥類的棲地，成為獨特的農業地景。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateWaterworkQuestion,
        checkAnswer: checkWaterworkAnswer
      }
    },

    // 單元 B：數學
    {
      id: 'w3d2-math',
      name: '數學：比的化簡與等值比',
      icon: '📐',
      lesson: {
        title: '化簡比——找到最簡單的關係',
        sections: [
          {
            title: '為什麼要化簡比？',
            blocks: [
              {
                type: 'text',
                content: '嘉南大圳每日引水1500公噸，按照600：900分給A區和B區農田。這個比能不能說得更簡單？'
              },
              {
                type: 'text',
                content: '600：900 → 都可以被300整除 → 2：3\n\n「2：3」比「600：900」更清楚：A區拿2份，B區拿3份。這就是「最簡比」。'
              }
            ]
          },
          {
            title: '如何化簡比？',
            blocks: [
              {
                type: 'text',
                content: '化簡比的方法：找前項和後項的「最大公因數」，兩者都除以它。\n\n例：12：18\n→ 12和18的最大公因數是6\n→ 12÷6 = 2，18÷6 = 3\n→ 最簡比是 2：3'
              },
              {
                type: 'text',
                content: '這裡用到了 W2 學的「最大公因數」！\n\n如果你忘記怎麼求最大公因數，可以回去複習 W2 的數學。'
              }
            ]
          },
          {
            title: '等值比',
            blocks: [
              {
                type: 'text',
                content: '2：3 和 4：6 和 6：9，它們的比值都相同（= 2/3），叫做「等值比」。\n\n就像 1/2 和 2/4 和 3/6 都是相同的分數一樣。'
              },
              {
                type: 'text',
                content: '在生活中，比的大小關係才是重點，所以通常化成最簡比最清楚。\n\n「A圳水量：B圳水量 = 2：3」比「600：900」更直覺——就是A拿2份，B拿3份。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateRatioSimplifyQuestion,
        checkAnswer: checkRatioSimplifyAnswer
      }
    },

    // 單元 C：科學
    {
      id: 'w3d2-science',
      name: '科學：月相成因',
      icon: '🌕',
      lesson: {
        title: '為什麼月亮會有圓缺？',
        sections: [
          {
            title: '月亮是個球',
            blocks: [
              {
                type: 'text',
                content: '月亮是個球形的天體，本身不發光。太陽照到月亮的那一面，就是亮的；背對太陽的那一面，是暗的。'
              },
              {
                type: 'text',
                content: '月亮的形狀沒有變，但從地球看過去，我們只能看到月亮被太陽照亮的那部分。隨著月亮繞地球公轉，我們看到的亮面比例就不一樣了，這就是月相變化的原因。'
              }
            ]
          },
          {
            title: '什麼時候看上弦月？什麼時候看下弦月？',
            blocks: [
              {
                type: 'text',
                content: '🌓 上弦月：月相週期的前半段（農曆初七、八）\n• 太陽下山後，在西方天空出現\n• 傍晚到半夜可以看到\n• 右側（西邊）是亮的'
              },
              {
                type: 'text',
                content: '🌗 下弦月：月相週期的後半段（農曆二十二、三）\n• 半夜後從東方升起\n• 清晨時仍可見\n• 左側（東邊）是亮的'
              },
              {
                type: 'text',
                content: '記憶小訣竅：「上弦月，右邊亮；下弦月，左邊亮」'
              }
            ]
          },
          {
            title: '月食：地球的影子',
            blocks: [
              {
                type: 'text',
                content: '月食（尤其是月全食）發生在滿月時：太陽、地球、月亮三者成一直線，地球的影子落在月亮上，讓月亮變暗紅色，這就是「血月」。'
              },
              {
                type: 'text',
                content: '注意：月食 ≠ 月相變化。月相是每個月都會發生的規律現象；月食是偶爾發生的特殊天象，需要三者精準對齊才會出現。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMoonCauseQuestion,
        checkAnswer: checkMoonCauseAnswer
      }
    },

    // 今日回顧
    {
      id: 'w3d2-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '水與比的連結',
            blocks: [
              {
                type: 'text',
                content: '今天三個學科都圍繞著「比例」這個概念：\n\n🏗️ 社會：嘉南大圳按比例分水，三年輪作平衡土地\n📐 數學：化簡比，找到最清楚的比例關係\n🌕 科學：月相是太陽照到月亮的比例，決定我們看到的形狀'
              },
              {
                type: 'text',
                content: '八田與一讓水按比例流向每塊農田，農曆讓時間按月相週期流動——用比例理解世界，是數學最重要的力量之一。'
              },
              {
                type: 'text',
                content: '🌙 明天，我們要進入「時間的流動」：農曆和節氣如何讓農民掌握耕作節奏？分數除法又如何幫我們計算分配問題？'
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
