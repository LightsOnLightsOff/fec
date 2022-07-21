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
    if (showingAll) {
      changeCurrentAnswers(answerData?.slice())
    } else {
      changeCurrentAnswers(answerData?.slice(0, 2))
    }
  }, [answerData, showingAll])

  var handleButton = (e) => {
    changeNumAnswers(answerData.length)
    changeShowingAll(!showingAll)
  }

  return (
    <div>
    <div className='answers-list'>
      <h3 className='answer-tag'>
        A:
      </h3>
      <ul>
        {currentAnswers.map((answer) => {
          return (
            <AnswersEntry key={answer.id} answer={answer}/>
          )
        })}
      </ul>
      </div>
      {answerData.length > 2 && <button onClick={handleButton}>{!showingAll ? 'show more answers' : 'collapse answers'}</button>}
    </div>
  )
}

export default AnswersList;