import { BackendResponse } from '@/utilities/Interfaces'

interface RequesterArgs {
  endpoint: string, params?: Record<string, string>, updateCache?: boolean
}

type Requester = (args: RequesterArgs) => Promise<BackendResponse>

export default Requester
