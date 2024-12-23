<template>
  <div class="three three-projects">
    <div
      class="card"
      v-for="({ title, name, stack, tags, path, white_bg }, i) in three"
      :key="i"
    >
      <div class="frame">
        <async-frame
          :iframeSrc="getPath(path)"
          :iframeClass="{
            white_bg: white_bg,
            iframe: true,
          }"
          :iframeStyle="{ zoom: '0.125' }"
          :three="true"
        />
      </div>

      <h4 class="h4">
        <router-link
          :to="{ name: 'project', params: { projectName: name } }"
          class="text-wrap"
          :title="'View more details about `' + title + '`'"
        >
          {{ title.split(' ').slice(0, -1).join(' ') }}

          <span class="gap2">
            {{ title.split(' ').slice(-1).join(' ') }}
          </span>
        </router-link>
      </h4>

      <p class="p3">
        <span class="dimmed">tech stack: &nbsp;</span>

        {{ stack.join(' | ') }}

        <br />

        <span class="dimmed">tech area: &nbsp;&nbsp;</span>

        {{ tags.join(', ') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { projects } from '@/assets/projects.js'
import getPath from '@/helpers/getPath.js'
import getThreeRandom from '@/helpers/getThreeRandom'

const AsyncFrame = defineAsyncComponent(() =>
  import('@/components/AsyncFrame.vue')
)
const three = getThreeRandom(projects)
</script>

<style lang="scss">
.text-wrap {
  max-width: 100%;
  overflow: hidden;
  text-wrap: wrap;
}

.three-projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  gap: 1rem;
  height: auto;

  .card {
    overflow: hidden;
    display: grid;

    @media (orientation: landscape) {
      gap: 1rem;
      width: 29rem;
      height: calc(29rem + 8.75rem);
      grid-template-rows: 29rem 4rem 2.75rem;
    }

    @media (orientation: portrait) {
      gap: 1rem;
      width: 18rem;
      height: calc(18rem + 8.75rem);
      grid-template-rows: 18rem 4rem 2.75rem;
    }

    & {
      width: 18rem;
      height: calc(18rem + 8.75rem);
      grid-template-rows: 18rem 4rem 2.75rem;
      flex-grow: 0;
      flex-shrink: 1;
    }

    & .h4 {
      justify-self: start;
    }

    .frame {
      box-sizing: border-box;
      border: none;
      border-radius: 1rem !important;
      overflow: hidden !important;
      transform: none;
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;

      .iframe {
        box-sizing: border-box;
        border: none;
        width: 100%;
        aspect-ratio: 1 / 1;
        position: absolute;

        &:not(.white_bg) {
          background-color: var(--bg50);
        }
      }
    }

    .h4 {
      text-align: left;
      width: 100%;
      position: relative;

      & .after {
        position: absolute;
        right: 0;
        width: 5rem;
        font-size: inherit;
        line-height: inherit;
        letter-spacing: -0.33ch;
        color: var(--accent0);
        text-align: right;
        display: inline-flex;
        align-items: center;
      }

      & .gap2 {
        width: 100%;
        word-spacing: 2rem;
      }

      &::after {
        position: absolute;
        height: 2px;
        content: '-------------------';
        right: 0;
        bottom: 0;
        width: fit-content;
        font-size: inherit;
        line-height: inherit;
        letter-spacing: -0.33ch;
        color: var(--accent0);
        text-align: right;
      }
    }
  }
}
</style>
