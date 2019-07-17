import React, { Component } from 'react';
import List from './list'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// import logo from './logo.svg';
import './App.css';

let generateID = 1

class App extends Component {
  state= {
    lists: [
      {
        name: 'tom1', 
        age: 19,
        school: 'school1',
        id: 0
      },
      {
        name: 'tom2', 
        age: 19,
        school: 'school2',
        id: 1
      }
    ],

    commentList: []
  }
  handlePublish = (item) => {
    // push 新数据 再 setState
    const commentList = this.state.commentList.slice(0);
    console.log(item)
    commentList.push(item)
    this.setState({
      commentList
    })
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    generateID++;
    lists.push({
      name: 'tom2', 
      age: 19,
      school: 'school2',
      id: generateID
    })
    this.setState({
      lists
    })
  }
  handleListDelete = (id) => {
    console.log('父组件收到id ', id)
    const lists = this.state.lists.slice(0)
    const index = lists.findIndex(list => list.id === id)
    lists.splice(index, 1)
    this.setState({
      lists
    })
  }
  render() {
    const {lists, commentList} = this.state
    return (
      <>
      <ul>
      <button onClick={this.handleAddInfo}>
        添加一条数据
      </button>
      {
        lists.map((list, i) => {
          return (
            <List key={list.id} list = {list} onDelete={this.handleListDelete}/>
          )
        })
      }
    </ul>
    <div>
      <CommentInput onPublish={this.handlePublish}/>
      {
        commentList.map((comment, i) => {
          return (
            <CommentList Comment={comment} />
          )
        })
      }
      
    </div>
    </>
    )
  }
}

export default App;
