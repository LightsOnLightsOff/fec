import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import config from '../../../config.js'

function QandA (props) {

  const [isLoading, setIsLoading] = useState(true);
  const [questionData, setQuestions] = useState({});
  const [currentQuestions, changeCurrentQuestions] = useState([]);
  const [showingQuestionModal, setShowingQuestionModal] = useState(false);

  useEffect(() => {
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
    })
    .catch((err) => {
      console.error(err);
    })
  }, [])

  var handleAddQuestion = (e) => {
    setShowingQuestionModal(true);
  }

  return (
    <div className='q-and-a'>
      <h2>QUESTIONS & ANSWERS</h2>
      <Search />
      <QuestionList currentQuestions={currentQuestions}/>
      <div>
        <MoreQuestions changeCurrentQuestions={changeCurrentQuestions} currentQuestions= {currentQuestions} questionData={questionData}/>
        <button onClick={handleAddQuestion}>
          ADD A QUESTION +
        </button>
        {showingQuestionModal && <AddQuestionModal setShowingQuestionModal={setShowingQuestionModal}/>}
      </div>
    </div>
  )
}

export default QandA;