<template>
  <header class="header">
    <menu>
      <li class="menu-item flex-center">
        <router-link to="/home" class="link flex-center logo-link">
          <logo-view logoClass="logo-view" />
        </router-link>
      </li>

      <li class="menu-item flex-center">
        <router-link to="/about" class="link flex-center">{{
          $t('AboutMe')
        }}</router-link>
      </li>

      <li class="menu-item">
        <router-link to="/projects" class="link flex-center">{{
          $t('MyWorks')
        }}</router-link>
      </li>

      <li class="menu-item flex-center">
        <router-link to="/contact" class="link flex-center">{{
          $t('Contact')
        }}</router-link>
      </li>

      <li class="menu-item flex-col-center global-view">
        <theme-toggler />
        <lang-toggler />
      </li>
    </menu>
  </header>
</template>

<script setup>
import LogoView from '@/components/LogoView.vue'
import ThemeToggler from '@/components/ThemeToggler.vue'
import LangToggler from '@/components/LangToggler.vue'
</script>

<style lang="scss">
.header {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  height: var(--rem);
  width: 100dvw;
  background: linear-gradient(180deg, var(--bg0), var(--bg50), transparent);
  backdrop-filter: blur(0.5rem);
  display: flex;
}

menu {
  width: 100%;
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr) 0.5fr;
  place-items: center;
  font-weight: 500;
  height: var(--rem);

  gap: 0.125rem;

  a {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.5rem;

    font-size: 2.5rem;
    line-height: 4.1rem;
    height: 4.25rem;
    height: var(--rem);

    opacity: 0.75;
    font-variant: small-caps;
    text-transform: uppercase;
    text-wrap: nowrap;
    border: 0.125rem solid transparent;
    font-weight: bold;
    color: var(--color0);

    &:hover,
    &.router-link-active {
      border: 0.125rem solid var(--color50);
      border-radius: var(--rem05);
      color: var(--color0);
      opacity: 0.66;
      filter: hue-rotate(90deg);
    }

    &:hover .logo-image,
    &.router-link-active .logo-image {
      stroke: var(--color0);
      filter: url(#shadowActive);
    }
  }
}

.menu-item {
  text-align: center;
  width: 100%;
  text-shadow: 0 0 2rem var(--bg0) !important;
  --padding: calc((100vw - 100vmin) / 10);
  --padding2: calc((100vw - 100vmin) / 5);

  &:first-child,
  &:nth-child(3),
  &:last-child {
    padding: 0 var(--padding);
  }

  &:nth-child(2) {
    padding-left: var(--padding2);
  }
  &:nth-child(4) {
    padding-right: var(--padding2);
  }
}

.global-view {
  padding: 0.125rem 0;
  gap: 0.125rem;
  height: 10.5rem;
}
</style>
