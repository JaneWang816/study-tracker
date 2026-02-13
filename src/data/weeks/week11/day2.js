// W11 Day2: 保護區在保護什麼?
// 本檔案包含完整的題目生成器和6個教學單元

// ==================== 題目生成器 ====================

const generateParkFeatureQuestion = () => {
  const parks = [
    { name: '玉山國家公園', feature: '東北亞第一高峰', species: '台灣黑熊' },
    { name: '太魯閣國家公園', feature: '大理石峽谷', species: '台灣獼猴' },
    { name: '墾丁國家公園', feature: '熱帶珊瑚礁生態', species: '梅花鹿' },
    { name: '陽明山國家公園', feature: '火山地形', species: '台北樹蛙' },
    { name: '雪霸國家公園', feature: '冰河遺跡', species: '櫻花鉤吻鮭' }
  ]
  
  const qTypes = [
    () => {
      const p = parks[Math.floor(Math.random() * parks.length)]
      const opts = [p.feature, ...parks.filter(x => x !== p).map(x => x.feature).slice(0,3)]
      const sh = opts.sort(() => Math.random() - 0.5)
      return { question: `${p.name}的主要特色是?`, options: sh, answer: sh.indexOf(p.feature) }
    },
    () => ({
      question: '哪個國家公園有櫻花鉤吻鮭?',
      options: ['雪霸國家公園','玉山國家公園','墾丁國家公園','陽明山國家公園'],
      answer: 0
    }),
    () => ({
      question: '野生動物保育法是哪一年制定?',
      options: [1989, 1984, 1992, 1995],
      answer: 0
    })
  ]
  
  return qTypes[Math.floor(Math.random() * qTypes.length)]()
}

const generateEquationAddSubQuestion = () => {
  const types = [
    () => {
      const x = Math.floor(Math.random() * 15) + 1
      const a = Math.floor(Math.random() * 10) + 1
      return {
        question: `解方程式: x + ${a} = ${x + a}`,
        options: [x, x+1, x-1, a],
        answer: 0
      }
    },
    () => {
      const x = Math.floor(Math.random() * 15) + 5
      const a = Math.floor(Math.random() * 4) + 1
      return {
        question: `解方程式: x - ${a} = ${x - a}`,
        options: [x, x+1, x-1, x-a],
        answer: 0
      }
    }
  ]
  return types[Math.floor(Math.random() * types.length)]()
}

const generatePHQuestion = () => {
  const qs = [
    { question: 'pH值範圍是?', options: ['0到14','1到10','0到100','-7到7'], answer: 0 },
    { question: '純水的pH值是?', options: [7,0,14,10], answer: 0 },
    { question: 'pH<7代表?', options: ['酸性','鹼性','中性','無法判斷'], answer: 0 },
    { question: 'pH>7代表?', options: ['鹼性','酸性','中性','無法判斷'], answer: 0 }
  ]
  return qs[Math.floor(Math.random() * qs.length)]
}

