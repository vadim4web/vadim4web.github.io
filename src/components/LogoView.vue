<template>
  <a
    href="https://bit.ly/1abcdesign"
    class="logo-link"
    title="My CV .pdf"
    :class="logoClass"
    :style="{ fontSize: txtSize, lineHeight: txtSize }"
  >
    <span class="logo-image logo" :style="{ width: imgSize, height: imgSize }">
      <svg
        id="logoImage"
        ref="logoImage"
        class="icon"
        stroke-width="28"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="200" y1="400" x2="200" y2="0" />
        <line x1="200" y1="0" x2="0" y2="200" />
        <line x1="0" y1="200" x2="200" y2="200" />
        <path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" />
        <circle cx="200" cy="200" r="186" fill="none" />
      </svg>
    </span>
    <span class="logo-span logo">
      <span class="logo-letter">A</span>
      <span class="logo-letter">B</span>
      <span class="logo-letter">C</span>
      <span class="logo-letter">D</span>
      <span class="logo-letter">Ξ</span>
      <span class="logo-letter">S</span>
      <span class="logo-letter">I</span>
      <span class="logo-letter">G</span>
      <span class="logo-letter">N</span>
      <span class="logo-letter">1</span>
    </span>
  </a>
</template>

<script setup>
const { size, logoClass } = defineProps(['size', 'logoClass'])
const imgSize = parseFloat(size) * 0.85 + 'rem'
const txtSize = parseFloat(size) * 0.18 + 'rem'
</script>

<style lang="scss">
.logo-link {
  justify-self: start;
  align-self: start;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  font-family: 'Victor Mono', monospace;
  font-weight: 700;
  z-index: 1;

  .logo-span {
    top: 0;
    background: var(--color-op);
    border: 2px solid var(--color0);
    position: relative;
    z-index: -1;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-content: center;
    justify-items: center;
  }

  &:hover {
    .logo-span {
      background: var(--color0);
      color: var(--bg0);
      border: 2px solid var(--bg0);

      &::after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border: 2px solid var(--color0);
      }
    }
  }

  .logo-image {
    position: relative;
    z-index: 1;

    border-radius: 50%;
    border: 2px solid var(--bg0);

    svg {
      stroke: var(--color0);
    }

    &:before, &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0.015em;
      width: 100%;
      height: 100%;
      padding-right: 0.15rem;
    }
  }

  &:hover .logo-image {
    background: var(--color0);
    color: var(--bg0);
    border: 2px solid var(--color0);
    & svg {
      stroke: var(--bg0);
    }
  }
}
</style>
