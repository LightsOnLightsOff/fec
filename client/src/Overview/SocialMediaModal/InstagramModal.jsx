import React, {useState} from 'react';
import ReactDom from 'react-dom';

function InstagramModal ({open, onClose}) {
  if (!open) {
    return null
  }

  const [toLineInstagram, setToLineInstqgram] = useState('');
  const [messageLineInstagram, setMessageLineInstqgram] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChangeToLine = (event) => {
    setToLineInstqgram(event.target.value);
  };

  const handleChangeMessageLine = (event) => {
    setMessageLineInstqgram(event.target.value);
  }

  const submitButton = (event) => {
    event.preventDefault();
    setSubmit(true);
    if (toLineInstagram && messageLineInstagram) {
      {onClose()};
    }
  }

  return ReactDom.createPortal(
    <div>
      <div className = 'modal-overlay-styles'>
        <div className = 'modal-modal-styles'>
          <button onClick = {onClose} className = 'close-modal-button'>X</button>
          <div className = 'to-message-social-modal'>To:</div>
            <input value = {toLineInstagram} onChange = {handleChangeToLine} placeholder = '@ Someone' ></input>
            {submit &&!toLineInstagram ? <div>Please enter valid username(s).</div> : null}
          <div className = 'to-message-social-modal'>Message:</div>
            <input value = {messageLineInstagram} onChange = {handleChangeMessageLine} placeholder = 'Send a message.'></input>
            {submit && !messageLineInstagram ? <div>Please enter a valid message.</div> : null}
          <div className = 'send-social-modal'>
            <button onClick = {submitButton} style = {{cursor: 'pointer'}} className = 'send-social-media-button'>Send!</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default InstagramModal;