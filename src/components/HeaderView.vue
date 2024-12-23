<template>
  <header class="header">
    <menu>
      <li class="menu-item flex-center">
        <logo-view logoClass="logo-view" />
      </li>

      <li class="menu-item flex-center">
        <router-link to="/home" class="link">{{ $t('Home') }}</router-link>
      </li>

      <li class="menu-item flex-center">
        <router-link to="/about" class="link">{{ $t('AboutMe') }}</router-link>
      </li>

      <li class="menu-item flex-center">
        <router-link to="/projects" class="link">{{ $t('MyWorks') }}</router-link>
      </li>

      <li class="menu-item flex-center">
        <router-link to="/contact" class="link">{{ $t('Contact') }}</router-link>
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
  z-index: 5;
  height: 10.5rem;
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
  grid-template-columns: 1.2fr repeat(4, 1fr) 0.8fr;
  place-items: center;
  font-weight: 500;
  height: 10.5rem;

  gap: 0.125rem;


  @media (orientation: landscape) and (min-width: 1000px) {
    & {
      left: -3rem;
    }
  }

  a:not(.logo-link) {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 1rem;
    opacity: 0.75;
    font-variant: small-caps;
    text-transform: uppercase;
    text-wrap: nowrap;
    border: 0.125rem solid transparent;
    font-weight: bold;
    color: var(--color50);

    &.router-link-active {
      background: var(--bg50);
      border: 0.125rem solid var(--color50);
      border-radius: 2rem;
      opacity: 0.8;
      color: var(--color0);

      &:hover {
        color: var(--color0);
        box-shadow: none;

        &::after {
          box-shadow: none;
        }
      }
    }

    &:not(.router-link-active, .logo-link) {
      color: var(--color50);
    }
  }
}

.menu-item {
  text-align: center;
  width: 100%;
  text-shadow: 0 0 2rem var(--bg0) !important;
  background: radial-gradient(var(--bg50), transparent, transparent);
}

.global-view {
  padding: 0.125rem 0;
  gap: 0.125rem;
  height: 10.5rem;
}
</style>
