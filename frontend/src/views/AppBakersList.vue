<template>
  <slot name="leading"></slot>

  <div class="about">
    <button @click="increment">Add 1</button>
    <div>{{ counter }}</div>
    <div>{{ computedCounter }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const counter = ref(0)

const computedCounter = computed(() => {
  return 'Aktueller Stand: ' + counter.value
})

const increment = () => {
  counter.value++
}
</script>
