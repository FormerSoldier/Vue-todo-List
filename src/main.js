import Vue from 'vue'
import App from './TodoList.vue'
import store from './store/store'

Vue.config.productionTip = false

Vue.prototype.id = 0;
Vue.prototype.getId = function(){return Vue.prototype.id++;}
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
