import{j as T,p as D,k as F}from"./singletons.84970af2.js";import{s as H,n as A}from"./scheduler.5f08d8ec.js";import{S as U,i as j,x as L,m as k,y as g,j as C,n as M,f as h,k as r,a as z,z as m}from"./index.81516ee7.js";function R(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const B=T("invalidate_all");function I(t){return F.apply_action(t)}function N(t){const e=JSON.parse(t);return e.data&&(e.data=D(e.data)),e}function _(t){return HTMLElement.prototype.cloneNode.call(t)}function G(t,e=()=>{}){const p=async({action:n,result:c,reset:l=!0,invalidateAll:a=!0})=>{c.type==="success"&&(l&&HTMLFormElement.prototype.reset.call(t),a&&await B()),(location.origin+location.pathname===n.origin+n.pathname||c.type==="redirect"||c.type==="error")&&I(c)};async function v(n){var w,E,x,y;if(((w=n.submitter)!=null&&w.hasAttribute("formmethod")?n.submitter.formMethod:_(t).method)!=="post")return;n.preventDefault();const l=new URL((E=n.submitter)!=null&&E.hasAttribute("formaction")?n.submitter.formAction:_(t).action),a=new FormData(t),i=(x=n.submitter)==null?void 0:x.getAttribute("name");i&&a.append(i,((y=n.submitter)==null?void 0:y.getAttribute("value"))??"");const o=new AbortController;let u=!1;const d=await e({action:l,cancel:()=>u=!0,controller:o,get data(){return a},formData:a,get form(){return t},formElement:t,submitter:n.submitter})??p;if(u)return;let f;try{const s=await fetch(l,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:a,signal:o.signal});f=N(await s.text()),f.type==="error"&&(f.status=s.status)}catch(s){if((s==null?void 0:s.name)==="AbortError")return;f={type:"error",error:s}}d({action:l,get data(){return a},formData:a,get form(){return t},formElement:t,update:s=>p({action:l,result:f,reset:s==null?void 0:s.reset,invalidateAll:s==null?void 0:s.invalidateAll}),result:f})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",v),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",v)}}}function O(t){let e,p,v,n,c,l,a,i,o,u;return{c(){e=L("svg"),p=L("title"),v=k("file_url [#1759]"),n=L("desc"),c=k("Created with Sketch."),l=L("defs"),a=L("g"),i=L("g"),o=L("g"),u=L("path"),this.h()},l(b){e=g(b,"svg",{xmlns:!0,"xmlns:xlink":!0,width:!0,height:!0,viewBox:!0,version:!0});var d=C(e);p=g(d,"title",{});var f=C(p);v=M(f,"file_url [#1759]"),f.forEach(h),n=g(d,"desc",{});var w=C(n);c=M(w,"Created with Sketch."),w.forEach(h),l=g(d,"defs",{});var E=C(l);E.forEach(h),a=g(d,"g",{id:!0,stroke:!0,"stroke-width":!0,fill:!0,"fill-rule":!0});var x=C(a);i=g(x,"g",{id:!0,transform:!0,fill:!0,class:!0});var y=C(i);o=g(y,"g",{id:!0,transform:!0});var s=C(o);u=g(s,"path",{d:!0,id:!0});var S=C(u);S.forEach(h),s.forEach(h),y.forEach(h),x.forEach(h),d.forEach(h),this.h()},h(){r(u,"d","M103.7248,1125.0442 L98.2748,1119.3112 C98.0858,1119.1132 97.8238,1119.0002 97.5498,1119.0002 L85.9998,1119.0002 C84.8958,1119.0002 83.9998,1119.8962 83.9998,1121.0002 L83.9998,1128.0002 C83.9998,1128.5522 84.4478,1129.0002 84.9998,1129.0002 C85.5528,1129.0002 85.9998,1128.5522 85.9998,1128.0002 L85.9998,1122.0002 C85.9998,1121.4482 86.4478,1121.0002 86.9998,1121.0002 L95.9998,1121.0002 L95.9998,1125.0002 C95.9998,1126.1052 96.8958,1127.0002 97.9998,1127.0002 L101.9998,1127.0002 L101.9998,1128.0002 C101.9998,1128.5522 102.4478,1129.0002 102.9998,1129.0002 C103.5528,1129.0002 103.9998,1128.5522 103.9998,1128.0002 L103.9998,1125.7332 C103.9998,1125.4772 103.9018,1125.2302 103.7248,1125.0442 M94.9998,1134.0002 C94.9998,1133.4482 94.5528,1133.0002 93.9998,1133.0002 L92.9998,1133.0002 L92.9998,1135.0002 L93.9998,1135.0002 C94.5528,1135.0002 94.9998,1134.5532 94.9998,1134.0002 M95.7248,1136.4492 L96.3558,1137.7122 C96.6518,1138.3042 96.2218,1139.0002 95.5598,1139.0002 L95.5498,1139.0002 C95.2128,1139.0002 94.9048,1138.8102 94.7538,1138.5082 L93.9998,1137.0002 L92.9998,1137.0002 L92.9998,1138.1102 C92.9998,1138.6022 92.6018,1139.0002 92.1098,1139.0002 L91.8898,1139.0002 C91.3988,1139.0002 90.9998,1138.6022 90.9998,1138.1102 L90.9998,1131.8902 C90.9998,1131.3992 91.3988,1131.0002 91.8898,1131.0002 L93.8528,1131.0002 C95.4148,1131.0002 96.8238,1132.1302 96.9838,1133.6842 C97.1018,1134.8262 96.5738,1135.8502 95.7248,1136.4492 M102.9998,1137.0002 L100.4998,1137.0002 C100.2238,1137.0002 99.9998,1136.7762 99.9998,1136.5002 L99.9998,1132.0002 C99.9998,1131.4482 99.5528,1131.0002 98.9998,1131.0002 C98.4478,1131.0002 97.9998,1131.4482 97.9998,1132.0002 L97.9998,1137.0002 L97.9998,1138.0002 C97.9998,1138.5522 98.4478,1139.0002 98.9998,1139.0002 L99.9998,1139.0002 L102.9998,1139.0002 C103.5528,1139.0002 103.9998,1138.5522 103.9998,1138.0002 C103.9998,1137.4482 103.5528,1137.0002 102.9998,1137.0002 M89.9998,1131.8902 L89.9998,1136.0002 C89.9998,1137.7112 88.5688,1139.0872 86.8388,1138.9962 C85.2168,1138.9112 83.9998,1137.4552 83.9998,1135.8302 L83.9998,1131.8902 C83.9998,1131.3992 84.3988,1131.0002 84.8898,1131.0002 L85.1098,1131.0002 C85.6018,1131.0002 85.9998,1131.3992 85.9998,1131.8902 L85.9998,1136.0002 C85.9998,1136.5522 86.4478,1137.0002 86.9998,1137.0002 C87.5528,1137.0002 87.9998,1136.5522 87.9998,1136.0002 L87.9998,1131.8902 C87.9998,1131.3992 88.3988,1131.0002 88.8898,1131.0002 L89.1098,1131.0002 C89.6018,1131.0002 89.9998,1131.3992 89.9998,1131.8902"),r(u,"id","file_url-[#1759]"),r(o,"id","icons"),r(o,"transform","translate(56.000000, 160.000000)"),r(i,"id","url"),r(i,"transform","translate(-140.000000, -1279.000000)"),r(i,"fill","#000000"),r(i,"class","svelte-uhbi5t"),r(a,"id","Page-1"),r(a,"stroke","none"),r(a,"stroke-width","1"),r(a,"fill","none"),r(a,"fill-rule","evenodd"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),r(e,"width","16px"),r(e,"height","16px"),r(e,"viewBox","0 0 20 20"),r(e,"version","1.1")},m(b,d){z(b,e,d),m(e,p),m(p,v),m(e,n),m(n,c),m(e,l),m(e,a),m(a,i),m(i,o),m(o,u)},p:A,i:A,o:A,d(b){b&&h(e)}}}class K extends U{constructor(e){super(),j(this,e,null,O,H,{})}}export{K as U,R as a,G as e};
