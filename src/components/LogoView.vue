<template>
	<span class="logo-span flex-center">
		<span class="logo-letter v">V</span>
		<span class="logo-letter a">A</span>
		<span class="logo-letter d">D</span>
		<span class="logo-letter i">I</span>
		<span class="logo-letter m">M</span>
		<svg
			class="logo-image"
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="shadowActive" height="200%" width="200%" x="-50%" y="-50%">
					<feDropShadow
						dx="0"
						dy="0"
						flood-color="var(--color50)"
						flood-opacity="0.75"
						stdDeviation="1"
					/>
				</filter>
			</defs>
			<desc>4</desc>
			<!-- Vertical line -->
			<line x1="50" x2="50" y1="96" y2="4" />
			<!-- Diagonal line from center to top-left -->
			<line x1="50" x2="4" y1="4" y2="50" />
			<!-- Horizontal line from left to center -->
			<line x1="4" x2="50" y1="50" y2="50" />
			<!-- Arc from top-center to center -->
			<path d="M 50,4 A 23,23,0,1,1,50,50" fill="none" />
			<!-- Outer circle -->
			<circle cx="50" cy="50" fill="none" r="46" />
		</svg>
		<span class="logo-letter w">W</span>
		<span class="logo-letter e">E</span>
		<span class="logo-letter b">B</span>
	</span>
</template>

<sc&ript></sc&ript>

<style lang="scss">
.logo-span {
	font-size: 3vmin;
	font-weight: 700;

	.logo-letter {
		&.v {
			letter-spacing: -0.28ch;
		}

		&.a {
			letter-spacing: -0.05ch;
		}

		&.d {
			letter-spacing: -0.22ch;
		}

		&.i {
			letter-spacing: -0.075ch;
		}

		&.m {
			letter-spacing: 0.025ch;
		}

		&.w {
			letter-spacing: -0.05ch;
		}

		&.e {
			letter-spacing: -0.075ch;
		}

		&.b {
			letter-spacing: 0;
		}
	}

	.logo-image {
		width: 3vmin;
		height: 3vmin;
		stroke-width: max(0.25vmin, 10px);
		stroke: var(--color0);
		overflow: visible;
	}

	&::selection .logo-image {
		stroke: var(--bg0);
	}
}
</style>
