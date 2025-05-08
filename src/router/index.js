import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import LocationView from "@/views/PropertyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/map',
      name: 'Map',
      component: MapView,
    },
    {
      path: '/location/:locationId',
      name: 'Location',
      component: LocationView,
    },
  ],
})

export default router
