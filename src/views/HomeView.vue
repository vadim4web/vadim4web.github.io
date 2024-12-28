<template>
  <main class="home">
    <section class="head content flex-col-center">
      <div class="h1">
        <h2 class="h1_h2" :data-text="$t('homeH11')">
          {{ $t('homeH11') }}<br />
          <high-light />
        </h2>

        <h2 class="h2_span" :data-text="$t('homeH12')" style="font-size: 75%; filter: drop-shadow(0 0 0.75rem var(--color-op));">
          {{ $t('homeH12') }}
        </h2>
      </div>

      <logo3-d />

      <active-element
        path="projects"
        :padding="'1.5rem 2.67rem'"
        :fontSize="'1.625rem'"
        :borderRadius="'2.3125rem'"
        :bg="'var(--accent50)'"
      >
        {{ $t('homeB1') }}&nbsp;

        <arrow-right height="1.625rem"/>
      </active-element>
    </section>

    <section class="hero">
      <div class="left content flex-col-center">
        <div class="text">
          <h2 class="h2">
            <high-light />

            {{ $t('homeH211') }}<br />{{ $t('homeH212') }}<br />{{ $t('homeH213') }}
          </h2>

          <p class="t2">
            {{ $t('homeP1') }}
          </p>
        </div>

        <active-element
          path="about"
          :padding="'1.5rem 3rem'"
          :fontSize="'1.5rem'"
          :borderRadius="'2.125rem'"
          :bg="'var(--accent50)'"
          class="font-variant"
        >
          {{ $t('homeB2') }}
        </active-element>
      </div>

      <div class="right">
        <div class="photo"></div>
      </div>
    </section>

    <section class="projects flex-col-center">
      <h2 class="h2">
        {{ $t('homeH22') }}
        <high-light />
      </h2>

      <active-element
        path="projects"
        :padding="'1.5rem 2.5rem'"
        :fontSize="'1.33rem'"
        :borderRadius="'2.166rem'"
        :bg="'transparent'"
      >
        {{ $t('homeB3') }}&nbsp;
        <arrow-right height="1.33rem" />
      </active-element>

      <three-view />
    </section>

    <tech-stack />
  </main>
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import HighLight from '@/components/HighLight.vue'
import ActiveElement from '@/components/ActiveElement.vue'
import ArrowRight from '@/components/ArrowRight.vue'

const Logo3D = defineAsyncComponent(() =>
  import('@/components/Logo3D.vue')
)
const ThreeView = defineAsyncComponent(() =>
  import('@/components/ThreeView.vue')
)
const TechStack = defineAsyncComponent(() =>
  import('@/components/TechStack.vue')
)

onMounted(() => window.scrollTo(0, 0))
</script>

<style lang="scss" scoped>
.head {
  text-align: center;

  .h1 {
    z-index: 1;
    width: 22ch;
    padding: 0;
  }

  & .highlight {
    position: absolute;
    top: -7.5rem;
    right: 0;
  }
}

.hero {
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 6rem;
  align-items: center;

  .left {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;

    .h2 {
      position: relative;

      & .highlight {
        position: absolute;
        top: -7.5rem;
        left: -15rem;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .right {
    position: relative;

    .photo {
      width: 100%;
      aspect-ratio: 9 / 10;
      background: url('@/assets/photo.webp');
      background-position: 50% 25%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 2rem;
      filter: grayscale(1);
    }

    &:hover {
      .photo {
        filter: grayscale(0);
      }

      &::before,
      &::after {
        filter: grayscale(1);
      }
    }

    &::before,
    &::after {
      position: absolute;
      z-index: 1;
      content: '';
      border: 0.125rem solid var(--accent0);
    }

    &::before {
      border-radius: 1.75rem;
      width: 3.5rem;
      height: 11rem;
      left: -2.5rem;
      bottom: 3rem;
    }

    &::after {
      border-radius: 1rem;
      width: 7rem;
      height: 2rem;
      right: 0;
      top: -1rem;
    }
  }
}

.content {
  gap: 6rem;
}

.projects {
  padding: 3rem 0;
  gap: 2rem;

  .h2 {
    text-align: center;
    position: relative;

    & .highlight {
      position: absolute;
      top: -10rem;
      right: -12rem;
    }
  }
}
</style>
