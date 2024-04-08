"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5475],{3072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(4848),i=t(8453);const s={},o="\u5b9e\u73b0 Trie (\u524d\u7f00\u6811)",c={type:"mdx",permalink:"/website/leetcode/implement-trie-prefix-tree/",source:"@site/src/pages/leetcode/implement-trie-prefix-tree/index.md",title:"\u5b9e\u73b0 Trie (\u524d\u7f00\u6811)",description:"2022/12/11",frontMatter:{},unlisted:!1},l={},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u5b57\u5178\u6811",id:"\u5b57\u5178\u6811",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5b9e\u73b0-trie-\u524d\u7f00\u6811",children:"\u5b9e\u73b0 Trie (\u524d\u7f00\u6811)"}),"\n",(0,r.jsx)(n.p,{children:"2022/12/11"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/implement-trie-prefix-tree/",children:"https://leetcode.cn/problems/implement-trie-prefix-tree/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'\u8f93\u5165\n["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\n\u8f93\u51fa\n[null, null, true, false, true, null, true]\n\n\u89e3\u91ca\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // \u8fd4\u56de True\ntrie.search("app");     // \u8fd4\u56de False\ntrie.startsWith("app"); // \u8fd4\u56de True\ntrie.insert("app");\ntrie.search("app");     // \u8fd4\u56de True\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,r.jsx)(n.h3,{id:"\u5b57\u5178\u6811",children:"\u5b57\u5178\u6811"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var Trie = function() {\n    this.children = {};\n};\n\nTrie.prototype.insert = function(word) {\n    let node = this.children;\n    for (const ch of word) {\n        if (!node[ch]) {\n            node[ch] = {};\n        }\n        node = node[ch];\n    }\n    node.isEnd = true;\n};\n\nTrie.prototype.searchPrefix = function(prefix) {\n    let node = this.children;\n    for (const ch of prefix) {\n        if (!node[ch]) {\n            return false;\n        }\n        node = node[ch];\n    }\n    return node;\n}\n\nTrie.prototype.search = function(word) {\n    const node = this.searchPrefix(word);\n    return node !== undefined && node.isEnd !== undefined;\n};\n\nTrie.prototype.startsWith = function(prefix) {\n    return this.searchPrefix(prefix);\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);