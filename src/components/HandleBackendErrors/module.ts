import { Stage } from 'interfaces'

interface State {
	message?: string
	status: 'open' | 'close' | 'snackbar'
	reloadRequired?: boolean,
}

export const initialState: State = {
	status: 'close',
}

export function closeSnackbar(stage: Stage<State>) {
	return () => {
		stage.commitState({ status: 'close', message: '', reloadRequired: false })
	}
}

export function reload() {
	window.location.reload()
}
