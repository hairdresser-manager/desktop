import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import interceptorsSetup from './helpers/interceptors'

interceptorsSetup()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
