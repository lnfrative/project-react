// region import
import { createContext } from 'react'

// utilities
import { ContextViewState, Stage } from '@/utilities/Interfaces'
// endregion

const state: ContextViewState = {
  name: undefined,
}

const View = createContext<Stage<ContextViewState>>({
  state,
  commitState: () => {},
})

export default View
