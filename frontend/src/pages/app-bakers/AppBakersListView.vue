<template>
  <div class="flex flex-col gap-2 grow">
    <div v-for="appBaker of appBakers" :key="appBaker.id" class="flex flex-row gap-2">
      <div>{{ appBaker.name }}</div>
      <div>{{ appBaker.quota }}</div>
      <div>{{ appBaker.flavours.join(" | ") }}</div>
      <div>{{ appBaker.pastries.map((e) => e.name).join(" | ") }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { AppBaker } from '../../core/models/appbaker'

interface Props {
  appBakers: AppBaker[]
}

defineProps<Props>()
</script>
