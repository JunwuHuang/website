# 二叉树的最大深度

2022/10/31

> [https://leetcode.cn/problems/maximum-depth-of-binary-tree/](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

## 示例

### 示例一

给定二叉树 [3,9,20,null,null,15,7]，

```text
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度  3 。

## 题解

### 深度优先搜索

```javascript
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

### 广度优先搜索

```javascript
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let ans = 0;
  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size--;
    }
    ans++;
  }
  return ans;
};
```
