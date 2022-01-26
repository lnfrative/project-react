import { BackendRequestMethodsAllowed } from 'types'

interface ResponserArgs {
	endpoint?: string
	params?: Record<string, string>
	id?: string
	method?: BackendRequestMethodsAllowed
}

export default ResponserArgs
