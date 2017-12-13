import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'

const vm = new Vue({
  router,
  render: h => h(App)
})
vm.$mount('#box')
