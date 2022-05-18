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
      contactUs: {
        contact: "Contact",
        contactUsTitle: "Contact Us",
        contactUsText: 'Want to make a deal with the product that we can provide?',
        sendMessage: "Send Message",
        greeting: 'good morning',
        test: 'Im currently in 3rd grade of junior high school, every day I live with my three best friends, Aris, Andri, and Ana. The four of us have been friends since childhood. One time we wrote a friendship agreement letter on a piece of paper that was put in a bottle, then the bottle was under a tree which we would open the letter when we received the results of the graduation exam.'
      },
      aboutUs: {
        description: "PT Kobaja Nusantara Prima has been developed since August 31, 2018. Main strategy of PT Kobaja Nusantara Prima is leading the company into the best and trustable company in providing steel trading and raw material. We are giving the best value and solution to the customer.The main business of the company is steel trading, providing raw material and mineral to support the development of steel industry continually.",
        businessPreview: "Our Business Review",
        businessReviewDescription: "Steel Industry is supporting national development in many fields, and Indonesia has many natural resources such as, iron ore, coal, and other raw minerals that can support national steel industry in facing global market challenge. Based on UU No.4/2009 about Mineral and Coal and Permen ESDM No.7/2012 and also Permen 20/2013, investment in mineral mining and process has been increased significantly, especially in providing raw material for the steel industry.",
        visionTitle: "Our Vision",
        visionDescription: "Leading the company into the best company in providing steel trading and raw material for the steel industry",
        missionTitle: "Our Mission",
        missionDescription: "Providing high quality and the best price of steel trading and raw material for the steel industry and other related industries",
        businessScopeTitle: "Our Scope of Business",
        businessScopeDescription: "We trades in various commodity including, but not limited to, raw materials, energy, consumable. Our trade consists of the iron & steel industry, the ferro alloy industry, foundry industry, and other industries of the same nature.",

      },
      product: {
        categoryAll: "All",
        categoryRaw: "Raw Materials",
        categoryEnergy: "Energy",
        categoryConsumable: "Consumable",
      },
      header: {
        home: "Home",
        product: "Product",
        contactUs: "Contact Us",
        aboutUs: "About Us",
      },
      home: {
        bestValue: {
          provideBest: "Providing the best ",
          value: "value",
          and: "and",
          solution: "solution"
        },
        description: {
          firstText: "Kobaja Nusantara Prima offers the",
          firstColorText: "best quality",
          secondText: "of metal in the industry including but not limited to",
          secondColorText: "iron, steel, ferro alloy, and foundry industry."
        }

      }
    },
    id: {
      contactUs: {
        contact: "Kontak",
        contactUsTitle: "Hubungi Kami",
        contactUsText: 'ingin membuat kesepakatan dengan produk yang kami dapat menyediakan?? ',
        sendMessage: "Kirim Pesan",
        greeting: 'おはようございます',
        test: 'Saat ini aku berada di kelas 3 SMP, setiap hari kujalani bersama dengan ketiga sahabatku yaitu Aris, Andri, dan Ana. Kita berempat sudah bersahabat sejak kecil. Suatu saat kami menulis surat perjanjian persahabatan di sobekan kertas yang dimasukkan ke dalam sebuah botol, kemudian botol tersebut dikubur di bawah pohon yang nantinya surat tersebut akan kami buka saat kami menerima hasil ujian kelulusan.'
      },
      aboutUs: {
        description: "PT Kobaja Nusantara Prima sudah berdiri sejak 31 Agustus, 2018. Strategi utama dari PT Kobaja Nusantara Prima adalah memimpin perusahaan menjadi perusahaan terbaik dan terpercaya dalam menyediakan perdagangan baja dan bahan baku. PT Kobaja Nusantara Prima memberikan harga dan solusi terbaik kepada pelanggan. Bisnis utama perusahaan adalah perdangan baja, menyediakan bahan baku dan mineral untuk mendukung pengembangan industri baja secara berkelanjutan.",
        businessPreview: "Pratinjau Bisnis Kami",
        businessReviewDescription: "Industri Baja mendukung pembangunan nasional di berbagai bidang, dan juga Indonesia memiliki banyak sumber daya alam seperti bijih besi, batubara, dan bahan tambang lainnya yang dapat mendukung industri baja nasional dalam menghadapi tantangan pasar global. Berdasarkan UU No.4/2009 tentang Mineral dan Batubara dan juga Permen (Peraturan Menteri) ESDM No.7/2021 serta PERMEN 20/2013, investasi di bidang pertambangan dan pengolahan mineral meningkat secara signifikan, terutama dalam penyediaan bahan baku untuk industri baja.",
        visionTitle: "Visi Kami",
        visionDescription: "Memimpin perusahaan menjadi perusahaan terbaik dalam menyediakan perdagangan baja dan bahan baku untuk industri baja",
        missionTitle: "Misi Kami",
        missionDescription: "Menyediakan kualitas tinggi dan juga harga terbaik untuk perdagangan baja dan bahan baku industri baja dan industri terkait lainnya",
        businessScopeTitle: "Lingkup Bisnis Kami",
        businessScopeDescription: "Kami memperdagangkan berbagai komoditas termasuk, namun tidak terbatas pada : bahan mentah, energi, dan bahan habis pakai. Perdangan kami terdiri dari industri besi & baja, industri paduan ferro, industri pengecoran, dan industri lain dalam ruang lingkup yang sama.",
      },
      product: {
        categoryAll: "Semua",
        categoryRaw: "Bahan Baku",
        categoryEnergy: "Energi",
        categoryConsumable: "Bahan Habis Pakai",
      },
      header: {
        home: "Halaman Utama",
        product: "Produk",
        contactUs: "Hubungi Kami",
        aboutUs: "Tentang Kami",
      },
      home: {
        bestValue: {
          provideBest: "Kami menyediakan",
          value: "harga",
          and: "dan",
          solution: "solusi"
        },
        description: {
          firstText: "Kobaja Nusantara Prima menawarkan logam dengan",
          firstColorText: "kualitas terbaik",
          secondText: "di industri baja termasuk namun tidak terbatas pada industri",
          secondColorText: "besi, baja, paduan ferro, dan pengecoran."
        }

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