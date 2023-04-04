<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="page1">page 1</RouterLink>
    <RouterLink to="page2">page 2</RouterLink>
  </header>

  <RouterView class="app-main" />
</template>

<style scoped lang="less"></style>
