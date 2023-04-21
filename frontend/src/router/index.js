import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    name: 'Login',
    props: true,
    component: () => import('../views/userlogin.vue')
  },
  {
    path: '/home',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/addservices',
    name: 'addservices',
    component: () => import('../components/addServices.vue')
  },
  {
    path: '/editService',
    name: 'editService',
    component: () => import('../components/editService.vue')
  },
  {
    path: '/toggleService',
    name: 'toggleService',
    component: () => import('../components/toggleService.vue')
  },
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: '/findservices',
    name: 'findservices',
    component: () => import('../components/findServices.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
