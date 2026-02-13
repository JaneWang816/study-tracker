// W11 Day3: 酸鹼平衡在哪裡?

const generateEnvironmentQuestion = () => {
  const qs = [
    { question: '酸雨的pH值通常小於多少?', options: [5.6, 7, 8, 6], answer: 0 },
    { question: '造成酸雨的主要氣體是?', options: ['二氧化硫','氧氣','氮氣','氦氣'], answer: 0 },
    { question: '海洋酸化會導致什麼問題?', options: ['珊瑚白化','海水變鹹','魚類增加','溫度下降'], answer: 0 },
    { question: '土壤鹽鹼化的原因是?', options: ['過度灌溉','下雨太多','溫度太低','風吹太大'], answer: 0 }
  ]
  return qs[Math.floor(Math.random() * qs.length)]
}

const generateTwoStepEquation = () => {
  const x = Math.floor(Math.random() * 10) + 1
  const a = Math.floor(Math.random() * 5) + 2
  const b = Math.floor(Math.random() * 8) + 1
  const result = a * x + b
  return {
    question: `解方程式: ${a}x + ${b} = ${result}`,
    options: [x, x+1, x-1, a],
    answer: 0,
    explanation: `先兩邊減${b}，再兩邊除以${a}`
  }
}

const generateAcidBaseSubstance = () => {
  const substances = [
    { name: '檸檬汁', ph: 2, type: '酸性' },
    { name: '肥皂水', ph: 10, type: '鹼性' },
    { name: '醋', ph: 3, type: '酸性' },
    { name: '小蘇打水', ph: 8, type: '鹼性' },
    { name: '胃酸', ph: 2, type: '酸性' },
    { name: '漂白水', ph: 12, type: '鹼性' }
  ]
  const s = substances[Math.floor(Math.random() * substances.length)]
  return {
    question: `${s.name}(pH=${s.ph})是什麼性質?`,
    options: s.ph < 7 ? ['酸性','鹼性','中性','無法判斷'] : ['鹼性','酸性','中性','無法判斷'],
    answer: 0
  }
}

const generateReadingVocabQuestion = () => {
  const vocab = [
    { word: '酸雨', def: '因工業廢氣造成的酸性降雨' },
    { word: '海洋酸化', def: '海水吸收過多二氧化碳導致pH下降' },
    { word: '珊瑚白化', def: '珊瑚失去共生藻變白並死亡' },
    { word: '緩衝能力', def: '生態系抵抗環境變化的能力' }
  ]
  const v = vocab[Math.floor(Math.random() * vocab.length)]
  const opts = [v.def, ...vocab.filter(x => x !== v).map(x => x.def).slice(0,3)]
  const sh = opts.sort(() => Math.random() - 0.5)
  return {
    question: `「${v.word}」的意思是?`,
    options: sh,
    answer: sh.indexOf(v.def)
  }
}

