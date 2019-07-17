import React, { Component } from 'react';
class CommentInput extends Component {
  handlePublish = () => {
    const {onPublish} = this.props
    const userName = this.refs.userName.value
    const commentContent = this.refs.commentContent.value
    
    let item = {userName, commentContent}
    console.log(item)
    onPublish(item)
  }
  state = {  }
  render() { 
    return ( 

      <div>
        用户名：<input type="text" ref="userName"></input>
        评论内容：<textarea name="" id="" ref="commentContent" cols="30" rows="10"></textarea>
        <button onClick={this.handlePublish}></button>
      </div>
      
     );
  }
}
 
export default CommentInput;
