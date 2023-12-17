"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[862],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(K,T,l){l.d(T,{NF:function(){return _},Zo:function(){return I},ah:function(){return b},pC:function(){return o}});var t=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const o=t.createContext({});function _(f){return s;function s(v){const C=b(v.components);return t.createElement(f,{...v,allComponents:C})}}function b(f){const s=t.useContext(o);return t.useMemo(()=>typeof f=="function"?f(s):{...s,...f},[s,f])}const m={};function I({components:f,children:s,disableParentContext:v}){let C;return v?C=typeof f=="function"?f({}):f||m:C=b(f),t.createElement(o.Provider,{value:C},s)}},"../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/data.ts":function(K,T,l){l.d(T,{Gl:function(){return _},Gu:function(){return t},fQ:function(){return b}});var t=(m=>(m.NotStarted="NotStarted",m.Loading="Loading",m.Streaming="Streaming",m.Done="Done",m.Error="Error",m))(t||{});const o=null;var _=(m=>(m.Null="null",m.Ignore="connected",m.AsZero="null as zero",m))(_||{});const b=m=>!!m},"../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/utils/deprecationWarning.ts":function(K,T,l){l.d(T,{d:function(){return o}});const t={},o=(_,b,m)=>{let I=`[Deprecation warning] ${_}: ${b} is deprecated`;m&&(I+=`. Use ${m} instead`);const f=Date.now(),s=t[I];(!s||f-s>1e4)&&(console.warn(I),t[I]=f)}},"./src/components/Badge/Badge.tsx":function(K,T,l){l.d(T,{C:function(){return h}});var t=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),_=l("../../../yarn/cache/tinycolor2-npm-1.6.0-8df41252c6-6df4d07fce.zip/node_modules/tinycolor2/esm/tinycolor.js"),b=l("./src/themes/ThemeContext.tsx"),m=l("./src/components/Icon/Icon.tsx"),I=l("./src/components/Tooltip/Tooltip.tsx"),f=Object.defineProperty,s=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,O=(u,g,p)=>g in u?f(u,g,{enumerable:!0,configurable:!0,writable:!0,value:p}):u[g]=p,R=(u,g)=>{for(var p in g||(g={}))v.call(g,p)&&O(u,p,g[p]);if(s)for(var p of s(g))C.call(g,p)&&O(u,p,g[p]);return u},W=(u,g)=>{var p={};for(var x in u)v.call(u,x)&&g.indexOf(x)<0&&(p[x]=u[x]);if(u!=null&&s)for(var x of s(u))g.indexOf(x)<0&&C.call(u,x)&&(p[x]=u[x]);return p};const h=o.memo(u=>{var g=u,{icon:p,color:x,text:D,tooltip:w,className:E}=g,i=W(g,["icon","color","text","tooltip","className"]);const d=(0,b.wW)(z,x),c=o.createElement("div",R({className:(0,t.cx)(d.wrapper,E)},i),p&&o.createElement(m.J,{name:p,size:"sm"}),D);return w?o.createElement(I.u,{content:w,placement:"auto"},c):c});h.displayName="Badge";const z=(u,g)=>{let p=u.visualization.getColorByName(g),x="",D="",w="";return u.isDark?(D=(0,_.Z)(p).setAlpha(.15).toString(),x=(0,_.Z)(p).setAlpha(.25).toString(),w=(0,_.Z)(p).lighten(15).toString()):(D=(0,_.Z)(p).setAlpha(.15).toString(),x=(0,_.Z)(p).setAlpha(.25).toString(),w=(0,_.Z)(p).darken(20).toString()),{wrapper:(0,t.iv)({display:"inline-flex",padding:"1px 4px",borderRadius:u.shape.radius.default,background:D,border:`1px solid ${x}`,color:w,fontWeight:u.typography.fontWeightRegular,gap:"2px",fontSize:u.typography.bodySmall.fontSize,lineHeight:u.typography.bodySmall.lineHeight,alignItems:"center"})}};try{h.displayName="Badge",h.__docgenInfo={description:"",displayName:"Badge",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"purple"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"apps"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:h.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch{}},"./src/components/IconButton/IconButton.tsx":function(K,T,l){l.d(T,{h:function(){return w}});var t=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),_=l("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/utils/deprecationWarning.ts"),b=l("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/themes/colorManipulator.ts"),m=l("./src/themes/ThemeContext.tsx"),I=l("./src/themes/stylesFactory.ts"),f=l("./src/themes/mixins.ts"),s=l("./src/components/Icon/Icon.tsx"),v=l("./src/components/Icon/utils.ts"),C=l("./src/components/Tooltip/Tooltip.tsx"),O=Object.defineProperty,R=Object.defineProperties,W=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(i,d,c)=>d in i?O(i,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[d]=c,p=(i,d)=>{for(var c in d||(d={}))z.call(d,c)&&g(i,c,d[c]);if(h)for(var c of h(d))u.call(d,c)&&g(i,c,d[c]);return i},x=(i,d)=>R(i,W(d)),D=(i,d)=>{var c={};for(var N in i)z.call(i,N)&&d.indexOf(N)<0&&(c[N]=i[N]);if(i!=null&&h)for(var N of h(i))d.indexOf(N)<0&&u.call(i,N)&&(c[N]=i[N]);return c};const w=o.forwardRef((i,d)=>{const{size:c="md",variant:N="secondary"}=i,V=(0,m.l4)();let L;c==="xxl"||c==="xxxl"?((0,_.d)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),L="xl"):L=c;const X=E(V,L,N);let q,ne;if("tooltip"in i){const{tooltip:k}=i;q=typeof k=="string"?k:void 0}else if("ariaLabel"in i||"aria-label"in i){const{ariaLabel:k,["aria-label"]:F}=i;q=F||k,ne=d}if("tooltip"in i){const k=i,{name:F,iconType:J,className:Z,tooltip:Q,tooltipPlacement:H}=k,re=D(k,["name","iconType","className","tooltip","tooltipPlacement"]);return o.createElement(C.u,{ref:d,content:Q,placement:H},o.createElement("button",x(p({},re),{ref:ne,"aria-label":q,className:(0,t.cx)(X.button,Z),type:"button"}),o.createElement(s.J,{name:F,size:L,className:X.icon,type:J})))}else{const k=i,{name:F,iconType:J,className:Z}=k,Q=D(k,["name","iconType","className"]);return o.createElement("button",x(p({},Q),{ref:ne,"aria-label":q,className:(0,t.cx)(X.button,Z),type:"button"}),o.createElement(s.J,{name:F,size:L,className:X.icon,type:J}))}});w.displayName="IconButton";const E=(0,I.B)((i,d,c)=>{const N=(0,v.Bm)(d)+i.spacing.gridSize;let V=i.colors.text.primary;return c==="primary"?V=i.colors.primary.text:c==="destructive"&&(V=i.colors.error.text),{button:(0,t.iv)({zIndex:0,position:"relative",margin:`0 ${i.spacing.x0_5} 0 0`,boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:V,"&[disabled], &:disabled":{cursor:"not-allowed",color:i.colors.action.disabledText,opacity:.65},"&:before":{zIndex:-1,position:"absolute",opacity:0,width:`${N}px`,height:`${N}px`,borderRadius:i.shape.radius.default,content:'""',transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"},"&:focus, &:focus-visible":(0,f.SV)(i),"&:focus:not(:focus-visible)":(0,f.Cq)(i),"&:hover":{"&:before":{backgroundColor:c==="secondary"?i.colors.action.hover:b.Fq(V,.12),opacity:1}}}),icon:(0,t.iv)({verticalAlign:"baseline"})}});try{w.displayName="IconButton",w.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"apps"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"document-info"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:w.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch{}},"./src/components/Pagination/Pagination.tsx":function(K,T,l){l.d(T,{t:function(){return I}});var t=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),_=l("./src/themes/ThemeContext.tsx"),b=l("./src/components/Button/Button.tsx"),m=l("./src/components/Icon/Icon.tsx");const I=({currentPage:s,numberOfPages:v,onNavigate:C,hideWhenSinglePage:O,showSmallVersion:R,className:W})=>{const h=(0,_.wW)(f),z=R?1:8,u=(0,o.useMemo)(()=>{const g=[...new Array(v).keys()],p=v>z,x=(D,w)=>o.createElement("li",{key:D,className:h.item},o.createElement(b.zx,{size:"sm",variant:w,onClick:()=>C(D)},D));return g.reduce((D,w)=>{const E=w+1,i=E===s?"primary":"secondary",d=z,c=v-z+1,N=c-d,V=E===1||E===v,L=N>-1&&s>=d&&s<=c,X=R?1:3,q=R?0:2;return p?V||s<d&&E<d||N>=0&&s>c&&E>c||N<0&&s>=d&&E>c||L&&E>=s-q&&E<=s+q?D.push(x(E,i)):(E===d&&s<d||E===c&&s>c||L&&(E===s-X||E===s+X))&&D.push(o.createElement("li",{key:E,className:h.item},o.createElement(m.J,{className:h.ellipsis,name:"ellipsis-v"}))):D.push(x(E,i)),D},[])},[s,v,C,z,R,h.ellipsis,h.item]);return O&&v<=1?null:o.createElement("div",{className:(0,t.cx)(h.container,W)},o.createElement("ol",null,o.createElement("li",{className:h.item},o.createElement(b.zx,{"aria-label":"previous page",size:"sm",variant:"secondary",onClick:()=>C(s-1),disabled:s===1},o.createElement(m.J,{name:"angle-left"}))),u,o.createElement("li",{className:h.item},o.createElement(b.zx,{"aria-label":"next page",size:"sm",variant:"secondary",onClick:()=>C(s+1),disabled:s===v},o.createElement(m.J,{name:"angle-right"})))))},f=()=>({container:(0,t.iv)({float:"right"}),item:(0,t.iv)({display:"inline-block",paddingLeft:"10px",marginBottom:"5px"}),ellipsis:(0,t.iv)({transform:"rotate(90deg)"})});try{I.displayName="Pagination",I.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"The current page index being shown.",name:"currentPage",required:!0,type:{name:"number"}},numberOfPages:{defaultValue:null,description:"Number of total pages.",name:"numberOfPages",required:!0,type:{name:"number"}},onNavigate:{defaultValue:null,description:"Callback function for fetching the selected page.",name:"onNavigate",required:!0,type:{name:"(toPage: number) => void"}},hideWhenSinglePage:{defaultValue:null,description:"When set to true and the pagination result is only one page it will not render the pagination at all.",name:"hideWhenSinglePage",required:!1,type:{name:"boolean"}},showSmallVersion:{defaultValue:null,description:"Small version only shows the current page and the navigation buttons.",name:"showSmallVersion",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:I.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch{}},"./src/themes/stylesFactory.ts":function(K,T,l){l.d(T,{B:function(){return _}});var t=l("../../../yarn/cache/micro-memoize-npm-4.1.2-8063c85cb2-4b02750622.zip/node_modules/micro-memoize/dist/micro-memoize.js"),o=l.n(t);function _(b){return o()(b)}},"./src/components/InteractiveTable/InteractiveTable.story.tsx":function(K,T,l){l.r(T),l.d(T,{Basic:function(){return le},WithControlledSort:function(){return ue},WithCustomCell:function(){return ie},WithHeaderTooltips:function(){return de},WithPagination:function(){return ce},WithRowExpansion:function(){return oe},default:function(){return ca}});var t=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),o=l("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),_=l("../../../yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),b=l("../../.yarn/__virtual__/react-table-virtual-9fc9bcb55f/2/yarn/cache/react-table-npm-7.8.0-61488af438-44ca0fb848.zip/node_modules/react-table/index.js"),m=l("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/data.ts"),I=l("./src/themes/ThemeContext.tsx"),f=l("./src/components/Icon/Icon.tsx"),s=l("./src/components/Pagination/Pagination.tsx"),v=l("./src/components/Tooltip/Tooltip.tsx"),C=l("./src/components/IconButton/IconButton.tsx"),O=Object.defineProperty,R=Object.defineProperties,W=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(a,e,n)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,p=(a,e)=>{for(var n in e||(e={}))z.call(e,n)&&g(a,n,e[n]);if(h)for(var n of h(e))u.call(e,n)&&g(a,n,e[n]);return a},x=(a,e)=>R(a,W(e));const D=(0,o.iv)({display:"flex",alignItems:"center",height:"100%"});function w({row:a,__rowID:e}){return t.createElement("div",{className:D},t.createElement(C.h,x(p({tooltip:"toggle row expanded","aria-controls":e,name:a.isExpanded?"angle-down":"angle-right","aria-expanded":a.isExpanded},a.getToggleRowExpandedProps()),{size:"lg"})))}try{w.displayName="ExpanderCell",w.__docgenInfo={description:"",displayName:"ExpanderCell",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"readonly K[]"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"Partial<TableState<K>>"}},stateReducer:{defaultValue:null,description:"",name:"stateReducer",required:!1,type:{name:"((newState: TableState<K>, action: ActionType, previousState: TableState<K>, instance?: TableInstance<K>) => TableState<...>)"}},useControlledState:{defaultValue:null,description:"",name:"useControlledState",required:!1,type:{name:"((state: TableState<K>, meta: MetaBase<K>) => TableState<K>)"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"Partial<Column<K>>"}},getSubRows:{defaultValue:null,description:"",name:"getSubRows",required:!1,type:{name:"((originalRow: K, relativeIndex: number) => K[])"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"((originalRow: K, relativeIndex: number, parent?: Row<K>) => string)"}},autoResetHiddenColumns:{defaultValue:null,description:"",name:"autoResetHiddenColumns",required:!1,type:{name:"boolean"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnInstance<K>"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Row<K>"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"Cell<K, void>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/ExpanderCell.tsx#ExpanderCell"]={docgenInfo:w.__docgenInfo,name:"ExpanderCell",path:"src/components/InteractiveTable/ExpanderCell.tsx#ExpanderCell"})}catch{}var E=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,N=(a,e,n)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,V=(a,e)=>{for(var n in e||(e={}))d.call(e,n)&&N(a,n,e[n]);if(i)for(var n of i(e))c.call(e,n)&&N(a,n,e[n]);return a};const L="__expander";function X(a){return[{id:L,Cell:w,disableSortBy:!0,width:0},...a.map(e=>V({id:e.id,accessor:e.id,Header:e.header||(()=>null),sortType:e.sortType||"alphanumeric",disableSortBy:!e.sortType,width:e.disableGrow?0:void 0,visible:e.visible},e.cell&&{Cell:e.cell}))]}var q=Object.defineProperty,ne=Object.defineProperties,k=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,Q=(a,e,n)=>e in a?q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,H=(a,e)=>{for(var n in e||(e={}))J.call(e,n)&&Q(a,n,e[n]);if(F)for(var n of F(e))Z.call(e,n)&&Q(a,n,e[n]);return a},re=(a,e)=>ne(a,k(e)),ge=(a,e)=>{var n={};for(var y in a)J.call(a,y)&&e.indexOf(y)<0&&(n[y]=a[y]);if(a!=null&&F)for(var y of F(a))e.indexOf(y)<0&&Z.call(a,y)&&(n[y]=a[y]);return n};const Xe=a=>{const e=a.colors.emphasize(a.colors.background.primary,.03);return{container:(0,o.iv)({display:"flex",gap:a.spacing(2),flexDirection:"column",width:"100%",overflowX:"auto"}),table:(0,o.iv)({borderRadius:a.shape.radius.default,width:"100%",td:{padding:a.spacing(1)},"td, th":{minWidth:a.spacing(3)}}),disableGrow:(0,o.iv)({width:0}),header:(0,o.iv)({borderBottom:`1px solid ${a.colors.border.weak}`,"&, & > button":{position:"relative",whiteSpace:"nowrap",padding:a.spacing(1)},"& > button":{"&:after":{content:'"\\00a0"'},width:"100%",height:"100%",background:"none",border:"none",paddingRight:a.spacing(2.5),textAlign:"left",fontWeight:a.typography.fontWeightMedium}}),row:(0,o.iv)({label:"row",borderBottom:`1px solid ${a.colors.border.weak}`,"&:hover":{backgroundColor:e},"&:last-child":{borderBottom:0}}),expandedRow:(0,o.iv)({label:"expanded-row-content",borderBottom:"none"}),expandedContentRow:(0,o.iv)({label:"expanded-row-content",td:{borderBottom:`1px solid ${a.colors.border.weak}`,position:"relative",padding:a.spacing(2,2,2,5),"&:before":{content:'""',position:"absolute",width:"1px",top:0,left:"16px",bottom:a.spacing(2),background:a.colors.border.medium}}}),sortableHeader:(0,o.iv)({"&&":{padding:0}})}};function A({className:a,columns:e,data:n,getRowId:y,headerTooltips:ae,pageSize:j=0,renderExpandedRow:$,fetchData:Y}){const B=(0,I.wW)(Xe),te=(0,t.useMemo)(()=>X(e),[e]),me=qe(),he=(0,t.useCallback)(P=>`${me}-${P.id}`.replace(/\s/g,""),[me]),Ue=[b.useSortBy,b.useExpanded],pe=j>0;pe&&Ue.push(b.usePagination);const U=(0,b.useTable)({columns:te,data:n,autoResetExpanded:!1,autoResetSortBy:!1,disableMultiSort:!0,manualSortBy:!!Y,getRowId:y,initialState:{hiddenColumns:[!$&&L,...te.filter(P=>!(!P.visible||P.visible(n))).map(P=>P.id).filter(m.fQ)].filter(m.fQ)}},...Ue),{getTableProps:da,getTableBodyProps:ua,headerGroups:ma,prepareRow:pa}=U,{sortBy:Ge}=U.state;return(0,t.useEffect)(()=>{Y&&Y({sortBy:Ge})},[Ge,Y]),(0,t.useEffect)(()=>{pe&&U.setPageSize(j)},[pe,j,U.setPageSize,U]),t.createElement("div",{className:B.container},t.createElement("table",re(H({},da()),{className:(0,o.cx)(B.table,a)}),t.createElement("thead",null,ma.map(P=>{const ve=P.getHeaderGroupProps(),{key:xe}=ve,be=ge(ve,["key"]);return t.createElement("tr",H({key:xe},be),P.headers.map(G=>{const fe=G.getHeaderProps(),{key:ye}=fe,_e=ge(fe,["key"]),Te=ae?.[G.id];return t.createElement("th",H(H({key:ye,className:(0,o.cx)(B.header,{[B.disableGrow]:G.width===0,[B.sortableHeader]:G.canSort})},_e),G.isSorted&&{"aria-sort":G.isSortedDesc?"descending":"ascending"}),t.createElement(Ye,{column:G,headerTooltip:Te}))}))})),t.createElement("tbody",H({},ua()),(pe?U.page:U.rows).map(P=>{pa(P);const ve=P.getRowProps(),{key:xe}=ve,be=ge(ve,["key"]),G=he(P),fe=P.isExpanded;return t.createElement(t.Fragment,{key:xe},t.createElement("tr",re(H({},be),{className:(0,o.cx)(B.row,fe&&B.expandedRow)}),P.cells.map(ye=>{const _e=ye.getCellProps(),{key:Te}=_e,va=ge(_e,["key"]);return t.createElement("td",H({key:Te},va),ye.render("Cell",{__rowID:G}))})),fe&&$&&t.createElement("tr",re(H({},be),{id:G,className:B.expandedContentRow}),t.createElement("td",{colSpan:P.cells.length},$(P.original))))}))),pe&&t.createElement("span",null,t.createElement(s.t,{currentPage:U.state.pageIndex+1,numberOfPages:U.pageOptions.length,onNavigate:P=>U.gotoPage(P-1)})))}const qe=()=>(0,t.useMemo)(()=>(0,_.uniqueId)("InteractiveTable"),[]),$e=a=>({sortIcon:(0,o.iv)({position:"absolute",top:a.spacing(1)}),headerTooltipIcon:(0,o.iv)({marginLeft:a.spacing(.5)})});function Ye({column:{canSort:a,render:e,isSorted:n,isSortedDesc:y,getSortByToggleProps:ae},headerTooltip:j}){const $=(0,I.wW)($e),{onClick:Y}=ae(),B=t.createElement(t.Fragment,null,e("Header"),j&&t.createElement(v.u,{theme:"info-alt",content:j.content,placement:"top-end"},t.createElement(f.J,{className:$.headerTooltipIcon,name:j.iconName||"info-circle","data-testid":"header-tooltip-icon"})),n&&t.createElement("span",{"aria-hidden":"true",className:$.sortIcon},t.createElement(f.J,{name:y?"angle-down":"angle-up"})));return a?t.createElement("button",{type:"button",onClick:Y},B):B}try{A.displayName="InteractiveTable",A.__docgenInfo={description:"",displayName:"InteractiveTable",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"Table's columns definition. Must be memoized.",name:"columns",required:!0,type:{name:"Column<TableData>[]"}},data:{defaultValue:null,description:"The data to display in the table. Must be memoized.",name:"data",required:!0,type:{name:"TableData[]"}},getRowId:{defaultValue:null,description:"Must return a unique id for each row",name:"getRowId",required:!0,type:{name:"((originalRow: TableData, relativeIndex: number, parent?: Row<TableData> | undefined) => string) | undefined"}},headerTooltips:{defaultValue:null,description:"Optional tooltips for the table headers. The key must match the column id.",name:"headerTooltips",required:!1,type:{name:"Record<string, InteractiveTableHeaderTooltip>"}},pageSize:{defaultValue:{value:"0"},description:"Number of rows per page. A value of zero disables pagination. Defaults to 0.",name:"pageSize",required:!1,type:{name:"number"}},renderExpandedRow:{defaultValue:null,description:"Render function for the expanded row. if not provided, the tables rows will not be expandable.",name:"renderExpandedRow",required:!1,type:{name:"((row: TableData) => ReactNode)"}},fetchData:{defaultValue:null,description:`A custom function to fetch data when the table is sorted. If not provided, the table will be sorted client-side.
It's important for this function to have a stable identity, e.g. being wrapped into useCallback to prevent unnecessary
re-renders of the table.`,name:"fetchData",required:!1,type:{name:"FetchDataFunc<TableData>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/InteractiveTable.tsx#InteractiveTable"]={docgenInfo:A.__docgenInfo,name:"InteractiveTable",path:"src/components/InteractiveTable/InteractiveTable.tsx#InteractiveTable"})}catch{}var Je=l("./src/components/Button/Button.tsx"),r=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),we=l("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),ee=l("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs"),Ze=l("./src/components/Badge/Badge.tsx");function Ee(a){const e=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",h4:"h4",code:"code",h5:"h5",pre:"pre",h2:"h2"},(0,we.ah)(),a.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ee.h_,{title:"MDX|InteractiveTable",component:A}),`
`,(0,r.jsx)(e.h1,{id:"interactivetable",children:"InteractiveTable"}),`
`,(0,r.jsx)(Ze.C,{text:"Alpha",icon:"rocket",color:"blue",tooltip:"This component is still experimental."}),`
`,(0,r.jsx)(e.p,{children:`The InteractiveTable is used to display and select data efficiently.
It allows for the display and modification of detailed information.
With additional functionality it allows for batch editing, as needed by your feature's users.`}),`
`,(0,r.jsxs)(e.p,{children:["It is a wrapper around ",(0,r.jsx)(e.a,{href:"https://react-table-v7.tanstack.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Table"}),", for more information, refer to the ",(0,r.jsx)(e.a,{href:"https://react-table.tanstack.com/docs/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"official documentation"}),"."]}),`
`,(0,r.jsx)(e.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,r.jsx)(e.p,{children:"The InteractiveTable can be used to allow users to perform administrative tasks workflows."}),`
`,(0,r.jsx)(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,r.jsx)(e.p,{children:`Avoid using the InteractiveTable where mobile or responsiveness may be a requirement.
Consider an alternative pattern where the user is presented with a summary list and can click/tap to an individual page for each row in that list.`}),`
`,(0,r.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,r.jsx)(ee.Ed,{of:A}),`
`,(0,r.jsxs)(e.h4,{id:"about-columns-and-data-props",children:["About ",(0,r.jsx)(e.code,{children:"columns"})," and ",(0,r.jsx)(e.code,{children:"data"})," Props"]}),`
`,(0,r.jsxs)(e.p,{children:["To avoid unnecessary rerenders, ",(0,r.jsx)(e.code,{children:"columns"})," and ",(0,r.jsx)(e.code,{children:"data"})," must be memoized."]}),`
`,(0,r.jsxs)(e.p,{children:["Columns are rendered in the same order defined in the ",(0,r.jsx)(e.code,{children:"columns"}),` prop.
Each Cell's content is automatically rendered by matching the `,(0,r.jsx)(e.code,{children:"id"})," of the column to the key of each object in the ",(0,r.jsx)(e.code,{children:"data"})," array prop."]}),`
`,(0,r.jsx)(e.h5,{id:"example",children:"Example"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  projectName: string;
  repository: string;
}

const columns = useMemo<Array<Column<TableData>>>(
  () => [
    id: 'projectName'
    header: "Project Name"
  ],
  [
    id: 'repository',
    header: "Repository"
  ],
  []
);

const data = useMemo<Array<TableData>>(
  () => [
    {
      projectName: 'Grafana',
      repository: 'https://github.com/grafana/grafana',
   }
  ],
  [
    {
      projectName: 'Loki';
      repository: 'https://github.com/grafana/loki';
    }
  ],
  []
);
`})}),`
`,(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),`
`,(0,r.jsx)(e.h3,{id:"with-row-expansion",children:"With row expansion"}),`
`,(0,r.jsx)(e.p,{children:`Individual rows can be expanded to display additional details or reconfigure properties previously defined when the row was created.
The expanded row area should be used to unclutter the primary presentation of data, carefully consider what the user needs to know at first glance and what can be hidden behind the Row Expander button.`}),`
`,(0,r.jsx)(e.p,{children:"In general, data-types that are consistent across all dataset are in the primary table, variances are pushed to the expanded section for each individual row."}),`
`,(0,r.jsx)(ee.oG,{id:"experimental-interactivetable--with-row-expansion"}),`
`,(0,r.jsxs)(e.p,{children:["Row expansion is enabled whenever the ",(0,r.jsx)(e.code,{children:"renderExpanded"})," prop is provided. The ",(0,r.jsx)(e.code,{children:"renderExpanded"})," function is called with the row's data and should return a ReactNode."]}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  datasource: string;
  repo: string;
  description: string;
}

const tableData: TableData[] = [
  //...
];

const columns: Array<Column<TableData>> = [
  //...
];

const ExpandedCell = ({ description }: TableData) => {
  return <p>{description}</p>;
};

export const MyComponent = () => {
  return (
    <InteractiveTable
      columns={columns}
      data={tableData}
      getRowId={(r) => r.datasource}
      renderExpandedRow={ExpandedCell}
    />
  );
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"custom-cell-rendering",children:"Custom Cell Rendering"}),`
`,(0,r.jsxs)(e.p,{children:["Individual cells can be rendered using custom content dy defining a ",(0,r.jsx)(e.code,{children:"cell"})," property on the column definition."]}),`
`,(0,r.jsx)(ee.oG,{id:"experimental-interactivetable--with-custom-cell"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  datasource: string;
  repo: string;
}

const RepoCell = ({
  row: {
    original: { repo },
  },
}: CellProps<WithCustomCellData, void>) => {
  return (
    <LinkButton href={repo} size="sm" icon="external-link-alt">
      Open on GitHub
    </LinkButton>
  );
};

const tableData: WithCustomCellData[] = [
  {
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus',
  },
  {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki',
  },
  {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo',
  },
];

const columns: Array<Column<WithCustomCellData>> = [
  { id: 'datasource', header: 'Data Source' },
  { id: 'repo', header: 'Repo', cell: RepoCell },
];

export const MyComponent = () => {
  return <InteractiveTable columns={columns} data={tableData} getRowId={(r) => r.datasource} />;
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"with-pagination",children:"With pagination"}),`
`,(0,r.jsxs)(e.p,{children:["The table can be rendered with pagination controls by passing in the ",(0,r.jsx)(e.code,{children:"pageSize"}),` property. All data must be provided as
only client side pagination is supported.`]}),`
`,(0,r.jsx)(ee.oG,{id:"experimental-interactivetable--with-pagination"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const MyComponent = () => {
  const pageableData: WithPaginationData[] = [
    { id: '48a3926a-e82c-4c26-b959-3a5f473e186e', firstName: 'Brynne', lastName: 'Denisevich', car: 'Cougar', age: 47 },
    {
      id: 'cf281390-adbf-4407-8cf3-a52e012f63e6',
      firstName: 'Aldridge',
      lastName: 'Shirer',
      car: 'Viper RT/10',
      age: 74,
    },
    // ...
    {
      id: 'b9b0b559-acc1-4bd8-b052-160ecf3e4f68',
      firstName: 'Ermanno',
      lastName: 'Sinott',
      car: 'Thunderbird',
      age: 26,
    },
  ];
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name' },
    { id: 'lastName', header: 'Last name' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age', sortType: 'number' },
  ];
  return <InteractiveTable columns={columns} data={pageableData} getRowId={(r) => r.id} pageSize={15} />;
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"with-header-tooltips",children:"With header tooltips"}),`
`,(0,r.jsx)(e.p,{children:"It may be useful to render a tooltip on the header of a column to provide additional information about the data in that column."}),`
`,(0,r.jsx)(ee.oG,{id:"experimental-interactivetable--with-header-tooltips"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const MyComponent = () => {
  const pageableData: WithPaginationData[] = [
    { id: '48a3926a-e82c-4c26-b959-3a5f473e186e', firstName: 'Brynne', lastName: 'Denisevich', car: 'Cougar', age: 47 },
    {
      id: 'cf281390-adbf-4407-8cf3-a52e012f63e6',
      firstName: 'Aldridge',
      lastName: 'Shirer',
      car: 'Viper RT/10',
      age: 74,
    },
    // ...
    {
      id: 'b9b0b559-acc1-4bd8-b052-160ecf3e4f68',
      firstName: 'Ermanno',
      lastName: 'Sinott',
      car: 'Thunderbird',
      age: 26,
    },
  ];
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name' },
    { id: 'lastName', header: 'Last name' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age', sortType: 'number' },
  ];

  const headerToolTips = {
    age: { content: 'The number of years since the person was born' },
    lastName: {
      content: () => {
        return (
          <>
            <h4>Here is an h4</h4>
            <div>Some content</div>
            <div>Some more content</div>
          </>
        );
      },
      iconName: 'plus-square',
    },
  };
  return (
    <InteractiveTable columns={columns} data={pageableData} getRowId={(r) => r.id} headerToolTips={headerToolTips} />
  );
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"with-controlled-sorting",children:"With controlled sorting"}),`
`,(0,r.jsxs)(e.p,{children:["The default sorting can be changed to controlled sorting by passing in the ",(0,r.jsx)(e.code,{children:"fetchData"})," function, which is called whenever the sorting changes and should return the sorted data. This is useful when the sorting is done server side. It is important to memoize the ",(0,r.jsx)(e.code,{children:"fetchData"})," function to prevent unnecessary rerenders and the possibility of an infinite render loop."]}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const WithControlledSort: StoryFn<typeof InteractiveTable> = (args) => {
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name', sortType: 'string' },
    { id: 'lastName', header: 'Last name', sortType: 'string' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age' },
  ];
  const [data, setData] = useState(pageableData);

  // In production the function will most likely make an API call to fetch the sorted data
  const fetchData = useCallback(({ sortBy }: FetchDataArgs<WithPaginationData>) => {
    if (!sortBy?.length) {
      return setData(pageableData);
    }

    setTimeout(() => {
      const newData = [...pageableData];
      newData.sort((a, b) => {
        const sort = sortBy[0];
        const aData = a[sort.id as keyof Omit<WithPaginationData, 'age'>];
        const bData = b[sort.id as keyof Omit<WithPaginationData, 'age'>];
        if (sort.desc) {
          return bData.localeCompare(aData);
        }
        return aData.localeCompare(bData);
      });
      setData(newData);
    }, 300);
  }, []);

  return <InteractiveTable columns={columns} data={data} getRowId={(r) => r.id} pageSize={15} fetchData={fetchData} />;
};
`})})]})}function Qe(a={}){const{wrapper:e}=Object.assign({},(0,we.ah)(),a.components);return e?(0,r.jsx)(e,Object.assign({},a,{children:(0,r.jsx)(Ee,a)})):Ee(a)}var ea=Qe,aa=Object.defineProperty,ta=Object.defineProperties,na=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,ra=Object.prototype.hasOwnProperty,la=Object.prototype.propertyIsEnumerable,Ie=(a,e,n)=>e in a?aa(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,S=(a,e)=>{for(var n in e||(e={}))ra.call(e,n)&&Ie(a,n,e[n]);if(Ne)for(var n of Ne(e))la.call(e,n)&&Ie(a,n,e[n]);return a},M=(a,e)=>ta(a,na(e)),Ce,De,Pe,Oe,Se,Re,je,Be,ke,Ae,Me,We,ze,Le,Ke,Ve,Fe,He;const oa={title:"Experimental/InteractiveTable",component:A,parameters:{docs:{page:ea},controls:{exclude:["className","renderExpandedRow","getRowId","fetchData"]}},args:{},argTypes:{}},le=a=>{const e=(0,t.useMemo)(()=>[{id:"header2",header:"With missing values",sortType:"number",disableGrow:!0},{id:"noheader",sortType:"number"}],[]),n=(0,t.useMemo)(()=>[{header1:"a",header2:1},{header1:"b",noheader:"This column doesn't have an header"},{header1:"c",noheader:"But it's still sortable"}],[]);return t.createElement(A,{columns:e,data:n,getRowId:y=>y.header1})},ia=({description:a})=>t.createElement("p",null,a),oe=a=>{const e=[{datasource:"Prometheus",repo:"https://github.com/prometheus/prometheus",description:"Open source time series database & alerting."},{datasource:"Loki",repo:"https://github.com/grafana/loki",description:"Like Prometheus but for logs. OSS logging solution from Grafana Labs."},{datasource:"Tempo",repo:"https://github.com/grafana/tempo",description:"High volume, minimal dependency trace storage. OSS tracing solution from Grafana Labs."}],n=[{id:"datasource",header:"Data Source"},{id:"repo",header:"Repo"}];return t.createElement(A,{columns:n,data:e,getRowId:y=>y.datasource,renderExpandedRow:ia})},sa=({row:{original:{repo:a}}})=>t.createElement(Je.Qj,{href:a,size:"sm",icon:"external-link-alt"},"Open on GithHub"),ie=a=>{const e=[{datasource:"Prometheus",repo:"https://github.com/prometheus/prometheus"},{datasource:"Loki",repo:"https://github.com/grafana/loki"},{datasource:"Tempo",repo:"https://github.com/grafana/tempo"}],n=[{id:"datasource",header:"Data Source"},{id:"repo",header:"Repo",cell:sa}];return t.createElement(A,{columns:n,data:e,getRowId:y=>y.datasource})},se=[{id:"48a3926a-e82c-4c26-b959-3a5f473e186e",firstName:"Brynne",lastName:"Denisevich",car:"Cougar",age:47},{id:"cf281390-adbf-4407-8cf3-a52e012f63e6",firstName:"Aldridge",lastName:"Shirer",car:"Viper RT/10",age:74},{id:"be5736f5-7015-4668-a03d-44b56f2b012c",firstName:"Sonni",lastName:"Hinrich",car:"Ramcharger",age:75},{id:"fdbe3559-c68a-4f2f-b579-48ef02642628",firstName:"Hanson",lastName:"Giraudeau",car:"X5",age:67},{id:"7d0ee01a-7ac5-4e0a-9c73-e864d10c0152",firstName:"Whitman",lastName:"Seabridge",car:"TSX",age:99},{id:"177c2287-b7cb-4b5f-8976-56ee993bed61",firstName:"Aleda",lastName:"Friman",car:"X5",age:44},{id:"87c21e60-c2f4-4a01-b2af-a6d22c196e25",firstName:"Cullen",lastName:"Kobpac",car:"Montero",age:28},{id:"dd89f32d-2ef4-4c35-8e23-a8b2219e3a69",firstName:"Fitz",lastName:"Butterwick",car:"Fox",age:70},{id:"cc1b4de7-8ec5-49bd-93bc-bee9fa1ccf37",firstName:"Jordon",lastName:"Harrington",car:"Elantra",age:39},{id:"34badca2-895f-4dff-bd34-74c1edd5f309",firstName:"Ad",lastName:"Beare",car:"Freestyle",age:58},{id:"8676e97d-b19f-4a98-bbb4-a48c3673c216",firstName:"Tally",lastName:"Prestie",car:"Montero Sport",age:91},{id:"12ea99c6-ccd9-4313-af92-df9141b3d4bd",firstName:"Wendel",lastName:"Chasles",car:"Corvette",age:89},{id:"a153ad38-d9b7-4437-a8ac-c1198f0060ef",firstName:"Lester",lastName:"Klewer",car:"Xterra",age:21},{id:"ead42cd5-dcd9-4886-879a-fce2eacb4c2b",firstName:"Ferd",lastName:"Pasterfield",car:"Tiburon",age:1},{id:"97410315-a0a5-4488-8c91-ba7ff640dd9b",firstName:"Alphonse",lastName:"Espinola",car:"Laser",age:30},{id:"e4d93eab-ca85-47cc-9867-06aeb29951e3",firstName:"Dorry",lastName:"Attew",car:"Tahoe",age:90},{id:"f0047d6f-f517-4f9d-99c2-ce15dcd6a78a",firstName:"Zed",lastName:"McMinn",car:"745",age:96},{id:"5ac3fac4-7caa-4f8e-8fde-115c4a0eca85",firstName:"Fredericka",lastName:"Hains",car:"A6",age:39},{id:"03ffcc41-4a03-46f5-a161-431d331293dd",firstName:"Syd",lastName:"Brixey",car:"Camry Hybrid",age:70},{id:"7086f360-f19d-4b0c-9bce-48b2784f200a",firstName:"Casey",lastName:"Margerrison",car:"NV3500",age:38},{id:"8375ab44-0c61-4987-8154-02d1b2fd12a7",firstName:"Sallyann",lastName:"Northleigh",car:"Tiburon",age:51},{id:"3af1e7cc-92c9-4356-85eb-bdcecbdffcda",firstName:"Yance",lastName:"Nani",car:"F350",age:21},{id:"46cf82f7-d9be-4a1d-b7cc-fc15133353dc",firstName:"Judas",lastName:"Riach",car:"RSX",age:31},{id:"0d10f9cd-78b9-4584-bc01-a35bcae0a14a",firstName:"Mikkel",lastName:"Dellenbrok",car:"VUE",age:53},{id:"1a78e628-6b8b-4d6a-b391-bbfa650b8024",firstName:"Son",lastName:"Vaudin",car:"Sunbird",age:47},{id:"d1349bf6-6dd1-4aed-9788-84e8b642ad63",firstName:"Emilio",lastName:"Liddington",car:"F250",age:2},{id:"14a3a8e8-15d7-469e-87c6-85181e22b3b8",firstName:"Devin",lastName:"Meadley",car:"XT",age:61},{id:"47cccba7-9f9b-44f5-985c-c2e226b2c9e4",firstName:"Harriott",lastName:"Seres",car:"LeSabre",age:11},{id:"e668a9b1-1dcd-4b5d-9d4e-479dc08695d6",firstName:"Elvin",lastName:"Diable",car:"90",age:69},{id:"addf8ee9-934c-4e81-83e8-20f50bbff028",firstName:"Rey",lastName:"Scotford",car:"H1",age:71},{id:"f22dbd3f-8419-4a1c-b542-23c3842cb59b",firstName:"King",lastName:"Catonne",car:"Suburban 2500",age:91},{id:"c85b7547-3654-41f0-94d6-becc832b81fa",firstName:"Barbabas",lastName:"Romeril",car:"Sorento",age:5},{id:"8d83b0eb-635d-452e-9f85-f19216207ad1",firstName:"Hadley",lastName:"Bartoletti",car:"Seville",age:37},{id:"9bdb532a-c747-4288-b2e9-e3f2dc7e0a15",firstName:"Willie",lastName:"Dunkerley",car:"Envoy",age:34},{id:"6b4413dd-1f77-4504-86ee-1ea5b90c6279",firstName:"Annamarie",lastName:"Burras",car:"Elantra",age:12},{id:"f17a5f2a-92a9-48a9-a05c-a3c44c66adb7",firstName:"Rebecca",lastName:"Thomason",car:"Elantra",age:6},{id:"85f7d4d2-3ae6-42ab-88dd-d4e810ebb76c",firstName:"Tatum",lastName:"Monte",car:"Achieva",age:53},{id:"3d374982-6cd9-4e6e-abf1-7de38eee4b68",firstName:"Tallie",lastName:"Goodlet",car:"Integra",age:81},{id:"ccded1ef-f648-4970-ae6e-882ba4d789fb",firstName:"Catrina",lastName:"Thunderman",car:"RX",age:91},{id:"3198513a-b05f-4d0d-8187-214f82f88531",firstName:"Aldric",lastName:"Awton",car:"Swift",age:78},{id:"35c3d0ce-52ea-4f30-8c17-b1e6b9878aa3",firstName:"Garry",lastName:"Ineson",car:"Discovery",age:25},{id:"c5ae799a-983f-4933-8a4d-cda754acedc0",firstName:"Alica",lastName:"Rubinfeld",car:"FX",age:20},{id:"cd9e5476-1ebb-46f0-926e-cee522e8d332",firstName:"Wenonah",lastName:"Blakey",car:"Cooper",age:96},{id:"17449829-4a8f-433c-8cb0-a869f153ea34",firstName:"Bevon",lastName:"Cushe",car:"GTI",age:23},{id:"d20d41a3-d9fe-492d-91df-51a962c515b9",firstName:"Marybeth",lastName:"Gauson",car:"MR2",age:53},{id:"cd046551-5df7-44b5-88b3-d1654a838214",firstName:"Kimball",lastName:"Bellhanger",car:"Ram 1500",age:56},{id:"a8114bdf-911d-410f-b90b-4c8a9c302743",firstName:"Cindelyn",lastName:"Beamont",car:"Monte Carlo",age:99},{id:"e31709ba-bf65-42d1-8c5c-60d461bc3e75",firstName:"Elfreda",lastName:"Riddles",car:"Montero",age:59},{id:"cd67179c-0c49-486d-baa9-8e956b362c2e",firstName:"Chickie",lastName:"Picheford",car:"Legend",age:56},{id:"b9b0b559-acc1-4bd8-b052-160ecf3e4f68",firstName:"Ermanno",lastName:"Sinott",car:"Thunderbird",age:26}],ce=a=>{const e=[{id:"firstName",header:"First name"},{id:"lastName",header:"Last name"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age",sortType:"number"}];return t.createElement(A,{columns:e,data:se,getRowId:n=>n.id,pageSize:15})},de=a=>{const e=[{id:"firstName",header:"First name"},{id:"lastName",header:"Last name"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age",sortType:"number"}],n={age:{content:"The number of years since the person was born"},lastName:{content:()=>t.createElement(t.Fragment,null,t.createElement("h4",null,"Here is an h4"),t.createElement("div",null,"Some content"),t.createElement("div",null,"Some more content")),iconName:"plus-square"}};return t.createElement(A,{columns:e,data:se.slice(0,10),getRowId:y=>y.id,headerTooltips:n})},ue=a=>{const e=[{id:"firstName",header:"First name",sortType:"string"},{id:"lastName",header:"Last name",sortType:"string"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age"}],[n,y]=(0,t.useState)(se),ae=(0,t.useCallback)(({sortBy:j})=>{if(!j?.length)return y(se);setTimeout(()=>{const $=[...se];$.sort((Y,B)=>{const te=j[0],me=Y[te.id],he=B[te.id];return te.desc?he.localeCompare(me):me.localeCompare(he)}),y($)},300)},[]);return t.createElement(A,{columns:e,data:n,getRowId:j=>j.id,pageSize:15,fetchData:ae})};var ca=oa;le.parameters=M(S({},le.parameters),{docs:M(S({},(Ce=le.parameters)==null?void 0:Ce.docs),{source:S({originalSource:`args => {
  const columns = useMemo<Array<Column<TableData>>>(() => [{
    id: 'header2',
    header: 'With missing values',
    sortType: 'number',
    disableGrow: true
  }, {
    id: 'noheader',
    sortType: 'number'
  }], []);
  const data: TableData[] = useMemo(() => [{
    header1: 'a',
    header2: 1
  }, {
    header1: 'b',
    noheader: "This column doesn't have an header"
  }, {
    header1: 'c',
    noheader: "But it's still sortable"
  }], []);
  return <InteractiveTable columns={columns} data={data} getRowId={r => r.header1} />;
}`},(Pe=(De=le.parameters)==null?void 0:De.docs)==null?void 0:Pe.source)})}),oe.parameters=M(S({},oe.parameters),{docs:M(S({},(Oe=oe.parameters)==null?void 0:Oe.docs),{source:S({originalSource:`args => {
  const tableData: WithRowExpansionData[] = [{
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus',
    description: 'Open source time series database & alerting.'
  }, {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki',
    description: 'Like Prometheus but for logs. OSS logging solution from Grafana Labs.'
  }, {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo',
    description: 'High volume, minimal dependency trace storage. OSS tracing solution from Grafana Labs.'
  }];
  const columns: Array<Column<WithRowExpansionData>> = [{
    id: 'datasource',
    header: 'Data Source'
  }, {
    id: 'repo',
    header: 'Repo'
  }];
  return <InteractiveTable columns={columns} data={tableData} getRowId={r => r.datasource} renderExpandedRow={ExpandedCell} />;
}`},(Re=(Se=oe.parameters)==null?void 0:Se.docs)==null?void 0:Re.source)})}),ie.parameters=M(S({},ie.parameters),{docs:M(S({},(je=ie.parameters)==null?void 0:je.docs),{source:S({originalSource:`args => {
  const tableData: WithCustomCellData[] = [{
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus'
  }, {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki'
  }, {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo'
  }];
  const columns: Array<Column<WithCustomCellData>> = [{
    id: 'datasource',
    header: 'Data Source'
  }, {
    id: 'repo',
    header: 'Repo',
    cell: RepoCell
  }];
  return <InteractiveTable columns={columns} data={tableData} getRowId={r => r.datasource} />;
}`},(ke=(Be=ie.parameters)==null?void 0:Be.docs)==null?void 0:ke.source)})}),ce.parameters=M(S({},ce.parameters),{docs:M(S({},(Ae=ce.parameters)==null?void 0:Ae.docs),{source:S({originalSource:`args => {
  const columns: Array<Column<WithPaginationData>> = [{
    id: 'firstName',
    header: 'First name'
  }, {
    id: 'lastName',
    header: 'Last name'
  }, {
    id: 'car',
    header: 'Car',
    sortType: 'string'
  }, {
    id: 'age',
    header: 'Age',
    sortType: 'number'
  }];
  return <InteractiveTable columns={columns} data={pageableData} getRowId={r => r.id} pageSize={15} />;
}`},(We=(Me=ce.parameters)==null?void 0:Me.docs)==null?void 0:We.source)})}),de.parameters=M(S({},de.parameters),{docs:M(S({},(ze=de.parameters)==null?void 0:ze.docs),{source:S({originalSource:`args => {
  const columns: Array<Column<WithPaginationData>> = [{
    id: 'firstName',
    header: 'First name'
  }, {
    id: 'lastName',
    header: 'Last name'
  }, {
    id: 'car',
    header: 'Car',
    sortType: 'string'
  }, {
    id: 'age',
    header: 'Age',
    sortType: 'number'
  }];
  const headerTooltips: Record<string, InteractiveTableHeaderTooltip> = {
    age: {
      content: 'The number of years since the person was born'
    },
    lastName: {
      content: () => {
        return <>
            <h4>Here is an h4</h4>
            <div>Some content</div>
            <div>Some more content</div>
          </>;
      },
      iconName: 'plus-square'
    }
  };
  return <InteractiveTable columns={columns} data={pageableData.slice(0, 10)} getRowId={r => r.id} headerTooltips={headerTooltips} />;
}`},(Ke=(Le=de.parameters)==null?void 0:Le.docs)==null?void 0:Ke.source)})}),ue.parameters=M(S({},ue.parameters),{docs:M(S({},(Ve=ue.parameters)==null?void 0:Ve.docs),{source:S({originalSource:`args => {
  const columns: Array<Column<WithPaginationData>> = [{
    id: 'firstName',
    header: 'First name',
    sortType: 'string'
  }, {
    id: 'lastName',
    header: 'Last name',
    sortType: 'string'
  }, {
    id: 'car',
    header: 'Car',
    sortType: 'string'
  }, {
    id: 'age',
    header: 'Age'
  }];
  const [data, setData] = useState(pageableData);
  const fetchData = useCallback(({
    sortBy
  }: FetchDataArgs<WithPaginationData>) => {
    if (!sortBy?.length) {
      return setData(pageableData);
    }
    setTimeout(() => {
      const newData = [...pageableData];
      newData.sort((a, b) => {
        const sort = sortBy[0];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const aData = a[(sort.id as keyof Omit<WithPaginationData, 'age'>)];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const bData = b[(sort.id as keyof Omit<WithPaginationData, 'age'>)];
        if (sort.desc) {
          return bData.localeCompare(aData);
        }
        return aData.localeCompare(bData);
      });
      setData(newData);
    }, 300);
  }, []);
  return <InteractiveTable columns={columns} data={data} getRowId={r => r.id} pageSize={15} fetchData={fetchData} />;
}`},(He=(Fe=ue.parameters)==null?void 0:Fe.docs)==null?void 0:He.source)})})},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(K,T,l){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),o=Symbol.for("react.element"),_=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,m=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function f(s,v,C){var O,R={},W=null,h=null;C!==void 0&&(W=""+C),v.key!==void 0&&(W=""+v.key),v.ref!==void 0&&(h=v.ref);for(O in v)b.call(v,O)&&!I.hasOwnProperty(O)&&(R[O]=v[O]);if(s&&s.defaultProps)for(O in v=s.defaultProps,v)R[O]===void 0&&(R[O]=v[O]);return{$$typeof:o,type:s,key:W,ref:h,props:R,_owner:m.current}}T.Fragment=_,T.jsx=f,T.jsxs=f},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(K,T,l){K.exports=l("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
