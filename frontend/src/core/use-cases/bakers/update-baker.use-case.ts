import type { Baker } from '@/core/models/baker'
import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type {ApiResponse, BakerInput} from '../remote-use-case-proxy'

export default class UpdateBakerUseCase {
    constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {
    }

    public async execute(baker: Baker): Promise<ApiResponse<any, any>> {
        const resp = await this.remoteUseCaseProxy.execute<BakerInput, Record<string, never>, string>(
            'bakers/' + baker.id,
            'put',
            {
                name: baker.name,
                quota: baker.quota,
                flavours: baker.flavours,
                pastries: baker.pastries
            }
        )

        return resp
    }
}
