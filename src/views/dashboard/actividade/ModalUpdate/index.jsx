import { Modal, Button, Col, Form, Row, Card, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup"
import { toast } from 'react-toastify';
import { api } from '../../../../services';

function ModalUpdate({ onClose, item, mutate, setShowModalUpadate }) {  
  const formik = useFormik({
    initialValues: {
      nome: item?.nome,
      fotoUrl: item?.fotoUrl,
      descricao: item?.descricao,
      data: item?.data,
      organizador: item?.organizador
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo é obrigatório"),
      descricao: yup.string().required("Este campo é obrigatório"),
      data: yup.date().min(new Date(), 'A data deve ser maior ou igual ao dia de hoje').required("Este campo é obrigatório"),
      organizador: yup.string().required("Este campo é obrigatório"),      
    }),
    onSubmit: async (data) =>{
      if(item?.fotoUrl === data?.fotoUrl){
        try{
            const response = await api.put(`/activity/put/${item?.id}`, data)
            if(response){
              toast.success("Actividade actualizada com sucesso")
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
            const response = await api.put(`/activity/put/${item?.id}`, data)
            if(response){
              toast.success("Actividade actualizada com sucesso")
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
        <Modal.Title>Actualizar Actividade</Modal.Title>
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
                <div>
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
                {formik?.touched?.nome && formik?.errors?.nome ? (
                  <label className="mt-1 text-danger">  
                    {formik?.errors?.nome}
                  </label>
                ): null}
                </div>
                <div>
                <Form.Label htmlFor="validationCustom05">
                  Organizador
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  name="organizador"
                  value={formik.values.organizador}
                  type="text"
                  id="organizador"
                />
                {formik?.touched?.organizador && formik?.errors?.organizador ? (
                  <label className="mt-1 text-danger">  
                    {formik?.errors?.organizador}
                  </label>
                ): null}
                </div>
                <div>
                <Form.Label htmlFor="validationCustom05">
                  Data
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  name="data"
                  value={formik.values.data}
                  type="date"
                  id="data"
                />
                {formik?.touched?.data && formik?.errors?.data ? (
                  <label className="mt-1 text-danger">  
                    {formik?.errors?.data}
                  </label>
                ): null}
                </div>
                <div>
                <Form.Group className="mb-3 form-group mt-1">
                                <Form.Label htmlFor="exampleFormControlTextarea1">Descrição</Form.Label>
                                <Form.Control as="textarea" id="descricao" value={formik.values.descricao} name="descricao" onChange={formik.handleChange} rows="5" />
                </Form.Group>
                {formik?.touched?.descricao && formik?.errors?.descricao ? (
                  <label className="text-danger">  
                    {formik?.errors?.descricao}
                  </label>
                ): null}
                </div>
                <div>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label className="custom-file-input">Escolha o ficheiro</Form.Label>
                  <Form.Control
                      type="file"
                      id="fotoUrl"
                      name="fotoUrl"
                      onChange={(event) =>{
                        formik.setFieldValue('fotoUrl', event?.currentTarget?.files)
                      }}  
                  />
              </Form.Group>
              {formik?.touched?.fotoUrl && formik?.errors?.fotoUrl ? (
                  <label className="mt-1 text-danger">  
                    {formik?.errors?.fotoUrl}
                  </label>
                ): null}
              </div>
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