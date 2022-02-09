import { Stage, SelectOption, GroupSelectValueDecimalProps } from 'interfaces'
import { OnSelect } from 'types'

interface State {
	optionSelected?: SelectOption
}

const initialState: State = {
	optionSelected: undefined,
}

function genOnSelect(props: GroupSelectValueDecimalProps, stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		stage.commitState({ optionSelected: option })
		if (props.onSelect && !assemble) {
			props.onSelect({ option })
		}
	}
}

export { initialState, genOnSelect }
