<template>
  <LoadingWrapper :state="state" :reload="doReload">
    <AppBakersListView :app-bakers="data"></AppBakersListView>
  </LoadingWrapper>
</template>

<script setup lang="ts">
import { AppContainerKey } from '@/core/container/app-container'
import { injectStrict } from '@/core/container/inject'
import LoadingWrapper from '@/shared/components/LoadingWrapper.vue'
import AppBakersListView from './AppBakersListView.vue'
import { useLoading } from '../../shared/functions/use-loading'
import type { AppBaker } from '../../core/models/appbaker'

const getAppBakersListUseCase = injectStrict(AppContainerKey.getAppBakersUseCase)

const { state, data, load } = useLoading<AppBaker[]>()

load(() => {
  return getAppBakersListUseCase.execute()
})

const doReload = () => {
  load(() => {
    return getAppBakersListUseCase.execute()
  })
}
</script>
