import { Stage, ContextModalState } from 'interfaces'

interface State {
	id?: number
}

const initialState: State = {
	id: undefined,
}

function enableTwoFactor(stage: Stage<State>, modal: Stage<ContextModalState>) {
	return () => {
		const id = Math.random()
		stage.commitState({ id })
		modal.commitState({ id, status: 'open' })
	}
}

export { initialState, enableTwoFactor }
