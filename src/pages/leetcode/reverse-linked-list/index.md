# 反转链表

2022/11/01

> [https://leetcode.cn/problems/reverse-linked-list/](https://leetcode.cn/problems/reverse-linked-list/)

## 示例

### 示例一

```text
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

### 示例二

```text
输入：head = [1,2]
输出：[2,1]
```

### 示例三

```text
输入：head = []
输出：[]
```

## 题解

### 迭代

```javascript
var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
```

### 递归

```javascript
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
```
