import { Stage } from '@/utilities/Interfaces'

interface InitialState {
  isOpen: boolean,
}

const initialState: InitialState = {
  isOpen: false,
}

function onClick(stage: Stage<InitialState>) {
  return () => {
    stage.commitState({ isOpen: true })
  }
}

export {
  initialState,
  onClick,
}
