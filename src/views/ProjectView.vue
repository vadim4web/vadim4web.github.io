<template>
  <main class="flex-col project-page">
    <div class="flex-col page-header padding-13">
      <h2 class="h2">
        {{ $t('projectH21') }}
        <high-light />
      </h2>

      <p class="t2">
        {{ $t('projectT1') }}
      </p>
    </div>

    <div class="project-details flex-col">
      <async-frame
        :iframeSrc="demo"
        :iframeClass="{ white_bg: project.white_bg, preview: true }"
        :scrolling="'yes'"
      />

      <div class="text flex-col">
        <h3 class="h3">{{ project.title }}</h3>

        <p class="p4">
          <b>
            {{ $t('projectP1') }}:&nbsp;
          </b>
          {{ project.tags.join(' | ') }}
        </p>

        <p class="p4">
          <b>
            {{ $t('projectP2') }}:&nbsp;
          </b>
          {{ project.stack.join(', ') }}
        </p>

        <p class="p4">
          <b>
            {{ $t('projectP3') }}:&nbsp;
          </b>
          <a :href="source" target="_blank" class="source" title="GitHub Repository">{{ source }}</a>
        </p>

        <p class="p4">
          <b>
            {{ $t('projectP4') }}:&nbsp;
          </b>
          <a :href="demo" target="_blank" class="demo" title="Live Demo">{{ demo }}</a>
        </p>

        <div class="p4" v-if="project.deps.length">
          <b>{{ $t('projectP5') }}:</b>

          <br />

          <ul>
            <li v-for="d, i in project.deps" :key="i">{{ d }}</li>
          </ul>
        </div>

        <p class="p4" v-else>
          {{ $t('projectP5_default') }}
        </p>

        <p class="p4">
          <b>
            {{ $t('projectP6') }}:
          </b>

          <br />

          <pre v-if="project['desc_' + $i18n.locale]">
{{ project['desc_' + $i18n.locale] }}
          </pre>

          <p class="p4" v-else>
            {{ $t('projectP6_default') }}
          </p>
        </p>
      </div>
    </div>

    <div class="navigation">
      <router-link
        :to="{ name: 'project', params: { projectName: prev.name } }"
        class="nav-button prev"
      >
        <arrow-navigation />
        {{ $t('projectPrev') }}
      </router-link>

      <router-link
        :to="{ name: 'project', params: { projectName: next.name } }"
        class="nav-button next"
      >
        {{ $t('projectNext') }}
        <arrow-navigation />
      </router-link>
    </div>

    <div class="others flex-col">
      <h2 class="h1">
        {{ $t('projectH22') }}
      </h2>

      <div class="cards">
        <div class="card card-back br1 rel" v-for="p, i in others" :key="i">
          <router-link
            :to="{ name: 'project', params: { projectName: p.name } }"
            :title="$t('worksDetails') + ' `' + p.title + '`'"
            class="flex-col"
          >
            <async-frame
              :iframeSrc="getPath(p.path)"
              :iframeClass="{ white_bg: p.white_bg, other: true, w100: true, rel: true, br1: true }"
              :iframeStyle="{ zoom: zoom, borderRadius: br }"
              :three="true"
              :scrolling="'no'"
            />

            <div class="other-text flex-col-between text-center">
              <h4 class="h4">{{ p.title }}</h4>

              <p class="other-p">{{ p.stack.join(', ') }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, watchEffect, computed, onMounted, defineAsyncComponent } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { projects } from '@/assets/data/projects.js'
import getPath from '@/helpers/getPath.js'
import getSrc from '@/helpers/getSrc.js'
import getThreeRandom from '@/helpers/getThreeRandom'

const AsyncFrame = defineAsyncComponent(() =>
import('@/components/AsyncFrame.vue')
)
const ArrowNavigation = defineAsyncComponent(() =>
import('@/components/ArrowNavigation.vue')
)
const HighLight = defineAsyncComponent(() =>
import('@/components/HighLight.vue')
)

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const zoom = computed(() => isLargeScreen ? '0.2' : '0.1')
const br = computed(() => isLargeScreen ? '5rem' : '10rem')

const route = useRoute()
const projectName = ref(route.params.projectName)
const project = ref(getProjectDetails(projectName.value))
const curIdx = ref(getCurrentProjectIndex())
const prev = ref(getPreviousProject())
const next = ref(getNextProject())
const others = ref(getThreeRandom(projects, curIdx.value))

const source = computed(() => getSrc(projectName.value))
const demo = computed(() => getPath(project.value.path))

function getProjectDetails(projectName) {
  return projects.find(project => project.name === projectName) || {}
}

function getCurrentProjectIndex() {
  return projects.findIndex(p => p.name === project.value.name
    && p.orientation === project.value.orientation)
}

function getNextProject() {
  const nextIndex = curIdx.value < projects.length - 1 ? curIdx.value + 1 : 0
  return projects[nextIndex]
}

function getPreviousProject() {
  const prevIndex = curIdx.value > 0 ? curIdx.value - 1 : projects.length - 1
  return projects[prevIndex]
}

watchEffect(() => {
  projectName.value = route.params.projectName
  project.value = getProjectDetails(projectName.value)
  curIdx.value = getCurrentProjectIndex()
  prev.value = getPreviousProject()
  next.value = getNextProject()
  others.value = getThreeRandom(projects, curIdx.value)
})
</script>

<style lang="scss">
.project-page {
  .preview {
    aspect-ratio: 1 / 1;
    zoom: 0.5;
    border-radius: 2rem;

    &:not(.white_bg) {
      background-color: var(--bg50);
    }

    @media (orientation: portrait) {
      width: 100%;
    }

    @media (orientation: landscape) {
      width: 65%;
    }
  }

  .project-details {
    margin-top: 7.5rem;
    align-items: center;
  }

  .text {
    width: 65%;
    gap: 1.875rem;
  }

  .h3 {
    margin-top: 4rem;
    font-size: 2rem;
  }

  .source:not(:hover),
  .demo:not(:hover) {
    text-decoration: underline;
  }

  pre {
    line-break: normal;
    text-wrap: wrap;
  }

  .navigation {
    margin-top: 9rem;
    display: flex;
    justify-content: space-between;
  }

  .nav-button {
    display: flex;
    justify-content: center;
    height: 1.5625rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 170%;
    gap: 1.25rem;
  }

  .prev svg {
    align-self: flex-end;
  }

  .next svg {
    transform: rotate(180deg);
    align-self: flex-start;
  }

  .others {
    margin-top: 12rem;
    align-items: center;
  }

  .cards {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3.125rem;
  }

  .card {
    z-index: 1;
  }

  .card a {
    aspect-ratio: 3 / 5;
    gap: 2rem;
  }

  .other {
    height: auto;
    aspect-ratio: 4 / 5;
    z-index: -1;

    &:not(.white_bg) {
      background-color: var(--bg50);
    }
  }

  .other-text {
    padding: 1rem;
    gap: 1rem;
  }
}
</style>
