import Button from "../Button/Button"

const Modal = () => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-head-section">
            <Button BtnClick='' bColor="black" height="0.5rem" width="0.8rem" name="X" />
        </div>
        <div className="modal-content-body"></div>
      </div>
    </>
  )
}

export default Modal
