// region import
import { createContext } from 'react'

// utilities
import { Stage, ContextResponseState } from '@/utilities/Interfaces'
// endregion

const state: ContextResponseState = {
  store: undefined,
}

const Response = createContext<{ stage: Stage<ContextResponseState>, request: object }>({
  stage: {
    state,
    commitState: () => {},
  },
  request: {},
})

export default Response
