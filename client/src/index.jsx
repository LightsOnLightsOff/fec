import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Related from './components/Related.jsx';


// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Related  />);

// ReactDOM.render(<Related />, document.getElementById('root'))
