import { memo, useState, Fragment } from "react";
import { useFormik } from "formik";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import useFetch from "../../../hooks";
import { getUserInfo } from "../auth/services";
import * as yup from "yup"
import { api } from "../../../services";
import { toast } from "react-toastify";

//router
import { Link } from "react-router-dom";

const FuncionarioAdd = memo(() => {
  const user = getUserInfo()
  const [isSubmiting, setIsSubmiting] = useState(false)
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  const { data: Role } = useFetch(`/role/list/`)

  const gender = [
    {
      nome: "Masculino",
      value: "M",
    },
    {
      nome: "Femenino",
      value: "F",
    }
  ]

  const formik = useFormik({
    initialValues: {
      nome: "",
      fotoUrl: "",
      telefone: "",
      email: "",
      cargoId: "",
      departamentoId: "",
      numero_agente: "",
      sexo: "",
      contatoId: ""
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo  é obrigatório"),
      email: yup.string().email().required("Este campo é obrigatório"),
      cargoId: yup.string().required("Este campo é obrigatório"),
      sexo: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) =>{
      try{
        setIsSubmiting(true);
        const contact = {
          email: data.email,
          numeroTelefone: data.telefone.toString()
        }  
        const contactResponse = await (await api.post("/contact/post", contact)).data
        const formData = new FormData();
        formData.append('file', data?.fotoUrl[0]);
        const fotoUrl = await getFile(formData)
        if(fotoUrl){
          data = {...data, fotoUrl: fotoUrl?.id, contatoId: contactResponse?.id, numero_agente: data.numero_agente.toString()};
          const response = await api.post("/official/post", data)
          if(response){
            toast.success("Funcionário cadastrado com sucesso")
            formik.resetForm()
          }
        }
      }catch(err){
        toast.error(err?.response?.data?.message)
      }finally{
        setTimeout(() => {
          setIsSubmiting(false)
        }, 4000)
      }
    }
  }) 

  async function getFile (data) {
      const dataD = await api.post("/file", data)
      return dataD.data
  }
  
  return (
    <Fragment>
      <Row>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title"> Cadastrar Funcionario</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md="6" className="mb-3">
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label md="6" htmlFor="validationDefault01">
                    Nome do Funcionário
                  </Form.Label>
                  <Form.Control type="text" id="nome" name="nome" value={formik.values.nome} onChange={formik.handleChange} required />
                  {formik?.touched?.nome && formik?.errors?.nome ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.nome}
                    </label>
                  ): null}
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label md="6" htmlFor="validationDefault01">
                    Email
                  </Form.Label>
                  <Form.Control type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} required />
                  {formik?.touched?.email && formik?.errors?.email ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.email}
                    </label>
                  ): null}
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label htmlFor="validationDefault04">
                    Departamento
                  </Form.Label>
                  <Form.Select id="departamentoId" name="departamentoId" required value={formik.values.departamentoId}  onChange={formik.handleChange}>
                  <option defaultChecked>Selecione o departamento</option>
                    {userData?.Escola?.Organigrama?.Departamento?.map((item) => (
                      <option key={item?.id} value={item?.id}>{item?.nome}</option>
                    ))} 
                  </Form.Select>
                  {formik?.touched?.departamentoId && formik?.errors?.departamentoId ? (
                      <label className="mt-1 text-danger">  
                        {formik?.errors?.departamentoId}
                      </label>
                  ): null}
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label className="custom-file-input">Carregar imagem</Form.Label>
                  <Form.Control
                      type="file"
                      id="fotoUrl"
                      name="fotoUrl"
                      onChange={(event) =>{
                        formik.setFieldValue('fotoUrl', event?.currentTarget?.files)
                      }}  
                  />
                  {formik?.touched?.fotoUrl && formik?.errors?.fotoUrl ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.fotoUrl}
                    </label>
                  ): null}
              </Form.Group>
                </Col>
              <Col md="6" className="mb-3">
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label htmlFor="validationDefault04">
                    Cargo
                  </Form.Label>
                  <Form.Select id="cargoId" name="cargoId" required value={formik.values.cargoId} onChange={formik.handleChange}>
                  <option defaultChecked>Selecione um Cargo</option>
                    {Role?.map((item) => (
                      <option key={item?.id} value={item?.id}>{item?.nome}</option>
                    ))} 
                  </Form.Select>
                  {formik?.touched?.cargoId && formik?.errors?.cargoId ? (
                      <label className="mt-1 text-danger">  
                        {formik?.errors?.cargoId}
                      </label>
                  ): null}
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label htmlFor="validationDefault04">
                    Genero
                  </Form.Label>
                  <Form.Select id="sexo" name="sexo" required value={formik.values.sexo} onChange={formik.handleChange}>
                    <option defaultChecked>Selecione o sexo</option>
                    {gender?.map((item, idx) => (
                        <option key={idx} value={item?.value}>{item?.nome}</option>
                    ))}
                  </Form.Select>
                  {formik?.touched?.sexo && formik?.errors?.sexo ? (
                      <label className="mt-1 text-danger">  
                        {formik?.errors?.sexo}
                      </label>
                  ): null}
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label md="6" htmlFor="validationDefault01">
                    Telefone
                  </Form.Label>
                  <Form.Control type="number" id="telefone" name="telefone" value={formik.values.telefone} onChange={formik.handleChange} required />
                  {formik?.touched?.telefone && formik?.errors?.telefone ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.telefone}
                    </label>
                  ): null}
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label md="6" htmlFor="validationDefault01">
                    Nº Agente
                  </Form.Label>
                  <Form.Control type="number" id="numero_agente" name="numero_agente" value={formik.values.numero_agente} onChange={formik.handleChange} required />
                  {formik?.touched?.numero_agente && formik?.errors?.numero_agente ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.numero_agente}
                    </label>
                  ): null}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Button variant="btn btn-primary" type="submit" disabled={isSubmiting}>
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      </Row>
    </Fragment>
  );
});

FuncionarioAdd.displayName = "FuncionarioAdd";
export default FuncionarioAdd;
