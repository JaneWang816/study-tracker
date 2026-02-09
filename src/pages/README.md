# Pages 組件說明

## 📦 包含的檔案

此 zip 包含所有已修正引入的頁面組件：

1. **Home.jsx** - 首頁（科目選擇）
2. **SubjectHome.jsx** - 科目首頁（模組選擇）
3. **ModuleHome.jsx** - 模組首頁（主題選擇）
4. **TopicHome.jsx** - 主題首頁（課程/練習選擇）
5. **Lesson.jsx** - 課程內容頁
6. **Practice.jsx** - 練習設定頁
7. **PracticeSession.jsx** - 練習進行頁
8. **Login.jsx** - 登入頁

---

## 🔧 主要修正

### 統一引入方式

所有組件都已更新為從 `../data` 引入函數：

```javascript
import { 
  subjects,      // 所有科目資料
  getSubject,    // 取得科目
  getModule,     // 取得模組
  getTopic,      // 取得主題
  getGenerator,  // 取得生成器
  getCheckAnswer,// 取得驗證函數
  getLesson,     // 取得課程
  getTypes,      // 取得類型列表
  getTypeLabel   // 取得類型標籤
} from '../data'
```

### 關鍵改進

1. **PracticeSession.jsx**
   - ✅ 修正無限迴圈問題
   - ✅ 使用 `getGenerator` 取得生成器
   - ✅ 使用 `getCheckAnswer` 取得驗證函數
   - ✅ 支援題庫抽題（傳入 usedIds 避免重複）

2. **Practice.jsx**
   - ✅ 使用 `getTypes` 自動判斷 operations/categories
   - ✅ 動態顯示「運算」或「題型」標籤

3. **TopicHome.jsx**
   - ✅ 正確引入 `getModule` 和 `getTopic`
   - ✅ 修正 ReferenceError

---

## 📂 安裝步驟

### 步驟 1：備份舊檔案
```bash
cd /path/to/study-tracker
mv src/pages src/pages.old
```

### 步驟 2：解壓縮新檔案
```bash
unzip pages-refactor.zip
mv pages-refactor src/pages
```

### 步驟 3：清理
```bash
rm -rf pages-refactor
```

### 步驟 4：測試
```bash
npm run dev
```

---

## ✅ 測試清單

替換後請測試以下功能：

### 基本導航
- [ ] 首頁顯示科目列表
- [ ] 點擊科目進入模組列表
- [ ] 點擊模組進入主題列表
- [ ] 點擊主題進入課程/練習選擇

### 課程功能
- [ ] 課程內容正常顯示
- [ ] 課程章節完整
- [ ] 返回按鈕正常

### 練習功能
- [ ] 練習設定頁正常
- [ ] 可選擇題數、難度、運算/題型
- [ ] 題目正常生成
- [ ] 答案輸入正常
- [ ] 答案驗證正確
- [ ] 結果頁面顯示
- [ ] PDF 匯出功能

### 數學測試
- [ ] 整數加法/減法/乘法/除法
- [ ] 除法餘數輸入
- [ ] 小數運算（如已實作）
- [ ] 分數運算（如已實作）

### 國語測試
- [ ] 多音字選擇題
- [ ] 選項顯示正確
- [ ] 答案驗證正確
- [ ] 解釋顯示（如有）

---

## 🐛 常見問題

### Q1: Console 出現 "getModule is not defined"
**A:** 確認已經替換 `src/pages` 資料夾，並且重新啟動開發伺服器。

### Q2: 題目無法生成
**A:** 檢查 `src/data` 資料夾是否也已更新為新架構。

### Q3: 課程內容不顯示
**A:** 確認 `src/data/index.js` 包含 `getLesson` 函數。

### Q4: 登入後返回首頁
**A:** 這是正常的，Login.jsx 功能正常。

---

## 📝 與新架構配合

這些組件是為新的 data 架構設計的，需要搭配：

1. ✅ `data-refactor.zip` - 新的 data 資料夾
2. ✅ `pages-refactor.zip` - 新的 pages 資料夾（本檔案）

兩者必須同時更新才能正常運作。

---

## 🎯 下一步

替換完成後：

1. **測試功能** - 確認所有頁面正常
2. **補充內容** - 使用題庫管理工具新增更多題目
3. **擴充科目** - 根據新架構新增其他科目

---

## 💡 需要幫助？

如有問題，請查看：
- `組件引入修正指南.md` - 詳細的修正說明
- `data-refactor/README.md` - 資料架構說明
- 控制台錯誤訊息 - 定位問題所在

---

祝使用順利！🚀
