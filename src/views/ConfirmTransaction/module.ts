// interfaces
import { Stage } from 'interfaces'
// endregion

interface State {
  status: 'verified' | 'unverified'
}

export const initialState: State = {
  status: 'unverified'
}

export function handleVerificationSuccess(stage: Stage<State>) {
  return () => {
    stage.commitState({ status: 'verified' })
  }
}

export function toHome() {
  window.location.href = '/'
}