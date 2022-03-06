import Vue from 'vue'
import App from './App.vue'

import less from 'less'

// 引入BootStrap
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(less)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
  
}).$mount('#app')
