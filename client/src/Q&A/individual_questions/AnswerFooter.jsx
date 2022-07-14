import React from 'react';

function AnswerFooter(props) {

  const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

  return (
    <div style={footerStyle}>
      <p>{props.answer.answerer_name}</p>
      <p>{props.answer.date}</p>
      <p>helpful?({props.answer.helpfulness})</p>
      <button>report</button>
    </div>
  )
}

export default AnswerFooter;