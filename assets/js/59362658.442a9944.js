"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2267],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,u(u({ref:t},l),{},{components:r})):n.createElement(b,u({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8642:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return i}});var n=r(3117),o=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["slorber"],tags:["docusaurus"]},u=void 0,s={permalink:"/website/blog/mdx-blog-post",editUrl:"https://github.com/JunwuHuang/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/website/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["slorber"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/website/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/website/blog/long-blog-post"}},c={authorsImageUrls:[void 0]},i=[],l={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Blog posts support ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,o.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}p.isMDXComponent=!0}}]);