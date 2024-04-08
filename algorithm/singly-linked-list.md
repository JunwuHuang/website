---
slug: /
sidebar_position: 1
---

# 单链表

单链表的定义

```javascript
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
```

链表的遍历

```javascript
function walk(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}
```

## 反转链表

[LCR 024. 反转链表](https://leetcode.cn/problems/UHnkqh/description/)

```javascript
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
```

## 链表的中间结点

[876. 链表的中间结点](https://leetcode.cn/problems/middle-of-the-linked-list/description/)

慢指针以一倍速前进，快指针以二倍速前进当快指针走到尽头，那么

- 如果长度为偶数则慢指针会到达中间两个节点的第一个，而题目要求返回第二个
- 如果长度为奇数则慢指针刚好到达中间节点

```javascript
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return fast.next === null ? slow : slow.next;
};
```

## 相交链表

[LCR 023. 相交链表](https://leetcode.cn/problems/3u1WK4/description/)

利用两个指针交互遍历两个链表，走完一遍(headA+headB)，即可得出结果。

```
假设A链表不相交的部分长度为A，B链表不相交的部分长度为B，而相交部分的长度为C。

那么当AB存在相交时，遍历A链表的指针需经过A+C+B，而遍历B链表的指针需经过B+C+A

当AB不存在相交时，遍历A链表的指针需经过A+B，而遍历B链表的指针需经过B+A
```

所以，利用两个指针交互遍历两个链表，走完一遍(headA+headB)，即可得出结果。

```javascript
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
```

## 回文链表

[LCR 027. 回文链表](https://leetcode.cn/problems/aMhZSa/description/)

先拿到头一半的正文

```javascript
function endOfFirstHalf(head) {
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
```

然后反转即可得出后一半的回文

```javascript
const firstHalfEnd = endOfFirstHalf(head);
const secondHalfStart = reverseList(firstHalfEnd.next);
```

最后校验完需要还原输入的链表

```javascript
var isPalindrome = function (head) {
  if (head == null) {
    return true;
  }
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 !== null) {
    if (p1.val !== p2.val) {
      result = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};
```

## 删除链表的某个节点

[LCR 136. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/)

```javascript
var deleteNode = function (head, val) {
  if (head === null) {
    return head;
  }
  if (head.val === val) {
    return head.next;
  }
  let slow = head;
  let fast = head.next;
  while (fast) {
    if (fast.val === val) {
      slow.next = fast.next;
      break;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return head;
};
```

## 移除链表元素

[203. 移除链表元素](https://leetcode.cn/problems/remove-linked-list-elements/description/)

与上一题不同的是，该题的链表可能出现重复的值。借助哨兵`dummyHead`会方便许多

```javascript
var removeElements = function (head, val) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return dummyHead.next;
};
```

## 合并两个有序链表

[21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description/)

借助哨兵`dummyHead`，然后判断两个链表，小的先进`dummyHead`

```javascript
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(-1)

    let curr = dummyHead
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    curr.next = list1 === null ? list2 : list1

    return dummyHead.next
};
```
