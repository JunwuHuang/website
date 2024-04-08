---
sidebar_position: 3
---

# 防抖与节流

## 防抖

函数防抖是指让一个函数延迟触发，并且如果在该函数触发之前再次尝试触发，那么则重置延迟时间。例如说用户在结算购物车的时候，为了避免用户多次重复点击结算而造成多次订单创建，那么就可以利用函数防抖，使用户的最后一次点击成为唯一有效触发的动作。

```javascript
function debounce(func, wait) {
    let lastCallTime
    let timerId
    return function debounced() {
        const time = Date.now()
        if (lastCallTime == undefined || time - lastCallTime < wait) {
            lastCallTime = time
            clearTimeout(timerId)
            timerId = setTimeout(func, wait)
        } else {
            timerId = undefined
            lastCallTime = undefined
        }
    }
}
```

## 节流

函数节流是指在多次尝试触发函数期间，仅让每个预期等待时间内成功执行1次。它和防抖类似，不同的是，在触发过1次后，它会重置状态并在下一个预期等待时间到达后再次触发，如此反复。实际场景的话就比如无限滚动列表的实现，当用户滚动列表的时候，我们希望检查列表的滚动距离，当它接近底部的时候则请求更多数据以此实现无限滚动。那么列表的滚动是高频触发事件，这个时候则可以借助节流的方法去降低检查频率。

```javascript
function throttle(func, wait) {
    let lastCallTime
    let timerId
    return function throttled() {
        const time = Date.now()
        if (lastCallTime == undefined) {
            lastCallTime = time
        } 
        if (time - lastCallTime >= wait) {
            if (timerId != undefined) {
                clearTimeout(timerId)
            }
            timerId = setTimeout(func, wait)
            lastCallTime = undefined
        }
    }
}
```

## 参考文献

- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [_.debounce](https://lodash.com/docs/4.17.15#debounce)
- [debounce.ts](https://github.com/lodash/lodash/blob/main/src/debounce.ts)