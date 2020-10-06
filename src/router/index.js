import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import WhoAmI from '../views/WhoAmI.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/whoami',
    name: 'WhoAmI',
    component: WhoAmI
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  routes
})

export default router
