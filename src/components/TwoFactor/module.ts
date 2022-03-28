import { Stage } from 'interfaces'

interface State {
	dialog?: 'open' | 'close'
	code?: string
}

export const initialState: State = {
	dialog: 'close'
}

export function onCode(stage: Stage<State>) {
	return (code: string) => {
		if (code.length === 6) {
			stage.commitState({ code, dialog: 'close' })
		}
	}
}

export function handleClose(stage: Stage<State>) {
	return () => {
		stage.commitState({ dialog: 'close' })
	}
}
