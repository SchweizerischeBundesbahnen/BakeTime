import type { Pastry } from '@/core/models/pastry'
import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type { ApiResponse } from '../remote-use-case-proxy'

export default class GetPastriesUseCase {
  constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {}

  public async execute(): Promise<ApiResponse<Pastry[], any>> {
    const dto = await this.remoteUseCaseProxy.execute<Record<string, never>, Pastry[], string>(
      'pastries',
      'get',
      {}
    )

    return dto
  }
}
