<template>
  <main class="flex-col-center not-found w100">
    <h2 class="h2 flex-col-center text-center">
      404
      <high-light />

      <div class="p1">
        {{ $t('notFoundT11') }}<br>
        {{ $t('notFoundT12') }}<b>{{ useRoute().path }}</b>{{ $t('notFoundT13') }}<br>
        {{ $t('notFoundT14') }}<br>
        <hr>
        <hr>
        <i>{{ $t('notFoundT15') }}</i>
      </div>

      <active-element
        :action="goBack"
        :padding="'3rem 5rem'"
        :font-size="'2.5rem'"
        :border-radius="'4.25rem'"
        :bg="'var(--bg50)'"
        class="font-variant go-back"
      >
        {{ $t('notFoundB') }}
      </active-element>
    </h2>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const ActiveElement = defineAsyncComponent(
	() => import('@/components/ActiveElement.vue')
)
const HighLight = defineAsyncComponent(
	() => import('@/components/HighLight.vue')
)

const router = useRouter()
const goBack = () => {
	router.back()
}
</script>

<style lang="scss" scoped>
h2 {
	top: -7.5vh;
	font-size: 20rem;

	.highlight {
		top: 2rem;
	}

	.p1 {
		line-height: 3.5rem;
		font-size: 3rem;

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
