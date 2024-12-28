<template>
  <loader-view />
  <header-view />
  <router-view />
  <footer-view />
</template>

<script setup>
import LoaderView from '@/components/LoaderView.vue'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>
