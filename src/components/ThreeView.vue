<template>
	<div class="three three-projects flex-center w100">
		<div
			class="card card-back br1 hideO"
			v-for="({ title, name, stack, tags, path, white_bg }, i) in three"
			:key="i"
		>
			<div class="frame w100 rel">
				<async-frame
					:iframeSrc="getPath(path)"
					:iframeClass="{
						white_bg: white_bg,
						iframe: true,
						w100: true,
						hideO: true,
						br1: true,
						abs: true,
					}"
					:iframeStyle="{ zoom: zoom }"
					:three="true"
					:scrolling="'no'"
				/>
			</div>

			<h4 class="h4 text-left rel">
				<router-link
					:to="{ name: 'project', params: { projectName: name } }"
					class="text-wrap hideO"
					:title="'View more details about `' + title + '`'"
				>
					{{ title.split(' ').slice(0, -1).join(' ') }}

					<span class="gap2 w100">
						{{ title.split(' ').slice(-1).join(' ') }}
					</span>
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

<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { projects } from '@/assets/data/projects.js'
import getPath from '@/helpers/getPath.js'
import getThreeRandom from '@/helpers/getThreeRandom'
import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPortrait = useMediaQuery('(orientation: portrait)')

const zoom = computed(() => (isLargeScreen && isPortrait ? '0.125' : '0.125'))

const AsyncFrame = defineAsyncComponent(() =>
	import('@/components/AsyncFrame.vue')
)
const three = getThreeRandom(projects)
</script>

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

		.h4 {
			& .gap2 {
				word-spacing: 2rem;
			}

			&::after {
				content: '--------------------';
				right: 0;
				bottom: 0;
				width: fit-content;
				height: 2px;
				line-height: inherit;
				font-size: inherit;
				letter-spacing: -0.33ch;
				color: var(--accent0);
				text-align: right;
			}
		}

		.h4,
		.p3 {
			padding: 0 0.5rem;
		}
	}
}
</style>
