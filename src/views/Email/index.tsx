// region import
import React, { useContext, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

// components
import { BackdropLoader } from 'components'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources, message } from 'utilities'
// endregion

const endemailverify = resources.endpoints.get.emailVerify
const { aliases } = resources.endpoints

function Email() {
  const { request, response } = useContext(Backend)
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  const userId = params.get('user_id') ?? ''
  const hash = params.get('user_id') ?? ''

  const endpoint = endemailverify.replace(aliases.userId, userId).replace(aliases.hash, hash)
  const emailVerify = response.get({ endpoint })

  useEffect(() => {
    if (userId && hash) {
      request.get({ endpoint })
    }
  }, [])

  if (!userId || !hash) {
    return <Redirect to={resources.routes.home.base} />
  }
  if (emailVerify?.status === 200) {
    return <Redirect to={resources.routes.home.base} />
  }
  if (emailVerify?.error || emailVerify?.status === 500) {
    // TODO: show a something went wrong page or something similar.
    return <Redirect to={resources.routes.home.base} />
  }
  return <BackdropLoader open={!emailVerify} message={message({ id: 'VERIFYING_EMAIL' })} />
}

export default Email
