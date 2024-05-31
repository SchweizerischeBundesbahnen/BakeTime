import type {
  HttpClient,
  HttpRequestConfig,
  HttpResponse
} from '@/core/http/http-client'
import type { AxiosError } from 'axios'
import axios from 'axios'

export default class AxiosHttpClient implements HttpClient {
  async get(url: string, config?: HttpRequestConfig): Promise<HttpResponse> {
    try {
      return await axios.get(url, config)
    } catch (error: any) {
      this.reloadOn401(error)

      throw error
    }
  }

  async post(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): Promise<HttpResponse> {
    try {
      return await axios.post(url, data, config)
    } catch (error: any) {
      this.reloadOn401(error)

      throw error
    }
  }

  async put(
    url: string,
    data?: any,
    config?: HttpRequestConfig
  ): Promise<HttpResponse> {
    try {
      return await axios.put(url, data, config)
    } catch (error: any) {
      this.reloadOn401(error)

      throw error
    }
  }

  async delete(url: string, config?: HttpRequestConfig): Promise<HttpResponse> {
    try {
      return await axios.delete(url, config)
    } catch (error: any) {
      this.reloadOn401(error)

      throw error
    }
  }

  async request(config: HttpRequestConfig): Promise<HttpResponse> {
    try {
      return await axios.request(config)
    } catch (error: any) {
      this.reloadOn401(error)

      throw error
    }
  }

  private reloadOn401(error: AxiosError) {
    if (error.response?.status === 401) {
      // window.location.reload()
    }
  }
}
