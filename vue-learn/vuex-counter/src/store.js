import Vue from 'vue';
import vuex from 'vuex';

Vue.use(Vuex);
const state = {
  count: 0
}

export default new Vuex.Store({
  state
})