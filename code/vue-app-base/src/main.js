import Vue from 'vue'
import App from './App.vue'
import './style.less'
Vue.config.productionTip = false

new Vue({
  render: r => r(App)
}).$mount('#app')
