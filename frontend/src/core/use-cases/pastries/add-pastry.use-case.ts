import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type { ApiResponse } from '../remote-use-case-proxy'

export default class AddPastryUseCase {
  constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {}

  public async execute(pastryName: string): Promise<ApiResponse<any, any>> {
    const resp = await this.remoteUseCaseProxy.execute<
      { name: string },
      Record<string, never>,
      string
    >('pastries', 'post', {
      name: pastryName
    })

    return resp
  }
}
