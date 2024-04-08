"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3652],{4514:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(4848),i=t(8453);const c={},s="\u6bd4\u7279\u4f4d\u8ba1\u6570",l={type:"mdx",permalink:"/website/leetcode/counting-bits/",source:"@site/src/pages/leetcode/counting-bits/index.md",title:"\u6bd4\u7279\u4f4d\u8ba1\u6570",description:"2022/10/19",frontMatter:{},unlisted:!1},o={},a=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u672b\u4f4d\u6e05\u96f6",id:"\u672b\u4f4d\u6e05\u96f6",level:3},{value:"\u52a8\u6001\u89c4\u5212-\u6700\u4f4e\u8bbe\u7f6e\u4f4d",id:"\u52a8\u6001\u89c4\u5212-\u6700\u4f4e\u8bbe\u7f6e\u4f4d",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u6bd4\u7279\u4f4d\u8ba1\u6570",children:"\u6bd4\u7279\u4f4d\u8ba1\u6570"}),"\n",(0,r.jsx)(e.p,{children:"2022/10/19"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/counting-bits/",children:"https://leetcode.cn/problems/counting-bits/"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1an = 2\n\u8f93\u51fa\uff1a[0,1,1]\n\u89e3\u91ca\uff1a\n0 --\x3e 0\n1 --\x3e 1\n2 --\x3e 10\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1an = 5\n\u8f93\u51fa\uff1a[0,1,1,2,1,2]\n\u89e3\u91ca\uff1a\n0 --\x3e 0\n1 --\x3e 1\n2 --\x3e 10\n3 --\x3e 11\n4 --\x3e 100\n5 --\x3e 101\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,r.jsx)(e.h3,{id:"\u672b\u4f4d\u6e05\u96f6",children:"\u672b\u4f4d\u6e05\u96f6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n\n * @return {number[]}\n */\nvar countBits = function (n) {\n  const popcount = (x) => {\n    let ret = 0;\n    while (x > 0) {\n      x = x & (x - 1);\n      ret++;\n    }\n    return ret;\n  };\n  const r = [];\n  for (let i = 0; i <= n; i++) {\n    r.push(popcount(i));\n  }\n  return r;\n};\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u52a8\u6001\u89c4\u5212-\u6700\u4f4e\u8bbe\u7f6e\u4f4d",children:"\u52a8\u6001\u89c4\u5212-\u6700\u4f4e\u8bbe\u7f6e\u4f4d"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n\n * @return {number[]}\n */\nvar countBits = function (n) {\n  const bits = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    bits[i] = bits[i & (i - 1)] + 1\n  }\n  return bits\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>l});var r=t(6540);const i={},c=r.createContext(i);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);