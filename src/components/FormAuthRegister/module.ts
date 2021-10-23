import { Stage } from '@/utilities/Interfaces'

interface InitialState {
  termsAccepted: boolean,
}

function onCheckTerms(stage: Stage<InitialState>) {
  return (value) => {
    stage.commitState({ termsAccepted: value })
  }
}

function onSubmit(stage: Stage<InitialState>) {
  return (inputs) => {
    const { password, email, repeatedPassword } = inputs
    if (!stage.state.termsAccepted) return
    if (password?.hasError || email?.hasError || repeatedPassword?.hasError) return
    // TODO: Make the call to the registration endpoint.
    console.log(inputs)
  }
}

const initialState: InitialState = {
  termsAccepted: false,
}

export {
  onCheckTerms,
  initialState,
  onSubmit,
}
