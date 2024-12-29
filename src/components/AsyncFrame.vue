<template>
  <iframe
    v-show="isLoaded"
    :src="iframeSrc"
    :class="iframeClass"
    :style="iframeStyle"
    frameborder="0"
    @load="setLoaded"
    scrolling="no"
  ></iframe>

  <loader-spinner
    v-if="!isLoaded"
    class="placeholder iframe"
    :three="three"
    :classes="iframeClass"
  />
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const LoaderSpinner = defineAsyncComponent(() =>
  import('@/components/LoaderSpinner.vue')
)
const { iframeSrc, iframeStyle, iframeClass, three } = defineProps([
  'iframeSrc',
  'iframeStyle',
  'iframeClass',
  'three',
])

const isLoaded = ref(false)
const setLoaded = () => setTimeout(() => (isLoaded.value = true), 0)
</script>

<style lang="scss" scoped>
.placeholder {
  backdrop-filter: blur(0.5rem);
  border-radius: 1rem;
}
</style>
