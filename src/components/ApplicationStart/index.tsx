// region import
import { PropsWithChildren, useContext, useEffect } from 'react'

// utilities
import { resources } from '@/utilities'

// contexts
import { Backend } from '@/contexts'
// endregion

function ApplicationStart(props: PropsWithChildren<{}>) {
  const { request, response } = useContext(Backend)
  const user = response.get({ endpoint: resources.endpoints.get.user })
  const csrf = response.get({ endpoint: resources.endpoints.get.userCsrf })

  useEffect(() => {
    request.get({ endpoint: resources.endpoints.get.userCsrf })
    request.get({ endpoint: resources.endpoints.get.user })
  }, [])

  // TODO: Replace null with a preload.
  if (!user) return null
  if (!csrf?.success) return null
  return props.children
}

export default ApplicationStart
