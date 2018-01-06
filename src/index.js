import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'

import 'normalize.css'

Vue.use((Vue) => {
  Vue.prototype.$axios = axios
})

const vm = new Vue({
  router,
  render: h => h(App)
})
vm.$mount('#box')
