"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2275],{1492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=t(4848),r=t(8453);const c={},a="\u6700\u5927\u5b50\u6570\u7ec4\u548c",l={type:"mdx",permalink:"/website/leetcode/maximum-subarray/",source:"@site/src/pages/leetcode/maximum-subarray/index.md",title:"\u6700\u5927\u5b50\u6570\u7ec4\u548c",description:"2022/08/02",frontMatter:{},unlisted:!1},i={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6700\u5927\u5b50\u6570\u7ec4\u548c",children:"\u6700\u5927\u5b50\u6570\u7ec4\u548c"}),"\n",(0,s.jsx)(n.p,{children:"2022/08/02"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-subarray/",children:"https://leetcode.cn/problems/maximum-subarray/"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1anums = [-2,1,-3,4,-1,2,1,-5,4]\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a\u8fde\u7eed\u5b50\u6570\u7ec4 [4,-1,2,1] \u7684\u548c\u6700\u5927\uff0c\u4e3a 6 \u3002\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1anums = [1]\n\u8f93\u51fa\uff1a1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1anums = [5,4,-1,7,8]\n\u8f93\u51fa\uff1a23\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,s.jsx)(n.h3,{id:"\u52a8\u6001\u89c4\u5212",children:"\u52a8\u6001\u89c4\u5212"}),"\n",(0,s.jsx)(n.p,{children:"\u5173\u952e\u5b57\uff1a\u8fde\u7eed\u3001\u6700\u5927\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var maxSubArray = function (nums) {\n    let pre = 0, maxAns = nums[0];\n    nums.forEach((x) => {\n        pre = Math.max(pre + x, x);\n        maxAns = Math.max(maxAns, pre);\n    });\n    return maxAns;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const r={},c=s.createContext(r);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);