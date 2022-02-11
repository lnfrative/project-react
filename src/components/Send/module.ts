import { SelectOption, Stage } from 'interfaces'
import { OnSelect } from 'types'

interface State {
	optionSelected?: SelectOption
}

const initialState: State = {
	optionSelected: undefined,
}

function selectSend(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

export { initialState, selectSend }
