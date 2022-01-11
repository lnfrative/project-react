import { BackendCallbacks, QueueCallback } from 'utilities/Interfaces'
import { Responser, Requester, BackendRequestMethodsAllowed } from 'utilities/Types'

interface ContextBackend {
  response: Record<BackendRequestMethodsAllowed, Responser>,
  request: BackendCallbacks<Requester>,
  loading?: QueueCallback,
}

export default ContextBackend
