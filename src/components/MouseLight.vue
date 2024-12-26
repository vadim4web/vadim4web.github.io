<template>
  <div id="pointer">
    <span
      id="light"
      :style="{ 'left': x + 'px', 'top': y - scrollY + 'px' }"
    ></span>
  </div>
</template>

<script setup>
import { useMouse, useWindowScroll } from '@vueuse/core'

const { x, y } = useMouse()
const { y: scrollY } = useWindowScroll()
</script>

<style lang="scss">
#pointer {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;

  & #light {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 50vmin;
    height: 50vmin;
    border-radius: 50%;
    background: radial-gradient(var(--accent0) 15%, transparent);
    transform: translate3d(-50%, -50%, 0);
    filter: opacity(0.2) blur(5rem);
  }
}
</style>
