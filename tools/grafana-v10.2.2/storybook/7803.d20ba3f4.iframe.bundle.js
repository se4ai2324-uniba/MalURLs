"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[7803],{"../../.yarn/__virtual__/@storybook-components-virtual-89f77cdce8/2/yarn/cache/@storybook-components-npm-7.4.5-cefb82d720-54977556d8.zip/node_modules/@storybook/components/dist/OverlayScrollbars-GZGLA7DL.mjs":function(Xn,vr,$t){$t.r(vr),$t.d(vr,{OverlayScrollbars:function(){return Nn},default:function(){return Vn}});var ee=$t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");function B(e,t){if(ot(e))for(let r=0;r<e.length&&t(e[r],r,e)!==!1;r++);else e&&B(Object.keys(e),r=>t(e[r],r,e));return e}function re(e,t){let r=ke(t);if(me(t)||r){let l=r?"":{};if(e){let n=window.getComputedStyle(e,null);l=r?Ar(e,n,t):t.reduce((o,i)=>(o[i]=Ar(e,n,i),o),l)}return l}e&&B(ue(t),l=>kl(e,l,t[l]))}var he=(e,t)=>{let{o:r,u:l,_:n}=e,o=r,i,s=(a,c)=>{let d=o,f=a,p=c||(l?!l(d,f):d!==f);return(p||n)&&(o=f,i=d),[o,p,i]};return[t?a=>s(t(o,i),a):s,a=>[o,!!a,i]]},Ge=()=>typeof window<"u",hr=Ge()&&Node.ELEMENT_NODE,{toString:ml,hasOwnProperty:Lt}=Object.prototype,Ee=e=>e===void 0,it=e=>e===null,yl=e=>Ee(e)||it(e)?`${e}`:ml.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),Ie=e=>typeof e=="number",ke=e=>typeof e=="string",At=e=>typeof e=="boolean",ge=e=>typeof e=="function",me=e=>Array.isArray(e),Qe=e=>typeof e=="object"&&!me(e)&&!it(e),ot=e=>{let t=!!e&&e.length,r=Ie(t)&&t>-1&&t%1==0;return me(e)||!ge(e)&&r?t>0&&Qe(e)?t-1 in e:!0:!1},Pt=e=>{if(!e||!Qe(e)||yl(e)!=="object")return!1;let t,r="constructor",l=e[r],n=l&&l.prototype,o=Lt.call(e,r),i=n&&Lt.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(t in e);return Ee(t)||Lt.call(e,t)},at=e=>{let t=HTMLElement;return e?t?e instanceof t:e.nodeType===hr:!1},st=e=>{let t=Element;return e?t?e instanceof t:e.nodeType===hr:!1},zt=(e,t,r)=>e.indexOf(t,r),W=(e,t,r)=>(!r&&!ke(t)&&ot(t)?Array.prototype.push.apply(e,t):e.push(t),e),Be=e=>{let t=Array.from,r=[];return t&&e?t(e):(e instanceof Set?e.forEach(l=>{W(r,l)}):B(e,l=>{W(r,l)}),r)},Ht=e=>!!e&&e.length===0,Se=(e,t,r)=>{B(e,l=>l&&l.apply(void 0,t||[])),!r&&(e.length=0)},ct=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),ue=e=>e?Object.keys(e):[],U=(e,t,r,l,n,o,i)=>{let s=[t,r,l,n,o,i];return(typeof e!="object"||it(e))&&!ge(e)&&(e={}),B(s,a=>{B(ue(a),c=>{let d=a[c];if(e===d)return!0;let f=me(d);if(d&&(Pt(d)||f)){let p=e[c],u=p;f&&!me(p)?u=[]:!f&&!Pt(p)&&(u={}),e[c]=U(u,d)}else e[c]=d})}),e},It=e=>{for(let t in e)return!1;return!0},gr=(e,t,r,l)=>{if(Ee(l))return r?r[e]:t;r&&(ke(l)||Ie(l))&&(r[e]=l)},le=(e,t,r)=>{if(Ee(r))return e?e.getAttribute(t):null;e&&e.setAttribute(t,r)},ae=(e,t)=>{e&&e.removeAttribute(t)},De=(e,t,r,l)=>{if(r){let n=le(e,t)||"",o=new Set(n.split(" "));o[l?"add":"delete"](r);let i=Be(o).join(" ").trim();le(e,t,i)}},wl=(e,t,r)=>{let l=le(e,t)||"";return new Set(l.split(" ")).has(r)},ye=(e,t)=>gr("scrollLeft",0,e,t),$e=(e,t)=>gr("scrollTop",0,e,t),kt=Ge()&&Element.prototype,mr=(e,t)=>{let r=[],l=t?st(t)?t:null:document;return l?W(r,l.querySelectorAll(e)):r},Sl=(e,t)=>{let r=t?st(t)?t:null:document;return r?r.querySelector(e):null},dt=(e,t)=>st(e)?(kt.matches||kt.msMatchesSelector).call(e,t):!1,Rt=e=>e?Be(e.childNodes):[],Le=e=>e?e.parentElement:null,Xe=(e,t)=>{if(st(e)){let r=kt.closest;if(r)return r.call(e,t);do{if(dt(e,t))return e;e=Le(e)}while(e)}return null},xl=(e,t,r)=>{let l=e&&Xe(e,t),n=e&&Sl(r,l),o=Xe(n,t)===l;return l&&n?l===e||n===e||o&&Xe(Xe(e,r),t)!==l:!1},Mt=(e,t,r)=>{if(r&&e){let l=t,n;ot(r)?(n=document.createDocumentFragment(),B(r,o=>{o===l&&(l=o.previousSibling),n.appendChild(o)})):n=r,t&&(l?l!==t&&(l=l.nextSibling):l=e.firstChild),e.insertBefore(n,l||null)}},pe=(e,t)=>{Mt(e,null,t)},Ol=(e,t)=>{Mt(Le(e),e,t)},yr=(e,t)=>{Mt(Le(e),e&&e.nextSibling,t)},xe=e=>{if(ot(e))B(Be(e),t=>xe(t));else if(e){let t=Le(e);t&&t.removeChild(e)}},Ne=e=>{let t=document.createElement("div");return e&&le(t,"class",e),t},wr=e=>{let t=Ne();return t.innerHTML=e.trim(),B(Rt(t),r=>xe(r))},_t=e=>e.charAt(0).toUpperCase()+e.slice(1),Cl=()=>Ne().style,El=["-webkit-","-moz-","-o-","-ms-"],$l=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Tt={},Bt={},Ll=e=>{let t=Bt[e];if(ct(Bt,e))return t;let r=_t(e),l=Cl();return B(El,n=>{let o=n.replace(/-/g,"");return!(t=[e,n+e,o+r,_t(o)+r].find(i=>l[i]!==void 0))}),Bt[e]=t||""},et=e=>{if(Ge()){let t=Tt[e]||window[e];return ct(Tt,e)||(B($l,r=>(t=t||window[r+_t(e)],!t)),Tt[e]=t),t}},Al=et("MutationObserver"),Sr=et("IntersectionObserver"),qe=et("ResizeObserver"),xr=et("cancelAnimationFrame"),Or=et("requestAnimationFrame"),ut=Ge()&&window.setTimeout,Dt=Ge()&&window.clearTimeout,Pl=/[^\x20\t\r\n\f]+/g,Cr=(e,t,r)=>{let l=e&&e.classList,n,o=0,i=!1;if(l&&t&&ke(t)){let s=t.match(Pl)||[];for(i=s.length>0;n=s[o++];)i=!!r(l,n)&&i}return i},Nt=(e,t)=>{Cr(e,t,(r,l)=>r.remove(l))},Ae=(e,t)=>(Cr(e,t,(r,l)=>r.add(l)),Nt.bind(0,e,t)),ft=(e,t,r,l)=>{if(e&&t){let n=!0;return B(r,o=>{let i=l?l(e[o]):e[o],s=l?l(t[o]):t[o];i!==s&&(n=!1)}),n}return!1},Er=(e,t)=>ft(e,t,["w","h"]),$r=(e,t)=>ft(e,t,["x","y"]),zl=(e,t)=>ft(e,t,["t","r","b","l"]),Lr=(e,t,r)=>ft(e,t,["width","height"],r&&(l=>Math.round(l))),be=()=>{},We=e=>{let t,r=e?ut:Or,l=e?Dt:xr;return[n=>{l(t),t=r(n,ge(e)?e():e)},()=>l(t)]},Vt=(e,t)=>{let r,l,n,o=be,{v:i,g:s,p:a}=t||{},c=function(u){o(),Dt(r),r=l=void 0,o=be,e.apply(this,u)},d=u=>a&&l?a(l,u):u,f=()=>{o!==be&&c(d(n)||n)},p=function(){let u=Be(arguments),v=ge(i)?i():i;if(Ie(v)&&v>=0){let C=ge(s)?s():s,P=Ie(C)&&C>=0,$=v>0?ut:Or,g=v>0?Dt:xr,w=d(u)||u,A=c.bind(0,w);o();let z=$(A,v);o=()=>g(z),P&&!r&&(r=ut(f,C)),l=n=w}else c(u)};return p.m=f,p},Hl={opacity:1,zindex:1},pt=(e,t)=>{let r=t?parseFloat(e):parseInt(e,10);return r===r?r:0},Il=(e,t)=>!Hl[e.toLowerCase()]&&Ie(t)?`${t}px`:t,Ar=(e,t,r)=>t!=null?t[r]||t.getPropertyValue(r):e.style[r],kl=(e,t,r)=>{try{let{style:l}=e;Ee(l[t])?l.setProperty(t,r):l[t]=Il(t,r)}catch{}},tt=e=>re(e,"direction")==="rtl",Pr=(e,t,r)=>{let l=t?`${t}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,s=`${l}bottom${n}`,a=`${l}left${n}`,c=re(e,[o,i,s,a]);return{t:pt(c[o],!0),r:pt(c[i],!0),b:pt(c[s],!0),l:pt(c[a],!0)}},{round:zr}=Math,Ft={w:0,h:0},rt=e=>e?{w:e.offsetWidth,h:e.offsetHeight}:Ft,bt=e=>e?{w:e.clientWidth,h:e.clientHeight}:Ft,vt=e=>e?{w:e.scrollWidth,h:e.scrollHeight}:Ft,ht=e=>{let t=parseFloat(re(e,"height"))||0,r=parseFloat(re(e,"width"))||0;return{w:r-zr(r),h:t-zr(t)}},Oe=e=>e.getBoundingClientRect(),gt,Rl=()=>{if(Ee(gt)){gt=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){gt=!0}}))}catch{}}return gt},Hr=e=>e.split(" "),Ml=(e,t,r,l)=>{B(Hr(t),n=>{e.removeEventListener(n,r,l)})},G=(e,t,r,l)=>{var n;let o=Rl(),i=(n=o&&l&&l.S)!=null?n:o,s=l&&l.$||!1,a=l&&l.C||!1,c=[],d=o?{passive:i,capture:s}:s;return B(Hr(t),f=>{let p=a?u=>{e.removeEventListener(f,p,s),r&&r(u)}:r;W(c,Ml.bind(null,e,f,p,s)),e.addEventListener(f,p,d)}),Se.bind(0,c)},Ir=e=>e.stopPropagation(),kr=e=>e.preventDefault(),_l={x:0,y:0},jt=e=>{let t=e?Oe(e):0;return t?{x:t.left+window.pageYOffset,y:t.top+window.pageXOffset}:_l},Rr=(e,t)=>{B(me(t)?t:[t],e)},Xt=e=>{let t=new Map,r=(o,i)=>{if(o){let s=t.get(o);Rr(a=>{s&&s[a?"delete":"clear"](a)},i)}else t.forEach(s=>{s.clear()}),t.clear()},l=(o,i)=>{if(ke(o)){let c=t.get(o)||new Set;return t.set(o,c),Rr(d=>{ge(d)&&c.add(d)},i),r.bind(0,o,i)}At(i)&&i&&r();let s=ue(o),a=[];return B(s,c=>{let d=o[c];d&&W(a,l(c,d))}),Se.bind(0,a)},n=(o,i)=>{let s=t.get(o);B(Be(s),a=>{i&&!Ht(i)?a.apply(0,i):a()})};return l(e||{}),[l,r,n]},Mr=e=>JSON.stringify(e,(t,r)=>{if(ge(r))throw new Error;return r}),Tl={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},_r=(e,t)=>{let r={},l=ue(t).concat(ue(e));return B(l,n=>{let o=e[n],i=t[n];if(Qe(o)&&Qe(i))U(r[n]={},_r(o,i)),It(r[n])&&delete r[n];else if(ct(t,n)&&i!==o){let s=!0;if(me(o)||me(i))try{Mr(o)===Mr(i)&&(s=!1)}catch{}s&&(r[n]=i)}}),r},Tr="os-environment",Br=`${Tr}-flexbox-glue`,Bl=`${Br}-max`,Dr="os-scrollbar-hidden",qt="data-overlayscrollbars-initialize",we="data-overlayscrollbars",Nr=`${we}-overflow-x`,Vr=`${we}-overflow-y`,Ue="overflowVisible",Dl="scrollbarHidden",Fr="scrollbarPressed",mt="updating",Re="data-overlayscrollbars-viewport",Wt="arrange",jr="scrollbarHidden",Ke=Ue,Ut="data-overlayscrollbars-padding",Nl=Ke,Xr="data-overlayscrollbars-content",Kt="os-size-observer",Vl=`${Kt}-appear`,Fl=`${Kt}-listener`,jl="os-trinsic-observer",Xl="os-no-css-vars",ql="os-theme-none",se="os-scrollbar",Wl=`${se}-rtl`,Ul=`${se}-horizontal`,Kl=`${se}-vertical`,qr=`${se}-track`,Jt=`${se}-handle`,Jl=`${se}-visible`,Yl=`${se}-cornerless`,Wr=`${se}-transitionless`,Ur=`${se}-interaction`,Kr=`${se}-unusable`,Jr=`${se}-auto-hidden`,Yr=`${se}-wheel`,Zl=`${qr}-interactive`,Gl=`${Jt}-interactive`,Zr={},Ve=()=>Zr,Ql=e=>{let t=[];return B(me(e)?e:[e],r=>{let l=ue(r);B(l,n=>{W(t,Zr[n]=r[n])})}),t},en="__osOptionsValidationPlugin",tn="__osSizeObserverPlugin",Yt="__osScrollbarsHidingPlugin",rn="__osClickScrollPlugin",Zt,Gr=(e,t,r,l)=>{pe(e,t);let n=bt(t),o=rt(t),i=ht(r);return l&&xe(t),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},ln=e=>{let t=!1,r=Ae(e,Dr);try{t=re(e,Ll("scrollbar-width"))==="none"||window.getComputedStyle(e,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return r(),t},nn=(e,t)=>{let r="hidden";re(e,{overflowX:r,overflowY:r,direction:"rtl"}),ye(e,0);let l=jt(e),n=jt(t);ye(e,-999);let o=jt(t);return{i:l.x===n.x,n:n.x!==o.x}},on=(e,t)=>{let r=Ae(e,Br),l=Oe(e),n=Oe(t),o=Lr(n,l,!0),i=Ae(e,Bl),s=Oe(e),a=Oe(t),c=Lr(a,s,!0);return r(),i(),o&&c},an=()=>{let{body:e}=document,t=wr(`<div class="${Tr}"><div></div></div>`)[0],r=t.firstChild,[l,,n]=Xt(),[o,i]=he({o:Gr(e,t,r),u:$r},Gr.bind(0,e,t,r,!0)),[s]=i(),a=ln(t),c={x:s.x===0,y:s.y===0},d={elements:{host:null,padding:!a,viewport:$=>a&&$===$.ownerDocument.body&&$,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=U({},Tl),p=U.bind(0,{},f),u=U.bind(0,{},d),v={k:s,A:c,I:a,L:re(t,"zIndex")==="-1",B:nn(t,r),V:on(t,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:u,q:$=>U(d,$)&&u(),F:p,G:$=>U(f,$)&&p(),X:U({},d),U:U({},f)},C=window.addEventListener,P=Vt($=>n($?"z":"r"),{v:33,g:99});if(ae(t,"style"),xe(t),C("resize",P.bind(0,!1)),!a&&(!c.x||!c.y)){let $;C("resize",()=>{let g=Ve()[Yt];$=$||g&&g.R(),$&&$(v,o,P.bind(0,!0))})}return v},ce=()=>(Zt||(Zt=an()),Zt),Gt=(e,t)=>ge(t)?t.apply(0,e):t,sn=(e,t,r,l)=>{let n=Ee(l)?r:l;return Gt(e,n)||t.apply(0,e)},Qr=(e,t,r,l)=>{let n=Ee(l)?r:l,o=Gt(e,n);return!!o&&(at(o)?o:t.apply(0,e))},cn=(e,t,r)=>{let{nativeScrollbarsOverlaid:l,body:n}=r||{},{A:o,I:i}=ce(),{nativeScrollbarsOverlaid:s,body:a}=t,c=l??s,d=Ee(n)?a:n,f=(o.x||o.y)&&c,p=e&&(it(d)?!i:d);return!!f||!!p},Qt=new WeakMap,dn=(e,t)=>{Qt.set(e,t)},un=e=>{Qt.delete(e)},el=e=>Qt.get(e),tl=(e,t)=>e?t.split(".").reduce((r,l)=>r&&ct(r,l)?r[l]:void 0,e):void 0,er=(e,t,r)=>l=>[tl(e,l),r||tl(t,l)!==void 0],rl=e=>{let t=e;return[()=>t,r=>{t=U({},t,r)}]},yt="tabindex",wt=Ne.bind(0,""),tr=e=>{pe(Le(e),Rt(e)),xe(e)},fn=e=>{let t=ce(),{N:r,I:l}=t,n=Ve()[Yt],o=n&&n.T,{elements:i}=r(),{host:s,padding:a,viewport:c,content:d}=i,f=at(e),p=f?{}:e,{elements:u}=p,{host:v,padding:C,viewport:P,content:$}=u||{},g=f?e:p.target,w=dt(g,"textarea"),A=g.ownerDocument,z=A.documentElement,T=g===A.body,k=A.defaultView,H=sn.bind(0,[g]),F=Qr.bind(0,[g]),Z=Gt.bind(0,[g]),j=H.bind(0,wt,c),I=F.bind(0,wt,d),y=j(P),b=y===g,x=b&&T,h=!b&&I($),m=!b&&at(y)&&y===h,E=m&&!!Z(d),S=E?j():y,O=E?h:I(),L=x?z:m?S:y,N=w?H(wt,s,v):g,R=x?L:N,_=m?O:h,X=A.activeElement,q=!b&&k.top===k&&X===g,M={W:g,Z:R,J:L,K:!b&&F(wt,a,C),tt:_,nt:!b&&!l&&o&&o(t),ot:x?z:L,st:x?A:L,et:k,ct:A,rt:w,it:T,lt:f,ut:b,dt:m,ft:(te,fe)=>wl(L,b?we:Re,b?fe:te),_t:(te,fe,oe)=>De(L,b?we:Re,b?fe:te,oe)},V=ue(M).reduce((te,fe)=>{let oe=M[fe];return W(te,oe&&!Le(oe)?oe:!1)},[]),K=te=>te?zt(V,te)>-1:null,{W:J,Z:Y,K:ne,J:D,tt:Q,nt:ie}=M,de=[()=>{ae(Y,we),ae(Y,qt),ae(J,qt),T&&(ae(z,we),ae(z,qt))}],Fe=w&&K(Y),Te=w?J:Rt([Q,D,ne,Y,J].find(te=>K(te)===!1)),Je=x?J:Q||D;return[M,()=>{le(Y,we,b?"viewport":"host"),le(ne,Ut,""),le(Q,Xr,""),b||le(D,Re,"");let te=T&&!b?Ae(Le(g),Dr):be;if(Fe&&(yr(J,Y),W(de,()=>{yr(Y,J),xe(Y)})),pe(Je,Te),pe(Y,ne),pe(ne||Y,!b&&D),pe(D,Q),W(de,()=>{te(),ae(ne,Ut),ae(Q,Xr),ae(D,Nr),ae(D,Vr),ae(D,Re),K(Q)&&tr(Q),K(D)&&tr(D),K(ne)&&tr(ne)}),l&&!b&&(De(D,Re,jr,!0),W(de,ae.bind(0,D,Re))),ie&&(Ol(D,ie),W(de,xe.bind(0,ie))),q){let fe=le(D,yt);le(D,yt,"-1"),D.focus();let oe=()=>fe?le(D,yt,fe):ae(D,yt),je=G(A,"pointerdown keydown",()=>{oe(),je()});W(de,[oe,je])}else X&&X.focus&&X.focus();Te=0},Se.bind(0,de)]},pn=(e,t)=>{let{tt:r}=e,[l]=t;return n=>{let{V:o}=ce(),{ht:i}=l(),{vt:s}=n,a=(r||!o)&&s;return a&&re(r,{height:i?"":"100%"}),{gt:a,wt:a}}},bn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,ut:s}=e,[a,c]=he({u:zl,o:Pr()},Pr.bind(0,n,"padding",""));return(d,f,p)=>{let[u,v]=c(p),{I:C,V:P}=ce(),{bt:$}=r(),{gt:g,wt:w,yt:A}=d,[z,T]=f("paddingAbsolute");(g||v||!P&&w)&&([u,v]=a(p));let k=!s&&(T||A||v);if(k){let H=!z||!o&&!C,F=u.r+u.l,Z=u.t+u.b,j={marginRight:H&&!$?-F:0,marginBottom:H?-Z:0,marginLeft:H&&$?-F:0,top:H?-u.t:0,right:H?$?-u.r:"auto":0,left:H?$?"auto":-u.l:0,width:H?`calc(100% + ${F}px)`:""},I={paddingTop:H?u.t:0,paddingRight:H?u.r:0,paddingBottom:H?u.b:0,paddingLeft:H?u.l:0};re(o||i,j),re(i,I),l({K:u,St:!H,P:o?I:U({},j,I)})}return{xt:k}}},{max:rr}=Math,Me=rr.bind(0,0),ll="visible",nl="hidden",vn=42,St={u:Er,o:{w:0,h:0}},hn={u:$r,o:{x:nl,y:nl}},gn=(e,t)=>{let r=window.devicePixelRatio%1!==0?1:0,l={w:Me(e.w-t.w),h:Me(e.h-t.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},xt=e=>e.indexOf(ll)===0,mn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,nt:s,ut:a,_t:c,it:d,et:f}=e,{k:p,V:u,I:v,A:C}=ce(),P=Ve()[Yt],$=!a&&!v&&(C.x||C.y),g=d&&a,[w,A]=he(St,ht.bind(0,i)),[z,T]=he(St,vt.bind(0,i)),[k,H]=he(St),[F,Z]=he(St),[j]=he(hn),I=(E,S)=>{if(re(i,{height:""}),S){let{St:O,K:L}=r(),{$t:N,D:R}=E,_=ht(n),X=bt(n),q=re(i,"boxSizing")==="content-box",M=O||q?L.b+L.t:0,V=!(C.x&&q);re(i,{height:X.h+_.h+(N.x&&V?R.x:0)-M})}},y=(E,S)=>{let O=!v&&!E?vn:0,L=(J,Y,ne)=>{let D=re(i,J),Q=(S?S[J]:D)==="scroll";return[D,Q,Q&&!v?Y?O:ne:0,Y&&!!O]},[N,R,_,X]=L("overflowX",C.x,p.x),[q,M,V,K]=L("overflowY",C.y,p.y);return{Ct:{x:N,y:q},$t:{x:R,y:M},D:{x:_,y:V},M:{x:X,y:K}}},b=(E,S,O,L)=>{let N=(M,V)=>{let K=xt(M),J=V&&K&&M.replace(`${ll}-`,"")||"";return[V&&!K?M:"",xt(J)?"hidden":J]},[R,_]=N(O.x,S.x),[X,q]=N(O.y,S.y);return L.overflowX=_&&X?_:R,L.overflowY=q&&R?q:X,y(E,L)},x=(E,S,O,L)=>{let{D:N,M:R}=E,{x:_,y:X}=R,{x:q,y:M}=N,{P:V}=r(),K=S?"marginLeft":"marginRight",J=S?"paddingLeft":"paddingRight",Y=V[K],ne=V.marginBottom,D=V[J],Q=V.paddingBottom;L.width=`calc(100% + ${M+-1*Y}px)`,L[K]=-M+Y,L.marginBottom=-q+ne,O&&(L[J]=D+(X?M:0),L.paddingBottom=Q+(_?q:0))},[h,m]=P?P.H($,u,i,s,r,y,x):[()=>$,()=>[be]];return(E,S,O)=>{let{gt:L,Ot:N,wt:R,xt:_,vt:X,yt:q}=E,{ht:M,bt:V}=r(),[K,J]=S("showNativeOverlaidScrollbars"),[Y,ne]=S("overflow"),D=K&&C.x&&C.y,Q=!a&&!u&&(L||R||N||J||X),ie=xt(Y.x),de=xt(Y.y),Fe=ie||de,Te=A(O),Je=T(O),te=H(O),fe=Z(O),oe;if(J&&v&&c(jr,Dl,!D),Q&&(oe=y(D),I(oe,M)),L||_||R||q||J){Fe&&c(Ke,Ue,!1);let[Pe,ze]=m(D,V,oe),[ve,nt]=Te=w(O),[He,Fn]=Je=z(O),fr=bt(i),pr=He,br=fr;Pe(),(Fn||nt||J)&&ze&&!D&&h(ze,He,ve,V)&&(br=bt(i),pr=vt(i));let jn={w:Me(rr(He.w,pr.w)+ve.w),h:Me(rr(He.h,pr.h)+ve.h)},gl={w:Me((g?f.innerWidth:br.w+Me(fr.w-He.w))+ve.w),h:Me((g?f.innerHeight+ve.h:br.h+Me(fr.h-He.h))+ve.h)};fe=F(gl),te=k(gn(jn,gl),O)}let[je,lt]=fe,[Ye,Ze]=te,[or,ar]=Je,[sr,cr]=Te,Ce={x:Ye.w>0,y:Ye.h>0},Et=ie&&de&&(Ce.x||Ce.y)||ie&&Ce.x&&!Ce.y||de&&Ce.y&&!Ce.x;if(_||q||cr||ar||lt||Ze||ne||J||Q){let Pe={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},ze=b(D,Ce,Y,Pe),ve=h(ze,or,sr,V);a||x(ze,V,ve,Pe),Q&&I(ze,M),a?(le(n,Nr,Pe.overflowX),le(n,Vr,Pe.overflowY)):re(i,Pe)}De(n,we,Ue,Et),De(o,Ut,Nl,Et),a||De(i,Re,Ke,Fe);let[dr,ur]=j(y(D).Ct);return l({Ct:dr,zt:{x:je.w,y:je.h},Tt:{x:Ye.w,y:Ye.h},Et:Ce}),{It:ur,At:lt,Lt:Ze}}},il=(e,t,r)=>{let l={},n=t||{},o=ue(e).concat(ue(n));return B(o,i=>{let s=e[i],a=n[i];l[i]=!!(r||s||a)}),l},yn=(e,t)=>{let{W:r,J:l,_t:n,ut:o}=e,{I:i,A:s,V:a}=ce(),c=!i&&(s.x||s.y),d=[pn(e,t),bn(e,t),mn(e,t)];return(f,p,u)=>{let v=il(U({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},p),{},u),C=c||!a,P=C&&ye(l),$=C&&$e(l);n("",mt,!0);let g=v;return B(d,w=>{g=il(g,w(g,f,!!u)||{},u)}),ye(l,P),$e(l,$),n("",mt),o||(ye(r,0),$e(r,0)),g}},wn=(e,t,r)=>{let l,n=!1,o=()=>{n=!0},i=s=>{if(r){let a=r.reduce((c,d)=>{if(d){let[f,p]=d,u=p&&f&&(s?s(f):mr(f,e));u&&u.length&&p&&ke(p)&&W(c,[u,p.trim()],!0)}return c},[]);B(a,c=>B(c[0],d=>{let f=c[1],p=l.get(d)||[];if(e.contains(d)){let u=G(d,f,v=>{n?(u(),l.delete(d)):t(v)});l.set(d,W(p,u))}else Se(p),l.delete(d)}))}};return r&&(l=new WeakMap,i()),[o,i]},ol=(e,t,r,l)=>{let n=!1,{Ht:o,Pt:i,Dt:s,Mt:a,Rt:c,kt:d}=l||{},f=Vt(()=>{n&&r(!0)},{v:33,g:99}),[p,u]=wn(e,f,s),v=o||[],C=i||[],P=v.concat(C),$=(w,A)=>{let z=c||be,T=d||be,k=new Set,H=new Set,F=!1,Z=!1;if(B(w,j=>{let{attributeName:I,target:y,type:b,oldValue:x,addedNodes:h,removedNodes:m}=j,E=b==="attributes",S=b==="childList",O=e===y,L=E&&ke(I)?le(y,I):0,N=L!==0&&x!==L,R=zt(C,I)>-1&&N;if(t&&(S||!O)){let _=!E,X=E&&N,q=X&&a&&dt(y,a),M=(q?!z(y,I,x,L):_||X)&&!T(j,!!q,e,l);B(h,V=>k.add(V)),B(m,V=>k.add(V)),Z=Z||M}!t&&O&&N&&!z(y,I,x,L)&&(H.add(I),F=F||R)}),k.size>0&&u(j=>Be(k).reduce((I,y)=>(W(I,mr(j,y)),dt(y,j)?W(I,y):I),[])),t)return!A&&Z&&r(!1),[!1];if(H.size>0||F){let j=[Be(H),F];return!A&&r.apply(0,j),j}},g=new Al(w=>$(w));return g.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:t,childList:t,characterData:t}),n=!0,[()=>{n&&(p(),g.disconnect(),n=!1)},()=>{if(n){f.m();let w=g.takeRecords();return!Ht(w)&&$(w,!0)}}]},Ot=3333333,Ct=e=>e&&(e.height||e.width),al=(e,t,r)=>{let{Bt:l=!1,Vt:n=!1}=r||{},o=Ve()[tn],{B:i}=ce(),s=wr(`<div class="${Kt}"><div class="${Fl}"></div></div>`)[0],a=s.firstChild,c=tt.bind(0,e),[d]=he({o:void 0,_:!0,u:(v,C)=>!(!v||!Ct(v)&&Ct(C))}),f=v=>{let C=me(v)&&v.length>0&&Qe(v[0]),P=!C&&At(v[0]),$=!1,g=!1,w=!0;if(C){let[A,,z]=d(v.pop().contentRect),T=Ct(A),k=Ct(z);$=!z||!T,g=!k&&T,w=!$}else P?[,w]=v:g=v===!0;if(l&&w){let A=P?v[0]:tt(s);ye(s,A?i.n?-Ot:i.i?0:Ot:Ot),$e(s,Ot)}$||t({gt:!P,Yt:P?v:void 0,Vt:!!g})},p=[],u=n?f:!1;return[()=>{Se(p),xe(s)},()=>{if(qe){let v=new qe(f);v.observe(a),W(p,()=>{v.disconnect()})}else if(o){let[v,C]=o.O(a,f,n);u=v,W(p,C)}if(l){let[v]=he({o:void 0},c);W(p,G(s,"scroll",C=>{let P=v(),[$,g,w]=P;g&&(Nt(a,"ltr rtl"),$?Ae(a,"rtl"):Ae(a,"ltr"),f([!!$,g,w])),Ir(C)}))}u&&(Ae(s,Vl),W(p,G(s,"animationstart",u,{C:!!qe}))),(qe||o)&&pe(e,s)}]},Sn=e=>e.h===0||e.isIntersecting||e.intersectionRatio>0,xn=(e,t)=>{let r,l=Ne(jl),n=[],[o]=he({o:!1}),i=(a,c)=>{if(a){let d=o(Sn(a)),[,f]=d;if(f)return!c&&t(d),[d]}},s=(a,c)=>{if(a&&a.length>0)return i(a.pop(),c)};return[()=>{Se(n),xe(l)},()=>{if(Sr)r=new Sr(a=>s(a),{root:e}),r.observe(l),W(n,()=>{r.disconnect()});else{let a=()=>{let f=rt(l);i(f)},[c,d]=al(l,a);W(n,c),d(),a()}pe(e,l)},()=>{if(r)return s(r.takeRecords(),!0)}]},sl=`[${we}]`,On=`[${Re}]`,lr=["tabindex"],cl=["wrap","cols","rows"],nr=["id","class","style","open"],Cn=(e,t,r)=>{let l,n,o,{Z:i,J:s,tt:a,rt:c,ut:d,ft:f,_t:p}=e,{V:u}=ce(),[v]=he({u:Er,o:{w:0,h:0}},()=>{let b=f(Ke,Ue),x=f(Wt,""),h=x&&ye(s),m=x&&$e(s);p(Ke,Ue),p(Wt,""),p("",mt,!0);let E=vt(a),S=vt(s),O=ht(s);return p(Ke,Ue,b),p(Wt,"",x),p("",mt),ye(s,h),$e(s,m),{w:S.w+E.w+O.w,h:S.h+E.h+O.h}}),C=c?cl:nr.concat(cl),P=Vt(r,{v:()=>l,g:()=>n,p(b,x){let[h]=b,[m]=x;return[ue(h).concat(ue(m)).reduce((E,S)=>(E[S]=h[S]||m[S],E),{})]}}),$=b=>{B(b||lr,x=>{if(zt(lr,x)>-1){let h=le(i,x);ke(h)?le(s,x,h):ae(s,x)}})},g=(b,x)=>{let[h,m]=b,E={vt:m};return t({ht:h}),!x&&r(E),E},w=({gt:b,Yt:x,Vt:h})=>{let m=!b||h?r:P,E=!1;if(x){let[S,O]=x;E=O,t({bt:S})}m({gt:b,yt:E})},A=(b,x)=>{let[,h]=v(),m={wt:h};return h&&!x&&(b?r:P)(m),m},z=(b,x,h)=>{let m={Ot:x};return x?!h&&P(m):d||$(b),m},[T,k,H]=a||!u?xn(i,g):[be,be,be],[F,Z]=d?[be,be]:al(i,w,{Vt:!0,Bt:!0}),[j,I]=ol(i,!1,z,{Pt:nr,Ht:nr.concat(lr)}),y=d&&qe&&new qe(w.bind(0,{gt:!0}));return y&&y.observe(i),$(),[()=>{T(),F(),o&&o[0](),y&&y.disconnect(),j()},()=>{Z(),k()},()=>{let b={},x=I(),h=H(),m=o&&o[1]();return x&&U(b,z.apply(0,W(x,!0))),h&&U(b,g.apply(0,W(h,!0))),m&&U(b,A.apply(0,W(m,!0))),b},b=>{let[x]=b("update.ignoreMutation"),[h,m]=b("update.attributes"),[E,S]=b("update.elementEvents"),[O,L]=b("update.debounce"),N=S||m,R=_=>ge(x)&&x(_);if(N&&(o&&(o[1](),o[0]()),o=ol(a||s,!0,A,{Ht:C.concat(h||[]),Dt:E,Mt:sl,kt:(_,X)=>{let{target:q,attributeName:M}=_;return(!X&&M&&!d?xl(q,sl,On):!1)||!!Xe(q,`.${se}`)||!!R(_)}})),L)if(P.m(),me(O)){let _=O[0],X=O[1];l=Ie(_)&&_,n=Ie(X)&&X}else Ie(O)?(l=O,n=!1):(l=!1,n=!1)}]},dl={x:0,y:0},En=e=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:dl,Tt:dl,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:tt(e.Z)}),$n=(e,t)=>{let r=er(t,{}),[l,n,o]=Xt(),[i,s,a]=fn(e),c=rl(En(i)),[d,f]=c,p=yn(i,c),u=(w,A,z)=>{let T=ue(w).some(k=>w[k])||!It(A)||z;return T&&o("u",[w,A,z]),T},[v,C,P,$]=Cn(i,f,w=>u(p(r,w),{},!1)),g=d.bind(0);return g.jt=w=>l("u",w),g.Nt=()=>{let{W:w,J:A}=i,z=ye(w),T=$e(w);C(),s(),ye(A,z),$e(A,T)},g.qt=i,[(w,A)=>{let z=er(t,w,A);return $(z),u(p(z,P(),A),w,!!A)},g,()=>{n(),v(),a()}]},{round:ul}=Math,Ln=e=>{let{width:t,height:r}=Oe(e),{w:l,h:n}=rt(e);return{x:ul(t)/l||1,y:ul(r)/n||1}},An=(e,t,r)=>{let l=t.scrollbars,{button:n,isPrimary:o,pointerType:i}=e,{pointers:s}=l;return n===0&&o&&l[r?"dragScroll":"clickScroll"]&&(s||[]).includes(i)},Pn=(e,t)=>G(e,"mousedown",G.bind(0,t,"click",Ir,{C:!0,$:!0}),{$:!0}),fl="pointerup pointerleave pointercancel lostpointercapture",zn=(e,t,r,l,n,o,i)=>{let{B:s}=ce(),{Ft:a,Gt:c,Xt:d}=l,f=`scroll${i?"Left":"Top"}`,p=`client${i?"X":"Y"}`,u=i?"width":"height",v=i?"left":"top",C=i?"w":"h",P=i?"x":"y",$=(g,w)=>A=>{let{Tt:z}=o(),T=rt(c)[C]-rt(a)[C],k=w*A/T*z[P],H=tt(d)&&i?s.n||s.i?1:-1:1;n[f]=g+k*H};return G(c,"pointerdown",g=>{let w=Xe(g.target,`.${Jt}`)===a,A=w?a:c;if(De(t,we,Fr,!0),An(g,e,w)){let z=!w&&g.shiftKey,T=()=>Oe(a),k=()=>Oe(c),H=(S,O)=>(S||T())[v]-(O||k())[v],F=$(n[f]||0,1/Ln(n)[P]),Z=g[p],j=T(),I=k(),y=j[u],b=H(j,I)+y/2,x=Z-I[v],h=w?0:x-b,m=S=>{Se(E),A.releasePointerCapture(S.pointerId)},E=[De.bind(0,t,we,Fr),G(r,fl,m),G(r,"selectstart",S=>kr(S),{S:!1}),G(c,fl,m),G(c,"pointermove",S=>{let O=S[p]-Z;(w||z)&&F(h+O)})];if(z)F(h);else if(!w){let S=Ve()[rn];S&&W(E,S.O(F,H,h,y,x))}A.setPointerCapture(g.pointerId)}})},Hn=(e,t)=>(r,l,n,o,i,s)=>{let{Xt:a}=r,[c,d]=We(333),f=!!i.scrollBy,p=!0;return Se.bind(0,[G(a,"pointerenter",()=>{l(Ur,!0)}),G(a,"pointerleave pointercancel",()=>{l(Ur)}),G(a,"wheel",u=>{let{deltaX:v,deltaY:C,deltaMode:P}=u;f&&p&&P===0&&Le(a)===o&&i.scrollBy({left:v,top:C,behavior:"smooth"}),p=!1,l(Yr,!0),c(()=>{p=!0,l(Yr)}),kr(u)},{S:!1,$:!0}),Pn(a,n),zn(e,o,n,r,i,t,s),d])},{min:ir,max:pl,abs:In,round:kn}=Math,bl=(e,t,r,l)=>{if(l){let s=r?"x":"y",{Tt:a,zt:c}=l,d=c[s],f=a[s];return pl(0,ir(1,d/(d+f)))}let n=r?"width":"height",o=Oe(e)[n],i=Oe(t)[n];return pl(0,ir(1,o/i))},Rn=(e,t,r,l,n,o)=>{let{B:i}=ce(),s=o?"x":"y",a=o?"Left":"Top",{Tt:c}=l,d=kn(c[s]),f=In(r[`scroll${a}`]),p=o&&n,u=i.i?f:d-f,v=ir(1,(p?u:f)/d),C=bl(e,t,o);return 1/C*(1-C)*v},Mn=(e,t,r)=>{let{N:l,L:n}=ce(),{scrollbars:o}=l(),{slot:i}=o,{ct:s,W:a,Z:c,J:d,lt:f,ot:p,it:u,ut:v}=t,{scrollbars:C}=f?{}:e,{slot:P}=C||{},$=Qr([a,c,d],()=>v&&u?a:c,i,P),g=(h,m,E)=>{let S=E?Ae:Nt;B(h,O=>{S(O.Xt,m)})},w=(h,m)=>{B(h,E=>{let[S,O]=m(E);re(S,O)})},A=(h,m,E)=>{w(h,S=>{let{Ft:O,Gt:L}=S;return[O,{[E?"width":"height"]:`${(100*bl(O,L,E,m)).toFixed(3)}%`}]})},z=(h,m,E)=>{let S=E?"X":"Y";w(h,O=>{let{Ft:L,Gt:N,Xt:R}=O,_=Rn(L,N,p,m,tt(R),E);return[L,{transform:_===_?`translate${S}(${(100*_).toFixed(3)}%)`:""}]})},T=[],k=[],H=[],F=(h,m,E)=>{let S=At(E),O=S?E:!0,L=S?!E:!0;O&&g(k,h,m),L&&g(H,h,m)},Z=h=>{A(k,h,!0),A(H,h)},j=h=>{z(k,h,!0),z(H,h)},I=h=>{let m=h?Ul:Kl,E=h?k:H,S=Ht(E)?Wr:"",O=Ne(`${se} ${m} ${S}`),L=Ne(qr),N=Ne(Jt),R={Xt:O,Gt:L,Ft:N};return n||Ae(O,Xl),pe(O,L),pe(L,N),W(E,R),W(T,[xe.bind(0,O),r(R,F,s,c,p,h)]),R},y=I.bind(0,!0),b=I.bind(0,!1),x=()=>{pe($,k[0].Xt),pe($,H[0].Xt),ut(()=>{F(Wr)},300)};return y(),b(),[{Ut:Z,Wt:j,Zt:F,Jt:{Kt:k,Qt:y,tn:w.bind(0,k)},nn:{Kt:H,Qt:b,tn:w.bind(0,H)}},x,Se.bind(0,T)]},_n=(e,t,r,l)=>{let n,o,i,s,a,c=0,d=rl({}),[f]=d,[p,u]=We(),[v,C]=We(),[P,$]=We(100),[g,w]=We(100),[A,z]=We(()=>c),[T,k,H]=Mn(e,r.qt,Hn(t,r)),{Z:F,J:Z,ot:j,st:I,ut:y,it:b}=r.qt,{Jt:x,nn:h,Zt:m,Ut:E,Wt:S}=T,{tn:O}=x,{tn:L}=h,N=M=>{let{Xt:V}=M,K=y&&!b&&Le(V)===Z&&V;return[K,{transform:K?`translate(${ye(j)}px, ${$e(j)}px)`:""}]},R=(M,V)=>{if(z(),M)m(Jr);else{let K=()=>m(Jr,!0);c>0&&!V?A(K):K()}},_=()=>{s=o,s&&R(!0)},X=[$,z,w,C,u,H,G(F,"pointerover",_,{C:!0}),G(F,"pointerenter",_),G(F,"pointerleave",()=>{s=!1,o&&R(!1)}),G(F,"pointermove",()=>{n&&p(()=>{$(),R(!0),g(()=>{n&&R(!1)})})}),G(I,"scroll",M=>{v(()=>{S(r()),i&&R(!0),P(()=>{i&&!s&&R(!1)})}),l(M),y&&O(N),y&&L(N)})],q=f.bind(0);return q.qt=T,q.Nt=k,[(M,V,K)=>{let{At:J,Lt:Y,It:ne,yt:D}=K,{A:Q}=ce(),ie=er(t,M,V),de=r(),{Tt:Fe,Ct:Te,bt:Je}=de,[te,fe]=ie("showNativeOverlaidScrollbars"),[oe,je]=ie("scrollbars.theme"),[lt,Ye]=ie("scrollbars.visibility"),[Ze,or]=ie("scrollbars.autoHide"),[ar]=ie("scrollbars.autoHideDelay"),[sr,cr]=ie("scrollbars.dragScroll"),[Ce,Et]=ie("scrollbars.clickScroll"),dr=J||Y||D,ur=ne||Ye,Pe=te&&Q.x&&Q.y,ze=(ve,nt)=>{let He=lt==="visible"||lt==="auto"&&ve==="scroll";return m(Jl,He,nt),He};if(c=ar,fe&&m(ql,Pe),je&&(m(a),m(oe,!0),a=oe),or&&(n=Ze==="move",o=Ze==="leave",i=Ze!=="never",R(!i,!0)),cr&&m(Gl,sr),Et&&m(Zl,Ce),ur){let ve=ze(Te.x,!0),nt=ze(Te.y,!1);m(Yl,!(ve&&nt))}dr&&(E(de),S(de),m(Kr,!Fe.x,!0),m(Kr,!Fe.y,!1),m(Wl,Je&&!b))},q,Se.bind(0,X)]},vl=(e,t,r)=>{ge(e)&&e(t||void 0,r||void 0)},_e=(e,t,r)=>{let{F:l,N:n,Y:o,j:i}=ce(),s=Ve(),a=at(e),c=a?e:e.target,d=el(c);if(t&&!d){let f=!1,p=y=>{let b=Ve()[en],x=b&&b.O;return x?x(y,!0):y},u=U({},l(),p(t)),[v,C,P]=Xt(r),[$,g,w]=$n(e,u),[A,z,T]=_n(e,u,g,y=>P("scroll",[I,y])),k=(y,b)=>$(y,!!b),H=k.bind(0,{},!0),F=o(H),Z=i(H),j=y=>{un(c),F(),Z(),T(),w(),f=!0,P("destroyed",[I,!!y]),C()},I={options(y,b){if(y){let x=b?l():{},h=_r(u,U(x,p(y)));It(h)||(U(u,h),k(h))}return U({},u)},on:v,off:(y,b)=>{y&&b&&C(y,b)},state(){let{zt:y,Tt:b,Ct:x,Et:h,K:m,St:E,bt:S}=g();return U({},{overflowEdge:y,overflowAmount:b,overflowStyle:x,hasOverflow:h,padding:m,paddingAbsolute:E,directionRTL:S,destroyed:f})},elements(){let{W:y,Z:b,K:x,J:h,tt:m,ot:E,st:S}=g.qt,{Jt:O,nn:L}=z.qt,N=_=>{let{Ft:X,Gt:q,Xt:M}=_;return{scrollbar:M,track:q,handle:X}},R=_=>{let{Kt:X,Qt:q}=_,M=N(X[0]);return U({},M,{clone:()=>{let V=N(q());return A({},!0,{}),V}})};return U({},{target:y,host:b,padding:x||h,viewport:h,content:m||h,scrollOffsetElement:E,scrollEventElement:S,scrollbarHorizontal:R(O),scrollbarVertical:R(L)})},update:y=>k({},y),destroy:j.bind(0)};return g.jt((y,b,x)=>{A(b,x,y)}),dn(c,I),B(ue(s),y=>vl(s[y],0,I)),cn(g.qt.it,n().cancel,!a&&e.cancel)?(j(!0),I):(g.Nt(),z.Nt(),P("initialized",[I]),g.jt((y,b,x)=>{let{gt:h,yt:m,vt:E,At:S,Lt:O,It:L,wt:N,Ot:R}=y;P("updated",[I,{updateHints:{sizeChanged:h,directionChanged:m,heightIntrinsicChanged:E,overflowEdgeChanged:S,overflowAmountChanged:O,overflowStyleChanged:L,contentMutation:N,hostMutation:R},changedOptions:b,force:x}])}),I.update(!0),I)}return d};_e.plugin=e=>{B(Ql(e),t=>vl(t,_e))},_e.valid=e=>{let t=e&&e.elements,r=ge(t)&&t();return Pt(r)&&!!el(r.target)},_e.env=()=>{let{k:e,A:t,I:r,B:l,V:n,L:o,X:i,U:s,N:a,q:c,F:d,G:f}=ce();return U({},{scrollbarsSize:e,scrollbarsOverlaid:t,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,staticDefaultInitialization:i,staticDefaultOptions:s,getDefaultInitialization:a,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:f})};var Tn=()=>{if(typeof window>"u"){let c=()=>{};return[c,c]}let e,t,r=window,l=typeof r.requestIdleCallback=="function",n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,s=l?r.cancelIdleCallback:o,a=()=>{s(e),o(t)};return[(c,d)=>{a(),e=i(l?()=>{a(),t=n(c)}:c,typeof d=="object"?d:{timeout:2233})},a]},Bn=e=>{let{options:t,events:r,defer:l}=e||{},[n,o]=(0,ee.useMemo)(Tn,[]),i=(0,ee.useRef)(null),s=(0,ee.useRef)(l),a=(0,ee.useRef)(t),c=(0,ee.useRef)(r);return(0,ee.useEffect)(()=>{s.current=l},[l]),(0,ee.useEffect)(()=>{let{current:d}=i;a.current=t,_e.valid(d)&&d.options(t||{},!0)},[t]),(0,ee.useEffect)(()=>{let{current:d}=i;c.current=r,_e.valid(d)&&d.on(r||{},!0)},[r]),(0,ee.useEffect)(()=>()=>{var d;o(),(d=i.current)==null||d.destroy()},[]),(0,ee.useMemo)(()=>[d=>{let f=i.current;if(_e.valid(f))return;let p=s.current,u=a.current||{},v=c.current||{},C=()=>i.current=_e(d,u,v);p?n(C,p):C()},()=>i.current],[])},Dn=(e,t)=>{let{element:r="div",options:l,events:n,defer:o,children:i,...s}=e,a=r,c=(0,ee.useRef)(null),d=(0,ee.useRef)(null),[f,p]=Bn({options:l,events:n,defer:o});return(0,ee.useEffect)(()=>{let{current:u}=c,{current:v}=d;return u&&v&&f({target:u,elements:{viewport:v,content:v}}),()=>{var C;return(C=p())==null?void 0:C.destroy()}},[f,r]),(0,ee.useImperativeHandle)(t,()=>({osInstance:p,getElement:()=>c.current}),[]),ee.createElement(a,{"data-overlayscrollbars-initialize":"",ref:c,...s},ee.createElement("div",{ref:d},i))},hl=(0,ee.forwardRef)(Dn),Nn=hl,Vn=hl}}]);