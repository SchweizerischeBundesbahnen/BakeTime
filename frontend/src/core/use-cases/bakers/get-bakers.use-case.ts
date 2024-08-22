import type { Baker } from '../../models/baker'
import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type { ApiResponse } from '../remote-use-case-proxy'

export default class GetBakersUseCase {
  constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {}

  public async execute(): Promise<ApiResponse<Baker[], any>> {
    const dto = await this.remoteUseCaseProxy.execute<Record<string, never>, Baker[], string>(
      'bakers',
      'get',
      {}
    )

    return dto
  }
}
