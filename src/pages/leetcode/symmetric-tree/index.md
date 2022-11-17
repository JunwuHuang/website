# 对称二叉树

2022/11/17

> <https://leetcode.cn/problems/symmetric-tree/>

## 示例

### 示例一

输入：root = [1,2,2,3,4,4,3]
输出：true

### 示例二

输入：root = [1,2,2,null,3,null,3]
输出：false

## 题解参考

### DFS

```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  const dfs = (left, right) => {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  };

  return dfs(root.left, root.right);
};
```
