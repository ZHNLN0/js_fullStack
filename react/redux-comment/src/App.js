// import React from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import App from './component/APP'

// mapStateToProps
const a = (state) => {
  return {
    commentList: state
  }
}
// mapDispatchProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}
export default connect(a, b)(App);
