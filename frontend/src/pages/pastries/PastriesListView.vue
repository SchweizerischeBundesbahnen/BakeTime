<template>
  <div id="listView">
    <div class="flex flex-col gap-2 grow">
      <div v-for="pastry of pastries" :key="pastry.id" class="flex flex-row gap-2">
        <div @click="selectPastry(pastry)" style="cursor: pointer" :class="{'bg-sbb-red border border-transparent text-white px-4 py-3 rounded-full': selectedPastry?.id === pastry.id}">{{ pastry.name }}</div>
      </div>
      <div class="flex flex-row gap-5 mt-5">
        <input v-model="newName" placeholder="New Pastry Name" class="text-black" />
        <PrimaryButton v-if="selectedPastry == null" :disabled="newName.length <= 0" @click="savePastry">Create</PrimaryButton>
        <div v-else>
          <PrimaryButton :disabled="newName.length <= 0" @click="updatePastry">Update</PrimaryButton>
          <PrimaryButton @click="deletePastry">Delete</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import { SavingState, useSaving } from '../../shared/functions/use-saving'
import type { Pastry } from '@/core/models/pastry'
import PrimaryButton from '@/shared/components/PrimaryButton.vue'
import { ResponseState } from '@/core/use-cases/remote-use-case-proxy'

const addPastryUseCase = injectStrict(AppContainerKey.addPastryUseCase)
const updatePastryUseCase = injectStrict(AppContainerKey.updatePastryUseCase)
const deletePastryUseCase = injectStrict(AppContainerKey.deletePastryUseCase)
const { savingState, save } = useSaving<void>()

const newName = ref('')
const selectedPastry: Ref<Pastry | null> = ref(null)

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

const selectPastry = (pastry: Pastry) => {
  if (selectedPastry.value?.id == pastry.id) {
    selectedPastry.value = null;
    newName.value = ''
  } else {
    selectedPastry.value = pastry
    newName.value = pastry.name
  }
}

const updatePastry = async () => {
  const response = await updatePastryUseCase.execute(selectedPastry.value!.id, newName.value)
  if (response.status === ResponseState.Success) {
    emit('pastryUpdated')
  }
}

const deletePastry = async () => {
  const response = await deletePastryUseCase.execute(selectedPastry.value!.id, newName.value)
  if (response.status === ResponseState.Success) {
    emit('pastryUpdated')
  }
}

interface Props {
  pastries: Pastry[]
}

const emit = defineEmits(['added', 'pastryUpdated'])

defineProps<Props>()
</script>
