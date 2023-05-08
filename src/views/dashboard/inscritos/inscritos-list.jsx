import { memo, Fragment, useState } from "react";

//react-bootstrap
import { Row, Col, Image, Button } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";
import useFetch from "../../../hooks";
import { getUserInfo } from "../auth/services";
import { ViewDataCandidate } from "./components";
import { mutate } from "swr";
import { ImageView } from "../../../components/ImageView";

const UserList = () => {
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});
  const [state, setState] = useState("");
  const user = getUserInfo();
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: Inscricao } = useFetch(
    `/enrollment/list/pending/${userData?.Escola?.id}`
  );

  function handleMutate() {
    mutate(`/enrollment/list/pending/${userData?.Escola?.id}`);
  }

  function handleClose() {
    setOpenModal(false);
  }

  function handleView(item) {
    setState(item?.estado);
    setItem(item);
    setOpenModal(true);
  }

  return (
    <Fragment>
      {openModal ? (
        <ViewDataCandidate
          item={item}
          handleClose={handleClose}
          isShow={openModal}
          mutate={handleMutate}
          state={state}
        />
      ) : null}
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Inscrições</h4>
              </div>
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Pequisar..."
                  aria-label="Search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </Card.Header>
            <Card.Body className="px-0">
              <div className="table-responsive">
                <table
                  id="user-list-table"
                  className="table table-striped"
                  role="grid"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr className="ligth">
                      <th>Nome Completo</th>
                      <th>Contacto</th>
                      <th>Sexo</th>
                      <th>Email</th>
                      <th>Curso</th>
                      <th>Status</th>
                      <th>Acções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!Inscricao?.length && (
                      <div className="text-center text-blue pt-4">
                        Sem candidatos pendentes no momento
                      </div>
                    )}
                    {Inscricao?.filter((item) =>
                      item?.Candidato?.nomeCompleto
                        .toLocaleLowerCase()
                        .includes(query)
                    ).map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <ImageView
                            item={item?.Candidato}
                            type={"Candidato"}
                          />
                          {item?.Candidato?.nomeCompleto}
                        </td>
                        <td>{item?.Candidato?.Contato?.numeroTelefone}</td>
                        <td>{item?.Candidato?.sexo}</td>
                        <td>{item?.Candidato?.Contato?.email}</td>
                        <td>{item?.CursoPretendido[0]?.Curso?.nome}</td>

                        <td>
                          <span className={`badge ${"bg-success"}`}>
                            {item?.estado}
                          </span>
                        </td>

                        <td>
                          <Button onClick={() => handleView(item)}>
                            Ver dados
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

UserList.displayName = "UserList";
export default UserList;
