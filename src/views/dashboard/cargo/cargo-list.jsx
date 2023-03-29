import { memo, Fragment, useContext, useState } from "react";

//react-bootstrap
import { Row, Col, Image } from "react-bootstrap";

//router
import { Link } from "react-router-dom";
import useSWR, { mutate }  from "swr"
//components
import Card from "../../../components/bootstrap/card";
import { UserContext } from "../../../context";

// img

import {api} from "../../../services"
import { getUserInfo } from "../auth/services";
import useFetch from "../../../hooks";
import { toast } from "react-toastify";
import { ModalDelete } from "../../../components/ModalConfirm";
import { ModalUpdate } from "./ModalUpdate";

const CargoList = memo(() => {
  const user = getUserInfo()
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  const { data: Role} = useFetch(`/role/list/`)
  const [item, setItem] = useState({})

  console.log(userData);

  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpadate] = useState(false);

  function handleChange(){
    mutate(`/role/list/`)
  }

  async function handleDeleteConfirm(id){
    try{
      const data = await api.delete(`role/delete/${id}`)
      if(data?.data){
        toast.success("deletado com sucesso!")
        handleChange()
        setShowModal(false)
      }
  }catch(err){
    toast.error("Erro inesperado")
  }
  }

  function handleDelete(data){
    setShowModal(true)
    setItem(data)
  }

  function handleUpdate(data){
    setShowModalUpadate(true)
    setItem(data)
  }

  return (
    <Fragment>
        {showModalUpdate ? (<ModalUpdate onClose={()=> setShowModalUpadate(false)} setShowModalUpadate={setShowModalUpadate} mutate={handleChange} item={item} />) : null}
        {showModal ? (<ModalDelete onClose={()=> setShowModal(false)} onConfirm={() => handleDeleteConfirm(item?.id)} item={item} desc="cargo de" />) : null}
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Listagem de Cargos</h4>
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
                      <th>Name do Cargo</th>

                      <th>Status</th>

                      <th min-width="100px">Acção</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Role?.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.nome}</td>
                        <td>
                          <span className={`badge ${item.color}`}>
                            {item.status}
                          </span>
                        </td>

                        <td>
                          <div className="flex align-items-center list-user-action">
                            <Link
                              onClick={() => handleUpdate(item)}
                              className="btn btn-sm btn-icon btn-warning"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Edit"
                              to="#"
                            >
                              <span className="btn-inner">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M15.1655 4.60254L19.7315 9.16854"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </Link>{" "}
                            <Link
                              onClick={() => handleDelete(item)}
                              className="btn btn-sm btn-icon btn-danger"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Delete"
                              to="#"
                            >
                              <span className="btn-inner">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="currentColor"
                                >
                                  <path
                                    d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M20.708 6.23975H3.75"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </Link>{" "}
                          </div>
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
});

CargoList.displayName = "CargoList";
export default CargoList;
