import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestionButton from './AddQuestionButton.jsx';
import MoreQuestions from './MoreQuestions.jsx'

function QandA (props) {

  const [isLoading, setIsLoading] = useState(true);
  const [questionData, setQuestions] = useState({});
  const [currentQuestions, changeCurrentQuestions] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      params: {
        product_id: 40344,
        page: 1,
        count: 5
      },
      headers: {Authorization: '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'}
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

  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <Search />
      <QuestionList currentQuestions={currentQuestions}/>
      <div>
        <MoreQuestions />
        <AddQuestionButton />
      </div>
    </div>
  )
}

export default QandA;