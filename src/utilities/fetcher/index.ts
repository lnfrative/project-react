// interfaces
import { BackendRequestMethodsAllowed } from 'types'

// utilities
import { readCookie, resources } from 'utilities'

// stores
import { store } from 'stores'

// actions
import {
	setSessionSummary,
	setSessionWallets,
	setSessionTransactions,
  setSessionUser,
  setSessionStatus,
  setSessionBalance
} from 'stores/SessionSlice'
import {
  setApiCoins,
  setApiCaptchaKey
} from 'stores/ApiSlice'

async function fetcher(props: {
  url: string,
  method: BackendRequestMethodsAllowed
  params?: Record<string, string>,
}) {
  const options: RequestInit = {}

  if (props.method !== 'get') {
    options.body = JSON.stringify(props.params)
  }

  options.credentials = 'include'
  options.method = props.method
  options.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': readCookie('XSRF-TOKEN'),
  }

  const url = new URL(props.url)

  if (props.params && props.method === 'get') {
    Object
      .entries(props.params)
      .forEach(
        ([key, value]) => url.searchParams.append(key, value)
      )
  }

  const response = await fetch(url.toString(), options)
  return response.json()
}

export async function fetchSummary() {
	const { data } = await fetcher({
		url: resources.ep.api.get.summary,
		method: 'get',
	})

	if (data) {
		store.dispatch(setSessionSummary(data))
	}
}

export async function fetchWallets() {
  store.dispatch(setSessionWallets({
    status: 'loading',
    data: [],
  }))

  try {
    const { data } = await fetcher({
      url: resources.ep.api.get.wallets,
      method: 'get',
    })
  
    store.dispatch(setSessionWallets({
      status: 'loaded',
      data,
    }))
  } catch (e) {
    store.dispatch(setSessionWallets({
      status: 'error',
      data: []
    }))
  }
}

export async function fetchTransactions(params: Record<string, any>) {
	const { data } = await fetcher({
		url: resources.ep.api.get.transactions,
		method: 'get',
    params,
	})

	if (data) {
		store.dispatch(setSessionTransactions(data))
	}
}

export async function fetchBalanace() {
  const { data } = await fetcher({
    url: resources.ep.api.get.userBalance,
    method: 'get',
  })

  if (data) {
    store.dispatch(setSessionBalance(data))
  }
}

export async function fetchCoins() {
  const { data } = await fetcher({
    url: resources.ep.api.get.coins,
    method: 'get',
  })

  if (data) {
    store.dispatch(setApiCoins(data))
  }
}

export async function fetchCaptchaKey() {
  const { data } = await fetcher({
    url: resources.ep.api.get.captchaKey,
    method: 'get',
  })

  if (data) {
    store.dispatch(setApiCaptchaKey(data))
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

export default fetcher