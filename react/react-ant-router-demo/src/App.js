import React from 'react';
// import logo from './logo.svg';
import PageLayout from './page/Layout'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// hashRouter #
// historyRouter 不带 # BrowserRouter实现方式是通过 h5 的 history api 实现的
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={PageLayout} />
    </Router>
  );
}

export default App;
