import{m as h,i as f,j as x,k as v,l as y,t as w,p as k,q as z,s as j,g as b,v as D,x as $,y as O,c as m,z as A,A as M,B as p,C as N,D as U,r as _,E as L,b as V,u as n,e as a,d as t,w as E,F as H,G as T}from"./DsNl1WvM.js";import{_ as F}from"./CRncJd4l.js";import{u as G}from"./DNYwAAtS.js";const I={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},R={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},q=h(f.ui.strategy,f.ui.skeleton,R),J=v({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(s){const{ui:o,attrs:l}=y("skeleton",w(s,"ui"),q),c=k(()=>z(j(o.value.base,o.value.background,o.value.rounded),s.class));return{ui:o,attrs:l,skeletonClass:c}}});function P(s,o,l,c,u,g){return b(),D(O(s.as),$({class:s.skeletonClass},s.attrs),null,16,["class"])}const Y=x(J,[["render",P]]),d=h(f.ui.strategy,f.ui.badge,I),K=v({inheritAttrs:!1,props:{size:{type:String,default:()=>d.default.size,validator(s){return Object.keys(d.size).includes(s)}},color:{type:String,default:()=>d.default.color,validator(s){return[...f.ui.colors,...Object.keys(d.color)].includes(s)}},variant:{type:String,default:()=>d.default.variant,validator(s){return[...Object.keys(d.variant),...Object.values(d.color).flatMap(o=>Object.keys(o))].includes(s)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(s){const{ui:o,attrs:l}=y("badge",w(s,"ui"),d),{size:c,rounded:u}=N({ui:o,props:s}),g=k(()=>{var i,e;const r=((e=(i=o.value.color)==null?void 0:i[s.color])==null?void 0:e[s.variant])||o.value.variant[s.variant];return z(j(o.value.base,o.value.font,u.value,o.value.size[c.value],r==null?void 0:r.replaceAll("{color}",s.color)),s.class)});return{attrs:l,badgeClass:g}}});function Q(s,o,l,c,u,g){return b(),m("span",$({class:s.badgeClass},s.attrs),[A(s.$slots,"default",{},()=>[M(p(s.label),1)])],16)}const W=x(K,[["render",Q]]),X={class:"flex flex-col h-full"},Z={key:0},ee={class:"h-[20rem] md:h-[25rem] bg-gray-700 relative"},te={class:"relative flex flex-col max-w-[1360px] mx-auto items-center justify-center gap-10 px-5 py-10 h-full"},se={class:"flex flex-col items-center gap-5 w-full text-center"},ae={class:"container bg-white lg:mx-auto px-2 sm:px-10 py-10 mb-32"},oe={class:"flex flex-col md:flex-row mx-auto gap-6"},le={class:"md:w-2/3"},ne={class:"space-y-3"},ce={class:"w-full md:w-1/3"},re={class:"bg-primary-500 w-full p-3 md:p-10 rounded-none"},ie={class:"container"},de={class:"bg-black flex flex-col gap-5 justify-center -mt-36 rounded-[10px] p-5"},ue={class:"flex flex-col bg-zinc-900 gap-5 rounded-[10px] p-3 md:p-10"},ge={class:"space-y-4"},be={key:1,class:"flex flex-col h-full"},fe={class:"container bg-white p-3 md:p-10 mx-auto px-2 py-10 mb-32"},me={class:"flex flex-col md:flex-row mx-auto gap-6"},pe={class:"md:w-2/3"},_e={class:"text-3xl font-jakarta md:text-4xl font-extrabold"},he={class:"text-sm italic font-semibold text-stone-500 font-rubik mb-10 md:leading-8"},xe={class:"text-lg font-rubik md:text-[18px] mt-5 md:font-[300] md:leading-8"},ve={class:"card-img"},ye={class:"lazy-image bg-cover bg-center bg-no-repeat transition-opacity rounded duration-500 ease-in-out w-96 h-96 object-cover"},we={class:"bg-primary-500 w-full p-3 md:p-10 rounded-none"},ke={class:"container"},ze={class:"bg-black flex flex-col gap-5 justify-center -mt-36 rounded-[10px] p-10"},je=["innerHTML"],Be={__name:"[id]",setup(s){const o=U(),l=_({}),c=_(!0),u=async()=>{c.value=!0;const{data:r,error:i}=await G(`https://api.goodview-moving.com/api/blogs/${o.params.id}`,"$BdYxHU9nwS");if(r.value&&(l.value=r.value,c.value=!1),i.value)throw T({statusCode:i.value.statusCode})};L(()=>{u()});const g=r=>new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(r,i)=>{const e=Y,S=F,C=W,B=V("lazy");return b(),m("div",X,[n(c)?(b(),m("div",Z,[a("div",ee,[i[0]||(i[0]=a("div",{class:"absolute inset-0 bg-gradient-to-t to-black from-primary-500/50"},null,-1)),a("div",te,[a("div",se,[t(e,{class:"bg-zinc-400 h-12 w-3/4"}),t(e,{class:"bg-zinc-400 h-6 w-1/2"})])])]),a("div",ae,[a("div",oe,[a("div",le,[t(e,{class:"bg-zinc-400 h-12 w-3/4 mb-4"}),t(e,{class:"bg-zinc-400 h-4 w-1/4 mb-4"}),t(e,{class:"bg-zinc-400 h-8 w-24 mb-4"}),a("div",ne,[t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"}),t(e,{class:"bg-zinc-400 h-4 w-4/6"})])]),a("div",ce,[t(e,{class:"bg-zinc-400 h-[250px] w-full"})])])]),a("div",re,[a("div",ie,[a("div",de,[a("div",ue,[a("div",ge,[t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-4/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-4/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-4/6"}),t(e,{class:"bg-zinc-400 h-4 w-full"}),t(e,{class:"bg-zinc-400 h-4 w-5/6"})])])])])])])):n(l).id?(b(),m("div",be,[t(S,{background:n(l).cover,class:"h-[20rem] md:h-[25rem]",title:n(l).heading,text:n(l).excerpt},null,8,["background","title","text"]),a("div",fe,[a("div",me,[a("div",pe,[a("h2",_e,p(n(l).title),1),a("span",he,p(g(n(l).date)),1),t(C,{color:"black",label:n(l).category,class:"ml-2 mt-2"},null,8,["label"]),a("p",xe,p(n(l).shortDescription),1)]),a("div",ve,[E(a("div",ye,null,512),[[B,n(l).image,"background-image"]])])])]),a("div",we,[a("div",ke,[a("div",ze,[a("div",{innerHTML:n(l).content,class:"text-white"},null,8,je)])])])])):H("",!0)])}}};export{Be as default};
