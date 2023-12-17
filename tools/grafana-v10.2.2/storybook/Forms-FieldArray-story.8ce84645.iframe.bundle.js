"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[8158],{"./src/components/Forms/Form.tsx":function($,b,l){l.d(b,{l:function(){return I}});var c=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),O=l("../../.yarn/__virtual__/react-hook-form-virtual-1e28f62e5b/2/yarn/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js"),j=Object.defineProperty,h=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,T=(y,S,x)=>S in y?j(y,S,{enumerable:!0,configurable:!0,writable:!0,value:x}):y[S]=x,R=(y,S)=>{for(var x in S||(S={}))w.call(S,x)&&T(y,x,S[x]);if(h)for(var x of h(S))C.call(S,x)&&T(y,x,S[x]);return y},N=(y,S)=>{var x={};for(var E in y)w.call(y,E)&&S.indexOf(E)<0&&(x[E]=y[E]);if(y!=null&&h)for(var E of h(y))S.indexOf(E)<0&&C.call(y,E)&&(x[E]=y[E]);return x};function I(y){var S=y,{defaultValues:x,onSubmit:E,validateOnMount:f=!1,validateFieldsOnMount:V,children:D,validateOn:d="onSubmit",maxWidth:o=600}=S,s=N(S,["defaultValues","onSubmit","validateOnMount","validateFieldsOnMount","children","validateOn","maxWidth"]);const u=(0,O.cI)({mode:d,defaultValues:x}),{handleSubmit:_,trigger:P,formState:B}=u,W=N(u,["handleSubmit","trigger","formState"]);return(0,v.useEffect)(()=>{f&&P(V)},[P,V,f]),v.createElement("form",R({className:(0,c.iv)({maxWidth:o!=="none"?o+"px":o,width:"100%"}),onSubmit:_(E)},s),D(R({errors:B.errors,formState:B,trigger:P},W)))}try{I.displayName="Form",I.__docgenInfo={description:"",displayName:"Form",props:{validateOn:{defaultValue:{value:"onSubmit"},description:"",name:"validateOn",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'},{value:'"onSubmit"'},{value:'"all"'},{value:'"onTouched"'}]}},validateOnMount:{defaultValue:{value:"false"},description:"",name:"validateOnMount",required:!1,type:{name:"boolean"}},validateFieldsOnMount:{defaultValue:null,description:"",name:"validateFieldsOnMount",required:!1,type:{name:"string | string[]"}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"{ [x: string]: any; }"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"SubmitHandler<T>"}},maxWidth:{defaultValue:{value:"600"},description:"Sets max-width for container. Use it instead of setting individual widths on inputs.",name:"maxWidth",required:!1,type:{name:'number | "none"'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Form.tsx#Form"]={docgenInfo:I.__docgenInfo,name:"Form",path:"src/components/Forms/Form.tsx#Form"})}catch{}},"./src/components/Input/Input.tsx":function($,b,l){l.d(b,{H:function(){return d},I:function(){return D}});var c=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),O=l("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js"),j=l("./src/themes/ThemeContext.tsx"),h=l("./src/themes/stylesFactory.ts"),w=l("./src/components/Forms/commonStyles.ts"),C=l("./src/components/Spinner/Spinner.tsx"),T=Object.defineProperty,R=Object.defineProperties,N=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,x=(o,s,u)=>s in o?T(o,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[s]=u,E=(o,s)=>{for(var u in s||(s={}))y.call(s,u)&&x(o,u,s[u]);if(I)for(var u of I(s))S.call(s,u)&&x(o,u,s[u]);return o},f=(o,s)=>R(o,N(s)),V=(o,s)=>{var u={};for(var _ in o)y.call(o,_)&&s.indexOf(_)<0&&(u[_]=o[_]);if(o!=null&&I)for(var _ of I(o))s.indexOf(_)<0&&S.call(o,_)&&(u[_]=o[_]);return u};const D=v.forwardRef((o,s)=>{const u=o,{className:_,addonAfter:P,addonBefore:B,prefix:W,suffix:K,invalid:H,loading:z,width:U=0}=u,Y=V(u,["className","addonAfter","addonBefore","prefix","suffix","invalid","loading","width"]),[k,Z]=(0,O.Z)(),[Q,r]=(0,O.Z)(),t=(0,j.l4)(),e=d({theme:t,invalid:!!H,width:U});return v.createElement("div",{className:(0,c.cx)(e.wrapper,_),"data-testid":"input-wrapper"},!!B&&v.createElement("div",{className:e.addon},B),v.createElement("div",{className:e.inputWrapper},W&&v.createElement("div",{className:e.prefix,ref:k},W),v.createElement("input",f(E({ref:s,className:e.input},Y),{style:{paddingLeft:W?Z.width+12:void 0,paddingRight:K||z?r.width+12:void 0}})),(K||z)&&v.createElement("div",{className:e.suffix,ref:Q},z&&v.createElement(C.$,{className:e.loadingIndicator,inline:!0}),K)),!!P&&v.createElement("div",{className:e.addon},P))});D.displayName="Input";const d=(0,h.B)(({theme:o,invalid:s=!1,width:u})=>{const _="28px",P=(0,c.iv)({position:"absolute",top:0,zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",flexGrow:0,flexShrink:0,fontSize:o.typography.size.md,height:"100%",minWidth:_,color:o.colors.text.secondary});return{wrapper:(0,c.cx)((0,c.iv)({label:"input-wrapper",display:"flex",width:u?o.spacing(u):"100%",height:o.spacing(o.components.height.md),borderRadius:o.shape.radius.default,"&:hover":{"> .prefix, .suffix, .input":{borderColor:s?o.colors.error.border:o.colors.primary.border},"input[type='number']":{appearance:"textfield"},"input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":{WebkitAppearance:"inner-spin-button !important",opacity:1}}})),inputWrapper:(0,c.iv)({label:"input-inputWrapper",position:"relative",flexGrow:1,zIndex:1,"&:not(:first-child):last-child":{"> input":{borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0}},"&:first-child:not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}},"&:not(:first-child):not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}},input:{"&:not(:first-child)":{paddingLeft:_},"&:not(:last-child)":{paddingRight:_},"&[readonly]":{cursor:"default"}}}),input:(0,c.cx)((0,w.GL)(o),(0,w.RK)(o,s),(0,c.iv)({label:"input-input",position:"relative",zIndex:0,flexGrow:1,borderRadius:o.shape.radius.default,height:"100%",width:"100%"})),inputDisabled:(0,c.iv)({backgroundColor:o.colors.action.disabledBackground,color:o.colors.action.disabledText,border:`1px solid ${o.colors.action.disabledBackground}`,"&:focus":{boxShadow:"none"}}),addon:(0,c.iv)({label:"input-addon",display:"flex",justifyContent:"center",alignItems:"center",flexGrow:0,flexShrink:0,position:"relative","&:first-child":{borderTopRightRadius:0,borderBottomRightRadius:0,"> :last-child":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&:last-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0,"> :first-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0}},"> *:focus":{zIndex:2}}),prefix:(0,c.cx)(P,(0,c.iv)({label:"input-prefix",paddingLeft:o.spacing(1),paddingRight:o.spacing(.5),borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0})),suffix:(0,c.cx)(P,(0,c.iv)({label:"input-suffix",paddingLeft:o.spacing(1),paddingRight:o.spacing(1),marginBottom:"-2px",borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0,right:0})),loadingIndicator:(0,c.iv)({"& + *":{marginLeft:o.spacing(.5)}})}});try{D.displayName="Input",D.__docgenInfo={description:"",displayName:"Input",props:{width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:D.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch{}},"./src/components/Layout/Layout.tsx":function($,b,l){l.d(b,{Ar:function(){return y},Lh:function(){return S},wc:function(){return x}});var c=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),O=l("./src/themes/ThemeContext.tsx"),j=Object.defineProperty,h=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,T=(d,o,s)=>o in d?j(d,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[o]=s,R=(d,o)=>{for(var s in o||(o={}))w.call(o,s)&&T(d,s,o[s]);if(h)for(var s of h(o))C.call(o,s)&&T(d,s,o[s]);return d},N=(d,o)=>{var s={};for(var u in d)w.call(d,u)&&o.indexOf(u)<0&&(s[u]=d[u]);if(d!=null&&h)for(var u of h(d))o.indexOf(u)<0&&C.call(d,u)&&(s[u]=d[u]);return s},I=(d=>(d[d.Horizontal=0]="Horizontal",d[d.Vertical=1]="Vertical",d))(I||{});const y=d=>{var o=d,{children:s,orientation:u=0,spacing:_="sm",justify:P="flex-start",align:B="normal",wrap:W=!1,width:K="100%",height:H="100%"}=o,z=N(o,["children","orientation","spacing","justify","align","wrap","width","height"]);const U=(0,O.wW)(f,u,_,P,B,W);return v.createElement("div",R({className:U.layout,style:{width:K,height:H}},z),v.Children.toArray(s).filter(Boolean).map((Y,k)=>v.createElement("div",{className:U.childWrapper,key:k},Y)))},S=({children:d,spacing:o,justify:s,align:u="center",wrap:_,width:P,height:B})=>v.createElement(y,{spacing:o,justify:s,orientation:0,align:u,width:P,height:B,wrap:_},d),x=({children:d,spacing:o,justify:s,align:u,width:_,height:P})=>v.createElement(y,{spacing:o,justify:s,orientation:1,align:u,width:_,height:P},d),E=({children:d,padding:o,margin:s,grow:u,shrink:_})=>{const P=useStyles2(D,o,s);return React.createElement("div",{className:cx(P.wrapper,u!==void 0&&css({flexGrow:u}),_!==void 0&&css({flexShrink:_}))},d)},f=(d,o,s,u,_,P)=>{const B=s!=="none"?d.spacing(V[s]):0,W=o===0&&!P||o===1?0:`-${B}`,K=o===1?"vertical-group":"horizontal-group";return{layout:(0,c.iv)({label:K,display:"flex",flexDirection:o===1?"column":"row",flexWrap:P?"wrap":"nowrap",justifyContent:u,alignItems:_,height:"100%",maxWidth:"100%",marginBottom:W}),childWrapper:(0,c.iv)({label:"layoutChildrenWrapper",marginBottom:o===0&&!P?0:B,marginRight:o===0?B:0,display:"flex",alignItems:_,"&:last-child":{marginBottom:o===1?0:void 0,marginRight:o===0?0:void 0}})}},V={none:0,xs:.5,sm:1,md:2,lg:3},D=(d,o,s)=>{const u=o&&o!=="none"&&d.spacing(V[o])||0,_=s&&s!=="none"&&d.spacing(V[s])||0;return{wrapper:css({label:"container",margin:_,padding:u})}};try{y.displayName="Layout",y.__docgenInfo={description:"",displayName:"Layout",props:{orientation:{defaultValue:{value:"Orientation.Horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:y.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch{}try{S.displayName="HorizontalGroup",S.__docgenInfo={description:"",displayName:"HorizontalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#HorizontalGroup"]={docgenInfo:S.__docgenInfo,name:"HorizontalGroup",path:"src/components/Layout/Layout.tsx#HorizontalGroup"})}catch{}try{x.displayName="VerticalGroup",x.__docgenInfo={description:"",displayName:"VerticalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#VerticalGroup"]={docgenInfo:x.__docgenInfo,name:"VerticalGroup",path:"src/components/Layout/Layout.tsx#VerticalGroup"})}catch{}try{E.displayName="Container",E.__docgenInfo={description:"",displayName:"Container",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"number"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Container"]={docgenInfo:E.__docgenInfo,name:"Container",path:"src/components/Layout/Layout.tsx#Container"})}catch{}},"./src/components/Spinner/Spinner.tsx":function($,b,l){l.d(b,{$:function(){return w}});var c=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),O=l("./src/themes/stylesFactory.ts"),j=l("./src/components/Icon/Icon.tsx");const h=(0,O.B)((C,T)=>(0,c.iv)([{fontSize:typeof C=="string"?C:`${C}px`},T&&{display:"inline-block"}])),w=({className:C,inline:T=!1,iconClassName:R,style:N,size:I=16})=>{const y=h(I,T);return v.createElement("div",{"data-testid":"Spinner",style:N,className:(0,c.cx)(y,C)},v.createElement(j.J,{className:(0,c.cx)("fa-spin",R),name:"fa fa-spinner","aria-label":"loading spinner"}))};try{w.displayName="Spinner",w.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"string | number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:w.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch{}},"./src/themes/stylesFactory.ts":function($,b,l){l.d(b,{B:function(){return O}});var c=l("../../../yarn/cache/micro-memoize-npm-4.1.2-8063c85cb2-4b02750622.zip/node_modules/micro-memoize/dist/micro-memoize.js"),v=l.n(c);function O(j){return v()(j)}},"./src/utils/storybook/withStoryContainer.tsx":function($,b,l){l.d(b,{r:function(){return j}});var c=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const O=({width:h,height:w,showBoundaries:C,children:T})=>{const R="#f0f0f0",N=h?`${h}px`:"100%",I=w!==0?`${w}px`:"auto",y=C&&(0,c.iv)({backgroundColor:"white",backgroundSize:"30px 30px",backgroundPosition:"0 0, 15px 15px",backgroundImage:`linear-gradient(
          45deg,
          ${R} 25%,
          transparent 25%,
          transparent 75%,
          ${R} 75%,
          ${R}
        ),
        linear-gradient(45deg, ${R} 25%, transparent 25%, transparent 75%, ${R} 75%, ${R})`});return v.createElement("div",{className:(0,c.cx)((0,c.iv)({width:N,height:I}),y)},T)},j=(h,w)=>v.createElement(O,{width:w.args.containerWidth,height:w.args.containerHeight,showBoundaries:w.args.showBoundaries},h())},"./src/components/Forms/FieldArray.story.tsx":function($,b,l){l.r(b),l.d(b,{Simple:function(){return r},default:function(){return Q}});var c=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),v=l("./src/components/Forms/Form.tsx"),O=l("./src/components/Layout/Layout.tsx"),j=l("./src/components/Input/Input.tsx"),h=l("./src/components/Button/Button.tsx"),w=l("./src/utils/storybook/withStoryContainer.tsx"),C=l("../../.yarn/__virtual__/react-hook-form-virtual-1e28f62e5b/2/yarn/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js"),T=Object.defineProperty,R=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,y=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,S=(t,e)=>{for(var n in e||(e={}))N.call(e,n)&&y(t,n,e[n]);if(R)for(var n of R(e))I.call(e,n)&&y(t,n,e[n]);return t},x=(t,e)=>{var n={};for(var a in t)N.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&R)for(var a of R(t))e.indexOf(a)<0&&I.call(t,a)&&(n[a]=t[a]);return n};const E=t=>{var e=t,{name:n,control:a,children:i}=e,p=x(e,["name","control","children"]);const{fields:g,append:M,prepend:m,remove:A,swap:F,move:L,insert:G}=(0,C.Dq)(S({control:a,name:n},p));return i({fields:g,append:M,prepend:m,remove:A,swap:F,move:L,insert:G})};try{E.displayName="FieldArray",E.__docgenInfo={description:"",displayName:"FieldArray",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},keyName:{defaultValue:null,description:"",name:"keyName",required:!1,type:{name:"enum",value:[{value:'"id"'}]}},control:{defaultValue:null,description:"",name:"control",required:!1,type:{name:"Control<FieldValues>"}},shouldUnregister:{defaultValue:null,description:"",name:"shouldUnregister",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/FieldArray.tsx#FieldArray"]={docgenInfo:E.__docgenInfo,name:"FieldArray",path:"src/components/Forms/FieldArray.tsx#FieldArray"})}catch{}var f=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),V=l("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),D=l("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function d(t){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h3:"h3",pre:"pre"},(0,V.ah)(),t.components);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D.h_,{title:"MDX|FieldArray",component:E}),`
`,(0,f.jsx)(e.h1,{id:"fieldarray",children:"FieldArray"}),`
`,(0,f.jsxs)(e.p,{children:[(0,f.jsx)(e.code,{children:"FieldArray"})," provides a way to render a list of dynamic inputs. It exposes the functionality of ",(0,f.jsx)(e.code,{children:"useFieldArray"})," in ",(0,f.jsx)(e.a,{href:"https://react-hook-form.com/advanced-usage/#FieldArrays",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-hook-form"}),". ",(0,f.jsx)(e.code,{children:"FieldArray"})," must be wrapped at some level by a ",(0,f.jsx)(e.code,{children:"<Form>"})," element."]}),`
`,(0,f.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,f.jsx)(e.pre,{children:(0,f.jsx)(e.code,{className:"language-jsx",children:`import { Form, FieldArray } from '@grafana/ui';

<Form onSubmit={() => console.log('form submitted')}>
  ({control, register}) => (
    <FieldArray control={control} name="People">
      {({ fields, append }) => (
          <div>
              {fields.map((field, index) => (
                  <div key={field.id}>
                      <Input key={index} {...register(\`people[\${index}].firstName\` as const)} value={field.firstName} />
                      <Input {...register(\`people[\${index}].lastName\` as const)} value={field.lastName} />
                  </div>
              ))}
              <Button onClick={() => append({firstName: 'Roger', lastName: 'Waters'})}>Append</Button>
          </div>
      )}
    </FieldArray>
  )
</Form>;
`})}),`
`,(0,f.jsx)(e.h3,{id:"fieldarray-api",children:"FieldArray API"}),`
`,(0,f.jsxs)(e.p,{children:["The ",(0,f.jsx)(e.code,{children:"FieldArray"})," component exposes its API via render prop. Properties exposed are: ",(0,f.jsx)(e.code,{children:"fields"}),", ",(0,f.jsx)(e.code,{children:"append"}),", ",(0,f.jsx)(e.code,{children:"prepend"}),", ",(0,f.jsx)(e.code,{children:"remove"}),", ",(0,f.jsx)(e.code,{children:"swap"}),", ",(0,f.jsx)(e.code,{children:"move"}),", ",(0,f.jsx)(e.code,{children:"insert"})]}),`
`,(0,f.jsx)(e.h3,{id:"props",children:"Props"}),`
`,(0,f.jsx)(D.Ed,{of:E})]})}function o(t={}){const{wrapper:e}=Object.assign({},(0,V.ah)(),t.components);return e?(0,f.jsx)(e,Object.assign({},t,{children:(0,f.jsx)(d,t)})):d(t)}var s=o,u=Object.defineProperty,_=Object.defineProperties,P=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,H=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,z=(t,e)=>{for(var n in e||(e={}))W.call(e,n)&&H(t,n,e[n]);if(B)for(var n of B(e))K.call(e,n)&&H(t,n,e[n]);return t},U=(t,e)=>_(t,P(e)),Y,k,Z,Q={title:"Forms/FieldArray",component:E,decorators:[w.r],parameters:{docs:{page:s},controls:{exclude:["name","keyName","control","shouldUnregister"]}},argTypes:{containerWidth:{control:{type:"range",min:100,max:500,step:10}},containerHeight:{control:{type:"range",min:100,max:500,step:10}}}};const r=t=>{const e={people:[{firstName:"Janis",lastName:"Joplin"}]};return c.createElement(v.l,{onSubmit:n=>console.log(n),defaultValues:e},({control:n,register:a})=>c.createElement("div",null,c.createElement(E,{control:n,name:"people"},({fields:i,append:p})=>c.createElement(c.Fragment,null,c.createElement("div",{style:{marginBottom:"1rem"}},i.map((g,M)=>c.createElement(O.Lh,{key:g.id},c.createElement(j.I,U(z({key:g.id},a(`people.${M}.firstName`)),{defaultValue:g.firstName})),c.createElement(j.I,U(z({key:g.id},a(`people.${M}.lastName`)),{defaultValue:g.lastName}))))),c.createElement(h.zx,{style:{marginRight:"1rem"},onClick:()=>p({firstName:"Roger",lastName:"Waters"})},"Add another"))),c.createElement(h.zx,{type:"submit"},"Submit")))};r.args={containerWidth:300,containerHeight:0,showBoundaries:!1},r.parameters=U(z({},r.parameters),{docs:U(z({},(Y=r.parameters)==null?void 0:Y.docs),{source:z({originalSource:`args => {
  const defaultValues: FieldValues = {
    people: [{
      firstName: 'Janis',
      lastName: 'Joplin'
    }]
  };
  return <Form onSubmit={values => console.log(values)} defaultValues={defaultValues}>
      {({
      control,
      register
    }) => <div>
          <FieldArray control={control} name="people">
            {({
          fields,
          append
        }) => <>
                <div style={{
            marginBottom: '1rem'
          }}>
                  {fields.map((field, index) => <HorizontalGroup key={field.id}>
                      <Input key={field.id} {...register((\`people.\${index}.firstName\` as const))} defaultValue={field.firstName} />
                      <Input key={field.id} {...register((\`people.\${index}.lastName\` as const))} defaultValue={field.lastName} />
                    </HorizontalGroup>)}
                </div>
                <Button style={{
            marginRight: '1rem'
          }} onClick={() => append({
            firstName: 'Roger',
            lastName: 'Waters'
          })}>
                  Add another
                </Button>
              </>}
          </FieldArray>
          <Button type="submit">Submit</Button>
        </div>}
    </Form>;
}`},(Z=(k=r.parameters)==null?void 0:k.docs)==null?void 0:Z.source)})})},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js":function($,b){Object.defineProperty(b,"__esModule",{value:!0}),b.isNavigator=b.isBrowser=b.off=b.on=b.noop=void 0;var l=function(){};b.noop=l;function c(O){for(var j=[],h=1;h<arguments.length;h++)j[h-1]=arguments[h];O&&O.addEventListener&&O.addEventListener.apply(O,j)}b.on=c;function v(O){for(var j=[],h=1;h<arguments.length;h++)j[h-1]=arguments[h];O&&O.removeEventListener&&O.removeEventListener.apply(O,j)}b.off=v,b.isBrowser=typeof window<"u",b.isNavigator=typeof navigator<"u"},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function($,b,l){Object.defineProperty(b,"__esModule",{value:!0});var c=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),v=l("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),O=v.isBrowser?c.useLayoutEffect:c.useEffect;b.default=O},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js":function($,b,l){var c;c={value:!0};var v=l("../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs"),O=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),j=v.__importDefault(l("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),h=l("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),w={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function C(){var T=O.useState(null),R=T[0],N=T[1],I=O.useState(w),y=I[0],S=I[1],x=O.useMemo(function(){return new window.ResizeObserver(function(E){if(E[0]){var f=E[0].contentRect,V=f.x,D=f.y,d=f.width,o=f.height,s=f.top,u=f.left,_=f.bottom,P=f.right;S({x:V,y:D,width:d,height:o,top:s,left:u,bottom:_,right:P})}})},[]);return j.default(function(){if(R)return x.observe(R),function(){x.disconnect()}},[R]),[N,y]}b.Z=h.isBrowser&&typeof window.ResizeObserver<"u"?C:function(){return[h.noop,w]}},"../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs":function($,b,l){l.r(b),l.d(b,{__addDisposableResource:function(){return k},__assign:function(){return O},__asyncDelegator:function(){return _},__asyncGenerator:function(){return u},__asyncValues:function(){return P},__await:function(){return s},__awaiter:function(){return y},__classPrivateFieldGet:function(){return z},__classPrivateFieldIn:function(){return Y},__classPrivateFieldSet:function(){return U},__createBinding:function(){return x},__decorate:function(){return h},__disposeResources:function(){return Q},__esDecorate:function(){return C},__exportStar:function(){return E},__extends:function(){return v},__generator:function(){return S},__importDefault:function(){return H},__importStar:function(){return K},__makeTemplateObject:function(){return B},__metadata:function(){return I},__param:function(){return w},__propKey:function(){return R},__read:function(){return V},__rest:function(){return j},__runInitializers:function(){return T},__setFunctionName:function(){return N},__spread:function(){return D},__spreadArray:function(){return o},__spreadArrays:function(){return d},__values:function(){return f}});var c=function(r,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])},c(r,t)};function v(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");c(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var O=function(){return O=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},O.apply(this,arguments)};function j(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(r);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(e[n[a]]=r[n[a]]);return e}function h(r,t,e,n){var a=arguments.length,i=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,n);else for(var g=r.length-1;g>=0;g--)(p=r[g])&&(i=(a<3?p(i):a>3?p(t,e,i):p(t,e))||i);return a>3&&i&&Object.defineProperty(t,e,i),i}function w(r,t){return function(e,n){t(e,n,r)}}function C(r,t,e,n,a,i){function p(ee){if(ee!==void 0&&typeof ee!="function")throw new TypeError("Function expected");return ee}for(var g=n.kind,M=g==="getter"?"get":g==="setter"?"set":"value",m=!t&&r?n.static?r:r.prototype:null,A=t||(m?Object.getOwnPropertyDescriptor(m,n.name):{}),F,L=!1,G=e.length-1;G>=0;G--){var q={};for(var J in n)q[J]=J==="access"?{}:n[J];for(var J in n.access)q.access[J]=n.access[J];q.addInitializer=function(ee){if(L)throw new TypeError("Cannot add initializers after decoration has completed");i.push(p(ee||null))};var X=(0,e[G])(g==="accessor"?{get:A.get,set:A.set}:A[M],q);if(g==="accessor"){if(X===void 0)continue;if(X===null||typeof X!="object")throw new TypeError("Object expected");(F=p(X.get))&&(A.get=F),(F=p(X.set))&&(A.set=F),(F=p(X.init))&&a.unshift(F)}else(F=p(X))&&(g==="field"?a.unshift(F):A[M]=F)}m&&Object.defineProperty(m,n.name,A),L=!0}function T(r,t,e){for(var n=arguments.length>2,a=0;a<t.length;a++)e=n?t[a].call(r,e):t[a].call(r);return n?e:void 0}function R(r){return typeof r=="symbol"?r:"".concat(r)}function N(r,t,e){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(r,"name",{configurable:!0,value:e?"".concat(e," ",t):t})}function I(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)}function y(r,t,e,n){function a(i){return i instanceof e?i:new e(function(p){p(i)})}return new(e||(e=Promise))(function(i,p){function g(A){try{m(n.next(A))}catch(F){p(F)}}function M(A){try{m(n.throw(A))}catch(F){p(F)}}function m(A){A.done?i(A.value):a(A.value).then(g,M)}m((n=n.apply(r,t||[])).next())})}function S(r,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,p;return p={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function g(m){return function(A){return M([m,A])}}function M(m){if(n)throw new TypeError("Generator is already executing.");for(;p&&(p=0,m[0]&&(e=0)),e;)try{if(n=1,a&&(i=m[0]&2?a.return:m[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,m[1])).done)return i;switch(a=0,i&&(m=[m[0]&2,i.value]),m[0]){case 0:case 1:i=m;break;case 4:return e.label++,{value:m[1],done:!1};case 5:e.label++,a=m[1],m=[0];continue;case 7:m=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(m[0]===6||m[0]===2)){e=0;continue}if(m[0]===3&&(!i||m[1]>i[0]&&m[1]<i[3])){e.label=m[1];break}if(m[0]===6&&e.label<i[1]){e.label=i[1],i=m;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(m);break}i[2]&&e.ops.pop(),e.trys.pop();continue}m=t.call(r,e)}catch(A){m=[6,A],a=0}finally{n=i=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}var x=Object.create?function(r,t,e,n){n===void 0&&(n=e);var a=Object.getOwnPropertyDescriptor(t,e);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(r,n,a)}:function(r,t,e,n){n===void 0&&(n=e),r[n]=t[e]};function E(r,t){for(var e in r)e!=="default"&&!Object.prototype.hasOwnProperty.call(t,e)&&x(t,r,e)}function f(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function V(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),a,i=[],p;try{for(;(t===void 0||t-- >0)&&!(a=n.next()).done;)i.push(a.value)}catch(g){p={error:g}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(p)throw p.error}}return i}function D(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(V(arguments[t]));return r}function d(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),a=0,t=0;t<e;t++)for(var i=arguments[t],p=0,g=i.length;p<g;p++,a++)n[a]=i[p];return n}function o(r,t,e){if(e||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return r.concat(i||Array.prototype.slice.call(t))}function s(r){return this instanceof s?(this.v=r,this):new s(r)}function u(r,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(r,t||[]),a,i=[];return a={},p("next"),p("throw"),p("return"),a[Symbol.asyncIterator]=function(){return this},a;function p(L){n[L]&&(a[L]=function(G){return new Promise(function(q,J){i.push([L,G,q,J])>1||g(L,G)})})}function g(L,G){try{M(n[L](G))}catch(q){F(i[0][3],q)}}function M(L){L.value instanceof s?Promise.resolve(L.value.v).then(m,A):F(i[0][2],L)}function m(L){g("next",L)}function A(L){g("throw",L)}function F(L,G){L(G),i.shift(),i.length&&g(i[0][0],i[0][1])}}function _(r){var t,e;return t={},n("next"),n("throw",function(a){throw a}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(a,i){t[a]=r[a]?function(p){return(e=!e)?{value:s(r[a](p)),done:!1}:i?i(p):p}:i}}function P(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=r[Symbol.asyncIterator],e;return t?t.call(r):(r=typeof f=="function"?f(r):r[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(i){e[i]=r[i]&&function(p){return new Promise(function(g,M){p=r[i](p),a(g,M,p.done,p.value)})}}function a(i,p,g,M){Promise.resolve(M).then(function(m){i({value:m,done:g})},p)}}function B(r,t){return Object.defineProperty?Object.defineProperty(r,"raw",{value:t}):r.raw=t,r}var W=Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t};function K(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var e in r)e!=="default"&&Object.prototype.hasOwnProperty.call(r,e)&&x(t,r,e);return W(t,r),t}function H(r){return r&&r.__esModule?r:{default:r}}function z(r,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?r!==t||!n:!t.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(r):n?n.value:t.get(r)}function U(r,t,e,n,a){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?r!==t||!a:!t.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?a.call(r,e):a?a.value=e:t.set(r,e),e}function Y(r,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof r=="function"?t===r:r.has(t)}function k(r,t,e){if(t!=null){if(typeof t!="object")throw new TypeError("Object expected.");var n;if(e){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if(typeof n!="function")throw new TypeError("Object not disposable.");r.stack.push({value:t,dispose:n,async:e})}else e&&r.stack.push({async:!0});return t}var Z=typeof SuppressedError=="function"?SuppressedError:function(r,t,e){var n=new Error(e);return n.name="SuppressedError",n.error=r,n.suppressed=t,n};function Q(r){function t(n){r.error=r.hasError?new Z(n,r.error,"An error was suppressed during disposal."):n,r.hasError=!0}function e(){for(;r.stack.length;){var n=r.stack.pop();try{var a=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(a).then(e,function(i){return t(i),e()})}catch(i){t(i)}}if(r.hasError)throw r.error}return e()}b.default={__extends:v,__assign:O,__rest:j,__decorate:h,__param:w,__metadata:I,__awaiter:y,__generator:S,__createBinding:x,__exportStar:E,__values:f,__read:V,__spread:D,__spreadArrays:d,__spreadArray:o,__await:s,__asyncGenerator:u,__asyncDelegator:_,__asyncValues:P,__makeTemplateObject:B,__importStar:K,__importDefault:H,__classPrivateFieldGet:z,__classPrivateFieldSet:U,__classPrivateFieldIn:Y,__addDisposableResource:k,__disposeResources:Q}}}]);
