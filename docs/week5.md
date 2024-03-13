---
sidebar_position: 5
---

# 第五周

2022-06-20 ~ 2022-06-26

## Review

[AbortController is your friend](https://whistlr.info/2022/abortcontroller-is-your-friend/)

本文讲述了 AbortController 的使用场景，除了在 fetch 的时候可以使用，在注册监听事件的时候也可以使用；作者还介绍了如何去封装一些工具以投入生产，例如在 react 的 useEffect 下使用，以便在消除副作用的环节中去执行 abort

## Algorithm1

[下一个排列](https://github.com/JunwuHuang/leetcode-daily/blob/master/next-permutation/%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%8E%92%E5%88%97.md)

## Algorithm2

[组合总和](https://github.com/JunwuHuang/leetcode-daily/blob/master/combination-sum/%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.md)

## Tip

[「译」ES 2021 新特性: Top-level await | 掘金技术征文-双节特别篇](https://juejin.cn/post/6878441223951122446)

最近 es2022 正式发布了，其中有一个特性就是本文介绍的 top-level await，它的使用场景便是一些需要初始化的模块，例如在 webview 中需要初始化 js bridge 抑或是在接入一些例如应用监控平台的 sdk 大多时候都需要去初始化。以往的时候我们可能需要的在引入该模块的时候再去执行初始化，例如：

```javascript
// module
export const initSdk = async () => {
  return await window.__SDK__.getInstance();
};
```

```javascript
import { initSdk } from "./module";

initSdk().then((instance) => {
  // doSomething
});
```

但是有的时候，相关 sdk 是希望提前准备的，比如在引入的时候就先初始化，点击按钮的时候可以直接触发调用。这种场景下，top-level await 就可以派上用场了
