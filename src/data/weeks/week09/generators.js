// week09/generators.js
// W9 統計圖表題庫生成器

// ========== 圓形圖題目生成器 ==========

const pieChartScenarios = [
  {
    title: '班級幹部選舉',
    total: 40,
    items: [
      { name: '小明', min: 10, max: 18 },
      { name: '小華', min: 8, max: 15 },
      { name: '小美', min: 5, max: 12 },
      { name: '小強', min: 3, max: 10 }
    ]
  },
  {
    title: '最喜歡的運動',
    total: 35,
    items: [
      { name: '籃球', min: 8, max: 15 },
      { name: '足球', min: 6, max: 12 },
      { name: '羽球', min: 5, max: 10 },
      { name: '游泳', min: 4, max: 8 }
    ]
  },
  {
    title: '社團選擇',
    total: 50,
    items: [
      { name: '音樂社', min: 12, max: 20 },
      { name: '美術社', min: 10, max: 18 },
      { name: '體育社', min: 8, max: 15 },
      { name: '科學社', min: 5, max: 12 }
    ]
  },
  {
    title: '午餐菜色偏好',
    total: 30,
    items: [
      { name: '雞肉飯', min: 8, max: 12 },
      { name: '滷肉飯', min: 6, max: 10 },
      { name: '排骨飯', min: 5, max: 9 },
      { name: '素食', min: 3, max: 6 }
    ]
  }
]

export const generatePieChartQuestion = () => {
  const scenario = pieChartScenarios[Math.floor(Math.random() * pieChartScenarios.length)]
  
  // 隨機生成各項數值,確保總和正確
  let values = []
  let sum = 0
  
  for (let i = 0; i < scenario.items.length - 1; i++) {
    const item = scenario.items[i]
    const value = Math.floor(Math.random() * (item.max - item.min + 1)) + item.min
    values.push(value)
    sum += value
  }
  
  // 最後一項用總數減去前面的總和
  values.push(scenario.total - sum)
  
  // 隨機選擇一個項目來提問
  const questionIndex = Math.floor(Math.random() * scenario.items.length)
  const questionItem = scenario.items[questionIndex]
  const questionValue = values[questionIndex]
  
  // 計算百分比
  const percentage = (questionValue / scenario.total * 100).toFixed(1)
  
  // 計算角度
  const angle = Math.round(questionValue / scenario.total * 360)
  
  // 隨機決定問百分比還是角度
  const askPercentage = Math.random() < 0.5
  
  if (askPercentage) {
    // 問百分比
    return {
      type: 'pie-chart-percentage',
      scenario: scenario.title,
      total: scenario.total,
      items: scenario.items.map((item, i) => ({
        name: item.name,
        value: values[i]
      })),
      question: `${scenario.title}調查,總共 ${scenario.total} 人。其中${questionItem.name}有 ${questionValue} 人。請問${questionItem.name}占的百分比是多少?(四捨五入到小數點後一位)`,
      answer: parseFloat(percentage),
      unit: '%'
    }
  } else {
    // 問角度
    return {
      type: 'pie-chart-angle',
      scenario: scenario.title,
      total: scenario.total,
      items: scenario.items.map((item, i) => ({
        name: item.name,
        value: values[i]
      })),
      question: `${scenario.title}調查,總共 ${scenario.total} 人。其中${questionItem.name}有 ${questionValue} 人。如果要繪製圓形圖,${questionItem.name}的扇形應該是多少度?(四捨五入到整數)`,
      answer: angle,
      unit: '°'
    }
  }
}

export const checkPieChartAnswer = (question, userAnswer) => {
  const parsed = parseFloat(userAnswer)
  if (isNaN(parsed)) return false
  
  if (question.type === 'pie-chart-percentage') {
    // 百分比容許誤差 0.2%
    return Math.abs(parsed - question.answer) < 0.2
  } else {
    // 角度容許誤差 2°
    return Math.abs(parsed - question.answer) <= 2
  }
}

// ========== 折線圖題目生成器 ==========

