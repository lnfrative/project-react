// region import
import { createContext } from 'react'

// utilities
import { Stage, ContextCoinState } from '@/utilities/Interfaces'
// endregion

const state: ContextCoinState = {
  nameCoin: undefined,
}

const Coin = createContext<Stage<ContextCoinState>>({
  state,
  commitState: () => {},
})

export default Coin
