// region import
import { createContext } from 'react'

// utilities
import { Stage, ContextModalState } from 'interfaces'
// endregion

const state: ContextModalState = {
  status: 'close',
  id: undefined,
}

const Modal = createContext<Stage<ContextModalState>>({
  state,
  commitState: () => {},
})

export default Modal
