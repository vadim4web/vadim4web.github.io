<template>
  <span class="logo-span flex-center">
    <span class="logo-letter v">V</span>
    <span class="logo-letter">A</span>
    <span class="logo-letter">D</span>
    <span class="logo-letter">I</span>
    <span class="logo-letter">M</span>
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      class="logo-image"
    >
      <defs>
        <filter id="shadowActive" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1"
            flood-color="var(--color0)"
            flood-opacity="0.75"
          />
        </filter>
      </defs>

      <!-- Vertical line -->
      <line x1="50" y1="96" x2="50" y2="4" />
      <!-- Diagonal line from center to top-left -->
      <line x1="50" y1="4" x2="4" y2="50" />
      <!-- Horizontal line from left to center -->
      <line x1="4" y1="50" x2="50" y2="50" />
      <!-- Arc from top-center to center -->
      <path d="M 50,3.5 A 23.25,23.25,0,1,1,50,50" fill="none" />
      <!-- Outer circle -->
      <circle cx="50" cy="50" r="46" fill="none" />
    </svg>
    <span class="logo-letter">W</span>
    <span class="logo-letter">E</span>
    <span class="logo-letter">B</span>
  </span>
</template>

<script></script>

<style lang="scss">
.logo-span {
  font-size: 2.5rem;
  line-height: 4.1rem;
  font-weight: 700;
  letter-spacing: -0.075ch;

  .logo-letter.v {
    letter-spacing: -0.2ch;
  }

  .logo-image {
    height: 2.1rem;
    width: 2rem;
    margin-left: 1px;
    stroke-width: max(0.25rem, 10px);
    stroke: var(--color0);
  }

  &::selection .logo-image {
    stroke: var(--bg0);
  }
}
</style>
