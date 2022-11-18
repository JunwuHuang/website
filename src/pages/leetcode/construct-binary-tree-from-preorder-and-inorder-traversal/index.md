# 从前序与中序遍历序列构造二叉树

2022/11/18

> <https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/>

## 示例

### 示例一

```text
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```

### 示例二

```text
输入: preorder = [-1], inorder = [-1]
输出: [-1]
```

## 题解参考

### 递归

```javascript
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const n = preorder.length;
  const indexMap = new Map();
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i);
  }
  const fn = (
    preorder,
    inorder,
    preorder_left,
    preorder_right,
    inorder_left,
    inorder_right
  ) => {
    if (preorder_left > preorder_right) {
      return null;
    }
    const preorder_root = preorder_left;
    const inorder_root = indexMap.get(preorder[preorder_root]);

    const root = new TreeNode(preorder[preorder_root]);
    const size_left_subtree = inorder_root - inorder_left;

    root.left = fn(
      preorder,
      inorder,
      preorder_left + 1,
      preorder_left + size_left_subtree,
      inorder_left,
      inorder_root - 1
    );

    root.right = fn(
      preorder,
      inorder,
      preorder_left + size_left_subtree + 1,
      preorder_right,
      inorder_root + 1,
      inorder_right
    );

    return root;
  };
  return fn(preorder, inorder, 0, n - 1, 0, n - 1);
};
```
