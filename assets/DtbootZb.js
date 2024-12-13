import{m as _,k as O,_ as j,l as $,p as I,r as b,F as P,e as z,G as H,H as R,q as Y,s as U,v as D,o as C,c as A,a as G,A as Z,y as k,n as x,I as K,J as L,K as Q,L as W,M as X,f as ee,N as B,O as te}from"./CFRI14Bu.js";import{t as ae,u as re}from"./C3hOubfU.js";import{u as ne}from"./yexNJ7rl.js";import{u as se}from"./DKy0o06d.js";const v=_(O.ui.strategy,O.ui.textarea,ae),oe=$({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(v.size).includes(e)}},color:{type:String,default:()=>v.default.color,validator(e){return[...O.ui.colors,...Object.keys(v.color)].includes(e)}},variant:{type:String,default:()=>v.default.variant,validator(e){return[...Object.keys(v.variant),...Object.values(v.color).flatMap(a=>Object.keys(a))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:a}){const{ui:r,attrs:l}=re("textarea",I(e,"ui"),v,I(e,"class")),{emitFormBlur:d,emitFormInput:s,inputId:u,color:g,size:y,name:h}=ne(e,v),t=b(P({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),n=b(null),i=()=>{var o;e.autofocus&&((o=n.value)==null||o.focus())},c=()=>{if(e.autoresize){if(!n.value)return;n.value.rows=e.rows;const o=n.value.style.overflow;n.value.style.overflow="hidden";const f=window.getComputedStyle(n.value),w=parseInt(f.paddingTop),V=parseInt(f.paddingBottom),J=w+V,q=parseInt(f.lineHeight),{scrollHeight:T}=n.value,E=(T-J)/q;E>e.rows&&(n.value.rows=e.maxrows?Math.min(E,e.maxrows):E),n.value.style.overflow=o}},p=o=>{t.value.trim&&(o=o.trim()),t.value.number&&(o=K(o)),a("update:modelValue",o),s()},m=o=>{c(),t.value.lazy||p(o.target.value)},F=o=>{const f=o.target.value;a("change",f),t.value.lazy&&p(f),t.value.trim&&(o.target.value=f.trim())},M=o=>{a("blur",o),d()};z(()=>{setTimeout(()=>{i()},e.autofocusDelay)}),H(()=>e.modelValue,()=>{R(c)}),z(()=>{setTimeout(()=>{i(),c()},100)});const N=Y(()=>{var f,w;const o=((w=(f=r.value.color)==null?void 0:f[g.value])==null?void 0:w[e.variant])||r.value.variant[e.variant];return U(D(r.value.base,r.value.form,r.value.rounded,r.value.placeholder,r.value.size[y.value],e.padded?r.value.padding[y.value]:"p-0",o==null?void 0:o.replaceAll("{color}",g.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:r,attrs:l,name:h,inputId:u,textarea:n,textareaClass:N,onInput:m,onChange:F,onBlur:M}}}),le=["id","value","name","rows","required","disabled","placeholder"];function ue(e,a,r,l,d,s){return C(),A("div",{class:x(e.ui.wrapper)},[G("textarea",Z({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:a[0]||(a[0]=(...u)=>e.onInput&&e.onInput(...u)),onBlur:a[1]||(a[1]=(...u)=>e.onBlur&&e.onBlur(...u)),onChange:a[2]||(a[2]=(...u)=>e.onChange&&e.onChange(...u))}),null,16,le),k(e.$slots,"default")],2)}const ze=j(oe,[["render",ue]]);class S extends Error{constructor(a){super(a),this.message=a,Object.setPrototypeOf(this,S.prototype)}}const ie=$({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:a,emit:r}){const l=X(),d=se(`form-${l}`);z(()=>{d.on(async t=>{var n;t.type!=="submit"&&((n=e.validateOn)!=null&&n.includes(t.type))&&await y(t.path,{silent:!0})})}),ee(()=>{d.reset()});const s=b([]);B("form-errors",s),B("form-events",d);const u=b({});B("form-inputs",u);async function g(){let t=await e.validate(e.state);if(e.schema)if(me(e.schema))t=t.concat(await ve(e.state,e.schema));else if(de(e.schema))t=t.concat(await ce(e.state,e.schema));else if(ye(e.schema))t=t.concat(await ge(e.state,e.schema));else if(he(e.schema))t=t.concat(await we(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function y(t,n={silent:!1}){let i=t;if(t&&!Array.isArray(t)&&(i=[t]),i){const c=s.value.filter(m=>!i.includes(m.path)),p=(await g()).filter(m=>i.includes(m.path));s.value=c.concat(p)}else s.value=await g();if(s.value.length>0){if(n.silent)return!1;throw new S(`Form validation failed: ${JSON.stringify(s.value,null,2)}`)}return e.state}async function h(t){var i;const n=t;try{(i=e.validateOn)!=null&&i.includes("submit")&&await y(),n.data=e.state,r("submit",n)}catch(c){if(!(c instanceof S))throw c;const p={...n,errors:s.value.map(m=>({...m,id:u.value[m.path]}))};r("error",p)}}return a({validate:y,errors:s,setErrors(t,n){n?s.value=s.value.filter(i=>i.path!==n).concat(t):s.value=t},async submit(){await h(new Event("submit"))},getErrors(t){return t?s.value.filter(n=>n.path===t):s.value},clear(t){t?s.value=s.value.filter(n=>n.path!==t):s.value=[]}}),{onSubmit:h,errors:te(s)}}});function de(e){return e.validate&&e.__isYupSchema__}function fe(e){return e.inner!==void 0}async function ce(e,a){try{return await a.validate(e,{abortEarly:!1}),[]}catch(r){if(fe(r))return r.inner.map(l=>({path:l.path??"",message:l.message}));throw r}}function me(e){return e.parse!==void 0}async function ve(e,a){const r=await a.safeParseAsync(e);return r.success===!1?r.error.issues.map(l=>({path:l.path.join("."),message:l.message})):[]}function ye(e){return e.validateAsync!==void 0&&e.id!==void 0}function pe(e){return e.isJoi===!0}async function ge(e,a){try{return await a.validateAsync(e,{abortEarly:!1}),[]}catch(r){if(pe(r))return r.details.map(l=>({path:l.path.join("."),message:l.message}));throw r}}function he(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function we(e,a){var l;return((l=(await("_parse"in a?a._parse(e):"_run"in a?a._run({typed:!1,value:e},{}):a(e))).issues)==null?void 0:l.map(d=>{var s;return{path:((s=d.path)==null?void 0:s.map(u=>u.key).join("."))||"",message:d.message}}))||[]}function be(e,a,r,l,d,s){return C(),A("form",{onSubmit:a[0]||(a[0]=W((...u)=>e.onSubmit&&e.onSubmit(...u),["prevent"]))},[k(e.$slots,"default",L(Q({errors:e.errors})))],32)}const Ie=j(ie,[["render",be]]);export{Ie as _,ze as a};
