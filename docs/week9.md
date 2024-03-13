---
sidebar_position: 9
---

# 第九周

2022-07-18 ~ 2022-07-24

## Algorithm1

[颜色分类](https://github.com/JunwuHuang/leetcode-daily/blob/master/sort-colors/%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB.md)

## Algorithm2

[最长连续序列](https://github.com/JunwuHuang/leetcode-daily/blob/master/longest-consecutive-sequence/%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E5%BA%8F%E5%88%97.md)

## Review

[Statements Vs. Expressions](https://www.joshwcomeau.com/javascript/statements-vs-expressions/)

这篇文章介绍了怎么去理解 Statements 和 Expressions；Statements 是程序的结构，有的 Statements 可以用来放置 Expressions；作者有一个比喻，把 Statements 比作小霸王（原文当然是 Super Nintendo），把 Expressions 比作游戏卡；

## Tip

[message api](https://github.com/ant-design/ant-design/blob/master/components/message/index.tsx)

```typescript
const typeToIcon = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingOutlined,
};

export type NoticeType = keyof typeof typeToIcon;

export const typeList = Object.keys(typeToIcon) as NoticeType[];

export function attachTypeApi(originalApi: MessageApi, type: NoticeType) {
  originalApi[type] = (
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ) => {
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type });
    }

    if (typeof duration === "function") {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({ content, duration, type, onClose });
  };
}

typeList.forEach((type) => attachTypeApi(api, type));
```

最近工作刚好处理了类似的代码，学习了 antd 的做法后，确实这样的代码更加便于维护扩展，只需利用 typeToIcon 作为 api 名称与图标的这个映射。
