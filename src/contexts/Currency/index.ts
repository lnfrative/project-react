// region import
import { createContext } from 'react'

// utilities
import { Stage, ContextCurrencyState } from 'interfaces'
// endregion

const Currency = createContext<Stage<ContextCurrencyState>>({
  state: { id: undefined },
  commitState: () => {},
})

export default Currency
