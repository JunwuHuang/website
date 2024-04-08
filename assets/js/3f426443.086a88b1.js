"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[763],{3142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var l=t(4848),s=t(8453);const i={},r="\u73af\u5f62\u94fe\u8868 II",c={type:"mdx",permalink:"/website/leetcode/linked-list-cycle-ii/",source:"@site/src/pages/leetcode/linked-list-cycle-ii/index.md",title:"\u73af\u5f62\u94fe\u8868 II",description:"2022/11/21",frontMatter:{},unlisted:!1},d={},a=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u54c8\u5e0c\u8868",id:"\u54c8\u5e0c\u8868",level:3},{value:"\u5feb\u6162\u6307\u9488",id:"\u5feb\u6162\u6307\u9488",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u73af\u5f62\u94fe\u8868-ii",children:"\u73af\u5f62\u94fe\u8868 II"}),"\n",(0,l.jsx)(n.p,{children:"2022/11/21"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/linked-list-cycle-ii/",children:"https://leetcode.cn/problems/linked-list-cycle-ii/"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1ahead = [3,2,0,-4], pos = 1\n\u8f93\u51fa\uff1a\u8fd4\u56de\u7d22\u5f15\u4e3a 1 \u7684\u94fe\u8868\u8282\u70b9\n\u89e3\u91ca\uff1a\u94fe\u8868\u4e2d\u6709\u4e00\u4e2a\u73af\uff0c\u5176\u5c3e\u90e8\u8fde\u63a5\u5230\u7b2c\u4e8c\u4e2a\u8282\u70b9\u3002\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1ahead = [1,2], pos = 0\n\u8f93\u51fa\uff1a\u8fd4\u56de\u7d22\u5f15\u4e3a 0 \u7684\u94fe\u8868\u8282\u70b9\n\u89e3\u91ca\uff1a\u94fe\u8868\u4e2d\u6709\u4e00\u4e2a\u73af\uff0c\u5176\u5c3e\u90e8\u8fde\u63a5\u5230\u7b2c\u4e00\u4e2a\u8282\u70b9\u3002\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"\u8f93\u5165\uff1ahead = [1], pos = -1\n\u8f93\u51fa\uff1a\u8fd4\u56de null\n\u89e3\u91ca\uff1a\u94fe\u8868\u4e2d\u6ca1\u6709\u73af\u3002\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3\u53c2\u8003",children:"\u9898\u89e3\u53c2\u8003"}),"\n",(0,l.jsx)(n.h3,{id:"\u54c8\u5e0c\u8868",children:"\u54c8\u5e0c\u8868"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar detectCycle = function (head) {\n  const set = new Set();\n  while (head !== null) {\n    if (set.has(head)) {\n      return head;\n    }\n    set.add(head);\n    head = head.next;\n  }\n  return null;\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5feb\u6162\u6307\u9488",children:"\u5feb\u6162\u6307\u9488"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar detectCycle = function (head) {\n  if (head === null) {\n    return null;\n  }\n  let slow = head;\n  let fast = head;\n  while (fast !== null) {\n    slow = slow.next;\n    if (fast.next === null) {\n      return null;\n    } else {\n      fast = fast.next.next;\n    }\n    if (slow === fast) {\n      let ptr = head;\n      while (ptr !== slow) {\n        ptr = ptr.next;\n        slow = slow.next;\n      }\n      return ptr;\n    }\n  }\n  return null;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var l=t(6540);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);