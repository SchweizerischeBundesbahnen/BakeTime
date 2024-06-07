import { createRouter, createWebHistory } from 'vue-router'
import AppBakersListPage from '../pages/app-bakers/AppBakersListPage.vue'
import HomePage from '@/pages/home/homePage.vue'
import PastriesListPage from '@/pages/pastries/PastriesListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/appbakers',
      name: 'appbakers',
      component: AppBakersListPage
    },
    {
      path: '/pastries',
      name: 'pastries',
      component: PastriesListPage
    }
  ]
})

export default router
