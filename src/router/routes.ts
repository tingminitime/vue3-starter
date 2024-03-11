import Index from '~/pages/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/hi/:name',
    name: 'hi',
    component: () => import('~/pages/hi/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('~/pages/NotFound.vue'),
  },
]
