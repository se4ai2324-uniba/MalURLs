"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1131],{"../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/utils/deprecationWarning.ts":function(N,S,n){n.d(S,{d:function(){return s}});const o={},s=(b,v,f)=>{let y=`[Deprecation warning] ${b}: ${v} is deprecated`;f&&(y+=`. Use ${f} instead`);const h=Date.now(),p=o[y];(!p||h-p>1e4)&&(console.warn(y),o[y]=h)}},"./src/components/IconButton/IconButton.tsx":function(N,S,n){n.d(S,{h:function(){return t}});var o=n("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=n("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/utils/deprecationWarning.ts"),v=n("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/themes/colorManipulator.ts"),f=n("./src/themes/ThemeContext.tsx"),y=n("./src/themes/stylesFactory.ts"),h=n("./src/themes/mixins.ts"),p=n("./src/components/Icon/Icon.tsx"),O=n("./src/components/Icon/utils.ts"),R=n("./src/components/Tooltip/Tooltip.tsx"),A=Object.defineProperty,d=Object.defineProperties,E=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,C=(a,i,c)=>i in a?A(a,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[i]=c,T=(a,i)=>{for(var c in i||(i={}))P.call(i,c)&&C(a,c,i[c]);if(I)for(var c of I(i))L.call(i,c)&&C(a,c,i[c]);return a},l=(a,i)=>d(a,E(i)),e=(a,i)=>{var c={};for(var _ in a)P.call(a,_)&&i.indexOf(_)<0&&(c[_]=a[_]);if(a!=null&&I)for(var _ of I(a))i.indexOf(_)<0&&L.call(a,_)&&(c[_]=a[_]);return c};const t=s.forwardRef((a,i)=>{const{size:c="md",variant:_="secondary"}=a,x=(0,f.l4)();let B;c==="xxl"||c==="xxxl"?((0,b.d)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),B="xl"):B=c;const w=r(x,B,_);let u,m;if("tooltip"in a){const{tooltip:g}=a;u=typeof g=="string"?g:void 0}else if("ariaLabel"in a||"aria-label"in a){const{ariaLabel:g,["aria-label"]:z}=a;u=z||g,m=i}if("tooltip"in a){const g=a,{name:z,iconType:M,className:V,tooltip:j,tooltipPlacement:D}=g,W=e(g,["name","iconType","className","tooltip","tooltipPlacement"]);return s.createElement(R.u,{ref:i,content:j,placement:D},s.createElement("button",l(T({},W),{ref:m,"aria-label":u,className:(0,o.cx)(w.button,V),type:"button"}),s.createElement(p.J,{name:z,size:B,className:w.icon,type:M})))}else{const g=a,{name:z,iconType:M,className:V}=g,j=e(g,["name","iconType","className"]);return s.createElement("button",l(T({},j),{ref:m,"aria-label":u,className:(0,o.cx)(w.button,V),type:"button"}),s.createElement(p.J,{name:z,size:B,className:w.icon,type:M}))}});t.displayName="IconButton";const r=(0,y.B)((a,i,c)=>{const _=(0,O.Bm)(i)+a.spacing.gridSize;let x=a.colors.text.primary;return c==="primary"?x=a.colors.primary.text:c==="destructive"&&(x=a.colors.error.text),{button:(0,o.iv)({zIndex:0,position:"relative",margin:`0 ${a.spacing.x0_5} 0 0`,boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:x,"&[disabled], &:disabled":{cursor:"not-allowed",color:a.colors.action.disabledText,opacity:.65},"&:before":{zIndex:-1,position:"absolute",opacity:0,width:`${_}px`,height:`${_}px`,borderRadius:a.shape.radius.default,content:'""',transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"},"&:focus, &:focus-visible":(0,h.SV)(a),"&:focus:not(:focus-visible)":(0,h.Cq)(a),"&:hover":{"&:before":{backgroundColor:c==="secondary"?a.colors.action.hover:v.Fq(x,.12),opacity:1}}}),icon:(0,o.iv)({verticalAlign:"baseline"})}});try{t.displayName="IconButton",t.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"apps"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:t.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch{}},"./src/components/Input/Input.tsx":function(N,S,n){n.d(S,{H:function(){return l},I:function(){return T}});var o=n("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=n("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js"),v=n("./src/themes/ThemeContext.tsx"),f=n("./src/themes/stylesFactory.ts"),y=n("./src/components/Forms/commonStyles.ts"),h=n("./src/components/Spinner/Spinner.tsx"),p=Object.defineProperty,O=Object.defineProperties,R=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&I(e,r,t[r]);if(A)for(var r of A(t))E.call(t,r)&&I(e,r,t[r]);return e},L=(e,t)=>O(e,R(t)),C=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&A)for(var a of A(e))t.indexOf(a)<0&&E.call(e,a)&&(r[a]=e[a]);return r};const T=s.forwardRef((e,t)=>{const r=e,{className:a,addonAfter:i,addonBefore:c,prefix:_,suffix:x,invalid:B,loading:w,width:u=0}=r,m=C(r,["className","addonAfter","addonBefore","prefix","suffix","invalid","loading","width"]),[g,z]=(0,b.Z)(),[M,V]=(0,b.Z)(),j=(0,v.l4)(),D=l({theme:j,invalid:!!B,width:u});return s.createElement("div",{className:(0,o.cx)(D.wrapper,a),"data-testid":"input-wrapper"},!!c&&s.createElement("div",{className:D.addon},c),s.createElement("div",{className:D.inputWrapper},_&&s.createElement("div",{className:D.prefix,ref:g},_),s.createElement("input",L(P({ref:t,className:D.input},m),{style:{paddingLeft:_?z.width+12:void 0,paddingRight:x||w?V.width+12:void 0}})),(x||w)&&s.createElement("div",{className:D.suffix,ref:M},w&&s.createElement(h.$,{className:D.loadingIndicator,inline:!0}),x)),!!i&&s.createElement("div",{className:D.addon},i))});T.displayName="Input";const l=(0,f.B)(({theme:e,invalid:t=!1,width:r})=>{const a="28px",i=(0,o.iv)({position:"absolute",top:0,zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",flexGrow:0,flexShrink:0,fontSize:e.typography.size.md,height:"100%",minWidth:a,color:e.colors.text.secondary});return{wrapper:(0,o.cx)((0,o.iv)({label:"input-wrapper",display:"flex",width:r?e.spacing(r):"100%",height:e.spacing(e.components.height.md),borderRadius:e.shape.radius.default,"&:hover":{"> .prefix, .suffix, .input":{borderColor:t?e.colors.error.border:e.colors.primary.border},"input[type='number']":{appearance:"textfield"},"input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":{WebkitAppearance:"inner-spin-button !important",opacity:1}}})),inputWrapper:(0,o.iv)({label:"input-inputWrapper",position:"relative",flexGrow:1,zIndex:1,"&:not(:first-child):last-child":{"> input":{borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0}},"&:first-child:not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}},"&:not(:first-child):not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}},input:{"&:not(:first-child)":{paddingLeft:a},"&:not(:last-child)":{paddingRight:a},"&[readonly]":{cursor:"default"}}}),input:(0,o.cx)((0,y.GL)(e),(0,y.RK)(e,t),(0,o.iv)({label:"input-input",position:"relative",zIndex:0,flexGrow:1,borderRadius:e.shape.radius.default,height:"100%",width:"100%"})),inputDisabled:(0,o.iv)({backgroundColor:e.colors.action.disabledBackground,color:e.colors.action.disabledText,border:`1px solid ${e.colors.action.disabledBackground}`,"&:focus":{boxShadow:"none"}}),addon:(0,o.iv)({label:"input-addon",display:"flex",justifyContent:"center",alignItems:"center",flexGrow:0,flexShrink:0,position:"relative","&:first-child":{borderTopRightRadius:0,borderBottomRightRadius:0,"> :last-child":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&:last-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0,"> :first-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0}},"> *:focus":{zIndex:2}}),prefix:(0,o.cx)(i,(0,o.iv)({label:"input-prefix",paddingLeft:e.spacing(1),paddingRight:e.spacing(.5),borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0})),suffix:(0,o.cx)(i,(0,o.iv)({label:"input-suffix",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),marginBottom:"-2px",borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0,right:0})),loadingIndicator:(0,o.iv)({"& + *":{marginLeft:e.spacing(.5)}})}});try{T.displayName="Input",T.__docgenInfo={description:"",displayName:"Input",props:{width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:T.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch{}},"./src/components/Layout/Layout.tsx":function(N,S,n){n.d(S,{Ar:function(){return d},Lh:function(){return E},wc:function(){return I}});var o=n("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=n("./src/themes/ThemeContext.tsx"),v=Object.defineProperty,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(l,e,t)=>e in l?v(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,O=(l,e)=>{for(var t in e||(e={}))y.call(e,t)&&p(l,t,e[t]);if(f)for(var t of f(e))h.call(e,t)&&p(l,t,e[t]);return l},R=(l,e)=>{var t={};for(var r in l)y.call(l,r)&&e.indexOf(r)<0&&(t[r]=l[r]);if(l!=null&&f)for(var r of f(l))e.indexOf(r)<0&&h.call(l,r)&&(t[r]=l[r]);return t},A=(l=>(l[l.Horizontal=0]="Horizontal",l[l.Vertical=1]="Vertical",l))(A||{});const d=l=>{var e=l,{children:t,orientation:r=0,spacing:a="sm",justify:i="flex-start",align:c="normal",wrap:_=!1,width:x="100%",height:B="100%"}=e,w=R(e,["children","orientation","spacing","justify","align","wrap","width","height"]);const u=(0,b.wW)(L,r,a,i,c,_);return s.createElement("div",O({className:u.layout,style:{width:x,height:B}},w),s.Children.toArray(t).filter(Boolean).map((m,g)=>s.createElement("div",{className:u.childWrapper,key:g},m)))},E=({children:l,spacing:e,justify:t,align:r="center",wrap:a,width:i,height:c})=>s.createElement(d,{spacing:e,justify:t,orientation:0,align:r,width:i,height:c,wrap:a},l),I=({children:l,spacing:e,justify:t,align:r,width:a,height:i})=>s.createElement(d,{spacing:e,justify:t,orientation:1,align:r,width:a,height:i},l),P=({children:l,padding:e,margin:t,grow:r,shrink:a})=>{const i=useStyles2(T,e,t);return React.createElement("div",{className:cx(i.wrapper,r!==void 0&&css({flexGrow:r}),a!==void 0&&css({flexShrink:a}))},l)},L=(l,e,t,r,a,i)=>{const c=t!=="none"?l.spacing(C[t]):0,_=e===0&&!i||e===1?0:`-${c}`,x=e===1?"vertical-group":"horizontal-group";return{layout:(0,o.iv)({label:x,display:"flex",flexDirection:e===1?"column":"row",flexWrap:i?"wrap":"nowrap",justifyContent:r,alignItems:a,height:"100%",maxWidth:"100%",marginBottom:_}),childWrapper:(0,o.iv)({label:"layoutChildrenWrapper",marginBottom:e===0&&!i?0:c,marginRight:e===0?c:0,display:"flex",alignItems:a,"&:last-child":{marginBottom:e===1?0:void 0,marginRight:e===0?0:void 0}})}},C={none:0,xs:.5,sm:1,md:2,lg:3},T=(l,e,t)=>{const r=e&&e!=="none"&&l.spacing(C[e])||0,a=t&&t!=="none"&&l.spacing(C[t])||0;return{wrapper:css({label:"container",margin:a,padding:r})}};try{d.displayName="Layout",d.__docgenInfo={description:"",displayName:"Layout",props:{orientation:{defaultValue:{value:"Orientation.Horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:d.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch{}try{E.displayName="HorizontalGroup",E.__docgenInfo={description:"",displayName:"HorizontalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#HorizontalGroup"]={docgenInfo:E.__docgenInfo,name:"HorizontalGroup",path:"src/components/Layout/Layout.tsx#HorizontalGroup"})}catch{}try{I.displayName="VerticalGroup",I.__docgenInfo={description:"",displayName:"VerticalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#VerticalGroup"]={docgenInfo:I.__docgenInfo,name:"VerticalGroup",path:"src/components/Layout/Layout.tsx#VerticalGroup"})}catch{}try{P.displayName="Container",P.__docgenInfo={description:"",displayName:"Container",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"number"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Container"]={docgenInfo:P.__docgenInfo,name:"Container",path:"src/components/Layout/Layout.tsx#Container"})}catch{}},"./src/components/Spinner/Spinner.tsx":function(N,S,n){n.d(S,{$:function(){return y}});var o=n("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=n("./src/themes/stylesFactory.ts"),v=n("./src/components/Icon/Icon.tsx");const f=(0,b.B)((h,p)=>(0,o.iv)([{fontSize:typeof h=="string"?h:`${h}px`},p&&{display:"inline-block"}])),y=({className:h,inline:p=!1,iconClassName:O,style:R,size:A=16})=>{const d=f(A,p);return s.createElement("div",{"data-testid":"Spinner",style:R,className:(0,o.cx)(d,h)},s.createElement(v.J,{className:(0,o.cx)("fa-spin",O),name:"fa fa-spinner","aria-label":"loading spinner"}))};try{y.displayName="Spinner",y.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"string | number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:y.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch{}},"./src/components/TagsInput/TagsInput.tsx":function(N,S,n){n.d(S,{B:function(){return R}});var o=n("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=n("./src/themes/ThemeContext.tsx"),v=n("./src/components/Button/Button.tsx"),f=n("./src/components/Input/Input.tsx"),y=n("./src/utils/tags.ts"),h=n("./src/components/IconButton/IconButton.tsx");const p=({name:d,disabled:E,onRemove:I})=>{const{color:P,borderColor:L}=(0,s.useMemo)(()=>(0,y.Bx)(d),[d]),C=(0,b.wW)(O);return s.createElement("li",{className:C.itemStyle,style:{backgroundColor:P,borderColor:L}},s.createElement("span",{className:C.nameStyle},d),s.createElement(h.h,{name:"times",size:"lg",disabled:E,tooltip:`Remove "${d}" tag`,onClick:()=>I(d),className:C.buttonStyles}))},O=d=>{const E=d.spacing.gridSize*3;return{itemStyle:(0,o.iv)({display:"flex",gap:"3px",alignItems:"center",height:`${E}px`,lineHeight:`${E-2}px`,color:"#fff",borderWidth:"1px",borderStyle:"solid",borderRadius:d.shape.radius.default,padding:`0 ${d.spacing(.5)}`,whiteSpace:"nowrap",textShadow:"none",fontWeight:500,fontSize:d.typography.size.sm}),nameStyle:(0,o.iv)({maxWidth:"25ch",textOverflow:"ellipsis",overflow:"hidden"}),buttonStyles:(0,o.iv)({margin:0,"&:hover::before":{display:"none"}})}};try{p.displayName="TagItem",p.__docgenInfo={description:"",displayName:"TagItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(tag: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TagsInput/TagItem.tsx#TagItem"]={docgenInfo:p.__docgenInfo,name:"TagItem",path:"src/components/TagsInput/TagItem.tsx#TagItem"})}catch{}const R=({placeholder:d="New tag (enter key to add)",tags:E=[],onChange:I,width:P,className:L,disabled:C,addOnBlur:T,invalid:l,id:e})=>{const[t,r]=(0,s.useState)(""),a=(0,b.wW)(A),i=(0,b.l4)(),c=(0,s.useCallback)(u=>{r(u.target.value)},[]),_=u=>{I(E.filter(m=>m!==u))},x=u=>{u?.preventDefault(),E.includes(t)||I(E.concat(t)),r("")},B=()=>{T&&t&&x()},w=u=>{u.key==="Enter"&&t!==""&&x(u)};return s.createElement("div",{className:(0,o.cx)(a.wrapper,L,P?(0,o.iv)({width:i.spacing(P)}):"")},s.createElement(f.I,{id:e,disabled:C,placeholder:d,onChange:c,value:t,onKeyDown:w,onBlur:B,invalid:l,suffix:s.createElement(v.zx,{fill:"text",className:a.addButtonStyle,onClick:x,size:"md",disabled:t.length<=0},"Add")}),E?.length>0&&s.createElement("ul",{className:a.tags},E.map(u=>s.createElement(p,{key:u,name:u,onRemove:_,disabled:C}))))},A=d=>({wrapper:(0,o.iv)({minHeight:d.spacing(4),display:"flex",flexDirection:"column",gap:d.spacing(1),flexWrap:"wrap"}),tags:(0,o.iv)({display:"flex",justifyContent:"flex-start",flexWrap:"wrap",gap:d.spacing(.5)}),addButtonStyle:(0,o.iv)({margin:`0 -${d.spacing(1)}`})});try{R.displayName="TagsInput",R.__docgenInfo={description:"",displayName:"TagsInput",props:{placeholder:{defaultValue:{value:"New tag (enter key to add)"},description:"",name:"placeholder",required:!1,type:{name:"string"}},tags:{defaultValue:{value:"[]"},description:"Array of selected tags",name:"tags",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(tags: string[]) => void"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggle disabled state",name:"disabled",required:!1,type:{name:"boolean"}},addOnBlur:{defaultValue:null,description:"Enable adding new tags when input loses focus",name:"addOnBlur",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Toggle invalid state",name:"invalid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TagsInput/TagsInput.tsx#TagsInput"]={docgenInfo:R.__docgenInfo,name:"TagsInput",path:"src/components/TagsInput/TagsInput.tsx#TagsInput"})}catch{}},"./src/themes/stylesFactory.ts":function(N,S,n){n.d(S,{B:function(){return b}});var o=n("../../../yarn/cache/micro-memoize-npm-4.1.2-8063c85cb2-4b02750622.zip/node_modules/micro-memoize/dist/micro-memoize.js"),s=n.n(o);function b(v){return s()(v)}},"./src/utils/storybook/StoryExample.tsx":function(N,S,n){n.d(S,{E:function(){return v}});var o=n("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),b=n("./src/themes/ThemeContext.tsx");const v=({name:f,children:y})=>{const h=(0,b.l4)(),p=(0,o.iv)({width:"100%",padding:"16px"}),O=(0,o.iv)({color:h.colors.text.secondary,marginBottom:"16px"});return s.createElement("div",{className:p},s.createElement("h5",{className:O},f),y)};v.displayName="StoryExample";try{v.displayName="StoryExample",v.__docgenInfo={description:"",displayName:"StoryExample",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/StoryExample.tsx#StoryExample"]={docgenInfo:v.__docgenInfo,name:"StoryExample",path:"src/utils/storybook/StoryExample.tsx#StoryExample"})}catch{}},"./src/utils/tags.ts":function(N,S,n){n.d(S,{Bx:function(){return v},vm:function(){return f}});const o=["#D32D20","#1E72B8","#B240A2","#705DA0","#466803","#497A3C","#3D71AA","#B15415","#890F02","#6E6E6E","#0A437C","#6D1F62","#584477","#4C7A3F","#2F4F4F","#BF1B00","#7662B1","#8A2EB8","#517A00","#000000","#3F6833","#2F575E","#99440A","#AE561A","#0E4AB4","#58140C","#052B51","#511749","#3F2B5B"],s=["#FF7368","#459EE7","#E069CF","#9683C6","#6C8E29","#76AC68","#6AA4E2","#E7823D","#AF3528","#9B9B9B","#3069A2","#934588","#7E6A9D","#88C477","#557575","#E54126","#A694DD","#B054DE","#8FC426","#262626","#658E59","#557D84","#BF6A30","#FF9B53","#3470DA","#7E3A32","#2B5177","#773D6F","#655181"];function b(p=""){const O=y(p.toLowerCase());return Math.abs(O%o.length)}function v(p=""){const O=b(p);return f(O)}function f(p){return{color:o[p],borderColor:s[p]}}function y(p){let O=5381;for(let R=0;R<p.length;R++)O=(O<<5)+O+p.charCodeAt(R);return O}var h={getTagColorsFromName:v}},"./src/components/TagsInput/TagsInput.story.tsx":function(N,S,n){n.r(S),n.d(S,{Basic:function(){return x},WithManyTags:function(){return B},default:function(){return w}});var o=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),s=n("./src/utils/storybook/StoryExample.tsx"),b=n("./src/components/Layout/Layout.tsx"),v=n("./src/components/TagsInput/TagsInput.tsx"),f=n("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),y=n("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),h=n("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function p(u){const m=Object.assign({h1:"h1",p:"p",h3:"h3"},(0,y.ah)(),u.components);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.h_,{title:"MDX|TagsInput",component:v.B}),`
`,(0,f.jsx)(m.h1,{id:"tagsinput",children:"TagsInput"}),`
`,(0,f.jsx)(m.p,{children:'A set of an input field and a button next to it that allows the user to add new tags. The added tags are previewed next to the input and can be removed by clicking the "X" icon. You can customize the width of the input.'}),`
`,(0,f.jsx)(m.h3,{id:"props",children:"Props"}),`
`,(0,f.jsx)(h.Ed,{of:v.B})]})}function O(u={}){const{wrapper:m}=Object.assign({},(0,y.ah)(),u.components);return m?(0,f.jsx)(m,Object.assign({},u,{children:(0,f.jsx)(p,u)})):p(u)}var R=O,A=Object.defineProperty,d=Object.defineProperties,E=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,C=(u,m,g)=>m in u?A(u,m,{enumerable:!0,configurable:!0,writable:!0,value:g}):u[m]=g,T=(u,m)=>{for(var g in m||(m={}))P.call(m,g)&&C(u,g,m[g]);if(I)for(var g of I(m))L.call(m,g)&&C(u,g,m[g]);return u},l=(u,m)=>d(u,E(m)),e,t,r,a,i,c;const _={title:"Forms/TagsInput",component:v.B,parameters:{docs:{page:R},controls:{exclude:["onChange","className","tags"]}}},x=u=>{const[m,g]=(0,o.useState)([]);return o.createElement(v.B,l(T({},u),{tags:m,onChange:g}))},B=()=>{const[u,m]=(0,o.useState)(["dashboard","prod","server","frontend","game","kubernetes"]);return o.createElement(b.wc,null,o.createElement(s.E,{name:"With many tags"},o.createElement(v.B,{tags:u,onChange:m})))};var w=_;x.parameters=l(T({},x.parameters),{docs:l(T({},(e=x.parameters)==null?void 0:e.docs),{source:T({originalSource:`props => {
  const [tags, setTags] = useState<string[]>([]);
  return <TagsInput {...props} tags={tags} onChange={setTags} />;
}`},(r=(t=x.parameters)==null?void 0:t.docs)==null?void 0:r.source)})}),B.parameters=l(T({},B.parameters),{docs:l(T({},(a=B.parameters)==null?void 0:a.docs),{source:T({originalSource:`() => {
  const [tags, setTags] = useState<string[]>(['dashboard', 'prod', 'server', 'frontend', 'game', 'kubernetes']);
  return <VerticalGroup>
      <StoryExample name="With many tags">
        <TagsInput tags={tags} onChange={setTags} />
      </StoryExample>
    </VerticalGroup>;
}`},(c=(i=B.parameters)==null?void 0:i.docs)==null?void 0:c.source)})})}}]);