import React from 'react';
import logo from './logo.svg';
import './App.css';
import toast from './toast/toast'
/**
 * toast: {
 * success: () => {}
 * loading: () => {}
 * }
 */
const openNotificationWithIcon = (type) => {
  toast[type]('message',4000)
} 

function App() {
  return (
    <div>
      <div>
        <button onClick={() => openNotificationWithIcon('success')}>Success</button>
        <button onClick={() => openNotificationWithIcon('info')}>Info</button>
        <button onClick={() => openNotificationWithIcon('warning')}>Warning</button>
        <button onClick={() => openNotificationWithIcon('error')}>Error</button>
      </div>
    </div>
  );
}

export default App;
