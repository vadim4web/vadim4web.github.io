<template>
	<main class="flex-col projects-page">
		<div class="flex-col page-header padding-13">
			<h2 class="h2" style="left: -0.2rem">
				{{ $t('worksH2') }}
				<high-light />
			</h2>

			<p class="t2">
				{{ $t('worksT1') }}
			</p>
		</div>

		<div class="projects-container w100 rel">
			<div
				class="three w100 rel"
				v-for="(a, index) in projectsToShow"
				:key="index"
				:id="'three-' + index"
			>
				<div
					v-for="(p, i) in a"
					:key="i"
					class="project card-back br1 text-center flex-col hideO"
				>
					<async-frame
						:iframeSrc="getPath(p.path)"
						:iframeClass="{
							vertical: p.orientation === '|',
							horizontal: p.orientation === '-',
							white_bg: p.white_bg,
							iframe: true,
							w100: true,
						}"
						:scrolling="'no'"
					/>

					<div class="title-box flex-align">
						<p class="t3">
							{{ p.tags.join(' | ') }}
						</p>

						<router-link
							class="t2"
							:to="{ name: 'project', params: { projectName: p.name } }"
							:title="$t('worksDetails') + ' `' + p.title + '`'"
						>
							{{ p.title }}
						</router-link>
					</div>
				</div>
			</div>

			<active-element
				v-if="!isLimitReached"
				:padding="'1.5rem 2.5rem'"
				:fontSize="'1.33rem'"
				:borderRadius="'2.166rem'"
				:bg="'var(--accent50)'"
				class="font-variant load-more text-center flex-center"
				:action="handleLoadMore"
			>
				{{ $t('worksMore') }}
			</active-element>
		</div>
	</main>
</template>

<script setup>
import { ref, onMounted, onUpdated, defineAsyncComponent } from 'vue'
import { chunkedProjects } from '@/assets/data/projects.js'
import getPath from '@/helpers/getPath.js'

const AsyncFrame = defineAsyncComponent(() =>
	import('@/components/AsyncFrame.vue')
)
const ActiveElement = defineAsyncComponent(() =>
	import('@/components/ActiveElement.vue')
)
const HighLight = defineAsyncComponent(() =>
	import('@/components/HighLight.vue')
)

const itemsToShow = ref(2)
const projectsToShow = ref(chunkedProjects.slice(0, itemsToShow.value))
const isLimitReached = ref(
	projectsToShow.value.length === chunkedProjects.length
)

const handleLoadMore = () => {
	if (chunkedProjects.length - 1 > itemsToShow.value) {
		itemsToShow.value += 2
		projectsToShow.value = chunkedProjects.slice(0, itemsToShow.value)
	} else if (chunkedProjects.length - 1 === itemsToShow.value) {
		projectsToShow.value = chunkedProjects.slice()
	}
	isLimitReached.value = projectsToShow.value.length === chunkedProjects.length
}

const handleScroll = () => {
	const lastElementId = `three-${projectsToShow.value.length - 2}`
	const lastElement = document.getElementById(lastElementId)

	if (lastElement)
		lastElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => window.scrollTo(0, 0))
onUpdated(() => handleScroll())
</script>

<style lang="scss">
.projects-page {
	.projects-container {
		padding: 6.25rem 0 10rem;
		gap: 3rem;
	}

	.projects-container,
	.three {
		display: flex;
		flex-wrap: wrap;
	}

	.three {
		margin: 0 auto;
		gap: 1.5rem;

		@media (orientation: landscape) {
			width: calc(50% - 1.5rem);
		}

		@media (orientation: portrait) {
			width: 100%;
		}
	}

	.project {
		justify-content: space-between;
		padding-bottom: 0.5rem;
		flex-shrink: 1;
		flex-grow: 0;
		height: auto;

		&:has(.vertical) {
			@media (orientation: landscape) {
				width: calc((40dvw - 1.5rem) * 0.333 - 1rem);
				height: calc(40dvw * 0.666 * 1.2);
			}
			@media (orientation: portrait) {
				width: calc(80dvw * 0.333 - 1rem);
				height: calc(80dvw * 0.666 * 1.2);
			}
		}

		&:has(.horizontal) {
			@media (orientation: landscape) {
				width: calc((((40dvw - 1.5rem) * 0.333 - 1rem) * 2) + 1.5rem);
				height: calc((40dvw * 0.666 * 1.2 - 1.5rem) / 2);
			}
			@media (orientation: portrait) {
				width: calc(80dvw - (80dvw * 0.333 - 1rem) - 1.5rem);
				height: calc(((80dvw * 0.666 * 1.2) - 1.5rem) / 2);
			}
		}

		.title-box {
			padding: 0.5rem;
			justify-content: space-between;
		}

		&:has(.vertical) .title-box {
			flex-direction: column;
			justify-content: space-between;
			gap: 1rem;
		}

		&:has(.horizontal) .title-box {
			flex-direction: row;
		}

		.horizontal {
			aspect-ratio: 2 / 1;
		}

		.vertical {
			aspect-ratio: 1 / 2;
		}

		.iframe {
			@media (orientation: portrait) and (max-width: 1023px) {
				zoom: 0.175;
				border-radius: 5.714285rem;
			}

			@media (orientation: portrait) and (min-width: 1024px) {
				zoom: 0.25;
				border-radius: 4rem;
			}

			@media (orientation: landscape) and (max-width: 1023px) {
				zoom: 0.175;
				border-radius: 5.714285rem;
			}

			@media (orientation: landscape) and (min-width: 1024px) {
				zoom: 0.25;
				border-radius: 4rem;
			}
		}
	}

	.project:nth-child(3n):has(.vertical) {
		position: absolute;
		top: 0;
		right: 0;
	}

	.project:nth-child(3n):has(.horizontal) {
		position: absolute;
		top: calc(50% + 0.75rem);
		right: 0;
	}

	@media (orientation: landscape) {
		.three:last-child {
			margin: 0 auto;
			align-self: center;
			justify-self: center;
		}
	}

	.load-more {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.1rem;
		margin: 3.75rem auto 0;
	}
}
</style>
