import { BackendCallbacks, QueueCallback } from '@/utilities/Interfaces'
import { Responser, Requester } from '@/utilities/Types'

interface ContextBackend {
  response: BackendCallbacks<Responser>,
  request: BackendCallbacks<Requester>,
  loading?: QueueCallback,
}

export default ContextBackend
