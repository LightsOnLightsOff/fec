import React from 'react';
import AnswerFooter from './AnswerFooter.jsx';

function AnswersEntry(props) {
  return (
    <div className='answers-entry'>
      <div>
        {props.answer.body}
      </div>
      <AnswerFooter answer={props.answer}/>
    </div>
  )
}

export default AnswersEntry;