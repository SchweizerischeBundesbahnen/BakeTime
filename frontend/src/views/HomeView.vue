<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome class="w-full">
      <p>Nicolas</p>
      <template #trailing><p>Ende</p></template>
      <template #leading><p>Hallo</p></template>
    </TheWelcome>
  </main>
</template>
