"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6221],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(S,b,s){s.d(b,{NF:function(){return w},Zo:function(){return n},ah:function(){return c},pC:function(){return j}});var o=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const j=o.createContext({});function w(d){return i;function i(l){const _=c(l.components);return o.createElement(d,{...l,allComponents:_})}}function c(d){const i=o.useContext(j);return o.useMemo(()=>typeof d=="function"?d(i):{...i,...d},[i,d])}const O={};function n({components:d,children:i,disableParentContext:l}){let _;return l?_=typeof d=="function"?d({}):d||O:_=c(d),o.createElement(j.Provider,{value:_},i)}},"./src/components/Divider/Divider.story.tsx":function(S,b,s){s.r(b),s.d(b,{Basic:function(){return u},Examples:function(){return a},default:function(){return E}});var o=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),j=s("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),w=s("./src/themes/ThemeContext.tsx");const c=({direction:r="horizontal",spacing:e=2})=>{const y=(0,w.wW)(O,e);return r==="vertical"?o.createElement("div",{className:y.verticalDivider}):o.createElement("hr",{className:y.horizontalDivider})};c.displayName="Divider";const O=(r,e)=>({horizontalDivider:(0,j.iv)({borderTop:`1px solid ${r.colors.border.weak}`,margin:r.spacing(e,0),width:"100%"}),verticalDivider:(0,j.iv)({borderRight:`1px solid ${r.colors.border.weak}`,margin:r.spacing(0,e),height:"100%"})});try{c.displayName="Divider",c.__docgenInfo={description:"",displayName:"Divider",props:{direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},spacing:{defaultValue:{value:"2"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"4"},{value:"0.25"},{value:"0.5"},{value:"1.5"},{value:"2.5"},{value:"3"},{value:"5"},{value:"6"},{value:"8"},{value:"10"}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:c.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch{}var n=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),d=s("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),i=s("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function l(r){const e=Object.assign({h1:"h1",h3:"h3",h4:"h4",p:"p",ul:"ul",li:"li",pre:"pre",code:"code"},(0,d.ah)(),r.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h_,{title:"MDX|Divider",component:c}),`
`,(0,n.jsx)(e.h1,{id:"divider",children:"Divider"}),`
`,(0,n.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,n.jsx)(e.h4,{id:"when-to-use",children:"When to use"}),`
`,(0,n.jsx)(e.p,{children:"When creating separation between large sections of page content or smaller parts of components like in the page info section of the header."}),`
`,(0,n.jsx)(e.h4,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,n.jsx)(e.p,{children:"Dividers should be used sparingly."}),`
`,(0,n.jsx)(e.p,{children:"Don\u2019t use dividers when white space (padding / margins) is sufficient to separate out sections. When sections are related to each other, they may not need dividers (ex: filtering / search related to a table)."}),`
`,(0,n.jsx)(e.h3,{id:"variants",children:"Variants"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Horizontal"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { Divider } from '@grafana/ui';

    <header>
        <h1>My title here</h1>
        <img src="logo.png" alt="logo" />
    </header>
    <Divider />
    <main>
        <p>Main content goes here</p>
    </main>


`})}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Vertical"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { Divider } from '@grafana/ui';

    <header>
        <h1>My title here</h1>
        <Divider direction="vertical" />
        <img src="logo.png" alt="logo" />
    </header>
    <main>
        <p>Main content goes here</p>
    </main>

`})}),`
`,(0,n.jsx)(e.h3,{id:"modifiers",children:"Modifiers"}),`
`,(0,n.jsxs)(e.p,{children:["Pass a spacing token into the ",(0,n.jsx)(e.code,{children:"spacing"})," prop to adjust the margin."]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { Divider } from '@grafana/ui';

    <header>
        <h1>My title here</h1>
        <Divider direction="vertical" spacing={0.5}/>
        <img src="logo.png" alt="logo" />
    </header>
    <main>
        <p>Main content goes here</p>
    </main>

`})}),`
`,(0,n.jsx)(e.h3,{id:"dos",children:"Dos"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Import and add the Divider component inside the code where you would normally add an hr or a div."}),`
`]}),`
`,(0,n.jsx)(e.h3,{id:"donts",children:"Don'ts"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Do not modify the color of the divider"}),`
`]}),`
`,(0,n.jsx)(e.h3,{id:"props",children:"Props"}),`
`,(0,n.jsx)(i.Ed,{of:c})]})}function _(r={}){const{wrapper:e}=Object.assign({},(0,d.ah)(),r.components);return e?(0,n.jsx)(e,Object.assign({},r,{children:(0,n.jsx)(l,r)})):l(r)}var x=_,C=Object.defineProperty,M=Object.defineProperties,P=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(r,e,y)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:y}):r[e]=y,m=(r,e)=>{for(var y in e||(e={}))R.call(e,y)&&N(r,y,e[y]);if(T)for(var y of T(e))I.call(e,y)&&N(r,y,e[y]);return r},p=(r,e)=>M(r,P(e)),t,v,f,g,z,D;const h={title:"General/Divider",component:c,parameters:{docs:{page:x}}},u=({direction:r,spacing:e})=>o.createElement("div",{style:{display:r==="vertical"?"flex":"block",flexDirection:"row",height:"50px"}},o.createElement("div",null,"My text here"),o.createElement(c,{direction:r,spacing:e}),o.createElement("div",null,"My text here")),a=()=>o.createElement("div",null,o.createElement("p",null,"Text above horizontal divider"),o.createElement(c,null),o.createElement("p",null,"Text below horizontal divider"),o.createElement("div",{style:{display:"flex",flexDirection:"row",height:"50px"}},o.createElement("p",null,"Text aside of vertical divider"),o.createElement(c,{direction:"vertical"}),o.createElement("p",null,"Text aside of vertical divider")));var E=h;u.parameters=p(m({},u.parameters),{docs:p(m({},(t=u.parameters)==null?void 0:t.docs),{source:m({originalSource:`({
  direction,
  spacing
}) => {
  return <div style={{
    display: direction === 'vertical' ? 'flex' : 'block',
    flexDirection: 'row',
    height: '50px'
  }}>
      <div>My text here</div>
      <Divider direction={direction} spacing={spacing} />
      <div>My text here</div>
    </div>;
}`},(f=(v=u.parameters)==null?void 0:v.docs)==null?void 0:f.source)})}),a.parameters=p(m({},a.parameters),{docs:p(m({},(g=a.parameters)==null?void 0:g.docs),{source:m({originalSource:`() => {
  return <div>
      <p>Text above horizontal divider</p>
      <Divider />
      <p>Text below horizontal divider</p>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '50px'
    }}>
        <p>Text aside of vertical divider</p>
        <Divider direction="vertical" />
        <p>Text aside of vertical divider</p>
      </div>
    </div>;
}`},(D=(z=a.parameters)==null?void 0:z.docs)==null?void 0:D.source)})})},"../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js":function(S,b,s){s.d(b,{iv:function(){return R},cx:function(){return x},F4:function(){return T}});var o=s("../../../yarn/cache/@emotion-cache-npm-11.11.0-3e6e449071-8eb1dc22be.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),j=s("../../../yarn/cache/@emotion-serialize-npm-1.1.2-4b856d3761-413c352e65.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),w=s("../../../yarn/cache/@emotion-utils-npm-1.2.1-3d04f99348-e0b44be070.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function c(m,p){if(m.inserted[p.name]===void 0)return m.insert("",p,m.sheet,!0)}function O(m,p,t){var v=[],f=(0,w.fp)(m,v,t);return v.length<2?t:f+p(v)}var n=function(p){var t=(0,o.Z)(p);t.sheet.speedy=function(D){this.isSpeedy=D},t.compat=!0;var v=function(){for(var h=arguments.length,u=new Array(h),a=0;a<h;a++)u[a]=arguments[a];var E=(0,j.O)(u,t.registered,void 0);return(0,w.My)(t,E,!1),t.key+"-"+E.name},f=function(){for(var h=arguments.length,u=new Array(h),a=0;a<h;a++)u[a]=arguments[a];var E=(0,j.O)(u,t.registered),r="animation-"+E.name;return c(t,{name:E.name,styles:"@keyframes "+r+"{"+E.styles+"}"}),r},g=function(){for(var h=arguments.length,u=new Array(h),a=0;a<h;a++)u[a]=arguments[a];var E=(0,j.O)(u,t.registered);c(t,E)},z=function(){for(var h=arguments.length,u=new Array(h),a=0;a<h;a++)u[a]=arguments[a];return O(t.registered,v,d(u))};return{css:v,cx:z,injectGlobal:g,keyframes:f,hydrate:function(h){h.forEach(function(u){t.inserted[u]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:w.fp.bind(null,t.registered),merge:O.bind(null,t.registered,v)}},d=function m(p){for(var t="",v=0;v<p.length;v++){var f=p[v];if(f!=null){var g=void 0;switch(typeof f){case"boolean":break;case"object":{if(Array.isArray(f))g=m(f);else{g="";for(var z in f)f[z]&&z&&(g&&(g+=" "),g+=z)}break}default:g=f}g&&(t&&(t+=" "),t+=g)}}return t},i=n({key:"css"}),l=i.flush,_=i.hydrate,x=i.cx,C=i.merge,M=i.getRegisteredStyles,P=i.injectGlobal,T=i.keyframes,R=i.css,I=i.sheet,N=i.cache},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(S,b,s){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),j=Symbol.for("react.element"),w=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,O=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function d(i,l,_){var x,C={},M=null,P=null;_!==void 0&&(M=""+_),l.key!==void 0&&(M=""+l.key),l.ref!==void 0&&(P=l.ref);for(x in l)c.call(l,x)&&!n.hasOwnProperty(x)&&(C[x]=l[x]);if(i&&i.defaultProps)for(x in l=i.defaultProps,l)C[x]===void 0&&(C[x]=l[x]);return{$$typeof:j,type:i,key:M,ref:P,props:C,_owner:O.current}}b.Fragment=w,b.jsx=d,b.jsxs=d},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(S,b,s){S.exports=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
