"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4768],{"./src/components/Layout/Layout.tsx":function(M,O,i){i.d(O,{Ar:function(){return f},Lh:function(){return g},wc:function(){return x}});var d=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),p=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),E=i("./src/themes/ThemeContext.tsx"),A=Object.defineProperty,_=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&b(e,r,t[r]);if(_)for(var r of _(t))R.call(t,r)&&b(e,r,t[r]);return e},y=(e,t)=>{var r={};for(var l in e)C.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&_)for(var l of _(e))t.indexOf(l)<0&&R.call(e,l)&&(r[l]=e[l]);return r},P=(e=>(e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical",e))(P||{});const f=e=>{var t=e,{children:r,orientation:l=0,spacing:c="sm",justify:u="flex-start",align:v="normal",wrap:z=!1,width:I="100%",height:h="100%"}=t,V=y(t,["children","orientation","spacing","justify","align","wrap","width","height"]);const D=(0,E.wW)(S,l,c,u,v,z);return p.createElement("div",T({className:D.layout,style:{width:I,height:h}},V),p.Children.toArray(r).filter(Boolean).map((N,K)=>p.createElement("div",{className:D.childWrapper,key:K},N)))},g=({children:e,spacing:t,justify:r,align:l="center",wrap:c,width:u,height:v})=>p.createElement(f,{spacing:t,justify:r,orientation:0,align:l,width:u,height:v,wrap:c},e),x=({children:e,spacing:t,justify:r,align:l,width:c,height:u})=>p.createElement(f,{spacing:t,justify:r,orientation:1,align:l,width:c,height:u},e),w=({children:e,padding:t,margin:r,grow:l,shrink:c})=>{const u=useStyles2(o,t,r);return React.createElement("div",{className:cx(u.wrapper,l!==void 0&&css({flexGrow:l}),c!==void 0&&css({flexShrink:c}))},e)},S=(e,t,r,l,c,u)=>{const v=r!=="none"?e.spacing(L[r]):0,z=t===0&&!u||t===1?0:`-${v}`,I=t===1?"vertical-group":"horizontal-group";return{layout:(0,d.iv)({label:I,display:"flex",flexDirection:t===1?"column":"row",flexWrap:u?"wrap":"nowrap",justifyContent:l,alignItems:c,height:"100%",maxWidth:"100%",marginBottom:z}),childWrapper:(0,d.iv)({label:"layoutChildrenWrapper",marginBottom:t===0&&!u?0:v,marginRight:t===0?v:0,display:"flex",alignItems:c,"&:last-child":{marginBottom:t===1?0:void 0,marginRight:t===0?0:void 0}})}},L={none:0,xs:.5,sm:1,md:2,lg:3},o=(e,t,r)=>{const l=t&&t!=="none"&&e.spacing(L[t])||0,c=r&&r!=="none"&&e.spacing(L[r])||0;return{wrapper:css({label:"container",margin:c,padding:l})}};try{f.displayName="Layout",f.__docgenInfo={description:"",displayName:"Layout",props:{orientation:{defaultValue:{value:"Orientation.Horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:f.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch{}try{g.displayName="HorizontalGroup",g.__docgenInfo={description:"",displayName:"HorizontalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#HorizontalGroup"]={docgenInfo:g.__docgenInfo,name:"HorizontalGroup",path:"src/components/Layout/Layout.tsx#HorizontalGroup"})}catch{}try{x.displayName="VerticalGroup",x.__docgenInfo={description:"",displayName:"VerticalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#VerticalGroup"]={docgenInfo:x.__docgenInfo,name:"VerticalGroup",path:"src/components/Layout/Layout.tsx#VerticalGroup"})}catch{}try{w.displayName="Container",w.__docgenInfo={description:"",displayName:"Container",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"number"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Container"]={docgenInfo:w.__docgenInfo,name:"Container",path:"src/components/Layout/Layout.tsx#Container"})}catch{}},"./src/components/TextArea/TextArea.tsx":function(M,O,i){i.d(O,{K:function(){return S}});var d=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),p=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),E=i("./src/themes/ThemeContext.tsx"),A=i("./src/themes/stylesFactory.ts"),_=i("./src/components/Forms/commonStyles.ts"),C=Object.defineProperty,R=Object.defineProperties,b=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,f=(o,e,t)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))y.call(e,t)&&f(o,t,e[t]);if(T)for(var t of T(e))P.call(e,t)&&f(o,t,e[t]);return o},x=(o,e)=>R(o,b(e)),w=(o,e)=>{var t={};for(var r in o)y.call(o,r)&&e.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&T)for(var r of T(o))e.indexOf(r)<0&&P.call(o,r)&&(t[r]=o[r]);return t};const S=p.forwardRef((o,e)=>{var t=o,{invalid:r,className:l}=t,c=w(t,["invalid","className"]);const u=(0,E.l4)(),v=L(u,r);return p.createElement("textarea",x(g({},c),{className:(0,d.cx)(v.textarea,l),ref:e}))}),L=(0,A.B)((o,e=!1)=>({textarea:(0,d.cx)((0,_.RK)(o),(0,_.GL)(o),(0,d.iv)({display:"block",borderRadius:o.shape.radius.default,padding:`${o.spacing.gridSize/4}px ${o.spacing.gridSize}px`,width:"100%",borderColor:e?o.colors.error.border:o.components.input.borderColor}))}));S.displayName="TextArea";try{S.displayName="TextArea",S.__docgenInfo={description:"",displayName:"TextArea",props:{invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:S.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch{}},"./src/themes/stylesFactory.ts":function(M,O,i){i.d(O,{B:function(){return E}});var d=i("../../../yarn/cache/micro-memoize-npm-4.1.2-8063c85cb2-4b02750622.zip/node_modules/micro-memoize/dist/micro-memoize.js"),p=i.n(d);function E(A){return p()(A)}},"./src/components/SecretTextArea/SecretTextArea.story.tsx":function(M,O,i){i.r(O),i.d(O,{basic:function(){return j},default:function(){return q},secretIsConfigured:function(){return B}});var d=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),p=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),E=i("./src/themes/ThemeContext.tsx"),A=i("./src/components/Button/Button.tsx"),_=i("./src/components/Layout/Layout.tsx"),C=i("./src/components/TextArea/TextArea.tsx"),R=Object.defineProperty,b=Object.defineProperties,T=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(a,n,s)=>n in a?R(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s,x=(a,n)=>{for(var s in n||(n={}))P.call(n,s)&&g(a,s,n[s]);if(y)for(var s of y(n))f.call(n,s)&&g(a,s,n[s]);return a},w=(a,n)=>b(a,T(n)),S=(a,n)=>{var s={};for(var m in a)P.call(a,m)&&n.indexOf(m)<0&&(s[m]=a[m]);if(a!=null&&y)for(var m of y(a))n.indexOf(m)<0&&f.call(a,m)&&(s[m]=a[m]);return s};const L="configured",o="Reset",e=a=>({configuredStyle:(0,p.iv)({minHeight:a.spacing(a.components.height.md),paddingTop:a.spacing(.5),resize:"none"})}),t=a=>{var n=a,{isConfigured:s,onReset:m}=n,Y=S(n,["isConfigured","onReset"]);const $=(0,E.wW)(e);return d.createElement(_.Lh,null,!s&&d.createElement(C.K,x({},Y)),s&&d.createElement(C.K,w(x({},Y),{rows:1,disabled:!0,value:L,className:(0,p.cx)($.configuredStyle)})),s&&d.createElement(A.zx,{onClick:m,variant:"secondary"},o))};try{t.displayName="SecretTextArea",t.__docgenInfo={description:`Text area that does not disclose an already configured value but lets the user reset the current value and enter a new one.
Typically useful for asymmetric cryptography keys.`,displayName:"SecretTextArea",props:{invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},isConfigured:{defaultValue:null,description:"TRUE if the secret was already configured. (It is needed as often the backend doesn't send back the actual secret, only the information that it was configured)",name:"isConfigured",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SecretTextArea/SecretTextArea.tsx#SecretTextArea"]={docgenInfo:t.__docgenInfo,name:"SecretTextArea",path:"src/components/SecretTextArea/SecretTextArea.tsx#SecretTextArea"})}catch{}var r=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,I=(a,n,s)=>n in a?r(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s,h=(a,n)=>{for(var s in n||(n={}))v.call(n,s)&&I(a,s,n[s]);if(u)for(var s of u(n))z.call(n,s)&&I(a,s,n[s]);return a},V=(a,n)=>l(a,c(n)),D,N,K,W,G,U;const F={title:"Forms/SecretTextArea",component:t,parameters:{controls:{exclude:["prefix","suffix","addonBefore","addonAfter","type","disabled","invalid","loading","before","after"]}},args:{rows:3,cols:30,placeholder:"Enter your secret..."},argTypes:{rows:{control:{type:"range",min:1,max:50,step:1}},cols:{control:{type:"range",min:1,max:200,step:10}}}},H=a=>{const[n,s]=(0,d.useState)("");return d.createElement(t,{rows:a.rows,cols:a.cols,value:n,isConfigured:a.isConfigured,placeholder:a.placeholder,onChange:m=>s(m.target.value.trim()),onReset:()=>s("")})},j=H.bind({});j.args={isConfigured:!1};const B=H.bind({});B.args={isConfigured:!0};var q=F;j.parameters=V(h({},j.parameters),{docs:V(h({},(D=j.parameters)==null?void 0:D.docs),{source:h({originalSource:`args => {
  const [secret, setSecret] = useState('');
  return <SecretTextArea rows={args.rows} cols={args.cols} value={secret} isConfigured={args.isConfigured} placeholder={args.placeholder} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setSecret(event.target.value.trim())} onReset={() => setSecret('')} />;
}`},(K=(N=j.parameters)==null?void 0:N.docs)==null?void 0:K.source)})}),B.parameters=V(h({},B.parameters),{docs:V(h({},(W=B.parameters)==null?void 0:W.docs),{source:h({originalSource:`args => {
  const [secret, setSecret] = useState('');
  return <SecretTextArea rows={args.rows} cols={args.cols} value={secret} isConfigured={args.isConfigured} placeholder={args.placeholder} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setSecret(event.target.value.trim())} onReset={() => setSecret('')} />;
}`},(U=(G=B.parameters)==null?void 0:G.docs)==null?void 0:U.source)})})}}]);