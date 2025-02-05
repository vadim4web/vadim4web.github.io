<script setup>
import { defineAsyncComponent } from 'vue'

defineProps({
	headKey: { type: String, required: true },
	textKey: { type: String, required: true },
})

const TextHighlight = defineAsyncComponent(
	() => import('~/components/TextHighlight.vue')
)
</script>

<template>
	<div class="flex-col page-header padding-13">
		<h2 class="h2">
			<strong>
				{{ $t(headKey) }}
			</strong>
			<text-highlight />
		</h2>

		<p class="t2">
			<em>
				{{ $t(textKey) }}
			</em>
		</p>
	</div>
</template>
