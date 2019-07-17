import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import index from './reducer/index'
import { Provider } from 'react-redux'
import Count from './App'
const store = createStore(index)

ReactDOM.render(
  <Provider store={store}>
    <Count />
  </Provider>,
  document.getElementById('root')
)

// store.subscribe(() => {
//   ReactDOM.render(<Count />, document.getElementById('root'))
// })