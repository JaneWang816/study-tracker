// W11 Day1: 為什麼要保護自然?
// 核心概念: 國家公園的誕生、等量公理概念、酸鹼指示劑

// ==================== 題目生成器 ====================

// 社會科: 國家公園配對題
const generateNationalParkQuestion = () => {
  const parks = [
    {
      name: '墾丁國家公園',
      year: 1984,
      feature: '台灣第一座國家公園',
      location: '屏東恆春半島',
      special: '熱帶珊瑚礁生態、候鳥遷徙'
    },
    {
      name: '玉山國家公園',
      year: 1985,
      feature: '東北亞第一高峰',
      location: '中央山脈',
      special: '高山生態系統'
    },
    {
      name: '陽明山國家公園',
      year: 1985,
      feature: '火山地形',
      location: '台北近郊',
      special: '溫泉、北降植物'
    },
    {
      name: '太魯閣國家公園',
      year: 1985,
      feature: '大理石峽谷',
      location: '花蓮',
      special: '地質奇觀、立霧溪'
    },
    {
      name: '雪霸國家公園',
      year: 1992,
      feature: '冰河遺跡',
      location: '苗栗、台中、新竹',
      special: '櫻花鉤吻鮭棲地'
    }
  ]

  const questionTypes = [
    {
      type: 'year',
      generate: (park) => ({
        question: `${park.name}成立於哪一年?`,
        options: [park.year, park.year - 1, park.year + 1, park.year + 7],
        answer: 0
      })
    },
    {
      type: 'feature',
      generate: (park) => {
        const allFeatures = parks.map(p => p.feature)
        const wrongFeatures = allFeatures.filter(f => f !== park.feature)
        const shuffleWrong = wrongFeatures.sort(() => Math.random() - 0.5).slice(0, 3)
        const options = [park.feature, ...shuffleWrong]
        const shuffled = options.sort(() => Math.random() - 0.5)
        return {
          question: `${park.name}的主要特色是?`,
          options: shuffled,
          answer: shuffled.indexOf(park.feature)
        }
      }
    },
    {
      type: 'first',
      generate: () => ({
        question: '台灣第一座國家公園是?',
        options: ['墾丁國家公園', '玉山國家公園', '陽明山國家公園', '太魯閣國家公園'],
        answer: 0
      })
    },
    {
      type: 'count1985',
      generate: () => ({
        question: '1985年同時成立了幾座國家公園?',
        options: [3, 1, 2, 4],
        answer: 0
      })
    }
  ]

  const park = parks[Math.floor(Math.random() * parks.length)]
  const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  
  return qType.generate(park)
}

// 數學科: 等式判斷題
const generateEquationQuestion = () => {
  const questionTypes = [
    {
      type: 'true_false',
      generate: () => {
        const isTrue = Math.random() > 0.5
        if (isTrue) {
          const a = Math.floor(Math.random() * 10) + 1
          const b = Math.floor(Math.random() * 10) + 1
          const ops = ['+', '-']
          const op = ops[Math.floor(Math.random() * ops.length)]
          const result = op === '+' ? a + b : a - b
          return {
            question: `${a} ${op} ${b} = ${result} 這個等式是對的嗎?`,
            options: ['對的', '錯的'],
            answer: 0,
            explanation: `因為 ${a} ${op} ${b} 確實等於 ${result}`
          }
        } else {
          const a = Math.floor(Math.random() * 10) + 1
          const b = Math.floor(Math.random() * 10) + 1
          const result = a + b + (Math.random() > 0.5 ? 1 : -1)
          return {
            question: `${a} + ${b} = ${result} 這個等式是對的嗎?`,
            options: ['對的', '錯的'],
            answer: 1,
            explanation: `因為 ${a} + ${b} = ${a + b}，不等於 ${result}`
          }
        }
      }
    },
    {
      type: 'balance',
      generate: () => {
        const left = Math.floor(Math.random() * 15) + 5
        const options = [left, left + 1, left - 1, left + 2]
        return {
          question: `如果天秤左邊是 ${left}，要保持平衡，右邊應該是多少?`,
          options: options.sort(() => Math.random() - 0.5),
          answer: options.indexOf(left),
          explanation: '天秤平衡時，兩邊的重量必須相等'
        }
      }
    },
    {
      type: 'equal_sign',
      generate: () => {
        const a = Math.floor(Math.random() * 8) + 2
        const b = Math.floor(Math.random() * 8) + 2
        const sum = a + b
        return {
          question: `等號 = 的意思是什麼?`,
          options: [
            '左右兩邊永遠相等',
            '左邊比右邊大',
            '右邊比左邊大',
            '左右兩邊可以不相等'
          ],
          answer: 0,
          explanation: '等號表示兩邊的值完全相同'
        }
      }
    }
  ]

  const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  return qType.generate()
}

