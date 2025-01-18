<template>
	<iframe
		v-show="isLoaded"
		:class="iframeClass"
		frameborder="0"
		:scrolling="scrolling"
		:src="iframeSrc"
		:style="iframeStyle"
		@load="setLoaded"
	/>

	<loader-spinner
		v-if="!isLoaded"
		class="placeholder iframe br1 back-blur05"
		:classes="iframeClass"
		:three="three"
	/>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const LoaderSpinner = defineAsyncComponent(
	() => import('@/components/LoaderSpinner.vue')
)

defineProps({
	iframeSrc: String,
	iframeStyle: Object,
	iframeClass: Object,
	three: Boolean,
	scrolling: String,
})

const isLoaded = ref(false)
const setLoaded = () => setTimeout(() => (isLoaded.value = true), 0)
</script>
