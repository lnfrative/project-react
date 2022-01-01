// utilities
import { resources } from '@/utilities'
import { Stage, BackendResponse } from '@/utilities/Interfaces'
import { Responser, BackendRequestMethodsAllowed, Requester } from '@/utilities/Types'
// endregion

interface BackendMethods<T> {
  get: T,
  post: T,
  put: T,
  delete: T,
}

interface BackendResponser extends BackendMethods<Responser> {}
interface BackendRequester extends BackendMethods<Requester> {}

interface QueueCallback {
  id: string,
  callback: () => Promise<Response>,
  method: BackendRequestMethodsAllowed,
  endpoint: string,
  params?: Record<string, string>,
}

interface State {
  store?: Map<string, BackendResponse>,
  queueCallbacks?: QueueCallback[],
  status?: 'LOADING' | 'EMPTY',
  loading?: QueueCallback,
}

const initialState: State = {
  store: undefined,
  queueCallbacks: [],
  status: 'EMPTY',
  loading: undefined,
}

function extractCookie(cookieName: string): string {
  const { cookie } = document
  if (cookie.indexOf(cookieName) === -1) return ''
  return cookie.split(`${cookieName}=`)[1].split(';')[0]
}

function requester(stage: Stage<State>, method: BackendRequestMethodsAllowed): Requester {
  return (args: {
    endpoint: string, params?: Record<string, string>, updateCache?: boolean
  }) => {
    const { state } = stage
    const { endpoint, params, updateCache } = args
  
    const searchParams = (new URLSearchParams(params)).toString()
    const urlParams = `${endpoint}${searchParams ? `?${searchParams}` : ''}`
    const id = `${method}:${urlParams}`
    const [inQueue] = state.queueCallbacks?.filter(queueCallback => queueCallback.id === id) ?? []

    if ((updateCache || !state.store?.get(id)) && state.queueCallbacks && !inQueue) {
      const path = `${resources.path.backendUrlBase}${method === 'GET' ? urlParams : endpoint}`
      const callback = requestCallback(path, stage, method, params)
      stage.state.queueCallbacks?.push({ callback, method, endpoint, params, id })
      stage.commitState({})
    }
  }
}

function requestCallback(
  path: string,
  stage: Stage<State>,
  method: BackendRequestMethodsAllowed,
  params?: Record<string, string>,
) {
  return () => {
    const options: RequestInit = {}
    if (method !== 'GET') {
      options.body = JSON.stringify(params)
    }
    options.credentials = 'include'
    options.method = method
    options.headers = {
      Authorization: `Bearer ${extractCookie('access_token')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': `${stage.state.store?.get(`GET:${resources.endpoints.get.userCsrf}`)?.data}`,
      'nonce': `${~~(new Date().getTime() / 1000)}`
    }
    return fetch(path, options)
  }
}

async function loader(stage: Stage<State>) {
  const { loading, store } = stage.state
  if (loading) {
    const { callback, id } = loading
    const requested = await callback()
    const response: BackendResponse = await requested.json()

    stage.commitState({
      queueCallbacks: stage.state.queueCallbacks?.slice(1),
      loading: undefined,
      store: (store ? store : new Map<string, BackendResponse>()).set(id, response),
    })
  }
}

function responser(stage: Stage<State>, method: BackendRequestMethodsAllowed): Responser {
  return (args: {
    endpoint: string, params?: Record<string, string>,
  }) => {
    const { endpoint, params } = args
    const { state } = stage

    if (!state.store) return undefined
    const searchParams = (new URLSearchParams(params)).toString()
    const urlParams = `${endpoint}${searchParams ? `?${searchParams}` : ''}`
    const id = `${method}:${urlParams}`
    return state.store.get(id)
  }
}

function genRequest(stage: Stage<State>): BackendRequester {
  return {
    get: requester(stage, 'GET'),
    post: requester(stage, 'POST'),
    put: requester(stage, 'PUT'),
    delete: requester(stage, 'DELETE'),
  }
}

function genResponse(stage: Stage<State>): BackendResponser {
  return {
    get: responser(stage, 'GET'),
    post: responser(stage, 'POST'),
    put: responser(stage, 'PUT'),
    delete: responser(stage, 'DELETE'),
  }
}

export {
  loader,
  genRequest,
  genResponse,
  initialState,
}
