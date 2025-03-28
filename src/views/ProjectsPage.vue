<script setup>
import { ref, onUpdated, defineAsyncComponent } from 'vue'
import { projects } from '~/assets/data'
import { getPath } from '~/helpers'

const PageHeader = defineAsyncComponent(
	() => import('~/components/PageHeader.vue')
)
const FrameLoader = defineAsyncComponent(
	() => import('~/components/FrameLoader.vue')
)
const InteractiveButton = defineAsyncComponent(
	() => import('~/components/InteractiveButton.vue')
)

const itemsToShow = ref(2)
const projectsToShow = ref(projects.slice(0, itemsToShow.value))
const isLimitReached = ref(
	projectsToShow.value.length === projects.length
)

const handleLoadMore = () => {
	if (projects.length - 1 > itemsToShow.value) {
		itemsToShow.value += 2
		projectsToShow.value = projects.slice(0, itemsToShow.value)
	} else if (projects.length - 1 === itemsToShow.value) {
		projectsToShow.value = projects.slice()
	}
	isLimitReached.value = projectsToShow.value.length === projects.length
}

const handleScroll = () => {
	const lastElementId = `three-${projectsToShow.value.length - 2}`
	const lastElement = document.getElementById(lastElementId)

	if (lastElement)
		lastElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onUpdated(() => handleScroll())
</script>

<template>
	<main class="flex-col projects-page">
		<PageHeader head-key="worksH2" text-key="worksT1" />

		<div class="projects-container w100 rel">
			<div
				v-for="(a, index) in projectsToShow"
				:id="'three-' + index"
				:key="index"
				class="three w100 rel"
				:class="'view' + a.view"
			>
				<div
					v-for="(p, i) in a.projects"
					:key="i"
					class="project card-back br1 text-center flex-col hideO"
					:class="{
						vertical: p.orientation === '|',
						horizontal: p.orientation === '-',
						first: i % 3 === 0,
						second: i % 3 === 1,
						third: i % 3 === 2,
					}"
				>
					<frame-loader
						:iframe-class="{
							vertical: p.orientation === '|',
							horizontal: p.orientation === '-',
							white_bg: p.white_bg,
							iframe: true,
							w100: true,
						}"
						:iframe-src="getPath(p.path)"
						:iframe-title="p.title"
						:scrolling="'no'"
					/>

					<div class="title-box flex-align">
						<p class="t3">
							{{ p.tags.join(' | ') }}
						</p>

						<router-link
							class="t2"
							:title="$t('worksDetails') + ' «' + p.title + '»'"
							:to="{ name: 'project', params: { projectName: p.name } }"
						>
							<em>
								{{ p.title }}
							</em>
						</router-link>
					</div>
				</div>
			</div>

			<interactive-button
				v-if="!isLimitReached"
				:action="handleLoadMore"
				:bg="'var(--accent50)'"
				:border-radius="'2.166rem'"
				class="font-variant load-more text-center flex-center"
				:font-size="'1.33rem'"
				:padding="'1.5rem 2.5rem'"
			>
				{{ $t('worksMore') }}
			</interactive-button>
		</div>
	</main>
</template>

<style lang="scss">
.projects-page {
	.projects-container {
		padding: 6.25rem 0 10rem;
		gap: 3rem;
	}

	.projects-container {
		display: flex;
		flex-wrap: wrap;
	}

	.three {
		display: grid;
		width: 100%;
		gap: 1.5rem;

		& .first {
			grid-area: first;
		}
		& .second {
			grid-area: second;
		}
		& .third {
			grid-area: third;
		}

		&.view111 {
			grid-template-columns: repeat(3, 1fr);
			grid-template-areas: "first second third";
		}

		&.view12 {
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				"first second second"
				"first third third"
				;
		}

		&.view21 {
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				"first first third"
				"second second third"
				;
		}

		@media (orientation: landscape) {
			width: calc(50% - 1.5rem);
		}

		@media (orientation: portrait) {
			width: 100%;
		}
	}

	.project {
		height: auto;
		justify-content: space-between;
		flex-shrink: 1;
		flex-grow: 0;
		padding-bottom: 0.5rem;
		width: 100%;
		margin: -1px;

    &:has(.vertical) {
      @media (orientation: landscape) {
        width: calc(((40dvw - 1.5rem) * 0.333 - 1rem));
        height: calc((40dvw * 0.666 * 1.2));
      }
      @media (orientation: portrait) {
        width: calc((80dvw * 0.333 - 1rem));
        height: calc((80dvw * 0.666 * 1.2));
      }
    }

    &:has(.horizontal) {
      @media (orientation: landscape) {
        width: calc(((((40dvw - 1.5rem) * 0.333 - 1rem) * 2) + 1.5rem));
        height: calc(((40dvw * 0.666 * 1.2 - 1.5rem) / 2));
      }
      @media (orientation: portrait) {
        width: calc((80dvw - (80dvw * 0.333 - 1rem) - 1.5rem));
        height: calc((((80dvw * 0.666 * 1.2) - 1.5rem) / 2));
      }
    }

		.title-box {
			padding: 0.25rem;
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
			@media (max-width: 1023px) {
				zoom: 0.175;
				border-radius: 5.714285rem;
			}

			@media (orientation: portrait) and (min-width: 1024px) {
				zoom: 0.333;
				border-radius: 3rem;
			}

			@media (orientation: landscape) and (min-width: 1024px) {
				zoom: 0.25;
				border-radius: 4rem;
			}
		}
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
