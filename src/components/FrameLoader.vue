<script setup>
import { ref, defineAsyncComponent } from 'vue'

defineProps({
	iframeTitle: String,
	iframeSrc: String,
	iframeStyle: Object,
	iframeClass: Object,
	three: Boolean,
	scrolling: String,
})

const isLoaded = ref(false)

const LoaderSpinner = defineAsyncComponent(
	() => import('~/components/LoaderSpinner.vue')
)

const setLoaded = () => setTimeout(() => (isLoaded.value = true), 0)
</script>

<template>
	<iframe
		v-show="isLoaded"
		:class="iframeClass"
		frameborder="0"
		:scrolling="scrolling"
		:src="iframeSrc"
		:style="iframeStyle"
		tabindex="-1"
		:title="iframeTitle"
		@load="setLoaded"
	/>

	<loader-spinner
		v-if="!isLoaded"
		class="placeholder iframe br1 back-blur05"
		:classes="iframeClass"
		:three="three"
	/>
</template>
