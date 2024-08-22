import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/homePage.vue'
import AppBakersListPage from '@/pages/bakers/BakersListPage.vue'
import PastriesListPage from '@/pages/pastries/PastriesListPage.vue'
import AboutPage from '@/pages/about/AboutPage.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/bakers',
    name: 'bakers',
    component: AppBakersListPage
  },
  {
    path: '/pastries',
    name: 'pastries',
    component: PastriesListPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
