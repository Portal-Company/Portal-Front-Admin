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
  const { data: Area } = useFetch(`/school/list/${userData?.Escola?.id}/courses`)

  const formik = useFormik({
    initialValues: {
      nome: "",
      fotoUrl: "",
      descricao: "",
      cursoId: "",
      escolaId: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo  é obrigatório"),
      descricao: yup.string().required("Este campo é obrigatório"),
      cursoId: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) =>{
      try{
        const formData = new FormData();
        formData.append('file', data?.fotoUrl[0]);
        const fotoUrl = await getFile(formData)
        if(fotoUrl){
          data = {...data, fotoUrl: fotoUrl?.id, escolaId: userData?.Escola?.id};
          const response = await api.post("/schoolSubject/post", data)
          if(response){
            toast.success("Disciplina cadastrada com sucesso")
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
            <h4 className="card-title"> Cadastrar Disciplina</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md="6" className="mb-3">
                <Form.Label htmlFor="validationDefault04">
                  Curso
                </Form.Label>
                <Form.Select id="cursoId" name="cursoId" value={formik.values.cursoId} required  onChange={formik.handleChange}>
                <option defaultChecked>Selecione um curso</option>
                  {Area?.map((item) => (
                    <option key={item?.id} value={item?.id}>{item?.nome}</option>
                  ))} 
                </Form.Select>
                {formik?.touched?.cursoId && formik?.errors?.cursoId ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.cursoId}
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
                  Nome da Disciplina
                </Form.Label>
                <Form.Control type="text" id="nome" name="nome" value={formik.values.nome} onChange={formik.handleChange} required />
                {formik?.touched?.nome && formik?.errors?.nome ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.nome}
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
