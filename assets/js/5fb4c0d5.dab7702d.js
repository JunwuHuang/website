"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4396],{9537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(4848),o=t(8453);const s={sidebar_position:9},r="\u7b2c\u4e5d\u5468",c={id:"week9",title:"\u7b2c\u4e5d\u5468",description:"2022-07-18 ~ 2022-07-24",source:"@site/docs/week9.md",sourceDirName:".",slug:"/week9",permalink:"/website/docs/week9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u516b\u5468",permalink:"/website/docs/week8"},next:{title:"\u7b2c\u5341\u5468",permalink:"/website/docs/week10"}},a={},l=[{value:"Algorithm1",id:"algorithm1",level:2},{value:"Algorithm2",id:"algorithm2",level:2},{value:"Review",id:"review",level:2},{value:"Tip",id:"tip",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7b2c\u4e5d\u5468",children:"\u7b2c\u4e5d\u5468"}),"\n",(0,i.jsx)(n.p,{children:"2022-07-18 ~ 2022-07-24"}),"\n",(0,i.jsx)(n.h2,{id:"algorithm1",children:"Algorithm1"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/JunwuHuang/leetcode-daily/blob/master/sort-colors/%E9%A2%9C%E8%89%B2%E5%88%86%E7%B1%BB.md",children:"\u989c\u8272\u5206\u7c7b"})}),"\n",(0,i.jsx)(n.h2,{id:"algorithm2",children:"Algorithm2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/JunwuHuang/leetcode-daily/blob/master/longest-consecutive-sequence/%E6%9C%80%E9%95%BF%E8%BF%9E%E7%BB%AD%E5%BA%8F%E5%88%97.md",children:"\u6700\u957f\u8fde\u7eed\u5e8f\u5217"})}),"\n",(0,i.jsx)(n.h2,{id:"review",children:"Review"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.joshwcomeau.com/javascript/statements-vs-expressions/",children:"Statements Vs. Expressions"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u600e\u4e48\u53bb\u7406\u89e3 Statements \u548c Expressions\uff1bStatements \u662f\u7a0b\u5e8f\u7684\u7ed3\u6784\uff0c\u6709\u7684 Statements \u53ef\u4ee5\u7528\u6765\u653e\u7f6e Expressions\uff1b\u4f5c\u8005\u6709\u4e00\u4e2a\u6bd4\u55bb\uff0c\u628a Statements \u6bd4\u4f5c\u5c0f\u9738\u738b\uff08\u539f\u6587\u5f53\u7136\u662f Super Nintendo\uff09\uff0c\u628a Expressions \u6bd4\u4f5c\u6e38\u620f\u5361\uff1b"}),"\n",(0,i.jsx)(n.h2,{id:"tip",children:"Tip"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ant-design/ant-design/blob/master/components/message/index.tsx",children:"message api"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const typeToIcon = {\n  info: InfoCircleFilled,\n  success: CheckCircleFilled,\n  error: CloseCircleFilled,\n  warning: ExclamationCircleFilled,\n  loading: LoadingOutlined,\n};\n\nexport type NoticeType = keyof typeof typeToIcon;\n\nexport const typeList = Object.keys(typeToIcon) as NoticeType[];\n\nexport function attachTypeApi(originalApi: MessageApi, type: NoticeType) {\n  originalApi[type] = (\n    content: JointContent,\n    duration?: ConfigDuration,\n    onClose?: ConfigOnClose\n  ) => {\n    if (isArgsProps(content)) {\n      return originalApi.open({ ...content, type });\n    }\n\n    if (typeof duration === "function") {\n      onClose = duration;\n      duration = undefined;\n    }\n\n    return originalApi.open({ content, duration, type, onClose });\n  };\n}\n\ntypeList.forEach((type) => attachTypeApi(api, type));\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u8fd1\u5de5\u4f5c\u521a\u597d\u5904\u7406\u4e86\u7c7b\u4f3c\u7684\u4ee3\u7801\uff0c\u5b66\u4e60\u4e86 antd \u7684\u505a\u6cd5\u540e\uff0c\u786e\u5b9e\u8fd9\u6837\u7684\u4ee3\u7801\u66f4\u52a0\u4fbf\u4e8e\u7ef4\u62a4\u6269\u5c55\uff0c\u53ea\u9700\u5229\u7528 typeToIcon \u4f5c\u4e3a api \u540d\u79f0\u4e0e\u56fe\u6807\u7684\u8fd9\u4e2a\u6620\u5c04\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);