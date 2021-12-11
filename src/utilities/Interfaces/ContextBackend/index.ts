import { BackendCallbacks } from '@/utilities/Interfaces'
import { Responser, Requester } from '@/utilities/Types'

interface ContextBackend {
  response: BackendCallbacks<Responser>,
  request: BackendCallbacks<Requester>
}

export default ContextBackend
