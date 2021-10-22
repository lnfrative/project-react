import { Stage } from '@/utilities/Interfaces'

interface InitialState {
  termsAccepted: boolean,
}

function onCheckTerms(stage: Stage<InitialState>) {
  return (value) => {
    stage.commitState({ termsAccepted: value })
  }
}

const initialState: InitialState = {
  termsAccepted: false,
}

export {
  onCheckTerms,
  initialState,
}
