import { createRouter, createWebHistory } from 'vue-router'
import { menuData } from '@/data/menu.ts'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/layouts/Layout.vue'),
      children: [
        ...menuData.map((item) => {
          return {
            path: item.router,
            name: item.router,
            component: item.component
          }
        })
      ]
    }
  ]
})

export default router
