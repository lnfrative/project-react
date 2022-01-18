import { Stage, SelectOption } from 'interfaces'
import { OnSelect } from 'types'

interface State {
	optionSelected?: SelectOption
}

const initialState: State = {
	optionSelected: undefined,
}

function genOnSelect(stage: Stage<State>): OnSelect {
	return ({ option }) => {
		stage.commitState({ optionSelected: option })
	}
}

export { initialState, genOnSelect }
