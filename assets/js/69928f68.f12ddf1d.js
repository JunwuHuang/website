"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4353],{4065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var l=t(4848),s=t(8453);const c={},o="\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811",r={type:"mdx",permalink:"/website/leetcode/convert-bst-to-greater-tree/",source:"@site/src/pages/leetcode/convert-bst-to-greater-tree/index.md",title:"\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811",description:"2022/11/01",frontMatter:{},unlisted:!1},d={},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u793a\u4f8b\u56db",id:"\u793a\u4f8b\u56db",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"dfs",id:"dfs",level:3},{value:"bfs",id:"bfs",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811",children:"\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811"}),"\n",(0,l.jsx)(n.p,{children:"2022/11/01"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/convert-bst-to-greater-tree/",children:"https://leetcode.cn/problems/convert-bst-to-greater-tree/"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1a[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n\u8f93\u51fa\uff1a[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aroot = [0,null,1]\n\u8f93\u51fa\uff1a[1,null,1]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aroot = [1,0,2]\n\u8f93\u51fa\uff1a[3,3,2]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u56db",children:"\u793a\u4f8b\u56db"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aroot = [3,2,4,1]\n\u8f93\u51fa\uff1a[7,9,4,10]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,l.jsx)(n.h3,{id:"dfs",children:"dfs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var convertBST = function (root) {\n  let sum = 0;\n  const dfs = (node) => {\n    if (node) {\n      dfs(node.right);\n      sum += node.val;\n      node.val = sum;\n      dfs(node.left);\n    }\n  };\n  dfs(root);\n  return root;\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"bfs",children:"bfs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"var getSuccessor = (node) => {\n  let succ = node.right;\n  while (succ.left && succ.left !== node) {\n    succ = succ.left;\n  }\n  return succ\n}\nvar convertBST = function (root) {\n  let sum = 0;\n  let node = root;\n  while (node) {\n    if (node.right) {\n      const succ = getSuccessor(node)\n      if (succ.left) {\n        succ.left = null;\n        sum += node.val;\n        node.val = sum\n        node = node.left;\n      } else {\n        succ.left = node;\n        node = node.right;\n      }\n    } else {\n      sum += node.val;\n      node.val = sum;\n      node = node.left;\n    }\n  }\n  return root\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var l=t(6540);const s={},c=l.createContext(s);function o(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);