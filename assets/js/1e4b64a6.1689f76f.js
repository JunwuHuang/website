"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6408],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:1},o="\u7b2c\u4e00\u5468",l={unversionedId:"week1",id:"week1",title:"\u7b2c\u4e00\u5468",description:"20220-05-23 ~ 2022-05-29",source:"@site/docs/week1.md",sourceDirName:".",slug:"/week1",permalink:"/website/docs/week1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6bcf\u5468\u79ef\u7d2f",permalink:"/website/docs/"},next:{title:"\u7b2c\u4e8c\u5468",permalink:"/website/docs/week2"}},u={},c=[{value:"Algorithm",id:"algorithm",level:2},{value:"Review",id:"review",level:2},{value:"\u8bc4\u8bba",id:"\u8bc4\u8bba",level:3},{value:"Tip",id:"tip",level:2},{value:"Algorithm",id:"algorithm-1",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c\u4e00\u5468"},"\u7b2c\u4e00\u5468"),(0,a.kt)("p",null,"20220-05-23 ~ 2022-05-29"),(0,a.kt)("h2",{id:"algorithm"},"Algorithm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JunwuHuang/leetcode-daily/blob/master/add-two-numbers/%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0.md"},"\u4e24\u6570\u76f8\u52a0")),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://typeofnan.dev/what-the-useevent-react-hook-is-and-isnt/"},"What the useEvent React hook is (and isn't)")),(0,a.kt)("h3",{id:"\u8bc4\u8bba"},"\u8bc4\u8bba"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u4e2d\u5217\u51fa\u4e86\u4e24\u79cd\u7ecf\u5178\u573a\u666f\uff0c\u5728\u5f53\u4eca\u6ca1\u6709 useEvent \u7684\u73af\u5883\u4e0b\u5904\u7406\u8d77\u6765\u4f1a\u6bd4\u8f83\u784c\u624b",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"onClick \u7684 handler \u5728\u6bcf\u6b21 render \u4e0b\u90fd\u4f1a\u91cd\u65b0\u5b9a\u4e49\uff0c\u5bfc\u81f4\u7ec4\u4ef6\u65e0\u6cd5\u5229\u7528 memo \u4f18\u5316"),(0,a.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u6570\u636e\u5728\u591a deps \u521d\u59cb\u5316\u7684\u60c5\u51b5\u4e0b\u4f1a\u89e6\u53d1\u591a\u6b21"))),(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8e solidjs \u7684 createEffect \u7684\u60f3\u6cd5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684 lifecycle \u53ef\u80fd\u4f1a\u52a0\u91cd\u4f7f\u7528\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\uff0c\u5c31\u50cf\u8fc7\u53bb\u7684 class component")))),(0,a.kt)("h2",{id:"tip"},"Tip"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u5728\u672a\u6765\u4f1a\u52a0\u5165\u5230 react \u63d0\u4f9b\u7684 hook api \u4e2d\uff0c\u4f46\u662f\u56e2\u961f\u7684 react \u7248\u672c\u4e0d\u4f1a\u90a3\u4e48\u8f7b\u6613\u5347\u7ea7\uff0c\u90a3\u4e48\u53ef\u4ee5\u628a\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5165\u5230\u73b0\u6709\u9879\u76ee\u4e2d\uff0c\u5c31\u80fd\u4eab\u7528\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md#internal-implementation"},"useEvent implementation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// (!) Approximate behavior\n\nfunction useEvent(handler) {\n  const handlerRef = useRef(null);\n\n  // In a real implementation, this would run before layout effects\n  useLayoutEffect(() => {\n    handlerRef.current = handler;\n  });\n\n  return useCallback((...args) => {\n    // In a real implementation, this would throw if called during render\n    const fn = handlerRef.current;\n    return fn(...args);\n  }, []);\n}\n")),(0,a.kt)("h2",{id:"algorithm-1"},"Algorithm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/JunwuHuang/leetcode-daily/blob/master/longest-substring-without-repeating-characters/%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.md"},"\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32")))}s.isMDXComponent=!0}}]);