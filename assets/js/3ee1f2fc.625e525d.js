"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5649],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),s=a,d=m["".concat(l,".").concat(s)]||m[s]||f[s]||u;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<u;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2761:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=t(3117),a=(t(7294),t(3905));const u={},o="\u6c49\u660e\u8ddd\u79bb",c={type:"mdx",permalink:"/website/leetcode/hamming-distance/",source:"@site/src/pages/leetcode/hamming-distance/index.md",title:"\u6c49\u660e\u8ddd\u79bb",description:"2022/10/18",frontMatter:{}},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u4e8c\u5206\u6cd5",id:"\u4e8c\u5206\u6cd5",level:3},{value:"\u672b\u4f4d\u6e05\u96f6",id:"\u672b\u4f4d\u6e05\u96f6",level:3}],i={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6c49\u660e\u8ddd\u79bb"},"\u6c49\u660e\u8ddd\u79bb"),(0,a.kt)("p",null,"2022/10/18"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/hamming-distance/"},"https://leetcode.cn/problems/hamming-distance/"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1ax = 1, y = 4\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\n1   (0 0 0 1)\n4   (0 1 0 0)\n       \u2191   \u2191\n\u4e0a\u9762\u7684\u7bad\u5934\u6307\u51fa\u4e86\u5bf9\u5e94\u4e8c\u8fdb\u5236\u4f4d\u4e0d\u540c\u7684\u4f4d\u7f6e\u3002\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1ax = 3, y = 1\n\u8f93\u51fa\uff1a1\n")),(0,a.kt)("h2",{id:"\u9898\u89e3\u53c2\u8003"},"\u9898\u89e3\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/github_38148039/article/details/109598368"},"C/C++\u4e2d","_","_","builtin_popcount()\u7684\u4f7f\u7528\u53ca\u539f\u7406")),(0,a.kt)("h3",{id:"\u4e8c\u5206\u6cd5"},"\u4e8c\u5206\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number} x\n * @param {number} y\n * @return {number}\n */\nvar hammingDistance = function (x, y) {\n  const popcount = (u) => {\n    u = (u & 0x55555555) + ((u >> 1) & 0x55555555);\n    u = (u & 0x33333333) + ((u >> 2) & 0x33333333);\n    u = (u & 0x0f0f0f0f) + ((u >> 4) & 0x0f0f0f0f);\n    u = (u & 0x00ff00ff) + ((u >> 8) & 0x00ff00ff);\n    u = (u & 0x0000ffff) + ((u >> 16) & 0x0000ffff);\n    return u;\n  };\n  return popcount(x ^ y);\n};\n")),(0,a.kt)("h3",{id:"\u672b\u4f4d\u6e05\u96f6"},"\u672b\u4f4d\u6e05\u96f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number} x\n * @param {number} y\n * @return {number}\n */\nvar hammingDistance = function (x, y) {\n  const popcount = (u) => {\n    let ret = 0;\n    while (u) {\n      u = u & (u - 1);\n      ret++;\n    }\n    return ret;\n  };\n  return popcount(x ^ y);\n};\n")))}p.isMDXComponent=!0}}]);