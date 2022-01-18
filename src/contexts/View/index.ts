// region import
import { createContext } from 'react'

// utilities
import { ContextViewState, Stage } from 'interfaces'
// endregion

const state: ContextViewState = {
	name: undefined,
}

const View = createContext<Stage<ContextViewState>>({
	state,
	commitState: () => {},
})

export default View
