try{
var ft=Object.create;var V=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var gt=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty;var W=(e,t)=>()=>(e&&(t=e(e=0)),t);var Et=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Te=(e,t)=>{for(var n in t)V(e,n,{get:t[n],enumerable:!0})},ve=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of pt(t))!ht.call(e,i)&&i!==n&&V(e,i,{get:()=>t[i],enumerable:!(r=mt(t,i))||r.enumerable});return e};var Rt=(e,t,n)=>(n=e!=null?ft(gt(e)):{},ve(t||!e||!e.__esModule?V(n,"default",{value:e,enumerable:!0}):n,e)),Se=e=>ve(V({},"__esModule",{value:!0}),e);var h=W(()=>{});var E=W(()=>{});var R=W(()=>{});var oe={};Te(oe,{Children:()=>St,Component:()=>Ot,Fragment:()=>z,Profiler:()=>xt,PureComponent:()=>Ct,StrictMode:()=>At,Suspense:()=>It,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>kt,cloneElement:()=>Dt,createContext:()=>ae,createElement:()=>g,createFactory:()=>wt,createRef:()=>Nt,default:()=>a,forwardRef:()=>Ht,isValidElement:()=>Lt,lazy:()=>Pt,memo:()=>Mt,useCallback:()=>w,useContext:()=>ie,useDebugValue:()=>Bt,useEffect:()=>K,useImperativeHandle:()=>Gt,useLayoutEffect:()=>$t,useMemo:()=>F,useReducer:()=>jt,useRef:()=>Wt,useState:()=>H,version:()=>zt});var a,St,Ot,z,xt,Ct,At,It,kt,Dt,ae,g,wt,Nt,Ht,Lt,Pt,Mt,w,ie,Bt,K,Gt,$t,F,jt,Wt,H,zt,q=W(()=>{h();E();R();a=__REACT__,{Children:St,Component:Ot,Fragment:z,Profiler:xt,PureComponent:Ct,StrictMode:At,Suspense:It,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:kt,cloneElement:Dt,createContext:ae,createElement:g,createFactory:wt,createRef:Nt,forwardRef:Ht,isValidElement:Lt,lazy:Pt,memo:Mt,useCallback:w,useContext:ie,useDebugValue:Bt,useEffect:K,useImperativeHandle:Gt,useLayoutEffect:$t,useMemo:F,useReducer:jt,useRef:Wt,useState:H,version:zt}=__REACT__});var Pe={};Te(Pe,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Ut,createPortal:()=>Yt,default:()=>Ft,findDOMNode:()=>Vt,flushSync:()=>Kt,hydrate:()=>qt,render:()=>Xt,unmountComponentAtNode:()=>Qt,unstable_batchedUpdates:()=>Jt,unstable_createPortal:()=>Zt,unstable_renderSubtreeIntoContainer:()=>er,version:()=>tr});var Ft,Ut,Yt,Vt,Kt,qt,Xt,Qt,Jt,Zt,er,tr,Me=W(()=>{h();E();R();Ft=__REACTDOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ut,createPortal:Yt,findDOMNode:Vt,flushSync:Kt,hydrate:qt,render:Xt,unmountComponentAtNode:Qt,unstable_batchedUpdates:Jt,unstable_createPortal:Zt,unstable_renderSubtreeIntoContainer:er,version:tr}=__REACTDOM__});var et=Et(Y=>{"use strict";h();E();R();Object.defineProperty(Y,"__esModule",{value:!0});var S=(q(),Se(oe)),rr=(Me(),Se(Pe));function nr(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var te=nr(S),me=function(e,t){return me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},me(e,t)};function Ue(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");me(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var B=function(){return B=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},B.apply(this,arguments)};function Ye(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var ee=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function ar(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ge=ar,ir=typeof ee=="object"&&ee&&ee.Object===Object&&ee,or=ir,lr=or,cr=typeof self=="object"&&self&&self.Object===Object&&self,sr=lr||cr||Function("return this")(),Ve=sr,ur=Ve,dr=function(){return ur.Date.now()},fr=dr,mr=/\s/;function pr(e){for(var t=e.length;t--&&mr.test(e.charAt(t)););return t}var gr=pr,hr=gr,Er=/^\s+/;function Rr(e){return e&&e.slice(0,hr(e)+1).replace(Er,"")}var yr=Rr,br=Ve,_r=br.Symbol,Ke=_r,Be=Ke,qe=Object.prototype,Tr=qe.hasOwnProperty,vr=qe.toString,U=Be?Be.toStringTag:void 0;function Sr(e){var t=Tr.call(e,U),n=e[U];try{e[U]=void 0;var r=!0}catch{}var i=vr.call(e);return r&&(t?e[U]=n:delete e[U]),i}var Or=Sr,xr=Object.prototype,Cr=xr.toString;function Ar(e){return Cr.call(e)}var Ir=Ar,Ge=Ke,kr=Or,Dr=Ir,wr="[object Null]",Nr="[object Undefined]",$e=Ge?Ge.toStringTag:void 0;function Hr(e){return e==null?e===void 0?Nr:wr:$e&&$e in Object(e)?kr(e):Dr(e)}var Lr=Hr;function Pr(e){return e!=null&&typeof e=="object"}var Mr=Pr,Br=Lr,Gr=Mr,$r="[object Symbol]";function jr(e){return typeof e=="symbol"||Gr(e)&&Br(e)==$r}var Wr=jr,zr=yr,je=ge,Fr=Wr,We=0/0,Ur=/^[-+]0x[0-9a-f]+$/i,Yr=/^0b[01]+$/i,Vr=/^0o[0-7]+$/i,Kr=parseInt;function qr(e){if(typeof e=="number")return e;if(Fr(e))return We;if(je(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=je(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=zr(e);var n=Yr.test(e);return n||Vr.test(e)?Kr(e.slice(2),n?2:8):Ur.test(e)?We:+e}var Xr=qr,Qr=ge,fe=fr,ze=Xr,Jr="Expected a function",Zr=Math.max,en=Math.min;function tn(e,t,n){var r,i,o,c,l,d,m=0,f=!1,p=!1,s=!0;if(typeof e!="function")throw new TypeError(Jr);t=ze(t)||0,Qr(n)&&(f=!!n.leading,p="maxWait"in n,o=p?Zr(ze(n.maxWait)||0,t):o,s="trailing"in n?!!n.trailing:s);function T(y){var C=r,A=i;return r=i=void 0,m=y,c=e.apply(A,C),c}function v(y){return m=y,l=setTimeout(_,t),f?T(y):c}function O(y){var C=y-d,A=y-m,j=t-C;return p?en(j,o-A):j}function b(y){var C=y-d,A=y-m;return d===void 0||C>=t||C<0||p&&A>=o}function _(){var y=fe();if(b(y))return x(y);l=setTimeout(_,O(y))}function x(y){return l=void 0,s&&r?T(y):(r=i=void 0,c)}function G(){l!==void 0&&clearTimeout(l),m=0,r=d=i=l=void 0}function $(){return l===void 0?c:x(fe())}function P(){var y=fe(),C=b(y);if(r=arguments,i=this,d=y,C){if(l===void 0)return v(d);if(p)return clearTimeout(l),l=setTimeout(_,t),T(d)}return l===void 0&&(l=setTimeout(_,t)),c}return P.cancel=G,P.flush=$,P}var Xe=tn,rn=Xe,nn=ge,an="Expected a function";function on(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(an);return nn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),rn(e,t,{leading:r,maxWait:t,trailing:i})}var ln=on,Qe=function(e,t,n,r){switch(t){case"debounce":return Xe(e,n,r);case"throttle":return ln(e,n,r);default:return e}},pe=function(e){return typeof e=="function"},L=function(){return typeof window>"u"},Fe=function(e){return e instanceof Element||e instanceof HTMLDocument},Je=function(e,t,n,r){return function(i){var o=i.width,c=i.height;t(function(l){return l.width===o&&l.height===c||l.width===o&&!r||l.height===c&&!n?l:(e&&pe(e)&&e(o,c),{width:o,height:c})})}},Ze=function(e){Ue(t,e);function t(n){var r=e.call(this,n)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var m=r.props,f=m.targetRef,p=m.observerOptions;if(!L()){f&&f.current&&(r.targetRef.current=f.current);var s=r.getElement();s&&(r.observableElement&&r.observableElement===s||(r.observableElement=s,r.resizeObserver.observe(s,p)))}},r.getElement=function(){var m=r.props,f=m.querySelector,p=m.targetDomEl;if(L())return null;if(f)return document.querySelector(f);if(p&&Fe(p))return p;if(r.targetRef&&Fe(r.targetRef.current))return r.targetRef.current;var s=rr.findDOMNode(r);if(!s)return null;var T=r.getRenderType();switch(T){case"renderProp":return s;case"childFunction":return s;case"child":return s;case"childArray":return s;default:return s.parentElement}},r.createResizeHandler=function(m){var f=r.props,p=f.handleWidth,s=p===void 0?!0:p,T=f.handleHeight,v=T===void 0?!0:T,O=f.onResize;if(!(!s&&!v)){var b=Je(O,r.setState.bind(r),s,v);m.forEach(function(_){var x=_&&_.contentRect||{},G=x.width,$=x.height,P=!r.skipOnMount&&!L();P&&b({width:G,height:$}),r.skipOnMount=!1})}},r.getRenderType=function(){var m=r.props,f=m.render,p=m.children;return pe(f)?"renderProp":pe(p)?"childFunction":S.isValidElement(p)?"child":Array.isArray(p)?"childArray":"parent"};var i=n.skipOnMount,o=n.refreshMode,c=n.refreshRate,l=c===void 0?1e3:c,d=n.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=i,r.targetRef=S.createRef(),r.observableElement=null,L()||(r.resizeHandler=Qe(r.createResizeHandler,o,l,d),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}return t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){L()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var n=this.props,r=n.render,i=n.children,o=n.nodeType,c=o===void 0?"div":o,l=this.state,d=l.width,m=l.height,f={width:d,height:m,targetRef:this.targetRef},p=this.getRenderType(),s;switch(p){case"renderProp":return r&&r(f);case"childFunction":return s=i,s(f);case"child":if(s=i,s.type&&typeof s.type=="string"){f.targetRef;var T=Ye(f,["targetRef"]);return S.cloneElement(s,T)}return S.cloneElement(s,f);case"childArray":return s=i,s.map(function(v){return!!v&&S.cloneElement(v,f)});default:return te.createElement(c,null)}},t}(S.PureComponent);function cn(e,t){t===void 0&&(t={});var n=function(o){Ue(c,o);function c(){var l=o!==null&&o.apply(this,arguments)||this;return l.ref=S.createRef(),l}return c.prototype.render=function(){var l=this.props,d=l.forwardedRef,m=Ye(l,["forwardedRef"]),f=d??this.ref;return te.createElement(Ze,B({},t,{targetRef:f}),te.createElement(e,B({targetRef:f},m)))},c}(S.Component);function r(o,c){return te.createElement(n,B({},o,{forwardedRef:c}))}var i=e.displayName||e.name;return r.displayName="withResizeDetector(".concat(i,")"),S.forwardRef(r)}var sn=L()?S.useEffect:S.useLayoutEffect;function un(e){e===void 0&&(e={});var t=e.skipOnMount,n=t===void 0?!1:t,r=e.refreshMode,i=e.refreshRate,o=i===void 0?1e3:i,c=e.refreshOptions,l=e.handleWidth,d=l===void 0?!0:l,m=e.handleHeight,f=m===void 0?!0:m,p=e.targetRef,s=e.observerOptions,T=e.onResize,v=S.useRef(n),O=S.useRef(null),b=p??O,_=S.useRef(),x=S.useState({width:void 0,height:void 0}),G=x[0],$=x[1];return sn(function(){if(!L()){var P=Je(T,$,d,f),y=function(A){!d&&!f||A.forEach(function(j){var _e=j&&j.contentRect||{},st=_e.width,ut=_e.height,dt=!v.current&&!L();dt&&P({width:st,height:ut}),v.current=!1})};_.current=Qe(y,r,o,c);var C=new window.ResizeObserver(_.current);return b.current&&C.observe(b.current,s),function(){C.disconnect();var A=_.current;A&&A.cancel&&A.cancel()}}},[r,o,c,d,f,T,s,b.current]),B({ref:b},G)}Y.default=Ze;Y.useResizeDetector=un;Y.withResizeDetector=cn});h();E();R();h();E();R();h();E();R();var N="storybook/a11y",ne=`${N}/panel`,Oe="a11y",yt=`${N}/result`,bt=`${N}/request`,_t=`${N}/running`,Tt=`${N}/error`,vt=`${N}/manual`,M={RESULT:yt,REQUEST:bt,RUNNING:_t,ERROR:Tt,MANUAL:vt};q();q();h();E();R();var Sa=__STORYBOOKAPI__,{ActiveTabs:Oa,Consumer:xa,ManagerContext:Ca,Provider:Aa,addons:X,combineParameters:Ia,controlOrMetaKey:ka,controlOrMetaSymbol:Da,eventMatchesShortcut:wa,eventToShortcut:Na,isMacLike:Ha,isShortcutTaken:La,keyToSymbol:Pa,merge:Ma,mockChannel:Ba,optionOrAltSymbol:Ga,shortcutMatchesShortcut:$a,shortcutToHumanString:ja,types:le,useAddonState:ce,useArgTypes:Wa,useArgs:za,useChannel:se,useGlobalTypes:Fa,useGlobals:Ua,useParameter:xe,useSharedState:Ya,useStoryPrepared:Va,useStorybookApi:Ce,useStorybookState:Ae}=__STORYBOOKAPI__;h();E();R();var Ja=__STORYBOOKCOMPONENTS__,{A:Za,ActionBar:ue,AddonPanel:ei,Badge:de,Bar:ti,Blockquote:ri,Button:ni,ClipboardCode:ai,Code:ii,DL:oi,Div:li,DocumentWrapper:ci,ErrorFormatter:si,FlexBar:ui,Form:di,H1:fi,H2:mi,H3:pi,H4:gi,H5:hi,H6:Ei,HR:Ri,IconButton:Ie,IconButtonSkeleton:yi,Icons:Q,Img:bi,LI:_i,Link:Ti,ListItem:vi,Loader:Si,OL:Oi,P:xi,Placeholder:ke,Pre:Ci,ResetWrapper:Ai,ScrollArea:De,Separator:Ii,Spaced:we,Span:ki,StorybookIcon:Di,StorybookLogo:wi,Symbols:Ni,SyntaxHighlighter:Hi,TT:Li,TabBar:Pi,TabButton:Mi,TabWrapper:Bi,Table:Gi,Tabs:$i,TabsState:ji,TooltipLinkList:Ne,TooltipMessage:Wi,TooltipNote:zi,UL:Fi,WithTooltip:He,WithTooltipPure:Ui,Zoom:Yi,codeCommon:Vi,components:Ki,createCopyToClipboardFunction:qi,getStoryHref:Xi,icons:Qi,interleaveSeparators:Ji,nameSpaceClassNames:Zi,resetComponents:eo,withReset:to}=__STORYBOOKCOMPONENTS__;h();E();R();var oo=__STORYBOOKTHEMING__,{CacheProvider:lo,ClassNames:co,Global:Le,ThemeProvider:so,background:uo,color:fo,convert:J,create:mo,createCache:po,createGlobal:go,createReset:ho,css:Eo,darken:Ro,ensure:yo,ignoreSsrWarning:bo,isPropValid:_o,jsx:To,keyframes:vo,lighten:So,styled:u,themes:Z,typography:Oo,useTheme:xo,withTheme:Co}=__STORYBOOKTHEMING__;var Re=Rt(et(),1);h();E();R();var Go=__STORYBOOKCOREEVENTS__,{CHANNEL_CREATED:$o,CONFIG_ERROR:jo,CURRENT_STORY_WAS_SET:Wo,DOCS_PREPARED:zo,DOCS_RENDERED:Fo,FORCE_REMOUNT:Uo,FORCE_RE_RENDER:Yo,GLOBALS_UPDATED:Vo,IGNORED_EXCEPTION:Ko,NAVIGATE_URL:qo,PLAY_FUNCTION_THREW_EXCEPTION:Xo,PRELOAD_ENTRIES:Qo,PREVIEW_BUILDER_PROGRESS:Jo,PREVIEW_KEYDOWN:Zo,REGISTER_SUBSCRIPTION:el,REQUEST_WHATS_NEW_DATA:tl,RESET_STORY_ARGS:rl,RESULT_WHATS_NEW_DATA:nl,SELECT_STORY:al,SET_CONFIG:il,SET_CURRENT_STORY:ol,SET_GLOBALS:ll,SET_INDEX:cl,SET_STORIES:sl,SET_WHATS_NEW_CACHE:ul,SHARED_STATE_CHANGED:dl,SHARED_STATE_SET:fl,STORIES_COLLAPSE_ALL:ml,STORIES_EXPAND_ALL:pl,STORY_ARGS_UPDATED:gl,STORY_CHANGED:tt,STORY_ERRORED:hl,STORY_INDEX_INVALIDATED:El,STORY_MISSING:Rl,STORY_PREPARED:yl,STORY_RENDERED:rt,STORY_RENDER_PHASE_CHANGED:bl,STORY_SPECIFIED:_l,STORY_THREW_EXCEPTION:Tl,STORY_UNCHANGED:vl,TELEMETRY_ERROR:Sl,TOGGLE_WHATS_NEW_NOTIFICATIONS:Ol,UPDATE_GLOBALS:xl,UPDATE_QUERY_PARAMS:Cl,UPDATE_STORY_ARGS:Al}=__STORYBOOKCOREEVENTS__;h();E();R();h();E();R();var nt="storybook/highlight";var he=`${nt}/add`,dn=`${nt}/reset`;var fn=e=>g("svg",{...e},g("defs",null,g("filter",{id:"protanopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"protanomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"deuteranopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"deuteranomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"tritanopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"})),g("filter",{id:"tritanomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"achromatopsia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"})))),mn="storybook-preview-iframe",pn=[{name:"blurred vision",percentage:22.9},{name:"deuteranomaly",percentage:2.7},{name:"deuteranopia",percentage:.56},{name:"protanomaly",percentage:.66},{name:"protanopia",percentage:.59},{name:"tritanomaly",percentage:.01},{name:"tritanopia",percentage:.016},{name:"achromatopsia",percentage:1e-4},{name:"grayscale"}],ot=e=>e?e==="blurred vision"?"blur(2px)":e==="grayscale"?"grayscale(100%)":`url('#${e}')`:"none",gn=u.div(()=>({"&, & svg":{position:"absolute",width:0,height:0}})),hn=u.span({background:"linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",borderRadius:"1rem",display:"block",height:"1rem",width:"1rem"},({filter:e})=>({filter:ot(e)}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),En=u.span({display:"flex",flexDirection:"column"}),Rn=u.span({textTransform:"capitalize"}),yn=u.span(({theme:e})=>({fontSize:11,color:e.textMutedColor})),bn=(e,t)=>[...e!==null?[{id:"reset",title:"Reset color filter",onClick:()=>{t(null)},right:void 0,active:!1}]:[],...pn.map(n=>{let r=n.percentage!==void 0?`${n.percentage}% of users`:void 0;return{id:n.name,title:a.createElement(En,null,a.createElement(Rn,null,n.name),r&&a.createElement(yn,null,r)),onClick:()=>{t(n)},right:a.createElement(hn,{filter:n.name}),active:e===n}})],_n=()=>{let[e,t]=H(null);return a.createElement(a.Fragment,null,e&&a.createElement(Le,{styles:{[`#${mn}`]:{filter:ot(e.name)}}}),a.createElement(He,{placement:"top",tooltip:({onHide:n})=>{let r=bn(e,i=>{t(i),n()});return a.createElement(Ne,{links:r})},closeOnOutsideClick:!0,onDoubleClick:()=>t(null)},a.createElement(Ie,{key:"filter",active:!!e,title:"Vision simulator"},a.createElement(Q,{icon:"accessibility"}))),a.createElement(gn,null,a.createElement(fn,null)))},Tn=u.div({padding:12,marginBottom:10}),vn=u.p({margin:"0 0 12px"}),Sn=u.a({marginTop:12,textDecoration:"underline",color:"inherit",display:"block"}),On=({item:e})=>a.createElement(Tn,null,a.createElement(vn,null,e.description),a.createElement(Sn,{href:e.helpUrl,target:"_blank"},"More info...")),xn=u.div({display:"flex",flexDirection:"column",paddingBottom:4,paddingRight:4,paddingTop:4,fontWeight:400}),Cn=u.div(({elementWidth:e})=>({flexDirection:e>407?"row":"inherit",marginBottom:e>407?6:12,display:e>407?"flex":"block"})),An=u(de)({padding:"2px 8px",marginBottom:3,minWidth:65,maxWidth:"fit-content",width:"100%",textAlign:"center"}),In=u.div({paddingLeft:6,paddingRight:23}),kn=e=>e.charAt(0).toUpperCase().concat(e.slice(1)),Dn=({rule:e})=>{let{ref:t,width:n}=(0,Re.useResizeDetector)({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),r=null;switch(e.impact){case"critical":r="critical";break;case"serious":r="negative";break;case"moderate":r="warning";break;case"minor":r="neutral";break}return a.createElement(Cn,{ref:t,elementWidth:n||0},a.createElement(An,{status:r},kn(e.impact)),a.createElement(In,null,e.message))},wn=({rules:e})=>a.createElement(xn,null,e.map((t,n)=>a.createElement(Dn,{rule:t,key:n}))),Nn=[J(Z.light).color.negative,J(Z.light).color.positive,J(Z.light).color.warning],lt=ae({results:{passes:[],incomplete:[],violations:[]},setResults:()=>{},highlighted:[],toggleHighlight:()=>{},clearHighlights:()=>{},tab:0,setTab:()=>{}}),at={passes:[],incomplete:[],violations:[]},Hn=({active:e,...t})=>{let[n,r]=ce(N,at),[i,o]=H(0),[c,l]=H([]),d=Ce().getCurrentStoryData(),m=w((O,b)=>{l(_=>b?[..._,...O]:_.filter(x=>!O.includes(x)))},[]),f=O=>{v(M.REQUEST,O)},p=w(()=>l([]),[]),s=w(O=>{p(),o(O)},[]),T=w(()=>{o(0),r(at)},[]),v=se({[rt]:f,[tt]:T});return K(()=>{v(he,{elements:c,color:Nn[i]})},[c,i]),K(()=>{e&&d?.type==="story"?f(d.id):p()},[e,p,v,d]),e?g(lt.Provider,{value:{results:n,setResults:r,highlighted:c,toggleHighlight:m,clearHighlights:p,tab:i,setTab:s},...t}):null},ye=()=>ie(lt),Ln=u.input(({disabled:e})=>({cursor:e?"not-allowed":"pointer"}));function it(e,t){let n=e.filter(r=>t.includes(r.target[0])).length;return n===0?1:n===e.length?0:2}var Pn=({toggleId:e,elementsToHighlight:t=[]})=>{let{toggleHighlight:n,highlighted:r}=ye(),i=a.useRef(null),[o,c]=a.useState(it(t,r));a.useEffect(()=>{let d=it(t,r);i.current&&(i.current.indeterminate=d===2),c(d)},[t,r]);let l=a.useCallback(()=>{n(t.map(d=>d.target[0]),o!==0)},[t,o,n]);return a.createElement(Ln,{ref:i,id:e,type:"checkbox","aria-label":"Highlight result",disabled:!t.length,onChange:l,checked:o===0})},be=Pn,Mn=u.li({fontWeight:600}),Bn=u.span(({theme:e})=>({borderBottom:`1px solid ${e.appBorderColor}`,width:"100%",display:"flex",paddingBottom:6,marginBottom:6,justifyContent:"space-between"})),Gn=u.span({fontWeight:"normal",alignSelf:"center",paddingRight:15,input:{margin:0,display:"block"}}),$n=({element:e,type:t})=>{let{any:n,all:r,none:i}=e,o=[...n,...r,...i],c=`${t}-${e.target[0]}`;return a.createElement(Mn,null,a.createElement(Bn,null,e.target[0],a.createElement(Gn,null,a.createElement(be,{toggleId:c,elementsToHighlight:[e]}))),a.createElement(wn,{rules:o}))},jn=({elements:e,type:t})=>a.createElement("ol",null,e.map((n,r)=>a.createElement($n,{element:n,key:r,type:t}))),Wn=u.div({display:"flex",flexWrap:"wrap",margin:"12px 0"}),zn=u.div(({theme:e})=>({margin:"0 6px",padding:5,border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius})),Fn=({tags:e})=>a.createElement(Wn,null,e.map(t=>a.createElement(zn,{key:t},t))),Un=u.div(({theme:e})=>({display:"flex",width:"100%",borderBottom:`1px solid ${e.appBorderColor}`,"&:hover":{background:e.background.hoverable}})),Yn=u(Q)(({theme:e})=>({height:10,width:10,minWidth:10,color:e.textMutedColor,marginRight:10,transition:"transform 0.1s ease-in-out",alignSelf:"center",display:"inline-flex"})),Vn=u.div(({theme:e})=>({padding:e.layoutMargin,paddingLeft:e.layoutMargin-3,lineHeight:"20px",background:"none",color:"inherit",textAlign:"left",cursor:"pointer",borderLeft:"3px solid transparent",width:"100%","&:focus":{outline:"0 none",borderLeft:`3px solid ${e.color.secondary}`}})),Kn=u.span({fontWeight:"normal",float:"right",marginRight:15,alignSelf:"center",input:{margin:0,display:"block"}}),qn=e=>{let[t,n]=H(!1),{item:r,type:i}=e,o=`${i}-${r.id}`;return a.createElement(z,null,a.createElement(Un,null,a.createElement(Vn,{onClick:()=>n(!t),role:"button"},a.createElement(Yn,{icon:"arrowdown",color:"#9DA5AB",style:{transform:`rotate(${t?0:-90}deg)`}}),r.help),a.createElement(Kn,null,a.createElement(be,{toggleId:o,elementsToHighlight:r.nodes}))),t?a.createElement(z,null,a.createElement(On,{item:r,key:"info"}),a.createElement(jn,{elements:r.nodes,type:i,key:"elements"}),a.createElement(Fn,{tags:r.tags,key:"tags"})):null)},Ee=({items:e,empty:t,type:n})=>a.createElement(z,null,e&&e.length?e.map(r=>a.createElement(qn,{item:r,key:`${n}:${r.id}`,type:n})):a.createElement(ke,{key:"placeholder"},t)),Xn=u.div({width:"100%",position:"relative",minHeight:"100%"}),Qn=u.label(({theme:e})=>({cursor:"pointer",userSelect:"none",color:e.color.dark})),Jn=u.div(({elementWidth:e,theme:t})=>({cursor:"pointer",fontSize:13,lineHeight:"20px",padding:e>450?"10px 15px 10px 0":"10px 0px 10px 15px",height:"40px",border:"none",marginTop:e>450?-40:0,float:e>450?"right":"left",display:"flex",alignItems:"center",width:e>450?"auto":"100%",borderBottom:e>450?"none":`1px solid ${t.appBorderColor}`,input:{marginLeft:10,marginRight:0,marginTop:-1,marginBottom:0}})),Zn=u.button(({theme:e})=>({textDecoration:"none",padding:"10px 15px",cursor:"pointer",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:1,height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent","&:focus":{outline:"0 none",borderBottom:`3px solid ${e.color.secondary}`}}),({active:e,theme:t})=>e?{opacity:1,borderBottom:`3px solid ${t.color.secondary}`}:{}),ea=u.div({}),ta=u.div(({theme:e})=>({boxShadow:`${e.appBorderColor} 0 -1px 0 0 inset`,background:e.background.app,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap"}));function ra(e){return e.reduce((t,n)=>t.concat(n.nodes),[])}var na=({tabs:e})=>{let{ref:t,width:n}=(0,Re.useResizeDetector)({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),{tab:r,setTab:i}=ye(),o=w(d=>{i(parseInt(d.currentTarget.getAttribute("data-index")||"",10))},[i]),c=`${e[r].type}-global-checkbox`,l="Highlight results";return g(Xn,{ref:t},g(ta,null,g(ea,null,e.map((d,m)=>g(Zn,{key:m,"data-index":m,active:r===m,onClick:o},d.label)))),e[r].items.length>0?g(Jn,{elementWidth:n||0},g(Qn,{htmlFor:c},l),g(be,{toggleId:c,elementsToHighlight:ra(e[r].items)})):null,e[r].panel)},ct=u(Q)({height:12,width:12,marginRight:4}),aa=u(ct)(({theme:e})=>({animation:`${e.animation.rotate360} 1s linear infinite;`})),ia=u.span(({theme:e})=>({color:e.color.positiveText})),oa=u.span(({theme:e})=>({color:e.color.negativeText})),la=u.span(({theme:e})=>({color:e.color.warningText})),re=u.span({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}),ca=()=>{let{manual:e}=xe("a11y",{manual:!1}),[t,n]=H(e?"manual":"initial"),[r,i]=a.useState(void 0),{setResults:o,results:c}=ye(),{storyId:l}=Ae();a.useEffect(()=>{n(e?"manual":"initial")},[e]);let d=b=>{n("ran"),o(b),setTimeout(()=>{t==="ran"&&n("ready")},900)},m=w(()=>{n("running")},[]),f=w(b=>{n("error"),i(b)},[]),p=se({[M.RUNNING]:m,[M.RESULT]:d,[M.ERROR]:f}),s=w(()=>{n("running"),p(M.MANUAL,l)},[l]),T=F(()=>[{title:"Run test",onClick:s}],[s]),v=F(()=>[{title:t==="ready"?"Rerun tests":a.createElement(a.Fragment,null,a.createElement(ct,{icon:"check"})," Tests completed"),onClick:s}],[t,s]),O=F(()=>{let{passes:b,incomplete:_,violations:x}=c;return[{label:a.createElement(oa,null,x.length," Violations"),panel:a.createElement(Ee,{items:x,type:0,empty:"No accessibility violations found."}),items:x,type:0},{label:a.createElement(ia,null,b.length," Passes"),panel:a.createElement(Ee,{items:b,type:1,empty:"No accessibility checks passed."}),items:b,type:1},{label:a.createElement(la,null,_.length," Incomplete"),panel:a.createElement(Ee,{items:_,type:2,empty:"No accessibility checks incomplete."}),items:_,type:2}]},[c]);return a.createElement(a.Fragment,null,t==="initial"&&a.createElement(re,null,"Initializing..."),t==="manual"&&a.createElement(a.Fragment,null,a.createElement(re,null,"Manually run the accessibility scan."),a.createElement(ue,{key:"actionbar",actionItems:T})),t==="running"&&a.createElement(re,null,a.createElement(aa,{icon:"sync"})," Please wait while the accessibility scan is running ..."),(t==="ready"||t==="ran")&&a.createElement(a.Fragment,null,a.createElement(De,{vertical:!0,horizontal:!0},a.createElement(na,{key:"tabs",tabs:O})),a.createElement(ue,{key:"actionbar",actionItems:v})),t==="error"&&a.createElement(re,null,"The accessibility scan encountered an error.",a.createElement("br",null),typeof r=="string"?r:JSON.stringify(r)))},sa=()=>{let[e]=ce(N),t=e?.violations?.length||0,n=e?.incomplete?.length||0,r=t+n;return a.createElement("div",null,a.createElement(we,{col:1},a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Accessibility"),r===0?"":a.createElement(de,{status:"neutral"},r)))};X.register(N,e=>{X.add(ne,{title:"",type:le.TOOL,match:({viewMode:t})=>t==="story",render:()=>a.createElement(_n,null)}),X.add(ne,{title:sa,type:le.PANEL,render:({active:t=!0})=>a.createElement(Hn,{active:t},a.createElement(ca,null)),paramKey:Oe})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }