// region import
import React, { useContext, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

// components
import { BackdropLoader } from 'components'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources, message, requestId } from 'utilities'
// endregion

function ConfirmEmail() {
  const backend = useContext(Backend)
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  const verifyURL = decodeURIComponent(params.get('verify_url') ?? '')
  const endpoint = verifyURL.split(`${process.env.REACT_APP_API}`)[1]
  const emailVerify = backend.response.get({ endpoint })
  const loading = backend.loading?.id === requestId('get', endpoint)

  useEffect(() => {
    if (endpoint) {
      backend.request.get({ endpoint })
      backend.request.get({ endpoint: resources.endpoints.get.user, updateCache: true })
    }
  }, [])

  if (!verifyURL) {
    return <Redirect to={resources.routes.home.base} />
  }
  if (emailVerify?.status === 200) {
    return <Redirect to={resources.routes.home.base} />
  }
  return <BackdropLoader open={loading} message={message({ id: 'VERIFYING_EMAIL' })} />
}

export default ConfirmEmail
