<template>
  <section class="head content flex-col-center">
    <h1 class="h1">
      Crafting Digital Solutions<br />End-to-End.
      <high-light />
    </h1>

    <active-element
      path="projects"
      :padding="'1.5rem 2.67rem'"
      :fontSize="'1.625rem'"
      :borderRadius="'2.3125rem'"
      :bg="'var(--accent0)'"
    >
      EXPLORE WORKS&nbsp;
      <arrow-right height="1.625rem"/>
    </active-element>
  </section>

  <section class="hero">
    <div class="left content flex-col-center">
      <div class="text">
        <h2 class="h2">
          <high-light />
          Let’s get to<br />know me<br />closer
        </h2>

        <p class="t2">
          Hello, I am Vadim Chervoniak-Bogdanov, a Full-stack developer based in Ukraine.
          My expertise includes HTML, CSS, JavaScript, React, Vue, Node.js,
          various databases, cloud computing, and integrating with different
          APIs, helping me to deliver complex web development solutions.
        </p>
      </div>

      <active-element
        path="about"
        :padding="'1.5rem 3rem'"
        :fontSize="'1.25rem'"
        :borderRadius="'2.125rem'"
        :bg="'var(--accent0)'"
        class="font-variant"
      >
        Discover More About Me
      </active-element>
    </div>

    <div class="right"></div>
  </section>

  <section class="projects flex-col-center">
    <h2 class="h2">
      My Projects Highlight
      <high-light />
    </h2>

    <active-element
      path="projects"
      :padding="'1.5rem 2.5rem'"
      :fontSize="'1.33rem'"
      :borderRadius="'2.166rem'"
      :bg="'var(--bg50)'"
    >
      EXPLORE MORE&nbsp;
      <arrow-right height="1.33rem" />
    </active-element>

    <three-view />
  </section>

  <tech-stack />
</template>

<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import HighLight from '@/components/HighLight.vue'
import ActiveElement from '@/components/ActiveElement.vue'
import ArrowRight from '@/components/ArrowRight.vue'

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
    position: relative;
    width: 18ch;
    height: 10rem;
  }

  & .highlight {
    position: absolute;
    top: -7.5rem;
    right: -5rem;
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
    width: 100%;
    aspect-ratio: 9 / 10;
    background: url('@/assets/photo1.webp');
    background-position: 50% 25%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2rem;
    position: relative;

    &::before,
    &::after {
      position: absolute;
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
