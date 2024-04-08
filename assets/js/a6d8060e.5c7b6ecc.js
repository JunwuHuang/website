"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2637],{203:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=t(4848),r=t(8453);const c={},i="\u5168\u6392\u5217",o={type:"mdx",permalink:"/website/leetcode/permutations/",source:"@site/src/pages/leetcode/permutations/index.md",title:"\u5168\u6392\u5217",description:"2022/07/03",frontMatter:{},unlisted:!1},l={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5",level:3}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5168\u6392\u5217",children:"\u5168\u6392\u5217"}),"\n",(0,s.jsx)(e.p,{children:"2022/07/03"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/permutations/",children:"https://leetcode.cn/problems/permutations/"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1anums = [1,2,3]\n\u8f93\u51fa\uff1a[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1anums = [0,1]\n\u8f93\u51fa\uff1a[[0,1],[1,0]]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1anums = [1]\n\u8f93\u51fa\uff1a[[1]]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,s.jsx)(e.h3,{id:"\u9012\u5f52\u6cd5",children:"\u9012\u5f52\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function swap(nums, i, j) {\n    const temp = nums[j]\n    nums[j] = nums[i]\n    nums[i] = temp\n}\n\nfunction backtrack(n, output, res, first) {\n    if (first === n) {\n        // \u8fd9\u91cc\u4e0d\u80fd\u53ea\u662f\u628aoutput\u7684\u5f15\u7528\u585e\u8fdb\u53bb\uff0c\u9700\u8981copy\u4e00\u4efd\n        res.push(output.slice())\n    }\n    for (let i = first; i < n; i++) {\n        // \u4ea4\u6362first\u548ci\u7684\u4f4d\u7f6e\n        swap(output, first, i)\n        backtrack(n, output, res, first + 1)\n        // \u64a4\u9500\u64cd\u4f5c\n        swap(output, first, i)\n    }\n}\n\nvar permute = function (nums) {\n    const res = []\n\n    const output = nums.slice()\n\n    const n = nums.length\n    backtrack(n, output, res, 0)\n    return res\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var s=t(6540);const r={},c=s.createContext(r);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);