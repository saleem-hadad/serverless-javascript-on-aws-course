import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/auth/Register.vue'
import Videos from '../views/Videos.vue'
import VideoCreate from '../views/VideoCreate.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/videos',
    component: Videos
  },
  {
    path: '/videos/create',
    component: VideoCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
