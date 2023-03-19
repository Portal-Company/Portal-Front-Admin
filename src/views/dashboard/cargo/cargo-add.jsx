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

const CargoAdd = () => {
  const user = getUserInfo()
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  
  const formik = useFormik({
    initialValues: {
      nome: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório")
    }),
    onSubmit: async (data) =>{
      try{
        const response = await api.post("/role/post", data)
          if(response){
            toast.success("Cargo cadastrado com sucesso")
            formik.resetForm()
          }
      }catch(err){
        toast.error(err?.response?.data?.message)
      }
    }
  }) 
  
  return (
    <Row>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title"> Cadastrar Cargo</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Row>      
              <Col md="6" className="mb-3">
                <Form.Label md="6" htmlFor="validationDefault01">
                  Nome do Cargo
                </Form.Label>
                <Form.Control type="text" id="nome" name="nome" value={formik.values.nome} onChange={formik.handleChange} required />
                {formik?.touched?.nome && formik?.errors?.nome ? (
                    <label className="mt-1 text-danger">  
                      {formik?.errors?.nome}
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

export default CargoAdd;
