import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Notice from './Notice'
import {TransitionGroup, CSSTransition} from 'react-transition-group'


class Notification extends Component {
  // type, content, duration, onClose
  state = { 
    notices: []
  }
  generateKey = () => {
    const {notices} = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }
  addNotice = (notice) => {
    console.log('notice', notice)
    const notices = this.state.notices.slice(0);
    const key = this.generateKey()
    notice.key = key
    notices.push(notice)
    this.setState({
      notices
    })
    setTimeout(() => {
      this.removeNotice(key)
    },notice.duration || 2000)
  }

  removeNotice = (key) => {
    let notices = this.state.notices.slice(0)
    let notice = notices.findIndex(e => e.key === key)
    if(notice !== -1) {
      const current = notices[notice];
      if(current.onCloce) current.onCloce();
      notices.splice(notice, 1)
      this.setState({
        notices
      })
    }
  }


  render() { 
    const {notices} = this.state
    return (  
      <TransitionGroup className="toast-notification">
        {
          notices.map((notice) => {
            return (
              <CSSTransition timeout={300} key={notice.key} 
              classNames="toact-notice-wrapper notice"
              >
                <Notice {...notice} />
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    );
  }
}

/**
 * <App>
 *  <Notification />
 * </App>
 */

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 可以获取组件实例
  const ref = React.createRef()
  ReactDOM.render(<Notification ref={ref} />, div)
  return {
    addNotice(notice) {
      return ref.current.addNotice(notice)
    }
  }
}

export default createNotification()