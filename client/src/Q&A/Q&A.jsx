import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './individual_questions/AddAnswerModal.jsx';
import config from '../../../config.js';

function QandA (props) {

  const [isLoading, setIsLoading] = useState(true);
  const [questionData, setQuestions] = useState({});
  const [currentQuestions, changeCurrentQuestions] = useState([]);
  const [showingQuestionModal, setShowingQuestionModal] = useState(false);
  const [showingAnswerModal, setShowingAnswerModal] = useState(false);
  const [questionBeingAnswered, setQuestionBeingAnswered] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    renderQuestions()
  }, [])



  var renderQuestions = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      params: {
        product_id: 44785,
        page: 1,
        count: 20
      },
      headers: {Authorization: config.TOKEN}
    })
    .then((results) => {
      setQuestions(results.data);
      return results.data
    })
    .then((data) => {
      changeCurrentQuestions(data.results.slice(0, 2));
      console.log('question data in Q&A: ', questionData);
    })
    .catch((err) => {
      console.error(err);
    })
  }


  var handleAddQuestion = (e) => {
    setShowingQuestionModal(true);
  }

  var handleAddAnswer = (e, questionId) => {
    var setQuestionId = new Promise((resolve, reject) => {
      resolve(setQuestionBeingAnswered(questionId));
    })

    setQuestionId.then(() => {
      setShowingAnswerModal(true);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return (
    <div className='q-and-a'>
      <h2>QUESTIONS & ANSWERS</h2>
      <Search changeCurrentQuestions={changeCurrentQuestions} questionData={questionData} setSearching={setSearching}/>
      <div className='question-list'>
        <QuestionList currentQuestions={currentQuestions} handleAddAnswer={handleAddAnswer} renderQuestions={renderQuestions} />
        <div>
          <MoreQuestions changeCurrentQuestions={changeCurrentQuestions} currentQuestions= {currentQuestions} questionData={questionData} searching={searching}/>
          <button onClick={handleAddQuestion}>
            ADD A QUESTION +
          </button>
          {showingQuestionModal && <AddQuestionModal setShowingQuestionModal={setShowingQuestionModal} renderQuestions={renderQuestions}/>}
          {showingAnswerModal && <AddAnswerModal setShowingAnswerModal={setShowingAnswerModal} renderQuestions={renderQuestions} questionId={questionBeingAnswered} setQuestionBeingAnswered={setQuestionBeingAnswered}/>}
        </div>
      </div>
    </div>
  )
}

export default QandA;