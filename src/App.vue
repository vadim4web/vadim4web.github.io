<template>
  <mouse-light />
  <header-view />
  <router-view />
  <footer-view />
</template>

<script setup>
import MouseLight from '@/components/MouseLight.vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>
