// W11 Day4: 動筆日

const generateW11Comprehensive = () => {
  const scenarios = [
    {
      setup: (budget, x) => `玉山國家公園總預算${budget}萬，人事成本x萬，保育成本比人事多500萬，解說成本1500萬。求x?`,
      equation: (budget) => {
        const x = Math.floor(Math.random() * 2000) + 2000
        const total = x + (x + 500) + 1500
        return { x, total, question: `x + (x+500) + 1500 = ${total}`, answer: x }
      }
    },
    {
      setup: () => {
        const capacity = Math.floor(Math.random() * 500) + 2000
        const booked = Math.floor(Math.random() * 300) + 500
        return {
          question: `國家公園每日遊客容量${capacity}人，已預約${booked}人，剩餘名額x人。求x?`,
          equation: `x + ${booked} = ${capacity}`,
          answer: capacity - booked
        }
      }
    },
    {
      setup: () => {
        const last = Math.floor(Math.random() * 50) + 100
        const born = Math.floor(Math.random() * 20) + 10
        const died = Math.floor(Math.random() * 10) + 5
        const now = last + born - died
        return {
          question: `台灣黑熊去年${last}隻，今年新生${born}隻、死亡${died}隻，今年總數x隻。求x?`,
          equation: `${last} + ${born} - ${died} = x`,
          answer: now
        }
      }
    }
  ]
  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)]
  if (typeof scenario.setup === 'function' && scenario.equation) {
    return scenario.equation()
  } else {
    return scenario.setup()
  }
}

const generateBufferQuestion = () => {
  const qs = [
    { question: '緩衝溶液的功能是?', options: ['抵抗pH變化','增加酸性','增加鹼性','稀釋溶液'], answer: 0 },
    { question: '生態系的緩衝能力是指?', options: ['承受干擾後恢復平衡的能力','動物數量','植物種類','土壤深度'], answer: 0 },
    { question: '當生態系超過臨界點會?', options: ['崩潰','變更好','不變','緩慢恢復'], answer: 0 }
  ]
  return qs[Math.floor(Math.random() * qs.length)]
}

const generateWritingPromptQuestion = () => {
  const qs = [
    { question: '抒情文的特色是?', options: ['表達情感','說明道理','敘述故事','描寫景物'], answer: 0 },
    { question: '「給未來地球的一封信」屬於什麼文體?', options: ['抒情文','說明文','議論文','記敘文'], answer: 0 }
  ]
  return qs[Math.floor(Math.random() * qs.length)]
}

