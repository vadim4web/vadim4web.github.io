import { reactive } from 'vue'
import { getThemeColor } from '~/helpers'

export const state = reactive({
	showLoader: true,
	setShowLoader(value) {
		this.showLoader = value
	},
	themeColor: getThemeColor(),
	setThemeColor(value) {
		this.themeColor = value
	},
})
