<template>
  <div
    :data-loading="$t('loading')"
    class="loader flex-col-center"
    :class="{
      vertical: classes?.vertical,
      horizontal: classes?.horizontal,
      iframe: classes?.iframe,
      'one-of-three': three,
    }"
  >
    <div class="circle2"></div>
  </div>
</template>

<script setup>
const { classes, three } = defineProps(['classes', 'three'])
</script>

<style lang="scss" scoped>
@keyframes loading {
  0% {
    content: attr(data-loading)'...';
  }
  25% {
    content: attr(data-loading);
  }
  50% {
    content: attr(data-loading)'.';
  }
  75% {
    content: attr(data-loading)'..';
  }
  100% {
    content: attr(data-loading)'...';
  }
}

@keyframes twist-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(10);
  }
  100% {
    transform: scale(0.1);
  }
}

.loader {
  width: 100%;
  position: relative;
  overflow: hidden;
  font-size: 4dvw;
  aspect-ratio: 1 / 1;
}

.loader {
  &::before {
    overflow: hidden;
    content: '';
    position: absolute;
    width: 25dvw;
    text-align: left;
    padding-left: 1.5rem;
    font-weight: bold;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(1);
    top: 50%;
    left: 50%;
    line-height: 150%;
    animation: loading 4s infinite;
    background-clip: text;
    -webkit-background-clip: text;
    mix-blend-mode: var(--loader-bg-blend-mode);
    background: var(--bg0);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    clip-path: polygon(
      1% 5%, 1% 0%, 5% 0%, 5% 5%, 6% 6%, 8% 0%, 9% 3%, 20% 0%, 35% 3%, 35% 33%,
      36% 0%, 66% 0%, 67% 3%, 68% 25%, 69% 3%, 86.5% 2%, 87% 15%, 86.25% 25%,
      87% 45%, 87.5% 35%, 87.75% 25%, 88% 27%, 87.5% 25%, 87.25% 15%, 88% 2%,
      95% 2%, 95% 95%, 96% 2%, 99% 3%, 99.5% 68%, 98.5% 100%, 97% 100%,
      95.5% 95%, 95% 80%, 94% 100%, 55% 100%, 55% 95%, 53% 90%, 53% 100%,
      36% 100%, 35% 50%, 34% 100%, 33% 99%, 20% 98%, 22% 94%, 8% 98%, 6% 96%,
      5% 100%, 5.5% 35%, 4% 100%, 1% 100%, 0% 50%
    );
  }

  @media (orientation: portrait) {
    &.horizontal:before {
      transform: translate(-50%, -50%) scale(6.6);
    }
    &.vertical:before {
      transform: translate(-50%, -50%) scale(5);
    }
  }

  @media (orientation: landscape) {
    &.horizontal:before {
      transform: translate(-50%, -50%) scale(1.75);
    }
    &.vertical:before {
      transform: translate(-50%, -50%) scale(1.33);
    }
  }

  &.one-of-three:before {
    transform: translate(-50%, -50%) scale(0.8);
  }
}
</style>
