// src/data/weeks/week06/day2.js
// W6 Day2：食物怎麼從農場到餐桌？
// 貫穿文本：〈米的臺灣史〉第二段（荷蘭時期→清領）

// ===== 社會：產業鏈（一、二、三級產業）=====
const generateSocialQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「一級產業」指的是什麼？',
      options: [
        '直接從自然界取得資源的產業（農業、漁業、林業、礦業）',
        '製造加工業（工廠生產）',
        '服務業（餐廳、運輸、銷售）',
        '科技業和金融業'
      ],
      answer: 0,
      explanation: '一級產業是直接從自然界取得資源的產業，包括農業（種植）、漁業（捕魚）、林業（砍伐）、礦業（採礦）。台灣早期以農業為主，就是以一級產業為核心。'
    },
    {
      type: 'choice',
      question: '稻米從農田到我們碗裡的米飯，要經過哪些「產業」？',
      options: [
        '農民種稻（一級）→ 碾米廠加工（二級）→ 超市銷售或餐廳煮飯（三級）',
        '只有農民種稻（一級）就夠了',
        '直接從工廠生產（二級）就好',
        '只需要超市（三級）即可'
      ],
      answer: 0,
      explanation: '一粒米從田到碗需要三個層次：農民種稻是一級產業；碾米廠把稻穀去殼、加工成白米是二級產業；超市販賣或餐廳把米煮成飯是三級產業。這就是完整的「產業鏈」。'
    },
    {
      type: 'choice',
      question: '荷蘭人來台灣（1624-1662年）對台灣農業最重要的影響是什麼？',
      options: [
        '引進大量閩粵移民，帶來稻種和耕種技術，並從澎湖引進耕牛',
        '教導原住民種水稻',
        '建立了台灣第一座碾米廠',
        '把台灣所有稻米都運走，造成饑荒'
      ],
      answer: 0,
      explanation: '荷蘭東印度公司為了大量生產糧食外銷，從福建招攬大批閩粵漢人移民來台開墾，這些移民帶來了稻種、耕種技術和灌溉系統，並引進耕牛，奠定了台灣農業的基礎。'
    },
    {
      type: 'choice',
      question: '清代台灣的稻米不只供應島內，還銷往哪裡？',
      options: [
        '福建的漳州、泉州（中國大陸）',
        '日本',
        '荷蘭',
        '台灣稻米只供應島內，不出口'
      ],
      answer: 0,
      explanation: '清代台灣大量生產稻米，除了供應島內需求，還出口到福建的漳州、泉州。福建沿海地區人多地少，仰賴台灣稻米接濟，可見當時台灣已是重要的糧食出口地。'
    },
    {
      type: 'choice',
      question: '「二級產業」是指什麼？',
      options: [
        '以一級產業的原料為基礎，進行加工製造的產業（工廠、碾米廠、製糖廠）',
        '直接採集自然資源',
        '提供服務的行業',
        '政府的行政機構'
      ],
      answer: 0,
      explanation: '二級產業是製造加工業，把一級產業的原料（稻穀、甘蔗、木材）加工成產品（白米、砂糖、木料）。碾米廠把稻穀加工成白米、製糖廠把甘蔗製成砂糖，都是二級產業。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== 數學：圓面積應用 =====
const generateMathQuestion = () => {
  const type = Math.floor(Math.random() * 4)

  if (type === 0) {
    // 農田面積情境
    const r = [8, 12, 15, 20][Math.floor(Math.random() * 4)]
    const area = (3.14 * r * r).toFixed(2)
    const wrong1 = (2 * 3.14 * r).toFixed(2)
    const wrong2 = (3.14 * r * r / 2).toFixed(2)
    const wrong3 = (3.14 * r * r + r).toFixed(2)
    const options = [area, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `一塊圓形水田的半徑是 ${r} 公尺，這塊水田的面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(area),
      explanation: `S = πr² = 3.14 × ${r}² = 3.14 × ${r * r} = ${area} 平方公尺`
    }
  }

  if (type === 1) {
    // 兩塊農田面積差
    const r1 = [5, 6, 8][Math.floor(Math.random() * 3)]
    const r2 = r1 + [2, 3, 4][Math.floor(Math.random() * 3)]
    const a1 = 3.14 * r1 * r1
    const a2 = 3.14 * r2 * r2
    const diff = (a2 - a1).toFixed(2)
    const wrong1 = (3.14 * (r2 - r1) * (r2 - r1)).toFixed(2)
    const wrong2 = (a2 + a1).toFixed(2)
    const wrong3 = (a2 / a1).toFixed(2)
    const options = [diff, wrong1, wrong2, wrong3]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `農場有兩塊圓形稻田：A田半徑 ${r1} 公尺，B田半徑 ${r2} 公尺。B田比A田多出多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(diff),
      explanation: `A田面積 = 3.14 × ${r1}² = ${a1.toFixed(2)} 平方公尺\nB田面積 = 3.14 × ${r2}² = ${a2.toFixed(2)} 平方公尺\n差 = ${a2.toFixed(2)} - ${a1.toFixed(2)} = ${diff} 平方公尺`
    }
  }

  if (type === 2) {
    // 圓形與正方形比較
    const side = [10, 14, 20][Math.floor(Math.random() * 3)]
    const r = side / 2
    const squareArea = side * side
    const circleArea = (3.14 * r * r).toFixed(2)
    const diff = (squareArea - parseFloat(circleArea)).toFixed(2)
    const options = [diff, circleArea, String(squareArea), (parseFloat(circleArea) - squareArea).toFixed(2)]
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    return {
      type: 'choice',
      question: `農夫有一塊邊長 ${side} 公尺的正方形土地，在正中間挖了一個圓形水池（半徑 ${r} 公尺）。剩下的土地面積是多少平方公尺？（π ≈ 3.14）`,
      options: shuffled,
      answer: shuffled.indexOf(diff),
      explanation: `正方形面積 = ${side} × ${side} = ${squareArea} 平方公尺\n圓形水池面積 = 3.14 × ${r}² = ${circleArea} 平方公尺\n剩下土地 = ${squareArea} - ${circleArea} = ${diff} 平方公尺`
    }
  }

  // type === 3：灌溉半徑與面積
  const r = [50, 100, 150][Math.floor(Math.random() * 3)]
  const area = (3.14 * r * r).toFixed(0)
  const wrong1 = (2 * 3.14 * r).toFixed(0)
  const wrong2 = (3.14 * r).toFixed(0)
  const wrong3 = (r * r).toFixed(0)
  const options = [area, wrong1, wrong2, wrong3]
  const shuffled = [...options].sort(() => Math.random() - 0.5)
  return {
    type: 'choice',
    question: `一座傳統水車可以把水送到半徑 ${r} 公尺範圍內的農田。這台水車能灌溉的最大面積是多少平方公尺？（π ≈ 3.14）`,
    options: shuffled,
    answer: shuffled.indexOf(area),
    explanation: `灌溉範圍是以水車為圓心、半徑 ${r} 公尺的圓形\n面積 = 3.14 × ${r}² = 3.14 × ${r * r} = ${area} 平方公尺`
  }
}

// ===== 科學：傳統水車與風車 =====
const generateScienceQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '台灣傳統「筒仔水車」的主要用途是？',
      options: [
        '把低處的水提升到高處，灌溉農田',
        '把穀物磨成粉',
        '驅動船隻行進',
        '發電'
      ],
      answer: 0,
      explanation: '筒仔水車是台灣傳統農業的灌溉工具，利用人力踩踏或水流驅動，讓一排竹筒或木桶把水從低處（水溝、河流）提升到高處的農田。'
    },
    {
      type: 'choice',
      question: '傳統水車主要利用哪種簡單機械的原理？',
      options: [
        '輪軸（大輪帶動小軸，傳遞動力）',
        '只靠重力，不需要任何機械原理',
        '槓桿（支點在中間）',
        '滑輪（繩子換方向）'
      ],
      answer: 0,
      explanation: '水車的轉輪就是「輪軸」：人踩踏踏板帶動大輪旋轉，大輪再帶動中心軸，軸上連接著一排提水的筒子。這正是 W5 學的輪軸原理。'
    },
    {
      type: 'choice',
      question: '蘭陽平原（宜蘭）古早有「風車水車」，它和筒仔水車最大的不同是？',
      options: [
        '以風力代替人力驅動水車，不需要人踩踏',
        '可以把水往下送（從高處往低處）',
        '比筒仔水車更省力，因為沒有摩擦力',
        '只能在晚上使用'
      ],
      answer: 0,
      explanation: '風車水車利用宜蘭冬天強勁的東北季風驅動風車，再帶動水車提水灌溉。不需要人力踩踏，是利用自然能源的智慧設計。宜蘭有豐沛的季風，讓這種設計特別實用。'
    },
    {
      type: 'choice',
      question: '「機械效率」是什麼意思？',
      options: [
        '有效輸出的能量佔總輸入能量的比例（效率越高，浪費越少）',
        '機器運轉的速度',
        '機器的重量',
        '機器能使用幾年'
      ],
      answer: 0,
      explanation: '機械效率 = 有效功 ÷ 總功。例如，你踩水車輸入100單位的力，但因為摩擦力損失，只有80單位真正用來提水，效率就是80%。效率越高，浪費越少。任何機械的效率都不可能達到100%（因為一定有摩擦損耗）。'
    },
    {
      type: 'choice',
      question: '和傳統人力水車相比，現代電動抽水機的機械效率通常？',
      options: [
        '更高（電動馬達摩擦損耗更少，效率更高）',
        '更低（電能比人力浪費更多）',
        '完全相同',
        '效率為100%（完全沒有損耗）'
      ],
      answer: 0,
      explanation: '現代電動抽水機的機械效率比傳統水車高很多，因為電動馬達的零件精密、摩擦損耗小。但即使是現代機械，效率也不可能達到100%，因為能量守恆定律——任何機械運作都會有一部分能量以熱的形式散失。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== 語文詞彙：產業鏈用語 =====
const generateVocabQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '「產業鏈」的意思是？',
      options: [
        '從原料生產到最終消費者使用，整個過程中各個環節的連結',
        '只指工廠生產的過程',
        '只指銷售和行銷',
        '連接不同國家產業的鏈條'
      ],
      answer: 0,
      explanation: '產業鏈描述一個產品從原材料到消費者手中的整個過程：種稻（一級）→ 碾米加工（二級）→ 販賣和烹煮（三級），每個環節都是鏈條的一環。'
    },
    {
      type: 'choice',
      question: '文章說荷蘭人「從澎湖引進耕牛」，為什麼要特別從澎湖引進牛，而不是從別的地方？',
      options: [
        '澎湖早有華人定居並養牛，台灣本島原本沒有牛',
        '澎湖的牛比較大隻',
        '澎湖的牛比較便宜',
        '因為從中國進口牛太貴了'
      ],
      answer: 0,
      explanation: '台灣原本沒有牛，原住民的語言裡也沒有「牛」這個詞（噶瑪蘭語的牛字借自西班牙語）。澎湖早有漢人定居並養牛，所以荷蘭人從澎湖把牛引進台灣本島，供農耕使用。'
    },
    {
      type: 'choice',
      question: '「加工」這個詞在「碾米廠把稻穀加工成白米」裡，意思是？',
      options: [
        '對原料進行處理或製造，使其變成另一種形式的產品',
        '增加重量',
        '增加數量',
        '把東西分開'
      ],
      answer: 0,
      explanation: '加工是工業中的重要概念：把原始的原料（稻穀）經過處理（去殼、精製），變成可以使用的產品（白米）。這是二級產業的核心工作。'
    }
  ]
  const q = questions[Math.floor(Math.random() * questions.length)]
  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  return { ...q, options: shuffled, answer: shuffled.indexOf(q.options[q.answer]) }
}

