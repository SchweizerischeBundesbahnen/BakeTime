<template>
  <div class="flex flex-col">
    <p v-for="appBaker of appBakers" :key="appBaker.id">{{ appBaker.name }}</p>
  </div>
</template>
<script lang="ts" setup>
import type { AppBaker } from '../../core/models/appbaker'

interface Props {
  appBakers: AppBaker[]
}

defineProps<Props>()
</script>
