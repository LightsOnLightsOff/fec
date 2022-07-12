import React from 'react'
import ReactDOM from 'react-dom'

import Overview from './Overview/Overview.jsx';

function App (props) {

  return (
    <div>
      <div> Hello </div>
      <Overview />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
