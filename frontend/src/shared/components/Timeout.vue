<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="flex flex-col items-center gap-y-4 p-8">
      <p class="text-xl">Timeout</p>

      <button @click="reload">Reload</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['reload'])
const reload = () => {
  emits('reload')
}
</script>
