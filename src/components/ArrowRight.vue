<template>
  <strong
    class="arrow-right"
    :style="{ height, width: parseInt(height) * 1.5 + 'rem' }"
  >
    ->
  </strong>
</template>

<script setup>
const { height } = defineProps(['height'])
</script>

<style lang="scss" scoped>
.arrow-right {
	font-weight: 700;
	text-wrap: nowrap;
}
</style>
