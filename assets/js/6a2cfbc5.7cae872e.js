"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9837],{1509:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var s=r(4848),t=r(8453);const a={},c="\u7ee7\u627f",o={permalink:"/website/blog/extends",source:"@site/blog/extends.md",title:"\u7ee7\u627f",description:"\u7ec4\u5408\u5f0f\u7ee7\u627f",date:"2024-03-23T09:19:17.000Z",formattedDate:"March 23, 2024",tags:[],readingTime:2.87,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u9632\u6296\u4e0e\u8282\u6d41",permalink:"/website/blog/debounce&throttle"}},l={authorsImageUrls:[]},i=[{value:"\u7ec4\u5408\u5f0f\u7ee7\u627f",id:"\u7ec4\u5408\u5f0f\u7ee7\u627f",level:2},{value:"\u539f\u578b\u5f0f\u7ee7\u627f",id:"\u539f\u578b\u5f0f\u7ee7\u627f",level:2},{value:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",id:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",level:2},{value:"babel\u5bf9class\u5173\u952e\u5b57\u7684\u8f6c\u8bd1",id:"babel\u5bf9class\u5173\u952e\u5b57\u7684\u8f6c\u8bd1",level:2},{value:"babel\u5bf9extends\u5173\u952e\u5b57\u7684\u8f6c\u8bd1",id:"babel\u5bf9extends\u5173\u952e\u5b57\u7684\u8f6c\u8bd1",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u5b9a\u4e49\u7236\u7c7b \nfunction SuperType(name, age) {\n  this.name = name\n  this.age = age\n}\nSuperType.prototype.getName = function() {\n  return this.name\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7ec4\u5408\u5f0f\u7ee7\u627f",children:"\u7ec4\u5408\u5f0f\u7ee7\u627f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5e38\u7528\u7684\u7ee7\u627f\u65b9\u5f0f\uff0c",(0,s.jsx)(n.code,{children:"instanceof"}),"\u4e0e",(0,s.jsx)(n.code,{children:"isPrototypeOf()"}),"\u80fd\u591f\u8bc6\u522b\u57fa\u4e8e\u6b64\u79cd\u65b9\u5f0f\u7ee7\u627f\u521b\u5efa\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4f46\u662f\u5176\u4e2d\u8c03\u7528\u4e862\u6b21\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u82e5\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u8f83\u4e3a\u590d\u6742\uff0c\u5219\u4f1a\u9020\u6210\u66f4\u591a\u7684\u8d44\u6e90\u6d6a\u8d39"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function SubType() {\n  // \u7ee7\u627f\u5c5e\u6027\n  SuperType.apply(this, arguments)\n}\n// \u7ee7\u627f\u65b9\u6cd5\nSubType.prototype = new SuperType()\nSubType.prototype.constructor = SubType\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u539f\u578b\u5f0f\u7ee7\u627f",children:"\u539f\u578b\u5f0f\u7ee7\u627f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function object(o) {\n  function F() {}\n  F.prototype = o\n  return new F()\n}\n// \u4ee5\u4e0a\u65b9\u5f0f\u76f8\u5f53\u4e8e\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0a\u65b9\u5f0f\u76f8\u5f53\u4e8e",(0,s.jsx)(n.code,{children:"Object.create(o)"}),"\uff0c\u6240\u4ee5\u5f15\u7528\u7c7b\u578b\u7684\u5c5e\u6027\u8fd8\u662f\u4f1a\u5171\u4eab\u76f8\u5e94\u7684\u503c\uff0c\u4e3e\u4e2a\u4f8b\u5b50"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var person = {\n  friends: ['Bob']\n}\nvar person2 = Object.create(person)\nperson2.friends.push('Jack')\nvar person3 = Object.create(person)\nperson3.friends.push('Rose')\nconsole.log(person.friends)\n// Bob, Jack, Rose\n"})}),"\n",(0,s.jsxs)(n.p,{children:["MDN\u4e0a\u63d0\u4f9b\u4e86\u57fa\u4e8e",(0,s.jsx)(n.code,{children:"Object.create"}),"\u5b9e\u73b0\u7ee7\u627f\u7684\u5199\u6cd5"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function SubType() {\n  SuperType.apply(this, arguments)\n}\nSubType.prototype = Object.create(SuperType.prototype, {\n  constructor: {\n    value: SubType,\n  }\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",children:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7406\u60f3\u7684\u7ee7\u627f\u8303\u5f0f\uff0c",(0,s.jsx)(n.code,{children:"babel"}),"\u5bf9\u4e8e",(0,s.jsx)(n.code,{children:"extends"}),"\u5173\u952e\u5b57\u7684\u8f6c\u8bd1\u4e5f\u662f\u7528\u7684\u8fd9\u4e2a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function inheritPrototype(subType, superType) {\n  var prototype = object(superType.prototype)\n  prototype.constructor = subType\n  subType.prototype = prototype\n}\nfunction SubType(name, age) {\n  SuperType.call(this, name, age)\n}\ninheritPrototype(SubType, SuperType)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"babel\u5bf9class\u5173\u952e\u5b57\u7684\u8f6c\u8bd1",children:"babel\u5bf9class\u5173\u952e\u5b57\u7684\u8f6c\u8bd1"}),"\n",(0,s.jsx)(n.p,{children:"class\u5199\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u540e(\u8c03\u6574\u4ee5\u63d0\u5347\u6613\u8bfb\u6027)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function Person(name, age) {\n  if (!(this instanceof Person)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n  this.name = name\n  this.age = age\n}\n\nObject.defineProperty(Person, 'prototype', {\n  writable: false\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"babel\u5bf9extends\u5173\u952e\u5b57\u7684\u8f6c\u8bd1",children:"babel\u5bf9extends\u5173\u952e\u5b57\u7684\u8f6c\u8bd1"}),"\n",(0,s.jsx)(n.p,{children:"extends\u5199\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class Jack extends Person {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u540e\uff08\u7cbe\u7b80\u7248\uff09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'function _inherits(subClass, superClass) {\n  if (typeof superClass !== "function" && superClass !== null) {\n    throw new TypeError("Super expression must either be null or a function");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: { value: subClass, writable: true, configurable: true },\n  });\n  Object.defineProperty(subClass, "prototype", { writable: false });\n  if (superClass) {\n    Object.setPrototypeOf(subClass, superClass);\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (typeof call === "object" || typeof call === "function")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\n      "Derived constructors may only return object or undefined"\n    );\n  }\n  if (self === void 0) {\n    throw new ReferenceError(\n      "this hasn\'t been initialised - super() hasn\'t been called"\n    );\n  }\n  return self;\n}\n\nfunction _createSuper(Derived) {\n  return function _createSuperInternal() {\n    var Super = Object.getPrototypeOf(Derived),\n      result = Super.apply(this, arguments);\n    return _possibleConstructorReturn(this, result);\n  };\n}\n\nvar Jack = /*#__PURE__*/ (function (_Person) {\n  _inherits(Jack, _Person);\n  var _super = _createSuper(Jack);\n  function Jack() {\n    if (!(this instanceof Jack)) {\n      throw new TypeError("Cannot call a class as a function");\n    }\n    return _super.apply(this, arguments);\n  }\n  return _createClass(Jack);\n})(Person);\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(6540);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);