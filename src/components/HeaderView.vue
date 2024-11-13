<template>
  <header class="header">
    <logo-view size="9rem" logoClass="logo-view" />

    <menu>
      <li class="menu-item">
        <router-link to="/home" class="link">Home</router-link>
      </li>

      <li class="menu-item">
        <router-link to="/about" class="link">About Me</router-link>
      </li>

      <li class="menu-item">
        <router-link to="/projects" class="link">My Works</router-link>
      </li>

      <li class="menu-item">
        <router-link to="/contact" class="link">Contact</router-link>
      </li>
    </menu>

    <theme-toggler />
  </header>
</template>

<script setup>
import LogoView from '@/components/LogoView.vue'
import ThemeToggler from '@/components/ThemeToggler.vue'
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
  display: flex;
  padding: 0 2rem;
}

.logo-view {
  margin: 0 0.5rem;
  z-index: 1;
  box-shadow: 0 0 1rem var(--bg50);
}

menu {
  width: 100%;
  position: relative;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  height: 10.5rem;
  gap: 0.5rem;

  @media (orientation: landscape) and (min-width: 1000px) {
    & {
      left: -3rem;
    }
  }

  a {
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    opacity: 0.75;
    font-variant: small-caps;
    text-transform: uppercase;
    text-wrap: nowrap;
    border: 0.125rem solid transparent;
    width: fit-content;
    color: var(--color50);

    &.router-link-active {
      background: var(--bg50);
      border: 0.125rem solid var(--color50);
      border-radius: 2rem;
      opacity: 0.8;
      color: var(--color0);
      font-weight: bold;
      letter-spacing: -0.022ch;

      &:hover {
        color: var(--color0);
        box-shadow: none;

        &::after {
          box-shadow: none;
        }
      }
    }

    &:active {
      letter-spacing: -0.025ch;
    }

    &:not(.router-link-active, .logo-link) {
      color: var(--color50);
    }
  }
}

.menu-item {
  display: inline-flex;
  text-shadow: 0 0 2rem var(--bg0) !important;
  background: radial-gradient(var(--bg50), transparent, transparent);
}

.logo-image {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.125rem;
}
</style>
