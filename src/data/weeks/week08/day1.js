// src/data/weeks/week08/day1.js
// W8 Day1：台灣經濟奇蹟是什麼？

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 社會:戰後台灣經濟發展
// ==========================================
const socialQuestions = [
  {
    type: 'options',
    question: '台灣光復後最早的經濟型態是什麼?',
    options: ['農業為主', '輕工業為主', '重工業為主', '科技業為主'],
    answer: 0,
    displayAnswer: '台灣光復後(1945年)最早是以農業為主的經濟型態,主要生產稻米、蔗糖等農產品,是台灣經濟發展的起點。'
  },
  {
    type: 'options',
    question: '1950–60年代,台灣主要出口什麼產品?',
    options: ['米、糖、香蕉', '電腦晶片', '汽車', '手機'],
    answer: 0,
    displayAnswer: '1950-60年代,台灣主要出口農產品,包括稻米、蔗糖、香蕉等,被稱為「香蕉王國」,農產品出口是當時重要的外匯來源。'
  },
  {
    type: 'options',
    question: '「客廳即工廠」描述的是台灣哪個時代的現象?',
    options: ['1970–80年代輕工業時期', '日治時期', '2000年代科技業', '現在的電商時代'],
    answer: 0,
    displayAnswer: '「客廳即工廠」描述1970-80年代台灣家庭代工的景象,許多家庭在客廳進行雨傘、玩具、成衣等輕工業加工,是台灣經濟起飛的重要特色。'
  },
  {
    type: 'options',
    question: '台灣在1970–80年代最著名的外銷產品是什麼?',
    options: ['雨傘、玩具、成衣', '茶葉和蔗糖', '半導體晶片', '電動車'],
    answer: 0,
    displayAnswer: '1970-80年代,台灣以勞力密集的輕工業為主,雨傘、玩具、成衣是最著名的外銷產品,為台灣賺取大量外匯,奠定經濟起飛的基礎。'
  },
  {
    type: 'options',
    question: '「台灣錢淹腳目」這句話形容的是哪個時代?',
    options: ['1980–90年代經濟起飛', '清朝時期', '日治時期', '2020年代'],
    answer: 0,
    displayAnswer: '「台灣錢淹腳目」(錢多到淹過腳踝)形容1980-90年代台灣經濟起飛、全民富裕的景象,當時台灣外匯存底大增,被稱為「亞洲四小龍」之一。'
  },
  {
    type: 'options',
    question: '台灣從「農業」轉向「科技業」,大約經歷了多少年?',
    options: ['50年', '10年', '30年', '100年'],
    answer: 0,
    displayAnswer: '台灣從1950年代的農業經濟,經過1960-80年代的輕工業,到1990年代轉向高科技產業,大約經歷了50年的產業轉型歷程。'
  },
  {
    type: 'options',
    question: '1990年代以後,台灣經濟重心轉向什麼產業?',
    options: ['半導體和高科技產業', '稻米種植', '紡織業', '觀光業'],
    answer: 0,
    displayAnswer: '1990年代以後,台灣經濟重心轉向半導體、電子、資訊等高科技產業,台積電等公司成為全球重要的科技供應商。'
  },
  {
    type: 'options',
    question: '為什麼台灣1960–80年代能快速工業化?',
    options: [
      '加工出口、勞力密集的輕工業',
      '發現石油',
      '大量進口外國商品',
      '只發展農業'
    ],
    answer: 0,
    displayAnswer: '台灣1960-80年代快速工業化的關鍵是發展勞力密集的加工出口業,利用當時充沛且便宜的勞動力,為國際市場代工生產,賺取外匯。'
  }
]

const generateSocialQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(socialQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

// ==========================================
// 數學:百分比概念、基準量
// ==========================================
const mathQuestions = [
  // 小數轉百分比
  {
    type: 'options',
    question: '小數 0.25 換算成百分比是多少?',
    options: ['25%', '35%', '15%', '2.5%'],
    answer: 0,
    displayAnswer: '0.25 × 100 = 25%\n小數轉百分比:乘以100,加上%符號'
  },
  {
    type: 'options',
    question: '小數 0.5 換算成百分比是多少?',
    options: ['50%', '60%', '40%', '5%'],
    answer: 0,
    displayAnswer: '0.5 × 100 = 50%'
  },
  {
    type: 'options',
    question: '小數 0.75 換算成百分比是多少?',
    options: ['75%', '85%', '65%', '7.5%'],
    answer: 0,
    displayAnswer: '0.75 × 100 = 75%'
  },
  {
    type: 'options',
    question: '小數 0.2 換算成百分比是多少?',
    options: ['20%', '30%', '10%', '2%'],
    answer: 0,
    displayAnswer: '0.2 × 100 = 20%'
  },
  {
    type: 'options',
    question: '小數 0.4 換算成百分比是多少?',
    options: ['40%', '50%', '30%', '4%'],
    answer: 0,
    displayAnswer: '0.4 × 100 = 40%'
  },
  {
    type: 'options',
    question: '小數 0.8 換算成百分比是多少?',
    options: ['80%', '90%', '70%', '8%'],
    answer: 0,
    displayAnswer: '0.8 × 100 = 80%'
  },
  // 百分比轉小數
  {
    type: 'options',
    question: '10% 換算成小數是多少?',
    options: ['0.1', '1', '10', '0.01'],
    answer: 0,
    displayAnswer: '10% ÷ 100 = 0.1\n百分比轉小數:除以100'
  },
  {
    type: 'options',
    question: '25% 換算成小數是多少?',
    options: ['0.25', '2.5', '25', '0.025'],
    answer: 0,
    displayAnswer: '25% ÷ 100 = 0.25'
  },
  {
    type: 'options',
    question: '50% 換算成小數是多少?',
    options: ['0.5', '5', '50', '0.05'],
    answer: 0,
    displayAnswer: '50% ÷ 100 = 0.5'
  },
  {
    type: 'options',
    question: '75% 換算成小數是多少?',
    options: ['0.75', '7.5', '75', '0.075'],
    answer: 0,
    displayAnswer: '75% ÷ 100 = 0.75'
  },
  // 求某數的百分之幾
  {
    type: 'options',
    question: '100 的 20% 是多少?',
    options: ['20', '120', '80', '2000'],
    answer: 0,
    displayAnswer: '100 × 20% = 100 × 0.2 = 20'
  },
  {
    type: 'options',
    question: '150 的 40% 是多少?',
    options: ['60', '190', '110', '6000'],
    answer: 0,
    displayAnswer: '150 × 40% = 150 × 0.4 = 60'
  },
  {
    type: 'options',
    question: '200 的 25% 是多少?',
    options: ['50', '225', '175', '5000'],
    answer: 0,
    displayAnswer: '200 × 25% = 200 × 0.25 = 50'
  },
  {
    type: 'options',
    question: '200 的 50% 是多少?',
    options: ['100', '250', '150', '10000'],
    answer: 0,
    displayAnswer: '200 × 50% = 200 × 0.5 = 100'
  },
  {
    type: 'options',
    question: '100 的 75% 是多少?',
    options: ['75', '175', '25', '7500'],
    answer: 0,
    displayAnswer: '100 × 75% = 100 × 0.75 = 75'
  }
]

const generateMathQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0
  
  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(mathQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateSocialQuestion, generateMathQuestion }

// ── Day 資料 ──────────────────────────────────────
const day1 = {
  id: 'day1',
  name: '第一天',
  icon: '🏭',
  color: '#0891b2',
  title: '台灣經濟奇蹟是什麼？',
  units: [
    {
      id: 'w8d1-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '圓環邊的時光膠囊',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'text',
                content: '這週，我們要讀一個真實的故事——台北民生社區的新民生戲院，在2026年1月31日熄燈了。\n\n這不只是一間戲院的結束，更是整個台灣經濟轉型的縮影。從1990年代的黃金年代，到威秀進駐的衝擊，到Netflix的崛起，新民生戲院見證了台灣經濟從「傳統」走向「現代化」的每一步。'
              },
              {
                type: 'text',
                content: '今天我們先讀第一段：1990年代，那個最輝煌的黃金年代。'
              },
              {
                type: 'quote',
                content: '把時間的轉盤往回撥，回到那個還沒有Netflix、沒有智慧型手機的1990年代。那是「舊」民生戲院最輝煌的黃金年代。老台北人一定記得，當年的民生戲院有多潮？它擁有時下超級瞎趴的電扶梯，而那道階梯，帶領無數觀眾通往閃閃發亮的光影世界。',
                author: '〈全台唯一社區戲院「新民生戲院」宣告落幕〉'
              },
              {
                type: 'text',
                content: '1993年《侏羅紀公園》上映時，排隊購票的人龍從戲院門口一路蜿蜒，像貪食蛇一樣排到附近的協和戲院。同年還有周星馳的《唐伯虎點秋香》，無數人在這座戲院裡，一起創造了笑到肚子痛的共同記憶。\n\n那時候的戲院，不只是看電影的地方，它是社區的心臟，是年輕人約會的聖地，是學生下課後不想回家的避風港。空氣中瀰漫著熱鬧氣氛與歡笑。'
              },
              {
                type: 'text',
                content: '🤔 開場問題：你有沒有去過某個地方，那裡曾經人很多、很熱鬧，但後來變得冷清了？為什麼會這樣？\n\n這週，我們要從台灣的經濟史出發，理解「繁榮」與「衰落」是怎麼發生的，也要學習百分比——那個幫助我們看懂「成長」和「變化」的數學工具。'
              }
            ]
          }
        ]
      },
      practice: null
    },
    {
      id: 'w8d1-social',
      name: '社會｜台灣經濟的四個階段',
      icon: '🗺️',
      lesson: {
        title: '從農業到科技：台灣經濟奇蹟',
        sections: [
          {
            title: '第一階段：農業台灣（1945–1960年代）',
            blocks: [
              {
                type: 'text',
                content: '台灣光復後，經濟非常困難。當時大部分的人都是農民，主要種植稻米、甘蔗、香蕉。台灣出口什麼？就是米、糖、鳳梨罐頭。\n\n1950年代，政府推動「土地改革」，讓農民有自己的田地可以耕種，提高了糧食生產。但光靠農業，一個國家很難變富裕，因為農產品的價格通常不高，而且容易受天氣影響。'
              },
              {
                type: 'text',
                content: '💡 數字說故事：\n\n1952年，台灣農業占GDP的32%，工業只占18%。大部分人的工作都和土地有關。'
              }
            ]
          },
          {
            title: '第二階段：輕工業台灣（1960–1980年代）',
            blocks: [
              {
                type: 'text',
                content: '1960年代開始，台灣轉向「加工出口」策略。政府設立加工出口區，吸引外國公司來台灣設廠，利用台灣便宜的勞力生產商品，再出口到美國、日本等國家。\n\n那個年代，台灣工廠生產什麼？雨傘、塑膠玩具、聖誕燈、成衣、電子零件——這些都是「勞力密集」的輕工業產品。'
              },
              {
                type: 'text',
                content: '「客廳即工廠」是當時最常見的景象：許多家庭在客廳裡加工玩具、縫製衣服，全家大小一起工作到深夜。雖然辛苦，但收入比務農好得多，越來越多人搬到城市找工作。\n\n1970–80年代，台灣經濟快速成長，出現了「台灣錢淹腳目」這句話——形容到處都有賺錢機會，錢多到淹到腳踝。'
              },
              {
                type: 'text',
                content: '💡 數字說故事：\n\n1980年，工業占GDP的46%，超過了農業。台灣從農業社會變成工業社會，只用了20年。'
              }
            ]
          },
          {
            title: '第三階段：重工業與科技業（1980–2000年代）',
            blocks: [
              {
                type: 'text',
                content: '隨著台灣工資上漲，便宜的勞力優勢消失了。1980年代開始，台灣轉向「技術密集」的重工業：石化、鋼鐵、造船，以及最重要的——電子業和半導體。\n\n1987年，台積電成立。張忠謀創立了全世界第一家「專業晶圓代工廠」，只幫別人製造晶片，不設計自己的產品。這個模式後來讓台灣成為全球半導體產業的核心。'
              },
              {
                type: 'text',
                content: '1990年代，台灣進入「科技島」時代。新竹科學園區聚集了上百家高科技公司，生產電腦、晶片、主機板。台灣製造的產品，從「便宜的玩具」變成「高價值的科技零件」。\n\n同一時期，服務業也快速發展。大型百貨公司、連鎖超商、電影院（像民生戲院）如雨後春筍般出現。'
              },
              {
                type: 'text',
                content: '💡 數字說故事：\n\n2000年，服務業占GDP的63%，工業占33%，農業只剩2%。台灣從農業國變成科技國，花了整整50年。'
              }
            ]
          },
          {
            title: '第四階段：全球化與轉型挑戰（2000年代–現在）',
            blocks: [
              {
                type: 'text',
                content: '2000年以後，台灣面臨新的挑戰：中國崛起成為「世界工廠」，許多台商把工廠搬到中國；網路經濟興起，Amazon、淘寶改變了消費習慣；AI和電動車成為新產業。\n\n台灣的優勢依然是半導體——台積電是全球最先進的晶片製造商，幾乎所有的手機、電腦、汽車都需要台灣的晶片。但同時，台灣也在努力發展綠能、生技、文創產業，尋找下一個50年的方向。'
              },
              {
                type: 'text',
                content: '回到新民生戲院的故事：\n\n1990年代戲院最輝煌，正是台灣經濟起飛、人們開始有錢消費娛樂的時代。1998年威秀進駐、傳統戲院沒落，則反映了「大型資本」和「連鎖經營」如何改變產業生態。\n\n經濟發展不只是數字成長，它改變了我們的生活方式、工作內容，甚至我們看電影的地方。'
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
      id: 'w8d1-math',
      name: '數學｜百分比是什麼？',
      icon: '📐',
      lesson: {
        title: '百分比：理解變化的工具',
        sections: [
          {
            title: '為什麼需要百分比？',
            blocks: [
              {
                type: 'text',
                content: '剛才社會科提到：1952年農業占GDP的32%，2000年只剩2%。\n\n這些「%」（百分比）是什麼意思？為什麼我們不直接說「農業的產值是多少億元」，而要用百分比？\n\n答案是：百分比讓「比較」變簡單。'
              },
              {
                type: 'text',
                content: '假設：\n• 1952年台灣GDP是100億元，農業32億\n• 2000年台灣GDP是10,000億元，農業200億\n\n農業的「絕對數字」從32億漲到200億，但它在整體經濟中的「相對重要性」從32%降到2%。\n\n百分比幫助我們看到「比例關係」，而不被絕對數字迷惑。'
              }
            ]
          },
          {
            title: '百分比的定義',
            blocks: [
              {
                type: 'text',
                content: '百分比（Percent）= 每一百份中佔多少份\n\n「%」的符號意思就是「per cent」→「每一百」。\n\n例如：\n• 50% = 50/100 = 0.5（一半）\n• 25% = 25/100 = 0.25（四分之一）\n• 75% = 75/100 = 0.75（四分之三）'
              },
              {
                type: 'text',
                content: '三種表示法可以互換：\n\n① 百分比：50%\n② 分數：50/100 = 1/2\n③ 小數：0.5\n\n這三個是同一個數，只是寫法不同。我們會根據情境選擇最方便的表示法。'
              }
            ]
          },
          {
            title: '百分比的轉換',
            blocks: [
              {
                type: 'text',
                content: '小數 → 百分比：× 100\n• 0.25 → 0.25 × 100 = 25%\n• 0.8 → 0.8 × 100 = 80%\n\n百分比 → 小數：÷ 100\n• 30% → 30 ÷ 100 = 0.3\n• 75% → 75 ÷ 100 = 0.75'
              },
              {
                type: 'text',
                content: '記憶訣竅：\n\n「百分比」就是「以100為分母的分數」，所以小數要乘100變成分子；反過來，百分比要除以100變回小數。'
              }
            ]
          },
          {
            title: '求某數的百分之幾',
            blocks: [
              {
                type: 'text',
                content: '例題：一班有40個學生，其中25%是女生，女生有幾人？\n\n方法一：先轉小數，再相乘\n25% = 0.25\n40 × 0.25 = 10（人）\n\n方法二：先當分數，再計算\n40 × 25/100 = 40 × 1/4 = 10（人）\n\n兩種方法結果一樣，選你覺得順手的。'
              },
              {
                type: 'text',
                content: '🏭 經濟情境：\n\n1980年台灣GDP是100億美元，其中46%是工業產值，工業產值是多少？\n\n100 × 0.46 = 46（億美元）\n\n明天我們會學「成長率」——如何用百分比描述經濟的「變化快慢」。'
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
      id: 'w8d1-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '今天學了什麼？',
        sections: [
          {
            title: '今日知識整理',
            blocks: [
              {
                type: 'text',
                content: '🗺️ 社會：台灣經濟從農業（1950s）→輕工業（1960–80s）→科技業（1990s–now），花了50年完成轉型。每一次轉變都改變了人們的生活方式。\n\n📐 數學：百分比（%）是「每100份中佔多少份」，可以和小數、分數互換。它讓我們能比較不同規模的事物。\n\n📖 文本：1990年代的民生戲院，正是台灣經濟起飛、人們開始享受娛樂消費的黃金年代。'
              },
              {
                type: 'text',
                content: '⏭️ 明天預告：1998年，威秀影城進駐台北。傳統社區戲院為什麼打不過大型連鎖影城？我們要學「成長率」——用百分比看「變化的速度」。科學課會討論汽車的能源轉換。'
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
