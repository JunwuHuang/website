"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3466],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return f}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=l,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},i),{},{components:t})):r.createElement(m,a({ref:n},i))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6288:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return a},default:function(){return i},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=t(3117),l=(t(7294),t(3905));const o={},a="\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811",c={type:"mdx",permalink:"/website/leetcode/convert-bst-to-greater-tree/",source:"@site/src/pages/leetcode/convert-bst-to-greater-tree/index.md",title:"\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811",description:"2022/11/01",frontMatter:{}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u793a\u4f8b\u56db",id:"\u793a\u4f8b\u56db",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"dfs",id:"dfs",level:3},{value:"bfs",id:"bfs",level:3}],s={toc:u};function i(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811"},"\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811"),(0,l.kt)("p",null,"2022/11/01"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/convert-bst-to-greater-tree/"},"https://leetcode.cn/problems/convert-bst-to-greater-tree/"))),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1a[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n\u8f93\u51fa\uff1a[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aroot = [0,null,1]\n\u8f93\u51fa\uff1a[1,null,1]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e09"},"\u793a\u4f8b\u4e09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aroot = [1,0,2]\n\u8f93\u51fa\uff1a[3,3,2]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u56db"},"\u793a\u4f8b\u56db"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1aroot = [3,2,4,1]\n\u8f93\u51fa\uff1a[7,9,4,10]\n")),(0,l.kt)("h2",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,l.kt)("h3",{id:"dfs"},"dfs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var convertBST = function (root) {\n  let sum = 0;\n  const dfs = (node) => {\n    if (node) {\n      dfs(node.right);\n      sum += node.val;\n      node.val = sum;\n      dfs(node.left);\n    }\n  };\n  dfs(root);\n  return root;\n};\n")),(0,l.kt)("h3",{id:"bfs"},"bfs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var getSuccessor = (node) => {\n  let succ = node.right;\n  while (succ.left && succ.left !== node) {\n    succ = succ.left;\n  }\n  return succ\n}\nvar convertBST = function (root) {\n  let sum = 0;\n  let node = root;\n  while (node) {\n    if (node.right) {\n      const succ = getSuccessor(node)\n      if (succ.left) {\n        succ.left = null;\n        sum += node.val;\n        node.val = sum\n        node = node.left;\n      } else {\n        succ.left = node;\n        node = node.right;\n      }\n    } else {\n      sum += node.val;\n      node.val = sum;\n      node = node.left;\n    }\n  }\n  return root\n};\n")))}i.isMDXComponent=!0}}]);