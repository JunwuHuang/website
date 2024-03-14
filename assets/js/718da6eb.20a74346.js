"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2247],{2184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(4848),l=t(8453);const s={},o="\u5bf9\u79f0\u4e8c\u53c9\u6811",i={type:"mdx",permalink:"/website/leetcode/symmetric-tree/",source:"@site/src/pages/leetcode/symmetric-tree/index.md",title:"\u5bf9\u79f0\u4e8c\u53c9\u6811",description:"2022/11/17",frontMatter:{},unlisted:!1},c={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"DFS",id:"dfs",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5bf9\u79f0\u4e8c\u53c9\u6811",children:"\u5bf9\u79f0\u4e8c\u53c9\u6811"}),"\n",(0,r.jsx)(n.p,{children:"2022/11/17"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/symmetric-tree/",children:"https://leetcode.cn/problems/symmetric-tree/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u5165\uff1aroot = [1,2,2,3,4,4,3]\n\u8f93\u51fa\uff1atrue"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u5165\uff1aroot = [1,2,2,null,3,null,3]\n\u8f93\u51fa\uff1afalse"}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,r.jsx)(n.h3,{id:"dfs",children:"DFS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isSymmetric = function (root) {\n  if (root === null) {\n    return true;\n  }\n  const dfs = (left, right) => {\n    if (left === null && right === null) {\n      return true;\n    }\n    if (left === null || right === null) {\n      return false;\n    }\n    if (left.val !== right.val) {\n      return false;\n    }\n    return dfs(left.left, right.right) && dfs(left.right, right.left);\n  };\n\n  return dfs(root.left, root.right);\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const l={},s=r.createContext(l);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);