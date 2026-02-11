// src/data/weeks/week04/day4.js
// W4 Day4：動筆日

// ===== 數學綜合：比例尺 + 縮擴圖 =====
const generateComprehensiveMathQuestion = () => {
  const types = ['map_calc', 'scale_draw', 'combined', 'climate_context']
  const t = types[Math.floor(Math.random() * types.length)]

  if (t === 'map_calc') {
    const problems = [
      {
        q: '台灣地圖比例尺 1：500000。台北到花蓮圖上距離約3公分，台北到高雄圖上約8公分。花蓮到高雄繞過台北的距離是多少公里？',
        opts: ['55公里', '5500公里', '550公尺', '55000公尺'],
        ans: 0,
        exp: '（3+8）×500000=5500000公分=55000公尺=55公里。'
      },
      {
        q: '一張嘉南平原地圖，比例尺 1：100000，圖上嘉南大圳的主幹線長約16公分，實際長度約多少公里？',
        opts: ['16公里', '160公里', '1.6公里', '1600公里'],
        ans: 0,
        exp: '16×100000=1600000公分=16000公尺=16公里。'
      }
    ]
    const p = problems[Math.floor(Math.random() * problems.length)]
    const s = [...p.opts].sort(() => Math.random() - 0.5)
    return { type: 'choice', question: p.q, options: s, answer: s.indexOf(p.opts[p.ans]), explanation: p.exp }
  }

  if (t === 'scale_draw') {
    const problems = [
      {
        q: '一塊長方形農田長120公尺、寬80公尺，按照1：400縮圖。縮圖後的面積是多少平方公分？',
        opts: ['6平方公分', '60平方公分', '600平方公分', '6000平方公分'],
        ans: 0,
        exp: '長：120公尺=12000公分÷400=30公分。寬：80公尺=8000公分÷400=20公分。面積=30×20=600。啊不對重算。120m÷400=0.3m=30cm，80m÷400=0.2m=20cm，面積=30×20=600 → 選600。'
      },
      {
        q: '一張藍圖比例尺 1：200，圖上房間長5公分、寬3公分，實際房間面積是多少平方公尺？',
        opts: ['60平方公尺', '6平方公尺', '600平方公尺', '30平方公尺'],
        ans: 0,
        exp: '實際長=5×200=1000公分=10公尺，寬=3×200=600公分=6公尺，面積=10×6=60平方公尺。'
      }
    ]
    const p = problems[Math.floor(Math.random() * problems.length)]
    const s = [...p.opts].sort(() => Math.random() - 0.5)
    return { type: 'choice', question: p.q, options: s, answer: s.indexOf(p.opts[p.ans]), explanation: p.exp }
  }

  if (t === 'combined') {
    const q = {
      question: '比例尺1：50000的地圖上，兩村莊相距6公分。若要縮小成比例尺1：200000的地圖，兩村莊應相距多少公分？',
      options: ['1.5公分', '24公分', '6公分', '3公分'],
      answer: 0,
      explanation: '實際距離：6×50000=300000公分=3公里。新地圖：300000÷200000=1.5公分。'
    }
    const s = [...q.options].sort(() => Math.random() - 0.5)
    return { type: 'choice', question: q.question, options: s, answer: s.indexOf(q.options[q.answer]), explanation: q.explanation }
  }

  // climate_context
  const q = {
    question: '台灣氣象局的雨量分布圖，比例尺為1：300000。圖上台北到台中的降雨帶寬度量到4公分，實際降雨帶約多寬（公里）？',
    options: ['12公里', '120公里', '1.2公里', '1200公里'],
    answer: 0,
    explanation: '4×300000=1200000公分=12000公尺=12公里。'
  }
  const s = [...q.options].sort(() => Math.random() - 0.5)
  return { type: 'choice', question: q.question, options: s, answer: s.indexOf(q.options[q.answer]), explanation: q.explanation }
}

const checkComprehensiveMathAnswer = (q, a) => parseInt(a) === q.answer

