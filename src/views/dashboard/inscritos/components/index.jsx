import { useState } from "react";
import { Modal, Button, Container, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import { api } from "../../../../services";
import useFetch from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { ModalConfirm } from "./ModalConfirm";
import { getUserInfo } from "../../auth/services";

export const ViewDataCandidate = ({
  item,
  isShow,
  state,
  handleClose,
  mutate,
}) => {
  const [show, setShow] = useState(false);
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();
  const user = getUserInfo();
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);

  function showGender(data) {
    const gender = [
      { value: "Masculino", name: "M" },
      { value: "Femenino", name: "Femenino" },
    ];
    const valueGender = gender.find((item) => item.name === data).value;
    return valueGender;
  }

  const { data: fotoUrl } = useFetch(`/file/${item?.Candidato?.photoUrl}`);
  const { data: identificacao } = useFetch(
    `/file/${item?.Candidato?.pdfCertificacaoEscolar}`
  );
  const { data: certificado } = useFetch(
    `/file/${item?.Candidato?.pdfIdentificacao}`
  );

  function onClose() {
    setShow(false);
  }

  function handleOpen(state) {
    setShow(true);
    setEstado(state);
  }

  async function handleConfirm() {
    if (estado === "aprovar") {
      const aprove = {
        estado: "ADMITIDO",
      };
      try {
        const data = await api.put(`/enrollment/put/${item?.id}`, aprove);
        if (data) {
          const body = {
            to: item?.Candidato?.Contato?.email,
            from: "portaldasescolas1000@gmail.com",
            subject: `A sua Candidatura foi aprovada com sucesso na Escola ${userData?.Escola?.nome}`,
            body: `Sr ${item?.Candidato?.nomeCompleto} aguarde o nosso sinal para marcação do dia do teste. Obrigado`,
          };
          await api.post(`/mail/send`, body);
          toast.success("Candidato aprovado com sucesso");
          mutate();
        }
      } catch (e) {
        toast.error(e?.response?.data?.error);
      }
    } else if (estado === "rejeitar") {
      const aprove = {
        estado: "NAO_ADMITIDO",
      };
      try {
        const data = await api.put(`/enrollment/put/${item?.id}`, aprove);
        if (data) {
          const body = {
            to: item?.Candidato?.Contato?.email,
            from: "portaldasescolas1000@gmail.com",
            subject: `Infelizmente sua Candidatura foi reprovada na Escola ${userData?.Escola?.nome}`,
            body: `Sr ${item?.Candidato?.nomeCompleto}, Obrigado`,
          };
          await api.post(`/mail/send`, body);
          toast.success("Candidato aprovado com sucesso");
          mutate();
        }
      } catch (e) {
        toast.error(e?.response?.data?.error);
      }
    }
  }

  return (
    <>
      {show && (
        <ModalConfirm
          onClose={onClose}
          item={item}
          estado={estado}
          onConfirm={handleConfirm}
        />
      )}
      <Modal
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Dados do Candidato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
          >
            <div>
              {/* <p className="mb-0">Foto:</p> */}
              <Image
                style={{ cursor: "pointer" }}
                src={fotoUrl?.link}
                loading="lazy"
                alt="perfil"
                width={100}
                onClick={() => (window.location.href = fotoUrl?.link)}
              />
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Nome Completo:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {item?.Candidato?.nomeCompleto}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Email:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {item?.Candidato?.Contato?.email}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Contacto:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {item?.Candidato?.Contato?.numeroTelefone}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Endereço:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {item?.Candidato?.Localizacao?.endereco1}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Data de Nascimento:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{item?.Candidato?.dataNasc}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div>
                <p className="mb-0">Sexo:</p>
              </div>
              <div className="">
                <p className="text-muted mb-0">
                  {showGender(item?.Candidato?.sexo)}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div>
                <p className="mb-0">Estado da Candidatura:</p>
              </div>
              <div className="">
                <p className="text-muted mb-0">{item?.estado}</p>
              </div>
            </div>
            <div>
              <p className="mb-0">Codigo do Documento:</p>
            </div>
            <div className="">
              <p className="text-muted mb-0">
                {item?.Candidato?.codigoDocumento}
              </p>
              <p>Tipo de Identificaçao: {item?.Candidato?.tipoIdentificacao}</p>
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div>
                <p className="mb-0">Cursos Pretendidos:</p>
              </div>
              <div className="">
                {item?.CursoPretendido?.map((item, index) => (
                  <p className="text-muted mb-0" key={index}>
                    | {item?.Curso?.nome} |
                  </p>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Baixar a identificação:</p>
              </div>
              <div className="col-sm-9">
                <a href={identificacao?.link} download>
                  baixar
                </a>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Baixar a Certificação:</p>
              </div>
              <div className="col-sm-9">
                <a href={certificado?.link} download>
                  baixar
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {state === "PENDENTE" ? (
            <>
              <Button variant="primary" onClick={() => handleOpen("aprovar")}>
                Aprovar
              </Button>
              <Button variant="danger" onClick={() => handleOpen("rejeitar")}>
                Rejeitar
              </Button>
            </>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};
