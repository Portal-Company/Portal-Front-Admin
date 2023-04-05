import React, { useState } from "react";

//react-bootstrap
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import { useFormik } from "formik";

//components
import Card from "../../../components/bootstrap/card";

//router
import { Link } from "react-router-dom";

// img
import imgsuccess from "/src/assets/images/pages/img-success.png";
import { getUserInfo } from "../auth/services";
import useFetch from "../../../hooks";
import * as yup from "yup"

const FormWizard = () => {
  const user = getUserInfo()
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  const [escola, setEscola] = useState(userData?.Escola)
  const [show, AccountShow] = useState("A");
  const { data: provincia } = useFetch(`/province/list`)
  const { data: municipio } = useFetch(`/municipio/list`)


  // console.log(escola);

  
  const formik = useFormik({
    initialValues:{
      nome: escola?.nome,
      nif: escola?.nif,
      logo: escola?.logo,
      fotoUrl: escola?.fotoUrl,
      contatoId: escola?.contatoId, 
      email: escola?.Contato?.email,
      numeroTelefone: escola?.Contato?.numeroTelefone,
      endereco1: escola?.Localizacao?.endereco1,
      provinciaId: escola?.Localizacao?.provinciaId,
      municipioId: escola?.Localizacao?.municipioId,
      escolaId: escola?.id,
      descricao: escola?.historial?.descricao,
      data: escola?.historial?.data,
      fotoUrl1: escola?.historial?.fotoUrl,
      fotoUrl2: escola?.historial?.fotoUrl2,
      fotoUrl3: escola?.historial?.fotoUrl3,
      fotoUrl4: escola?.historial?.fotoUrl4,
      fundador: escola?.historial?.fundador,   
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      nif: yup.string().required("Este campo é obrigatório"),
      logo: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo é obrigatório"),
      contatoId: yup.string().required("Este campo é obrigatório"),
      email: yup.string().required("Este campo é obrigatório"),
      numeroTelefone: yup.string().required("Este campo é obrigatório"),
      endereco1: yup.string().required("Este campo é obrigatório"),
      provinciaId: yup.string().required("Este campo é obrigatório"),
      escolaId: yup.string().required("Este campo é obrigatório"),
      descricao: yup.string().required("Este campo é obrigatório"),
      fotoUrl1: yup.string().required("Este campo é obrigatório"),
      fotoUrl2: yup.string().required("Este campo é obrigatório"),
      fotoUrl3: yup.string().required("Este campo é obrigatório"),
      fotoUrl4: yup.string().required("Este campo é obrigatório"),
      fundador: yup.string().required("Este campo é obrigatório"),
      data: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {

      console.log(data);

    }
  })

  console.log(formik.values);

  return (
    <Row>
      <Col sm="12" lg="12">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Configurar Perfil da Instituição</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form id="form-wizard1" className="text-center mt-3" onSubmit={formik.handleSubmit}>
            <div className="form-card text-start">
              <div className="row">
                <div className="col-7">
                  <h3 className="mb-4">Informações da Escola: </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Email da Escola: *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Nome da Escola: *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nome"
                      placeholder="Nome"
                      onChange={formik.handleChange}
                      value={formik.values.nome}
                      id="nome"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">
                      NIF
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="nif"
                      id="nif"
                      value={formik.values.nif}
                      onChange={formik.handleChange}
                      placeholder="nif"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Telefone: *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="numeroTelefone"
                      id="numeroTelefone"
                      onChange={formik.handleChange}
                      value={formik.values.numeroTelefone}
                      placeholder="Tel"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Província</label>
                    <Form.Select name="provinciaId" id="provinciaId" value={formik.values.provinciaId}>
                      <option defaultChecked>Selecione uma provicíncia</option>
                      {provincia?.map((item)=>(
                        <option key={item?.id} value={item?.id}>{item?.nome}</option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Endereço</label>
                    <input
                      type="text"
                      className="form-control"
                      name="endereco1"
                      id="endereco1"
                      value={formik.values.endereco1}
                      onChange={formik.handleChange}
                      placeholder="endereço"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Município</label>
                    <Form.Select name="municipioId" id="municipioId" value={formik.values.municipioId}>
                      <option defaultChecked>Selecione um município</option>
                      {municipio?.map((item)=>(
                        <option key={item?.id} value={item?.id}>{item?.nome}</option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
              </div>
            </div> 
            <div className="form-card text-start">
            <div className="row">
            <div className="col-7">
              <h3 className="mb-4 mt-4">Informações sobre o Historial</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">Nome Fundador: *</label>
                <input
                  type="text"
                  className="form-control"
                  name="fundador"
                  id="fundador"
                  placeholder="fundador"
                  value={formik.values.fundador}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  Data da Fundação
                  </Form.Label>
                <Form.Control
                  type="date"
                  id="data"
                  name="data"
                  value={formik.values.data}
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  Escolher Imagem (1)
                </Form.Label>
                <Form.Control
                  type="file"
                  id="exampleInputdatetime"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  Escolher Imagem (2)
                </Form.Label>
                <Form.Control
                  type="file"
                  id="exampleInputdatetime"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  Escolher Imagem (3)
                </Form.Label>
                <Form.Control
                  type="file"
                  id="exampleInputdatetime"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  Escolher Imagem (4)
                </Form.Label>
                <Form.Control
                  type="file"
                  id="exampleInputdatetime"
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3 form-group">
              <Form.Label htmlFor="exampleFormControlTextarea1">
                Descrição
              </Form.Label>
              <Form.Control
                as="textarea"
                id="exampleFormControlTextarea1"
                rows="5"
              />
            </Form.Group>
          </div>
        </div>
        <div className="form-card text-start">
        <div className="row">
          <div className="col-7">
            <h3 className="mb-4 mt-3">Carregamento de imagem:</h3>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Imagem de Cada:</label>
          <input
            type="file"
            className="form-control"
            name="pic"
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Imagem de Perfil:</label>
          <input
            type="file"
            className="form-control"
            name="pic-2"
            accept="image/*"
          />
        </div>
      </div>
      <button
          type="submit"
          name="next"
          className="btn btn-primary next action-button float-end"
          value="Submit"
      >Salvar
      </button> 
      
      </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FormWizard;
