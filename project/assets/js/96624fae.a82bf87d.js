"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[70],{9023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(4848),i=n(8453);const c={sidebar_position:1},s=void 0,o={id:"technical-information/Architecture",title:"Architecture",description:"Structure",source:"@site/docs/technical-information/Architecture.md",sourceDirName:"technical-information",slug:"/technical-information/Architecture",permalink:"/ExogenesisEnsemble-Part3-Redemption/project/docs/technical-information/Architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technical-information/Architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Technical information",permalink:"/ExogenesisEnsemble-Part3-Redemption/project/docs/category/technical-information"}},a={},l=[{value:"Structure",id:"structure",level:2}];function u(e){const t={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"structure-overview",src:n(7679).A+""})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The client App sends a request to the lambda, then the lambda sign and returns a pre-signed URL."}),"\n",(0,r.jsx)(t.li,{children:"The client App uploads assets to the S3."}),"\n",(0,r.jsx)(t.li,{children:"Once the assets are uploaded, the lambda is triggered with the uploaded asset information."}),"\n",(0,r.jsx)(t.li,{children:"The lambda archives the assets to the glacier"}),"\n",(0,r.jsx)(t.li,{children:"The lambda get a vault to the DynamoDB"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7679:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/structure-overvies.drawio-9ac1a03ce9d07c959481c801ec2c8986.svg"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);