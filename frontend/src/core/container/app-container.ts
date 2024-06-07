import AxiosHttpClient from '@/core/http/axios-http-client'
import type { HttpClient } from '@/core/http/http-client'
import type { ContainerDefinition } from '@/core/plugins/container'
import RemoteUseCaseProxy from '@/core/use-cases/remote-use-case-proxy'
import type { InjectionKey } from 'vue'
import GetAppBakersUseCase from '../use-cases/app-bakers/get-app-bakers.use-case'
import GetPastriesUseCase from '../use-cases/pastries/get-pastries.use-case'
import AddPastryUseCase from '../use-cases/pastries/add-pastry.use-case'

export const AppContainerKey = {
  httpClient: Symbol('httpClient') as InjectionKey<HttpClient>,
  remoteUseCaseProxy: Symbol('remoteUseCaseProxy') as InjectionKey<RemoteUseCaseProxy>,
  getAppBakersUseCase: Symbol('getAppBakersUseCase') as InjectionKey<GetAppBakersUseCase>,
  getPastriesUseCase: Symbol('getPastriesUseCase') as InjectionKey<GetPastriesUseCase>,
  addPastryUseCase: Symbol('addPastryUseCase') as InjectionKey<AddPastryUseCase>
}

const appContainerDefinition: ContainerDefinition<typeof AppContainerKey> = {
  httpClient() {
    return new AxiosHttpClient()
  },
  remoteUseCaseProxy({ httpClient }) {
    return new RemoteUseCaseProxy(httpClient)
  },
  getAppBakersUseCase({ remoteUseCaseProxy }) {
    return new GetAppBakersUseCase(remoteUseCaseProxy)
  },
  getPastriesUseCase({ remoteUseCaseProxy }) {
    return new GetPastriesUseCase(remoteUseCaseProxy)
  },
  addPastryUseCase({ remoteUseCaseProxy }) {
    return new AddPastryUseCase(remoteUseCaseProxy)
  }
}

export default appContainerDefinition
