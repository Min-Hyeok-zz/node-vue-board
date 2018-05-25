import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import BoardList from '@/components/board/list'
import BoardView from '@/components/board/view'
import BoardAdd from '@/components/board/add'
import BoardUpdate from '@/components/board/update'
import memberAdd from '@/components/member/add'
import memberLogin from '@/components/member/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/board/list',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/board/view/:idx',
      name: 'BoardView',
      component: BoardView
    },
    {
      path: '/board/add',
      name: 'BoardAdd',
      component: BoardAdd
    },
    {
      path: '/board/update/:idx',
      name: 'BoardUpdate',
      component: BoardUpdate
    },
    {
      path: '/member/add',
      name: 'memberAdd',
      component: memberAdd
    },
    {
      path: '/member/login',
      name: 'memberLogin',
      component: memberLogin
    }
  ]
})
