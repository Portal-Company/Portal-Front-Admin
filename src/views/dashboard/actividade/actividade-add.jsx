import { useFormik } from "formik";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import useFetch from "../../../hooks";
import { getUserInfo } from "../auth/services";
import * as yup from "yup"
import { api } from "../../../services";
import { toast } from "react-toastify";

const Disciplina = () => {
  const user = getUserInfo()
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)

  const formik = useFormik({
    initialValues: {
      nome: "",
      fotoUrl: "",
      organizador: "",
      data: "",
      descricao: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo  é obrigatório"),
      descricao: yup.string().required("Este campo é obrigatório"),
      data: yup.date().min(new Date(), 'A data deve ser maior ou igual ao dia de hoje').required("Este campo é obrigatório"),
      organizador: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) =>{
      console.log(data);
      try{
        const formData = new FormData();
        formData.append('file', data?.fotoUrl[0]);
        const fotoUrl = await getFile(formData)
        if(fotoUrl){
          data = {...data, fotoUrl: fotoUrl?.id, escolaId: userData?.Escola?.id};
          const response = await api.post("/activity/post", data)
          if(response){
            toast.success("Actividade cadastrada com sucesso")
            formik.resetForm()
          }
        }
      }catch(err){
        toast.error(err?.response?.data?.message)
      }
    }
  }) 

  async function getFile (data) {
      const dataD = await api.post("/file", data)
      return dataD.data
  }
  
  return (
    <Row>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title"> Adicionar Actividade</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md="6" className="mb-3">
              <Form.Label md="6" htmlFor="validationDefault01">
                  Nome da Actividade
                </Form.Label>
                <Form.Control type="text" id="nome" name="nome" value={formik.values.nome} onChange={formik.handleChange} required />
                {formik?.touched?.nome && formik?.errors?.nome ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.nome}
                    </label>
                  ): null}
                <Form.Group className="mb-3 form-group mt-2">
                                <Form.Label htmlFor="exampleFormControlTextarea1">Descrição</Form.Label>
                                <Form.Control as="textarea" id="descricao" value={formik.values.descricao} name="descricao" onChange={formik.handleChange} rows="5" />
                {formik?.touched?.descricao && formik?.errors?.descricao ? (
                  <label className="mt-1 text-danger">  
                    {formik?.errors?.descricao}
                  </label>
                ): null}
                </Form.Group>
              </Col>
              <Col md="6" className="mb-3">
                <Form.Label md="6" htmlFor="validationDefault01">
                  Organizador
                </Form.Label>
                <Form.Control type="text" id="organizador" name="organizador" value={formik.values.organizador} onChange={formik.handleChange} required />
                {formik?.touched?.organizador && formik?.errors?.organizador ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.organizador}
                    </label>
                  ): null}
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
              <Form.Label md="6" htmlFor="validationDefault01">
                  Data
                </Form.Label>
                <Form.Control type="date" id="data" name="data" value={formik.values.data} onChange={formik.handleChange} required />
                {formik?.touched?.data && formik?.errors?.data ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.data}
                    </label>
                  ): null}
              </Col>
            </Row>
            <Form.Group>
              <Button variant="btn btn-primary" type="submit">
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Disciplina;
