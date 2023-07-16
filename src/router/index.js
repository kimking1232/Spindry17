import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import views/halaman
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistPage from '../views/RegistPage.vue'
import LPlogged from '../views/LPlogged.vue'
import OrderPage from '../views/OrderPage.vue'
import SuksesPage1 from '../views/SuksesPage1.vue'
import SuksesPage2 from '../views/SuksesPage2.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/RegistPage',
    name: 'RegistPage',
    component: RegistPage
  },
  {
    path: '/LPlogged',
    name: 'LPlogged',
    component: LPlogged
  },
  {
    path: '/OrderPage',
    name: 'OrderPage',
    component: OrderPage
  },
  {
    path: '/SuksesPage1',
    name: 'SuksesPage1',
    component: SuksesPage1
  },
  {
    path: '/SuksesPage2',
    name: 'SuksesPage2',
    component: SuksesPage2
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
