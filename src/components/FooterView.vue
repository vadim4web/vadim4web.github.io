<script setup>
import LogoView from '~/components/LogoView.vue'
</script>

<template>
	<footer class="footer flex-align flex-col rel">
		<h5 class="h4 top text-center">
			<router-link
				class="link not-to-show-active"
				style="padding: 1rem; border-radius: 4rem"
				to="/contact"
			>
				{{ $t('footerGIT') }}
			</router-link>
		</h5>

		<h5 class="h1 mail">
			<a
				class="link"
				:href="`mailto:vadim4web@gmail.com?subject=${encodeURIComponent(
					$t('emailSubject')
				)}`"
				rel="noopener noreferrer"
				style="padding: 1rem; border-radius: 4rem"
				target="_blank"
			>
				vadim4web@gmail.com
			</a>
		</h5>

		<div class="grid info w100">
			<logo-view font-weight="normal" />

			<address class="text-center">
				<h5 class="h4" :title="$t('location')">
					{{ $t('footerA1') }}, 175/14,<br />
					{{ $t('footerA2') }},<br />
					08150
				</h5>
			</address>

			<div class="contacts">
				<h5 class="h4 phone">
					<a href="tel:+380933789883" target="_self" :title="$t('callMe')">
						+380-933-789-883
					</a>
				</h5>

				<div class="links">
					<h5 class="h4">
						<a
							href="https://github.com/vadim4web"
							rel="noopener noreferrer"
							target="_blank"
							:area-label="$t('gitHub')"
							:title="$t('gitHub')"
						>
							<svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g transform="translate(-140.000000, -7559.000000)" fill="var(--color0)">
													<g transform="translate(56.000000, 160.000000)">
															<path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399">

							</path>
													</g>
											</g>
									</g>
							</svg>
						</a>
					</h5>

					<h5 class="h4">
						<a
							href="https://wa.me/380933789883"
							rel="noopener noreferrer"
							target="_blank"
              :area-label="$t('whatsapp')"
              :title="$t('whatsapp')"
						>
							<svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g transform="translate(-300.000000, -7599.000000)" fill="var(--color0)">
													<g transform="translate(56.000000, 160.000000)">
															<path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439">

							</path>
													</g>
											</g>
									</g>
							</svg>
						</a>
					</h5>

					<h5 class="h4">
						<a
							href="https://t.me/vadim4web"
							rel="noopener noreferrer"
							target="_blank"
							:area-label="$t('chatMe')"
							:title="$t('chatMe')"
						>
							<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2629 9.3444 8.93015 10.3492 5.43191 11.8733C4.86385 12.0992 4.56628 12.3202 4.53919 12.5363C4.4934 12.9015 4.95073 13.0453 5.57349 13.2411C5.6582 13.2678 5.74598 13.2954 5.83596 13.3246C6.44866 13.5238 7.27284 13.7568 7.70131 13.766C8.08996 13.7744 8.52375 13.6142 9.00266 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.1391 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.3761 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5034 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78393 14.6448 10.8036 15.3168C11.2937 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2078 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8308 18.0694 15.3826 18.0186C15.7033 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6632 17.3816 10.0585 17.5622 8.16098C17.5781 7.99473 17.5582 7.78197 17.5422 7.68858C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0057 7.22234 16.9064 7.22408C16.455 7.23204 15.7626 7.47282 12.43 8.85893Z" fill="var(--color0)" />
							</svg>
						</a>
					</h5>
				</div>
			</div>
		</div>

		<h5 class="h4 hr-above text-center w100">
			&copy; 2020-{{ new Date().getFullYear() }}
			<a
				href="https://github.com/vadim4web"
				rel="noopener noreferrer"
				target="_blank"
				:title="$t('gitHub')"
			>
				VADIM4WEB</a>.
			<em> {{ $t('copyright') }}. </em>
		</h5>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	justify-content: flex-end;
	left: -10dvw;
	width: 100dvw;
	padding: 0 10dvw;
	background: var(--bg2);

	a:hover {
		filter: drop-shadow(0 0 0.1rem var(--accent0));
	}

	.h4.hr-above {
		padding: 2.25rem 0 5rem 0;
		border-top: 0.125rem solid var(--color2);
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
		padding-bottom: 10rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 22vw 36vw 22vw;
		height: 8rem;
		padding-bottom: 2.5rem;

		.logo-span {
			align-self: start;
			justify-self: start;
		}

		address {
			justify-self: center;
			justify-content: center;
		}

		.contacts {
			text-align: right;
			justify-self: end;
		}
	}
}

.links {
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	gap: 1.75rem;
	padding: 1rem 0;

	.h4 {
		width: 3.5rem;
		height: 3.5rem;
	}
}

.links svg {
	width: 3.5rem;
	height: 3.5rem;
	stroke: var(--color0);
	overflow: visible;
}

.mail a {
	text-decoration: underline;
}
</style>
