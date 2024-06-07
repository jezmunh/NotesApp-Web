import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/note/:noteID',
      name: 'note',
      component: () => import('../views/NoteView.vue')
    },
  ]
})

export default router
