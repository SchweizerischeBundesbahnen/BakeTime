import { createRouter, createWebHistory } from 'vue-router'
import AppBakersListPage from '../pages/app-bakers/AppBakersListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppBakersListPage
    }
  ]
})

export default router
