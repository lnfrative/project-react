// utilities
import { resources } from '@/utilities'
import { Stage } from '@/utilities/Interfaces'
// endregion

interface State {
  store?: Object,
}

const initialState: State = {
  store: {},
}

function extractCookie(cookieName: string): string {
  const { cookie } = document
  if (cookie.indexOf(cookieName) === -1) return ''
  return cookie.split(`${cookieName}=`)[1].split(';')[0]
}

function requester(stage: Stage<State>, method: 'GET'|'POST'|'PUT'|'DELETE') {
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

function responser(stage: Stage<State>, method: 'GET'|'POST'|'PUT'|'DELETE') {
  return (args: {
    endpoint: string, params?: Record<string, string>,
  }) => {
    const { endpoint, params } = args
    const { state } = stage

    if (!state.store) return null
    const searchParams = new URLSearchParams(params)
    const urlParams = `${endpoint}${searchParams.toString()}`
    const key = `${method}:${urlParams}`
    return state.store[key]
  }
}

function genRequest(stage: Stage<State>) {
  return {
    get: requester(stage, 'GET'),
    post: requester(stage, 'POST'),
    put: requester(stage, 'PUT'),
    delete: requester(stage, 'DELETE'),
  }
}

function genResponse(stage: Stage<State>) {
  return {
    get: responser(stage, 'GET'),
    post: responser(stage, 'POST'),
    put: responser(stage, 'PUT'),
    delete: responser(stage, 'DELETE'),
  }
}

export {
  genRequest,
  genResponse,
  initialState,
}
