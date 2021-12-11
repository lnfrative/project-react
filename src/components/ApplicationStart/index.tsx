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

  useEffect(() => {
    request.get({ endpoint: resources.endpoints.get.user })
  }, [])

  if (!user) return null
  return props.children
}

export default ApplicationStart
