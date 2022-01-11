import { BackendResponse } from 'utilities/Interfaces'

interface ResponserArgs {
  endpoint?: string, params?: Record<string, string>, id?: string,
}

type Responser = (args: ResponserArgs) => BackendResponse | undefined

export default Responser
