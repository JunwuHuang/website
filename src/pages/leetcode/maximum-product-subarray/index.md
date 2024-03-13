# 乘积最大子数组

2022/12/24

> [https://leetcode.cn/problems/maximum-product-subarray/](https://leetcode.cn/problems/maximum-product-subarray/)

## 示例

### 示例一

```text
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

### 示例二

```text
输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

## 题解

### 动态规划

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const length = nums.length
    let maxF = nums[0]
    let minF = nums[0]
    let ans = nums[0]
    for (let i = 1; i < length; i ++) {
        const mx = maxF
        const mn = minF
        maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]))
        minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]))
        ans = Math.max(maxF, ans)
    }
    return ans
};
```
