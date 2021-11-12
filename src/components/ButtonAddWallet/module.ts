// region import
import { MouseEventHandler } from 'react'

// utilities
import { Stage, ContextModalState } from '@/utilities/Interfaces'
// endregion

function onClick(stage: Stage<ContextModalState>): MouseEventHandler<HTMLDivElement> {
  return () => {
    stage.commitState({ status: 'open' })
  }
}

export {
  onClick,
}
