"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6616],{8039:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(4848),s=i(8453);const r={},l="\u6700\u957f\u56de\u6587\u5b50\u4e32",c={type:"mdx",permalink:"/website/leetcode/longest-palindromic-substring/",source:"@site/src/pages/leetcode/longest-palindromic-substring/index.md",title:"\u6700\u957f\u56de\u6587\u5b50\u4e32",description:"2022/05/29",frontMatter:{},unlisted:!1},o={},a=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u601d\u8003\u8fc7\u7a0b",id:"\u601d\u8003\u8fc7\u7a0b",level:2},{value:"\u9898\u89e3\u53c2\u8003\uff0c\u52a8\u6001\u89c4\u5212",id:"\u9898\u89e3\u53c2\u8003\u52a8\u6001\u89c4\u5212",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u6700\u957f\u56de\u6587\u5b50\u4e32",children:"\u6700\u957f\u56de\u6587\u5b50\u4e32"}),"\n",(0,t.jsx)(e.p,{children:"2022/05/29"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-palindromic-substring/",children:"https://leetcode.cn/problems/longest-palindromic-substring/"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,t.jsx)(e.p,{children:'\u8f93\u5165\uff1as = "babad"\n\u8f93\u51fa\uff1a"bab"\n\u89e3\u91ca\uff1a"aba" \u540c\u6837\u662f\u7b26\u5408\u9898\u610f\u7684\u7b54\u6848\u3002'}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,t.jsx)(e.p,{children:'\u8f93\u5165\uff1as = "cbbd"\n\u8f93\u51fa\uff1a"bb"'}),"\n",(0,t.jsx)(e.h2,{id:"\u601d\u8003\u8fc7\u7a0b",children:"\u601d\u8003\u8fc7\u7a0b"}),"\n",(0,t.jsx)(e.h3,{id:"\u9898\u89e3\u53c2\u8003\u52a8\u6001\u89c4\u5212",children:"\u9898\u89e3\u53c2\u8003\uff0c\u52a8\u6001\u89c4\u5212"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'var longestPalindrome = function (s) {\n  const len = s.length;\n  // \u5982\u679c\u5b57\u7b26\u4e32\u957f\u5ea6\u4e3a1\uff0c\u5219\u56de\u6587\u5b50\u4e32\u4e3a\u672c\u8eab\n  if (len < 2) {\n    return s;\n  }\n  const dp = [];\n  let maxLen = 1;\n  let begin = 0;\n\n  for (let i = 0; i < len; i++) {\n    if (!dp[i]) {\n      dp[i] = [];\n    }\n    dp[i][i] = true;\n  }\n\n  const charArray = s.split("");\n\n  // \u5047\u8bbe\u5b50\u4e32\u957f\u5ea6\u4e3aL\n  for (let L = 2; L <= len; L++) {\n    // \u7b2ci\u4e2a\u5b57\u6bcd\n    for (let i = 0; i < len; i++) {\n      // j\u4e3a\u7b2ci\u4e2a\u5b57\u6bcd\u52a0\u4e0a\u5b50\u4e32\u957f\u5ea6L - 1\n      const j = L - 1 + i;\n      // \u5f53j\u5927\u4e8e\u7b49\u4e8e\u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u5219\u83b7\u53d6\u4e0d\u5230\u5b57\u7b26\uff0c\u5373\u7ed3\u675f\u904d\u5386\n      if (j >= len) {\n        break;\n      }\n      // \u7b2ci\u4e2a\u5b57\u6bcd\u4e0e\u7b2cj\u4e2a\u5b57\u6bcd\u4e0d\u540c\uff0c\u5219continue\n      if (charArray[i] !== charArray[j]) {\n        dp[i][j] = false;\n        continue;\n      } else {\n        // \u82e5\u7b2ci\u4e2a\u5b57\u6bcd\u4e0e\u7b2cj\u4e2a\u5b57\u6bcd\u7684\u8ddd\u79bb\u5c0f\u4e8e3\u7684\u60c5\u51b5\uff1a\n        // babad\u4e2d\u7684: bab\n        // cbbd\u4e2d\u7684: bb\n        if (j - i < 3) {\n          dp[i][j] = true;\n        } else {\n          // \u5426\u5219\u518d\u5224\u65ad\u5185\u4e00\u5c42\u7684\u5b57\u7b26\u662f\u5426\u76f8\u7b49(\u56de\u6587\u89c4\u5219)\n          // ababa\u4e2d\uff0c\u7b2c0\u4e2a\u5b57\u7b26\u4e0e\u7b2c4\u4e2a\u5b57\u7b26\u76f8\u7b49\uff0c\u63a5\u7740\u5224\u65ad\u7b2c1\u4e2a\u5b57\u7b26\u4e0e\u7b2c3\u4e2a\u5b57\u7b26\u662f\u5426\u76f8\u7b49\n          // \u82e5\u4e0d\u76f8\u7b49\uff0c\u8bf4\u660e0\u52304\u7684\u8fd9\u4e32\u5b57\u7b26\u4e32\u4e0d\u662f\u56de\u6587\n          dp[i][j] = dp[i + 1][j - 1];\n        }\n      }\n      // s[i:j]\u662f\u56de\u6587\u4e32\uff0c\u5224\u65ad\u5176\u957f\u5ea6\u662f\u5426\u5927\u4e8e\u5f53\u524d\u8bb0\u5f55\u7684maxLen\uff0c\u662f\u7684\u8bdd\u5219\u66f4\u65b0maxLen\u4e0ebegin\n      if (dp[i][j] && j - i + 1 > maxLen) {\n        maxLen = j - i + 1;\n        begin = i;\n      }\n    }\n  }\n\n  // \u4ece\u5b57\u7b26\u4e32s\u4e2d\u622a\u53d6begin\u5230begin + maxLen\u7684\u5b50\u4e32\uff0c\u5219\u662f\u6700\u957f\u56de\u6587\u5b50\u4e32\n  return s.substring(begin, begin + maxLen);\n};\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);