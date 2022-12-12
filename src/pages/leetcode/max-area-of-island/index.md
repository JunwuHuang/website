# 岛屿的最大面积

2022/12/12

> <https://leetcode.cn/problems/max-area-of-island/>

## 示例

### 示例一

```text
输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
输出：6
解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
```

### 示例二

```text
输入：grid = [[0,0,0,0,0,0,0,0]]
输出：0
```

## 题解

### dfs

```javascript
function inArea(grid, row, column) {
  return (
    row >= 0 && column >= 0 && row < grid.length && column < grid[0].length
  );
}
function dfs(grid, row, column) {
  if (!inArea(grid, row, column)) {
    return 0;
  }

  if (grid[row][column] !== 1) {
    return 0;
  }

  grid[row][column] = 2;

  return (
    1 +
    dfs(grid, row - 1, column) +
    dfs(grid, row + 1, column) +
    dfs(grid, row, column - 1) +
    dfs(grid, row, column + 1)
  );
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (!grid || !grid[0]) {
    return 0;
  }
  const row_total = grid.length;
  const column_total = grid[0].length;

  let ret = 0;
  for (let i = 0; i < row_total; i++) {
    for (let j = 0; j < column_total; j++) {
      if (grid[i][j] === 1) ret = Math.max(ret, dfs(grid, i, j));
    }
  }
  return ret;
};
```
