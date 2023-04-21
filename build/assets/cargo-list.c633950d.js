import{a as x,Q as m,b as t,j as e,d as j,F as g,e as S,c as v,B as b,r as h,g as H,u as L,R as B,C as k,L as w,m as F}from"./index.3b1adc00.js";import{M as W}from"./index.ef0c42f4.js";import{u as $,c as D}from"./index.esm.997dd77f.js";import{M as p}from"./Modal.63283be8.js";function U({onClose:l,item:o,mutate:c,setShowModalUpadate:s}){const n=$({initialValues:{nome:o==null?void 0:o.nome},validationSchema:D({}),onSubmit:async C=>{var d,u;try{await x.put(`/role/put/${o==null?void 0:o.id}`,C)&&(m.success("Curso actualizado com sucesso"),c(),s(!1))}catch(r){m.error((u=(d=r==null?void 0:r.response)==null?void 0:d.data)==null?void 0:u.message)}}});return t(p,{show:!0,onHide:l,children:[e(p.Header,{closeButton:!0,children:e(p.Title,{children:"Actualizar Cargo"})}),e(j.Body,{style:{width:"100%",padding:"1rem 1rem",display:"flex"},children:t(g,{onSubmit:n==null?void 0:n.handleSubmit,encType:"multipart/form-data",children:[e(S,{children:t(v,{xs:12,sm:12,md:12,lg:50,xl:20,className:"mb-3 ",children:[e(g.Label,{htmlFor:"validationCustom05",children:"Nome"}),e(g.Control,{onChange:n.handleChange,name:"nome",value:n.values.nome,type:"text",id:"nome"})]})}),t(p.Footer,{children:[e(b,{variant:"secondary",onClick:l,children:"Cancelar"}),e(b,{type:"submit",children:"Actualizar"})]})]})})]})}const E=h.exports.memo(()=>{const l=H(),{data:o}=L(`/user/list/${l==null?void 0:l.sub}`),{data:c}=L("/role/list/"),[s,n]=h.exports.useState({});console.log(o);const[C,d]=h.exports.useState(!1),[u,r]=h.exports.useState(!1);function f(){F("/role/list/")}async function N(a){try{const i=await x.delete(`role/delete/${a}`);i!=null&&i.data&&(m.success("deletado com sucesso!"),f(),d(!1))}catch{m.error("Erro inesperado")}}function y(a){d(!0),n(a)}function M(a){r(!0),n(a)}return t(h.exports.Fragment,{children:[u?e(U,{onClose:()=>r(!1),setShowModalUpadate:r,mutate:f,item:s}):null,C?e(W,{onClose:()=>d(!1),onConfirm:()=>N(s==null?void 0:s.id),item:s,desc:"cargo de"}):null,e(B,{children:e(v,{sm:"12",children:t(k,{children:[e(k.Header,{className:"d-flex justify-content-between",children:e("div",{className:"header-title",children:e("h4",{className:"card-title",children:"Listagem de Cargos"})})}),e(k.Body,{className:"px-0",children:e("div",{className:"table-responsive",children:t("table",{id:"user-list-table",className:"table table-striped",role:"grid","data-toggle":"data-table",children:[e("thead",{children:t("tr",{className:"ligth",children:[e("th",{children:"Name do Cargo"}),e("th",{children:"Status"}),e("th",{"min-width":"100px",children:"Ac\xE7\xE3o"})]})}),e("tbody",{children:c==null?void 0:c.map((a,i)=>t("tr",{children:[e("td",{children:a.nome}),e("td",{children:e("span",{className:`badge ${a.color}`,children:a.status})}),e("td",{children:t("div",{className:"flex align-items-center list-user-action",children:[e(w,{onClick:()=>M(a),className:"btn btn-sm btn-icon btn-warning","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Edit",to:"#",children:e("span",{className:"btn-inner",children:t("svg",{width:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M15.1655 4.60254L19.7315 9.16854",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})," ",e(w,{onClick:()=>y(a),className:"btn btn-sm btn-icon btn-danger","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Delete",to:"#",children:e("span",{className:"btn-inner",children:t("svg",{width:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:[e("path",{d:"M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M20.708 6.23975H3.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})," "]})})]},i))})]})})})]})})})]})});E.displayName="CargoList";export{E as default};
