"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3879],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9652:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i}});var r=n(3117),a=(n(7294),n(3905));const o={},l="\u56de\u6587\u5b50\u4e32",c={type:"mdx",permalink:"/website/leetcode/palindromic-substrings/",source:"@site/src/pages/leetcode/palindromic-substrings/index.md",title:"\u56de\u6587\u5b50\u4e32",description:"2022/10/08",frontMatter:{}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u4e2d\u5fc3\u6269\u5c55",id:"\u4e2d\u5fc3\u6269\u5c55",level:3}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56de\u6587\u5b50\u4e32"},"\u56de\u6587\u5b50\u4e32"),(0,a.kt)("p",null,"2022/10/08"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/palindromic-substrings/"},"https://leetcode.cn/problems/palindromic-substrings/"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\u8f93\u5165\uff1as = "abc"\n\u8f93\u51fa\uff1a3\n\u89e3\u91ca\uff1a\u4e09\u4e2a\u56de\u6587\u5b50\u4e32: "a", "b", "c"\n')),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\u8f93\u5165\uff1as = "aaa"\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a6\u4e2a\u56de\u6587\u5b50\u4e32: "a", "a", "a", "aa", "aa", "aaa"\n')),(0,a.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,a.kt)("h3",{id:"\u4e2d\u5fc3\u6269\u5c55"},"\u4e2d\u5fc3\u6269\u5c55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var countSubstrings = function (s) {\n  const n = s.length;\n  let ans = 0;\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j <= 1; j++) {\n      let l = i\n      let r = i + j\n      while (l >= 0 && r < n && s.chartAt(l--) === s.chartAt(r++)) {\n        ans++\n      }\n    }\n  }\n  return ans;\n};\n")))}p.isMDXComponent=!0}}]);