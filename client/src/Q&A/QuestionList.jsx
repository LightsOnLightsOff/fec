import React from 'react';
import QuestionEntry from './individual_questions/QuestionEntry.jsx';

function QuestionList(props) {
  return (
    <ul>
      {props.currentQuestions?.map((question) => {
        return (<QuestionEntry key={question.question_id} question={question} handleAddAnswer={props.handleAddAnswer} renderQuestions={props.renderQuestions}/>)
      })}
    </ul>
  )
}

export default QuestionList;