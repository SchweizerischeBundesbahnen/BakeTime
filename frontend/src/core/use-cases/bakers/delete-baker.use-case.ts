import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type {ApiResponse} from '../remote-use-case-proxy'

export default class DeleteBakerUseCase {
    constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {
    }

    public async execute(bakerId: string): Promise<ApiResponse<any, any>> {
        const resp = await this.remoteUseCaseProxy.execute<Record<string, never>, Record<string, never>, string>(
            'bakers/' + bakerId,
            'delete',
            {}
        )

        return resp
    }
}
