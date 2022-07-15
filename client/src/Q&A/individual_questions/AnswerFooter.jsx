import React from 'react';
import moment from 'moment';

function AnswerFooter(props) {

  const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }



  return (
    <div className='answer-footer'>
      <p>{props.answer.answerer_name}</p>
      <p>{moment(props.answer.date).fromNow()}</p>
      <p>helpful?({props.answer.helpfulness})</p>
      <button>report</button>
    </div>
  )
}

export default AnswerFooter;