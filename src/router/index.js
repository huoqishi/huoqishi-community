import Vue from 'vue'
import VueRouter from 'vue-router'
// import d from '@/views/Home.vue'
Vue.use(VueRouter)
const routes = [
  {
    name: 'index',
    path: '/',
    redirect: 'home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'context',
    path: '/context/:id',
    component: () => import('@/views/Context.vue')
  }
]
const router = new VueRouter({routes})
export default router
