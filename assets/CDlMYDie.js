import{_ as k}from"./CnKNOPPP.js";import{_ as V}from"./BQ0iWhH-.js";import{_ as w}from"./CaXkjjOm.js";import{r as b,k as h,o as u,c,a as i,n as p,b as s,w as f,j as o,ae as x,B as y,d as j,l as C}from"./C6FlvUWt.js";const I={class:"flex flex-col"},B={key:0,class:"text-red-500 font-jakarta font-bold"},P={class:"flex flex-col"},z={key:0,class:"text-red-500 font-jakarta font-bold"},E={__name:"QuoteInputs",props:{isVisible:{type:Boolean,default:!1}},setup(_){const a=_,r=b(""),l=b(""),t=h({to:null,from:null}),g=()=>{r.value||(t.from=!0),l.value||(t.to=!0),!(!l.value||!r.value)&&C().push({path:"/quote",query:{from:r.value,to:l.value}})};return(U,e)=>{const d=k,m=V,v=w;return u(),c("div",{class:p([{"opacity-100 translate-y-0":a.isVisible,"opacity-0 translate-y-36":!a.isVisible},"bg-[#f2f2f2] transition-all duration-1000 delay-150 ease-in-out px-[20px] sm:px-[40px] rounded-[10px] py-[20px]"])},[i("h2",{class:p([{"opacity-100 translate-y-0":a.isVisible,"opacity-0 translate-y-36":!a.isVisible},"font-jakarta font-[600] transition-all duration-1000 delay-150 ease-in-out text-center sm:text-start text-[28px] mb-[10px] text-black"])},"Free Moving Estimate",2),i("div",{class:p([{"opacity-100 translate-y-0":a.isVisible,"opacity-0 translate-y-36":!a.isVisible},"transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2 w-full mb-5 md:items-start justify-center items-center"])},[i("div",I,[s(m,{inputClass:o(t).from?"!border-red-500 focus:ring-red-500":"","onUpdate:modelValue":[e[0]||(e[0]=n=>o(t).from=!1),e[1]||(e[1]=n=>x(r)?r.value=n:null)],type:"text",modelValue:o(r),size:"lg",placeholder:"From zip code",maxlength:"5",ui:{base:"relative block md:w-80   focus:border-primary-500 h-12 disabled:cursor-not-allowed bg-[#f2f2f2] disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]",placeholder:"placeholder-gray-500"}},{trailing:f(()=>[s(d,{role:"button",name:"i-carbon-location",class:"w-5 h-5 font-jakarta text-black-400"})]),_:1},8,["inputClass","modelValue"]),o(t).from?(u(),c("span",B,"Please enter a valid ZIP code")):y("",!0)]),i("div",P,[s(m,{"onUpdate:modelValue":[e[2]||(e[2]=n=>o(t).to=!1),e[3]||(e[3]=n=>x(l)?l.value=n:null)],inputClass:o(t).to?"!border-red-500 focus:ring-red-500":"",modelValue:o(l),size:"lg",placeholder:"To zip code",type:"text",maxlength:"5",ui:{base:"relative block md:w-80  focus:border-primary-500 h-12 bg-[#f2f2f2]  disabled:cursor-not-allowed disabled:opacity-75 border-0 border-primary-500 !rounded-[10px]",placeholder:"placeholder-gray-500"}},{trailing:f(()=>[s(d,{role:"button",name:"i-carbon-location",class:"w-5 h-5 font-jakarta text-black-400"})]),_:1},8,["inputClass","modelValue"]),o(t).to?(u(),c("span",z,"Please enter a valid ZIP code")):y("",!0)]),s(v,{onClick:g,class:"font-bold text-center justify-center rounded-[10px] font-jakarta px-10 text-black border-1 border-gray-900 h-12 w-auto md:w-[40rem] lg:w-auto"},{default:f(()=>[e[4]||(e[4]=j(" Get a free quote ")),s(d,{name:"i-carbon-arrow-right",class:"w-5 h-5"})]),_:1})],2)],2)}}};export{E as _};
