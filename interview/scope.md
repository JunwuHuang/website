---
slug: /
sidebar_position: 1
---

# 作用域

```javascript
var a = 2
var results = []
var total = 0

function foo(a) {
    for (var i = 0; i < 3; i++)  {
        results[i] = function() {
            total += i * a
            console.log(i)
        }
    }
}

foo(1)
results[0]()
results[1]()
results[2]()
```

当result函数执行的时候，当上作用域内获取不到`a`变量，所以往上一层照，可以拿到`foo`函数下的`a`变量，值为`1`；

由于`i`变量使用的是`var`关键字定义，那么它会是在`foo`函数下的作用域去定义`i`,当result函数执行时，此时的for循环已经执行完毕，所以`i`的值为`3`，所以结果为`3, 6, 9`