import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCatSpace} from '@fortawesome/free-solid-svg-icons'


function Modal({ isShowing, hide, image }) {
  console.log("modal is working: ", isShowing)
  if (isShowing) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div onClick={hide} className="modal-overlay">
          <div className="modal-wrapper" role="dialog">
            <div className="modal">
              <div className="header">
              <button onClick={hide} className="modal-button">
                <span>&times;</span>
              </button>
              </div>
            </div>
              <p>
              <img className="modal-image" src={image} />
              </p>
          </div>
        </div>


      </React.Fragment>, document.getElementById("root")
    )

  } else {
    null

  }
}

export default Modal;