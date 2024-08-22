import AxiosHttpClient from '@/core/http/axios-http-client'
import type { HttpClient } from '@/core/http/http-client'
import type { ContainerDefinition } from '@/core/plugins/container'
import RemoteUseCaseProxy from '@/core/use-cases/remote-use-case-proxy'
import type { InjectionKey } from 'vue'
import GetBakersUseCase from '../use-cases/bakers/get-bakers.use-case'
import AddBakerUseCase from '../use-cases/bakers/add-baker.use-case'
import GetPastriesUseCase from '../use-cases/pastries/get-pastries.use-case'
import AddPastryUseCase from '../use-cases/pastries/add-pastry.use-case'
import UpdatePastryUseCase from '../use-cases/pastries/update-pastry.use-case'
import DeletePastryUseCase from '../use-cases/pastries/delete-pastry.use-case'
import UpdateBakerUseCase from '../use-cases/bakers/update-baker.use-case'
import DeleteBakerUseCase from '../use-cases/bakers/delete-baker.use-case'

export const AppContainerKey = {
  httpClient: Symbol('httpClient') as InjectionKey<HttpClient>,
  remoteUseCaseProxy: Symbol('remoteUseCaseProxy') as InjectionKey<RemoteUseCaseProxy>,
  getBakersUseCase: Symbol('getAppBakersUseCase') as InjectionKey<GetBakersUseCase>,
  addBakerUseCase: Symbol('addBakerUseCase') as InjectionKey<AddBakerUseCase>,
  updateBakerUseCase: Symbol('updateBakerUseCase') as InjectionKey<UpdateBakerUseCase>,
  deleteBakerUseCase: Symbol('deleteBakerUseCase') as InjectionKey<DeleteBakerUseCase>,
  getPastriesUseCase: Symbol('getPastriesUseCase') as InjectionKey<GetPastriesUseCase>,
  addPastryUseCase: Symbol('addPastryUseCase') as InjectionKey<AddPastryUseCase>,
  updatePastryUseCase: Symbol('updatePastryUseCase') as InjectionKey<UpdatePastryUseCase>,
  deletePastryUseCase: Symbol('deletePastryUseCase') as InjectionKey<DeletePastryUseCase>
}

const appContainerDefinition: ContainerDefinition<typeof AppContainerKey> = {
  httpClient() {
    return new AxiosHttpClient()
  },
  remoteUseCaseProxy({ httpClient }) {
    return new RemoteUseCaseProxy(httpClient)
  },
  getBakersUseCase({ remoteUseCaseProxy }) {
    return new GetBakersUseCase(remoteUseCaseProxy)
  },
  addBakerUseCase({ remoteUseCaseProxy }) {
    return new AddBakerUseCase(remoteUseCaseProxy)
  },
  updateBakerUseCase({ remoteUseCaseProxy }) {
    return new UpdateBakerUseCase(remoteUseCaseProxy)
  },
  deleteBakerUseCase({ remoteUseCaseProxy }) {
    return new DeleteBakerUseCase(remoteUseCaseProxy)
  },
  getPastriesUseCase({ remoteUseCaseProxy }) {
    return new GetPastriesUseCase(remoteUseCaseProxy)
  },
  addPastryUseCase({ remoteUseCaseProxy }) {
    return new AddPastryUseCase(remoteUseCaseProxy)
  },
  updatePastryUseCase({ remoteUseCaseProxy }) {
    return new UpdatePastryUseCase(remoteUseCaseProxy)
  },
  deletePastryUseCase({ remoteUseCaseProxy }) {
    return new DeletePastryUseCase(remoteUseCaseProxy)
  }
}

export default appContainerDefinition
