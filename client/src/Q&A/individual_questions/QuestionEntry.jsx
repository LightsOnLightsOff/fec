import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';
import axios from 'axios';
import config from '../../../../config.js';

function QuestionEntry(props) {

  const [helpful, setHelpful] = useState(0);
  const [reportText, setReportText] = useState('Report')

  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around'
  }

  var helpfulClick = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${props.question.question_id}/helpful`, null, {
      headers: {Authorization: config.TOKEN}
    })
    .then((response) => {
      setHelpful(1);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  var report = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${props.question.question_id}/report`, null, {
      headers: {Authorization: config.TOKEN}
    })
    .then(() => {
      setReportText('Reported');
    })
  }

  return (
    <div className='question-entry'>
      <div className='question-header'>
        <h3>Q: {props.question.question_body}</h3>
        <div>helpful? <a className='helpful-yes-button' onClick={helpfulClick}>Yes</a>({props.question.question_helpfulness + helpful})</div>
        <a className='qanda-report' onClick={report}>{reportText}</a>
        <button onClick={(e) => props.handleAddAnswer(e, props.question.question_id)}>Add an answer</button>
      </div>
      <AnswersList answers={props.question.answers}/>
    </div>
  )
}

export default QuestionEntry;