<template>
  <router-link
    v-if="isRouterLink"
    ref="target"
    :to="path"
    class="active-element"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          var(--accent50), ${bg} 50%)`
        : bg,
      fontSize,
      padding,
      borderRadius,
    }"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    ref="target"
    type="submit"
    class="active-element"
    @click="handleClick"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          var(--accent50), ${bg} 50%)`
        : bg,
      fontSize,
      padding,
      borderRadius,
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const {
  path,
  type,
  action,
  fontSize,
  padding,
  borderRadius,
  classes,
  bg
} = defineProps([
    'path',
    'type',
    'action',
    'fontSize',
    'padding',
    'borderRadius',
    'classes',
    'bg',
  ])

const target = ref(null)
const isRouterLink = !!path
const { elementX, elementY, isOutside } = useMouseInElement(target)

const handleClick = () => {
  if (action) {
    action()
  }
}
</script>

<style lang="scss">
.active-element {
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  color: var(--color0);
  text-shadow: 0 0 1rem var(--bg0);
  line-height: 100%;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  box-shadow: inset -1rem -1rem 1rem #0004;

  &::after {
    box-shadow: inset 1rem 1rem 1rem #fff4;
    top: 0;
    right: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  &:hover {
    box-shadow: inset 1rem 1rem 1rem #0004;
    text-shadow: 0 0 1rem var(--bg0);

    &::after {
      box-shadow: inset -1rem -1rem 1rem #fff4;
    }
  }

  &:active {
    color: var(--bg0);
    text-shadow: 0 0 1rem var(--color0);
  }
}
</style>
