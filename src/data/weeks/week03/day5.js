// src/data/weeks/week03/day5.js
// W3 Day5：大地的歌聲

import { shuffleArray, shuffleOptions } from '../../utils'

// ==========================================
// 輕量複習題庫（W3 綜合）
// ==========================================
const reviewQuestions = [
  {
    type: 'options',
    question: '台灣最長的河流是哪一條？',
    options: ['濁水溪', '高屏溪', '淡水河', '大甲溪'],
    answer: 0,
    displayAnswer: '濁水溪全長約186公里，是台灣最長的河流，也是嘉南平原的重要水源。'
  },
  {
    type: 'options',
    question: '嘉南大圳完工於哪一年？由誰設計？',
    options: ['1930年，八田與一', '1895年，劉銘傳', '1945年，八田與一', '1920年，陳達儒'],
    answer: 0,
    displayAnswer: '嘉南大圳於1930年完工，由日本工程師八田與一設計，灌溉面積達15萬公頃。'
  },
  {
    type: 'options',
    question: '比 12：18 化成最簡比是？',
    options: ['2：3', '3：2', '4：6', '6：9'],
    answer: 0,
    displayAnswer: '12和18的最大公因數是6，12÷6=2，18÷6=3，最簡比是2：3。'
  },
  {
    type: 'options',
    question: '計算 3/4 ÷ 1/2 = ？',
    options: ['3/2', '3/8', '1/2', '6'],
    answer: 0,
    displayAnswer: '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2。除以分數等於乘以倒數。'
  },
  {
    type: 'options',
    question: '農曆初一是什麼月相？',
    options: ['新月', '滿月', '上弦月', '下弦月'],
    answer: 0,
    displayAnswer: '農曆初一是新月，月亮幾乎不可見；農曆十五是滿月，月亮最圓。'
  },
  {
    type: 'options',
    question: '水循環中，水蒸氣遇冷變回液態水的過程叫做？',
    options: ['凝結', '蒸發', '融化', '凝固'],
    answer: 0,
    displayAnswer: '水蒸氣遇冷失去熱能，凝結成小水滴，形成雲和霧，這個過程叫凝結。'
  },
  {
    type: 'options',
    question: '滿月時，太陽、地球、月亮三者的位置關係是？',
    options: ['地球在太陽和月亮之間', '月亮在太陽和地球之間', '太陽在地球和月亮之間', '三者成直角'],
    answer: 0,
    displayAnswer: '滿月時地球在中間，月亮朝向地球的那面完整被太陽照亮，所以我們看到圓月。'
  },
  {
    type: 'options',
    question: '農曆為什麼需要「閏月」？',
    options: [
      '農曆一年比太陽年短約11天，累積後需加閏月校正',
      '因為有些年份雨量太多',
      '皇帝命令每幾年加一個月慶祝',
      '閏月只是傳統習俗，沒有科學根據'
    ],
    answer: 0,
    displayAnswer: '農曆12個月約354天，太陽年約365天，每年差約11天，每2-3年加一個閏月補足差距。'
  },
  {
    type: 'options',
    question: '比值的計算方式是？',
    options: ['前項 ÷ 後項', '後項 ÷ 前項', '前項 × 後項', '前項 + 後項'],
    answer: 0,
    displayAnswer: '比值 = 前項 ÷ 後項。例如 3：4 的比值 = 3÷4 = 0.75。'
  },
  {
    type: 'options',
    question: '〈農村曲〉的歌詞「希望好年冬，稻仔快快大」，「年冬」在台語中是什麼意思？',
    options: ['農作物收成的季節', '冬天', '春天', '年終獎金'],
    answer: 0,
    displayAnswer: '「年冬」在台語中指農作物的收成季節，「好年冬」就是「豐收年」的意思，反映農民對豐收的期盼。'
  }
]

const generateReviewQuestion = (() => {
  let shuffledBank = []
  let currentIndex = 0

  return () => {
    if (currentIndex >= shuffledBank.length) {
      shuffledBank = shuffleArray(reviewQuestions)
      currentIndex = 0
    }
    const question = shuffledBank[currentIndex]
    currentIndex++
    return shuffleOptions(question)
  }
})()

