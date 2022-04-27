import { store } from 'stores'
import { setSessionSecondFactor } from 'stores/SessionSlice'
import { Stage } from 'interfaces'

interface State {
	dialog?: 'open' | 'close'
	id?: number,
}

export const initialState: State = {
	dialog: 'close',
	id: 0,
}

export function onCode(stage: Stage<State>) {
	return (code: string) => {
		if (code.length === 6) {
			const id = Math.random()
			stage.commitState({ dialog: 'close', id })
			store.dispatch(setSessionSecondFactor({ id, code }))
		}
	}
}

export function handleClose(stage: Stage<State>) {
	return () => {
		stage.commitState({ dialog: 'close', id: 0 })
	}
}
