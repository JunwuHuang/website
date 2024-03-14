"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6907],{9354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=t(4848),s=t(8453);const c={},l="\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",o={type:"mdx",permalink:"/website/leetcode/product-of-array-except-self/",source:"@site/src/pages/leetcode/product-of-array-except-self/index.md",title:"\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",description:"2022/09/30",frontMatter:{},unlisted:!1},i={},a=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)O(1) \u7684\u65b9\u6cd5",id:"\u7a7a\u95f4\u590d\u6742\u5ea6-o1o1-\u7684\u65b9\u6cd5",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",children:"\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef"}),"\n",(0,r.jsx)(n.p,{children:"2022/09/30"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/product-of-array-except-self/",children:"https://leetcode.cn/problems/product-of-array-except-self/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165: nums = [1,2,3,4]\n\u8f93\u51fa: [24,12,8,6]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165: nums = [-1,1,0,-3,3]\n\u8f93\u51fa: [0,0,9,0,0]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,r.jsx)(n.h3,{id:"\u7a7a\u95f4\u590d\u6742\u5ea6-o1o1-\u7684\u65b9\u6cd5",children:"\u7a7a\u95f4\u590d\u6742\u5ea6 O(1)O(1) \u7684\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"var productExceptSelf = function (nums: number[]): number[] {\n  const length = nums.length;\n  const answer = new Array<number>(length);\n\n  // answer[i] \u8868\u793a\u7d22\u5f15 i \u5de6\u4fa7\u6240\u6709\u5143\u7d20\u7684\u4e58\u79ef\n  // \u56e0\u4e3a\u7d22\u5f15\u4e3a '0' \u7684\u5143\u7d20\u5de6\u4fa7\u6ca1\u6709\u5143\u7d20\uff0c \u6240\u4ee5 answer[0] = 1\n  answer[0] = 1;\n  for (let i = 1; i < length; i++) {\n    answer[i] = nums[i - 1] * answer[i - 1];\n  }\n\n  // R \u4e3a\u53f3\u4fa7\u6240\u6709\u5143\u7d20\u7684\u4e58\u79ef\n  // \u521a\u5f00\u59cb\u53f3\u8fb9\u6ca1\u6709\u5143\u7d20\uff0c\u6240\u4ee5 R = 1\n  let R = 1;\n  for (let i = length - 1; i >= 0; i--) {\n    // \u5bf9\u4e8e\u7d22\u5f15 i\uff0c\u5de6\u8fb9\u7684\u4e58\u79ef\u4e3a answer[i]\uff0c\u53f3\u8fb9\u7684\u4e58\u79ef\u4e3a R\n    answer[i] = answer[i] * R;\n    // R \u9700\u8981\u5305\u542b\u53f3\u8fb9\u6240\u6709\u7684\u4e58\u79ef\uff0c\u6240\u4ee5\u8ba1\u7b97\u4e0b\u4e00\u4e2a\u7ed3\u679c\u65f6\u9700\u8981\u5c06\u5f53\u524d\u503c\u4e58\u5230 R \u4e0a\n    R *= nums[i];\n  }\n  return answer;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(6540);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);