export { generateReviewQuestion }

// ===== 組合成 Day 5 =====
const day5 = {
  id: 'day5',
  name: '第5天',
  icon: '🎵',
  color: '#8B5CF6',
  title: '大地的歌聲',
  units: [
    // 開場：貫穿文本最終章
    {
      id: 'w3d5-opening',
      name: '開場：吾鄉印象終章',
      icon: '📖',
      lesson: {
        title: '吳晟《吾鄉印象》——最終段',
        sections: [
          {
            title: '本週最後一段詩',
            blocks: [
              {
                type: 'quote',
                content: '吾鄉的天空\n不是一片無所謂的陰天和無所謂的藍天\n吾鄉的土地\n不是一片長不出榮華富貴長不出奇蹟的土地\n\n吾鄉的人們\n在這片土地揮洒了多少汗水\n播下了多少種籽\n才有今天\n才有今天這片豐收的稻田',
                author: '吳晟《吾鄉印象》'
              },
              {
                type: 'text',
                content: '這一週，我們跟著吳晟的詩，走過台灣的河流、水圳、農田和夜空。詩的開頭說「無所謂的陰天和藍天」，但最後說「不是無所謂的土地」——詩人的心情改變了，你有感受到嗎？'
              },
              {
                type: 'text',
                content: '今天，我們用一首1937年的老歌，給這週的學習做一個有聲音的結尾。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 A：藝術欣賞——農村曲
    {
      id: 'w3d5-music',
      name: '藝術欣賞：農村曲',
      icon: '🎵',
      lesson: {
        title: '〈農村曲〉——1937年的農民之歌',
        sections: [
          {
            title: '這首歌的故事',
            blocks: [
              {
                type: 'text',
                content: '〈農村曲〉創作於1937年，作詞陳達儒、作曲蘇桐，是日治時代台灣最重要的台語歌謠之一。那個年代，嘉南大圳剛完工不久，農民用著新水圳的水，在田裡從天亮做到天黑。'
              },
              {
                type: 'text',
                content: '這首歌後來由江蕙、劉福助、方瑞娥等人演唱，傳唱超過80年，是台灣農村文化的重要記憶。'
              }
            ]
          },
          {
            title: '歌詞（附華語對照）',
            blocks: [
              {
                type: 'text',
                content: '第一段：\n透早就出門　天色漸漸光\n（一大早就出門　天色漸漸亮）\n受苦無人問　行到田中央\n（辛苦沒人問　走到田中央）\n行到田中央　為著顧三頓\n（走到田中央　為了三餐溫飽）\n顧三頓　不驚田水冷霜霜\n（三餐溫飽　不怕田水冰冷刺骨）'
              },
              {
                type: 'text',
                content: '第二段：\n炎天赤日頭　悽慘日中晝\n（烈日炎炎　淒苦的正午）\n有時踏水車　有時著搔草\n（有時踩水車灌溉　有時要除草）\n希望好日後　每日巡田頭\n（希望往後日子更好　每天巡視田地）\n巡田頭　不驚嘴乾汗那流\n（巡視田地　不怕口乾汗如雨下）'
              },
              {
                type: 'text',
                content: '第三段：\n日頭那落山　工作才有散\n（太陽下山了　工作才得以結束）\n有時歸身汗　忍著寒甲熱\n（有時全身是汗　忍受寒熱交替）\n希望好年冬　稻仔快快大\n（希望今年豐收　稻子快快長大）\n快快大　阮的生活著快活\n（快快長大　我們的生活才能快樂）'
              }
            ]
          },
          {
            title: '跟著唱',
            blocks: [
              {
                type: 'video',
                videoId: 'p8u_uCMYXbY',
                title: '〈農村曲〉江蕙版'
              },
              {
                type: 'text',
                content: '三段同一個曲調，學會第一段就會全部了！\n\n唱完之後想一想：\n① 歌詞裡的「踏水車」是做什麼用的？和嘉南大圳有什麼關係？\n② 「希望好年冬，稻仔快快大」——農民的心願是什麼？\n③ 吳晟的詩和這首歌，說的是同一片土地，你覺得哪裡最像？'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 B：視覺藝術——水田地景
    {
      id: 'w3d5-art',
      name: '視覺藝術：水田地景',
      icon: '🎨',
      lesson: {
        title: '台灣水田的顏色',
        sections: [
          {
            title: '水田是一面鏡子',
            blocks: [
              {
                type: 'text',
                content: '插秧前，水田蓄滿水，天空的雲、山的輪廓、農人的身影都倒映在田水裡——水田是天地之間最大的鏡子。'
              },
              {
                type: 'text',
                content: '台灣畫家陳進、洪瑞麟都畫過農村水田的景象。水田在不同季節有不同的顏色：\n\n🌱 插秧後：嫩綠、淺黃\n🌾 收割前：金黃、深褐\n💧 休耕期：倒映天空的銀藍色\n🌅 清晨：薄霧中的灰白與橙紅'
              },
              {
                type: 'text',
                content: '🎨 動手試試：用四種顏色，分別畫出水田在一年四季的樣子。你不需要畫得很精確，重要的是用顏色表達季節的感覺。'
              }
            ]
          },
          {
            title: '吳晟詩中的顏色',
            blocks: [
              {
                type: 'text',
                content: '吳晟的詩沒有直接說顏色，但每一個意象都帶著顏色：\n\n「鹹鹹的汗水」→ 透明中帶鹹味\n「粒粒的種籽」→ 深褐、米色\n「豐收的稻田」→ 金黃\n\n文學和繪畫都是用不同的語言說同一個故事。'
              }
            ]
          }
        ]
      },
      practice: null
    },

    // 單元 C：輕量複習
    {
      id: 'w3d5-review',
      name: '本週複習',
      icon: '📝',
      lesson: {
        title: 'W3 本週學習回顧',
        sections: [
          {
            title: '這週我們走過了什麼？',
            blocks: [
              {
                type: 'text',
                content: '🗺️ 社會：台灣河流（短坡急流、中央山脈分水嶺）→ 嘉南大圳（八田與一、三年輪作）→ 農曆與節氣（陰陽合曆、穀雨、芒種）'
              },
              {
                type: 'text',
                content: '📐 數學：比與比值（A：B，比值=A÷B）→ 最簡比（用GCD化簡）→ 分數除法（÷分數 = ×倒數）'
              },
              {
                type: 'text',
                content: '💧 科學（Day 1）：水的三態（固液氣）→ 水循環（蒸發→凝結→降水→逕流）\n🌕 科學（Day 2-3）：月相八名稱→月相成因（日月地三體）→高度角觀測'
              },
              {
                type: 'text',
                content: '✍️ 語文：散文「如果我是一條河」（四段：源頭→旅程→付出→歸宿）\n🎵 藝術：〈農村曲〉（1937年，陳達儒詞、蘇桐曲）'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateReviewQuestion,
        checkAnswer: (question, userAnswer) => {
          return parseInt(userAnswer) === question.answer
        }
      }
    },

    // 週末收尾
    {
      id: 'w3d5-closing',
      name: '週末收尾',
      icon: '✨',
      lesson: {
        title: '這週結束了，你帶走什麼？',
        sections: [
          {
            title: '三個反思問題',
            blocks: [
              {
                type: 'text',
                content: '在進入下週之前，花幾分鐘想想：\n\n① 這週你學到最重要的一件事是什麼？\n② 水循環、月相、比與比值——哪一個概念讓你最有「原來如此」的感覺？\n③ 「流動」這個核心概念，在你的生活中還有哪裡出現過？'
              },
              {
                type: 'text',
                content: '吳晟說：「吾鄉的人們，在這片土地揮洒了多少汗水，播下了多少種籽，才有今天。」\n\n下週，我們要離開水田，往天空走——W4 的主題是比例尺、節氣古詩詞，和三種熱傳遞方式。土地的故事，會繼續。'
              }
            ]
          }
        ]
      },
      practice: null
    }
  ]
}

export default day5
