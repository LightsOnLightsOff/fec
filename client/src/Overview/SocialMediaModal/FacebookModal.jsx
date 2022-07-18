import React, {useState} from 'react';
import ReactDom from 'react-dom';

function FacebookModal ({open, onClose}) {
  if (!open) {
    return null
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
      <div className = 'modal-overlay-styles'>
        <div className = 'modal-modal-styles'>
          <button onClick = {onClose} className = 'close-modal-button'>X</button>
          <div>To:</div>
            <input value = {toLineFacebook} onChange = {handleChangeToLine} placeholder = 'Facebook Someone'></input>
            {submit && !toLineFacebook ? <div>Please enter valid username(s).</div> : null}
          <div>Message:</div>
            <input value = {messageLineFacebook} onChange = {handleChangeMessageLine} placeholder = 'Send a message'></input>
            {submit && !messageLineFacebook ? <div>Please enter a valid message.</div> : null}
          <div className = 'send-social-modal'>
            <button onClick = {handleSubmit} style = {{cursor: 'pointer'}} >Send!</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default FacebookModal;