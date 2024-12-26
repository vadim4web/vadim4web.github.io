<template>
  <main class="flex-col-center not-found">
    <h2 class="h2 flex-col-center">
      404
      <high-light />

      <p class="p1">
        {{ $t('notFoundT11') }}<br />
        {{ $t('notFoundT12') }}<b class="">{{ useRoute().path }}</b>{{ $t('notFoundT13') }}<br />
        {{ $t('notFoundT14') }}<br />
        <hr />
        <hr />
        <i>{{ $t('notFoundT15') }}</i>
      </p>

      <active-element
        :action="goBack"
        :padding="'3rem 5rem'"
        :fontSize="'2.5rem'"
        :borderRadius="'4.25rem'"
        :bg="'var(--bg50)'"
        class="font-variant go-back"
      >
        {{ $t('notFoundB') }}
      </active-element>
    </h2>
  </main>
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
