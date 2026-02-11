// src/data/weeks/week02/day1.js
// W2 Day 1：大地的輪廓

// ==========================================
// 數學：公因數
// ==========================================
const generateGCFQuestion = () => {
  const pairs = [
    { a: 12, b: 18, gcf: 6 },
    { a: 8,  b: 12, gcf: 4 },
    { a: 6,  b: 9,  gcf: 3 },
    { a: 15, b: 10, gcf: 5 },
    { a: 4,  b: 6,  gcf: 2 },
    { a: 9,  b: 12, gcf: 3 },
    { a: 14, b: 21, gcf: 7 },
    { a: 8,  b: 20, gcf: 4 },
    { a: 12, b: 16, gcf: 4 },
    { a: 18, b: 24, gcf: 6 },
    { a: 20, b: 30, gcf: 10 },
    { a: 16, b: 24, gcf: 8 },
  ]
  const pair = pairs[Math.floor(Math.random() * pairs.length)]
  const wrong = [pair.gcf + 1, pair.gcf * 2, Math.max(1, pair.gcf - 1)]
  const options = [String(pair.gcf), ...wrong.map(String)].sort(() => Math.random() - 0.5)
  return {
    question: `${pair.a} 和 ${pair.b} 的最大公因數是多少？`,
    options,
    answer: String(pair.gcf),
    type: 'choice'
  }
}

const generateCommonFactorQuestion = () => {
  const sets = [
    { a: 12, b: 18, common: [2, 3, 6],  notCommon: [4, 5, 9] },
    { a: 8,  b: 12, common: [2, 4],     notCommon: [3, 6, 8] },
    { a: 15, b: 20, common: [5],         notCommon: [3, 4, 10] },
    { a: 9,  b: 12, common: [3],         notCommon: [4, 6, 9] },
    { a: 10, b: 15, common: [5],         notCommon: [2, 3, 10] },
  ]
  const set = sets[Math.floor(Math.random() * sets.length)]
  const correct = set.common[Math.floor(Math.random() * set.common.length)]
  const wrongs = set.notCommon.sort(() => Math.random() - 0.5).slice(0, 3)
  const options = [String(correct), ...wrongs.map(String)].sort(() => Math.random() - 0.5)
  return {
    question: `以下哪個數是 ${set.a} 和 ${set.b} 的公因數？`,
    options,
    answer: String(correct),
    type: 'choice'
  }
}

const generateMathQuestion = () =>
  Math.random() < 0.5 ? generateGCFQuestion() : generateCommonFactorQuestion()

// ==========================================
// 社會：台灣地形
// ==========================================
const terrainQBank = [
  {
    question: '台灣地形分布的主要特徵是什麼？',
    options: ['東高西低，山脈縱貫南北', '西高東低，平原廣布', '中部低窪，四周高山', '全島地勢平坦'],
    answer: '東高西低，山脈縱貫南北'
  },
  {
    question: '台灣面積最大的平原是哪一個？',
    options: ['嘉南平原', '屏東平原', '台北盆地', '宜蘭平原'],
    answer: '嘉南平原'
  },
  {
    question: '台灣五大山脈中，最西邊的是哪一條？',
    options: ['阿里山山脈', '中央山脈', '玉山山脈', '海岸山脈'],
    answer: '阿里山山脈'
  },
  {
    question: '台灣最高峰玉山高度約為多少公尺？',
    options: ['3952 公尺', '3886 公尺', '3797 公尺', '4000 公尺'],
    answer: '3952 公尺'
  },
  {
    question: '台灣東部海岸的地形以什麼為主？',
    options: ['斷崖與礫石海岸', '廣闊沙灘', '泥灘與紅樹林', '廣闊平原'],
    answer: '斷崖與礫石海岸'
  },
  {
    question: '台灣的「花東縱谷」位於哪兩條山脈之間？',
    options: ['中央山脈與海岸山脈', '玉山山脈與中央山脈', '阿里山山脈與玉山山脈', '雪山山脈與中央山脈'],
    answer: '中央山脈與海岸山脈'
  },
  {
    question: '台灣西部平原主要是由什麼作用形成的？',
    options: ['河流沖積', '火山噴發', '海浪侵蝕', '地殼上升'],
    answer: '河流沖積'
  },
  {
    question: '台灣的山脈大多呈什麼方向延伸？',
    options: ['南北走向', '東西走向', '東北到西南', '西北到東南'],
    answer: '南北走向'
  },
]
const generateTerrainQuestion = () => {
  const q = terrainQBank[Math.floor(Math.random() * terrainQBank.length)]
  return { ...q, options: [...q.options].sort(() => Math.random() - 0.5), type: 'choice' }
}

