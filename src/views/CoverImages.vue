<script setup>
import CoverImage from '~/components/CoverImage.vue'
</script>

<template>
	<main class="main capture-logo-view w100 flex-col-center">
		<cover-image id="github" :logo-size="640" />
		<cover-image id="linkedin-profile" :logo-size="396" />
		<cover-image id="linkedin-company" :logo-size="191" />
		<cover-image id="facebook" :logo-size="312" />
		<cover-image id="x" :logo-size="500" />
		<cover-image id="yt" :logo-size="1152" />
		<cover-image id="patreon" :logo-size="400" />
		<cover-image id="patreon_1" :logo-size="200" />
		<cover-image id="patreon_2" :logo-size="200" />
	</main>
</template>

<style lang="scss" scoped>
.capture-logo-view {
	gap: 7.5vmax;
	text-align: center;
	zoom: 0.5;

	@media (orientation: portrait) {
		margin: 30vmax 0 7.5vmax;
	}

	@media (orientation: landscape) {
		margin: 30vmax 0 7.5vmax;
	}
}
</style>
