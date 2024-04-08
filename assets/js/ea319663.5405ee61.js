"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4289],{8108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var r=t(4848),i=t(8453);const l={},a="\u63a5\u96e8\u6c34",h={type:"mdx",permalink:"/website/leetcode/trapping-rain-water/",source:"@site/src/pages/leetcode/trapping-rain-water/index.md",title:"\u63a5\u96e8\u6c34",description:"2022/08/02",frontMatter:{},unlisted:!1},s={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u63a5\u96e8\u6c34",children:"\u63a5\u96e8\u6c34"}),"\n",(0,r.jsx)(n.p,{children:"2022/08/02"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/trapping-rain-water/",children:"https://leetcode.cn/problems/trapping-rain-water/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aheight = [0,1,0,2,1,0,1,3,2,1,2,1]\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a\u4e0a\u9762\u662f\u7531\u6570\u7ec4 [0,1,0,2,1,0,1,3,2,1,2,1] \u8868\u793a\u7684\u9ad8\u5ea6\u56fe\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u63a5 6 \u4e2a\u5355\u4f4d\u7684\u96e8\u6c34\uff08\u84dd\u8272\u90e8\u5206\u8868\u793a\u96e8\u6c34\uff09\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1aheight = [4,2,0,3,2,5]\n\u8f93\u51fa\uff1a9\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,r.jsx)(n.h3,{id:"\u53cc\u6307\u9488",children:"\u53cc\u6307\u9488"}),"\n",(0,r.jsx)(n.p,{children:"\u5de6\u53f3\u4e00\u8d77\u5f80\u4e2d\u95f4\u8d70\uff0c\u5982\u679c\u51fa\u73b0\u9ad8\u5ea6\u5dee\uff0c\u5219\u5c06\u96e8\u6c34\u9762\u79ef\u7d2f\u52a0\u8d77\u6765"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var trap = function (height) {\n    let ans = 0;\n    let left = 0, right = height.length - 1;\n    let leftMax = 0, rightMax = 0;\n    while (left < right) {\n        leftMax = Math.max(leftMax, height[left]);\n        rightMax = Math.max(rightMax, height[right]);\n        if (height[left] < height[right]) {\n            ans += leftMax - height[left];\n            ++left;\n        } else {\n            ans += rightMax - height[right];\n            --right;\n        }\n    }\n    return ans;\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>h});var r=t(6540);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);