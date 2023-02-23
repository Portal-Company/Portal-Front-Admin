import{Y as S,a8 as F,r as a,k as R,f as D,h as E,b as s,i as O,j as e,ay as U,al as V,X as B,R as k,C as t,c as i}from"./index.d04af6e7.js";const L=V("h4");L.displayName="DivStyledAsH4";const X=S("alert-heading",{Component:L}),Y=S("alert-link",{Component:F}),q={variant:"primary",show:!0,transition:B,closeLabel:"Close alert"},C=a.exports.forwardRef((w,p)=>{const{bsPrefix:g,show:c,closeLabel:b,closeVariant:x,className:v,children:N,variant:o,onClose:d,dismissible:h,transition:m,...u}=R(w,{show:"onClose"}),r=D(g,"alert"),A=E(y=>{d&&d(!1,y)}),n=m===!0?B:m,f=s("div",{role:"alert",...n?void 0:u,ref:p,className:O(v,r,o&&`${r}-${o}`,h&&`${r}-dismissible`),children:[h&&e(U,{onClick:A,"aria-label":b,variant:x}),N]});return n?e(n,{unmountOnExit:!0,...u,ref:void 0,in:c,children:f}):c?f:null});C.displayName="Alert";C.defaultProps=q;const l=Object.assign(C,{Link:Y,Heading:X}),G=a.exports.memo(()=>{const[w,p]=a.exports.useState(!0),[g,c]=a.exports.useState(!0),[b,x]=a.exports.useState(!0),[v,N]=a.exports.useState(!0),[o,d]=a.exports.useState(!0),[h,m]=a.exports.useState(!0),[u,r]=a.exports.useState(!0),[A,n]=a.exports.useState(!0),[f,y]=a.exports.useState(!0),[z,T]=a.exports.useState(!0),[j,H]=a.exports.useState(!0),[M,_]=a.exports.useState(!0),[P,W]=a.exports.useState(!0),[I,$]=a.exports.useState(!0);return s(a.exports.Fragment,{children:[s(k,{children:[e(t,{sm:"12",lg:"6",children:s(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Basic Alerts"})})}),s(i.Body,{children:[e("p",{className:"mb-4",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"}),s(l,{variant:"alert alert-success alert-dismissible d-flex align-items-center gap-2 fade show mb-3",show:w,onClose:()=>p(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"thumb_up"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"info alert-dismissible d-flex align-items-center gap-2 fade show mb-3",className:"mb-3",show:g,role:"alert",onClose:()=>c(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"notifications"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"warning alert-dismissible d-flex align-items-center gap-2 fade show mb-3",className:" mb-3",show:b,role:"alert",onClose:()=>x(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"notifications"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"danger alert-dismissible d-flex align-items-center gap-2 fade show mb-3",className:" mb-3",show:v,role:"alert",onClose:()=>N(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"rotate_right"})}),e("span",{children:" This is a success alert\u2014check it out!"})]})]})]})}),e(t,{sm:"12",lg:"6",children:s(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Basic Alerts With Icons"})})}),s(i.Body,{children:[s("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[e("symbol",{id:"check-circle-fill",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),e("symbol",{id:"info-fill",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})}),e("symbol",{id:"exclamation-triangle-fill",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})]}),s(l,{variant:"alert alert-primary ",className:"d-flex align-items-center",role:"alert",children:[e("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",children:e("use",{href:"#info-fill"})}),e("div",{children:"An example alert with an icon1"})]}),s(l,{variant:"alert alert-success",className:"d-flex align-items-center",role:"alert",children:[e("svg",{width:"24",height:"24",className:"bi flex-shrink-0 me-2",children:e("use",{href:"#check-circle-fill"})}),e("div",{children:"An example success alert with an icon"})]}),s(l,{variant:"alert alert-warning",className:"d-flex align-items-center",role:"alert",children:[e("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",children:e("use",{href:"#exclamation-triangle-fill"})}),e("div",{children:"An example warning alert with an icon"})]}),s(l,{variant:"alert alert-danger",className:"d-flex align-items-center",role:"alert",children:[e("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",children:e("use",{href:"#exclamation-triangle-fill"})}),e("div",{children:"An example danger alert with an icon"})]})]})]})})]}),s(k,{children:[e(t,{sm:"12",lg:"6",children:s(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Basic Line Alerts"})})}),s(i.Body,{children:[s(l,{variant:"alert alert-solid alert-success d-flex align-items-center gap-2 alert-dismissible fade show mb-3",className:"mb-3",show:o,role:"alert",onClose:()=>d(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"thumb_up"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-solid alert-info d-flex align-items-center gap-2 alert-dismissible fade show mb-3",className:"mb-3",show:h,role:"alert",onClose:()=>m(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"notifications"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-solid alert-warning d-flex align-items-center gap-2 alert-dismissible fade show mb-3",className:" mb-3",show:u,role:"alert",onClose:()=>r(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"notifications"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-solid alert-danger d-flex align-items-center gap-2 alert-dismissible fade show mb-3",show:A,role:"alert",onClose:()=>n(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"rotate_right"})}),e("span",{children:" This is a success alert\u2014check it out!"})]})]})]})}),e(t,{sm:"12",lg:"6",children:s(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Basic Line Alerts With Icons"})})}),s(i.Body,{children:[s("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"},children:[e("symbol",{id:"check-circle-fill",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),e("symbol",{id:"info-fill",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})}),e("symbol",{id:"exclamation-triangle-fill",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})})]}),s(l,{variant:"alert alert-solid alert-primary",className:"d-flex align-items-center",role:"alert",children:[e("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",children:e("use",{href:"#info-fill"})}),e("div",{children:"An example alert alert-solid with an icon"})]}),s(l,{variant:"alert alert-solid alert-success",className:"d-flex align-items-center",role:"alert",children:[e("svg",{width:"24",height:"24",className:"bi flex-shrink-0 me-2",children:e("use",{href:"#check-circle-fill"})}),e("div",{children:"An example success alert alert-solid with an icon"})]}),s(l,{variant:"alert alert-solid alert-warning",className:"d-flex align-items-center",role:"alert",children:[e("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",children:e("use",{href:"#exclamation-triangle-fill"})}),e("div",{children:"An example warning alert alert-solid with an icon"})]}),s(l,{variant:"alert alert-solid alert-danger",className:"d-flex align-items-center",role:"alert",children:[e("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",children:e("use",{href:"#exclamation-triangle-fill"})}),e("div",{children:"An example danger alert alert-solid with an icon"})]})]})]})})]}),s(k,{children:[e(t,{sm:"12",children:s(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Alerts With Background"})})}),s(i.Body,{children:[s(l,{variant:"alert alert-left alert-success  d-flex align-items-center gap-2 alert-dismissible fade show mb-3",show:f,role:"alert",onClose:()=>y(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"thumb_up"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-top alert-info d-flex align-items-center gap-2 alert-dismissible fade show mb-3",show:z,role:"alert",onClose:()=>T(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"notifications"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-right alert-warning   d-flex align-items-center gap-2 alert-dismissible fade show mb-3",show:j,role:"alert",onClose:()=>H(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"notifications"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-bottom alert-danger  d-flex align-items-center gap-2 alert-dismissible fade show mb-3",show:M,role:"alert",onClose:()=>_(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"rotate_right"})}),e("span",{children:" This is a success alert\u2014check it out!"})]})]})]})}),e(t,{lg:12,children:s(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"For Banner"})})}),s(l,{variant:"alert alert-warning rounded-0 alert-dismissible fade show d-flex align-items-center gap-2",show:P,role:"alert",onClose:()=>W(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"rotate_right"})}),e("span",{children:" This is a success alert\u2014check it out!"})]}),s(l,{variant:"alert alert-warning alert-solid rounded-0 alert-dismissible fade show d-flex align-items-center gap-2",show:I,role:"alert",onClose:()=>$(!1),dismissible:!0,children:[e("span",{children:e("i",{className:"material-symbols-outlined",children:"rotate_right"})}),e("span",{children:" This is a success alert\u2014check it out!"})]})]})})]})]})});G.displayName="Alerts";export{G as default};