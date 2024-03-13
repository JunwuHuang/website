# 环形链表

2022/11/21

> [https://leetcode.cn/problems/linked-list-cycle/](https://leetcode.cn/problems/linked-list-cycle/)

## 示例

### 示例一

```text
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

### 示例二

```text
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

### 示例三

```text
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

## 题解参考

### 暴力解法

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let dump = head;
  const arr = [];
  while (dump !== null) {
    arr.push(dump);
    dump = dump.next;
    for (item of arr) {
      if (dump === item) {
        return true;
      }
    }
  }
  return false;
};
```

### 哈希表

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set()
  while (head !== null) {
    if (set.has(head)) {
      return true
    }
    set.add(head)
    head = head.next
  }
  return false
};
```

### 快慢指针

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
};
```
