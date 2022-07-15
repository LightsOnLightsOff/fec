import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import ReviewIndex from './rating_ and_review/ReviewIndex.jsx'

const UserContext = createContext() // this will help us pass down down without having to chain every single child

function App (props) {
const [productId, setProductId] = useState('')

  return (
   <div>
    <ReviewIndex />

    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
