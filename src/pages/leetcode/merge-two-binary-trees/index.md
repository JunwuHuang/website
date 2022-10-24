# 合并二叉树

2022/10/24

> <https://leetcode.cn/problems/merge-two-binary-trees/>

## 示例

### 示例一

```text
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]
```

### 示例二

```text
输入：root1 = [1], root2 = [1,2]
输出：[2,2]
```

## 思考过程

### 深度优先搜索

```javascript
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) {
    return root1 ? root1 : root2;
  }

  const dfs = (t1, t2) => {
    if (!t1 || !t2) {
      return t1 ? t1 : t2;
    }
    t1.val += t2.val;
    t1.left = dfs(t1.left, t2.left);
    t1.right = dfs(t1.right, t2.right);
    return t1;
  };

  return dfs(root1, root2);
};
```

### 广度优先搜索

```javascript
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) {
    return root1 || root2;
  }

  const merged = new TreeNode(root1.val + root2.val);
  const queue = [merged];
  const queue1 = [root1];
  const queue2 = [root2];
  while (queue1.length && queue2.length) {
    const node = queue.shift();
    const node1 = queue1.shift();
    const node2 = queue2.shift();

    const left1 = node1.left;
    const left2 = node2.left;

    const right1 = node1.right;
    const right2 = node2.right;

    if (left1 && left2) {
      const left = new TreeNode(left1.val + left2.val);
      node.left = left;

      queue.push(left);
      queue1.push(left1);
      queue2.push(left2);
    } else if (left1 || left2) {
      node.left = left1 || left2;
    }

    if (right1 && right2) {
      const right = new TreeNode(right1.val + right2.val);
      node.right = right;

      queue.push(right);
      queue1.push(right1);
      queue2.push(right2);
    } else if (right1 || right2) {
      node.right = right1 || right2;
    }
  }

  return merged;
};
```
