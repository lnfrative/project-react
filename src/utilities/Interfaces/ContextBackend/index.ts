import { BackendRequestMethodsAllowed, Responser, Requester } from '@/utilities/Types'

interface ContextBackend {
  response: Map<BackendRequestMethodsAllowed, Responser>,
  request: Map<BackendRequestMethodsAllowed, Requester>
}

export default ContextBackend
