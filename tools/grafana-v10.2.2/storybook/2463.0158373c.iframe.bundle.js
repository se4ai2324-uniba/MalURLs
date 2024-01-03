"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2463],{"../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs":function(U,b,p){p.d(b,{aD:function(){return f.aD}});var f=p("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),e=(...y)=>{let l=config,o=y;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(l={...config,...o.pop()});let g=o[0];(o.length!==1||typeof g=="string")&&(g={},o.forEach(v=>{g[v]=v}));let m={};return Object.keys(g).forEach(v=>{m[v]=action(g[v],l)}),m}},"./src/components/Alert/Alert.tsx":function(U,b,p){p.d(b,{b:function(){return L}});var f=p("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),e=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),y=p("../grafana-e2e-selectors/src/selectors/index.ts"),l=p("./src/themes/ThemeContext.tsx"),o=p("./src/components/Button/Button.tsx"),g=p("./src/components/Icon/Icon.tsx"),m=p("./src/components/Layout/utils/responsiveness.tsx"),v=Object.defineProperty,n=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,A=(t,d,c)=>d in t?v(t,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[d]=c,k=(t,d)=>{for(var c in d||(d={}))V.call(d,c)&&A(t,c,d[c]);if(n)for(var c of n(d))W.call(d,c)&&A(t,c,d[c]);return t},I=(t,d)=>{var c={};for(var h in t)V.call(t,h)&&d.indexOf(h)<0&&(c[h]=t[h]);if(t!=null&&n)for(var h of n(t))d.indexOf(h)<0&&W.call(t,h)&&(c[h]=t[h]);return c};const S=(0,e.forwardRef)((t,d)=>{const c=t,{children:h,margin:j,marginX:C,marginY:R,marginTop:D,marginBottom:T,marginLeft:w,marginRight:z,padding:B,paddingX:N,paddingY:G,paddingTop:Z,paddingBottom:M,paddingLeft:X,paddingRight:F,display:J,backgroundColor:$,grow:Q,shrink:ee,borderColor:ne,borderStyle:te,borderRadius:ae,justifyContent:i,alignItems:se,boxShadow:ie,element:re}=c,oe=I(c,["children","margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","padding","paddingX","paddingY","paddingTop","paddingBottom","paddingLeft","paddingRight","display","backgroundColor","grow","shrink","borderColor","borderStyle","borderRadius","justifyContent","alignItems","boxShadow","element"]),le=(0,l.wW)(Y,j,C,R,D,T,w,z,B,N,G,Z,M,X,F,J,$,Q,ee,ne,te,ae,i,se,ie),de=re??"div";return e.createElement(de,k({ref:d,className:le.root},oe),h)});S.displayName="Box";const K=(t,d)=>{switch(t){case"error":case"success":case"info":case"warning":return d.colors[t].borderTransparent;default:return t?d.colors.border[t]:void 0}},P=(t,d)=>{switch(t){case"error":case"success":case"info":case"warning":return d.colors[t].transparent;default:return t?d.colors.background[t]:void 0}},Y=(t,d,c,h,j,C,R,D,T,w,z,B,N,G,Z,M,X,F,J,$,Q,ee,ne,te,ae)=>({root:(0,f.iv)([(0,m.U)(t,d,i=>({margin:t.spacing(i)})),(0,m.U)(t,c,i=>({marginLeft:t.spacing(i),marginRight:t.spacing(i)})),(0,m.U)(t,h,i=>({marginTop:t.spacing(i),marginBottom:t.spacing(i)})),(0,m.U)(t,j,i=>({marginTop:t.spacing(i)})),(0,m.U)(t,C,i=>({marginBottom:t.spacing(i)})),(0,m.U)(t,R,i=>({marginLeft:t.spacing(i)})),(0,m.U)(t,D,i=>({marginRight:t.spacing(i)})),(0,m.U)(t,T,i=>({padding:t.spacing(i)})),(0,m.U)(t,w,i=>({paddingLeft:t.spacing(i),paddingRight:t.spacing(i)})),(0,m.U)(t,z,i=>({paddingTop:t.spacing(i),paddingBottom:t.spacing(i)})),(0,m.U)(t,B,i=>({paddingTop:t.spacing(i)})),(0,m.U)(t,N,i=>({paddingBottom:t.spacing(i)})),(0,m.U)(t,G,i=>({paddingLeft:t.spacing(i)})),(0,m.U)(t,Z,i=>({paddingRight:t.spacing(i)})),(0,m.U)(t,M,i=>({display:i})),(0,m.U)(t,X,i=>({backgroundColor:P(i,t)})),(0,m.U)(t,F,i=>({flex:i})),(0,m.U)(t,J,i=>({flexShrink:i})),(0,m.U)(t,Q,i=>({borderStyle:i})),(0,m.U)(t,$,i=>({borderColor:K(i,t)})),(Q||$)&&{borderWidth:"1px"},(0,m.U)(t,ne,i=>({justifyContent:i})),(0,m.U)(t,te,i=>({alignItems:i})),(0,m.U)(t,ee,i=>({borderRadius:t.shape.radius[i]})),(0,m.U)(t,ae,i=>({boxShadow:t.shadows[i]}))])});try{S.displayName="Box",S.__docgenInfo={description:"",displayName:"Box",props:{margin:{defaultValue:null,description:"Sets the property `margin`",name:"margin",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginX:{defaultValue:null,description:"Sets the properties `margin-top` and `margin-bottom`. Higher priority than margin.",name:"marginX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginY:{defaultValue:null,description:"Sets the properties `margin-left` and `margin-right`. Higher priority than margin.",name:"marginY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginTop:{defaultValue:null,description:"Sets the property `margin-top`. Higher priority than margin and marginY.",name:"marginTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginBottom:{defaultValue:null,description:"Sets the property `margin-bottom`. Higher priority than margin and marginXY",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginLeft:{defaultValue:null,description:"Sets the property `margin-left`. Higher priority than margin and marginX.",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginRight:{defaultValue:null,description:"Sets the property `margin-right`. Higher priority than margin and marginX.",name:"marginRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},padding:{defaultValue:null,description:"Sets the property `padding`",name:"padding",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingX:{defaultValue:null,description:"Sets the properties `padding-top` and `padding-bottom`. Higher priority than padding.",name:"paddingX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingY:{defaultValue:null,description:"Sets the properties `padding-left` and `padding-right`. Higher priority than padding.",name:"paddingY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingTop:{defaultValue:null,description:"Sets the property `padding-top`. Higher priority than padding and paddingY.",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingBottom:{defaultValue:null,description:"Sets the property `padding-bottom`. Higher priority than padding and paddingY.",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingLeft:{defaultValue:null,description:"Sets the property `padding-left`. Higher priority than padding and paddingX.",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingRight:{defaultValue:null,description:"Sets the property `padding-right`. Higher priority than padding and paddingX.",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"ResponsiveProp<BorderStyle>"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveProp<BorderColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<keyof Radii>"}},grow:{defaultValue:null,description:"Sets the property `flex`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"ResponsiveProp<BackgroundColor>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveProp<Display>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<keyof ThemeShadows>"}},element:{defaultValue:null,description:"Sets the HTML element that will be rendered as a Box. Defaults to 'div'",name:"element",required:!1,type:{name:"ElementType<any>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Box/Box.tsx#Box"]={docgenInfo:S.__docgenInfo,name:"Box",path:"src/components/Layout/Box/Box.tsx#Box"})}catch{}var a=p("./src/components/Text/Text.tsx"),r=Object.defineProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,_=(t,d,c)=>d in t?r(t,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[d]=c,E=(t,d)=>{for(var c in d||(d={}))u.call(d,c)&&_(t,c,d[c]);if(s)for(var c of s(d))x.call(d,c)&&_(t,c,d[c]);return t},O=(t,d)=>{var c={};for(var h in t)u.call(t,h)&&d.indexOf(h)<0&&(c[h]=t[h]);if(t!=null&&s)for(var h of s(t))d.indexOf(h)<0&&x.call(t,h)&&(c[h]=t[h]);return c};const L=e.forwardRef((t,d)=>{var c=t,{title:h,onRemove:j,children:C,buttonContent:R,elevated:D,bottomSpacing:T,topSpacing:w,className:z,severity:B="error"}=c,N=O(c,["title","onRemove","children","buttonContent","elevated","bottomSpacing","topSpacing","className","severity"]);const G=(0,l.l4)(),M=q(G,B,!!h,D,T,w),X={error:"alert",warning:"alert",info:"status",success:"status"},F=N.role||X[B],J=N["aria-label"]||h;return e.createElement("div",E({ref:d,className:(0,f.cx)(M.wrapper,z),"data-testid":y.wl.components.Alert.alertV2(B),role:F,"aria-label":J},N),e.createElement(S,{display:"flex",backgroundColor:B,borderRadius:"default",paddingY:1,paddingX:2,borderStyle:"solid",borderColor:B,alignItems:"stretch",boxShadow:D?"z3":void 0},e.createElement(S,{paddingTop:1,paddingRight:2},e.createElement("div",{className:M.icon},e.createElement(g.J,{size:"xl",name:H(B)}))),e.createElement(S,{paddingY:1,grow:1},e.createElement(a.x,{weight:"medium"},h),C&&e.createElement("div",{className:M.content},C)),j&&!R&&e.createElement("div",{className:M.close},e.createElement(o.zx,{"aria-label":"Close alert",icon:"times",onClick:j,type:"button",fill:"text",variant:"secondary"})),j&&R&&e.createElement(S,{marginLeft:1,display:"flex",alignItems:"center"},e.createElement(o.zx,{"aria-label":"Close alert",variant:"secondary",onClick:j,type:"button"},R))))});L.displayName="Alert";const H=t=>{switch(t){case"error":return"exclamation-circle";case"warning":return"exclamation-triangle";case"info":return"info-circle";case"success":return"check"}},q=(t,d,c,h,j,C)=>{const R=t.colors[d];return{wrapper:(0,f.iv)({flexGrow:1,marginBottom:t.spacing(j??2),marginTop:t.spacing(C??0),position:"relative","&:before":{content:'""',position:"absolute",top:0,left:0,bottom:0,right:0,background:t.colors.background.primary,zIndex:-1}}),icon:(0,f.iv)({color:R.text}),content:(0,f.iv)({paddingTop:c?t.spacing(.5):0,maxHeight:"50vh",overflowY:"auto"}),close:(0,f.iv)({position:"relative",color:t.colors.text.secondary,background:"none",display:"flex",top:"-6px",right:"-14px"})}};try{L.displayName="Alert",L.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"On click handler for alert button, mostly used for dismissing the alert",name:"onRemove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},severity:{defaultValue:{value:"error"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"warning"'}]}},elevated:{defaultValue:null,description:"",name:"elevated",required:!1,type:{name:"boolean"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!1,type:{name:"ReactNode"}},bottomSpacing:{defaultValue:null,description:"",name:"bottomSpacing",required:!1,type:{name:"number"}},topSpacing:{defaultValue:null,description:"",name:"topSpacing",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:L.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch{}},"./src/components/Layout/Layout.tsx":function(U,b,p){p.d(b,{Ar:function(){return A},Lh:function(){return k},wc:function(){return I}});var f=p("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),e=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),y=p("./src/themes/ThemeContext.tsx"),l=Object.defineProperty,o=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,v=(a,r,s)=>r in a?l(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,n=(a,r)=>{for(var s in r||(r={}))g.call(r,s)&&v(a,s,r[s]);if(o)for(var s of o(r))m.call(r,s)&&v(a,s,r[s]);return a},V=(a,r)=>{var s={};for(var u in a)g.call(a,u)&&r.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&o)for(var u of o(a))r.indexOf(u)<0&&m.call(a,u)&&(s[u]=a[u]);return s},W=(a=>(a[a.Horizontal=0]="Horizontal",a[a.Vertical=1]="Vertical",a))(W||{});const A=a=>{var r=a,{children:s,orientation:u=0,spacing:x="sm",justify:_="flex-start",align:E="normal",wrap:O=!1,width:L="100%",height:H="100%"}=r,q=V(r,["children","orientation","spacing","justify","align","wrap","width","height"]);const t=(0,y.wW)(K,u,x,_,E,O);return e.createElement("div",n({className:t.layout,style:{width:L,height:H}},q),e.Children.toArray(s).filter(Boolean).map((d,c)=>e.createElement("div",{className:t.childWrapper,key:c},d)))},k=({children:a,spacing:r,justify:s,align:u="center",wrap:x,width:_,height:E})=>e.createElement(A,{spacing:r,justify:s,orientation:0,align:u,width:_,height:E,wrap:x},a),I=({children:a,spacing:r,justify:s,align:u,width:x,height:_})=>e.createElement(A,{spacing:r,justify:s,orientation:1,align:u,width:x,height:_},a),S=({children:a,padding:r,margin:s,grow:u,shrink:x})=>{const _=useStyles2(Y,r,s);return React.createElement("div",{className:cx(_.wrapper,u!==void 0&&css({flexGrow:u}),x!==void 0&&css({flexShrink:x}))},a)},K=(a,r,s,u,x,_)=>{const E=s!=="none"?a.spacing(P[s]):0,O=r===0&&!_||r===1?0:`-${E}`,L=r===1?"vertical-group":"horizontal-group";return{layout:(0,f.iv)({label:L,display:"flex",flexDirection:r===1?"column":"row",flexWrap:_?"wrap":"nowrap",justifyContent:u,alignItems:x,height:"100%",maxWidth:"100%",marginBottom:O}),childWrapper:(0,f.iv)({label:"layoutChildrenWrapper",marginBottom:r===0&&!_?0:E,marginRight:r===0?E:0,display:"flex",alignItems:x,"&:last-child":{marginBottom:r===1?0:void 0,marginRight:r===0?0:void 0}})}},P={none:0,xs:.5,sm:1,md:2,lg:3},Y=(a,r,s)=>{const u=r&&r!=="none"&&a.spacing(P[r])||0,x=s&&s!=="none"&&a.spacing(P[s])||0;return{wrapper:css({label:"container",margin:x,padding:u})}};try{A.displayName="Layout",A.__docgenInfo={description:"",displayName:"Layout",props:{orientation:{defaultValue:{value:"Orientation.Horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:A.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch{}try{k.displayName="HorizontalGroup",k.__docgenInfo={description:"",displayName:"HorizontalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#HorizontalGroup"]={docgenInfo:k.__docgenInfo,name:"HorizontalGroup",path:"src/components/Layout/Layout.tsx#HorizontalGroup"})}catch{}try{I.displayName="VerticalGroup",I.__docgenInfo={description:"",displayName:"VerticalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#VerticalGroup"]={docgenInfo:I.__docgenInfo,name:"VerticalGroup",path:"src/components/Layout/Layout.tsx#VerticalGroup"})}catch{}try{S.displayName="Container",S.__docgenInfo={description:"",displayName:"Container",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"number"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Container"]={docgenInfo:S.__docgenInfo,name:"Container",path:"src/components/Layout/Layout.tsx#Container"})}catch{}},"./src/components/Layout/utils/responsiveness.tsx":function(U,b,p){p.d(b,{U:function(){return e}});function f(y,l,o,g){const m=l[g];if(m!=null)return{[y.breakpoints.up(g)]:o(m)}}function e(y,l,o){return l==null?null:typeof l!="object"||!("xs"in l)?o(l):[f(y,l,o,"xs"),f(y,l,o,"sm"),f(y,l,o,"md"),f(y,l,o,"lg"),f(y,l,o,"xl"),f(y,l,o,"xxl")]}try{e.displayName="getResponsiveStyle",e.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:e.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch{}},"./src/components/Text/Text.tsx":function(U,b,p){p.d(b,{x:function(){return P}});var f=p("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),e=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),y=p("../../.yarn/__virtual__/react-dom-virtual-5dcbe0c0ba/2/yarn/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/server.browser.js"),l=p("./src/themes/ThemeContext.tsx"),o=p("./src/components/Tooltip/Tooltip.tsx"),g=p("./src/components/Text/utils.ts"),m=Object.defineProperty,v=Object.defineProperties,n=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,k=(a,r,s)=>r in a?m(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,I=(a,r)=>{for(var s in r||(r={}))W.call(r,s)&&k(a,s,r[s]);if(V)for(var s of V(r))A.call(r,s)&&k(a,s,r[s]);return a},S=(a,r)=>v(a,n(r)),K=(a,r)=>{var s={};for(var u in a)W.call(a,u)&&r.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&V)for(var u of V(a))r.indexOf(u)<0&&A.call(a,u)&&(s[u]=a[u]);return s};const P=e.forwardRef((a,r)=>{var s=a,{element:u="span",variant:x,weight:_,color:E,truncate:O,italic:L,textAlignment:H,children:q}=s,t=K(s,["element","variant","weight","color","truncate","italic","textAlignment","children"]);const d=(0,l.wW)(Y,u,x,E,_,O,L,H),[c,h]=(0,e.useState)(!1),j=(0,e.useRef)(null);(0,e.useImperativeHandle)(r,()=>j.current);const C=(0,e.createElement)(u,S(I({},t),{style:void 0,className:d,ref:c?void 0:j}),q),R=(0,e.useMemo)(()=>new ResizeObserver(T=>{for(const w of T)w.target.clientWidth&&w.target.scrollWidth&&(w.target.scrollWidth>w.target.clientWidth&&h(!0),w.target.scrollWidth<=w.target.clientWidth&&h(!1))}),[]);(0,e.useEffect)(()=>{const{current:T}=j;return T&&O&&R.observe(T),()=>{R.disconnect()}},[c,R,O]);const D=T=>typeof T=="string"?T:y.renderToStaticMarkup(e.createElement(e.Fragment,null,T)).replace(/(<([^>]+)>)/gi,"");return O&&c&&u!=="span"?e.createElement(o.u,{ref:j,content:D(q)},C):C});P.displayName="Text";const Y=(a,r,s,u,x,_,E,O)=>(0,f.iv)([I({margin:0,padding:0},(0,g.jt)(a,r,s)),s&&I({},a.typography[s]),u&&{color:(0,g.Jx)(u,a)},x&&{fontWeight:(0,g.RC)(x,a)},_&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},E&&{fontStyle:"italic"},O&&{textAlign:O}]);try{P.displayName="Text",P.__docgenInfo={description:"",displayName:"Text",props:{element:{defaultValue:{value:"span"},description:'Defines what HTML element is defined underneath. "span" by default',name:"element",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}},variant:{defaultValue:null,description:"What typograpy variant should be used for the component. Only use if default variant for the defined element is not what is needed",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"bodySmall"'}]}},weight:{defaultValue:null,description:"Override the default weight for the used variant",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"light"'},{value:'"regular"'},{value:'"medium"'}]}},color:{defaultValue:null,description:"Color to use for text",name:"color",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"disabled"'},{value:'"warning"'},{value:'"maxContrast"'}]}},truncate:{defaultValue:null,description:"Use to cut the text off with ellipsis if there isn't space to show all of it. On hover shows the rest of the text",name:"truncate",required:!1,type:{name:"boolean"}},italic:{defaultValue:null,description:"If true, show the text as italic. False by default",name:"italic",required:!1,type:{name:"boolean"}},textAlignment:{defaultValue:null,description:"Whether to align the text to left, center or right",name:"textAlignment",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'},{value:'"inherit"'},{value:'"start"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:P.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch{}},"./src/components/Text/utils.ts":function(U,b,p){p.d(b,{Jx:function(){return e},RC:function(){return f},jt:function(){return y}});const f=(l,o)=>{switch(l){case"bold":return o.typography.fontWeightBold;case"medium":return o.typography.fontWeightMedium;case"light":return o.typography.fontWeightLight;case"regular":case void 0:return o.typography.fontWeightRegular}},e=(l,o)=>{switch(l){case"error":return o.colors.error.text;case"success":return o.colors.success.text;case"info":return o.colors.info.text;case"warning":return o.colors.warning.text;default:return l?o.colors.text[l]:void 0}},y=(l,o,g)=>{if(g)return l.typography[g];switch(o){case"span":return;case"h1":return l.typography.h1;case"h2":return l.typography.h2;case"h3":return l.typography.h3;case"h4":return l.typography.h4;case"h5":return l.typography.h5;case"h6":return l.typography.h6;default:return l.typography.body}}},"./src/utils/storybook/StoryExample.tsx":function(U,b,p){p.d(b,{E:function(){return l}});var f=p("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),e=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),y=p("./src/themes/ThemeContext.tsx");const l=({name:o,children:g})=>{const m=(0,y.l4)(),v=(0,f.iv)({width:"100%",padding:"16px"}),n=(0,f.iv)({color:m.colors.text.secondary,marginBottom:"16px"});return e.createElement("div",{className:v},e.createElement("h5",{className:n},o),g)};l.displayName="StoryExample";try{l.displayName="StoryExample",l.__docgenInfo={description:"",displayName:"StoryExample",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/StoryExample.tsx#StoryExample"]={docgenInfo:l.__docgenInfo,name:"StoryExample",path:"src/utils/storybook/StoryExample.tsx#StoryExample"})}catch{}},"./src/components/Alert/Alert.mdx":function(U,b,p){var f=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),e=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),y=p("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),l=p("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs"),o=p("./src/components/Alert/Alert.tsx");function g(v){const n=Object.assign({h1:"h1",p:"p",hr:"hr",ol:"ol",li:"li",a:"a",br:"br",h2:"h2",strong:"strong",ul:"ul",code:"code",h3:"h3",h4:"h4",pre:"pre",em:"em"},(0,y.ah)(),v.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.h_,{title:"MDX|Alert",component:o.b}),`
`,(0,e.jsx)(n.h1,{id:"alert",children:"Alert"}),`
`,(0,e.jsx)(n.p,{children:"An alert displays an important message in a way that attracts the user's attention without interrupting the user's task."}),`
`,(0,e.jsx)(n.hr,{}),`
`,(0,e.jsx)(n.p,{children:"About Alert component:"}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#behaviors",children:"Behaviors"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#types",children:"Types"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#message-type",children:"Message type"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#main-elements",children:"Main elements"})}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"#usage",children:"Usage:"}),(0,e.jsx)(n.br,{}),`
`,"5.1. ",(0,e.jsx)(n.a,{href:"#alert-inline",children:"Inline banner"}),(0,e.jsx)(n.br,{}),`
`,"5.2. ",(0,e.jsx)(n.a,{href:"#alert-toast",children:"Toast"})]}),`
`]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsxs)(n.h2,{id:"-behaviors",children:[(0,e.jsx)("a",{name:"behaviors"})," Behaviors"]}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Persistent"}),": They are usually urgent and intrusive, require immediate attention and require action to be dismissed."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Passive"}),": Are informational, report a system issue that does not require any action by users.",`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"types",children:[(0,e.jsx)("a",{name:"types"}),"Types"]}),`
`,(0,e.jsx)(n.p,{children:"Within Grafana, we have two different types of alerts and they can be used depending on the context and content."}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.a,{href:"#alert-inline",children:"Inline banner"})}),":",`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To notify users of the status of an action. They appear at the top or bottom of the main content area"}),`
`,(0,e.jsx)(n.li,{children:"Passive or Persistent"}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:(0,e.jsx)(n.a,{href:"#alert-toast",children:"Toast"})}),":",`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"These temporary window elements are used to display short messages; they appear at the top-right corner of the screen and can be dismissed by clicking the [x] or it will disappear after a few seconds"}),`
`,(0,e.jsxs)(n.li,{children:["Passive",`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"message-type",children:[(0,e.jsx)("a",{name:"message-type"}),"Message Type"]}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Informational"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To provide information to users, and don\u2019t interrupt any current actions"}),`
`,(0,e.jsx)(n.li,{children:"Does not require immediate action and can be dismissed by a user clicking the [X] or passively display until the display timer expires"}),`
`,(0,e.jsxs)(n.li,{children:["Shows blue color on the background and uses the ",(0,e.jsx)(n.code,{children:"info-circle"})," icon"]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Success"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To confirm a task is completed as expected or an action is successful."}),`
`,(0,e.jsx)(n.li,{children:"Typically does not require further action and can be dismissed automatically or persist in a nonintrusive manner"}),`
`,(0,e.jsxs)(n.li,{children:["Shows green color on the background and uses the ",(0,e.jsx)(n.code,{children:"check"})," icon"]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Warning"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To inform users that an action is undesirable"}),`
`,(0,e.jsx)(n.li,{children:"Often persists until users have taken action to dismiss the notification or taken steps to resolve the issue"}),`
`,(0,e.jsxs)(n.li,{children:["Shows yellow color on background and uses the ",(0,e.jsx)(n.code,{children:"exclamation-triangle"})," icon"]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Error"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To inform that an action hasn't happened as expected, usually something has failed and the user is expected to take action"}),`
`,(0,e.jsx)(n.li,{children:"Always persists until the user has taken steps to remedy the issue that triggered the notification"}),`
`,(0,e.jsxs)(n.li,{children:["Shows red color on background and uses the ",(0,e.jsx)(n.code,{children:"exclamation-triangle"})," icon",`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"main-elements",children:[(0,e.jsx)("a",{name:"main-elements"}),"Main elements"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Icon status: represents the importance of the message through the color and icon for each status."}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Alert title: should be explicit, clear and short, conveying the most important part of the information."}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Details: precise description for the notification, telling users what they need to do."}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Button and text links: only persistent notifications should contain text links or buttons."}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Close icon: appears when the notification can be dismissed by the user."}),`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"usage",children:[(0,e.jsx)("a",{name:"usage"}),"Usage"]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsxs)(n.h3,{id:"-inline-banner",children:[(0,e.jsx)("a",{name:"alert-inline"})," Inline Banner"]}),`
`,(0,e.jsx)(n.p,{children:"Inline Banners are task-oriented alerts that notify users of the status of an action or system. These alerts are contextual \u2014 appearing above or below main content areas \u2014 allowing users to address issues or to read messages quickly."}),`
`,(0,e.jsx)(n.h4,{id:"dos",children:"Do's"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Use the appropriate status for the message (info/success/warning/error)."}),`
`,(0,e.jsx)(n.li,{children:"Use plain, simple language for the messages to ensure users understand them and know how to address them."}),`
`,(0,e.jsx)(n.li,{children:"Focus on notifications if they are relevant to the users' current workflow and should be addressed immediately."}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"donts",children:"Don'ts"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Do not use Primary calls to actions."}),`
`,(0,e.jsx)(n.li,{children:"Do not hide other content with inline notifications."}),`
`,(0,e.jsx)(n.li,{children:"Do not repeat the alert copy/title on the details message."}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"when-to-use",children:"When to use"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To inform at that time how to continue a task in which users must perform an action."}),`
`,(0,e.jsx)(n.li,{children:"To provide some options for users to take action."}),`
`,(0,e.jsx)(n.li,{children:"To explain in detail the reasons why something can\u2019t be done by users."}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"placement",children:"Placement"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Should be placed immediately above or below the related element."}),`
`]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Alert title={title} severity={severity} buttonContent={buttonContent} onRemove={onRemove}>
  <VerticalGroup>
    <div>Child content that includes some alert details, like maybe what actually happened.</div>
  </VerticalGroup>
</Alert>
`})}),`
`,(0,e.jsxs)(n.h3,{id:"toast",children:[(0,e.jsx)("a",{name:"alert-toast"}),"Toast"]}),`
`,(0,e.jsx)(n.p,{children:"Toast notifications are short messages that appear in the top-right corner of the page and are automatically hidden after a certain amount of time \u2013 they provide live notifications, without interrupting the user experience or requiring an action to be taken."}),`
`,(0,e.jsx)(n.h4,{id:"dos-1",children:"Do's"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Use this component using ",(0,e.jsx)(n.code,{children:"AppEvents"})," and ",(0,e.jsx)(n.code,{children:"getAppEvents()"}),"."]}),`
`,(0,e.jsxs)(n.li,{children:["Show the ",(0,e.jsx)(n.code,{children:"Toast"})," publishing the ",(0,e.jsx)(n.code,{children:"appEvent"})," with the proper type and payload needed."]}),`
`]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`import { AppEvents } from '@grafana/data';
import { getAppEvents } from '@grafana/runtime';

const appEvents = getAppEvents();
appEvents.publish({
  type: AppEvents.alertSuccess.name,
  payload: [text + ': ' + resp.status + ' (' + resp.statusText + ')'],
});
`})}),`
`,(0,e.jsx)(n.h4,{id:"donts-1",children:"Don'ts"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["Do not use this component directly. Instead, emit the ",(0,e.jsx)(n.code,{children:"appEvent"})," to trigger it's appearance."]}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"when-to-use-1",children:"When to use"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To convey general confirmation or non-critical actions."}),`
`,(0,e.jsx)(n.li,{children:"Immediately after an event is taken, such as a permission is updated or some Dashboards are imported or deleted."}),`
`,(0,e.jsxs)(n.li,{children:["Status according to use cases:",`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.em,{children:"Success"}),": When any action is successful, it is confirmed when a task is completed as expected."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.em,{children:"Warning"}),": It is used to report a current status that users should be aware of or that could have serious consequences."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.em,{children:"Error"}),": Inform users of an error, and sometimes provide more information about how to fix the error."]}),`
`]}),`
`]}),`
`]}),`
`,(0,e.jsx)(n.h4,{id:"placement-1",children:"Placement"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Slide in and out from the top right corner of the page."}),`
`]}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Alert title={title} severity={severity} onRemove={onRemove} elevated>
  <VerticalGroup>
    <div>Child content that includes some alert details, like maybe what actually happened.</div>
  </VerticalGroup>
</Alert>
`})}),`
`,(0,e.jsx)(l.Ed,{of:o.b})]})}function m(v={}){const{wrapper:n}=Object.assign({},(0,y.ah)(),v.components);return n?(0,e.jsx)(n,Object.assign({},v,{children:(0,e.jsx)(g,v)})):g(v)}b.Z=m}}]);