import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import Axios from 'axios'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n'



// Vue.prototype.$http = Axios;

// const token = localStorage.getItem('user-token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

Vue.config.productionTip = false;
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: 'want to make a deal with the product that we can provide? ',
        greeting: 'good morning',
        test: 'Im currently in 3rd grade of junior high school, every day I live with my three best friends, Aris, Andri, and Ana. The four of us have been friends since childhood. One time we wrote a friendship agreement letter on a piece of paper that was put in a bottle, then the bottle was under a tree which we would open the letter when we received the results of the graduation exam.'
      }
    },
    id: {
      message: {
        hello: 'ingin membuat kesepakatan dengan produk yang kami dapat menyediakan?? ',
        greeting: 'おはようございます',
        test: 'Saat ini aku berada di kelas 3 SMP, setiap hari kujalani bersama dengan ketiga sahabatku yaitu Aris, Andri, dan Ana. Kita berempat sudah bersahabat sejak kecil. Suatu saat kami menulis surat perjanjian persahabatan di sobekan kertas yang dimasukkan ke dalam sebuah botol, kemudian botol tersebut dikubur di bawah pohon yang nantinya surat tersebut akan kami buka saat kami menerima hasil ujian kelulusan.'
      }
    }
  }
})

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
