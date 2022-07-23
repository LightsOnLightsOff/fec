import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import config from '../../../config.js';
import {UserContext} from '../index.jsx';

function AddQuestionModal(props) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const context = useContext(UserContext);

  var handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      product_id: context.productInfo.id,
      body: question,
      name: nickname,
      email: email
    },
    {headers: {Authorization: config.TOKEN}})
    .then((response) => {
      if (response.status === 201){
        props.setShowingQuestionModal(false);
      }
    })
    .then(() => {
      props.renderQuestions();
    })
    .catch((err) => {
      console.error(err);
      alert('Could not process the question, please make sure your question and email are formatted correctly')
    })

  }

  return (
    <div className='qanda-modal-container'>
      <div className='qanda-modal-content'>
        <header>Add your question</header>
          <form onSubmit={handleSubmit} name='question-form'>
            <label htmlFor='question'>Your Question</label>
            <textarea maxLength='1000' className='qanda-body-textarea' type='text' name='question' onChange={(e) => {setQuestion(e.target.value)}}/>
            <label htmlFor='nickname'>What is your nickname</label>
            <input type='text' placeholder='Example: jackson11!' name='nickname' onChange={(e) => {setNickname(e.target.value)}}/>
            <p>For privacy reasons, do not use your full name or email address</p>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={(e) => {setEmail(e.target.value)}}/>
            <button type='submit' htmlFor='question-form'>Submit</button>
          </form>
        <footer>

          <button onClick={() => {props.setShowingQuestionModal()}}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default AddQuestionModal;