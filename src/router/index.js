import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
    
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  // scrollBehavior(to, from, savedPosition) {
  //   // always scroll 10px above the element #main
  //   return {
  //     // could also be
  //     // el: document.getElementById('main'),
  //     el: '#main',
  //     top: -10,
  //   }
  // }
})

export default router
