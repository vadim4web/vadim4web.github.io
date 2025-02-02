import { createRouter, createWebHistory } from 'vue-router'
import { projects } from '~/assets/data/projects.js'
import { state } from '~/store/'

const routes = [
	{
		path: '/',
		component: () => import('~/views/HomePage.vue'),
	},
	{
		path: '/about',
		component: () => import('~/views/AboutPage.vue'),
	},
	{
		path: '/contact',
		component: () => import('~/views/ContactPage.vue'),
	},
	// {
	// 	path: '/cover',
	// 	component: () => import('~/views/CoverImages.vue'),
	// },
	{
		path: '/projects',
		component: () => import('~/views/ProjectsPage.vue'),
	},
	{
		path: '/project/:projectName',
		name: 'project',
		component: () => import('~/views/ProjectDetails.vue'),
		beforeEnter: to => {
			const projectName = to.params.projectName
			const isInProjects = projects.some(({ name }) => name === projectName)

			if (!isInProjects)
				return {
					name: 'error-page',
					params: { pathMatch: to.path.substring(1).split('/') },
					query: to.query,
					hash: to.hash,
				}
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'error-page',
		component: () => import('~/views/ErrorPage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory('/'),
	routes,
})

router.beforeEach((_to, _from, next) => {
	state.setShowLoader(true)
	next()
})

router.afterEach(() => {
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
