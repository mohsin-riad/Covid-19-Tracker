import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Header from '../components/Header.vue'

const routes = [
  {
    path: '/',
    name: 'Header',
    component: Header,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
