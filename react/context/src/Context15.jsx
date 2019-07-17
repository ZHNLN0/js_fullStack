import React, {Component} from 'react'
import propTypes from 'prop-types'

class Context15 extends Component {
  state = {
    theme: 'red'
  }
  getChildContext() {
    return {
      theme: this.state.theme
    }
  }
  // 1
  // handleToggleTheme = (e) => {
  //   const theme = e.target.dataset.theme
  //   this.setState({
  //     theme
  //   })
  // }

  // 2 调用要传参 this.handleToggleTheme('purple')   
  // handleToggleTheme = (theme) => () => {
  //   this.setState({
  //     theme
  //   })
  // }

  // 3 () => {this.handleToggleTheme('purple')}  在函数中调用
  handleToggleTheme = (theme) => {
    this.setState({
      theme
    })
  }
  render() {
    const msg = ['aaa', 'add', 'vvvv']
    return (
      <div>
        {
          msg.map((item, i) => {
            return (
              <Message key={i} text={item} />
            )
          })
        }
        <button onClick={() => {this.handleToggleTheme('purple')}} data-theme="purple">purple</button>
        <button onClick={() => {this.handleToggleTheme('yellow')}} data-theme="yellow">yellow</button>
      </div>
    )
  }
}
Context15.childContextTypes = {
  theme: propTypes.string 
}
class Message extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const {text} = this.props
    return (
      <li>
        {text}
        <MyButton />
      </li>
    )
  }
}

class MyButton extends Component {
  static contextTypes = {
    theme: propTypes.string
  }
  render() {
    const {theme} = this.context
    return (
      <button style={{color: theme}}>delete</button>
    )
  }
}

export default Context15