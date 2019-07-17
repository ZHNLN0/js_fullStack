import React, { Component } from 'react';
class CommentList extends Component {
  
  render() { 
    const {Comment} = this.props
    return (
      
        <>
        <li>
          user: {Comment.userName}
          content: {Comment.commentContent}
        </li>
        
      </>
      
    );
  }
}
 
export default CommentList;
