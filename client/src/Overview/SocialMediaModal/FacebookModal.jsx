import React, {useState} from 'react';
import ReactDom from 'react-dom';

function FacebookModal ({open, onClose}) {
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

  const [toLineFacebook, setToLineFacebook] = useState('');
  const [messageLineFacebook, setMessageLineFacebook] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChangeToLine = (event) => {
    setToLineFacebook(event.target.value)
  }

  const handleChangeMessageLine = (event) => {
    setMessageLineFacebook(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    if (toLineFacebook && messageLineFacebook) {
      {onClose()};
    }
  }

  return ReactDom.createPortal(
    <div>
      <div style = {OVERLAY_STYLES}></div>
      <div style = {MODAL_STYLES}>
        <button onClick = {onClose}>Close Facebook Modal</button>
        <div>To:</div>
          <input value = {toLineFacebook} onChange = {handleChangeToLine} placeholder = 'facebook'></input>
          {submit && !toLineFacebook ? <div>Please enter valid username(s).</div> : null}
        <div>Message:</div>
          <input value = {messageLineFacebook} onChange = {handleChangeMessageLine} placeholder = 'Send a message'></input>
          {submit && !messageLineFacebook ? <div>Please enter a valid message.</div> : null}
        <div>
          <button onClick = {handleSubmit}>Send!</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default FacebookModal;