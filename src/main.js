import Vue from 'vue'
import App from './layout';
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import router from './router'
import './assets/css/tailwind.css'
import './assets/css/custom.css'
import VueAxios from 'vue-axios'

import VueAWN from "vue-awesome-notifications"
import VueCookies from "vue-cookies";


let options = {
    labels: {
        success: 'Success!',
        warning: 'Warning!',
        alert: 'Failed!',
        confirm: 'Failed!',
    },
    position: 'top-right',
    durations: {
        global: 3000
    }
}

Vue.use(VueAWN, options)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
