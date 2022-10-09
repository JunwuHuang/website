"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5048],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9496:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:4},i="\u7b2c\u56db\u5468",l={unversionedId:"week4",id:"week4",title:"\u7b2c\u56db\u5468",description:"2022-06-13 ~ 2022-06-19",source:"@site/docs/week4.md",sourceDirName:".",slug:"/week4",permalink:"/website/docs/week4",draft:!1,editUrl:"https://github.com/JunwuHuang/tree/main/packages/create-docusaurus/templates/shared/docs/week4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e09\u5468",permalink:"/website/docs/week3"},next:{title:"\u7b2c\u4e94\u5468",permalink:"/website/docs/week5"}},c={},u=[{value:"Review",id:"review",level:2},{value:"Algorithm 1",id:"algorithm-1",level:2},{value:"Algorithm 2",id:"algorithm-2",level:2},{value:"Tip",id:"tip",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u56db\u5468"},"\u7b2c\u56db\u5468"),(0,a.kt)("p",null,"2022-06-13 ~ 2022-06-19"),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://alexkondov.com/reading-source-code-react-query/"},"Reading Source Code: React-Query")),(0,a.kt)("p",null,"\u672c\u6587\u8bb2\u8ff0\u4e86\u9605\u8bfb React-Query \u6e90\u7801\u65f6\u5019\u5bf9\u5176\u601d\u8def\u7684\u7406\u89e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"React-Query \u8fd9\u4e2a\u5e93\u5728\u76ee\u5f55\u7ed3\u6784\u4e0a\u91c7\u7528\u4e86\u524d\u7aef\u5f00\u53d1\u6240\u719f\u6089\u7684\u7ed3\u6784\uff0c\u4fbf\u4e8e\u5f00\u53d1\u4eba\u5458\u67e5\u9605\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u5e93\u7684\u601d\u8def\u662f\u5c06\u529f\u80fd\u62c6\u5206\u4e3a core \u548c react hooks\uff0c\u5176\u4e2d core \u91c7\u7528\u9762\u5411\u5bf9\u8c61\u7684\u601d\u8def\u53bb\u7f16\u7801\uff0c\u800c react hooks \u5219\u4f5c\u4e3a bridge \u5de5\u5177\uff0c\u5bf9\u5916\u66b4\u9732\u7b80\u5355\u6613\u7528\u7684 api\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b83\u7684 hooks api \u7528\u91cd\u8f7d\u7684\u5b9e\u73b0\uff0c\u53bb\u8fce\u5408\u5f00\u53d1\u8005\u4eec\u4e0d\u540c\u7f16\u7801\u4e60\u60ef\u7684\u9700\u6c42\uff0c\u8fd9\u6837\u5f00\u53d1\u8005\u4eec\u5728\u4f7f\u7528\u7684\u65f6\u5019\u53bb\u53ef\u4ee5\u5ffd\u7565\u9ed8\u8ba4\u552f\u4e00\u7684\u53c2\u6570\u7b7e\u540d\u4e86\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6e90\u7801\u4e2d\uff0c\u8be5\u5e93\u5c06\u9009\u9879\u53c2\u6570 options \u5f53\u4f5c\u7c7b\u4f3c\u4e8e context \u7684\u601d\u8def\u5411\u4e0b\u4f20\u9012\uff0c\u53ef\u4ee5\u907f\u514d\u53c2\u6570\u7b7e\u540d\u8fc7\u957f\u5e26\u6765\u7684\u9605\u8bfb\u96be\u5ea6\uff0c\u6613\u4e8e\u7ef4\u62a4\u3002"))),(0,a.kt)("h2",{id:"algorithm-1"},"Algorithm 1"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JunwuHuang/leetcode-daily/blob/master/generate-parentheses/%E6%8B%AC%E5%8F%B7%E7%94%9F%E6%88%90.md"},"\u62ec\u53f7\u751f\u6210")),(0,a.kt)("h2",{id:"algorithm-2"},"Algorithm 2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JunwuHuang/leetcode-daily/blob/master/remove-nth-node-from-end-of-list/%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%AC%20N%20%E4%B8%AA%E7%BB%93%E7%82%B9.md"},"\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c N \u4e2a\u7ed3\u70b9")),(0,a.kt)("h2",{id:"tip"},"Tip"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/#:~:text=Setting%20the%20margin%20property%20on%20a%20flex%20child,the%20top.%20That%20last%20%E2%80%9Ctop%E2%80%9D%20should%20be%20%E2%80%9Cbottom%E2%80%9D"},"The peculiar magic of flexbox and auto margins")),(0,a.kt)("p",null,"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\uff0c\u4f7f\u7528 flex \u5e03\u5c40\u7684\u65f6\u5019\u7ecf\u5e38\u4f1a\u9047\u5230\u7c7b\u4f3c\u8fd9\u79cd\u7684\u7ed3\u679c\uff0c\u524d\u9762\u7684\u5b50\u8282\u70b9\u90fd\u662f flex-start\uff0c\u800c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u5e0c\u671b\u5b83\u51fa\u73b0\u5728\u6700\u540e\u9762\uff0c\u4f46\u662f\u5728 mdn \u7684 flex \u6559\u7a0b\u4e2d\u5e76\u6ca1\u6709\u627e\u5230\u76f8\u5173\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="parent">\n  <div class="child">\n    <div class="child">\n      <div class="child the-last-should-appear-in-the-end"></div>\n    </div>\n  </div>\n</div>\n')),(0,a.kt)("p",null,"\u4f46\u662f\u5199\u4ee3\u7801\u5c31\u662f\u4e0d\u65ad\u5b9e\u8df5\u7684\u8fc7\u7a0b\uff0c\u5728\u770b\u5230\u8fd9\u7bc7\u6587\u7ae0\u4e4b\u524d\u4e5f\u53d1\u73b0\u4e86\u540c\u6837\u7684\u89e3\u6cd5\uff0c\u5c31\u662f\u7ed9\u6700\u540e\u4e00\u4e2a\u5b50\u8282\u70b9\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"margin-left: auto;"),"\u5373\u53ef"))}s.isMDXComponent=!0}}]);