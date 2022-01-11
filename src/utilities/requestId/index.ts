import { BackendRequestMethodsAllowed } from 'types'

function requestId(
  method: BackendRequestMethodsAllowed, endpoint: string, params?: Record<string, string>,
) {
  const searchParams = (new URLSearchParams(params)).toString()
  const urlParams = `${endpoint}${searchParams ? `?${searchParams}` : ''}`
  const id = `${method}:${urlParams}`
  return id
}

export default requestId
