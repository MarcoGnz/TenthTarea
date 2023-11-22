import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Importar componente TodoList.
import TodoList from '../views/TodoList.vue'

import TodosIssues from '../views/TodosIssues'

import IssueList from '../views/IssueList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Se ha añadido la ruta '/todos'.
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todo-issues',
    name: 'TodosIssues',
    component: TodosIssues
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( '../views/AboutView.vue')
    }*/

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
