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
            <label htmlFor='question'>Question</label>
            <textarea className='qanda-body-textarea' type='text' name='question' onChange={(e) => {setQuestion(e.target.value)}}/>
            <label htmlFor='nickname'>Nickname</label>
            <input type='text' name='nickname' onChange={(e) => {setNickname(e.target.value)}}/>
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