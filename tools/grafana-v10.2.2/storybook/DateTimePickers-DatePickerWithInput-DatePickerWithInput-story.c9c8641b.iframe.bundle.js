"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9985],{"../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/icon.ts":function(T,y,t){t.d(y,{Mo:function(){return o},_S:function(){return a},iJ:function(){return h}});const a={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,apps:!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,"document-info":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function o(d){return!d||typeof d!="string"?!1:d in a}function h(d){if(o(d))return d}},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx":function(T,y,t){t.d(y,{L:function(){return o}});var a=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");class o extends a.PureComponent{constructor(){super(...arguments),this.myRef=(0,a.createRef)(),this.state={hasEventListener:!1},this.onOutsideClick=d=>{const b=this.myRef.current;(!b||d.target instanceof Node&&!b.contains(d.target))&&this.props.onClick()}}componentDidMount(){this.props.parent.addEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.addEventListener("keyup",this.onOutsideClick,this.props.useCapture)}componentWillUnmount(){this.props.parent.removeEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.removeEventListener("keyup",this.onOutsideClick,this.props.useCapture)}render(){return a.createElement("div",{ref:this.myRef},this.props.children)}}o.defaultProps={includeButtonPress:!0,parent:typeof window<"u"?window:void 0,useCapture:!1};try{o.displayName="ClickOutsideWrapper",o.__docgenInfo={description:"",displayName:"ClickOutsideWrapper",props:{onClick:{defaultValue:null,description:"Callback to trigger when clicking outside of current element occurs.",name:"onClick",required:!0,type:{name:"() => void"}},includeButtonPress:{defaultValue:{value:"true"},description:"Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.",name:"includeButtonPress",required:!1,type:{name:"boolean"}},parent:{defaultValue:{value:"typeof window !== 'undefined' ? window : undefined"},description:"Object to attach the click event listener to.",name:"parent",required:!1,type:{name:"Window | Document"}},useCapture:{defaultValue:{value:"false"},description:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.",name:"useCapture",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"]={docgenInfo:o.__docgenInfo,name:"ClickOutsideWrapper",path:"src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"})}catch{}},"./src/components/DateTimePickers/DatePicker/DatePicker.tsx":function(T,y,t){t.d(y,{M:function(){return O}});var a=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=t("../../.yarn/__virtual__/react-calendar-virtual-07281ad01d/2/yarn/cache/react-calendar-npm-4.3.0-89c6303b2d-0abfb0e6c6.zip/node_modules/react-calendar/dist/esm/index.js"),d=t("./src/themes/ThemeContext.tsx"),b=t("./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx"),v=t("./src/components/Icon/Icon.tsx"),_=t("./src/components/DateTimePickers/TimeRangePicker/CalendarBody.tsx"),k=Object.defineProperty,s=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,P=(c,f,p)=>f in c?k(c,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):c[f]=p,E=(c,f)=>{for(var p in f||(f={}))g.call(f,p)&&P(c,p,f[p]);if(s)for(var p of s(f))x.call(f,p)&&P(c,p,f[p]);return c};const O=(0,o.memo)(c=>{const f=(0,d.wW)(C),{isOpen:p,onClose:e}=c;return p?o.createElement(b.L,{useCapture:!0,includeButtonPress:!1,onClick:e},o.createElement("div",{className:f.modal,"data-testid":"date-picker"},o.createElement(I,E({},c)))):null});O.displayName="DatePicker";const I=(0,o.memo)(({value:c,minDate:f,maxDate:p,onChange:e})=>{const r=(0,d.wW)(_.mg);return o.createElement(h.ZP,{className:r.body,tileClassName:r.title,value:c||new Date,minDate:f,maxDate:p,nextLabel:o.createElement(v.J,{name:"angle-right"}),prevLabel:o.createElement(v.J,{name:"angle-left"}),onChange:n=>{n&&!Array.isArray(n)&&e(n)},locale:"en"})});I.displayName="Body";const C=c=>({modal:(0,a.iv)({zIndex:c.zIndex.modal,position:"absolute",boxShadow:c.shadows.z3,backgroundColor:c.colors.background.primary,border:`1px solid ${c.colors.border.weak}`,borderTopLeftRadius:c.shape.radius.default,borderBottomLeftRadius:c.shape.radius.default,"button:disabled":{color:c.colors.text.disabled}})});try{O.displayName="DatePicker",O.__docgenInfo={description:"",displayName:"DatePicker",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePicker/DatePicker.tsx#DatePicker"]={docgenInfo:O.__docgenInfo,name:"DatePicker",path:"src/components/DateTimePickers/DatePicker/DatePicker.tsx#DatePicker"})}catch{}},"./src/components/Forms/commonStyles.ts":function(T,y,t){t.d(y,{GL:function(){return h},RK:function(){return d},ht:function(){return v},iL:function(){return k},nf:function(){return b}});var a=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("./src/themes/mixins.ts");const h=s=>(0,a.iv)({"&:focus":(0,o.SV)(s)}),d=(s,g=!1)=>{const x=g?s.colors.error.border:s.components.input.borderColor,P=g?s.colors.error.shade:s.components.input.borderHover,E=s.components.input.background,O=s.components.input.text,I=s.isDark?"#2e2f35":"#bab4ca";return(0,a.cx)(b(s),(0,a.iv)({background:E,lineHeight:s.typography.body.lineHeight,fontSize:s.typography.size.md,color:O,border:`1px solid ${x}`,"&:-webkit-autofill, &:-webkit-autofill:hover":{boxShadow:`inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${E}!important`,WebkitTextFillColor:`${O} !important`,borderColor:I},"&:-webkit-autofill:focus":{boxShadow:`0 0 0 2px ${s.colors.background.primary}, 0 0 0px 4px ${s.colors.primary.main}, inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${E}!important`,WebkitTextFillColor:`${O} !important`},"&:hover":{borderColor:P},"&:focus":{outline:"none"},"&:disabled":{backgroundColor:s.colors.action.disabledBackground,color:s.colors.action.disabledText,border:`1px solid ${s.colors.action.disabledBackground}`,"&:hover":{borderColor:x}},"&::placeholder":{color:s.colors.text.disabled,opacity:1}}))},b=s=>(0,a.iv)({padding:s.spacing(0,1,0,1)}),v=()=>({sm:(0,a.iv)({width:_("sm")}),md:(0,a.iv)({width:_("md")}),lg:(0,a.iv)({width:_("lg")}),auto:(0,a.iv)({width:_("auto")})}),_=s=>{switch(s){case"sm":return"200px";case"md":return"320px";case"lg":return"580px";case"auto":default:return"auto"}};function k(s,g){switch(s){case"sm":return{padding:1,fontSize:g.typography.size.sm,height:g.components.height.sm};case"lg":return{padding:3,fontSize:g.typography.size.lg,height:g.components.height.lg};case"md":default:return{padding:2,fontSize:g.typography.size.md,height:g.components.height.md}}}},"./src/components/Icon/Icon.tsx":function(T,y,t){t.d(y,{J:function(){return f}});var a=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=t("../../.yarn/__virtual__/react-inlinesvg-virtual-73adca9fed/2/yarn/cache/react-inlinesvg-npm-3.0.2-ba939b6936-05e31af59d.zip/node_modules/react-inlinesvg/esm/index.js"),d=t("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/icon.ts"),b=t("./src/themes/ThemeContext.tsx"),v=t("./src/components/Icon/utils.ts"),_=Object.defineProperty,k=Object.defineProperties,s=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,E=(e,r,n)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,O=(e,r)=>{for(var n in r||(r={}))x.call(r,n)&&E(e,n,r[n]);if(g)for(var n of g(r))P.call(r,n)&&E(e,n,r[n]);return e},I=(e,r)=>k(e,s(r)),C=(e,r)=>{var n={};for(var m in e)x.call(e,m)&&r.indexOf(m)<0&&(n[m]=e[m]);if(e!=null&&g)for(var m of g(e))r.indexOf(m)<0&&P.call(e,m)&&(n[m]=e[m]);return n};const c=e=>({container:(0,a.iv)({label:"Icon",display:"inline-block",lineHeight:0}),icon:(0,a.iv)({verticalAlign:"middle",display:"inline-block",fill:"currentColor"}),orange:(0,a.iv)({fill:e.v1.palette.orange})}),f=o.forwardRef((e,r)=>{var n=e,{size:m="md",type:S="default",name:D,className:B,style:A,title:z=""}=n,L=C(n,["size","type","name","className","style","title"]);const M=(0,b.wW)(c);if(D?.startsWith("fa fa-"))return o.createElement("i",I(O({className:p(D,B)},L),{style:A}));if((0,d.Mo)(D)||console.warn("Icon component passed an invalid icon name",D),!D||D.includes(".."))return o.createElement("div",{ref:r},"invalid icon name");const N=(0,v.lK)(),W=(0,v.Bm)(m),j=W,V=D.startsWith("gf-bar-align")?16:D.startsWith("gf-interp")?30:W,K=(0,v.y_)(D,S),U=`${N}${K}/${D}.svg`;return o.createElement("div",I(O({className:M.container},L),{ref:r}),o.createElement(h.Z,{src:U,width:V,height:j,title:z,className:(0,a.cx)(M.icon,B,S==="mono"?{[M.orange]:D==="favorite"}:""),style:A}))});f.displayName="Icon";function p(e,r){return(0,a.cx)(e,{"fa-spin":e==="fa fa-spinner"},r)}try{f.displayName="Icon",f.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"apps"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:f.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(T,y,t){t.d(y,{Bm:function(){return h},lK:function(){return b},y_:function(){return o}});const a=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function o(v,_){return v?.startsWith("gf-")?"custom":a.includes(v)?"mono":_==="default"?"unicons":_==="solid"?"solid":"mono"}function h(v){switch(v){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let d;function b(){if(d)return d;const v=typeof window<"u"&&window.__grafana_public_path__;return v?d=v+"img/icons/":d="public/img/icons/",d}},"./src/components/Input/Input.tsx":function(T,y,t){t.d(y,{H:function(){return p},I:function(){return f}});var a=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=t("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js"),d=t("./src/themes/ThemeContext.tsx"),b=t("./src/themes/stylesFactory.ts"),v=t("./src/components/Forms/commonStyles.ts"),_=t("./src/components/Spinner/Spinner.tsx"),k=Object.defineProperty,s=Object.defineProperties,g=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,r,n)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,I=(e,r)=>{for(var n in r||(r={}))P.call(r,n)&&O(e,n,r[n]);if(x)for(var n of x(r))E.call(r,n)&&O(e,n,r[n]);return e},C=(e,r)=>s(e,g(r)),c=(e,r)=>{var n={};for(var m in e)P.call(e,m)&&r.indexOf(m)<0&&(n[m]=e[m]);if(e!=null&&x)for(var m of x(e))r.indexOf(m)<0&&E.call(e,m)&&(n[m]=e[m]);return n};const f=o.forwardRef((e,r)=>{const n=e,{className:m,addonAfter:S,addonBefore:D,prefix:B,suffix:A,invalid:z,loading:L,width:M=0}=n,N=c(n,["className","addonAfter","addonBefore","prefix","suffix","invalid","loading","width"]),[W,j]=(0,h.Z)(),[V,K]=(0,h.Z)(),U=(0,d.l4)(),R=p({theme:U,invalid:!!z,width:M});return o.createElement("div",{className:(0,a.cx)(R.wrapper,m),"data-testid":"input-wrapper"},!!D&&o.createElement("div",{className:R.addon},D),o.createElement("div",{className:R.inputWrapper},B&&o.createElement("div",{className:R.prefix,ref:W},B),o.createElement("input",C(I({ref:r,className:R.input},N),{style:{paddingLeft:B?j.width+12:void 0,paddingRight:A||L?K.width+12:void 0}})),(A||L)&&o.createElement("div",{className:R.suffix,ref:V},L&&o.createElement(_.$,{className:R.loadingIndicator,inline:!0}),A)),!!S&&o.createElement("div",{className:R.addon},S))});f.displayName="Input";const p=(0,b.B)(({theme:e,invalid:r=!1,width:n})=>{const m="28px",S=(0,a.iv)({position:"absolute",top:0,zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",flexGrow:0,flexShrink:0,fontSize:e.typography.size.md,height:"100%",minWidth:m,color:e.colors.text.secondary});return{wrapper:(0,a.cx)((0,a.iv)({label:"input-wrapper",display:"flex",width:n?e.spacing(n):"100%",height:e.spacing(e.components.height.md),borderRadius:e.shape.radius.default,"&:hover":{"> .prefix, .suffix, .input":{borderColor:r?e.colors.error.border:e.colors.primary.border},"input[type='number']":{appearance:"textfield"},"input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":{WebkitAppearance:"inner-spin-button !important",opacity:1}}})),inputWrapper:(0,a.iv)({label:"input-inputWrapper",position:"relative",flexGrow:1,zIndex:1,"&:not(:first-child):last-child":{"> input":{borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0}},"&:first-child:not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}},"&:not(:first-child):not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}},input:{"&:not(:first-child)":{paddingLeft:m},"&:not(:last-child)":{paddingRight:m},"&[readonly]":{cursor:"default"}}}),input:(0,a.cx)((0,v.GL)(e),(0,v.RK)(e,r),(0,a.iv)({label:"input-input",position:"relative",zIndex:0,flexGrow:1,borderRadius:e.shape.radius.default,height:"100%",width:"100%"})),inputDisabled:(0,a.iv)({backgroundColor:e.colors.action.disabledBackground,color:e.colors.action.disabledText,border:`1px solid ${e.colors.action.disabledBackground}`,"&:focus":{boxShadow:"none"}}),addon:(0,a.iv)({label:"input-addon",display:"flex",justifyContent:"center",alignItems:"center",flexGrow:0,flexShrink:0,position:"relative","&:first-child":{borderTopRightRadius:0,borderBottomRightRadius:0,"> :last-child":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&:last-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0,"> :first-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0}},"> *:focus":{zIndex:2}}),prefix:(0,a.cx)(S,(0,a.iv)({label:"input-prefix",paddingLeft:e.spacing(1),paddingRight:e.spacing(.5),borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0})),suffix:(0,a.cx)(S,(0,a.iv)({label:"input-suffix",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),marginBottom:"-2px",borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0,right:0})),loadingIndicator:(0,a.iv)({"& + *":{marginLeft:e.spacing(.5)}})}});try{f.displayName="Input",f.__docgenInfo={description:"",displayName:"Input",props:{width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:f.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch{}},"./src/components/Spinner/Spinner.tsx":function(T,y,t){t.d(y,{$:function(){return v}});var a=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=t("./src/themes/stylesFactory.ts"),d=t("./src/components/Icon/Icon.tsx");const b=(0,h.B)((_,k)=>(0,a.iv)([{fontSize:typeof _=="string"?_:`${_}px`},k&&{display:"inline-block"}])),v=({className:_,inline:k=!1,iconClassName:s,style:g,size:x=16})=>{const P=b(x,k);return o.createElement("div",{"data-testid":"Spinner",style:g,className:(0,a.cx)(P,_)},o.createElement(d.J,{className:(0,a.cx)("fa-spin",s),name:"fa fa-spinner","aria-label":"loading spinner"}))};try{v.displayName="Spinner",v.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"16"},description:"",name:"size",required:!1,type:{name:"string | number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:v.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch{}},"./src/themes/stylesFactory.ts":function(T,y,t){t.d(y,{B:function(){return h}});var a=t("../../../yarn/cache/micro-memoize-npm-4.1.2-8063c85cb2-4b02750622.zip/node_modules/micro-memoize/dist/micro-memoize.js"),o=t.n(a);function h(d){return o()(d)}},"./src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.story.tsx":function(T,y,t){t.r(y),t.d(y,{Basic:function(){return $},default:function(){return Z}});var a=t("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs"),o=t("@storybook/client-api"),h=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),d=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),b=t("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/datetime/moment_wrapper.ts"),v=t("./src/themes/ThemeContext.tsx"),_=t("./src/components/Input/Input.tsx"),k=t("./src/components/DateTimePickers/DatePicker/DatePicker.tsx"),s=Object.defineProperty,g=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,E=(i,l,u)=>l in i?s(i,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[l]=u,O=(i,l)=>{for(var u in l||(l={}))x.call(l,u)&&E(i,u,l[u]);if(g)for(var u of g(l))P.call(l,u)&&E(i,u,l[u]);return i},I=(i,l)=>{var u={};for(var w in i)x.call(i,w)&&l.indexOf(w)<0&&(u[w]=i[w]);if(i!=null&&g)for(var w of g(i))l.indexOf(w)<0&&P.call(i,w)&&(u[w]=i[w]);return u};const C=i=>(0,b.CQ)(i).format("L"),c=i=>{var l=i,{value:u,minDate:w,maxDate:Q,onChange:q,closeOnSelect:X,placeholder:ee="Date"}=l,te=I(l,["value","minDate","maxDate","onChange","closeOnSelect","placeholder"]);const[ae,F]=h.useState(!1),G=(0,v.wW)(f);return h.createElement("div",{className:G.container},h.createElement(_.I,O({type:"text",autoComplete:"off",placeholder:ee,value:u&&C(u),onClick:()=>F(!0),onChange:H=>{H.target.value===""&&q("")},className:G.input},te)),h.createElement(k.M,{isOpen:ae,value:u&&typeof u!="string"?u:(0,b.CQ)().toDate(),minDate:w,maxDate:Q,onChange:H=>{q(H),X&&F(!1)},onClose:()=>F(!1)}))},f=()=>({container:(0,d.iv)({position:"relative"}),input:(0,d.iv)({"input[type='date']::-webkit-inner-spin-button, input[type='date']::-webkit-calendar-picker-indicator":{display:"none",WebkitAppearance:"none"}})});try{C.displayName="formatDate",C.__docgenInfo={description:"",displayName:"formatDate",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#formatDate"]={docgenInfo:C.__docgenInfo,name:"formatDate",path:"src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#formatDate"})}catch{}try{c.displayName="DatePickerWithInput",c.__docgenInfo={description:"",displayName:"DatePickerWithInput",props:{value:{defaultValue:null,description:"Value selected by the DatePicker",name:"value",required:!1,type:{name:"string | Date"}},minDate:{defaultValue:null,description:"The minimum date the value can be set to",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"The maximum date the value can be set to",name:"maxDate",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Handles changes when a new date is selected",name:"onChange",required:!0,type:{name:"(value: string | Date) => void"}},closeOnSelect:{defaultValue:null,description:"Hide the calendar when date is selected",name:"closeOnSelect",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Date"},description:"Text that appears when the input has no text",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#DatePickerWithInput"]={docgenInfo:c.__docgenInfo,name:"DatePickerWithInput",path:"src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#DatePickerWithInput"})}catch{}var p=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),e=t("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),r=t("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function n(i){const l=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,e.ah)(),i.components);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.h1,{id:"datepickerwithinput",children:"DatePickerWithInput"}),`
`,(0,p.jsx)(l.p,{children:"An input with a calendar view, used to select a date."}),`
`,(0,p.jsx)(l.h3,{id:"usage",children:"Usage"}),`
`,(0,p.jsx)(l.pre,{children:(0,p.jsx)(l.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { DatePickerWithInput } from '@grafana/ui';

const [date, setDate] = useState<Date | string>(new Date());
return <DatePickerWithInput width={40} value={date} onChange={(newDate) => setDate(newDate)} />;
`})}),`
`,(0,p.jsx)(l.h3,{id:"props",children:"Props"}),`
`,(0,p.jsx)(r.Ed,{of:c})]})}function m(i={}){const{wrapper:l}=Object.assign({},(0,e.ah)(),i.components);return l?(0,p.jsx)(l,Object.assign({},i,{children:(0,p.jsx)(n,i)})):n(i)}var S=m,D=Object.defineProperty,B=Object.defineProperties,A=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,N=(i,l,u)=>l in i?D(i,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[l]=u,W=(i,l)=>{for(var u in l||(l={}))L.call(l,u)&&N(i,u,l[u]);if(z)for(var u of z(l))M.call(l,u)&&N(i,u,l[u]);return i},j=(i,l)=>B(i,A(l)),V,K,U;const R=new Date,Y=new Date;Y.setMonth(Y.getMonth()-1);const J={title:"Pickers and Editors/TimePickers/DatePickerWithInput",component:c,parameters:{docs:{page:S},controls:{exclude:["value","onChange","prefix","suffix","width","invalid","loading","addonBefore","addonAfter"]}},args:{value:R,minDate:Y,closeOnSelect:!0,placeholder:"Date"},argTypes:{minDate:{control:"date"}}},$=i=>{const[,l]=(0,o.useArgs)(),u=typeof i.minDate=="number"?new Date(i.minDate):i.minDate;return h.createElement(c,j(W({},i),{width:40,minDate:u,onChange:w=>{(0,a.aD)("on selected")(w),l({value:w})}}))};var Z=J;$.parameters=j(W({},$.parameters),{docs:j(W({},(V=$.parameters)==null?void 0:V.docs),{source:W({originalSource:`args => {
  const [, updateArgs] = useArgs();

  // the minDate arg can change from Date object to number, we need to handle this
  // scenario to avoid a crash in the component's story.
  const minDateVal = typeof args.minDate === 'number' ? new Date(args.minDate) : args.minDate;
  return <DatePickerWithInput {...args} width={40} minDate={minDateVal} onChange={newValue => {
    action('on selected')(newValue);
    updateArgs({
      value: newValue
    });
  }} />;
}`},(U=(K=$.parameters)==null?void 0:K.docs)==null?void 0:U.source)})})}}]);
