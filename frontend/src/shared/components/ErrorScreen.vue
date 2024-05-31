<template>
  <div class="flex w-full grow items-center justify-center">
    <div class="flex flex-col items-center gap-y-4 p-8">
      <template v-if="type == 'notFound'">
        <p class="text-xl text-gray-700">
          {{ customMessage ? customMessage : 'Not found' }}
        </p>
        <button @click="router.push({ name: 'home' })">Home</button>
      </template>
      <template v-if="type == 'systemError'">
        <p class="text-xl text-gray-700">
          {{ customMessage ? customMessage : 'System Error' }}
        </p>
        <button @click="router.push({ name: 'home' })">Home</button>
      </template>
      <template v-if="type == 'forbidden'">
        <p class="text-xl text-gray-700">
          {{ customMessage ? customMessage : 'Forbidden' }}
        </p>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

import { computed } from 'vue'

interface Props {
  type: 'notFound' | 'systemError' | 'forbidden'
  customMessages?: Map<'notFound' | 'systemError' | 'forbidden', string>
}

const props = defineProps<Props>()

const customMessage = computed(() => {
  if (props.customMessages) {
    return props.customMessages.get(props.type)
  }
  return undefined
})
</script>
