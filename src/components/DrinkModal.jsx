import { Modal } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"


export const DrinkModal = () => {
    const {modal, handleShowModal, recipe} = useDrinks()
  return (
    <Modal show={modal} onHide={handleShowModal}>
        <Modal.Body>
            Modal Body here
        </Modal.Body>
    </Modal>
  )
}
