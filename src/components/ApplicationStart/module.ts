// stores
import { store } from 'stores'

// utilities
import { fetcher, resources } from 'utilities'

// actions
import { setSessionUser, setSessionStatus, setSessionBalance } from 'stores/SessionSlice'

export async function fetchBalanace() {
  const { data } = await fetcher({
    url: resources.ep.api.get.userBalance,
    method: 'get',
  })

  if (data) {
    store.dispatch(setSessionBalance(data))
  }
}

export async function fetchSession() {
  const { data } = await fetcher({
    url: resources.ep.api.get.user,
    method: 'get',
  })
  
  if (data) {
    store.dispatch(setSessionUser(data))
    store.dispatch(setSessionStatus('authenticated'))

    fetchBalanace()
  } else {
    store.dispatch(setSessionStatus('unauthenticated'))
  }
}