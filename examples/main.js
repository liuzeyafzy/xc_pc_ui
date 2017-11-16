import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
