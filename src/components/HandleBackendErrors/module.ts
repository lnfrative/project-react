import { Stage } from 'interfaces'
import { BackendRequestMethodsAllowed } from 'types'

interface State {
	requestId?: string
	method?: BackendRequestMethodsAllowed
	snackbar?: 'open' | 'close'
	error?: string
}

const initialState: State = {
	snackbar: 'close',
}

function closeSnackbar(stage: Stage<State>) {
	return () => {
		stage.commitState({ snackbar: 'close', error: undefined })
	}
}

export { initialState, closeSnackbar }
