<template>
	<main class="home">
		<section class="head content flex-col-center text-center">
			<div class="h1">
				<h2
					class="h1_h2"
					:data-text-1="$t('homeH11')"
					style="filter: drop-shadow(0 0 0.5rem var(--color-op))"
				>
					<strong>{{ $t('homeH11') }}</strong><br />
					<high-light />
				</h2>

				<h2
					class="h1_span"
					:data-text-2="$t('homeH12')"
					style="
						font-size: 75%;
						filter: drop-shadow(0 0 0.5rem var(--color-op));
					"
				>
					<em>{{ $t('homeH12') }}</em>
				</h2>
			</div>

			<logo3-d />

			<active-element
				:bg="'var(--accent50)'"
				:border-radius="'2.3125rem'"
				:font-size="'1.75rem'"
				:padding="'1.5rem 4rem'"
				path="projects"
			>
				{{ $t('homeB1') }}&nbsp;

				<arrow-right height="2.5rem" />
			</active-element>
		</section>

		<section class="hero w100">
			<div class="left content flex-col-center w100 rel">
				<div class="text flex-col">
					<h2 class="h2">
						<high-light />

						{{ $t('homeH211') }}<br />{{ $t('homeH212') }}<br />{{
							$t('homeH213')
						}}
					</h2>

					<p class="t2">
						{{ $t('homeP11') }}<em>{{ $t('homeP12') }}</em><age-calculator />.<br />{{ $t('homeP13') }}
					</p>
				</div>

				<active-element
					:bg="'var(--accent50)'"
					:border-radius="'2.125rem'"
					class="font-variant"
					:font-size="'1.5rem'"
					:padding="'1.5rem 3rem'"
					path="about"
				>
					{{ $t('homeB2') }}
				</active-element>
			</div>

			<div class="right rel">
				<div class="photo w100" />
			</div>
		</section>

		<section class="projects flex-col-center">
			<h2 class="h2 text-center">
				{{ $t('homeH22') }}
				<high-light />
			</h2>

			<active-element
				:bg="'var(--accent50)'"
				:border-radius="'2.166rem'"
				:font-size="'1.33rem'"
				:padding="'1.5rem 3rem'"
				path="projects"
			>
				{{ $t('homeB3') }}&nbsp;
				<arrow-right height="2rem" />
			</active-element>

			<three-view />
		</section>

		<tech-stack />
	</main>
</template>

<script setup>
import Logo3D from '@/components/Logo3D.vue'
import ActiveElement from '@/components/ActiveElement.vue'
import ArrowRight from '@/components/ArrowRight.vue'
import HighLight from '@/components/HighLight.vue'
import AgeCalculator from '@/components/AgeCalculator.vue'
import { defineAsyncComponent } from 'vue'

const ThreeView = defineAsyncComponent(
	() => import('@/components/ThreeView.vue')
)
const TechStack = defineAsyncComponent(
	() => import('@/components/TechStack.vue')
)
</script>

<style lang="scss" scoped>
.head {
	.h1 {
		width: 22ch;
		z-index: 1;
	}

	& .highlight {
		top: -7.5rem;
		right: 0;
	}
}

.hero {
	display: grid;
	grid-template-columns: 4fr 3fr;
	gap: 6rem;
	align-items: center;

	.left {
		align-items: flex-start;
		justify-content: flex-start;

		.h2 .highlight {
			top: -7.5rem;
			left: -15rem;
		}

		.text {
			gap: 1.5rem;
		}
	}

	.right {
		.photo {
			aspect-ratio: 9 / 10;
			background: url('@/assets/img/photo.webp');
			background-position: 50% 25%;
			background-size: cover;
			background-repeat: no-repeat;
			border-radius: 2rem;
			filter: var(--filter1);
		}

		&::before,
		&::after {
			z-index: 1;
			content: '';
			border: 0.125rem solid var(--accent0);
		}

		&::before {
			left: -2.5rem;
			bottom: 3rem;
			width: 3.5rem;
			height: 11rem;
			border-radius: 1.75rem;
		}

		&::after {
			top: -1rem;
			right: 0;
			width: 7rem;
			height: 2rem;
			border-radius: 1rem;
		}

		&:hover {
			.photo {
				filter: var(--filter0);
			}

			&::before,
			&::after {
				filter: var(--filter1);
			}
		}
	}
}

.content {
	gap: 6rem;
}

.projects {
	padding: 3rem 0;
	gap: 2rem;

	.h2 .highlight {
		top: -10rem;
		right: -12rem;
	}
}
</style>
