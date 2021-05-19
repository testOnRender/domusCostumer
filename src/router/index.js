import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
