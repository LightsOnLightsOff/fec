import React, {useState, useEffect} from 'react';
import AnswersEntry from './AnswersEntry.jsx';

function AnswersList(props) {
  console.log('answerList prop answers: ', props.answers);

  return (
    <ul>
      {Object.keys(props.answers).map((answer_id) => {
        return (
          <AnswersEntry key={answer_id} answer={props.answers[answer_id]}/>
        )
      })}
    </ul>
  )
}

export default AnswersList;