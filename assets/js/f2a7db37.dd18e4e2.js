"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6671],{3309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=t(4848),r=t(8453);const c={},l="\u56de\u6587\u5b50\u4e32",i={type:"mdx",permalink:"/website/leetcode/palindromic-substrings/",source:"@site/src/pages/leetcode/palindromic-substrings/index.md",title:"\u56de\u6587\u5b50\u4e32",description:"2022/10/08",frontMatter:{},unlisted:!1},a={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u4e2d\u5fc3\u6269\u5c55",id:"\u4e2d\u5fc3\u6269\u5c55",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u56de\u6587\u5b50\u4e32",children:"\u56de\u6587\u5b50\u4e32"}),"\n",(0,s.jsx)(n.p,{children:"2022/10/08"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/palindromic-substrings/",children:"https://leetcode.cn/problems/palindromic-substrings/"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'\u8f93\u5165\uff1as = "abc"\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u4e09\u4e2a\u56de\u6587\u5b50\u4e32: "a", "b", "c"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'\u8f93\u5165\uff1as = "aaa"\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a6\u4e2a\u56de\u6587\u5b50\u4e32: "a", "a", "a", "aa", "aa", "aaa"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e2d\u5fc3\u6269\u5c55",children:"\u4e2d\u5fc3\u6269\u5c55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var countSubstrings = function (s) {\n  const n = s.length;\n  let ans = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j <= 1; j++) {\n      let l = i\n      let r = i + j\n      while (l >= 0 && r < n && s.chartAt(l--) === s.chartAt(r++)) {\n        ans++\n      }\n    }\n  }\n  return ans;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(6540);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);