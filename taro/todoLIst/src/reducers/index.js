import {combinReducers} from 'redux'
// 将很多的状态 reduce 最终的状态

const INITITAL_STATE = {
  todos: [
    {
      id: 0,
      text: '第一条'
    }
  ]
}

function todos () {
  return INITITAL_STATE
}

export default combinReducers({
  todos
})