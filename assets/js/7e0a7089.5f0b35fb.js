"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4274],{410:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var t=r(4848),o=r(8453);const i={},l="\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef",d={type:"mdx",permalink:"/website/leetcode/max-area-of-island/",source:"@site/src/pages/leetcode/max-area-of-island/index.md",title:"\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef",description:"2022/12/12",frontMatter:{},unlisted:!1},c={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"dfs",id:"dfs",level:3}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef",children:"\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef"}),"\n",(0,t.jsx)(e.p,{children:"2022/12/12"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/max-area-of-island/",children:"https://leetcode.cn/problems/max-area-of-island/"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1agrid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a\u7b54\u6848\u4e0d\u5e94\u8be5\u662f 11 \uff0c\u56e0\u4e3a\u5c9b\u5c7f\u53ea\u80fd\u5305\u542b\u6c34\u5e73\u6216\u5782\u76f4\u8fd9\u56db\u4e2a\u65b9\u5411\u4e0a\u7684 1 \u3002\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"\u8f93\u5165\uff1agrid = [[0,0,0,0,0,0,0,0]]\n\u8f93\u51fa\uff1a0\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(e.h3,{id:"dfs",children:"dfs"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"function inArea(grid, row, column) {\n  return (\n    row >= 0 && column >= 0 && row < grid.length && column < grid[0].length\n  );\n}\nfunction dfs(grid, row, column) {\n  if (!inArea(grid, row, column)) {\n    return 0;\n  }\n\n  if (grid[row][column] !== 1) {\n    return 0;\n  }\n\n  grid[row][column] = 2;\n\n  return (\n    1 +\n    dfs(grid, row - 1, column) +\n    dfs(grid, row + 1, column) +\n    dfs(grid, row, column - 1) +\n    dfs(grid, row, column + 1)\n  );\n}\n/**\n * @param {number[][]} grid\n * @return {number}\n */\nvar maxAreaOfIsland = function (grid) {\n  if (!grid || !grid[0]) {\n    return 0;\n  }\n  const row_total = grid.length;\n  const column_total = grid[0].length;\n\n  let ret = 0;\n  for (let i = 0; i < row_total; i++) {\n    for (let j = 0; j < column_total; j++) {\n      if (grid[i][j] === 1) ret = Math.max(ret, dfs(grid, i, j));\n    }\n  }\n  return ret;\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>d});var t=r(6540);const o={},i=t.createContext(o);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);