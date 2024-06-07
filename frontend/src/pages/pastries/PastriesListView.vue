<template>
  <div class="flex flex-col gap-2 grow">
    <div v-for="pastry of pastries" :key="pastry.id" class="flex flex-row gap-2">
      <div>{{ pastry.name }}</div>
    </div>
    <div class="flex flex-row gap-5 mt-5">
        <input v-model="newName" placeholder="New Pastry Name" />
        <PrimaryButton :disabled="newName.length <= 0" @click="savePastry">Save</PrimaryButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import { SavingState, useSaving } from '../../shared/functions/use-saving'
import type { Pastry } from '@/core/models/pastry';
import PrimaryButton from '@/shared/components/PrimaryButton.vue';

const addPastryUseCase = injectStrict(AppContainerKey.addPastryUseCase)
const { savingState, savedData, save } = useSaving<void>()

const newName = ref('')

const savePastry = async () => {
  await save(() => {
    return addPastryUseCase.execute(newName.value)
  })

  switch (savingState.value) {
    case SavingState.Success:
      emit('added')
      break;
    default:
      break;
  }
  
}

interface Props {
  pastries: Pastry[]
}

const emit = defineEmits(['added'])

defineProps<Props>()
</script>
