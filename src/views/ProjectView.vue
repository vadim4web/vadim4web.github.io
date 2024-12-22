<template>
  <div class="flex-col-start project-page">
    <div class="flex-col-start page-header padding-13">
      <h2 class="h2">
        Project Detail
        <high-light />
      </h2>

      <p class="t2">
        Details About The Project
      </p>
    </div>

    <div class="project-details flex-col-start">
      <async-frame
        :iframeSrc="demo"
        :iframeClass="{ white_bg: project.white_bg, preview: true }"
        :iframeStyle="{ zoom: '0.75' }"
      />

      <div class="text flex-col-start">
        <h3 class="h3">{{ project.title }}</h3>

        <p class="p4">
          <b>
            Tech area:&nbsp;
          </b>
          {{ project.tags.join(' | ') }}
        </p>

        <p class="p4">
          <b>
            Tech stack:&nbsp;
          </b>
          {{ project.stack.join(', ') }}
        </p>

        <p class="p4">
          <b>
            Source:&nbsp;
          </b>
          <a :href="source" target="_blank" class="source" title="GitHub Repository">{{ source }}</a>
        </p>

        <p class="p4">
          <b>
            Demo:&nbsp;
          </b>
          <a :href="demo" target="_blank" class="demo" title="Live Demo">{{ demo }}</a>
        </p>

        <div class="p4" v-if="project.deps.length">
          <b>Libraries usage:</b>

          <br />

          <ul>
            <li v-for="d, i in project.deps" :key="i">{{ d }}</li>
          </ul>
        </div>

        <p class="p4" v-else>
          The project does not utilize any external libraries and relies solely on
          the standard built-in HTML, CSS, and JavaScript processing capabilities
          of modern browsers.
        </p>

        <p class="p4">
          <b>
            Description:
          </b>

          <br />

          <pre v-if="project.desc">
{{ project.desc }}
          </pre>

          <p class="p4" v-else>
            It seems that there is no description attached, so let's suppose that
            this project is self-descriptive and needs no explicit descriptional
            words.
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
        PREVIOUS WORK
      </router-link>

      <router-link
        :to="{ name: 'project', params: { projectName: next.name } }"
        class="nav-button next"
      >
        NEXT WORK
        <arrow-navigation />
      </router-link>
    </div>

    <div class="others flex-col-start">
      <h2 class="h1">Other Projects</h2>

      <div class="cards">
        <div class="card" v-for="p, i in others" :key="i">
          <router-link
            :to="{ name: 'project', params: { projectName: p.name } }"
            :title="'View more details about `' + p.title + '`'"
          >
            <async-frame
              :iframeSrc="getPath(p.path)"
              :iframeClass="{ white_bg: p.white_bg, other: true }"
              :iframeStyle="{ zoom: '0.25' }"
            />

            <div class="other-text flex-col-start">
              <h4 class="h4">{{ p.title }}</h4>

              <p class="other-p">{{ p.stack.join(', ') }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed, onMounted, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/assets/projects.js'
import HighLight from '@/components/HighLight.vue'
import ArrowNavigation from '@/components/ArrowNavigation.vue'
import getPath from '@/helpers/getPath.js'
import getSrc from '@/helpers/getSrc.js'
import getThreeRandom from '@/helpers/getThreeRandom'

const AsyncFrame = defineAsyncComponent(() =>
  import('@/components/AsyncFrame.vue')
)

const route = useRoute()
const projectName = ref(route.params.projectName)
const project = ref(getProjectDetails(projectName.value))
const source = computed(() => getSrc(projectName.value))
const demo = computed(() => getPath(project.value.path))
const curIdx = ref(getCurrentProjectIndex())
const prev = ref(getPreviousProject())
const next = ref(getNextProject())
const others = ref(getThreeRandom(projects, curIdx.value))

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

onMounted(() => window.scrollTo(0, 0))
</script>

<style lang="scss">
.project-page {
  .preview {
    aspect-ratio: 1 / 1;
    border-radius: 1rem;

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
    font-family: inherit;
  }

  .navigation {
    margin-top: 9rem;
    display: flex;
    justify-content: space-between;
  }

  .nav-button {
    display: flex;
    height: 1.5625rem;
    font-family: 'Rubik', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 170%;
    justify-content: center;
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
    position: relative;
    z-index: 1;
  }

  .card a {
    aspect-ratio: 3 / 5;
    display: flex;
    flex-direction: column;
  }

  .other {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    border-radius: 1rem;
    position: relative;
    z-index: -1;

    &:not(.white_bg) {
      background-color: var(--bg50);
    }
  }

  .other-text {
    padding-top: 1.6875rem;
    padding-left: 1.25rem;
    gap: 0.625rem;
  }
}
</style>
