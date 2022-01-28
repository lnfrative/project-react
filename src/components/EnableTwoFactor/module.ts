import { ChangeEventHandler } from 'react'
import { Stage } from 'interfaces'

interface State {
	code?: string
}

const initialState: State = {
	code: undefined,
}

function onChange(stage: Stage<State>): ChangeEventHandler<HTMLInputElement> {
	return e => {
		const { value } = e.target
		if (value.length === 6) {
			stage.commitState({ code: value })
		}
	}
}

export { onChange, initialState }
