import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import bridge from '@vkontakte/vk-bridge';

// Отправляет событие инициализации нативному клиенту
bridge.send("VKWebAppInit");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/links',
    component: () => import('../pages/Links.vue')
  },
  {
    path: '/donate',
    component: () => import('../pages/Donate.vue')
  },
  {
    path: '/history',
    component: () => import('../pages/History.vue')
  },
  {
    path: '/clips',
    component: () => import('../pages/Clips.vue')
  },
  {
    path: '/event',
    component: () => import('../pages/Event.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
