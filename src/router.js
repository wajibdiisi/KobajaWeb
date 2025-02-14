import Vue from 'vue'
import Router from 'vue-router'
// import store from './store.js'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Care from './views/Care.vue'
import ContactUs from './views/ContactUs.vue'
import Article from './views/Article.vue'
import Adoption from './views/Adoption.vue'
import Breeds from './views/Breeds.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'about',
      component: About
    },
    {
      path: '/care',
      name: 'care',
      component: Care
    },
    {
      path: '/about-us',
      name: 'adoption',
      component: Adoption
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
    },
  ]
})



export default router