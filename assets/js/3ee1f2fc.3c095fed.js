"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3968],{4175:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=t(4848),c=t(8453);const s={},i="\u6c49\u660e\u8ddd\u79bb",u={type:"mdx",permalink:"/website/leetcode/hamming-distance/",source:"@site/src/pages/leetcode/hamming-distance/index.md",title:"\u6c49\u660e\u8ddd\u79bb",description:"2022/10/18",frontMatter:{},unlisted:!1},l={},a=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u4e8c\u5206\u6cd5",id:"\u4e8c\u5206\u6cd5",level:3},{value:"\u672b\u4f4d\u6e05\u96f6",id:"\u672b\u4f4d\u6e05\u96f6",level:3}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u6c49\u660e\u8ddd\u79bb",children:"\u6c49\u660e\u8ddd\u79bb"}),"\n",(0,r.jsx)(e.p,{children:"2022/10/18"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/hamming-distance/",children:"https://leetcode.cn/problems/hamming-distance/"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1ax = 1, y = 4\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\n1   (0 0 0 1)\n4   (0 1 0 0)\n       \u2191   \u2191\n\u4e0a\u9762\u7684\u7bad\u5934\u6307\u51fa\u4e86\u5bf9\u5e94\u4e8c\u8fdb\u5236\u4f4d\u4e0d\u540c\u7684\u4f4d\u7f6e\u3002\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1ax = 3, y = 1\n\u8f93\u51fa\uff1a1\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://blog.csdn.net/github_38148039/article/details/109598368",children:"C/C++\u4e2d__builtin_popcount()\u7684\u4f7f\u7528\u53ca\u539f\u7406"})}),"\n",(0,r.jsx)(e.h3,{id:"\u4e8c\u5206\u6cd5",children:"\u4e8c\u5206\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} x\n * @param {number} y\n * @return {number}\n */\nvar hammingDistance = function (x, y) {\n  const popcount = (u) => {\n    u = (u & 0x55555555) + ((u >> 1) & 0x55555555);\n    u = (u & 0x33333333) + ((u >> 2) & 0x33333333);\n    u = (u & 0x0f0f0f0f) + ((u >> 4) & 0x0f0f0f0f);\n    u = (u & 0x00ff00ff) + ((u >> 8) & 0x00ff00ff);\n    u = (u & 0x0000ffff) + ((u >> 16) & 0x0000ffff);\n    return u;\n  };\n  return popcount(x ^ y);\n};\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u672b\u4f4d\u6e05\u96f6",children:"\u672b\u4f4d\u6e05\u96f6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} x\n * @param {number} y\n * @return {number}\n */\nvar hammingDistance = function (x, y) {\n  const popcount = (u) => {\n    let ret = 0;\n    while (u) {\n      u = u & (u - 1);\n      ret++;\n    }\n    return ret;\n  };\n  return popcount(x ^ y);\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>u});var r=t(6540);const c={},s=r.createContext(c);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);