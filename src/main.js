import Vue from 'vue'
import App from './TodoList.vue'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
