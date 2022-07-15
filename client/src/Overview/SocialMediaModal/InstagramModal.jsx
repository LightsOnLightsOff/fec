import React, {useState} from 'react';
import ReactDom from 'react-dom';

function InstagramModal ({open, onClose}) {
  if (!open) {
    return null
  }

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  const OVERLAY_STYLES = {
    postion : 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0, 0.7)',
    zIndex: 1000
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
      <div style = {OVERLAY_STYLES}></div>
      <div style = {MODAL_STYLES}>
        <button onClick = {onClose}>Close Instagram Modal</button>
        <div>To:</div>
          <input value = {toLineInstagram} onChange = {handleChangeToLine} placeholder = '@instagram' ></input>
          {submit &&!toLineInstagram ? <div>Please enter valid username(s).</div> : null}
        <div>Message:</div>
          <input value = {messageLineInstagram} onChange = {handleChangeMessageLine} placeholder = 'Send a message.'></input>
          {submit && !messageLineInstagram ? <div>Please enter a valid message.</div> : null}
        <div>
          <button onClick = {submitButton}>Send!</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default InstagramModal;