<template>
  <button
    @click="toggleTheme"
    class="theme-toggler"
    :title="$t(`toggleTheme${'_' + theme}`)"
  >
    <span
      id="spot"
      :style="{
        background:
          `radial-gradient(ellipse at ${offsetX}% ${offsetY}%,
          var(--accent1_50) 5%, var(--color0))`,
        fontSize: theme === 'light' ? '1.5rem' : '1.85rem',
        lineHeight: theme === 'light' ? '1.5rem' : '2rem',
      }"
    >
      {{ theme === 'light' ? '🌙' : '🌞' }}
    </span>

    <h2 v-show="false">
      {{ width }} {{ height }}<br />
      {{ x }} {{ y }}<br />
      {{ offsetX }} {{ offsetY }}
    </h2>
  </button>
</template>

<script setup>
import { ref, onMounted, watch, onUpdated } from 'vue'
import { useMouse, useWindowSize } from '@vueuse/core'
import { state } from '@/store.js'
import getTheme from '@/helpers/getTheme'

const { x, y } = useMouse()
const { width, height } = useWindowSize()
const offsetX = ref(50)
const offsetY = ref(50)

const theme = ref(getTheme())

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const setTheme = theme => {
  sessionStorage.setItem('theme', theme)
  state.setThemeColor(theme === 'dark' ? '#ffffff' : '#000000')
  document.documentElement.setAttribute('data-theme', theme)
  document.getElementById('favicon').href =
    theme === 'dark' ? '/favicon_dark.ico' : '/favicon_light.ico'
}

onMounted(() => setTheme(theme.value))

onUpdated(() => {
  offsetX.value = (x.value / width.value) * 100 || 50
  offsetY.value = (y.value / height.value) * 100 || 50
  setTheme(theme.value)
})

watch(theme, newTheme => setTheme(newTheme))
</script>

<style lang="scss">
.theme-toggler {
  background-color: transparent;
  border: none;
  z-index: 1;
  transition: transform 0.5s;
  cursor: pointer;
  opacity: 0.75;
  height: 5rem;
  display: flex;
  align-items: center;

  #spot {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color0);
    line-height: 100%;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at 0% 0%,
      var(--accent2) 5%,
      var(--color0)
    );
    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: inherit;
      background: var(--color0);
    }
  }
}
</style>
