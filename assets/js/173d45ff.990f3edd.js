"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6595],{9716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=t(4848),l=t(8453);const s={},c="\u5355\u8bcd\u62c6\u5206",d={type:"mdx",permalink:"/website/leetcode/word-break/",source:"@site/src/pages/leetcode/word-break/index.md",title:"\u5355\u8bcd\u62c6\u5206",description:"2022/09/24",frontMatter:{},unlisted:!1},a={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:3},{value:"\u6392\u5217\u7ec4\u5408",id:"\u6392\u5217\u7ec4\u5408",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5355\u8bcd\u62c6\u5206",children:"\u5355\u8bcd\u62c6\u5206"}),"\n",(0,r.jsx)(n.p,{children:"2022/09/24"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/word-break/",children:"https://leetcode.cn/problems/word-break/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'\u8f93\u5165: s = "leetcode", wordDict = ["leet", "code"]\n\u8f93\u51fa: true\n\u89e3\u91ca: \u8fd4\u56de true \u56e0\u4e3a "leetcode" \u53ef\u4ee5\u7531 "leet" \u548c "code" \u62fc\u63a5\u6210\u3002\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'\u8f93\u5165: s = "applepenapple", wordDict = ["apple", "pen"]\n\u8f93\u51fa: true\n\u89e3\u91ca: \u8fd4\u56de true \u56e0\u4e3a "applepenapple" \u53ef\u4ee5\u7531 "apple" "pen" "apple" \u62fc\u63a5\u6210\u3002\n\xa0    \u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u5b57\u5178\u4e2d\u7684\u5355\u8bcd\u3002\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'\u8f93\u5165: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]\n\u8f93\u51fa: false\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,r.jsx)(n.h3,{id:"\u52a8\u6001\u89c4\u5212",children:"\u52a8\u6001\u89c4\u5212"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var wordBreak = function(s, wordDict) {\n    const length = s.length\n    const set = new Set(wordDict)\n    const dp = new Array(length + 1).fill(false)\n\n    dp[0] = true\n\n    for (let i = 1; i <= length; i ++) {\n        for (let j = 0; j < i; j ++) {\n            if (dp[j] && set.has(s.substring(j, i))) {\n                dp[i] = true\n                break\n            }\n        }\n    }\n\n    return dp[length]\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6392\u5217\u7ec4\u5408",children:"\u6392\u5217\u7ec4\u5408"}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u8d77\u70b9\u5230\u7ec8\u70b9\u4e00\u5171\u9700\u8981\u5411\u4e0b\u79fb\u52a8 m - 1 \u6b21\uff0c\u5411\u53f3\u79fb\u52a8 n - 1 \u6b21\uff1b\u56e0\u6b64\u8def\u5f84\u7684\u603b\u6570\uff0c\u7b49\u4e8e\u4ece m + n - 2 \u6b21\u79fb\u52a8\u4e2d\u9009\u62e9 m - 1 \u6b21\u5411\u4e0b\u79fb\u52a8\u7684\u65b9\u6848\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var uniquePaths = function(m, n) {\n    let ans = 1;\n    for (let x = n, y = 1; y < m; ++x, ++y) {\n        ans = Math.floor(ans * x / y);\n    }\n    return ans;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(6540);const l={},s=r.createContext(l);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);