import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sheet from '@/components/test'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path: 'sheet',
          name: 'sheet',
          component: Sheet
        },
        {
          path:'detail',
          name:'detail',
          component:function (resolve) {
            require(['@/components/detail'],resolve)
          }
        }
      ]
    }


  ]
})
router.beforeEach((to, from, next) => {
  var login=true;
  if(login){
    window.location.href="http://www.baidu.com"
  }
})
export default router;
