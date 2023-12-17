"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[652],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(b,f,i){i.d(f,{NF:function(){return n},Zo:function(){return j},ah:function(){return p},pC:function(){return h}});var d=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const h=d.createContext({});function n(r){return s;function s(o){const u=p(o.components);return d.createElement(r,{...o,allComponents:u})}}function p(r){const s=d.useContext(h);return d.useMemo(()=>typeof r=="function"?r(s):{...s,...r},[s,r])}const x={};function j({components:r,children:s,disableParentContext:o}){let u;return o?u=typeof r=="function"?r({}):r||x:u=p(r),d.createElement(h.Provider,{value:u},s)}},"./src/components/Tooltip/Tooltip.story.tsx":function(b,f,i){i.r(f),i.d(f,{Basic:function(){return _},default:function(){return M}});var d=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=i("./src/components/Button/Button.tsx"),n=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),p=i("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),x=i("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs"),j=i("./src/components/Tooltip/Tooltip.tsx");function r(t){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",h3:"h3",code:"code"},(0,p.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"tooltip",children:"Tooltip"}),`
`,(0,n.jsx)(e.h2,{id:"theme",children:"Theme"}),`
`,(0,n.jsx)(e.p,{children:"There are currently themes available for the Tooltip."}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Info"}),`
`,(0,n.jsx)(e.li,{children:"Error"}),`
`,(0,n.jsx)(e.li,{children:"Info-alt (alternative)"}),`
`]}),`
`,(0,n.jsx)(e.h3,{id:"info",children:"Info"}),`
`,(0,n.jsx)(e.p,{children:"This is the default theme, usually used in forms to show more information."}),`
`,(0,n.jsx)(e.h3,{id:"error",children:"Error"}),`
`,(0,n.jsx)(e.p,{children:"Tooltip with a red background."}),`
`,(0,n.jsx)(e.h3,{id:"info-alternative",children:"Info alternative"}),`
`,(0,n.jsxs)(e.p,{children:["We added this to be able to add a ",(0,n.jsx)(e.code,{children:"<JSONFormatter />"})," in the tooltip."]}),`
`,(0,n.jsx)(x.Ed,{of:j.u})]})}function s(t={}){const{wrapper:e}=Object.assign({},(0,p.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(r,t)})):r(t)}var o=s,u=Object.defineProperty,c=Object.defineProperties,v=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,O=(t,e)=>{for(var a in e||(e={}))y.call(e,a)&&g(t,a,e[a]);if(m)for(var a of m(e))T.call(e,a)&&g(t,a,e[a]);return t},P=(t,e)=>c(t,v(e)),D=(t,e)=>{var a={};for(var l in t)y.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(t!=null&&m)for(var l of m(t))e.indexOf(l)<0&&T.call(t,l)&&(a[l]=t[l]);return a},E,C,w;const z={title:"Overlays/Tooltip",component:j.u,parameters:{docs:{page:o},knobs:{disabled:!0}},argTypes:{content:{control:{type:"text"}},theme:{control:{type:"select",options:["info","error"]}},placement:{control:{type:"select",options:["auto","bottom","top","auto-start","auto-end","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"]}}}},_=t=>{var e=t,{content:a}=e,l=D(e,["content"]);return d.createElement(j.u,O({content:a},l),d.createElement(h.zx,null,"Hover me for Tooltip "))};_.args={content:"This is a tooltip",theme:"info",show:void 0,placement:"auto"};var M=z;_.parameters=P(O({},_.parameters),{docs:P(O({},(E=_.parameters)==null?void 0:E.docs),{source:O({originalSource:`({
  content,
  ...args
}) => {
  return <Tooltip content={content} {...args}>
      <Button>Hover me for Tooltip </Button>
    </Tooltip>;
}`},(w=(C=_.parameters)==null?void 0:C.docs)==null?void 0:w.source)})})},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(b,f,i){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=Symbol.for("react.element"),n=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,x=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function r(s,o,u){var c,v={},m=null,y=null;u!==void 0&&(m=""+u),o.key!==void 0&&(m=""+o.key),o.ref!==void 0&&(y=o.ref);for(c in o)p.call(o,c)&&!j.hasOwnProperty(c)&&(v[c]=o[c]);if(s&&s.defaultProps)for(c in o=s.defaultProps,o)v[c]===void 0&&(v[c]=o[c]);return{$$typeof:h,type:s,key:m,ref:y,props:v,_owner:x.current}}f.Fragment=n,f.jsx=r,f.jsxs=r},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(b,f,i){b.exports=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
