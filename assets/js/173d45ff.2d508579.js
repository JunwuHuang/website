"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[940],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3035:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const l={},o="\u5355\u8bcd\u62c6\u5206",c={type:"mdx",permalink:"/website/leetcode/word-break/",source:"@site/src/pages/leetcode/word-break/index.md",title:"\u5355\u8bcd\u62c6\u5206",description:"2022/09/24",frontMatter:{}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:3},{value:"\u6392\u5217\u7ec4\u5408",id:"\u6392\u5217\u7ec4\u5408",level:3}],i={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5355\u8bcd\u62c6\u5206"},"\u5355\u8bcd\u62c6\u5206"),(0,a.kt)("p",null,"2022/09/24"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/word-break/"},"https://leetcode.cn/problems/word-break/"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\u8f93\u5165: s = "leetcode", wordDict = ["leet", "code"]\n\u8f93\u51fa: true\n\u89e3\u91ca: \u8fd4\u56de true \u56e0\u4e3a "leetcode" \u53ef\u4ee5\u7531 "leet" \u548c "code" \u62fc\u63a5\u6210\u3002\n')),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\u8f93\u5165: s = "applepenapple", wordDict = ["apple", "pen"]\n\u8f93\u51fa: true\n\u89e3\u91ca: \u8fd4\u56de true \u56e0\u4e3a "applepenapple" \u53ef\u4ee5\u7531 "apple" "pen" "apple" \u62fc\u63a5\u6210\u3002\n\xa0    \u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u5b57\u5178\u4e2d\u7684\u5355\u8bcd\u3002\n')),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e09"},"\u793a\u4f8b\u4e09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\u8f93\u5165: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]\n\u8f93\u51fa: false\n')),(0,a.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,a.kt)("h3",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var wordBreak = function(s, wordDict) {\n    const length = s.length\n    const set = new Set(wordDict)\n    const dp = new Array(length + 1).fill(false)\n\n    dp[0] = true\n\n    for (let i = 1; i <= length; i ++) {\n        for (let j = 0; j < i; j ++) {\n            if (dp[j] && set.has(s.substring(j, i))) {\n                dp[i] = true\n                break\n            }\n        }\n    }\n\n    return dp[length]\n};\n")),(0,a.kt)("h3",{id:"\u6392\u5217\u7ec4\u5408"},"\u6392\u5217\u7ec4\u5408"),(0,a.kt)("p",null,"\u4ece\u8d77\u70b9\u5230\u7ec8\u70b9\u4e00\u5171\u9700\u8981\u5411\u4e0b\u79fb\u52a8 m - 1 \u6b21\uff0c\u5411\u53f3\u79fb\u52a8 n - 1 \u6b21\uff1b\u56e0\u6b64\u8def\u5f84\u7684\u603b\u6570\uff0c\u7b49\u4e8e\u4ece m + n - 2 \u6b21\u79fb\u52a8\u4e2d\u9009\u62e9 m - 1 \u6b21\u5411\u4e0b\u79fb\u52a8\u7684\u65b9\u6848\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var uniquePaths = function(m, n) {\n    let ans = 1;\n    for (let x = n, y = 1; y < m; ++x, ++y) {\n        ans = Math.floor(ans * x / y);\n    }\n    return ans;\n};\n")))}u.isMDXComponent=!0}}]);