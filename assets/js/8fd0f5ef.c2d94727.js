"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9577],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,u(u({ref:n},p),{},{components:t})):r.createElement(d,u({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},673:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=t(3117),o=(t(7294),t(3905));const a={},u="\u6253\u5bb6\u52ab\u820d",l={type:"mdx",permalink:"/website/leetcode/house-robber/",source:"@site/src/pages/leetcode/house-robber/index.md",title:"\u6253\u5bb6\u52ab\u820d",description:"2022/09/30",frontMatter:{}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u52a8\u6001\u89c4\u5212",id:"\u52a8\u6001\u89c4\u5212",level:3},{value:"\u6eda\u52a8\u6570\u7ec4",id:"\u6eda\u52a8\u6570\u7ec4",level:3}],i={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6253\u5bb6\u52ab\u820d"},"\u6253\u5bb6\u52ab\u820d"),(0,o.kt)("p",null,"2022/09/30"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/house-robber/"},"https://leetcode.cn/problems/house-robber/"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1a[1,2,3,1]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u5077\u7a83 1 \u53f7\u623f\u5c4b (\u91d1\u989d = 1) \uff0c\u7136\u540e\u5077\u7a83 3 \u53f7\u623f\u5c4b (\u91d1\u989d = 3)\u3002\n\xa0    \u5077\u7a83\u5230\u7684\u6700\u9ad8\u91d1\u989d = 1 + 3 = 4 \u3002\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1a[2,7,9,3,1]\n\u8f93\u51fa\uff1a12\n\u89e3\u91ca\uff1a\u5077\u7a83 1 \u53f7\u623f\u5c4b (\u91d1\u989d = 2), \u5077\u7a83 3 \u53f7\u623f\u5c4b (\u91d1\u989d = 9)\uff0c\u63a5\u7740\u5077\u7a83 5 \u53f7\u623f\u5c4b (\u91d1\u989d = 1)\u3002\n\xa0    \u5077\u7a83\u5230\u7684\u6700\u9ad8\u91d1\u989d = 2 + 9 + 1 = 12 \u3002\n")),(0,o.kt)("h2",{id:"\u9898\u89e3\u53c2\u8003"},"\u9898\u89e3\u53c2\u8003"),(0,o.kt)("h3",{id:"\u52a8\u6001\u89c4\u5212"},"\u52a8\u6001\u89c4\u5212"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar rob = function (nums) {\n  const n = nums.length;\n  if (n === 0) {\n    return 0;\n  } else if (n === 1) {\n    return nums[0];\n  }\n  const dp = new Array(n);\n  dp[0] = nums[0];\n  dp[1] = Math.max(nums[0], nums[1]);\n\n  for (let i = 2; i < n; i++) {\n    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);\n  }\n\n  return dp[n - 1];\n};\n")),(0,o.kt)("h3",{id:"\u6eda\u52a8\u6570\u7ec4"},"\u6eda\u52a8\u6570\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var rob = function (nums) {\n  const n = nums.length;\n  if (n === 0) {\n    return 0;\n  } else if (n === 1) {\n    return nums[0];\n  }\n  let first = nums[0];\n  let second = Math.max(first, nums[1]);\n\n  for (let i = 2; i < n; i++) {\n    const temp = second;\n    second = Math.max(dp[i - 2] + nums[i], dp[i - 1]);\n    first = temp;\n  }\n\n  return second;\n};\n")))}p.isMDXComponent=!0}}]);