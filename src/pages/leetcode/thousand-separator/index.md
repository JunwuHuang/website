# 千位分隔数

2022/12/20

> <https://leetcode.cn/problems/thousand-separator/>

## 示例

### 示例一

```text
输入：n = 987
输出："987"
```

### 示例二

```text
输入：n = 1234
输出："1.234"
```

### 示例三

```text
输入：n = 123456789
输出："123.456.789"
```

### 示例四

```text
输入：n = 0
输出："0"
```

## 题解参考

### 模拟

```javascript
var thousandSeparator = function (n) {
  let count = 0;
  let ans = "";
  do {
    const cur = n % 10;
    ans += cur;
    n = Math.floor(n / 10);
    count += 1;
    if (count % 3 === 0 && n) {
      ans += ".";
    }
  } while (n);
  return ans.split("").reverse().join("");
};
```
