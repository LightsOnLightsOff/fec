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
    <>
      <div style={headerStyle}>
        <div>{props.question.question_body}</div>
        <div>helpful? ({props.question.question_helpfulness})</div>
        <button>Add an answer</button>
      </div>
      <AnswersList answers={props.question.answers}/>
    </>
  )
}

export default QuestionEntry;