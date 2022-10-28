"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7322],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,v=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1453:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const o={},l="\u5408\u5e76\u533a\u95f4",i={type:"mdx",permalink:"/website/leetcode/merge-intervals/",source:"@site/src/pages/leetcode/merge-intervals/index.md",title:"\u5408\u5e76\u533a\u95f4",description:"2022/08/15",frontMatter:{}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5408\u5e76\u533a\u95f4"},"\u5408\u5e76\u533a\u95f4"),(0,a.kt)("p",null,"2022/08/15"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/merge-intervals/"},"https://leetcode.cn/problems/merge-intervals/"))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aintervals = [[1,3],[2,6],[8,10],[15,18]]\n\u8f93\u51fa\uff1a[[1,6],[8,10],[15,18]]\n\u89e3\u91ca\uff1a\u533a\u95f4 [1,3] \u548c [2,6] \u91cd\u53e0, \u5c06\u5b83\u4eec\u5408\u5e76\u4e3a [1,6].\n")),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aintervals = [[1,4],[4,5]]\n\u8f93\u51fa\uff1a[[1,5]]\n\u89e3\u91ca\uff1a\u533a\u95f4 [1,4] \u548c [4,5] \u53ef\u88ab\u89c6\u4e3a\u91cd\u53e0\u533a\u95f4\u3002\n")),(0,a.kt)("h2",{id:"\u9898\u89e3\u53c2\u8003"},"\u9898\u89e3\u53c2\u8003"),(0,a.kt)("h3",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,a.kt)("p",null,"\u5c06\u6570\u7ec4\u4ee5\u5de6\u7aef\u70b9\u8fdb\u884c\u6392\u5e8f\uff0c\u76f8\u540c\u7684\u5de6\u7aef\u70b9\u5143\u7ec4\u5fc5\u5b9a\u80fd\u5408\u5e76"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar merge = function (intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const ret = [];\n  for (let i = 0; i < intervals.length; i++) {\n    const [L, R] = intervals[i];\n    if (ret.length === 0 || ret[ret.length - 1][1] < L) {\n      ret.push([L, R]);\n      continue;\n    }\n    ret[ret.length - 1][1] = Math.max(ret[ret.length - 1][1], R);\n  }\n  return ret;\n};\n\n")))}p.isMDXComponent=!0}}]);