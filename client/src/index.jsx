import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import Related from './Relateditems/Main.jsx';
import MultipleItems from  './Relateditems/Demo.jsx'
import Main from './Relateditems/Main.jsx'
import Overview from './Overview/Overview.jsx';
import QandA from './Q&A/Q&A.jsx'
import ReviewIndex from './rating_ and_review/ReviewIndex.jsx'

const UserContext = createContext() // this will help us pass down down without having to chain every single child

function App (props) {
  const [productId, setProductId] = useState('')

  return (
    <div>
      <Overview />
      <Main />
      <QandA />
      <ReviewIndex />

    </div>
  )
}
// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


