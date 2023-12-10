import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";

const Modal = ({ children, hide }) => {
  return (
    <>
      <div className="modal-blur-area">
        <div className="modal-content">
          <div className="modal-top">
            <div className="modal-top-content">
              <h2>Sign Up</h2>
              <button onClick={() => hide(false)}>
                <LiaTimesSolid />
              </button>
            </div>
            <p>Its quick and easy.</p>
          </div>

          <div className="divider"></div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
