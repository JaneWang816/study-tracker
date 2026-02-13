// W13 Day 3: 極端天氣是什麼?

const day3 = {
  id: 'day3',
  name: '第3天',
  icon: '⚡',
  color: '#DC2626',
  title: '極端天氣是什麼?',
  
  units: [
    {
      id: 'w13d3-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '當地球發燒的時候(三)',
        sections: [
          {
            title: '歐洲的夏日惡夢',
            blocks: [
              { type: 'text', content: '2003年夏天,一場史無前例的熱浪席捲歐洲。法國巴黎的氣溫飆升到攝氏40度,這對於平常只有攝氏25度左右的法國人來說,簡直是難以想像的酷熱。' },
              { type: 'text', content: '更可怕的是,高溫持續了整整兩個月。老人們坐在家中,沒有冷氣,只能用濕毛巾擦拭身體;醫院擠滿了中暑的病患,但醫院本身也沒有足夠的冷氣。河流的水位降低,核電廠因為缺乏冷卻水而無法發電,停電又讓情況更加惡化。' },
              { type: 'text', content: '那一年,保守估計有3萬5千人因為熱浪死亡,有些研究甚至認為超過7萬人。這個數字震驚了全世界,也讓科學家開始認真研究「熱浪」這個現象。' },
              { type: 'text', content: '什麼是熱浪?世界氣象組織給了一個明確定義:連續5天以上,每天的最高溫都比當地的平均氣溫高出攝氏5度以上。這個定義很有意思,因為它不是用絕對溫度,而是用「比平常高多少」來定義。' },
              { type: 'text', content: '對法國來說,平常夏天的平均溫度大約是攝氏23度,所以當溫度持續達到攝氏33度時,對他們來說就是熱浪。但攝氏33度對台灣人來說,不過是普通的夏天而已!這就是為什麼熱浪會造成這麼大的傷亡——因為當地人完全不習慣,也沒有準備。' }
            ]
          },
          {
            title: '台灣的極端氣候',
            blocks: [
              { type: 'text', content: '台灣是海島型氣候,四面環海,海水的調節作用讓我們的氣溫變化比較緩和,所以很難出現符合定義的「熱浪」。過去100多年,台灣從未出現過連續5天都比平均溫度高出5度以上的紀錄。' },
              { type: 'text', content: '但這不代表台灣沒有極端氣候。2016年1月的霸王級寒流,就讓全台灣措手不及。那幾天,台北市區溫度降到攝氏4度,陽明山甚至下雪;中南部的高山也出現冰霜。' },
              { type: 'text', content: '農民辛苦種植的高麗菜、茂谷柑、蓮霧,一夜之間全被凍壞。養殖的虱目魚、吳郭魚大量暴斃,漂浮在魚塭水面上。光是農業損失就超過42億元,是近年來最嚴重的一次寒害。' },
              { type: 'text', content: '鄭明典解釋:「很多人以為全球暖化就是一直變熱,其實不是這樣。暖化會讓氣候系統更不穩定,極端的冷和極端的熱都會更頻繁。北極的冷空氣可能南下到平常到不了的地方,造成嚴寒;而熱帶的暖空氣也可能北上,帶來高溫。」' },
              { type: 'text', content: '這就是氣候變遷最可怕的地方:不是單純的「變暖」,而是「變得不可預測」。過去的經驗不再可靠,我們必須隨時準備面對意想不到的極端天氣。' }
            ]
          }
        ]
      },
      practice: null
    },
    
    {
      id: 'w13d3-social',
      name: '社會:極端氣候事件',
      icon: '🌍',
      lesson: {
        title: '歷史上的極端氣候',
        sections: [
          {
            title: '2003年歐洲熱浪',
            blocks: [
              { type: 'text', content: '2003年夏天的歐洲熱浪,是現代史上最嚴重的氣候災害之一。這場熱浪從6月持續到8月,影響範圍包括法國、德國、義大利、西班牙等國。' },
              { type: 'text', content: '為什麼會造成這麼多人死亡?第一,歐洲的冷氣普及率很低。因為平常氣候溫和,很多家庭根本沒有冷氣。第二,很多老人獨居,當他們在家中中暑時,沒有人發現。第三,醫療系統沒有準備,醫院也缺乏冷氣設備。' },
              { type: 'text', content: '這場災難之後,歐洲各國開始建立熱浪預警系統。現在,當氣象預報顯示可能出現高溫時,政府會提前通知民眾,開放有冷氣的公共場所,特別關注獨居老人。2019年歐洲又出現一次更嚴重的熱浪,但死亡人數大幅減少,因為大家有了準備。' }
            ]
          },
          {
            title: '台灣的極端氣候案例',
            blocks: [
              { type: 'text', content: '**2016霸王級寒流**:1月下旬,強烈冷氣團南下,全台出現10度以下低溫。這是台灣近30年來最嚴重的寒害,農業損失超過42億元。' },
              { type: 'text', content: '**2009莫拉克颱風**:8月,莫拉克颱風帶來超大豪雨,高雄小林村被土石流掩埋,造成400多人死亡。這場颱風讓全台灣深刻體認到極端降雨的威脅。' },
              { type: 'text', content: '**2020百年大旱**:全台水庫蓄水量創新低,中南部實施分區供水。這次旱災讓大家意識到,不只是洪水,缺水也是嚴重的氣候災害。' },
              { type: 'text', content: '這些事件告訴我們:台灣雖然沒有歐洲式的熱浪,但我們有自己的極端氣候挑戰——颱風豪雨、寒流凍害、乾旱缺水。氣候變遷讓這些極端事件變得更頻繁、更劇烈。' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const questions = [
            {
              type: 'options',
              question: '世界氣象組織對「熱浪」的定義是什麼?',
              options: ['連續5天溫度超過35度', '連續5天比平均溫度高5度以上', '單日溫度超過40度', '一週內溫度都超過30度'],
              answer: 1,
              displayAnswer: '連續5天比平均溫度高5度以上'
            },
            {
              type: 'options',
              question: '2003年歐洲熱浪造成大量死亡的主要原因是什麼?',
              options: ['溫度太高,超過人體極限', '當地人不習慣,也沒有準備', '醫院全部關閉', '食物和飲水短缺'],
              answer: 1,
              displayAnswer: '當地人不習慣,也沒有準備'
            },
            {
              type: 'options',
              question: '為什麼台灣很難出現符合定義的「熱浪」?',
              options: ['因為台灣緯度低', '因為台灣是海島,海水調節溫度變化', '因為台灣多山', '因為台灣常下雨'],
              answer: 1,
              displayAnswer: '因為台灣是海島,海水調節溫度變化'
            },
            {
              type: 'options',
              question: '2016年霸王級寒流對台灣造成什麼影響?',
              options: ['造成人員大量傷亡', '農業損失超過42億元', '全台停電一週', '引發大規模海嘯'],
              answer: 1,
              displayAnswer: '農業損失超過42億元'
            },
            {
              type: 'options',
              question: '全球暖化對極端氣候的影響是什麼?',
              options: ['只會讓天氣變熱', '只會讓冬天消失', '會讓極端的冷和熱都更頻繁', '不會有任何影響'],
              answer: 2,
              displayAnswer: '會讓極端的冷和熱都更頻繁'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => parseInt(userAnswer) === question.answer
      }
    },
    
    {
      id: 'w13d3-math',
      name: '數學:數據分析',
      icon: '📊',
      lesson: {
        title: '解讀極端氣候數據',
        sections: [
          {
            title: '溫度異常值的計算',
            blocks: [
              { type: 'text', content: '熱浪的定義中,「比平均溫度高5度」是關鍵。我們來練習如何計算異常值。' },
              { type: 'text', content: '例如:巴黎7月的平均溫度是23°C,如果連續5天的溫度分別是 33°C, 34°C, 35°C, 33°C, 34°C。' },
              { type: 'text', content: '每天的異常值 = 實際溫度 - 平均溫度\n第1天: 33 - 23 = +10°C\n第2天: 34 - 23 = +11°C\n第3天: 35 - 23 = +12°C\n第4天: 33 - 23 = +10°C\n第5天: 34 - 23 = +11°C' },
              { type: 'text', content: '因為每天都超過平均溫度5度以上(+10, +11, +12都大於+5),所以這符合熱浪定義。' }
            ]
          },
          {
            title: '災害損失的統計',
            blocks: [
              { type: 'text', content: '2016年寒流造成的農業損失統計:\n• 蔬菜: 15億元\n• 水果: 18億元\n• 漁產: 9億元\n• 總計: 42億元' },
              { type: 'text', content: '我們可以計算各項目占總損失的比例:\n• 蔬菜: 15÷42 × 100% ≈ 36%\n• 水果: 18÷42 × 100% ≈ 43%\n• 漁產: 9÷42 × 100% ≈ 21%' },
              { type: 'text', content: '這樣的統計幫助我們了解:哪些產業最容易受到寒害影響?應該優先保護哪些作物?' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: () => {
          const questions = [
            {
              type: 'fill',
              question: '台北1月平均溫度15°C,某天溫度5°C,異常值是多少度?(用正負號表示)',
              answer: '-10',
              displayAnswer: '-10°C'
            },
            {
              type: 'options',
              question: '倫敦8月平均溫度20°C,如果要達到熱浪標準,連續5天溫度至少要達到幾度?',
              options: ['23°C', '25°C', '28°C', '30°C'],
              answer: 1,
              displayAnswer: '25°C (20+5=25)'
            },
            {
              type: 'options',
              question: '2003年歐洲熱浪死亡人數,保守估計35000人,最高估計70000人。兩者相差多少?',
              options: ['25000人', '30000人', '35000人', '40000人'],
              answer: 2,
              displayAnswer: '35000人 (70000-35000=35000)'
            },
            {
              type: 'fill',
              question: '某次寒害損失42億元,其中水果損失18億元,占總損失的百分之幾?(四捨五入到整數)',
              answer: '43',
              displayAnswer: '43% (18÷42×100≈43%)'
            },
            {
              type: 'options',
              question: '如果某地連續5天溫度分別是:28,29,30,28,29度,平均溫度23度。是否達到熱浪標準?',
              options: ['是,因為都超過28度', '是,因為都超過平均溫度5度以上', '否,因為最高溫不到35度', '否,因為有一天只高出5度'],
              answer: 1,
              displayAnswer: '是,因為都超過平均溫度5度以上'
            },
            {
              type: 'fill',
              question: '2016年寒害農業損失42億元,如果政府補助30%,補助金額是多少億元?',
              answer: '12.6',
              displayAnswer: '12.6億元 (42×0.3=12.6)'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            const cleanAnswer = String(userAnswer).trim().replace(/[^\d.-]/g, '')
            const cleanExpected = String(question.answer).trim().replace(/[^\d.-]/g, '')
            return cleanAnswer === cleanExpected
          }
        }
      }
    },
    
    {
      id: 'w13d3-science',
      name: '科學:聖嬰現象',
      icon: '🔬',
      lesson: {
        title: '為什麼今年特別熱?',
        sections: [
          {
            title: '聖嬰現象的由來',
            blocks: [
              { type: 'text', content: '「聖嬰現象」這個名詞,最早出現在500多年前。南美洲秘魯的漁民發現,每隔幾年,在聖誕節前後,沿海的海水會變得比較溫暖,魚群就會消失,捕不到魚。因為發生在耶穌誕生的季節,他們就把這個現象稱為「El Niño」——西班牙語的「聖嬰」或「小男孩」。' },
              { type: 'text', content: '現在科學家知道,聖嬰現象不只影響秘魯沿海,而是整個太平洋、甚至全球氣候都會受到影響。' },
              { type: 'text', content: '正常情況下,東南太平洋(南美洲沿岸)有一股冷洋流,從深海湧上來,帶著豐富的養分,所以魚很多。但在聖嬰年,這股冷洋流減弱了,海面溫度升高,魚群消失了。' },
              { type: 'text', content: '更重要的是,當中太平洋赤道區的海水溫度升高攝氏1度以上,持續幾個月,就會影響大氣環流,讓全球各地的天氣都變得異常。有些地方會特別熱、有些地方暴雨、有些地方乾旱。' }
            ]
          },
          {
            title: '聖嬰現象對台灣的影響',
            blocks: [
              { type: 'text', content: '對台灣來說,聖嬰年通常會帶來兩個影響:' },
              { type: 'text', content: '第一,夏天可能比較熱。2023年就是一個聖嬰年,台灣測到126年來最高溫,不是巧合。' },
              { type: 'text', content: '第二,隔年春天雨水可能比較多。聖嬰會影響太平洋的水氣輸送,讓台灣的春雨增加。' },
              { type: 'text', content: '但要注意,聖嬰現象不是唯一因素。全球暖化是長期趨勢,聖嬰現象則是2-7年一次的自然波動。當兩者碰在一起,就會出現特別極端的天氣。' },
              { type: 'text', content: '鄭明典說:「如果把氣候變遷比喻成音量慢慢轉大,聖嬰現象就像突然轉到最大聲。兩個加在一起,就會出現破紀錄的高溫。」' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 5,
        generator: () => {
          const questions = [
            {
              type: 'options',
              question: '「聖嬰現象」這個名詞的由來是什麼?',
              options: ['因為會帶來新生命', '因為發生在聖誕節前後', '因為海水變得清澈如嬰兒', '因為科學家的小孩發現的'],
              answer: 1,
              displayAnswer: '因為發生在聖誕節前後'
            },
            {
              type: 'options',
              question: '聖嬰現象發生時,南美洲秘魯沿海會出現什麼變化?',
              options: ['海水變冷,魚群增加', '海水變暖,魚群消失', '海水不變,魚群增加', '海平面上升'],
              answer: 1,
              displayAnswer: '海水變暖,魚群消失'
            },
            {
              type: 'options',
              question: '什麼情況下會被判定為聖嬰現象?',
              options: ['任何時候海水溫度升高', '中太平洋赤道區海水溫度升高1度以上,持續數月', '全球平均溫度升高', '只要聖誕節很熱'],
              answer: 1,
              displayAnswer: '中太平洋赤道區海水溫度升高1度以上,持續數月'
            },
            {
              type: 'options',
              question: '聖嬰現象對台灣的主要影響是什麼?',
              options: ['冬天會下雪', '夏天可能比較熱,隔年春雨可能增加', '颱風會消失', '海平面會下降'],
              answer: 1,
              displayAnswer: '夏天可能比較熱,隔年春雨可能增加'
            },
            {
              type: 'options',
              question: '聖嬰現象大約多久發生一次?',
              options: ['每年', '2-7年一次', '10年一次', '50年一次'],
              answer: 1,
              displayAnswer: '2-7年一次'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => parseInt(userAnswer) === question.answer
      }
    },
    
    {
      id: 'w13d3-review',
      name: '今日回顧',
      icon: '🎯',
      lesson: {
        title: '今天我們學到了什麼?',
        sections: [
          {
            title: '重點整理',
            blocks: [
              { type: 'text', content: '今天我們深入了解了「極端天氣」——那些超出我們經驗範圍的氣候事件。' },
              { type: 'text', content: '**社會方面**:我們看到2003年歐洲熱浪的慘痛教訓,也認識了台灣自己的極端氣候案例。最重要的是理解:極端氣候的危險,往往不是因為「有多極端」,而是因為「我們沒有準備」。' },
              { type: 'text', content: '**數學方面**:我們學會用數據理解極端氣候。計算溫度異常值、統計災害損失、分析趨勢變化——這些數學工具幫助我們量化風險,做出更好的決策。' },
              { type: 'text', content: '**科學方面**:我們理解了聖嬰現象如何影響全球氣候,也明白為什麼某些年份特別熱。科學讓我們知道:氣候變遷是長期趨勢,聖嬰現象是短期波動,兩者疊加會產生破紀錄的極端天氣。' },
              { type: 'text', content: '最關鍵的領悟是:「不一樣」才是真正的威脅。當氣候變得跟過去不一樣,我們累積的經驗就不再可靠,必須學習新的應對方式。' }
            ]
          },
          {
            title: '思考問題',
            blocks: [
              { type: 'text', content: '1. 如果你是2003年的法國市長,在收到熱浪警報時,你會採取什麼措施保護市民?\n\n2. 台灣雖然沒有歐洲式的熱浪,但我們有自己的極端氣候挑戰。你覺得哪一種對我們威脅最大?\n\n3. 為什麼「有準備」比「不極端」更重要?' },
              { type: 'text', content: '明天是動筆日,我們將整理這三天學到的知識,思考:面對氣候變遷,我們能做什麼?每個人都可以採取哪些行動?' }
            ]
          }
        ]
      },
      practice: null
    }
  ]
};

export default day3;
