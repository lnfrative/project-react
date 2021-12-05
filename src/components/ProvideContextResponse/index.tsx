// region import
import React, { PropsWithChildren, useEffect } from 'react'

// hooks
import { useStage } from '@/hooks'

// contexts
import { Response } from '@/contexts'

// utilities
import { ContextResponseState } from '@/utilities/Interfaces'

// modules
import { genRequest, initialState } from './module'
// endregion

function ProvideContextResponse(props: PropsWithChildren<{}>) {
  const stage = useStage<ContextResponseState>(initialState)
  const request = genRequest(stage)

  return (
    <Response.Provider value={{ stage, request }}>
      {props.children}
    </Response.Provider>
  )
}

export default ProvideContextResponse
