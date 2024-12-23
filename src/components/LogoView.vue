<template>
  <a
    href="https://bit.ly/cv_view"
    class="logo-link"
    :title="$t('myCV')"
  >
    <span class="logo-span">
      <span class="logo-letter flex-center">V</span>
      <span class="logo-letter flex-center">A</span>
      <span class="logo-letter flex-center">D</span>
      <span class="logo-letter flex-center">I</span>
      <span class="logo-letter flex-center">M</span>
      <span class="logo-letter flex-center">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          stroke="var(--color0)"
          class="logo-image"
        >
          <!-- Vertical line -->
          <line x1="50" y1="96.5" x2="50" y2="3.5" />
          <!-- Diagonal line from center to top-left -->
          <line x1="50" y1="3.5" x2="3.5" y2="50" />
          <!-- Horizontal line from left to center -->
          <line x1="3.5" y1="50" x2="50" y2="50" />
          <!-- Arc from top-center to center -->
          <path d="M 50,3.5 A 23.25,23.25,0,1,1,50,50" fill="none" />
          <!-- Outer circle -->
          <circle cx="50" cy="50" r="45.5" fill="none" />
        </svg>
      </span>
      <span class="logo-letter flex-center">W</span>
      <span class="logo-letter flex-center">E</span>
      <span class="logo-letter flex-center">B</span>
    </span>
  </a>
</template>

<script></script>

<style lang="scss">
.logo-link {
  font-weight: 700;
  z-index: 1;
  font-size: 2.5rem;
  line-height: 4.1rem;
  height: 4.25rem;
  width: 14.5rem;
  min-width: 14.5rem;
  display: block;
  padding: 0 0.5rem;
  background: var(--color-op);
  border: 1px dashed var(--color0);

  .logo-letter:has(.logo-image) {
    width: 2rem;
    height: 4.25rem;

    & .logo-image {
      position: relative;
      height: 2.1rem;
      width: 2rem;
      stroke-width: max(0.25rem, 10px);
    }
  }

  &:hover {
    color: var(--bg0) !important;
    background: var(--color0);
    border-color: var(--accent0);

    & .logo-image {
      stroke: var(--bg0);
    }
  }

  .logo-span {
    top: 0;
    position: relative;
    z-index: -1;
    display: grid;
    grid-template-columns: 0.75fr repeat(8, 1fr);
    align-content: center;
    justify-items: center;

    .logo-letter {
      padding: 0.5rem 0;
    }

    .logo-letter:first-child {
      position: relative;
      left: 0.1rem;
      margin-right: -0.2rem;
    }

    .logo-letter:not(:has(.logo-image)) {
      width: 0.75rem;
    }
  }
}
</style>
