(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2285],{"../../.yarn/__virtual__/react-popper-tooltip-virtual-09b5eebcd2/2/yarn/cache/react-popper-tooltip-npm-4.4.2-54ed1200c6-516988b925.zip/node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js":function(Pe,ue,T){"use strict";T.d(ue,{O:function(){return ae}});var Y=T("../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),W=T("../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/extends.js"),v=T("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),m=T("../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/usePopper.js");function p(B){var F=v.useRef(B);return F.current=B,v.useCallback(function(){return F.current},[])}var A=function(){};function d(B){var F=B.initial,fe=B.value,V=B.onChange,N=V===void 0?A:V;if(F===void 0&&fe===void 0)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var w=v.useState(F),q=w[0],me=w[1],he=p(q),b=v.useCallback(function(re){var k=he(),z=typeof re=="function"?re(k):re;typeof z.persist=="function"&&z.persist(),me(z),typeof N=="function"&&N(z)},[he,N]),de=fe!==void 0;return[de?fe:q,de?N:b]}function x(B,F){return B===void 0&&(B=0),F===void 0&&(F=0),function(){return{width:0,height:0,top:F,right:B,bottom:F,left:B,x:0,y:0,toJSON:function(){return null}}}}var _=["styles","attributes"],Q={getBoundingClientRect:x()},ee={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function ae(B,F){var fe,V,N;B===void 0&&(B={}),F===void 0&&(F={});var w=Object.keys(ee).reduce(function(L,D){var te;return(0,W.Z)({},L,(te={},te[D]=L[D]!==void 0?L[D]:ee[D],te))},B),q=v.useMemo(function(){return[{name:"offset",options:{offset:w.offset}}]},Array.isArray(w.offset)?w.offset:[]),me=(0,W.Z)({},F,{placement:F.placement||w.placement,modifiers:F.modifiers||q}),he=v.useState(null),b=he[0],de=he[1],re=v.useState(null),k=re[0],z=re[1],$e=d({initial:w.defaultVisible,value:w.visible,onChange:w.onVisibleChange}),Le=$e[0],Ae=$e[1],ce=v.useRef();v.useEffect(function(){return function(){return clearTimeout(ce.current)}},[]);var u=(0,m.D)(w.followCursor?Q:b,k,me),ke=u.styles,Me=u.attributes,je=(0,Y.Z)(u,_),ge=je.update,ve=p({visible:Le,triggerRef:b,tooltipRef:k,finalConfig:w}),G=v.useCallback(function(L){return Array.isArray(w.trigger)?w.trigger.includes(L):w.trigger===L},Array.isArray(w.trigger)?w.trigger:[w.trigger]),X=v.useCallback(function(){clearTimeout(ce.current),ce.current=window.setTimeout(function(){return Ae(!1)},w.delayHide)},[w.delayHide,Ae]),ie=v.useCallback(function(){clearTimeout(ce.current),ce.current=window.setTimeout(function(){return Ae(!0)},w.delayShow)},[w.delayShow,Ae]),ne=v.useCallback(function(){ve().visible?X():ie()},[ve,X,ie]);v.useEffect(function(){if(ve().finalConfig.closeOnOutsideClick){var L=function(te){var Ce,We=ve(),Fe=We.tooltipRef,ze=We.triggerRef,Re=(te.composedPath==null||(Ce=te.composedPath())==null?void 0:Ce[0])||te.target;Re instanceof Node&&Fe!=null&&ze!=null&&!Fe.contains(Re)&&!ze.contains(Re)&&X()};return document.addEventListener("mousedown",L),function(){return document.removeEventListener("mousedown",L)}}},[ve,X]),v.useEffect(function(){if(!(b==null||!G("click")))return b.addEventListener("click",ne),function(){return b.removeEventListener("click",ne)}},[b,G,ne]),v.useEffect(function(){if(!(b==null||!G("double-click")))return b.addEventListener("dblclick",ne),function(){return b.removeEventListener("dblclick",ne)}},[b,G,ne]),v.useEffect(function(){if(!(b==null||!G("right-click"))){var L=function(te){te.preventDefault(),ne()};return b.addEventListener("contextmenu",L),function(){return b.removeEventListener("contextmenu",L)}}},[b,G,ne]),v.useEffect(function(){if(!(b==null||!G("focus")))return b.addEventListener("focus",ie),b.addEventListener("blur",X),function(){b.removeEventListener("focus",ie),b.removeEventListener("blur",X)}},[b,G,ie,X]),v.useEffect(function(){if(!(b==null||!G("hover")))return b.addEventListener("mouseenter",ie),b.addEventListener("mouseleave",X),function(){b.removeEventListener("mouseenter",ie),b.removeEventListener("mouseleave",X)}},[b,G,ie,X]),v.useEffect(function(){if(!(k==null||!G("hover")||!ve().finalConfig.interactive))return k.addEventListener("mouseenter",ie),k.addEventListener("mouseleave",X),function(){k.removeEventListener("mouseenter",ie),k.removeEventListener("mouseleave",X)}},[k,G,ie,X,ve]);var Ie=je==null||(fe=je.state)==null||(V=fe.modifiersData)==null||(N=V.hide)==null?void 0:N.isReferenceHidden;v.useEffect(function(){w.closeOnTriggerHidden&&Ie&&X()},[w.closeOnTriggerHidden,X,Ie]),v.useEffect(function(){if(!w.followCursor||b==null)return;function L(D){var te=D.clientX,Ce=D.clientY;Q.getBoundingClientRect=x(te,Ce),ge?.()}return b.addEventListener("mousemove",L),function(){return b.removeEventListener("mousemove",L)}},[w.followCursor,b,ge]),v.useEffect(function(){if(!(k==null||ge==null||w.mutationObserverOptions==null)){var L=new MutationObserver(ge);return L.observe(k,w.mutationObserverOptions),function(){return L.disconnect()}}},[w.mutationObserverOptions,k,ge]);var qe=function(D){return D===void 0&&(D={}),(0,W.Z)({},D,{style:(0,W.Z)({},D.style,ke.popper)},Me.popper,{"data-popper-interactive":w.interactive})},se=function(D){return D===void 0&&(D={}),(0,W.Z)({},D,Me.arrow,{style:(0,W.Z)({},D.style,ke.arrow),"data-popper-arrow":!0})};return(0,W.Z)({getArrowProps:se,getTooltipProps:qe,setTooltipRef:z,setTriggerRef:de,tooltipRef:k,triggerRef:b,visible:Le},je)}},"../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/usePopper.js":function(Pe,ue,T){"use strict";T.d(ue,{D:function(){return Jt}});var Y=T("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),W=T("../../.yarn/__virtual__/react-dom-virtual-5dcbe0c0ba/2/yarn/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/index.js");function v(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function m(e){var t=v(e).Element;return e instanceof t||e instanceof Element}function p(e){var t=v(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function A(e){if(typeof ShadowRoot>"u")return!1;var t=v(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var d=Math.max,x=Math.min,_=Math.round;function Q(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ee(){return!/^((?!chrome|android).)*safari/i.test(Q())}function ae(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&p(e)&&(o=e.offsetWidth>0&&_(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&_(n.height)/e.offsetHeight||1);var c=m(e)?v(e):window,i=c.visualViewport,s=!ee()&&r,l=(n.left+(s&&i?i.offsetLeft:0))/o,f=(n.top+(s&&i?i.offsetTop:0))/a,g=n.width/o,E=n.height/a;return{width:g,height:E,top:f,right:l+g,bottom:f+E,left:l,x:l,y:f}}function B(e){var t=v(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function F(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function fe(e){return e===v(e)||!p(e)?B(e):F(e)}function V(e){return e?(e.nodeName||"").toLowerCase():null}function N(e){return((m(e)?e.ownerDocument:e.document)||window.document).documentElement}function w(e){return ae(N(e)).left+B(e).scrollLeft}function q(e){return v(e).getComputedStyle(e)}function me(e){var t=q(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function he(e){var t=e.getBoundingClientRect(),r=_(t.width)/e.offsetWidth||1,n=_(t.height)/e.offsetHeight||1;return r!==1||n!==1}function b(e,t,r){r===void 0&&(r=!1);var n=p(t),o=p(t)&&he(t),a=N(t),c=ae(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||me(a))&&(i=fe(t)),p(t)?(s=ae(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=w(a))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function de(e){var t=ae(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function re(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(A(e)?e.host:null)||N(e)}function k(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:p(e)&&me(e)?e:k(re(e))}function z(e,t){var r;t===void 0&&(t=[]);var n=k(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=v(n),c=o?[a].concat(a.visualViewport||[],me(n)?n:[]):n,i=t.concat(c);return o?i:i.concat(z(re(c)))}function $e(e){return["table","td","th"].indexOf(V(e))>=0}function Le(e){return!p(e)||q(e).position==="fixed"?null:e.offsetParent}function Ae(e){var t=/firefox/i.test(Q()),r=/Trident/i.test(Q());if(r&&p(e)){var n=q(e);if(n.position==="fixed")return null}var o=re(e);for(A(o)&&(o=o.host);p(o)&&["html","body"].indexOf(V(o))<0;){var a=q(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ce(e){for(var t=v(e),r=Le(e);r&&$e(r)&&q(r).position==="static";)r=Le(r);return r&&(V(r)==="html"||V(r)==="body"&&q(r).position==="static")?t:r||Ae(e)||t}var u=T("../../../yarn/cache/@popperjs-core-npm-2.11.8-f1692e11a0-e5c69fdebf.zip/node_modules/@popperjs/core/lib/enums.js");function ke(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Me(e){var t=ke(e);return u.xs.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function je(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function ge(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ve={placement:"bottom",modifiers:[],strategy:"absolute"};function G(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function X(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?ve:o;return function(i,s,l){l===void 0&&(l=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ve,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},g=[],E=!1,h={state:f,setOptions:function(S){var M=typeof S=="function"?S(f.options):S;P(),f.options=Object.assign({},a,f.options,M),f.scrollParents={reference:m(i)?z(i):i.contextElement?z(i.contextElement):[],popper:z(s)};var I=Me(ge([].concat(n,f.options.modifiers)));return f.orderedModifiers=I.filter(function(O){return O.enabled}),j(),h.update()},forceUpdate:function(){if(!E){var S=f.elements,M=S.reference,I=S.popper;if(G(M,I)){f.rects={reference:b(M,ce(I),f.options.strategy==="fixed"),popper:de(I)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(H){return f.modifiersData[H.name]=Object.assign({},H.data)});for(var O=0;O<f.orderedModifiers.length;O++){if(f.reset===!0){f.reset=!1,O=-1;continue}var C=f.orderedModifiers[O],R=C.fn,$=C.options,Z=$===void 0?{}:$,U=C.name;typeof R=="function"&&(f=R({state:f,options:Z,name:U,instance:h})||f)}}}},update:je(function(){return new Promise(function(y){h.forceUpdate(),y(f)})}),destroy:function(){P(),E=!0}};if(!G(i,s))return h;h.setOptions(l).then(function(y){!E&&l.onFirstUpdate&&l.onFirstUpdate(y)});function j(){f.orderedModifiers.forEach(function(y){var S=y.name,M=y.options,I=M===void 0?{}:M,O=y.effect;if(typeof O=="function"){var C=O({state:f,name:S,instance:h,options:I}),R=function(){};g.push(C||R)}})}function P(){g.forEach(function(y){return y()}),g=[]}return h}}var ie=null,ne={passive:!0};function Ie(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,i=c===void 0?!0:c,s=v(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",r.update,ne)}),i&&s.addEventListener("resize",r.update,ne),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",r.update,ne)}),i&&s.removeEventListener("resize",r.update,ne)}}var qe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ie,data:{}};function se(e){return e.split("-")[0]}function L(e){return e.split("-")[1]}function D(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e){var t=e.reference,r=e.element,n=e.placement,o=n?se(n):null,a=n?L(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case u.we:s={x:c,y:t.y-r.height};break;case u.I:s={x:c,y:t.y+t.height};break;case u.F2:s={x:t.x+t.width,y:i};break;case u.t$:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var l=o?D(o):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case u.BL:s[l]=s[l]-(t[f]/2-r[f]/2);break;case u.ut:s[l]=s[l]+(t[f]/2-r[f]/2);break;default:}}return s}function Ce(e){var t=e.state,r=e.name;t.modifiersData[r]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var We={name:"popperOffsets",enabled:!0,phase:"read",fn:Ce,data:{}},Fe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ze(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:_(r*o)/o||0,y:_(n*o)/o||0}}function Re(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,g=e.isFixed,E=c.x,h=E===void 0?0:E,j=c.y,P=j===void 0?0:j,y=typeof f=="function"?f({x:h,y:P}):{x:h,y:P};h=y.x,P=y.y;var S=c.hasOwnProperty("x"),M=c.hasOwnProperty("y"),I=u.t$,O=u.we,C=window;if(l){var R=ce(r),$="clientHeight",Z="clientWidth";if(R===v(r)&&(R=N(r),q(R).position!=="static"&&i==="absolute"&&($="scrollHeight",Z="scrollWidth")),R=R,o===u.we||(o===u.t$||o===u.F2)&&a===u.ut){O=u.I;var U=g&&R===C&&C.visualViewport?C.visualViewport.height:R[$];P-=U-n.height,P*=s?1:-1}if(o===u.t$||(o===u.we||o===u.I)&&a===u.ut){I=u.F2;var H=g&&R===C&&C.visualViewport?C.visualViewport.width:R[Z];h-=H-n.width,h*=s?1:-1}}var K=Object.assign({position:i},l&&Fe),le=f===!0?ze({x:h,y:P},v(r)):{x:h,y:P};if(h=le.x,P=le.y,s){var J;return Object.assign({},K,(J={},J[O]=M?"0":"",J[I]=S?"0":"",J.transform=(C.devicePixelRatio||1)<=1?"translate("+h+"px, "+P+"px)":"translate3d("+h+"px, "+P+"px, 0)",J))}return Object.assign({},K,(t={},t[O]=M?P+"px":"",t[I]=S?h+"px":"",t.transform="",t))}function yt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,l={placement:se(t.placement),variation:L(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Re(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Re(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var bt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:yt,data:{}};function wt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!p(a)||!V(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var i=o[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function Ot(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,l){return s[l]="",s},{});!p(o)||!V(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}var xt={name:"applyStyles",enabled:!0,phase:"write",fn:wt,effect:Ot,requires:["computeStyles"]};function Et(e,t,r){var n=se(e),o=[u.t$,u.we].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*o,[u.t$,u.F2].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Pt(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=u.Ct.reduce(function(f,g){return f[g]=Et(g,t.rects,a),f},{}),i=c[t.placement],s=i.x,l=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=c}var At={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Pt},jt={left:"right",right:"left",bottom:"top",top:"bottom"};function He(e){return e.replace(/left|right|bottom|top/g,function(t){return jt[t]})}var Ct={start:"end",end:"start"};function tt(e){return e.replace(/start|end/g,function(t){return Ct[t]})}function Rt(e,t){var r=v(e),n=N(e),o=r.visualViewport,a=n.clientWidth,c=n.clientHeight,i=0,s=0;if(o){a=o.width,c=o.height;var l=ee();(l||!l&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:c,x:i+w(e),y:s}}function _t(e){var t,r=N(e),n=B(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=d(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=d(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+w(e),s=-n.scrollTop;return q(o||r).direction==="rtl"&&(i+=d(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:i,y:s}}function rt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&A(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Lt(e,t){var r=ae(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function nt(e,t,r){return t===u.Pj?Ke(Rt(e,r)):m(t)?Lt(t,r):Ke(_t(N(e)))}function St(e){var t=z(re(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,n=r&&p(e)?ce(e):e;return m(n)?t.filter(function(o){return m(o)&&rt(o,n)&&V(o)!=="body"}):[]}function Dt(e,t,r,n){var o=t==="clippingParents"?St(e):[].concat(t),a=[].concat(o,[r]),c=a[0],i=a.reduce(function(s,l){var f=nt(e,l,n);return s.top=d(f.top,s.top),s.right=x(f.right,s.right),s.bottom=x(f.bottom,s.bottom),s.left=d(f.left,s.left),s},nt(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ot(){return{top:0,right:0,bottom:0,left:0}}function at(e){return Object.assign({},ot(),e)}function it(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function Se(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,c=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?u.zV:i,l=r.rootBoundary,f=l===void 0?u.Pj:l,g=r.elementContext,E=g===void 0?u.k5:g,h=r.altBoundary,j=h===void 0?!1:h,P=r.padding,y=P===void 0?0:P,S=at(typeof y!="number"?y:it(y,u.mv)),M=E===u.k5?u.YP:u.k5,I=e.rects.popper,O=e.elements[j?M:E],C=Dt(m(O)?O:O.contextElement||N(e.elements.popper),s,f,c),R=ae(e.elements.reference),$=te({reference:R,element:I,strategy:"absolute",placement:o}),Z=Ke(Object.assign({},I,$)),U=E===u.k5?Z:R,H={top:C.top-U.top+S.top,bottom:U.bottom-C.bottom+S.bottom,left:C.left-U.left+S.left,right:U.right-C.right+S.right},K=e.modifiersData.offset;if(E===u.k5&&K){var le=K[o];Object.keys(H).forEach(function(J){var be=[u.F2,u.I].indexOf(J)>=0?1:-1,we=[u.we,u.I].indexOf(J)>=0?"y":"x";H[J]+=le[we]*be})}return H}function Tt(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,l=s===void 0?u.Ct:s,f=L(n),g=f?i?u.bw:u.bw.filter(function(j){return L(j)===f}):u.mv,E=g.filter(function(j){return l.indexOf(j)>=0});E.length===0&&(E=g);var h=E.reduce(function(j,P){return j[P]=Se(e,{placement:P,boundary:o,rootBoundary:a,padding:c})[se(P)],j},{});return Object.keys(h).sort(function(j,P){return h[j]-h[P]})}function Bt(e){if(se(e)===u.d7)return[];var t=He(e);return[tt(e),t,tt(t)]}function $t(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,l=r.padding,f=r.boundary,g=r.rootBoundary,E=r.altBoundary,h=r.flipVariations,j=h===void 0?!0:h,P=r.allowedAutoPlacements,y=t.options.placement,S=se(y),M=S===y,I=s||(M||!j?[He(y)]:Bt(y)),O=[y].concat(I).reduce(function(_e,ye){return _e.concat(se(ye)===u.d7?Tt(t,{placement:ye,boundary:f,rootBoundary:g,padding:l,flipVariations:j,allowedAutoPlacements:P}):ye)},[]),C=t.rects.reference,R=t.rects.popper,$=new Map,Z=!0,U=O[0],H=0;H<O.length;H++){var K=O[H],le=se(K),J=L(K)===u.BL,be=[u.we,u.I].indexOf(le)>=0,we=be?"width":"height",oe=Se(t,{placement:K,boundary:f,rootBoundary:g,altBoundary:E,padding:l}),pe=be?J?u.F2:u.t$:J?u.I:u.we;C[we]>R[we]&&(pe=He(pe));var Ne=He(pe),Oe=[];if(a&&Oe.push(oe[le]<=0),i&&Oe.push(oe[pe]<=0,oe[Ne]<=0),Oe.every(function(_e){return _e})){U=K,Z=!1;break}$.set(K,Oe)}if(Z)for(var Ue=j?3:1,Ge=function(ye){var Be=O.find(function(Xe){var xe=$.get(Xe);if(xe)return xe.slice(0,ye).every(function(Je){return Je})});if(Be)return U=Be,"break"},Te=Ue;Te>0;Te--){var Ye=Ge(Te);if(Ye==="break")break}t.placement!==U&&(t.modifiersData[n]._skip=!0,t.placement=U,t.reset=!0)}}var kt={name:"flip",enabled:!0,phase:"main",fn:$t,requiresIfExists:["offset"],data:{_skip:!1}};function Mt(e){return e==="x"?"y":"x"}function De(e,t,r){return d(e,x(t,r))}function It(e,t,r){var n=De(e,t,r);return n>r?r:n}function Wt(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,l=r.rootBoundary,f=r.altBoundary,g=r.padding,E=r.tether,h=E===void 0?!0:E,j=r.tetherOffset,P=j===void 0?0:j,y=Se(t,{boundary:s,rootBoundary:l,padding:g,altBoundary:f}),S=se(t.placement),M=L(t.placement),I=!M,O=D(S),C=Mt(O),R=t.modifiersData.popperOffsets,$=t.rects.reference,Z=t.rects.popper,U=typeof P=="function"?P(Object.assign({},t.rects,{placement:t.placement})):P,H=typeof U=="number"?{mainAxis:U,altAxis:U}:Object.assign({mainAxis:0,altAxis:0},U),K=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,le={x:0,y:0};if(R){if(a){var J,be=O==="y"?u.we:u.t$,we=O==="y"?u.I:u.F2,oe=O==="y"?"height":"width",pe=R[O],Ne=pe+y[be],Oe=pe-y[we],Ue=h?-Z[oe]/2:0,Ge=M===u.BL?$[oe]:Z[oe],Te=M===u.BL?-Z[oe]:-$[oe],Ye=t.elements.arrow,_e=h&&Ye?de(Ye):{width:0,height:0},ye=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ot(),Be=ye[be],Xe=ye[we],xe=De(0,$[oe],_e[oe]),Je=I?$[oe]/2-Ue-xe-Be-H.mainAxis:Ge-xe-Be-H.mainAxis,Qt=I?-$[oe]/2+Ue+xe+Xe+H.mainAxis:Te+xe+Xe+H.mainAxis,Qe=t.elements.arrow&&ce(t.elements.arrow),er=Qe?O==="y"?Qe.clientTop||0:Qe.clientLeft||0:0,ft=(J=K?.[O])!=null?J:0,tr=pe+Je-ft-er,rr=pe+Qt-ft,ct=De(h?x(Ne,tr):Ne,pe,h?d(Oe,rr):Oe);R[O]=ct,le[O]=ct-pe}if(i){var lt,nr=O==="x"?u.we:u.t$,or=O==="x"?u.I:u.F2,Ee=R[C],Ze=C==="y"?"height":"width",pt=Ee+y[nr],dt=Ee-y[or],et=[u.we,u.t$].indexOf(S)!==-1,vt=(lt=K?.[C])!=null?lt:0,mt=et?pt:Ee-$[Ze]-Z[Ze]-vt+H.altAxis,ht=et?Ee+$[Ze]+Z[Ze]-vt-H.altAxis:dt,gt=h&&et?It(mt,Ee,ht):De(h?mt:pt,Ee,h?ht:dt);R[C]=gt,le[C]=gt-Ee}t.modifiersData[n]=le}}var Ft={name:"preventOverflow",enabled:!0,phase:"main",fn:Wt,requiresIfExists:["offset"]},zt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,at(typeof t!="number"?t:it(t,u.mv))};function Ht(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,i=se(r.placement),s=D(i),l=[u.t$,u.F2].indexOf(i)>=0,f=l?"height":"width";if(!(!a||!c)){var g=zt(o.padding,r),E=de(a),h=s==="y"?u.we:u.t$,j=s==="y"?u.I:u.F2,P=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],y=c[s]-r.rects.reference[s],S=ce(a),M=S?s==="y"?S.clientHeight||0:S.clientWidth||0:0,I=P/2-y/2,O=g[h],C=M-E[f]-g[j],R=M/2-E[f]/2+I,$=De(O,R,C),Z=s;r.modifiersData[n]=(t={},t[Z]=$,t.centerOffset=$-R,t)}}function Vt(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||rt(t.elements.popper,o)&&(t.elements.arrow=o))}var Nt={name:"arrow",enabled:!0,phase:"main",fn:Ht,effect:Vt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function st(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ut(e){return[u.we,u.F2,u.I,u.t$].some(function(t){return e[t]>=0})}function Ut(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,c=Se(t,{elementContext:"reference"}),i=Se(t,{altBoundary:!0}),s=st(c,n),l=st(i,o,a),f=ut(s),g=ut(l);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":g})}var Yt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ut},Xt=[qe,We,bt,xt,At,kt,Ft,Nt,Yt],Zt=X({defaultModifiers:Xt}),qt=T("../../../yarn/cache/react-fast-compare-npm-3.2.0-fbfa6627d9-8ef272c825.zip/node_modules/react-fast-compare/index.js"),Kt=T.n(qt),Ve=T("../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/utils.js"),Gt=[],Jt=function(t,r,n){n===void 0&&(n={});var o=Y.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Gt},c=Y.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=c[0],s=c[1],l=Y.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(h){var j=h.state,P=Object.keys(j.elements);W.flushSync(function(){s({styles:(0,Ve.sq)(P.map(function(y){return[y,j.styles[y]||{}]})),attributes:(0,Ve.sq)(P.map(function(y){return[y,j.attributes[y]]}))})})},requires:["computeStyles"]}},[]),f=Y.useMemo(function(){var E={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[l,{name:"applyStyles",enabled:!1}])};return Kt()(o.current,E)?o.current||E:(o.current=E,E)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,l]),g=Y.useRef();return(0,Ve.LI)(function(){g.current&&g.current.setOptions(f)},[f]),(0,Ve.LI)(function(){if(!(t==null||r==null)){var E=n.createPopper||Zt,h=E(t,r,f);return g.current=h,function(){h.destroy(),g.current=null}}},[t,r,n.createPopper]),{state:g.current?g.current.state:null,styles:i.styles,attributes:i.attributes,update:g.current?g.current.update:null,forceUpdate:g.current?g.current.forceUpdate:null}}},"../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/utils.js":function(Pe,ue,T){"use strict";T.d(ue,{$p:function(){return W},LI:function(){return A},k$:function(){return m},sq:function(){return p}});var Y=T("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),W=function(x){return Array.isArray(x)?x[0]:x},v=function(x){if(typeof x=="function"){for(var _=arguments.length,Q=new Array(_>1?_-1:0),ee=1;ee<_;ee++)Q[ee-1]=arguments[ee];return x.apply(void 0,Q)}},m=function(x,_){if(typeof x=="function")return v(x,_);x!=null&&(x.current=_)},p=function(x){return x.reduce(function(_,Q){var ee=Q[0],ae=Q[1];return _[ee]=ae,_},{})},A=typeof window<"u"&&window.document&&window.document.createElement?Y.useLayoutEffect:Y.useEffect},"../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":function(Pe,ue,T){"use strict";T.d(ue,{Z:function(){return Y}});function Y(W,v){if(W==null)return{};var m={},p=Object.keys(W),A,d;for(d=0;d<p.length;d++)A=p[d],!(v.indexOf(A)>=0)&&(m[A]=W[A]);return m}},"../../../yarn/cache/@popperjs-core-npm-2.11.8-f1692e11a0-e5c69fdebf.zip/node_modules/@popperjs/core/lib/enums.js":function(Pe,ue,T){"use strict";T.d(ue,{BL:function(){return d},Ct:function(){return F},F2:function(){return v},I:function(){return W},Pj:function(){return Q},YP:function(){return ae},bw:function(){return B},d7:function(){return p},k5:function(){return ee},mv:function(){return A},t$:function(){return m},ut:function(){return x},we:function(){return Y},xs:function(){return re},zV:function(){return _}});var Y="top",W="bottom",v="right",m="left",p="auto",A=[Y,W,v,m],d="start",x="end",_="clippingParents",Q="viewport",ee="popper",ae="reference",B=A.reduce(function(k,z){return k.concat([z+"-"+d,z+"-"+x])},[]),F=[].concat(A,[p]).reduce(function(k,z){return k.concat([z,z+"-"+d,z+"-"+x])},[]),fe="beforeRead",V="read",N="afterRead",w="beforeMain",q="main",me="afterMain",he="beforeWrite",b="write",de="afterWrite",re=[fe,V,N,w,q,me,he,b,de]},"../../../yarn/cache/react-fast-compare-npm-3.2.0-fbfa6627d9-8ef272c825.zip/node_modules/react-fast-compare/index.js":function(Pe){var ue=typeof Element<"u",T=typeof Map=="function",Y=typeof Set=="function",W=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function v(m,p){if(m===p)return!0;if(m&&p&&typeof m=="object"&&typeof p=="object"){if(m.constructor!==p.constructor)return!1;var A,d,x;if(Array.isArray(m)){if(A=m.length,A!=p.length)return!1;for(d=A;d--!==0;)if(!v(m[d],p[d]))return!1;return!0}var _;if(T&&m instanceof Map&&p instanceof Map){if(m.size!==p.size)return!1;for(_=m.entries();!(d=_.next()).done;)if(!p.has(d.value[0]))return!1;for(_=m.entries();!(d=_.next()).done;)if(!v(d.value[1],p.get(d.value[0])))return!1;return!0}if(Y&&m instanceof Set&&p instanceof Set){if(m.size!==p.size)return!1;for(_=m.entries();!(d=_.next()).done;)if(!p.has(d.value[0]))return!1;return!0}if(W&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(p)){if(A=m.length,A!=p.length)return!1;for(d=A;d--!==0;)if(m[d]!==p[d])return!1;return!0}if(m.constructor===RegExp)return m.source===p.source&&m.flags===p.flags;if(m.valueOf!==Object.prototype.valueOf)return m.valueOf()===p.valueOf();if(m.toString!==Object.prototype.toString)return m.toString()===p.toString();if(x=Object.keys(m),A=x.length,A!==Object.keys(p).length)return!1;for(d=A;d--!==0;)if(!Object.prototype.hasOwnProperty.call(p,x[d]))return!1;if(ue&&m instanceof Element)return!1;for(d=A;d--!==0;)if(!((x[d]==="_owner"||x[d]==="__v"||x[d]==="__o")&&m.$$typeof)&&!v(m[x[d]],p[x[d]]))return!1;return!0}return m!==m&&p!==p}Pe.exports=function(p,A){try{return v(p,A)}catch(d){if((d.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw d}}}}]);
