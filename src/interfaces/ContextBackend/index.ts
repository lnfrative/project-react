import { QueueCallback } from 'interfaces'
import { Responser, Requester } from 'types'

interface ContextBackend {
	response: Responser
	request: Requester
	loading?: QueueCallback
}

export default ContextBackend
