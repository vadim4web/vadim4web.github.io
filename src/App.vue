<template>
	<loader-view />
	<header-view />
	<router-view />
	<footer-view />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LoaderView from '@/components/LoaderView.vue'
import HeaderView from '@/components/HeaderView.vue'
const FooterView = defineAsyncComponent(
	() => import('@/components/FooterView.vue')
)
</script>
