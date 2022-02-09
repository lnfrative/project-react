import { Stage, SelectOption, BackendBalance } from 'interfaces'
import { OnSelect } from 'types'

interface State {
	variation?: SelectOption
	currency?: SelectOption
	coin?: SelectOption
	backendBalance?: BackendBalance
}

const initialState: State = {
	variation: undefined,
	currency: undefined,
	coin: undefined,
}

function selectCoin(stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		if (!assemble) {
			stage.commitState({ coin: option })
		}
	}
}

function selectTime(stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		if (!assemble) {
			stage.commitState({ variation: option })
		}
	}
}

export { initialState, selectCoin, selectTime }
