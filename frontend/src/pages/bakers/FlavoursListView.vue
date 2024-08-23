<template>
    <div>
      <div class="flex flex-col gap-2">
        <div v-for="(flavour, index) in localSelectedFlavours" :key="index" class="flex flex-row gap-2">
          <div>{{ flavour }}</div>
          <button @click="removeFlavour(index)">Remove</button>
        </div>
      </div>
      <div class="flex flex-row gap-5 mt-5">
        <input v-model="newFlavour" placeholder="New Flavour" class="text-black" />
        <button @click="addFlavour" :disabled="newFlavour.length === 0">Add Flavour</button>
      </div>
    </div>
  </template>

<script lang="ts" setup>
import { ref, defineEmits, watch } from 'vue'

const props = defineProps<{ selectedFlavours: string[] }>()
const emit = defineEmits(['update:selectedFlavours'])

const localSelectedFlavours = ref<string[]>([])
const newFlavour = ref('')

const addFlavour = () => {
  if (newFlavour.value && !localSelectedFlavours.value.includes(newFlavour.value)) {
    localSelectedFlavours.value.push(newFlavour.value)
    newFlavour.value = ''
    emitSelectedFlavours()
  }
}

const removeFlavour = (index: number) => {
  localSelectedFlavours.value.splice(index, 1)
  emitSelectedFlavours()
}

const emitSelectedFlavours = () => {
  emit('update:selectedFlavours', localSelectedFlavours.value)
}

watch(localSelectedFlavours, emitSelectedFlavours)

watch(() => props.selectedFlavours, (newSelectedPastries) => {
  localSelectedFlavours.value = newSelectedPastries
})

</script>
