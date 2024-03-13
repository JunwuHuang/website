# 最大正方形

2022/12/24

> [https://leetcode.cn/problems/maximal-square/](https://leetcode.cn/problems/maximal-square/)

## 示例

### 示例一

```text
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
```

### 示例二

```text
输入：matrix = [["0","1"],["1","0"]]
输出：1
```

### 示例三

```text
输入：matrix = [["0"]]
输出：0
```

## 题解参考

### 动态规划

```javascript
var maximalSquare = function (matrix) {
 let maxSide = 0;
  if (!matrix?.length || !matrix[0]?.length) {
    return maxSide;
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  const dp = new Array(rows)
  for (let i = 0; i < rows; i++) {
    dp[i] = new Array(columns).fill(0)
  }
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
          if (matrix[i][j] === '1') {
              if (i === 0 || j === 0) {
                  dp[i][j] = 1;
              } else {
                  dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
              }
              maxSide = Math.max(maxSide, dp[i][j]);
          }
      }
  }
  return maxSide * maxSide;
};
```
