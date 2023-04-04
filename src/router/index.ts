import { createRouter, createWebHistory } from 'vue-router'
import { LOCATION_PATHNAME } from '@/constants/config'

const router = createRouter({
  history: createWebHistory(LOCATION_PATHNAME),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/page1'
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/MainView/MainView-1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/MainView/MainView-2.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to, from: ', to, from)

  next()
})

export default router
