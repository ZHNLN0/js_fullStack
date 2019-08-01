import React, {useState} from 'react';
// import logo from './logo.svg';
// import ConcurrentModeDemo from './concurrent/index'
import Index from './lifeCycle-react15/index'
import './App.css';
// hooks function 组件增强
function App() {
  const [parentCount, setParentCount] = useState(0)
  return (
    <div>
      {/* <ConcurrentModeDemo/> */}
      <button onClick={() => {setParentCount(parentCount+1)}}>setParentCount</button>
      <Index parentCount={parentCount} />
    </div>
  );
}

export default App;
