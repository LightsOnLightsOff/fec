import React from 'react';
import AnswersList from './AnswersList.jsx';

function QuestionEntry(props) {

  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around'
  }

  console.log(props.question.answers);

  return (
    <div className='question-entry'>
      <div className='question-header'>
        <h3>Q: {props.question.question_body}</h3>
        <div>helpful? ({props.question.question_helpfulness})</div>
        <button>Add an answer</button>
      </div>
      <AnswersList answers={props.question.answers}/>
    </div>
  )
}

export default QuestionEntry;