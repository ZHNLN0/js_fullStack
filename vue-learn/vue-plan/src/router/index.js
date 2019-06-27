import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import timeEntries from '@/components/timeEntries'
import logTime from '@/components/logTime'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/timeEntries',
      name: 'timeEntries',
      component: timeEntries
    },
    {
      path: '/timeEntries/logTime',
      name: 'logTime',
      component: logTime
    }
  ]
})
