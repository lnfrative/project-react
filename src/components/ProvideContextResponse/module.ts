// utilities
import { ContextResponseState, Stage } from '@/utilities/Interfaces'
// endregion

const initialState: ContextResponseState = {
  store: {},
}

function requester(stage: Stage<ContextResponseState>, method: 'GET'|'POST'|'PUT'|'DELETE') {
  return async (endpoint, params, updateCache) => {
    const requestInit: RequestInit = {}
    requestInit.method = method
    requestInit.body = JSON.stringify(params)
    requestInit.headers = {
      'Content-Type': 'application/json',
    }

    const searchParams = new URLSearchParams(params)
    const urlParams = `${endpoint}${searchParams.toString()}`

    const { state } = stage
    const key = `${method}:${urlParams}`

    if (!state.store) return null
    if (!updateCache && state.store[key]) return state.store[key]

    const response = await fetch(endpoint, requestInit)
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
