import type RemoteUseCaseProxy from '../remote-use-case-proxy'
import type {ApiResponse, BakerInput} from '../remote-use-case-proxy'

export default class AddBakerUseCase {
    constructor(private remoteUseCaseProxy: RemoteUseCaseProxy) {
    }

    public async execute(bakerName: string, quota: string): Promise<ApiResponse<any, any>> {
        const resp = await this.remoteUseCaseProxy.execute<BakerInput, Record<string, never>, string>(
            'bakers',
            'post',
            {
                name: bakerName,
                quota: quota,
                flavours: ['Kotlin'],
                pastries: [{
                    id: '1',
                    name: 'BakeTime'
                }]
            }
        )

        return resp
    }
}
