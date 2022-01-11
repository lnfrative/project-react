import { Stage } from 'utilities/Interfaces'
import { BackendRequestMethodsAllowed } from 'utilities/Types'

interface State {
  requestId?: string,
  method?: BackendRequestMethodsAllowed,
  snackbar?: 'open' | 'close',
  error?: string,
}

const initialState: State = {
  snackbar: 'close',
}

function closeSnackbar(stage: Stage<State>) {
  return () => {
    stage.commitState({ snackbar: 'close', error: undefined })
  }
}

export {
  initialState,
  closeSnackbar,
}
