import { useState } from "react";
import {Modal, Button} from "react-bootstrap"
import { toast } from "react-toastify";
import { api } from "../../../../services";


export const ViewDataCandidate = ({ item, isShow, handleClose }) => {

    return(
        <>
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
        
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary">Aprovar</Button>
            <Button variant="danger">Rejeitar</Button>

            </Modal.Footer>
        </Modal>
        </>
    )
}