<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const InteractiveButton = defineAsyncComponent(
	() => import('~/components/InteractiveButton.vue')
)
const TextHighlight = defineAsyncComponent(
	() => import('~/components/TextHighlight.vue')
)

const router = useRouter()

const goBack = () => {
	router.back()
}
</script>

<template>
	<main class="flex-col-center not-found w100">
		<h2 class="h2 flex-col-center text-center">
			404
			<text-highlight />

			<div class="p1">
				{{ $t('notFoundT11') }}<br />
				{{ $t('notFoundT12') }}<b>{{ useRoute().path }}</b>{{ $t('notFoundT13') }}<br />
				{{ $t('notFoundT14') }}<br />
				<hr />
				<hr />
				<i>{{ $t('notFoundT15') }}</i>
			</div>

			<interactive-button
				:action="goBack"
				:bg="'var(--bg50)'"
				:border-radius="'4.25rem'"
				class="font-variant go-back"
				:font-size="'2.5rem'"
				:padding="'3rem 5rem'"
			>
				{{ $t('notFoundB') }}
			</interactive-button>
		</h2>
	</main>
</template>

<style lang="scss" scoped>
h2 {
	top: -7.5vh;
	font-size: 20rem;

	.text-highlight {
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
