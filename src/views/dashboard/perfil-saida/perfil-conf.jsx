import React, { useState } from "react";

//react-bootstrap
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import { useFormik } from "formik";

//components
import Card from "../../../components/bootstrap/card";

//router

// img
import { getUserInfo } from "../auth/services";
import useFetch from "../../../hooks";
import * as yup from "yup";
import { api } from "../../../services";
import { toast } from "react-toastify";

const FormWizard = () => {
  const user = getUserInfo();
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const [escola, setEscola] = useState(userData?.Escola);
  const [show, AccountShow] = useState("A");
  const { data: provincia } = useFetch(`/province/list`);
  const { data: municipio } = useFetch(`/county/list`);

  const formik = useFormik({
    initialValues: {
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
      localizacaoId: escola?.Localizacao?.id,
      descricao: escola?.historial?.descricao,
      data: escola?.historial?.data,
      historialId: escola?.historial?.id,
      fotoUrl1: escola?.historial?.fotoUrl,
      fundador: escola?.historial?.fundador,
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      nif: yup.string().required("Este campo é obrigatório"),
      logo: yup
        .mixed()
        .test(
          "isImage",
          "Por favor selecione um arquivo de imagem válido!",
          (value) => {
            if (value) return true; // permite que o campo seja vazio
            return (
              value &&
              ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
                value.type
              )
            );
          }
        ),
      fotoUrl: yup
        .mixed()
        .test(
          "isImage",
          "Por favor selecione um arquivo de imagem válido!",
          (value) => {
            if (value) return true; // permite que o campo seja vazio
            return (
              value &&
              ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
                value.type
              )
            );
          }
        ),
      // contatoId: yup.string().required("Este campo é obrigatório"),
      email: yup.string().required("Este campo é obrigatório"),
      numeroTelefone: yup.string().required("Este campo é obrigatório"),
      endereco1: yup.string().required("Este campo é obrigatório"),
      provinciaId: yup.string().required("Este campo é obrigatório"),
      escolaId: yup.string().required("Este campo é obrigatório"),
      descricao: yup.string().required("Este campo é obrigatório"),
      fotoUrl1: yup
        .mixed()
        .test(
          "isImage",
          "Por favor selecione um arquivo de imagem válido!",
          (value) => {
            if (value) return true; // permite que o campo seja vazio
            return (
              value &&
              ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
                value.type
              )
            );
          }
        ),

      fundador: yup.string().required("Este campo é obrigatório"),
      data: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      let newContato = data?.contatoId;
      try {
        if (!data.historialId) {
          const formData1 = new FormData();

          formData1.append("file", data?.fotoUrl1[0]);

          const fotoUrl1 = await getFile(formData1);

          if (fotoUrl1) {
            const history = {
              fundador: data?.fundador,
              descricao: data?.descricao,
              data: data?.data,
              escolaId: escola?.id,
              fotoUrl: fotoUrl1?.id,
            };
            const response = await api.post("/history/post", history);
          }
        } else {
          if (!(escola?.historial?.fotoUrl === data.fotoUrl1)) {
            const formData1 = new FormData();

            formData1.append("file", data?.fotoUrl1[0]);

            const fotoUrl1 = await getFile(formData1);

            if (fotoUrl1) {
              const history = {
                fundador: data?.fundador,
                descricao: data?.descricao,
                escolaId: escola?.id,
                fotoUrl: fotoUrl1?.id,
              };
              const response = await api.put(
                `/history/put/${data?.historialId}`,
                history
              );
            }
          } else {
            const history = {
              fundador: data?.fundador,
              descricao: data?.descricao,
              escolaId: escola?.id,
            };
            const response = await api.put(
              `/history/put/${data?.historialId}`,
              history
            );
          }
        }

        if (!data.localizacaoId) {
          const location = {
            endereco1: data?.endereco1,
            provinciaId: data?.provinciaId,
            municipioId: data?.municipioId,
            escolaId: escola?.id,
          };
          const response = await api.post("/location/post", location);
        } else {
          const location = {
            endereco1: data?.endereco1,
            provinciaId: data?.provinciaId,
            municipioId: data?.municipioId,
            escolaId: escola?.id,
          };
          const response = await api.put(
            `/location/put/${data?.localizacaoId}`,
            location
          );
        }

        if (!data?.contatoId) {
          const contact = {
            email: data?.email,
            numeroTelefone: data?.numeroTelefone,
          };
          const response = (await api.post(`/contact/post`, contact)).data;
          newContato = response?.id;
        } else {
          const contact = {
            email: data?.email,
            numeroTelefone: data?.numeroTelefone,
          };
          const response = (
            await api.put(`/contact/put/${escola?.ContatoId}`, contact)
          ).data;
          newContato = response?.id;
        }

        if (!(data.fotoUrl === escola?.fotoUrl || data.logo === escola?.logo)) {
          const formData = new FormData();
          const formData1 = new FormData();

          let school;

          formData.append("file", data?.logo[0]);
          formData1.append("file", data?.fotoUrl[0]);

          const logo = await getFile(formData);
          const fotoUrl = await getFile(formData1);

          school = {
            fotoUrl: fotoUrl?.id,
            logo: logo?.id,
            nome: data?.nome,
            nif: data?.nif,
            contatoId: newContato,
          };

          const response = await api.put(`/school/put/${escola?.id}`, school);
          if (response) {
            toast.success("Dados actualizados com sucesso!");
          }
        } else {
          const school = {
            nome: data?.nome,
            nif: data?.nif,
            contatoId: newContato,
          };

          const response = await api.put(`/school/put/${escola?.id}`, school);
          if (response) {
            toast.success("Dados actualizados com sucesso!");
          }
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    },
  });

  async function getFile(data) {
    const dataD = await api.post("/file", data);
    return dataD.data;
  }

  console.log(formik.errors);

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
            <Form
              id="form-wizard1"
              className="text-center mt-3"
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
            >
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
                      <label className="form-label">NIF</label>
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
                      <Form.Select
                        name="provinciaId"
                        id="provinciaId"
                        onChange={formik.handleChange}
                        value={formik.values.provinciaId}
                      >
                        <option defaultChecked>
                          Selecione uma provicíncia
                        </option>
                        {provincia?.map((item) => (
                          <option key={item?.id} value={item?.id}>
                            {item?.nome}
                          </option>
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
                      <Form.Select
                        name="municipioId"
                        id="municipioId"
                        onChange={formik.handleChange}
                        value={formik.values.municipioId}
                      >
                        <option defaultChecked>Selecione um município</option>
                        {municipio?.map((item) => (
                          <option key={item?.id} value={item?.id}>
                            {item?.nome}
                          </option>
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
                        name="fotoUrl1"
                        id="fotoUrl1"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "fotoUrl1",
                            event?.currentTarget?.files
                          );
                        }}
                      />
                    </Form.Group>
                  </div>
                  {/* <div className="col-md-6">
              <Form.Group className="form-group">
                <Form.Label htmlFor="exampleInputdatetime">
                  Escolher Imagem (2)
                </Form.Label>
                <Form.Control
                  type="file"
                  name="fotoUrl2"
                  id="fotoUrl2"
                  onChange={(event) =>{
                    formik.setFieldValue('fotoUrl2', event?.currentTarget?.files)
                  }} 
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
                  name="fotoUrl3"
                  id="fotoUrl3"
                  onChange={(event) =>{
                    formik.setFieldValue('fotoUrl3', event?.currentTarget?.files)
                  }} 
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
                  id="fotoUrl4"
                  name="fotoUrl4"
                  onChange={(event) =>{
                    formik.setFieldValue('fotoUrl4', event?.currentTarget?.files)
                  }} 
                />
              </Form.Group>
            </div> */}
                  <Form.Group className="mb-3 form-group">
                    <Form.Label htmlFor="exampleFormControlTextarea1">
                      Descrição
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="descricao"
                      value={formik.values.descricao}
                      onChange={formik.handleChange}
                      id="descricao"
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
                  <label className="form-label">Logo:</label>
                  <Form.Control
                    type="file"
                    name="logo"
                    id="logo"
                    onChange={(event) => {
                      formik.setFieldValue("logo", event?.currentTarget?.files);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Imagem de Perfil:</label>
                  <Form.Control
                    type="file"
                    name="fotoUrl"
                    id="fotoUrl"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "fotoUrl",
                        event?.currentTarget?.files
                      );
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary next action-button float-end"
              >
                Salvar
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FormWizard;
