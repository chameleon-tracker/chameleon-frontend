import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {path: '/', name: 'dashboard', component:  () => import('@/views/ProjectsView.vue')},
  {path: '/project', name: 'project', component: () => import('@/views/ProjectsView.vue'), sensitive: true},
  {path: '/:pathMatch(.*)', name: 'notfound', component: () => import('@/views/NotFound.vue'), sensitive: true},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
