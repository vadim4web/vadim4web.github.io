<template>
	<iframe
		v-show="isLoaded"
		:src="iframeSrc"
		:class="iframeClass"
		:style="iframeStyle"
		frameborder="0"
		@load="setLoaded"
		:scrolling="scrolling"
	></iframe>

	<loader-spinner
		v-if="!isLoaded"
		class="placeholder iframe br1"
		:three="three"
		:classes="iframeClass"
	/>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const LoaderSpinner = defineAsyncComponent(() =>
	import('@/components/LoaderSpinner.vue')
)
const { iframeSrc, iframeStyle, iframeClass, three, scrolling } = defineProps([
	'iframeSrc',
	'iframeStyle',
	'iframeClass',
	'three',
	'scrolling',
])

const isLoaded = ref(false)
const setLoaded = () => setTimeout(() => (isLoaded.value = true), 0)
</script>

<style lang="scss" scoped>
.placeholder {
	backdrop-filter: blur(0.5rem);
}
</style>
