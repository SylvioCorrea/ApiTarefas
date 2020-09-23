import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import {Provider} from 'react-redux'

//style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap'
import './custom.css'

import App from './App';
import reducers from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
