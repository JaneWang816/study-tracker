# 新架構說明 - data 資料夾重構

## 📋 架構概覽

採用**混合式架構**，平衡檔案數量與可維護性：

```
src/data/
├── index.js                    # 主入口（通用 getter 函數）
│
├── math/                       # 數學科目
│   ├── index.js               
│   └── arithmetic/            # 四則運算模組
│       ├── config.js          # 配置（難度、題數、運算類型）
│       ├── lessons.js         # 課程內容（整合所有主題）
│       ├── index.js           # 模組整合
│       └── generators/        # 生成器（分主題）
│           ├── integer.js     # ✅ 整數（完整實作）
│           ├── decimal.js     # 🔲 小數（基礎實作，待完善）
│           ├── fraction.js    # 🔲 分數（基礎實作，待完善）
│           └── index.js       
│
└── chinese/                   # 國語科目
    ├── index.js               
    └── pronunciation/         # 字音辨識模組
        ├── config.js          # 配置（難度、題數、題型分類）
        ├── questionBanks.js   # 題庫（整合所有主題）
        ├── lessons.js         # 課程內容（整合所有主題）
        ├── index.js           # 模組整合
        └── generators/        # 生成器（分主題）
            ├── polyphonic.js      # ✅ 多音字（完整實作）
            ├── similarShape.js    # 🔲 形似字（空殼，待補充）
            ├── commonErrors.js    # 🔲 易錯字（空殼，待補充）
            └── index.js       
```

---

## 🎯 設計原則

### 1. 資料層整合（減少檔案）
- **題庫**：所有主題整合在 `questionBanks.js`
- **課程**：所有主題整合在 `lessons.js`
- **配置**：模組配置在 `config.js`

### 2. 邏輯層分離（保持獨立）
- **生成器**：按主題分離在 `generators/` 資料夾
- 每個主題邏輯可能差異很大
- 方便單獨測試和修改

### 3. 架構一致性
- 數學和國語採用相同的檔案結構
- 只在內容上有差異（隨機生成 vs 題庫抽題）

---

## ✅ 已完成的部分

### 數學 - 四則運算
- ✅ 整數運算生成器（加減乘除完整實作）
- ✅ 整數運算課程內容
- 🔲 小數運算（基礎實作，待完善）
- 🔲 分數運算（基礎實作，待完善）

### 國語 - 字音辨識
- ✅ 多音字題庫（easy: 10題，medium: 5題，hard: 3題）
- ✅ 多音字生成器（從題庫抽題）
- ✅ 多音字課程內容
- 🔲 形似字（空殼，待補充題庫和課程）
- 🔲 易錯字（空殼，待補充題庫和課程）

---

## 🚀 如何擴充

### 新增數學主題（如：幾何圖形）

1. 在 `lessons.js` 加入課程：
```javascript
export const geometryLessons = {
  // 課程內容
}
```

2. 在 `generators/` 新增 `geometry.js`
3. 在 `generators/index.js` 匯出
4. 在 `index.js` 註冊主題

### 新增國語題目（多音字）

1. 開啟 `questionBanks.js`
2. 找到 `polyphonicBank`
3. 在對應難度下加入新題目：
```javascript
{
  id: 'poly_e_11',
  question: '新題目...',
  options: [...],
  answer: '...',
  explanation: '...'
}
```

### 補充形似字/易錯字

1. 在 `questionBanks.js` 補充題庫
2. 在 `lessons.js` 補充課程內容
3. 生成器已經完成，不需修改

---

## 📝 檔案說明

### config.js
定義模組的配置：
- 難度設定（數學有 `max`，國語有 `desc`）
- 題數選項
- 運算類型（數學用 `operations`）或題型分類（國語用 `categories`）

### lessons.js
整合所有主題的課程內容：
```javascript
export const integerLessons = {
  addition: { title, sections: [...] },
  subtraction: {...},
  // ...
}

export default {
  integer: integerLessons,
  decimal: decimalLessons,
  fraction: fractionLessons
}
```

### questionBanks.js（僅國語需要）
整合所有主題的題庫：
```javascript
export const polyphonicBank = {
  easy: [...],
  medium: [...],
  hard: [...]
}

export default {
  polyphonic: polyphonicBank,
  'similar-shape': similarShapeBank,
  'common-errors': commonErrorsBank
}
```

### generators/
每個主題獨立一個生成器檔案：
- 數學：實作演算法生成題目
- 國語：從題庫抽取題目

### index.js（模組整合）
註冊所有主題：
```javascript
export default {
  config,
  topics: [
    {
      id: 'integer',
      name: '整數運算',
      generators: generators.integer.generators,
      checkAnswer: generators.integer.checkAnswer,
      lessons: lessons.integer
    }
  ],
  checkAnswer: (question, userAnswer) => {...}
}
```

---

## 🔧 使用方式

### 系統調用
系統通過統一介面調用：

```javascript
// 取得生成器
const generator = getGenerator('math', 'arithmetic', 'integer', 'addition')

// 生成題目
const question = generator('medium')

// 驗證答案
const checkAnswer = getCheckAnswer('math', 'arithmetic')
const isCorrect = checkAnswer(question, userAnswer)
```

### 手動測試
```javascript
// 測試整數加法
import integer from './generators/integer'
const q = integer.generators.addition('easy')
console.log(q)

// 測試多音字
import polyphonic from './generators/polyphonic'
const q = polyphonic.generators.polyphonic('easy')
console.log(q)
```

---

## ⚠️ 注意事項

1. **ID 命名**
   - 題目 ID 必須唯一
   - 建議格式：`主題_難度_編號`（如 `poly_e_01`）

2. **題庫數量**
   - 每個難度建議至少 10 題
   - 避免題目重複太快

3. **驗證函數**
   - 每個生成器都要有 `checkAnswer` 函數
   - 注意不同題型的驗證方式

4. **匯入路徑**
   - 注意相對路徑的層級
   - 使用 `../` 正確引入

---

## 📦 與舊系統的差異

### 舊架構（整合式）
```
arithmetic/
└── generators.js  # 所有主題在一個檔案
```

### 新架構（混合式）
```
arithmetic/
├── config.js
├── lessons.js     # 整合資料
├── index.js
└── generators/
    ├── integer.js  # 分離邏輯
    ├── decimal.js
    └── fraction.js
```

**優點：**
- ✅ 檔案數量可控（8 個核心檔案 vs 20+ 個）
- ✅ 資料集中管理
- ✅ 邏輯保持獨立
- ✅ 更容易維護和擴充

---

## 🎓 下一步

1. **補充題庫**
   - 使用 `question-bank-manager.html` 工具
   - 或直接編輯 `questionBanks.js`

2. **完善課程**
   - 補充小數、分數的課程內容
   - 補充形似字、易錯字的課程內容

3. **測試功能**
   - 測試各個路由
   - 驗證題目生成
   - 確認答案驗證

4. **新增科目**
   - 參考現有結構
   - 複製並修改

---

需要幫助隨時問我！🚀
