import React, {useState} from 'react';
import AnswerFooter from './AnswerFooter.jsx';

function AnswersEntry(props) {

  const [imageModal, setImageModal] = useState({showing: false, url: null});

  var handleImgClick = (e) => {
    console.log(e.target);
    setImageModal({showing:true, url:e.target.src});
  }

  return (
    <div className='answers-entry'>
      <div>
        {props.answer.body}
      </div>
      {props.answer.photos.map((url) => {
        return (<img onClick={handleImgClick} className='answer-img' src={url}/>)
      })}
      <AnswerFooter answer={props.answer}/>
      {
      imageModal.showing &&
      <div id='image-modal-container' className='qanda-modal-container'>
        <button onClick={() => setImageModal({showing: false, url: null})}>X</button>
        <img src={imageModal.url} />
      </div>
      }
    </div>
  )
}

export default AnswersEntry;