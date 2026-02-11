// src/data/weeks/week04/day2.js
// W4 Day2：清朝人怎麼開發台灣？

// ===== 社會：清領時期土地開發 =====
const generateQingTaiwanQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '清朝正式將台灣納入版圖是在哪一年？',
      options: ['1624年（荷蘭統治時期）', '1662年（鄭成功驅逐荷蘭）', '1683年（施琅攻台）', '1895年（馬關條約割讓日本）'],
      answer: 2,
      explanation: '1683年，清朝將領施琅攻台，鄭克塽降清，清朝正式將台灣納入版圖，設台灣府隸屬福建省。'
    },
    {
      type: 'choice',
      question: '清朝初期對台灣的移民採取什麼政策？',
      options: [
        '鼓勵大量移民，給予土地獎勵',
        '嚴格限制移民，設有渡台禁令（禁止攜帶家眷）',
        '強迫中國人移民台灣',
        '完全開放，任何人都可以移民'
      ],
      answer: 1,
      explanation: '清初實行嚴格的渡台禁令，禁止攜帶家眷、限制移民人數，主要是防止台灣成為反清勢力的基地。'
    },
    {
      type: 'choice',
      question: '清朝開墾台灣西部平原，主要以哪個方式取得農地？',
      options: [
        '全部由政府分配',
        '漢人向原住民購買或租用土地，或向清廷申請開墾執照（墾照）',
        '純靠武力強奪原住民土地',
        '只開發海邊的土地'
      ],
      answer: 1,
      explanation: '清領時期，漢人向原住民租地或購地，或向官府申請墾照，成為地主（墾首），再招募佃農開墾，形成複雜的土地關係。'
    },
    {
      type: 'choice',
      question: '「番界」是清朝設立的什麼？',
      options: [
        '外國領土的邊界',
        '漢人聚落的邊界牆',
        '劃分漢人開墾區和原住民土地的界線，以土牛溝或木柵為標記',
        '台灣和中國大陸之間的海上邊界'
      ],
      answer: 2,
      explanation: '清朝設立「番界」，以土牛溝（人工挖掘的溝渠）為界，東側屬原住民地（「番地」），西側為漢人開墾區，旨在減少漢番衝突。'
    },
    {
      type: 'choice',
      question: '清朝時期，台灣最重要的出口農產品是什麼？',
      options: ['茶葉和蔗糖', '稻米和小麥', '玉米和高粱', '棉花和絲綢'],
      answer: 0,
      explanation: '清朝中後期，台灣北部盛產茶葉（尤其是烏龍茶），中南部盛產蔗糖，是主要出口商品，也推動了台灣的商業發展。'
    },
    {
      type: 'choice',
      question: '清領台灣後期（1885年），台灣被提升為什麼地位？',
      options: [
        '維持隸屬福建省的台灣府',
        '升格為台灣省，成為中國的第20個省',
        '改為直轄市，由皇帝直接管轄',
        '賣給英國作為租界'
      ],
      answer: 1,
      explanation: '1885年，清廷意識到台灣的戰略重要性（尤其是中法戰爭後），將台灣升格為省，首任巡撫劉銘傳積極推動現代化建設。'
    },
    {
      type: 'choice',
      question: '清領時期的台灣，漢人最先開墾的區域是？',
      options: [
        '高山深處的山地',
        '台灣東部太平洋沿岸',
        '西部沿海平原（台南、彰化、新竹一帶）',
        '澎湖群島'
      ],
      answer: 2,
      explanation: '漢人先由台南鹿耳門登陸（明鄭時期），再逐漸向北、向東擴展，西部沿海平原因地勢平坦、土地肥沃，是最早也最密集開墾的區域。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkQingTaiwanAnswer = (q, a) => parseInt(a) === q.answer

// ===== 數學：縮圖與擴圖 =====
const generateScaleDrawingQuestion = () => {
  const types = ['enlarge', 'reduce', 'find_scale']
  const t = types[Math.floor(Math.random() * types.length)]

  if (t === 'enlarge') {
    const problems = [
      { orig: 3, factor: 4, result: 12, label: '線段' },
      { orig: 5, factor: 3, result: 15, label: '邊長' },
      { orig: 8, factor: 2, result: 16, label: '距離' },
      { orig: 6, factor: 5, result: 30, label: '長度' },
      { orig: 4, factor: 6, result: 24, label: '寬度' }
    ]
    const p = problems[Math.floor(Math.random() * problems.length)]
    const opts = [p.result, p.result + p.orig, p.orig + p.factor, p.orig * 2]
      .map(String).sort(() => Math.random() - 0.5)
    const ans = opts.indexOf(String(p.result))
    return {
      type: 'choice',
      question: `將一條長 ${p.orig} 公分的${p.label}放大為 ${p.factor} 倍，結果是多少公分？`,
      options: opts,
      answer: ans,
      explanation: `放大 ${p.factor} 倍：${p.orig} × ${p.factor} = ${p.result} 公分。`
    }
  }

  if (t === 'reduce') {
    const problems = [
      { orig: 24, factor: 4, result: 6 },
      { orig: 30, factor: 5, result: 6 },
      { orig: 20, factor: 4, result: 5 },
      { orig: 18, factor: 3, result: 6 },
      { orig: 40, factor: 8, result: 5 }
    ]
    const p = problems[Math.floor(Math.random() * problems.length)]
    const opts = [p.result, p.result + 2, p.orig / 2, p.orig - p.factor]
      .map(String).sort(() => Math.random() - 0.5)
    const ans = opts.indexOf(String(p.result))
    return {
      type: 'choice',
      question: `一張地圖把實際 ${p.orig} 公尺的距離縮小為原來的 1/${p.factor}，地圖上應畫多少公尺？`,
      options: opts,
      answer: ans,
      explanation: `縮小為 1/${p.factor}：${p.orig} ÷ ${p.factor} = ${p.result} 公尺。`
    }
  }

  // find_scale
  const problems = [
    { map: 4, real: 200, scaleStr: '1：50', exp: '比例尺 = 圖上÷實際 = 4÷200 = 1/50，即 1：50' },
    { map: 3, real: 300, scaleStr: '1：100', exp: '比例尺 = 3÷300 = 1/100，即 1：100' },
    { map: 5, real: 500, scaleStr: '1：100', exp: '比例尺 = 5÷500 = 1/100，即 1：100' },
    { map: 2, real: 400, scaleStr: '1：200', exp: '比例尺 = 2÷400 = 1/200，即 1：200' }
  ]
  const p = problems[Math.floor(Math.random() * problems.length)]
  const opts = [p.scaleStr, '1：25', '1：500', '2：100'].sort(() => Math.random() - 0.5)
  const ans = opts.indexOf(p.scaleStr)
  return {
    type: 'choice',
    question: `圖上距離 ${p.map} 公分代表實際距離 ${p.real} 公分，這張圖的比例尺是多少？`,
    options: opts,
    answer: ans,
    explanation: p.exp
  }
}

const checkScaleDrawingAnswer = (q, a) => parseInt(a) === q.answer

// ===== 科學：熱的對流 =====
const generateHeatConvectionQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '熱的「對流」是指什麼？',
      options: [
        '熱透過固體直接接觸傳遞',
        '熱以電磁波形式在空間傳播',
        '熱隨著流體（液體或氣體）的流動而移動，熱的流體上升、冷的下沉形成循環',
        '熱只能在真空中傳播'
      ],
      answer: 2,
      explanation: '對流是熱量透過流體（液體或氣體）的流動傳遞。受熱的流體體積膨脹、密度減小而上升；冷的流體密度大而下沉，形成對流循環。'
    },
    {
      type: 'choice',
      question: '為什麼熱空氣會往上升？',
      options: [
        '因為熱空氣比較輕（密度較小），浮力大於重力',
        '因為熱空氣溫度高，往溫度低的地方移動',
        '因為熱空氣裡的分子比較大',
        '因為地球磁場的影響'
      ],
      answer: 0,
      explanation: '空氣受熱後體積膨脹，同體積的質量減少，密度降低，浮力大於重力，因此上升。冷空氣密度大，下沉補充，形成對流循環。'
    },
    {
      type: 'choice',
      question: '台灣夏天的海陸風是對流現象嗎？',
      options: [
        '不是，海陸風和對流無關',
        '是的，白天陸地比海面熱，陸地熱空氣上升、海面涼空氣補入，形成海風',
        '是的，夜晚陸地比海面熱，形成陸風',
        '海陸風只發生在冬天'
      ],
      answer: 1,
      explanation: '白天陸地比海面升溫快，陸地熱空氣上升，海面較涼的空氣補入，形成從海面吹向陸地的「海風」。夜晚相反（陸地冷卻快，海面暖，吹「陸風」）。這是對流的大尺度應用。'
    },
    {
      type: 'choice',
      question: '燒開水時，看到鍋底的水泡往上升，這是什麼現象？',
      options: ['傳導', '對流', '輻射', '蒸發'],
      answer: 1,
      explanation: '鍋底水受熱，密度減小向上移動；上層較冷的水下沉到鍋底再被加熱，形成對流循環，這樣整鍋水都能被均勻加熱。'
    },
    {
      type: 'choice',
      question: '台灣夏天的午後雷陣雨，主要是哪種對流現象造成的？',
      options: [
        '海水對流形成的',
        '地面受太陽輻射強烈加熱，熱空氣快速上升，形成對流雲（積雨雲），帶來雷陣雨',
        '山脈反射太陽光造成的',
        '颱風帶來的固定降雨模式'
      ],
      answer: 1,
      explanation: '台灣夏天太陽強烈，地面溫度急升，大量熱空氣快速上升，攜帶大量水汽形成積雨雲，在午後（地面最熱的時段）爆發為雷陣雨。這是典型的「熱對流」降雨。'
    },
    {
      type: 'choice',
      question: '冷氣機（空調）的冷空氣通常從上方吹出，暖氣機的熱風通常從下方或地面附近吹出。這是利用了什麼原理？',
      options: [
        '電氣工程的設計習慣，和物理無關',
        '對流：冷空氣密度大會下沉，從上方吹出可擴散整個空間；熱空氣密度小會上升，從下方吹出可均勻加熱空間',
        '只是為了安全，防止觸電',
        '對流和這個設計無關'
      ],
      answer: 1,
      explanation: '冷空氣從上方吹，利用其密度大下沉的特性，自然地冷卻整個空間；熱空氣從下方吹，利用其密度小上升的特性，均勻加熱空間。這是工程師應用對流原理的設計。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkHeatConvectionAnswer = (q, a) => parseInt(a) === q.answer

// ===== 組合成 Day 2 =====
const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '🏡',
  color: '#D97706',
  title: '清朝人怎麼開發台灣？',
  units: [
    {
      id: 'w4d2-opening',
      name: '開場：寒食帖的時節',
      icon: '📖',
      lesson: {
        title: '古詩詞中的節氣——第二段',
        sections: [
          {
            title: '今日詩引',
            blocks: [
              {
                type: 'quote',
                content: '清明時節雨紛紛，路上行人欲斷魂。\n借問酒家何處有？牧童遙指杏花村。',
                author: '杜牧〈清明〉'
              },
              {
                type: 'text',
                content: '清明節前後，中國江南多陰雨，詩人杜牧在旅途中感到孤寂，向牧童問路。這首詩裡的「雨紛紛」，就是清明節氣的氣候特徵：春天的鋒面帶來連綿細雨。'
              },
              {
                type: 'text',
                content: '台灣的清明節（4月初）也常有雨，正是梅雨季的前奏。從詩詞到氣候，從中國大陸到台灣，季風和鋒面跨越海峽，帶來相似的天氣記憶。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w4d2-social',
      name: '社會：清領時期土地開發',
      icon: '⛏️',
      lesson: {
        title: '清朝人如何一步步開墾台灣',
        sections: [
          {
            title: '從南到北，從西到東',
            blocks: [
              {
                type: 'text',
                content: '1683年清朝統治台灣後，大批閩粵移民渡海來台。他們從最早的聚落台南，沿著西部平原向北推進，再沿著河流谷地向山區延伸。'
              },
              {
                type: 'text',
                content: '開墾的節奏和氣候密切相關：\n• 西部平原地勢平坦、土地肥沃，優先開發\n• 東部山脈高聳、瘴氣（瘧疾）盛行，開發晚且難'
              }
            ]
          },
          {
            title: '墾首制度與土地關係',
            blocks: [
              {
                type: 'text',
                content: '清朝開墾台灣有一套制度：\n\n① 「墾首」（地主）：向官府申請墾照，獲得開墾權，負責召集佃農\n② 「佃農」：實際從事耕作，繳租給墾首\n③ 「大租」「小租」：複雜的土地租賃體系，形成台灣特有的「一田兩主」制度'
              },
              {
                type: 'text',
                content: '這套制度讓台灣在短短一百年內，西部平原幾乎全部被開墾。但也造成漢人與原住民的土地衝突，以及嚴重的社會貧富不均。'
              }
            ]
          },
          {
            title: '番界與前山後山',
            blocks: [
              {
                type: 'text',
                content: '清朝在台灣設立「番界」，用土牛溝（人工挖掘的溝渠）和木柵區隔漢人區（界西）和原住民區（界東）。\n\n「前山」：西部已開發的漢人區\n「後山」：東部山脈以東，原住民居住的地方（今花蓮、台東）'
              },
              {
                type: 'text',
                content: '清朝後期才逐漸「開山撫番」，試圖將後山也納入管轄。但直到日治時期，花東縱谷才被大規模開發。'
              }
            ]
          },
          {
            title: '劉銘傳的現代化',
            blocks: [
              {
                type: 'text',
                content: '1885年，台灣升格為省，首任巡撫劉銘傳推動了一系列現代化措施：\n\n🚂 台灣第一條鐵路（基隆-台北-新竹）\n📮 電報線路\n🏫 新式學堂\n🗺️ 土地丈量清查\n\n這些建設，為後來日治時期的現代化打下了基礎。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateQingTaiwanQuestion,
        checkAnswer: checkQingTaiwanAnswer
      }
    },

    {
      id: 'w4d2-math',
      name: '數學：縮圖與擴圖',
      icon: '📐',
      lesson: {
        title: '縮圖與擴圖——比例的幾何應用',
        sections: [
          {
            title: '縮圖：把大的畫小',
            blocks: [
              {
                type: 'text',
                content: '縮圖就是按照比例把圖形縮小，所有長度按同一個比例縮小。\n\n例：一塊農田長100公尺、寬60公尺，按 1：20 縮圖\n→ 圖上長度 = 100 ÷ 20 = 5 公分\n→ 圖上寬度 = 60 ÷ 20 = 3 公分\n\n重要：縮圖後，形狀不變，只有大小改變（比例形變）。'
              }
            ]
          },
          {
            title: '擴圖：把小的放大',
            blocks: [
              {
                type: 'text',
                content: '擴圖是縮圖的反操作——按比例放大。\n\n例：一張照片長8公分、寬6公分，放大3倍\n→ 放大後長度 = 8 × 3 = 24 公分\n→ 放大後寬度 = 6 × 3 = 18 公分\n\n長寬比維持不變：原本 8：6 = 4：3，放大後 24：18 = 4：3，一樣！'
              }
            ]
          },
          {
            title: '縮放不改變形狀',
            blocks: [
              {
                type: 'text',
                content: '縮放的關鍵原則：\n✅ 所有長度按同一比例變化\n✅ 所有角度保持不變\n✅ 形狀相同，只有大小不同\n\n這樣的兩個圖形，叫做「相似形」（W6 會深入學習）。'
              },
              {
                type: 'text',
                content: '清朝的土地丈量官員，就是用這個原理把實際的土地畫成地圖——把一塊塊農田按比例縮小，畫進地籍冊。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateScaleDrawingQuestion,
        checkAnswer: checkScaleDrawingAnswer
      }
    },

    {
      id: 'w4d2-science',
      name: '科學：熱的對流',
      icon: '🌊',
      lesson: {
        title: '熱怎麼傳遞？——對流篇',
        sections: [
          {
            title: '什麼是對流？',
            blocks: [
              {
                type: 'text',
                content: '對流是熱量透過流體（液體或氣體）的「物理移動」來傳遞熱量。\n\n和傳導不同：傳導是熱在固體中「傳遞」，流體（物質）本身不動；對流是熱的流體整體「流動」，帶著熱量一起移動。'
              },
              {
                type: 'text',
                content: '對流的基本原理：\n① 流體受熱 → 體積膨脹 → 密度變小 → 浮力大於重力 → 上升\n② 上方較冷的流體 → 密度大 → 下沉補充\n③ 形成循環（對流胞）'
              }
            ]
          },
          {
            title: '大氣的對流——台灣天氣',
            blocks: [
              {
                type: 'text',
                content: '台灣的天氣，很大程度上是大氣對流的結果：\n\n☀️ 夏天午後雷陣雨：地面強烈受熱→熱空氣快速上升→積雨雲→雷雨\n🌊 海陸風：白天陸地比海面熱→陸地熱空氣上升→海風吹入（清涼）\n🌀 颱風：海面溫暖水汽大量蒸發→熱濕空氣上升→低氣壓→颱風'
              }
            ]
          },
          {
            title: '對流與清領時期的農業',
            blocks: [
              {
                type: 'text',
                content: '清朝移民來台前，台灣西部平原在夏天的午後雷陣雨，是農民賴以維生的自然灌溉。\n\n「看天田」（靠天降雨的農田）在清朝台灣非常普遍——在嘉南大圳（1930年才完工）建成之前，農民只能依賴自然降雨，而台灣夏天的對流雨，就是他們的「天然水庫」。'
              },
              {
                type: 'quote',
                content: '農民看雲知雨——積雨雲（對流雲）又高又厚，代表午後即將下雷陣雨。這是幾百年農業智慧的積累。',
                author: '課程導引'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateHeatConvectionQuestion,
        checkAnswer: checkHeatConvectionAnswer
      }
    },

    {
      id: 'w4d2-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '尺度的歷史',
            blocks: [
              {
                type: 'text',
                content: '今天的三個主題都和「開墾」有關：\n\n⛏️ 社會：清朝移民一步步把台灣西部平原開墾為農田\n📐 數學：縮圖擴圖讓土地測量的成果可以縮進地圖\n🌊 科學：對流帶來的雨水，是清朝農民的自然灌溉'
              },
              {
                type: 'text',
                content: '杜牧說「清明時節雨紛紛」——清朝移民在台灣定居後，也感受著台灣的春雨。但台灣的雨和江南的雨不同：夏天有颱風豪雨，冬天南北大不同。他們必須學習這塊新土地的氣候，才能年年有收成。'
              },
              {
                type: 'text',
                content: '🌡️ 明天，我們學習熱傳遞的第三種方式：輻射——太陽的熱是怎麼穿越太空，到達台灣的？'
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
