import type { HttpClient } from '@/core/http/http-client'
import type { AxiosRequestConfig, ResponseType as AxiosResponseType } from 'axios'
import type { Pastry } from '../models/pastry'

export enum ResponseState {
  Success,
  Error
}

export class TimeoutError extends Error {}

export interface ApiResponse<TOutput, EOutput> {
  status: ResponseState
  data?: TOutput
  message?: ApiResponseError[]
  error?: string
  errorData?: EOutput
}

export interface ApiResponseError {
  property: string
  constraints: Map<string, string>
}

export interface NamedInput {
  name: string
}

export interface BakerInput {
  name: string
  quota: string
  flavours: string[]
  pastries: Pastry[]
}

export default class RemoteUseCaseProxy {
  constructor(private httpClient: HttpClient) {}

  public async execute<TInput, TOutput, EOutput>(
    endpoint: string,
    method: 'get' | 'post' | 'put' | 'delete',
    input: TInput,
    responseType?: AxiosResponseType
  ): Promise<ApiResponse<TOutput, EOutput>> {
    const requestConfig: AxiosRequestConfig = {
      method,
      responseType: responseType,
      url: '/api/' + this.createUrl(endpoint, input)
    }

    if (method !== 'get' && method !== 'delete') {
      requestConfig.data = input
    } else {
      requestConfig.timeout = 10000
      requestConfig.timeoutErrorMessage = 'Server unavailable'
    }

    try {
      const response = await this.httpClient.request(requestConfig)

      const output = response.data
      return { status: ResponseState.Success, data: output }
    } catch (error: any) {
      if (error.message == 'Server unavailable') {
        throw new TimeoutError()
      }

      const errorResponse = error.response?.data
      let apiResponseError: ApiResponseError[]
      if (typeof errorResponse?.message === 'string' || errorResponse?.message instanceof String) {
        apiResponseError = [errorResponse?.message]
      } else {
        apiResponseError = errorResponse?.message
      }
      return {
        status: ResponseState.Error,
        message: apiResponseError,
        error: errorResponse.error,
        errorData: errorResponse
      }
    }
  }

  private createUrl<TInput>(endpoint: string, input: TInput): string {
    const params = endpoint.match(/:[^/]*/g)

    return (params ?? []).reduce(
      (path, param) => path.replace(param, (input as any)[param.replace(':', '')] ?? ''),
      endpoint
    )
  }
}
