// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useStage } from '@/hooks'

// contexts
import { Backend } from '@/contexts'

// modules
import { genRequest, genResponse, initialState } from './module'
// endregion

function ProvideContextBackend(props: PropsWithChildren<{}>) {
  const stage = useStage(initialState)
  const request = genRequest(stage)
  const response = genResponse(stage)

  return (
    <Backend.Provider value={{ request, response }}>
      {props.children}
    </Backend.Provider>
  )
}

export default ProvideContextBackend
