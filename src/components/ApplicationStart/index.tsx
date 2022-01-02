// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// utilities
import { resources } from '@/utilities'

// components
import { PreloadPage } from '@/components'

// contexts
import { Backend } from '@/contexts'
// endregion

function ApplicationStart(props: PropsWithChildren<{}>) {
  const { request, response } = useContext(Backend)
  const user = response.get({ endpoint: resources.endpoints.get.user })
  const csrf = response.get({ endpoint: resources.endpoints.get.userCsrf })
  const coins = response.get({ endpoint: resources.endpoints.get.coins })

  useEffect(() => {
    request.get({ endpoint: resources.endpoints.get.userCsrf, label: 'LOADING_CSRF' })
    request.get({ endpoint: resources.endpoints.get.user, label: 'LOADING_SESSION' })
    request.get({ endpoint: resources.endpoints.get.coins, label: 'LOADING_COINS' })
  }, [])

  if (!user || !csrf?.success || !coins?.success) return <PreloadPage />
  return props.children
}

export default ApplicationStart
