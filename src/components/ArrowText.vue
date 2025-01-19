<template>
	<strong
		class="arrow-text"
		:style="{ height, width: parseInt(height) * 1.5 + 'rem' }"
	>
		->
	</strong>
</template>

<script setup>
defineProps({
	height: String,
})
</script>

<style lang="scss" scoped>
.arrow-text {
	font-weight: 700;
	text-wrap: nowrap;
}
</style>