// 科學科: 酸鹼指示劑題
const generateIndicatorQuestion = () => {
  const questionTypes = [
    {
      type: 'litmus_acid',
      generate: () => ({
        question: '檸檬汁是酸性的，會讓藍色石蕊試紙變成什麼顏色?',
        options: ['紅色', '藍色', '綠色', '黃色'],
        answer: 0,
        explanation: '酸性物質會讓藍色石蕊試紙變紅'
      })
    },
    {
      type: 'litmus_base',
      generate: () => ({
        question: '肥皂水是鹼性的，會讓紅色石蕊試紙變成什麼顏色?',
        options: ['藍色', '紅色', '綠色', '黃色'],
        answer: 0,
        explanation: '鹼性物質會讓紅色石蕊試紙變藍'
      })
    },
    {
      type: 'indicator_definition',
      generate: () => ({
        question: '什麼是「指示劑」?',
        options: [
          '遇到酸鹼會變色的物質',
          '只能測酸性的物質',
          '只能測鹼性的物質',
          '用來測溫度的物質'
        ],
        answer: 0,
        explanation: '指示劑是遇到酸性或鹼性物質會改變顏色的化學物質'
      })
    },
    {
      type: 'natural_indicator',
      generate: () => ({
        question: '哪一種是天然指示劑?',
        options: ['紫色高麗菜汁', '清水', '食鹽水', '糖水'],
        answer: 0,
        explanation: '紫色高麗菜汁含有花青素，遇酸鹼會變色'
      })
    },
    {
      type: 'litmus_rule',
      generate: () => ({
        question: '石蕊試紙的變色規則是?',
        options: [
          '遇酸變紅、遇鹼變藍',
          '遇酸變藍、遇鹼變紅',
          '遇酸變綠、遇鹼變黃',
          '遇酸變黃、遇鹼變綠'
        ],
        answer: 0,
        explanation: '記憶口訣: 酸紅鹼藍'
      })
    }
  ]

  const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  return qType.generate()
}

// 語文科: 詞彙配對題
const generateVocabularyQuestion = () => {
  const vocabulary = [
    {
      word: '保育',
      definition: '保護並培育自然資源和生物',
      example: '國家公園的設立是為了保育台灣的珍貴生態',
      wrong: ['破壞環境', '開發資源', '砍伐森林']
    },
    {
      word: '生態系',
      definition: '生物與環境形成的互動系統',
      example: '高山生態系包含植物、動物和氣候環境',
      wrong: ['單一物種', '人造環境', '工業區域']
    },
    {
      word: '特有種',
      definition: '只在某個地區生存的物種',
      example: '台灣黑熊是台灣特有種',
      wrong: ['外來種', '普遍物種', '滅絕物種']
    },
    {
      word: '棲地',
      definition: '生物生活的環境',
      example: '珊瑚礁是熱帶魚的棲地',
      wrong: ['食物', '天敵', '氣候']
    },
    {
      word: '多樣性',
      definition: '物種的豐富程度',
      example: '台灣的生物多樣性非常高',
      wrong: ['單一性', '相似性', '重複性']
    }
  ]

  const item = vocabulary[Math.floor(Math.random() * vocabulary.length)]
  
  const questionTypes = [
    {
      type: 'definition',
      generate: (item) => {
        const allDefinitions = vocabulary.map(v => v.definition)
        const wrongDefs = allDefinitions.filter(d => d !== item.definition)
        const shuffleWrong = wrongDefs.sort(() => Math.random() - 0.5).slice(0, 3)
        const options = [item.definition, ...shuffleWrong]
        const shuffled = options.sort(() => Math.random() - 0.5)
        return {
          question: `「${item.word}」的意思是?`,
          options: shuffled,
          answer: shuffled.indexOf(item.definition)
        }
      }
    },
    {
      type: 'usage',
      generate: (item) => {
        const sentences = [
          `國家公園的設立是為了${item.word}台灣的珍貴生態`,
          `台灣的${item.word}非常豐富`,
          `我們要重視環境${item.word}`,
          `${item.word}是環境保護的重要工作`
        ]
        const sentence = sentences[Math.floor(Math.random() * sentences.length)]
        return {
          question: `下列哪個句子正確使用了「${item.word}」?`,
          options: [
            sentence,
            sentence.replace(item.word, '破壞'),
            sentence.replace(item.word, '污染'),
            sentence.replace(item.word, '開發')
          ],
          answer: 0
        }
      }
    }
  ]

  const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  return qType.generate(item)
}

