import { BackendCallbacks, QueueCallback } from 'interfaces'
import { Responser, Requester } from 'types'

interface ContextBackend {
	response: Responser
	request: BackendCallbacks<Requester>
	loading?: QueueCallback
}

export default ContextBackend
