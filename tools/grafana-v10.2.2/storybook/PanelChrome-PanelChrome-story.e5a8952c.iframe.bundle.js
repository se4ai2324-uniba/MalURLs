"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3212],{"../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs":function(Q,B,i){i.d(B,{aD:function(){return d.aD}});var d=i("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),h=(...e)=>{let _=config,c=e;c.length===1&&Array.isArray(c[0])&&([c]=c),c.length!==1&&typeof c[c.length-1]!="string"&&(_={...config,...c.pop()});let p=c[0];(c.length!==1||typeof p=="string")&&(p={},c.forEach(f=>{p[f]=f}));let P={};return Object.keys(p).forEach(f=>{P[f]=action(p[f],_)}),P}},"../../.yarn/__virtual__/@storybook-addon-docs-virtual-1d1ae45bc6/2/yarn/cache/@storybook-addon-docs-npm-7.4.5-56a02b64b9-8110acf52b.zip/node_modules/@storybook/addon-docs/dist/blocks.mjs":function(Q,B,i){i.d(B,{$4:function(){return e.$4},MB:function(){return e.MB},h_:function(){return e.h_}});var d=i("@storybook/client-logger"),h=i.n(d),e=i("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");(0,d.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/data.ts":function(Q,B,i){i.d(B,{Gl:function(){return e},Gu:function(){return d},fQ:function(){return _}});var d=(c=>(c.NotStarted="NotStarted",c.Loading="Loading",c.Streaming="Streaming",c.Done="Done",c.Error="Error",c))(d||{});const h=null;var e=(c=>(c.Null="null",c.Ignore="connected",c.AsZero="null as zero",c))(e||{});const _=c=>!!c},"./src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx":function(Q,B,i){i.d(B,{S:function(){return w}});var d=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),h=i("../../../yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),e=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),_=i("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/icon.ts"),c=i("./src/themes/ThemeContext.tsx"),p=i("./src/components/Icon/Icon.tsx"),P=i("./src/themes/stylesFactory.ts"),f=i("./src/themes/mixins.ts"),C=i("./src/components/Forms/commonStyles.ts");const s=e.forwardRef(({children:u,active:O=!1,disabled:I=!1,size:T="md",onChange:q,onClick:M,id:D,name:U=void 0,description:H,fullWidth:W,"aria-label":o},m)=>{const y=(0,c.l4)(),S=z(y,T,W);return e.createElement("div",{className:S.radioOption},e.createElement("input",{type:"radio",className:S.radio,onChange:q,onClick:M,disabled:I,id:D,checked:O,name:U,"aria-label":o||H,ref:m}),e.createElement("label",{className:S.radioLabel,htmlFor:D,title:H||o},u))});s.displayName="RadioButton";const z=(0,P.B)((u,O,I)=>{const{fontSize:T,height:q,padding:M}=(0,C.iL)(O,u),D=u.colors.text.secondary,U=u.colors.text.primary,H=q*u.spacing.gridSize-4-2;return{radioOption:(0,d.iv)({display:"flex",justifyContent:"space-between",position:"relative",flex:I?"1 0 0":"none",textAlign:"center"}),radio:(0,d.iv)({position:"absolute",opacity:0,zIndex:-1e3,width:"100% !important",height:"100%","&:checked + label":{color:u.colors.text.primary,fontWeight:u.typography.fontWeightMedium,background:u.colors.action.selected,zIndex:3},"&:focus + label, &:focus-visible + label":(0,f.SV)(u),"&:focus:not(:focus-visible) + label":(0,f.Cq)(u),"&:disabled + label":{color:u.colors.text.disabled,cursor:"not-allowed"}}),radioLabel:(0,d.iv)({fontSize:T,height:`${H}px`,lineHeight:`${H}px`,color:D,padding:u.spacing(0,M),borderRadius:u.shape.radius.default,background:u.colors.background.primary,cursor:"pointer",zIndex:1,userSelect:"none",whiteSpace:"nowrap",flexGrow:1,"&:hover":{color:U}})}});try{s.displayName="RadioButton",s.__docgenInfo={description:"",displayName:"RadioButton",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:"",name:"name",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"() => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonGroup/RadioButton.tsx#RadioButton"]={docgenInfo:s.__docgenInfo,name:"RadioButton",path:"src/components/Forms/RadioButtonGroup/RadioButton.tsx#RadioButton"})}catch{}function w({options:u,value:O,onChange:I,onClick:T,disabled:q,disabledOptions:M,size:D="md",id:U,className:H,fullWidth:W=!1,autoFocus:o=!1,"aria-label":m,invalid:y=!1}){const S=(0,e.useCallback)(g=>()=>{I&&I(g.value)},[I]),de=(0,e.useCallback)(g=>()=>{T&&T(g.value)},[T]),ce=U??(0,h.uniqueId)("radiogroup-"),ne=(0,e.useRef)(ce),J=(0,c.wW)(E),Z=(0,e.useRef)(null);return(0,e.useEffect)(()=>{o&&Z.current&&Z.current.focus()},[o]),e.createElement("div",{role:"radiogroup","aria-label":m,className:(0,d.cx)(J.radioGroup,W&&J.fullWidth,H)},u.map((g,re)=>{const te=M&&g.value&&M.includes(g.value),ue=g.icon?(0,_.iJ)(g.icon):void 0,F=!!(g.imgUrl||g.label||g.component);return e.createElement(s,{size:D,disabled:te||q,active:O===g.value,key:`o.label-${re}`,"aria-label":g.ariaLabel,onChange:S(g),onClick:de(g),id:`option-${g.value}-${ce}`,name:ne.current,description:g.description,fullWidth:W,ref:O===g.value?Z:void 0},ue&&e.createElement(p.J,{name:ue,className:(0,d.cx)(F&&J.icon)}),g.imgUrl&&e.createElement("img",{src:g.imgUrl,alt:g.label,className:J.img}),g.label," ",g.component?e.createElement(g.component,null):null)}))}w.displayName="RadioButtonGroup";const E=u=>({radioGroup:(0,d.iv)({display:"inline-flex",flexDirection:"row",flexWrap:"nowrap",border:`1px solid ${u.components.input.borderColor}`,borderRadius:u.shape.radius.default,padding:"2px"}),fullWidth:(0,d.iv)({display:"flex"}),icon:(0,d.iv)({marginRight:"6px"}),img:(0,d.iv)({width:u.spacing(2),height:u.spacing(2),marginRight:u.spacing(1)}),invalid:(0,d.iv)({border:`1px solid ${u.colors.error.border}`})});try{w.displayName="RadioButtonGroup",w.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},disabledOptions:{defaultValue:null,description:"",name:"disabledOptions",required:!1,type:{name:"T[]"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectableValue<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((value: T) => void)"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx#RadioButtonGroup"]={docgenInfo:w.__docgenInfo,name:"RadioButtonGroup",path:"src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx#RadioButtonGroup"})}catch{}},"./src/components/LoadingBar/LoadingBar.tsx":function(Q,B,i){i.d(B,{F:function(){return s}});var d=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),h=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),e=i("./src/themes/ThemeContext.tsx");const _=28,c=2.4,p=500,P=4e3,f=300,C=100/_*100;function s({width:w,delay:E=f,ariaLabel:u="Loading bar"}){const O=Math.min(Math.max(Math.round(w*c),p),P),I=(0,e.wW)(z,E,O),T={overflow:"hidden"};return h.createElement("div",{style:T},h.createElement("div",{"aria-label":u,className:I.bar}))}const z=(w,E,u)=>{const O=(0,d.F4)({"0%":{transform:"translateX(-100%)"},"85%, 100%":{transform:`translateX(${C}%)`}});return{bar:(0,d.iv)({width:_+"%",height:1,background:"linear-gradient(90deg, rgba(110, 159, 255, 0) 0%, #6E9FFF 80.75%, rgba(110, 159, 255, 0) 100%)",transform:"translateX(-100%)",animationName:O,animationDelay:`${E}ms`,animationDuration:`${u}ms`,animationTimingFunction:"linear",animationIterationCount:"infinite",willChange:"transform"})}};try{s.displayName="LoadingBar",s.__docgenInfo={description:"",displayName:"LoadingBar",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},delay:{defaultValue:{value:"300"},description:"",name:"delay",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:{value:"Loading bar"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/LoadingBar/LoadingBar.tsx#LoadingBar"]={docgenInfo:s.__docgenInfo,name:"LoadingBar",path:"src/components/LoadingBar/LoadingBar.tsx#LoadingBar"})}catch{}},"./src/components/ToolbarButton/ToolbarButton.tsx":function(Q,B,i){i.d(B,{h:function(){return D}});var d=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),h=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),e=i("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/icon.ts"),_=i("../grafana-e2e-selectors/src/selectors/index.ts"),c=i("./src/themes/ThemeContext.tsx"),p=i("./src/themes/mixins.ts"),P=i("./src/components/Button/Button.tsx"),f=i("./src/components/Icon/Icon.tsx"),C=i("./src/components/Tooltip/Tooltip.tsx"),s=Object.defineProperty,z=Object.defineProperties,w=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,I=(o,m,y)=>m in o?s(o,m,{enumerable:!0,configurable:!0,writable:!0,value:y}):o[m]=y,T=(o,m)=>{for(var y in m||(m={}))u.call(m,y)&&I(o,y,m[y]);if(E)for(var y of E(m))O.call(m,y)&&I(o,y,m[y]);return o},q=(o,m)=>z(o,w(m)),M=(o,m)=>{var y={};for(var S in o)u.call(o,S)&&m.indexOf(S)<0&&(y[S]=o[S]);if(o!=null&&E)for(var S of E(o))m.indexOf(S)<0&&O.call(o,S)&&(y[S]=o[S]);return y};const D=(0,h.forwardRef)((o,m)=>{var y=o,{tooltip:S,icon:de,iconSize:ce,className:ne,children:J,imgSrc:Z,imgAlt:g,fullWidth:re,isOpen:te,narrow:ue,variant:F="default",iconOnly:xe,"aria-label":me,isHighlighted:Ce}=y,oe=M(y,["tooltip","icon","iconSize","className","children","imgSrc","imgAlt","fullWidth","isOpen","narrow","variant","iconOnly","aria-label","isHighlighted"]);const Y=(0,c.wW)(W),k=(0,d.cx)({[Y.button]:!0,[Y.buttonFullWidth]:re,[Y.narrow]:ue},Y[F],ne),Ee=(0,d.cx)({[Y.content]:!0,[Y.contentWithIcon]:!!de,[Y.contentWithRightIcon]:te!==void 0}),fe=h.createElement("button",T({ref:m,className:k,"aria-label":U(me,S),"aria-expanded":te},oe),H(de,ce),Z&&h.createElement("img",{className:Y.img,src:Z,alt:g??""}),J&&!xe&&h.createElement("div",{className:Ee},J),te===!1&&h.createElement(f.J,{name:"angle-down"}),te===!0&&h.createElement(f.J,{name:"angle-up"}),Ce&&h.createElement("div",{className:Y.highlight}));return S?h.createElement(C.u,{content:S,placement:"bottom"},fe):fe});D.displayName="ToolbarButton";function U(o,m){return o||(m?_.wl.components.PageToolbar.item(m):void 0)}function H(o,m){return o?(0,e.Mo)(o)?h.createElement(f.J,{name:o,size:`${m||"lg"}`}):o:null}const W=o=>{const m=(0,P.c9)(o,"primary","solid"),y=(0,P.c9)(o,"destructive","solid"),S=(0,d.iv)({color:o.colors.text.primary,background:o.colors.secondary.main,"&:hover":{color:o.colors.text.primary,background:o.colors.secondary.shade,border:`1px solid ${o.colors.border.medium}`}});return{button:(0,d.iv)({label:"toolbar-button",position:"relative",display:"flex",alignItems:"center",height:o.spacing(o.components.height.md),padding:o.spacing(0,1),borderRadius:o.shape.radius.default,lineHeight:`${o.components.height.md*o.spacing.gridSize-2}px`,fontWeight:o.typography.fontWeightMedium,border:`1px solid ${o.colors.secondary.border}`,whiteSpace:"nowrap",transition:o.transitions.create(["background","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:focus, &:focus-visible":q(T({},(0,p.SV)(o)),{zIndex:1}),"&:focus:not(:focus-visible)":(0,p.Cq)(o),"&:hover":{boxShadow:o.shadows.z1},"&[disabled], &:disabled":{cursor:"not-allowed",opacity:o.colors.action.disabledOpacity,background:o.colors.action.disabledBackground,boxShadow:"none","&:hover":{color:o.colors.text.disabled,background:o.colors.action.disabledBackground,boxShadow:"none"}}}),default:(0,d.iv)({color:o.colors.text.secondary,background:"transparent",border:"1px solid transparent","&:hover":{color:o.colors.text.primary,background:o.colors.background.secondary}}),canvas:S,active:(0,d.cx)(S,(0,d.iv)({"&::before":{display:"block",content:'" "',position:"absolute",left:0,right:0,height:"2px",bottom:0,borderRadius:o.shape.radius.default,backgroundImage:o.colors.gradients.brandHorizontal}})),primary:(0,d.iv)(m),destructive:(0,d.iv)(y),narrow:(0,d.iv)({padding:o.spacing(0,.5)}),img:(0,d.iv)({width:"16px",height:"16px",marginRight:o.spacing(1)}),buttonFullWidth:(0,d.iv)({flexGrow:1}),content:(0,d.iv)({flexGrow:1}),contentWithIcon:(0,d.iv)({display:"none",paddingLeft:o.spacing(1),[`@media ${p._Q(o.v1.breakpoints.md)}`]:{display:"block"}}),contentWithRightIcon:(0,d.iv)({paddingRight:o.spacing(.5)}),highlight:(0,d.iv)({backgroundColor:o.colors.success.main,borderRadius:o.shape.radius.circle,width:"6px",height:"6px",position:"absolute",top:"-3px",right:"-3px",zIndex:1})}};try{D.displayName="ToolbarButton",D.__docgenInfo={description:"",displayName:"ToolbarButton",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!1,type:{name:"ReactNode"}},iconSize:{defaultValue:null,description:"Icon size",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},tooltip:{defaultValue:null,description:"Tooltip",name:"tooltip",required:!1,type:{name:"string"}},imgSrc:{defaultValue:null,description:"For image icons",name:"imgSrc",required:!1,type:{name:"string"}},imgAlt:{defaultValue:null,description:"Alt text for imgSrc",name:"imgAlt",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"if true or false will show angle-down/up",name:"isOpen",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Controls flex-grow: 1",name:"fullWidth",required:!1,type:{name:"boolean"}},narrow:{defaultValue:null,description:"reduces padding to xs",name:"narrow",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'},{value:'"canvas"'},{value:'"default"'},{value:'"active"'}]}},iconOnly:{defaultValue:null,description:"Hide any children and only show icon",name:"iconOnly",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:null,description:"Show highlight dot",name:"isHighlighted",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:D.__docgenInfo,name:"ToolbarButton",path:"src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"})}catch{}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(Q,B,i){i.d(B,{C:function(){return _}});var d=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),h=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),e=i("./src/themes/ThemeContext.tsx");const _=({children:c})=>{const p=(0,e.l4)(),P=(0,d.iv)({width:"100%",height:"100%",padding:"32px",background:p.colors.background.canvas,overflow:"auto"});return h.createElement("div",{className:P},c)};_.displayName="DashboardStoryCanvas";try{_.displayName="DashboardStoryCanvas",_.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:_.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch{}},"./src/components/PanelChrome/PanelChrome.story.tsx":function(Q,B,i){i.r(B),i.d(B,{Basic:function(){return pe},Examples:function(){return ge},ExamplesHoverHeader:function(){return he},default:function(){return fn}});var d=i("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs"),h=i("../../../yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),e=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),_=function(n,t){return typeof t=="boolean"?t:!n},c=function(n){return(0,e.useReducer)(_,n)},p=c,P=function(n,t){var a=(0,e.useRef)(function(){});(0,e.useEffect)(function(){a.current=n}),(0,e.useEffect)(function(){if(t!==null){var l=setInterval(function(){return a.current()},t||0);return function(){return clearInterval(l)}}},[t])},f=P,C=i("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/data.ts"),s=i("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),z=i("../grafana-e2e-selectors/src/selectors/index.ts"),w=i("./src/themes/ThemeContext.tsx"),E=i("./src/components/Icon/Icon.tsx"),u=i("./src/components/Tooltip/Tooltip.tsx");const O=({onCancel:n,loading:t})=>{const a=(0,w.wW)(I);return t?e.createElement(u.u,{content:"Cancel query"},e.createElement(E.J,{className:(0,s.cx)("spin-clockwise",{[a.clickable]:!!n}),name:"sync",size:"sm",onClick:n,"aria-label":z.wl.components.LoadingIndicator.icon})):null},I=()=>({clickable:(0,s.iv)({cursor:"pointer"})});try{O.displayName="LoadingIndicator",O.__docgenInfo={description:"",displayName:"LoadingIndicator",props:{loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/LoadingIndicator.tsx#LoadingIndicator"]={docgenInfo:O.__docgenInfo,name:"LoadingIndicator",path:"src/components/PanelChrome/LoadingIndicator.tsx#LoadingIndicator"})}catch{}var T=i("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMeasure.js"),q=i("./src/themes/mixins.ts");function M({children:n,delay:t}){const[a,l]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{window.setTimeout(()=>{l(!0)},t)},[n,t]),e.createElement(e.Fragment,null,a?n:null)}try{M.displayName="DelayRender",M.__docgenInfo={description:"Delay the rendering of the children by N amount of milliseconds",displayName:"DelayRender",props:{delay:{defaultValue:null,description:"",name:"delay",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/DelayRender.tsx#DelayRender"]={docgenInfo:M.__docgenInfo,name:"DelayRender",path:"src/utils/DelayRender.tsx#DelayRender"})}catch{}var D=i("./src/components/LoadingBar/LoadingBar.tsx"),U=i("./src/components/Dropdown/Dropdown.tsx"),H=i("./src/components/ToolbarButton/ToolbarButton.tsx");function W({menu:n,title:t,placement:a="bottom",offset:l,dragClassCancel:b,menuButtonClass:A,onOpenMenu:R}){const G=t?z.wl.components.Panels.Panel.menu(t):"panel-menu-button",V=(0,e.useCallback)(K=>{K&&R&&R()},[R]);return e.createElement(U.L,{overlay:n,placement:a,offset:l,onVisibleChange:V},e.createElement(H.h,{"aria-label":`Menu for panel with ${t?`title ${t}`:"no title"}`,title:"Menu",icon:"ellipsis-v",iconSize:"md",narrow:!0,"data-testid":G,className:(0,s.cx)(A,b)}))}try{W.displayName="PanelMenu",W.__docgenInfo={description:"",displayName:"PanelMenu",props:{menu:{defaultValue:null,description:"",name:"menu",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | (() => ReactElement<any, string | JSXElementConstructor<any>>)"}},menuButtonClass:{defaultValue:null,description:"",name:"menuButtonClass",required:!1,type:{name:"string"}},dragClassCancel:{defaultValue:null,description:"",name:"dragClassCancel",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"[number, number]"}},onOpenMenu:{defaultValue:null,description:"",name:"onOpenMenu",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/PanelMenu.tsx#PanelMenu"]={docgenInfo:W.__docgenInfo,name:"PanelMenu",path:"src/components/PanelChrome/PanelMenu.tsx#PanelMenu"})}catch{}function o({menu:n,title:t,dragClass:a,children:l,offset:b=-32,onOpenMenu:A}){const R=(0,w.wW)(m),G=(0,e.useRef)(null),V=z.wl.components.Panels.Panel.HoverWidget,K=(0,e.useCallback)(le=>{var se;(se=G.current)==null||se.setPointerCapture(le.pointerId)},[]),L=(0,e.useCallback)(le=>{var se;(se=G.current)==null||se.releasePointerCapture(le.pointerId)},[]);return l===void 0||e.Children.count(l)===0?null:e.createElement("div",{className:(0,s.cx)(R.container,"show-on-hover"),style:{top:b},"data-testid":V.container},a&&e.createElement("div",{className:(0,s.cx)(R.square,R.draggable,a),onPointerDown:K,onPointerUp:L,ref:G,"data-testid":V.dragIcon},e.createElement(E.J,{name:"expand-arrows",className:R.draggableIcon})),l,n&&e.createElement(W,{menu:n,title:t,placement:"bottom",menuButtonClass:R.menuButton,onOpenMenu:A}))}function m(n){return{container:(0,s.iv)({label:"hover-container-widget",transition:"all .1s linear",display:"flex",position:"absolute",zIndex:1,right:0,boxSizing:"content-box",alignItems:"center",background:n.colors.background.secondary,color:n.colors.text.primary,border:`1px solid ${n.colors.border.weak}`,borderRadius:n.shape.radius.default,height:n.spacing(4),boxShadow:n.shadows.z1}),square:(0,s.iv)({display:"flex",justifyContent:"center",alignItems:"center",width:n.spacing(4),height:"100%"}),draggable:(0,s.iv)({cursor:"move",[n.breakpoints.down("md")]:{display:"none"}}),menuButton:(0,s.iv)({background:"inherit",border:"none","&:hover":{background:n.colors.secondary.main}}),draggableIcon:(0,s.iv)({transform:"rotate(45deg)",color:n.colors.text.secondary,"&:hover":{color:n.colors.text.primary}})}}try{o.displayName="HoverWidget",o.__docgenInfo={description:"",displayName:"HoverWidget",props:{menu:{defaultValue:null,description:"",name:"menu",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | (() => ReactElement<any, string | JSXElementConstructor<any>>)"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},offset:{defaultValue:{value:"-32"},description:"",name:"offset",required:!1,type:{name:"number"}},dragClass:{defaultValue:null,description:"",name:"dragClass",required:!1,type:{name:"string"}},onOpenMenu:{defaultValue:null,description:"",name:"onOpenMenu",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/HoverWidget.tsx#HoverWidget"]={docgenInfo:o.__docgenInfo,name:"HoverWidget",path:"src/components/PanelChrome/HoverWidget.tsx#HoverWidget"})}catch{}var y=i("./src/components/Button/Button.tsx"),S=Object.defineProperty,de=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,g=(n,t,a)=>t in n?S(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,re=(n,t)=>{for(var a in t||(t={}))J.call(t,a)&&g(n,a,t[a]);if(ne)for(var a of ne(t))Z.call(t,a)&&g(n,a,t[a]);return n},te=(n,t)=>de(n,ce(t)),ue=(n,t)=>{var a={};for(var l in n)J.call(n,l)&&t.indexOf(l)<0&&(a[l]=n[l]);if(n!=null&&ne)for(var l of ne(n))t.indexOf(l)<0&&Z.call(n,l)&&(a[l]=n[l]);return a};const F=(0,e.forwardRef)((n,t)=>{var a=n,{className:l,children:b,href:A,onClick:R,target:G,title:V}=a,K=ue(a,["className","children","href","onClick","target","title"]);const L=(0,w.wW)(xe);return A?e.createElement("a",re({ref:t,href:A,onClick:R,target:G,title:V,className:(0,s.cx)(L.linkItem,l)},K),b):R?e.createElement(y.zx,{ref:t,className:(0,s.cx)(L.item,l),variant:"secondary",fill:"text",onClick:R},b):e.createElement("span",re({ref:t,className:(0,s.cx)(L.item,l)},K),b)});F.displayName="TitleItem";const xe=n=>{const t=(0,s.iv)({color:`${n.colors.text.secondary}`,label:"panel-header-item",cursor:"auto",border:"none",borderRadius:`${n.shape.radius.default}`,padding:`${n.spacing(0,1)}`,height:`${n.spacing(n.components.panel.headerHeight)}`,display:"flex",alignItems:"center",justifyContent:"center","&:focus, &:focus-visible":te(re({},(0,q.SV)(n)),{zIndex:1}),"&: focus:not(:focus-visible)":(0,q.Cq)(n),"&:hover ":{boxShadow:`${n.shadows.z1}`,background:`${n.colors.background.secondary}`,color:`${n.colors.text.primary}`}});return{item:t,linkItem:(0,s.cx)(t,(0,s.iv)({cursor:"pointer"}))}};try{F.displayName="TitleItem",F.__docgenInfo={description:"",displayName:"TitleItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any, origin?: any) => void)"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_blank"'},{value:'"_self"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/TitleItem.tsx#TitleItem"]={docgenInfo:F.__docgenInfo,name:"TitleItem",path:"src/components/PanelChrome/TitleItem.tsx#TitleItem"})}catch{}function me({description:n,className:t}){const a=(0,w.wW)(Ce),l=()=>{const b=typeof n=="function"?n():n;return e.createElement("div",{className:"panel-info-content markdown-html"},e.createElement("div",{dangerouslySetInnerHTML:{__html:b}}))};return n!==""?e.createElement(u.u,{interactive:!0,content:l},e.createElement(F,{className:(0,s.cx)(t,a.description)},e.createElement(E.J,{name:"info-circle",size:"md"}))):null}const Ce=n=>({description:(0,s.iv)({code:{whiteSpace:"normal",wordWrap:"break-word"},"pre > code":{display:"block"}})});try{me.displayName="PanelDescription",me.__docgenInfo={description:"",displayName:"PanelDescription",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | (() => string)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/PanelDescription.tsx#PanelDescription"]={docgenInfo:me.__docgenInfo,name:"PanelDescription",path:"src/components/PanelChrome/PanelDescription.tsx#PanelDescription"})}catch{}function oe({message:n,onClick:t,ariaLabel:a="status"}){const l=(0,w.wW)(Y);return e.createElement(H.h,{className:l.buttonStyles,onClick:t,variant:"destructive",icon:"exclamation-triangle",iconSize:"md",tooltip:n||"","aria-label":a,"data-testid":z.wl.components.Panels.Panel.status("error")})}const Y=n=>{const{headerHeight:t,padding:a}=n.components.panel;return{buttonStyles:(0,s.iv)({label:"panel-header-state-button",display:"flex",alignItems:"center",justifyContent:"center",padding:n.spacing(a),width:n.spacing(t),height:n.spacing(t),borderRadius:n.shape.radius.default})}};try{oe.displayName="PanelStatus",oe.__docgenInfo={description:"",displayName:"PanelStatus",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => void)"}},ariaLabel:{defaultValue:{value:"status"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/PanelStatus.tsx#PanelStatus"]={docgenInfo:oe.__docgenInfo,name:"PanelStatus",path:"src/components/PanelChrome/PanelStatus.tsx#PanelStatus"})}catch{}function k({width:n,height:t,children:a,padding:l="md",title:b="",description:A="",displayMode:R="default",titleItems:G,menu:V,dragClass:K,dragClassCancel:L,hoverHeader:le=!1,hoverHeaderOffset:se,loadingState:_e,statusMessage:ve,statusMessageOnClick:Ke,leftItems:Ue,actions:Ie,onCancelQuery:be,onOpenMenu:Fe,collapsible:Ye=!1,collapsed:ee,onToggleCollapse:$e}){const Je=(0,w.l4)(),j=(0,w.wW)(tn),Xe=(0,e.useId)(),Qe=!le,[yn,vn]=p(!0);ee===void 0&&(ee=!yn);const bn="show-on-hover",xn=R==="transparent",Ze=fe(Je,Qe),{contentStyle:Cn,innerWidth:En,innerHeight:Sn}=nn(l,Je,Ze,ee,t,n),_n={height:Ze,cursor:K?"move":"auto"},In={width:n,height:ee?void 0:t},[Pn,{width:wn}]=(0,T.Z)();Ue&&(Ie=Ue);const On=b?z.wl.components.Panels.Panel.title(b):"Panel",en=e.createElement(e.Fragment,null,!Ye&&b&&e.createElement("h6",{title:b,className:j.title},b),Ye&&e.createElement("h6",{className:j.title},e.createElement("button",{type:"button",className:j.clearButtonStyles,onClick:()=>{vn(),$e&&$e(!ee)},"aria-expanded":!ee,"aria-controls":ee?void 0:Xe},e.createElement(E.J,{name:ee?"angle-right":"angle-down","aria-hidden":!!b,"aria-label":b?void 0:"toggle collapse panel"}),b)),e.createElement("div",{className:(0,s.cx)(j.titleItems,L),"data-testid":"title-items-container"},e.createElement(me,{description:A,className:L}),G),_e===C.Gu.Streaming&&e.createElement(u.u,{content:be?"Stop streaming":"Streaming"},e.createElement(F,{className:L,"data-testid":"panel-streaming",onClick:be},e.createElement(E.J,{name:"circle-mono",size:"md",className:j.streaming}))),_e===C.Gu.Loading&&be&&e.createElement(M,{delay:2e3},e.createElement(u.u,{content:"Cancel query"},e.createElement(F,{className:(0,s.cx)(L,j.pointer),"data-testid":"panel-cancel-query",onClick:be},e.createElement(E.J,{name:"sync-slash",size:"md"})))),e.createElement("div",{className:j.rightAligned},Ie&&e.createElement("div",{className:j.rightActions},Ee(Ie,Bn=>Bn))));return e.createElement("div",{className:(0,s.cx)(j.container,{[j.transparentContainer]:xn}),style:In,"data-testid":On,tabIndex:0,ref:Pn},e.createElement("div",{className:j.loadingBarContainer},_e===C.Gu.Loading?e.createElement(D.F,{width:wn,ariaLabel:"Panel loading bar"}):null),le&&e.createElement(e.Fragment,null,e.createElement(o,{menu:V,title:b,offset:se,dragClass:K,onOpenMenu:Fe},en),ve&&e.createElement("div",{className:j.errorContainerFloating},e.createElement(oe,{message:ve,onClick:Ke,ariaLabel:"Panel status"}))),Qe&&e.createElement("div",{className:(0,s.cx)(j.headerContainer,K),style:_n,"data-testid":"header-container"},ve&&e.createElement("div",{className:L},e.createElement(oe,{message:ve,onClick:Ke,ariaLabel:"Panel status"})),en,V&&e.createElement(W,{menu:V,title:b,placement:"bottom-end",menuButtonClass:(0,s.cx)(j.menuItem,L,bn),onOpenMenu:Fe})),!ee&&e.createElement("div",{id:Xe,className:(0,s.cx)(j.content,t===void 0&&j.containNone),style:Cn},typeof a=="function"?a(En,Sn):a))}const Ee=(n,t)=>{const a=e.Children.toArray(n).filter(Boolean);return a.length>0?t(a):null},fe=(n,t)=>t?n.spacing.gridSize*n.components.panel.headerHeight:0,nn=(n,t,a,l,b,A)=>{const R=(n==="md"?t.components.panel.padding:0)*t.spacing.gridSize,G=R*2,V=1*2;let K=0;A&&(K=A-G-V);let L=0;return b&&(L=b-a-G-V),l&&(L=a),{contentStyle:{padding:R},innerWidth:K,innerHeight:L}},tn=n=>{const{background:t,borderColor:a,padding:l}=n.components.panel;return{container:(0,s.iv)({label:"panel-container",backgroundColor:t,border:`1px solid ${a}`,position:"relative",borderRadius:n.shape.radius.default,height:"100%",display:"flex",flexDirection:"column","> *":{zIndex:0},"&:hover, &:active, &:focus":{zIndex:n.zIndex.activePanel},".show-on-hover":{opacity:"0",visibility:"hidden"},"&:focus-visible, &:hover":{".show-on-hover":{opacity:"1",visibility:"visible"}},"&:focus-visible":(0,q.SV)(n),"&:focus-within:not(:focus)":{".show-on-hover":{visibility:"visible",opacity:"1"}}}),transparentContainer:(0,s.iv)({label:"panel-transparent-container",backgroundColor:"transparent",border:"1px solid transparent",boxSizing:"border-box","&:hover":{border:`1px solid ${a}`}}),loadingBarContainer:(0,s.iv)({label:"panel-loading-bar-container",position:"absolute",top:0,width:"100%"}),containNone:(0,s.iv)({contain:"none"}),content:(0,s.iv)({label:"panel-content",flexGrow:1,contain:"size layout"}),headerContainer:(0,s.iv)({label:"panel-header",display:"flex",alignItems:"center"}),pointer:(0,s.iv)({cursor:"pointer"}),streaming:(0,s.iv)({label:"panel-streaming",marginRight:0,color:n.colors.success.text,"&:hover":{color:n.colors.success.text}}),title:(0,s.iv)({label:"panel-title",display:"flex",marginBottom:0,padding:n.spacing(0,l),textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:n.typography.h6.fontSize,fontWeight:n.typography.h6.fontWeight}),items:(0,s.iv)({display:"flex"}),item:(0,s.iv)({display:"flex",justifyContent:"center",alignItems:"center"}),hiddenMenu:(0,s.iv)({visibility:"hidden"}),menuItem:(0,s.iv)({label:"panel-menu",border:"none",background:n.colors.secondary.main,"&:hover":{background:n.colors.secondary.shade}}),errorContainerFloating:(0,s.iv)({label:"error-container",position:"absolute",left:0,top:0,zIndex:n.zIndex.tooltip}),rightActions:(0,s.iv)({display:"flex",padding:n.spacing(0,l),gap:n.spacing(1)}),rightAligned:(0,s.iv)({label:"right-aligned-container",marginLeft:"auto",display:"flex",alignItems:"center"}),titleItems:(0,s.iv)({display:"flex",height:"100%"}),clearButtonStyles:(0,s.iv)({alignItems:"center",display:"flex",gap:n.spacing(.5),background:"transparent",color:n.colors.text.primary,border:"none",padding:0,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:n.typography.h6.fontSize,fontWeight:n.typography.h6.fontWeight})}};try{k.displayName="PanelChrome",k.__docgenInfo={description:"",displayName:"PanelChrome",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"md"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"none"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string | (() => string)"}},titleItems:{defaultValue:null,description:"",name:"titleItems",required:!1,type:{name:"ReactNode"}},menu:{defaultValue:null,description:"",name:"menu",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | (() => ReactElement<any, string | JSXElementConstructor<any>>)"}},dragClass:{defaultValue:null,description:"",name:"dragClass",required:!1,type:{name:"string"}},dragClassCancel:{defaultValue:null,description:"",name:"dragClassCancel",required:!1,type:{name:"string"}},loadingState:{defaultValue:null,description:`Use only to indicate loading or streaming data in the panel.
Any other values of loadingState are ignored.`,name:"loadingState",required:!1,type:{name:"enum",value:[{value:'"NotStarted"'},{value:'"Loading"'},{value:'"Streaming"'},{value:'"Done"'},{value:'"Error"'}]}},statusMessage:{defaultValue:null,description:"Used to display status message (used for panel errors currently)",name:"statusMessage",required:!1,type:{name:"string"}},statusMessageOnClick:{defaultValue:null,description:"Handle opening error details view (like inspect / error tab)",name:"statusMessageOnClick",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => void)"}},leftItems:{defaultValue:null,description:"@deprecated use `actions' instead",name:"leftItems",required:!1,type:{name:"ReactNode[]"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},displayMode:{defaultValue:{value:"default"},description:"",name:"displayMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"transparent"'}]}},onCancelQuery:{defaultValue:null,description:"",name:"onCancelQuery",required:!1,type:{name:"(() => void)"}},onOpenMenu:{defaultValue:null,description:"callback when opening the panel menu",name:"onOpenMenu",required:!1,type:{name:"(() => void)"}},collapsible:{defaultValue:{value:"false"},description:"",name:"collapsible",required:!1,type:{name:"boolean"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},onToggleCollapse:{defaultValue:null,description:"callback when collapsing or expanding the panel",name:"onToggleCollapse",required:!1,type:{name:"((collapsed: boolean) => void)"}},hoverHeader:{defaultValue:{value:"false"},description:"",name:"hoverHeader",required:!1,type:{name:"boolean"}},hoverHeaderOffset:{defaultValue:null,description:"",name:"hoverHeaderOffset",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/PanelChrome/PanelChrome.tsx#PanelChrome"]={docgenInfo:k.__docgenInfo,name:"PanelChrome",path:"src/components/PanelChrome/PanelChrome.tsx#PanelChrome"})}catch{}const $=k;$.LoadingIndicator=O,$.TitleItem=F;var an=i("./src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx"),Pe=i("./src/utils/storybook/DashboardStoryCanvas.tsx"),ye=i("./src/components/Layout/Layout.tsx"),v=i("./src/components/Menu/Menu.tsx"),r=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),we=i("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),ae=i("../../.yarn/__virtual__/@storybook-addon-docs-virtual-1d1ae45bc6/2/yarn/cache/@storybook-addon-docs-npm-7.4.5-56a02b64b9-8110acf52b.zip/node_modules/@storybook/addon-docs/dist/blocks.mjs"),Oe=i("./src/components/IconButton/IconButton.tsx");function Be(n){const t=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",div:"div",h4:"h4",blockquote:"blockquote",em:"em"},(0,we.ah)(),n.components);return k||ke("PanelChrome",!1),k.LoadingIndicator||ke("PanelChrome.LoadingIndicator",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ae.h_,{title:"MDX|PanelChrome",component:k}),`
`,(0,r.jsx)(t.h1,{id:"panelchrome",children:"PanelChrome"}),`
`,(0,r.jsx)(t.p,{children:"Component used for rendering content wrapped in the same style as grafana panels"}),`
`,(0,r.jsx)(t.h3,{id:"basic-usage-title-description-and-content",children:"Basic Usage: Title, Description and Content"}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`<PanelChrome
  title="My awesome panel title"
  description="Here I will put a description that explains a bit more this panel"
  width={400}
  height={200}
>
  {(innerwidth, innerheight) => {
    return (
      <div
        style={{
          width: innerwidth,
          height: innerheight,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        New panel with old API
      </div>
    );
  }}
</PanelChrome>
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsx)(k,{title:"My awesome panel title",description:"Here I will put a description that explains a bit more this panel",width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content"})})}),`
`,(0,r.jsx)(t.h3,{id:"menu-standard--hover",children:"Menu: Standard & Hover"}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`<PanelChrome
  title="My awesome panel title"
  hoverHeader={<true || false>}
  menu={() => (
    <Menu>
      <Menu.Item label="View" icon="eye" />
      <Menu.Item label="Edit" icon="edit" />
      <Menu.Item label="Share" icon="share-alt" />
      <Menu.Divider />
      <Menu.Item label="Remove" icon="trash-alt" />
    </Menu>
  )}
  description="Here I will put a description that explains a bit more this panel"
  width={400}
  height={200}
>
  {(innerwidth, innerheight) => {
    return (
      <div
        style={{
          width: innerwidth,
          height: innerheight,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        New panel with old API
      </div>
    );
  }}
</PanelChrome>
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsxs)(ye.Lh,{spacing:"md",align:"flex-start",wrap:!0,children:[(0,r.jsx)(k,{title:"My awesome panel title",menu:()=>(0,r.jsxs)(v.v,{children:[(0,r.jsx)(v.v.Item,{label:"View",icon:"eye"}),(0,r.jsx)(v.v.Item,{label:"Edit",icon:"edit"}),(0,r.jsx)(v.v.Item,{label:"Share",icon:"share-alt"}),(0,r.jsx)(v.v.Divider,{}),(0,r.jsx)(v.v.Item,{label:"Remove",icon:"trash-alt"})]}),description:"Here I will put a description that explains a bit more this panel",width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content with fixed header"})}),(0,r.jsx)(k,{title:"My awesome panel title",menu:()=>(0,r.jsxs)(v.v,{children:[(0,r.jsx)(v.v.Item,{label:"View",icon:"eye"}),(0,r.jsx)(v.v.Item,{label:"Edit",icon:"edit"}),(0,r.jsx)(v.v.Item,{label:"Share",icon:"share-alt"}),(0,r.jsx)(v.v.Divider,{}),(0,r.jsx)(v.v.Item,{label:"Remove",icon:"trash-alt"})]}),hoverHeader:!0,description:"Here I will put a description that explains a bit more this panel",width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content with hoverHeader=true"})})]})}),`
`,(0,r.jsx)(t.h3,{id:"states-loading--streaming-error",children:"States: Loading , Streaming, Error"}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`<PanelChrome
  title="My awesome panel title"
  loadingState={<Loading.Loading || Loading.Streaming>}
  statusMessage='Error text'
  statusMessageOnClick={action('ErrorIndicator: onClick fired')}
  width={400}
  height={200}
>
  {(innerwidth, innerheight) => {
    return (
      <div
        style={{
          width: innerwidth,
          height: innerheight,
          background: 'rgba(230,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        New panel with old API
      </div>
    );
  }}
</PanelChrome>
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsxs)(ye.Lh,{spacing:"md",align:"flex-start",wrap:!0,children:[(0,r.jsx)(k,{title:"My awesome panel title",loadingState:C.Gu.Loading,width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Data is loading"})}),(0,r.jsx)(k,{title:"My awesome panel title",loadingState:C.Gu.Streaming,width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Data is Streaming"})}),(0,r.jsx)(k,{title:"My awesome panel title",statusMessage:"Error text",statusMessageOnClick:(0,d.aD)("ErrorIndicator: onClick fired"),width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"There is an error"})})]})}),`
`,(0,r.jsx)(t.h3,{id:"extra-options-title-items-and-actions",children:"Extra options? Title items and actions"}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`<PanelChrome
  title="My awesome panel title"
  titleItems={
    <>
      <IconButton
        className={css\`
          margin-right: 10px;
        \`}
        name="github"
        variant="secondary"
        tooltip="extra content to render"
      />
      <IconButton name="sliders-v-alt" variant="secondary" tooltip="extra content2 to render" />
    </>
  }
  actions={
    <Button size="sm" variant="secondary" key="A">
      Breakdown
    </Button>
  }
  width={500}
  height={200}
>
  {(innerwidth, innerheight) => {
    return (
      <div
        style={{
          width: innerwidth,
          height: innerheight,
          background: 'rgba(230,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        New panel with old API
      </div>
    );
  }}
</PanelChrome>
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsx)(k,{title:"My awesome panel title",titleItems:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Oe.h,{className:(0,s.iv)`
            margin-right: 10px;
          `,name:"github",variant:"secondary",tooltip:"extra content to render"}),(0,r.jsx)(Oe.h,{name:"sliders-v-alt",variant:"secondary",tooltip:"extra content to render"})]}),actions:(0,r.jsx)(y.zx,{size:"sm",variant:"secondary",children:"Breakdown"},"A"),width:500,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content"})})}),`
`,(0,r.jsx)(t.h3,{id:"migration-from-old-panelchrome-before-v940",children:"Migration from old PanelChrome (before v9.4.0)"}),`
`,(0,r.jsx)(t.h4,{id:"before",children:"Before"}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`<PanelChrome
  title="My awesome panel title"
  leftItems={[<PanelChrome.LoadingIndicator loading={isRefreshing} onCancel={onCancelQuery} key="loading-indicator" />]}
  width={400}
  height={200}
>
  {(innerwidth, innerheight) => {
    return (
      <div
        style={{
          width: innerwidth,
          height: innerheight,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        New panel with old API
      </div>
    );
  }}
</PanelChrome>
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsx)(k,{title:"My awesome panel title",leftItems:[(0,r.jsx)(k.LoadingIndicator,{loading:!0,onCancel:(0,d.aD)("CancelQuery: onClick fired")},"loading-indicator")],width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content"})})}),`
`,(0,r.jsx)(t.h4,{id:"after",children:"After"}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`<PanelChrome
  title="My awesome panel title"
  loadingState={LoadingState.Loading}
  onCancelQuery={onCancelQuery}
  width={400}
  height={200}
>
  {(innerwidth, innerheight) => {
    return (
      <div
        style={{
          width: innerwidth,
          height: innerheight,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        New panel with old API
      </div>
    );
  }}
</PanelChrome>
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsx)(k,{title:"My awesome panel title",loadingState:C.Gu.Loading,onCancelQuery:(0,d.aD)("CancelQuery: onClick fired"),width:400,height:200,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content"})})}),`
`,(0,r.jsx)(t.h3,{id:"collapsible",children:"Collapsible"}),`
`,(0,r.jsx)(t.p,{children:"The panel can be collapsed/expanded by clicking on the chevron or the title."}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Note: ",(0,r.jsx)(t.code,{children:"collapsible"})," and ",(0,r.jsx)(t.code,{children:"hoverHeader"})," props are mutually exclusive and cannot be used in the same panel."]})}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:`function Container() {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <PanelChrome
      title="My awesome panel title"
      width={400}
      height={200}
      collapsible={true}
      collapsed={isCollapsed}
      onToggleCollapse={(isCollapsed) => setCollapsed(isCollapsed)}
    >
      {(innerwidth, innerheight) => {
        return (
          <div
            style={{
              width: innerwidth,
              height: innerheight,
              background: 'rgba(230,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Content
          </div>
        );
      }}
    </PanelChrome>
  );
}
`})}),`
`,(0,r.jsx)(ae.MB,{children:(0,r.jsx)(k,{title:"My awesome panel title",width:400,height:200,collapsible:!0,children:(a,l)=>(0,r.jsx)(t.div,{style:{width:a,height:l,background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:"Content"})})})]})}function rn(n={}){const{wrapper:t}=Object.assign({},(0,we.ah)(),n.components);return t?(0,r.jsx)(t,Object.assign({},n,{children:(0,r.jsx)(Be,n)})):Be(n)}var on=rn;function ke(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}var ln=Object.defineProperty,sn=Object.defineProperties,dn=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,cn=Object.prototype.hasOwnProperty,un=Object.prototype.propertyIsEnumerable,Te=(n,t,a)=>t in n?ln(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,N=(n,t)=>{for(var a in t||(t={}))cn.call(t,a)&&Te(n,a,t[a]);if(Re)for(var a of Re(t))un.call(t,a)&&Te(n,a,t[a]);return n},ie=(n,t)=>sn(n,dn(t)),De,Le,je,Me,Ne,Ae,Ve,ze,He;const We=400,Ge=150,mn={title:"Visualizations/PanelChrome",component:$,parameters:{controls:{exclude:["children"]},docs:{page:on}}};function Se(){return{background:"rgba(230,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center"}}function x(n,t){const a={width:We,height:Ge,children:()=>{}};(0,h.merge)(a,t);const l=Se();return e.createElement($,N({},a),(b,A)=>e.createElement("div",{style:N({width:b,height:A},l)},n))}function pn(n,t){const a={width:We,height:Ge,children:()=>{},collapsible:!0};(0,h.merge)(a,t);const l=Se(),b=()=>{const[A,R]=p(!1);return e.createElement($,ie(N({},a),{collapsed:A,onToggleCollapse:R}),(G,V)=>e.createElement("div",{style:N({width:G,height:V},l)},n))};return e.createElement(b,null)}const X=e.createElement(v.v,null,e.createElement(v.v.Item,{label:"View",icon:"eye"}),e.createElement(v.v.Item,{label:"Edit",icon:"edit"}),e.createElement(v.v.Item,{label:"Share",icon:"share-alt"}),e.createElement(v.v.Item,{label:"Explore",icon:"compass"}),e.createElement(v.v.Item,{label:"Inspect",icon:"info-circle",childItems:[e.createElement(v.v.Item,{key:"subitem1",label:"Data"}),e.createElement(v.v.Item,{key:"subitem2",label:"Query"}),e.createElement(v.v.Item,{key:"subitem3",label:"Panel JSON"})]}),e.createElement(v.v.Item,{label:"More",icon:"cube",childItems:[e.createElement(v.v.Item,{key:"subitem1",label:"Duplicate"}),e.createElement(v.v.Item,{key:"subitem2",label:"Copy"}),e.createElement(v.v.Item,{key:"subitem3",label:"Create library panel"}),e.createElement(v.v.Item,{key:"subitem4",label:"Hide legend"}),e.createElement(v.v.Item,{key:"subitem5",label:"Get help"})]}),e.createElement(v.v.Divider,null),e.createElement(v.v.Item,{label:"Remove",icon:"trash-alt"})),ge=()=>{const[n,t]=(0,e.useState)(!0);return f(()=>t(!0),5e3),e.createElement(Pe.C,null,e.createElement("div",null,e.createElement(ye.Lh,{spacing:"md",align:"flex-start",wrap:!0},x("Has statusMessage",{title:"Default title",statusMessage:"Error text",statusMessageOnClick:(0,d.aD)("ErrorIndicator: onClick fired")}),x("No padding, has statusMessage",{padding:"none",title:"Default title",statusMessage:"Error text",statusMessageOnClick:(0,d.aD)("ErrorIndicator: onClick fired")}),x("No title, loadingState is Error, no statusMessage",{loadingState:C.Gu.Error}),x("loadingState is Streaming",{title:"Default title",loadingState:C.Gu.Streaming}),x("loadingState is Loading",{title:"Default title",loadingState:C.Gu.Loading}),x("Default panel: no non-required props"),x("No padding",{padding:"none"}),x("Very long title",{title:"Very long title that should get ellipsis when there is no more space"}),x("No title, streaming loadingState",{loadingState:C.Gu.Streaming}),x("Error status, menu",{title:"Default title",menu:X,statusMessage:"Error text",statusMessageOnClick:(0,d.aD)("ErrorIndicator: onClick fired")}),x("No padding; has statusMessage, menu",{padding:"none",title:"Default title",menu:X,statusMessage:"Error text",statusMessageOnClick:(0,d.aD)("ErrorIndicator: onClick fired")}),x("No title, loadingState is Error, no statusMessage, menu",{menu:X,loadingState:C.Gu.Error}),x("loadingState is Streaming, menu",{title:"Default title",menu:X,loadingState:C.Gu.Streaming}),x("loadingState is Loading, menu",{title:"Default title",menu:X,loadingState:C.Gu.Loading}),x("No padding, deprecated loading indicator",{padding:"none",title:"Default title",leftItems:[e.createElement($.LoadingIndicator,{loading:n,onCancel:()=>t(!1),key:"loading-indicator"})]}),x("Display mode = transparent",{title:"Default title",displayMode:"transparent",menu:X}),x("Actions with button no menu",{title:"Actions with button no menu",actions:e.createElement(y.zx,{size:"sm",variant:"secondary",key:"A"},"Breakdown")}),x("Panel with two actions",{title:"I have two buttons",actions:[e.createElement(y.zx,{size:"sm",variant:"secondary",key:"A"},"Breakdown"),e.createElement(y.zx,{size:"sm",variant:"secondary",icon:"times",key:"B"})]}),x("With radio button",{title:"I have a radio button",actions:[e.createElement(an.S,{key:"radio-button-group",size:"sm",value:"A",options:[{label:"Graph",value:"A"},{label:"Table",value:"B"}]})]}),pn("Collapsible panel",{title:"Default title",collapsible:!0}),x("Panel with action link",{title:"Panel with action link",actions:e.createElement("a",{className:"external-link",href:"/some/page"},"Error details",e.createElement(E.J,{name:"arrow-right"}))}),x("Action and menu (should be rare)",{title:"Action and menu",menu:X,actions:e.createElement(y.zx,{size:"sm",variant:"secondary"},"Breakdown")}))))},he=()=>e.createElement(Pe.C,null,e.createElement("div",null,e.createElement(ye.Lh,{spacing:"md",align:"flex-start",wrap:!0},x("Title items, menu, hover header",{title:"Default title",description:"This is a description",menu:X,hoverHeader:!0,dragClass:"draggable",titleItems:e.createElement($.TitleItem,{title:"Online"},e.createElement(E.J,{name:"heart"}))}),x("Multiple title items",{title:"Default title",menu:X,hoverHeader:!0,dragClass:"draggable",titleItems:[e.createElement($.TitleItem,{title:"Online",key:"A"},e.createElement(E.J,{name:"heart"})),e.createElement($.TitleItem,{title:"Link",key:"B",onClick:()=>{}},e.createElement(E.J,{name:"external-link-alt"}))]}),x("Hover header, loading loadingState",{loadingState:C.Gu.Loading,hoverHeader:!0,title:"I am a hover header",dragClass:"draggable"}),x("No title, Hover header",{hoverHeader:!0,dragClass:"draggable"}),x("Should not have drag icon",{title:"No drag icon",hoverHeader:!0}),x("With action link",{title:"With link in hover header",hoverHeader:!0,actions:e.createElement("a",{className:"external-link",href:"/some/page"},"Error details",e.createElement(E.J,{name:"arrow-right"}))})))),pe=n=>{const t={width:400,height:200,title:"Very long title that should get ellipsis when there is no more space",description:hn,menu:X,children:()=>{}};(0,h.merge)(t,n);const a=Se();return e.createElement($,N({},t),(l,b)=>e.createElement("div",{style:N({height:b,width:l},a)},"Panel in a loading state"))},gn=[],qe={LoadingIcon:[e.createElement($.LoadingIndicator,{key:"loadingIndicator",loading:!0,onCancel:(0,d.aD)("LoadingIndicator: onCancel fired")})],Default:gn},hn="Description text with very long descriptive words that describe what is going on in the panel and not beyond. Or maybe beyond, not up to us.";pe.argTypes={description:{control:{type:"text"}},leftItems:{options:Object.keys(qe),mapping:qe,control:{type:"select",labels:{LoadingIcon:"With loading icon",Default:"Default (no elements)"}}}};var fn=mn;ge.parameters=ie(N({},ge.parameters),{docs:ie(N({},(De=ge.parameters)==null?void 0:De.docs),{source:N({originalSource:`() => {
  const [loading, setLoading] = useState(true);
  useInterval(() => setLoading(true), 5000);
  return <DashboardStoryCanvas>
      <div>
        <HorizontalGroup spacing="md" align="flex-start" wrap>
          {renderPanel('Has statusMessage', {
          title: 'Default title',
          statusMessage: 'Error text',
          statusMessageOnClick: action('ErrorIndicator: onClick fired')
        })}
          {renderPanel('No padding, has statusMessage', {
          padding: 'none',
          title: 'Default title',
          statusMessage: 'Error text',
          statusMessageOnClick: action('ErrorIndicator: onClick fired')
        })}
          {renderPanel('No title, loadingState is Error, no statusMessage', {
          loadingState: LoadingState.Error
        })}
          {renderPanel('loadingState is Streaming', {
          title: 'Default title',
          loadingState: LoadingState.Streaming
        })}

          {renderPanel('loadingState is Loading', {
          title: 'Default title',
          loadingState: LoadingState.Loading
        })}

          {renderPanel('Default panel: no non-required props')}
          {renderPanel('No padding', {
          padding: 'none'
        })}
          {renderPanel('Very long title', {
          title: 'Very long title that should get ellipsis when there is no more space'
        })}
          {renderPanel('No title, streaming loadingState', {
          loadingState: LoadingState.Streaming
        })}
          {renderPanel('Error status, menu', {
          title: 'Default title',
          menu,
          statusMessage: 'Error text',
          statusMessageOnClick: action('ErrorIndicator: onClick fired')
        })}
          {renderPanel('No padding; has statusMessage, menu', {
          padding: 'none',
          title: 'Default title',
          menu,
          statusMessage: 'Error text',
          statusMessageOnClick: action('ErrorIndicator: onClick fired')
        })}
          {renderPanel('No title, loadingState is Error, no statusMessage, menu', {
          menu,
          loadingState: LoadingState.Error
        })}
          {renderPanel('loadingState is Streaming, menu', {
          title: 'Default title',
          menu,
          loadingState: LoadingState.Streaming
        })}
          {renderPanel('loadingState is Loading, menu', {
          title: 'Default title',
          menu,
          loadingState: LoadingState.Loading
        })}
          {renderPanel('No padding, deprecated loading indicator', {
          padding: 'none',
          title: 'Default title',
          leftItems: [<PanelChrome.LoadingIndicator loading={loading} onCancel={() => setLoading(false)} key="loading-indicator" />]
        })}
          {renderPanel('Display mode = transparent', {
          title: 'Default title',
          displayMode: 'transparent',
          menu
        })}
          {renderPanel('Actions with button no menu', {
          title: 'Actions with button no menu',
          actions: <Button size="sm" variant="secondary" key="A">
                Breakdown
              </Button>
        })}
          {renderPanel('Panel with two actions', {
          title: 'I have two buttons',
          actions: [<Button size="sm" variant="secondary" key="A">
                Breakdown
              </Button>, <Button size="sm" variant="secondary" icon="times" key="B" />]
        })}
          {renderPanel('With radio button', {
          title: 'I have a radio button',
          actions: [<RadioButtonGroup key="radio-button-group" size="sm" value="A" options={[{
            label: 'Graph',
            value: 'A'
          }, {
            label: 'Table',
            value: 'B'
          }]} />]
        })}
          {renderCollapsiblePanel('Collapsible panel', {
          title: 'Default title',
          collapsible: true
        })}
          {renderPanel('Panel with action link', {
          title: 'Panel with action link',
          actions: <a className="external-link" href="/some/page">
                Error details
                <Icon name="arrow-right" />
              </a>
        })}
          {renderPanel('Action and menu (should be rare)', {
          title: 'Action and menu',
          menu,
          actions: <Button size="sm" variant="secondary">
                Breakdown
              </Button>
        })}
        </HorizontalGroup>
      </div>
    </DashboardStoryCanvas>;
}`},(je=(Le=ge.parameters)==null?void 0:Le.docs)==null?void 0:je.source)})}),he.parameters=ie(N({},he.parameters),{docs:ie(N({},(Me=he.parameters)==null?void 0:Me.docs),{source:N({originalSource:`() => {
  return <DashboardStoryCanvas>
      <div>
        <HorizontalGroup spacing="md" align="flex-start" wrap>
          {renderPanel('Title items, menu, hover header', {
          title: 'Default title',
          description: 'This is a description',
          menu,
          hoverHeader: true,
          dragClass: 'draggable',
          titleItems: <PanelChrome.TitleItem title="Online">
                <Icon name="heart" />
              </PanelChrome.TitleItem>
        })}
          {renderPanel('Multiple title items', {
          title: 'Default title',
          menu,
          hoverHeader: true,
          dragClass: 'draggable',
          titleItems: [<PanelChrome.TitleItem title="Online" key="A">
                <Icon name="heart" />
              </PanelChrome.TitleItem>, <PanelChrome.TitleItem title="Link" key="B" onClick={() => {}}>
                <Icon name="external-link-alt" />
              </PanelChrome.TitleItem>]
        })}
          {renderPanel('Hover header, loading loadingState', {
          loadingState: LoadingState.Loading,
          hoverHeader: true,
          title: 'I am a hover header',
          dragClass: 'draggable'
        })}
          {renderPanel('No title, Hover header', {
          hoverHeader: true,
          dragClass: 'draggable'
        })}
          {renderPanel('Should not have drag icon', {
          title: 'No drag icon',
          hoverHeader: true
        })}
          {renderPanel('With action link', {
          title: 'With link in hover header',
          hoverHeader: true,
          actions: <a className="external-link" href="/some/page">
                Error details
                <Icon name="arrow-right" />
              </a>
        })}
        </HorizontalGroup>
      </div>
    </DashboardStoryCanvas>;
}`},(Ae=(Ne=he.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source)})}),pe.parameters=ie(N({},pe.parameters),{docs:ie(N({},(Ve=pe.parameters)==null?void 0:Ve.docs),{source:N({originalSource:`(overrides?: Partial<PanelChromeProps>) => {
  const args = {
    width: 400,
    height: 200,
    title: 'Very long title that should get ellipsis when there is no more space',
    description,
    menu,
    children: () => undefined
  };
  merge(args, overrides);
  const contentStyle = getContentStyle();
  return <PanelChrome {...args}>
      {(width: number, height: number) => <div style={{
      height,
      width,
      ...contentStyle
    }}>Panel in a loading state</div>}
    </PanelChrome>;
}`},(He=(ze=pe.parameters)==null?void 0:ze.docs)==null?void 0:He.source)})})},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/misc/util.js":function(Q,B,i){i.d(B,{S1:function(){return e},ZT:function(){return d},jU:function(){return _},on:function(){return h}});var d=function(){};function h(p){for(var P=[],f=1;f<arguments.length;f++)P[f-1]=arguments[f];p&&p.addEventListener&&p.addEventListener.apply(p,P)}function e(p){for(var P=[],f=1;f<arguments.length;f++)P[f-1]=arguments[f];p&&p.removeEventListener&&p.removeEventListener.apply(p,P)}var _=typeof window<"u",c=typeof navigator<"u"},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMeasure.js":function(Q,B,i){i.d(B,{Z:function(){return P}});var d=i("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=i("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/misc/util.js"),e=h.jU?d.useLayoutEffect:d.useEffect,_=e,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function p(){var f=(0,d.useState)(null),C=f[0],s=f[1],z=(0,d.useState)(c),w=z[0],E=z[1],u=(0,d.useMemo)(function(){return new window.ResizeObserver(function(O){if(O[0]){var I=O[0].contentRect,T=I.x,q=I.y,M=I.width,D=I.height,U=I.top,H=I.left,W=I.bottom,o=I.right;E({x:T,y:q,width:M,height:D,top:U,left:H,bottom:W,right:o})}})},[]);return _(function(){if(C)return u.observe(C),function(){u.disconnect()}},[C]),[s,w]}var P=h.jU&&typeof window.ResizeObserver<"u"?p:function(){return[h.ZT,c]}}}]);
