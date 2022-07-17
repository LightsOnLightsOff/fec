import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../../config.js';

function AddQuestionModal(props) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      product_id: 44785,
      body: question,
      name: nickname,
      email: email
    },
    {headers: {Authorization: config.TOKEN}})
    .then(() => {
      props.setShowingQuestionModal(false);
      console.log('posted question to server')
    })
    .catch((err) => {
      console.error(err);
    })

  }

  return (
    <div>
      <header>Add your question</header>
        <form onSubmit={handleSubmit}>
          <label htmlFor='question'>Question</label>
          <input type='text' name='question' onChange={(e) => {setQuestion(e.target.value)}}/>
          <label htmlFor='nickname'>Nickname</label>
          <input type='text' name='nickname' onChange={(e) => {setNickname(e.target.value)}}/>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' onChange={(e) => {setEmail(e.target.value)}}/>
          <button type='submit'>Submit</button>
        </form>
      <footer></footer>
    </div>
  )
}

export default AddQuestionModal;