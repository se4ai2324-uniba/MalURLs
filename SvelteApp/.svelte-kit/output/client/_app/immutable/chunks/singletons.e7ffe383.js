import{n as h,s as T}from"./scheduler.5f08d8ec.js";const p=[];function g(t,n=h){let r;const o=new Set;function a(e){if(T(t,e)&&(t=e,r)){const c=!p.length;for(const l of o)l[1](),p.push(l,t);if(c){for(let l=0;l<p.length;l+=2)p[l][0](p[l+1]);p.length=0}}}function s(e){a(e(t))}function i(e,c=h){const l=[e,c];return o.add(l),o.size===1&&(r=n(a,s)||h),e(t),()=>{o.delete(l),o.size===0&&r&&(r(),r=null)}}return{set:a,update:s,subscribe:i}}var k;const m=((k=globalThis.__sveltekit_1ddrss9)==null?void 0:k.base)??"";var w;const O=((w=globalThis.__sveltekit_1ddrss9)==null?void 0:w.assets)??m,S="1704383549806",$="sveltekit:snapshot",q="sveltekit:scroll",B="sveltekit:index",y={tap:1,hover:2,viewport:3,eager:4,off:-1};function F(t){let n=t.baseURI;if(!n){const r=t.getElementsByTagName("base");n=r.length?r[0].href:t.URL}return n}function K(){return{x:pageXOffset,y:pageYOffset}}function b(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const I={...y,"":y.hover};function A(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function z(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=A(t)}}function C(t,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,a=!r||!!o||j(r,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),s=(r==null?void 0:r.origin)===location.origin&&t.hasAttribute("download");return{url:r,external:a,target:o,download:s}}function H(t){let n=null,r=null,o=null,a=null,s=null,i=null,e=t;for(;e&&e!==document.documentElement;)o===null&&(o=b(e,"preload-code")),a===null&&(a=b(e,"preload-data")),n===null&&(n=b(e,"keepfocus")),r===null&&(r=b(e,"noscroll")),s===null&&(s=b(e,"reload")),i===null&&(i=b(e,"replacestate")),e=A(e);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:I[o??"off"],preload_data:I[a??"off"],keep_focus:c(n),noscroll:c(r),reload:c(s),replace_state:c(i)}}function E(t){const n=g(t);let r=!0;function o(){r=!0,n.update(i=>i)}function a(i){r=!1,n.set(i)}function s(i){let e;return n.subscribe(c=>{(e===void 0||r&&c!==e)&&i(e=c)})}return{notify:o,set:a,subscribe:s}}function R(){const{set:t,subscribe:n}=g(!1);let r;async function o(){clearTimeout(r);try{const a=await fetch(`${O}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==S;return i&&(t(!0),clearTimeout(r)),i}catch{return!1}}return{subscribe:n,check:o}}function j(t,n){return t.origin!==location.origin||!t.pathname.startsWith(n)}const v=-1,U=-2,V=-3,D=-4,L=-5,Y=-6;function M(t,n){return P(JSON.parse(t),n)}function P(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const r=t,o=Array(r.length);function a(s,i=!1){if(s===v)return;if(s===V)return NaN;if(s===D)return 1/0;if(s===L)return-1/0;if(s===Y)return-0;if(i)throw new Error("Invalid input");if(s in o)return o[s];const e=r[s];if(!e||typeof e!="object")o[s]=e;else if(Array.isArray(e))if(typeof e[0]=="string"){const c=e[0],l=n==null?void 0:n[c];if(l)return o[s]=l(a(e[1]));switch(c){case"Date":o[s]=new Date(e[1]);break;case"Set":const f=new Set;o[s]=f;for(let u=1;u<e.length;u+=1)f.add(a(e[u]));break;case"Map":const _=new Map;o[s]=_;for(let u=1;u<e.length;u+=2)_.set(a(e[u]),a(e[u+1]));break;case"RegExp":o[s]=new RegExp(e[1],e[2]);break;case"Object":o[s]=Object(e[1]);break;case"BigInt":o[s]=BigInt(e[1]);break;case"null":const d=Object.create(null);o[s]=d;for(let u=1;u<e.length;u+=2)d[e[u]]=a(e[u+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(e.length);o[s]=c;for(let l=0;l<e.length;l+=1){const f=e[l];f!==U&&(c[l]=a(f))}}else{const c={};o[s]=c;for(const l in e){const f=e[l];c[l]=a(f)}}return o[s]}return a(0)}let N;function X(t){N=t.client}function J(t){return(...n)=>N[t](...n)}const W={url:E({}),page:E({}),navigating:g(null),updated:R()};export{B as I,y as P,q as S,$ as a,C as b,H as c,W as d,m as e,z as f,F as g,X as h,j as i,J as j,N as k,M as p,K as s,P as u};