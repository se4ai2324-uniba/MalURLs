"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[400],{"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/Dom/canUseDom.js":function(N,s,a){a.d(s,{Z:function(){return _}});function _(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/KeyCode.js":function(N,s){var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(l){var f=l.keyCode;if(l.altKey&&!l.ctrlKey||l.metaKey||f>=a.F1&&f<=a.F12)return!1;switch(f){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(l){if(l>=a.ZERO&&l<=a.NINE||l>=a.NUM_ZERO&&l<=a.NUM_MULTIPLY||l>=a.A&&l<=a.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&l===0)return!0;switch(l){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};s.Z=a},"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useEvent.js":function(N,s,a){a.d(s,{Z:function(){return l}});var _=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");function l(f){var p=_.useRef();p.current=f;var d=_.useCallback(function(){for(var S,m=arguments.length,b=new Array(m),E=0;E<m;E++)b[E]=arguments[E];return(S=p.current)===null||S===void 0?void 0:S.call.apply(S,[p].concat(b))},[]);return d}},"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useLayoutEffect.js":function(N,s,a){a.d(s,{o:function(){return d}});var _=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),l=a("../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/Dom/canUseDom.js"),f=(0,l.Z)()?_.useLayoutEffect:_.useEffect,p=function(m,b){var E=_.useRef(!0);f(function(){return m(E.current)},b),f(function(){return E.current=!1,function(){E.current=!0}},[])},d=function(m,b){p(function(E){if(!E)return m()},b)};s.Z=p},"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useMergedState.js":function(N,s,a){a.d(s,{Z:function(){return S}});var _=a("../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=a("../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useEvent.js"),f=a("../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useLayoutEffect.js"),p=a("../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useState.js");function d(m){return m!==void 0}function S(m,b){var E=b||{},O=E.defaultValue,v=E.value,P=E.onChange,K=E.postState,U=(0,p.Z)(function(){return d(v)?v:d(O)?typeof O=="function"?O():O:typeof m=="function"?m():m}),j=(0,_.Z)(U,2),g=j[0],L=j[1],I=v!==void 0?v:g,B=K?K(I):I,Z=(0,l.Z)(P),R=(0,p.Z)([I]),F=(0,_.Z)(R,2),z=F[0],H=F[1];(0,f.o)(function(){var G=z[0];g!==G&&Z(g,G)},[z]),(0,f.o)(function(){d(v)||L(v)},[v]);var x=(0,l.Z)(function(G,V){L(G,V),H([I],V)});return[B,x]}},"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/hooks/useState.js":function(N,s,a){a.d(s,{Z:function(){return f}});var _=a("../../../yarn/cache/@babel-runtime-npm-7.23.1-9b8781107c-0cd0d43e6e.zip/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");function f(p){var d=l.useRef(!1),S=l.useState(p),m=(0,_.Z)(S,2),b=m[0],E=m[1];l.useEffect(function(){return d.current=!1,function(){d.current=!0}},[]);function O(v,P){P&&d.current||E(v)}return[b,O]}},"../../.yarn/__virtual__/rc-util-virtual-9d1c6e6a56/2/yarn/cache/rc-util-npm-5.38.0-a7a6ebc492-97a3e1dd94.zip/node_modules/rc-util/es/warning.js":function(N,s,a){a.d(s,{Kp:function(){return p}});var _={},l=[],f=function(v){l.push(v)};function p(O,v){if(!1)var P}function d(O,v){if(!1)var P}function S(){_={}}function m(O,v,P){!v&&!_[P]&&(O(!1,P),_[P]=!0)}function b(O,v){m(p,O,v)}function E(O,v){m(d,O,v)}b.preMessage=f,b.resetWarned=S,b.noteOnce=E,s.ZP=b},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js":function(N,s){Object.defineProperty(s,"__esModule",{value:!0}),s.isNavigator=s.isBrowser=s.off=s.on=s.noop=void 0;var a=function(){};s.noop=a;function _(f){for(var p=[],d=1;d<arguments.length;d++)p[d-1]=arguments[d];f&&f.addEventListener&&f.addEventListener.apply(f,p)}s.on=_;function l(f){for(var p=[],d=1;d<arguments.length;d++)p[d-1]=arguments[d];f&&f.removeEventListener&&f.removeEventListener.apply(f,p)}s.off=l,s.isBrowser=typeof window<"u",s.isNavigator=typeof navigator<"u"},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(N,s,a){Object.defineProperty(s,"__esModule",{value:!0});var _=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),l=a("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),f=l.isBrowser?_.useLayoutEffect:_.useEffect;s.default=f},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js":function(N,s,a){var _;_={value:!0};var l=a("../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs"),f=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),p=l.__importDefault(a("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),d=a("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),S={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function m(){var b=f.useState(null),E=b[0],O=b[1],v=f.useState(S),P=v[0],K=v[1],U=f.useMemo(function(){return new window.ResizeObserver(function(j){if(j[0]){var g=j[0].contentRect,L=g.x,I=g.y,B=g.width,Z=g.height,R=g.top,F=g.left,z=g.bottom,H=g.right;K({x:L,y:I,width:B,height:Z,top:R,left:F,bottom:z,right:H})}})},[]);return p.default(function(){if(E)return U.observe(E),function(){U.disconnect()}},[E]),[O,P]}s.Z=d.isBrowser&&typeof window.ResizeObserver<"u"?m:function(){return[d.noop,S]}},"../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs":function(N,s,a){a.r(s),a.d(s,{__addDisposableResource:function(){return k},__assign:function(){return f},__asyncDelegator:function(){return z},__asyncGenerator:function(){return F},__asyncValues:function(){return H},__await:function(){return R},__awaiter:function(){return P},__classPrivateFieldGet:function(){return X},__classPrivateFieldIn:function(){return J},__classPrivateFieldSet:function(){return $},__createBinding:function(){return U},__decorate:function(){return d},__disposeResources:function(){return q},__esDecorate:function(){return m},__exportStar:function(){return j},__extends:function(){return l},__generator:function(){return K},__importDefault:function(){return Y},__importStar:function(){return V},__makeTemplateObject:function(){return x},__metadata:function(){return v},__param:function(){return S},__propKey:function(){return E},__read:function(){return L},__rest:function(){return p},__runInitializers:function(){return b},__setFunctionName:function(){return O},__spread:function(){return I},__spreadArray:function(){return Z},__spreadArrays:function(){return B},__values:function(){return g}});var _=function(e,t){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},_(e,t)};function l(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");_(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var f=function(){return f=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},f.apply(this,arguments)};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function d(e,t,n,r){var o=arguments.length,u=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(e,t,n,r);else for(var y=e.length-1;y>=0;y--)(c=e[y])&&(u=(o<3?c(u):o>3?c(t,n,u):c(t,n))||u);return o>3&&u&&Object.defineProperty(t,n,u),u}function S(e,t){return function(n,r){t(n,r,e)}}function m(e,t,n,r,o,u){function c(Q){if(Q!==void 0&&typeof Q!="function")throw new TypeError("Function expected");return Q}for(var y=r.kind,T=y==="getter"?"get":y==="setter"?"set":"value",i=!t&&e?r.static?e:e.prototype:null,h=t||(i?Object.getOwnPropertyDescriptor(i,r.name):{}),M,w=!1,A=n.length-1;A>=0;A--){var C={};for(var D in r)C[D]=D==="access"?{}:r[D];for(var D in r.access)C.access[D]=r.access[D];C.addInitializer=function(Q){if(w)throw new TypeError("Cannot add initializers after decoration has completed");u.push(c(Q||null))};var W=(0,n[A])(y==="accessor"?{get:h.get,set:h.set}:h[T],C);if(y==="accessor"){if(W===void 0)continue;if(W===null||typeof W!="object")throw new TypeError("Object expected");(M=c(W.get))&&(h.get=M),(M=c(W.set))&&(h.set=M),(M=c(W.init))&&o.unshift(M)}else(M=c(W))&&(y==="field"?o.unshift(M):h[T]=M)}i&&Object.defineProperty(i,r.name,h),w=!0}function b(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function E(e){return typeof e=="symbol"?e:"".concat(e)}function O(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function v(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function P(e,t,n,r){function o(u){return u instanceof n?u:new n(function(c){c(u)})}return new(n||(n=Promise))(function(u,c){function y(h){try{i(r.next(h))}catch(M){c(M)}}function T(h){try{i(r.throw(h))}catch(M){c(M)}}function i(h){h.done?u(h.value):o(h.value).then(y,T)}i((r=r.apply(e,t||[])).next())})}function K(e,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,o,u,c;return c={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function y(i){return function(h){return T([i,h])}}function T(i){if(r)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(n=0)),n;)try{if(r=1,o&&(u=i[0]&2?o.return:i[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,i[1])).done)return u;switch(o=0,u&&(i=[i[0]&2,u.value]),i[0]){case 0:case 1:u=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,o=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(u=n.trys,!(u=u.length>0&&u[u.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!u||i[1]>u[0]&&i[1]<u[3])){n.label=i[1];break}if(i[0]===6&&n.label<u[1]){n.label=u[1],u=i;break}if(u&&n.label<u[2]){n.label=u[2],n.ops.push(i);break}u[2]&&n.ops.pop(),n.trys.pop();continue}i=t.call(e,n)}catch(h){i=[6,h],o=0}finally{r=u=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}var U=Object.create?function(e,t,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]};function j(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&U(t,e,n)}function g(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,u=[],c;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)u.push(o.value)}catch(y){c={error:y}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(c)throw c.error}}return u}function I(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(L(arguments[t]));return e}function B(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var u=arguments[t],c=0,y=u.length;c<y;c++,o++)r[o]=u[c];return r}function Z(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,u;r<o;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}function R(e){return this instanceof R?(this.v=e,this):new R(e)}function F(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,u=[];return o={},c("next"),c("throw"),c("return"),o[Symbol.asyncIterator]=function(){return this},o;function c(w){r[w]&&(o[w]=function(A){return new Promise(function(C,D){u.push([w,A,C,D])>1||y(w,A)})})}function y(w,A){try{T(r[w](A))}catch(C){M(u[0][3],C)}}function T(w){w.value instanceof R?Promise.resolve(w.value.v).then(i,h):M(u[0][2],w)}function i(w){y("next",w)}function h(w){y("throw",w)}function M(w,A){w(A),u.shift(),u.length&&y(u[0][0],u[0][1])}}function z(e){var t,n;return t={},r("next"),r("throw",function(o){throw o}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(o,u){t[o]=e[o]?function(c){return(n=!n)?{value:R(e[o](c)),done:!1}:u?u(c):c}:u}}function H(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof g=="function"?g(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(u){n[u]=e[u]&&function(c){return new Promise(function(y,T){c=e[u](c),o(y,T,c.done,c.value)})}}function o(u,c,y,T){Promise.resolve(T).then(function(i){u({value:i,done:y})},c)}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var G=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function V(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&U(t,e,n);return G(t,e),t}function Y(e){return e&&e.__esModule?e:{default:e}}function X(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function $(e,t,n,r,o){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?o.call(e,n):o?o.value=n:t.set(e,n),n}function J(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function k(e,t,n){if(t!=null){if(typeof t!="object")throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if(typeof r!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var ee=typeof SuppressedError=="function"?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function q(e){function t(r){e.error=e.hasError?new ee(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}function n(){for(;e.stack.length;){var r=e.stack.pop();try{var o=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(o).then(n,function(u){return t(u),n()})}catch(u){t(u)}}if(e.hasError)throw e.error}return n()}s.default={__extends:l,__assign:f,__rest:p,__decorate:d,__param:S,__metadata:v,__awaiter:P,__generator:K,__createBinding:U,__exportStar:j,__values:g,__read:L,__spread:I,__spreadArrays:B,__spreadArray:Z,__await:R,__asyncGenerator:F,__asyncDelegator:z,__asyncValues:H,__makeTemplateObject:x,__importStar:V,__importDefault:Y,__classPrivateFieldGet:X,__classPrivateFieldSet:$,__classPrivateFieldIn:J,__addDisposableResource:k,__disposeResources:q}}}]);
