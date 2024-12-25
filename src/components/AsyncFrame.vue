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

  <loader-view
    v-if="!isLoaded"
    :classes="iframeClass"
    class="placeholder"
    :three="three"
  />
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const LoaderView = defineAsyncComponent(() =>
  import('@/components/LoaderView.vue')
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
  background-color: var(--bg50);
  border-radius: 1rem;
}
</style>
