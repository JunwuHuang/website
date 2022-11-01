# 把二叉搜索树转换为累加树

2022/11/01

> <https://leetcode.cn/problems/convert-bst-to-greater-tree/>

## 示例

### 示例一

```text
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

### 示例二

```text
输入：root = [0,null,1]
输出：[1,null,1]
```

### 示例三

```text
输入：root = [1,0,2]
输出：[3,3,2]
```

### 示例四

```text
输入：root = [3,2,4,1]
输出：[7,9,4,10]
```

## 题解

### dfs

```javascript
var convertBST = function (root) {
  let sum = 0;
  const dfs = (node) => {
    if (node) {
      dfs(node.right);
      sum += node.val;
      node.val = sum;
      dfs(node.left);
    }
  };
  dfs(root);
  return root;
};
```

### bfs

```javascript
var getSuccessor = (node) => {
  let succ = node.right;
  while (succ.left && succ.left !== node) {
    succ = succ.left;
  }
  return succ
}
var convertBST = function (root) {
  let sum = 0;
  let node = root;
  while (node) {
    if (node.right) {
      const succ = getSuccessor(node)
      if (succ.left) {
        succ.left = null;
        sum += node.val;
        node.val = sum
        node = node.left;
      } else {
        succ.left = node;
        node = node.right;
      }
    } else {
      sum += node.val;
      node.val = sum;
      node = node.left;
    }
  }
  return root
};
```
