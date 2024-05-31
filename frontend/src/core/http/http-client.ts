/**
 * Import axios type definitions and use them for our base interfaces.
 */
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders
} from 'axios'

export interface HttpClient {
  get(url: string, config?: HttpRequestConfig): Promise<HttpResponse>

  post(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): Promise<HttpResponse>

  put(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): Promise<HttpResponse>

  delete(url: string, config?: HttpRequestConfig): Promise<HttpResponse>

  request(config: AxiosRequestConfig): Promise<HttpResponse>
}

export type HttpRequestConfig = AxiosRequestConfig

export type HttpRequestHeaders = RawAxiosRequestHeaders

export type HttpResponse = AxiosResponse

export type HttpError = AxiosError
