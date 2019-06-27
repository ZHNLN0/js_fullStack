import * as types from '../types'

const state = {
  lists: [
    {
      avatar: "http://img2.imgtn.bdimg.com/it/u=1080760116,732088640&fm=26&gp=0.jpg",
      name: "LN0",
      date: "2019-06-25",
      totalTime: "23",
      comment: "今天天气真好"
    }
  ],
  totalTime: 23
}

const getters = {
  lists: state => state.lists,
  totalTime: state => state.totalTime
}



const mutations = {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime += time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime -= time
  },
  [types.SAVE_PLAN] (state, plan) {
    state.lists.push(Object.assign({
      avatar: "http://img2.imgtn.bdimg.com/it/u=1080760116,732088640&fm=26&gp=0.jpg",
      name: "LN0"
    }, plan))
  }

}
const actions = {
  addTotalTime({commit}, time) {
    commit(ADD_TOTAL_TIME, time)
  },
  decTotalTime({commit} , time) {
    commit(DEC_TOTAL_TIME, time)
  },
  savePlan({commit}, plan) {
    commit(types.SAVE_PLAN, plan)
  }
}

export default {
  state, 
  mutations,
  actions,
  getters
}