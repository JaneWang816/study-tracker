// W11 Day5: 山林的聲音

const generateTEKQuestion = () => {
  const qs = [
    { question: 'TEK是什麼的縮寫?', options: ['Traditional Ecological Knowledge','Technology Education Knowledge','Taiwan Environment Knowledge','Temple Education Korea'], answer: 0 },
    { question: '泰雅族的Gaga是什麼?', options: ['狩獵規範與生活準則','一種植物','祭典名稱','樂器名稱'], answer: 0 },
    { question: '布農族曆法依據什麼決定農作時機?', options: ['物候變化','月亮盈虧','星座位置','氣溫高低'], answer: 0 },
    { question: '原住民傳統生態知識的特色是?', options: ['世代累積的環境智慧','書本上的知識','外來的技術','短期的經驗'], answer: 0 }
  ]
  return qs[Math.floor(Math.random() * qs.length)]
}

const generateEquationReview = () => {
  const types = [
    () => {
      const x = Math.floor(Math.random() * 15) + 1
      const a = Math.floor(Math.random() * 10) + 1
      return { question: `x + ${a} = ${x+a}`, options: [x, x+1, x-1, a], answer: 0 }
    },
    () => {
      const x = Math.floor(Math.random() * 15) + 5
      const a = Math.floor(Math.random() * 5) + 1
      return { question: `x - ${a} = ${x-a}`, options: [x, x+1, x-1, a], answer: 0 }
    },
    () => {
      const x = Math.floor(Math.random() * 10) + 1
      const a = Math.floor(Math.random() * 4) + 2
      const b = Math.floor(Math.random() * 8) + 1
      return { question: `${a}x + ${b} = ${a*x+b}`, options: [x, x+1, x-1, a], answer: 0 }
    }
  ]
  return types[Math.floor(Math.random() * types.length)]()
}

const generateVocabReview = () => {
  const allVocab = [
    { word: '保育', def: '保護並培育自然資源和生物' },
    { word: '生態系', def: '生物與環境形成的互動系統' },
    { word: '特有種', def: '只在某個地區生存的物種' },
    { word: '瀕危物種', def: '面臨滅絕危機的生物' },
    { word: '國寶魚', def: '國家級珍貴的魚類' },
    { word: '候鳥', def: '隨季節遷徙的鳥類' },
    { word: '酸雨', def: '因工業廢氣造成的酸性降雨' },
    { word: '海洋酸化', def: '海水吸收過多二氧化碳導致pH下降' }
  ]
  const v = allVocab[Math.floor(Math.random() * allVocab.length)]
  const opts = [v.def, ...allVocab.filter(x => x !== v).map(x => x.def).slice(0,3)]
  const sh = opts.sort(() => Math.random() - 0.5)
  return {
    question: `「${v.word}」的意思是?`,
    options: sh,
    answer: sh.indexOf(v.def)
  }
}

