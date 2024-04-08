"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2068],{5403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var l=t(4848),r=t(8453);const s={},o="\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",c={type:"mdx",permalink:"/website/leetcode/binary-tree-level-order-traversal/",source:"@site/src/pages/leetcode/binary-tree-level-order-traversal/index.md",title:"\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",description:"2022/11/17",frontMatter:{},unlisted:!1},i={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"BFS",id:"bfs",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",children:"\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386"}),"\n",(0,l.jsx)(n.p,{children:"2022/11/17"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/",children:"https://leetcode.cn/problems/binary-tree-level-order-traversal/"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aroot = [3,9,20,null,null,15,7]\n\u8f93\u51fa\uff1a[[3],[9,20],[15,7]]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aroot = [1]\n\u8f93\u51fa\uff1a[[1]]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,l.jsx)(n.h3,{id:"bfs",children:"BFS"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var levelOrder = function (root) {\n  const res = [];\n\n  const queue = [];\n  if (root !== null) {\n    queue.push(root);\n  }\n\n  while (queue.length) {\n    const n = queue.length;\n    const level = [];\n    for (let i = 0; i < n; i++) {\n      const node = queue.shift();\n      level.push(node.val);\n      if (node.left !== null) {\n        queue.push(node.left);\n      }\n      if (node.right !== null) {\n        queue.push(node.right);\n      }\n    }\n    res.push(level);\n  }\n  return res\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var l=t(6540);const r={},s=l.createContext(r);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);