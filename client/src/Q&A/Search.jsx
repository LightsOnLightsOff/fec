import React, {useState, useEffect} from 'react';

function Search(props) {

  const [term, setTerm] = useState('');

  var handleSearch = (e) => {

  }

  useEffect(() => {
    // console.log('Question Data: ', props.questionData)
    if(term.length >= 3) {
      props.setSearching(true);
      var results = [];
      props.questionData?.results.forEach((question) => {
        if (question.question_body.toLowerCase().includes(term.toLowerCase())){
          results.push(question);
        }
      })
      props.changeCurrentQuestions(results);
    } else {
      props.setSearching(false);
      props.changeCurrentQuestions(props.questionData.results?.slice(0, 2));
    }
  }, [term])

  return (
    <>
        <input type='text' placeholder='Have a question? Search for answers...' onChange={(e) => setTerm(e.target.value)} className='question-search'/>
    </>
  )
}

export default Search;