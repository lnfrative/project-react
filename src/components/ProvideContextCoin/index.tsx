// region import
import React from 'react'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { ContextCoinProps, ContextCoinState } from '@/utilities/Interfaces'

// contexts
import { Coin } from '@/contexts'
// endregion

const initialState: ContextCoinState = {
  nameCoin: undefined,
}

function ContextCoin(props: ContextCoinProps) {
  const stage = useCommitState<ContextCoinState>(initialState)

  return (
    <Coin.Provider value={stage}>
      {props.children}
    </Coin.Provider>
  )
}

export default ContextCoin
