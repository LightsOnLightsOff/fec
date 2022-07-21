import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import Related from './Relateditems/Main.jsx';

import Main from './Relateditems/Main.jsx'
import Overview from './Overview/Overview.jsx';
import QandA from './Q&A/Q&A.jsx'
import ReviewIndex from './rating_ and_review/ReviewIndex.jsx'
import styled from 'styled-components';


export const UserContext = createContext()

function App (props) {

  const [productInfo, setProductInfo] = useState({id: 40344, name: 'Camo Onesie'})



  return (
    <Div>
      <UserContext.Provider value={{
        productInfo: productInfo,
        setProductInfo: setProductInfo
        }}>
        <Overview />
        <Main />
        <QandA />
        <ReviewIndex />
      </UserContext.Provider>
    </Div>
  )
}
// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


const Div = styled.div`
padding-left: 60px;

`;