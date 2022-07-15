import React, {useState, useEffect} from 'react';

function MoreQuestions(props) {

  const [showing, changeShowing] = useState(true);



  var handleClick = (e) => {
    (async () => {
      await props.changeCurrentQuestions(props.questionData.results.slice(0, props.currentQuestions.length + 2));

    })()
    .then(() => {
      if (props.currentQuestions.length === props.questionData.results.length) {

        changeShowing(false);
      }
    })
  }

  if (showing) {
    return (
      <button onClick={handleClick}>
        MORE QUESTIONS
      </button>
    )
  }
}

export default MoreQuestions;