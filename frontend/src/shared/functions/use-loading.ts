import { ref } from 'vue'
import type { Ref } from 'vue'
import {
  ResponseState,
  TimeoutError,
  type ApiResponse
} from '@/core/use-cases/remote-use-case-proxy'

export enum LoadingState {
  Loading,
  Reloading,
  Success,
  NotFound,
  SystemError,
  Forbidden,
  Timeout
}

export const useLoading = <Type>(): {
  state: Ref<LoadingState>
  data: Ref<Type>
  load: (f: () => Promise<ApiResponse<Type, any>>) => void
  reload: () => void
} => {
  const state = ref(LoadingState.Loading)
  const data = ref()

  const _load = async function (f: () => Promise<ApiResponse<Type, any>>) {
    try {
      const result = await f()
      switch (result.status) {
        case ResponseState.Success:
          data.value = result.data
          state.value = LoadingState.Success
          break
        case ResponseState.Error:
          if (result.errorData?.statusCode?.toString()[0] == '5') {
            state.value = LoadingState.SystemError
          } else if (result.errorData?.statusCode == 403) {
            state.value = LoadingState.Forbidden
          } else {
            state.value = LoadingState.NotFound
          }

          break
      }
    } catch (error) {
      if (error instanceof TimeoutError) {
        state.value = LoadingState.Timeout
      } else {
        state.value = LoadingState.SystemError
        console.error('Request Error: ' + error)
      }
    }
  }

  let loadingFuction: () => Promise<ApiResponse<Type, any>>

  const load = async (f: () => Promise<ApiResponse<Type, any>>) => {
    loadingFuction = f
    state.value = LoadingState.Loading
    return _load(f)
  }

  const reload = async () => {
    state.value = LoadingState.Reloading
    if (!loadingFuction) {
      throw new Error('Try to reload, but load was never called.')
    }
    _load(loadingFuction)
  }

  return { state, data, load, reload }
}
