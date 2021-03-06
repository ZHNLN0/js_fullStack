import React, { Component } from 'react';
import {Spin, Alert, notification, Button} from 'antd'

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

class Label extends Component {
  state = {
    spinning: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinning: false
      })  
    },2000)
  }
  render() {
    const {spinning} = this.state
    return (
      
      <div>
        <Spin tip="Loading..." spinning={spinning}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div>
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </div>
      </div>
    );
  }
}

export default Label;