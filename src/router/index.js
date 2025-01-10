import { createRouter, createWebHistory } from 'vue-router'
import { projects } from '@/assets/data/projects.js'
import { state } from '@/store/'

const routes = [
	{
		path: '/',
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
		// Catch all routes that don't match the previous ones
		path: '/:pathMatch(.*)*',
		name: 'no-match',
		component: () => import('@/views/NotFound.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

router.beforeEach((_to, _from, next) => {
	state.setShowLoader(true)
	next()
})

router.afterEach(to => {
	if (!sessionStorage.getItem('once_loaded')) {
		setTimeout(() => {
			sessionStorage.setItem('once_loaded', true)
			state.setShowLoader(false)
		}, 3510)
	} else {
		setTimeout(() => {
			state.setShowLoader(false)
		}, 1755)
	}
	window.scrollTo(0, 0)
})

export default router
