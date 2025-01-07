<template>
  <iframe
    v-show="isLoaded"
    :src="iframeSrc"
    :class="iframeClass"
    :style="iframeStyle"
    frameborder="0"
    :scrolling="scrolling"
    @load="setLoaded"
  />

  <loader-spinner
    v-if="!isLoaded"
    class="placeholder iframe br1 back-blur05"
    :three="three"
    :classes="iframeClass"
  />
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const LoaderSpinner = defineAsyncComponent(
	() => import('@/components/LoaderSpinner.vue')
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
