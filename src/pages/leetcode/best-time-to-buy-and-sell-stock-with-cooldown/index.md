# 最佳买卖股票时机含冷冻期

2022/10/28

> <https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/>

## 示例

### 示例一

```text
输入: prices = [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

### 示例二

```text
输入: prices = [1]
输出: 0
```

## 思考过程

### 动态规划

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    if (n === 0) {
        return 0
    }
    let f0 = -prices[0]
    let f1 = 0
    let f2 = 0
    for (let i = 0; i < n; i++) {
        const newF0 = Math.max(f0, f2 - prices[i])
        const newF1 = f0 + prices[i]
        const newF2 = Math.max(f1, f2)
        f0 = newF0
        f1 = newF1
        f2 = newF2
    }
    return Math.max(f1, f2)
};
```
