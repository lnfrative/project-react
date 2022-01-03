import { Stage } from '@/utilities/Interfaces'

interface State {
  requestId?: string,
  method?: string,
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
