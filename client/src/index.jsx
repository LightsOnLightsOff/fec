import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import QandA from './Q&A/Q&A.jsx'

function App (props) {

  return (
   <div>
    <QandA />
   </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
