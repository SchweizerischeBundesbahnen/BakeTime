<template>
  <LoadingWrapper :state="state" :reload="doReload">
    <PastriesListView :pastries="data" @added="doReload"></PastriesListView>
  </LoadingWrapper>
</template>

<script setup lang="ts">
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import LoadingWrapper from '@/shared/components/LoadingWrapper.vue'
import PastriesListView from './PastriesListView.vue'
import { useLoading } from '../../shared/functions/use-loading'
import type { Pastry } from '../../core/models/pastry'

const getPastriesListUseCase = injectStrict(AppContainerKey.getPastriesUseCase)

const { state, data, load } = useLoading<Pastry[]>()

load(() => {
  return getPastriesListUseCase.execute()
})

const doReload = () => {
  load(() => {
    return getPastriesListUseCase.execute()
  })
}
</script>
