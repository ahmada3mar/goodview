import{o as u}from"./-trZrwcR.js";import{r as a,e as l,S as f}from"./CFRI14Bu.js";function r(t,n){if(t)return t;let e=n??"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function v(t,n){let e=a(r(t.value.type,t.value.as));return l(()=>{e.value=r(t.value.type,t.value.as)}),f(()=>{var o;e.value||u(n)&&u(n)instanceof HTMLButtonElement&&!((o=u(n))!=null&&o.hasAttribute("type"))&&(e.value="button")}),e}export{v as s};