import React from 'react';
import AnswerFooter from './AnswerFooter.jsx';

function AnswersEntry(props) {
  return (
    <>
      <div>
        {props.answer.body}
      </div>
      <AnswerFooter answer={props.answer}/>
    </>
  )
}

export default AnswersEntry;