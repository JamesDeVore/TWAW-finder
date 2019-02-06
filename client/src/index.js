import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";


import './index.css';
import App from './App';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
