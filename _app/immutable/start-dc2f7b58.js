import{S as ht,i as _t,s as mt,a as gt,e as D,c as wt,b as M,g as ee,t as C,d as te,f as V,h as F,j as yt,o as je,k as bt,l as vt,m as Et,n as Pe,p as X,q as kt,r as St,u as Rt,v as le,w as G,x as J,y as he,z,A as W,B as be}from"./chunks/index-fa6518fa.js";import{S as lt,a as ct,I as K,g as Qe,f as xe,b as Oe,c as ve,s as Z,i as et,d as ue,e as ne,P as tt,h as Lt,j as It,k as At}from"./chunks/singletons-6f0278d5.js";function Pt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Ot(a){return a.split("%25").map(decodeURI).join("%25")}function Nt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ut=["href","pathname","search","searchParams","toString","toJSON"];function $t(a,e){const n=new URL(a);for(const r of Ut){let s=n[r];Object.defineProperty(n,r,{get(){return e(),s},enumerable:!0,configurable:!0})}return Tt(n),n}function Tt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const jt="/__data.json";function Dt(a){return a.replace(/\/$/,"")+jt}function ft(a){try{return JSON.parse(sessionStorage[a])}catch{}}function nt(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Ct(...a){let e=5381;for(const n of a)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=r.length;for(;s;)e=e*33^r[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&de.delete(Ce(a)),Ee(a,e));const de=new Map;function Vt(a,e){const n=Ce(a,e),r=document.querySelector(n);if(r!=null&&r.textContent){const{body:s,...f}=JSON.parse(r.textContent),t=r.getAttribute("data-ttl");return t&&de.set(n,{body:s,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,f))}return Ee(a,e)}function qt(a,e,n){if(de.size>0){const r=Ce(a,n),s=de.get(r);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);de.delete(r)}}return Ee(e,n)}function Ce(a,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const s=[];e.headers&&s.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&s.push(e.body),r+=`[data-hash="${Ct(...s)}"]`}return r}const Bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ft(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Kt(a).map(r=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const t=r.split(/\[(.+?)\](?!\])/);return"/"+t.map((d,h)=>{if(h%2){if(d.startsWith("x+"))return Ne(String.fromCharCode(parseInt(d.slice(2),16)));if(d.startsWith("u+"))return Ne(String.fromCharCode(...d.slice(2).split("-").map(P=>parseInt(P,16))));const m=Bt.exec(d);if(!m)throw new Error(`Invalid param: ${d}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,O,R,q]=m;return e.push({name:R,matcher:q,optional:!!k,rest:!!O,chained:O?h===1&&t[0]==="":!1}),O?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Ne(d)}).join("")}).join("")}/?$`),params:e}}function Ht(a){return!/^\([^)]+\)$/.test(a)}function Kt(a){return a.slice(1).split("/").filter(Ht)}function Mt(a,e,n){const r={},s=a.slice(1);let f=0;for(let t=0;t<e.length;t+=1){const l=e[t],d=s[t-f];if(l.chained&&l.rest&&f){r[l.name]=s.slice(t-f,t+1).filter(h=>h).join("/"),f=0;continue}if(d===void 0){l.rest&&(r[l.name]="");continue}if(!l.matcher||n[l.matcher](d)){r[l.name]=d;continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return r}function Ne(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Gt(a,e,n,r){const s=new Set(e);return Object.entries(n).map(([l,[d,h,m]])=>{const{pattern:k,params:O}=Ft(l),R={id:l,exec:q=>{const P=k.exec(q);if(P)return Mt(P,O,r)},errors:[1,...m||[]].map(q=>a[q]),layouts:[0,...h||[]].map(t),leaf:f(d)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function f(l){const d=l<0;return d&&(l=~l),[d,a[l]]}function t(l){return l===void 0?l:[s.has(l),a[l]]}}function Jt(a){let e,n,r;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=G(s,f(a)),a[15](e)),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&z(e,t,l),M(t,n,l),r=!0},p(t,l){const d={};if(l&8&&(d.data=t[3]),l&4&&(d.form=t[2]),s!==(s=t[1][0])){if(e){ee();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),te()}s?(e=G(s,f(t)),t[15](e),J(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){r||(e&&V(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[15](null),t&&F(n),e&&W(e,t)}}}function zt(a){let e,n,r;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[Zt]},$$scope:{ctx:t}}}}return s&&(e=G(s,f(a)),a[14](e)),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&z(e,t,l),M(t,n,l),r=!0},p(t,l){const d={};if(l&8&&(d.data=t[3]),l&65591&&(d.$$scope={dirty:l,ctx:t}),s!==(s=t[1][0])){if(e){ee();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),te()}s?(e=G(s,f(t)),t[14](e),J(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){r||(e&&V(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[14](null),t&&F(n),e&&W(e,t)}}}function Wt(a){let e,n,r;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=G(s,f(a)),a[13](e)),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&z(e,t,l),M(t,n,l),r=!0},p(t,l){const d={};if(l&16&&(d.data=t[4]),l&4&&(d.form=t[2]),s!==(s=t[1][1])){if(e){ee();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),te()}s?(e=G(s,f(t)),t[13](e),J(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){r||(e&&V(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[13](null),t&&F(n),e&&W(e,t)}}}function Yt(a){let e,n,r;var s=a[1][1];function f(t){return{props:{data:t[4],$$slots:{default:[Xt]},$$scope:{ctx:t}}}}return s&&(e=G(s,f(a)),a[12](e)),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&z(e,t,l),M(t,n,l),r=!0},p(t,l){const d={};if(l&16&&(d.data=t[4]),l&65575&&(d.$$scope={dirty:l,ctx:t}),s!==(s=t[1][1])){if(e){ee();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),te()}s?(e=G(s,f(t)),t[12](e),J(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){r||(e&&V(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[12](null),t&&F(n),e&&W(e,t)}}}function Xt(a){let e,n,r;var s=a[1][2];function f(t){return{props:{data:t[5],form:t[2]}}}return s&&(e=G(s,f(a)),a[11](e)),{c(){e&&J(e.$$.fragment),n=D()},l(t){e&&he(e.$$.fragment,t),n=D()},m(t,l){e&&z(e,t,l),M(t,n,l),r=!0},p(t,l){const d={};if(l&32&&(d.data=t[5]),l&4&&(d.form=t[2]),s!==(s=t[1][2])){if(e){ee();const h=e;C(h.$$.fragment,1,0,()=>{W(h,1)}),te()}s?(e=G(s,f(t)),t[11](e),J(e.$$.fragment),V(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else s&&e.$set(d)},i(t){r||(e&&V(e.$$.fragment,t),r=!0)},o(t){e&&C(e.$$.fragment,t),r=!1},d(t){a[11](null),t&&F(n),e&&W(e,t)}}}function Zt(a){let e,n,r,s;const f=[Yt,Wt],t=[];function l(d,h){return d[1][2]?0:1}return e=l(a),n=t[e]=f[e](a),{c(){n.c(),r=D()},l(d){n.l(d),r=D()},m(d,h){t[e].m(d,h),M(d,r,h),s=!0},p(d,h){let m=e;e=l(d),e===m?t[e].p(d,h):(ee(),C(t[m],1,1,()=>{t[m]=null}),te(),n=t[e],n?n.p(d,h):(n=t[e]=f[e](d),n.c()),V(n,1),n.m(r.parentNode,r))},i(d){s||(V(n),s=!0)},o(d){C(n),s=!1},d(d){t[e].d(d),d&&F(r)}}}function at(a){let e,n=a[7]&&rt(a);return{c(){e=bt("div"),n&&n.c(),this.h()},l(r){e=vt(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Et(e);n&&n.l(s),s.forEach(F),this.h()},h(){Pe(e,"id","svelte-announcer"),Pe(e,"aria-live","assertive"),Pe(e,"aria-atomic","true"),X(e,"position","absolute"),X(e,"left","0"),X(e,"top","0"),X(e,"clip","rect(0 0 0 0)"),X(e,"clip-path","inset(50%)"),X(e,"overflow","hidden"),X(e,"white-space","nowrap"),X(e,"width","1px"),X(e,"height","1px")},m(r,s){M(r,e,s),n&&n.m(e,null)},p(r,s){r[7]?n?n.p(r,s):(n=rt(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&F(e),n&&n.d()}}}function rt(a){let e;return{c(){e=kt(a[8])},l(n){e=St(n,a[8])},m(n,r){M(n,e,r)},p(n,r){r&256&&Rt(e,n[8])},d(n){n&&F(e)}}}function Qt(a){let e,n,r,s,f;const t=[zt,Jt],l=[];function d(m,k){return m[1][1]?0:1}e=d(a),n=l[e]=t[e](a);let h=a[6]&&at(a);return{c(){n.c(),r=gt(),h&&h.c(),s=D()},l(m){n.l(m),r=wt(m),h&&h.l(m),s=D()},m(m,k){l[e].m(m,k),M(m,r,k),h&&h.m(m,k),M(m,s,k),f=!0},p(m,[k]){let O=e;e=d(m),e===O?l[e].p(m,k):(ee(),C(l[O],1,1,()=>{l[O]=null}),te(),n=l[e],n?n.p(m,k):(n=l[e]=t[e](m),n.c()),V(n,1),n.m(r.parentNode,r)),m[6]?h?h.p(m,k):(h=at(m),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(m){f||(V(n),f=!0)},o(m){C(n),f=!1},d(m){l[e].d(m),m&&F(r),h&&h.d(m),m&&F(s)}}}function xt(a,e,n){let{stores:r}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:l}=e,{data_0:d=null}=e,{data_1:h=null}=e,{data_2:m=null}=e;yt(r.page.notify);let k=!1,O=!1,R=null;je(()=>{const E=r.page.subscribe(()=>{k&&(n(7,O=!0),n(8,R=document.title||"untitled page"))});return n(6,k=!0),E});function q(E){le[E?"unshift":"push"](()=>{t[2]=E,n(0,t)})}function P(E){le[E?"unshift":"push"](()=>{t[1]=E,n(0,t)})}function re(E){le[E?"unshift":"push"](()=>{t[1]=E,n(0,t)})}function Y(E){le[E?"unshift":"push"](()=>{t[0]=E,n(0,t)})}function _e(E){le[E?"unshift":"push"](()=>{t[0]=E,n(0,t)})}return a.$$set=E=>{"stores"in E&&n(9,r=E.stores),"page"in E&&n(10,s=E.page),"constructors"in E&&n(1,f=E.constructors),"components"in E&&n(0,t=E.components),"form"in E&&n(2,l=E.form),"data_0"in E&&n(3,d=E.data_0),"data_1"in E&&n(4,h=E.data_1),"data_2"in E&&n(5,m=E.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&r.page.set(s)},[t,f,l,d,h,m,k,O,R,r,s,q,P,re,Y,_e]}class en extends ht{constructor(e){super(),_t(this,e,xt,Qt,mt,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const tn="modulepreload",nn=function(a,e){return new URL(a,e).href},st={},ae=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=nn(f,r),f in st)return;st[f]=!0;const t=f.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const k=s[m];if(k.href===f&&(!t||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${l}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":tn,t||(h.as="script",h.crossOrigin=""),h.href=f,document.head.appendChild(h),t)return new Promise((m,k)=>{h.addEventListener("load",m),h.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},an={},ke=[()=>ae(()=>import("./chunks/0-b6147faa.js"),["./chunks\\0-b6147faa.js","./chunks\\_layout-da46b06b.js","./components\\pages\\_layout.svelte-23af7274.js","./chunks\\index-fa6518fa.js","./assets\\_layout-267b8dca.css"],import.meta.url),()=>ae(()=>import("./chunks/1-a72b4309.js"),["./chunks\\1-a72b4309.js","./components\\error.svelte-ec0a5d53.js","./chunks\\index-fa6518fa.js","./chunks\\singletons-6f0278d5.js"],import.meta.url),()=>ae(()=>import("./chunks/2-56104f47.js"),["./chunks\\2-56104f47.js","./chunks\\_layout-575f529f.js","./chunks\\utils-65c87334.js","./chunks\\_page-53f1c324.js","./chunks\\index-fa6518fa.js","./chunks\\IngredientCard-0c9c4ead.js","./chunks\\_page-a2316521.js","./components\\pages\\(articles)\\_layout.svelte-5c115294.js"],import.meta.url),()=>ae(()=>import("./chunks/3-3fdbca86.js"),["./chunks\\3-3fdbca86.js","./chunks\\_page-c11848a7.js","./chunks\\utils-65c87334.js","./chunks\\_page-53f1c324.js","./chunks\\index-fa6518fa.js","./chunks\\IngredientCard-0c9c4ead.js","./chunks\\_page-a2316521.js","./components\\pages\\_page.svelte-419b2985.js"],import.meta.url),()=>ae(()=>import("./chunks/4-af8547a9.js"),["./chunks\\4-af8547a9.js","./chunks\\_page-53f1c324.js","./chunks\\index-fa6518fa.js","./chunks\\IngredientCard-0c9c4ead.js"],import.meta.url),()=>ae(()=>import("./chunks/5-b4cfd4a9.js"),["./chunks\\5-b4cfd4a9.js","./chunks\\_page-a2316521.js","./chunks\\index-fa6518fa.js","./chunks\\IngredientCard-0c9c4ead.js"],import.meta.url)],ut=[],rn={"/":[3],"/(articles)/cranachan":[4,[2]],"/(articles)/pancakes":[5,[2]]},sn={handleError:({error:a})=>{console.error(a)}};let pe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},it=class{constructor(e,n){this.status=e,this.location=n}};async function on(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([r,s])=>[r,await s])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ln=-1,cn=-2,fn=-3,un=-4,dn=-5,pn=-6;function hn(a,e){if(typeof a=="number")return s(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,r=Array(n.length);function s(f,t=!1){if(f===ln)return;if(f===fn)return NaN;if(f===un)return 1/0;if(f===dn)return-1/0;if(f===pn)return-0;if(t)throw new Error("Invalid input");if(f in r)return r[f];const l=n[f];if(!l||typeof l!="object")r[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const d=l[0],h=e==null?void 0:e[d];if(h)return r[f]=h(s(l[1]));switch(d){case"Date":r[f]=new Date(l[1]);break;case"Set":const m=new Set;r[f]=m;for(let R=1;R<l.length;R+=1)m.add(s(l[R]));break;case"Map":const k=new Map;r[f]=k;for(let R=1;R<l.length;R+=2)k.set(s(l[R]),s(l[R+1]));break;case"RegExp":r[f]=new RegExp(l[1],l[2]);break;case"Object":r[f]=Object(l[1]);break;case"BigInt":r[f]=BigInt(l[1]);break;case"null":const O=Object.create(null);r[f]=O;for(let R=1;R<l.length;R+=2)O[l[R]]=s(l[R+1]);break;default:throw new Error(`Unknown type ${d}`)}}else{const d=new Array(l.length);r[f]=d;for(let h=0;h<l.length;h+=1){const m=l[h];m!==cn&&(d[h]=s(m))}}else{const d={};r[f]=d;for(const h in l){const m=l[h];d[h]=s(m)}}return r[f]}return s(0)}function _n(a){return a.filter(e=>e!=null)}const Ue=Gt(ke,ut,rn,an),dt=ke[0],De=ke[1];dt();De();const x=ft(lt)??{},ce=ft(ct)??{};function $e(a){x[a]=ue()}function mn({target:a}){var Ye;const e=document.documentElement,n=[],r=[];let s=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,d=!1,h=!0,m=!1,k=!1,O=!1,R=!1,q,P=(Ye=history.state)==null?void 0:Ye[K];P||(P=Date.now(),history.replaceState({...history.state,[K]:P},"",location.href));const re=x[P];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let Y,_e,E;async function Ve(){E=E||Promise.resolve(),await E,E=null;const o=new URL(location.href),i=ie(o,!0);s=null,await He(i,o,[])}function qe(o){r.some(i=>i==null?void 0:i.snapshot)&&(ce[o]=r.map(i=>{var u;return(u=i==null?void 0:i.snapshot)==null?void 0:u.capture()}))}function Be(o){var i;(i=ce[o])==null||i.forEach((u,c)=>{var _,p;(p=(_=r[c])==null?void 0:_.snapshot)==null||p.restore(u)})}async function Se(o,{noScroll:i=!1,replaceState:u=!1,keepFocus:c=!1,state:_={},invalidateAll:p=!1},w,g){return typeof o=="string"&&(o=new URL(o,Qe(document))),ye({url:o,scroll:i?ue():null,keepfocus:c,redirect_chain:w,details:{state:_,replaceState:u},nav_token:g,accepted:()=>{p&&(R=!0)},blocked:()=>{},type:"goto"})}async function Fe(o){return s={id:o.id,promise:Ge(o).then(i=>(i.type==="loaded"&&i.state.error&&(s=null),i))},s.promise}async function me(...o){const u=Ue.filter(c=>o.some(_=>c.exec(_))).map(c=>Promise.all([...c.layouts,c.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(u)}async function He(o,i,u,c,_,p={},w){var b,y,A;_e=p;let g=o&&await Ge(o);if(g||(g=await We(i,{id:null},await fe(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(o==null?void 0:o.url)||i,_e!==p)return!1;if(g.type==="redirect")if(u.length>10||u.includes(i.pathname))g=await ge({status:500,error:await fe(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return Se(new URL(g.location,i).href,{},[...u,i.pathname],p),!1;else((b=g.props.page)==null?void 0:b.status)>=400&&await Z.updated.check()&&await oe(i);if(n.length=0,R=!1,m=!0,c&&($e(c),qe(c)),(y=g.props.page)!=null&&y.url&&g.props.page.url.pathname!==i.pathname&&(i.pathname=(A=g.props.page)==null?void 0:A.url.pathname),_&&_.details){const{details:L}=_,j=L.replaceState?0:1;if(L.state[K]=P+=j,history[L.replaceState?"replaceState":"pushState"](L.state,"",i),!L.replaceState){let I=P+1;for(;ce[I]||x[I];)delete ce[I],delete x[I],I+=1}}if(s=null,d?(t=g.state,g.props.page&&(g.props.page.url=i),q.$set(g.props)):Ke(g),_){const{scroll:L,keepfocus:j}=_,{activeElement:I}=document;await be();const v=document.activeElement!==I&&document.activeElement!==document.body;if(!j&&!v&&await Te(),h){const N=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));L?scrollTo(L.x,L.y):N?N.scrollIntoView():scrollTo(0,0)}}else await be();h=!0,g.props.page&&(Y=g.props.page),w&&w(),m=!1}function Ke(o){var c;t=o.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),Y=o.props.page,q=new en({target:a,props:{...o.props,stores:Z,components:r},hydrate:!0}),Be(P);const u={from:null,to:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(_=>_(u)),d=!0}async function se({url:o,params:i,branch:u,status:c,error:_,route:p,form:w}){let g="never";for(const I of u)(I==null?void 0:I.slash)!==void 0&&(g=I.slash);o.pathname=Pt(o.pathname,g),o.search=o.search;const b={type:"loaded",state:{url:o,params:i,branch:u,error:_,route:p},props:{constructors:_n(u).map(I=>I.node.component)}};w!==void 0&&(b.props.form=w);let y={},A=!Y,L=0;for(let I=0;I<Math.max(u.length,t.branch.length);I+=1){const v=u[I],N=t.branch[I];(v==null?void 0:v.data)!==(N==null?void 0:N.data)&&(A=!0),v&&(y={...y,...v.data},A&&(b.props[`data_${L}`]=y),L+=1)}return(!t.url||o.href!==t.url.href||t.error!==_||w!==void 0&&w!==Y.form||A)&&(b.props.page={error:_,params:i,route:{id:(p==null?void 0:p.id)??null},status:c,url:new URL(o),form:w??null,data:A?y:Y.data}),b}async function Re({loader:o,parent:i,url:u,params:c,route:_,server_data_node:p}){var y,A,L;let w=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await o();if((y=b.universal)!=null&&y.load){let j=function(...v){for(const N of v){const{href:B}=new URL(N,u);g.dependencies.add(B)}};const I={route:{get id(){return g.route=!0,_.id}},params:new Proxy(c,{get:(v,N)=>(g.params.add(N),v[N])}),data:(p==null?void 0:p.data)??null,url:$t(u,()=>{g.url=!0}),async fetch(v,N){let B;v instanceof Request?(B=v.url,N={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...N}):B=v;const H=new URL(B,u);return j(H.href),H.origin===u.origin&&(B=H.href.slice(u.origin.length)),d?qt(B,H.href,N):Vt(B,N)},setHeaders:()=>{},depends:j,parent(){return g.parent=!0,i()}};w=await b.universal.load.call(null,I)??null,w=w?await on(w):null}return{node:b,loader:o,server:p,universal:(A=b.universal)!=null&&A.load?{type:"data",data:w,uses:g}:null,data:w??(p==null?void 0:p.data)??null,slash:((L=b.universal)==null?void 0:L.trailingSlash)??(p==null?void 0:p.slash)}}function Me(o,i,u,c,_){if(R)return!0;if(!c)return!1;if(c.parent&&o||c.route&&i||c.url&&u)return!0;for(const p of c.params)if(_[p]!==t.params[p])return!0;for(const p of c.dependencies)if(n.some(w=>w(new URL(p))))return!0;return!1}function Le(o,i){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?i??null:null}async function Ge({id:o,invalidating:i,url:u,params:c,route:_}){if((s==null?void 0:s.id)===o)return s.promise;const{errors:p,layouts:w,leaf:g}=_,b=[...w,g];p.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const A=t.url?o!==t.url.pathname+t.url.search:!1,L=t.route?_.id!==t.route.id:!1;let j=!1;const I=b.map((S,T)=>{var Q;const U=t.branch[T],$=!!(S!=null&&S[0])&&((U==null?void 0:U.loader)!==S[1]||Me(j,L,A,(Q=U.server)==null?void 0:Q.uses,c));return $&&(j=!0),$});if(I.some(Boolean)){try{y=await ot(u,I)}catch(S){return ge({status:S instanceof pe?S.status:500,error:await fe(S,{url:u,params:c,route:{id:_.id}}),url:u,route:_})}if(y.type==="redirect")return y}const v=y==null?void 0:y.nodes;let N=!1;const B=b.map(async(S,T)=>{var Ie;if(!S)return;const U=t.branch[T],$=v==null?void 0:v[T];if((!$||$.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!Me(N,L,A,(Ie=U.universal)==null?void 0:Ie.uses,c))return U;if(N=!0,($==null?void 0:$.type)==="error")throw $;return Re({loader:S[1],url:u,params:c,route:_,parent:async()=>{var Ze;const Xe={};for(let Ae=0;Ae<T;Ae+=1)Object.assign(Xe,(Ze=await B[Ae])==null?void 0:Ze.data);return Xe},server_data_node:Le($===void 0&&S[0]?{type:"skip"}:$??null,S[0]?U==null?void 0:U.server:void 0)})});for(const S of B)S.catch(()=>{});const H=[];for(let S=0;S<b.length;S+=1)if(b[S])try{H.push(await B[S])}catch(T){if(T instanceof it)return{type:"redirect",location:T.location};let U=500,$;if(v!=null&&v.includes(T))U=T.status??U,$=T.error;else if(T instanceof pe)U=T.status,$=T.body;else{if(await Z.updated.check())return await oe(u);$=await fe(T,{params:c,url:u,route:{id:_.id}})}const Q=await Je(S,H,p);return Q?await se({url:u,params:c,branch:H.slice(0,Q.idx).concat(Q.node),status:U,error:$,route:_}):await We(u,{id:_.id},$,U)}else H.push(void 0);return await se({url:u,params:c,branch:H,status:200,error:null,route:_,form:i?void 0:null})}async function Je(o,i,u){for(;o--;)if(u[o]){let c=o;for(;!i[c];)c-=1;try{return{idx:c+1,node:{node:await u[o](),loader:u[o],data:{},server:null,universal:null}}}catch{continue}}}async function ge({status:o,error:i,url:u,route:c}){const _={};let p=null;if(ut[0]===0)try{const y=await ot(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;p=y.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||l)&&await oe(u)}const g=await Re({loader:dt,url:u,params:_,route:c,parent:()=>Promise.resolve({}),server_data_node:Le(p)}),b={node:await De(),loader:De,universal:null,server:null,data:null};return await se({url:u,params:_,branch:[g,b],status:o,error:i,route:null})}function ie(o,i){if(et(o,ne))return;const u=we(o);for(const c of Ue){const _=c.exec(u);if(_)return{id:o.pathname+o.search,invalidating:i,route:c,params:Nt(_),url:o}}}function we(o){return Ot(o.pathname.slice(ne.length)||"/")}function ze({url:o,type:i,intent:u,delta:c}){var g,b;let _=!1;const p={from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((b=u==null?void 0:u.route)==null?void 0:b.id)??null},url:o},willUnload:!u,type:i};c!==void 0&&(p.delta=c);const w={...p,cancel:()=>{_=!0}};return k||f.before_navigate.forEach(y=>y(w)),_?null:p}async function ye({url:o,scroll:i,keepfocus:u,redirect_chain:c,details:_,type:p,delta:w,nav_token:g,accepted:b,blocked:y}){const A=ie(o,!1),L=ze({url:o,type:p,delta:w,intent:A});if(!L){y();return}const j=P;b(),k=!0,d&&Z.navigating.set(L),await He(A,o,c,j,{scroll:i,keepfocus:u,details:_},g,()=>{k=!1,f.after_navigate.forEach(I=>I(L)),Z.navigating.set(null)})}async function We(o,i,u,c){return o.origin===location.origin&&o.pathname===location.pathname&&!l?await ge({status:c,error:u,url:o,route:i}):await oe(o)}function oe(o){return location.href=o.href,new Promise(()=>{})}function pt(){let o;e.addEventListener("mousemove",p=>{const w=p.target;clearTimeout(o),o=setTimeout(()=>{c(w,2)},20)});function i(p){c(p.composedPath()[0],1)}e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0});const u=new IntersectionObserver(p=>{for(const w of p)w.isIntersecting&&(me(we(new URL(w.target.href))),u.unobserve(w.target))},{threshold:0});function c(p,w){const g=xe(p,e);if(!g)return;const{url:b,external:y}=Oe(g,ne);if(y)return;const A=ve(g);if(!A.reload)if(w<=A.preload_data){const L=ie(b,!1);L&&Fe(L)}else w<=A.preload_code&&me(we(b))}function _(){u.disconnect();for(const p of e.querySelectorAll("a")){const{url:w,external:g}=Oe(p,ne);if(g)continue;const b=ve(p);b.reload||(b.preload_code===tt.viewport&&u.observe(p),b.preload_code===tt.eager&&me(we(w)))}}f.after_navigate.push(_),_()}return{after_navigate:o=>{je(()=>(f.after_navigate.push(o),()=>{const i=f.after_navigate.indexOf(o);f.after_navigate.splice(i,1)}))},before_navigate:o=>{je(()=>(f.before_navigate.push(o),()=>{const i=f.before_navigate.indexOf(o);f.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(m||!d)&&(h=!1)},goto:(o,i={})=>Se(o,i,[]),invalidate:o=>{if(typeof o=="function")n.push(o);else{const{href:i}=new URL(o,location.href);n.push(u=>u.href===i)}return Ve()},invalidateAll:()=>(R=!0,Ve()),preload_data:async o=>{const i=new URL(o,Qe(document)),u=ie(i,!1);if(!u)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Fe(u)},preload_code:me,apply_action:async o=>{if(o.type==="error"){const i=new URL(location.href),{branch:u,route:c}=t;if(!c)return;const _=await Je(t.branch.length,u,c.errors);if(_){const p=await se({url:i,params:t.params,branch:u.slice(0,_.idx).concat(_.node),status:o.status??500,error:o.error,route:c});t=p.state,q.$set(p.props),be().then(Te)}}else if(o.type==="redirect")Se(o.location,{invalidateAll:!0},[]);else{const i={form:o.data,page:{...Y,form:o.data,status:o.status}};q.$set(i),o.type==="success"&&be().then(Te)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var c;let u=!1;if(!k){const _={from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};f.before_navigate.forEach(p=>p(_))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&($e(P),nt(lt,x),qe(P),nt(ct,ce))}),(o=navigator.connection)!=null&&o.saveData||pt(),e.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const u=xe(i.composedPath()[0],e);if(!u)return;const{url:c,external:_,target:p}=Oe(u,ne);if(!c)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const w=ve(u);if(!(u instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:"))return;if(_||w.reload){ze({url:c,type:"link"})||i.preventDefault(),k=!0;return}const[b,y]=c.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){O=!0,$e(P),t.url=c,Z.page.set({...Y,url:c}),Z.page.notify();return}ye({url:c,scroll:w.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),e.addEventListener("submit",i=>{if(i.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(i.target),c=i.submitter;if(((c==null?void 0:c.formMethod)||u.method)!=="get")return;const p=new URL((c==null?void 0:c.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||u.action);if(et(p,ne))return;const w=i.target,{noscroll:g,reload:b}=ve(w);if(b)return;i.preventDefault(),i.stopPropagation();const y=new FormData(w),A=c==null?void 0:c.getAttribute("name");A&&y.append(A,(c==null?void 0:c.getAttribute("value"))??""),p.search=new URLSearchParams(y).toString(),ye({url:p,scroll:g?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async i=>{var u;if((u=i.state)!=null&&u[K]){if(i.state[K]===P)return;const c=x[i.state[K]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){x[P]=ue(),P=i.state[K],scrollTo(c.x,c.y);return}const _=i.state[K]-P;let p=!1;await ye({url:new URL(location.href),scroll:c,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[K]},blocked:()=>{history.go(-_),p=!0},type:"popstate",delta:_}),p||Be(P)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[K]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Z.navigating.set(null)})},_hydrate:async({status:o=200,error:i,node_ids:u,params:c,route:_,data:p,form:w})=>{l=!0;const g=new URL(location.href);({params:c={},route:_={id:null}}=ie(g,!1)||{});let b;try{const y=u.map(async(A,L)=>{const j=p[L];return Re({loader:ke[A],url:g,params:c,route:_,parent:async()=>{const I={};for(let v=0;v<L;v+=1)Object.assign(I,(await y[v]).data);return I},server_data_node:Le(j)})});b=await se({url:g,params:c,branch:await Promise.all(y),status:o,error:i,form:w,route:Ue.find(({id:A})=>A===_.id)??null})}catch(y){if(y instanceof it){await oe(new URL(y.location,location.href));return}b=await ge({status:y instanceof pe?y.status:500,error:await fe(y,{url:g,params:c,route:_}),url:g,route:_})}Ke(b)}}}async function ot(a,e){var f;const n=new URL(a);n.pathname=Dt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const r=await Ee(n.href),s=await r.json();if(!r.ok)throw new pe(r.status,s);return(f=s.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=hn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function fe(a,e){return a instanceof pe?a.body:sn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Te(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(r=>{setTimeout(()=>{var s;r((s=getSelection())==null?void 0:s.removeAllRanges())})})}}async function vn({assets:a,env:e,hydrate:n,target:r,version:s}){It(a),At(s);const f=mn({target:r});Lt({client:f}),n?await f._hydrate(n):f.goto(location.href,{replaceState:!0}),f._start_router()}export{vn as start};
