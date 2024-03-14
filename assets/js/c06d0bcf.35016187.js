"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2125],{1830:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(4848),s=t(8453);const i={},c="\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",l={type:"mdx",permalink:"/website/leetcode/longest-substring-without-repeating-characters/",source:"@site/src/pages/leetcode/longest-substring-without-repeating-characters/index.md",title:"\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",description:"2022/05/24",frontMatter:{},unlisted:!1},a={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u601d\u8003\u8fc7\u7a0b",id:"\u601d\u8003\u8fc7\u7a0b",level:2},{value:"\u521d\u6b65\u5b9e\u73b0",id:"\u521d\u6b65\u5b9e\u73b0",level:3},{value:"\u5229\u7528 hashSet",id:"\u5229\u7528-hashset",level:3}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",children:"\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"}),"\n",(0,r.jsx)(e.p,{children:"2022/05/24"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",children:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(e.p,{children:'\u8f93\u5165: s = "abcabcbb"\n\u8f93\u51fa: 3\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "abc"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 3\u3002'}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(e.p,{children:'\u8f93\u5165: s = "bbbbb"\n\u8f93\u51fa: 1\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f "b"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 1\u3002'}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,r.jsx)(e.p,{children:'\u8f93\u5165: s = "pwwkew"\n\u8f93\u51fa: 3\n\u89e3\u91ca: \u56e0\u4e3a\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32\u662f \xa0"wke"\uff0c\u6240\u4ee5\u5176\u957f\u5ea6\u4e3a 3\u3002\n\xa0 \u8bf7\u6ce8\u610f\uff0c\u4f60\u7684\u7b54\u6848\u5fc5\u987b\u662f \u5b50\u4e32 \u7684\u957f\u5ea6\uff0c"pwke"\xa0 \u662f\u4e00\u4e2a\u5b50\u5e8f\u5217\uff0c\u4e0d\u662f\u5b50\u4e32\u3002'}),"\n",(0,r.jsx)(e.h2,{id:"\u601d\u8003\u8fc7\u7a0b",children:"\u601d\u8003\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.h3,{id:"\u521d\u6b65\u5b9e\u73b0",children:"\u521d\u6b65\u5b9e\u73b0"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u7528 currentString \u8bb0\u5f55\u5f53\u524d\u7684\u4e0d\u8fde\u7eed\u7684\u5b57\u7b26\u4e32\uff0c\u7528 maxLength \u8bb0\u5f55\u5f53\u524d\u6700\u957f\u7684\u4e0d\u8fde\u7eed\u5b57\u7b26\u4e32\u7684\u957f\u5ea6"}),"\n",(0,r.jsx)(e.li,{children:"\u904d\u5386\u539f\u5b57\u7b26\u4e32 s\uff0c\u4e0e currentString \u7684\u6bcf\u4e2a\u5b57\u7b26\u6bd4\u8f83\uff0c\u5982\u679c\u6ca1\u6709\u91cd\u590d\uff0c\u5219\u5c06\u8be5\u5b57\u7b26\u62fc\u4e0a\u53bb\uff1b\u5426\u5219\u88c1\u526a currentString"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'var lengthOfLongestSubstring = function (s) {\n  if (s === "") {\n    return 0;\n  }\n  var maxLength = 1;\n  var currentString = s[0];\n  for (var i = 1; i < s.length; i++) {\n    for (var j = 0; j < currentString.length; j++) {\n      if (s[i] === currentString[j]) {\n        currentString = currentString.slice(j + 1);\n        break;\n      }\n    }\n    currentString += s[i];\n    maxLength = Math.max(currentString.length, maxLength);\n  }\n  return maxLength;\n};\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u5229\u7528-hashset",children:"\u5229\u7528 hashSet"}),"\n",(0,r.jsx)(e.p,{children:"\u5b98\u65b9\u9898\u89e3\u5229\u7528\u4e86 es6 \u7684 Set \u5bf9\u8c61"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"var lengthOfLongestSubstring = function (s) {\n  // \u54c8\u5e0c\u96c6\u5408\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u5b57\u7b26\u662f\u5426\u51fa\u73b0\u8fc7\n  const occ = new Set();\n  const n = s.length;\n  // \u53f3\u6307\u9488\uff0c\u521d\u59cb\u503c\u4e3a -1\uff0c\u76f8\u5f53\u4e8e\u6211\u4eec\u5728\u5b57\u7b26\u4e32\u7684\u5de6\u8fb9\u754c\u7684\u5de6\u4fa7\uff0c\u8fd8\u6ca1\u6709\u5f00\u59cb\u79fb\u52a8\n  let rk = -1,\n    ans = 0;\n  for (let i = 0; i < n; ++i) {\n    if (i != 0) {\n      // \u5de6\u6307\u9488\u5411\u53f3\u79fb\u52a8\u4e00\u683c\uff0c\u79fb\u9664\u4e00\u4e2a\u5b57\u7b26\n      occ.delete(s.charAt(i - 1));\n    }\n    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {\n      // \u4e0d\u65ad\u5730\u79fb\u52a8\u53f3\u6307\u9488\n      occ.add(s.charAt(rk + 1));\n      ++rk;\n    }\n    // \u7b2c i \u5230 rk \u4e2a\u5b57\u7b26\u662f\u4e00\u4e2a\u6781\u957f\u7684\u65e0\u91cd\u590d\u5b57\u7b26\u5b50\u4e32\n    ans = Math.max(ans, rk - i + 1);\n  }\n  return ans;\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);