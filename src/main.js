import Vue from 'vue'
import App from './layout';
import vuetify from './plugins/vuetify'
import router from './router'
import './assets/css/tailwind.css'
import './assets/css/custom.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
