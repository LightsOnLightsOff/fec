import React, {useState, useEffect} from 'react';
import AnswersEntry from './AnswersEntry.jsx';

function AnswersList(props) {
  const [answerData, changeAnswerData] = useState(() => {
    var answerArray = [];
    for (let id in props.answers) {
      answerArray.push(props.answers[id])
    }
    return answerArray.sort((a,b) => { return b.helpfulness - a.helpfulness})
  })
  const [currentAnswers, changeCurrentAnswers] = useState([]);
  const [numAnswers, changeNumAnswers] = useState(2);
  const [showingAll, changeShowingAll] = useState(false)

  useEffect(() => {
    changeCurrentAnswers(answerData?.slice(0, numAnswers))
  }, [answerData, numAnswers])

  var handleButton = (e) => {
    changeNumAnswers(answerData.length)
    changeShowingAll(true)
  }

  return (
    <div className='answers-list'>
      <h3>
        A:
      </h3>
      <ul>
        {currentAnswers.map((answer) => {
          return (
            <AnswersEntry key={answer.id} answer={answer}/>
          )
        })}
      </ul>
      <button onClick={handleButton}>show more answers</button>
    </div>
  )
}

export default AnswersList;