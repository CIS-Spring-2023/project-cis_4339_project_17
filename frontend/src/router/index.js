/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'

//detailing links to necessary pages via router

const routes = [
  {
    path: '/home',
    name: 'home',
    props: true,
    component: () => import('../components/dashboard.vue')
  },
  {
    path: '/Login',
    name: 'login',
    props: true,
    component: () => import('../components/userlogin.vue'),
    //hides navbar when on login screen - SP3 
    meta: {
      hideNavbar: true,
     }
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
    path: '/CREATEService',
    name: 'createservices',
    component: () => import('../components/CREATEService.vue')
  },
  {
    path: '/EDITService',
    name: 'editService',
    component: () => import('../components/EDITService.vue')
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
