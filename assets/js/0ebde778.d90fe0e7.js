"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6333],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=l,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},286:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i}});var r=n(3117),l=(n(7294),n(3905));const o={},a="\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868",c={type:"mdx",permalink:"/website/leetcode/flatten-binary-tree-to-linked-list/",source:"@site/src/pages/leetcode/flatten-binary-tree-to-linked-list/index.md",title:"\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868",description:"2022/11/01",frontMatter:{}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09 s",id:"\u793a\u4f8b\u4e09-s",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u8fed\u4ee3\u524d\u5e8f\u904d\u5386",id:"\u8fed\u4ee3\u524d\u5e8f\u904d\u5386",level:3},{value:"\u5bfb\u627e\u524d\u9a71\u8282\u70b9",id:"\u5bfb\u627e\u524d\u9a71\u8282\u70b9",level:3}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868"},"\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868"),(0,l.kt)("p",null,"2022/11/01"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/"},"https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/"))),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aroot = [1,2,5,3,4,null,6]\n\u8f93\u51fa\uff1a[1,null,2,null,3,null,4,null,5,null,6]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e09-s"},"\u793a\u4f8b\u4e09 s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aroot = [0]\n\u8f93\u51fa\uff1a[0]\n")),(0,l.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u524d\u5e8f\u904d\u5386"},"\u8fed\u4ee3\u524d\u5e8f\u904d\u5386"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var flatten = function (root) {\n  const stack = [];\n  const list = [];\n  let node = root;\n  while (node || stack.length) {\n    while (node) {\n      list.push(node);\n      stack.push(node);\n      node = node.left;\n    }\n    node = stack.pop();\n    node = node.right;\n  }\n  const size = list.length;\n  for (let i = 1; i < size; i++) {\n    const prev = list[i - 1];\n    const curr = list[i];\n    prev.left = null;\n    prev.right = curr;\n  }\n};\n")),(0,l.kt)("h3",{id:"\u5bfb\u627e\u524d\u9a71\u8282\u70b9"},"\u5bfb\u627e\u524d\u9a71\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var flatten = function (root) {\n  let curr = root;\n  while (curr !== null) {\n    if (curr.left !== null) {\n      const next = curr.left;\n      let predecessor = next;\n      while (predecessor.right !== null) {\n        predecessor = predecessor.right;\n      }\n      predecessor.right = curr.right;\n      curr.left = null;\n      curr.right = next;\n    }\n    curr = curr.right;\n  }\n};\n")))}p.isMDXComponent=!0}}]);