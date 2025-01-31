import { createApp } from 'vue'
import '~/style.css'
import App from '~/App.vue'
import router from '~/router/'
import i18n from '~/i18n/'
import clickOutside from '~/directives/clickOutside'

createApp(App)
	.use(router)
	.use(i18n)
	.directive('click-outside', clickOutside)
	.mount('#app')
