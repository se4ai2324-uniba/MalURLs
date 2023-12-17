"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9927],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(V,y,u){u.d(y,{NF:function(){return j},Zo:function(){return L},ah:function(){return p},pC:function(){return b}});var a=u("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const b=a.createContext({});function j(r){return l;function l(n){const g=p(n.components);return a.createElement(r,{...n,allComponents:g})}}function p(r){const l=a.useContext(b);return a.useMemo(()=>typeof r=="function"?r(l):{...l,...r},[l,r])}const B={};function L({components:r,children:l,disableParentContext:n}){let g;return n?g=typeof r=="function"?r({}):r||B:g=p(r),a.createElement(b.Provider,{value:g},l)}},"./src/components/Forms/RadioButtonList/RadioButtonList.story.tsx":function(V,y,u){u.r(y),u.d(y,{ControlledComponent:function(){return T},Default:function(){return D},DisabledCheckedOption:function(){return P},DisabledList:function(){return N},DisabledOptions:function(){return z},Dots:function(){return q},LongLabels:function(){return A},WithDescriptions:function(){return G},default:function(){return ge}});var a=u("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=u("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),j=u("./src/themes/ThemeContext.tsx");const p=({id:t,name:e,label:c,checked:W,value:X,disabled:H,description:$,onChange:U})=>{const F=(0,j.wW)(B);return a.createElement("label",{title:$,className:F.label},a.createElement("input",{id:t,name:e,type:"radio",checked:W,value:X,disabled:H,className:F.input,onChange:()=>U&&U(t)}),a.createElement("div",null,c,$&&a.createElement("div",{className:F.description},$)))},B=t=>({input:(0,b.iv)({position:"relative",appearance:"none",outline:"none",backgroundColor:t.colors.background.canvas,width:`${t.spacing(2)} !important`,height:t.spacing(2),border:`1px solid ${t.colors.border.medium}`,borderRadius:t.shape.radius.circle,margin:"3px 0",":checked":{backgroundColor:t.v1.palette.white,border:`5px solid ${t.colors.primary.main}`},":disabled":{backgroundColor:`${t.colors.action.disabledBackground} !important`,borderColor:t.colors.border.weak},":disabled:checked":{border:`1px solid ${t.colors.border.weak}`},":disabled:checked::after":{content:'""',width:"6px",height:"6px",backgroundColor:t.colors.text.disabled,borderRadius:t.shape.radius.circle,display:"inline-block",position:"absolute",top:"4px",left:"4px"},":focus":{outline:"none !important",boxShadow:`0 0 0 1px ${t.colors.background.canvas}, 0 0 0 3px ${t.colors.primary.main}`}}),label:(0,b.iv)({fontSize:t.typography.fontSize,lineHeight:"22px",display:"grid",gridTemplateColumns:`${t.spacing(2)} auto`,gap:t.spacing(1)}),description:(0,b.iv)({fontSize:t.typography.size.sm,color:t.colors.text.secondary})});try{p.displayName="RadioButtonDot",p.__docgenInfo={description:"",displayName:"RadioButtonDot",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonList/RadioButtonDot.tsx#RadioButtonDot"]={docgenInfo:p.__docgenInfo,name:"RadioButtonDot",path:"src/components/Forms/RadioButtonList/RadioButtonDot.tsx#RadioButtonDot"})}catch{}var L=u("../../../yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");function r({name:t,id:e,options:c,value:W,onChange:X,className:H,disabled:$,disabledOptions:U=[]}){const F=(0,j.wW)(l),ye=e??(0,L.uniqueId)("radiogroup-list-");return a.createElement("div",{id:e,className:(0,b.cx)(F.container,H),role:"radiogroup"},c.map((E,be)=>{const xe=`${ye}-${be}`,Oe=W&&W===E.value,je=$||U.some(Re=>Re===E.value),_e=()=>X&&E.value&&X(E.value);return a.createElement(p,{key:be,id:xe,name:t,label:E.label,description:E.description,checked:Oe,value:E.value,disabled:je,onChange:_e})}))}const l=t=>({container:(0,b.iv)({display:"grid",gap:t.spacing(1)})});try{r.displayName="RadioButtonList",r.__docgenInfo={description:"",displayName:"RadioButtonList",props:{name:{defaultValue:null,description:"A name of a radio group. Used to group multiple radio inputs into a single group",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"An array of available options",name:"options",required:!0,type:{name:"SelectableValue<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},disabled:{defaultValue:null,description:"Disables all elements in the list",name:"disabled",required:!1,type:{name:"boolean"}},disabledOptions:{defaultValue:{value:"[]"},description:"Disables subset of elements in the list. Compares values using the === operator",name:"disabledOptions",required:!1,type:{name:"T[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonList/RadioButtonList.tsx#RadioButtonList"]={docgenInfo:r.__docgenInfo,name:"RadioButtonList",path:"src/components/Forms/RadioButtonList/RadioButtonList.tsx#RadioButtonList"})}catch{}var n=u("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),g=u("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),h=u("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function C(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,g.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.h_,{title:"MDX|RadioButtonList",component:r}),`
`,(0,n.jsx)(e.h1,{id:"radiobuttonlist",children:"RadioButtonList"}),`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"RadioButtonList"})," is used to select a single value from multiple mutually exclusive options usually in a vertical manner."]}),`
`,(0,n.jsx)(e.h2,{id:"when-to-use",children:"When to use"}),`
`,(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"RadioButtonList"}),` for mutually exclusive selections.
Contrary to the `,(0,n.jsx)(e.a,{href:"?path=/docs/forms-radiobuttongroup--radio-buttons",children:"RadioButtonGroup"})," component, ",(0,n.jsx)(e.code,{children:"RadioButtonList"})," can contain more than four options because by default it lays out the items vertically."]}),`
`,(0,n.jsxs)(e.p,{children:["This component should be used instead of ",(0,n.jsx)(e.a,{href:"?path=/docs/forms-select--basic",children:"Select"})," when there is a need for the user to see all of the options available without clicking and scrolling the dropdown."]}),`
`,(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),`
`,(0,n.jsx)(e.h3,{id:"basic-radio-group",children:"Basic radio group"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

<RadioButtonGroup options={...} value={...} onChange={...} />

`})}),`
`,(0,n.jsx)(e.h3,{id:"disabled-options",children:"Disabled options"}),`
`,(0,n.jsxs)(e.p,{children:["You can disable some options by passing them to the ",(0,n.jsx)(e.code,{children:"disabledOptions"}),` prop.
Keep in mind the `,(0,n.jsx)(e.code,{children:"disabledOptions"})," are compared with options' values by the ",(0,n.jsx)(e.code,{children:"==="})," operator."]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

const options = [
  { label: 'Prometheus', value: 'prometheus' },
  { label: 'Graphite', value: 'graphite' },
  { label: 'Elastic', value: 'elastic' },
  { label: 'InfluxDB', value: 'influx' },
];

const disabledOptions = ['prometheus', 'elastic'];


<RadioButtonGroup
  options={options}
  disabledOptions={disabledOptions}
  value={...}
  onChange={...}
/>
`})}),`
`,(0,n.jsx)(e.h3,{id:"options-with-descriptions",children:"Options with descriptions"}),`
`,(0,n.jsx)(e.p,{children:`You can add descriptions to the options by passing them to the option's description property.
Descriptions should be short and concise. Try to avoid multiline text.`}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

const options = [
  { label: 'Prometheus', value: 'prometheus', description: 'Monitoring system & TSDB' },
  { label: 'Loki', value: 'loki', description: 'Log aggregation system' },
];

const disabledOptions = ['prometheus', 'elastic'];


<RadioButtonGroup
  options={options}
  disabledOptions={disabledOptions}
  value={...}
  onChange={...}
/>
`})}),`
`,(0,n.jsx)(e.h3,{id:"changing-layout",children:"Changing layout"}),`
`,(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"RadioButtonList"})," layout uses CSS Grid, so it is effortless to split the list into multiple columns"]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:`import { RadioButtonList } from '@grafana/ui';

<RadioButtonGroup
  options={...}
  value={...}
  onChange={...}
  className={css\`
    grid-template-columns: 1fr 1fr 1fr;
  \`}
/>

`})}),`
`,(0,n.jsx)(h.Ed,{of:r})]})}function k(t={}){const{wrapper:e}=Object.assign({},(0,g.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(C,t)})):C(t)}var I=k,Y=Object.defineProperty,K=Object.defineProperties,J=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,i=(t,e,c)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[e]=c,o=(t,e)=>{for(var c in e||(e={}))_.call(e,c)&&i(t,c,e[c]);if(Z)for(var c of Z(e))x.call(e,c)&&i(t,c,e[c]);return t},s=(t,e)=>K(t,J(e)),v,S,R,m,f,d,O,M,Q,ee,te,ne,ae,oe,ie,se,re,le,de,ue,ce,pe,me,fe;const w=[{label:"Option 1",value:"opt-1"},{label:"Option 2",value:"opt-2"},{label:"Option 3",value:"opt-3"},{label:"Option 4",value:"opt-4"},{label:"Option 5",value:"opt-5"}],he={title:"Forms/RadioButtonList",component:r,parameters:{controls:{exclude:["name","id","keySelector","onChange","className","value"]},docs:{page:I}},argTypes:{value:{options:w.map(t=>t.value)},disabledOptions:{control:"multi-select",options:w.map(t=>t.value)}},args:{options:w,disabled:!1}},ve=[{value:"opt-1",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},{value:"opt-2",label:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{value:"opt-3",label:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},{value:"opt-4",label:"Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Congue quisque egestas diam in. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Augue lacus viverra vitae congue eu consequat ac."},{value:"opt-5",label:"Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Elit eget gravida cum sociis natoque penatibus et magnis dis. Varius sit amet mattis vulputate. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend."}],D=({disabled:t,disabledOptions:e})=>a.createElement("div",null,a.createElement(r,{name:"default",options:w,disabled:t,disabledOptions:e})),A=({disabled:t,disabledOptions:e})=>a.createElement("div",null,a.createElement(r,{name:"default",options:ve,disabled:t,disabledOptions:e})),G=({disabled:t,disabledOptions:e})=>a.createElement("div",null,a.createElement(r,{name:"withDescriptions",options:[{label:"Prometheus",value:"prometheus",description:"Monitoring system & TSDB"},{label:"Loki",value:"loki",description:"Log aggregation system"}]})),T=({disabled:t,disabledOptions:e})=>{const[c,W]=(0,a.useState)(w[0].value);return a.createElement("div",null,a.createElement(r,{name:"default",options:w,value:c,onChange:W,disabled:t,disabledOptions:e}))},z=D.bind({});z.args={disabledOptions:["opt-4","opt-5"]};const P=T.bind({});P.args={value:"opt-2",disabledOptions:["opt-1","opt-2","opt-3"]};const N=D.bind({});N.args={disabled:!0};const q=()=>{const t=({title:e,children:c})=>a.createElement("div",{style:{marginBottom:20}},a.createElement("h5",null,e),c);return a.createElement("div",null,a.createElement(t,{title:"Default"},a.createElement(p,{id:"1",name:"default-empty",label:"Radio label",checked:!1})),a.createElement(t,{title:"Checked"},a.createElement(p,{id:"2",name:"default-checked",label:"Radio label",checked:!0})),a.createElement(t,{title:"Disabled default"},a.createElement(p,{id:"3",name:"disabled-default-empty",label:"Radio label",disabled:!0})),a.createElement(t,{title:"Disabled checked"},a.createElement(p,{id:"4",name:"disabled-default-checked",label:"Radio label",checked:!0,disabled:!0})))};q.parameters={controls:{hideNoControlsWarning:!0}};var ge=he;D.parameters=s(o({},D.parameters),{docs:s(o({},(v=D.parameters)==null?void 0:v.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={defaultOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(R=(S=D.parameters)==null?void 0:S.docs)==null?void 0:R.source)})}),A.parameters=s(o({},A.parameters),{docs:s(o({},(m=A.parameters)==null?void 0:m.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={longTextOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(d=(f=A.parameters)==null?void 0:f.docs)==null?void 0:d.source)})}),G.parameters=s(o({},G.parameters),{docs:s(o({},(O=G.parameters)==null?void 0:O.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="withDescriptions" options={[{
    label: 'Prometheus',
    value: 'prometheus',
    description: 'Monitoring system & TSDB'
  }, {
    label: 'Loki',
    value: 'loki',
    description: 'Log aggregation system'
  }]} />
  </div>`},(Q=(M=G.parameters)==null?void 0:M.docs)==null?void 0:Q.source)})}),T.parameters=s(o({},T.parameters),{docs:s(o({},(ee=T.parameters)==null?void 0:ee.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => {
  const [selected, setSelected] = useState<string>(defaultOptions[0].value!);
  return <div>
      <RadioButtonList name="default" options={defaultOptions} value={selected} onChange={setSelected} disabled={disabled} disabledOptions={disabledOptions} />
    </div>;
}`},(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source)})}),z.parameters=s(o({},z.parameters),{docs:s(o({},(ae=z.parameters)==null?void 0:ae.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={defaultOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(ie=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ie.source)})}),P.parameters=s(o({},P.parameters),{docs:s(o({},(se=P.parameters)==null?void 0:se.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => {
  const [selected, setSelected] = useState<string>(defaultOptions[0].value!);
  return <div>
      <RadioButtonList name="default" options={defaultOptions} value={selected} onChange={setSelected} disabled={disabled} disabledOptions={disabledOptions} />
    </div>;
}`},(le=(re=P.parameters)==null?void 0:re.docs)==null?void 0:le.source)})}),N.parameters=s(o({},N.parameters),{docs:s(o({},(de=N.parameters)==null?void 0:de.docs),{source:o({originalSource:`({
  disabled,
  disabledOptions
}) => <div>
    <RadioButtonList name="default" options={defaultOptions} disabled={disabled} disabledOptions={disabledOptions} />
  </div>`},(ce=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ce.source)})}),q.parameters=s(o({},q.parameters),{docs:s(o({},(pe=q.parameters)==null?void 0:pe.docs),{source:o({originalSource:`() => {
  const Wrapper = ({
    title,
    children
  }: React.PropsWithChildren<{
    title: string;
  }>) => <div style={{
    marginBottom: 20
  }}>
      <h5>{title}</h5>
      {children}
    </div>;
  return <div>
      <Wrapper title="Default">
        <RadioButtonDot id="1" name="default-empty" label="Radio label" checked={false} />
      </Wrapper>

      <Wrapper title="Checked">
        <RadioButtonDot id="2" name="default-checked" label="Radio label" checked />
      </Wrapper>

      <Wrapper title="Disabled default">
        <RadioButtonDot id="3" name="disabled-default-empty" label="Radio label" disabled />
      </Wrapper>

      <Wrapper title="Disabled checked">
        <RadioButtonDot id="4" name="disabled-default-checked" label="Radio label" checked disabled />
      </Wrapper>
    </div>;
}`},(fe=(me=q.parameters)==null?void 0:me.docs)==null?void 0:fe.source)})})},"../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js":function(V,y,u){u.d(y,{iv:function(){return K},cx:function(){return h},F4:function(){return Y}});var a=u("../../../yarn/cache/@emotion-cache-npm-11.11.0-3e6e449071-8eb1dc22be.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),b=u("../../../yarn/cache/@emotion-serialize-npm-1.1.2-4b856d3761-413c352e65.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),j=u("../../../yarn/cache/@emotion-utils-npm-1.2.1-3d04f99348-e0b44be070.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function p(_,x){if(_.inserted[x.name]===void 0)return _.insert("",x,_.sheet,!0)}function B(_,x,i){var o=[],s=(0,j.fp)(_,o,i);return o.length<2?i:s+x(o)}var L=function(x){var i=(0,a.Z)(x);i.sheet.speedy=function(R){this.isSpeedy=R},i.compat=!0;var o=function(){for(var m=arguments.length,f=new Array(m),d=0;d<m;d++)f[d]=arguments[d];var O=(0,b.O)(f,i.registered,void 0);return(0,j.My)(i,O,!1),i.key+"-"+O.name},s=function(){for(var m=arguments.length,f=new Array(m),d=0;d<m;d++)f[d]=arguments[d];var O=(0,b.O)(f,i.registered),M="animation-"+O.name;return p(i,{name:O.name,styles:"@keyframes "+M+"{"+O.styles+"}"}),M},v=function(){for(var m=arguments.length,f=new Array(m),d=0;d<m;d++)f[d]=arguments[d];var O=(0,b.O)(f,i.registered);p(i,O)},S=function(){for(var m=arguments.length,f=new Array(m),d=0;d<m;d++)f[d]=arguments[d];return B(i.registered,o,r(f))};return{css:o,cx:S,injectGlobal:v,keyframes:s,hydrate:function(m){m.forEach(function(f){i.inserted[f]=!0})},flush:function(){i.registered={},i.inserted={},i.sheet.flush()},sheet:i.sheet,cache:i,getRegisteredStyles:j.fp.bind(null,i.registered),merge:B.bind(null,i.registered,o)}},r=function _(x){for(var i="",o=0;o<x.length;o++){var s=x[o];if(s!=null){var v=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))v=_(s);else{v="";for(var S in s)s[S]&&S&&(v&&(v+=" "),v+=S)}break}default:v=s}v&&(i&&(i+=" "),i+=v)}}return i},l=L({key:"css"}),n=l.flush,g=l.hydrate,h=l.cx,C=l.merge,k=l.getRegisteredStyles,I=l.injectGlobal,Y=l.keyframes,K=l.css,J=l.sheet,Z=l.cache},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(V,y,u){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=u("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=Symbol.for("react.element"),j=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,B=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function r(l,n,g){var h,C={},k=null,I=null;g!==void 0&&(k=""+g),n.key!==void 0&&(k=""+n.key),n.ref!==void 0&&(I=n.ref);for(h in n)p.call(n,h)&&!L.hasOwnProperty(h)&&(C[h]=n[h]);if(l&&l.defaultProps)for(h in n=l.defaultProps,n)C[h]===void 0&&(C[h]=n[h]);return{$$typeof:b,type:l,key:k,ref:I,props:C,_owner:B.current}}y.Fragment=j,y.jsx=r,y.jsxs=r},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(V,y,u){V.exports=u("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
