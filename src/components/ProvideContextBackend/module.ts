// utilities
import { resources } from '@/utilities'
import { Stage, BackendResponse } from '@/utilities/Interfaces'
import { Responser, BackendRequestMethodsAllowed, Requester } from '@/utilities/Types'
// endregion

interface State {
  store?: Map<string, BackendResponse>,
}

const initialState: State = {
  store: undefined,
}

function extractCookie(cookieName: string): string {
  const { cookie } = document
  if (cookie.indexOf(cookieName) === -1) return ''
  return cookie.split(`${cookieName}=`)[1].split(';')[0]
}

function requester(stage: Stage<State>, method: BackendRequestMethodsAllowed): Requester {
  return async (args: {
    endpoint: string, params?: Record<string, string>, updateCache?: boolean
  }) => {
    const { endpoint, params, updateCache } = args
    const requestInit: RequestInit = {}
    requestInit.credentials = 'include'
    requestInit.method = method
    requestInit.headers = {
      Authorization: `Bearer ${extractCookie('access_token')}`,
      Accept: 'application/json',
      'X-CSRF-TOKEN': extractCookie('XSRF-TOKEN'),
    }

    if (method !== 'GET') {
      requestInit.body = JSON.stringify(params)
    }

    const searchParams = new URLSearchParams(params)
    const urlParams = `${endpoint}${searchParams.toString()}`

    const { state } = stage
    const key = `${method}:${urlParams}`

    if (!state.store) return null
    if (!updateCache && state.store[key]) return state.store[key]

    const requested = await fetch(`${resources.path.backendUrlBase}${method === 'GET' ? urlParams : endpoint}`, requestInit)
    const response = await requested.json()
    state.store[key] = response
    stage.commitState({ store: state.store })
    return state.store[key]
  }
}

function responser(stage: Stage<State>, method: BackendRequestMethodsAllowed): Responser {
  return (args: {
    endpoint: string, params?: Record<string, string>,
  }) => {
    const { endpoint, params } = args
    const { state } = stage

    if (!state.store) return undefined
    const searchParams = new URLSearchParams(params)
    const urlParams = `${endpoint}${searchParams.toString()}`
    const key = `${method}:${urlParams}`
    return state.store[key]
  }
}

function genRequest(stage: Stage<State>) {
  return (new Map<BackendRequestMethodsAllowed, Requester>())
    .set('GET', requester(stage, 'GET'))
    .set('POST', requester(stage, 'POST'))
    .set('PUT', requester(stage, 'PUT'))
    .set('DELETE', requester(stage, 'DELETE'))
}

function genResponse(stage: Stage<State>) {
  return (new Map<BackendRequestMethodsAllowed, Responser>())
    .set('GET', responser(stage, 'GET'))
    .set('POST', responser(stage, 'POST'))
    .set('PUT', responser(stage, 'PUT'))
    .set('DELETE', responser(stage, 'DELETE'))
}

export {
  genRequest,
  genResponse,
  initialState,
}
