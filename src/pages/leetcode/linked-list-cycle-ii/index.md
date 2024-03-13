# 环形链表 II

2022/11/21

> [https://leetcode.cn/problems/linked-list-cycle-ii/](https://leetcode.cn/problems/linked-list-cycle-ii/)

## 示例

### 示例一

```text
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

### 示例二

```text
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

### 示例三

```text
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

## 题解参考

### 哈希表

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const set = new Set();
  while (head !== null) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
};
```

### 快慢指针

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next === null) {
      return null;
    } else {
      fast = fast.next.next;
    }
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
```
