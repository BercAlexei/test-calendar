import Vue from 'vue'
import store from './store'
import Vuelidate from 'vuelidate'

import App from './App.vue'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
