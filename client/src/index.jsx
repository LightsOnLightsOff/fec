import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Related from './Relateditems/Main.jsx';
import MultipleItems from  './Relateditems/Demo.jsx'

function App(){
  return <Related/>
}
// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


