import{r as d,f as V,j as e,i as x,a8 as L,b as t,R as g,C as c,c as i}from"./index.d04af6e7.js";const N={active:!1,linkProps:{}},C=d.exports.forwardRef(({bsPrefix:s,active:n,children:a,className:l,as:h="li",linkAs:o=L,linkProps:m,href:b,title:u,target:f,...p},v)=>{const H=V(s,"breadcrumb-item");return e(h,{ref:v,...p,className:x(H,l,{active:n}),"aria-current":n?"page":void 0,children:n?a:e(o,{...m,href:b,title:u,target:f,children:a})})});C.displayName="BreadcrumbItem";C.defaultProps=N;const k=C,I={label:"breadcrumb",listProps:{}},w=d.exports.forwardRef(({bsPrefix:s,className:n,listProps:a,children:l,label:h,as:o="nav",...m},b)=>{const u=V(s,"breadcrumb");return e(o,{"aria-label":h,className:n,ref:b,...m,children:e("ol",{...a,className:x(u,a==null?void 0:a.className),children:l})})});w.displayName="Breadcrumb";w.defaultProps=I;const r=Object.assign(w,{Item:k}),y=d.exports.memo(()=>t(d.exports.Fragment,{children:[t(g,{children:[e(c,{sm:"12",lg:"6",children:t(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Breadcrumb"})})}),t(i.Body,{children:[t("p",{children:["Use the items in order to programatically generate the breadcrumb links.use class ",e("code",{children:".breadcrumb to ol"})]}),e(r,{bsPrefix:"breadcrumb ",children:e(r.Item,{active:!0,children:"Home"})}),t(r,{bsPrefix:"breadcrumb",children:[e(r.Item,{href:"#",children:"Home"}),e(r.Item,{active:!0,children:"Library"})]}),t(r,{bsPrefix:"breadcrumb",children:[e(r.Item,{href:"#",children:"Home"}),e(r.Item,{href:"#",children:"Library"}),e(r.Item,{active:!0,children:"Data"})]})]})]})}),e(c,{sm:"12",lg:"6",children:t(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Breadcrumb With Icon"})})}),t(i.Body,{children:[t("p",{children:["Use the items in order to programatically generate the breadcrumb links.use class ",e("code",{children:".breadcrumb to ol"})," with Icon"]}),e(r,{bsPrefix:"breadcrumb",children:t(r.Item,{active:!0,children:[".",e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]})}),t(r,{bsPrefix:"breadcrumb",children:[t(r.Item,{href:"#",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]}),e(r.Item,{active:!0,children:"Library"})]}),t(r,{bsPrefix:"breadcrumb",children:[t(r.Item,{href:"#",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]}),e(r.Item,{href:"#",children:"Library"}),e(r.Item,{active:!0,children:"Data"})]})]})]})})]}),t(g,{children:[e(c,{sm:"12",lg:"6",children:t(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Breadcrumb"})})}),t(i.Body,{children:[t("p",{children:["use class ",e("code",{children:".breadcrumb .bg-primary"})]}),e(r,{bsPrefix:"breadcrumb bg-primary",children:e(r.Item,{active:!0,className:"text-white",children:"Home"})}),t(r,{bsPrefix:"breadcrumb bg-primary",children:[e(r.Item,{active:!0,className:"text-white",children:"Home"}),e(r.Item,{active:!0,className:"text-white",children:"Library"})]}),t(r,{bsPrefix:"breadcrumb bg-primary",children:[e(r.Item,{active:!0,className:"text-white",children:"Home"}),e(r.Item,{active:!0,className:"text-white",children:"Library"}),e(r.Item,{active:!0,className:"text-white",children:"Data"})]})]})]})}),e(c,{sm:"12",lg:"6",children:t(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Breadcrumb With Icon"})})}),t(i.Body,{children:[t("p",{children:["use class ",e("code",{children:".breadcrumb .bg-primary "})," With Icon."]}),e(r,{bsPrefix:"breadcrumb bg-primary",children:t(r.Item,{active:!0,className:"text-white",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]})}),t(r,{bsPrefix:"breadcrumb bg-primary",children:[t(r.Item,{active:!0,className:"text-white",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]}),e(r.Item,{active:!0,className:"text-white",children:"Library"})]}),t(r,{bsPrefix:"breadcrumb bg-primary",children:[t(r.Item,{active:!0,className:"text-white",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]}),e(r.Item,{active:!0,className:"text-white",children:"Library"}),e(r.Item,{active:!0,className:"text-white",children:"Data"})]})]})]})}),e(c,{sm:"12",lg:"6",children:t(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Breadcrumb With Icon"})})}),t(i.Body,{children:[t("p",{children:["use class ",e("code",{children:".breadcrumb .iq-bg-primary"})]}),e(r,{bsPrefix:"breadcrumb bg-soft-primary",children:t(r.Item,{active:!0,children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]})}),t(r,{bsPrefix:"breadcrumb bg-soft-primary",children:[t(r.Item,{href:"#",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]}),e(r.Item,{active:!0,children:"Library"})]}),t(r,{bsPrefix:"breadcrumb bg-soft-primary",children:[t(r.Item,{href:"#",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]}),e(r.Item,{href:"#",children:"Library"}),e(r.Item,{active:!0,children:"Data"})]})]})]})}),e(c,{sm:"12",lg:"6",children:t(i,{children:[e(i.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Breadcrumb With Icon"})})}),t(i.Body,{children:[t("p",{children:["use class ",e("code",{children:".breadcrumb .iq-bg-danger"})]}),e(r,{bsPrefix:"breadcrumb bg-soft-danger",children:t(r.Item,{active:!0,children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Home"]})}),t(r,{bsPrefix:"breadcrumb bg-soft-danger",children:[t(r.Item,{className:"text-danger",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2 text-danger",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e("span",{className:"text-danger",children:"Home"})]}),e(r.Item,{active:!0,children:"Library"})]}),t(r,{bsPrefix:"breadcrumb bg-soft-danger",children:[t(r.Item,{className:"text-danger",children:[e("svg",{width:"14",height:"14",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"me-2 text-danger",children:e("path",{d:"M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e("span",{className:"text-danger",children:"Home"})]}),e(r.Item,{className:"text-danger",children:e("span",{className:"text-danger",children:"Library"})}),e(r.Item,{active:!0,children:"Data"})]})]})]})})]})]}));y.displayName="Breadcrumbs";export{y as default};