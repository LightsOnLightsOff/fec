import React, {useState, useEffect} from 'react';

function MoreQuestions(props) {

  const [showing, changeShowing] = useState(true);

  var handleClick = async(e) => {
    props.changeCurrentQuestions(props.questionData.results.slice(0, props.currentQuestions.length + 2))
  }

  useEffect(() => {
    if (props.currentQuestions?.length >= props.questionData.results?.length) {
      changeShowing(false);
    }
    else {
      changeShowing(true);
    }
  }, [props.currentQuestions])

  if (showing) {
    return (
      <button onClick={handleClick}>MORE QUESTIONS</button>
    )
  }
}

export default MoreQuestions;