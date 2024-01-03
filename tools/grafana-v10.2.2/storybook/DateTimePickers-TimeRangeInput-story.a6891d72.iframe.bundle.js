"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1417],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(x,f,t){t.d(f,{NF:function(){return r},Zo:function(){return d},ah:function(){return l},pC:function(){return p}});var c=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const p=c.createContext({});function r(i){return u;function u(s){const g=l(s.components);return c.createElement(i,{...s,allComponents:g})}}function l(i){const u=c.useContext(p);return c.useMemo(()=>typeof i=="function"?i(u):{...u,...i},[u,i])}const h={};function d({components:i,children:u,disableParentContext:s}){let g;return s?g=typeof i=="function"?i({}):i||h:g=l(i),c.createElement(p.Provider,{value:g},u)}},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx":function(x,f,t){t.d(f,{L:function(){return p}});var c=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");class p extends c.PureComponent{constructor(){super(...arguments),this.myRef=(0,c.createRef)(),this.state={hasEventListener:!1},this.onOutsideClick=l=>{const h=this.myRef.current;(!h||l.target instanceof Node&&!h.contains(l.target))&&this.props.onClick()}}componentDidMount(){this.props.parent.addEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.addEventListener("keyup",this.onOutsideClick,this.props.useCapture)}componentWillUnmount(){this.props.parent.removeEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.removeEventListener("keyup",this.onOutsideClick,this.props.useCapture)}render(){return c.createElement("div",{ref:this.myRef},this.props.children)}}p.defaultProps={includeButtonPress:!0,parent:typeof window<"u"?window:void 0,useCapture:!1};try{p.displayName="ClickOutsideWrapper",p.__docgenInfo={description:"",displayName:"ClickOutsideWrapper",props:{onClick:{defaultValue:null,description:"Callback to trigger when clicking outside of current element occurs.",name:"onClick",required:!0,type:{name:"() => void"}},includeButtonPress:{defaultValue:{value:"true"},description:"Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.",name:"includeButtonPress",required:!1,type:{name:"boolean"}},parent:{defaultValue:{value:"typeof window !== 'undefined' ? window : undefined"},description:"Object to attach the click event listener to.",name:"parent",required:!1,type:{name:"Window | Document"}},useCapture:{defaultValue:{value:"false"},description:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.",name:"useCapture",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"]={docgenInfo:p.__docgenInfo,name:"ClickOutsideWrapper",path:"src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"})}catch{}},"./src/components/DateTimePickers/TimeRangeInput.story.tsx":function(x,f,t){t.r(f),t.d(f,{Basic:function(){return R},default:function(){return ce}});var c=t("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs"),p=t("@storybook/client-api"),r=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),l=t("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/datetime/moment_wrapper.ts"),h=t("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/time.ts"),d=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("../grafana-e2e-selectors/src/selectors/index.ts"),u=t("./src/themes/stylesFactory.ts"),s=t("./src/themes/ThemeContext.tsx"),g=t("./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx"),m=t("./src/components/Icon/Icon.tsx"),v=t("./src/components/Input/Input.tsx"),O=t("./src/components/DateTimePickers/TimeRangePicker/TimePickerContent.tsx"),k=t("./src/components/DateTimePickers/TimeRangePicker.tsx"),_=t("./src/components/DateTimePickers/utils.ts");const j=(0,r.memo)(function({hideText:n,value:a,timeZone:I="browser",placeholder:S="No time range selected",className:P}){const D=(0,s.wW)(F);return n?null:r.createElement("span",{className:P},(0,_.v)(a)?r.createElement(k.sU,{value:a,timeZone:I}):r.createElement("span",{className:D.placeholder},S))}),F=e=>({placeholder:(0,d.iv)({color:e.colors.text.disabled,opacity:1})});try{j.displayName="TimeRangeLabel",j.__docgenInfo={description:"",displayName:"TimeRangeLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TimeRange"}},hideText:{defaultValue:null,description:"",name:"hideText",required:!1,type:{name:"boolean"}},timeZone:{defaultValue:null,description:"",name:"timeZone",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeRangePicker/TimeRangeLabel.tsx#TimeRangeLabel"]={docgenInfo:j.__docgenInfo,name:"TimeRangeLabel",path:"src/components/DateTimePickers/TimeRangePicker/TimeRangeLabel.tsx#TimeRangeLabel"})}catch{}var Q=t("./src/components/DateTimePickers/options.ts");const J=()=>{},y=({value:e,onChange:n,onChangeTimeZone:a=J,clearable:I,hideTimeZone:S=!0,timeZone:P="browser",placeholder:D="Select time range",isReversed:le=!0,hideQuickRanges:de=!1,disabled:L=!1,showIcon:ue=!1})=>{const[w,K]=(0,r.useState)(!1),pe=(0,s.l4)(),C=$(pe,L),me=T=>{T.stopPropagation(),T.preventDefault(),!L&&K(!w)},U=()=>{K(!1)},fe=T=>{U(),n(T)},ge=T=>{T.stopPropagation();const Y=(0,l.CQ)(null),X=(0,l.CQ)(null);n({from:Y,to:X,raw:{from:Y,to:X}})};return r.createElement("div",{className:C.container},r.createElement("button",{type:"button",className:C.pickerInput,"aria-label":i.wl.components.TimePicker.openButton,onClick:me},ue&&r.createElement(m.J,{name:"clock-nine",size:"sm",className:C.icon}),r.createElement(j,{value:e,timeZone:P,placeholder:D}),!L&&r.createElement("span",{className:C.caretIcon},(0,_.v)(e)&&I&&r.createElement(m.J,{className:C.clearIcon,name:"times",size:"lg",onClick:ge}),r.createElement(m.J,{name:w?"angle-up":"angle-down",size:"lg"}))),w&&r.createElement(g.L,{includeButtonPress:!1,onClick:U},r.createElement(O.x,{timeZone:P,value:(0,_.v)(e)?e:(0,h.JK)(),onChange:fe,quickOptions:Q.r,onChangeTimeZone:a,className:C.content,hideTimeZone:S,isReversed:le,hideQuickRanges:de})))},$=(0,u.B)((e,n=!1)=>{const a=(0,v.H)({theme:e,invalid:!1});return{container:(0,d.iv)({display:"flex",position:"relative"}),content:(0,d.iv)({marginLeft:0,position:"absolute",top:"116%",zIndex:e.zIndex.dropdown}),pickerInput:(0,d.cx)(a.input,n&&a.inputDisabled,a.wrapper,(0,d.iv)({display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",paddingRight:0,lineHeight:`${e.spacing.gridSize*4-2}px`})),caretIcon:(0,d.cx)(a.suffix,(0,d.iv)({position:"relative",top:"-1px",marginLeft:e.spacing(.5)})),clearIcon:(0,d.iv)({marginRight:e.spacing(.5),"&:hover":{color:e.colors.text.maxContrast}}),placeholder:(0,d.iv)({color:e.colors.text.disabled,opacity:1}),icon:(0,d.iv)({marginRight:e.spacing(.5)})}});try{y.displayName="TimeRangeInput",y.__docgenInfo={description:"",displayName:"TimeRangeInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TimeRange"}},timeZone:{defaultValue:{value:"browser"},description:"",name:"timeZone",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timeRange: TimeRange) => void"}},onChangeTimeZone:{defaultValue:{value:"() => {}"},description:"",name:"onChangeTimeZone",required:!1,type:{name:"((timeZone: string) => void)"}},hideTimeZone:{defaultValue:{value:"true"},description:"",name:"hideTimeZone",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Select time range"},description:"",name:"placeholder",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},isReversed:{defaultValue:{value:"true"},description:"Controls horizontal alignment of the picker menu",name:"isReversed",required:!1,type:{name:"boolean"}},hideQuickRanges:{defaultValue:{value:"false"},description:"Controls visibility of the preset time ranges (e.g. **Last 5 minutes**) in the picker menu",name:"hideQuickRanges",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"false"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeRangeInput.tsx#TimeRangeInput"]={docgenInfo:y.__docgenInfo,name:"TimeRangeInput",path:"src/components/DateTimePickers/TimeRangeInput.tsx#TimeRangeInput"})}catch{}var o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),N=t("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),H=t("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function V(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3"},(0,N.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"timerangeinput",children:"TimeRangeInput"}),`
`,(0,o.jsxs)(n.p,{children:["A variant of ",(0,o.jsx)(n.code,{children:"TimeRangePicker"})," for use in forms."]}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dateTime(null)"})," can be used to provide empty time range value. The shape of the return value on input clear is:"]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:`{
  from: dateTime(null),
  to: dateTime(null),
  raw: {
    from: dateTime(null),
    to: dateTime(null),
  },
};
`})}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"dateMath.isValid()"})," from ",(0,o.jsx)(n.code,{children:"@grafana/data"})," can be used to check for a valid time range value."]}),`
`,(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:`import { TimeRangeInput } from '@grafana/ui';

<TimeRangeInput
  value={timeRange}
  onChange={(range) => console.log('range', range)}
  onChangeTimeZone={(tz) => console.log('timezone', tz)}
/>;
`})}),`
`,(0,o.jsx)(n.h3,{id:"props",children:"Props"}),`
`,(0,o.jsx)(H.Ed,{of:y})]})}function q(e={}){const{wrapper:n}=Object.assign({},(0,N.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(V,e)})):V(e)}var G=q,ee=Object.defineProperty,ne=Object.defineProperties,te=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,A=(e,n,a)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))ae.call(n,a)&&A(e,a,n[a]);if(z)for(var a of z(n))re.call(n,a)&&A(e,a,n[a]);return e},E=(e,n)=>ne(e,te(n)),W,B,Z;const M=(0,l.CQ)(Date.now()),oe=e=>!e.from.isValid()&&!e.to.isValid()&&(0,l.v9)(e.raw.from)&&!e.raw.from.isValid()&&(0,l.v9)(e.raw.to)&&!e.raw.to.isValid(),se={from:null,to:null,raw:{from:null,to:null}},ie={title:"Pickers and Editors/TimePickers/TimeRangeInput",component:y,parameters:{controls:{exclude:["onChange","onChangeTimeZone"]},docs:{page:G}},args:{value:{from:M.subtract(6,"h"),to:M,raw:{from:"now-6h",to:"now"}},timeZone:h.Ys}},R=e=>{const[,n]=(0,p.useArgs)();return r.createElement(y,E(b({},e),{onChange:a=>{(0,c.aD)("onChange fired")(a),n({value:oe(a)?se:a})},onChangeTimeZone:a=>{(0,c.aD)("onChangeTimeZone fired")(a),n({timeZone:a})}}))};var ce=ie;R.parameters=E(b({},R.parameters),{docs:E(b({},(W=R.parameters)==null?void 0:W.docs),{source:b({originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <TimeRangeInput {...args} onChange={value => {
    action('onChange fired')(value);
    // Need some special logic to handle when the range is cleared since
    // storybook controls don't support null datetimes
    updateArgs({
      value: isOnRangeClear(value) ? nullRange : value
    });
  }} onChangeTimeZone={timeZone => {
    action('onChangeTimeZone fired')(timeZone);
    updateArgs({
      timeZone
    });
  }} />;
}`},(Z=(B=R.parameters)==null?void 0:B.docs)==null?void 0:Z.source)})})},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(x,f,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),p=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,h=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(u,s,g){var m,v={},O=null,k=null;g!==void 0&&(O=""+g),s.key!==void 0&&(O=""+s.key),s.ref!==void 0&&(k=s.ref);for(m in s)l.call(s,m)&&!d.hasOwnProperty(m)&&(v[m]=s[m]);if(u&&u.defaultProps)for(m in s=u.defaultProps,s)v[m]===void 0&&(v[m]=s[m]);return{$$typeof:p,type:u,key:O,ref:k,props:v,_owner:h.current}}f.Fragment=r,f.jsx=i,f.jsxs=i},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(x,f,t){x.exports=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);