// utilities
import { resources, readCookie, requestId } from 'utilities'
import { Stage, BackendResponse, QueueCallback } from 'interfaces'
import { Responser, BackendRequestMethodsAllowed, Requester } from 'types'
// endregion

interface BackendMethods<T> {
  get: T,
  post: T,
  put: T,
  delete: T,
}

interface BackendResponser extends Record<string, Responser> {}
interface BackendRequester extends BackendMethods<Requester> {}

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

function requestCallback(
  path: string,
  method: BackendRequestMethodsAllowed,
  params?: Record<string, string>,
) {
  return () => {
    const options: RequestInit = {}
    if (method !== 'get') {
      options.body = JSON.stringify(params)
    }
    options.credentials = 'include'
    options.method = method
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      nonce: Math.trunc(new Date().getTime() / 1000).toString(),
      'X-CSRF-TOKEN': readCookie('XSRF-TOKEN'),
    }
    return fetch(path, options)
  }
}

function requester(stage: Stage<State>, method: BackendRequestMethodsAllowed): Requester {
  return (args: {
    endpoint: string, params?: Record<string, string>, updateCache?: boolean, label?: string,
  }) => {
    const { state } = stage
    const {
      endpoint, params, updateCache, label,
    } = args

    const searchParams = (new URLSearchParams(params)).toString()
    const urlParams = `${endpoint}${searchParams ? `?${searchParams}` : ''}`
    const id = requestId(method, endpoint, params)
    const [inQueue] = state.queueCallbacks?.filter((queueCallback) => queueCallback.id === id) ?? []

    if (
      (updateCache || !state.store?.get(id))
      && state.queueCallbacks
      && !inQueue
      && stage.state.queueCallbacks
    ) {
      const path = `${resources.path.backendUrlBase}${method === 'get' ? urlParams : endpoint}`
      const callback = requestCallback(path, method, params)
      stage.state.queueCallbacks.push({
        callback, method, endpoint, params, id, label,
      })
      stage.commitState({})
    }
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
      store: (store || new Map<string, BackendResponse>()).set(id, response),
    })
  }
}

function responser(stage: Stage<State>, method: BackendRequestMethodsAllowed): Responser {
  return (args: {
    endpoint?: string, params?: Record<string, string>, id?: string,
  }) => {
    const { endpoint, params } = args
    const { state } = stage

    if (!state.store) return undefined
    if (args.id) return state.store.get(args.id)
    if (!endpoint) return undefined
    const id = requestId(method, endpoint, params)
    return state.store.get(id)
  }
}

function genRequest(stage: Stage<State>): BackendRequester {
  return {
    get: requester(stage, 'get'),
    post: requester(stage, 'post'),
    put: requester(stage, 'put'),
    delete: requester(stage, 'put'),
  }
}

function genResponse(stage: Stage<State>): BackendResponser {
  return {
    get: responser(stage, 'get'),
    post: responser(stage, 'post'),
    put: responser(stage, 'put'),
    delete: responser(stage, 'delete'),
  }
}

export {
  loader,
  genRequest,
  genResponse,
  initialState,
}
