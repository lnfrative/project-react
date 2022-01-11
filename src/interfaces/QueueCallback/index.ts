import { BackendRequestMethodsAllowed } from 'types'

interface QueueCallback {
  id: string,
  callback: () => Promise<Response>,
  method: BackendRequestMethodsAllowed,
  endpoint: string,
  params?: Record<string, string>,
  label?: string,
}

export default QueueCallback
