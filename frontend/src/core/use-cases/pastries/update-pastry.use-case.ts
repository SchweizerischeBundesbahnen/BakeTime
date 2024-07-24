import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type {ApiResponse, NamedInput} from '../remote-use-case-proxy'

export default class UpdatePastryUseCase {
    constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {
    }

    public async execute(pastryId: string, pastryName: string): Promise<ApiResponse<any, any>> {
        const resp = await this.remoteUseCaseProxy.execute<NamedInput, Record<string, never>, string>(
            'pastries/' + pastryId,
            'put',
            {name: pastryName}
        )

        return resp
    }
}
