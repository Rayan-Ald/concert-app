import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Admin from '../views/Admin.vue';
import ManageUsers from '../views/ManageUsers.vue';
import ManageCategory from '../views/ManageCategory.vue';
import ManageConcerts from '../views/ManageConcerts.vue';
import ConcertDetail from '../views/ConcertDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/manageUsers',
    name: 'ManageUsers',
    component: ManageUsers
  },
  {
    path: '/manageCategory',
    name: 'ManageCategory',
    component: ManageCategory
  },
  {
    path: '/manageConcerts',
    name: 'ManageConcerts',
    component: ManageConcerts
  },
  {
    path: '/concertDetail',
    name: 'ConcertDetail',
    component: ConcertDetail
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
});
export default router