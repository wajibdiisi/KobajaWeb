import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import Axios from 'axios'
import vuetify from './plugins/vuetify';

// Vue.prototype.$http = Axios;

// const token = localStorage.getItem('user-token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')