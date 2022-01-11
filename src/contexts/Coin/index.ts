// region import
import { createContext } from 'react'

// utilities
import { Stage, ContextCoinState } from 'interfaces'
// endregion

const state: ContextCoinState = {
  name: undefined,
  id: undefined,
  logo: undefined,
}

const Coin = createContext<Stage<ContextCoinState>>({
  state,
  commitState: () => {},
})

export default Coin
