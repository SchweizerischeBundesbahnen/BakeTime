<template>
  <template v-if="state == LoadingState.Success || state == LoadingState.Reloading">
    <div
      v-if="state == LoadingState.Reloading"
      class="absolute top-0 bottom-0 left-0 right-0 bg-white/20"
    ></div>
    <slot />
  </template>
  <LoadingMessage v-else-if="state == LoadingState.Loading"></LoadingMessage>
  <Timeout v-else-if="state == LoadingState.Timeout" @reload="reload"></Timeout>
  <ErrorScreen v-else :type="errorType(state)" :custom-messages="customErrorMessages"></ErrorScreen>
</template>

<script setup lang="ts">
import { LoadingState } from '@/shared/functions/use-loading'
import Timeout from './Timeout.vue'
import LoadingMessage from './LoadingMessage.vue'
import ErrorScreen from './ErrorScreen.vue'

interface Props {
  state: LoadingState
  customErrorMessages?: Map<'notFound' | 'systemError' | 'forbidden', string>
}

defineProps<Props>()

const emits = defineEmits(['reload'])
const reload = () => {
  emits('reload')
}

const errorType = (state: LoadingState) => {
  switch (state) {
    case LoadingState.Forbidden:
      return 'forbidden'
    case LoadingState.SystemError:
      return 'systemError'
    default:
      return 'notFound'
  }
}
</script>
