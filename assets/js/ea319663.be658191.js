"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6534],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,g=s["".concat(c,".").concat(h)]||s[h]||f[h]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},568:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={},l="\u63a5\u96e8\u6c34",o={type:"mdx",permalink:"/website/leetcode/trapping-rain-water/",source:"@site/src/pages/leetcode/trapping-rain-water/index.md",title:"\u63a5\u96e8\u6c34",description:"2022/08/02",frontMatter:{}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u63a5\u96e8\u6c34"},"\u63a5\u96e8\u6c34"),(0,a.kt)("p",null,"2022/08/02"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/trapping-rain-water/"},"https://leetcode.cn/problems/trapping-rain-water/"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aheight = [0,1,0,2,1,0,1,3,2,1,2,1]\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a\u4e0a\u9762\u662f\u7531\u6570\u7ec4 [0,1,0,2,1,0,1,3,2,1,2,1] \u8868\u793a\u7684\u9ad8\u5ea6\u56fe\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u63a5 6 \u4e2a\u5355\u4f4d\u7684\u96e8\u6c34\uff08\u84dd\u8272\u90e8\u5206\u8868\u793a\u96e8\u6c34\uff09\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aheight = [4,2,0,3,2,5]\n\u8f93\u51fa\uff1a9\n")),(0,a.kt)("h2",{id:"\u9898\u89e3\u53c2\u8003"},"\u9898\u89e3\u53c2\u8003"),(0,a.kt)("h3",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),(0,a.kt)("p",null,"\u5de6\u53f3\u4e00\u8d77\u5f80\u4e2d\u95f4\u8d70\uff0c\u5982\u679c\u51fa\u73b0\u9ad8\u5ea6\u5dee\uff0c\u5219\u5c06\u96e8\u6c34\u9762\u79ef\u7d2f\u52a0\u8d77\u6765"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var trap = function (height) {\n    let ans = 0;\n    let left = 0, right = height.length - 1;\n    let leftMax = 0, rightMax = 0;\n    while (left < right) {\n        leftMax = Math.max(leftMax, height[left]);\n        rightMax = Math.max(rightMax, height[right]);\n        if (height[left] < height[right]) {\n            ans += leftMax - height[left];\n            ++left;\n        } else {\n            ans += rightMax - height[right];\n            --right;\n        }\n    }\n    return ans;\n};\n")))}u.isMDXComponent=!0}}]);