const day5 = {
  id: 'day5',
  name: '第5天',
  icon: '🎵',
  color: '#8B5CF6',
  title: '山林的聲音',
  units: [
    {
      id: 'w11d5-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(五)',
        sections: [{
          title: '閱讀文本',
          blocks: [
            { type: 'quote', content: '當夏天過去，秋天來到，高山的花季迅速銷聲匿跡，冷霜降臨...然後是冬天，一片皚白的冰雪世界...然後，也許四個月之後，春天回來了。然後夏天……。好長好長的一再輪迴的宇宙的歲月。', author: '陳列《玉山去來》' },
            { type: 'text', content: '作者描述玉山的四季循環，這種自然的規律與原住民世代累積的生態智慧有什麼關聯?' }
          ]
        }]
      }
    },
    {
      id: 'w11d5-society',
      name: '社會',
      icon: '🏛️',
      lesson: {
        title: '原住民TEK與現代保育',
        sections: [
          {
            title: '什麼是TEK?',
            blocks: [
              { type: 'text', content: '**TEK = Traditional Ecological Knowledge(傳統生態知識)**\n\n定義: 原住民族世代累積、透過口傳與實踐傳承的環境智慧\n\n特色:\n• 長期觀察(數百年到數千年)\n• 在地經驗(特定地區的深度知識)\n• 整體觀(人與自然是一體的)\n• 永續利用(取之有道、用之有節)' }
            ]
          },
          {
            title: '泰雅族的Gaga',
            blocks: [
              { type: 'text', content: '**Gaga**: 泰雅族的生活準則與禁忌系統\n\n狩獵規範:\n• 不獵殺懷孕母獸\n• 不過度捕獵(夠吃就好)\n• 狩獵季節限制(繁殖期禁獵)\n• 輪流使用獵場(讓動物恢復)\n\n→ 這就是「永續利用」的最早實踐!' }
            ]
          },
          {
            title: '布農族的物候曆法',
            blocks: [
              { type: 'text', content: '布農族依據「物候」決定農作時機:\n\n• 聽到特定鳥類叫聲 → 開始播種\n• 看到某種花開 → 開始除草\n• 觀察月亮盈虧 → 決定收穫時間\n\n→ 不需要日曆，大自然就是最準確的時鐘!' }
            ]
          },
          {
            title: 'TEK與現代保育的對話',
            blocks: [
              { type: 'text', content: '**相同點**:\n• 都強調永續利用\n• 都重視長期觀察\n• 都關心生態平衡\n\n**互補性**:\n• TEK: 在地經驗、整體觀、文化脈絡\n• 現代科學: 量化數據、實驗驗證、全球視野\n\n**最佳做法**: 兩種知識系統結合\n例: 雪霸國家公園與泰雅族合作監測櫻花鉤吻鮭' }
            ]
          },
          {
            title: '案例:太魯閣族的Gaya',
            blocks: [
              { type: 'text', content: '太魯閣族的Gaya(規範):\n\n• 不在河川上游砍伐森林\n• 保護水源地的原始林\n• 輪耕制度(種植2-3年後休耕5-7年)\n\n→ 現代科學證實:\n這些做法確實能保護水源、防止土石流、維持土壤肥力!' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateTEKQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d5-math',
      name: '數學總複習',
      icon: '🔢',
      lesson: {
        title: 'W11等量公理總複習',
        sections: [
          {
            title: '三種題型',
            blocks: [
              { type: 'text', content: '**類型1**: x + a = b\n• 兩邊減a\n• x = b - a\n\n**類型2**: x - a = b\n• 兩邊加a\n• x = b + a\n\n**類型3**: ax + b = c\n• 先兩邊減b\n• 再兩邊除以a\n• x = (c - b) ÷ a' }
            ]
          },
          {
            title: '解題檢查表',
            blocks: [
              { type: 'text', content: '☐ 看清題目\n☐ 列出等式\n☐ 決定運算步驟\n☐ 同時操作兩邊\n☐ 計算答案\n☐ **一定要驗算!**' }
            ]
          },
          {
            title: '常見錯誤',
            blocks: [
              { type: 'text', content: '❌ 只操作一邊\n例: x + 3 = 7 → x = 7 (錯!應該兩邊都減3)\n\n❌ 符號搞錯\n例: x - 5 = 3 → x = 3 - 5 (錯!應該是 3 + 5)\n\n❌ 忘記驗算\n→ 一定要把答案代回原式檢查!' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 10,
        generator: generateEquationReview,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d5-art',
      name: '藝術欣賞',
      icon: '🎨',
      practice: null,
      lesson: {
        title: '山林的聲音',
        sections: [
          {
            title: '🎵 音樂欣賞',
            blocks: [
              { type: 'text', content: '**曲目**: 紀曉君《太陽風草原的聲音》\n**族群**: 卑南族\n**主題**: 對土地的敬意與思念\n\n歌詞意涵:\n用卑南族語吟唱對家鄉土地的情感，旋律悠揚，充滿對大自然的敬畏與感恩。\n\n→ 原住民音樂中常常表達「人與自然和諧共存」的理念' }
            ]
          },
          {
            title: '🎨 視覺藝術',
            blocks: [
              { type: 'text', content: '**作品**: 阿里山神木對比照片\n**時間**: 1900年代 vs 2020年代\n**主題**: 見證保育成果\n\n1900年代:\n• 日治時期大量砍伐\n• 許多千年神木被運往日本\n• 阿里山森林嚴重破壞\n\n2020年代:\n• 停止砍伐，設立保護區\n• 部分神木逐漸恢復\n• 成為生態教育基地\n\n→ 對比照片讓我們看到:保育雖然緩慢，但確實有效!' }
            ]
          },
          {
            title: '🎬 紀錄片欣賞',
            blocks: [
              { type: 'text', content: '**片名**: 《老鷹想飛》\n**導演**: 沈振中\n**主題**: 台灣黑鳶保育故事\n**年份**: 2015年\n\n內容:\n• 黑鳶(老鷹)曾是台灣常見猛禽\n• 1980年代因農藥污染大量死亡\n• 保育人士20年努力\n• 黑鳶數量從300隻回升到600隻\n\n啟示:\n• 環境污染對野生動物的傷害\n• 保育需要長期投入\n• 每個人都可以為保育盡一份力' }
            ]
          }
        ]
      }
    },
    {
      id: 'w11d5-vocabulary',
      name: '語文總複習',
      icon: '📝',
      lesson: {
        title: 'W11詞彙總整理',
        sections: [{
          title: '本週重點詞彙',
          blocks: [
            { type: 'text', content: '**保育類**:\n• 保育、生態系、特有種、棲地、多樣性\n• 保育法、瀕危物種、國寶魚、候鳥、地質遺跡\n\n**環境類**:\n• 酸雨、海洋酸化、珊瑚白化、緩衝能力、食物鏈\n\n**原住民TEK**:\n• 傳統生態知識、Gaga、物候、永續利用、輪耕\n\n**科學類**:\n• pH值、指示劑、酸性、鹼性、中性' }
          ]
        }]
      },
      practice: {
        questionCount: 8,
        generator: generateVocabReview,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },
    {
      id: 'w11d5-review',
      name: '本週總回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第11週學習總結',
        sections: [
          {
            title: '五天學習歷程',
            blocks: [
              { type: 'text', content: '**Day 1**: 為什麼要保護自然?\n• 國家公園誕生、等量公理概念、酸鹼指示劑\n\n**Day 2**: 保護區在保護什麼?\n• 五大國家公園特色、等量公理(加減)、pH值數線\n\n**Day 3**: 酸鹼平衡在哪裡?\n• 環境破壞案例、兩步驟方程式、生活中的酸鹼\n\n**Day 4**: 動筆日\n• 數學綜合應用、緩衝能力、抒情文寫作\n\n**Day 5**: 山林的聲音\n• 原住民TEK、數學總複習、藝術欣賞' }
            ]
          },
          {
            title: '核心概念:平衡',
            blocks: [
              { type: 'text', content: '本週三科都在探討「平衡」:\n\n• **社會**: 生態平衡、永續利用\n• **數學**: 等式平衡、等量公理\n• **科學**: 酸鹼平衡、pH恆定\n\n**最重要的啟示**:\n保護環境 = 維持平衡\n破壞環境 = 打破平衡\n\n就像等式兩邊必須相等，大自然也需要平衡才能健康運作!' }
            ]
          },
          {
            title: '我學到了什麼?',
            blocks: [
              { type: 'text', content: '請你思考:\n\n1. 台灣的國家公園為什麼重要?\n2. 等量公理如何幫助我們解方程式?\n3. pH值如何影響生態系統?\n4. 原住民的傳統生態知識給我們什麼啟示?\n5. 我可以為環境保護做些什麼?\n\n把你的答案寫在學習日誌裡!' }
            ]
          },
          {
            title: '下週預告',
            blocks: [
              { type: 'text', content: '**W12:永續與科技**\n\n• 社會:台灣產業轉型(傳統製造→半導體→綠能)\n• 數學:等量公理二(兩邊乘除同一數)\n• 科學:物質的變化(物理變化 vs 化學變化、生鏽與防鏽)\n• 語文:自然書寫的語言特色\n\n我們將探討:如何在經濟發展與環境保護之間取得平衡?' }
            ]
          }
        ]
      }
    }
  ]
}

export default day5
