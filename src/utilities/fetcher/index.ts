// interfaces
import { BackendRequestMethodsAllowed } from 'types'

// utilities
import { readCookie } from 'utilities'

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

export default fetcher