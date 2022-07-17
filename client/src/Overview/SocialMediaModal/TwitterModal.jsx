import React, {useState} from 'react';
import ReactDom from 'react-dom';

function TwitterModal ({open, onClose}) {
  if (!open) {
    return null
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
      <div className = 'modal-overlay-styles'>
        <div className = 'modal-modal-styles'>
          <button onClick = {onClose} className = 'close-modal-button'>X</button>
          <div>To:</div>
            <input value = {toLineTwitter} onChange = {handleChangeToLine} placeholder = 'Tweet @ Someone'></input>
            {submit && !toLineTwitter ? <div>Please enter valid handle(s).</div> : null}
          <div>Message:</div>
            <input value = {messageLineTwitter} onChange = {handleChangeMessageLine} placeholder = 'Send your message.'></input>
            {submit && !messageLineTwitter ? <div>Please enter a valid message.</div> : null}
          <div>
            <button onClick = {handleSubmit} style = {{cursor: 'pointer'}}>Send!</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default TwitterModal;