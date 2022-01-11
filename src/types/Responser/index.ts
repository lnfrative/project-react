import { BackendResponse } from 'interfaces'

interface ResponserArgs {
  endpoint?: string, params?: Record<string, string>, id?: string,
}

type Responser = (args: ResponserArgs) => BackendResponse | undefined

export default Responser