// ==========================================
// 閱讀理解：排灣族
// ==========================================
const readingQBank = [
  {
    question: '排灣族的「百步蛇」在族人心中代表什麼？',
    options: ['祖靈與尊崇的象徵', '危險與邪惡的象徵', '豐收與喜悅的象徵', '雨水與河流的象徵'],
    answer: '祖靈與尊崇的象徵'
  },
  {
    question: '排灣族石板屋的建築技法，據說是從哪裡得到啟示的？',
    options: ['百步蛇身上鱗片的排列', '大武山的岩層排列', '竹子的節節生長', '太陽光的照射方向'],
    answer: '百步蛇身上鱗片的排列'
  },
  {
    question: '在「太陽卵生說」中，排灣族的祖先是如何誕生的？',
    options: ['蛇卵經太陽照射孵化出人', '神靈從大海中創造人', '大洪水後從山中誕生', '竹子裂開後生出人'],
    answer: '蛇卵經太陽照射孵化出人'
  },
  {
    question: '「蛇生說」中，排灣族牡丹社的祖先是怎麼來的？',
    options: ['竹子裂開生出蛇，成長後化為人', '蛇蛋孵化出人形嬰兒', '太陽光照在山石上生出人', '女神從天而降生下後代'],
    answer: '竹子裂開生出蛇，成長後化為人'
  },
]
const generateReadingQuestion = () => {
  const q = readingQBank[Math.floor(Math.random() * readingQBank.length)]
  return { ...q, options: [...q.options].sort(() => Math.random() - 0.5), type: 'choice' }
}