// ==================== Day 結構 ====================

const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🏔️',
  color: '#10B981',
  title: '為什麼要保護自然?',
  
  units: [
    // ========== 單元1: 開場閱讀 ==========
    {
      id: 'w11d1-opening',
      name: '開場閱讀',
      icon: '📖',
      practice: null,
      lesson: {
        title: '玉山去來(一):初登玉山',
        sections: [
          {
            title: '閱讀文本',
            blocks: [
              {
                type: 'quote',
                content: '崎嶇的碎石小徑在無邊的漆黑中循著陡坡面曲折上升。我臨時隨行的一支欲登玉山頂觀日出的隊伍，自從出了冷杉林，進入海拔約三五五○公尺的森林界線以後，已因成員體力的不一而斷隔為好幾截；我看到他們的手電筒或頭燈的微光點綴在上下的數個路段上，在黑暗裡搖晃。那些不時閃現的人影、岩坡和低矮的圓柏叢，全如魅影般。',
                author: '陳列《玉山去來》'
              },
              {
                type: 'text',
                content: '這是台灣當代散文家陳列第一次攀登玉山主峰的經歷。在這趟旅程中，他不僅看到了壯麗的高山風景，更深刻感受到自然的偉大與脆弱。'
              },
              {
                type: 'text',
                content: '玉山，海拔3,952公尺，是台灣的最高峰，也是東北亞第一高峰。1985年，台灣政府將玉山周邊10萬5千公頃的區域劃設為「玉山國家公園」，成為台灣第二座國家公園。'
              },
              {
                type: 'text',
                content: '為什麼要把玉山劃為國家公園?因為這裡有台灣最珍貴的高山生態系統，包含超過50種特有植物、30種特有鳥類，還有台灣黑熊、山羌、水鹿等珍貴動物。如果沒有保護，這些生命可能會因為人類活動而消失。'
              },
              {
                type: 'text',
                content: '今天我們要來認識:台灣的國家公園是怎麼誕生的?保護自然為什麼這麼重要?'
              }
            ]
          }
        ]
      }
    },

    // ========== 單元2: 社會科 ==========
    {
      id: 'w11d1-society',
      name: '社會',
      icon: '🏛️',
      lesson: {
        title: '台灣國家公園的誕生',
        sections: [
          {
            title: '一、什麼是國家公園?',
            blocks: [
              {
                type: 'text',
                content: '國家公園是一個國家為了保護珍貴的自然環境、野生動植物和特殊地形地貌，而劃設出來的保護區。在國家公園裡，禁止破壞自然環境的行為，例如:砍伐樹木、捕捉野生動物、亂丟垃圾等。'
              },
              {
                type: 'text',
                content: '設立國家公園有三個主要目的:'
              },
              {
                type: 'text',
                content: '1. **保育自然資源**:保護珍貴的動植物和生態系統\n2. **提供環境教育**:讓民眾了解自然保育的重要性\n3. **永續利用**:在不破壞環境的前提下，讓人們可以親近自然'
              }
            ]
          },
          {
            title: '二、台灣國家公園的成立歷程',
            blocks: [
              {
                type: 'text',
                content: '**1984年 - 墾丁國家公園(台灣第一座)**'
              },
              {
                type: 'text',
                content: '位於屏東恆春半島，面積約18,084公頃。這裡有台灣唯一的熱帶珊瑚礁生態系統，也是候鳥遷徙的重要棲息地。墾丁的成立，開啟了台灣國家公園保育的時代。'
              },
              {
                type: 'text',
                content: '**1985年 - 三座國家公園同時成立**'
              },
              {
                type: 'text',
                content: '政府在這一年同時成立了三座國家公園:'
              },
              {
                type: 'text',
                content: '• **玉山國家公園**:以東北亞第一高峰玉山為中心，保護高山生態系統\n• **陽明山國家公園**:位於台北近郊，以火山地形和溫泉聞名\n• **太魯閣國家公園**:位於花蓮，以壯麗的大理石峽谷和立霧溪著稱'
              },
              {
                type: 'text',
                content: '**1992年 - 雪霸國家公園**'
              },
              {
                type: 'text',
                content: '橫跨苗栗、台中、新竹三縣市，以雪山和大霸尖山為主體。這裡有冰河時期遺留下來的地形，還有台灣國寶魚「櫻花鉤吻鮭」的重要棲地。'
              }
            ]
          },
          {
            title: '三、從「資源開發」到「保育優先」',
            blocks: [
              {
                type: 'text',
                content: '在1980年代之前，台灣的山林主要被視為「可以開發利用的資源」。人們砍伐森林、開墾土地、捕捉野生動物，許多珍貴的生態逐漸消失。'
              },
              {
                type: 'text',
                content: '直到環境保護意識逐漸抬頭，人們才開始反思:如果我們把所有的森林都砍光、把所有的動物都抓光，我們的子孫還能看到這些美麗的自然景觀嗎?'
              },
              {
                type: 'text',
                content: '國家公園的成立，代表台灣從「資源開發」轉向「保育優先」的重要里程碑。我們開始認知到:保護自然，就是保護我們自己的未來。'
              }
            ]
          },
          {
            title: '四、國家公園保護了什麼?',
            blocks: [
              {
                type: 'text',
                content: '• **生物多樣性**:台灣五座國家公園保護了超過4,000種植物、500種鳥類、100種哺乳類動物\n• **珍貴地形**:從熱帶珊瑚礁、大理石峽谷、火山地形到高山冰河遺跡\n• **水資源**:玉山國家公園是濁水溪、高屏溪等重要河川的發源地\n• **文化資產**:許多原住民族的傳統領域和文化遺址也在國家公園保護範圍內'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateNationalParkQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元3: 數學科 ==========
    {
      id: 'w11d1-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '等量公理的概念',
        sections: [
          {
            title: '一、天秤的啟示',
            blocks: [
              {
                type: 'text',
                content: '想像你面前有一個天秤。當天秤保持平衡時，代表什麼?'
              },
              {
                type: 'text',
                content: '**答案:左邊的重量 = 右邊的重量**'
              },
              {
                type: 'text',
                content: '如果左邊是5公斤，右邊也必須是5公斤，天秤才會平衡。這就是「相等」的概念。'
              },
              {
                type: 'text',
                content: '在數學中，我們用「等號 =」來表示兩邊相等，就像天秤平衡一樣。'
              }
            ]
          },
          {
            title: '二、什麼是等式?',
            blocks: [
              {
                type: 'text',
                content: '**等式**:用等號連接的數學式子，表示等號左右兩邊的值永遠相等。'
              },
              {
                type: 'text',
                content: '例如:'
              },
              {
                type: 'text',
                content: '• 5 + 3 = 8 ✓ (這是正確的等式，因為左邊5+3確實等於右邊的8)\n• 7 - 2 = 5 ✓ (這是正確的等式)\n• 6 + 1 = 9 ✗ (這不是正確的等式，因為6+1=7，不等於9)'
              },
              {
                type: 'text',
                content: '**重點**:等號的意思是「左邊 = 右邊」，兩邊必須完全相等!'
              }
            ]
          },
          {
            title: '三、判斷等式的真假',
            blocks: [
              {
                type: 'text',
                content: '我們可以透過計算來判斷一個等式是對的還是錯的:'
              },
              {
                type: 'text',
                content: '**步驟1**:計算等號左邊的值\n**步驟2**:計算等號右邊的值\n**步驟3**:比較兩邊是否相等'
              },
              {
                type: 'text',
                content: '例如:判斷「8 + 4 = 12」是否正確?'
              },
              {
                type: 'text',
                content: '• 左邊: 8 + 4 = 12\n• 右邊: 12\n• 12 = 12 ✓ 所以這個等式是對的!'
              }
            ]
          },
          {
            title: '四、等式與天秤的對照',
            blocks: [
              {
                type: 'text',
                content: '我們可以把等式想像成天秤:'
              },
              {
                type: 'text',
                content: '• **等號左邊** = 天秤左邊的重量\n• **等號右邊** = 天秤右邊的重量\n• **等式成立** = 天秤保持平衡'
              },
              {
                type: 'text',
                content: '例如: 3 + 5 = 8'
              },
              {
                type: 'text',
                content: '想像天秤左邊放了3個蘋果和5個蘋果(共8個)，右邊放了8個蘋果，這樣天秤就會平衡。'
              },
              {
                type: 'text',
                content: '下一次課程，我們會學到:如果在天秤兩邊同時加上或減去相同的重量，天秤還會保持平衡嗎?這就是「等量公理」的核心概念!'
              }
            ]
          },
          {
            title: '五、生活中的等式思維',
            blocks: [
              {
                type: 'text',
                content: '保護自然環境，也需要「平衡」的思維:'
              },
              {
                type: 'text',
                content: '• **生態平衡**:掠食者與被掠食者的數量要平衡\n• **資源平衡**:人類使用的資源 = 自然能恢復的速度\n• **保育與發展的平衡**:在保護環境的同時，也要滿足人們的生活需求'
              },
              {
                type: 'text',
                content: '就像等式兩邊必須相等一樣，自然界也需要保持平衡，生態系統才能健康運作。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateEquationQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元4: 科學科 ==========
    {
      id: 'w11d1-science',
      name: '科學',
      icon: '🧪',
      lesson: {
        title: '酸鹼指示劑',
        sections: [
          {
            title: '一、什麼是指示劑?',
            blocks: [
              {
                type: 'text',
                content: '在化學世界裡，有些物質非常特別，它們會因為遇到「酸性」或「鹼性」物質而改變顏色。我們把這種會變色的物質叫做**指示劑**。'
              },
              {
                type: 'text',
                content: '**指示劑的功用**:幫助我們判斷一種物質是酸性還是鹼性。'
              },
              {
                type: 'text',
                content: '就像交通號誌用紅綠燈告訴我們「停止」或「通行」，指示劑用顏色變化告訴我們「酸性」或「鹼性」。'
              }
            ]
          },
          {
            title: '二、石蕊試紙 - 最常用的指示劑',
            blocks: [
              {
                type: 'text',
                content: '**石蕊試紙**是實驗室最常用的指示劑，它有兩種顏色:'
              },
              {
                type: 'text',
                content: '• **藍色石蕊試紙**:遇到酸性物質會變紅色\n• **紅色石蕊試紙**:遇到鹼性物質會變藍色'
              },
              {
                type: 'text',
                content: '**記憶口訣**:「酸紅鹼藍」'
              },
              {
                type: 'text',
                content: '• 酸性 → 變紅色\n• 鹼性 → 變藍色'
              }
            ]
          },
          {
            title: '三、實驗範例',
            blocks: [
              {
                type: 'text',
                content: '**實驗1:檢測檸檬汁**'
              },
              {
                type: 'text',
                content: '• 檸檬汁是酸性的(含有檸檬酸)\n• 用藍色石蕊試紙接觸檸檬汁\n• 試紙會從藍色變成紅色 ✓'
              },
              {
                type: 'text',
                content: '**實驗2:檢測肥皂水**'
              },
              {
                type: 'text',
                content: '• 肥皂水是鹼性的\n• 用紅色石蕊試紙接觸肥皂水\n• 試紙會從紅色變成藍色 ✓'
              }
            ]
          },
          {
            title: '四、天然指示劑 - 紫色高麗菜汁',
            blocks: [
              {
                type: 'text',
                content: '除了石蕊試紙，大自然中也有指示劑!最有名的就是**紫色高麗菜汁**。'
              },
              {
                type: 'text',
                content: '紫色高麗菜含有一種叫做「花青素」的色素，這種色素會因為酸鹼不同而變色:'
              },
              {
                type: 'text',
                content: '• 遇到酸性:變成粉紅色或紅色\n• 保持中性:維持紫色\n• 遇到鹼性:變成藍綠色或黃綠色'
              },
              {
                type: 'text',
                content: '**動手做**:你可以在家裡試試看!'
              },
              {
                type: 'text',
                content: '1. 切一些紫色高麗菜，用熱水煮出紫色的汁液\n2. 把汁液倒入幾個透明杯子\n3. 分別加入檸檬汁(酸)、清水(中性)、小蘇打水(鹼)\n4. 觀察顏色變化!'
              }
            ]
          },
          {
            title: '五、為什麼要學指示劑?',
            blocks: [
              {
                type: 'text',
                content: '**1. 環境保護**'
              },
              {
                type: 'text',
                content: '科學家用指示劑檢測河水、土壤的酸鹼度，判斷環境是否受到污染。例如:酸雨會讓土壤變酸，影響植物生長。'
              },
              {
                type: 'text',
                content: '**2. 農業應用**'
              },
              {
                type: 'text',
                content: '不同植物喜歡的土壤酸鹼度不同，農夫會測量土壤的酸鹼度，決定要種什麼作物。'
              },
              {
                type: 'text',
                content: '**3. 生活安全**'
              },
              {
                type: 'text',
                content: '游泳池的水需要保持適當的酸鹼度，太酸或太鹼都會傷害皮膚。管理員會定期用指示劑檢測水質。'
              },
              {
                type: 'text',
                content: '**連結主題**:保護自然環境，就要先了解環境的狀態。指示劑就像醫生的聽診器，幫助我們「診斷」環境是否健康!'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateIndicatorQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元5: 語文科 ==========
    {
      id: 'w11d1-vocabulary',
      name: '語文',
      icon: '📝',
      lesson: {
        title: '詞彙學習:保育與生態用語',
        sections: [
          {
            title: '本日重點詞彙',
            blocks: [
              {
                type: 'text',
                content: '**1. 保育** (bǎo yù)'
              },
              {
                type: 'text',
                content: '**意思**:保護並培育自然資源和生物\n**例句**:國家公園的設立是為了保育台灣的珍貴生態。\n**延伸**:保育不是「不使用」，而是「永續使用」——在不破壞環境的前提下，讓資源可以一代一代傳下去。'
              },
              {
                type: 'text',
                content: '**2. 生態系** (shēng tài xì)'
              },
              {
                type: 'text',
                content: '**意思**:生物與環境形成的互動系統\n**例句**:高山生態系包含植物、動物和氣候環境。\n**延伸**:一個健康的生態系就像一個平衡的天秤，每個物種都扮演重要角色。'
              },
              {
                type: 'text',
                content: '**3. 特有種** (tè yǒu zhǒng)'
              },
              {
                type: 'text',
                content: '**意思**:只在某個地區生存的物種\n**例句**:台灣黑熊是台灣特有種，全世界只有台灣有。\n**延伸**:台灣島嶼環境獨特，孕育出許多特有種生物，更需要我們珍惜保護。'
              },
              {
                type: 'text',
                content: '**4. 棲地** (qī dì)'
              },
              {
                type: 'text',
                content: '**意思**:生物生活的環境\n**例句**:珊瑚礁是熱帶魚的棲地。\n**延伸**:破壞棲地就等於毀掉生物的家，它們將無處可去。'
              },
              {
                type: 'text',
                content: '**5. 多樣性** (duō yàng xìng)'
              },
              {
                type: 'text',
                content: '**意思**:物種的豐富程度\n**例句**:台灣的生物多樣性非常高，小小的島嶼上有超過4萬種生物。\n**延伸**:生物多樣性越高，生態系統越穩定，就像一個班級有各種專長的同學，大家可以互相幫助。'
              }
            ]
          },
          {
            title: '詞彙應用練習',
            blocks: [
              {
                type: 'text',
                content: '請試著用今天學到的詞彙，完成下列句子:'
              },
              {
                type: 'text',
                content: '1. 玉山國家公園_____(保育/開發)了台灣珍貴的高山生態。\n2. 台灣黑熊是台灣的_____(外來種/特有種)。\n3. 森林是許多動物的_____(棲地/食物)。\n4. 生物_____(多樣性/單一性)越高，環境越健康。\n5. 一個健康的_____(生態系/工業區)需要各種生物共同維持平衡。'
              },
              {
                type: 'text',
                content: '**參考答案**:\n1. 保育  2. 特有種  3. 棲地  4. 多樣性  5. 生態系'
              }
            ]
          },
          {
            title: '延伸閱讀',
            blocks: [
              {
                type: 'text',
                content: '**台灣國家公園小檔案**'
              },
              {
                type: 'text',
                content: '• 墾丁(1984):熱帶珊瑚礁、候鳥棲地\n• 玉山(1985):高山生態、台灣黑熊\n• 陽明山(1985):火山地形、溫泉生態\n• 太魯閣(1985):大理石峽谷、立霧溪\n• 雪霸(1992):冰河遺跡、櫻花鉤吻鮭\n• 金門(1995):戰地文化、候鳥濕地\n• 東沙環礁(2007):海洋生態、珊瑚礁\n• 台江(2009):濕地生態、黑面琵鷺\n• 澎湖南方四島(2014):玄武岩、海洋資源'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateVocabularyQuestion,
        checkAnswer: (q, a) => parseInt(a) === q.answer
      }
    },

    // ========== 單元6: 今日回顧 ==========
    {
      id: 'w11d1-review',
      name: '今日回顧',
      icon: '⭐',
      practice: null,
      lesson: {
        title: '第1天學習總結',
        sections: [
          {
            title: '今天我們學到了什麼?',
            blocks: [
              {
                type: 'text',
                content: '**社會科 - 台灣國家公園的誕生**'
              },
              {
                type: 'text',
                content: '• 1984年墾丁國家公園成立，是台灣第一座國家公園\n• 1985年同時成立玉山、陽明山、太魯閣三座國家公園\n• 1992年成立雪霸國家公園\n• 國家公園的目的:保育、教育、永續利用\n• 台灣從「資源開發」轉向「保育優先」'
              },
              {
                type: 'text',
                content: '**數學科 - 等量公理概念**'
              },
              {
                type: 'text',
                content: '• 等式就像天秤，兩邊必須相等\n• 等號 = 的意思是「左邊永遠等於右邊」\n• 判斷等式真假:計算兩邊的值，看是否相等\n• 生態平衡也需要「等式思維」'
              },
              {
                type: 'text',
                content: '**科學科 - 酸鹼指示劑**'
              },
              {
                type: 'text',
                content: '• 指示劑:遇到酸鹼會變色的物質\n• 石蕊試紙:酸紅鹼藍(酸性變紅、鹼性變藍)\n• 天然指示劑:紫色高麗菜汁\n• 指示劑在環境保護、農業、生活中都很重要'
              },
              {
                type: 'text',
                content: '**語文科 - 保育詞彙**'
              },
              {
                type: 'text',
                content: '• 保育:保護並培育\n• 生態系:生物與環境的互動系統\n• 特有種:只在某地區生存的物種\n• 棲地:生物生活的環境\n• 多樣性:物種的豐富程度'
              }
            ]
          },
          {
            title: '跨學科連結',
            blocks: [
              {
                type: 'text',
                content: '今天的三個學科都在談「平衡」:'
              },
              {
                type: 'text',
                content: '• **社會科的生態平衡**:保護自然 = 保護未來\n• **數學科的等式平衡**:左邊 = 右邊\n• **科學科的酸鹼平衡**:檢測環境是否健康'
              },
              {
                type: 'text',
                content: '保護自然環境，就像維持天秤的平衡，也像保持等式的相等。當我們破壞環境，就等於打破了平衡，等式就不成立了。'
              }
            ]
          },
          {
            title: '明天預告',
            blocks: [
              {
                type: 'text',
                content: '明天我們將學習:'
              },
              {
                type: 'text',
                content: '• **社會科**:五大國家公園各有什麼特色?\n• **數學科**:等量公理第一式——兩邊同時加減\n• **科學科**:pH值是什麼?如何用數字表示酸鹼?\n• **語文科**:法規與物種詞彙'
              },
              {
                type: 'text',
                content: '我們也會繼續閱讀《玉山去來》，跟著作者陳列的腳步，登上台灣最高峰，感受大自然的壯麗與脆弱。'
              }
            ]
          },
          {
            title: '回家思考',
            blocks: [
              {
                type: 'text',
                content: '1. 你去過哪些國家公園?那裡有什麼特別的動植物?\n2. 如果沒有國家公園，台灣的自然環境會變成什麼樣子?\n3. 在你生活的地方，有哪些值得保護的自然環境?'
              }
            ]
          }
        ]
      }
    }
  ]
}

export default day1
