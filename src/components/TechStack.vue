<template>
  <section class="flex-col-center tech-stack">
    <h2 class="h2 text-center">
      {{ $t('homeH23') }}
    </h2>

    <vueper-slides
      :fixed-height="true"
      :bullets="false"
      :arrows-outside="true"
      class="no-shadow"
      ref="slider"
      autoplay
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="slide.id"
        :title="slide[`title_${$i18n.locale}`]"
        :content="slide.content"
        :style="'font-size: 3rem'"
      />

      <template #pause>
        <i class="icon pause_circle_outline"></i>
      </template>
    </vueper-slides>
  </section>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import slides from '@/assets/slides.js'

const slider = ref()

const setSlideContentGrid = () => {
  const contentElements = document.querySelectorAll('.vueperslide__content')
  contentElements.forEach((element) => {
    element.setAttribute(
      'style',
      `display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
          width: 100% !important; transition: none !important;`
    );
  });
}

onMounted(() => {
  setSlideContentGrid()
  slider.value.goToSlide(3)
})

onUpdated(() =>  setSlideContentGrid())
</script>

<style lang="scss">
.tech-stack {
  padding: 2rem auto 2rem auto;

  @media (orientation: landscape) {
    & {
      gap: 2rem;
    }
  }

  @media (orientation: portrait) {
    & {
      gap: 2rem;
    }
  }
}

.vueperslides--fixed-height {
  position: relative;

  @media (orientation: landscape) {
    & {
      height: 34rem;
    }
  }

  @media (orientation: portrait) {
    & {
      height: 30rem;
    }
  }
}

.vueperslides {
  width: 100%;
}

.vueperslides__arrow {
  color: var(--accent);
  filter: drop-shadow(0 0 1px var(--accent));
}

.vueperslide__content {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  width: 100% !important;
}

@media (max-width: 480px) {
  .vueperslides__bullet {
    margin: 1.5em 0.3em;
  }
}

@media (max-width: 360px) {
  .vueperslides__bullet {
    margin: 1.5em 0.2em;
  }
}

@media (max-width: 320px) {
  .vueperslides__bullet {
    margin: 1em 0.15em;
  }
}

@media (max-width: 300px) {
  .vueperslides__bullet {
    margin: 0.5em 0.1em;
  }
}
</style>
