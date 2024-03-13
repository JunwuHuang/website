---
sidebar_position: 17
---

# 第十七周

2022-09-19 ~ 2022-09-25

## Algorithm1

[单词拆分](https://github.com/JunwuHuang/leetcode-daily/blob/af79db10aa53b00c0052f2531ea399dccd26369b/word-break/%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86.md)

## Algorithm2

[最小栈](https://github.com/JunwuHuang/leetcode-daily/blob/2074c8e8470505890621f66a3e4f4f6220f8ef17/min-stack/%E6%9C%80%E5%B0%8F%E6%A0%88.md)

## Review

[Secure Your Node.js App with JSON Web Tokens](https://blog.appsignal.com/2022/09/14/secure-your-nodejs-app-with-json-web-tokens)

本文是关于如何在 nodejs 中使用 jwt 的教程，其中对于 JWT_SECRET 的处理利用了 dotenv 工具，并且也强调了不应该将它公开出去

## Tips

[H5 向 微信小程序 的即时通讯“解决方案”](https://github.com/RedTeapot/WxMiniProgramHybrid)

该工具是针对于小程序中的 webview 的 bindmessage 使用限制做的绕行的方案，该 api 的限制条件为：小程序后退、组件销毁、分享；这样的话，基本就告别了即时通讯了，所以该 api 使用了 onload 去接收参数的特性做了绕行方案。首先是小程序方面新建一个中间页面用于处理通讯消息，该页面需要设置一个“处理中”的交互，然后利用路由栈获取到 webview 所在的页面，去改变 webview 的链接的 hash，webview 则利用 hashchange 去做文章。

该方法在体验上肯定是不够友好的，所以当产品决策上可以避免这样的操作，当然是最好的了。
