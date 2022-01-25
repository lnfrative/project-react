import { BackendResponse } from 'interfaces'
import { BackendRequestMethodsAllowed } from 'types'

interface ResponserArgs {
	endpoint?: string
	params?: Record<string, string>
	id?: string
	method?: BackendRequestMethodsAllowed
}

type Responser = (args: ResponserArgs) => BackendResponse | undefined

export default Responser
