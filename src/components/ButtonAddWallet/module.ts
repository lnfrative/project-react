// region import
import { MouseEventHandler } from 'react'

// utilities
import { Stage, ContextModalState } from 'utilities/Interfaces'
// endregion

export interface State {
  id: number,
}

function onClick(
  stage: Stage<State>,
  modalContextStage: Stage<ContextModalState>,
): MouseEventHandler<HTMLDivElement> {
  return () => {
    modalContextStage.commitState({ status: 'open', id: stage.state.id })
  }
}

export {
  onClick,
}
