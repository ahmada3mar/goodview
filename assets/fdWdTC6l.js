import{_ as g}from"./C3hOubfU.js";import{_ as w}from"./yexNJ7rl.js";import{_ as V}from"./p1Gztlze.js";import{r as b,i as k,o as i,c as l,a as v,b as o,w as u,g as a,C as h,z as y,n as C,j as I,_ as P}from"./CFRI14Bu.js";import{_ as U}from"./Cq27y860.js";import{a as N}from"./CHKzfu3j.js";import{_ as S}from"./CXYtiY5K.js";import"./CEYtYBCa.js";import"./DIA0rVT0.js";import"./DtbootZb.js";import"./DKy0o06d.js";import"./DBnrgE5m.js";const $={class:"flex flex-col"},z={key:0,class:"text-red-500 font-bold"},B={class:"flex flex-col"},O={key:0,class:"text-red-500 font-bold"},R={__name:"QuoteInputs",props:{isVisible:{type:Boolean,default:!1}},setup(m){const c=m,t=b(""),s=b(""),e=k({to:null,from:null}),d=()=>{t.value||(e.from=!0),s.value||(e.to=!0),!(!s.value||!t.value)&&I().push({path:"/quote",query:{from:t.value,to:s.value}})};return(p,r)=>{const f=g,_=w,x=V;return i(),l("div",{class:C([{"opacity-100 translate-y-0":c.isVisible,"opacity-0 translate-y-36":!c.isVisible},"transition-all duration-1000 delay-150 ease-in-out flex flex-wrap flex-col md:flex-row gap-4 md:gap-2 w-full md:items-start justify-center items-center"])},[v("div",$,[o(_,{inputClass:a(e).from?"!border-red-500 focus:ring-red-500":"","onUpdate:modelValue":[r[0]||(r[0]=n=>a(e).from=!1),r[1]||(r[1]=n=>h(t)?t.value=n:null)],type:"number",modelValue:a(t),size:"lg",placeholder:"From zip code",ui:{base:"relative block w-80  focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-75 border-4 border-primary-500",placeholder:"placeholder-gray-500"}},{trailing:u(()=>[o(f,{role:"button",name:"i-carbon-location",class:"w-5 h-5 text-gray-500"})]),_:1},8,["inputClass","modelValue"]),a(e).from?(i(),l("span",z,"Please enter a valid ZIP code")):y("",!0)]),v("div",B,[o(_,{"onUpdate:modelValue":[r[2]||(r[2]=n=>a(e).to=!1),r[3]||(r[3]=n=>h(s)?s.value=n:null)],inputClass:a(e).to?"!border-red-500 focus:ring-red-500":"",modelValue:a(s),size:"lg",placeholder:"To zip code",type:"number",ui:{base:"relative block w-80 focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-75 border-4 border-primary-500",placeholder:"placeholder-gray-500"}},{trailing:u(()=>[o(f,{role:"button",name:"i-carbon-location",class:"w-5 h-5 text-gray-500"})]),_:1},8,["inputClass","modelValue"]),a(e).to?(i(),l("span",O,"Please enter a valid ZIP code")):y("",!0)]),o(x,{onClick:d,label:"Get a free quote",class:"font-bold text-center justify-center px-10 text-black border-1 border-gray-900 h-12 w-80 md:w-auto"})],2)}}},q={},Z={class:"flex flex-col h-full"};function j(m,c){const t=R,s=U,e=N,d=S;return i(),l("div",Z,[o(s,{background:"/assets/banner-mini.webp",class:"h-[calc(100dvh-4rem)]",title:" Professional Moving Services & Affordable Prices",text:"For long-distance moves in US, with Pick Up and Delivery Service Nation Wide"},{body:u(p=>[o(t,{isVisible:p.isVisible},null,8,["isVisible"])]),_:1}),o(e,{img:"/assets/new_truck.png",title:"FOR MOVING ACROSS THE COUNTRY",text:"GoodView Moving And Storage is a family business that was established in New Jersey, and is now a moving company led by the third generation. We have extensive experience of removals and transport services, both within and outside the country, and have acquired a good reputation with our customers. Our ambition is that through our highly professional staff we will be able to offer transport services that meet our customers' needs and special wishes."}),o(d)])}const K=P(q,[["render",j]]);export{K as default};
