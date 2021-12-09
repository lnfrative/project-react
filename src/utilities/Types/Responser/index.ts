import { BackendResponse } from '@/utilities/Interfaces'

interface ResponserArgs {
  endpoint: string, params?: Record<string, string>
}

type Responser = (args: ResponserArgs) => BackendResponse | undefined

export default Responser
