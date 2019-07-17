import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import display from '@/components/com/display'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'display',
      component: display
    }
  ]
})