// ===== 科學延伸：三種熱傳遞的綜合應用 =====
const generateHeatSynthesisQuestion = () => {
  const questions = [
    {
      type: 'choice',
      question: '台灣夏天的城市「熱島效應」，是哪幾種熱傳遞方式共同造成的？',
      options: [
        '只有輻射',
        '輻射（太陽曬熱深色屋頂和柏油路）+ 傳導（熱傳給空氣）+ 對流（熱空氣留在城市中）',
        '只有對流',
        '只有傳導'
      ],
      answer: 1,
      explanation: '城市熱島：①深色建築物和柏油吸收太陽輻射 ②傳導到周圍空氣 ③城市高密度建築阻礙對流，熱空氣滯留 → 城市比郊區熱。'
    },
    {
      type: 'choice',
      question: '台灣傳統三合院用白色石灰牆、深屋簷、通風設計，這三個設計分別對應哪種熱傳遞原理？',
      options: [
        '白牆（傳導）、屋簷（對流）、通風（輻射）',
        '白牆（反射輻射）、深屋簷（遮蔽輻射）、通風（加速對流散熱）',
        '白牆（輻射）、屋簷（傳導）、通風（對流）',
        '三個設計都和傳導有關'
      ],
      answer: 1,
      explanation: '白牆反射太陽輻射→減少吸熱；深屋簷遮蔭→減少直接輻射照射；通風設計→加速室內熱空氣對流，帶走熱量。這是傳統建築的熱學智慧。'
    },
    {
      type: 'choice',
      question: '一個裝有熱水的保溫瓶，採用了哪些隔熱設計？',
      options: [
        '只防傳導，用塑膠外殼',
        '防傳導（真空層）+ 防對流（真空無流體）+ 防輻射（鏡面反射）',
        '只防對流，用密封設計',
        '只防輻射，用銀色鏡面'
      ],
      answer: 1,
      explanation: '保溫瓶：①真空層阻止傳導和對流（無介質）②鏡面反射輻射，阻止熱輻射進出。三種隔熱方式同時運用，才能長時間保溫。'
    },
    {
      type: 'choice',
      question: '台灣的高山氣溫比平地低，主要是因為什麼？',
      options: [
        '高山離太陽更近，反而更冷',
        '高山的太陽輻射被大氣阻擋更多',
        '高山海拔高，大氣稀薄，保存地面輻射的能力弱，且對流使氣溫隨高度降低',
        '高山有更多降雪，雪融化時吸熱'
      ],
      answer: 2,
      explanation: '高山氣溫低的原因：大氣密度低、保熱能力弱；氣流絕熱上升時膨脹冷卻（每上升100公尺降約0.6°C）。這是對流和輻射共同作用的結果。'
    },
    {
      type: 'choice',
      question: '台灣東部的黑潮（暖流）讓東部冬天比西部溫暖，這是什麼熱傳遞方式？',
      options: ['傳導', '對流', '輻射', '蒸發'],
      answer: 1,
      explanation: '黑潮是溫暖的海流，熱的海水從熱帶流向溫帶（台灣東部），將熱能帶來——這是海水（流體）的對流，加溫了台灣東岸的氣候。'
    }
  ]
  const idx = Math.floor(Math.random() * questions.length)
  return questions[idx]
}

const checkHeatSynthesisAnswer = (q, a) => parseInt(a) === q.answer

// ===== 語文：古詩詞閱讀引導 =====

