// Import the React class from react, a package we have defined in package.json which we will go and get using npm install
import React from 'react'
// ReactDOM contains methods that allow us to manipulate the DOM
import ReactDOM from 'react-dom'
import './index.css'
// Import our App class from a file on our local filesystem. It is implicitly understood to be a JavaScript file, so we don't need to say .js
import App from './App'

ReactDOM.render(
  // Render an instance of one our component classes - in this case, App...
  <App />,
  // ...and append that to somewhere in the DOM - in this case, to the element with the id of root
  document.getElementById('root')
)
