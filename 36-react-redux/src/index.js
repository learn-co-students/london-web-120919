import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// We can use createStore to create our Redux store and Provider to provide our App with access to it
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./reducer.js"
import App from './App';

// Create our store, passing in our reducer function and connecting it to the Redux dev tools. We could also have created mutliple reducers and passed them to combineReducer, which we would then pass to createStore so that it would know to use different reducers for different pieces of state
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  // Provider takes our Redux store as a prop. By wrapping App in Provider tags, we provide it with access to that store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
