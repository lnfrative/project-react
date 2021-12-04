// utilities
import { resources } from '@/utilities'
import { ContextResponseState, Stage } from '@/utilities/Interfaces'
// endregion

const initialState: ContextResponseState = {
  store: {},
}

function extractCookie(cookieName: string): String {
  const { cookie } = document
  if (cookie.indexOf(cookieName) === -1) return ''
  return cookie.split(`${cookieName}=`)[1].split(';')[0]
}

function requester(stage: Stage<ContextResponseState>, method: 'GET'|'POST'|'PUT'|'DELETE') {
  return async (args: {
    endpoint: string, params?: Record<string, string>, updateCache?: boolean
  }) => {
    const { endpoint, params, updateCache } = args
    const requestInit: RequestInit = {}
    requestInit.method = method
    requestInit.headers = {
      Authorization: `Bearer ${extractCookie('access_token')}`,
      Accept: 'application/json',
      'X-CSRF-TOKEN': stage.state.store?.['GET:/api/user/csrf']?.data,
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

    const requested = await fetch(`${resources.path.base}${method === 'GET' ? urlParams : endpoint}`, requestInit)
    const response = await requested.json()
    state.store[key] = response
    stage.commitState({ store: state.store })
    return state.store[key]
  }
}

function genRequest(stage: Stage<ContextResponseState>) {
  return {
    get: requester(stage, 'GET'),
    post: requester(stage, 'POST'),
    put: requester(stage, 'PUT'),
    delete: requester(stage, 'DELETE'),
  }
}

export {
  genRequest,
  initialState,
}
