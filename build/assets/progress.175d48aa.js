import{r as e,j as s}from"./index.d04af6e7.js";const i=e.exports.memo(r=>(e.exports.useEffect(()=>{const t=a=>{const l=a.getAttribute("aria-valuenow");a.style.width="0%",a.style.transition="width 2s",a.style.width=l+"%"},o=document.querySelectorAll('[data-toggle="progress-bar"]');Array.from(o,a=>t(a))}),s(e.exports.Fragment,{children:s("div",{className:`progress bg-soft-${r.softcolors} ${r.className}`,style:r.style,children:s("div",{className:`progress-bar bg-${r.color}`,"data-toggle":"progress-bar",role:"progressbar","aria-valuenow":r.value,"aria-valuemin":r.minvalue,"aria-valuemax":r.maxvalue})})})));i.displayName="Progress";export{i as P};
