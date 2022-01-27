import { Stage, ContextModalState } from 'interfaces'

interface State {
	id?: number
	code?: string
}

const initialState: State = {
	id: undefined,
}

function onCode(stage: Stage<State>, modal: Stage<ContextModalState>) {
	return (code: string) => {
		if (code.length === 6) {
			stage.commitState({ code, id: undefined })
			modal.commitState({ status: 'close', id: undefined })
		}
	}
}

export { initialState, onCode }
