---
sidebar_position: 27
---

# 第二十七周

2022-11-28 ~ 2022-12-04

## Algorithm1

[LRU 缓存](/leetcode/lru-cache/)

## Algorithm2

[排序链表](/leetcode/sort-list/)

## Tips

[每天 10 个前端小知识 Day6](https://juejin.cn/post/7129782761312747551)

复习面试题

## Review

[Build Apps in Deno with Frameworks such as React, Vue, Express, and more.](https://deno.com/blog/frameworks-with-npm)

这篇文章介绍了如何使用deno去构建一个web项目，其核心思路是在deno中使用npm，但是deno带来了一些好处：

- deno自带的工具：`deno test` `deno lint` `deno fmt`
- deno默认是ts语法所以无需`tsconfig.json`也无需`package.json`还有`node_modules`
- 再也没有`npm install`阶段，模块会被全局目录缓存

该教程对于package的依赖管理，主要是在vite的配置文件中引入相关的包，区别于npm将依赖定义在package.json的方式
