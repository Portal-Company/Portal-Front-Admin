import{u as B,c as G,a as d,b as T}from"./index.esm.997dd77f.js";import{g as I,u as R,a as A,Q as j,j as a,R as L,b as o,C as u,F as r,c as S,B as V}from"./index.3b1adc00.js";const Q=()=>{var h,m,g,p,b,x,C,F,v,N,y,E,U,z,D;const c=I(),{data:i}=R(`/user/list/${c==null?void 0:c.sub}`),e=B({initialValues:{nome:"",fotoUrl:"",organizador:"",data:"",descricao:""},validationSchema:G({nome:d().required("Este campo \xE9 obrigat\xF3rio"),fotoUrl:d().required("Este campo  \xE9 obrigat\xF3rio"),descricao:d().required("Este campo \xE9 obrigat\xF3rio"),data:T().min(new Date,"A data deve ser maior ou igual ao dia de hoje").required("Este campo \xE9 obrigat\xF3rio"),organizador:d().required("Este campo \xE9 obrigat\xF3rio")}),onSubmit:async t=>{var l,q,w;console.log(t);try{const n=new FormData;n.append("file",t==null?void 0:t.fotoUrl[0]);const s=await $(n);s&&(t={...t,fotoUrl:s==null?void 0:s.id,escolaId:(l=i==null?void 0:i.Escola)==null?void 0:l.id},await A.post("/activity/post",t)&&(j.success("Actividade cadastrada com sucesso"),e.resetForm()))}catch(n){j.error((w=(q=n==null?void 0:n.response)==null?void 0:q.data)==null?void 0:w.message)}}});async function $(t){return(await A.post("/file",t)).data}return a(L,{children:o(u,{children:[a(u.Header,{className:"d-flex justify-content-between",children:a("div",{className:"header-title",children:a("h4",{className:"card-title",children:" Adicionar Actividade"})})}),a(u.Body,{children:o(r,{onSubmit:e.handleSubmit,encType:"multipart/form-data",children:[o(L,{children:[o(S,{md:"6",className:"mb-3",children:[a(r.Label,{md:"6",htmlFor:"validationDefault01",children:"Nome da Actividade"}),a(r.Control,{type:"text",id:"nome",name:"nome",value:e.values.nome,onChange:e.handleChange,required:!0}),((h=e==null?void 0:e.touched)==null?void 0:h.nome)&&((m=e==null?void 0:e.errors)==null?void 0:m.nome)?a("label",{className:"mt-1 text-danger",children:(g=e==null?void 0:e.errors)==null?void 0:g.nome}):null,o(r.Group,{className:"mb-3 form-group mt-2",children:[a(r.Label,{htmlFor:"exampleFormControlTextarea1",children:"Descri\xE7\xE3o"}),a(r.Control,{as:"textarea",id:"descricao",value:e.values.descricao,name:"descricao",onChange:e.handleChange,rows:"5"}),((p=e==null?void 0:e.touched)==null?void 0:p.descricao)&&((b=e==null?void 0:e.errors)==null?void 0:b.descricao)?a("label",{className:"mt-1 text-danger",children:(x=e==null?void 0:e.errors)==null?void 0:x.descricao}):null]})]}),o(S,{md:"6",className:"mb-3",children:[a(r.Label,{md:"6",htmlFor:"validationDefault01",children:"Organizador"}),a(r.Control,{type:"text",id:"organizador",name:"organizador",value:e.values.organizador,onChange:e.handleChange,required:!0}),((C=e==null?void 0:e.touched)==null?void 0:C.organizador)&&((F=e==null?void 0:e.errors)==null?void 0:F.organizador)?a("label",{className:"mt-1 text-danger",children:(v=e==null?void 0:e.errors)==null?void 0:v.organizador}):null,o(r.Group,{className:"mb-3 form-group mt-2",children:[a(r.Label,{className:"custom-file-input",children:"Carregar imagem"}),a(r.Control,{type:"file",id:"fotoUrl",name:"fotoUrl",onChange:t=>{var l;e.setFieldValue("fotoUrl",(l=t==null?void 0:t.currentTarget)==null?void 0:l.files)}}),((N=e==null?void 0:e.touched)==null?void 0:N.fotoUrl)&&((y=e==null?void 0:e.errors)==null?void 0:y.fotoUrl)?a("label",{className:"mt-1 text-danger",children:(E=e==null?void 0:e.errors)==null?void 0:E.fotoUrl}):null]}),a(r.Label,{md:"6",htmlFor:"validationDefault01",children:"Data"}),a(r.Control,{type:"date",id:"data",name:"data",value:e.values.data,onChange:e.handleChange,required:!0}),((U=e==null?void 0:e.touched)==null?void 0:U.data)&&((z=e==null?void 0:e.errors)==null?void 0:z.data)?a("label",{className:"mt-1 text-danger",children:(D=e==null?void 0:e.errors)==null?void 0:D.data}):null]})]}),a(r.Group,{children:a(V,{variant:"btn btn-primary",type:"submit",children:"Cadastrar"})})]})})]})})};export{Q as default};
