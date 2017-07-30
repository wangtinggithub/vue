import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sheet from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sheet',
      name: 'sheet',
      component: Sheet
    }
  ]
})
