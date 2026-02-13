// W13 Day 2: 台灣哪裡特別熱?

const day2 = {
  id: 'day2',
  name: '第2天',
  icon: '🏙️',
  color: '#F59E0B',
  title: '台灣哪裡特別熱?',
  
  units: [
    {
      id: 'w13d2-opening',
      name: '開場閱讀',
      icon: '📖',
      lesson: {
        title: '當地球發燒的時候(二)',
        sections: [
          {
            title: '台北的熱島',
            blocks: [
              { type: 'text', content: '2023年7月24日下午2點,台北市測得攝氏39.7度高溫,創下126年來紀錄。但同一時間,淡水測得的溫度只有36度,相差了3.7度。為什麼同樣在大台北地區,溫度差這麼多?' },
              { type: 'text', content: '鄭明典打開電腦,調出一張台北地區的溫度分布圖。圖上用不同顏色標示各地溫度:淡水河口是涼爽的綠色和藍色,但台北盆地中心,卻是炙熱的紅色和橙色。這張圖看起來,就像一個在藍綠海洋中的火紅島嶼。' },
              { type: 'text', content: '「這就是『熱島效應』,」鄭明典解釋,「當我們畫出溫度的等溫線,會發現都市中心特別熱的區域,形狀就像一座島嶼,所以氣象學上稱為熱島。」' },
              { type: 'text', content: '熱島效應在台北特別明顯,不只是因為台北是都會區,更因為台北是個盆地。四周的山就像一圈高牆,把盆地圍起來。白天,太陽曬熱了建築物、柏油路、水泥地,到了晚上,這些熱能散不出去,就繼續烤著盆地裡的空氣。' }
            ]
          }
        ]
      },
      practice: null
    },
    
    {
      id: 'w13d2-social',
      name: '社會:都市化與熱島',
      icon: '🌍',
      lesson: {
        title: '城市為什麼越來越熱?',
        sections: [
          {
            title: '都市熱島的形成',
            blocks: [
              { type: 'text', content: '想像100年前的台北。那時候,台北還沒有高樓大廈,沒有柏油路,沒有密集的車流。大部分土地是農田、池塘和樹林。當太陽照射時,植物會進行光合作用、蒸散水分,帶走熱能;池塘的水會蒸發,也能降溫;泥土地吸熱慢,晚上降溫也快。' },
              { type: 'text', content: '但現在的台北,大部分土地都被「人造表面」覆蓋:水泥、柏油、鋼筋、玻璃。這些材料有個共同特性:吸熱快、散熱慢、蓄熱能力強。夏天中午,柏油路面溫度可以達到60-70度!' },
              { type: 'text', content: '除了地表材料,都市還有很多「廢熱來源」:冷氣機向外排放熱風;汽車、機車引擎產生熱;工廠運轉產生熱;甚至人體本身也在散熱。這些熱能累積在都市空間裡,讓都市比郊區更熱。' }
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
              question: '台北熱島效應特別明顯的主要原因是什麼?',
              options: ['人口最多', '緯度最低', '是盆地地形,熱空氣不易散出', '最靠近海邊'],
              answer: 2,
              displayAnswer: '是盆地地形,熱空氣不易散出'
            },
            {
              type: 'options',
              question: '為什麼高雄、台南的都市熱島效應比台北不明顯?',
              options: ['人口比較少', '建築物比較矮', '靠近海邊,海風可以調節', '綠地比較多'],
              answer: 2,
              displayAnswer: '靠近海邊,海風可以調節'
            },
            {
              type: 'options',
              question: '花東縱谷夏天特別熱的原因是什麼?',
              options: ['人口密集', '海岸山脈擋住海風', '工廠很多', '土地都是柏油路'],
              answer: 1,
              displayAnswer: '海岸山脈擋住海風'
            },
            {
              type: 'options',
              question: '下列哪一項「不是」都市熱島的主要熱源?',
              options: ['冷氣機排放的熱風', '汽機車引擎產生的熱', '太陽能板發電', '柏油路面蓄積的熱'],
              answer: 2,
              displayAnswer: '太陽能板發電'
            },
            {
              type: 'options',
              question: '增加都市綠地可以降溫,主要是因為植物能夠做什麼?',
              options: ['吸收二氧化碳', '遮陰和蒸散水分', '產生氧氣', '美化環境'],
              answer: 1,
              displayAnswer: '遮陰和蒸散水分'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => parseInt(userAnswer) === question.answer
      }
    },
    
    {
      id: 'w13d2-math',
      name: '數學:面積與統計',
      icon: '📊',
      lesson: {
        title: '用數學分析熱島效應',
        sections: [
          {
            title: '綠覆蓋率的計算',
            blocks: [
              { type: 'text', content: '要改善熱島效應,增加綠地是重要方法。那麼,如何計算一個地區的「綠覆蓋率」呢?' },
              { type: 'text', content: '**綠覆蓋率 = 綠地面積 ÷ 總面積 × 100%**' },
              { type: 'text', content: '例如:台北市大安區總面積約11.4平方公里,其中公園、綠地、行道樹等綠地面積約2.3平方公里。綠覆蓋率 = 2.3 ÷ 11.4 × 100% ≈ 20.2%' }
            ]
          }
        ]
      },
      practice: {
        questionCount: 6,
        generator: () => {
          const questions = [
            {
              type: 'options',
              question: '某社區總面積是20000平方公尺,其中綠地面積是6000平方公尺,綠覆蓋率是多少?',
              options: ['20%', '30%', '40%', '60%'],
              answer: 1,
              displayAnswer: '30%'
            },
            {
              type: 'options',
              question: '如果要讓上題的社區綠覆蓋率提高到40%,需要再增加多少平方公尺的綠地?',
              options: ['1000平方公尺', '2000平方公尺', '3000平方公尺', '4000平方公尺'],
              answer: 1,
              displayAnswer: '2000平方公尺'
            },
            {
              type: 'options',
              question: '某市區連續5天最高溫分別是:36°C, 38°C, 37°C, 39°C, 35°C,平均最高溫是多少?',
              options: ['36°C', '37°C', '38°C', '39°C'],
              answer: 1,
              displayAnswer: '37°C'
            },
            {
              type: 'fill',
              question: '市中心某週平均溫度37°C,郊區34°C,溫差多少?',
              answer: '3',
              displayAnswer: '3°C'
            },
            {
              type: 'options',
              question: '研究顯示綠覆蓋率每增加10%可降溫0.5°C。如果某區域綠覆蓋率從20%提高到35%,預計可降溫多少?',
              options: ['0.5°C', '0.75°C', '1.0°C', '1.5°C'],
              answer: 1,
              displayAnswer: '0.75°C'
            },
            {
              type: 'fill',
              question: '地圖比例尺是1:100000,在地圖上某公園長3公分,實際長度是多少公尺?',
              answer: '3000',
              displayAnswer: '3000公尺'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => {
          if (question.type === 'options') {
            return parseInt(userAnswer) === question.answer
          } else {
            return String(userAnswer).trim() === String(question.answer).trim()
          }
        }
      }
    },
    
    {
      id: 'w13d2-science',
      name: '科學:熱的傳遞',
      icon: '🔬',
      lesson: {
        title: '為什麼城市這麼熱?',
        sections: [
          {
            title: '回顧:三種熱傳遞方式',
            blocks: [
              { type: 'text', content: '在W4我們學過熱的三種傳遞方式:傳導、對流、輻射。現在讓我們用這些知識,來理解城市為什麼這麼熱。' },
              { type: 'text', content: '**輻射**:太陽以電磁波的形式,把能量輻射到地球。不需要介質,可以在真空中傳播。' },
              { type: 'text', content: '**傳導**:當物體接觸時,熱能從高溫處傳到低溫處。例如你光腳踩在燙的柏油路上,熱能就透過傳導進入你的腳。' },
              { type: 'text', content: '**對流**:流體(液體或氣體)因為密度差異而流動,帶動熱能移動。例如熱空氣上升、冷空氣下降,就是對流。' }
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
              question: '為什麼黑色柏油路比白色水泥地更容易變熱?',
              options: ['因為黑色材料的熱容量比較大', '因為黑色吸收更多太陽輻射', '因為黑色材料的密度比較高', '因為黑色材料比較平滑'],
              answer: 1,
              displayAnswer: '因為黑色吸收更多太陽輻射'
            },
            {
              type: 'options',
              question: '植物如何幫助降溫?',
              options: ['植物會吸收二氧化碳', '植物進行光合作用和蒸散水分,吸收熱能', '植物會產生氧氣', '植物的顏色是綠色'],
              answer: 1,
              displayAnswer: '植物進行光合作用和蒸散水分,吸收熱能'
            },
            {
              type: 'options',
              question: '城市晚上為什麼還是很熱?下列哪一項「不是」主要原因?',
              options: ['建築物白天吸收的熱能還在慢慢釋放', '冷氣機向外排放廢熱', '太陽還在照射', '高樓阻擋風,空氣對流不良'],
              answer: 2,
              displayAnswer: '太陽還在照射'
            },
            {
              type: 'options',
              question: '下列哪一種方法「無法」有效降低都市溫度?',
              options: ['在屋頂塗上白色塗料', '多種植物增加綠地', '把所有建築物都漆成黑色', '保留河岸綠帶讓空氣流通'],
              answer: 2,
              displayAnswer: '把所有建築物都漆成黑色'
            },
            {
              type: 'options',
              question: '「蒸發冷卻」的原理是什麼?',
              options: ['水蒸發時會吸收周圍的熱能', '水蒸發時會放出熱能', '水蒸氣比空氣冷', '水能反射陽光'],
              answer: 0,
              displayAnswer: '水蒸發時會吸收周圍的熱能'
            }
          ]
          return questions[Math.floor(Math.random() * questions.length)]
        },
        checkAnswer: (question, userAnswer) => parseInt(userAnswer) === question.answer
      }
    },
    
    {
      id: 'w13d2-review',
      name: '今日回顧',
      icon: '🎯',
      lesson: {
        title: '今天我們學到了什麼?',
        sections: [
          {
            title: '重點整理',
            blocks: [
              { type: 'text', content: '今天我們把焦點拉回台灣,探討「台灣哪裡特別熱」這個貼近生活的問題。' },
              { type: 'text', content: '**社會方面**:我們理解了都市熱島效應的形成,知道台北、台中因為盆地地形特別明顯;花東縱谷因為山脈阻擋海風而悶熱;高雄台南因為海風調節而較不嚴重。' },
              { type: 'text', content: '**數學方面**:我們學會計算綠覆蓋率,理解比例尺在都市規劃中的應用,也練習用統計方法分析溫度數據。' },
              { type: 'text', content: '**科學方面**:我們複習了熱的三種傳遞方式,理解城市如何吸熱、蓄熱、散熱。我們知道為什麼城市晚上還是很熱,也知道如何用科學方法降溫。' },
              { type: 'text', content: '明天,我們將探討更戲劇性的極端氣候:什麼是熱浪?聖嬰現象為什麼讓今年特別熱?台灣的霸王寒流從哪裡來?敬請期待!' }
            ]
          }
        ]
      },
      practice: null
    }
  ]
};

export default day2;
