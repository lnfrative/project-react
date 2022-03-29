import { Stage } from 'interfaces'

interface State {
	dialog?: 'open' | 'close'
	captchaSolved?: boolean
}

export const initialState: State = {
	captchaSolved: false,
}

export function openCaptcha(stage: Stage<State>) {
	return () => {
		stage.commitState({ dialog: 'open' })
	}
}

export function handleClose(stage: Stage<State>) {
	return () => {
		stage.commitState({ dialog: 'close' })
	}
}

export function successCaptcha(stage: Stage<State>) {
	return () => {
		stage.commitState({ dialog: 'close', captchaSolved: true })
	}
}

export function submit(onSubmit: Function) {
	onSubmit()
}
