"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5861],{598:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=t(4848),i=t(8453);const l={},r="\u4e0b\u4e00\u4e2a\u6392\u5217",c={type:"mdx",permalink:"/website/leetcode/next-permutation/",source:"@site/src/pages/leetcode/next-permutation/index.md",title:"\u4e0b\u4e00\u4e2a\u6392\u5217",description:"2022/06/26",frontMatter:{},unlisted:!1},o={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u601d\u8003\u8fc7\u7a0b",id:"\u601d\u8003\u8fc7\u7a0b",level:2},{value:"\u9898\u89e3\u53c2\u8003\uff0c\u4e24\u904d\u626b\u63cf",id:"\u9898\u89e3\u53c2\u8003\u4e24\u904d\u626b\u63cf",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u4e0b\u4e00\u4e2a\u6392\u5217",children:"\u4e0b\u4e00\u4e2a\u6392\u5217"}),"\n",(0,s.jsx)(e.p,{children:"2022/06/26"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/next-permutation/",children:"https://leetcode.cn/problems/next-permutation/"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u5165\uff1anums = [1,2,3]\n\u8f93\u51fa\uff1a[1,3,2]"}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u5165\uff1anums = [3,2,1]\n\u8f93\u51fa\uff1a[1,2,3]"}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u5165\uff1anums = [1,1,5]\n\u8f93\u51fa\uff1a[1,5,1]"}),"\n",(0,s.jsx)(e.h2,{id:"\u601d\u8003\u8fc7\u7a0b",children:"\u601d\u8003\u8fc7\u7a0b"}),"\n",(0,s.jsx)(e.h3,{id:"\u9898\u89e3\u53c2\u8003\u4e24\u904d\u626b\u63cf",children:"\u9898\u89e3\u53c2\u8003\uff0c\u4e24\u904d\u626b\u63cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function swap(nums, i, j) {\n    const temp = nums[i]\n    nums[i] = nums[j]\n    nums[j] = temp\n}\n\nfunction reverse(nums, start) {\n    let left = start, right = nums.length - 1\n    while (left < right) {\n        swap(nums, left, right)\n        left++\n        right--\n    }\n}\n\nfunction nextPermutation(nums) {\n    let i = nums.length - 2\n\n    // \u4ece\u53f3\u5f80\u5de6\u627e\u4e0d\u6ee1\u8db3\u964d\u5e8f\u6570\u5217\u7684\u6570\u5b57\u7d22\u5f15\n    while (i >= 0 && nums[i] >= nums[i + 1]) {\n        i--\n    }\n    // \u5982\u679c\u627e\u5230\u4e86\uff0c\u518d\u4ece\u53f3\u5f80\u5de6\u627e\u5927\u4e8enums[i]\u7684\u6570\u5b57\u7d22\u5f15\n    if (i >= 0) {\n        let j = nums.length - 1\n        while (j >= 0 && nums[i] >= nums[j]) {\n            j--\n        }\n        // \u627e\u5230\u4e86\uff0c\u4ea4\u6362i\u548cj\u7684\u4f4d\u7f6e\n        swap(nums, i, j)\n    }\n    // \u5f00\u59cb\u53cd\u8f6ci\u540e\u9762\u7684\u6392\u5217\uff0c\u5373\u53ef\u5f97\u51fa\u4e0b\u4e00\u4e2a\u6392\u5217F\n    reverse(nums, i + 1)\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(6540);const i={},l=s.createContext(i);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);