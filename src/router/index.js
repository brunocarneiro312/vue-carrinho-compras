import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Canvas from "../components/Canvas";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: Canvas
  }
]

const router = new VueRouter({
  routes
})

export default router
