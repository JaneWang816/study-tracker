// 國語 - 字音辨識 - 生成器整合
// src/data/chinese/pronunciation/generators/index.js

import polyphonic from './polyphonic'
import similarShape from './similarShape'
import commonErrors from './commonErrors'

export default {
  polyphonic,
  'similar-shape': similarShape,
  'common-errors': commonErrors
}
