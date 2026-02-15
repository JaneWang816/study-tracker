// 生成數線SVG的函數
const createNumberLineSVG = (min = -5, max = 5, options = {}) => {
  const {
    width = 800,
    height = 120,
    tickHeight = 10,
    fontSize = 16,
    showArrows = true,
    highlightZero = true,
    color = '#1E293B'
  } = options;
  
  const padding = 60;
  const lineY = height / 2;
  const totalRange = max - min;
  const step = (width - 2 * padding) / totalRange;
  
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
  
  // 主線
  svg += `<line x1="${padding}" y1="${lineY}" x2="${width - padding}" y2="${lineY}" stroke="${color}" stroke-width="2"/>`;
  
  // 箭頭
  if (showArrows) {
    // 左箭頭
    svg += `<path d="M ${padding} ${lineY} L ${padding + 10} ${lineY - 6} L ${padding + 10} ${lineY + 6} Z" fill="${color}"/>`;
    // 右箭頭
    svg += `<path d="M ${width - padding} ${lineY} L ${width - padding - 10} ${lineY - 6} L ${width - padding - 10} ${lineY + 6} Z" fill="${color}"/>`;
  }
  
  // 刻度和數字
  for (let i = min; i <= max; i++) {
    const x = padding + (i - min) * step;
    const isZero = (i === 0);
    
    // 刻度線
    svg += `<line x1="${x}" y1="${lineY - tickHeight}" x2="${x}" y2="${lineY + tickHeight}" stroke="${isZero && highlightZero ? '#EF4444' : color}" stroke-width="${isZero ? 3 : 2}"/>`;
    
    // 數字標籤
    const label = i > 0 ? `+${i}` : i.toString();
    svg += `<text x="${x}" y="${lineY + tickHeight + fontSize + 5}" font-size="${fontSize}" fill="${isZero && highlightZero ? '#EF4444' : color}" text-anchor="middle" font-weight="${isZero ? 'bold' : 'normal'}">${label}</text>`;
  }
  
  svg += '</svg>';
  return svg;
};

// 生成標準數線 (-5 到 +5)
console.log(createNumberLineSVG());

// 生成範圍更大的數線
console.log('\n\n--- 範圍 -10 到 +10 ---\n');
console.log(createNumberLineSVG(-10, 10, { width: 1000 }));
