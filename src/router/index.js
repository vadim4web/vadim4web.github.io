import { createRouter, createWebHistory } from 'vue-router'
import { projectsList as projects } from '~/assets/data'
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
	{
		path: '/cover',
		component: () => import('~/views/CoverImages.vue'),
	},
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
		path: '/loader',
		component: () => import('~/components/LoaderView.vue'),
		meta: { infiniteLoader: true },
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

let loaderTimeout

router.beforeEach((_to, _from, next) => {
	clearTimeout(loaderTimeout)
	state.setShowLoader(true)
	next()
})

router.afterEach(to => {
	if (to.meta.infiniteLoader) return

	const delay = sessionStorage.getItem('once_loaded') ? 1755 : 3510

	loaderTimeout = setTimeout(() => {
		sessionStorage.setItem('once_loaded', 'true')
		state.setShowLoader(false)
	}, delay)

	window.scrollTo(0, 0)
})

export default router
