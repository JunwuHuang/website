"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[372],{1009:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=l(4848),s=l(8453);const t={},d="\u4e24\u6570\u76f8\u52a0",i={type:"mdx",permalink:"/website/leetcode/add-two-numbers/",source:"@site/src/pages/leetcode/add-two-numbers/index.md",title:"\u4e24\u6570\u76f8\u52a0",description:"2022/05/22",frontMatter:{},unlisted:!1},a={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u601d\u8003\u8fc7\u7a0b",id:"\u601d\u8003\u8fc7\u7a0b",level:2},{value:"\u521d\u6b65\u5b9e\u73b0",id:"\u521d\u6b65\u5b9e\u73b0",level:3},{value:"ListNode\u662f\u4ec0\u4e48",id:"listnode\u662f\u4ec0\u4e48",level:3},{value:"\u8c03\u6574\u540e\u7684\u4ee3\u7801",id:"\u8c03\u6574\u540e\u7684\u4ee3\u7801",level:3}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u4e24\u6570\u76f8\u52a0",children:"\u4e24\u6570\u76f8\u52a0"}),"\n",(0,r.jsx)(e.p,{children:"2022/05/22"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/add-two-numbers/",children:"https://leetcode.cn/problems/add-two-numbers/"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e00",children:"\u793a\u4f8b\u4e00"}),"\n",(0,r.jsx)(e.p,{children:"\u8f93\u5165\uff1al1 = [2,4,3], l2 = [5,6,4]\n\u8f93\u51fa\uff1a[7,0,8]\n\u89e3\u91ca\uff1a342 + 465 = 807."}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e8c",children:"\u793a\u4f8b\u4e8c"}),"\n",(0,r.jsx)(e.p,{children:"\u8f93\u5165\uff1al1 = [0], l2 = [0]\n\u8f93\u51fa\uff1a[0]"}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u4e09",children:"\u793a\u4f8b\u4e09"}),"\n",(0,r.jsx)(e.p,{children:"\u8f93\u5165\uff1al1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n\u8f93\u51fa\uff1a[8,9,9,9,0,0,0,1]"}),"\n",(0,r.jsx)(e.h2,{id:"\u601d\u8003\u8fc7\u7a0b",children:"\u601d\u8003\u8fc7\u7a0b"}),"\n",(0,r.jsx)(e.h3,{id:"\u521d\u6b65\u5b9e\u73b0",children:"\u521d\u6b65\u5b9e\u73b0"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u7528\u4e00\u4e2ahead\u8bb0\u5f55\u5f53\u524d\u7684\u4f4d\u7f6e\uff08\u4e2a\u4f4d\u3001\u5341\u4f4d\u3001\u767e\u4f4d\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u53e6\u5916\u518d\u7528\u4e00\u4e2a\u53d8\u91cfcarry\u8bb0\u5f55\u4e24\u6570\u76f8\u52a0\u662f\u5426\u9700\u8981\u8fdb\u4e00"}),"\n",(0,r.jsx)(e.li,{children:"\u4e24\u6570\u76f8\u52a0\uff0c\u540c\u4e00\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u4e24\u6570\u76f8\u52a0\uff0c\u5982\u679c\u6709\u8fdb\u4f4d\uff0c\u5219\u5c06\u76f8\u52a0\u7ed3\u679c\u51cf\u53bb10\u518d\u585e\u5230\u6570\u7ec4\u91cc"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"var addTwoNumbers = function (l1, l2) {\n    var head = 0\n    var result = []\n    var carry = false\n    while (head < l1.length || head < l2.length) {\n        var sum = (l1[head] || 0) + (l2[head] || 0)\n        if (carry) {\n            sum += 1\n            carry = false\n        }\n        if (sum >= 10) {\n            carry = true\n            sum -= 10\n        }\n        result.push(sum)\n        head += 1\n    }\n    if (carry) {\n        result.push(1)\n    }\n    return result\n};\n"})}),"\n",(0,r.jsx)(e.h3,{id:"listnode\u662f\u4ec0\u4e48",children:"ListNode\u662f\u4ec0\u4e48"}),"\n",(0,r.jsx)(e.p,{children:"ListNode\u662f\u5bf9\u4e8e\u94fe\u8868\u7684\u5b9e\u73b0\uff0c1 -> 2 -> 3"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e0a\u8ff0\u4ee3\u7801\u63d0\u4ea4\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u6ca1\u6709\u4f7f\u7528\u8fd9\u4e2a\u94fe\u8868\u7ed3\u6784\uff0c\u8c03\u6574\u4e00\u4e0b\u4ee3\u7801"}),"\n",(0,r.jsx)(e.h3,{id:"\u8c03\u6574\u540e\u7684\u4ee3\u7801",children:"\u8c03\u6574\u540e\u7684\u4ee3\u7801"}),"\n",(0,r.jsx)(e.p,{children:"\u8c03\u6574\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e\u5bf9ListNode\u7684\u7ed3\u6784\u4e0d\u719f\u6089\uff0c\u5c61\u5c61\u78b0\u58c1\uff0c\u5927\u81f4\u5c31\u662f\u8981\u5229\u7528head\u6307\u9488\u53bb\u64cd\u4f5cnext"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"var addTwoNumbers = function (l1, l2) {\n    var n1 = l1\n    var n2 = l2\n    var carry = false\n    var result\n    var head\n    while (n1 !== null || n2 !== null) {\n        var sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0)\n        if (carry) {\n            sum += 1\n            carry = false\n        }\n        if (sum >= 10) {\n            carry = true\n            sum -= 10\n        }\n        if (head) {\n            head.next = new ListNode(sum)\n            head = head.next\n        } else {\n            head = result = new ListNode(sum)\n        }\n        n1 = n1 ? n1.next : n1\n        n2 = n2 ? n2.next : n2\n    }\n    if (carry) {\n        head.next = new ListNode(1)\n    }\n    return result\n};\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>d,x:()=>i});var r=l(6540);const s={},t=r.createContext(s);function d(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);