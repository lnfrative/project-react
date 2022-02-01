import { Stage, SelectOption } from 'interfaces'
import { OnSelect } from 'types'

interface State {
	variation?: SelectOption
	currency?: SelectOption
	coin?: SelectOption
}

const initialState: State = {
	variation: undefined,
	currency: undefined,
	coin: undefined,
}

function selectCoin(stage: Stage<State>): OnSelect {
	return ({ option }) => {
		stage.commitState({ coin: option })
	}
}

function selectTime(stage: Stage<State>): OnSelect {
	return ({ option }) => {
		stage.commitState({ variation: option })
	}
}

export { initialState, selectCoin, selectTime }
