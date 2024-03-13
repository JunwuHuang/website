# LRU 缓存

2022/12/04

> [https://leetcode.cn/problems/lru-cache/](https://leetcode.cn/problems/lru-cache/)

## 示例

### 示例一

```text
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

## 题解参考

### 哈希表与双向链表

```javascript
function LinkedNode(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
    return this
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0
    this.capacity = capacity
    this.head = new LinkedNode()
    this.tail = new LinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.cache = new Map()

    this.removeNode = function(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    this.addToHead = function(node) {
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
    }

    this.moveToHead = function(node) {
        this.removeNode(node)
        this.addToHead(node)
    }

    this.removeTail = function() {
        const res = this.tail.prev
        this.removeNode(res)
        return res
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache.get(key)
    if (node === undefined || node === null) {
        return -1
    }
    this.moveToHead(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.cache.get(key)
    if (node !== undefined && node !== null) {
        node.value = value
        this.moveToHead(node)
        return
    }
    const newNode = new LinkedNode(key, value)
    this.cache.set(key, newNode)
    this.addToHead(newNode)
    this.size++
    if (this.size > this.capacity) {
        const tail = this.removeTail()
        this.cache.delete(tail.key)
        --this.size
    }
};
```
