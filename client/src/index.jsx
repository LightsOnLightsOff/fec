import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function App (props) {

  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
      params: { page: 2, count: 2 },
      headers: {
        Authorization: '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'
      }
    })
    .then(res => {
      console.log('this is the response data', res)
    })

  return (
    <div>
      <h1>Hello World!!!</h1>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
