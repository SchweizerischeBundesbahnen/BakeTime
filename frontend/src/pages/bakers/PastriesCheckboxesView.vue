<template>
    <LoadingWrapper :state="state">
      <div v-for="pastry in data" :key="pastry.id" class="flex flex-row gap-2">
        <input 
            type="checkbox" 
            :id="pastry.id" 
            :value="pastry.id" 
            v-model="localSelectedPastryIds"
            @change="emitSelectedPastries"
        >
        <label :for="pastry.id">{{ pastry.name }}</label><br>
      </div>
    </LoadingWrapper>
  </template>
<script lang="ts" setup>
import { type Ref, ref, watch } from 'vue'
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import { useLoading } from '../../shared/functions/use-loading'
import type { Pastry } from '../../core/models/pastry'

const props = defineProps<{ selectedPastries: Pastry[] }>()
const emit = defineEmits(['update:selectedPastries'])

const getPastriesListUseCase = injectStrict(AppContainerKey.getPastriesUseCase)
const { state, data, load } = useLoading<Pastry[]>()
    
const localSelectedPastryIds: Ref<string[]> = ref(props.selectedPastries.map(pastry => pastry.id))

load(() => {
  return getPastriesListUseCase.execute()
})

const emitSelectedPastries = () => {
  const selectedPastries = data.value.filter(pastry => localSelectedPastryIds.value.includes(pastry.id))
  emit('update:selectedPastries', selectedPastries)
}

watch(localSelectedPastryIds, emitSelectedPastries)

watch(() => props.selectedPastries, (newSelectedPastries) => {
  localSelectedPastryIds.value = newSelectedPastries.map(pastry => pastry.id)
})

</script>