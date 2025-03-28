<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const { path, action, fontSize, padding, borderRadius, bg } = defineProps({
	path: String,
	action: Function,
	fontSize: String,
	padding: String,
	borderRadius: String,
	bg: String,
})

const isLink = !!path
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)

const handleClick = () => action?.()
</script>

<template>
	<router-link
		v-if="isLink"
		ref="target"
		class="interactive-button flex-center hideO rel"
		:style="{
			background:
				!isOutside ?
					`radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffff, ${bg} 33%)`
				:	bg,
			boxShadow: `0 0 1.5rem ${bg}`,
			fontSize,
			padding,
			borderRadius,
		}"
		:to="path"
	>
		<slot />
	</router-link>

	<button
		v-else
		ref="target"
		class="interactive-button flex-center hideO rel"
		:style="{
			background:
				!isOutside ?
					`radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffff, ${bg} 33%)`
				:	bg,
			boxShadow: `0 0 1.5rem ${bg}`,
			fontSize,
			padding,
			borderRadius,
		}"
		type="submit"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.interactive-button {
	z-index: 1;
	line-height: 100%;
	font-weight: bold;
	color: var(--color0);
	text-shadow: 0 0 0.5em var(--color-op);
	mix-blend-mode: var(--mix-blend-mode1);

	&:hover,
	&:focus {
		text-shadow: 0 0 0.5em var(--accent0);
		box-shadow: inset 1rem 1rem 1rem #0004;
		mix-blend-mode: var(--mix-blend-mode2);

		&::after {
			box-shadow: inset -1rem -1rem 1rem #fff4;
		}
	}

	&:active {
		text-shadow: 0 0 1rem var(--accent0);
	}

	&::before {
		content: '';
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: inherit;
		box-shadow: inset 1rem 1rem 1rem #fff4;
	}

	&::after {
		content: '';
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: inherit;
		box-shadow: inset -1rem -1rem 1rem #0004;
	}
}
</style>