const lineChartScenarios = [
  {
    title: '某班段考成績平均',
    unit: '分',
    years: ['第一次', '第二次', '第三次'],
    minValue: 70,
    maxValue: 95,
    trend: 'up' // up, down, flat, mixed
  },
  {
    title: '學校圖書館借書人次',
    unit: '人次',
    years: ['一月', '二月', '三月', '四月'],
    minValue: 100,
    maxValue: 250,
    trend: 'mixed'
  },
  {
    title: '班級出席率',
    unit: '%',
    years: ['第一週', '第二週', '第三週', '第四週'],
    minValue: 85,
    maxValue: 100,
    trend: 'flat'
  }
]

export const generateLineChartQuestion = () => {
  const scenario = lineChartScenarios[Math.floor(Math.random() * lineChartScenarios.length)]
  
  // 根據趨勢生成數據
  let values = []
  let firstValue = Math.floor(Math.random() * (scenario.maxValue - scenario.minValue + 1)) + scenario.minValue
  values.push(firstValue)
  
  for (let i = 1; i < scenario.years.length; i++) {
    let nextValue
    if (scenario.trend === 'up') {
      nextValue = values[i-1] + Math.floor(Math.random() * 10) + 1
    } else if (scenario.trend === 'down') {
      nextValue = values[i-1] - Math.floor(Math.random() * 10) - 1
    } else if (scenario.trend === 'flat') {
      nextValue = values[i-1] + (Math.random() < 0.5 ? 1 : -1) * Math.floor(Math.random() * 3)
    } else { // mixed
      nextValue = values[i-1] + (Math.random() < 0.5 ? 1 : -1) * Math.floor(Math.random() * 15)
    }
    
    // 確保在範圍內
    nextValue = Math.max(scenario.minValue, Math.min(scenario.maxValue, nextValue))
    values.push(nextValue)
  }
  
  // 隨機選擇題型
  const questionTypes = ['max', 'min', 'increase', 'decrease']
  const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  
  let question, answer
  
  switch (questionType) {
    case 'max':
      answer = Math.max(...values)
      const maxIndex = values.indexOf(answer)
      question = `${scenario.title}的折線圖如下:\n${scenario.years.map((y, i) => `${y}: ${values[i]}${scenario.unit}`).join('\n')}\n\n請問哪一個時期的數值最高?`
      return {
        type: 'line-chart-max',
        question: question,
        options: scenario.years,
        answer: maxIndex
      }
    
    case 'min':
      answer = Math.min(...values)
      const minIndex = values.indexOf(answer)
      question = `${scenario.title}的折線圖如下:\n${scenario.years.map((y, i) => `${y}: ${values[i]}${scenario.unit}`).join('\n')}\n\n請問哪一個時期的數值最低?`
      return {
        type: 'line-chart-min',
        question: question,
        options: scenario.years,
        answer: minIndex
      }
    
    case 'increase':
      let maxIncrease = 0
      let increaseIndex = 0
      for (let i = 1; i < values.length; i++) {
        const increase = values[i] - values[i-1]
        if (increase > maxIncrease) {
          maxIncrease = increase
          increaseIndex = i
        }
      }
      question = `${scenario.title}的折線圖如下:\n${scenario.years.map((y, i) => `${y}: ${values[i]}${scenario.unit}`).join('\n')}\n\n請問從${scenario.years[increaseIndex-1]}到${scenario.years[increaseIndex]},增加了多少${scenario.unit}?`
      return {
        type: 'line-chart-increase',
        question: question,
        answer: maxIncrease,
        unit: scenario.unit
      }
    
    case 'decrease':
      answer = values[values.length - 1] - values[0]
      question = `${scenario.title}的折線圖如下:\n${scenario.years.map((y, i) => `${y}: ${values[i]}${scenario.unit}`).join('\n')}\n\n請問從${scenario.years[0]}到${scenario.years[scenario.years.length-1]},整體變化了多少${scenario.unit}?(正數表示增加,負數表示減少)`
      return {
        type: 'line-chart-change',
        question: question,
        answer: answer,
        unit: scenario.unit
      }
  }
}

export const checkLineChartAnswer = (question, userAnswer) => {
  if (question.type === 'line-chart-max' || question.type === 'line-chart-min') {
    return parseInt(userAnswer) === question.answer
  } else {
    const parsed = parseFloat(userAnswer)
    if (isNaN(parsed)) return false
    return Math.abs(parsed - question.answer) <= 1
  }
}

// ========== 圖表解讀陷阱題目 ==========

