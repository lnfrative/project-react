// stores
import { store } from 'stores'

// utilities
import { fetcher, resources } from 'utilities'

// actions
import { setSessionUser, setSessionStatus } from 'stores/SessionSlice'

export async function fetchSession() {
  const { data } = await fetcher({
    url: resources.ep.api.get.user,
    method: 'get',
  })
  
  if (data) {
    store.dispatch(setSessionUser(data))
    store.dispatch(setSessionStatus('authenticated'))
  } else {
    store.dispatch(setSessionStatus('unauthenticated'))
  }
}