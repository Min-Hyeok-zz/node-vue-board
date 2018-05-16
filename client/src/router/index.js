import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import BoardList from '@/components/board/list'
import BoardView from '@/components/board/view'
import BoardAdd from '@/components/board/add'
import BoardUpdate from '@/components/board/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
    }
  ]
})
