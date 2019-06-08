import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main'
import CategoryEdit from './views/CategoryEdit'
import CategoryList from './views/CategoryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {path:"/category/create",component: CategoryEdit},
        {path:"/category/edit/:id",component: CategoryEdit,props:true},
        {path:"/category/list",component: CategoryList},
      ]
    }
  ]
})
