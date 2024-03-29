// types
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
  setSessionBalance,
  setSessionAddresses,
  setSessionNewAddress,
  setSessionTransactionPosted,
} from 'stores/SessionSlice'
import {
  setApiCoins,
  setApiCaptchaKey,
  setApiCaptchaValidate,
  setApiLoginAttempt,
  setApiError,
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

  const request = await fetch(url.toString(), options)
  const response = await request.json()

  if (request.status >= 400) {
    const error = response?.error
    const firstError = response?.error?.[0]
    
    store.dispatch(setApiError({
      code: request.status,
      ...(typeof firstError === 'string' ? { message: firstError } : {
        message: ''
      }),
      ...(typeof error === 'string' ? { message: error } : {}),
      data: error,
    }))
  }

  return response
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

export async function fetchLastTransactions(params: Record<string, any>) {  
  store.dispatch(setSessionTransactions({
    last: {
      status: 'loading',
      data: undefined,
    }
  }))

	const { data, success } = await fetcher({
		url: resources.ep.api.get.transactions,
		method: 'get',
    params,
	})

  store.dispatch(setSessionTransactions({
    last: {
      status: success ? 'loaded' : 'error',
      data,
    }
  }))
}

export async function fetchCoins() {
  store.dispatch(setApiCoins({
    status: 'loading',
    data: [],
  }))

  try {
    const { data } = await fetcher({
      url: resources.ep.api.get.coins,
      method: 'get',
    })
  
    store.dispatch(setApiCoins({
      status: 'loaded',
      data
    }))
  } catch (e) {
    store.dispatch(setApiCoins({
      status: 'error',
      data: [],
    }))
  }
}

export async function fetchAddresses(coinId: string) {
  store.dispatch(setSessionAddresses({
    [coinId]: {
      status: 'loading',
      data: [],
    }
  }))

  try {
    const { data } = await fetcher({
      method: 'get',
      url: resources.ep.api.get.addresses.replace(
        resources.ep.api.aliases.coinId,
        coinId,
      ),
    })

    store.dispatch(setSessionAddresses({
      [coinId]: {
        status: 'loaded',
        data,
      }
    }))
  } catch (e) {
    store.dispatch(setSessionAddresses({
      [coinId]: {
        status: 'error',
        data: [],
      }
    }))
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
  const state = store.getState()
  store.dispatch(setSessionUser({
    status: 'loading',
    data: state.session.user.data,
  }))

  const { data, error, success } = await fetcher({
    url: resources.ep.api.get.user,
    method: 'get',
  })

  store.dispatch(setSessionUser({
    status: success ? 'loaded' : 'error',
    data,
    error,
  }))
}

export async function fetchNewAddress(coinId: string) {
  store.dispatch(setSessionNewAddress({
    [coinId]: {
      status: 'loading',
      data: null,
    }
  }))
  
  const state = store.getState()
  const { data, success, error } = await fetcher({
    method: 'get',
    url: resources.ep.api.get.newaddress.replace(
      resources.ep.api.aliases.coinId,
      coinId,
    ),
    params: {
      captcha_hash: state.api.captchaValidate.data
    }
  })

  store.dispatch(setSessionNewAddress({
    [coinId]: {
      status: success ? 'loaded' : 'error',
      data,
      error,
    }
  }))

  if (data?.already_generated) {
    fetchAddresses(coinId)
    fetchWallets()
  }
}

export async function fetchCaptchaValidate() {
  const state = store.getState()
  const hash = state.api.captchaValidate.data
	store.dispatch(setApiCaptchaValidate({
		status: 'loading',
		data: hash,
	}))

  const { data } = await fetcher({
    url: resources.ep.api.post.captchaValidate,
    method: 'post',
    params: {
      'g-recaptcha-response': state.captcha.token,
    }
  })

  store.dispatch(setApiCaptchaValidate({
    status: 'loaded',
    data: data || hash,
  }))
}

export async function postTransaction(coinId: string, params: Record<string, string>) {
  store.dispatch(setSessionTransactionPosted({
    [coinId]: {
      status: 'loading',
      data: null,
      error: null,
    }
  }))

  const { error, data, success } = await fetcher({
    method: 'post',
    url: resources.ep.api.post.transactions,
    params,
  })

  store.dispatch(setSessionTransactionPosted({
    [coinId]: {
      status: success ? 'loaded' : 'error',
      data,
      error,
    }
  }))
}

export async function postLogin(params: Record<string, string>) {
  store.dispatch(setApiLoginAttempt({
    status: 'loading',
    data: undefined,
    error: undefined,
  }))

  const { error, data, success } = await fetcher({
    method: 'post',
    url: resources.ep.api.post.userCreateAccessToken,
    params,
  })

  store.dispatch(setApiLoginAttempt({
    status: success ? 'loaded' : 'error',
    data,
    error,
  }))
}

export async function fetchBalance(params?: Record<string, string>) {
	const id = Math.random()
  const preState = store.getState()
	store.dispatch(setSessionBalance({
    id,
    status: 'loading',
    data: preState.session.balance.data
  }))

	const { data, error, success } = await fetcher({
		url: resources.ep.api.get.userBalance,
		method: 'get',
		params
	})

  const posState = store.getState()
	const signed = id === posState.session.balance.id
	if (signed) {
		store.dispatch(setSessionBalance({
      status: success ? 'loaded' : 'error',
      data,
      error,
    }))
	}
}

export default fetcher