const generateConservationVocabQuestion = () => {
  const vocab = [
    { word: '保育法', def: '保護野生動植物的法律規範' },
    { word: '瀕危物種', def: '面臨滅絕危機的生物' },
    { word: '國寶魚', def: '國家級珍貴的魚類' },
    { word: '候鳥', def: '隨季節遷徙的鳥類' }
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

// ==================== Day2 結構 ====================

const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '🏔️',
  color: '#10B981',
  title: '保護區在保護什麼?',
  units: [
    {
      id: 'w11d2-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(二)',
        sections: [{
          title: '閱讀文本',
          blocks: [
            { type: 'quote', content: '這是四月初的時候，清晨近五點，我第一次登上玉山主峰頂。當我正是氣喘吁吁，驚疑的心神仍來不及落定時，山頂上那種宇宙洪荒般詭譎的氣象，剎那間就將我完全震懾住了。', author: '陳列《玉山去來》' },
            { type: 'text', content: '作者陳列在玉山頂看到了震撼的風雲景象。今天我們要了解:台灣五大國家公園各自保護著什麼珍貴資源?' }
          ]
        }]
      }
    },
    {
      id: 'w11d2-society',
      name: '社會',
      icon: '🏛️',
      lesson: {
        title: '五大國家公園特色',
        sections: [
          {
            title: '玉山國家公園',
            blocks: [
              { type: 'text', content: '**特色**:東北亞第一高峰(3,952公尺)\n**保育重點**:高山生態、台灣黑熊、濁水溪源頭\n**重要性**:完整的垂直植物帶、台灣水資源來源' }
            ]
          },
          {
            title: '太魯閣國家公園',
            blocks: [
              { type: 'text', content: '**特色**:大理石峽谷\n**保育重點**:2億年大理石地形、立霧溪生態\n**重要性**:世界級地質景觀' }
            ]
          },
          {
            title: '墾丁國家公園',
            blocks: [
              { type: 'text', content: '**特色**:熱帶珊瑚礁\n**保育重點**:300種珊瑚、候鳥遷徙站\n**重要性**:台灣唯一熱帶海洋生態' }
            ]
          },
          {
            title: '陽明山國家公園',
            blocks: [
              { type: 'text', content: '**特色**:火山地形\n**保育重點**:七星山、溫泉、北降植物\n**重要性**:台北都會區綠肺' }
            ]
          },
          {
            title: '雪霸國家公園',
            blocks: [
              { type: 'text', content: '**特色**:冰河遺跡\n**保育重點**:櫻花鉤吻鮭(國寶魚)、雪山圈谷\n**重要性**:冰河時期陸封型鮭魚，全球獨一無二' }
            ]
          },
          {
            title: '野生動物保育法(1989)',
            blocks: [
              { type: 'text', content: '三級保育:\n• 第一級:瀕臨絕種(石虎、台灣黑熊)\n• 第二級:珍貴稀有(台灣獼猴)\n• 第三級:其他應予保育(八色鳥)\n\n違法最高罰則:5年徒刑+100萬罰金' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateParkFeatureQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d2-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '等量公理一:加減',
        sections: [
          {
            title: '等量公理',
            blocks: [
              { type: 'text', content: '**等量公理一**:等式兩邊同時加減同一數，等式仍成立。' }
            ]
          },
          {
            title: '解題步驟',
            blocks: [
              { type: 'text', content: '**例題**: x + 3 = 7\n\n步驟:\n1. 兩邊同時減3\n2. x + 3 - 3 = 7 - 3\n3. x = 4\n4. 驗算: 4 + 3 = 7 ✓' }
            ]
          },
          {
            title: '口訣',
            blocks: [
              { type: 'text', content: '「+變-，-變+」\n\n• x + a = b → x = b - a\n• x - a = b → x = b + a' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateEquationAddSubQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d2-science',
      name: '科學',
      icon: '🧪',
      lesson: {
        title: 'pH值數線',
        sections: [
          {
            title: 'pH值定義',
            blocks: [
              { type: 'text', content: 'pH值:用0-14的數字表示酸鹼程度\n\n• pH < 7: 酸性(越小越酸)\n• pH = 7: 中性\n• pH > 7: 鹼性(越大越鹼)' }
            ]
          },
          {
            title: '常見物質pH值',
            blocks: [
              { type: 'text', content: '**酸性**:\n• 胃酸 pH 1-2\n• 檸檬汁 pH 2\n• 醋 pH 3\n\n**中性**:\n• 純水 pH 7\n• 血液 pH 7.4\n\n**鹼性**:\n• 小蘇打水 pH 8\n• 肥皂水 pH 10\n• 漂白水 pH 12' }
            ]
          },
          {
            title: 'pH與環境保育',
            blocks: [
              { type: 'text', content: '**案例1**: 櫻花鉤吻鮭需要pH 7-8的清水\n**案例2**: 珊瑚需要pH 8.1-8.4，海洋酸化威脅珊瑚生存\n**案例3**: 酸雨pH<5.6會傷害植物和建築' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generatePHQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d2-vocabulary',
      name: '語文',
      icon: '📝',
      lesson: {
        title: '保育詞彙',
        sections: [{
          title: '重點詞彙',
          blocks: [
            { type: 'text', content: '**1. 保育法**: 保護野生動植物的法律規範\n**2. 瀕危物種**: 面臨滅絕危機的生物\n**3. 國寶魚**: 櫻花鉤吻鮭\n**4. 候鳥**: 隨季節遷徙的鳥類\n**5. 地質遺跡**: 具科學價值的地質構造' }
          ]
        }]
      },
      practice: {
        questionCount: 5,
        generator: generateConservationVocabQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d2-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第2天總結',
        sections: [{
          title: '學習重點',
          blocks: [
            { type: 'text', content: '**社會**: 五大國家公園各有特色，保護不同生態系統\n**數學**: 等量公理一(加減)，解一元一次方程式\n**科學**: pH值0-14，酸鹼中性的數字表示\n**語文**: 保育法、瀕危物種、國寶魚等詞彙\n\n**跨學科連結**: 保護平衡——生態平衡、等式平衡、pH平衡' }
          ]
        }]
      }
    }
  ]
}

export default day2
