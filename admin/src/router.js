import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main'
import Login from './views/Login'

import CategoryEdit from './views/CategoryEdit'
import CategoryList from './views/CategoryList'
import ItemEdit from './views/ItemEdit'
import ItemList from './views/ItemList'
import HeroEdit from './views/HeroEdit'
import HeroList from './views/HeroList'
import ArticleEdit from './views/ArticleEdit'
import ArticleList from './views/ArticleList'
import AdEdit from './views/AdEdit.vue'
import AdList from './views/AdList.vue'
import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: 'login', component: Login},
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path: "/category/create", component: CategoryEdit},
        {path: "/category/edit/:id", component: CategoryEdit, props: true},
        {path: "/category/list", component: CategoryList},

        {path: "/items/create", component: ItemEdit},
        {path: "/items/edit/:id", component: ItemEdit, props: true},
        {path: "/items/list", component: ItemList},

        {path: '/heroes/create', component: HeroEdit},
        {path: '/heroes/edit/:id', component: HeroEdit, props: true},
        {path: '/heroes/list', component: HeroList},

        {path: '/articles/create', component: ArticleEdit},
        {path: '/articles/edit/:id', component: ArticleEdit, props: true},
        {path: '/articles/list', component: ArticleList},

        {path: '/ads/create', component: AdEdit},
        {path: '/ads/edit/:id', component: AdEdit, props: true},
        {path: '/ads/list', component: AdList},

        {path: '/admin_users/create', component: AdminUserEdit},
        {path: '/admin_users/edit/:id', component: AdminUserEdit, props: true},
        {path: '/admin_users/list', component: AdminUserList},

      ]
    }
  ]
})
