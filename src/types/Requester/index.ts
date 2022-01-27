import { BackendRequestMethodsAllowed } from 'types'

interface RequesterArgs {
	endpoint: string
	params?: Record<string, string>
	updateCache?: boolean
	label?: string
	method: BackendRequestMethodsAllowed
}

type Requester = (args: RequesterArgs) => void

export default Requester
