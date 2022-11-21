# 二叉树中的最大路径和

2022/11/21

> <https://leetcode.cn/problems/binary-tree-maximum-path-sum/>

## 示例

### 示例一

```text
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

### 示例二

```text
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

## 题解参考

### 递归

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = -Infinity
  const maxGain = node => {
    if (node === null) {
      return 0
    }

    const leftGain = Math.max(maxGain(node.left), 0)
    const rightGain = Math.max(maxGain(node.right), 0)

    const priceNewpath = node.val + leftGain + rightGain

    maxSum = Math.max(maxSum, priceNewpath)

    return node.val + Math.max(leftGain, rightGain)
  }

  maxGain(root)
  return maxSum
};
```
