import { Stage, ContextBackend } from 'utilities/Interfaces'
import { resources } from 'utilities'

interface InitialState {
  termsAccepted: boolean,
}

function onCheckTerms(stage: Stage<InitialState>) {
  return (value) => {
    stage.commitState({ termsAccepted: value })
  }
}

function onSubmit(backend: ContextBackend, stage: Stage<InitialState>) {
  return (inputs) => {
    const { password, email, repeatedPassword } = inputs
    if (!stage.state.termsAccepted) return
    if (password?.hasError || email?.hasError || repeatedPassword?.hasError) return

    const { request } = backend
    request.post({
      endpoint: resources.endpoints.post.user,
      params: {
        email: email.value,
        password: password.value,
      },
      updateCache: true,
    })
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