const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '🌊',
  color: '#10B981',
  title: '酸鹼平衡在哪裡?',
  units: [
    {
      id: 'w11d3-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(三)',
        sections: [{
          title: '閱讀文本',
          blocks: [
            { type: 'quote', content: '台灣，其實，不就是一個高山島嶼嗎？兩億五千萬年以前...四百多萬年前，一次對台灣影響最大的造山運動發生了...台灣因此高山遍佈。', author: '陳列《玉山去來》' },
            { type: 'text', content: '台灣的高山是板塊擠壓形成的。今天我們要學習:當環境的平衡被破壞(酸雨、海洋酸化)，會發生什麼事?' }
          ]
        }]
      }
    },
    {
      id: 'w11d3-society',
      name: '社會',
      icon: '🏛️',
      lesson: {
        title: '環境破壞案例',
        sections: [
          {
            title: '酸雨',
            blocks: [
              { type: 'text', content: '**成因**: 工廠排放二氧化硫(SO₂)、氮氧化物(NOₓ) → 溶於雨水 → pH<5.6\n**影響**: 森林枯萎、湖泊酸化、建築腐蝕\n**實例**: 1980年代歐洲「黑森林」大量死亡' }
            ]
          },
          {
            title: '海洋酸化',
            blocks: [
              { type: 'text', content: '**成因**: 海水吸收過多CO₂ → pH從8.2降至8.1(看似微小，實際酸度增加30%)\n**影響**: 珊瑚白化、貝類殼變薄、食物鏈崩潰\n**墾丁危機**: 墾丁珊瑚覆蓋率從60%降至30%' }
            ]
          },
          {
            title: '土壤鹽鹼化',
            blocks: [
              { type: 'text', content: '**成因**: 過度灌溉 → 鹽分累積 → 土壤pH過高或過低\n**影響**: 作物無法生長、土地荒廢\n**台灣案例**: 雲嘉沿海地區地層下陷+海水入侵' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateEnvironmentQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d3-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '兩步驟解方程式',
        sections: [
          {
            title: '兩步驟方法',
            blocks: [
              { type: 'text', content: '**例題**: 2x + 3 = 11\n\n步驟:\n1. 先減: 兩邊減3 → 2x = 8\n2. 再除: 兩邊除以2 → x = 4\n3. 驗算: 2×4+3 = 11 ✓\n\n**口訣**: 先加減、再乘除' }
            ]
          },
          {
            title: '練習',
            blocks: [
              { type: 'text', content: '**練習1**: 3x + 5 = 14\n解: 3x = 9, x = 3\n\n**練習2**: 4x - 2 = 10\n解: 4x = 12, x = 3' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateTwoStepEquation,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d3-science',
      name: '科學',
      icon: '🧪',
      lesson: {
        title: '生活中的酸鹼',
        sections: [
          {
            title: '酸性物質',
            blocks: [
              { type: 'text', content: '• 胃酸 pH 2: 幫助消化\n• 檸檬汁 pH 2: 檸檬酸\n• 醋 pH 3: 醋酸\n• 汽水 pH 3: 碳酸\n• 番茄汁 pH 4\n• 黑咖啡 pH 5' }
            ]
          },
          {
            title: '鹼性物質',
            blocks: [
              { type: 'text', content: '• 海水 pH 8\n• 小蘇打水 pH 8.5\n• 肥皂水 pH 10\n• 漂白水 pH 12\n• 通樂 pH 14' }
            ]
          },
          {
            title: '人體pH恆定',
            blocks: [
              { type: 'text', content: '• 血液 pH 7.35-7.45 (偏離會危及生命)\n• 胃 pH 1-2 (殺菌、消化)\n• 皮膚 pH 5.5 (抑菌)\n• 口腔 pH 6.5-7.5\n\n人體有強大的緩衝系統維持pH平衡!' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateAcidBaseSubstance,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d3-vocabulary',
      name: '語文',
      icon: '📝',
      lesson: {
        title: '環境詞彙',
        sections: [{
          title: '重點詞彙',
          blocks: [
            { type: 'text', content: '**1. 酸雨**: 因工業廢氣造成的酸性降雨(pH<5.6)\n**2. 海洋酸化**: 海水吸收過多CO₂導致pH下降\n**3. 珊瑚白化**: 珊瑚失去共生藻變白並死亡\n**4. 緩衝能力**: 生態系抵抗環境變化的能力\n**5. 食物鏈**: 生物之間「吃與被吃」的關係' }
          ]
        }]
      },
      practice: {
        questionCount: 5,
        generator: generateReadingVocabQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d3-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第3天總結',
        sections: [{
          title: '學習重點',
          blocks: [
            { type: 'text', content: '**社會**: 酸雨、海洋酸化、土壤鹽鹼化——環境破壞實例\n**數學**: 兩步驟解方程式(先加減、再乘除)\n**科學**: 生活中的酸鹼物質分類\n**語文**: 環境保護相關詞彙\n\n**明天預告**: 數學綜合應用、抒情文寫作「給未來地球的一封信」' }
          ]
        }]
      }
    }
  ]
}

export default day3
