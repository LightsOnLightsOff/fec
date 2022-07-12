import React from 'react';
import QuestionEntry from './individual_questions/QuestionEntry.jsx';

function QuestionList(props) {
  return (
    <ul>
      <QuestionEntry />
      <QuestionEntry />
    </ul>
  )
}

export default QuestionList;