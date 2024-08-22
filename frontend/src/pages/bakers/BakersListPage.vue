<template>
  <LoadingWrapper :state="state" :reload="doReload">
    <BakersListView :bakers="data" @added="doReload" @updated="doReload" @deleted="doReload"></BakersListView>
  </LoadingWrapper>
</template>

<script setup lang="ts">
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import LoadingWrapper from '@/shared/components/LoadingWrapper.vue'
import BakersListView from './BakersListView.vue'
import { useLoading } from '../../shared/functions/use-loading'
import type { Baker } from '../../core/models/baker'

const getBakersListUseCase = injectStrict(AppContainerKey.getBakersUseCase)

const { state, data, load } = useLoading<Baker[]>()

load(() => {
  return getBakersListUseCase.execute()
})

const doReload = () => {
  load(() => {
    return getBakersListUseCase.execute()
  })
}
</script>