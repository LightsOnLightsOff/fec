import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import ReviewList from './rating_ and_review/ReviewList.jsx'

const UserContext = createContext() // this will help us pass down down without having to chain every single child

function App (props) {
const [productId, setProductId] = useState('')

//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=2', {

//     headers: {
//       Authorization: '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'
//     }
//   })
//   .then(res => {
//     console.log('this is the response', res.data)
//   })
//  .catch((err) => {
//    console.log("ERROR: ", err)
//  })


  return (
   <div>
    Webpage
    <ReviewList></ReviewList>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
