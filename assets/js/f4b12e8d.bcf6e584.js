"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5445],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return s}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),s=o,m=f["".concat(p,".").concat(s)]||f[s]||u[s]||i;return n?t.createElement(m,a(a({ref:r},d),{},{components:n})):t.createElement(m,a({ref:r},d))}));function s(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7206:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=n(3117),o=(n(7294),n(3905));const i={},a="\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811",l={type:"mdx",permalink:"/website/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal/",source:"@site/src/pages/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal/index.md",title:"\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811",description:"2022/11/18",frontMatter:{}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3}],c={toc:p};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"},"\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"),(0,o.kt)("p",null,"2022/11/18"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\n\u8f93\u51fa: [3,9,20,null,null,15,7]\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165: preorder = [-1], inorder = [-1]\n\u8f93\u51fa: [-1]\n")),(0,o.kt)("h2",{id:"\u9898\u89e3\u53c2\u8003"},"\u9898\u89e3\u53c2\u8003"),(0,o.kt)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} preorder\n * @param {number[]} inorder\n * @return {TreeNode}\n */\nvar buildTree = function (preorder, inorder) {\n  const n = preorder.length;\n  const indexMap = new Map();\n  for (let i = 0; i < n; i++) {\n    indexMap.set(inorder[i], i);\n  }\n  const fn = (\n    preorder,\n    inorder,\n    preorder_left,\n    preorder_right,\n    inorder_left,\n    inorder_right\n  ) => {\n    if (preorder_left > preorder_right) {\n      return null;\n    }\n    const preorder_root = preorder_left;\n    const inorder_root = indexMap.get(preorder[preorder_root]);\n\n    const root = new TreeNode(preorder[preorder_root]);\n    const size_left_subtree = inorder_root - inorder_left;\n\n    root.left = fn(\n      preorder,\n      inorder,\n      preorder_left + 1,\n      preorder_left + size_left_subtree,\n      inorder_left,\n      inorder_root - 1\n    );\n\n    root.right = fn(\n      preorder,\n      inorder,\n      preorder_left + size_left_subtree + 1,\n      preorder_right,\n      inorder_root + 1,\n      inorder_right\n    );\n\n    return root;\n  };\n  return fn(preorder, inorder, 0, n - 1, 0, n - 1);\n};\n")))}d.isMDXComponent=!0}}]);