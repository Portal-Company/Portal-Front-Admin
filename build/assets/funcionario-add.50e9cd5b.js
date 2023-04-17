import{r as J,g as Y,u as K,a as g,Q as P,j as r,R,b as l,C as p,F as n,c as W,B as Z}from"./index.3b1adc00.js";import{u as k,c as ee,a as d}from"./index.esm.997dd77f.js";const ae=J.exports.memo(()=>{var b,x,C,F,v,N,I,y,E,q,D,S,G,U,_,f,w,L,j,A,B,T,$,M,V,H,O;const c=Y(),{data:u}=K(`/user/list/${c==null?void 0:c.sub}`),{data:h}=K("/role/list/"),i=[{nome:"Masculino",value:"M"},{nome:"Femenino",value:"F"}],e=k({initialValues:{nome:"",fotoUrl:"",telefone:"",email:"",cargoId:"",departamentoId:"",numero_agente:"",sexo:"",contatoId:""},validationSchema:ee({nome:d().required("Este campo \xE9 obrigat\xF3rio"),fotoUrl:d().required("Este campo  \xE9 obrigat\xF3rio"),email:d().email().required("Este campo \xE9 obrigat\xF3rio"),cargoId:d().required("Este campo \xE9 obrigat\xF3rio"),sexo:d().required("Este campo \xE9 obrigat\xF3rio")}),onSubmit:async a=>{var o,Q;try{const t={email:a.email,numeroTelefone:a.telefone.toString()},m=await(await g.post("/contact/post",t)).data,z=new FormData;z.append("file",a==null?void 0:a.fotoUrl[0]);const s=await X(z);s&&(a={...a,fotoUrl:s==null?void 0:s.id,contatoId:m==null?void 0:m.id,numero_agente:a.numero_agente.toString()},await g.post("/official/post",a)&&(P.success("Funcion\xE1rio cadastrado com sucesso"),e.resetForm()))}catch(t){P.error((Q=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:Q.message)}}});async function X(a){return(await g.post("/file",a)).data}return r(J.exports.Fragment,{children:r(R,{children:l(p,{children:[r(p.Header,{className:"d-flex justify-content-between",children:r("div",{className:"header-title",children:r("h4",{className:"card-title",children:" Cadastrar Funcionario"})})}),r(p.Body,{children:l(n,{onSubmit:e.handleSubmit,encType:"multipart/form-data",children:[l(R,{children:[l(W,{md:"6",className:"mb-3",children:[l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{md:"6",htmlFor:"validationDefault01",children:"Nome do Funcion\xE1rio"}),r(n.Control,{type:"text",id:"nome",name:"nome",value:e.values.nome,onChange:e.handleChange,required:!0}),((b=e==null?void 0:e.touched)==null?void 0:b.nome)&&((x=e==null?void 0:e.errors)==null?void 0:x.nome)?r("label",{className:"mt-1 text-danger",children:(C=e==null?void 0:e.errors)==null?void 0:C.nome}):null]}),l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{md:"6",htmlFor:"validationDefault01",children:"Email"}),r(n.Control,{type:"text",id:"email",name:"email",value:e.values.email,onChange:e.handleChange,required:!0}),((F=e==null?void 0:e.touched)==null?void 0:F.email)&&((v=e==null?void 0:e.errors)==null?void 0:v.email)?r("label",{className:"mt-1 text-danger",children:(N=e==null?void 0:e.errors)==null?void 0:N.email}):null]}),l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{htmlFor:"validationDefault04",children:"Departamento"}),l(n.Select,{id:"departamentoId",name:"departamentoId",required:!0,value:e.values.departamentoId,onChange:e.handleChange,children:[r("option",{defaultChecked:!0,children:"Selecione o departamento"}),(E=(y=(I=u==null?void 0:u.Escola)==null?void 0:I.Organigrama)==null?void 0:y.Departamento)==null?void 0:E.map(a=>r("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.nome},a==null?void 0:a.id))]}),((q=e==null?void 0:e.touched)==null?void 0:q.departamentoId)&&((D=e==null?void 0:e.errors)==null?void 0:D.departamentoId)?r("label",{className:"mt-1 text-danger",children:(S=e==null?void 0:e.errors)==null?void 0:S.departamentoId}):null]}),l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{className:"custom-file-input",children:"Carregar imagem"}),r(n.Control,{type:"file",id:"fotoUrl",name:"fotoUrl",onChange:a=>{var o;e.setFieldValue("fotoUrl",(o=a==null?void 0:a.currentTarget)==null?void 0:o.files)}}),((G=e==null?void 0:e.touched)==null?void 0:G.fotoUrl)&&((U=e==null?void 0:e.errors)==null?void 0:U.fotoUrl)?r("label",{className:"mt-1 text-danger",children:(_=e==null?void 0:e.errors)==null?void 0:_.fotoUrl}):null]})]}),l(W,{md:"6",className:"mb-3",children:[l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{htmlFor:"validationDefault04",children:"Cargo"}),l(n.Select,{id:"cargoId",name:"cargoId",required:!0,value:e.values.cargoId,onChange:e.handleChange,children:[r("option",{defaultChecked:!0,children:"Selecione um Cargo"}),h==null?void 0:h.map(a=>r("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.nome},a==null?void 0:a.id))]}),((f=e==null?void 0:e.touched)==null?void 0:f.cargoId)&&((w=e==null?void 0:e.errors)==null?void 0:w.cargoId)?r("label",{className:"mt-1 text-danger",children:(L=e==null?void 0:e.errors)==null?void 0:L.cargoId}):null]}),l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{htmlFor:"validationDefault04",children:"Genero"}),l(n.Select,{id:"sexo",name:"sexo",required:!0,value:e.values.sexo,onChange:e.handleChange,children:[r("option",{defaultChecked:!0,children:"Selecione o sexo"}),i==null?void 0:i.map((a,o)=>r("option",{value:a==null?void 0:a.value,children:a==null?void 0:a.nome},o))]}),((j=e==null?void 0:e.touched)==null?void 0:j.sexo)&&((A=e==null?void 0:e.errors)==null?void 0:A.sexo)?r("label",{className:"mt-1 text-danger",children:(B=e==null?void 0:e.errors)==null?void 0:B.sexo}):null]}),l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{md:"6",htmlFor:"validationDefault01",children:"Telefone"}),r(n.Control,{type:"number",id:"telefone",name:"telefone",value:e.values.telefone,onChange:e.handleChange,required:!0}),((T=e==null?void 0:e.touched)==null?void 0:T.telefone)&&(($=e==null?void 0:e.errors)==null?void 0:$.telefone)?r("label",{className:"mt-1 text-danger",children:(M=e==null?void 0:e.errors)==null?void 0:M.telefone}):null]}),l(n.Group,{className:"mb-3 form-group mt-2",children:[r(n.Label,{md:"6",htmlFor:"validationDefault01",children:"N\xBA Agente"}),r(n.Control,{type:"number",id:"numero_agente",name:"numero_agente",value:e.values.numero_agente,onChange:e.handleChange,required:!0}),((V=e==null?void 0:e.touched)==null?void 0:V.numero_agente)&&((H=e==null?void 0:e.errors)==null?void 0:H.numero_agente)?r("label",{className:"mt-1 text-danger",children:(O=e==null?void 0:e.errors)==null?void 0:O.numero_agente}):null]})]})]}),r(n.Group,{children:r(Z,{variant:"btn btn-primary",type:"submit",children:"Cadastrar"})})]})})]})})})});ae.displayName="FuncionarioAdd";export{ae as default};
