import { createRouter, createWebHistory } from 'vue-router'
import { projects } from '@/assets/projects.js'

const routes = [
  {
    path: '/',
    redirect: '/home', // Redirect root path to the Home route
  },
  {
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/AboutMe.vue'),
  },
  {
    path: '/contact',
    component: () => import('@/views/ContactMe.vue'),
  },
  {
    path: '/loader',
    component: () => import('@/components/LoaderView.vue'),
  },
  {
    path: '/projects',
    component: () => import('@/views/MyProjects.vue'),
  },
  {
    path: '/project/:projectName',
    name: 'project',
    component: () => import('@/views/ProjectView.vue'),
    beforeEnter: to => {
      const projectName = to.params.projectName
      const isInProjects = projects.some(({ name }) => name === projectName)

      if (!isInProjects)
        return {
          name: 'no-match',
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        }
    },
  },
  {
    path: '/mediaoffice-com-ua/:path(.*)',
    // This route does nothing; it will not catch 404 errors
    beforeEnter: (_, __, next) => { next() },
  },
  {
    // Catch all routes that don't match the previous ones
    path: '/:pathMatch(.*)*',
    name: 'no-match',
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
