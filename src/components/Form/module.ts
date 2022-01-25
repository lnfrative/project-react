import { ContextModalState, Stage } from 'interfaces'

interface State {
	id?: number
	captchaSolved?: boolean
}

const initialState: State = {
	id: undefined,
	captchaSolved: false,
}

function openCaptcha(modal: Stage<ContextModalState>, stage: Stage<State>) {
	return () => {
		const id = Math.random()
		stage.commitState({ id })
		modal.commitState({ id, status: 'open' })
	}
}

function successCaptcha(modal: Stage<ContextModalState>, stage: Stage<State>) {
	return () => {
		modal.commitState({ id: undefined, status: 'close' })
		stage.commitState({ id: undefined, captchaSolved: true })
	}
}

function submit(onSubmit: Function) {
	onSubmit()
}

export { openCaptcha, initialState, successCaptcha, submit }
