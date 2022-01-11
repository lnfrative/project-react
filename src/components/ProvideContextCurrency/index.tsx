// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Currency } from 'contexts'

// modules
import { initialState } from './module'
// endregion

function ProvideContextCurrency(props: PropsWithChildren<{}>) {
  const stage = useStage(initialState)
  return (
    <Currency.Provider value={stage}>
      {props.children}
    </Currency.Provider>
  )
}

export default ProvideContextCurrency
