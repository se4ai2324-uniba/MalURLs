"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[830],{"../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/Manager.js":function(K,_,p){p.d(_,{C8:function(){return P},dK:function(){return O}});var d=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),P=d.createContext(),l=d.createContext();function O(E){var U=E.children,B=d.useState(null),M=B[0],v=B[1],T=d.useRef(!1);d.useEffect(function(){return function(){T.current=!0}},[]);var S=d.useCallback(function(z){T.current||v(z)},[]);return d.createElement(P.Provider,{value:M},d.createElement(l.Provider,{value:S},U))}},"../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/Popper.js":function(K,_,p){p.d(_,{r:function(){return M}});var d=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),P=p("../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/Manager.js"),l=p("../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/utils.js"),O=p("../../.yarn/__virtual__/react-popper-virtual-9f55d4f38a/2/yarn/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/usePopper.js"),E=function(){},U=function(){return Promise.resolve(null)},B=[];function M(v){var T=v.placement,S=T===void 0?"bottom":T,z=v.strategy,D=z===void 0?"absolute":z,R=v.modifiers,G=R===void 0?B:R,j=v.referenceElement,I=v.onFirstUpdate,g=v.innerRef,y=v.children,u=d.useContext(P.C8),i=d.useState(null),f=i[0],m=i[1],w=d.useState(null),N=w[0],F=w[1];d.useEffect(function(){(0,l.k$)(g,f)},[g,f]);var $=d.useMemo(function(){return{placement:S,strategy:D,onFirstUpdate:I,modifiers:[].concat(G,[{name:"arrow",enabled:N!=null,options:{element:N}}])}},[S,D,I,G,N]),k=(0,O.D)(j||u,f,$),L=k.state,H=k.styles,Q=k.forceUpdate,Y=k.update,q=d.useMemo(function(){return{ref:m,style:H.popper,placement:L?L.placement:S,hasPopperEscaped:L&&L.modifiersData.hide?L.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:L&&L.modifiersData.hide?L.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:H.arrow,ref:F},forceUpdate:Q||E,update:Y||U}},[m,F,S,L,H,Y,Q]);return(0,l.$p)(y)(q)}},"../../.yarn/__virtual__/react-transition-group-virtual-ee780e1107/2/yarn/cache/react-transition-group-npm-4.4.5-98ea4ef96e-7560284010.zip/node_modules/react-transition-group/esm/Transition.js":function(K,_,p){p.d(_,{ZP:function(){return G}});var d=p("../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),P=p("../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),l=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),O=p("../../.yarn/__virtual__/react-dom-virtual-5dcbe0c0ba/2/yarn/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/index.js"),E={disabled:!1},U=l.createContext(null),B=p("../../.yarn/__virtual__/react-transition-group-virtual-ee780e1107/2/yarn/cache/react-transition-group-npm-4.4.5-98ea4ef96e-7560284010.zip/node_modules/react-transition-group/esm/utils/reflow.js"),M="unmounted",v="exited",T="entering",S="entered",z="exiting",D=function(j){(0,P.Z)(I,j);function I(y,u){var i;i=j.call(this,y,u)||this;var f=u,m=f&&!f.isMounting?y.enter:y.appear,w;return i.appearStatus=null,y.in?m?(w=v,i.appearStatus=T):w=S:y.unmountOnExit||y.mountOnEnter?w=M:w=v,i.state={status:w},i.nextCallback=null,i}I.getDerivedStateFromProps=function(u,i){var f=u.in;return f&&i.status===M?{status:v}:null};var g=I.prototype;return g.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},g.componentDidUpdate=function(u){var i=null;if(u!==this.props){var f=this.state.status;this.props.in?f!==T&&f!==S&&(i=T):(f===T||f===S)&&(i=z)}this.updateStatus(!1,i)},g.componentWillUnmount=function(){this.cancelNextCallback()},g.getTimeouts=function(){var u=this.props.timeout,i,f,m;return i=f=m=u,u!=null&&typeof u!="number"&&(i=u.exit,f=u.enter,m=u.appear!==void 0?u.appear:f),{exit:i,enter:f,appear:m}},g.updateStatus=function(u,i){if(u===void 0&&(u=!1),i!==null)if(this.cancelNextCallback(),i===T){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this);f&&(0,B.Q)(f)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:M})},g.performEnter=function(u){var i=this,f=this.props.enter,m=this.context?this.context.isMounting:u,w=this.props.nodeRef?[m]:[O.findDOMNode(this),m],N=w[0],F=w[1],$=this.getTimeouts(),k=m?$.appear:$.enter;if(!u&&!f||E.disabled){this.safeSetState({status:S},function(){i.props.onEntered(N)});return}this.props.onEnter(N,F),this.safeSetState({status:T},function(){i.props.onEntering(N,F),i.onTransitionEnd(k,function(){i.safeSetState({status:S},function(){i.props.onEntered(N,F)})})})},g.performExit=function(){var u=this,i=this.props.exit,f=this.getTimeouts(),m=this.props.nodeRef?void 0:O.findDOMNode(this);if(!i||E.disabled){this.safeSetState({status:v},function(){u.props.onExited(m)});return}this.props.onExit(m),this.safeSetState({status:z},function(){u.props.onExiting(m),u.onTransitionEnd(f.exit,function(){u.safeSetState({status:v},function(){u.props.onExited(m)})})})},g.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},g.safeSetState=function(u,i){i=this.setNextCallback(i),this.setState(u,i)},g.setNextCallback=function(u){var i=this,f=!0;return this.nextCallback=function(m){f&&(f=!1,i.nextCallback=null,u(m))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},g.onTransitionEnd=function(u,i){this.setNextCallback(i);var f=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this),m=u==null&&!this.props.addEndListener;if(!f||m){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var w=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],N=w[0],F=w[1];this.props.addEndListener(N,F)}u!=null&&setTimeout(this.nextCallback,u)},g.render=function(){var u=this.state.status;if(u===M)return null;var i=this.props,f=i.children,m=i.in,w=i.mountOnEnter,N=i.unmountOnExit,F=i.appear,$=i.enter,k=i.exit,L=i.timeout,H=i.addEndListener,Q=i.onEnter,Y=i.onEntering,q=i.onEntered,ee=i.onExit,e=i.onExiting,t=i.onExited,r=i.nodeRef,n=(0,d.Z)(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return l.createElement(U.Provider,{value:null},typeof f=="function"?f(u,n):l.cloneElement(l.Children.only(f),n))},I}(l.Component);D.contextType=U,D.propTypes={};function R(){}D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:R,onEntering:R,onEntered:R,onExit:R,onExiting:R,onExited:R},D.UNMOUNTED=M,D.EXITED=v,D.ENTERING=T,D.ENTERED=S,D.EXITING=z;var G=D},"../../.yarn/__virtual__/react-transition-group-virtual-ee780e1107/2/yarn/cache/react-transition-group-npm-4.4.5-98ea4ef96e-7560284010.zip/node_modules/react-transition-group/esm/utils/reflow.js":function(K,_,p){p.d(_,{Q:function(){return d}});var d=function(l){return l.scrollTop}},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js":function(K,_,p){var d=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),P=function(l){(0,d.useEffect)(l,[])};_.Z=P},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js":function(K,_){Object.defineProperty(_,"__esModule",{value:!0}),_.isNavigator=_.isBrowser=_.off=_.on=_.noop=void 0;var p=function(){};_.noop=p;function d(l){for(var O=[],E=1;E<arguments.length;E++)O[E-1]=arguments[E];l&&l.addEventListener&&l.addEventListener.apply(l,O)}_.on=d;function P(l){for(var O=[],E=1;E<arguments.length;E++)O[E-1]=arguments[E];l&&l.removeEventListener&&l.removeEventListener.apply(l,O)}_.off=P,_.isBrowser=typeof window<"u",_.isNavigator=typeof navigator<"u"},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(K,_,p){Object.defineProperty(_,"__esModule",{value:!0});var d=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),P=p("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),l=P.isBrowser?d.useLayoutEffect:d.useEffect;_.default=l},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js":function(K,_,p){var d;d={value:!0};var P=p("../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs"),l=p("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),O=P.__importDefault(p("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),E=p("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),U={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function B(){var M=l.useState(null),v=M[0],T=M[1],S=l.useState(U),z=S[0],D=S[1],R=l.useMemo(function(){return new window.ResizeObserver(function(G){if(G[0]){var j=G[0].contentRect,I=j.x,g=j.y,y=j.width,u=j.height,i=j.top,f=j.left,m=j.bottom,w=j.right;D({x:I,y:g,width:y,height:u,top:i,left:f,bottom:m,right:w})}})},[]);return O.default(function(){if(v)return R.observe(v),function(){R.disconnect()}},[v]),[T,z]}_.Z=E.isBrowser&&typeof window.ResizeObserver<"u"?B:function(){return[E.noop,U]}},"../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs":function(K,_,p){p.r(_),p.d(_,{__addDisposableResource:function(){return Y},__assign:function(){return l},__asyncDelegator:function(){return m},__asyncGenerator:function(){return f},__asyncValues:function(){return w},__await:function(){return i},__awaiter:function(){return z},__classPrivateFieldGet:function(){return L},__classPrivateFieldIn:function(){return Q},__classPrivateFieldSet:function(){return H},__createBinding:function(){return R},__decorate:function(){return E},__disposeResources:function(){return ee},__esDecorate:function(){return B},__exportStar:function(){return G},__extends:function(){return P},__generator:function(){return D},__importDefault:function(){return k},__importStar:function(){return $},__makeTemplateObject:function(){return N},__metadata:function(){return S},__param:function(){return U},__propKey:function(){return v},__read:function(){return I},__rest:function(){return O},__runInitializers:function(){return M},__setFunctionName:function(){return T},__spread:function(){return g},__spreadArray:function(){return u},__spreadArrays:function(){return y},__values:function(){return j}});var d=function(e,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},d(e,t)};function P(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");d(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var l=function(){return l=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},l.apply(this,arguments)};function O(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function E(e,t,r,n){var o=arguments.length,a=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,r,n);else for(var h=e.length-1;h>=0;h--)(s=e[h])&&(a=(o<3?s(a):o>3?s(t,r,a):s(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function U(e,t){return function(r,n){t(r,n,e)}}function B(e,t,r,n,o,a){function s(J){if(J!==void 0&&typeof J!="function")throw new TypeError("Function expected");return J}for(var h=n.kind,A=h==="getter"?"get":h==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,b=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),C,x=!1,W=r.length-1;W>=0;W--){var Z={};for(var X in n)Z[X]=X==="access"?{}:n[X];for(var X in n.access)Z.access[X]=n.access[X];Z.addInitializer=function(J){if(x)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(J||null))};var V=(0,r[W])(h==="accessor"?{get:b.get,set:b.set}:b[A],Z);if(h==="accessor"){if(V===void 0)continue;if(V===null||typeof V!="object")throw new TypeError("Object expected");(C=s(V.get))&&(b.get=C),(C=s(V.set))&&(b.set=C),(C=s(V.init))&&o.unshift(C)}else(C=s(V))&&(h==="field"?o.unshift(C):b[A]=C)}c&&Object.defineProperty(c,n.name,b),x=!0}function M(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function v(e){return typeof e=="symbol"?e:"".concat(e)}function T(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function S(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function z(e,t,r,n){function o(a){return a instanceof r?a:new r(function(s){s(a)})}return new(r||(r=Promise))(function(a,s){function h(b){try{c(n.next(b))}catch(C){s(C)}}function A(b){try{c(n.throw(b))}catch(C){s(C)}}function c(b){b.done?a(b.value):o(b.value).then(h,A)}c((n=n.apply(e,t||[])).next())})}function D(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,s;return s={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function h(c){return function(b){return A([c,b])}}function A(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(r=0)),r;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(b){c=[6,b],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var R=Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};function G(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&R(t,e,r)}function j(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,a=[],s;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)a.push(o.value)}catch(h){s={error:h}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(s)throw s.error}}return a}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(I(arguments[t]));return e}function y(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var a=arguments[t],s=0,h=a.length;s<h;s++,o++)n[o]=a[s];return n}function u(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,a;n<o;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}function i(e){return this instanceof i?(this.v=e,this):new i(e)}function f(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),o,a=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(x){n[x]&&(o[x]=function(W){return new Promise(function(Z,X){a.push([x,W,Z,X])>1||h(x,W)})})}function h(x,W){try{A(n[x](W))}catch(Z){C(a[0][3],Z)}}function A(x){x.value instanceof i?Promise.resolve(x.value.v).then(c,b):C(a[0][2],x)}function c(x){h("next",x)}function b(x){h("throw",x)}function C(x,W){x(W),a.shift(),a.length&&h(a[0][0],a[0][1])}}function m(e){var t,r;return t={},n("next"),n("throw",function(o){throw o}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(o,a){t[o]=e[o]?function(s){return(r=!r)?{value:i(e[o](s)),done:!1}:a?a(s):s}:a}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof j=="function"?j(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(a){r[a]=e[a]&&function(s){return new Promise(function(h,A){s=e[a](s),o(h,A,s.done,s.value)})}}function o(a,s,h,A){Promise.resolve(A).then(function(c){a({value:c,done:h})},s)}}function N(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var F=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function $(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&R(t,e,r);return F(t,e),t}function k(e){return e&&e.__esModule?e:{default:e}}function L(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function H(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r}function Q(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function Y(e,t,r){if(t!=null){if(typeof t!="object")throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if(typeof n!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var q=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function ee(e){function t(n){e.error=e.hasError?new q(n,e.error,"An error was suppressed during disposal."):n,e.hasError=!0}function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,function(a){return t(a),r()})}catch(a){t(a)}}if(e.hasError)throw e.error}return r()}_.default={__extends:P,__assign:l,__rest:O,__decorate:E,__param:U,__metadata:S,__awaiter:z,__generator:D,__createBinding:R,__exportStar:G,__values:j,__read:I,__spread:g,__spreadArrays:y,__spreadArray:u,__await:i,__asyncGenerator:f,__asyncDelegator:m,__asyncValues:w,__makeTemplateObject:N,__importStar:$,__importDefault:k,__classPrivateFieldGet:L,__classPrivateFieldSet:H,__classPrivateFieldIn:Q,__addDisposableResource:Y,__disposeResources:ee}}}]);