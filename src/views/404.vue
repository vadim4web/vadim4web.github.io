<template>
  <div class="flex-col-center not-found">
    <h2 class="h2 flex-col-center">
      404
      <high-light />

      <p class="p1">
        In the vast realm of possibilities,<br />
        the route <b class="">{{ useRoute().path }}</b> exists<br />
        in the twilight between creation and nonexistence.<br />
        <hr />
        <hr />
        <i>...It is a path not yet traveled or, perhaps, already forgotten... </i>
      </p>

      <active-element
        :action="goBack"
        :padding="'3rem 5rem'"
        :fontSize="'2.5rem'"
        :borderRadius="'4.25rem'"
        :bg="'var(--bg50)'"
        class="font-variant go-back"
      >
        go back
      </active-element>
    </h2>
  </div>
</template>

<script setup>
import HighLight from '@/components/HighLight.vue'
import ActiveElement from '@/components/ActiveElement.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100dvh;
}

h2 {
  top: -7.5vh;
  text-align: center;
  font-size: 20rem;
  position: relative;
  width: 100%;

  .highlight {
    position: absolute;
    top: 2rem;
  }

  .p1 {
    font-size: 3rem;
    line-height: 3.5rem;
    font-family: 'Victor Mono', monospace;

    b {
      color: var(--bg0);
      background: var(--color0);
    }
  }

  .go-back {
    margin-top: 5rem;
  }
}
</style>
