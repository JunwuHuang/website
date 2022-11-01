# 二叉树展开为链表

2022/11/01

> <https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/>

## 示例

### 示例一

```text
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

### 示例二

```text
输入：root = []
输出：[]
```

### 示例三

```text
输入：root = [0]
输出：[0]
```

## 题解

### 迭代前序遍历

```javascript
var flatten = function (root) {
  const list = [];
  const stack = [];
  let node = root;
  while (node !== null || stack.length) {
    while (node !== null) {
      list.push(node);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1],
      curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
};
```

### 寻找前驱节点

```javascript
var flatten = function (root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};
```
