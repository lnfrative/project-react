// region import
import { MouseEventHandler } from 'react'

// utilities
import { ContextModalState, Stage } from 'interfaces'
// endregion

function closeModal(stage: Stage<ContextModalState>): MouseEventHandler<HTMLButtonElement> {
  return () => {
    stage.commitState({ status: 'close', id: undefined })
  }
}

export {
  closeModal,
}
