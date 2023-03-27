import { Modal, Button, Col, Form, Row, Card, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup"
import { toast } from 'react-toastify';
import { api } from '../../../../services';
import { getUserInfo } from '../../auth/services';
import useFetch from '../../../../hooks';

function ModalUpdate({ onClose, item, mutate, setShowModalUpadate }) {  
  
  const user = getUserInfo()
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  const { data: Role } = useFetch(`/role/list/`)

  console.log(item, "itemmmm");

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
      nome: item?.nome,
      fotoUrl: item?.fotoUrl,
      sexo: item?.sexo,
      telefone: item?.Contato?.numeroTelefone,
      email: item?.Contato?.email,
      cargoId: item?.cargoId,
      departamentoId: item?.departamentoId,
      numero_agente: item?.agenteN,
      contatoId: item?.contatoId
    },
    validationSchema: yup.object({}),
    onSubmit: async (data) =>{
      if(item?.fotoUrl === data?.fotoUrl){
        try{
            const response = await api.put(`/course/put/${item?.id}`, data)
            if(response){
              toast.success("Funcionario actualizado com sucesso")
              mutate()
              setShowModalUpadate(false)
            }
        }catch(err){
          toast.error(err?.response?.data?.message)
        }
      }else{
        try{
          const formData = new FormData();
          formData.append('file', data?.fotoUrl[0]);
          const fotoUrl = await getFile(formData)
          if(fotoUrl){
            data = {...data, fotoUrl: fotoUrl?.id};
            const response = await api.put(`/course/put/${item?.id}`, data)
            if(response){
              toast.success("Curso actualizado com sucesso")
              setShowModalUpadate(false)
            }
          }
        }catch(err){
          toast.error(err?.response?.data?.message)
        }
      }
      }
  }) 

  async function getFile (data) {
    const dataD = await api.post("/file", data)

    return dataD.data
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Funcionário</Modal.Title>
      </Modal.Header>
      <Card.Body 
        style={{
          width: "100%",
          padding: "1rem 1rem",
          display: "flex",
        }}
      >
          <Form onSubmit={formik?.handleSubmit} encType="multipart/form-data">
            <Container>
              <Col xs={12} sm={12} md={12} lg={50} xl={20} className="mb-3 ">
                <Form.Label htmlFor="validationCustom05">
                  Nome
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  name="nome"
                  value={formik.values.nome}
                  type="text"
                  id="nome"
                />
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
                  <Form.Label htmlFor="validationDefault04">
                    Cargo
                  </Form.Label>
                  <Form.Select id="departamentoId" name="departamentoId" required value={formik.values.cargoId}  onChange={formik.handleChange}>
                  <option defaultChecked>Selecione o departamento</option>
                    {Role?.map((item) => (
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
                  <Form.Label className="custom-file-input">Escolher foto</Form.Label>
                  <Form.Control
                      type="file"
                      id="fotoUrl"
                      name="fotoUrl"
                      onChange={(event) =>{
                        formik.setFieldValue('fotoUrl', event?.currentTarget?.files)
                      }}  
                  />
              </Form.Group>
              </Col>
            </Container>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button type='submit'>
          Actualizar
        </Button>
      </Modal.Footer>
      </Form>
      </Card.Body>
    </Modal>
  );
}

export { ModalUpdate }