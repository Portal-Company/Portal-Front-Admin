import { memo, Fragment, useState } from "react";

// React-bootstrap
import { Row, Col, Image, Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { mutate } from "swr";

//Components
import Card from "../../../components/bootstrap/card";
import { ModalDelete } from "../../../components/ModalConfirm";
import useFetch from "../../../hooks";
import { api } from "../../../services";
import { getUserInfo } from "../auth/services";
import { ModalUpdate } from "./ModalUpdate";
import { TableBody } from "./table";

//Img


const FuncionarioList = memo(() => {
  const user = getUserInfo()
  const [item, setItem] = useState({})
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpadate] = useState(false);
  
  const { data: userData } = useFetch(`/user/list/${user?.sub}`)
  const { data: Official } = useFetch(`/school/list/${userData?.Escola?.id}/official`)

  function handleChange(){
    mutate(`/school/list/${userData?.Escola?.id}/official`)
  }

  async function handleDeleteConfirm(id){
    try{
      const data = await api.delete(`official/delete/${id}`)
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
      {showModal ? (<ModalDelete onClose={()=> setShowModal(false)} onConfirm={() => handleDeleteConfirm(item?.id)} item={item} />) : null}
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="custom-table-effect table-responsive border rounded mt-3">
                <Table className="mb-0" id="datatable" data-toggle="data-table">
                  <thead>
                    <tr className="bg-white">
                      <th scope="col">Nome</th>
                      <th scope="col">Contacto</th>
                      <th scope="col">Email</th>
                      <th scope="col">Sexo</th>
                      <th scope="col">Cargo</th>
                      <th scope="col">Departamento</th>
                      <th scope="col">Acção</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Official?.map((item, index) => {
                      return (
                        <>
                          <TableBody 
                            key={index}
                            item={item}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                          />
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

FuncionarioList.displayName = "Borderedtable";
export default FuncionarioList;
