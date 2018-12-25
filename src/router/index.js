import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/view/first/index'
import SecondPage from '@/view/second/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/second',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
