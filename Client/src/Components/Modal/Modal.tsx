import ReactDOM from "react-dom"
import Button from "../Button/Button"
import './Modal.css'
import { ModalInterface } from "../../Utils/Interfaces"
const Modal = ({html,closeFunc}:ModalInterface) => {
  return ReactDOM.createPortal (
    <>
    <div className="modal-overlay">
            <div className="modal-container active">
        <div className="modal-head-section">
            <Button  BtnClick={closeFunc} bColor="black" height="1.2rem" width="1.2rem" name="X" />
        </div>
        <div className="modal-content-body">
            {html}
        </div>
      </div>
      </div>
    </>,
    document.body
  )
}

export default Modal
