"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4092,1725,8357,4242,5601,784],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(I,f,_){_.d(f,{NF:function(){return s},Zo:function(){return T},ah:function(){return v},pC:function(){return j}});var h=_("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const j=h.createContext({});function s(m){return b;function b(l){const E=v(l.components);return h.createElement(m,{...l,allComponents:E})}}function v(m){const b=h.useContext(j);return h.useMemo(()=>typeof m=="function"?m(b):{...b,...m},[b,m])}const p={};function T({components:m,children:b,disableParentContext:l}){let E;return l?E=typeof m=="function"?m({}):m||p:E=v(m),h.createElement(j.Provider,{value:E},b)}},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js":function(I,f){Object.defineProperty(f,"__esModule",{value:!0}),f.isNavigator=f.isBrowser=f.off=f.on=f.noop=void 0;var _=function(){};f.noop=_;function h(s){for(var v=[],p=1;p<arguments.length;p++)v[p-1]=arguments[p];s&&s.addEventListener&&s.addEventListener.apply(s,v)}f.on=h;function j(s){for(var v=[],p=1;p<arguments.length;p++)v[p-1]=arguments[p];s&&s.removeEventListener&&s.removeEventListener.apply(s,v)}f.off=j,f.isBrowser=typeof window<"u",f.isNavigator=typeof navigator<"u"},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(I,f,_){Object.defineProperty(f,"__esModule",{value:!0});var h=_("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),j=_("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),s=j.isBrowser?h.useLayoutEffect:h.useEffect;f.default=s},"../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useMeasure.js":function(I,f,_){var h;h={value:!0};var j=_("../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs"),s=_("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),v=j.__importDefault(_("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),p=_("../../.yarn/__virtual__/react-use-virtual-dd7926f458/2/yarn/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/misc/util.js"),T={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function m(){var b=s.useState(null),l=b[0],E=b[1],g=s.useState(T),C=g[0],R=g[1],P=s.useMemo(function(){return new window.ResizeObserver(function(F){if(F[0]){var O=F[0].contentRect,A=O.x,N=O.y,G=O.width,X=O.height,z=O.top,K=O.left,U=O.bottom,V=O.right;R({x:A,y:N,width:G,height:X,top:z,left:K,bottom:U,right:V})}})},[]);return v.default(function(){if(l)return P.observe(l),function(){P.disconnect()}},[l]),[E,C]}f.Z=p.isBrowser&&typeof window.ResizeObserver<"u"?m:function(){return[p.noop,T]}},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(I,f,_){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=_("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),j=Symbol.for("react.element"),s=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,p=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function m(b,l,E){var g,C={},R=null,P=null;E!==void 0&&(R=""+E),l.key!==void 0&&(R=""+l.key),l.ref!==void 0&&(P=l.ref);for(g in l)v.call(l,g)&&!T.hasOwnProperty(g)&&(C[g]=l[g]);if(b&&b.defaultProps)for(g in l=b.defaultProps,l)C[g]===void 0&&(C[g]=l[g]);return{$$typeof:j,type:b,key:R,ref:P,props:C,_owner:p.current}}f.Fragment=s,f.jsx=m,f.jsxs=m},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(I,f,_){I.exports=_("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../../yarn/cache/tslib-npm-2.6.0-4d336a6824-c01066038f.zip/node_modules/tslib/tslib.es6.mjs":function(I,f,_){_.r(f),_.d(f,{__addDisposableResource:function(){return J},__assign:function(){return s},__asyncDelegator:function(){return U},__asyncGenerator:function(){return K},__asyncValues:function(){return V},__await:function(){return z},__awaiter:function(){return C},__classPrivateFieldGet:function(){return $},__classPrivateFieldIn:function(){return H},__classPrivateFieldSet:function(){return Y},__createBinding:function(){return P},__decorate:function(){return p},__disposeResources:function(){return Q},__esDecorate:function(){return m},__exportStar:function(){return F},__extends:function(){return j},__generator:function(){return R},__importDefault:function(){return Z},__importStar:function(){return W},__makeTemplateObject:function(){return k},__metadata:function(){return g},__param:function(){return T},__propKey:function(){return l},__read:function(){return A},__rest:function(){return v},__runInitializers:function(){return b},__setFunctionName:function(){return E},__spread:function(){return N},__spreadArray:function(){return X},__spreadArrays:function(){return G},__values:function(){return O}});var h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},h(e,t)};function j(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return s=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s.apply(this,arguments)};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function p(e,t,n,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(u=e[c])&&(o=(a<3?u(o):a>3?u(t,n,o):u(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}function T(e,t){return function(n,r){t(n,r,e)}}function m(e,t,n,r,a,o){function u(B){if(B!==void 0&&typeof B!="function")throw new TypeError("Function expected");return B}for(var c=r.kind,S=c==="getter"?"get":c==="setter"?"set":"value",i=!t&&e?r.static?e:e.prototype:null,d=t||(i?Object.getOwnPropertyDescriptor(i,r.name):{}),w,y=!1,D=n.length-1;D>=0;D--){var x={};for(var M in r)x[M]=M==="access"?{}:r[M];for(var M in r.access)x.access[M]=r.access[M];x.addInitializer=function(B){if(y)throw new TypeError("Cannot add initializers after decoration has completed");o.push(u(B||null))};var L=(0,n[D])(c==="accessor"?{get:d.get,set:d.set}:d[S],x);if(c==="accessor"){if(L===void 0)continue;if(L===null||typeof L!="object")throw new TypeError("Object expected");(w=u(L.get))&&(d.get=w),(w=u(L.set))&&(d.set=w),(w=u(L.init))&&a.unshift(w)}else(w=u(L))&&(c==="field"?a.unshift(w):d[S]=w)}i&&Object.defineProperty(i,r.name,d),y=!0}function b(e,t,n){for(var r=arguments.length>2,a=0;a<t.length;a++)n=r?t[a].call(e,n):t[a].call(e);return r?n:void 0}function l(e){return typeof e=="symbol"?e:"".concat(e)}function E(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function g(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function C(e,t,n,r){function a(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function c(d){try{i(r.next(d))}catch(w){u(w)}}function S(d){try{i(r.throw(d))}catch(w){u(w)}}function i(d){d.done?o(d.value):a(d.value).then(c,S)}i((r=r.apply(e,t||[])).next())})}function R(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(i){return function(d){return S([i,d])}}function S(i){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,i[0]&&(n=0)),n;)try{if(r=1,a&&(o=i[0]&2?a.return:i[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;switch(a=0,o&&(i=[i[0]&2,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return n.label++,{value:i[1],done:!1};case 5:n.label++,a=i[1],i=[0];continue;case 7:i=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1],o=i;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(i);break}o[2]&&n.ops.pop(),n.trys.pop();continue}i=t.call(e,n)}catch(d){i=[6,d],a=0}finally{r=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}var P=Object.create?function(e,t,n,r){r===void 0&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]};function F(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&P(t,e,n)}function O(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function A(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),a,o=[],u;try{for(;(t===void 0||t-- >0)&&!(a=r.next()).done;)o.push(a.value)}catch(c){u={error:c}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return o}function N(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(A(arguments[t]));return e}function G(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;t<n;t++)for(var o=arguments[t],u=0,c=o.length;u<c;u++,a++)r[a]=o[u];return r}function X(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,o;r<a;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function z(e){return this instanceof z?(this.v=e,this):new z(e)}function K(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),a,o=[];return a={},u("next"),u("throw"),u("return"),a[Symbol.asyncIterator]=function(){return this},a;function u(y){r[y]&&(a[y]=function(D){return new Promise(function(x,M){o.push([y,D,x,M])>1||c(y,D)})})}function c(y,D){try{S(r[y](D))}catch(x){w(o[0][3],x)}}function S(y){y.value instanceof z?Promise.resolve(y.value.v).then(i,d):w(o[0][2],y)}function i(y){c("next",y)}function d(y){c("throw",y)}function w(y,D){y(D),o.shift(),o.length&&c(o[0][0],o[0][1])}}function U(e){var t,n;return t={},r("next"),r("throw",function(a){throw a}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(a,o){t[a]=e[a]?function(u){return(n=!n)?{value:z(e[a](u)),done:!1}:o?o(u):u}:o}}function V(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof O=="function"?O(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(u){return new Promise(function(c,S){u=e[o](u),a(c,S,u.done,u.value)})}}function a(o,u,c,S){Promise.resolve(S).then(function(i){o({value:i,done:c})},u)}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var q=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function W(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&P(t,e,n);return q(t,e),t}function Z(e){return e&&e.__esModule?e:{default:e}}function $(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)}function Y(e,t,n,r,a){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?a.call(e,n):a?a.value=n:t.set(e,n),n}function H(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function J(e,t,n){if(t!=null){if(typeof t!="object")throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if(typeof r!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var ee=typeof SuppressedError=="function"?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function Q(e){function t(r){e.error=e.hasError?new ee(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}function n(){for(;e.stack.length;){var r=e.stack.pop();try{var a=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(a).then(n,function(o){return t(o),n()})}catch(o){t(o)}}if(e.hasError)throw e.error}return n()}f.default={__extends:j,__assign:s,__rest:v,__decorate:p,__param:T,__metadata:g,__awaiter:C,__generator:R,__createBinding:P,__exportStar:F,__values:O,__read:A,__spread:N,__spreadArrays:G,__spreadArray:X,__await:z,__asyncGenerator:K,__asyncDelegator:U,__asyncValues:V,__makeTemplateObject:k,__importStar:W,__importDefault:Z,__classPrivateFieldGet:$,__classPrivateFieldSet:Y,__classPrivateFieldIn:H,__addDisposableResource:J,__disposeResources:Q}}}]);