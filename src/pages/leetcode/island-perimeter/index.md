# 岛屿的周长

2022/12/12

> <https://leetcode.cn/problems/island-perimeter/>

## 示例

### 示例一

```text
输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边
```

### 示例二

```text
输入：grid = [[1]]
输出：4
```

### 示例三

```text
输入：grid = [[1,0]]
输出：4
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
    return 1;
  }

  if (grid[row][column] === 0) {
    return 1;
  }

  if (grid[row][column] !== 1) {
    return 0;
  }

  grid[row][column] = 2;
  return (
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
var islandPerimeter = function (grid) {
  if (!grid || !grid[0]) {
    return 0;
  }
  const row_total = grid.length;
  const column_total = grid[0].length;

  for (let i = 0; i < row_total; i++) {
    for (let j = 0; j < column_total; j++) {
      if (grid[i][j] === 1) return dfs(grid, i, j);
    }
  }
  return 0;
};
```