// ==========================================
// Day 1 主體
// ==========================================
const day1 = {
  id: 'day1',
  name: '第1天',
  icon: '🏔️',
  color: '#8B6914',
  title: '大地的輪廓',

  units: [
    {
      id: 'w2d1-reading',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '臺灣原住民族與蛇：排灣族的故事',
        sections: [
          {
            title: '本週貫穿文本',
            blocks: [
              {
                type: 'text',
                content: '這週我們要一起閱讀一篇介紹臺灣原住民族蛇文化的文章。臺灣有許多族群，每個族群都有關於蛇的神話傳說，這些故事不只是想像力的產物，更藏著祖先對大自然的深刻觀察與智慧。'
              },
              {
                type: 'quote',
                content: '對大自然充滿好奇的臺灣原住民族祖先，將生活中的事物化為想像力豐富的故事；其中透露出來的共通原則是：人類透過這些神話、傳說故事，不斷尋求與蛇和平共存的原則。',
                author: '《臺灣原住民族與蛇》，《原住民族》雜誌 580 期，2013'
              }
            ]
          },
          {
            title: '今日閱讀：排灣族的故事',
            blocks: [
              {
                type: 'text',
                content: '對排灣族人而言，「百步蛇」是祖靈的象徵，稱其為 tasalad（夥伴）、kavulungan（祖先）、mamazangilan（王），可見蛇在排灣族社會當中極受尊崇。'
              },
              {
                type: 'subtitle',
                content: '太陽卵生說'
              },
              {
                type: 'text',
                content: '古代的一場大洪水淹死所有人畜，當時有一位神靈入山，從蛇卵當中看到人形的影子，而後蛇卵經由太陽光的照射而破裂，人由蛋中出現，此即為排灣族祖先。'
              },
              {
                type: 'subtitle',
                content: '蛇生說'
              },
              {
                type: 'text',
                content: '大武山上曾經生長著一根竹子，竹子裂開生出許多蛇，成長後化為人，是為祖先。'
              },
              {
                type: 'subtitle',
                content: '啟發石板屋建築'
              },
              {
                type: 'text',
                content: '排灣族祖先原本創造的石板屋，遇雨必漏水，一日，聖獸百步蛇告訴族人，屋頂需用其身上鱗片的排列方式建築。百步蛇將自己的身體撐大，讓排灣族人依循著蛇鱗的排列，井然有序地堆砌石板，這項技法與啟示便流傳至今。'
              },
              {
                type: 'text',
                content: '🔍 今日思考：蛇鱗的排列有什麼規律？大自然中還有哪些東西排列得很有規律？帶著這個問題繼續今天的學習！'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 4,
        generator: generateReadingQuestion,
        checkAnswer: (q, ans) => ans.trim() === q.answer
      }
    },

    {
      id: 'w2d1-social',
      name: '社會',
      icon: '🗺️',
      lesson: {
        title: '台灣的地形分布',
        sections: [
          {
            title: '台灣的地形輪廓',
            blocks: [
              {
                type: 'text',
                content: '台灣是一座多山的島嶼，地形複雜多樣。最大的特徵是「東高西低」：山脈集中在東側，西側則是廣闊的平原。台灣的五大山脈由西向東依序排列，就像蛇鱗一樣層層疊疊，分別是：阿里山山脈、玉山山脈、中央山脈、雪山山脈、海岸山脈。'
              },
              {
                type: 'text',
                content: '其中，中央山脈最長、最高，從北到南貫穿全島，被稱為「台灣的屋脊」。台灣最高峰玉山（3952 公尺）就屬於玉山山脈，是東亞最高的山峰之一。'
              }
            ]
          },
          {
            title: '平原與盆地',
            blocks: [
              {
                type: 'text',
                content: '台灣的平原主要分布在西部，是由河流長期沖積而成的肥沃土地。嘉南平原是台灣面積最大的平原，自古以來就是重要的農業區，盛產稻米和甘蔗。'
              },
              {
                type: 'text',
                content: '東部的花東縱谷夾在中央山脈與海岸山脈之間，是一條狹長的平坦谷地，也是台灣東部最主要的農業區域。台北盆地則是北部最重要的盆地，現已發展成台灣首都圈。'
              }
            ]
          },
          {
            title: '東西海岸的差異',
            blocks: [
              {
                type: 'text',
                content: '台灣東西兩側的海岸地形截然不同。西部海岸地勢平緩，多沙灘與潟湖，適合養殖漁業；東部海岸則是山脈直接面海，形成壯觀的斷崖與礫石海岸，花蓮的清水斷崖就是著名例子。'
              },
              {
                type: 'text',
                content: '地形影響了人的生活方式：排灣族、魯凱族主要居住在南部山區，阿美族沿著花東縱谷生活，達悟族則在外海的蘭嶼島上世代安居。大地的輪廓，也塑造了人的故事。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateTerrainQuestion,
        checkAnswer: (q, ans) => ans.trim() === q.answer
      }
    },

    {
      id: 'w2d1-math',
      name: '數學',
      icon: '🔢',
      lesson: {
        title: '公因數與最大公因數',
        sections: [
          {
            title: '什麼是因數？',
            blocks: [
              {
                type: 'text',
                content: '因數就是「能整除某個數的數」。例如 12 的因數有：1、2、3、4、6、12，因為這些數都能被 12 整除（餘數為 0）。'
              },
              {
                type: 'text',
                content: '找因數的小技巧：從 1 開始，一對一對地找。12 ÷ 1 = 12 ✓，12 ÷ 2 = 6 ✓，12 ÷ 3 = 4 ✓，12 ÷ 4 = 3（已出現過，停止！）所以 12 的因數是 1、2、3、4、6、12，共 6 個。'
              }
            ]
          },
          {
            title: '什麼是公因數與最大公因數？',
            blocks: [
              {
                type: 'text',
                content: '公因數是「兩個數共同擁有的因數」。例如：\n12 的因數：1、2、3、4、6、12\n18 的因數：1、2、3、6、9、18\n12 和 18 的公因數：1、2、3、6\n其中最大的 6，就叫做最大公因數（GCF）。'
              }
            ]
          },
          {
            title: '短除法：快速找最大公因數',
            blocks: [
              {
                type: 'text',
                content: '短除法步驟：用質數一直除兩個數，直到找不到共同的質因數為止，再把用過的質數全部相乘。\n\n例：求 12 和 18 的最大公因數\n÷ 2：得 6 和 9\n÷ 3：得 2 和 3（互質，停止）\n最大公因數 = 2 × 3 = 6 ✓'
              },
              {
                type: 'text',
                content: '生活應用：有 12 個蘋果和 18 個橘子，要平均分裝成幾袋，每袋蘋果和橘子數量整除，且袋數最多？\n答：最多可分 6 袋，每袋 2 個蘋果、3 個橘子。'
              }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: generateMathQuestion,
        checkAnswer: (q, ans) => ans.trim() === q.answer
      }
    },

    {
      id: 'w2d1-review',
      name: '今日回顧',
      icon: '🌅',
      lesson: {
        title: '規律，無所不在',
        sections: [
          {
            title: '今天學了什麼？',
            blocks: [
              {
                type: 'text',
                content: '今天我們從排灣族的石板屋故事出發，發現「規律」這個概念無所不在：蛇鱗的排列是規律、山脈由西向東的分布是規律、數字裡的公因數也是尋找共同規律的方法。'
              },
              {
                type: 'text',
                content: '📌 閱讀：排灣族百步蛇是祖靈象徵，石板屋技法來自蛇鱗啟示。\n📌 社會：台灣地形東高西低，五大山脈由西向東排列，西部平原由河流沖積而成。\n📌 數學：公因數是兩個數共同的因數，最大公因數可用短除法快速求得。'
              },
              {
                type: 'quote',
                content: '百步蛇告訴族人，屋頂需用其身上鱗片的排列方式建築……依循著蛇鱗的排列，井然有序地堆砌石板，這項技法與啟示便流傳至今。',
                author: '《臺灣原住民族與蛇》'
              },
              {
                type: 'text',
                content: '🔮 明天預告：魯凱族的蛇卵傳說，以及植物的種子與生命的起點。蛋和種子，有什麼共同點呢？'
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
