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
    name: 'articles',
    path: '/articles/:id',
    component: () => import('@/views/Article.vue')
  }
]
const router = new VueRouter({routes})
export default router
