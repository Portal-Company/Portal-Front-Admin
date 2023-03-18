import { memo, Fragment } from 'react'

//react-bootstrap
import { Row, Col, Image, Form, Button } from 'react-bootstrap'

//components
import Card from '../../../components/bootstrap/card'

//router
import { Link } from 'react-router-dom'

// img
import avatars1 from '/src/assets/images/avatars/01.png'
import avatars2 from '/src/assets/images/avatars/avtar_1.png'
import avatars3 from '/src/assets/images/avatars/avtar_2.png'
import avatars4 from '/src/assets/images/avatars/avtar_3.png'
import { useFormik } from 'formik'
import useFetch from '../../../hooks'
import * as yup from "yup"
import { getUserInfo } from '../auth/services'
import { toast } from 'react-toastify'
import { api } from '../../../services'
import { mutate } from 'swr'

const UserAdd = memo(() => {
  const user = getUserInfo()
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  const { data: Org } = useFetch(`/organization/list/${userData?.Escola?.Organigrama?.id}`)
  
  
  const formik = useFormik({
    initialValues: {
      nome: "",
      organigramaId: Org?.id ? Org?.id : null
    },
    validationSchema: yup.object({
      nome: yup.string().trim().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) =>{
      try{
          data = {...data, organigramaId: Org?.id}
          const response = await api.post("/department/post", data)
          if(response){
            toast.success("Departamento cadastrado com sucesso")
            formik.resetForm()
          }
      }catch(err){
        toast.error(err?.response?.data?.message)
      }
    }
  }) 


   return (
      <Fragment>
         <Row>
         <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title"> Cadastrar Departamento</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md="6" className="mb-3">
                <Form.Label md="6" htmlFor="validationDefault01">
                  Nome do Departamento
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
      </Fragment>
   )
}
)

UserAdd.displayName = "UserAdd"
export default UserAdd;