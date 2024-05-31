import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import {
  ResponseState,
  type ApiResponse
} from '@/core/use-cases/remote-use-case-proxy'

export enum SavingState {
  Waiting,
  Saving,
  Success,
  Error
}

export const useSaving = <Type>(): {
  savingState: Ref<SavingState>
  savedData: Ref<Type>
  errors: { [key: string]: string }
  message: Ref<string | undefined>
  save: (f: () => Promise<ApiResponse<Type, string>>) => void
} => {
  const savingState = ref(SavingState.Waiting)
  const errors = reactive<{ [key: string]: string }>({})
  const message = ref<string | undefined>()
  const savedData = ref()

  const save = async function (f: () => Promise<ApiResponse<Type, string>>) {
    savingState.value = SavingState.Saving
    try {
      const result = await f()
      if (result.status == ResponseState.Success) {
        savingState.value = SavingState.Success
        if (result.data) {
          savedData.value = result.data
        }
      } else {
        savingState.value = SavingState.Error
        const errorMessages = result.message
        if (errorMessages) {
          const translatedErrors: { [key: string]: string } = {}
          errorMessages.forEach((errorMessage) => {
            const [firstConstraint] = Object.keys(errorMessage.constraints)
            translatedErrors[errorMessage.property] = 'error.' + firstConstraint
          })
          Object.assign(errors, translatedErrors || {})
        }
        message.value = result.error
      }
    } catch (error) {
      savingState.value = SavingState.Error
      console.error(error)
      return false
    }
  }

  return { savingState, savedData, message, errors, save }
}
