// 數學科目
// src/data/math/index.js

import arithmetic from './arithmetic'

export const mathModules = {
  arithmetic: {
    id: 'arithmetic',
    name: '四則運算',
    icon: '➕',
    color: '#FF6B6B',
    desc: '整數、小數、分數的加減乘除',
    ...arithmetic
  }
  // TODO: 新增其他數學模組（幾何、統計等）
}

export default mathModules
