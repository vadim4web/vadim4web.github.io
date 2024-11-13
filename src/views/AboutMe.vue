<template>
  <div class="flex-col-start">
    <div class="flex-col-start page-header padding-13">
      <h2 class="h2">
        About Me
        <high-light />
      </h2>

      <p class="t2">Little Brief About Myself</p>
    </div>

    <div class="mission flex-col-start">
      <div class="mission-header">
        <h2 class="h2">
          My mission is
          <br />
          to make
          <br />
          development
          <br />
          easier.
        </h2>

        <p class="t3">
          As individuals, we are all born developers, constantly shaping our
          neural networks as we journey through life. Some of us, including
          myself, have chosen to transform this passion for development into a
          fulfilling career in web development. For me, it's not just a job but
          a calling that allows me to express my creativity and make a
          meaningful impact through technology.
          <br />
          <br />
          <br />
          We each have our own unique story to tell, and through the language of
          technology, we code our autobiographies, breathing life into our ideas
          on the digital canvas. I am deeply dedicated to creating user-friendly
          web applications and continually enhancing my skills to stay ahead in
          this ever-evolving industry.
        </p>
      </div>

      <div class="photos">
        <div class="photo photo1"></div>

        <div class="photo photo2"></div>
      </div>
    </div>

    <pre class="rhymes">
<span>I've earned my own very first PC</span>
<span>By working summer holidays in 2003</span>
<span>I'm a `web dev <em lang="es">loco</em>` (if you will) code-addict</span>
<span>Devoted to development with JavaScript</span>
<span>I'm experienced enough to exactly know</span>
<span>Using DOCs, AI, Google and Stackoverflow</span>
    </pre>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HighLight from '@/components/HighLight.vue'

onMounted(() => window.scrollTo(0, 0))
</script>

<style lang="scss" scoped>
.mission-header {
  padding: 5.5rem 0 6.25rem 1.5rem;
  display: flex;
  gap: 2.2rem;
}

.rhymes {
  text-align: center;
  padding-bottom: 10rem;

  span {
    font-family: 'Victor Mono', monospace;
    display: inline-block;
    font-style: italic;
    width: min(42rem, 75%);
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 700;
    text-align-last: justify;
  }
}

.t3 {
  margin: auto;

  @media (orientation: landscape) {
    & {
      font-size: 166%;
      line-height: normal;
    }
  }
}

.photos {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.75rem;
  width: 100%;
  height: 32rem;
  margin-bottom: 10rem;

  .photo {
    width: 100%;
    height: 32rem;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      border: 0.125rem solid var(--accent0);
    }
  }

  .photo1 {
    background-image: url('@/assets/photo1.webp');
    background-position: center;

    &::before {
      border-radius: 1rem;
      width: 2rem;
      height: 7rem;
      left: -1.125rem;
      top: 0;
    }

    @media (orientation: landscape) {
      & {
        background-position: 0 25%;
      }
    }
  }
  .photo2 {
    background-image: url('@/assets/photo2.webp');
    background-position: 0 25%;

    &::before {
      border-radius: 1.75rem;
      width: 11rem;
      height: 3.5rem;
      right: 0;
      bottom: -1.875rem;
    }
  }
}
</style>
