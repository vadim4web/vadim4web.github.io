<template>
  <router-link
    v-if="isRouterLink"
    ref="target"
    :to="path"
    class="active-element flex-center hideO rel"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffff, ${bg} 33%)`
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
    class="active-element flex-center hideO rel"
    @click="handleClick"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffff, ${bg} 33%)`
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
import { ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const { path, action, fontSize, padding, borderRadius, bg } = defineProps([
  "path",
  "action",
  "fontSize",
  "padding",
  "borderRadius",
  "bg",
]);

const target = ref(null);
const isRouterLink = !!path;
const { elementX, elementY, isOutside } = useMouseInElement(target);

const handleClick = () => {
  if (action) {
    action();
  }
};
</script>

<style lang="scss">
.active-element {
  z-index: 1;
  width: max-content;
  color: var(--color0);
  text-shadow: 0 0 0.5em var(--color-op);
  line-height: 100%;
  font-weight: bold;

  mix-blend-mode: var(--mix-blend-mode1);

  &:hover {
    box-shadow: inset 1rem 1rem 1rem #0004;
    text-shadow: 0 0 0.5em var(--accent0);
    mix-blend-mode: var(--mix-blend-mode2);

    &::after {
      box-shadow: inset -1rem -1rem 1rem #fff4;
    }
  }

  &:active {
    text-shadow: 0 0 1rem var(--accent0);
  }

  &::before {
    box-shadow: inset 1rem 1rem 1rem #fff4;
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  &::after {
    box-shadow: inset -1rem -1rem 1rem #0004;
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }
}
</style>
