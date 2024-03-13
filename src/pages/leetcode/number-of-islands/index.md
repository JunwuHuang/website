# 岛屿数量

2022/12/12

> [https://leetcode.cn/problems/number-of-islands/](https://leetcode.cn/problems/number-of-islands/)

## 示例

### 示例一

```text
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
```

### 示例二

```text
输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
```

## 题解

### dfs

```javascript
function inArea(grid, row, column) {
  return (
    row >= 0 && row < grid.length && column >= 0 && column < grid[0].length
  );
}

function dfs(grid, row, column) {
  if (!inArea(grid, row, column)) {
    return;
  }
  if (grid[row][column] !== "1") {
    return;
  }

  grid[row][column] = "2";

  dfs(grid, row - 1, column);
  dfs(grid, row, column - 1);
  dfs(grid, row + 1, column);
  dfs(grid, row, column + 1);
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let nums = 0;
  const row_total = grid.length;
  const column_total = grid[0].length;
  for (let i = 0; i < row_total; i++) {
    for (let j = 0; j < column_total; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        nums++;
      }
    }
  }
  return nums;
};
```
