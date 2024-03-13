# 验证二叉搜索树

2022/11/09

> [https://leetcode.cn/problems/validate-binary-search-tree/](https://leetcode.cn/problems/validate-binary-search-tree/)

## 示例

### 示例一

```text
输入：root = [2,1,3]
输出：true
```

### 示例二

```text
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

## 题解参考

### 递归

```javascript
var isValidBST = function (root) {
  const helper = (node, lower, higher) => {
    if (node === null) {
      return true;
    }
    if (node.val <= lower || node.val >= higher) {
      return false;
    }
    return (
      helper(node.left, lower, node.val) && helper(node.right, node.val, higher)
    );
  };
  return helper(root, -Infinity, Infinity);
};
```

### 中序遍历

```javascript
var isValidBST = function (root) {
  const stack = [];
  let inorder = -Infinity;
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (inorder >= root.val) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
};
```