export const generateChartTrapQuestion = () => {
  const traps = [
    {
      question: '某新聞圖表顯示「房價暴漲!」,Y 軸刻度從 95 開始,到 100 結束,折線看起來很陡。這個圖表可能有什麼問題?',
      options: [
        'Y 軸起點不是 0,誇大了變化幅度',
        '時間跨度太長',
        '使用了錯誤的顏色',
        '圖表太小'
      ],
      answer: 0
    },
    {
      question: '某民調顯示「80% 民眾支持某政策」,但圖表下方小字寫著「樣本數:10 人」。這個民調結果可信嗎?',
      options: [
        '非常可信,因為有 80%',
        '不太可信,因為樣本數太少,不具代表性',
        '可信,因為有做民調',
        '無法判斷'
      ],
      answer: 1
    },
    {
      question: '兩個圓形圖,一個顯示「贊成 51%,反對 49%」,另一個顯示「贊成占絕對多數!」。哪一個標題比較客觀?',
      options: [
        '第二個,因為贊成的確比較多',
        '第一個,因為它呈現了實際數據,沒有誇大',
        '兩個都一樣',
        '都不客觀'
      ],
      answer: 1
    },
    {
      question: '某圖表只顯示某候選人在特定地區的高支持率,但沒有顯示全國數據。這可能是什麼問題?',
      options: [
        '圖表太簡單',
        '選擇性呈現數據,可能誤導讀者',
        '顏色選擇不當',
        '沒有問題'
      ],
      answer: 1
    }
  ]
  
  return traps[Math.floor(Math.random() * traps.length)]
}

export const checkChartTrapAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ========== 串聯並聯電路題目 ==========

export const generateCircuitQuestion = () => {
  const questions = [
    {
      question: '在串聯電路中,有 3 個燈泡。如果拔掉其中一個,會發生什麼事?',
      options: ['其他 2 個更亮', '其他 2 個變暗', '所有燈泡都熄滅', '只有被拔掉的熄滅'],
      answer: 2
    },
    {
      question: '在並聯電路中,有 3 個燈泡。如果拔掉其中一個,會發生什麼事?',
      options: ['其他 2 個更亮', '其他 2 個繼續亮著,亮度不變', '所有燈泡都熄滅', '其他 2 個變暗'],
      answer: 1
    },
    {
      question: '家裡的插座為什麼要用並聯而不是串聯?',
      options: [
        '因為並聯比較便宜',
        '因為並聯可以讓每個電器獨立運作,一個壞掉不影響其他',
        '因為並聯比較漂亮',
        '因為串聯會很危險'
      ],
      answer: 1
    },
    {
      question: '聖誕燈串(舊式)如果一顆燈泡壞掉,整串都不亮。這是什麼電路?',
      options: ['並聯電路', '串聯電路', '混合電路', '沒有電路'],
      answer: 1
    },
    {
      question: '如果把串聯電路比喻成政治制度,它最像哪一種?',
      options: ['民主制度', '極權統治', '聯邦制', '無政府狀態'],
      answer: 1
    }
  ]
  
  return questions[Math.floor(Math.random() * questions.length)]
}

export const checkCircuitAnswer = (question, userAnswer) => {
  return parseInt(userAnswer) === question.answer
}

// ========== Day 4 綜合題生成器 ==========

export const generateW9ComprehensiveQuestion = () => {
  const questionTypes = ['pie-chart', 'line-chart', 'trap', 'circuit']
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  
  switch (type) {
    case 'pie-chart':
      return generatePieChartQuestion()
    case 'line-chart':
      return generateLineChartQuestion()
    case 'trap':
      return generateChartTrapQuestion()
    case 'circuit':
      return generateCircuitQuestion()
  }
}

export const checkW9ComprehensiveAnswer = (question, userAnswer) => {
  if (question.type && question.type.startsWith('pie-chart')) {
    return checkPieChartAnswer(question, userAnswer)
  } else if (question.type && question.type.startsWith('line-chart')) {
    return checkLineChartAnswer(question, userAnswer)
  } else {
    return parseInt(userAnswer) === question.answer
  }
}

export default {
  generatePieChartQuestion,
  checkPieChartAnswer,
  generateLineChartQuestion,
  checkLineChartAnswer,
  generateChartTrapQuestion,
  checkChartTrapAnswer,
  generateCircuitQuestion,
  checkCircuitAnswer,
  generateW9ComprehensiveQuestion,
  checkW9ComprehensiveAnswer
}