const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✍️',
  color: '#F59E0B',
  title: '動筆日',
  units: [
    {
      id: 'w11d4-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(四)',
        sections: [{
          title: '閱讀文本',
          blocks: [
            { type: 'quote', content: '然而六月底再次經過時，我卻為他們展露的鮮豔色彩而大感驚訝。荒冷沉寂的高山上突然出現了一片蓬勃的生機。', author: '陳列《玉山去來》' },
            { type: 'text', content: '作者描述玉山高山植物在短暫夏季努力綻放的景象。這讓我們思考:我們能為未來的地球做些什麼?' }
          ]
        }]
      }
    },
    {
      id: 'w11d4-math',
      name: '數學綜合',
      icon: '🔢',
      lesson: {
        title: 'W11數學綜合應用',
        sections: [
          {
            title: '情境1:國家公園預算',
            blocks: [
              { type: 'text', content: '玉山國家公園總預算8000萬元，分為三部分:\n• 人事成本: x萬元\n• 保育成本: 比人事多500萬\n• 解說成本: 1500萬元\n\n列式: x + (x+500) + 1500 = 8000\n解: 2x + 2000 = 8000\n    2x = 6000\n    x = 3000萬元' }
            ]
          },
          {
            title: '情境2:遊客承載量',
            blocks: [
              { type: 'text', content: '太魯閣國家公園每日遊客容量2500人，已預約800人，剩餘名額x人。\n\n列式: x + 800 = 2500\n解: x = 1700人' }
            ]
          },
          {
            title: '情境3:物種監測',
            blocks: [
              { type: 'text', content: '櫻花鉤吻鮭去年3200尾，今年新生450尾、死亡180尾，今年總數x尾。\n\n列式: 3200 + 450 - 180 = x\n解: x = 3470尾' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateW11Comprehensive,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d4-science',
      name: '科學延伸',
      icon: '🧪',
      lesson: {
        title: '生態系的緩衝能力',
        sections: [
          {
            title: '緩衝溶液',
            blocks: [
              { type: 'text', content: '**定義**: 能抵抗少量酸鹼變化、維持pH穩定的溶液\n**例子**: 血液(pH 7.4)、海水(pH 8.2)\n**原理**: 含有「弱酸+其鹽」或「弱鹼+其鹽」的組合' }
            ]
          },
          {
            title: '生態系緩衝',
            blocks: [
              { type: 'text', content: '**類比**: 健康的生態系就像緩衝溶液\n• 能承受小幅度干擾(如短期乾旱、少量污染)\n• 自我恢復平衡\n\n**生物多樣性 = 緩衝能力**:\n• 物種越多，生態系越穩定\n• 某種生物減少，其他物種可暫時補位' }
            ]
          },
          {
            title: '臨界點',
            blocks: [
              { type: 'text', content: '**破壞超過負荷 → 生態系崩潰**\n\n例子:\n• 珊瑚礁: 水溫上升2°C → 大規模白化 → 生態系崩潰\n• 雨林: 砍伐超過40% → 降雨減少 → 變成草原\n• 漁場: 過度捕撈 → 魚群無法恢復 → 漁場枯竭\n\n**結論**: 保育要在臨界點之前就開始!' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateBufferQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d4-writing',
      name: '語文寫作',
      icon: '📝',
      lesson: {
        title: '抒情文:給未來地球的一封信',
        sections: [
          {
            title: '寫作引導',
            blocks: [
              { type: 'text', content: '**文體**: 抒情文(表達情感、抒發感受)\n**對象**: 未來的地球\n**目的**: 表達對環境的關心、期許、承諾' }
            ]
          },
          {
            title: '四段結構',
            blocks: [
              { type: 'text', content: '**第一段:問候與緣由**\n• 親愛的未來地球...\n• 我是2026年的學生\n• 為什麼寫這封信?\n\n**第二段:現況描述**\n• 現在的地球面臨什麼問題?\n• 舉1-2個具體例子\n  - 氣候變遷、物種滅絕、海洋酸化...\n\n**第三段:情感抒發**\n• 我的擔憂、難過、希望\n• 使用比喻、排比等修辭\n• 例:「我擔心未來的孩子只能在書本上看到北極熊」\n\n**第四段:期許與承諾**\n• 給未來的期許\n• 我的承諾與行動\n• 結尾升華' }
            ]
          },
          {
            title: '抒情技巧',
            blocks: [
              { type: 'text', content: '**1. 比喻**:\n• 地球像生病的病人\n• 森林是地球的肺\n\n**2. 排比**:\n• 我希望...我希望...我希望...\n• 我願意...我願意...我願意...\n\n**3. 設問**:\n• 未來的天空還會是藍色的嗎?\n• 我們的子孫還能看到玉山的雪嗎?\n\n**4. 感嘆**:\n• 多麼希望時光能倒流!\n• 如果可以重來...' }
            ]
          },
          {
            title: '範例段落',
            blocks: [
              { type: 'text', content: '**範例第三段**(情感抒發):\n\n「每當我看到新聞報導冰山融化、森林大火、珊瑚白化，我的心就像被重重擊打一般，感到無比沉重。我擔心，未來的孩子只能在博物館裡看到北極熊的標本，只能在課本上讀到台灣黑熊的故事，只能在照片中想像墾丁曾經五彩繽紛的珊瑚礁。這些畫面，像噩夢一樣在我腦海中揮之不去。」' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 3,
        generator: generateWritingPromptQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d4-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第4天總結',
        sections: [{
          title: '學習重點',
          blocks: [
            { type: 'text', content: '**數學**: 綜合應用等量公理解決實際問題\n**科學**: 緩衝溶液與生態系緩衝能力的類比\n**語文**: 抒情文寫作技巧(比喻、排比、設問)\n\n**作業**: 完成「給未來地球的一封信」草稿(至少300字)' }
          ]
        }]
      }
    }
  ]
}

export default day4
