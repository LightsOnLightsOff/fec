import React, {useState} from 'react';
import ReactDom from 'react-dom';

function PinterestModal ({open, onClose}) {
  if (!open) {
    return null
  }

  const [toLinePinterest, setToLinePinterest] = useState('');
  const [messageLinePinterest, setMessageLinePinterest] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChangeToLine = (event) => {
    setToLinePinterest(event.target.value);
  }
  const handleChangeMessageLine = (event) => {
    setMessageLinePinterest(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    if (toLinePinterest && messageLinePinterest) {
      {onClose()};
    }
  }

  return ReactDom.createPortal(
    <div>
      <div className = 'modal-overlay-styles'>
        <div className = 'modal-modal-styles'>
          <button onClick = {onClose} className = 'close-modal-button'>X</button>
          <div>To:</div>
            <input value = {toLinePinterest} onChange = {handleChangeToLine} placeholder = 'Pinterest Someone'></input>
            {submit && !toLinePinterest ? <div>Please enter valid username(s).</div> : null}
          <div>Message</div>
            <input value = {messageLinePinterest} onChange = {handleChangeMessageLine} placeholder = 'Send a Message'></input>
            {submit && !messageLinePinterest ? <div>Please enter a valid message.</div> : null}
          <div className = 'send-social-modal'>
            <button onClick = {handleSubmit} style = {{cursor: 'pointer'}} className = 'send-social-media-button'>Send!</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default PinterestModal;