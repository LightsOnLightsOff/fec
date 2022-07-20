import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../../../config.js'

function AddAnswerModal(props) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    console.log('question id here: ', props.questionId);
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${props.questionId}/answers`, {
      body: answer,
      name: nickname,
      email: email,
      photos: []
    },
    {
      headers: {Authorization: config.TOKEN},
    })
    .then((response) => {
      if (response.status === 201){
        props.setShowingAnswerModal(false);
      }
    })
    .then(() => {
        props.renderQuestions();
      }
    )
    .catch((err) => {
      console.error(err);
      alert('Could not process the answer, please make sure your answer and email are formatted correctly')
    })
  }

  return (
    <div className='qanda-modal-container'>
      <div className='qanda-modal-content'>
        <header>Add your answer</header>
          <form onSubmit={handleSubmit} name='answer-form'>
            <label htmlFor='answer'>Answer</label>
            <textarea className='qanda-body-textarea' type='text' name='answer' onChange={(e) => {setAnswer(e.target.value)}}/>
            <label htmlFor='nickname'>Nickname</label>
            <input type='text' name='nickname' onChange={(e) => {setNickname(e.target.value)}}/>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={(e) => {setEmail(e.target.value)}}/>
            <button type='submit' htmlFor='answer-form'>Submit</button>
          </form>
        <footer>

          <button onClick={() => {props.setShowingAnswerModal(false)}}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default AddAnswerModal;