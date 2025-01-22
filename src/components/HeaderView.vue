<template>
	<header class="header w100 back-blur05">
		<nav>
			<menu class="w100 rel">
				<li class="menu-item w100 flex-center text-center">
					<router-link class="link flex-center w100 logo-link" to="/">
						<logo-view font-weight="bold" />
					</router-link>
				</li>

				<li class="menu-item w100 flex-center text-center">
					<router-link class="link flex-center w100" to="/about">
						{{ $t('AboutMe') }}
					</router-link>
				</li>

				<li class="menu-item w100 flex-center text-center">
					<router-link class="link flex-center w100" to="/projects">
						{{ $t('MyWorks') }}
					</router-link>
				</li>

				<li class="menu-item w100 flex-center text-center">
					<router-link class="link flex-center w100" to="/contact">
						{{ $t('MyContacts') }}
					</router-link>
				</li>

				<li class="menu-item w100 flex-col-center text-center global-view">
					<theme-toggler />
					<language-switcher />
				</li>
			</menu>
		</nav>
	</header>
</template>

<script setup>
import LogoView from '@/components/LogoView.vue'
import ThemeToggler from '@/components/ThemeToggler.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<style lang="scss">
.header {
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	height: 20vmin;
	background: linear-gradient(180deg, var(--bg0), var(--bg50), transparent);
}

menu {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	place-items: center;
	height: 20vmin;
	gap: 0.125rem;
	font-weight: 500;

	a {
		display: inline-block;
		height: 20vmin;
		opacity: 0.75;
		font-size: 3vmin;
		letter-spacing: -0.1ch;
		word-spacing: -0.5ch;
		font-weight: bold;
		text-wrap: nowrap;
		text-transform: uppercase;
		color: var(--color0);
		border: 0.125rem solid transparent;

		&:hover,
		&.router-link-active {
			border: 0.125rem solid var(--color50);
			border-radius: 10vmin;
			color: var(--color0);
			opacity: 0.66;
			filter: hue-rotate(90deg);
		}

		&:hover .logo-image,
		&.router-link-active .logo-image {
			stroke: var(--color0);
			filter: url(#shadowActive);
		}
	}
}

.menu-item {
	text-shadow: 0 0 2rem var(--bg0);
	--padding: calc((100vw - 100vmin) / 10);
	--padding2: calc((100vw - 100vmin) / 5);

	&:first-child,
	&:nth-child(3),
	&:last-child {
		padding: 0 var(--padding);
	}

	&:nth-child(2) {
		padding-left: var(--padding2);
	}
	&:nth-child(4) {
		padding-right: var(--padding2);
	}
}

.global-view {
	height: 20vmin;
}
</style>
