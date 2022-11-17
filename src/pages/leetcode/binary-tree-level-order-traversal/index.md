# 二叉树的层序遍历

2022/11/17

> <https://leetcode.cn/problems/binary-tree-level-order-traversal/>

## 示例

### 示例一

```text
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

### 示例二

```text
输入：root = [1]
输出：[[1]]
```

### 示例三

```text
输入：root = []
输出：[]
```

## 题解参考

### BFS

```javascript
var levelOrder = function (root) {
  const res = [];

  const queue = [];
  if (root !== null) {
    queue.push(root);
  }

  while (queue.length) {
    const n = queue.length;
    const level = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    res.push(level);
  }
  return res
};
```
