import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestionButton from './AddQuestionButton.jsx';
import MoreQuestions from './MoreQuestions.jsx'

function QandA (props) {
  return (
    <>
      <div>QUESTIONS & ANSWERS</div>
      <Search />
      <QuestionList />
      <div>
        <MoreQuestions />
        <AddQuestionButton />
      </div>
    </>
  )
}

export default QandA;