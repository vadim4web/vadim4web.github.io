<template>
	<footer class="footer flex-align flex-col rel">
		<h4 class="h4 top text-center">
			<router-link
				to="/contact"
				class="link not-to-show-active"
				style="padding: 1rem; border-radius: 4rem"
			>
				{{ $t('footerGIT') }}
			</router-link>
		</h4>

		<h2 class="h1 mail">
			<a
				:href="`mailto:vadim4web@gmail.com?subject=${encodeURIComponent(
					$t('emailSubject')
				)}`"
				class="link"
				style="padding: 1rem; border-radius: 4rem"
				target="_blank"
				rel="noopener noreferrer"
				>vadim4web@gmail.com</a
			>
		</h2>

		<div class="grid info w100">
			<logo-view />

			<address class="text-center">
				<h4 class="h4" :title="$t('location')">
					{{ $t('footerA1') }}, 175/14,<br />
					{{ $t('footerA2') }},<br />
					08150
				</h4>
			</address>

			<div class="contacts">
				<h4 class="h4">
					<a href="tel:+380933789883" :title="$t('callMe')" target="_self">
						+380-933-789-883
					</a>
				</h4>

				<div class="links">
					<h4 class="h4">
						<a
							href="https://github.com/vadim4web"
							:title="$t('gitHub')"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="64"
								height="64"
								shape-rendering="geometricPrecision"
								text-rendering="geometricPrecision"
								image-rendering="optimizeQuality"
								fill-rule="evenodd"
								fill="var(--color0)"
								clip-rule="evenodd"
								viewBox="0 0 640 640"
							>
								<path
									d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
								/></svg
							>&nbsp;
						</a>
					</h4>

					<h4 class="h4">
						<a
							:href="`mailto:vadim4web@gmail.com?subject=${encodeURIComponent(
								$t('emailSubject')
							)}`"
							:title="$t('emailMe')"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								id="Layer_1"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 122.88 122.88"
								fill-rule="evenodd"
								fill="var(--color0)"
							>
								<path
									class="cls-1"
									d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM30.73,38,62,63.47,91.91,38Zm-2,42.89L51,58.55,28.71,40.39V80.87ZM53.43,60.55l-22.95,23H92.21l-21.94-23L63,66.71h0a1.57,1.57,0,0,1-2,0l-7.59-6.19Zm19.24-2,21.5,22.54V40.19L72.67,58.51Z"
								/>
							</svg>
							&nbsp;
						</a>
					</h4>

					<h4 class="h4">
						<a
							href="https://t.me/vadim4web"
							:title="$t('chatMe')"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 333334 333334"
								shape-rendering="geometricPrecision"
								text-rendering="geometricPrecision"
								image-rendering="optimizeQuality"
								fill-rule="evenodd"
								clip-rule="evenodd"
								fill="var(--color0)"
							>
								<path
									d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm80219 91205l-29735 149919s-4158 10396-15594 5404l-68410-53854s76104-68409 79222-71320c3119-2911 2079-3534 2079-3534 207-3535-5614 0-5614 0l-100846 64043-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951zm-87637 122889l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z"
								/></svg
							>&nbsp;
						</a>
					</h4>
				</div>
			</div>
		</div>

		<h4 class="h4 hr-above text-center">
			&copy; 2021-{{ new Date().getFullYear() }}
			<a
				href="https://github.com/vadim4web"
				:title="$t('gitHub')"
				target="_blank"
				rel="noopener noreferrer"
			>
				VADIM4WEB.
			</a>
			{{ $t('copyright') }}.
		</h4>
	</footer>
</template>

<script setup>
import LogoView from '@/components/LogoView.vue'
</script>

<style lang="scss" scoped>
footer {
	justify-content: flex-end;
	background: var(--bg2);
	padding: 0 10dvw;
	width: 100dvw;
	left: -10dvw;

	.h4.hr-above {
		border-top: 0.125rem solid var(--color2);
		padding: 2.25rem 0 5rem 0;
	}

	.h4.top {
		padding: 6rem 0 1rem 0;

		& a {
			color: var(--accent0);
			text-shadow: 0 0 0.25rem var(--color50);
		}
	}

	.h1 {
		padding-top: 1rem;
		padding-bottom: 12rem;
	}

	.grid {
		height: 8rem;
		display: grid;
		grid-template-columns: 1fr 1.5fr 1fr;
		gap: 2rem;
		padding-bottom: 2.5rem;

		.logo-span {
			justify-self: start;
			align-self: start;
		}

		address {
			justify-self: center;
			justify-content: center;
		}

		.contacts {
			justify-self: end;
			justify-content: end;
		}
	}
}

.links {
	padding-top: 1rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1rem;

	.h4 {
		width: 4.33rem;
		height: 4.33rem;
	}
}

.links svg {
	width: 3.5rem;
	height: 3.5rem;
	stroke: var(--color0);
}

.mail a {
	text-decoration: underline;
}
</style>
