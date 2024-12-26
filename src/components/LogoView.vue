<template>
  <span class="logo-span">
    <span class="logo-letter flex-center">
      <span class="logo-letter flex-center">V</span>
      <span class="logo-letter flex-center">A</span>
      <span class="logo-letter flex-center">D</span>
      <span class="logo-letter flex-center">I</span>
      <span class="logo-letter flex-center">M</span>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class="logo-image logo-letter"
      >
        <defs>
          <filter
            id="shadowInactive"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              flood-color="var(--color0)"
              flood-opacity="1"
            />
          </filter>
        </defs>

        <defs>
          <filter
            id="shadowActive"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="5"
              flood-color="var(--bg0)"
              flood-opacity="1"
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
      <span class="logo-letter flex-center">W</span>
      <span class="logo-letter flex-center">E</span>
      <span class="logo-letter flex-center">B</span>
    </span>
  </span>
</template>

<script></script>

<style lang="scss">
.logo-span {
  display: grid;
  grid-template-columns: repeat(1fr, 9);
  font-size: 2.5rem;
  line-height: 4.1rem;
  font-weight: 700;

  .logo-letter.logo-image {
    height: 2.1rem;
    width: 2.1rem;
    stroke-width: max(0.25rem, 10px);
  }

  .logo-image {
    stroke: var(--color0);
  }

  &::selection .logo-image {
    stroke: var(--bg0);
  }
}
</style>