const day4 = {
  id: 'day4',
  name: '第4天',
  icon: '✏️',
  color: '#10B981',
  title: '動筆日',
  units: [
    {
      id: 'w4d4-math',
      name: '數學：W4 綜合應用',
      icon: '📐',
      lesson: {
        title: 'W4 數學總複習——比例尺情境串連',
        sections: [
          {
            title: '本週數學概念回顧',
            blocks: [
              {
                type: 'text',
                content: '這週的數學圍繞「縮放與尺度」：\n\n① 比例尺：1：N，圖上距離 × N = 實際距離\n② 縮圖：所有長度 ÷ N（縮小N倍）\n③ 擴圖：所有長度 × N（放大N倍）\n④ 面積縮放：長度縮N倍 → 面積縮N²倍'
              },
              {
                type: 'text',
                content: '比例尺是 W3「比與比值」的直接應用——1：50000 就是一個比，比值是 1/50000。學數學的樂趣就在這裡：同一個概念，在不同情境下出現，越用越熟。'
              }
            ]
          },
          {
            title: '解題時的單位換算',
            blocks: [
              {
                type: 'text',
                content: '比例尺計算最常見的錯誤是「單位沒有換算」！\n\n記住：比例尺的比是用「公分」對「公分」。\n\n實際距離若給的是「公尺」或「公里」，要先換成公分才能代入公式。\n\n1公尺 = 100公分\n1公里 = 1000公尺 = 100000公分'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: generateComprehensiveMathQuestion,
        checkAnswer: checkComprehensiveMathAnswer
      }
    },

    {
      id: 'w4d4-science',
      name: '科學延伸：熱傳遞綜合',
      icon: '🌡️',
      lesson: {
        title: '三種熱傳遞的生活應用',
        sections: [
          {
            title: '台灣的建築智慧',
            blocks: [
              {
                type: 'text',
                content: '台灣各族群面對不同的氣候環境，發展出不同的建築智慧，每一種設計都有熱學原理支撐：\n\n🏠 閩南三合院：白牆反射輻射，深屋簷遮陽，穿堂風加速對流\n🪨 排灣石板屋：石板導熱慢，冬暖夏涼，是利用傳導原理的天然冷暖系統\n🌿 阿美族竹屋：竹子導熱差，透氣性好，熱帶氣候下的涼爽居所\n🏔️ 泰雅族獵寮：木材隔熱，山地夜晚寒冷時保存體溫'
              }
            ]
          },
          {
            title: '現代的熱學應用',
            blocks: [
              {
                type: 'text',
                content: '現代台灣也有很多熱學應用：\n\n☀️ 太陽能熱水器：利用輻射吸熱，深色集熱板吸收太陽能\n🏗️ 雙層玻璃帷幕牆：阻隔輻射，減少空調能耗\n🌳 都市綠化：樹木遮蔭（輻射）+ 蒸散冷卻（對流），減少熱島效應\n🧊 冰箱壓縮機：強制對流帶走熱量'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateHeatSynthesisQuestion,
        checkAnswer: checkHeatSynthesisAnswer
      }
    },

    {
      id: 'w4d4-reading',
      name: '語文：古詩詞閱讀導讀',
      icon: '📚',
      lesson: {
        title: '用科學眼光讀古詩——節氣詩詞閱讀指南',
        sections: [
          {
            title: '古詩詞裡的氣候密碼',
            blocks: [
              {
                type: 'text',
                content: '這週我們讀了四首和天氣、節氣相關的詩詞：\n\n🌸 孟浩然〈春曉〉：春天的雨（梅雨前兆）、鳥鳴（生物季相）\n🌧️ 杜牧〈清明〉：清明前後的陰雨（春季鋒面）\n☀️〈大暑歌〉：盛夏的酷熱（太陽輻射最強時節）'
              },
              {
                type: 'text',
                content: '古代詩人沒有氣象站，但他們用敏銳的感官觀察自然，把氣候記錄在詩句裡。這些詩，其實是最古老的氣象紀錄。'
              }
            ]
          },
          {
            title: '閱讀策略：從詩到氣候',
            blocks: [
              {
                type: 'text',
                content: '讀氣候詩詞的四個問題：\n\n① 哪個節氣或季節？（找時間線索）\n② 詩中提到什麼天氣現象？（雨、風、霜、雪、熱……）\n③ 這個天氣現象的科學解釋是什麼？（傳導？對流？輻射？季風？）\n④ 台灣的同季節天氣和詩中描寫相似嗎？不同在哪裡？'
              }
            ]
          },
          {
            title: '獨立閱讀：〈夏日絕句〉',
            blocks: [
              {
                type: 'quote',
                content: '力盡不知熱，但惜夏日長。\n（農夫田間勞作，汗流浹背卻不覺熱，只珍惜夏天日長可以多做工）',
                author: '白居易〈觀刈麥〉節選'
              },
              {
                type: 'text',
                content: '閱讀這段詩後，試著回答：\n① 詩中描述的季節和氣候是什麼？\n② 農夫「不知熱」是心理描寫還是生理現象？\n③ 「夏日長」的科學原因是什麼？（提示：和太陽高度角、日照時間有關）\n\n這是自由閱讀和思考的時間，不需要交出答案，但可以把想到的寫在學習日誌裡。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    {
      id: 'w4d4-closing',
      name: '今日回顧',
      icon: '✨',
      lesson: {
        title: '動筆日的收穫',
        sections: [
          {
            title: '本週的整合',
            blocks: [
              {
                type: 'text',
                content: '今天完成了三件事：\n\n📐 數學：用比例尺、縮擴圖解決台灣地圖和建築圖的計算題\n🌡️ 科學：用傳導、對流、輻射的眼光，重新認識台灣的建築和氣候\n📚 語文：從古詩詞中尋找氣候訊息，練習「用科學眼光讀文學」'
              },
              {
                type: 'text',
                content: '「赤日炎炎似火燒，野田禾稻半枯焦」——詩人感受到的是輻射；「清明時節雨紛紛」——詩人記錄的是對流雨和鋒面雨；「春眠不覺曉」——詩人在柔和的傳導熱中沉睡。\n\n文學和科學，用不同的語言說同一個世界。'
              },
              {
                type: 'text',
                content: '🎵 明天是藝術收尾日！我們要看台灣的節氣攝影，聽描寫四季的音樂，並完成 W4 詞彙總複習。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day4
