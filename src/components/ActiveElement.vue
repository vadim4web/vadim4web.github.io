<template>
  <router-link
    v-if="isRouterLink"
    ref="target"
    :to="path"
    class="active-element"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffffcc, ${bg} 33%)`
        : bg,
      boxShadow: `0 0 1.5rem ${bg}`,
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
          #ffffffcc, ${bg} 33%)`
        : bg,
      boxShadow: `0 0 1.5rem ${bg}`,
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
  text-shadow: 0 0 0.15rem var(--accent0);
  line-height: 100%;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  mix-blend-mode: difference;
  mix-blend-mode: plus-lighter;

  &::before {
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

  &::after {
    box-shadow: inset -1rem -1rem 1rem #0004;
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
    mix-blend-mode: difference;
    background-blend-mode: luminosity;

    &::after {
      box-shadow: inset -1rem -1rem 1rem #fff4;
    }
  }

  &:active {
    text-shadow: 0 0 1rem var(--accent);
  }
}
</style>
