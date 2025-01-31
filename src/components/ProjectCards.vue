<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { projects } from '~/assets/data/projects.js'
import getPath from '~/helpers/getPath.js'
import getThreeRandom from '~/helpers/getThreeRandom'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPortrait = useMediaQuery('(orientation: portrait)')

const zoom = computed(() => (isLargeScreen && isPortrait ? '0.3' : '0.175'))
const br = computed(() => (zoom.value === '0.3' ? '3.333rem' : '5.714285rem'))

const FrameLoader = defineAsyncComponent(
	() => import('~/components/FrameLoader.vue')
)
const three = getThreeRandom(projects)
</script>

<template>
	<div class="three three-projects flex-center w100">
		<div
			v-for="({ title, name, stack, tags, path, white_bg }, i) in three"
			:key="i"
			class="card card-back br1 hideO"
		>
			<div class="frame w100 rel">
				<frame-loader
					:iframe-class="{
						white_bg: white_bg,
						iframe: true,
						w100: true,
						hideO: true,
						br1: true,
						abs: true,
					}"
					:iframe-src="getPath(path)"
					:iframe-style="{ zoom: zoom, borderRadius: br }"
					:scrolling="'no'"
					:iframe-title="title"
					:three="true"
				/>
			</div>

			<h4 class="h4 text-left rel">
				<router-link
					class="text-wrap hideO"
					:title="$t('worksDetails') + ' «' + title + '»'"
					:to="{ name: 'project', params: { projectName: name } }"
				>
					<em>{{ title }}</em>
				</router-link>
			</h4>

			<p class="p3" style="letter-spacing: -0.1rem">
				<span class="dimmed">tech stack: &nbsp;</span>

				{{ stack.join(' | ') }}

				<br />

				<span class="dimmed">tech area: &nbsp;&nbsp;</span>

				{{ tags.join(', ') }}
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.text-wrap {
	max-width: 100%;
	text-wrap: wrap;
}

.three-projects {
	flex-wrap: wrap;
	flex-direction: row;
	gap: 1rem;
	height: auto;

	.card {
		display: grid;
		gap: 0.75rem;

		@media (orientation: landscape) {
			grid-template-rows: 29rem 4rem 2.75rem;
			width: 29rem;
			height: calc(29rem + 8.75rem);
		}

		@media (orientation: portrait) {
			grid-template-rows: 18rem 4rem 2.75rem;
			width: 18rem;
			height: calc(18rem + 8.75rem);
		}

		& {
			grid-template-rows: 18rem 4rem 2.75rem;
			width: 18rem;
			height: calc(18rem + 8.75rem);
		}

		.frame {
			transform: none;
			aspect-ratio: 1 / 1;

			.iframe {
				aspect-ratio: 1 / 1;
			}
		}

		.h4::after {
			content: '--------------------';
			bottom: 0;
			right: 0;
			width: fit-content;
			height: 2px;
			line-height: inherit;
			font-size: inherit;
			letter-spacing: -0.33ch;
			color: var(--accent0);
			text-align: right;
		}

		.h4,
		.p3 {
			padding: 0 0.5rem;
		}
	}
}
</style>
