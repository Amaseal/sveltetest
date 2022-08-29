var xe=Object.defineProperty;var Je=(a,e,t)=>e in a?xe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var fe=(a,e,t)=>(Je(a,typeof e!="symbol"?e+"":e,t),t);import{S as Ke,i as We,s as He,a as Fe,e as V,c as Ge,b as K,g as te,t as z,d as ne,f as B,h as x,j as Me,o as me,k as Ye,l as Xe,m as Qe,n as ue,p as D,q as Ze,r as et,u as tt,v as H,w as ye,x as F,y as G,z as Ae}from"./chunks/index-e81991a8.js";import{g as Ce,f as Ie,a as Ne,s as J,b as _e,i as nt,c as rt}from"./chunks/singletons-a33da732.js";class Z{constructor(e,t){fe(this,"name","HttpError");fe(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class De{constructor(e,t){this.status=e,this.location=t}}function at(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function st(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const it=["href","pathname","search","searchParams","toString","toJSON"];function ot(a,e){const t=new URL(a);for(const o of it){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,u)=>u(a,s),lt(t),t}function lt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ct(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const ee=window.fetch;function ft(a,e){let o=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(o+=`[sveltekit\\:data-body="${ct(e.body)}"]`);const s=document.querySelector(o);if(s&&s.textContent){const{body:u,...n}=JSON.parse(s.textContent);return Promise.resolve(new Response(u,n))}return ee(a,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function dt(a){const e=[],t=[];let o=!0;if(/\]\[/.test(a))throw new Error(`Invalid route ${a} \u2014 parameters must be separated`);if(Te("[",a)!==Te("]",a))throw new Error(`Invalid route ${a} \u2014 brackets are unbalanced`);return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(pt).map((u,n,f)=>{const y=decodeURIComponent(u),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(y);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===f.length-1;return y&&"/"+y.split(/\[(.+?)\]/).map(($,R)=>{if(R%2){const C=ut.exec($);if(!C)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,M,Y]=C;return e.push(M),t.push(Y),A?"(.*?)":"([^/]+?)"}return g&&$.includes(".")&&(o=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function pt(a){return!/^\([^)]+\)$/.test(a)}function ht(a,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const n=e[u],f=t[u],y=a[u+1]||"";if(f){const h=o[f];if(!h)throw new Error(`Missing "${f}" param matcher`);if(!h(y))return}s[n]=y}return s}function Te(a,e){let t=0;for(let o=0;o<e.length;o+=1)e[o]===a&&(t+=1);return t}function mt(a,e,t){return Object.entries(e).map(([s,[u,n,f]])=>{const{pattern:y,names:h,types:g}=dt(s),$={id:s,exec:R=>{const C=y.exec(R);if(C)return ht(C,h,g,t)},errors:[1,...f||[]].map(R=>a[R]),layouts:[0,...n||[]].map(o),leaf:o(u)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function o(s){const u=s<0;return u&&(s=~s),[u,a[s]]}}function _t(a,e){return new Z(a,e)}function gt(a){let e,t,o;var s=a[0][0];function u(n){return{props:{data:n[1],errors:n[3]}}}return s&&(e=new s(u(a))),{c(){e&&H(e.$$.fragment),t=V()},l(n){e&&ye(e.$$.fragment,n),t=V()},m(n,f){e&&F(e,n,f),K(n,t,f),o=!0},p(n,f){const y={};if(f&2&&(y.data=n[1]),f&8&&(y.errors=n[3]),s!==(s=n[0][0])){if(e){te();const h=e;z(h.$$.fragment,1,0,()=>{G(h,1)}),ne()}s?(e=new s(u(n)),H(e.$$.fragment),B(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i(n){o||(e&&B(e.$$.fragment,n),o=!0)},o(n){e&&z(e.$$.fragment,n),o=!1},d(n){n&&x(t),e&&G(e,n)}}}function wt(a){let e,t,o;var s=a[0][0];function u(n){return{props:{data:n[1],errors:n[3],$$slots:{default:[yt]},$$scope:{ctx:n}}}}return s&&(e=new s(u(a))),{c(){e&&H(e.$$.fragment),t=V()},l(n){e&&ye(e.$$.fragment,n),t=V()},m(n,f){e&&F(e,n,f),K(n,t,f),o=!0},p(n,f){const y={};if(f&2&&(y.data=n[1]),f&8&&(y.errors=n[3]),f&525&&(y.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){te();const h=e;z(h.$$.fragment,1,0,()=>{G(h,1)}),ne()}s?(e=new s(u(n)),H(e.$$.fragment),B(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i(n){o||(e&&B(e.$$.fragment,n),o=!0)},o(n){e&&z(e.$$.fragment,n),o=!1},d(n){n&&x(t),e&&G(e,n)}}}function yt(a){let e,t,o;var s=a[0][1];function u(n){return{props:{data:n[2],errors:n[3]}}}return s&&(e=new s(u(a))),{c(){e&&H(e.$$.fragment),t=V()},l(n){e&&ye(e.$$.fragment,n),t=V()},m(n,f){e&&F(e,n,f),K(n,t,f),o=!0},p(n,f){const y={};if(f&4&&(y.data=n[2]),f&8&&(y.errors=n[3]),s!==(s=n[0][1])){if(e){te();const h=e;z(h.$$.fragment,1,0,()=>{G(h,1)}),ne()}s?(e=new s(u(n)),H(e.$$.fragment),B(e.$$.fragment,1),F(e,t.parentNode,t)):e=null}else s&&e.$set(y)},i(n){o||(e&&B(e.$$.fragment,n),o=!0)},o(n){e&&z(e.$$.fragment,n),o=!1},d(n){n&&x(t),e&&G(e,n)}}}function qe(a){let e,t=a[5]&&Ve(a);return{c(){e=Ye("div"),t&&t.c(),this.h()},l(o){e=Xe(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Qe(e);t&&t.l(s),s.forEach(x),this.h()},h(){ue(e,"id","svelte-announcer"),ue(e,"aria-live","assertive"),ue(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(o,s){K(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=Ve(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&x(e),t&&t.d()}}}function Ve(a){let e;return{c(){e=Ze(a[6])},l(t){e=et(t,a[6])},m(t,o){K(t,e,o)},p(t,o){o&64&&tt(e,t[6])},d(t){t&&x(e)}}}function bt(a){let e,t,o,s,u;const n=[wt,gt],f=[];function y(g,$){return g[0][1]?0:1}e=y(a),t=f[e]=n[e](a);let h=a[4]&&qe(a);return{c(){t.c(),o=Fe(),h&&h.c(),s=V()},l(g){t.l(g),o=Ge(g),h&&h.l(g),s=V()},m(g,$){f[e].m(g,$),K(g,o,$),h&&h.m(g,$),K(g,s,$),u=!0},p(g,[$]){let R=e;e=y(g),e===R?f[e].p(g,$):(te(),z(f[R],1,1,()=>{f[R]=null}),ne(),t=f[e],t?t.p(g,$):(t=f[e]=n[e](g),t.c()),B(t,1),t.m(o.parentNode,o)),g[4]?h?h.p(g,$):(h=qe(g),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(g){u||(B(t),u=!0)},o(g){z(t),u=!1},d(g){f[e].d(g),g&&x(o),h&&h.d(g),g&&x(s)}}}function vt(a,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{data_0:n=null}=e,{data_1:f=null}=e,{errors:y}=e;Me(o.page.notify);let h=!1,g=!1,$=null;return me(()=>{const R=o.page.subscribe(()=>{h&&(t(5,g=!0),t(6,$=document.title||"untitled page"))});return t(4,h=!0),R}),a.$$set=R=>{"stores"in R&&t(7,o=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,u=R.components),"data_0"in R&&t(1,n=R.data_0),"data_1"in R&&t(2,f=R.data_1),"errors"in R&&t(3,y=R.errors)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(s)},[u,n,f,y,h,g,$,o,s]}class kt extends Ke{constructor(e){super(),We(this,e,vt,bt,He,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const Et=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),$t=function(a,e){return new URL(a,e).href},ze={},de=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=$t(s,o),s in ze)return;ze[s]=!0;const u=s.endsWith(".css"),n=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Et,u||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),u)return new Promise((y,h)=>{f.addEventListener("load",y),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},St={},re=[()=>de(()=>import("./chunks/0-49ca1274.js"),["chunks\\0-49ca1274.js","components\\layout.svelte-0cece1ea.js","chunks\\index-e81991a8.js"],import.meta.url),()=>de(()=>import("./chunks/1-6411b78b.js"),["chunks\\1-6411b78b.js","components\\error.svelte-94689e4f.js","chunks\\index-e81991a8.js","chunks\\singletons-a33da732.js"],import.meta.url),()=>de(()=>import("./chunks/2-5b188d21.js"),["chunks\\2-5b188d21.js","components\\pages\\_page.svelte-73377958.js","chunks\\index-e81991a8.js"],import.meta.url)],Rt={"":[2]},Be="sveltekit:scroll",q="sveltekit:index",pe=mt(re,Rt,St),ge=re[0],we=re[1];ge();we();let X={};try{X=JSON.parse(sessionStorage[Be])}catch{}function he(a){X[a]=_e()}function Lt({target:a,base:e,trailing_slash:t}){var je;const o=[],s={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,y=!0,h=!1,g=1,$=null,R,C=!0,A=(je=history.state)==null?void 0:je[q];A||(A=Date.now(),history.replaceState({...history.state,[q]:A},"",location.href));const M=X[A];M&&(history.scrollRestoration="manual",scrollTo(M.x,M.y));let Y=!1,W,be;async function ve(r,{noscroll:c=!1,replaceState:d=!1,keepfocus:i=!1,state:l={}},k){if(typeof r=="string"&&(r=new URL(r,Ce(document))),C)return oe({url:r,scroll:c?_e():null,keepfocus:i,redirect_chain:k,details:{state:l,replaceState:d},accepted:()=>{},blocked:()=>{}});await T(r)}async function ke(r){const c=Le(r);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Re(c),s.id=c.id,s.promise}async function Ee(r,c,d,i){var b,S,L;const l=Le(r),k=be={};let p=l&&await Re(l);if(!p&&r.origin===location.origin&&r.pathname===location.pathname&&(p=await ie({status:404,error:new Error(`Not found: ${r.pathname}`),url:r,routeId:null})),!p)return await T(r),!1;if(r=(l==null?void 0:l.url)||r,be!==k)return!1;if(o.length=0,p.type==="redirect")if(c.length>10||c.includes(r.pathname))p=await ie({status:500,error:new Error("Redirect loop"),url:r,routeId:null});else return C?ve(new URL(p.location,r).href,{},[...c,r.pathname]):await T(new URL(p.location,location.href)),!1;else((S=(b=p.props)==null?void 0:b.page)==null?void 0:S.status)>=400&&await J.updated.check()&&await T(r);if(h=!0,d&&d.details){const{details:v}=d,P=v.replaceState?0:1;v.state[q]=A+=P,history[v.replaceState?"replaceState":"pushState"](v.state,"",r)}if(f?(n=p.state,p.props.page&&(p.props.page.url=r),R.$set(p.props)):$e(p),d){const{scroll:v,keepfocus:P}=d;if(!P){const w=document.body,O=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var m;(m=getSelection())==null||m.removeAllRanges()}),O!==null?w.setAttribute("tabindex",O):w.removeAttribute("tabindex")}if(await Ae(),y){const w=r.hash&&document.getElementById(r.hash.slice(1));v?scrollTo(v.x,v.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Ae();s.promise=null,s.id=null,y=!0,p.props.page&&(W=p.props.page);const E=p.state.branch[p.state.branch.length-1];C=((L=E==null?void 0:E.node.shared)==null?void 0:L.router)!==!1,i&&i(),h=!1}function $e(r){n=r.state;const c=document.querySelector("style[data-sveltekit]");if(c&&c.remove(),W=r.props.page,R=new kt({target:a,props:{...r.props,stores:J},hydrate:!0}),C){const d={from:null,to:new URL(location.href)};u.after_navigate.forEach(i=>i(d))}f=!0}async function Q({url:r,params:c,branch:d,status:i,error:l,routeId:k,validation_errors:p}){var P;const E=d.filter(Boolean),b={type:"loaded",state:{url:r,params:c,branch:d,error:l,session_id:g},props:{components:E.map(w=>w.node.component),errors:p}};let S={},L=!W;for(let w=0;w<E.length;w+=1){const O=E[w];S={...S,...O.data},(L||!n.branch.some(m=>m===O))&&(b.props[`data_${w}`]=S,L=L||Object.keys((P=O.data)!=null?P:{}).length>0)}if(L||(L=Object.keys(W.data).length!==Object.keys(S).length),!n.url||r.href!==n.url.href||n.error!==l||L){b.props.page={error:l,params:c,routeId:k,status:i,url:r,data:L?S:W.data};const w=(O,m)=>{Object.defineProperty(b.props.page,O,{get:()=>{throw new Error(`$page.${O} has been replaced by $page.url.${m}`)}})};w("origin","origin"),w("path","pathname"),w("query","searchParams")}return b}async function ae({loader:r,parent:c,url:d,params:i,routeId:l,server_data_node:k}){var S,L,v,P,w;let p=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},b=await r();if((S=b.shared)!=null&&S.load){let O=function(..._){for(const j of _){const{href:I}=new URL(j,d);E.dependencies.add(I)}};const m={};for(const _ in i)Object.defineProperty(m,_,{get(){return E.params.add(_),i[_]},enumerable:!0});const U={routeId:l,params:m,data:(L=k==null?void 0:k.data)!=null?L:null,url:ot(d,()=>{E.url=!0}),async fetch(_,j){let I;typeof _=="string"?I=_:(I=_.url,j={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...j});const N=new URL(I,d).href;return O(N),f?ee(N,j):ft(I,j)},setHeaders:()=>{},depends:O,parent(){return E.parent=!0,c()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),p=(v=await b.shared.load.call(null,U))!=null?v:null}return{node:b,loader:r,server:k,shared:(P=b.shared)!=null&&P.load?{type:"data",data:p,uses:E}:null,data:(w=p!=null?p:k==null?void 0:k.data)!=null?w:null}}function Se(r,c,d){if(!d)return!1;if(d.parent&&c||r.url&&d.url)return!0;for(const i of r.params)if(d.params.has(i))return!0;for(const i of d.dependencies)if(o.some(l=>l(i)))return!0;return!1}function se(r,c){var d,i;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((d=r.uses.dependencies)!=null?d:[]),params:new Set((i=r.uses.params)!=null?i:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&c!=null?c:null}async function Re({id:r,url:c,params:d,route:i}){if(s.id===r&&s.promise)return s.promise;const{errors:l,layouts:k,leaf:p}=i,E=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(d).filter(m=>n.params[m]!==d[m])},b=[...k,p];l.forEach(m=>m==null?void 0:m().catch(()=>{})),b.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let S=null;const L=b.reduce((m,U,_)=>{var N;const j=n.branch[_],I=!!(U!=null&&U[0])&&((j==null?void 0:j.loader)!==U[1]||Se(E,m.some(Boolean),(N=j.server)==null?void 0:N.uses));return m.push(I),m},[]);if(L.some(Boolean)){try{const m=await ee(`${c.pathname}${c.pathname.endsWith("/")?"":"/"}__data.json${c.search}`,{headers:{"x-sveltekit-invalidated":L.map(U=>U?"1":"").join(",")}});if(S=await m.json(),!m.ok)throw S}catch{T(c);return}if(S.type==="redirect")return S}const v=S==null?void 0:S.nodes;let P=!1;const w=b.map(async(m,U)=>{var le,Oe;if(!m)return;const _=n.branch[U],j=(le=v==null?void 0:v[U])!=null?le:null;if((!j||j.type==="skip")&&m[1]===(_==null?void 0:_.loader)&&!Se(E,P,(Oe=_.shared)==null?void 0:Oe.uses))return _;if(P=!0,(j==null?void 0:j.type)==="error")throw j.httperror?_t(j.httperror.status,j.httperror.message):j.error;return ae({loader:m[1],url:c,params:d,routeId:i.id,parent:async()=>{var Ue;const Pe={};for(let ce=0;ce<U;ce+=1)Object.assign(Pe,(Ue=await w[ce])==null?void 0:Ue.data);return Pe},server_data_node:se(j,_==null?void 0:_.server)})});for(const m of w)m.catch(()=>{});const O=[];for(let m=0;m<b.length;m+=1)if(b[m])try{O.push(await w[m])}catch(U){const _=U;if(_ instanceof De)return{type:"redirect",location:_.location};const j=U instanceof Z?U.status:500;for(;m--;)if(l[m]){let I,N=m;for(;!O[N];)N-=1;try{return I={node:await l[m](),loader:l[m],data:{},server:null,shared:null},await Q({url:c,params:d,branch:O.slice(0,N+1).concat(I),status:j,error:_,routeId:i.id})}catch{continue}}T(c);return}else O.push(void 0);return await Q({url:c,params:d,branch:O,status:200,error:null,routeId:i.id})}async function ie({status:r,error:c,url:d,routeId:i}){var S;const l={},k=await ge();let p=null;if(k.server){const L=await ee(`${d.pathname}${d.pathname.endsWith("/")?"":"/"}__data.json${d.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),v=await L.json();if(p=(S=v==null?void 0:v[0])!=null?S:null,!L.ok||(v==null?void 0:v.type)!=="data"){T(d);return}}const E=await ae({loader:ge,url:d,params:l,routeId:i,parent:()=>Promise.resolve({}),server_data_node:se(p)}),b={node:await we(),loader:we,shared:null,server:null,data:null};return await Q({url:d,params:l,branch:[E,b],status:r,error:c,routeId:i})}function Le(r){if(r.origin!==location.origin||!r.pathname.startsWith(e))return;const c=decodeURI(r.pathname.slice(e.length)||"/");for(const d of pe){const i=d.exec(c);if(i){const l=new URL(r.origin+at(r.pathname,t)+r.search+r.hash);return{id:l.pathname+l.search,route:d,params:st(i),url:l}}}}async function oe({url:r,scroll:c,keepfocus:d,redirect_chain:i,details:l,accepted:k,blocked:p}){const E=n.url;let b=!1;const S={from:E,to:r,cancel:()=>b=!0};if(u.before_navigate.forEach(L=>L(S)),b){p();return}he(A),k(),f&&J.navigating.set({from:n.url,to:r}),await Ee(r,i,{scroll:c,keepfocus:d,details:l},()=>{const L={from:E,to:r};u.after_navigate.forEach(v=>v(L)),J.navigating.set(null)})}function T(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{me(()=>(u.after_navigate.push(r),()=>{const c=u.after_navigate.indexOf(r);u.after_navigate.splice(c,1)}))},before_navigate:r=>{me(()=>(u.before_navigate.push(r),()=>{const c=u.before_navigate.indexOf(r);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!f)&&(y=!1)},goto:(r,c={})=>ve(r,c,[]),invalidate:r=>{var c,d;if(r===void 0){for(const i of n.branch)(c=i==null?void 0:i.server)==null||c.uses.dependencies.add(""),(d=i==null?void 0:i.shared)==null||d.uses.dependencies.add("");o.push(()=>!0)}else if(typeof r=="function")o.push(r);else{const{href:i}=new URL(r,location.href);o.push(l=>l===i)}return $||($=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),$=null})),$},prefetch:async r=>{const c=new URL(r,Ce(document));await ke(c)},prefetch_routes:async r=>{const d=(r?pe.filter(i=>r.some(l=>i.exec(l))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(d)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let l=!1;const k={from:n.url,to:null,cancel:()=>l=!0};u.before_navigate.forEach(p=>p(k)),l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(A);try{sessionStorage[Be]=JSON.stringify(X)}catch{}}});const r=i=>{const l=Ie(i);l&&l.href&&l.hasAttribute("sveltekit:prefetch")&&ke(Ne(l))};let c;const d=i=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=i.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",i=>{if(!C||i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const l=Ie(i);if(!l||!l.href)return;const k=l instanceof SVGAElement,p=Ne(l);if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||l.hasAttribute("sveltekit:reload")||(k?l.target.baseVal:l.target))return;const[b,S]=p.href.split("#");if(S!==void 0&&b===location.href.split("#")[0]){Y=!0,he(A),J.page.set({...W,url:p}),J.page.notify();return}oe({url:p,scroll:l.hasAttribute("sveltekit:noscroll")?_e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault()})}),addEventListener("popstate",i=>{if(i.state&&C){if(i.state[q]===A)return;oe({url:new URL(location.href),scroll:X[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[q]},blocked:()=>{const l=A-i.state[q];history.go(l)}})}}),addEventListener("hashchange",()=>{Y&&(Y=!1,history.replaceState({...history.state,[q]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:r,error:c,node_ids:d,params:i,routeId:l})=>{const k=new URL(location.href);let p;try{const E=(v,P)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${v}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):P},b=E("server_data",[]),S=E("validation_errors",void 0),L=d.map(async(v,P)=>ae({loader:re[v],url:k,params:i,routeId:l,parent:async()=>{const w={};for(let O=0;O<P;O+=1)Object.assign(w,(await L[O]).data);return w},server_data_node:se(b[P])}));p=await Q({url:k,params:i,branch:await Promise.all(L),status:r,error:c!=null&&c.__is_http_error?new Z(c.status,c.message):c,validation_errors:S,routeId:l})}catch(E){const b=E;if(b instanceof De){await T(new URL(E.location,location.href));return}p=await ie({status:b instanceof Z?b.status:500,error:b,url:k,routeId:l})}$e(p)}}}function Ut(a){}async function At({paths:a,target:e,route:t,spa:o,trailing_slash:s,hydrate:u}){const n=Lt({target:e,base:a.base,trailing_slash:s});nt({client:n}),rt(a),u&&await n._hydrate(u),t&&(o&&n.goto(location.href,{replaceState:!0}),n._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ut as set_public_env,At as start};
