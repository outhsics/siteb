import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index/index.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Index/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/index.vue')
    },
    {
      path: '/buy',
      name: 'buy',
      component: () => import('@/views/Buy/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/index.vue')
    },
    {
      path: '/partner',
      name: 'partner',
      component: () => import('@/views/Partner/index.vue')
    },
    {
      path: '/system',
      name: 'system',
      component: () => import('@/views/System/index.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/Team/index.vue')
    }
  ]
})

export default router
