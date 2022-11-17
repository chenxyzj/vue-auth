import { createRouter, createWebHistory } from 'vue-router'
import  Home  from "../views/Home.vue";
import  Login from "../views/Login";
import  Register from "../views/Register";
import  Forgot from "../views/Forgot";
import  Reset from "../views/Reset";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/forgot',
    component: Forgot
  },
  {
    path: '/reset/:token',
    component: Reset
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
