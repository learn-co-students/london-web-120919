import React from 'react'
import ReactDOM from 'react-dom'
// Import the BrowserRouter for React Router and name it Router, so it's simpler for us to reference
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
