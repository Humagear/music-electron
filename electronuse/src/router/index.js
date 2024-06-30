import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/music',
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/music',
          name: 'music',
          component: ()=> import('@/views/musicList/index.vue'),
          meta: {
            title: '首页'
          }

        },
        {
          path: '/contentlist',
          name: 'contentlist',
          component: () => import('@/views/gedanList/index.vue'),
          meta: {
            title: '具体歌单'
          }
        },
        {
          path: '/rankOne',
          name: 'rankOne',
          component: () => import('@/views/contentMusic/rankOne/index.vue'),
          meta: {
            title: '排行榜1'
          }
        },
        {
          path: '/rankTwo',
          name: 'rankTwo',
          component: () => import('@//views/contentMusic/rankTwo/index.vue'),
          meta: {
            title: '排行榜2'
          }
        },
        {
          path: '/rankThree',
          name: 'rankThree',
          component: () => import('@/views/contentMusic/rankThree/index.vue'),
          meta: {
            title: '排行榜3'
          }
        },
        {
          path: '/rankFour',
          name: 'rankFour',
          component: () => import('@/views/contentMusic/rankFour/index.vue'),
          meta: {
            title: '排行榜4'
          }
        },
      ]
    }
  ]
})

export default router
