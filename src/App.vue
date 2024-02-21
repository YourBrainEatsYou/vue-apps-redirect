<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <RouterLink :to="{name: 'about'}">About</RouterLink>
    <RouterLink :to="{name: 'external'}">External</RouterLink>
  </header>

  <RouterView />
</template>
