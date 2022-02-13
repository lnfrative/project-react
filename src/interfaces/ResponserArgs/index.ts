import { BackendRequestMethodsAllowed } from 'types'

interface ResponserArgs {
	endpoint?: string
	params?: Record<string, any>
	id?: string
	method?: BackendRequestMethodsAllowed
}

export default ResponserArgs
