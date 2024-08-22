<template>
  <div id="listView">
    <div class="flex flex-col gap-2 grow">
      <div v-for="baker of bakers" :key="baker.id" @click="selectBaker(baker)" class="flex flex-row gap-2">
        <div>{{ baker.name }}</div>
        <div>{{ baker.quota }}</div>
        <div>{{ baker.flavours?.join(' | ') || 'No flavours available' }}</div>
        <div>
          {{ baker.pastries?.map((e) => e.name).join(' | ') || 'No pastries available' }}
        </div>
      </div>
      <div class="flex flex-row gap-5 mt-5">
      <input v-model="newName" placeholder="New Baker Name" class="text-black" />
      <input v-model="newQuota" placeholder="New Baker Quota" class="text-black" />
      <PrimaryButton v-if="selectedBaker == null" :disabled="!validate(newName, newQuota)" @click="saveBaker">Create</PrimaryButton>
      <div v-else>
        <PrimaryButton :disabled="newName.length <= 0" @click="updateBaker">Update</PrimaryButton>
        <PrimaryButton @click="deleteBaker">Delete</PrimaryButton>
      </div>
    </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import PrimaryButton from '@/shared/components/PrimaryButton.vue'
import type { Baker } from '../../core/models/baker'
import { SavingState, useSaving } from '../../shared/functions/use-saving'
import { ResponseState } from '@/core/use-cases/remote-use-case-proxy'

const addBakerUseCase = injectStrict(AppContainerKey.addBakerUseCase)
const updateBakerUseCase = injectStrict(AppContainerKey.updateBakerUseCase)
const deleteBakerUseCase = injectStrict(AppContainerKey.deleteBakerUseCase)
const { savingState, save } = useSaving<void>()

const newName = ref('')
const newQuota = ref('1.0')

const selectedBaker: Ref<Baker | null> = ref(null)

interface Props {
  bakers: Baker[]
}

const saveBaker = async () => {
  await save(() => {
    return addBakerUseCase.execute(newName.value, newQuota.value)
  })

  switch (savingState.value) {
    case SavingState.Success:
      emit('added')
      break;
    default:
      break;
  }
}

const selectBaker = (baker: Baker) => {
  if (selectedBaker.value?.id == baker.id) {
    selectedBaker.value = null;
    newName.value = ''
  } else {
    selectedBaker.value = baker
    newName.value = baker.name
    newQuota.value = baker.quota
  }
}

const updateBaker = async () => {
  const response = await updateBakerUseCase.execute({
    id:selectedBaker.value!.id, 
    name: newName.value, 
    quota: newQuota.value,
    flavours: [],
    pastries: []
  })
  if (response.status === ResponseState.Success) {
    emit('updated')
  }
}

const deleteBaker = async () => {
  const response = await deleteBakerUseCase.execute(selectedBaker.value!.id)
  if (response.status === ResponseState.Success) {
    emit('deleted')
  }
}

function validate(newName: string, newQuota: string) {
  return (newName.length > 0 && inRange(Number(newQuota), 0.0, 1.0))
}

function inRange(x: number, min: number, max: number) {
    return ((x-min)*(x-max) <= 0);
}

const emit = defineEmits(['added', 'updated', 'deleted'])

defineProps<Props>()
</script>../../core/models/baker