"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9432],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(t),s=l,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return t?r.createElement(f,u(u({ref:n},c),{},{components:t})):r.createElement(f,u({ref:n},c))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,u=new Array(a);u[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var i=2;i<a;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3237:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return p}});var r=t(3117),l=(t(7294),t(3905));const a={},u="\u6392\u5e8f\u94fe\u8868",o={type:"mdx",permalink:"/website/leetcode/sort-list/",source:"@site/src/pages/leetcode/sort-list/index.md",title:"\u6392\u5e8f\u94fe\u8868",description:"2022/12/04",frontMatter:{}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u4e00",id:"\u793a\u4f8b\u4e00",level:3},{value:"\u793a\u4f8b\u4e8c",id:"\u793a\u4f8b\u4e8c",level:3},{value:"\u793a\u4f8b\u4e09",id:"\u793a\u4f8b\u4e09",level:3},{value:"\u9898\u89e3\u53c2\u8003",id:"\u9898\u89e3\u53c2\u8003",level:2},{value:"\u81ea\u9876\u5411\u4e0b\u5f52\u5e76\u6392\u5e8f",id:"\u81ea\u9876\u5411\u4e0b\u5f52\u5e76\u6392\u5e8f",level:3},{value:"\u81ea\u5e95\u5411\u4e0a\u5f52\u5e76\u6392\u5e8f",id:"\u81ea\u5e95\u5411\u4e0a\u5f52\u5e76\u6392\u5e8f",level:3}],i={toc:p};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6392\u5e8f\u94fe\u8868"},"\u6392\u5e8f\u94fe\u8868"),(0,l.kt)("p",null,"2022/12/04"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/sort-list/"},"https://leetcode.cn/problems/sort-list/"))),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e00"},"\u793a\u4f8b\u4e00"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1ahead = [4,2,1,3]\n\u8f93\u51fa\uff1a[1,2,3,4]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e8c"},"\u793a\u4f8b\u4e8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1ahead = [-1,5,3,4,0]\n\u8f93\u51fa\uff1a[-1,0,3,4,5]\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b\u4e09"},"\u793a\u4f8b\u4e09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u8f93\u5165\uff1ahead = []\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("h2",{id:"\u9898\u89e3\u53c2\u8003"},"\u9898\u89e3\u53c2\u8003"),(0,l.kt)("h3",{id:"\u81ea\u9876\u5411\u4e0b\u5f52\u5e76\u6392\u5e8f"},"\u81ea\u9876\u5411\u4e0b\u5f52\u5e76\u6392\u5e8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const merge = (head1, head2) => {\n    const dummyHead = new ListNode(0);\n    let temp = dummyHead, temp1 = head1, temp2 = head2;\n    while (temp1 !== null && temp2 !== null) {\n        if (temp1.val <= temp2.val) {\n            temp.next = temp1;\n            temp1 = temp1.next;\n        } else {\n            temp.next = temp2;\n            temp2 = temp2.next;\n        }\n        temp = temp.next;\n    }\n    if (temp1 !== null) {\n        temp.next = temp1;\n    } else if (temp2 !== null) {\n        temp.next = temp2;\n    }\n    return dummyHead.next;\n}\n\nconst toSortList = (head, tail) => {\n    if (head === null) {\n        return head;\n    }\n    if (head.next === tail) {\n        head.next = null;\n        return head;\n    }\n    let slow = head, fast = head;\n    while (fast !== tail) {\n        slow = slow.next;\n        fast = fast.next;\n        if (fast !== tail) {\n            fast = fast.next;\n        }\n    }\n    const mid = slow;\n    return merge(toSortList(head, mid), toSortList(mid, tail));\n}\n\nvar sortList = function(head) {\n    return toSortList(head, null);\n};\n")),(0,l.kt)("h3",{id:"\u81ea\u5e95\u5411\u4e0a\u5f52\u5e76\u6392\u5e8f"},"\u81ea\u5e95\u5411\u4e0a\u5f52\u5e76\u6392\u5e8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const merge = (head1, head2) => {\n    const dummyHead = new ListNode(0);\n    let temp = dummyHead, temp1 = head1, temp2 = head2;\n    while (temp1 !== null && temp2 !== null) {\n        if (temp1.val <= temp2.val) {\n            temp.next = temp1;\n            temp1 = temp1.next;\n        } else {\n            temp.next = temp2;\n            temp2 = temp2.next;\n        }\n        temp = temp.next;\n    }\n    if (temp1 !== null) {\n        temp.next = temp1;\n    } else if (temp2 !== null) {\n        temp.next = temp2;\n    }\n    return dummyHead.next;\n}\n\nvar sortList = function(head) {\n    if (head === null) {\n        return head;\n    }\n    let length = 0;\n    let node = head;\n    while (node !== null) {\n        length++;\n        node = node.next;\n    }\n    const dummyHead = new ListNode(0, head);\n    for (let subLength = 1; subLength < length; subLength <<= 1) {\n        let prev = dummyHead, curr = dummyHead.next;\n        while (curr !== null) {\n            let head1 = curr;\n            for (let i = 1; i < subLength && curr.next !== null; i++) {\n                curr = curr.next;\n            }\n            let head2 = curr.next;\n            curr.next = null;\n            curr = head2;\n            for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {\n                curr = curr.next;\n            }\n            let next = null;\n            if (curr !== null) {\n                next = curr.next;\n                curr.next = null;\n            }\n            const merged = merge(head1, head2);\n            prev.next = merged;\n            while (prev.next !== null) {\n                prev = prev.next;\n            }\n            curr = next;\n        }\n    }\n    return dummyHead.next;\n};\n")))}c.isMDXComponent=!0}}]);