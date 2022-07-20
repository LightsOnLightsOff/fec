import React, {useState} from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import moment from 'moment';

function AnswerFooter(props) {

  const [helpful, setHelpful] = useState(0);
  const [reportText, setReportText] = useState('Report');

  const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

  var helpfulClick = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${props.answer.id}/helpful`, null, {
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
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${props.answer.id}/report`, null, {
      headers: {Authorization: config.TOKEN}
    })
    .then(() => {
      setReportText('Reported');
    })
  }

  return (
    <div className='answer-footer'>
      <p>{props.answer.answerer_name}</p>
      <p>{moment(props.answer.date).fromNow()}</p>
      <p>helpful? <a onClick={helpfulClick} className='helpful-yes-button'>Yes</a>({props.answer.helpfulness + helpful})</p>
      <a className='qanda-report' onClick={report}>{reportText}</a>
    </div>
  )
}

export default AnswerFooter;