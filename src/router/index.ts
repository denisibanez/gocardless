import { createRouter, createWebHistory } from 'vue-router'
import ViteTemplate from '@/views/Layouts/ViteTemplate'
import HomeView from '@/views/HomeView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ViteTemplate,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutView'),
        },
      ],
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('@/views/Example/PokemonExample'),
    },
    {
      path: '/tailwind-test',
      name: 'tailwind-test',
      component: () => import('@/views/Example/TailwindTest'),
    },
    {
      path: '/quasar',
      name: 'quasar',
      component: () => import('@/views/Example/QuasarExample'),
    },
    {
      path: '/quasar-tailwind',
      name: 'quasar-tailwind',
      component: () => import('@/views/Example/QuasarTailwindTest'),
    },
    {
      path: '/quasar-plugins',
      name: 'quasar-plugins',
      component: () => import('@/views/Example/QuasarPluginsExample'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/Example/PiniaExample'),
    }
  ],
})

export default router
