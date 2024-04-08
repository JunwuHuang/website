"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2814],{1636:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(4848),o=r(8453);const i={},l="\u5c9b\u5c7f\u6570\u91cf",s={type:"mdx",permalink:"/website/leetcode/number-of-islands/",source:"@site/src/pages/leetcode/number-of-islands/index.md",title:"\u5c9b\u5c7f\u6570\u91cf",description:"2022/12/12",frontMatter:{},unlisted:!1},d={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"dfs",id:"dfs",level:3}];function u(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5c9b\u5c7f\u6570\u91cf",children:"\u5c9b\u5c7f\u6570\u91cf"}),"\n",(0,t.jsx)(e.p,{children:"2022/12/12"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-islands/",children:"https://leetcode.cn/problems/number-of-islands/"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'\u8f93\u5165\uff1agrid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]\n\u8f93\u51fa\uff1a1\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:'\u8f93\u5165\uff1agrid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]\n\u8f93\u51fa\uff1a3\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(e.h3,{id:"dfs",children:"dfs"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'function inArea(grid, row, column) {\n  return (\n    row >= 0 && row < grid.length && column >= 0 && column < grid[0].length\n  );\n}\n\nfunction dfs(grid, row, column) {\n  if (!inArea(grid, row, column)) {\n    return;\n  }\n  if (grid[row][column] !== "1") {\n    return;\n  }\n\n  grid[row][column] = "2";\n\n  dfs(grid, row - 1, column);\n  dfs(grid, row, column - 1);\n  dfs(grid, row + 1, column);\n  dfs(grid, row, column + 1);\n}\n\n/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function (grid) {\n  if (!grid.length || !grid[0].length) {\n    return 0;\n  }\n  let nums = 0;\n  const row_total = grid.length;\n  const column_total = grid[0].length;\n  for (let i = 0; i < row_total; i++) {\n    for (let j = 0; j < column_total; j++) {\n      if (grid[i][j] === "1") {\n        dfs(grid, i, j);\n        nums++;\n      }\n    }\n  }\n  return nums;\n};\n'})})]})}function a(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>s});var t=r(6540);const o={},i=t.createContext(o);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);