// ===== Day 2 主體 =====
const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '🐂',
  color: '#1565C0',
  title: '食物怎麼從農場到餐桌？',

  units: [
    {
      id: 'w6d2-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '〈米的臺灣史〉第二段',
        sections: [
          {
            title: '荷蘭人來了，帶來了什麼？',
            blocks: [
              {
                type: 'quote',
                content: '臺灣的水稻，一般認為是福建人在17世紀前後從原鄉引進，但不排除原住民可能更早從同屬「南島文化圈」的東南亞引進。\n\n荷蘭人殖民臺灣時期（1624至62年），臺灣本來自己自足的初級農耕漁獵，開始發展以糖、米為主、單一作物的農業經濟。當時，為了大量種植甘蔗、稻米以供外銷，荷蘭人從福建招攬華人渡海來南臺灣耕作，並從澎湖引進耕牛。',
                author: '翁佳音、曹銘宗〈一樣米飼百代人〉'
              },
              {
                type: 'text',
                content: '📍 注意一個有趣的細節：\n\n「臺灣本來沒有牛，原住民的語言本身也無專指牛的名詞。」\n\n我們現在說的「牛」，在台灣其實是外來的！荷蘭人來之前，台灣沒有牛耕。有了牛，農業效率才大幅提升——這也是一種「省力機械」的概念，只是靠的是動物的力量。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w6d2-social',
      name: '社會',
      icon: '🏭',
      lesson: {
        title: '產業鏈：從田間到餐桌',
        sections: [
          {
            title: '三級產業分類',
            blocks: [
              {
                type: 'text',
                content: '經濟學把人類的產業活動分成三個層次：\n\n🌾 一級產業：直接從自然界取得資源\n農業（種植）、漁業（捕魚）、林業（伐木）、礦業（採礦）\n\n🏭 二級產業：對原料進行加工製造\n碾米廠、製糖廠、紡織廠、建築業\n\n🏪 三級產業：提供服務\n餐廳、運輸、銷售、銀行、學校、醫院'
              }
            ]
          },
          {
            title: '米的產業鏈——從稻穀到米飯',
            blocks: [
              {
                type: 'text',
                content: '一粒米的旅程：\n\n①【一級】農民種稻、施肥、灌溉、收割\n↓\n②【一級→二級】稻穀送進碾米廠，去殼、拋光變成白米\n↓\n③【二級→三級】白米裝袋，送到倉儲和物流中心\n↓\n④【三級】超市、米店銷售給消費者\n↓\n⑤【三級】餐廳或家庭烹煮，變成你碗裡的飯\n\n你今天吃的那碗飯，已經走過了這整條鏈！'
              },
              {
                type: 'text',
                content: '台灣農業的歷史轉變：\n\n荷蘭時期：自給農業 → 出口導向農業（糖、米外銷）\n清領時期：移民大量開墾，米出口至福建\n日治時期：蓬萊米育種成功，大量出口日本（W5學過）\n戰後：從出口大國 → 缺糧 → 現在的精品農業\n\n台灣的農業不是靜止的，每個時代都在變化。'
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
      id: 'w6d2-math',
      name: '數學',
      icon: '⭕',
      lesson: {
        title: '圓面積應用：農田規劃',
        sections: [
          {
            title: '面積在農業中的應用',
            blocks: [
              {
                type: 'text',
                content: '農場規劃需要大量的面積計算：\n• 一塊圓形農田有多大？\n• 兩塊不同大小的農田差多少？\n• 一個正方形土地挖了圓形水池，剩下多少可耕地？\n• 一台水車能灌溉多大範圍？\n\n今天的題目都是農業情境，用圓面積 S = πr² 解決實際問題。'
              },
              {
                type: 'text',
                content: '✏️ 例題：\n農民要在半徑50公尺的圓形土地上種稻，但中心要留一個半徑5公尺的圓形小水池。可以種稻的面積是多少？\n\n步驟：\n① 大圓面積 = 3.14 × 50² = 7850 平方公尺\n② 小圓水池面積 = 3.14 × 5² = 78.5 平方公尺\n③ 可種稻面積 = 7850 - 78.5 = 7771.5 平方公尺'
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
      id: 'w6d2-science',
      name: '科學',
      icon: '💧',
      lesson: {
        title: '傳統水車與風車：自然動力的智慧',
        sections: [
          {
            title: '筒仔水車：台灣的灌溉智慧',
            blocks: [
              {
                type: 'text',
                content: '傳統台灣農村最常見的灌溉工具之一是「筒仔水車」（又稱「龍骨水車」）。\n\n它的結構：\n• 一個長長的木框架，傾斜放在水邊\n• 框架裡有一排用木板或竹筒做成的「水斗」\n• 用人力踩踏踏板帶動木輪旋轉\n• 木輪帶動鏈條，鏈條帶動水斗，把水從低處舀到高處\n\n這就是輪軸原理的實際應用：人踩踏板（施力）→ 大輪轉動 → 鏈條帶動水斗提水（作功）。'
              },
              {
                type: 'text',
                content: '🌬️ 宜蘭的風車水車\n\n宜蘭（蘭陽平原）冬天有強勁的東北季風，當地農民設計出「風車水車」：在水車上加裝風帆（類似風車），讓風力代替人力驅動水車。\n\n這是台灣農業史上珍貴的「自然能源」應用，比現代風力發電機早了幾百年，原理卻一樣：風→ 風車葉片旋轉 → 輪軸傳動 → 水車提水。\n\n可惜現在已幾乎沒有傳統風車水車了，只在少數博物館保存。'
              }
            ]
          },
          {
            title: '機械效率：為什麼省力有限度？',
            blocks: [
              {
                type: 'text',
                content: '「機械效率」是說：你輸入多少能量，有多少比例真正做了有用的功。\n\n效率 = 有效功 ÷ 總輸入功 × 100%\n\n傳統木製水車的效率大約只有 30~50%——也就是說，人踩踏板輸入的能量，有一半以上因為摩擦、木材形變等原因白白損失了。\n\n現代電動抽水機效率可達 70~85%，但仍然無法達到 100%。\n\n💡 能量守恆：能量不會消失，只是轉換形式。損失的能量通常變成了熱——這就是機器運轉時會發熱的原因。'
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
      id: 'w6d2-vocab',
      name: '語文',
      icon: '✍️',
      lesson: {
        title: '詞彙：產業鏈用語',
        sections: [
          {
            title: '本日關鍵詞彙',
            blocks: [
              {
                type: 'text',
                content: '🏭 產業詞彙\n\n• 一級產業：農業、漁業、林業、礦業\n• 二級產業：製造業、加工業（把原料變成產品）\n• 三級產業：服務業（餐廳、運輸、銷售等）\n• 產業鏈：從原料到消費者的完整生產流程'
              },
              {
                type: 'text',
                content: '💧 農業機械詞彙\n\n• 筒仔水車：傳統人力灌溉工具，又稱龍骨水車\n• 機械效率：有效輸出能量佔總輸入能量的比例\n• 潤滑：在機械轉動部位塗油脂，減少摩擦損耗\n• 能量損耗：能量轉換過程中以熱能等形式散失的部分'
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
      id: 'w6d2-review',
      name: '今日回顧',
      icon: '🌙',
      lesson: {
        title: '第2天學了什麼？',
        sections: [
          {
            title: '今日收穫',
            blocks: [
              {
                type: 'text',
                content: '今天學到了：\n\n🏭 產業鏈：一級（種稻）→ 二級（碾米）→ 三級（販售烹煮）——你碗裡的飯走過三個產業\n\n⭕ 圓面積應用：農田規劃、灌溉範圍計算\n\n💧 傳統水車與風車：輪軸原理在農業史的實際應用；機械效率永遠小於100%'
              },
              {
                type: 'text',
                content: '💭 明天預告：\n\n文章進入日治時代——蓬萊米誕生，台灣三種稻米並存。而地圖怎麼說故事？從農業分布圖、等值線圖，我們學習讀懂「空間的語言」。還有一個特別的數學方法：用影子量出你不敢爬上去的大樹高度！'
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
