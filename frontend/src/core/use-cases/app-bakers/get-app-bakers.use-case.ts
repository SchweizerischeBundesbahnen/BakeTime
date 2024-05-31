import type { AppBaker } from '../../models/appbaker'
import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type { ApiResponse } from '../remote-use-case-proxy'

export default class GetAppBakersUseCase {
  constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {}

  public async execute(): Promise<ApiResponse<AppBaker[], any>> {
    const dto = await this.remoteUseCaseProxy.execute<Record<string, never>, AppBaker[], string>(
      'appbakers',
      'get',
      {}
    )

    return dto
  }
}
