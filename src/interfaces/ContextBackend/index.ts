import { BackendCallbacks, QueueCallback } from 'interfaces'
import { Responser, Requester, BackendRequestMethodsAllowed } from 'types'

interface ContextBackend {
	response: Record<BackendRequestMethodsAllowed, Responser>
	request: BackendCallbacks<Requester>
	loading?: QueueCallback
}

export default ContextBackend
