import{N as q,O as m,r as O,P as B,t as F,E as S,a as U,Q as V,R as T,S as j,u as M,T as $,U as z,p as H,V as h,W as L,X as K,Y as N}from"./DsNl1WvM.js";const x=t=>t==="defer"||t===!1;function I(...t){var w;const n=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(n);let[s,i,a={}]=t;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=q(),l=i,D=()=>m.value,P=()=>e.isHydrating?e.payload.data[s]:e.static.data[s];a.server=a.server??!0,a.default=a.default??D,a.getCachedData=a.getCachedData??P,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??m.deep,a.dedupe=a.dedupe??"cancel";const y=a.getCachedData(s,e),_=y!=null;if(!e._asyncData[s]||!a.immediate){(w=e.payload._errors)[s]??(w[s]=m.errorValue);const c=a.deep?O:B;e._asyncData[s]={data:c(_?y:a.default()),pending:O(!_),error:F(e.payload._errors,s),status:O("idle"),_default:a.default}}const r={...e._asyncData[s]};delete r._default,r.refresh=r.execute=(c={})=>{if(e._asyncDataPromises[s]){if(x(c.dedupe??a.dedupe))return e._asyncDataPromises[s];e._asyncDataPromises[s].cancelled=!0}if(c._initial||e.isHydrating&&c._initial!==!1){const u=c._initial?y:a.getCachedData(s,e);if(u!=null)return Promise.resolve(u)}r.pending.value=!0,r.status.value="pending";const f=new Promise((u,o)=>{try{u(l(e))}catch(p){o(p)}}).then(async u=>{if(f.cancelled)return e._asyncDataPromises[s];let o=u;a.transform&&(o=await a.transform(u)),a.pick&&(o=Q(o,a.pick)),e.payload.data[s]=o,r.data.value=o,r.error.value=m.errorValue,r.status.value="success"}).catch(u=>{if(f.cancelled)return e._asyncDataPromises[s];r.error.value=j(u),r.data.value=M(a.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[s])});return e._asyncDataPromises[s]=f,e._asyncDataPromises[s]},r.clear=()=>G(e,s);const v=()=>r.refresh({_initial:!0}),g=a.server!==!1&&e.payload.serverRendered;{const c=$();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;S(()=>{o.forEach(p=>{p()}),o.splice(0,o.length)}),U(()=>o.splice(0,o.length))}g&&e.isHydrating&&(r.error.value||y!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(v):a.immediate&&v();const f=z();if(a.watch){const o=V(a.watch,()=>r.refresh());f&&T(o)}const u=e.hook("app:data:refresh",async o=>{(!o||o.includes(s))&&await r.refresh()});f&&T(u)}const b=Promise.resolve(e._asyncDataPromises[s]).then(()=>r);return Object.assign(b,r),b}function G(t,n){n in t.payload.data&&(t.payload.data[n]=void 0),n in t.payload._errors&&(t.payload._errors[n]=m.errorValue),t._asyncData[n]&&(t._asyncData[n].data.value=void 0,t._asyncData[n].error.value=m.errorValue,t._asyncData[n].pending.value=!1,t._asyncData[n].status.value="idle"),n in t._asyncDataPromises&&(t._asyncDataPromises[n]&&(t._asyncDataPromises[n].cancelled=!0),t._asyncDataPromises[n]=void 0)}function Q(t,n){const s={};for(const i of n)s[i]=t[i];return s}function Z(t,n,s){const[i={},a]=typeof n=="string"?[{},n]:[n,s],e=H(()=>h(t)),l=i.key||L([a,typeof e.value=="string"?e.value:"",...W(i)]);if(!l||typeof l!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+l);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const D=l===a?"$f"+l:l;if(!i.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:P,lazy:y,default:_,transform:r,pick:v,watch:g,immediate:b,getCachedData:w,deep:c,dedupe:f,...u}=i,o=K({...N,...u,cache:typeof i.cache=="boolean"?void 0:i.cache}),p={server:P,lazy:y,default:_,transform:r,pick:v,immediate:b,getCachedData:w,deep:c,dedupe:f,watch:g===!1?[]:[o,e,...g||[]]};let d;return I(D,()=>{var E;(E=d==null?void 0:d.abort)==null||E.call(d,"Request aborted as another request to the same endpoint was initiated."),d=typeof AbortController<"u"?new AbortController:{};const R=h(i.timeout);let C;return R&&(C=setTimeout(()=>d.abort("Request aborted due to timeout."),R),d.signal.onabort=()=>clearTimeout(C)),(i.$fetch||globalThis.$fetch)(e.value,{signal:d.signal,...o}).finally(()=>{clearTimeout(C)})},p)}function W(t){var s;const n=[((s=h(t.method))==null?void 0:s.toUpperCase())||"GET",h(t.baseURL)];for(const i of[t.params||t.query]){const a=h(i);if(!a)continue;const e={};for(const[l,D]of Object.entries(a))e[h(l)]=h(D);n.push(e)}return n}export{Z as u};
