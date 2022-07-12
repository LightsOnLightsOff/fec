import React, {useState} from 'react';
import ReactDom from 'react-dom';

function TwitterModal ({open, children, onClose}) {
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

  const [toLineTwitter, setToLineTwitter] = useState('');
  const [messageLineTwitter, setMessageLineTwitter] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChangeToLine = (event) => {
    setToLineTwitter(event.target.value);
  }

  const handleChangeMessageLine = (event) => {
    setMessageLineTwitter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    if (toLineTwitter && messageLineTwitter) {
      {onClose()};
    }
  }

  return ReactDom.createPortal(
    <div>
      <div style = {OVERLAY_STYLES}></div>
      <div style = {MODAL_STYLES}>
        <button onClick = {onClose}>Close Twitter Modal</button>
        {children}
        <div>To:</div>
        <input value = {toLineTwitter} onChange = {handleChangeToLine} placeholder = 'Who are you going to tweet at?'></input>
        {submit && !toLineTwitter ? <div>Please enter valid handle(s).</div> : null}
        <div>Message:</div>
        <input value = {messageLineTwitter} onChange = {handleChangeMessageLine} placeholder = 'Send your message.'></input>
        {submit && !messageLineTwitter ? <div>Please enter a valid message.</div> : null}
        <button onClick = {handleSubmit}>Send!</button>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default TwitterModal;