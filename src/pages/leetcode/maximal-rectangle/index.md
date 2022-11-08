# 最大矩形

2022/11/08

> <https://leetcode.cn/problems/maximal-rectangle/>

## 示例

### 示例一

```text
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：6
解释：最大矩形如上图所示。
```

### 示例二

```text
输入：matrix = []
输出：0
```

### 示例三

```text
输入：matrix = [["0"]]
输出：0
```

### 示例四

```text
输入：matrix = [["1"]]
输出：1
```

### 示例五

```text
输入：matrix = [["0","0"]]
输出：0
```

## 题解参考

### 使用柱状图的优化暴力方法

```javascript
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
      }
    }
  }

  let ret = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "0") {
        continue;
      }
      let width = left[i][j];
      let area = width;
      for (let k = i - 1; k >= 0; k--) {
        width = Math.min(width, left[k][j]);
        area = Math.max(area, (i - k + 1) * width);
      }
      ret = Math.max(ret, area);
    }
  }
  return ret;
};
```
