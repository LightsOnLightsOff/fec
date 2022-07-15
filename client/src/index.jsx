import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Related from './components/Related.jsx';

function App(){
  return <Related/>
}
// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App  />);

// ReactDOM.render(<Related />, document.getElementById('root'))
