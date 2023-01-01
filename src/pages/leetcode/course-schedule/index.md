# 课程表

2023/01/01

> <https://leetcode.cn/problems/course-schedule/>

## 示例

### 示例一

```text
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

### 示例二

```text
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

## 题解

### 双指针


```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const edges = new Array(numCourses)
  const visited = new Array(numCourses).fill(0)
  let valid = true
  for (let i = 0; i < numCourses; i++) {
    edges[i] = []
  }
  for (const info of prerequisites) {
    edges[info[1]].push(info[0])
  }
  const dfs = u => {
    visited[u] = 1
    for (const v of edges[u]) {
      if (visited[v] === 0) {
        dfs(v)
        if (!valid) {
          return
        }
      } else if (visited[v] === 1) {
        valid = false
        return
      }
    }
    visited[u] = 2
  }
  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i)
    }
  }
  return valid
};
```
