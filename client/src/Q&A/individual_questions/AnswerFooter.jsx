import React, {useState} from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import moment from 'moment';

function AnswerFooter(props) {

  const [helpful, setHelpful] = useState(0);

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

  return (
    <div className='answer-footer'>
      <p>{props.answer.answerer_name}</p>
      <p>{moment(props.answer.date).fromNow()}</p>
      <p>helpful? <a onClick={helpfulClick} className='helpful-yes-button'>Yes</a>({props.answer.helpfulness + helpful})</p>
      <button>report</button>
    </div>
  )
}

export default AnswerFooter;