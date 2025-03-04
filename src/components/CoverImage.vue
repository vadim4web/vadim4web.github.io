<script setup>
import RotatingLogo from '~/components/RotatingLogo.vue'

defineProps({
	id: String,
	logoSize: Number,
})
</script>

<template>
	<div :id="id" class="node flex-center">
		<span class="crafting"> Crafting Digital Solutions </span>
		<span class="vadim4web">
			<span class="vadim">
				<span class="v">v</span>
				<span class="a">a</span>
				<span class="d">d</span>
				<span class="i">i</span>
				<span class="m">m</span>
			</span>
			<rotating-logo
				class="for-capture"
				:no-rotation="true"
				:no-shadow="true"
				:size="logoSize"
			/>
			<span class="web">
				<span class="w">w</span>
				<span class="e">e</span>
				<span class="b">b</span>
			</span>
		</span>
		<span class="excellence"> Excellence in Every Detail. </span>
	</div>
</template>

<style lang="scss" scoped>
.node {
	z-index: 1;
	position: relative;
	padding: 0;
	font-weight: bold;
	background: var(--gray);
	border: none;

	&:not(#yt, #patreon_1, #patreon_2) .vadim4web {
		transform: scale(2.9);
	}

	& > span {
		display: block;

		overflow: visible;
		background: url('/model/texture-silver.jpg');
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}

	.vadim4web {
		font-size: 10rem;
		height: 22rem;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		transform: translateX(-8.25%);
		overflow: visible !important;
		padding-inline: 0.2rem !important;
	}

	.vadim {
		background-position: top;
		background-size: cover;
	}

	.web,
	.vadim {
		letter-spacing: -0.1ch;
	}

	.web {
		background-position: bottom;
		background-size: contatin;
	}

	.v {
		letter-spacing: -0.375ch;
	}
	.d {
		letter-spacing: -0.25ch;
	}
	.i {
		letter-spacing: -0.15ch;
	}
	.e {
		letter-spacing: -0.15ch;
	}

	.crafting {
		top: 0;
		width: 110%;
		font-size: 0.425em;
		letter-spacing: -0.2ch;
		background: linear-gradient(180deg, #fff, #c0c0c0);
	}
	.excellence {
		bottom: 0;
		font-size: 0.263em;
		letter-spacing: 0.2ch;
		font-style: italic;
		background: linear-gradient(0deg, #fff, #c0c0c0);
	}

	.crafting,
	.excellence {
		position: absolute;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('favicon_dark.ico');
		background-position: center;
		opacity: 0.1;
	}

	&::before {
		z-index: -2;
	}

	&::after {
		z-index: -1;
	}
}

.for-capture {
	position: relative;
	aspect-ratio: 1;
	margin: 0 auto;
	transform: translateX(-15%) scale(.33);
}

#github {
	width: 1280px;
	height: 640px;

	font-size: calc(640px / 2.8);

	.crafting {
		top: .25ch;
	}

	.excellence {
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -3.575ch;
		margin-right: -7.85ch;
	}

	.vadim4web {
		font-size: 5rem;
		transform: scale(2.9);
	}

	&::before {
		background-size: calc(640px / 2);
	}

	&::after {
		background-size: calc(640px / 7);
	}
}

#linkedin-profile {
	width: 1584px;
	height: 396px;

	font-size: calc(640px / 4.5);

	.crafting {
		top: 0;
		font-size: 0.5em;
	}

	.excellence {
		font-size: 0.3em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -3.16ch;
		margin-right: -6.9ch;
	}

	.vadim4web {
		font-size: 3.5rem;
	}

	&::before {
		background-size: calc(396px / 2);
	}

	&::after {
		background-size: calc(396px / 7);
	}
}

#linkedin-company {
	width: 1128px;
	height: 191px;

	font-size: calc(640px / 9);

	.crafting {
		top: 0;
		font-size: 0.5em;
	}

	.excellence {
		font-size: 0.3em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -2.65ch;
		margin-right: -5.9ch;
	}

	.vadim4web {
		font-size: 2rem;
	}

	&::before {
		background-size: calc(191px / 2);
	}

	&::after {
		background-size: calc(191px / 7);
	}
}

#facebook {
	width: 820px;
	height: 312px;

	font-size: calc(640px / 5.5);

	.crafting {
		top: 0;
		font-size: 0.5em;
	}

	.excellence {
		font-size: 0.3em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -2.88ch;
		margin-right: -6.425ch;
	}

	.vadim4web {
		font-size: 3rem;
	}

	&::before {
		background-size: calc(312px / 2);
	}

	&::after {
		background-size: calc(312px / 7);
	}
}

#x {
	width: 1500px;
	height: 500px;

	font-size: calc(500px / 2.8);

	.crafting {
		top: 0;
		font-size: 0.5em;
	}

	.excellence {
		font-size: 0.3em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -2.8ch;
		margin-right: -6.15ch;
	}

	.vadim4web {
		font-size: 5rem;
		position: relative;
		left: -0.05ch;
	}

	&::before {
		background-size: calc(500px / 2);
	}

	&::after {
		background-size: calc(500px / 7);
	}
}

#yt {
	width: 2048px;
	height: 1152px;

	font-size: calc(1152px / 3.5);

	.crafting {
		top: 0;
		font-size: 0.45em;
	}

	.excellence {
		font-size: 0.3em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -3.2ch;
		margin-right: -7.05ch;
	}

	&::before {
		background-size: calc(1152px / 2);
	}

	&::after {
		background-size: calc(1152px / 7);
	}
}

#patreon {
	width: 1600px;
	height: 400px;

	font-size: calc(400px / 2.5);

	.crafting {
		top: 0;
		font-size: 0.5em;
	}

	.excellence {
		font-size: 0.3em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -3.2ch;
		margin-right: -7ch;
	}

	.vadim4web {
		font-size: 3.5rem;
	}

	&::before {
		background-size: calc(400px / 2);
	}

	&::after {
		background-size: calc(400px / 7);
	}
}

#patreon_1,
#patreon_2 {
	width: 460px;
	height: 200px;

	font-size: calc(200px / 2.5);

	.crafting {
		top: 0;
		font-size: 0.4em;
	}

	.excellence {
		font-size: 0.25em;
		bottom: 1ch;
	}

	.for-capture {
		margin-left: -1.85ch;
		margin-right: -1.9ch;
		transform: scale(0.75);
	}

	.vadim4web {
		font-size: 3.5rem;
		transform: scale(1.5);
	}

	&::before {
		background-size: calc(200px / 2);
	}

	&::after {
		background-size: calc(200px / 7);
	}
}

#patreon_1 .vadim4web::after,
#patreon_2 .vadim4web::after {
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  color: #000;
	-webkit-text-fill-color: #000;
  opacity: 1;
  z-index: 1; /* Підняти рівень накладення */
	text-shadow: 0 0 0.25ch #000;
	transform: translate(-50%, 35%);
}

#patreon_1 .vadim4web::after {
  content: 'Дякую за підтримку 🙏';
}
#patreon_2 .vadim4web::after {
  content: 'Усе зможемо разом 💪';
}
</style>
